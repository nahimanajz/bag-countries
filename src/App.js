import React, {useCallback, useEffect, useState} from 'react'
import {CountryDetail} from './components/CountryDetail'
import { MobileMenu } from './components/MobileMenu'
import { DesktopNav } from './components/DesktopNav'
import SideMenus from './components/SideMenus'
import { Routes, Route} from "react-router-dom";
import { MyList } from './screens/MyList'

const axios = require('axios');
 

function App() {  
  const [darkMode, setDarkMode] = useState(false)
  const[countries, setCountries] = useState([]);
  const[leftNavTitle, setNavTitle] = useState();

  const toggleMode =()=> setDarkMode(!darkMode)

   const changeScreenTitle = useCallback(
    (title) =>    
        setNavTitle(title)
    ,[]
  )
  const fetchData = useCallback(
    async() =>{
      const { data } =  await axios.get(`https://restcountries.com/v2/all`)
        setCountries(Object.values(data))
        setNavTitle('My List')
    },[]
  )

  useEffect(()=>{
    fetchData()
  }, [fetchData])
    
  console.log(`${JSON.stringify(countries)}`)
  return (
      <div className="app">
        <div className="sidebar">
           <SideMenus />
        </div>
        <main className="margin-32 ">   
          <DesktopNav  toggleMode={toggleMode} 
                      darkMode={darkMode} 
                      title={countries&&leftNavTitle}
                      changeScreenTitle={changeScreenTitle}
                      />          
             {/* <CountryDetail>
                <MobileMenu toggleMode={toggleMode} darkMode={darkMode}/> 
            </CountryDetail> */}
            <Routes>             
            <Route path="/my-list" element={<MyList changeScreenTitle={changeScreenTitle} countries={countries&&countries}/>} />
            <Route path="/detail" element={<CountryDetail />}>
              
            </Route>
          </Routes>
           
          </main>
        
       
        
      </div>
    );
  
}

export default App;
