import React, { useState,useEffect } from "react";
import BreadcrumbsItem from './breadcrumbs-Item';

function Breadcrumbs( {maxItems,children}) {
    const [breadcrumbView, setBreadcrumbView] = useState(true);
    const [breadcrumbMaxView, setBreadcrumbMaxView] = useState(3);
    const [breadcrumbType, setBreadcrumbMaxType] = useState(1);
    const breadcrumbCount = children?.length;
    const limit='';
    useEffect(() => {
        setBreadcrumbMaxView(maxItems)
        if(maxItems) {
            const limit = 
            setBreadcrumbMaxView(parseInt(maxItems / 2))
            setBreadcrumbMaxType(maxItems % 2)
        }
        else{
            setBreadcrumbMaxView(parseInt(3 / 2))
        }
        
        
    }, [breadcrumbMaxView])
    return (
        <div className="flex items-center gap-2 breadcrumb-wrapper">
           {/* {children(breadcrumbCount)} */}
           {children.map((child, index) =>
            React.cloneElement(child, {child, index, breadcrumbCount,breadcrumbView ,setBreadcrumbView,breadcrumbMaxView,breadcrumbType})
          )}
        </div>
    )
}
export default Breadcrumbs;
