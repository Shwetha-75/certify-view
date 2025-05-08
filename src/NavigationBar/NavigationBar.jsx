import React from 'react'
import data from './nav-data'
import { NavLink } from 'react-router'
import "./navigationBar.css";
import { Status } from '../ContextAPI/Status';
import { MenuStatus } from '../ContextAPI/MenuStatus';
export default function NavigationBar() {
 const {status,setStatus} = React.useContext(Status); 
 const {menuStatus,setMenuStatus} = React.useContext(MenuStatus)
  const handleOnClick=(id)=>{
    setStatus(id)
  }
    
console.log(status)
  return (
    <>
       {/* <div className='flex navigation--bar---overlay--display'> */}
        <ul className={`${menuStatus?"navigation--bar--tag":"navigation--bar--tag--active"}`}>
            {data.map((item)=> 
            <NavLink 
            onClick={()=>handleOnClick(item.id)}
            to={item.path}><li key={item.id} className={`cursor-pointer text-[1rem]  text-white`}>{item.data}</li>
            </NavLink>
            )}
            <li className="text-white  cursor-pointer"
            onClick={()=>setMenuStatus(prev=>!prev)}
            >Close</li>
        </ul>
       {/* </div>  */}
    </>
  )
}
