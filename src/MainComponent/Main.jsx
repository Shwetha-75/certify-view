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

const Container = styled.div`
   display:flex;
   flex-direction:column
` 
export default function Main() {
  const [status,setStatus]=React.useState(JSON.parse(localStorage.getItem("status"))||1);
  const [menuStatus,setMenuStatus]=React.useState(false)

  React.useEffect(()=>{
    localStorage.setItem("status",JSON.stringify(status))
  },[status,setStatus])
    

  return (
    <Container>
      <MenuStatus.Provider value={{menuStatus,setMenuStatus}}>
        <Status.Provider value={{status,setStatus}}>
        <BrowserRouter>
          <Routes>
          <Route path="/" ></Route>
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
