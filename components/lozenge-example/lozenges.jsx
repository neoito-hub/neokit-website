import React from 'react'

const Lozenges = ({children , appearance , isBold , maxWidth}) => {
    const getStyle = ()=>{

       switch(appearance?.trim()) {
        case 'success':{
            if(isBold) return " bg-green-700 text-white success-bold "
            else return ' text-green-700 bg-green-200 success '
        }
        case 'removed':
            if(isBold) return " bg-red-600 text-white removed-bold "
            else return ' text-red-700 bg-red-100 removd  '
        case 'inprogress':
            if(isBold) return " bg-blue-600 text-white inprogress-bold "
            else return ' text-blue-700 bg-blue-100 inprogress '
        case 'new':
            if(isBold) return " bg-purple-700 text-white new-bold "
            else return ' text-purple-700 bg-purple-100  old'     
        case 'moved':
            if(isBold) return " bg-yellow-600 text-white moved-bold "
            else return ' text-yellow-700 bg-yellow-100 moved '                 
        default:
            if(isBold) return " bg-gray-600 text-white  default-bold"
            else return ' bg-gray-300 text-gray-800 default '
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
