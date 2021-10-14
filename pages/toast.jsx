import React, { useState } from "react";
import Toast from "../components/toast-example/toast";
import Buttons from "../components/button-example/buttons";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";
import { Warning } from "postcss";

const ToastExample = () => {
  const childFunc = React.useRef(null);

  const successToast = `  
  import React, { useState } from "react";
  import Toast from '@neoKit/toast';
  const SuccessExample = () => {
    const [success, setSuccess] = useState(false);
    const showSuccess = () => {
      setSuccess(true);
    };
      return (
        <div className="flex gap-3">
        <Buttons onClick={() => showSuccess()}>Success</Buttons>
      </div>
      {success && (
        <Toast
          title="success"
          autoDelete
          autoDeleteTime={1500}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptates delectus sequi cupiditate nihil quos. Minima, magnam pariatur? Minima enim omnis perspiciatis blanditiis maiores, porro provident? Impedit animi blanditiis eos?"
          type="success"
          id={toastId}
        ></Toast>
      )}
      );
    };
    
    export default SuccessExample;`;

  const ErrorToast = `  
    import React, { useState } from "react";
    import Toast from '@neoKit/toast';
    const ErrorExample = () => {
      const [error, setError] = useState(false);
      const showError = () => {
        setError(true);

        setToastId(toastId + 1);
       
      };
        return (
          <div className="flex gap-3">
          <Buttons onClick={() => showError()}>Error</Buttons>
        </div>
        {error && (
          <Toast
            title="error"
            autoDelete
            autoDeleteTime={1500}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptates delectus sequi cupiditate nihil quos. Minima, magnam pariatur? Minima enim omnis perspiciatis blanditiis maiores, porro provident? Impedit animi blanditiis eos?"
            type="error"
            id={toastId}
          ></Toast>
        )}
        );
      };
      
      export default ErrorExample;`;

  const infoToast = `  
    import React, { useState } from "react";
    import Toast from '@neoKit/toast';
    const InfoExample = () => {
      const [info, setInfo] = useState(false);
      const showInfo = () => {
        setInfo(true);
        setToastId(toastId + 1);
      };
        return (
          <div className="flex gap-3">
          <Buttons onClick={() => showInfo()}>Info</Buttons>
        </div>
        {info && (
          <Toast
            title="info"
            autoDelete
            autoDeleteTime={1500}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptates delectus sequi cupiditate nihil quos. Minima, magnam pariatur? Minima enim omnis perspiciatis blanditiis maiores, porro provident? Impedit animi blanditiis eos?"
            type="info"
            id={toastId}
          ></Toast>
        )}
        );
      };
      
      export default InfoExample;`;
  const warningToast = `  
      import React, { useState } from "react";
      import Toast from '@neoKit/toast';
      const WarningExample = () => {
        const [warning, setWarning] = useState(false);
        const showWarning = () => {
          setWarning(true);
          setToastId(toastId + 1);
        };
          return (
            <div className="flex gap-3">
            <Buttons onClick={() => showInfo()}>Info</Buttons>
          </div>
          {warning && (
            <Toast
              title="Warning"
              autoDelete
              autoDeleteTime={1500}
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptates delectus sequi cupiditate nihil quos. Minima, magnam pariatur? Minima enim omnis perspiciatis blanditiis maiores, porro provident? Impedit animi blanditiis eos?"
              type="warning"
              id={toastId}
            ></Toast>
          )}
          );
        };
        
        export default WarningExample;`;
  const warningDeleteToast = `  
        import React, { useState } from "react";
        import Toast from '@neoKit/toast';
        const WarningDeleteExample = () => {
          const [warning, setWarning] = useState(false);
          const showWarning = () => {
            setWarning(true);
            setToastId(toastId + 1);
          };
            return (
              <div className="flex gap-3">
              <Buttons onClick={() => showInfo()}>Info</Buttons>
            </div>
            {warning && (
              <Toast
                title="Warning"
                autoDelete ={false}
                autoDeleteTime={1500}
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptates delectus sequi cupiditate nihil quos. Minima, magnam pariatur? Minima enim omnis perspiciatis blanditiis maiores, porro provident? Impedit animi blanditiis eos?"
                type="warning"
                id={toastId}
              ></Toast>
            )}
            );
          };
          
          export default WarningDeleteExample;`;

  const [type, setToastType] = useState("");
  const [toastId, setToastId] = useState(0);

  const [position, setPosition] = useState("top-left");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [info, setInfo] = useState(false);
  const [warning, setWarning] = useState(false);
  const showSuccess = () => {
    setSuccess(true);
    setError(false);
    setInfo(false);
    setWarning(false);
    setToastId(toastId + 1);
  };
  const showError = () => {
    setError(true);
    setSuccess(false);
    setInfo(false);
    setWarning(false);
    setToastId(toastId + 1);
  };
  const showInfo = () => {
    setError(false);
    setSuccess(false);
    setInfo(true);
    setWarning(false);
    setToastId(toastId + 1);
  };

  const showWarning = () => {
    setError(false);
    setSuccess(false);
    setInfo(false);
    setWarning(true);
    setToastId(toastId + 1);
  };

  return (
    <div className="flex flex-col  w-full flex-start">
      <PageData
        title="Toast"
        description="Elements that provide contextual feedback messages for user actions. The notification is a simple colored block meant to draw the attention to the user about something. In each toast we need a unique id"
      />

      {/* Success */}
      <section>
        <PageData
          subTitle="Success Toast"
          subDescription="Used to show  success messages"
        />
        <div className="py-2">
          <div className="flex gap-3">
            <Buttons onClick={() => showSuccess()}>Success</Buttons>
          </div>
          {success && (
            <Toast
              title="success"
              autoDelete
              autoDeleteTime={1500}
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptates delectus sequi cupiditate nihil quos. Minima, magnam pariatur? Minima enim omnis perspiciatis blanditiis maiores, porro provident? Impedit animi blanditiis eos?"
              type="success"
              id={toastId}
            ></Toast>
          )}
        </div>
        <div className="w-full pt-3">
          <Snipet code={successToast} />
        </div>
      </section>

      {/* Error */}
      <section>
        <PageData
          subTitle="Error Toast"
          subDescription="Used to show  error messages"
        />
        <div className="py-2">
          <div className="flex gap-3">
            <Buttons onClick={() => showError()}>Error</Buttons>
          </div>
          {error && (
            <Toast
              title="error"
              autoDelete
              autoDeleteTime={1500}
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptates delectus sequi cupiditate nihil quos. Minima, magnam pariatur? Minima enim omnis perspiciatis blanditiis maiores, porro provident? Impedit animi blanditiis eos?"
              type="error"
              id={toastId}
            ></Toast>
          )}
        </div>
        <div className="w-full pt-3">
          <Snipet code={ErrorToast} />
        </div>
      </section>

      {/* info */}
      <section>
        <PageData
          subTitle="info Toast"
          subDescription="Used to show  info messages"
        />
        <div className="py-2">
          <div className="flex gap-3">
            <Buttons onClick={() => showInfo()}>Info</Buttons>
          </div>
          {info && (
            <Toast
              title="info"
              autoDelete
              autoDeleteTime={1500}
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptates delectus sequi cupiditate nihil quos. Minima, magnam pariatur? Minima enim omnis perspiciatis blanditiis maiores, porro provident? Impedit animi blanditiis eos?"
              type="info"
              id={toastId}
            ></Toast>
          )}
        </div>
        <div className="w-full pt-3">
          <Snipet code={infoToast} />
        </div>
      </section>

      {/* warning */}
      <section>
        <PageData
          subTitle="Warning Toast"
          subDescription="Used to show  warning messages"
        />
        <div className="py-2">
          <div className="flex gap-3">
            <Buttons onClick={() => showWarning()}>Warning</Buttons>
          </div>
          {warning && (
            <Toast
              title="Warning"
              autoDelete
              autoDeleteTime={1500}
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptates delectus sequi cupiditate nihil quos. Minima, magnam pariatur? Minima enim omnis perspiciatis blanditiis maiores, porro provident? Impedit animi blanditiis eos?"
              type="warning"
              id={toastId}
            ></Toast>
          )}
        </div>
        <div className="w-full pt-3">
          <Snipet code={warningToast} />
        </div>
      </section>

      {/* warning */}
      <section>
        <PageData
          subTitle="Warning Toast with auto delete off"
          subDescription="Used to show  warning messages"
        />
        <div className="py-2">
          <div className="flex gap-3">
            <Buttons onClick={() => showWarning()}>Warning</Buttons>
          </div>
          {warning && (
            <Toast
              title="Warning"
              autoDelete={false}
              autoDeleteTime={1500}
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptates delectus sequi cupiditate nihil quos. Minima, magnam pariatur? Minima enim omnis perspiciatis blanditiis maiores, porro provident? Impedit animi blanditiis eos?"
              type="warning"
              id={toastId}
            ></Toast>
          )}
        </div>
        <div className="w-full pt-3">
          <Snipet code={warningDeleteToast} />
        </div>
      </section>
    </div>
  );
};

export default ToastExample;
