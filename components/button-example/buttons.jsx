import React, { useState, useEffect } from "react";
import Link from "next/link";
import link from "next/link";

function Buttons({
  children,
  appearance,
  href,
  isDisabled,
  isSelected,
  isLoading,
  shouldFitContainer,
  icon,
  position,
  ...props
}) {
  const [buttonColor, setButtonColor] = useState("");
  const [buttonBGColor, setButtonBGColor] = useState("");

  useEffect(() => {
    getProps();
    getAttributes();
  }, []);
  const getProps = () => {
    if (appearance === "default" || !appearance) {
      setButtonColor(" text-gray-700 ");
      setButtonBGColor(" bg-gray-200 hover:bg-gray-300 default-btn  ");
    } else if (appearance === "primary") {
      setButtonColor(" text-white");
      setButtonBGColor(" bg-blue-700 hover:opacity-70 primary-btn ");
    } else if (appearance === ("subtle" || "secondary")) {
      setButtonColor(" text-gray-700 ");
      setButtonBGColor("bg-transparent hover:bg-gray-200 subtle-btn ");
    } else if (appearance === "link") {
      setButtonColor(" text-blue-700 btn-link ");
      setButtonBGColor(" bg-transparent hover:underline ");
    } else if (appearance === ("subtle-link" || "secondary-link")) {
      setButtonColor(" text-gray-500");
      setButtonBGColor(" bg-transparent hover:underline subtle-link-btn ");
    } else if (appearance === "warning") {
      setButtonColor(" text-gray-700");
      setButtonBGColor(" bg-yellow-400 hover:opacity-70 warning-btn ");
    } else if (appearance === "danger") {
      setButtonColor(" text-white");
      setButtonBGColor(" bg-red-500 hover:opacity-70 danger-btn ");
    }
  };
  const getAttributes = () => {
    if (isDisabled) {
      setButtonColor(" text-gray-700 cursor-not-allowed btn-disabled ");
      setButtonBGColor(" bg-gray-300 opacity-60 ");
    } else if (isSelected) {
      setButtonColor(" text-white");
      setButtonBGColor(" bg-blue-900 hover:opacity-100 btn-selected ");
    } else if (isLoading) {
    }
  };
  const  buttonClick=()=>{

  
  }

  return (
    <>
      {(appearance && appearance === "link") ||
      appearance === ("subtle-link" || "secondary-link") ? (
        <a href={href} className="button-link">
          <button
            type='button'
            tabIndex='0'
            {...props}
            className={
              `focus:outline-none rounded items-baseline inline-flex px-2.5  w-auto align-middle cursor-pointer truncate text-center  font-medium py-1.5 text-sm tracking-wide  ${isDisabled ?  'text-gray-700 cursor-not-allowed  bg-gray-300 opacity-60 ': '' }  ` +
              buttonColor +
              buttonBGColor
            }
          >
            <span className='flex-grow flex-shrink my-0 mx-0.5 truncate transition link-text '>
              {children}
            </span>
          </button>
        </a>
      ) : (
        <button
          type='button'
          tabIndex='0'
           {...props}
          className={
            `rounded items-baseline inline-flex px-2.5   align-middle  truncate text-center  font-medium py-1.5 text-sm tracking-wide focus:outline-none ${
              isLoading ? " cursor-default loading-button " : "cursor-pointer "
            }  ${shouldFitContainer ? " w-full btn-full " : " w-auto btn-auto "}  ${isDisabled ?  appearance === "primary" ? ' text-white  cursor-not-allowed  bg-gray-300 opacity-60 ' : 'text-gray-700 cursor-not-allowed  bg-gray-300 opacity-60 ': '' } ` +
            buttonColor +
            buttonBGColor
          }
          style={{ opacity: isLoading && "100%" }}
          disabled={isDisabled}
        >
          {isLoading ? (
            <span className=' w-20 h-5 flex items-center justify-center loading-btn'>
              <svg
                className='animate-spin h-5 w-5 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  stroke-width='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
            </span>
          ) : (
            <div className={`flex items-center justify-center gap-1 btn-icon ${icon && position === 'after' ? 'flex-row-reverse' : 'flex-row'} `}>
             { icon && <img src={icon} className='h-full w-full max-w-max'></img>}
              <span className='flex flex-grow flex-shrink my-0 mx-0.5 truncate transition btn-text  '>
                {children}
              </span>
            </div>
          )}
        </button>
      )}
    </>
  );
}

export default Buttons;
