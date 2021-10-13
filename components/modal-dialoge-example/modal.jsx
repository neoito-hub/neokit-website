import React, { useState, useEffect } from "react";

const Modal = ({ modal, children, onchange  , styles , appearance , ...props }) => {
  const [openModal, setIsOpen] = useState(false);
  // const setModal = () => {

  useEffect(() => {
    if (modal) {
      openModal ? "" : setIsOpen(true);
    } else {
      openModal ? "" : setIsOpen(false);
    }
  }, [modal]);

  //   if (modal) {
  //     setIsOpen(!openModal);
  //   }
  //   else  setIsOpen(false)
  // };

  const handleChange = () => {
    onchange(false);
  };
  return (
    <>
      {modal ? (
        <div className="modal-container">
          <div
            className={
              "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed outline-none focus:outline-none model-wrapper inset-0 m-auto modal-translation w-max modal-wrapper rounded-lg bg-white "
            }
          >
            <div className={`relative w-auto mx-auto  modal-overflow ${appearance?.trim()=== 'small' ? 'max-w-sm small-container ' : appearance?.trim()=== 'large' ? 'max-w-3xl large-container ' : appearance?.trim()=== 'x-large' ? 'max-w-6xl x-large ' : 'max-w-xl default-container ' }`}  style={styles} >
              {/*content*/} 
              {children}
            </div>
          </div>

          <div
            className={`menu-overlay fixed left-0 bottom-0 top-0 menu-overlay  ${
              modal
                ? "open-menu-overlay block opacity-1 right-0"
                : "hidden  opacity-0"
            }`} {...props}
            // onClick={() => handleChange()}
          ></div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
