import axios from 'axios';
import { useCallback, useRef, useState } from 'react'
import {useNavigate } from "react-router-dom";
import { Mail } from "../assets/Mail";
import { BACKEND_API_ROUTE } from "../util";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Lock } = require("../assets/Lock");

export default function Signin(props) {

   const[state, setState] = useState({})
   const handleChange = useCallback(
    (e) => {
      setState({...state, [e.target.name]: e.target.value});
    },
    [state],
  );
   


   const navigate = useNavigate();
    const handleSignin =  ()=>{        
        console.log(JSON.stringify(state))

       //  const{ data}  = await axios.post(`${BACKEND_API_ROUTE}/signin`,{state})
        // if(!data.message){   
        //     navigate('/my-list',{loggedUser:data})
        // }
        // toast(data.message);
       
        }
       
    return(
        <>
            {/* <ToastContainer /> */}
            <form onSubmit={handleSignin} className="modal">
                <div style={form}>
                <div className="grid-col-2">
                    <span><Mail /></span>
                        <div>
                            <input type="email" name="email" value={state && state.email}  onChange={handleChange} />
                        
                            {/* <input type="email" onChange={handleChange} placeholder="Email" name="email" required className="input"/> */}
                            {/* {/*1===1&&<small>LmORARfEVT1iyjwN*</small> */} 
                         </div>
                </div>
                <div className="grid-col-2">                       
                    <span><Lock /></span>
                    <div>
                        <input type="password"  
                            value={state && state.password} placeholder="Password"
                             name="password" required 
                             onChange={handleChange}/>
                        {/*1===1&&<small>LmORARfEVT1iyjwN*</small> */}
                    </div>
                </div>
                <div>
                    <button className="btn" onClick={handleSignin}>Signin</button>
                </div>
                </div>
            </form>
        </>
            
    )
}
const form = {display: 'grid', gap: 30, gridTemplateRows:'repeat(3, 1fr)'} 