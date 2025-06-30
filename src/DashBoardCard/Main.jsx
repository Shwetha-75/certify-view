// import Card from "./Card";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import data from "./data";
// import React from "react";
import "./main.css";
import React from "react";
import DummyTopNavigationBar from "../DashBoardCard/DummyTopNavigationBar";
import { MenuStatus } from "../ContextAPI/MenuStatus";


export default function Main() {
  const menuBarRef=React.useRef(null);

  const {setMenuStatus}=React.useContext(MenuStatus);
  React.useEffect(()=>{

    if(menuBarRef){
      const element=menuBarRef.current;
      const handleOnClickMenuBar=()=>{
        setMenuStatus(false);
      }

      element?.addEventListener('click',handleOnClickMenuBar);
      return ()=>element?.removeEventListener('click',handleOnClickMenuBar);
    }
  },[setMenuStatus])
  return (
    <div 
    
    className=" w-[100%]   h-[100%] flex flex-col">
     <div className={`w-[100%] flex justify-between items-center  `}>
            <DummyTopNavigationBar/>
        </div>
    <div 
    ref={menuBarRef}
    className="w-[100%]">
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
