import React, { useState ,useEffect } from "react";

function ProgressIndicators({ values, onChange, selectedIndex, appearance ,size ,spacing}) {
  const count = 1;
  const [buttonStyle, setButtonStyle] = useState(" "); 
  const dots = "";
  //   const setDots = (index) => {
  //     setButtonState(index);
  //     onChange(index);
  //   };
  //   if(value) valueCount(value);
  //   else  valueCount(count);
  useEffect(() => {
   
  }, []);
  const getActive = () => {
    if (appearance && appearance.trim() === "primary") return " bg-blue-600 ";
    else if (appearance && appearance.trim() === "help") return " bg-purple-600 ";
    else if (appearance && appearance.trim() === "inverted") return " bg-white ";
    else return " bg-black ";
  };

  const getInActive = () => {
    if (appearance && appearance.trim() === "primary") return " bg-blue-300 ";
    else if (appearance && appearance.trim() === "help") return " bg-purple-300 ";
    else if (appearance && appearance.trim() === "inverted") return " bg-gray-400 ";
    else return " bg-gray-400 ";
  }; 
  
  return (
    <div>
      <ul className={`flex  w-auto ${spacing?.trim() ==='comfortable' ? 'gap-2.5' : spacing?.trim() ==='cozy' ? ' gap-1 ' : spacing?.trim() ==='compact' ? ' gap-0.5 ' : ' gap-2 '  }`}>
        {values && values.length > 0
          ? values.map((elementInArray, index) => (
              <li className='' key={index} onClick={() => onChange(index + 1)}>
                <p
                  className={`${ size?.trim() ==='small' ? 'h-1.5 w-1.5' : size?.trim() ==='large' ? ' h-3 w-3 ' : ' h-2 w-2 '  }  rounded-full border border-gray-400  cursor-pointer ${
                    selectedIndex === index + 1 ? getActive() :  getInActive()
                  }`}
                >
                  {" "}
                </p>
              </li>
            ))
          : [...Array(count)].map((elementInArray, index) => (
              <li className='' key={index} onClick={() => onChange(index + 1)}>
                <p
                 className={`${ size?.trim() ==='small' ? 'h-1.5 w-1.5' : size?.trim() ==='large' ? ' h-3 w-3 ' : ' h-2 w-2 '  }  rounded-full border border-gray-400  cursor-pointer ${
                  selectedIndex === index + 1 ? getActive() :  getInActive()
                }`}
                >
                  {" "}
                </p>
              </li>
            ))}
      </ul>
      {/* <ul className='flex gap-1 w-auto'>
        {value && value > 0
          ? [...Array(value)].map((elementInArray, index) => (
              <li className='' key={index} onClick={() =>setDots(index)}>
                <p
                  className={`h-2 w-2 rounded-full border border-gray-400  cursor-pointer ${
                    buttonState === index ? "bg-black" : "bg-gray-400"
                  }`}
                >
                  {" "}
                </p>
              </li>
            ))
          : [...Array(count)].map((elementInArray, index) => (
              <li
                className=''
                key={index}
                onClick={() =>setDots(index)}>
                <p
                  className={`h-2 w-2 rounded-full border border-gray-400 cursor-pointer ${
                    buttonState === index ? "bg-black" : "bg-gray-400"
                  }`}
                >
                  {" "}
                </p>
              </li>
            ))}
      </ul> */}
    </div>
  );
}

export default ProgressIndicators;
