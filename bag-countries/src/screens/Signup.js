import {UserIcon} from'../assets/UserIcon'
import {Phone} from'../assets/Phone'
import {DOBIcon} from'../assets/DOBIcon'
import {Lock} from'../assets/Lock'
import {Mail} from'../assets/Mail'
import {Location} from'../assets/Location'
export function Signup({children}){
    
    return(
        <div className="cover">
            <form action="/" method="POST" className="modal">
		    <div className="grid-col-2">
                    <span><UserIcon /></span>
                      <div>
                            <input type="text" placeholder="Full Names" name="fullNames" />
                            <small>LmORARfEVT1iyjwN*</small>
                       </div>

                    </div>
                   <div className="grid-col-2">                       
                        <span><Mail /></span>
                        <div>
                            <input type="email" placeholder="Email" name="email" required className="input"/>
                            <small>LmORARfEVT1iyjwN*</small>
                         </div>

                     </div>
                     <div className="grid-col-2">
                        <span><Phone /></span>
                        <div>
                             <input type="phone" placeholder="Phone" name="phone"/>
                             <small>LmORARfEVT1iyjwN*</small>
                        </div>
                     </div>
                     <div className="grid-col-2">
                        <span><DOBIcon /></span>
                        <div>
                             <input type="date" placeholder="Date Of Birth" name="dob"/>
                             <small>LmORARfEVT1iyjwN*</small>
                        </div>
                     </div>
                     <div className="grid-col-2">
                        <span><Location /></span>
                        <div>
                            <input type="text" placeholder="Country" name="country"/>
                             <small>LmORARfEVT1iyjwN*</small>
                        </div>
                     </div>
                     <div> 
                         <input className="btn" type="submit" value="Signup" />
                     </div>
                   
                </form>
        </div>
       
    )
}