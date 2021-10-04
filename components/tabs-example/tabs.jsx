import React, { useState } from "react";


const Tabs = ({ children }) => {
  const [openTab, setOpenTab] = useState(1);
  const color = "pink";
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full'>
         {children}
        </div>
      </div>
    </>
  );
};

export default Tabs;
