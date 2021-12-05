import { Mail } from "../assets/Mail";

const { Lock } = require("../assets/Lock");

export default function Signin() {

    return(
            <form action="/" method="POST" className="modal">
                <div style={form}>
                <div className="grid-col-2">
                    <span><Mail /></span>
                        <div>
                            <input type="email" placeholder="Email" name="email" required className="input"/>
                            {/* {/*1===1&&<small>LmORARfEVT1iyjwN*</small> */} 
                         </div>
                </div>
                <div className="grid-col-2">                       
                    <span><Lock /></span>
                    <div>
                        <input type="password" placeholder="Email" name="email" required/>
                        {/*1===1&&<small>LmORARfEVT1iyjwN*</small> */}
                    </div>
                </div>
                <div>
                    <input className="btn" type="submit" value="Signin" />
                </div>
                </div>
            </form>

            
    )
}
const form = {display: 'grid', gap: 30, gridTemplateRows:'repeat(3, 1fr)'} 