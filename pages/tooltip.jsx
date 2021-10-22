import React, { useState } from "react";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";
import Tooltips from "../components/tooltip/tooltips";
import Buttons from "../components/button-example/buttons";

function Tooltip() {
  const defaulTooltip = `
  import React from 'react';
  import Tooltip from '@neoKit/tooltips';
  import Buttons from "@neoKit/buttons";
  
  export default () => (
    <Tooltip content="Hello World">
      <Button appearance="primary">Hover over me</Button>
    </Tooltip>
  );
              `;
  const TopTooltip = `
  import React from 'react';
  import Tooltip from '@neoKit/tooltips';
  import Buttons from "@neoKit/buttons";
  
  export TooltipTopExample() => ( <
      Tooltips content = "Hello World"
      position = "top" >
      <Buttons appearance = 'primary'> Hover over me < /Buttons> 
      </Tooltips>
  ); `;
  
  const BottomTooltip = `
  import React from 'react';
  import Tooltip from '@neoKit/tooltips';
  import Buttons from "@neoKit/buttons";
  
  export TooltipTopExample() => ( 
    <Tooltips  content="Hello World" position="bottom">
    <Buttons appearance='primary'>Hover over me</Buttons>
  </Tooltips> 
  );
  `;
  const LeftTooltip = `
  import React from 'react';
  import Tooltip from '@neoKit/tooltips';
  import Buttons from "@neoKit/buttons";
  
  export TooltipTopExample() => ( 
    <Tooltips  content="Hello World" position="left">
    <Buttons appearance='primary'>Hover over me</Buttons>
  </Tooltips>
  );
`;

  const RightTooltip = `
  import React from 'react';
  import Tooltip from '@neoKit/tooltips';
  import Buttons from "@neoKit/buttons";
  
  export TooltipTopExample() => ( 
    <Tooltips  content="Hello World" position="Right">
    <Buttons appearance='primary'>Hover over me</Buttons>
  </Tooltips>
  );
 `;
  const CustomComponentTooltip = `
  import React from 'react';
  import Tooltip from '@neoKit/tooltips';
  import Buttons from "@neoKit/buttons";
  
  export TooltipTopExample() => ( 
    <Tooltips
    content='Hello World'
    position='right'
    component={<Buttons appearance='primary'>Tooltip</Buttons>}
  >
    <Buttons appearance='primary'>Hover over me</Buttons>
  </Tooltips>
  );
 `;

 

 const truncateTooltip = `
  import React from 'react';
  import Tooltip from '@neoKit/tooltips';
  import Buttons from "@neoKit/buttons";
  
  export TooltipTopExample() => ( 
    <Tooltips content='The red panda (Ailurus fulgens), also called the lesser panda, the red bear-cat, and the red cat-bear, is a mammal native to the eastern Himalayas and southwestern China.' truncate>
    <img
      alt='Red panda - smiling'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Red_Panda_in_a_Gingko_tree.jpg/220px-Red_Panda_in_a_Gingko_tree.jpg '
      width='220'
    />
  </Tooltips>
  );
 `;
  const [tooltipText, setTooltipText] = useState(false);
  return (
    <div>
      <PageData
        title='Tooltip'
        description='A tooltip is a floating, non-actionable label used to explain a user interface element or feature.'
      />
      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='The default form of a tooltip.'
        />
        <div className='py-2'>
          <Tooltips content='Hello World'>
            <Buttons appearance='primary'>Hover over me</Buttons>
          </Tooltips>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={defaulTooltip} />
        </div>
      </section>
      {/* positioning */}
      <section>
        <PageData
          subTitle='Positioning'
          subDescription='The tooltip position is flexible and changes depending on how close the element is to the edge of the screen.
          '
        />
        <PageData subTitle='Top' />
        <div className='py-2'>
          <Tooltips content='Hello World' position='top'>
            <Buttons appearance='primary'>Hover over me</Buttons>
          </Tooltips>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={TopTooltip} />
        </div>
      </section>
      <section>
        <PageData subTitle='Bottom / Default' />
        <div className='py-2'>
          <Tooltips content='Hello World' position='bottom'>
            <Buttons appearance='primary'>Hover over me</Buttons>
          </Tooltips>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={BottomTooltip} />
        </div>
      </section>
      <section>
        <PageData subTitle='Left' />
        <div className='py-2'>
          <Tooltips content='Hello World' position='left'>
            <Buttons appearance='primary'>Hover over me</Buttons>
          </Tooltips>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={LeftTooltip} />
        </div>
      </section>
      <section>
        <PageData subTitle='Right' />
        <div className='py-2'>
          <Tooltips content='Hello World' position='right'>
            <Buttons appearance='primary'>Hover over me</Buttons>
          </Tooltips>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={RightTooltip} />
        </div>
      </section>
      {/* Custom component */}
      <section>
        <PageData
          subTitle='Custom component'
          subDescription='The tooltip component accepts a component prop, which enables users to customize the look and feel of the tooltip area.'
        />
        <div className='py-2'>
          <Tooltips
            content='Hello World'
            position='right'
            component={<Buttons appearance='primary'>Tooltip</Buttons>}
          >
            <Buttons appearance='primary'>Hover over me</Buttons>
          </Tooltips>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={CustomComponentTooltip} />
        </div>
      </section>

      {/* toggle tooltip */}
      <section>
        <PageData subTitle='Updating tooltip Content' />
        <div className='py-2'>
          <Tooltips content={tooltipText ? "Hello World " : "Hello India"}>
            <Buttons
              appearance='primary'
              onClick={() => setTooltipText(!tooltipText)}
            >
              Hover over me
            </Buttons>
          </Tooltips>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={CustomComponentTooltip} />
        </div>
      </section>

      {/* overflow */}
      <section>
        <PageData
          subTitle='Overflow'
          subDescription='The tooltip text wraps when the content is wider than the max-width. Additionally, the text can be set to truncate, which is useful when displaying user-generated content of variable length.'
        />
        <div className='py-2'>
          <div className='flex flex-wrap gap-3'>
            <Tooltips content='The red panda (Ailurus fulgens), also called the lesser panda, the red bear-cat, and the red cat-bear, is a mammal native to the eastern Himalayas and southwestern China.' truncate>
              <img
                alt='Red panda - smiling'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Red_Panda_in_a_Gingko_tree.jpg/220px-Red_Panda_in_a_Gingko_tree.jpg '
                width='220'
              />
            </Tooltips>
            <Tooltips content='At the Cincinati Zoo  '>
              <img
                alt='Red panda - walking'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/RedPandaFullBody.JPG/440px-RedPandaFullBody.JPG'
                width='220'
              />
            </Tooltips>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={truncateTooltip} />
        </div>
      </section>
    </div>
  );
}

export default Tooltip;
