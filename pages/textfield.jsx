import React from "react";
import HelperMessage from "../components/helper-message/helper-message";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";
import Textfields from "../components/textfield/textfields";

function Textfield() {
  const defaultTextfield = `
      import React from 'react';
      import Textfields from '@neoKit/textfields';
      
    const TextfieldDefault  = () => {
   
        return (
        <div>
        <Textfields name='default'  id="input1" placeholder="enter text" type="text" />
        </div>
        )
    }
    
    export default TextfieldDefault;
          `;
  const maxCharecterTextfield = `
  import React from 'react';
  import Textfields from '@neoKit/textfields';
  import HelperMessage from '@neoKit/helper-message';
  
  const MaxCharecterTextfieldExample = () => {
   
    return (

      <div >
      <Textfields
      name='default'
      id='input1'
      placeholder='Enter text'
      type='text'
      maxLength={5}
    />
       <HelperMessage > Max length of 5 < /HelperMessage> 
       </div>
       )
    }
    
    export default MaxCharecterTextfieldExample;
       `;
  const customTextfield = `
  import React from 'react';
  import Textfields from '@neoKit/textfields';
  
  const CustomTextfieldExample = () => {
    const list = {
        padding: 20,
        fontSize: 20
      };

    return (

      <div >
      <Textfields
      name='default'
      id='input1'
      placeholder='Enter text'
      type='text'
      style={list}
    />
    </div>
      )
    }
    
    export default CustomTextfieldExample;
    
              `;

  const list = {
    padding: 20,
    fontSize: 20
  };

  return (
    <div>
      <PageData
        title='Text field'
        description='A text field is an input that allows a user to write or edit text.'
      />
      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='The default form of a text field.'
        />
        <div className='py-2'>
          <Textfields
            name='default'
            id='input1'
            placeholder='enter text'
            type='text'
          />
          <HelperMessage> Help or instruction text goes here </HelperMessage>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={defaultTextfield} />
        </div>
      </section>

      {/* Max characters */}
      <section>
        <PageData
          subTitle='Max characters'
          subDescription='Text fields can be set with a maximum character limit for constraining the amount of content that can be entered. Inline validation can also be set to alert the user and clarify the request.'
        />
        <div className='py-2'>
          <Textfields
            name='default'
            id='input1'
            placeholder='enter text'
            type='text'
            maxLength={5}
          />
          <HelperMessage> Max length of 5 </HelperMessage>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={maxCharecterTextfield} />
        </div>
      </section>

      {/* Customization */}
      <section>
        <PageData
          subTitle='Customization'
          subDescription='Use the data attributes data-ds--text-field--container and data-ds--text-field--input to customize the style of the text field container and input element.'
        />
        <div className='py-2'>
          <Textfields
            name='default'
            id='input1'
            placeholder='Enter text'
            type='text'
            style={list}
          />
        </div>
        <div className='w-full pt-3'>
          <Snipet code={customTextfield} />
        </div>
      </section>
    </div>
  );
}
export default Textfield;
