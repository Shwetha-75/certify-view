// import React from 'react'
import TopNavigationBar from "../TopNavigationBar/TopNavigationBar";
import Main from "../../MainComponentLargerDevices/DashBoardCard/Main"
import { Route, Routes } from 'react-router';
import SendEmail from "../SendEmail/SendEmail";
import SelectTemplate from '../SelectTemplate/SelectTemplate';
import GenerateCertificate from '../GenerateCertificate/GenerateCertificate';
import ViewCertificate from '../ViewCertificate/ViewCertificate';
// import MainDashBoard from "../DashBoardCard/Main"
// import NavigationBar from "../NavigationBar/NavigationBar";
import PageNotFound from "../CustomErrorPage/404PageNotfound";


export default function MainDashBoardComponent() {
  return (
    <>
       <div className={`w-[100%]  flex items-center relative`}>
         <TopNavigationBar/>

        <Routes>
            <Route index path="/" element={<Main/>}></Route>
            <Route path="/select-template" element={<SelectTemplate />}></Route>
            <Route path="/generate-certificate" element={<GenerateCertificate />}></Route>
            <Route path="/view-certificate" element={<ViewCertificate />}></Route>
            <Route path="/send-email" element={<SendEmail />}></Route>            
            <Route path="/*" element={<PageNotFound/>}></Route>
      </Routes>

       </div>
    </>
  )
}
