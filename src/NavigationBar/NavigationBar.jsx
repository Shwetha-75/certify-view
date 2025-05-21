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
    
console.log("Menu Status :",menuStatus)
  return (
    <>

        <ul className={`${menuStatus?"navigation--bar--tag":"navigation--bar--tag--active"}`}>
            <div className='div--tag--side--menu--bar'>
            {data.map((item)=> 
            <NavLink 
            onClick={()=>handleOnClick(item.id)}
            to={item.path}><li key={item.id} className={`cursor-pointer text-[1rem] ${status==item.id ? "border border-green-500":""} p-8 text-white navigation--bar--each--item--${status===item.id?status:""}`}>{item.data}</li>
            </NavLink>
            )}
            <li className="text-white p-8 text-[1rem] close--button--tag cursor-pointer"
            onClick={()=>setMenuStatus(true)}
            >Close</li>
            </div>
        </ul>
       
    </>
  )
}
