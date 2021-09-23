import React from "react";

function ProgressBars({ value ,isIndeterminate }) {
  return (
    <div class='relative pt-1'>
      <div class='overflow-hidden h-1.5 mb-4 text-xs flex rounded bg-gray-300'>
        <div
          style={{width: (value || !isIndeterminate )? value+'%' : '100%'}}
          class={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-700 ${isIndeterminate ? 'progress-bar-value': ''}`}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBars;
