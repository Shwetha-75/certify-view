import React from 'react'
import { useNavigate } from 'react-router'
import { Status } from '../ContextAPI/Status';
import { RxHamburgerMenu } from "react-icons/rx";
import {MenuStatus} from "../ContextAPI/MenuStatus"

export default function TopNavigationBar() {

  const {setStatus} = React.useContext(Status)
  const {menuStatus,setMenuStatus}=React.useContext(MenuStatus);
  const history=useNavigate();
  const handleOnClickLogo = () =>{
    setStatus(1)
      history("/")
  }
  return (
    <>
        <div className='w-[100%] flex justify-center absolute top-5 items-center'>
            <ul className='flex w-[80%] justify-between p-6'>
                <li className='text-white text-[1.3rem] cursor-pointer text-[2.3rem] italic title---logo---tag' onClick={handleOnClickLogo}>
                  Certify
                </li>
                 {/* <li className='text-white text-[1.3rem]'>SigIn/SigUp</li> */}
                 {menuStatus && <RxHamburgerMenu 
                 className='cursor-pointer'
                 color='rgba(255, 255, 255, 0.86)'
                 style={{
                  transition:'0.9s',
                  fontSize:'1.8rem'
                 }}
                 onClick={()=>setMenuStatus(prev=>!prev)}
                 />}
            </ul>
        </div>
    </>
  )
}
