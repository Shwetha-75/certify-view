import React from 'react'
import { MenuStatus } from '../../ContextAPI/MenuStatus'
import DummyTopNavigationBar from '../DummyNavigationBar/DummyTopNavigationBar';

export default function SelectTemplate() {

  const {setMenuStatus}=React.useContext(MenuStatus);
  const menuBarRef=React.useRef(null);

  React.useEffect(()=>{
    if(menuBarRef){
      const element=menuBarRef.current;
      const handleOnClickMenuBarStatus=()=>{
          setMenuStatus(false)
      } 

      element?.addEventListener('click',handleOnClickMenuBarStatus);
      return ()=> element?.removeEventListener('click',handleOnClickMenuBarStatus);

    }
  },[setMenuStatus])

 
  return (
    <div className=" w-[100%]   flex flex-col">
      <div className={`w-[100%] flex justify-between items-center  `}>
            <DummyTopNavigationBar/>
        </div>
    <div
     ref={menuBarRef}
     className='w-[100%] mt-[20px]'
    >
         
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
         <h1>Hello</h1>
           
    </div>
     </div>
  )
}
