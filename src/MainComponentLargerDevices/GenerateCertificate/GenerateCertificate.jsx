import React from 'react'
import { MenuStatus } from '../../ContextAPI/MenuStatus'
import DummyTopNavigationBar from '../DummyNavigationBar/DummyTopNavigationBar';
import {Container} from "../../MainComponentLargerDevices/StylesComponent/Container"

export default function GenerateCertificate() {
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
    <Container className=" w-[100%]  flex flex-col">
      <div className={`w-[100%] flex justify-between items-center  `}>
            <DummyTopNavigationBar/>
        </div>
    <div 
    ref={menuBarRef}
    className="w-[100%] h-[100%] mt-[20px]"
    
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
      </Container>
  )
}
