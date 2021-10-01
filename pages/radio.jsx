import React, { useState } from "react";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";
import Radio from "../components/radio-example/radios";

const RadioExample = () => {
  const RadioDefaultExample = `
  import React from 'react';
  import Radio from '@neoKit/Radio';
  
  const RadioDefaultExample = () => {
    return (
        <>
    <form>
    <Radio
      value='Default_radio '
      label='Default radio'
      name='radio-default'
      id='radio-default'
      isChecked={false}
      
      onChange={() => {}}
    ></Radio>
  </form>
  </>
  );
};
  
  export default RadioDefaultExample;
    `;
  const RadioDisabledExample = `
    import React from 'react';
    import Radio from '@neoKit/Radio';
    
    const RadioDisabledExample = () => {
      return (
          <>
          <form>
          <Radio
            value='disabed_radio'
            label='Disabed radio'
            name='radio-disabed'
            id='radio-disabed'
            isChecked={true}
            isDisabled={true}
            onChange={() => {}}
          ></Radio>
        </form>
    </>
    );
  };
    
    export default RadioDisabledExample;
      `;

  const RadioInputExample = `
        import React from 'react';
        import Radio from '@neoKit/Radio';
        
        const RadioInputExample = () => {

            const tableDAta = [
                {
                  id: 1,
                  value: "1",
                  name: "branch",
                  description: "master",
                  commit: "dcc0f15",
                  updated: "14 minutes ago"
                },
                {
                  id: 2,
                  value: "2",
                  name: "branch",
                  description: "feature/dark-mode",
                  commit: "cbc0fa3",
                  updated: "56 minutes ago"
                },
                {
                  id: 3,
                  value: "3",
                  name: "branch",
                  description: "feature/right-to-left",
                  commit: "69568ea",
                  updated: "16 hours ago"
                },
                {
                  id: 4,
                  value: "4",
                  name: "branch",
                  description: "bug/type-incorrect-for-checked-prop",
                  commit: "1159c76",
                  updated: "yesterday"
                }
              ];
            
              const [value, setValue] = useState('1');
          return (
              <>
              <form>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr className='text-left'>
                  <th style={{ width: 0 }}  className="px-3 py-3" />
                  <th id='head-description' className="px-3 py-3">Branch</th>
                  <th id='head-commit' className="px-3 py-3">Last commit</th>
                  <th id='head-updated' className="px-3 py-3">Updated</th>
                </tr>
              </thead>
              <tbody>
                {tableDAta.map((item) => (
                  <tr onClick ={()=> setValue(item.value)}>
                    <td style={{ width: 24, paddingRight: 0 ,padding:"12px" }}>
                      <Radio
                        value={item.value}
                        name={item.name}
                        id={item.id}
                        isChecked={value === item.value ? true : false}
                        // isDisabled={true}
                        checked={value === item.value ? true : false}
                        onChange={() => {}}
                      ></Radio>
                    </td>
                    <td className="px-3 py-3">{item.description}</td>
                    <td className="px-3 py-3"> {item.commit} </td>
                    <td className="px-3 py-3"> {item.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </>
        );
      };
        
        export default RadioInputExample;
          `;

  const tableDAta = [
    {
      id: 1,
      value: "1",
      name: "branch",
      description: "master",
      commit: "dcc0f15",
      updated: "14 minutes ago"
    },
    {
      id: 2,
      value: "2",
      name: "branch",
      description: "feature/dark-mode",
      commit: "cbc0fa3",
      updated: "56 minutes ago"
    },
    {
      id: 3,
      value: "3",
      name: "branch",
      description: "feature/right-to-left",
      commit: "69568ea",
      updated: "16 hours ago"
    },
    {
      id: 4,
      value: "4",
      name: "branch",
      description: "bug/type-incorrect-for-checked-prop",
      commit: "1159c76",
      updated: "yesterday"
    }
  ];

  const [value, setValue] = useState("1");

  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Radio'
        description='A radio input allows people to select only one option from a number of choices. Radio is generally displayed in a radio group.'
      />

      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription=' The default way to present a single option from a list.

          In most situations where you want to present a list of mutually exclusive options, you will want to use a radio group. '
        />
        <div className='py-2'>
          <form>
            <Radio
              value='Default_radio '
              label='Default radio'
              name='radio-default'
              id='radio-default'
              isChecked={false}
              onChange={() => {}}
            ></Radio>
          </form>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={RadioDefaultExample} />
        </div>
      </section>

      {/* Disabled */}
      <section>
        <PageData
          subTitle='Disabled'
          //   subDescription=' The default way to present a single option from a list.

          //   In most situations where you want to present a list of mutually exclusive options, you will want to use a radio group. '
        />
        <div className='py-2'>
          <form>
            <Radio
              value='disabed_radio'
              label='Disabed radio'
              name='radio-disabed'
              id='radio-disabed'
              isChecked={true}
              isDisabled={true}
              onChange={() => {}}
            ></Radio>
          </form>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={RadioDisabledExample} />
        </div>
      </section>
      {/* Complex radio usage */}
      <section>
        <PageData
          subTitle='Complex radio usage'
          subDescription=' There may be some situations where you are unable to directly stack the radio inputs vertically. In those situations, using individual Radio components rather than a RadioGroup may be more suited to your needs. '
        />
        <div className='py-2'>
          <form>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr className='text-left px-3'>
                  <th style={{ width: 0 }} className='px-3 py-3' />
                  <th id='head-description' className='px-3 py-3'>
                    Branch
                  </th>
                  <th id='head-commit' className='px-3 py-3'>
                    Last commit
                  </th>
                  <th id='head-updated' className='px-3 py-3'>
                    Updated
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableDAta.map((item) => (
                  <tr
                    onClick={() => setValue(item.value)}
                    className={`${
                      value === item.value ? " bg-blue-100 rounded" : ""
                    }`}
                  >
                    <td
                      style={{ width: 24, paddingRight: 0 }}
                      className='px-3 py-3'
                    >
                      <Radio
                        value={item.value}
                        name={item.name}
                        id={item.id}
                        isChecked={value === item.value ? true : false}
                        // isDisabled={true}
                        checked={value === item.value ? true : false}
                        onChange={() => {}}
                      ></Radio>
                    </td>
                    <td className='px-3 py-3'>{item.description}</td>
                    <td className='px-3 py-3'> {item.commit} </td>
                    <td className='px-3 py-3'> {item.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={RadioInputExample} />
        </div>
      </section>
    </div>
  );
};

export default RadioExample;
