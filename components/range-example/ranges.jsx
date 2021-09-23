import React, { useState, useEffect } from "react";
function Ranges({ step, min, max, onChange, value, isDisabled }) {
  const [val, setVal] = useState(50);
  const handleChange = (event) => {
    if (onChange) onChange(event.target.value);
    else setVal(event.target.value);
  };
  return (
    <div>
      <label className={"flex items-center gap-3"}>
        <input
          className={` ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}  w-full `}
          id='typeinp'
          type='range'
          disabled={isDisabled}
          min={min}
          max={max}
          value={onChange ? value : val}
          onChange={(event) => handleChange(event)}
          step={step}
        />
        {/* {rangeValue} */}
      </label>
    </div>
  );
}

export default Ranges;
