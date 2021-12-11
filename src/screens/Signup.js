import { useCallback, useState } from 'react'
import axios from 'axios'
import { BACKEND_API_ROUTE } from '../util'
import { toast, ToastContainer } from 'react-toastify';

/**
 * - User signin 
 * @param {Function} props.showDashboard to show main dashboard later on sinup
 * @param {Function} props.userInfo  setUser info so that can view relavant info on dashboard
 */

export function Signup({ showDashboard, userInfo}){
   const[state, setState] = useState({name:'', email:'', password:'',phone:'',dob:'',country:''})
   const handleChange = useCallback(
    (e) => {
      setState({...state, [e.target.name]: e.target.value});
    },
    [state],
  );
   const handleSignup= async ()=>{
   const {name, email, password,phone,dob,country} = state;
   const{ data}  = await axios.post(`${BACKEND_API_ROUTE}/signup`,{name, email, password,phone,dob,country})
  

    if(data.error){ 
       toast('Please correct your data');

    }else{
      toast('Well done!!')
      userInfo(data.newUser);
      showDashboard(true)
      
    }
    
   }

    return(
         <>
            <ToastContainer />
            <form method="post">
		      <ul className="modal">
               <li>
                  <label>Full Names</label>        
                  <input type="text" onChange={handleChange} placeholder="Full Names" name="name" required />
                      
                  </li>
                  <li>
                        <label>Email</label>        
                        <input type="email" onChange={handleChange} placeholder="Email" name="email" required />
                  </li>  
                  <li>
                        <label>Password</label>        
                        <input type="password" onChange={handleChange} placeholder="Password" name="password" required/>
                  </li> 
                  <li>
                        <label>Phone</label>        
                        <input type="tel" onChange={handleChange} placeholder="Phone" name="phone" required/>
                  </li> 
                  <li>
                     <label>DOB</label>
                     <input type="date" onChange={handleChange} placeholder="Date Of Birth" name="dob" required/>
                  </li> 
                 
                  <li>
                     <label>Country</label>
                     <input type="text" onChange={handleChange} placeholder="Country" name="country" required/>
                     
                  </li>
                  <li>                     
                     <input  type="button"
                        onClick={handleSignup} 
                        className="btn" 
                      value="Signup" style={{height: 48}} 
                     disabled={state.length <6?true: false}/> 
                  </li>    
               
               </ul>
                </form>
         </>
    )
}