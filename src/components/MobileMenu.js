import { ArrowLeft } from "../assets/ArrowLeft";

const { Moon } = require("../assets/Moon");
const { Sun } = require("../assets/Sun");

export function MobileMenu({toggleMode, darkMode}){
    return(
        <div className="mobile">
            
            <div className="model-header mobile"> 
                <span className="title">Where in the world?</span>
                
                <span className="flex-wrap">
                    <span onClick={toggleMode} className="margin-right-32"> {!darkMode ?<Sun/>:<Moon /> }</span>
                <label>{!darkMode? 'Light Mode': 'Dark Mode'}</label> 
                </span>
            </div>
             
            <div className="start">              
                <ArrowLeft />
                <span>Back</span> 
            </div>
        </div>
    )
}