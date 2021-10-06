import React from "react";
import Code from "../components/code-example/code";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";

const CodeExample = () => {
    const CodeDefault = `
    import React from "react";
    import Code from '@neoKit/Code;
    
    const codeDefault = () => {
      return (
        <p>
           
            To start creating a changeset, run  <Code> bolt changeset </Code>.Then you will be prompted to select packages for release. 
          </p>
      );
    };
  
  export default CodeDefault;
      `;
  
  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Code'
        description='Code highlights short strings of code snippets inline with body text.'
      />
      {/* Default */}
      <section>
        <PageData
          subTitle='Inline code'
          subDescription='
          Formatted code can appear in a variety of contexts, increasing the legibility and contrasting it against default paragraph text.

            Use inline code when you wish to highlight a short code snippet from the surrounding default text, such as when referencing variable names.'
        />
        <div className='py-2'>
          <p>
           
            To start creating a changeset, run  <Code> bolt changeset </Code>.Then you will be prompted to select packages for release. 
          </p>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={CodeDefault} />
        </div>
      </section>
    </div>
  );
};

export default CodeExample;
