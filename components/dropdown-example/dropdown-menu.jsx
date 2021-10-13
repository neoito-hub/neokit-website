import React, { useEffect, useState } from "react";
import { createPopper } from "@popperjs/core";
import OutsideAlerter from "../../lib/use-onclick-outside";

const DropdownMenu = ({
  trigger,
  type,
  isArrow,
  children,
  shouldFitContainer,
  appearance,
  onChange,
}) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [10, 10],
          },
        },
      ],
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  useEffect(() => {
    if (onChange) {
      onChange(selectedValue);
    }
  }, [selectedValue]);

  return (
    <>
      <div className="flex flex-wrap w-full px-4 dropdown-wraper">

          <div
            className={
              "relative inline-flex align-middle dropdown-body " +
              (shouldFitContainer ? "w-full " : "")
            }
          >
            <OutsideAlerter
              id="outsideClick"
              outsideEvent={(event) => {
                setDropdownPopoverShow(false);
              }}
            >
              {!type || type?.trim() === "button" ? (
                <button
                  className={
                    " font-bold  text-sm px-6 py-3 rounded shadow  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dropdown-btn-text   " +
                    (dropdownPopoverShow
                      ? "bg-blue-850 text-blue-50"
                      : " bg-blue-50  text-gray-500")
                  }
                  type="button"
                  ref={btnDropdownRef}
                  onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow
                      ? closeDropdownPopover()
                      : openDropdownPopover();
                  }}
                >
                  <div className="flex item-center justify-between  gap-2">
                    <span className="flex item-center justify-between  btn-content">
                      {appearance?.trim() === "more" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="ellipsis-h"
                          className="svg-inline--fa fa-ellipsis-h fa-w-20 w-6 h-6"
                          role="img"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                          />
                        </svg>
                      ) : (
                        [trigger]
                      )}
                    </span>{" "}
                    <span className="flex item-center justify-between  gap-2 btn-down-icon">
                      {isArrow === false ? (
                        ""
                      ) : dropdownPopoverShow ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="angle-down"
                          className="svg-inline--fa fa-angle-down fa-w-10 w-5 h-5  my-auto"
                          role="img"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="white"
                            d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="angle-down"
                          className="svg-inline--fa fa-angle-down fa-w-10 w-5 h-5  my-auto"
                          role="img"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="gray"
                            d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                </button>
              ) : (
                ""
              )}

              <div
                className={ 
                  (dropdownPopoverShow ? "block " : "hidden ") +
                  (shouldFitContainer ? "  fit-continer " : "") + 'dropdown-list-wrapper'
                }
              >
                <ul
                  ref={popoverDropdownRef}
                  className={
                    " dropdown-list border text-base z-50 float-left py-2 list-none text-left rounded mt-1 bg-white shadow-xl top-4 dropdownList-wrapper modal-wrapper dropdown-container  overflow-y-auto" +
                    (shouldFitContainer ? " w-full" : "")
                  }
                  style={{ minWidth: "5rem", top: "10px" }}
                >
                  {/* {children} */}
                  {children.map((child, index, key) =>
                    React.cloneElement(child, {
                      child,
                      index,
                      key,
                      setDropdownPopoverShow,
                      setSelectedValue,
                    })
                  )}
                </ul>
              </div>
            </OutsideAlerter>
          </div>
      </div>
    </>
  );
};

export default DropdownMenu;
