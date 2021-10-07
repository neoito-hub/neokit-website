import React, { useState, useEffect } from "react";

const AccordionItem = ({
  children,
  child,
  index,
  outsideState,
  showActivatedTab,
  activatedTab,
  isOpened,
  isDisabled
}) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [show, setShow] = useState(0);
  useEffect(() => {
    // console.log(outsideState);
  }, [outsideState]);

  useEffect(() => {
    setCurrentTab(++index);
  }, []);

  const activeAccordian = (e) => {
    // console.log(e, "event");
    
    if(isOpened){
        if (e === show) {
            setShow(0);
          } else {
            setShow(e);
          }
    }
    else{
        showActivatedTab(e);
    }
   
  };
  return (
    <div className=' w-full mx-auto my-px h-auto "'>
      <div className={` flex flex-col w-full m-0  py-1 accordion ` +(isDisabled ? " cursor-not-allowed opacity-70 " : " cursor-pointer ")}>
        {child.props.children.map((child, index) =>
          React.cloneElement(child, {
            child,
            index,
            currentTab,
            show,
            setShow,
            activeAccordian,
            activatedTab ,
            isOpened,isDisabled
          })
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
