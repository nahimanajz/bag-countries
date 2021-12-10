import { useEffect, useState } from "react";

export function CountryDetail({children, country, countries:allCountries}){
    const {flag, name, nativeName,population, region, subregion, capital, currencies,
        languages, topLevelDomain, borders
       } = country;
       const [neighbors, setNeighbors]= useState([]);
       useEffect(() => {  
           const co= []           
        Object.values(allCountries).map(({name, cioc, cca})=>                  
        borders && borders.find(border =>border === cioc?   
           co.push(name)             
        :''
        )
    )   
        setNeighbors(co)
      }, [neighbors]);
       
return( 
    <div className="flex-col">
        <div className ="mobile-menu">
             {children} 
        </div>
        
        <div className="info" key={name}>
            <div className="grid-2 margin-top-120">
                <div className="w-100">
                    <img className="flag"                 
                    src={flag}
                    alt="flag" />  
                </div>            
                       
               
                <div className="flex-col">
                <div className="title-dark">{name}</div>
                <div className="grid-2">
                    <ul>
                        <li><b>Native Name:  </b> {nativeName}</li>
                        <li><b>Population:  </b> {population.toLocaleString()}</li>
                        <li><b>Region:  </b> {region}</li>
                        <li><b>Sub Region: </b>{subregion}</li>
                        <li><b>Capital: </b>{capital}</li>
                    </ul>
                    <ul>
                         <li><b>Top Level Domain:</b> {topLevelDomain}</li>
                        <li><b>Currencies:</b> {currencies.map(currency => currency.name)}</li>
                        <li><b>Languages: </b> {languages && Object.values(languages).map(({name})=> <label key={name}> ,{name}  </label>)}</li> 
                </ul>
                <div className="container">
                <span><b>Border countries:</b></span>
                {
                  neighbors.map(neighbor=> <span className="neighbor">{neighbor}</span>) 
               }       

                </div>
                </div>
                
            </div>
        </div>
    </div>
    
</div>
    )
}