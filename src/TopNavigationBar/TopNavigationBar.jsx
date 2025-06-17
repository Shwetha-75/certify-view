import React from 'react'
import { useNavigate } from 'react-router'
import { Status } from '../ContextAPI/Status';
// import { RxHamburgerMenu } from "react-icons/rx";
// import {MenuStatus} from "../ContextAPI/MenuStatus"
import Theme from '../ContextAPI/Theme';
// import logo from "../media/logo.png";
// import LogoLight from "../media/LogoLight.png";
// import LogoDark from "../media/LogoDark.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./topnavigationbar.css"
export default function TopNavigationBar() {

  const {setStatus} = React.useContext(Status)
  // const {menuStatus,setMenuStatus}=React.useContext(MenuStatus);
  const {theme} = React.useContext(Theme);

  const history=useNavigate();
  const handleOnClickLogo = () =>{
    setStatus(1)
      history("/")
  }
  return (
    <>
        <div className={`w-[100%]  flex justify-start items-center ${theme?"navigation-top--bar--tag--light":"navigation-top--bar--tag--dark "} shadow-md `}>
            <ul className='flex justify-between p-4 '>
                <li className={`flex cursor-pointer gap-[0.5rem] flex-row justify-center items-center`}                 
                onClick={handleOnClickLogo}>
                 
                   {/* <img 
                    className=" title---logo---tag--image border border-red-500"
                    src={theme?LogoDark:LogoLight} alt=""/> */}
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="24px" viewBox="0 -960 960 960" 
                    width="24px" 
                    fill={`${theme?'black':'white'}`}>
                      <path d="M480-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z"/>
                      </svg>
                    <p className={`${theme?"title---logo---tag":"title---logo---tag--dark"} text-italic`}>Certify</p>
                 
                </li>
                 
            </ul>
        </div>
    </>
  )
}
