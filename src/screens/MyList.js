import { useEffect, useState } from "react";
import { CountryFilter } from "../components/CountryFilter";
import { ListableCountry } from "../components/ListableCountry";
import { toLowerCase } from "../util";
/**
 * - Countries to Visit  
 * @param {Function} changeScreenTitle to change screen to appropriat visited screen
 * @param {Function} updateCountry  to updated selected country to visited list
 * @param {Function} deleteCountry  to remove country from visit list
 * @param {Array} countries fetched countries from App component to pass to Listable item
 * @param {*} JSX tags to append on my list screen
 */

export function MyList({
  countries,
  children,
  changeScreenTitle,
  updateCountry,
  deleteCountry,
  ...props
}) {
  const [myList, setMyList] = useState();
  const [regionCountries, setRegionCountries] = useState();
  const [countryItem, setCountryItem] = useState();
  
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
  useEffect(() => {
    setCountryItem(myList ? myList : regionCountries && regionCountries);
  }, [myList, regionCountries]);

  return (
    <div className="flex-col">
      <CountryFilter
        addCountryToList={addCountryToList}
        addCountryByRegion={addCountryByRegion}
      />
      <ListableCountry
        countries={countryItem}
        goToDetail={props.goToDetail}
        updateCountry={updateCountry}
        deleteCountry={deleteCountry}
      />
    </div>
  );
}
