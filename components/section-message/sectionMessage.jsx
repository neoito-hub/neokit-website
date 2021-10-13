import React from "react";

const SectionMessage = ({ title, appearance, actions, children, ...props }) => {
  return (
    <>
      <div
        className={
          "flex w-full mx-auto overflow-hidden rounded  my-5 p-5 items-start section-color " +
          (appearance?.trim() === "warning"
            ? " bg-yellow-100  "
            : appearance?.trim() === "error"
            ? " bg-red-100 "
            : appearance?.trim() === "discovery"
            ? " bg-purple-200 "
            : " bg-blue-100 ")
        }
      >
        <div className="flex items-start justify-center w-6 pt-0.5">
          {appearance?.trim() === "success" ? (
            <img
              src="assets/tick-circle.svg"
              className="h-full w-full max-w-max mt-0.5 success-image"
              style={{ width: "23px", height: "23px" }}
            />
          ) : appearance?.trim() === "warning" ? (
            <img
              src="assets/warning.svg"
              alt="warning"
              className="h-full w-full max-w-max mt-0.5 warning-image "
              style={{ width: "25px", height: "25px" }}
            />
          ) : appearance?.trim() === "error" ? (
            <img
              src="assets/diamond-warning.svg"
              alt="discover"
              className="h-full w-full max-w-max mt-0.5 error-image "
              style={{ width: "23px", height: "23px" }}
            />
          ) : appearance?.trim() === "discovery" ? (
            <img
              src="assets/question.svg"
              alt="default"
              className="h-full w-full max-w-max mt-0.5 discovery-image "
              style={{ width: "23px", height: "23px" }}
            />
          ) : (
            <img
              src="assets/section-default.svg"
              alt="default"
              className="h-full w-full max-w-max default-image "
              style={{ width: "25px", height: "25px" }}
            />
          )}
        </div>

        <div className="mx-3 pt-0.5">
          <span className="font-semibold  dark:text-blue-400 text-gray-800 text-lg section-title">
            {title}
          </span>
          <p className="text-sm text-gray-900 tracking-wider font-normal  leading-6 section-description ">
            {children}
          </p>
          <div className="flex items-center justify-start gap-3 flex-wrap section-btn ">
            {Array.isArray(actions) ? actions?.map((item) => item) : actions}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionMessage;
