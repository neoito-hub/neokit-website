import React, { Fragment } from "react";

const DropdownItem = ({ index, child, setDropdownPopoverShow,setSelectedValue, ...props }) => {
//   console.log(child.props.children, );
  return (
    <li className="hover:cursor-pointer dropdown-list-item">
      <a
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-200 focus:outline-none  hover:cursor-pointer dropdown-list-item-text "
        }
        key={index}
        tabIndex={index}
        onClick={() => {
          {};setDropdownPopoverShow(false);
          setSelectedValue(child.props.children)
        }}
        {...props}
      >
        {child.props.children}
      </a>
    </li>
  );
};

export default DropdownItem;
