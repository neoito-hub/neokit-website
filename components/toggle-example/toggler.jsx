import React, { useState, useEffect } from "react";

function Toggler({ color, name, id, onChange, value, disabled, icon }) {
  const [toggleActive, setToggleActive] = useState(false);
  const [toggleColor, setToggleColor] = useState("");
  const getColor = () => {
    return color ? color : "#00FF7F";
  };

  const handleChange = () => {
    setToggleActive(!toggleActive);
    if (onChange) onChange(!toggleActive);
  };
  useEffect(() => {
    if (value) setToggleActive(value);
  }, []);
  return (
    <>
      <div
        name={name}
        id={id}
        class={`flex justify-between items-center w-max relative  toggle-wraper ${
          disabled ? "  opacity-40 cursor-not-allowed toggle-disabled " : " cursor-pointer"
        } `}
      
        onClick={(e) =>{ disabled ?   e.stopPropagation() : handleChange()}}
        // onChange={(value) => setValues(value)}
      >
        <span className={`absolute  top-2 ${toggleActive ?  'left-1.5' : 'right-1.5 -ml-1 ' } `}> 
       { (icon &&  toggleActive) &&  <img src='assets/tick.svg' width="10" height="10" className=' max-w-max'></img>}
       {(icon && !toggleActive )&& <img src='assets/close.svg' width="8" height="8" className=' max-w-max'></img>}
        </span>
        <div
          className={`w-11 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out" ${
            toggleActive ? "bg-green-400" : ""
          } `}
          style={{ backgroundColor: toggleActive ? getColor() : "#C0C0C0" }}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out" ${
              toggleActive ? "translate-x-5" : ""
            }`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Toggler;
