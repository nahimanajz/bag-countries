import { useEffect, useState } from "react";
import { CountryFilter } from "../components/CountryFilter";
import { ListableCountry } from "../components/ListableCountry";
import { toLowerCase } from "../util";

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
