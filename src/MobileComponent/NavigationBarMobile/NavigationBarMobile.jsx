import React from 'react';
import { NavLink} from 'react-router';
import data from "./nav-data";
import { Status } from '../../ContextAPI/Status';
import Theme from "../../ContextAPI/Theme";
import "./navigationbarmobile.css"
import { MenuStatus } from '../../ContextAPI/MenuStatus';
export default function NavigationBarMobile() {
  const {theme} = React.useContext(Theme);
  const {menuStatus}=React.useContext(MenuStatus);
  const {status,setStatus}=React.useContext(Status);
  return (
    <div className={`shadow-xl ${menuStatus?theme?"navigation--bar--tag--mobile--light":"navigation--bar--tag--mobile--dark":theme?"navigation--bar--tag--mobile--light--active":"navigation--bar--tag--mobile--dark--active"}`}>
      <div className='w-[100%] relative'>

      {/* <NavLink
      to="/"
      
      classname={`${theme ?`navigation--mobile--bar--tag--mobile--light--${status===1?1:""}`:`navigation--mobile--bar--tag--mobile--dark--${status===1?1:""}`}`}>
         <li className="p-5"
         
         onClick={()=>setStatus(1)}
         >DashBoard</li>
      </NavLink>   */}
        {data.map((item)=>
           <NavLink
           keys={item.id}
           to={item.path}
           onClick={()=>setStatus(item.id)}
           
           >
            <li className={` w-[100%] p-5 ${theme?`navigation--mobile--bar--tag--mobile--light--${status===item.id ? status :""}`:`navigation--mobile--bar--tag--mobile--dark--${status===item.id ? status : ""}`}`}>{item.data}</li>
           </NavLink>
        )}

      
        
        

      </div>
    </div>
  )
}
