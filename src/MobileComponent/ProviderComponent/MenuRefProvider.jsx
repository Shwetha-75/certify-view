import React from 'react'
import MenuRef from "../ContextAPIMobile/MenuRef"
export default function MenuRefProvider({children}) {
  const menuRef=React.useRef(null);
  return (
    <MenuRef.Provider value={{menuRef}}>
          {children}
    </MenuRef.Provider>
  )
}
