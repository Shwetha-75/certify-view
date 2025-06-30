import Main from "../DashBoardCard/Main";
import React from "react";
import {MenuStatus} from "../ContextAPI/MenuStatus";
import DummyTopNavigationBar from "../DashBoardCard/DummyTopNavigationBar";

export default function EmailTemplate() {
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
    <div ref={emailRef} className=" h-[100%]  flex flex-col  w-[100%]">
         
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
