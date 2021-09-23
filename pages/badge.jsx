import React, { useState } from "react";
import Badges from "../components/badge-example/badges";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";

function  Badge() {

    
    const badgeDefault=`
    import React from 'react';
    import Badges from '@neoKit/badge';
    const BadgeDefaultExample = () => {
      return <Badges>{8}</Badges>;
    };
    
    export default BadgeDefaultExample;`

    const badgePrimary=`
    import React from 'react';
    import Badges from '@neoKit/badges';
    
    const BadgePrimaryExample = () => {
      return <Badges appearance="primary">{5}</Badges>;
    };
    
    export default BadgePrimaryExample;
    `

    const badgePrimaryInverted=`
    import React from 'react';
    import Badges from '@neoKit/badges';
    
    const BadgePrimaryInvertedExample = () => {
      return <Badges appearance='primaryInverted'>{8}</Badges>;
    };
    
    export default BadgePrimaryInvertedExample;
    `
    const badgePrimaryImportant=`
    import React from 'react';
    import Badges from '@neoKit/badges';
    
    const BadgeImportantExample = () => {
      return <Badges appearance="important">{25}</Badges>;
    };
    
    export default BadgeImportantExample;
    `

    const badgeAdded=`
    import React from 'react';
    import Badges from '@neoKit/badges';
    
    const BadgeAddedExample = () => {
      return <Badges appearance="added">+100</Badges>;
    };
    
    export default BadgeAddedExample ;
    `
    const badgeRemoved=`
    import React from 'react';
    import Badges from '@neoKit/badges';
    
    const BadgeRemovexample = () => {
      return <Badges appearance="removed">-100</Badges>;
    };
    
    export default BadgeRemoveExample;
    `
    const badgMaxValue=`
    import React from 'react';
    import Badges from '@neoKit/badges';
    
    const BadgeMaxValuexample = () => {
      return <Badges appearance="added" max={500}>
      {1000}</Badges>;
    };
    
    export default BadgeMaxValuexample;
    `


  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Badge'
        description='A badge is a visual indicator for numeric values such as tallies and scores.'
      />

      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='The default form of a badge.'
        />
        <div className="py-2">
        <Badges
          appearance='default'
        >
          8
        </Badges>
       </div>
        <div className='w-full pt-3'>
          <Snipet code={badgeDefault} />
        </div>
      </section>

           {/* Primary
 */}
           <section>
        <PageData
          subTitle='Primary'
          subDescription='Use a primary badge to help draw attention to new or updated information.

          '
        />
        <div className="py-2">
        <Badges
          appearance='primary'
        >
          5
        </Badges>
       </div>
        <div className='w-full pt-3'>
          <Snipet code={badgePrimary} />
        </div>
      </section>

       {/* Primary inverted
 */}
           <section>
        <PageData
          subTitle='Primary inverted'
          subDescription='Use a primaryInverted badge when high contrast against a darker background color is needed.Use a primary badge to help draw attention to new or updated information.

          '
        />
        <div className="py-2">
        <Badges
          appearance='primaryInverted'
        >
          5
        </Badges>
       </div>
        <div className='w-full pt-3'>
          <Snipet code={badgePrimaryInverted} />
        </div>
      </section>

       {/* Important
 */}
           <section>
        <PageData
          subTitle='Important'
          subDescription='Use an important badge to call attention to information that needs to stand out. For example, notifications in Confluence.

          '
        />
        <div className="py-2">
        <Badges
          appearance='important'
        >
          25
        </Badges>
       </div>
        <div className='w-full pt-3'>
          <Snipet code={  badgePrimaryImportant} />
        </div>
      </section>
         
                {/*Added

 */}
           <section>
        <PageData
          subTitle='Added'
          subDescription='Use an added appearance to show additions. For example, when characters are added to a line of code in Bitbucket.

          '
        />
        <div className="py-2">
        <Badges
         appearance="added"
        >
       +100
        </Badges>
       </div>
        <div className='w-full pt-3'>
          <Snipet code={badgeAdded} />
        </div>
      </section>

         {/* Removed

 */}
           <section>
        <PageData
          subTitle='Removed          '
          subDescription='Use a removed appearance to show removals. For example, when characters are removed from a line of code in Bitbucket.'
        />
        <div className="py-2">
        <Badges
         appearance="removed"
        >
         -100
        </Badges>
       </div>
        <div className='w-full pt-3'>
          <Snipet code={badgeRemoved} />
        </div>
      </section>

       {/* Max value

 */}
           <section>
        <PageData
          subTitle='Max value'
          subDescription='The max prop can be used to cap the value of a badge. When the value to display is greater than the max prop, a + will automatically be appended. The default max value of a badge is 99.

          '
        />
        <div className="py-2">
        <Badges
         appearance="added" max={500}
        >
       1000
        </Badges>
       </div>
        <div className='w-full pt-3'>
          <Snipet code={badgMaxValue} />
        </div>
      </section>
         

    </div>
  );
}

export default  Badge;