import { Bin } from "../assets/Bin";
import { Check } from "../assets/Check";
import { SearchIcon } from "../assets/SearchIcon";

export function MyList({children}){
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
                <div className="grid-col-3">
                    {/* Map countries from api */}
                    <div className="grid-row-4">
                        <div>
                            <img className="flag"
                                 src="https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg" 
                                alt="flag"></img>
                            </div>
                        <div className="subtitle2 p-h">Country name</div>
                        <div className="p-h">
                            <ul>
                                <li>Population:{   12.9  }</li>
                                <li>Capital: {'kGALI'} </li>
                                <li>Currency: {'Rwf'}</li>
                            </ul>
                        </div>
                        <div className="flex-end p-h">
                            <span><Bin /></span>
                            <span><Check /></span>
                        </div>
                    </div>
                    <div className="grid-row-4">
                        <div>
                            <img className="flag"
                                 src="https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg" 
                                alt="flag"></img>
                            </div>
                        <div className="subtitle2 p-h">Country name</div>
                        <div className="p-h">
                            <ul>
                                <li>Population:{   12.9  }</li>
                                <li>Capital: {'kGALI'} </li>
                                <li>Currency: {'Rwf'}</li>
                            </ul>
                        </div>
                        <div className="flex-end p-h">
                            <span><Bin /></span>
                            <span><Check /></span>
                        </div>
                    </div>
                    <div className="grid-row-4">
                        <div>
                            <img className="flag"
                                 src="https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg" 
                                alt="flag"></img>
                            </div>
                        <div className="subtitle2 p-h">Country name</div>
                        <div className="p-h">
                            <ul>
                                <li>Population:{   12.9  }</li>
                                <li>Capital: {'kGALI'} </li>
                                <li>Currency: {'Rwf'}</li>
                            </ul>
                        </div>
                        <div className="flex-end p-h">
                            <span><Bin /></span>
                            <span><Check /></span>
                        </div>
                    </div>
                    
                </div>
                <div> list of countrie</div>
            </div>

    )
}