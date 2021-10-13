import React from 'react'
import Select from 'react-select'

const SelectBox = ({...props}) => {
   
      
    return (
        <>
           <Select {...props} className="h-10 react-select-wraper"/>
        </>
    )
}

export default SelectBox;
