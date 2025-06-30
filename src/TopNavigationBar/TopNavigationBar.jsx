import React from 'react'
import { useNavigate } from 'react-router'
import { Status } from '../ContextAPI/Status';
import Theme from '../ContextAPI/Theme';
// import { RxHamburgerMenu } from "react-icons/rx";
// import {MenuStatus} from "../ContextAPI/MenuStatus"
// import logo from "../media/logo.png";
// import LogoLight from "../media/LogoLight.png";
// import LogoDark from "../media/LogoDark.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./topnavigationbar.css"
export default function TopNavigationBar() {

  const {setStatus} = React.useContext(Status)
  // const {menuStatus,setMenuStatus}=React.useContext(MenuStatus);
  const {theme,setTheme} = React.useContext(Theme);

  const history=useNavigate();
  const handleOnClickLogo = () =>{
    setStatus(1)
      history("/")
  }
  
  const topMenuRef=React.useRef(null);
  React.useEffect(()=>{
    
  })

  return (
    <>
        <div 
        ref={topMenuRef}
        className={`w-[calc(100%-60px)] flex justify-between items-center ${theme?"navigation-top--bar--tag--light":"navigation-top--bar--tag--dark"} shadow-md `}>
            <div className="">

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
                      <path d="M480-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 
                      0 85 35t35 85q0 50-35 85t-85 35ZM240-40v-309q-38-42-59-96t-21-115q0-134 
                      93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 
                      80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 
                      170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 
                      31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z"/>
                      </svg>
                          <p

                          className='title---logo---tag'
                          style={
                            
                            theme?{
                            
                             padding: '0',
                             fontFamily: "'Noto-Serif', serif",
                             margin: '0',
                             color: "rgb(0, 0, 0)",
                             fontWeight:" bold",
                              
                            }:{
                                
                             
                             padding: '0',
                             fontFamily: "'Noto-Serif', serif",
                             margin: '0',
                             color: "rgb(255, 255, 255)",
                             fontWeight:" bold",
                           
                            }}
                          
                          >Certify</p>                 
                </li>
                 
            </ul>
            </div>
            {/* theme */}
            <div className="w-[5%] flex flex-col justify-center items-center p-2">
              {theme ?
              <span
                className='whitespace-nowrap'
                onClick={() => setTheme(prev => !prev)}
                style={{
                  transition: '1.2s',
                  cursor: 'pointer'
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"

                  fill={`${theme ? "black" : "white"}`}>
                  <path
                    d="M480-120q-150 0-255-105T120-480q0-150 
                    105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 
                    75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 
                    13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 
                    158-48.5T740-375q-20 5-40 8t-40 3q-123 
                    0-209.5-86.5T364-660q0-20 3-40t8-40q-78 
                    32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                </svg>
              </span>
              :<span
              className='whitespace-nowrap'
              onClick={() => setTheme(prev => !prev)}
              style={{
                transition: '1.2s',
                  cursor: 'pointer'
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  fill={`${theme ? "black" : "white"}`}>
                  <path
                    d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 
                    0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 
                    58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 
                    141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 
                    720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 
                    56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 
                    59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
                </svg>
              </span>
              }
            </div>
        </div>
    </>
  )
}
