import { Link } from "react-router-dom";
export default function SideMenus({darkMode,style}) {
  const menuColor ={color:darkMode&&'tomato'}

    return (
      <div className="sidebar" style={style}>
          <ul className="side-menu padding-32">      
              <li>
                  <Link to="/checkList" className="menu-item" style={menuColor}>CheckList</Link>
              </li>
              <li>
                  <Link to="/my-list" className="menu-item" style={menuColor}>My List</Link>
              </li>
              <li>
                
                <Link to="/visited" className="menu-item" style={menuColor}>Visited</Link>
                </li>
              <li>
              <Link to="/toVisit" className="menu-item" style={menuColor}>To Visit</Link>
              </li>
           </ul>
      </div>
      
    );
}