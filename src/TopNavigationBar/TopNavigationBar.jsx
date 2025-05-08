import React from 'react'
import { useNavigate } from 'react-router'
import { Status } from '../ContextAPI/Status';
import { RxHamburgerMenu } from "react-icons/rx";
import {MenuStatus} from "../ContextAPI/MenuStatus"

export default function TopNavigationBar() {

  const {setStatus} = React.useContext(Status)
  const {setMenuStatus}=React.useContext(MenuStatus);
  const history=useNavigate();
  const handleOnClickLogo = () =>{
    setStatus(1)
      history("/")
  }
  return (
    <>
        <div className='w-[100%] flex justify-center absolute top-5 items-center'>
            <ul className='flex w-[80%] justify-between p-6'>
                <li className='text-white text-[1.3rem] cursor-pointer' onClick={handleOnClickLogo}>Logo</li>
                 {/* <li className='text-white text-[1.3rem]'>SigIn/SigUp</li> */}
                 <RxHamburgerMenu 
                 className='cursor-pointer'
                 color='white'
                 style={{
                  fontSize:'1.8rem'
                 }}
                 onClick={()=>setMenuStatus(prev=>!prev)}
                 />
            </ul>
        </div>
    </>
  )
}
