import React from 'react'
import Theme from "../ContextAPI/Theme";
import "./PageNotFound.css"

export default function PageNotfound() {
  const {theme} = React.useContext(Theme);
  return (
    <div className={`flex flex-col justify-center items-center ${theme ?"page--not--found--tag--light":"page--not--found--tag"}`}>
        <h2>404 Page Not Found </h2>
    </div>
  )
}
