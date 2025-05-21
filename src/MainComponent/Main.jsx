import React from 'react'
import styled from 'styled-components'
import NavigationBar from '../NavigationBar/NavigationBar';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router';
import SendEmail from '../SendEmail/SendEmail';
import UploadExcel from '../UploadExcel/UploadExcel';
import EmailTemplate from '../EmailTemplate/EmailTemplate';
import {Status} from '../ContextAPI/Status';
import { MenuStatus } from '../ContextAPI/MenuStatus';
import Cards from "../DashBoardCard/Main"

const Container = styled.div`
   display:flex;
   flex-direction:column;
` 
const Panel=styled.div`
  display:flex;
   flex-direction:column;
   justify-content:center;
    align-items:center;
`
export default function Main() {

  const [status,setStatus]=React.useState(JSON.parse(sessionStorage.getItem("status"))||1);
  const [menuStatus,setMenuStatus]=React.useState(()=>JSON.parse(sessionStorage.getItem('menuStatus'))||true)

  React.useEffect(()=>{
   
    sessionStorage.setItem("status",JSON.stringify(status))
    sessionStorage.setItem("menuStatus",JSON.stringify(menuStatus))
    
   
    
  },[status,setStatus,menuStatus])
    

  return (
    <Container className='relative container--main--tag' >
      <MenuStatus.Provider value={{menuStatus,setMenuStatus}}>
        <Status.Provider value={{status,setStatus}}>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Cards/>}></Route>
          <Route path="/sendemail" element={<SendEmail/>}></Route>
          <Route path="/uploadexcel" element={<UploadExcel/>}></Route>
          <Route path="/emailtemplate" element={<EmailTemplate/>}></Route>
          </Routes>
        <TopNavigationBar/>
        <NavigationBar/>                                                                                          
        </BrowserRouter>
        </Status.Provider>
      </MenuStatus.Provider>                                                                                                                                            
    </Container>
  )
}
