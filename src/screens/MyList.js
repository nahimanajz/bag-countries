import {useNavigate } from "react-router-dom";
import { Bin } from "../assets/Bin";
import { Check } from "../assets/Check";
import { SearchIcon } from "../assets/SearchIcon";

export function MyList({countries,children, changeScreenTitle}){
  const navigate = useNavigate()
    const goToDetail =() =>{
        navigate('/detail',{country:'country object'}) //works
        changeScreenTitle('Back')
    }
    return(
            <div className="flex-col">
                <div className="flex-wrap">
                    <div className="grid-col-2">
                        <span> <SearchIcon /> </span>                      
                      <input text="name" type="text"  placeholder="Search for A Country"/>
                    </div>
                    <div>
                        <select>
                            <option>Filter by region</option>
                            <option value="value">Africa</option>
                            <option>America</option>
                            <option>Europe</option>
                        </select>
                        
                    </div>
                </div>
                <div className="grid-col-3 m-top-32">
                    {/* Map countries from api */}
                        {countries.map(({name,capital, currencies, flag, population})=>(
                            <div className="grid-row-4" onClick={goToDetail} key={name}>
                                
                                    <div className="flag"
                                        style={{backgroundImage:`url(${flag})`}}
                                        alt="flag"/>
                                
                                <ul className="subtitle2"><strong>{name}</strong></ul>
                                
                                    <ul type="none">
                                        <li>Population:{population }</li>
                                        <li>Capital: {capital} </li>
                                        <li>Currency: {currencies && currencies[0].code}</li>
                                    </ul>
                                
                                <div style={{ display:'flex', justifyContent:'flex-end'}}>
                                   <span style={{height: '64px', width:'64px'}}><Bin /></span> 
                                   <span style={{height: '64px', width:'64px'}}><Check /></span>
                                    
                                   
                                </div>
                            </div>
                        ))}
                </div>
              
            </div>

    )
}

