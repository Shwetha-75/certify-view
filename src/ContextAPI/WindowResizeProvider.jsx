import React from 'react'
import WindowResize from './WindowResize';

function WindowResizeProvider({children}){
    const [dimensions,setDimensions]=React.useState({
        width:window.innerWidth,
        height:window.innerHeight
    });
    
    React.useEffect(()=>{
        const handleWindowResize=()=>{
            setDimensions({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
        window.addEventListener('resize',handleWindowResize);

        return ()=>{
            window.removeEventListener('resize',handleWindowResize)
        }
    },[dimensions,setDimensions])

    return(
        <WindowResize.Provider value={{dimensions,setDimensions}}>
            {children}
        </WindowResize.Provider>
    )
}

export default WindowResizeProvider
