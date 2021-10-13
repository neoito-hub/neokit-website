import React from "react";

const Spinner = ({ size, appearance }) => {
  return (
    <div className="loader">
      {appearance?.trim() === "loader" ? (
        <div class=" flex justify-start items-start w-max spinner-wrapper">
          <div
            class={`animate-spin rounded-full  border-b-2 border-gray-900  ${
              typeof size === "string"
                ? size?.trim() === "xsmall"
                  ? " h-4 w-4 spinner-xsmall "
                  : size?.trim() === "small"
                  ? " w-7 h-7 spinner-small "
                  : size?.trim() === "medium"
                  ? " w-10 h-10 spinner-medium "
                  : size?.trim() === "large"
                  ? " w-12 h-12 spinner-large "
                  : size?.trim() === "xlarge"
                  ? " w-16 h-16 spinner-xlarge "
                  : " w-7 h-7 "
                : " w-7 h-7 spinner-defualt "
            } `}
            style={{
              width: typeof size === "number" ? size : "",
              height: typeof size === "number" ? size : "",
            }}
          ></div>
        </div>
      ) : appearance?.trim() === "dual-loader" ? (
        <div class=" flex justify-start items-start w-max dual-loader">
          <div
            class={`animate-spin rounded-full  border-t-2 border-b-2 border-purple-500  ${
              typeof size === "string"
                ? size?.trim() === "xsmall"
                  ? " h-4 w-4 spinner-xsmall "
                  : size?.trim() === "small"
                  ? " w-7 h-7 spinner-small "
                  : size?.trim() === "medium"
                  ? " w-10 h-10 spinner-medium "
                  : size?.trim() === "large"
                  ? " w-12 h-12 spinner-large "
                  : size?.trim() === "xlarge"
                  ? " w-16 h-16 spinner-xlarge "
                  : " w-7 h-7 "
                : " w-7 h-7 spinner-defualt "
            } `}
            style={{
              width: typeof size === "number" ? size : "",
              height: typeof size === "number" ? size : "",
            }}
          ></div>
        </div>
      ) : (
        <span className=" w-max  flex items-center justify-center ">
          {/* <svg
          className={`animate-spin  text-blue-500  ${
            typeof size === "string" &&
            (size?.trim() === "xsmall"
              ? " h-4 w-4 "
              : size?.trim() === "small"
              ? " w-5 h-5 "
              : size?.trim() === "medium"
              ? " w-6 h-6 "
              : size?.trim() === "large"
              ? " w-7 h-7 "
              : size?.trim() === "xlarge"
              ? " w-8 h-8 "
              : " w-5 h-5 ")
          }`}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          style={{
            width: typeof size === 'number' ? size : "",
            height: typeof size === 'number' ? size : ""
          }}
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
        </svg> */}
          <svg
            viewBox="0 0 50 50"
            className={`spinner   text-blue-500  ${
              typeof size === "string"
                ? size?.trim() === "xsmall"
                  ? " h-4 w-4 spinner-xsmall "
                  : size?.trim() === "small"
                  ? " w-7 h-7 spinner-small "
                  : size?.trim() === "medium"
                  ? " w-10 h-10 spinner-medium "
                  : size?.trim() === "large"
                  ? " w-12 h-12 spinner-large "
                  : size?.trim() === "xlarge"
                  ? " w-16 h-16 spinner-xlarge "
                  : " w-7 h-7 "
                : " w-7 h-7 spinner-defualt "
            }`}
          >
            <circle
              class="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke-width="5"
            ></circle>
          </svg>
        </span>
      )}
    </div>
  );
};

export default Spinner;
