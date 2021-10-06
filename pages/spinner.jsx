import React from "react";
import Spinner from "../components/spinner-example/spinner";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";
import Lozenges from "../components/lozenge-example/lozenges";

const SpinnerExample = () => {
  const defaultSpinner = `  
    import React from 'react';
    import Spinner from '@neoKit/tag';
    const SpinnerExample = () => {
        return (
            <Spinner></Spinner>
        );
      };
      
      export default SpinnerExample;`;
      const sizesSpinner = `  
      import React from 'react';
      import Spinner from '@neoKit/tag';
      const SpinnerSizeExample = () => {
          return (
            <div  style ={{ padding:" 4px 3px", display:'flex': alignItems:'base-line'  }}>
            {sizes.map((size) => {
              return (
                <div  style ={{  display:'flex': alignItems:'center', flexDirection:'column'  }}>
                  <Spinner size={size}></Spinner>
                  <div style={{paddingTop:'8px'}}>
                    {typeof size === "number" ? (
                      <Lozenges appearance='new'>custom</Lozenges>
                    ) : (
                      <Lozenges appearance='success'>{size}</Lozenges>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          );
        };
        
        export default SpinnerSizeExample;`;     
        const LoaderSpinner = `  
        import React from 'react';
        import Spinner from '@neoKit/tag';
        const SpinnerLoaderExample = () => {
            return (
                <Spinner appearance='loader' size='xlarge'></Spinner>
            );
          };
          export default SpinnerLoaderSpinner`;

          const DualLoaderSpinner = `  
          import React from 'react';
          import Spinner from '@neoKit/tag';
          const SpinnerDualLoaderExample = () => {
              return (
                <Spinner appearance='dual-loader' size='xlarge'></Spinner>
              );
            };
            export default SpinnerDualLoaderExample`;
  const sizes = ["xsmall", "small", "medium", "large", "xlarge", 80];

  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Spinner'
        description='A spinner is an animated spinning icon that lets users know content is being loaded.'
      />

      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='The default form of spinner.'
        />
        <div className='py-2'>
          <Spinner></Spinner>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={defaultSpinner} />
        </div>
      </section>
      {/* Sizes */}
      <section>
        <PageData subTitle='Sizes' />
        <div>
          <ul className='list-disc pl-10 font-normal lg:text-sm text-xs tracking-wide text-secondary py-2 pb-0 text-left'>
            <li>
              <strong className='text-blue-700'>Extra small:</strong> Use inside
              toggles
            </li>
            <li>
              <strong className='text-blue-700'>Small:</strong> The default size
              which is used for most use cases
            </li>
            <li>
              <strong className='text-blue-700'>Medium:</strong> The default
              size which is used for most use cases
            </li>
            <li>
              <strong className='text-blue-700'>Large: </strong> Larger than
              medium
            </li>
            <li>
              <strong className='text-blue-700'>Extra large: </strong> Larger
              than large
            </li>
          </ul>
        </div>
        <div className='py-2 flex gap-4 items-baseline  '>
          {sizes.map((size) => {
            return (
              <div className='flex items-center flex-col'>
                <Spinner size={size}></Spinner>
                <div className='pt-5'>
                  {typeof size === "number" ? (
                    <Lozenges appearance='new'>custom</Lozenges>
                  ) : (
                    <Lozenges appearance='success'>{size}</Lozenges>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className='w-full pt-3'>
          <Snipet code={sizesSpinner} />
        </div>
      </section>

      {/* loader */}
      <section>
        <PageData subTitle='Loader' subDescription='The spinner with loader.' />
        <div className='py-2'>
          <Spinner appearance='loader' size='xlarge'></Spinner>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={LoaderSpinner} />
        </div>
      </section>

       {/* loader */}
       <section>
        <PageData subTitle='Dual Loader' subDescription='double & colored loader' />
        <div className='py-2'>
          <Spinner appearance='dual-loader' size='xlarge'></Spinner>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={DualLoaderSpinner} />
        </div>
      </section>
    </div>
  );
};

export default SpinnerExample;
