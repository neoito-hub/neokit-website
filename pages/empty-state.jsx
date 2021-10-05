import React from "react";
import EmptyState from "../components/emptyState-example/emptyState";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";
import Buttons from "../components/button-example/buttons";

const EmptyStateExample = () => {
  const DefaultExample = `
    import React, { useState } from "react";
    import { EmptyState } from '@neoKit/emptyState';
  
    
    const DefaultExample = () => {
      return (
        <EmptyState header="You don't have access to this issue" ></EmptyState>
      );
    };
    export default DefaultExample;
    `;
  const descriptionExample = `
    import React, { useState } from "react";
    import { EmptyState } from '@neoKit/emptyState';

    
    const DescriptionExample = () => {
      return (
        <EmptyState header="You don't have access to this issue"  description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."></EmptyState>
      );
    };
    export default DescriptionExample;
    `;

  const primaryExample = `
    import React, { useState } from "react";
    import { EmptyState } from '@neoKit/emptyState';

    
    const EmptyStateSecondaryActionExample = () => {
      return (
        <EmptyState
        header="You don't have access to this issue"
        description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
        primaryAction={<Buttons appearance="primary">Request access</Buttons>}
        secondaryAction={<Button>View permissions</Button>}
      ></EmptyState>
      );
    };
    export default EmptyStateSecondaryActionExample;
    `;

  const secondaryExample = `
    import React, { useState } from "react";
    import { EmptyState } from '@neoKit/emptyState';

    
    const EmptyStatePrimaryActionExample = () => {
      return (
        <EmptyState
        header="You don't have access to this issue"
        description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
        primaryAction={<Buttons appearance="primary">Request access</Buttons>}
      ></EmptyState>
      );
    };
    export default EmptyStatePrimaryActionExample;
    `;

  const tertiaryExample = `
    import React, { useState } from "react";
    import { EmptyState } from '@neoKit/emptyState';

    
    const EmptyStateTertiaryActionExample = () => {
      return (
        <EmptyState
        header="You don't have access to this issue"
        description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
        primaryAction={<Buttons appearance="primary">Request access</Buttons>}
        secondaryAction={<Buttons>View permissions</Buttons>}
        tertiaryAction={<Buttons appearance="link">Learn more</Buttons>}
      ></EmptyState>
      );
    };
    export default EmptyStateTertiaryActionExample;
    `;

  const loadingExample = `
    import React, { useState } from "react";
    import { EmptyState } from '@neoKit/emptyState';

    
    const EmptyStateLoadingExample = () => {
      return (
        <EmptyState
        header="You don't have access to this issue"
        description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
        primaryAction={<Buttons appearance="primary">Request access</Buttons>}
        secondaryAction={<Buttons>View permissions</Buttons>}
        tertiaryAction={<Buttons appearance="link">Learn more</Buttons>}
        isLoading={true}
      ></EmptyState>
      );
    };
    export default EmptyStateLoadingExample;
    `;

  const imageExample = `
    import React, { useState } from "react";
    import { EmptyState } from '@neoKit/emptyState';

    
    const EmptyStateImageUrlExample = () => {
      return (
        <EmptyState
        header="You don't have access to this issue"
        description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
        primaryAction={
          <Buttons appearance='primary'>Request access</Buttons>
        }
        imageUrl={"assets/lock.svg"}
    //    imageWidth={100}
    //    imageHeight={100}
      ></EmptyState>
      );
    };
    export default EmptyStateImageUrlExample;
    `;

  const imageDimensionsExample = `
    import React, { useState } from "react";
    import { EmptyState } from '@neoKit/emptyState';

    
    const EmptyStateImageDimensionsExample = () => {
      return (
        <EmptyState
        header="You don't have access to this issue"
        description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
        primaryAction={
          <Buttons appearance='primary'>Request access</Buttons>
        }
        imageUrl={"assets/lock.svg"}
       imageWidth={100}
       imageHeight={100}
      ></EmptyState>
      );
    };
    export default EmptyStateImageDimensionsExample;
    `;

  const emptyStateNarrowExample = `
    import React, { useState } from "react";
    import { EmptyState } from '@neoKit/emptyState';

    
    const EmptyStateNarrow = () => {
      return (
        <EmptyState
        header="You don't have access to this issue"
        description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
        primaryAction={
          <Buttons appearance='primary'>Request access</Buttons>
        }
        imageUrl={"assets/lock.svg"}
        width="narrow"
      ></EmptyState>
      );
    };
    export default EmptyStateNarrow;
    `;
  const emptyStateWideExample = `
    import React, { useState } from "react";
    import { EmptyState } from '@neoKit/emptyState';

    
    const EmptyStateWide = () => {
      return (
        <EmptyState
        header="You don't have access to this issue"
        description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
        primaryAction={
          <Buttons appearance='primary'>Request access</Buttons>
        }
        imageUrl={"assets/lock.svg"}
        width="wide"
      ></EmptyState>
      );
    };
    export default EmptyStateWide;
    `;

  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Empty state'
        description='An empty state appears when there is no data to display and describes what the user can do next.'
      />
      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='The only required part of an empty state is the header.'
        />
        <div className='py-2'>
          <EmptyState header="You don't have access to this issue"></EmptyState>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={DefaultExample} />
        </div>
      </section>

      {/* Description */}
      <section>
        <PageData
          subTitle='Description'
          subDescription='Descriptions should add useful and relevant additional information.'
        />
        <div className='py-2'>
          <EmptyState
            header="You don't have access to this issue"
            description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
          ></EmptyState>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={descriptionExample} />
        </div>
      </section>

      {/* Action Primary */}
      <section>
        <PageData
          subHead='Actions'
          subTitle='Primary'
          subDescription='A primary action button should recommended the most important next step a user can take.

          '
        />
        <div className='py-2'>
          <EmptyState
            header="You don't have access to this issue"
            description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
            primaryAction={
              <Buttons appearance='primary'>Request access</Buttons>
            }
          ></EmptyState>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={primaryExample} />
        </div>
      </section>
      {/* Secondary*/}
      <section>
        <PageData
          subTitle='Secondary'
          subDescription='A secondary action button should recommend an alternate step a user could take. '
        />
        <div className='py-2'>
          <EmptyState
            header="You don't have access to this issue"
            description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
            primaryAction={
              <Buttons appearance='primary'>Request access</Buttons>
            }
            secondaryAction={<Buttons>View permissions</Buttons>}
          ></EmptyState>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={secondaryExample} />
        </div>
      </section>

      {/* Tertiary*/}
      <section>
        <PageData
          subTitle='Tertiary'
          subDescription='Tertiary action buttons can be used to link to external resources or documentation to help the user learn more.  '
        />
        <div className='py-2'>
          <EmptyState
            header="You don't have access to this issue"
            description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
            primaryAction={
              <Buttons appearance='primary'>Request access</Buttons>
            }
            secondaryAction={<Buttons>View permissions</Buttons>}
            tertiaryAction={<Buttons appearance='link'>Learn more</Buttons>}
          ></EmptyState>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={tertiaryExample} />
        </div>
      </section>
      {/* Loading state*/}
      <section>
        <PageData
          subTitle='Loading state'
          subDescription='The isLoading prop can be used to indicate a loading state. This will show a spinner next to the action buttons when true.'
        />
        <div className='py-2'>
          <EmptyState
            header="You don't have access to this issue"
            description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
            primaryAction={
              <Buttons appearance='primary'>Request access</Buttons>
            }
            secondaryAction={<Buttons>View permissions</Buttons>}
            tertiaryAction={<Buttons appearance='link'>Learn more</Buttons>}
            isLoading={true}
          ></EmptyState>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={loadingExample} />
        </div>
      </section>

      {/* Image URL*/}
      <section>
        <PageData
          subTitle='Image URL'
          subDescription='You can display an image by supplying the imageUrl prop. This url will be passed directly into the src attribute of an img component.'
        />
        <div className='py-2'>
          <EmptyState
            header="You don't have access to this issue"
            description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
            primaryAction={
              <Buttons appearance='primary'>Request access</Buttons>
            }
            imageUrl={"assets/lock.svg"}
          ></EmptyState>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={imageExample} />
        </div>
      </section>

      {/* Image dimensions*/}
      <section>
        <PageData
          subTitle='Image dimensions'
          subDescription="Setting the imageWidth and imageHeight props can be useful to prevent your layout from reflowing when images load in. 

          If you have used the imageUrl approach, the imageWidth and imageHeight props set the width and height attributes on the underlying img element. If you have used the renderImage prop, they will be passed in as props to the render function.
          
          If you are resizing a spot illustration to try and squeeze it into a layout, it's a good time to ask whether you should include the image at all
          
          "
        />
        <div className='py-2'>
          <EmptyState
            header="You don't have access to this issue"
            description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
            primaryAction={
              <Buttons appearance='primary'>Request access</Buttons>
            }
            imageUrl={"assets/lock.svg"}
            imageWidth={100}
            imageHeight={100}
          ></EmptyState>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={imageDimensionsExample} />
        </div>
      </section>

      {/* Width*/}
      <section>
        <PageData
          subHead='Width'
          subDescription='The horizontal space that an empty state takes up can be controlled with the width prop. It can be set to either narrow or wide.'
        />
        <PageData subTitle='Narrow' />

        <div className='py-2'>
          <EmptyState
            header="You don't have access to this issue"
            description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
            primaryAction={
              <Buttons appearance='primary'>Request access</Buttons>
            }
            imageUrl={"assets/lock.svg"}
            width='narrow'
          ></EmptyState>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={emptyStateNarrowExample} />
        </div>
      </section>

      <section>
        <PageData subTitle='Wide' />

        <div className='py-2'>
          <EmptyState
            header="You don't have access to this issue"
            description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
            primaryAction={
              <Buttons appearance='primary'>Request access</Buttons>
            }
            imageUrl={"assets/lock.svg"}
            width='wide'
          ></EmptyState>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={emptyStateWideExample} />
        </div>
      </section>
    </div>
  );
};

export default EmptyStateExample;
