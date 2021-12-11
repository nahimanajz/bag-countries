import { ListableCountry } from "../components/ListableCountry";

/**
 * - Visited countries list
 * @param {Function} goToDetail to navigate to selected country detailed informations
 * @param {Function} updateCountry  to updated selected country to visited list
 * @param {Function} deleteCountry  to remove country from visit list
 * @return {Component} Listable componets
 */

export default function Visited({countries, goToDetail, updateCountry, deleteCountry}){

    return(
            <ListableCountry
            countries={countries}
            goToDetail={goToDetail}
            updateCountry={updateCountry}
            deleteCountry={deleteCountry}
            checked={true}
        />
        )
}