
import { SearchIcon } from "../assets/SearchIcon";
/**
 * -Filter countries to show on UI
 * @param {Function} props.addCountryByRegion filter country based on continent to show  UI
  * @param {Function} props.addCountryToList to filter country based on typed characters
 */
export function CountryFilter(props){

    return(
        <div className="flex-wrap">
                    <div className="grid-col-2">
                        <span style={searchIcon}> <SearchIcon /> </span>                      
                      <input text="name" type="text"placeholder="Search for A Country" onChange={props.addCountryToList}/>
                    </div>
                    <div>
                        <select onChange={props.addCountryByRegion}>
                            <option>Filter by region</option>
                            <option>Africa</option>
                            <option value="Americas">America</option>
                            <option>Europe</option>
                            <option>Asia</option>
                            <option>Oceania</option>
                        </select>
                        
                    </div>
                </div>
    )
}

const searchIcon ={alignSelf: 'center', width: '24px'}