import React from 'react'
import { useNavigate } from 'react-router'
import { Status } from '../ContextAPI/Status';
// import { RxHamburgerMenu } from "react-icons/rx";
import {MenuStatus} from "../ContextAPI/MenuStatus"
import Theme from '../ContextAPI/Theme';
import logo from "../media/logo.png";
import "./topnavigationbar.css"
export default function TopNavigationBar() {

  const {setStatus} = React.useContext(Status)
  const {menuStatus,setMenuStatus}=React.useContext(MenuStatus);
  const {theme} = React.useContext(Theme);

  const history=useNavigate();
  const handleOnClickLogo = () =>{
    setStatus(1)
      history("/")
  }
  return (
    <>
        <div className='w-[100%] shadow-xl  flex justify-center items-center absolute '>
            <ul className='flex w-[95%] justify-between p-4'>
                <li className={`
                cursor-pointer
                `}                 
                onClick={handleOnClickLogo}>
                   <img 
                    className="title---logo---tag p-0"
                   src={logo} alt=""/>
                </li>
                 <li className='text-white  flex flex-col justify-center items-center'>

                 {!menuStatus && 
                //  <svg xmlns="http://www.w3.org/2000/svg" 
                //  height="24px" viewBox="0 -960 960 960" width="24px"
                  
                //  >
                //   <path d="M640-120q-33 0-56.5-23.5T560-200v-160q0-33 23.5-56.5T640-440h160q33 0 56.5 23.5T880-360v160q0 33-23.5 56.5T800-120H640Zm0-80h160v-160H640v160ZM80-240v-80h360v80H80Zm560-280q-33 0-56.5-23.5T560-600v-160q0-33 23.5-56.5T640-840h160q33 0 56.5 23.5T880-760v160q0 33-23.5 56.5T800-520H640Zm0-80h160v-160H640v160ZM80-640v-80h360v80H80Zm640 360Zm0-400Z"
                 
                
                //  /></svg> 
                  <svg 
                     xmlns="http://www.w3.org/2000/svg" 
                     height="24px" 
                     viewBox="0 -960 960 960" 
                     width="24px" 
                     fill={`${theme?"black":"rgba(255, 255, 255, 0.86)"}`}
                     className='cursor-pointer  hamburger--symbol--tag absolute right-10'
                     onClick={()=>setMenuStatus(prev=>!prev)}>
                    <path d="M440-280v-400L240-480l200 200Zm80 160h80v-720h-80v720Z"
                    />
                    </svg>
                }
                </li>
            </ul>
        </div>
    </>
  )
}
