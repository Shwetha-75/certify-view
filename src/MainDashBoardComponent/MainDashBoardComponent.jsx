// import React from 'react'
import TopNavigationBar from "../TopNavigationBar/TopNavigationBar";
import Main from "../DashBoardCard/Main"
import { Route, Routes } from 'react-router';
import SendEmail from '../SendEmail/SendEmail';
import UploadExcel from '../UploadExcel/UploadExcel';
import EmailTemplate from '../EmailTemplate/EmailTemplate';
// import MainDashBoard from "../DashBoardCard/Main"
// import NavigationBar from "../NavigationBar/NavigationBar";
import PageNotFound from "../CustomErrorPage/404PageNotfound";


export default function MainDashBoardComponent() {
  return (
    <>
       <div className={`w-[100%] h-[100%] flex items-center relative`}>
         <TopNavigationBar/>

          <Routes>
        <Route index path="/" element={<Main/>}></Route>
        <Route path="/sendemail" element={<SendEmail />}></Route>
        <Route path="/uploadexcel" element={<UploadExcel />}></Route>
        <Route path="/emailtemplate" element={<EmailTemplate />}></Route>
        <Route path="/*" element={<PageNotFound/>}></Route>
      </Routes>

       </div>
    </>
  )
}
