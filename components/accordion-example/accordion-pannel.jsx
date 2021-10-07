import React from "react";
import Link from "next/link";

const AccordionPannel = ({
  children,
  child,
  setShow,
  index,
  show,
  currentTab,
  activatedTab,
  isOpened,
  isDisabled
}) => {
  return (
    <div
      className={'accordion-content overflow-hidden bg-white  px-4' +  (isDisabled ? " pointer-events-none " : "")}
      aria-expanded={
        isOpened
          ? show === currentTab
          : activatedTab === currentTab
          ? false
          : true
      }
    >
      <p className="pt-5 pb-2 text-gray-600 font-normal break-all whitespace-pre-wrap">{children}</p>
    </div>
  );
};

export default AccordionPannel;
