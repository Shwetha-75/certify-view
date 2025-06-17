import { Route, Routes } from 'react-router';
import SendEmail from '../SendEmail/SendEmail';
import UploadExcel from '../UploadExcel/UploadExcel';
import EmailTemplate from '../EmailTemplate/EmailTemplate';
import MainDashBoard from "../DashBoardCard/Main"
import NavigationBar from "../NavigationBar/NavigationBar";
import PageNotFound from "../CustomErrorPage/404PageNotfound";


export default function Main() {



  return (
    <>

      {/* <NavigationBar />  */}
       <Routes>
        <Route index path="/" element={<MainDashBoard />}></Route>
        <Route path="/sendemail" element={<SendEmail />}></Route>
        <Route path="/uploadexcel" element={<UploadExcel />}></Route>
        <Route path="/emailtemplate" element={<EmailTemplate />}></Route>
        <Route path="/*" element={<PageNotFound/>}></Route>
      </Routes>
    

    </>

  )
}
