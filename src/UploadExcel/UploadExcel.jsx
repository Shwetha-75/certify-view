import React from 'react'
import { MenuStatus } from '../ContextAPI/MenuStatus'
import DummyTopNavigationBar from '../DashBoardCard/DummyTopNavigationBar';

export default function UploadExcel() {
  const {setMenuStatus}=React.useContext(MenuStatus);
  
  const menuBarRef=React.useRef(null);

  React.useEffect(()=>{
    if(menuBarRef){
       const element=menuBarRef.current;
       const handleOnClickMenuBar=()=>{
          setMenuStatus(false)
       }

       element?.addEventListener('click',handleOnClickMenuBar)
       return ()=>element?.removeEventListener('click',handleOnClickMenuBar)
    }
  },[setMenuStatus])

  return (
    <div className=" w-[100%]   flex flex-col">
      <div className={`w-[100%] flex justify-between items-center  `}>
            <DummyTopNavigationBar/>
        </div>
    <div 
    ref={menuBarRef}
    className="w-[100%]"
    
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
