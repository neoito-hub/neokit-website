import React, { useState, useEffect } from "react";

function badges({ children, appearance, max }) {
  const [badgeColor, setBadgeColor] = useState("");
  const [badgeBGColor, setBadgeBGColor] = useState("");
  const [badgeValue, setBadgeValue] = useState("0");

  useEffect(() => {
    getProps();
  }, []);
  const getProps = () => {
    if (appearance === "default" || !appearance) {
      setBadgeColor("text-grey-600");
      setBadgeBGColor(" bg-gray-200 ");
      setBadgeValue(children);
    } else if (appearance === "primary") {
      setBadgeColor("text-gray-200");
      setBadgeBGColor(" bg-blue-700");
      setBadgeValue(children);
    } else if (appearance === "primaryInverted") {
      setBadgeColor(" text-blue-500 ");
      setBadgeBGColor(" bg-white");
      setBadgeValue(children);
    } else if (appearance === "important") {
      setBadgeColor(" text-gray-200");
      setBadgeBGColor(" bg-red-500");
      setBadgeValue(children);
    } else if (appearance === "added") {
      setBadgeColor(" text-green-700 ");
      setBadgeBGColor(" bg-green-100 ");
      if (max && max < children) {
        return setBadgeValue(max + "+");
      } else if (max) return setBadgeValue(children + "+");
      else setBadgeValue(children);
    } else if (appearance === "removed") {
      setBadgeColor(" text-red-700 ");
      setBadgeBGColor(" bg-red-100 ");
      setBadgeValue(children);
    }
    //  else if(appearance === 'removed'){
    //     setBadgeColor(' text-red-700 ')
    //     setBadgeBGColor(' bg-red-100 ');
    //  }
  };
  return (
    <div
      className={`flex flex-col px-10 ${
        appearance === "primaryInverted" ? "w-full py-4 bg-blue-700  " : ""
      }`}
    >
      <div
        className={
          "text-sm leading-none font-normal rounded-full px-2 py-1 w-max flex items-center justify-center " +
          badgeColor +
          badgeBGColor
        }
      >
        {badgeValue}
      </div>
    </div>
  );
}

export default badges;
