import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { CountryFilter } from "../components/CountryFilter";
import { ListableCountry } from "../components/ListableCountry";
import { toLowerCase, BACKEND_API_ROUTE } from "../util";

/**
 * Loop countries on user UI screens
 * @param {Array} countries fetched countries from App component to pass to Listable item
 * @param {Object} userInfo signed user
 @return {Component, Component} Listable Country filter
 */

export function CheckList({ countries, userInfo, ...props }) {
  const [myList, setMyList] = useState();
  const [regionCountries, setRegionCountries] = useState();

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
        goToDetail={props.goToDetail}
        add={handleCheckList}
        countries={myList ? myList : regionCountries && regionCountries}
      />
    </>
  );
}
