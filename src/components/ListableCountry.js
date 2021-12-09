import axios from "axios";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Add } from "../assets/Add";
import { Bin } from "../assets/Bin";
import { Check } from "../assets/Check";
import { BACKEND_API_ROUTE } from "../util";
export function ListableCountry({countries, goToDetail,...props}){

    return(
        <>
        <ToastContainer />

        <div className="grid-col-3 m-top-32">
            {countries && countries.map(({name,capital, currencies, flag, population})=>(
                        <div className="grid-row-4" key={name}>
                                
                            <div className="flag"
                                onClick={goToDetail}
                                style={{backgroundImage:`url(${flag})`}}
                                alt="flag"/>
                        
                            <ul className="subtitle2"><strong>{name}</strong></ul>
                            
                                <ul type="none">
                                    <li>Population:{population }</li>
                                    <li>Capital: {capital} </li>
                                    <li>Currency: {currencies && currencies[0].code}</li>
                                </ul>
                        
                            <div style={{ display:'flex', justifyContent:'flex-end'}}>
                            {props.add?(
                                <span style={iconStyle} onClick={()=>props.add(name)}><Add /></span> 
                            ):(
                                <>
                                <span style={iconStyle} onClick={()=>props.deleteCountry(name)}><Bin /></span> 
                                <span style={iconStyle} onClick={()=>props.updateCountry(name)}><Check checked={props.checked && props.checked }/></span>
                                </>

                            )

                            }
                                                       
                            
                            </div>
                        </div>
                    ))}              
        </div>
    </>
    )
}
const iconStyle = {height: '64px', width:'64px'}