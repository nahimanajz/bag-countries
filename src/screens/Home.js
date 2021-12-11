import { useState } from "react";
import Signin  from './Signin';
import { Signup } from "./Signup";

/**
 * Toggle Login and Signup screens
 * @param {Function} props.setShowDashoard to show main dashboard later on logging in or successfull signup
 */

export default function Home(props) {
    const[showLogin, setShowLogin] = useState(false);
    const switchScreens = ()=> setShowLogin(!showLogin);

    return(<>
    
        <div className="cover">
            <div className="model-header">
                <div className={showLogin?'inactive':'active'} onClick={switchScreens}>Signup</div>
                <div className={showLogin?'active':'inactive'} onClick={switchScreens}>Signin</div>
            </div>
            {showLogin? <Signin showDashboard={props.setShowDashboard} userInfo={props.userInfo}/>:<Signup showDashboard={props.setShowDashboard} userInfo={props.userInfo}/> }
             
        </div>
        
        </>
    )
}
