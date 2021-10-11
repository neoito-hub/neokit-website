import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DatetimePicker = ({...props}) => {
    return (
        <div>
            <DatePicker wrapperClassName="datePicker" dateFormat="dd/MM/yyyy"  className='appearance-none border-2 rounded w-full py-3 px-3 pr-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-100 focus:bg-transparent' {...props} />
        </div>
    )
}

export  default DatetimePicker;
