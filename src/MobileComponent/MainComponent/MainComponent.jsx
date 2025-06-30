import React from 'react';
import {MenuStatus} from "../../ContextAPI/MenuStatus"
export default function MainComponent() {
  const menuRefDashBoard=React.useRef(null);
  const {setMenuStatus}=React.useContext(MenuStatus);

  React.useEffect(()=>{
      const element=menuRefDashBoard.current;
      const handleOnChange=()=>{
        if(element){
          setMenuStatus(true);
        }
      }

      element?.addEventListener('click',handleOnChange);
      return ()=> element?.removeEventListener('click',handleOnChange)
  })
  return (
    <div className='h-[100vh] main--dashboard--tag'
    ref={menuRefDashBoard}
    >
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
      <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
      <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
      <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
      <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1> <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>
     <h1 className="text-red-500">Hello</h1>

    </div>
  )
}
