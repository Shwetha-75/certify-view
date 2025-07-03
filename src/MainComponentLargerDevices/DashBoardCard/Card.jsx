import Theme from "../ContextAPI/Theme";
import React from "react";

export default function Card({key,name}) {
  const {theme}=React.useContext(Theme)
  return (
     <div key={key} className='p-10 h-[240px] border border-sky-500'>
      <h1 className={`text-${theme?"black":"white"} text-center`}>{name}</h1>
    </div>
  )
}
