import React from 'react'
import styled from 'styled-components'
import NavigationBar from '../NavigationBar/NavigationBar';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router';
import SendEmail from '../SendEmail/SendEmail';
import UploadExcel from '../UploadExcel/UploadExcel';
import EmailTemplate from '../EmailTemplate/EmailTemplate';
const Container = styled.div`
   display:flex;
   flex-direction:column
`

export default function Main() {
  return (
    <Container>
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
    </Container>
  )
}
