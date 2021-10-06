import React, { useState } from "react";
import Toast from "../components/toast-example/toast";

const ToastExample = () => {
    const [autoDeleteTime, setAutoDeleteTime] = useState(0);
  const [toast, setToast] = useState(false);
  const [list, setList] = useState([]);
  let toastProperties = null;

  const showToast = (type) => {
    const id = Math.floor((Math.random() * 101) + 1)
    console.log(type);;
    switch(type) {
      
      case 'success':
        toastProperties = {
          id,
          title: 'Success',
          description: 'This is a success toast component',
          backgroundColor: '#5cb85c',
         
        }
        break;
      case 'danger':
        toastProperties = {
          id,
          title: 'Danger',
          description: 'This is a error toast component',
          backgroundColor: '#d9534f',
        
        }
        break;
      case 'info':
        toastProperties = {
          id,
          title: 'Info',
          description: 'This is an info toast component',
          backgroundColor: '#5bc0de',
          
        }
        break;
      case 'warning':
        toastProperties = {
          id,
          title: 'Warning',
          description: 'This is a warning toast component',
          backgroundColor: '#f0ad4e',
         
        }
        break;

        default:
          setList([]);
    }
    
    setList([...list, toastProperties]);
    console.log(list);
  }

  return (
    <div className='h-72 w-full'>
      <button onClick={() =>  showToast('danger')}> click me</button>

        <Toast
          toastList={list}
          position={'top-right'}
          autoDelete={true}
          autoDeleteTime={10}
        ></Toast>

    </div>
  );
};

export default ToastExample;
