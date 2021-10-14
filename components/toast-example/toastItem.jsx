import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
const ToastItem = (props) => {
  const { toastList, position, autoDismiss, dismissTime, type ,isClose} = props;
  const [list, setList] = useState(toastList);
  

  useEffect(() => {
    setList([...toastList]);

    // eslint-disable-next-line
  }, [toastList]);

  useEffect(() => {
   
    const interval = setInterval(() => {
      if (autoDismiss && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, dismissTime);

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line
  }, [toastList, autoDismiss, dismissTime, list]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };
  return (
    <>
      <div className={`notification-container fixed ${position}`}>
        {list.map((toast, i) => (
          <div
            className={`flex  max-w-sm w-96 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 notification toast mb-2 hover:opacity-1 hover:cursor-pointer relative ${position}`}
            key={i}
          >
            <div
              className="flex items-center justify-center w-12 bg-green-500"
              style={{ backgroundColor: toast.backgroundColor }}
            >
              <img src={toast.icon} alt="" className="w-6 h-6" />
            </div>

            {/* (type==='success'? 'dark:bg-green-500' : type==='info'? 'dark:bg-blue-500' : type==='danger'? 'dark:bg-red-500' : type==='warning'? 'dark:bg-yellow-400' : ' dark:bg-green-500 ' )} */}
            {/* + (type==='success'? 'text-green-500' : type==='info'? 'text-blue-500' : type==='danger'? 'text-red-500' : type==='warning'? 'text-yellow-400' : 'text-green-500 ' )} */}

            <div className="px-4 py-2 -mx-3  w-10/12 ">
              <div className="mx-3">
                <div className="flex items-center justify-between ">
                  <span
                    className="font-semibold capitalize "
                    style={{ color: toast.backgroundColor }}
                  >
                    {toast.title}
                  </span>
                  { isClose &&(
                  <button className="text-gray-500 hover:text-gray-600  text-2xl font-bold focus:outline-none absolute right-3.5 " onClick={() => deleteToast(toast.id)}>&times;</button>
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-200 truncate">
                  {toast.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

ToastItem.propTypes = {
  toastList: PropTypes.array.isRequired,
  position: PropTypes.string,
  autoDismiss: PropTypes.bool,
  dismissTime: PropTypes.number,
  isClose:PropTypes.bool,
  type:PropTypes.string,
};

export default ToastItem;
