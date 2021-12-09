import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { CountryFilter } from "../components/CountryFilter";
import { ListableCountry } from "../components/ListableCountry";
import { toLowerCase, BACKEND_API_ROUTE } from "../util";

export function CheckList({ countries, userInfo }) {
  const [myList, setMyList] = useState();
  const [regionCountries, setRegionCountries] = useState();
  const [chosenCountry, setChosenCountry] = useState();

  const addCountryToList = (e) => {
    const country = countries.filter(({ name }) =>
      toLowerCase(name).includes(toLowerCase(e.target.value))
    );
    setMyList(country);
    setRegionCountries();
  };
  const addCountryByRegion = async (e) => {
    const country = countries.filter(
      ({ region }) => toLowerCase(region) === toLowerCase(e.target.value)
    );
    setRegionCountries(country);
    setMyList(country);
  };
  //Todo: addTo list in backend
  const handleCheckList = async (name) => {
   
    const { data } = await axios.post(`${BACKEND_API_ROUTE}/add/country`, {
      name,
      user: userInfo._id,
    });
    if (data) {
      toast(data.message);
    } else {
      toast("Something is wrong");
    }
  };

  return (
    <>
      <ToastContainer />
      <CountryFilter
        addCountryToList={addCountryToList}
        addCountryByRegion={addCountryByRegion}
      />
      <ListableCountry
        add={handleCheckList}
        countries={myList ? myList : regionCountries && regionCountries}
      />
    </>
  );
}
