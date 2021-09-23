import React, { useState, useEffect } from "react";

function Checkboxes({
  checked,
  onChange,
  label,
  id,
  name,
  defaultChecked,
  isDisabled,
  size
}) {
  const [val, setVal] = useState(false);
  const [control, setcontrol] = useState(false);
  const [checkboxSize, setCheckboxSize] = useState(false);

  useEffect(() => {
    if (checked && !defaultChecked) {
      setcontrol(true);
    }
    if (defaultChecked) {
      setVal(true);
    }
    setCheckBoxSize();
  }, []);
  const setCheckBoxSize = () => {
    switch (size) {
      case "small": {
        setCheckboxSize("w-3 h-3");
        break;
      }
      case "medium": {
        setCheckboxSize("w-4 h-4");
        break;
      }
      case "large": {
        setCheckboxSize("w-6 h-6");
        break;
      }
      case "xlarge": {
        setCheckboxSize("w-8 h-8");
        break;
      }

      default:
        setCheckboxSize("w-4 h-4");
        break;
    }
  };
  const handleChange = () => {
    console.log("enter");
    if (control) {
      console.log("enter ds");
      onChange(!checked);
    } else {
      console.log("enter");
      setVal(!val);
      onChange(!val);
    }
  };

  return (
    <div className='text-sm font-normal text-gray-700 '>
      <label
        className={`flex gap-3 items-center  ${
          isDisabled ? " cursor-not-allowed  opacity-50" : " cursor-pointer "
        }`}
      >
        <input
        className={`${checkboxSize  }`}
          type='checkbox'
          checked={checked && !defaultChecked ? checked : val}
          id={id}
          name={name}
          disabled={isDisabled}
          onChange={() => handleChange()}
        />
        <span className={`${size === 'small' ? ' text-xs ' : size === 'large' ? ' text-base ' : size === 'xlarge' ? ' text-lg ': 'text-sm'}`}> {label}</span>
      </label>
    </div>
  );
}

export default Checkboxes;
