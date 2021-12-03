import React, {useState} from 'react'
import { ArrowLeft } from './assets/ArrowLeft'
import { Bell } from './assets/Bell'
import { ToggleRight } from './assets/ToggleRight'
import { ToggleLeft } from './assets/ToggleLeft'
import {CountryDetail} from './components/CountryDetail'
import { Sun } from './assets/Sun'
import { Moon } from './assets/Moon'
import { MobileMenu } from './components/MobileMenu'
import { DesktopNav } from './components/DesktopNav'
 

function App() {  
  const [darkMode, setDarkMode] = useState(false)
  const toggleMode =()=> setDarkMode(!darkMode)
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
          <DesktopNav  toggleMode={toggleMode} darkMode={darkMode}/>
          
             <CountryDetail>
                  <MobileMenu toggleMode={toggleMode} darkMode={darkMode}/> 
            </CountryDetail>
           
          </main>
        
       
        
      </div>
    );
  
}

export default App;
