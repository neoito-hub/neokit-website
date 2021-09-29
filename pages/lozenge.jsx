import React from "react";
import Lozenges from "../components/lozenge-example/lozenges";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";

const LozengeExample = () => {
  const DefaultExample = `
          import React, { useState } from "react";
          import { Lozenges } from '@neoKit/lozenges';
        
          const DefaultExample = () => {
            return (
                <>
                <div>
                  <Lozenges>Default</Lozenges>
                </div>
                <div>
                  <Lozenges isBold>Default bold</Lozenges>
                </div>
              </>
            );
          };
          export default DefaultExample; 
`;
  const successExample = `
import React, { useState } from "react";
import { Lozenges } from '@neoKit/lozenges';

const SuccessLozengestExample = () => {
  return (
      <>
      <div>
      <Lozenges appearance="success">Success</Lozenges>
    </div>
    <div>
      <Lozenges appearance="success" isBold>
        Success bold
      </Lozenges>
    </div>
    </>
  );
};
export default  SuccessLozengestExample;
`;
  const removeExample = `
  import React, { useState } from "react";
  import { Lozenges } from '@neoKit/lozenges';
  
  const RemoveLozengestExample = () => {
    return (
        <>
        <div>
        <Lozenges appearance='removed'>Removed</Lozenges>
        </div>
        <div>
        <Lozenges appearance='removed' isBold>
        Removed bold
        </Lozenges>
        </div>
      </>
    );
    
  };
  export default  RemoveLozengestExample;
  `;
  const inprogressExample = `
  import React, { useState } from "react";
  import { Lozenges } from '@neoKit/lozenges';
  
  const InprogressLozengestExample = () => {
    return (
        <>
        <div>
        <Lozenges appearance="inprogress">In progress</Lozenges>
      </div>
      <div>
        <Lozenges appearance="inprogress" isBold>
    In progress bold
        </Lozenges>
      </div>
      </>
    );
    
  };
  export default  InprogressLozengestExample;
  `;

  const newExample = `
  import React, { useState } from "react";
  import { Lozenges } from '@neoKit/lozenges';
  
  const NewLozengestExample = () => {
    return (
        <>
        <div>
            <Lozenges appearance='new'>New</Lozenges>
          </div>
          <div>
            <Lozenges appearance='new' isBold>
              New bold
            </Lozenges>
          </div>
      </>
    );
    
  };
  export default  NewLozengestExample;
  `;

  const movedExample = `
  import React, { useState } from "react";
  import { Lozenges } from '@neoKit/lozenges';
  
  const MovedLozengestExample = () => {
    return (
        <>
        <div>
        <Lozenges appearance="moved">Moved</Lozenges>
      </div>
      <div>
        <Lozenges appearance="moved" isBold>
    Moved bold
        </Lozenges>
      </div>
      </>
    );
    
  };
  export default  MovedLozengestExample;
  `;

  const maxLengthExample = `
  import React, { useState } from "react";
  import { Lozenges } from '@neoKit/lozenges';
  
  const MaxLengthLozengestExample = () => {
    return (
        <>
        <div>
  <Lozenges appearance='success'>
    default max width with long text which truncates
  </Lozenges>
</div>
<div>
  <Lozenges appearance='success' maxWidth={100}>
    custom max width with long text which truncates
  </Lozenges>
</div>
      </>
    );
    
  };
  export default  MaxLengthLozengestExample;
  `;
 
  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Lozenge'
        description="A lozenge is a visual indicator used to highlight an item's status for quick recognition."
      />

      {/* Default */}
      <section>
        <PageData
          subHead='Appearance'
          subDescription="Lozenges are either subtle or bold and use color to indicate meanings that users can learn and recognize across products. Change the lozenge's appearance to bold by setting isBold."
        />
        <PageData
          subTitle='Default'
          subDescription='Use default lozenges for a general status or state, such as: to do, unavailable, minor, not started.'
        />
        <div className='py-2 flex flex-col gap-2'>
          <div>
            <Lozenges>DEFAULT</Lozenges>
          </div>
          <div>
            <Lozenges isBold>DEFAULT BOLD</Lozenges>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={DefaultExample} />
        </div>
      </section>

      {/* Success */}
      <section>
        <PageData
          subTitle='Success'
          subDescription='Use success lozenges to represent a constructive status or state, such as: available, completed, approved, resolved, added.'
        />
        <div className='py-2 flex flex-col gap-2'>
          <div>
            <Lozenges appearance='success'>Success</Lozenges>
          </div>
          <div>
            <Lozenges appearance='success' isBold>
              Success bold
            </Lozenges>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={successExample} />
        </div>
      </section>

      {/* Removed */}
      <section>
        <PageData
          subTitle='Removed'
          subDescription='Use removed lozenges to represent a critical or problematic status or state, such as: errors, declined, deleted, failed.'
        />
        <div className='py-2 flex flex-col gap-2'>
          <div>
            <Lozenges appearance='removed'>Removed</Lozenges>
          </div>
          <div>
            <Lozenges appearance='removed' isBold>
              Removed bold
            </Lozenges>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={removeExample} />
        </div>
      </section>

      {/* In progress */}
      <section>
        <PageData
          subTitle='In progress'
          subDescription='Use inprogress lozenges to represent an in progress or current status or state, such as: in progress, open, modified.'
        />
        <div className='py-2 flex flex-col gap-2'>
          <div>
            <Lozenges appearance='inprogress'>In progress</Lozenges>
          </div>
          <div>
            <Lozenges appearance='inprogress' isBold>
              In progress bold
            </Lozenges>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={inprogressExample} />
        </div>
      </section>
      {/* New */}
      <section>
        <PageData
          subTitle='New'
          subDescription='Use new lozenges to represent a new status or state, such as: new, created, help.'
        />
        <div className='py-2 flex flex-col gap-2'>
          <div>
            <Lozenges appearance='new'>New</Lozenges>
          </div>
          <div>
            <Lozenges appearance='new' isBold>
              New bold
            </Lozenges>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={newExample} />
        </div>
      </section>
      {/* Moved */}
      <section>
        <PageData
          subTitle='Moved'
          subDescription='Use moved lozenges to represent a status or state for items that have been changed and require attention, such as: busy, blocked, missing, warning.'
        />
        <div className='py-2 flex flex-col gap-2'>
          <div>
            <Lozenges appearance='moved'>Moved</Lozenges>
          </div>
          <div>
            <Lozenges appearance='moved' isBold>
              Moved bold
            </Lozenges>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={movedExample} />
        </div>
      </section>
      {/* Max width */}
      <section>
        <PageData
          subTitle='Max width'
          subDescription='By default, the maximum width of a lozenge is 200px. When the text in the lozenge exceeds the max width, it will be truncated with an ellipsis. This maxWidth can be customized.

          Avoid truncation wherever possible by using shorter text in lozenges. The truncated text is not focusable or accessible.
          
          '
        />
        <div className='py-2 flex flex-col gap-2'>
          <div>
            <Lozenges appearance='success'>
              default max width with long text which truncates
            </Lozenges>
          </div>
          <div>
            <Lozenges appearance='success' maxWidth={100}>
              custom max width with long text which truncates
            </Lozenges>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={maxLengthExample} />
        </div>
      </section>
    </div>
  );
};

export default LozengeExample;
