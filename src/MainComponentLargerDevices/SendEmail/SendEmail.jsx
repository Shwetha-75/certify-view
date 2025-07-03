import React from "react";
import {MenuStatus} from "../../ContextAPI/MenuStatus";
import DummyTopNavigationBar from "../DummyNavigationBar/DummyTopNavigationBar";

export default function SendEmail() {
  const emailRef=React.useRef(null);
  const {menuStatus,setMenuStatus}=React.useContext(MenuStatus);

  React.useEffect(()=>{
       const element=emailRef.current;
       const handleOnClick=()=>{
          setMenuStatus(false);
       }
       element?.addEventListener("click",handleOnClick)

       
       return ()=>  element?.removeEventListener("click",handleOnClick)
  },[setMenuStatus])
  console.log(menuStatus)
  return (
    <div className=" w-[100%]   flex flex-col">
      <div className={`w-[100%] flex justify-between items-center  `}>
            <DummyTopNavigationBar/>
        </div>
    <div ref={emailRef} className=" mt-[20px] w-[100%]">
         
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
