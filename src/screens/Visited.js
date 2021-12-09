import { ListableCountry } from "../components/ListableCountry";

export default function Visited({countries, goToDetail, updateCountry, deleteCountry}){
    // TODO: fetch countries from backend and display to visit list
    // console.log(JSON.stringify(countryItem))

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