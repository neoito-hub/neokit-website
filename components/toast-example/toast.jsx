import React, { useState, useEffect } from "react";
import ToastItem from "./toastItem";

const Toast = ({
  type,
  id,
  position,
  title,
  description,
  isClose,
  autoDeleteTime,
  autoDelete,
}) => {
  const [list, setList] = useState([]);
  const [toastPosition, setToastPosition] = useState("top-right");
  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");
  let [checkValue, setCheckValue] = useState(false);
  // const [autoDismissTime, setAutoDismissTime] = useState(1000);
  const [isCloseIcon, setIsCloseIcon] = useState(true);
  let toastProperties = null;
  const autoDismissTime = 2000;
  const selectPosition = (e) => {};

  const showToast = (type) => {
    const id = Math.floor(Math.random() * 101 + 1);

    switch (type.toLowerCase().trim()) {
      case "success":
        toastProperties = {
          id,
          title: toastTitle ? toastTitle : "Success",
          description: toastDescription
            ? toastDescription
            : "This is a success toast component",
          backgroundColor: "#5cb85c",
          icon: "assets/toast-check.svg",
        };
        break;
      case "error":
        toastProperties = {
          id,
          title: toastTitle ? toastTitle : "Danger",
          description: toastDescription
            ? toastDescription
            : "This is a error toast component",
          backgroundColor: "#d9534f",
          icon: "assets/toast-error.svg",
        };
        break;
      case "info":
        toastProperties = {
          id,
          title: toastTitle ? toastTitle : "Info",
          description: toastDescription
            ? toastDescription
            : "This is an info toast component",
          backgroundColor: "#5bc0de",
          icon: "assets/toast-info.svg",
        };
        break;
      case "warning":
        toastProperties = {
          id,
          title: toastTitle ? toastTitle : "Warning",
          description: toastDescription
            ? toastDescription
            : "This is a warning toast component",
          backgroundColor: "#f0ad4e",
          icon: "assets/toast-warning.svg",
        };
        break;

      default:
        setList([]);
    }

    setList([...list, toastProperties]);
  };

  useEffect(() => {
    setToastTitle(title);
    setToastDescription(description);
    setIsCloseIcon(isCloseIcon);
    // if(autoDeleteTime) setAutoDismissTime(autoDeleteTime)
    setList([]);
  }, [position, title, description, isClose]);
  useEffect(() => {
    if (type) showToast(type);
  }, [type,id]);

  return (
    <div className="app">
      <ToastItem
        type={type ? type.toLowerCase().trim() : "success"}
        isClose={isCloseIcon}
        toastList={list}
        position={position ? position : toastPosition}
        autoDismiss={autoDelete ? autoDelete : autoDelete===false? false :true}
        dismissTime={autoDeleteTime ? autoDeleteTime : autoDismissTime}
      />
    </div>
  );
};

export default Toast;
