import React from "react";
import ReactPaginate from 'react-paginate';

const Pagination = ({...props}) => {
  const handlePageClick = (e) => {
    console.log(++(e.selected));
  };
  return (
    <>
      <ReactPaginate
        previousLabel={<>&laquo;</>}
        nextLabel={<>&raquo;</>}
        breakLabel={"..."}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={10}
        pageRangeDisplayed={5}
        onPageChange={(e) => handlePageClick(e)}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        {...props}
      />
    </>
  );
};

export default Pagination;
