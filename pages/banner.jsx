import React, { useState } from "react";
import Banners from "../components/banner-example/banners";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";

function Banner() {
  const bannerWarnning = `import React from 'react';
    import Banners from '@neoKit/banner';

            const Banners = () => {
            return (
                <Banners appearance="warning" color="#253858" icon={'assets/warning.svg'}> 
                Warning goes here </Banners>
            )
    };
    export default Banners;
    `;

  const bannerError = `import React from 'react';
    import Banners from '@neoKit/banner';

            const Banners = () => {
            return (
                <Banners appearance="Error" color="#253858" icon={'assets/error.svg'}> 
                Error message goes here </Banners>
            )
    };
    export default Banners;
    `;

  const bannerAnnouncement = `import React from 'react';

    import Banners from '@neoKit/banner';
    
    const message =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis, odio egestas pulvinar sodales, neque justo tempor tellus, eget venenatis arcu ante non purus. Pellentesque tellus eros, rutrum vel enim non, tempor faucibus felis. Nullam pharetra erat sed magna porttitor, eget tincidunt odio finibus';
    
    const BannerAnnouncementExample = () => {
      return (
        <Banner appearance="announcement" isOpen>
          {message}
        </Banner>
      );
    };
    
    export default BannerAnnouncementExample;
    `;

  const bannerOverflow = `import React from 'react';

    import WarningIcon from '@neoKit/icon/glyph/warning';
    
    import Banners from '@neoKit/banner';
    
    const message =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis, odio egestas pulvinar sodales, neque justo tempor tellus, eget venenatis arcu ante non purus. Pellentesque tellus eros, rutrum vel enim non, tempor faucibus felis. Nullam pharetra erat sed magna porttitor, eget tincidunt odio finibus';
    
    const BannerOverflowExample = () => {
      return (
        <div style={{ maxWidth: 400, margin: 'auto' }}>
          <Banner icon={<WarningIcon label="" secondaryColor="inherit" />} isOpen>
            {message}
          </Banner>
        </div>
      );
    };
    
    export default BannerOverflowExample;
    `;

  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Banner'
        description='A banner displays a prominent message at the top of the screen.'
      />

      {/* warnning */}
      <section>
        <PageData
          subTitle='Warning'
          subDescription='The default form of a banner. Use warning banners when you want the user to take a specific action or to warn them that something is about to go wrong.'
        />
        <div className='py-2'>
          <Banners
            appearance='warning'
            color='#253858'
            icon={"assets/warning.svg"}
          >
            Warning goes here
          </Banners>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={bannerWarnning} />
        </div>
      </section>
      {/* Error */}
      <section>
        <PageData
          subTitle='Error          '
          subDescription='Use error banners to inform users something critical has happened and requires immediate attention.'
        />
        <div className='py-2'>
          <Banners appearance='error' color='#ffff' icon={"assets/error.svg"}>
            Error message goes here
          </Banners>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={bannerError} />
        </div>
      </section>

      {/* Announcement */}
      <section>
        <PageData
          subTitle='Announcement '
          subDescription='Announcement banners are used by admins who want to make a general announcement about the product. These banners do not contain an icon. Lengthy text will overflow, allowing users to scroll to see the rest of the content.'
        />
        <div className='py-2'>
          <Banners appearance='announcement' color='#ffff'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo impedit
            labore nesciunt in, harum fugit odio ipsum tempora vel ut debitis
            nam rerum maiores quam minus corporis recusandae, dolore
            consectetur! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quo impedit labore nesciunt in, harum fugit odio ipsum tempora
            vel ut debitis nam rerum maiores quam minus corporis recusandae,
            dolore consectetur!
          </Banners>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={bannerError} />
        </div>
      </section>

      {/* Truncation */}
      <section>
        <PageData
          subTitle='Truncation '
          subDescription='Banner size can change based on the size of the browser. For warning and error banners, lengthy text will be truncated with an ellipses.'
        />
        <div className='py-2' style={{ maxWidth: 400, margin: "auto" }}>
          <Banners
            appearance='warning'
            color='#253858'
            icon={"assets/warning.svg"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            repellendus expedita, maiores neque dolore nulla, adipisci possimus
            autem ipsa soluta tenetur qui! Magnam est reprehenderit eius facere
            esse iure perferendis.
          </Banners>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={bannerOverflow} />
        </div>
      </section>
    </div>
  );
}

export default Banner;
