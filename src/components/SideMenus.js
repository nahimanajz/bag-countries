import { Link } from "react-router-dom";
export default function SideMenus() {
    return (
      <div className="sidebar">
          <ul className="side-menu padding-32">      
              <li className="menu-item">
                  <Link to="/checkList">CheckList</Link>
              </li>
              <li className="menu-item">
                  <Link to="/my-list">My List</Link>
              </li>
              <li className="menu-item">
                
                <Link to="/visited">Visited</Link>
                </li>
              <li className="menu-item">
              <Link to="/toVisit">To Visit</Link>
              </li>
           </ul>
      </div>
      
    );
}

{/*  */}
{/*  */}