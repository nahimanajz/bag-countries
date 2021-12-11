import React, { useCallback, useEffect, useState } from "react";

export const CountryDetail = React.memo(function CountryDetail({
  children,
  country,
  countries: allCountries,
}) {
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    currencies,
    languages,
    topLevelDomain,
    borders,
  } = country;
  const [neighbors, setNeighbors] = useState([]);

  const mountDetail = useCallback(async () => {
    const countryOnborder = [];
    Object.values(allCountries).map(
      ({ name, cioc, cca }) =>
        borders &&
        borders.find((border) => (border === cioc ? countryOnborder.push(name) : ""))
    );
    setNeighbors(countryOnborder);
  }, [allCountries, borders]);

  useEffect(() => {
    mountDetail();
  }, [mountDetail]);

  return (
    <div className="flex-col margin-top-64">
      <div className="mobile-menu">{children}</div>

      <div className="info" key={name}>
        <div className="grid-2 margin-top-120">
          <div className="w-100">
            <img
              className="flag-on-detail no-curve"
              src={flag}
              cols={7}
              height={'100%'}
              alt="flag"
            />
          </div>

          <div>
            <div className="title-dark">{name}</div>
            <div className="grid-2">
              <ul className="detail">
                <li>
                  <b>Native Name: </b> {nativeName}
                </li>
                <li>
                  <b>Population: </b> {population.toLocaleString()}
                </li>
                <li>
                  <b>Region: </b> {region}
                </li>
                <li>
                  <b>Sub Region: </b>
                  {subregion}
                </li>
                <li>
                  <b>Capital: </b>
                  {capital}
                </li>
              </ul>
              <ul className="detail">
                <li>
                  <b>Top Level Domain:</b> {topLevelDomain}
                </li>
                <li>
                  <b>Currencies:</b>{" "}
                  {currencies.map((currency) => currency.name)}
                </li>
                <li>
                  <b>Languages: </b>{" "}
                  {languages &&
                    Object.values(languages).map(({ name }) => (
                      <label key={name}> ,{name} </label>
                    ))}
                </li>
              </ul>
              <div className="container">
                <span>
                  <b>Border countries:</b>
                </span>
                {neighbors.map((neighbor) => (
                  <span className="neighbor" key={neighbor}>
                    {neighbor}
                  </span>
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
});
