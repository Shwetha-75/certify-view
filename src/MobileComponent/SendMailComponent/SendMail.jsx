import React from 'react'
import {MenuStatus} from "../../ContextAPI/MenuStatus";

export default function SendMail() {
  const menuRefUpload=React.useRef(null);
  const {setMenuStatus}=React.useContext(MenuStatus)
  React.useEffect(()=>{
     if(menuRefUpload.current){
        const element=menuRefUpload.current;

        const handleOnClickMenuStatus=()=>{
             setMenuStatus(true);

        }

        element?.addEventListener("click",handleOnClickMenuStatus);
        return ()=>element?.removeEventListener("click",handleOnClickMenuStatus);
     }
  })
  return (
    <div ref={menuRefUpload}>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
        <h1 className="text-blue-500">hello</h1>
    </div>
  )
}
