import React,{useState, useEffect} from 'react';
import OutsideAlerter from "../../lib/use-onclick-outside";

const Accordion = ({children,isOpen}) => {
   
    const [outsideState, setOutsideState] = useState(false);
    const [activatedTab, setActivatedTab] = useState(0);   
    const [isOpened, setIsOpened] = useState(false);   
    const showActivatedTab = (e) => {
        if (e === activatedTab) {
          setActivatedTab(0);
        } else {
          setActivatedTab(e);
        }
      };

      useEffect(() => {
       if(isOpen) setIsOpened(true);
      }, []);
    


    return (
        <OutsideAlerter outsideEvent={(event) => setOutsideState(event)}>   
        <div className="accordion-wrapper">
            {children.map((child, index ) =>
          React.cloneElement(child, {child, index, outsideState ,showActivatedTab , activatedTab ,isOpened})
        )}
        </div>
        </OutsideAlerter>
    )
}

export default Accordion
