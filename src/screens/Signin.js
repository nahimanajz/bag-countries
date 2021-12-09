import axios from 'axios';
import { useCallback, useRef, useState } from 'react'
import {useNavigate } from "react-router-dom";
import { Mail } from "../assets/Mail";
import { BACKEND_API_ROUTE } from "../util";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Lock } = require("../assets/Lock");

export default function Signin(props) {

   const[state, setState] = useState({email:'', password:''})
   const handleChange = useCallback(
    (e) => {
      setState({...state, [e.target.name]: e.target.value});
    },
    [state],
  );
   


   const navigate = useNavigate();
    const handleSignin =  async()=>{              

        const{ data}  = await axios.post(`${BACKEND_API_ROUTE}/signin`,{state})
        if(!data.message){   
            navigate('/my-list',{loggedUser:data})
        }
        toast(data.message);
        }
       
    return(
        <>
            <ToastContainer />
            <form className="modal">
                <div style={form}>
                <div className="grid-col-2">
                    <span><Mail /></span>
                        <div>
                            <input type="email" name="email" onChange={handleChange} />

                         </div>
                </div>
                <div className="grid-col-2">                       
                    <span><Lock /></span>
                    <div>
                        <input type="password"  
                            value={state && state.password} placeholder="Password"
                             name="password" required 
                             onChange={handleChange}/>
                       
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