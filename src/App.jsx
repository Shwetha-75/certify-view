import React from "react"
import Main from "./MainComponent/Main"
import TopNavigationBar from "./TopNavigationBar/TopNavigationBar"
import styled from 'styled-components'
import { MenuStatus } from "./ContextAPI/MenuStatus";
import { Status } from "./ContextAPI/Status";
import { BrowserRouter } from "react-router";
import Theme from "./ContextAPI/Theme";
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
    return stored ? JSON.parse(stored) : true
  })
    
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

  React.useEffect(()=>{
    const element=document.querySelector('html')
      element.style.transition='1.5s';
      element.style.backgroundColor=theme?"white":'rgb(31, 31, 31)';
  },[setTheme,theme])

  return (
  <Container>
    <BrowserRouter>
        <Theme.Provider value={{theme,setTheme}}>
        <MenuStatus.Provider value={{menuStatus,setMenuStatus}}>
          <Status.Provider value={{status,setStatus}}>
            <TopNavigationBar />
            <Main />
          </Status.Provider>
        </MenuStatus.Provider>
        </Theme.Provider>
    </BrowserRouter>
    </Container>
  )
}

export default App;
