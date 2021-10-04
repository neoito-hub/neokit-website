import React, { useState, useEffect } from "react";
import Tooltips from "../tooltip/tooltips";

const Tab = ({ children, openTab, index, setOpenTab, head, tooltip }) => {
  const color = "pink";
  return (
    <>
      <li className={"-mb-px mr-2 last:mr-0 relative top-0.5 cursor-pointer "}>
        {tooltip ? (
          <Tooltips content={tooltip ? tooltip : ""}>
            <a
              className={
                "text-xs font-bold capitalize  py-3  block leading-normal border-b-2 " +
                (openTab === index
                  ? "text-blue-600  border-blue-600"
                  : "text-gray-600 border-transparent")
              }
              onClick={() => setOpenTab(index)}
              data-toggle='tab'
              role='tablist'
            >
              {head}
            </a>
          </Tooltips>
        ) : (
          <a
            className={
              "text-xs font-bold capitalize  py-3  block leading-normal border-b-2 " +
              (openTab === index
                ? "text-blue-600  border-blue-600"
                : "text-gray-600 border-transparent")
            }
            onClick={() => setOpenTab(index)}
            data-toggle='tab'
            role='tablist'
          >
            {head}
          </a>
        )}
      </li>
    </>
  );
};

export default Tab;
