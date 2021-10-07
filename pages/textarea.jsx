import React, { useState } from "react";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";
import TextArea from "../components/textarea-examples/textArea";


function Textarea() {
  const defaultextarea = `
import React from 'react';
import TextArea from '@neoKit/textarea';

export textareaDefault () => (
  <div>
  <TextArea name='default' id='textarea'  rows='2' cols='10' resize='auto' placeholder='enter your text' value={values}  onChange={(event) => setValues(event.target.value)} maxHeight='20vh'
></TextArea>
  </div>
);
    `;
  const textareaPlaceholder = `
  import React from 'react';
  import TextArea from '@neoKit/textarea';
  
  export TextareaPlaceholderExample () => (
    <div>
    <TextArea name='default'  id='textarea' rows='2' cols='10' resize='auto' placeholder='Enter your text'  onChange={(event) => setValues(event.target.value)} maxHeight='20vh'></TextArea>
    </div>
  );
      `;

  const textareaResizeAuto = `
    import React from 'react';
    import TextArea from '@neoKit/textarea';
    
    export TextareaResizeAutoExample () => (
      <div>
      <TextArea
              name='default'
              id='textarea'
              resize='auto'
              placeholder='Enter your text'
               onChange={(event) => setValues(event.target.value)}
              maxHeight='20vh'
            ></TextArea>
      </div>
    );
        `;
  const textareaResizeVertical = `
        import React from 'react';
        import TextArea from '@neoKit/textarea';
        
        export TextareaResizeVerticalExample () => (
          <div>
          <TextArea
          name='default'
          id='textarea'
          resize='vertical'
          placeholder='Enter your text'
           onChange={(event) => setValues(event.target.value)}
          maxHeight='20vh'
        ></TextArea>
          </div>
        );
            `;

  const textareaResizeHorizontal = `
            import React from 'react';
            import TextArea from '@neoKit/textarea';
            
            export TextareaResizeHorizontalExample () => (
              <div>
              <TextArea
              name='default'
              id='textarea'
              resize='horizontal'
              placeholder='Enter your text'
               onChange={(event) => setValues(event.target.value)}
              maxHeight='20vh'
            ></TextArea>
              </div>
            );
                `;
  const textareaResizeNone = `
                import React from 'react';
                import TextArea from '@neoKit/textarea';
                
                export TextareaResizeNoneExample () => (
                  <div>
                  <TextArea
                        name='default'
                        id='textarea'
                        resize='none'
                        placeholder='Enter your text'
                         onChange={(event) => setValues(event.target.value)}
                        maxHeight='20vh'
                ></TextArea>
                  </div>
                );
                    `;

  const textareaResizeSmart = `
                    import React from 'react';
                    import TextArea from '@neoKit/textarea';
                    
                    export TextareaResizeSmartExample () => (
                      <div>
                      <TextArea
                      name='default'
                      id='textarea'
                      resize='smart'
                      placeholder='Enter your text'
                       onChange={(event) => setValues(event.target.value)}
                      maxHeight='20vh'
                    ></TextArea>
                      </div>
                    );
                        `;

  const [values, setValues] = useState("Add a message here");
  return (
    <div>
      <PageData
        title='Text area'
        description='A text area lets users enter long form text which spans over multiple lines.'
      />
      {/* Default */}
      <section>
        <PageData subTitle='Default' subDescription='The default text area.' />
        <div className='py-2'>
          <TextArea
            name='default'
            id='textarea'
            rows='2'
            cols='10'
            resize='auto'
            placeholder='Enter your text'
            value={values}
            onChange={(event) => setValues(event.target.value)}
            maxHeight='20vh'
          ></TextArea>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={defaultextarea} />
        </div>
      </section>
      {/* Placeholder */}
      <section>
        <PageData
          subTitle='Placeholder'
          subDescription='The default values shows in text area when its empty'
        />
        <div className='py-2'>
          <TextArea
            name='default'
            id='textarea'
            rows='2'
            cols='10'
            resize='auto'
            placeholder='Enter your text'
            onChange={(event) => setValues(event.target.value)}
            maxHeight='20vh'
          ></TextArea>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={textareaPlaceholder} />
        </div>
      </section>

      {/* Resize */}

      <section>
        <h5 className='lg:text-lg md:text-base text-sm text-primary font-normal pb-3 pt-2'>
          Resize
        </h5>
        <div>
          <PageData
            subTitle='Auto'
            subDescription='A text area that shows all user input at once. Overflow text wraps onto a new line and expands the text area.'
          />
          <div className='py-2'>
            <TextArea
              name='default'
              id='textarea'
              resize='auto'
              placeholder='Enter your text'
              onChange={(event) => setValues(event.target.value)}
              maxHeight='20vh'
            ></TextArea>
          </div>
          <div className='w-full pt-3'>
            <Snipet code={textareaResizeAuto} />
          </div>
        </div>
        <div>
          {/* Vertical / horizontal resize */}
          <div>
            <PageData
              subTitle='Vertical  resize'
              subDescription='A text area that shows all user input at once. Overflow text wraps onto a new line and expands the text area.'
            />
            <div className='py-2'>
              <TextArea
                name='default'
                id='textarea'
                resize='vertical'
                placeholder='Enter your text'
                onChange={(event) => setValues(event.target.value)}
                maxHeight='20vh'
              ></TextArea>
            </div>
            <div className='w-full pt-3'>
              <Snipet code={textareaResizeVertical} />
            </div>
          </div>

          <div>
            <PageData
              subTitle='Horizontal resize'
              subDescription='A text area that shows all user input at once. Overflow text wraps onto a new line and expands the text area.'
            />
            <div className='py-2'>
              <TextArea
                name='default'
                id='textarea'
                resize='horizontal'
                placeholder='Enter your text'
                onChange={(event) => setValues(event.target.value)}
                maxHeight='20vh'
              ></TextArea>
            </div>
            <div className='w-full pt-3'>
              <Snipet code={textareaResizeHorizontal} />
            </div>
          </div>
          {/* None */}
          <div>
            <PageData
              subTitle='None'
              subDescription='A text area that does not resize and uses a scroll bar to show overflow text.'
            />
            <div className='py-2'>
              <TextArea
                name='default'
                id='textarea'
                resize='none'
                placeholder='Enter your text'
                onChange={(event) => setValues(event.target.value)}
                maxHeight='20vh'
              ></TextArea>
            </div>
            <div className='w-full pt-3'>
              <Snipet code={textareaResizeNone} />
            </div>
          </div>

          {/* default */}
          <div>
            <PageData
              subTitle='Smart / Default'
              subDescription='A text area that does not resize and uses a scroll bar to show overflow text.'
            />
            <div className='py-2'>
              <TextArea
                name='default'
                id='textarea'
                resize='smart'
                placeholder='Enter your text'
                onChange={(event) => setValues(event.target.value)}
                maxHeight='20vh'
              ></TextArea>
            </div>
            <div className='w-full pt-3'>
              <Snipet code={textareaResizeSmart} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Textarea;
