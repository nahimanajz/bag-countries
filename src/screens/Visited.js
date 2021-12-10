import { ListableCountry } from "../components/ListableCountry";

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