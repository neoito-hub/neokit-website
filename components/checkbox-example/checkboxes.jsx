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
    if (control) {
      onChange(!checked);
    } else {
      setVal(!val);
      onChange(!val);
    }
  };

  return (
    <div className='text-sm font-normal text-gray-700 checkbox-wrapper '>
      <label
        className={`flex gap-3 items-center checkbox-label  ${
          isDisabled ? " cursor-not-allowed  opacity-50 disabled-checkbox " : " cursor-pointer "
        }`}
      >
        <input
          className={`checkbox ${checkboxSize}`}
          type='checkbox'
          checked={checked && !defaultChecked ? checked : val}
          id={id}
          name={name}
          disabled={isDisabled}
          onChange={() => handleChange()}
        />
        <span
          className={` checkbox-text ${
            size === "small"
              ? " text-xs "
              : size === "large"
              ? " text-base "
              : size === "xlarge"
              ? " text-lg "
              : "text-sm"
          }`}
        >
          {" "}
          {label}
        </span>
      </label>
    </div>
  );
}

export default Checkboxes;
