import { useEffect, useState } from "react";

export function CountryDetail({children, country, countries}){
    const [neigbors, setNeighbors] = useState();
    const {flag, name, nativeName,population, region, subregion, capital, currencies,
        languages, topLevelDomain, borders
       } = country;
    // useEffect(()=>{
    //    const borderCountries= borders && borders.map(border=>countries.find(({name, cioc, cca3})=> cioc === border&& name))
    //     if(borderCountries){
    //         setNeighbors(borderCountries)
    //     }
    // },[borders, countries])
   // const borderInshort = borders.map(border =>border);  
// return (<div>
//     {name} {nativeName}{population}{region}{subregion},
//      {capital},  {currencies.map(currency => currency.name)}, 
//      {/* {languages && Object.values(languages).map(({name})=> <label key={name}> ,{name}  </label>)} */}
//      {topLevelDomain}
//     {/* {neigbors && Object.values(neigbors).map(code=><div key={code.name}>{code.name}</div>)} */}
//     {Object.values(neigbors)}
// </div>
//)
return( 
    <div className="flex-col">
        <div className ="mobile-menu">
             {children} 
        </div>
        
        <div className="info" key={name}>
            <div className="grid-2 margin-top-120">            
                <div className="flag"                    
                style={{backgroundImage:`url(${flag})`}}
                alt="flag">         
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
                    <span className="neighbor">France</span> 
                    <span className="neighbor">Germany</span> <span className="neighbor">Netherlands</span>
                </div>
                </div>
                
            </div>
        </div>
    </div>
    
</div>
    )
}