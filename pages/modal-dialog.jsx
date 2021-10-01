import React, { useState } from "react";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";
import Buttons from "../components/button-example/buttons";
import Model from "../components/modal-dialoge-example/modal";
import Modal from "../components/modal-dialoge-example/modal";

const ModelDialog = () => {
  const DefaultExample = `
          import React, { useState } from "react";
          import Modal from '@neoKit/models';
        
          const DefaultExample = () => {
            const [openModal, setIsOpen] = useState(false);
            return (
                <>
                <div>
                <Buttons appearance='primary' onClick={() => setIsOpen(!openModal)}> Open modal </Buttons>
              <Modal
              modal={openModal}
              onClick={() => setIsOpen(!openModal)}
              styles={styles}
            >
              <div>
                  <p>
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
               
                {/*footer*/}
                <div>
                  <Buttons onClick={() => setIsOpen(!openModal)}> Close modal </Buttons>
                  <Buttons  appearance='primary' onClick={() => setIsOpen(!openModal)}>  Open modal  </Buttons>
               </div>
               </div>
            </Modal>
                </div>
              </>
            );
          };
          export default DefaultExample; 
`;

const WidthExample = `
import React, { useState } from "react";
import Modal from '@neoKit/models';

const DefaultExample = () => {
 
  const [openModalWidth, setIsOpenWidth] = useState(false);
  const [modalApperrance, setModalApperrance] = useState("medium");
  return (
      <>
      <div>
      <Buttons
      appearance='primary'
      onClick={() => {
        setIsOpenWidth(!openModalWidth);
        setModalApperrance("small");
      }}
    >
      small
    </Buttons>
    <Buttons
      appearance='primary'
      onClick={() => {
        setIsOpenWidth(!openModalWidth);
        setModalApperrance("medium");
      }}
    >
      medium
    </Buttons>
    <Buttons
      appearance='primary'
      onClick={() => {
        setIsOpenWidth(!openModalWidth);
        setModalApperrance("large");
      }}
    >
      large
    </Buttons>
    <Buttons
      appearance='primary'
      onClick={() => {
        setIsOpenWidth(!openModalWidth);
        setModalApperrance("x-large");
      }}
    >
      x-large
    </Buttons>
    <Modal
    modal={openModal}
    onClick={() => setIsOpen(!openModal)}
    styles={styles}
  >
    <div>
        <p>
          I always felt like I could do anything. That’s the main
          thing people are controlled by! Thoughts- their perception
          of themselves! They're slowed down by their perception of
          themselves. If you're taught you can’t do anything, you
          won’t do anything. I was taught I could do everything.
        </p>
     
      {/*footer*/}
      <div>
        <Buttons onClick={() => setIsOpen(!openModal)}> Close modal </Buttons>
        <Buttons  appearance='primary' onClick={() => setIsOpen(!openModal)}>  Open modal  </Buttons>
     </div>
     </div>
  </Modal>
      </div>
    </>
  );
};
export default WidthExample; 
`;

  const [openModal, setIsOpen] = useState(false);
  const [openModalWidth, setIsOpenWidth] = useState(false);
  const [modalApperrance, setModalApperrance] = useState("medium");
  const styles = {
    backgroundColor: "white"
  };

  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Modal dialog'
        description='A modal dialog displays content that requires user interaction, in a layer above the page.'
      />

      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='The default form of a modal dialog.'
        />
        <div className='py-2 flex flex-col gap-2'>
          <div>
            <Buttons appearance='primary' onClick={() => setIsOpen(!openModal)}>
              Open modal
            </Buttons>
            <Modal
              modal={openModal}
              onClick={() => setIsOpen(!openModal)}
              styles={styles}
            >
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*body*/}
                <div className='relative p-6 flex-auto max-w-3xl'>
                  <div className='flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t'>
                    <h3 className='text-3xl font-semibold'>Modal Title</h3>
                    <button
                      className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                      onClick={() => setShowModal(false)}
                    >
                      <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                        ×
                      </span>
                    </button>
                  </div>
                  <p className='my-4 text-gray-500 text-lg leading-relaxed'>
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b gap-4'>
                  <Buttons onClick={() => setIsOpen(!openModal)}>
                    Close modal
                  </Buttons>
                  <Buttons
                    appearance='primary'
                    onClick={() => setIsOpen(!openModal)}
                  >
                    Open modal
                  </Buttons>
                </div>
              </div>
            </Modal>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={DefaultExample} />
        </div>
      </section>

      {/* Width */}
      <section>
        <PageData
          subTitle='Width'
          subDescription='The width of the modal can be specified in different ways:'
        />
        <div>
          <ul className='list-disc pl-10 font-normal lg:text-sm text-xs tracking-wide text-secondary py-3 text-left'>
            <li>
              The recommended way to specify modal width is using named size
              options.
            </li>
            <li>
              {" "}
              If a number is provided, the width is set to that number in
              pixels.{" "}
            </li>
            <li>
              If a string including pixels or a percentage is provided, the
              width will be directly applied as a style.
            </li>
          </ul>
        </div>
        <div className='py-2 flex flex-col gap-2'>
          <div>
            <div className='button-group flex  flex-wrap gap-3'>
              <Buttons
                appearance='primary'
                onClick={() => {
                  setIsOpenWidth(!openModalWidth);
                  setModalApperrance("small");
                }}
              >
                small
              </Buttons>
              <Buttons
                appearance='primary'
                onClick={() => {
                  setIsOpenWidth(!openModalWidth);
                  setModalApperrance("medium");
                }}
              >
                medium
              </Buttons>
              <Buttons
                appearance='primary'
                onClick={() => {
                  setIsOpenWidth(!openModalWidth);
                  setModalApperrance("large");
                }}
              >
                large
              </Buttons>
              <Buttons
                appearance='primary'
                onClick={() => {
                  setIsOpenWidth(!openModalWidth);
                  setModalApperrance("x-large");
                }}
              >
                x-large
              </Buttons>
            </div>
            <Modal
              modal={openModalWidth}
              appearance={modalApperrance}
              onClick={() => setIsOpenWidth(!openModalWidth)}
              styles={styles}
            >
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <div className='flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t'>
                    <h3 className='text-3xl font-semibold'>Modal Title</h3>
                    <button
                      className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                      onClick={() => setShowModal(false)}
                    >
                      <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                        ×
                      </span>
                    </button>
                  </div>
                  <p className='my-4 text-gray-500 text-sm leading-relaxed'>
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b gap-4'>
                  <Buttons onClick={() => setIsOpenWidth(!openModalWidth)}>
                    Close modal
                  </Buttons>
                  <Buttons
                    appearance='primary'
                    onClick={() => setIsOpenWidth(!openModalWidth)}
                  >
                    Open modal
                  </Buttons>
                </div>
              </div>
            </Modal>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={WidthExample} />
        </div>
      </section>
    </div>
  );
};

export default ModelDialog;
