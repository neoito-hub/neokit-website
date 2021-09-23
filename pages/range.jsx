import React, { useState } from "react";
import PageData from "../components/page-data/page-data";
import Ranges from "../components/range-example/ranges";
import Snipet from "../components/snippet/snipet";

function Range() {
  const rangeDefault = `
  import React from 'react';

import Range from '@neoKit/range';

const RangeDefaultExample = () => {
  return <Ranges step={1} min={1} max={100}  ></Ranges>;
};

export default RangeDefaultExample;
  `;

  const rangeControlled = `
  import React from 'react';

import Range from '@neoKit/range';

const RangeControlledExample = () => {
    const [value, setValue] = useState(50);
    return (
        <>
          <Range step={1} value={value} onChange={(value) => setValue(value)} />
          <p>The current value is: {value}</p>
        </>

        );
    };
    
    export default RangeControlledExample;`;

  const rangeUncontrolled = `
    import React from 'react';
  
  import Range from '@neoKit/range';
  
  const  RangeUncontrolledExample = () => {
      const [value, setValue] = useState(50);
      return (
          <>
          <Ranges
          step={1}
          min={1}
          max={100}
          onChange={(value) => console.log("new-value" , value)}
        ></Ranges>
          </>
  
          );
      };
      
      export default  RangeUncontrolledExample;`;
  const rangeDisabled = `
      import React from 'react';
    
    import Range from '@neoKit/range';
    
    const RangeDisabledExample = () => {
        const [value, setValue] = useState(50);
        return (
            <>
              <Range isDisabled step={1} min={1} max={100} />
             
            </>
    
            );
        };
        
        export default RangeDisabledExample;`;

  //   const [responce, setResponce] = useState(null);
  //   const [rangeValue, setRangeValue] = useState(3);
  const [value, setValue] = useState(20);
  const [defValue, setDefValue] = useState(20);
  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Range'
        description='A range lets users choose an approximate value on a slider.'
      />

      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='The default form of a range.
  
              '
        />
        <div className='py-2'>
          <Ranges step={1} min={1} max={100} value={defValue}></Ranges>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={rangeDefault} />
        </div>
      </section>
      {/* Controlled */}
      <section>
        <PageData
          subTitle='Controlled'
          subDescription='In a controlled range, the state is managed by the React component. Use the onChange handler to set the value.'
        />
        <div className='py-2'>
          <Ranges
            step={1}
            min={1}
            max={100}
            value={value}
            onChange={(value) => setValue(value)}
          ></Ranges>

          <p className='text-gray-700 text-sm'>The current value is: {value}</p>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={rangeControlled} />
        </div>
      </section>
      {/* Uncontrolled */}
      <section>
        <PageData
          subTitle='Uncontrolled'
          subDescription='In an uncontrolled range, the state is managed by the DOM.'
        />
        <div className='py-2'>
          <Ranges
            step={1}
            min={1}
            max={100}
            onChange={(value) => console.log("new-value", value)}
          ></Ranges>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={rangeUncontrolled} />
        </div>
      </section>

      {/*Disabled */}
      <section>
        <PageData
          subTitle='Disabled'
          subDescription='Set isDisabled to disable a range when another action has to be completed before the range is usable.'
        />
        <div className='py-2'>
          <Ranges step={1} min={1} max={100} isDisabled></Ranges>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={rangeDisabled} />
        </div>
      </section>
    </div>
  );
}

export default Range;
