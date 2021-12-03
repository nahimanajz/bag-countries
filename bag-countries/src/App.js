import React, {useState} from 'react'
import {CountryDetail} from './components/CountryDetail'
import { MobileMenu } from './components/MobileMenu'
import { DesktopNav } from './components/DesktopNav'
import SideMenus from './components/SideMenus'
import { Routes, Route, Link,  Outlet} from "react-router-dom";
import { MyList } from './screens/MyList'
 

function App() {  
  const [darkMode, setDarkMode] = useState(false)
  const toggleMode =()=> setDarkMode(!darkMode)
  return (
      <div className="app">
        <sidebar className="sidebar">
           <SideMenus />
        </sidebar>
        <main className="margin-32">   
          <DesktopNav  toggleMode={toggleMode} darkMode={darkMode}/>          
             {/* <CountryDetail>
                <MobileMenu toggleMode={toggleMode} darkMode={darkMode}/> 
            </CountryDetail> */}
            <Routes>
            <Route path="/my-list" element={<MyList />} />
            <Route path="/my-list" element={<MyList />}>
              
            </Route>
          </Routes>
           
          </main>
        
       
        
      </div>
    );
  
}

export default App;
