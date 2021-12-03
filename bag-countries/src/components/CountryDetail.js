export function CountryDetail({children}){
    
    return(<div className="grid-2 margin-top-120">
    <div>            
         <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png" alt="Country flag"></img>
    </div>
    <div className="flex-col">
      <div className="title-dark">Belgium</div>
       <div className="grid-2">
         <ul>
           <li><b>Native Name:  </b> Belgie</li>
             <li><b>Population:  </b> 111.897.123</li>
             <li><b>Region:  </b> Europe</li>
             <li><b>Sub Region: </b>Western Europe</li>
             <li><b>Capital: </b>Brussels</li>
         </ul>
         <ul>
           <li><b>Top Level Domain:</b> .be</li>
             <li><b>Currencies:</b> 111.897.123</li>
             <li><b>Languages</b> Ducth, french, German</li> {/** TODO: map list of languages */}
         </ul>
       </div>
       <div className="container">
        <span><b>Border countries:</b></span>
         <span className="neighbor">France</span> 
         <span className="neighbor">Germany</span> <span className="neighbor">Netherlands</span>
      </div>
    </div>
    
  </div>

    )
}