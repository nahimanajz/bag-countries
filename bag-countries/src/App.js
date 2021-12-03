import React, {useState} from 'react'
import { ArrowLeft } from './assets/ArrowLeft'
import { Bell } from './assets/Bell'
import { ToggleRight } from './assets/ToggleRight'
import { ToggleLeft } from './assets/ToggleLeft'
import {CountryDetail} from './components/CountryDetail'
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
          <CountryDetail />
          </main>
        
       
        
      </div>
    );
  
}

export default App;
