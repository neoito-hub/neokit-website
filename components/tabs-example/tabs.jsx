import React, { useState } from "react";

const Tabs = ({ children, appearance }) => {
  const [openTab, setOpenTab] = useState(0);

  return (
    <div className='flex flex-wrap'>
      <div className='w-full'>
        <ul
          className='flex mb-0 list-none flex-wrap pt-3 pb-0 flex-row border-b-3 border-gray-300 gap-2'
          role='tablist'
        >
          {children.map((child, index) =>
            React.cloneElement(child, { index, setOpenTab, openTab })
          )}
        </ul>
        <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded mt-3'>
          {children.map((child, index) => {
            return openTab === index ? (
              <div className='px-4 py-5 flex-auto'>
                <div
                  className={
                    "tab-content tab-space " +
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
    </div>
  );
};

export default Tabs;
