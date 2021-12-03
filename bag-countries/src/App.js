import React, {useState} from 'react'
import { ArrowLeft } from './assets/ArrowLeft'
import { Bell } from './assets/Bell'
import { ToggleRight } from './assets/ToggleRight'
import { ToggleLeft } from './assets/ToggleLeft'
import { Sun } from './assets/Sun'
import { Moon } from './assets/Moon'
 

function App() {  
  const [darkMode, setDarkMode] = useState(false)
  const toggleMode =()=>setDarkMode(!darkMode)
  return (
      <div className="app">
        <sidebar className="sidebar">
           {/*  */}
           <ul className="side-menu padding-32">
             <li className="menu-item"> CHECKLIST</li>
             <li className="menu-item"> Visited</li>
             <li className="menu-item"> TO VISITE</li>
           </ul>
        </sidebar>
        <main className="margin-32">
        
          <navbar className="flex-wrap">
            <div className="flex mobile">              
                <ArrowLeft />
               <span className="toggle">Back</span>             
            </div>
            <div className="flex-end desktop">
              <div className="flex">
                  <span> Dark mode</span>                  
                    <button onClick={toggleMode} className="toggle"> {darkMode ?<ToggleRight />:<ToggleLeft /> }</button>
              <div className="circle"><Bell color={'#fff'} /> </div>
              <div><b className="text-light">hey</b>, Jane</div>
              <div className="circle" style={{backgroundImage:'url(./assets/man.png)'}}> </div>
            </div>
            </div>
            
          </navbar>
           <div className="grid-2 margin-top-120">
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
        </main>
        
       
        
      </div>
    );
  
}

export default App;
