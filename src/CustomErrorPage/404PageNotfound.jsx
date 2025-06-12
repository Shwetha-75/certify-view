import React from 'react'
import Theme from "../ContextAPI/Theme";
import "./pageNotFound.css"
// import ErrorPage from "../media/ErrorPage.png";
// import ErrorPageDark from "../media/ErrorPageDark.png"

export default function PageNotfound() {
  const {theme} = React.useContext(Theme);
  const [customPageInput,setCustomPageInput]=React.useState('');

  return (
    <div className={`${theme?"page--not--found--tag--light":"page--not--found--tag"}`}>
         {/* <img
          src={ErrorPage}
          alt=""
         /> */}

         {/* <h1>Oops ! Page Does Not Exist</h1> */}
         <div className={`w-[60%] p-3 gap-[1.2rem] flex `}>
          <div className="w-[100%] border border-slate-500">
          <input
          
           className={`w-full bg-transparent h-[60px] text-left ${theme?"input--tag--div":"input--tag--div--dark"}`}
           placeholder='Oops! Page Not Found Type Home...'
           value={customPageInput||""}
           onChange={(e)=>{
            setCustomPageInput(e.target.value)
           }}
          /> 
          </div>
          <div className='flex flex-col justify-center items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" 
            height="34px" 
            className='cursor-pointer'
            viewBox="0 -960 960 960" 
            width="44px" fill={theme?'black':'white'}>
            <path 
              d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
          </div>

         </div>
          <div className="w-[60%] border border-slate-500 p-3">
            home
            </div>
    </div>
  )
}
