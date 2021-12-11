
import { ListableCountry } from "../components/ListableCountry";

export default function VisitList({countries, goToDetail, updateCountry, deleteCountry}){

   return (
       <>
      <ListableCountry
        countries={countries}
        goToDetail={goToDetail}
        updateCountry={updateCountry}
        deleteCountry={deleteCountry}
        
      />
      </>
   )
}