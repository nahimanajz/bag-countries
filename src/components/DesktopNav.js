import React, {useCallback} from 'react'
import {useNavigate } from "react-router-dom";

const { ArrowLeft } = require("../assets/ArrowLeft");
const { Bell } = require("../assets/Bell");
const { ToggleLeft } = require("../assets/ToggleLeft");
const { ToggleRight } = require("../assets/ToggleRight");

/**
 * Navigation for desktop 
 * @param {bool} props.toggleMode toogle from light mode to dark mode and vice versa
 * @param {String} title set title for nav bar once screen is changed
 * @param {Object} userInfo it is destructured to show username of logged in user 
 * @param {function} props.handleSignout to terminate user session
 */
export function DesktopNav({toggleMode, darkMode, title,changeScreenTitle, userInfo,...props}){
    const navigate = useNavigate()
    const goBack = useCallback(
      () => {   
          navigate('/my-list')
          changeScreenTitle('My List')
      },[changeScreenTitle, navigate]
    ) 
    const handleSignout=()=>{
      props.signout()
      props.showDashboard(false)
    }

    return(
        <div className="flex-wrap bottom-margin">
        <div className="flex desktop-back">              
            {title !== 'My List'&& (
              <span onClick={goBack}>
                  <ArrowLeft />
              </span>
            )}
        <span className="toggle">{title}</span>             
        </div>
        <div className="flex-end desktop">
          <div className="flex">
               <span> {darkMode?'Light Mode':'Dark Mode'}</span>                  
                <span onClick={toggleMode} className="toggle"> {darkMode ?<ToggleRight />:<ToggleLeft /> }</span>
          <div className="circle"><Bell color={'#fff'} /> </div>
            <div><b className="text-light">hey</b>, {userInfo&&userInfo.name}</div>
          <div onClick={handleSignout}>
              <img className="icon"  src="https://data.whicdn.com/images/334652102/original.jpg" alt="user"></img>
          </div>

        </div>
        </div>            
      </div>
    )
}