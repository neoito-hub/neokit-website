import React from 'react'
import Select from 'react-select'

const SelectBox = ({...props}) => {
   
      
    return (
        <div>
           <Select {...props} className="h-10"/>
        </div>
    )
}

export default SelectBox;
