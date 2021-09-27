import React, { useState } from "react";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";
import Toggler from "../components/toggle-example/toggler";

function Toggle() {
  const defaulToggle = `
  import React from 'react';

  import Toggle from '@neoKit/toggle';
  
  export defaultToggleExample() {
    return (
      <>
        <Toggler id="toggle-default" />
      </>
    );
  }
        `;

  const colordToggle = `
        import React from 'react';
        
        import Toggle from '@neoKit/toggle';
        
        export coloredExample() {
          return (
            <>
            <Toggler
            name='toggle'
            id='toggleID'
            color='red'
            onChange={(value) => {}}
            value={true}
          ></Toggler>
            </>
          );
        }
              `;

  const disabledToggle = `
import React from 'react';

import Toggle from '@neoKit/toggle';

export diabledToggleExample() {
  return (
    <>
    <Toggler
    name='toggle'
    id='toggleID'
    disabled
    onChange={(value) => {}}
    value={true}
  ></Toggler>
    </>
  );
}
      `;

  const toggleState = `
      import React from 'react';
      
      import Toggle from '@neoKit/toggle';
      
      export toggleStateExample() {
        return (
          <>
          <Toggler
          name='toggle'
          id='toggleID'
          disabled
          value ={true}
          onChange={(value) => {}}
          value={true}
        ></Toggler>
          </>
        );
      }
            `;
  const toggleIcon = `
            import React from 'react';
            import Toggle from '@neoKit/toggle';
            
            export toggleStateExample() {
              return (
                <>
                <Toggler
                name='toggle'
                id='toggleID'
                disabled
               icon={true}
                onChange={(value) => {}}
                value={true}
              ></Toggler>
                </>
              );
            }
                  `;

  return (
    <div>
      <PageData
        title='Toggle'
        description='A toggle is used to view or switch between enabled or disabled states.'
      />
      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='The default form of a toggle. For pages with lots of toggles, use the default size.'
        />
        <div className='py-2'>
          <div className='text-sm text-gray-500 font-medium tracking-wide pb-2'>
            Allow pull requests
          </div>

          <Toggler
            name='toggle'
            id='toggleID'
            onChange={(value) => {}}
          ></Toggler>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={defaulToggle} />
        </div>
      </section>

      {/* Color */}
      <section>
        {/* <h5 className='lg:text-lg md:text-base text-sm text-primary font-normal pb-3 pt-2'>
          Size
        </h5> */}
        <PageData
          subTitle='Color'
          subDescription='The default form of a toggle. For pages with lots of toggles, use the default size.'
        />
        <div className='py-2'>
          <div className='text-sm text-gray-500 font-medium tracking-wide pb-2'>
            Allow pull requests
          </div>

          <Toggler
            name='toggle'
            id='toggleID'
            color='red'
            onChange={(value) => {}}
          ></Toggler>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={colordToggle} />
        </div>
      </section>
      {/* Toggle State */}
      <section>
        {/* <h5 className='lg:text-lg md:text-base text-sm text-primary font-normal pb-3 pt-2'>
          
        </h5> */}
        <PageData
          subTitle='Toggle State'
          subDescription='The default form of a toggle. For pages with lots of toggles, use the default size.'
        />
        <div className='py-2'>
          <div className='text-sm text-gray-500 font-medium tracking-wide pb-2'>
            Allow pull requests
          </div>

          <Toggler
            name='toggle'
            id='toggleID'
            onChange={(value) => {}}
            value={true}
          ></Toggler>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={toggleState} />
        </div>
      </section>

      {/* Disabled     */}
      <section>
        {/* <h5 className='lg:text-lg md:text-base text-sm text-primary font-normal pb-3 pt-2'>
          
        </h5> */}
        <PageData
          subTitle=' Disabled '
          subDescription='A toggle is disabled when a selection has already been made outside of the current context that negates the need for the toggle.'
        />
        <div className='py-2'>
          <div className='text-sm text-gray-500 font-medium tracking-wide pb-2'>
            Allow pull requests
          </div>

          <Toggler
            name='toggle'
            id='toggleID'
            disabled={true}
            onChange={(value) => {}}
            value={true}
          ></Toggler>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={disabledToggle} />
        </div>
      </section>
      {/* icon     */}
      <section>
        <PageData subTitle='Icon ' subDescription='Toggle button with icon' />
        <div className='flex flex-wrap'>
          <div className='py-2'>
            <div className='text-sm text-gray-500 font-medium tracking-wide pb-2'>
              Allow pull requests
            </div>

            <Toggler
              name='toggle'
              id='toggleID'
              onChange={(value) => {}}
              value={true}
              icon={true}
            ></Toggler>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={toggleIcon} />
        </div>
      </section>
    </div>
  );
}

export default Toggle;
