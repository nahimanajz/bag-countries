import React, { useCallback, useEffect, useState } from "react";
import { CountryDetail } from "./components/CountryDetail";
import { MobileMenu } from "./components/MobileMenu";
import { DesktopNav } from "./components/DesktopNav";
import SideMenus from "./components/SideMenus";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MyList } from "./screens/MyList";
import Home from "./screens/Home";
import { CheckList } from "./screens/CheckList";
import VisitList from "./screens/VisitList";
import { BACKEND_API_ROUTE, toLowerCase } from "./util";
import { toast } from "react-toastify";
import Visited from "./screens/Visited";
import { filterTOvisit } from "./util/filterToVisit";

const axios = require("axios");

const App = React.memo(function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [leftNavTitle, setNavTitle] = useState("My List");
  const [showDashboard, setShowDashboard] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [planning, setPlanning] = useState([]);
  const [visited, setVisited] = useState([]);
  const [addedCountries, setAddedCountries] = useState([]);
  const [chosenCountry, setChosenCountry] = useState({});
  const navigate = useNavigate();

  const toggleMode = () => setDarkMode(!darkMode);

  const changeScreenTitle = useCallback((title) => setNavTitle(title), []);
  const fetchData = useCallback(async () => {
    const { data } = await axios.get(`https://restcountries.com/v2/all`);
    setCountries(Object.values(data));
  }, []);
  const listAddedCountries = useCallback(async () => {
    const { data } = await axios.get(`${BACKEND_API_ROUTE}/countries`);
    if (data.status === 200) {
      const filtered =
        userInfo &&
        data.countries &&
        data.countries.filter((country) =>
          country.user.find((u) => u === userInfo._id)
        );
      const allInfo =
        filtered &&
        countries.filter((c) =>
          filtered.find(({ name }) => toLowerCase(c.name) === toLowerCase(name))
        );
      setPlanning(filterTOvisit(filtered, countries, "planning"));
      setVisited(filterTOvisit(filtered, countries, "visited"));
      setAddedCountries(allInfo);
      setNavTitle("My List");
    }
  }, [countries, userInfo]);

  const updateCountry = async (name) => {
    const { data } = await axios.put(`${BACKEND_API_ROUTE}/update/country`, {
      name,
    });
    if (data.status === 201) {
      toast(data.message);
      listAddedCountries();
    } else {
      toast("something is wrong");
    }
  };
  const deleteCountry = async (name) => {
    const { data } = await axios.put(`${BACKEND_API_ROUTE}/delete/country`, {
      name,
    });
    if (data.status === 200) {
      toast(data.message);
      listAddedCountries();
    } else {
      toast("something is wrong");
    }
  };
  const goToDetail = (country) => {
    setChosenCountry(country);
    navigate("/detail"); //works
    changeScreenTitle("Back");
  };
  useEffect(() => {
    fetchData();
    listAddedCountries();
  }, [fetchData, listAddedCountries]);

  if (!showDashboard) {
    return <Home setShowDashboard={setShowDashboard} userInfo={setUserInfo} />;
  }
  const user = userInfo && userInfo;
  const darkModeStyle = darkMode
    ? { background: `rgb(32,33,36)`, color: "tomato" }
    : {};

  return (
    <>
    <MobileMenu toggleMode={toggleMode} darkMode={darkMode}/> 
     <div className="app">

      <SideMenus darkMode={darkMode} style={darkModeStyle} /> 
      <main className={"padding-32"} style={darkModeStyle}>
        <DesktopNav
          toggleMode={toggleMode}
          darkMode={darkMode}
          title={countries && leftNavTitle}
          changeScreenTitle={changeScreenTitle}
          userInfo={user}
          signout={setUserInfo}
          showDashboard={setShowDashboard}
        />
        <Routes>
          <Route
            path="/my-list"
            element={
              <MyList
                changeScreenTitle={changeScreenTitle}
                countries={addedCountries && addedCountries}
                updateCountry={updateCountry}
                deleteCountry={deleteCountry}
                goToDetail={goToDetail}
              />
            }
          />
          <Route
            path="/detail"
            element={
              <CountryDetail
                country={chosenCountry && chosenCountry}
                countries={countries && countries}
                changeScreenTitle={changeScreenTitle}
              />
            }
          />
          <Route
            path="/checkList"
            params={"param detetected"}
            element={
              <CheckList
                countries={countries && countries}
                userInfo={user}
                goToDetail={goToDetail}
              />
            }
          />
          <Route
            path="/visited"
            element={
              <Visited
                changeScreenTitle={changeScreenTitle}
                goToDetail={goToDetail}
                countries={visited && visited}
                updateCountry={updateCountry}
                deleteCountry={deleteCountry}
              />
            }
          />
          <Route
            path="/toVisit"
            element={
              <VisitList
                goToDetail={goToDetail}
                changeScreenTitle={changeScreenTitle}
                countries={planning && planning}
                updateCountry={updateCountry}
                deleteCountry={deleteCountry}
              />
            }
          />
        </Routes>
      </main>
    </div>
    </>
  );
})

export default App;
