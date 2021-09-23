import React, { useState, useEffect } from "react";

function Avatars({
  width,
  height,
  path,
  status,
  position,
  color,
  statusImage,
  size
}) {
  // const [statusPosition , setStatusPosition] = useState("")
  // const [number , setnumber] = useState(0)
  // const WordCount =(str) =>{
  //     const word = str.trim();
  //     console.log();
  //     return  word.split('').length;
  //   }
  const [avatarWidth, setWidth] = useState("50");
  const [avatarHeight, setHeight] = useState("50");
  const [avatarpath, setPath] = useState("assets/avatar.svg");
  const [avatarStatus, setStatus] = useState(false);
  const [avatarPosition, setPosition] = useState("top-1 right-1");
  const [avatarColor, setColor] = useState("green");

  useEffect(() => {
    getProps();
  }, []);

  const getProps = () => {
    if (size) {
      
      switch (size) {
        case "small": {
           setWidth("15");
           setHeight("15");
           break;
        }
        case "medium": {
           setWidth("25");
           setHeight("25");
           break;
        }
        case "large": {
           setWidth("50");
           setHeight("50");
           break;
        }
        case "xlarge": {
           setWidth("75");
           setHeight("75");
           break;
        }
        case "xxlarge": {
          setWidth("100");
          setHeight("100");
          break;
       }
 
        default:
          setWidth("20");
          setHeight("20");
          break;
      }
    } else {
      width ? setWidth(width) : " ";
      height ? setHeight(height) : "";
    }
    path ? setPath(path) : "";
    status ? setStatus(status) : "";
    color ? setColor(color) : "";
  };

  const getPropsStyle = () => {
    if (position) {
      let str = [];
      if ((position.trim() && position.split(" ")).length <= 2) {
        if (position.includes("top")) str.push(" top-1 ");
        if (position.includes("right")) str.push(" right-1 ");
        if (position.includes("left")) str.push(" left-1 ");
        if (position.includes("bottom")) str.push(" bottom-1");
        return str.join("");
      }
    } else {
      return avatarPosition;
    }
  };

  return (
    <div className='flex flex-col h-auto w-auto'>
      <div className='rounded-full relative '>
        {status &&
          ((statusImage && (
            <span
              className={`w-4 h-4  rounded-full border-3 bg-gray-300  border-white absolute flex items-center justify-center ${getPropsStyle()}`}
            >
              <img src={statusImage} className='h-full w-full max-w-max'></img>
            </span>
          )) ||
            (!statusImage && (
              <span
                className={`w-4 h-4  rounded-full border-3  border-white   absolute ${getPropsStyle()}`}
                style={{ backgroundColor: avatarColor }}
              ></span>
            )))}
        <img
          src={avatarpath}
          width={avatarWidth}
          height={avatarHeight}
          className='max-w-max object-cover'
        ></img>
      </div>
    </div>
  );
}

export default Avatars;
