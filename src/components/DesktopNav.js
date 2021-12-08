import React, {useCallback} from 'react'
import {useNavigate } from "react-router-dom";

const { ArrowLeft } = require("../assets/ArrowLeft");
const { Bell } = require("../assets/Bell");
const { ToggleLeft } = require("../assets/ToggleLeft");
const { ToggleRight } = require("../assets/ToggleRight");


export function DesktopNav({toggleMode, darkMode, title,changeScreenTitle}){
    const navigate = useNavigate()
    const goBack = useCallback(
      () => {   
          navigate('/my-list')
          changeScreenTitle('My List')
      },[changeScreenTitle, navigate]
    ) 
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
                <button onClick={toggleMode} className="toggle"> {darkMode ?<ToggleRight />:<ToggleLeft /> }</button>
          <div className="circle"><Bell color={'#fff'} /> </div>
          <div><b className="text-light">hey</b>, Jane</div>
          <div>
              <img className="icon"  src="https://data.whicdn.com/images/334652102/original.jpg" alt="user"></img>
          </div>

        </div>
        </div>            
      </div>
    )
}