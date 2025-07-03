import React from 'react'
import data from './nav-data'
import { NavLink } from 'react-router'
import "./navigationBar.css";
import "../TopNavigationBar/topnavigationbar.css"
import { Status } from '../../ContextAPI/Status';
import { MenuStatus } from '../../ContextAPI/MenuStatus';
import Theme from '../../ContextAPI/Theme';
export default function NavigationBar() {

  const { status, setStatus } = React.useContext(Status);
  const { menuStatus
    ,setMenuStatus
  
  } = React.useContext(MenuStatus)
  const handleOnClick = (id) => {
    setStatus(id)
  }
  const { theme } = React.useContext(Theme);

  // const history = useNavigate();


  const handleOnClickLogo = () =>{
    setStatus(1)
    
  }
  return (
    <>

      <ul 
      style={
        theme?{
             backgroundColor:'white'
      }:{
          backgroundColor:'rgba(11, 11, 11, 0.72)'
      }}
      className={`absolute 

        ${menuStatus ? 
        theme ? 
        "navigation--bar--tag--active--light" 
        : "navigation--bar--tag--active" : 
        theme ? "navigation--bar--tag--light" 
        : "navigation--bar--tag"} 
        shadow-xl`}>
        <li className="p-1 fixed flex flex-row right-5 top-4">
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
                     onClick={()=>setMenuStatus(prev=>!prev)}
                     >
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
          <NavLink
          to="/"
          style={menuStatus?{
                   display:'flex'
          }:{
                   display:'none'
          }}
          className="w-fit navigation--bar--tag--side flex p-5 flex flex-row justify-center items-center"
          onClick={handleOnClickLogo}> 
              {/* <img 
               className=" title---logo---tag--image border border-red-500"
               src={theme?LogoDark:LogoLight} alt=""/> */}
               <svg 
               xmlns="http://www.w3.org/2000/svg" 
               height="24px" viewBox="0 -960 960 960" 
               width="24px" 
               className=" "
               fill={`${theme?'black':'white'}`}>
                 <path d="M480-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z"/>
                 </svg>
               <p 
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
               className="title---logo---tag">Certify</p>   
          </NavLink>
        <div className='div--tag--side--menu--bar  '>

          {data.map((item) =>

              <NavLink
                key={item.id}
                style={menuStatus?{
                   display:'block'
                }:{
                   display:'none'
                }}
                onClick={() => handleOnClick(item.id)}
                to={item.path}><li
                  className=
                  {`cursor-pointer text-[1rem]
                    
                  p-5 ${theme ? `navigation--bar--each--light--item--${status === item.id ? status : ""}` : `navigation--bar--each--item--${status === item.id ? status : " "}`}`}
                >{item.data}</li>
              </NavLink>
            )}
         
            
         

        </div>
      </ul>

    </>
  )
}
