import React from 'react'
import BreadcrumbsItem from './breadcrumbs-Item';

function Breadcrumbs( {children}) {
    return (
        <div className="flex items-start gap-2">
           {children}
        </div>
    )
}
export default Breadcrumbs;
