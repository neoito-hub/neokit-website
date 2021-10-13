import React from "react";

const EmptyState = ({
  header,
  description,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  isLoading,
  imageUrl,
  imageWidth,
  imageHeight,
  width
}) => {
  return (
    <div className='flex flex-col w-full items-center justify-center py-5 empty-state-wraper'>
      <div
        className={` ${
          width?.trim() === "narrow"
            ? "xl:w-5/12 lg:w-8/12 md:w-9/12 w-11/12 empty-narrow "
            : "xl:w-7/12 lg:w-9/12 md:w-10/12 w-11/12 empty-default "
        } flex flex-col items-center justify-center`}
      >
        {imageUrl && (
          <span className='py-3 mb-5 empty-state-image'>
            <img
              src={imageUrl}
              className='h-full  max-w-max'
              style={{
                height: imageHeight ? imageHeight : "50",
                width: imageWidth ? imageWidth : "50"
              }}
            ></img>
          </span>
        )}
        <h4 className='font-semibold xl:text-xl lg:text-lg text-base mb-4 tracking-wide text-gray-700 text-center empty-header'>
          {header}
        </h4>
        <p className='md:text-base text-sm font-normal text-gray-700 text-center empty-description' >
          {description}
        </p>
        {(primaryAction || secondaryAction || isLoading) && (
          <div className='flex flex-wrap w-full gap-2 items-center justify-center pt-4 empty-state-btn wrapper'>
            <span className="empty-secondary-btn"> {secondaryAction} </span>
            <span className="empty-primary-btn">{primaryAction}</span>

            {isLoading && (
              <span className=' w-20 h-5 flex items-center justify-center empty-loading'>
                <svg
                  className='animate-spin h-7 w-7 text-blue-700'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-10'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    stroke-width='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              </span>
            )}
          </div>
        )}
        {tertiaryAction && (
          <div className='flex flex-wrap w-full gap-2 items-center justify-center pt-4 empty-tertiary'>
            <span> {tertiaryAction} </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
