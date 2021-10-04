import React, { Component, useState } from "react";
import { createPopper } from "@popperjs/core";

const Tooltips = ({
  color,
  children,
  content,
  position,
  component,
  truncate
}) => {
  const [tooltipShow, setTooltipShow] = useState(false);
  const btnRef = React.createRef();
  const tooltipRef = React.createRef();
  const openTooltip = () => {
    createPopper(btnRef.current, tooltipRef.current, {
      placement: position ? position.trim() : "bottom"
    });
    setTooltipShow(true);
  };
  const closeTooltip = () => {
    setTooltipShow(false);
  };
  return (
    <>
      <div className='flex flex-wrap'>
        <span
          className={
            " w-max outline-none focus:outline-none ease-linear transition-all duration-150"
          }
          onMouseEnter={openTooltip}
          onMouseLeave={closeTooltip}
          ref={btnRef}
        >
          {children}
        </span>
        <div
          onMouseEnter={openTooltip}
          onMouseLeave={closeTooltip}
          className={
            (tooltipShow ? "" : "hidden ") +
            " cursor-default border-0 mb-3 block z-50 font-medium leading-normal text-xs w-max max-w-xs text-left no-underline break-words rounded  "
          }
          ref={tooltipRef}
        >
          <div
            className='m-1 rounded'
            style={{ backgroundColor: color ? color : "rgba(0, 0, 0, 0.8);" }}
          >
            {component ? (
              <div className='text-white  '>{component}</div>
            ) : (
              <div
                className={
                  (truncate ? " truncate " : " ") + " text-white p-1 px-2  "
                }
              >
                {content}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Tooltips;
