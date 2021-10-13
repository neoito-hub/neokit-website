import React from "react";

function HelperMessage({ children }) {
  return (
    <div className='w-auto text-xs text-gray-500  tracking-wider pt-0.5 font-medium helper-text'>
      <span>{children}</span>
    </div>
  );
}

export default HelperMessage;
