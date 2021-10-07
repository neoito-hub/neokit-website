import React, { useState, useEffect } from "react";

function Tags({
  children,
  href,
  removable,
  position,
  rounded,
  color,
  maxLength,
  text
}) {
  const [tagsState, setTagsState] = useState("");
  const [tagsRemove, setTagRemove] = useState(true);
  const [tagsColors, setTagColor] = useState("");
  // useEffect(() => {
  //   getProps();
  //   getTagsColor();
  // }, []);
  const getProps = () => {
    if (href) setTagsState("cursor-pointer hover:bg-gray-200");
    else setTagsState("cursor-default");
  };

  const getTagsColor = () => {
    if ((!color || color) === "standard") {
      setTagColor("");
    } else if (color === "black") {
      setTagColor("white");
    } else {
      setTagColor("black");
    }
  };
  const getColor = () => {
    if (color) {
      if (color.trim() === "black") {
        return {
          backgroundColor: color.trim(),
          color: "white"
        };
      } else
        return {
          backgroundColor: color.trim(),
          color: "black"
        };
    }
  };

  return (
    <div>
      {tagsRemove && (
        <div
          class={
            `text-sm font-medium inline-flex items-center justify-center py-1 px-2  rounded  text-gray-600 bg-gray-100  focus:outline-none  ${
              removable
                ? "hover:text-red-400 pointer-events-none hover:bg-red-100 "
                : " hover:bg-gray-200 "
            } , ${
              removable && href ? "hover:text-gray-500 pointer-events-auto" : ""
            } ${rounded ? " rounded-3xl" : "rounded-sm"} ` + tagsState
          }
          style={getColor()}
        >
          <a
            href={href}
            className={` flex items-center justify-center gap-1  ${
              href ? "hover:underline text-blue-500 " : "no-underline"
            } ${
              !position || position === "before"
                ? "flex-row-reverse"
                : "flex-row"
            }`}
          >
            <div
              className='truncate '
              style={{
                maxWidth: maxLength ? maxLength : "200px"
              }}
            >
              {text}
            </div>
            <div>{children}</div>
          </a>
          {removable && (
            <button
              className='text-sm leading-none px-1 focus:outline-none pointer-events-auto hover:text-gray-500'
              onClick={() => setTagRemove(false)}
            >
              &times;
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Tags;
