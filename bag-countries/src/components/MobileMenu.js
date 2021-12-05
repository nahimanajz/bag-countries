import { ArrowLeft } from "../assets/ArrowLeft";

const { Moon } = require("../assets/Moon");
const { Sun } = require("../assets/Sun");

export function MobileMenu({toggleMode, darkMode}){
//TODO: fix responsiveness 
    return(<>
            <div className="mobile-nav mobile" style={{width: `${360}px`}}>
                <div>
                     <span className="subtitle">Where in the world?</span>
                </div>
                <div>                                   
                <button onClick={toggleMode} className="margin-right-32"> {!darkMode ?<Sun/>:<Moon /> }</button>
                {!darkMode? 'Light Mode': 'Dark Mode'}
                </div>
            </div>
            <div className="start mobile">              
                <ArrowLeft />
                <span>Back</span> 
            </div>
        </>
    )
}