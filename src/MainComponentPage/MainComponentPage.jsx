import React from 'react'
import styled from 'styled-components'
import NavigationBar from '../NavigationBar/NavigationBar'
import Theme from '../ContextAPI/Theme'
import "./maincomponentpage.css"
import MainDashBoardComponent from '../MainDashBoardComponent/MainDashBoardComponent'
const Container=styled.div`
   display:flex;
   flex-direction:col;
   justify:space-between

`



export default function MainComponentPage() {

  const {theme} =React.useContext(Theme);

  return (
    <>
    <Container className={`${theme?"main--tag--container--light":"main--tag--container--dark"}`}>

      <div className='w-[20%] resize-x relative shadow-xl'>
       <NavigationBar/>
      </div>
      <div className='w-[5px]'></div>
      <div className='w-[100%] relative'>
        <MainDashBoardComponent/> 
      </div>
    </Container>

    </>

  )
}
