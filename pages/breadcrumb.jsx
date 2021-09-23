import React from 'react'
import Breadcrumbs from '../components/breadcrumb-example/breadcrumbs'
import BreadcrumbsItem from '../components/breadcrumb-example/breadcrumbs-Item'

function Breadcrumb() {
    return (
        <div className="flex gap-2">
          <Breadcrumbs>
                <BreadcrumbsItem  href="/item" text="Item 1" ></BreadcrumbsItem>
                <BreadcrumbsItem href="/item" text="Item 1"></BreadcrumbsItem>
                <BreadcrumbsItem href="/item" text="Item 1"></BreadcrumbsItem>
                <BreadcrumbsItem href="/item" text="Item 1"></BreadcrumbsItem>
        </Breadcrumbs>
           
        </div>
    )
}

export default Breadcrumb
