import { Link } from "react-router-dom";
export default function SideMenus() {
    return (
      <ul className="side-menu padding-32">
        <li className="menu-item">
            <Link to="/my-list">MyList</Link>
        </li>
        <li className="menu-item">
          
           <Link to="/visited">Visited</Link>
           </li>
        <li className="menu-item">
        <Link to="/to-visit">To Visit</Link>
        </li>
      </ul>
    );
}

{/*  */}
{/*  */}