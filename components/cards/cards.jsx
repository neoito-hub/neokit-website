import React from "react";

const Cards = ({ src, alt, title, description, appearance }) => {
  return (
    <>
      <div
        className={
          " w-full overflow-hidden rounded-lg shadow-lg relative card-wrapper " +
          (appearance?.trim() === "horizontal"
            ? " max-w-lg sm:flex "
            : " max-w-xs ")
        }
      >
        {src && (
          <div
            className={
              "w-full card-image " +
              (appearance?.trim() === "horizontal"
                ? " sm:w-1/3 "
                : ' ')
            }
          >
            <img className="object-cover w-full h-48 " src={src} alt={alt} />{" "}
          </div>
        )}
        {(title || description) && (
          <div className={"px-6 py-4 flex-1 card-body " + ( appearance?.trim() === "overlay"
          ? " absolute top-0 left-0 text-white "
          : " text-gray-700 ")}>
            <h4 className="mb-3 text-xl font-semibold tracking-tight card-title ">
              This is the title
            </h4>
            <p className="leading-normal opacity-80 card-description ">
              Lorem ipsum dolor, sit amet cons ectetur adipis icing elit.
              Praesen tium, quibusdam facere quo laborum maiores sequi nam
              tenetur laud.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cards;
