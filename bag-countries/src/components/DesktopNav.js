const { ArrowLeft } = require("../assets/ArrowLeft");
const { Bell } = require("../assets/Bell");
const { ToggleLeft } = require("../assets/ToggleLeft");
const { ToggleRight } = require("../assets/ToggleRight");

export function DesktopNav({toggleMode, darkMode}){
    return(
        <navbar className="flex-wrap">
        <div className="flex desktop-back">              
            <ArrowLeft />
           <span className="toggle">Back</span>             
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
      </navbar>
    )
}