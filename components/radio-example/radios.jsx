import React from "react";

const Radio = ({  ...props }) => {
  return (
    <div>
      <label className={`container  relative cursor-pointer flex items-center justify-start text-sm pl-6 h-4  ${props.isDisabled? ' cursor-not-allowed text-gray-400 ': ' text-gray-600 ' }`}>
        {props.label}
        <input
          {...props}
          type='radio'
          name='radio'
          defaultChecked={props.isChecked}
          disabled={props.isDisabled}
          className='absolute cursor-pointer opacity-0'
        />
        <span class={`checkmark absolute top-0 left-0 rounded-full h-4 w-4  ${props.isDisabled? ' opacity-70 ': ' opacity-100 ' } `}></span>
      </label>
    </div>
  );
};

export default Radio;
