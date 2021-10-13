import React from "react";

function Textfields({ ...props }) {
  return (
    <>
      <input
        className='appearance-none border-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-100 focus:bg-transparent input-box '
        {...props}
      />
    </>
  );
}

export default Textfields;
