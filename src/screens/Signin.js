import axios from 'axios';
import { useCallback, useState } from 'react'
import {useNavigate } from "react-router-dom";
import { Mail } from "../assets/Mail";
import { BACKEND_API_ROUTE } from "../util";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        const{email, password} = state;  
        const{ data}  = await axios.post(`${BACKEND_API_ROUTE}/signin`,{email, password})
        if(!data.message){   
            navigate('/my-list',{loggedUser:data})
            props.showDashboard(true)
            props.userInfo(data)
           
        }
        toast(data.message);
        }
       
    return(
        <>
            <ToastContainer />
            <form method="post">          
		      <ul className="modal">
                 <li>
                    <label>Email</label>        
                       <input type="email" onChange={handleChange} placeholder="Email" name="email" required />
                  </li>  
                  <li>
                        <label>Password</label>        
                        <input type="password" onChange={handleChange} placeholder="Password" name="password" required/>
                  </li>
                  <li>                     
                     <input  type="button"
                        onClick={handleSignin} 
                        className="btn" 
                      value="Signin" style={{height: 48}} 
                     /> 
                  </li>      
              </ul>
            </form>
        </>
            
    )
}