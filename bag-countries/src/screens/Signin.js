export function Signin({children}){
    
    return(
        <form action="/" method="POST" className="forms">
		    <div className="grid-col-2">
                      <span><i className="fa fa-user"></i></span>
                       <input type="text" placeholder="Username" name="username" />
                    </div>
                   <div className="grid-col-2">
                        <span><i className="fa fa-lock"></i></span>
                        <input type="password" placeholder="password" name="password"/>
                     </div>
                             
                  <input className="btn" type="submit" value="Login" />
           
                </form>
    )
}