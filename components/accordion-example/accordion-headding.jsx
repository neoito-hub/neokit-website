import React, { useState } from "react";
import Link from "next/link";

const AccordionHeadding = ({
  children,
  child,
  setShow,
  index,
  show,
  currentTab,
  activeAccordian,
  activatedTab,
  isOpened,
  isDisabled
}) => {
  console.log(activatedTab);
  return (
    <>
      <div
        className={
          `flex justify-between  no-select accordion-title  bg-gray-200 p-3 rounded  gap-5 px-4 ` +
          (isDisabled ? " pointer-events-none " : "")
         }
        onClick={() => activeAccordian(currentTab)}
      >
        <p className=' text-base font-bold text-gray-500 whitespace-pre-wrap break-all'>
          {children}
        </p>
        <span className=''>
          <img
            src='assets/arrow-down.svg'
            className={`h-full w-full max-w-max mt-0.5 transform transition duration-500 ease-in-out ${
              isOpened
                ? show === currentTab
                  ? "rotate-0 "
                  : "-rotate-180"
                : activatedTab === currentTab
                ? "-rotate-180 "
                : "rotate-0"
            }`}
            style={{ width: "23px", height: "23px" }}
          />
        </span>
      </div>
    </>
  );
};

export default AccordionHeadding;
