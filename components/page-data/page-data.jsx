import React from "react";

function PageData({ title, description, subTitle, subDescription }) {
  return (
    <div>
      <h2 className='lg:text-3xl md:text-2xl text-xl text-primary font-normal'>
        {title}
      </h2>
      <p className='font-normal lg:text-base text-sm text-secondary py-3 text-left'>
        {description}
      </p>

      <div className='flex flex-col'>
        <h3
          className={`lg:text-xl md:text-lg text-base text-primary font-normal ${
            subTitle?.length ? "py-2 pb-4" : ""
          }`}
        >
          {subTitle}
        </h3>
        <p
          className={`font-normal lg:text-base text-sm text-secondary  text-left ${
            subDescription?.length ? "pt-1 pb-2" : ""
          }`}
        >
          {subDescription}
        </p>
      </div>
    </div>
  );
}

export default PageData;
