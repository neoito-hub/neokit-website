import React, { useState } from "react";
import Avatars from "../components/avatar-example/avatars";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";

function Avatar() {
  const avatarDefaultHeight = `
    import React from 'react';
    import Avatars from '@neoKit/avatar';

    const AvatarDefaultHeightExample = () => {
    return(<div>
      <Avatars size='xxlarge' path={"assets/avatar.svg"} />
      <Avatars size='xlarge' path={"assets/avatar.svg"} />
      <Avatars size='large' path={"assets/avatar.svg"} />
      <Avatars size='medium' path={"assets/avatar.svg"} />
      <Avatars size='small' path={"assets/avatar.svg"} />
  />
  </div>
  );
};

export default AvatarDefaultHeightExample;
`;

  const avatarCustomHeight = `
    import React from 'react';
    import Avatars from '@neoKit/avatar';

    const AvatarCustomHeightExample = () => {
    return(<div>
      <Avatars width={100} height={100} path={"assets/avatar.svg"} />
      <Avatars width={75} height={75} path={"assets/avatar.svg"} />
      <Avatars width={50} height={50} path={"assets/avatar.svg"} />
      <Avatars width={25} height={25} path={"assets/avatar.svg"} />
      <Avatars width={15} height={15} path={"assets/avatar.svg"} />
  />
  </div>
  );
};

export default AvatarCustomHeightExample;
`;
  const avatarStatus = `
import React from 'react';
import Avatars from '@neoKit/avatar';

const AvatarStatusExample = () => {
return (
<div>
<Avatars width={75} height={75} path={"assets/avatar.svg"} status='true' position='top right' />
  <Avatars width={75} height={75} path={"assets/avatar.svg"} status='true' position='top left' />
  <Avatars width={75} height={75} path={"assets/avatar.svg"} status='true'  position='bottom left'/>
  <Avatars width={75} height={75} path={"assets/avatar.svg"} status='true'  position='bottom right' color='red'/>
  </div>
);
};

export default AvatarStatusExample;
`;

  const avatarImageStatus = `
import React from 'react';
import Avatars from '@neoKit/avatar';

const AvatarImageStatusExample = () => {
return (
<div>
<Avatars width={75} height={75} path={"assets/avatar.svg"} status='true' position='top left' />
<Avatars width={75} height={75} path={"assets/avatar.svg"} status='true'  position='bottom left' statusImage={"assets/status.svg"}/>
<Avatars width={75} height={75} path={"assets/avatar.svg"} status='true'  position='bottom right' />
  </div>
);
};

export default AvatarImageStatusExample;
`;

  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Avatar'
        description='An avatar is a visual representation of a user or entity.'
      />

      {/* size */}

      <PageData subTitle='Size' subDescription='' />

      <h5 className='lg:text-lg md:text-base text-sm text-primary font-normal pb-3'>
        {" "}
        Default Size{" "}
      </h5>
      <div className='flex flex-wrap items-center gap-5'>
        <Avatars size='xxlarge' path={"assets/avatar.svg"} />
        <Avatars size='xlarge' path={"assets/avatar.svg"} />
        <Avatars size='large' path={"assets/avatar.svg"} />
        <Avatars size='medium' path={"assets/avatar.svg"} />
        <Avatars size='small' path={"assets/avatar.svg"} />
      </div>

      <div className='w-full pt-3'>
        <Snipet code={avatarDefaultHeight} />
      </div>

      <h5 className='lg:text-lg md:text-base text-sm text-primary font-normal pb-3 pt-2'>
        
        Custom Size
      </h5>
      <div className='flex flex-wrap items-center gap-5'>
        <Avatars width={100} height={100} path={"assets/avatar.svg"} />
        <Avatars width={75} height={75} path={"assets/avatar.svg"} />
        <Avatars width={50} height={50} path={"assets/avatar.svg"} />
        <Avatars width={25} height={25} path={"assets/avatar.svg"} />
        <Avatars width={15} height={15} path={"assets/avatar.svg"} />
      </div>

      <div className='w-full pt-3'>
        <Snipet code={avatarCustomHeight} />
      </div>

      {/* status */}

      <PageData subTitle='Status' subDescription='' />
      <div className='flex flex-wrap items-center gap-5'>
        <Avatars
          width={75}
          height={75}
          path={"assets/avatar.svg"}
          status='true'
        />
        <Avatars
          width={75}
          height={75}
          path={"assets/avatar.svg"}
          status='true'
          position='top left'
        />
        <Avatars
          width={75}
          height={75}
          path={"assets/avatar.svg"}
          status='true'
          position='bottom left'
        />
        <Avatars
          width={75}
          height={75}
          path={"assets/avatar.svg"}
          status='true'
          position='bottom-right'
          color='red'
        />
      </div>

      <div className='w-full pt-3'>
        <Snipet code={avatarStatus} />
      </div>
      {/* //status with image   */}
      <section>
        <PageData subTitle='Status with Image' subDescription='' />
        <div className='flex flex-wrap items-center gap-5'>
          <Avatars width={75} height={75} status='true' />
          <Avatars
            width={75}
            height={75}
            status='true'
            position='top left'
            statusImage={`assets/status.svg`}
          />
          <Avatars
            width={75}
            height={75}
            status='true'
            position='bottom left'
          />
          <Avatars
            width={75}
            height={75}
            path={"assets/avatar.svg"}
            status='true'
            position='bottom right'
            color='red'
            statusImage={"assets/status.svg"}
          />
        </div>
        <div className='w-full pt-3'>
          <Snipet code={avatarImageStatus} />
        </div>
      </section>
    </div>
  );
}

export default Avatar;
