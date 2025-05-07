import React from 'react'
import data from './nav-data'
import { NavLink } from 'react-router'
import "./navigationBar.css"
export default function NavigationBar() {
 const [status,setStatus] = React.useState(JSON.parse(localStorage.getItem("status"))|| 1); 
  const handleOnClick=(id)=>{

    setStatus(id)
  }
  
React.useEffect(()=>{
    
  localStorage.setItem("status",JSON.stringify(status))

},[status,setStatus])
  
   
console.log(status)
  return (
    <>
       <div className='flex justify-center items-center w-[100%] '>
        <ul className="flex justify-center  w-[100%] top-[150px] absolute unordered--list--tag--navigation--bar">
            {data.map((item)=> 
            <NavLink 
            onClick={()=>handleOnClick(item.id)}
            to={item.path}><li key={item.id} className={`cursor-pointer text-[1.2rem] w-[300px] text-center p-8  text-white navigation--bar--list--tag navigation--bar--list--tag--${status === item.id ? status : 0}`}>{item.data}</li>
            </NavLink>
            )}
        </ul>
       </div>
    </>
  )
}
