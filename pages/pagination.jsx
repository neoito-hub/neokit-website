import React, { useState } from "react";
import Pagination from "../components/pagination-example/pagination";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";
import HelperMessage from "../components/helper-message/helper-message";

const PaginationExample = () => {
  const PaginationDefaultExample = `
    import React from 'react';
    import Pagination from '@neoKit/Pagination-bar';
    
    const PaginationDefaultExample = () => {
    return <Pagination pageCount={400}></Pagination>
    };

    export default PaginationDefaultExample;`;

    const PaginationWithEvent = `
    import React, { useState } from "react";
    import Pagination from '@neoKit/Pagination-bar';
    import HelperMessage from "@neoKit/helper-message"; 

    const PaginationWithEvent = () => {
        const [pageNumber, setPageNumber] = useState(1);
    return ( 
        <div>
        <Pagination
        pageCount={400}
        onPageChange={(e) => setPageNumber(++e.selected)}
        ></Pagination>
        <HelperMessage> 
          <p className=" py-2 text-base font-medium ">
            The current Page is: {pageNumber}{" "}
          </p>
        </HelperMessage>
    </div>
   ) };

    export default PaginationWithEvent;`;


    const PaginationWithText = `
    import React from 'react';
    import Pagination from '@neoKit/Pagination-bar';

    const PaginationWithText = () => {
    return ( 
        <div>
        <Pagination
        pageCount={400}
        onPageChange={(e) => {}}
        previousLabel={"Previous"}
        nextLabel={"Next"}
      ></Pagination>
    </div>
   ) };

    export default PaginationWithText;`;
    

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="flex flex-col  w-full flex-start">
      <PageData
        title="Progress bar"
        description="A progress bar displays the status of a given process."
      />

      {/* Default */}
      <section>
        <PageData
          subTitle="Default Pagination"
          subDescription="Default Pagination with bordered buttons."
        />
        <div className="py-2">
          <Pagination pageCount={400}></Pagination>
        </div>
        <div className="w-full pt-3">
          <Snipet code={PaginationDefaultExample} />
        </div>
      </section>
      {/* selected value */}
      <section>
        <PageData
          subTitle="Pagination with event"
          subDescription="pagination with selected pages"
        />
        <div className="py-2">
          <Pagination
            pageCount={400}
            onPageChange={(e) => setPageNumber(++e.selected)}
          ></Pagination>
          <HelperMessage>
            {" "}
            <p className=" py-2 text-base font-medium ">
              {" "}
              The current Page is: {pageNumber}{" "}
            </p>{" "}
          </HelperMessage>
        </div>
        <div className="w-full pt-3">
          <Snipet code={PaginationWithEvent} />
        </div>
      </section>

      {/* selected value */}
      <section>
        <PageData
          subTitle="Pagination with previos and next text"
          subDescription="pagination with previous and next text"
        />
        <div className="py-2">
          <Pagination
            pageCount={400}
            onPageChange={(e) => {}}
            previousLabel={"Previous"}
            nextLabel={"Next"}
          ></Pagination>
          
        </div>
        <div className="w-full pt-3">
          <Snipet code={PaginationWithText} />
        </div>
      </section>
    </div>
  );
};

export default PaginationExample;
