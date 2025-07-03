import React from "react"
import WindowResize from "./ContextAPI/WindowResize"
import styled from 'styled-components'
import { MenuStatus } from "./ContextAPI/MenuStatus";
import { Status } from "./ContextAPI/Status";
import { BrowserRouter } from "react-router";
import Theme from "./ContextAPI/Theme";
import MainComponentPage from "./MainComponentLargerDevices/MainDashBoardComponent/MainComponentPage/MainComponentPage";
import MainMobile from "./MobileComponent/Main"
const Container = styled.div`
   display:flex;
   flex-direction:column;
`
const Panel = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
function App() {
  const [status, setStatus] = React.useState(JSON.parse(sessionStorage.getItem("status")) || 1);
  const [menuStatus, setMenuStatus] = React.useState(()=>{
    let stored=sessionStorage.getItem('menuStatus');
    console.log(stored)
    return stored ? JSON.parse(stored) : false
  })
  const {dimensions}=React.useContext(WindowResize)
    
  const [theme,setTheme] = React.useState(()=>{
    let stored=sessionStorage.getItem('theme');
    console.log(stored)
    return stored ? JSON.parse(stored) : false;
  });

  React.useEffect(() => {
    sessionStorage.setItem("status",JSON.stringify(status));
    sessionStorage.setItem("menuStatus",JSON.stringify(menuStatus));
    sessionStorage.setItem('theme',JSON.stringify(theme));

  }, [status, setStatus, menuStatus,theme]);




  return (
    
    <Container 
   
   
    >
    <BrowserRouter>
        <Theme.Provider value={{theme,setTheme}}>
        <MenuStatus.Provider value={{menuStatus,setMenuStatus}}>
          <Status.Provider value={{status,setStatus}}>
            {/* <TopNavigationBar /> */}
             
              {/* <Main /> */}
              {
                dimensions?.width<=500
                 ?
                <MainMobile/>
                :
                <MainComponentPage/>

              }
             

          </Status.Provider>
        </MenuStatus.Provider>
        </Theme.Provider>
    </BrowserRouter>
    </Container>
   
  )
}

export default App;
