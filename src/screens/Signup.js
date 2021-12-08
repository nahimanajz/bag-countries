import { useCallback, useState } from 'react'
import {useNavigate } from "react-router-dom";

import {UserIcon} from'../assets/UserIcon'
import {Phone} from'../assets/Phone'
import {DOBIcon} from'../assets/DOBIcon'
import {Lock} from'../assets/Lock'
import {Mail} from'../assets/Mail'
import {Location} from'../assets/Location'
import axios from 'axios'
import { BACKEND_API_ROUTE } from '../util'
export function Signup({children}){
   const[state, setState] = useState({})
   const[loggedUser,setLoggedUser] = useState()
   const navigate = useNavigate();
   //TODO: SIGNUP THEN LOGIN IMMEDIATELY
   const handleChange = useCallback(
      (e) =>{
         state && setState({...state, [e.target.name]: e.target.value})  
         console.log(JSON.stringify(state))
      }

      ,[])
   
   const handleSignup=async ()=>{

   /* const{ data}  = await axios.post(`${BACKEND_API_ROUTE}/signup`,{state})
    if(!data.error){  //check if registration is ok
       handleSignin(state.emal, state.password)
    }else{
      setLoggedUser(data.newUser)
    }
    */
   }
   const handleSignin = async (email, password)=>{
   //  const{ data}  = await axios.post(`${BACKEND_API_ROUTE}/signin`,{email, password})
   //  if(data){   
   //    navigate('/my-list',{loggedUser})
   // }
   }
    return(
            <form className="modal" onSubmit={handleSignup}>
		    <div className="grid-col-2">
                    <span><UserIcon /></span>
                      <div>
                            <input type="text" onChange={handleChange} placeholder="Full Names" name="fullNames" required />
                            {/*1===1&&<small>LmORARfEVT1iyjwN*</small> */}
                       </div>

                    </div>
                   <div className="grid-col-2">                       
                        <span><Mail /></span>
                        <div>
                            <input type="email" onChange={handleChange} placeholder="Email" name="email" required className="input"/>
                            {/*1===1&&<small>LmORARfEVT1iyjwN*</small> */}
                         </div>

                     </div>
                     <div className="grid-col-2">                       
                        <span><Lock /></span>
                        <div>
                            <input type="password" onChange={handleChange} placeholder="Email" name="email" required/>
                            {/*1===1&&<small>LmORARfEVT1iyjwN*</small> */}
                         </div>

                     </div>
                     <div className="grid-col-2">
                        <span><Phone /></span>
                        <div>
                             <input type="text" onChange={handleChange} placeholder="Phone" name="phone" required/>
                             {/*1===1&&<small>LmORARfEVT1iyjwN*</small> */}
                        </div>
                     </div>
                     <div className="grid-col-2">
                        <span><DOBIcon /></span>
                        <div>
                             <input type="date" onChange={handleChange} placeholder="Date Of Birth" name="dob" required/>
                             {/*1===1&&<small>LmORARfEVT1iyjwN*</small> */}
                        </div>
                     </div>
                     <div className="grid-col-2">
                        <span><Location /></span>
                        <div>
                            <input type="text" onChange={handleChange} placeholder="Country" name="country" required/>
                             {/*1===1&&<small>LmORARfEVT1iyjwN*</small> */}
                        </div>
                     </div>
                     <div> 
                         <input className="btn" type="submit" value="Signup" />
                     </div>
                   
                </form>
    )
}