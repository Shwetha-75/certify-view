import React from 'react'
import { Routes,Route } from 'react-router';
import TopNavigationBar from "./TopNavigationBar/TopNavigationBar"
import Theme from '../ContextAPI/Theme';
import MainComponent from "./MainComponent/MainComponent";
import NavigationBarMobile from './NavigationBarMobile/NavigationBarMobile';
import MenuRefProvider from './ProviderComponent/MenuRefProvider';
import { MenuStatus } from '../ContextAPI/MenuStatus';
import SelectTemplate from './SelectTemplateComponent/SelectTemplate';
import ViewCertificate from "./ViewCertificateComponent/ViewCertificate";
import GenerateCertificate from './GenerateCertificateComponent/GenerateCertificateComponent';
import SendMail from "./SendMailComponent/SendMail";


export default function Main() {
  const {theme,
    // setTheme
  }=React.useContext(Theme);

  const {menuStatus,setMenuStatus}=React.useContext(MenuStatus)

  React.useEffect(()=>{
      let element=document?.querySelector('html');
      if(theme){
         element.style.transition='1.3s'
         element.style.backgroundColor='white'
      }else{
         element.style.transition='1.3s'
         element.style.backgroundColor='rgb(31,31,31)';
      }

      
  },[theme])

  React.useEffect(()=>{
    const element = document?.querySelector(".main--dashboard--tag");
    const handleOnChangeMenuStatus=()=>{

      setMenuStatus(true)
      
    }
    element?.addEventListener('click',handleOnChangeMenuStatus)
    return()=>{
      element?.removeEventListener('click',handleOnChangeMenuStatus)
    }

  },[setMenuStatus,menuStatus]);

  
  return (
    // <MenuRefProvider>
    <>

    <div 
    style={
      theme?{
        backgroundColor:'white',
        transition:'1.3s',
        height:'100vh'
    }:{
      backgroundColor:'rgb(31,31,31)',
      transition:'1.3s',
      height:'100vh'
    }}
    
    >

    <TopNavigationBar/>
   <NavigationBarMobile/>
    {/* <div
    className='mt-[50%] text-red-500'
    onClick={()=>setTheme(prev=>!prev)}
    >theme</div> */}
      <Routes>
        <Route index path="/" element={<MainComponent/>}></Route>
            <Route path="/select-template" element={<SelectTemplate />}></Route>
            <Route path="/generate-certificate" element={<GenerateCertificate />}></Route>
            <Route path="/view-certificate" element={<ViewCertificate />}></Route>
            <Route path="/send-mail" element={<SendMail />}></Route>            
      </Routes>
    </div>
    {/* </MenuRefProvider> */}
    </>
  )
}

