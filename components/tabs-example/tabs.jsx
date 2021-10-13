import React, { useState } from "react";

const Tabs = ({ children, appearance }) => {
  const [openTab, setOpenTab] = useState(0);

  return (
    <div className='flex flex-wrap tabs-container'>
      
        <ul
          className='flex mb-0 w-full list-none flex-wrap pt-3 pb-0 flex-row border-b-3 border-gray-300 gap-2 tab-list '
          role='tablist'
        >
          {children.map((child, index) =>
            React.cloneElement(child, { index, setOpenTab, openTab })
          )}
        </ul>
        <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded mt-3 tab-panel '>
          {children.map((child, index) => {
            return openTab === index ? (
              <div className='px-4 py-5 flex-auto tab-panel-container'>
                <div
                  className={
                    "tab-content tab-space tab-animation-pannel " +
                    (appearance?.trim() === "fade-in-down"
                      ? "animate-fade-in-down "
                      : appearance?.trim() === "fade-out-down"
                      ? "animate-fade-out-down"
                      : appearance?.trim() === "fade-in-up"
                      ? "animate-fade-in-up"
                      : appearance?.trim() === "fade-out-up"
                      ? "animate-fade-out-up"
                      : "")
                  }
                >
                  {child.props.children}
                </div>
              </div>
            ) : (
              ""
            );
          })}
        </div>
     
    </div>
  );
};

export default Tabs;
