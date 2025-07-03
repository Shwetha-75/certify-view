import React from 'react'
import styled from 'styled-components'
import NavigationBar from '../../NavigationBar/NavigationBar'
import Theme from '../../../ContextAPI/Theme';
import "./maincomponentpage.css"
import MainDashBoardComponent from '../MainDashBoardComponent'
const Container=styled.div`
   display:flex;
   flex-direction:col;
   justify:space-between

`



export default function MainComponentPage() {

  const {theme,setTheme} =React.useContext(Theme);


    React.useEffect(()=>{
        const element=document?.querySelector('html');
        if(theme){
  
            element.style.transition='1.3s';
            element.classList.add("main--tag--container--light");
            element.classList.remove("main--tag--container--dark")
            
        }else{
          
            element.style.transition='1.3s';
            element.classList.add("main--tag--container--dark");
            element.classList.remove("main--tag--container--light")
  
        }
  
    },[theme,setTheme]);

  
  return (
    <>
    <Container className={`${theme?"main--tag--container--light":"main--tag--container--dark"} w-[100%] h-[100%]`}>

      <div className='relative shadow-xl w-[60px]'>
       <NavigationBar/>
      </div>
      <div 
        className={`w-[calc(100%-60px)] mt-[20px] h-[100%] ${theme?"":""}`}>
        <MainDashBoardComponent/> 
      </div>
    </Container>

    </>

  )
}
