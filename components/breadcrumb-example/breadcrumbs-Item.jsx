import React from "react";
import Link from "next/link";

function BreadcrumbsItem(props) {
  return (
    <div className='flex'>
      <span className="pr-2">/</span>
      <span><Link href={props.href}>{props.text}</Link></span>
    </div>
  );
}

export default BreadcrumbsItem;
