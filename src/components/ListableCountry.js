import { ToastContainer } from "react-toastify";
import { Add } from "../assets/Add";
import { Bin } from "../assets/Bin";
import { Check } from "../assets/Check";
/**
 * Loop countries on user UI screens
 * @param {Array} countries fetched countries from api to loop on UI
 * @param {Function} goToDetail used to navigate to chosen country detail
 * @param {Function} props.deleteCountry to remove country from visit list
 * @param {Function} props.update to update country as visited 
 * @param {Function} props.add to add country to visit list
 */
export function ListableCountry({ countries, goToDetail, ...props }) {
  return (
    <>
      <ToastContainer />
      <div className="grid-col-3 m-top-32">
        {countries &&
          countries.map((country) => {
            const { name, capital, currencies, flag, population } = country;
            return (
              <div className="grid-row-4" key={name}>
                <img
                  className="flag onlist"
                  onClick={() => goToDetail(country)}                  
                  alt="flag"
                  src={flag}
                />

                <ul className="subtitle2">
                  <strong>{name}</strong>
                </ul>

                <ul type="none">
                  <li>Population:{population}</li>
                  <li>Capital: {capital} </li>
                  <li>Currency: {currencies && currencies[0].code}</li>
                </ul>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  {props.add ? (
                    <span style={iconStyle} onClick={() => props.add(name)}>
                      <Add />
                    </span>
                  ) : (
                    <>
                      <span
                        style={iconStyle}
                        onClick={() => props.deleteCountry(name)}
                      >
                        <Bin />
                      </span>
                      <span
                        style={iconStyle}
                        onClick={() => props.updateCountry(name)}
                      >
                        <Check checked={props.checked && props.checked} />
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
const iconStyle = { height: "64px", width: "64px" };
