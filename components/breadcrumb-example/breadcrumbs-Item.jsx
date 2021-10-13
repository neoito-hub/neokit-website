import React, { useState } from "react";
import Link from "next/link";

function BreadcrumbsItem({ href, text, breadcrumbCount, child, index ,breadcrumbView ,setBreadcrumbView,breadcrumbMaxView,breadcrumbType, truncationWidth}) {
 
  // console.log(index, breadcrumbCount);
  return (
    <>
      {breadcrumbCount > 5 && breadcrumbView  ? (
        index >= breadcrumbMaxView && index <= breadcrumbCount - (breadcrumbType===1 ? breadcrumbMaxView+1: breadcrumbMaxView) ? (
          index === breadcrumbMaxView+1  && (
            <div className="flex breadcrumb  item-center justify-center font-medium breadcrumb-item">
              <span className="pr-2 text-gray-500 breadcrumb-item text-lg leading-none breadcrumb-icon ">
                /
              </span>
              <span className="text-gray-400 text-sm  leading-none my-auto hover:underline hover:cursor-pointer breadcrumb-link ">
                <a onClick={()=>setBreadcrumbView(false)}>...</a>
              </span>{" "}
            </div>
          )
        ) : (
          <div className="flex breadcrumb  item-center justify-center font-medium  breadcrumb-item">
            <span className="pr-2 text-gray-500  text-lg leading-none breadcrumb-icon">
              /
            </span>
            <span className="text-gray-400 text-sm  leading-none my-auto hover:underline truncate breadcrumb-link  " style={{maxWidth: truncationWidth? truncationWidth : ''}}>
              <Link href={href}>{text}</Link>
            </span>{" "}
          </div>
        )
      ) : (
        <div className="flex breadcrumb  item-center justify-center font-medium  breadcrumb-item">
          <span className="pr-2 text-gray-500  text-lg leading-none breadcrumb-icon">
            /
          </span>
          <span className="text-gray-400 text-sm  leading-none my-auto hover:underline truncate breadcrumb-link " style={{maxWidth: truncationWidth? truncationWidth : ''}}>
            <Link href={href}>{text}</Link>
          </span>{" "}
        </div>
      )}
    </>
  );
}

export default BreadcrumbsItem;
