import React from "react";
import Buttons from "../components/button-example/buttons";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";

function Button() {
  // default
  const defaultButton = `
    import React from 'react';
    import Buttons from '@neoKit/button';
    const ButtonDefaultExample = () => {
      return <Buttons>Default button</Buttons>;
    };
    export default ButtonDefaultExample;`;
  // primary
  const primaryButton = `
    import React from 'react';
    import Buttons from '@neoKit/button';
    const  ButtonPrimaryExample = () => {
      return <Buttons appearance="primary">Primary button</Buttons>;
    export default  ButtonPrimaryExample;`;
  // Subtle
  const subtleButton = `
    import React from 'react';
    import Buttons from '@neoKit/button';
    const  ButtonSubtleExample = () => {
      return <Buttons appearance="subtle">Subtle button</Buttons>;
    export default  ButtonPrimaryExample;`;

  // Link
  const linkButton = `
      import React from 'react';
      import Buttons from '@neoKit/button';
      const  ButtonLinkExample = () => {
        return <Buttons appearance="link">Link button</Buttons>;
      export default  ButtonLinkExample;`;
  //subtle-link

  const subtleLink = `
      import React from 'react';
      import Buttons from '@neoKit/button';
      const  ButtonsubtleLinkExample = () => {
        return <Buttons appearance="subtle-link">Subtle Link button</Buttons>;
      export default  ButtonsubtleLinkExample;`;

  // warning
  const warningButton = `
      import React from 'react';
      import Buttons from '@neoKit/button';
      const  ButtonWarningExample = () => {
        return <Buttons appearance="warning">Warning button</Buttons>;
      export default  ButtonWarningExample;`;
  //danger

  const dangerButton = `
      import React from 'react';
      import Buttons from '@neoKit/button';
      const  ButtonDangerExample = () => {
        return <Buttons appearance="danger">Danger button</Buttons>;
      export default  ButtonDangerExample;`;

  // Disabled
  const disabledButton = `
  import React from 'react';
  import Buttons from '@neoKit/button';
  const  ButtonDisabledExample = () => {
    return <Buttons appearance="primary" isDisabled>   Disabled button</Buttons>;
  export default  ButtonDisabledExample;`;
  //selected

  const selectedButton = `
  import React from 'react';
  import Buttons from '@neoKit/button';
  const  ButtonSelectedExample = () => {
    return <Buttons  isSelected > Selected button </Buttons>;
  export default  ButtonSelectedExample;`;

    //Loading

    const loadingButton = `
    import React from 'react';
    import Buttons from '@neoKit/button';
    const  ButtonLoadingExample = () => {
      return <Buttons  appearance="primary" isLoading>
      Loading button</Buttons>;
    export default  ButtonLoadingExample;`;

        //Full-width

        const fullWidthButton = `
        import React from 'react';
        import Buttons from '@neoKit/button';
        const  ButtonFullWidthExample = () => {
            <Buttons shouldFitContainer appearance="primary">
      Full width button
    </Buttons>
        export default  ButtonFullWidthExample;`;

                //Button with icon before

                const iconBeforeButton = `
                import React from 'react';
                import Buttons from '@neoKit/button';
                const  ButtonsIconBeforeExample = () => {
                    <Buttons icon="assets/star.svg" position="before"  appearance="primary">
              Full width button
            </Buttons>
                export default  ButtonIconBeforeExample;`
                  //Button with icon before

                  const iconAfterButton = `
                  import React from 'react';
                  import Buttons from '@neoKit/button';
                  const  ButtonsIconBeforeExample = () => {
                      <Buttons icon="assets/star.svg" position="before"  appearance="primary">
                Full width button
              </Buttons>
                  export default  ButtonIconBeforeExample;`
  

  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Button'
        description='A button triggers an event or action. They let users know what will happen next.'
      />

      {/* Primary */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='The default form of a button, used for most cases. They are not impactful enough to represent the primary action in a container.'
        />
        <Buttons> Default button</Buttons>
        <div className='w-full pt-3'>
          <Snipet code={defaultButton} />
        </div>
      </section>

      {/* Primary */}
      <section>
        <PageData
          subTitle='Primary'
          subDescription='Use a primary button to call attention to an action on a form or to highlight the strongest call to action on a page. Primary buttons should only appear once per container (not including the application header or in a modal dialog). Not every screen requires a primary button.'
        />
        <Buttons appearance='primary'> Primary button</Buttons>
        <div className='w-full pt-3'>
          <Snipet code={primaryButton} />
        </div>
      </section>

      {/* Subtle / secondary */}
      <section>
        <PageData
          subTitle='Subtle'
          subDescription='Use a subtle button with a primary button for secondary actions, such as “Cancel".'
        />
        <Buttons appearance='subtle'> Subtle button </Buttons>
        <div className='w-full pt-3'>
          <Snipet code={subtleButton} />
        </div>
      </section>

      {/* Link */}
      <section>
        <PageData
          subTitle='Link'
          subDescription='Use a link button to navigate to another page. These should open in the same window unless information may be lost (for example, when someone is filling out a form), or when the destination is an external site (for example, a knowledge base article).'
        />
        <Buttons appearance='link'> Link button </Buttons>

        <div className='w-full pt-3'>
          <Snipet code={linkButton} />
        </div>
      </section>
      {/* Subtle link */}
      <section>
        <PageData
          subTitle='Subtle link'
          subDescription='Similar to a subtle button, but behaves like a link button. Use a subtle link button to avoid overwhelming the page with blue links.'
        />
        <Buttons appearance='subtle-link'>Subtle link button</Buttons>

        <div className='w-full pt-3'>
          <Snipet code={subtleLink} />
        </div>
      </section>

      {/*Warning*/}
      <section>
        <PageData
          subTitle='Warning'
          subDescription='A warning button appears before we request the user to take action, usually in anticipation of a significant change. These are found mostly in confirmation modals.'
        />
        <Buttons appearance='warning'>Warning button</Buttons>

        <div className='w-full pt-3'>
          <Snipet code={warningButton} />
        </div>
      </section>

      {/* Danger */}
      <section>
        <PageData
          subTitle='Danger'
          subDescription='The danger button appears as a final confirmation for a destructive action such as deleting. These are found mostly in confirmation modals.'
        />
        <Buttons appearance='danger'>Danger button</Buttons>

        <div className='w-full pt-3'>
          <Snipet code={dangerButton} />
        </div>
      </section>

      {/*Disabled*/}
      <section>
        <PageData
          subTitle='Disabled'
          subDescription='Set isDisabled to disable a button that isn’t usable. Disabled buttons can cause accessibility problems, so avoid using isDisabled, especially for form submissions.'
        />
        <Buttons appearance='primary' isDisabled>
          {" "}
          Disabled button{" "}
        </Buttons>

        <div className='w-full pt-3'>
          <Snipet code={disabledButton} />
        </div>
      </section>

      {/* Selected */}
      <section>
        <PageData
          subTitle='Selected'
          subDescription='Set isSelected to indicate the button is selected.'
        />
        <Buttons  isSelected > Selected button </Buttons>

        <div className='w-full pt-3'>
          <Snipet code={loadingButton} />
        </div>
      </section>

      {/* Loading */}
      <section>
        <PageData
          subTitle='Loading'
          subDescription='Set isLoading to indicate the button is loading. The button text is hidden and a spinner is shown in its place, while maintaining the width that it would have if the text were visible.'
        />
        <Buttons  appearance="primary" isLoading>
      Loading button </Buttons>

        <div className='w-full pt-3'>
          <Snipet code={loadingButton} />
        </div>
      </section>

      {/* Full width */}
      <section>
        <PageData
          subTitle='Full width'
          subDescription='Buttons can be expanded to full width to fill its parent container.'
        />
        <Buttons shouldFitContainer appearance="primary">
        Full width button </Buttons>

        <div className='w-full pt-3'>
          <Snipet code={fullWidthButton} />
        </div>
      </section>


      {/* Button with icon before*/}
      <section>
      <PageData
          subTitle='Button with icon'
          subDescription='Buttons may include an icon before or after the text.
          '
        />
        <PageData
          subTitle='Icon before'
          subDescription='Display an icon before the text.'
        />

        <Buttons  icon={"assets/star.svg"} position="before" appearance="primary">
        Icon before</Buttons>

        <div className='w-full pt-3'>
          <Snipet code={iconBeforeButton} />
        </div>
      </section>
      {/* Button with icon after*/}
      <section>
 
        <PageData
          subTitle='Icon after'
          subDescription='Display an icon after the text.'
        />

        <Buttons  icon={"assets/star.svg"} position="after" appearance="primary">
        Icon after</Buttons>

        <div className='w-full pt-3'>
          <Snipet code={iconAfterButton} />
        </div>
      </section>

    </div>
  );
}

export default Button;
