import React from "react";
import SelectBox from "../components/selectBox-example/selectBox";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";

const SelectBoxExample = () => {
  const DefaultExample = `
  import React from 'react';
  import SelectBox from '@neoKit/selectBox';
  
    const DefaultExample = () => {
      const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" }
      ];
    
      const customStyles = {
        control: (provided, state) => ({
          ...provided,
          background: "#fff",
          borderColor: "#9e9e9e",
          minHeight: "40px",
          height: "40px",
          boxShadow: state.isFocused ? null : null
        }),
    
        valueContainer: (provided, state) => ({
          ...provided,
          height: "40px",
          padding: "0 6px"
        }),
    
        input: (provided, state) => ({
          ...provided,
          margin: "0px"
        }),
        indicatorSeparator: (state) => ({
          display: "none"
        }),
        indicatorsContainer: (provided, state) => ({
          ...provided,
          height: "40px"
        })
      };
      return (
        <SelectBox options={options} styles={customStyles}></SelectBox>
      );
    };
    export default DefaultExample;
    `;

  const DisabledSelectExample = `
    import React from 'react';
    import SelectBox from '@neoKit/selectBox';
    
      const DisabledSelectExample = () => {
        const options = [
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" }
        ];
      
        return (
          <SelectBox options={options} styles={customStyles} isDisabled></SelectBox>
        );
      };
      export default DisabledSelect;
      `;
  const mulitiSelectExample = `
      import React from 'react';
      import SelectBox from '@neoKit/selectBox';
      
        const MultiSelectExample = () => {
          const colorOptions = [
            { value: "red", label: "Red" },
            { value: "yellow", label: "Yellow" },
            { value: "green", label: "Green" },
            { value: "blue", label: "Blue" },
            { value: "cyan", label: "Cyan" },
            { value: "pink", label: "Pink" }
          ];
        
          return (
            <SelectBox isMulti
            name='colors'
            options={colorOptions}
            className='basic-multi-select'
            classNamePrefix='select'></SelectBox>
          );
        };
        export default MultiSelectExample;
        `;

        const serachableSelectExample = `
        import React from 'react';
        import SelectBox from '@neoKit/selectBox';
        
          const SearchableSelectExample = () => {
            const colorOptions = [
              { value: "red", label: "Red" },
              { value: "yellow", label: "Yellow" },
              { value: "green", label: "Green" },
              { value: "blue", label: "Blue" },
              { value: "cyan", label: "Cyan" },
              { value: "pink", label: "Pink" }
            ];
          
            return (
              <SelectBox
              isMulti
              name='colors'
              options={colorOptions}
              isSearchable={true}
              className='basic-multi-select'
              classNamePrefix='select'></SelectBox>
            );
          };
          export default SearchableSelectExample;
          `;
          const RightToLeftSelectExample = `
          import React from 'react';
          import SelectBox from '@neoKit/selectBox';
          
            const RightToLeftSelectExample = () => {
              const colorOptions = [
                { value: "red", label: "Red" },
                { value: "yellow", label: "Yellow" },
                { value: "green", label: "Green" },
                { value: "blue", label: "Blue" },
                { value: "cyan", label: "Cyan" },
                { value: "pink", label: "Pink" }
              ];
            
              return (
                <SelectBox
                isMulti
                name='colors'
                options={colorOptions}
                isSearchable={true}
                isRtl={true}
                className='basic-multi-select'
                classNamePrefix='select'></SelectBox>
              );
            };
            export default RightToLeftSelectExample;
            `;
  const customMulitiSelectExample = `
        import React from 'react';
        import SelectBox from '@neoKit/selectBox';
        
          const CustomMulitiSelectExample = () => {
            const colorOptions = [
              { value: "red", label: "Red" },
              { value: "yellow", label: "Yellow" },
              { value: "green", label: "Green" },
              { value: "blue", label: "Blue" },
              { value: "cyan", label: "Cyan" },
              { value: "pink", label: "Pink" }
            ];
          
            return (
              <SelectBox isMulti
              name='colors'
              options={colorOptions}
              className='basic-multi-select'
              defaultValue={[colorOptions[2], colorOptions[3]]}
              classNamePrefix='select'></SelectBox>
            );
          };
          export default CustomMulitiSelectExample;
          `;

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];
  const colorOptions = [
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "cyan", label: "Cyan" },
    { value: "pink", label: "Pink" }
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#9e9e9e",
      minHeight: "40px",
      height: "40px",
      boxShadow: state.isFocused ? null : null
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "40px",
      padding: "0 6px"
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px"
    }),
    indicatorSeparator: (state) => ({
      display: "none"
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "40px"
    })
  };

  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Select'
        description='Select allows users to make a single selection or multiple selections from a list of options.'
      />
      {/* Single select */}
      <section>
        <PageData
          subTitle='Single select'
          subDescription='Allows the user to select a single item from a dropdown list of options.'
        />
        <div className='py-2'>
          <label
            htmlFor='single-select-example'
            className='text-sm font-normal  text-gray-600'
          >
            Which flavour do you love?
          </label>
          <SelectBox options={options} styles={customStyles}></SelectBox>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={DefaultExample} />
        </div>
      </section>

      {/* Disabled */}
      <section>
        <PageData
          subTitle='Disabled'
          subDescription='Allows the user to disable the selectbox'
        />
        <div className='py-2'>
          <label
            htmlFor='single-select-example'
            className='text-sm font-normal  text-gray-600'
          >
            Which flavour do you love?
          </label>
          <SelectBox
            options={options}
            styles={customStyles}
            isDisabled
          ></SelectBox>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={DisabledSelectExample} />
        </div>
      </section>

      {/* Clearable */}
      <section>
        <PageData
          subTitle='Clearable'
          subDescription='Allows the user to clear the selectbox'
        />
        <div className='py-2'>
          <label
            htmlFor='clearable-select-example'
            className='text-sm font-normal  text-gray-600'
          >
            Which flavour do you love?
          </label>
          <SelectBox
            options={options}
            styles={customStyles}
            isClearable
          ></SelectBox>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={DisabledSelectExample} />
        </div>
      </section>

      {/* Searchable */}
      <section>
        <PageData
          subTitle='Searchable'
          subDescription='Allows the user to search the selectbox'
        />
        <div className='py-2'>
          <label
            htmlFor='clearable-select-example'
            className='text-sm font-normal  text-gray-600'
          >
            Which flavour do you love?
          </label>
          <SelectBox
            options={options}
            styles={customStyles}
            isSearchable={true}
          ></SelectBox>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={serachableSelectExample} />
        </div>
      </section>

      {/* Right to left */}
      <section>
        <PageData
          subTitle=' Right to left'
          subDescription='Change selectbox view right to left'
        />
        <div className='py-2'>
          <label
            htmlFor='clearable-select-example'
            className='text-sm font-normal  text-gray-600'
          >
            Which flavour do you love?
          </label>
          <SelectBox
            options={options}
            styles={customStyles}
            isRtl={true}
          ></SelectBox>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={RightToLeftSelectExample} />
        </div>
      </section>

      {/* Multi select */}
      <section>
        <PageData
          subTitle='Multi select'
          subDescription='Allows the user to select multiple items from a dropdown list of options.'
        />
        <div className='py-2'>
          <label
            htmlFor='multi-select-example'
            className='text-sm font-normal  text-gray-600'
          >
            Which color do you love?
          </label>
          <SelectBox
            isMulti
            name='colors'
            options={colorOptions}
            className='basic-multi-select'
            classNamePrefix='select'
          ></SelectBox>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={mulitiSelectExample} />
        </div>
      </section>
      {/* Custom Selected */}
      <section>
        <PageData
          subTitle='Custom Selected'
          subDescription='Allows the user to select multiple items default when loading data.'
        />
        <div className='py-2'>
          <label
            htmlFor='multi-select-example'
            className='text-sm font-normal  text-gray-600'
          >
            Which color do you love?
          </label>
          <SelectBox
            isMulti
            name='colors'
            defaultValue={[colorOptions[2], colorOptions[3]]}
            options={colorOptions}
            className='basic-multi-select'
            classNamePrefix='select'
          ></SelectBox>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={customMulitiSelectExample} />
        </div>
      </section>
    </div>
  );
};

export default SelectBoxExample;
