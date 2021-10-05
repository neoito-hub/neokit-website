import React, { Fragment } from "react";

const SectionMessageAction = ({ href,target , children, ...props }) => {
  return (
    <Fragment>
      <a href={href ? href : "javascript:void(0)"} target={(target && href)?'_blank':''}>
        <button 
          class='text-blue-800 background-transparent font-bold capitalize py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:underline'
          type='button'
          {...props}
        >
          {children}
        </button>
      </a>
    </Fragment>
  );
};

export default SectionMessageAction;
