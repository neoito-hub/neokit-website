import React, { useState } from "react";
import Checkboxes from "../components/checkbox-example/checkboxes";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";

function Checkbox() {
  const checkBoxDefault = `
  import React, { useState } from "react";
  import { Checkboxes } from '@neoKit/checkbox';
  const [isdefaultChecked, setIsDefaultChecked] = useState(false);
  
  const CheckboxDefaultExample = () => {
    return (
      <Checkbox
      label='Default checkbox'
      name='checkbox-default'
      id='cb-default'
      onChange={(checked) => 
          setIsDefaultChecked(checked)
      }
      />
    );
  };

export default CheckboxDefaultExample;
    `;

  const checkBoxControlled = `
  import React, { useState } from "react";
  import { Checkboxes } from '@neoKit/checkbox';
  const [isChecked, setIsChecked] = useState(true);
  
  const CheckboxControlledExample = () => {

    return (
        <Checkboxes
        checked={isChecked}
        label={'label goes here'}
        name='checkbox-default'
        id='cb-default'
        onChange={(checked) => setIsChecked(checked)}
      ></Checkboxes>
    );
  };
  export default CheckboxControlledExample;
    `;

  const checkBoxUnControlled = `
    import React, { useState } from "react";
    import { Checkboxes } from '@neoKit/checkbox';
    const [isUnControlChecked, setIsUnControlChecked] = useState(true);
    
    const CheckboxUncontrolledExample = () => (

  
      return (
        <Checkboxes
        defaultChecked
        checked={isChecked}
        label='Uncontrolled checkbox'
        name='uncontrolled-checkbox'
        onChange={(checked) => setIsUnControlChecked(checked)}
      ></Checkboxes>
      );
    };
    
export default CheckboxUncontrolledExample;
      `;

  const checkBoxDisabled = `
      import React, { useState } from "react";
      import { Checkboxes } from '@neoKit/checkbox';
      const [isUnControlChecked, setIsUnControlChecked] = useState(true);
      
      const CheckboxUncontrolledExample = () => (
  
    
        return (
            <Checkboxes
            defaultChecked
            isDisabled
            checked={isChecked}
            label="Disabled checkbox"
            name="checkbox-disabled"
            id="cb-disabled"
            onChange={(checked) => setIsUnControlChecked(checked)}
          ></Checkboxes>
        );
      };
      
  export default CheckboxUncontrolledExample;
        `;

     const checkboxSize = `
     import React, { useState } from "react";
     import { Checkboxes } from '@neoKit/checkbox';

const CheckboxSizesExample = () => {
    return (
      <div>
     <Checkboxes
     label='Small checkbox'
     name='checkbox-basic'
     id='cb-small'
     size='small'
     onChange={() => {}}
   ></Checkboxes>

   <Checkboxes
     value='Medium checkbox'
     label='Medium checkbox'
     id='cb-medium'
     size='medium'
     onChange={() => {}}
   ></Checkboxes>
   <Checkboxes
     value='Large checkbox'
     label='Large checkbox'
     id='cb-large'
     size='large'
     onChange={() => {}}
   ></Checkboxes>
   <Checkboxes
     value='Extra large checkbox'
     label='Extra large checkbox'
     id='cb-xlarge'
     size='xlarge'
     onChange={() => {}}
   ></Checkboxes>
   </div>
   );
 };
 
 export default CheckboxSizesExample;

     `  

  const [isChecked, setIsChecked] = useState(true);
  const [isdefaultChecked, setIsDefaultChecked] = useState(false);
  const [isUnControlChecked, setIsUnControlChecked] = useState(true);
  console.log(isdefaultChecked, "fe");
  console.log(isChecked, "se");
  console.log(isUnControlChecked, "third");
  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Checkbox'
        description='A checkbox is an input control that allows a user to select one or more options from a number of choices.'
      />

      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='By default, a checkbox input includes a selected and unselected state.
              '
        />
        <div className='py-2'>
          <Checkboxes
            label='Default checkbox'
            name='checkbox-default'
            id='cb-default'
            onChange={(checked) => setIsDefaultChecked(checked)}
          ></Checkboxes>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={checkBoxDefault} />
        </div>
      </section>

      {/* Controlled */}
      <section>
        <PageData
          subTitle='Controlled'
          subDescription='By default, a checkbox input includes a selected and unselected state..
  
              '
        />
        <div className='py-2'>
          <Checkboxes
            checked={isChecked}
            label={`Controlled checkbox, with props.isChecked: ${isChecked}`}
            name='checkbox-default'
            id='cb-default'
            onChange={(checked) => setIsChecked(checked)}
          ></Checkboxes>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={checkBoxControlled} />
        </div>
      </section>

      {/* Uncontrolled */}
      <section>
        <PageData
          subTitle='Uncontrolled'
          subDescription='In an uncontrolled checkbox, the checked state is managed by the DOM. Use defaultChecked to set the initial selected state.'
        />
        <div className='py-2'>
          <Checkboxes
            defaultChecked
            checked={isChecked}
            label='Uncontrolled checkbox'
            name='uncontrolled-checkbox'
            onChange={(checked) => setIsUnControlChecked(checked)}
          ></Checkboxes>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={checkBoxUnControlled} />
        </div>
      </section>

      {/* Disabled */}
      <section>
        <PageData
          subTitle='Disabled'
          subDescription='Set isDisabled to disable a checkbox when another action has to be completed before the checkbox is usable.'
        />
        <div className='py-2'>
          <Checkboxes
            defaultChecked
            isDisabled
            checked={isChecked}
            label='Disabled checkbox'
            name='checkbox-disabled'
            id='cb-disabled'
            onChange={(checked) => setIsUnControlChecked(checked)}
          ></Checkboxes>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={checkBoxDisabled} />
        </div>
      </section>

      {/* Size */}
      <section>
        <PageData
          subTitle='Size'
          subDescription='Set size to change the size of the checkbox.'
        />
        <div className='py-2 flex flex-col gap-4'>
          <Checkboxes
            label='Small checkbox'
            name='checkbox-basic'
            id='cb-small'
            size='small'
            onChange={() => {}}
          ></Checkboxes>

          <Checkboxes
            value='Medium checkbox'
            label='Medium checkbox'
            id='cb-medium'
            size='medium'
            onChange={() => {}}
          ></Checkboxes>
          <Checkboxes
            value='Large checkbox'
            label='Large checkbox'
            id='cb-large'
            size='large'
            onChange={() => {}}
          ></Checkboxes>
          <Checkboxes
            value='Extra large checkbox'
            label='Extra large checkbox'
            id='cb-xlarge'
            size='xlarge'
            onChange={() => {}}
          ></Checkboxes>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={checkboxSize} />
        </div>
      </section>
      {/* <section>
      <label className="custom-label flex p-2">
      <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
        <input type="checkbox" className="hidden" defaultChecked={true} />
        <svg className="hidden w-4 h-4 text-purple pointer-events-none mix-blend-normal" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
      </div>
      <span className="select-none"> This is a sample checkbox. All the text will toggle the state</span>
</label>
      </section> */}
    </div>
  );
}

export default Checkbox;
