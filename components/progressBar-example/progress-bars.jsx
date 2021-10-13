import React from "react";

function ProgressBars({ value, isIndeterminate, isAnimated ,color }) {
  return (
    <>
      {isAnimated ? (
        <div className='progress-bar-wrapper w-full '>
          <div className='meter animate h-3 box-border relative rounded-3xl flex progress-animated'>
            <span style={{ width: value? value+'%' : '25%'}}>
              <span />
            </span>
            <small
              className='text-white pl-1 font-Helvetica'
              style={{ fontSize: "9.5px" }}
            >
             {value+'%'}
            </small>
          </div>
        </div>
      ) : (
        <div class='relative pt-1 progress-determinate '>
          <div class='overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 '>
            <div
              style={{
                width: value || !isIndeterminate ? value + "%" : "100%"
              }}
              class={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-700 ${
                isIndeterminate ? "progress-bar-value indetermate "  : ""
              }`}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProgressBars;
