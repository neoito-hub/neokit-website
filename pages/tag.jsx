import React from "react";
import PageData from "../components/page-data/page-data";
import Tags from "../components/tags-example/tags";
import Snipet from "../components/snippet/snipet";
import Avatars from "../components/avatar-example/avatars";

function Tag() {
  const defaultTag = `  
    import React from 'react';
    import { Tag } from '@neoKit/tag';
    const TagExample = () => {
        return (
          <Tag> Tag </Tag>
        );
      };
      
      export default TagExample;`;

  const tagLink = `
  import React from 'react';
  import { Tag } from '@neoKit/tag';
  const TagLinkExample = () => {
      return (
        <Tag href="/home"> Tag link</Tag>
      );
    };
    export default TagLinkExample;`;

  const removableTag = `
    import React from 'react';
    import { Tag } from '@neoKit/tag';
    const RemovableTagExample = () => {
        return (
          <Tag removable> Removable tag </Tag>
        );
      };
      export default RemovableTagExample;`;
  const removableTagLink = `
      import React from 'react';
      import { Tag } from '@neoKit/tag';
      const removableTagLinkLnkExample = () => {
          return (
            <Tag removable href="/"> Removable tag </Tag>
          );
        };
        export default removableTagLinkLnkExample;`;
  const roundedRemovableTag = `
        import React from 'react';
        import { Tag } from '@neoKit/tag';
        import { Avatar } from '@neoKit/avatar';
        const removableRoundedTagExample = () => {
            return (
                <Tags removable position="after" rounded >
                <Avatars width={20} height={20} path={"assets/avatar.svg"} /> 
       Removable tag link</Tags>
            );
          };
          export default removableRoundedTagExample;`;

  const roundedRemovableTagLink = `
          import React from 'react';
          import { Tag } from '@neoKit/tag';
          import { Avatar } from '@neoKit/avatar';
          const removableRoundedTagExample = () => {
              return (
                  <Tags removable position="after" rounded >
                  <Avatars width={20} height={20} path={"assets/avatar.svg"}  href="/" /> 
         Removable tag link</Tags>
              );
            };
            export default removableRoundedTagExample;`;
  const colorsTagLink = `
            import React from 'react';
            import { Tag } from '@neoKit/tag';
            const colorsTagLinkExample = () => {
                return (
                    <div>
                    <Tags color='standard'> standard Tag</Tags>
                    <Tags color='green' href="/"> Green Tag</Tags>
                    <Tags color='teal' > Teal Tag</Tags>
                    <Tags color='black'> Black Tag</Tags>
                    </div>
                   
                );
              };
              export default colorsTagLinkExample;`;

  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Tag'
        description='A tag labels UI objects for quick recognition and navigation.'
      />

      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='The default form of a tag, where text is required. Tags with static text can be used as a flag or as a reference to an object or attribute.

            '
        />
        <div className='py-2'>
          <Tags text="Tag"></Tags>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={defaultTag} />
        </div>
      </section>

      {/* Tag Link */}
      <section>
        <PageData
          subTitle='Tag link'
          subDescription=' A tag with an href can link to more information on the tagged item. '
        />
        <div className='py-2'>
          <Tags href='/home' text="Tag link"></Tags>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={tagLink} />
        </div>
      </section>

      {/* Removable*/}
      <section>
        <PageData
          subTitle='Removable'
          subDescription='Once a tag has been removed, it cannot be re-rendered. Removable tags are visible in "edit" mode or in multi-select controls. '
        />
        <div className='py-2 h-8'>
          <Tags text="Removable tag"  removable ></Tags>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={removableTag} />
        </div>
      </section>

      {/* Removablelink*/}
      <section>
        <PageData
          subTitle='Removable link'
          subDescription='A removable tag with an href can link to more information.'
        />
        <div className='py-2 h-8'>
          <Tags text="Removable tag link" removable href='/'>
            
          </Tags>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={removableTagLink} />
        </div>
      </section>

      {/* rounded*/}
      <section>
        <PageData
          subTitle='Rounded'
          subDescription='Rounded tags with an avatar are used to add or remove people in multi-select controls.'
        />
        <div className='py-2 h-8'>
          <Tags text="  Removable tag" removable position='before' rounded>
            <Avatars width={20} height={20} path={"assets/avatar.svg"} />
          
          </Tags>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={roundedRemovableTag} />
        </div>
      </section>

      {/* Rounded link
       */}
      <section>
        <PageData
          subTitle='Rounded link          '
          subDescription='A rounded tag with an avatar can link to more information.'
        />
        <div className='py-2 h-8'>
          <Tags text="Removable tag link" removable position='after' rounded href='/'>
            <Avatars width={20} height={20} path={"assets/avatar.svg"} />
          </Tags>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={roundedRemovableTagLink} />
        </div>
      </section>
      {/* colors
       */}
      <section>
        <PageData
          subTitle='Color'
          subDescription='The color theme for background and text.

          '
        />
        <div className='py-2 h-8 flex gap-2'>
          <Tags text="standard Tag" color='standard'> </Tags>
          <Tags text="Green Tag" color='green' href='/'> </Tags>
          <Tags text="Teal Tag" color='teal'> </Tags>
          <Tags text="Black Tag" color='black'> </Tags>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={colorsTagLink} />
        </div>
      </section>
      {/* Text max length
       */}
      <section>
        <PageData
          subTitle='Text max length'
          subDescription='Once the text reaches 200px, it is truncated with an ellipsis.'
        />
        <div className='py-2 h-8'>
        <Tags text="Croissant tiramisu gummi bears."></Tags>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={colorsTagLink} />
        </div>
      </section>
    </div>
  );
}

export default Tag;
