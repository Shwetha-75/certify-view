import React from 'react'
import data from './nav-data'
import { NavLink } from 'react-router'
import "./navigationBar.css";
import { Status } from '../ContextAPI/Status';
import { MenuStatus } from '../ContextAPI/MenuStatus';
import Theme from '../ContextAPI/Theme';
export default function NavigationBar() {

  const { status, setStatus } = React.useContext(Status);
  const { menuStatus,setMenuStatus} = React.useContext(MenuStatus)
  const handleOnClick = (id) => {
    setStatus(id)
  }
  const { theme, setTheme } = React.useContext(Theme);
  console.log("MenuStatus: ",menuStatus)
  return (
    <>

      <ul className={`relative ${menuStatus ? theme ? "navigation--bar--tag--active--light" : "navigation--bar--tag--active" : theme ? "navigation--bar--tag--light" : "navigation--bar--tag"} shadow-xl`}>
        <li className="p-1 absolute right-5 top-4">
            {menuStatus ? 
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
                     className='cursor-pointer'
                     onClick={()=>setMenuStatus(prev=>!prev)}>
                    <path d="M440-280v-400L240-480l200 200Zm80 160h80v-720h-80v720Z"
                    />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg"
                      onClick={() => setMenuStatus(prev => !prev)}
                      height="24px" viewBox="0 -960 960 960" width="24px"
                      fill={`${theme ? "black" : "rgba(255, 255, 255, 0.86)"}`}
                      className='cursor-pointer'>
                      <path
                        d="M360-120v-720h80v720h-80Zm160-160v-400l200 200-200 200Z" />
                       </svg>
                    
                    }
        </li>

        <div className='div--tag--side--menu--bar'>
          {data.map((item) =>

              <NavLink
                key={item.id}
                onClick={() => handleOnClick(item.id)}
                to={item.path}><li
                  className=
                  {`cursor-pointer text-[1rem]
                  p-5 ${theme ? `navigation--bar--each--light--item--${status === item.id ? status : ""}` : `navigation--bar--each--item--${status === item.id ? status : ""}`}`}
                >{item.data}</li>
              </NavLink>
            )}
          <li
            className="flex  
            text-center
        
            gap-[1rem] theme---tag p-5 text-[1rem] 
            cursor-pointer"
          >Theme
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
                    d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
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
                    d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
                </svg>
              </span>
              }
          </li>

        </div>
      </ul>

    </>
  )
}
