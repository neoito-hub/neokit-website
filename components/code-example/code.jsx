import React from 'react'

const Code = ({children}) => {
    return (
        <>
         <code className="text-xs bg-blue-50 rounded p-0.5 overflow-auto break-words whitespace-pre-wrap border-none focus:border-none" style={{color:"#172b4d" }}>{children}</code> 
        </>
    )
}

export default Code;
