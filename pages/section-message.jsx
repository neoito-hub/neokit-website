import React from "react";
import SectionMessage from "../components/section-message/sectionMessage";
import SectionMessageAction from "../components/section-message/section-message-action";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";

const SectionMessageExample = () => {
  const DefaultSectionMessageExample = `
    import React from 'react';
    import SectionMessage, { SectionMessageAction } from '@neoKit/section-message';
    
      const DefaultSectionMessageExample = () => {
     
      
        return (
            <SectionMessage
            title='Editing is restricted'
            actions={[
              <SectionMessageAction  onClick={()=>{}}>Action 1</SectionMessageAction>,
              <SectionMessageAction href='m.youtube.com'>Action 2</SectionMessageAction>
            ]}
          >
            <p>
              You're not allowed to change these restrictions. It's either due
              to the restrictions on the page, or permission settings for this
              space.
            </p>
          </SectionMessage>
        );
      };
      export default DefaultSectionMessageExample;
    
`;
  const SuccessSectionMessageExample = `
import React from 'react';
import SectionMessage, { SectionMessageAction } from '@neoKit/section-message';

  const SuccessSectionMessageExample = () => {
    return (
        <SectionMessage
        title=''
        appearance="success"
      >
        <p>
        File has been uploaded.
        </p>
      </SectionMessage>
    );
  };
  export default SuccessSectionMessageExample;
  `;

  const WarningSectionMessageExample = `
  import React from 'react';
  import SectionMessage, { SectionMessageAction } from '@neoKit/section-message';
  
    const  WarningSectionMessageExample = () => {
      return (
        <SectionMessage
        title='Cannot connect to the database'
        appearance='warning'
      >
        <p>We are unable to save any progress at this time.</p>
      </SectionMessage>
      );
    };
    export default  WarningSectionMessageExample;
    `;

  const ErrorSectionMessageExample = `
    import React from 'react';
    import SectionMessage, { SectionMessageAction } from '@neoKit/section-message';
    
      const  ErrorSectionMessageExample = () => {
        return (
            <SectionMessage
            title='This account will be permanently deleted'
            appearance='error'
          >
            <p>The user 'user15' no longer has access to Atlassian services.</p>
          </SectionMessage>
        );
      };
      export default  ErrorSectionMessageExample;
      `;

  const DiscoverSectionMessageExample = `
    import React from 'react';
    import SectionMessage, { SectionMessageAction } from '@neoKit/section-message';
    
      const  DiscoverSectionMessageExample = () => {
        return (
            <SectionMessage
            title='Your managed accounts now include Trello access'
            appearance='discovery'
            actions={<SectionMessageAction href="#">Learn more</SectionMessageAction>}
          >
            <p>
              Your managed accounts now include Trello access Some users haven't
              started using their Atlassian account for Trello. Changes you make
              to an account are reflected only if the user starts using the
              account for Trello.
            </p>
          </SectionMessage>
        );
      };
      export default  DiscoverSectionMessageExample;
      `;

  const ActionSectionMessageExample = `
      import React from 'react';
      import SectionMessage, { SectionMessageAction } from '@neoKit/section-message';
      
        const  ActionSectionMessageExample = () => {
          return (
            <SectionMessage
            title='Merged pull request'
            appearance='success'
            actions={[
              <SectionMessageAction href='#'>View commit</SectionMessageAction>,
              <SectionMessageAction onClick={() => {}}>
                Dismiss
              </SectionMessageAction>
            ]}
          >
            <p>Pull request #10146 merged after a successful build</p>
          </SectionMessage>
          );
        };
        export default  ActionSectionMessageExample;
        `;
  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Section message'
        description='A section message is used to alert users to a particular section of the screen.'
      />
      {/* Default */}
      <section>
        <PageData
          subHead='Appearance'
          subDescription='By default, all section message come with an icon and an area for content. A title and actions can also be added.'
        />
        <PageData
          subTitle='Information'
          subDescription='The information section message is the default appearance used to signify a change in state or important information.'
        />
        <div className='py-2'>
          <SectionMessage
            title='Editing is restricted'
            actions={[
              <SectionMessageAction onClick={() => {}}>
                Action 1
              </SectionMessageAction>,
              <SectionMessageAction href='m.youtube.com'>
                Action 2
              </SectionMessageAction>
            ]}
          >
            <p>
              You're not allowed to change these restrictions. It's either due
              to the restrictions on the page, or permission settings for this
              space.
            </p>
          </SectionMessage>
        </div>
        <div className='w-full pt-3 '>
          <Snipet code={DefaultSectionMessageExample} />
        </div>
      </section>

      {/* Success */}
      <section>
        <PageData
          subTitle='Success'
          subDescription='Use a success section message to let the user know that an action or event has happened successfully.

          Not a common use case for section messages.'
        />
        <div className='py-2'>
          <SectionMessage title='' appearance='success'>
            <p>File has been uploaded.</p>
          </SectionMessage>
        </div>
        <div className='w-full pt-3 '>
          <Snipet code={SuccessSectionMessageExample} />
        </div>
      </section>
      {/* Warning */}
      <section>
        <PageData
          subTitle='Warning'
          subDescription='Use a warning section message to help users:'
        />
        <div>
          <ul className='list-disc pl-10 font-normal lg:text-sm text-xs tracking-wide text-secondary py-2 pb-0 text-left'>
            <li>avoid errors</li>
            <li>manage authentication issues</li>
            <li>
              take the actions needed to avoid potentially dangerous actions
            </li>
            <li>
              feel certain they're making the decision, for example, in
              confirmation modals
            </li>
          </ul>
        </div>

        <PageData subDescription=' These are the most common use cases for section messages.' />
        <div className='py-2 pt-0'>
          <SectionMessage
            title='Cannot connect to the database'
            appearance='warning'
          >
            <p>We are unable to save any progress at this time.</p>
          </SectionMessage>
        </div>
        <div className='w-full pt-3 '>
          <Snipet code={WarningSectionMessageExample} />
        </div>
      </section>

      {/* Error */}
      <section>
        <PageData
          subTitle='Error'
          subDescription='Use an error section message to let the user know when:'
        />
        <div>
          <ul className='list-disc pl-10 font-normal lg:text-sm text-xs tracking-wide text-secondary py-2 pb-0 text-left'>
            <li>something destructive or critical has happened</li>
            <li>access has been denied</li>
            <li>there are connectivity issues</li>
          </ul>
        </div>

        <PageData subDescription=' Not a common use case for section messages.' />
        <div className='py-2 pt-0'>
          <SectionMessage
            title='This account will be permanently deleted'
            appearance='error'
          >
            <p>The user `user15` no longer has access to Atlassian services.</p>
          </SectionMessage>
        </div>
        <div className='w-full pt-3 '>
          <Snipet code={ErrorSectionMessageExample} />
        </div>
      </section>

      {/* Discovery */}
      <section>
        <PageData
          subTitle='Discovery'
          subDescription='Use a discovery section message to signify an update to the UI or provide information around new features and onboarding.'
        />

        <div className='py-2'>
          <SectionMessage
            title='Your managed accounts now include Trello access'
            appearance='discovery'
            actions={
              <SectionMessageAction href='#'>Learn more</SectionMessageAction>
            }
          >
            <p>
              Your managed accounts now include Trello access Some users haven't
              started using their Atlassian account for Trello. Changes you make
              to an account are reflected only if the user starts using the
              account for Trello.
            </p>
          </SectionMessage>
        </div>
        <div className='w-full pt-3 '>
          <Snipet code={DiscoverSectionMessageExample} />
        </div>
      </section>
      {/* Actions */}
      <section>
        <PageData
          subTitle='Actions'
          subDescription='Use the actions prop to let users act on the content in the section message.

          The SectionMessageAction component is designed to work with the actions prop. In most cases you should use the section message action, but you can also use any JSX element in the actions array.
          
          An action will render a button if you supply an onClick handler, or a link if you supply an href. You can override the default link component using the linkComponent prop; this works well with router libraries.'
        />

        <div className='py-2'>
          <SectionMessage
            title='Merged pull request'
            appearance='success'
            actions={[
              <SectionMessageAction href='#'>View commit</SectionMessageAction>,
              <SectionMessageAction onClick={() => {}}>
                Dismiss
              </SectionMessageAction>
            ]}
          >
            <p>Pull request #10146 merged after a successful build</p>
          </SectionMessage>
        </div>
        <div className='w-full pt-3 '>
          <Snipet code={ActionSectionMessageExample} />
        </div>
      </section>
    </div>
  );
};

export default SectionMessageExample;
