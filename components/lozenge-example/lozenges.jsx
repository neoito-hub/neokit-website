import React from 'react'

const Lozenges = ({children , appearance , isBold , maxWidth}) => {
    const getStyle = ()=>{

       switch(appearance?.trim()) {
        case 'success':{
            if(isBold) return " bg-green-700 text-white "
            else return ' text-green-700 bg-green-200 '
        }
        case 'removed':
            if(isBold) return " bg-red-600 text-white "
            else return ' text-red-700 bg-red-100 '
        case 'inprogress':
            if(isBold) return " bg-blue-600 text-white "
            else return ' text-blue-700 bg-blue-100 '
        case 'new':
            if(isBold) return " bg-purple-700 text-white "
            else return ' text-purple-700 bg-purple-100 '     
        case 'moved':
            if(isBold) return " bg-yellow-600 text-white "
            else return ' text-yellow-700 bg-yellow-100 '                 
        default:
            if(isBold) return " bg-gray-600 text-white "
            else return ' bg-gray-300 text-gray-800 '
      }
    }
    return (
        <div className="flex flex-col w-max ">
            <p className={`text-xs font-bold  p-1 rounded  uppercase truncate  ${getStyle()}`} style={{maxWidth: maxWidth? maxWidth : '200px' }} >
            {children}
            </p>
        </div>
    )
}

export default Lozenges;
