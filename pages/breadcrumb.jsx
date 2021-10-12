import React from "react";
import Breadcrumbs from "../components/breadcrumb-example/breadcrumbs";
import BreadcrumbsItem from "../components/breadcrumb-example/breadcrumbs-Item";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";

function Breadcrumb() {
  const bannerWarnning = `import React from 'react';
    import Banners from '@neoKit/banner';

            const Banners = () => {
            return (
                <Banners appearance="warning" color="#253858" icon={'assets/warning.svg'}> 
                Warning goes here </Banners>
            )
    };
    export default Banners;
    `;
  return (
    <div className="flex flex-col  w-full flex-start">
      <PageData
        title="Breadcrumbs"
        description="Breadcrumbs are a navigation system used to show a user's location in a site or app."
      />

      {/* Default */}
      <section>
        <PageData
          subTitle="Default"
          subDescription="The default form of breadcrumbs."
        />
        <div className="py-2">
          <Breadcrumbs>
            <BreadcrumbsItem href="/item" text="Item 1"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 2"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 3"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 4"></BreadcrumbsItem>
          </Breadcrumbs>
        </div>
        <div className="w-full pt-3">
          <Snipet code={bannerWarnning} />
        </div>
      </section>
      {/* Long breadcrumbs */}
      <section>
        <PageData
          subTitle="Long breadcrumbs"
          subDescription="When a breadcrumb contains more than eight items, the breadcrumb auto-collapses and uses ellipses to indicate more information. The first and last items are shown by default. Users expand the breadcrumb by clicking on the ellipsis."
        />
        <div className="py-2">
          <Breadcrumbs>
            <BreadcrumbsItem href="/item" text="Item 1"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 2"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 3"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 4"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 5"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 6"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 7"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 8"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 9"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 10"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 11"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 12"></BreadcrumbsItem>
          </Breadcrumbs>
        </div>
        <div className="w-full pt-3">
          <Snipet code={bannerWarnning} />
        </div>
      </section>

            {/* Max items */}
            <section>
        <PageData
          subTitle="Max items"
          subDescription="The maximum number of items in a breadcrumb can be customized. When there are more than the maximum number, the breadcrumb auto-collapses."
        />
        <div className="py-2">
          <Breadcrumbs maxItems={4}>
            <BreadcrumbsItem href="/item" text="Item 1"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 2"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 3"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 4"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 5"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 6"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 7"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 8"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 9"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 10"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 11"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 12"></BreadcrumbsItem>
          </Breadcrumbs>
        </div>
        <div className="w-full pt-3">
          <Snipet code={bannerWarnning} />
        </div>
      </section>

       {/* Truncation width */}
       <section>
        <PageData
          subTitle="Truncation width"
          subDescription="When a truncationWidth is specified, long item names will truncate and a tooltip containing the full item name will appear on hover. If unspecified, truncation will only occur when an item cannot fit alone on a line."
        />
        <div className="py-2">
          <Breadcrumbs maxItems={4}>
            <BreadcrumbsItem href="/item" text="Item 1"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 2"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 3"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 4"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 5"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 6"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 7"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 8"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 9"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 10"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="Item 11"></BreadcrumbsItem>
            <BreadcrumbsItem href="/item" text="The new Confluence experience will soon be on for everyone"  truncationWidth={100}></BreadcrumbsItem>
          </Breadcrumbs>
        </div>
        <div className="w-full pt-3">
          <Snipet code={bannerWarnning} />
        </div>
      </section>
    </div>
  );
}

export default Breadcrumb;
