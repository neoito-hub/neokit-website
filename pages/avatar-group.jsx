import React from "react";
import AvatarGroup from "../components/avatar-group-example/avatar-group";
import AvatarGroupItem from "../components/avatar-group-example/avatar-group-item";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";

const AvatarGroupExample = () => {
  const AvatarDefault = `
    import React from 'react';
    import AvatarGroup from '@neoKit/AvatarGroup';
    import AvatarGroupItem from '@neoKit/AvatarGroupItem';
    const AvatarDefaultExample = () => {
        <AvatarGroup>
        <AvatarGroupItem
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="image"
          text=""
        ></AvatarGroupItem>
        <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
        <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
         <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
         <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
      </AvatarGroup>
    };
    export default AvatarDefaultExample;`;

    const AvatarWithText = `
    import React from 'react';
    import AvatarGroup from '@neoKit/AvatarGroup';
    import AvatarGroupItem from '@neoKit/AvatarGroupItem';
    const AvatarWithTextExample = () => {
        <AvatarGroup>
        <AvatarGroupItem
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="image"
          text=""
        ></AvatarGroupItem>
        <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
        <AvatarGroupItem text="sm"></AvatarGroupItem>
        <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
        <AvatarGroupItem text="sm ttt sd "></AvatarGroupItem>
        <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
        <AvatarGroupItem text="sm"></AvatarGroupItem>
        <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
        <AvatarGroupItem text="sm ttt sd "></AvatarGroupItem>
      </AvatarGroup>
    };
    export default AvatarWithText;`;
    const AvatarWithMaxItem = `
    import React from 'react';
    import AvatarGroup from '@neoKit/AvatarGroup';
    import AvatarGroupItem from '@neoKit/AvatarGroupItem';
    const AvatarWithMaxItemExample = () => {
        <AvatarGroup maxCount={5}>
        <AvatarGroupItem
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="image"
          text=""
        ></AvatarGroupItem>
        <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
        <AvatarGroupItem text="sm"></AvatarGroupItem>
        <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
        <AvatarGroupItem text="sm ttt sd "></AvatarGroupItem>
        <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
        <AvatarGroupItem text="sm"></AvatarGroupItem>
        <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
        <AvatarGroupItem text="sm ttt sd "></AvatarGroupItem>
      </AvatarGroup>
    };
    export default AvatarWithMaxItemExample;`;
  return (
    <div className="flex flex-col  w-full flex-start">
      <PageData
        title="Avatar group"
        description="Group of stacked avatars with white border."
      />

      {/* Default */}
      <section>
        <PageData
          subTitle="Default"
          subDescription="The default form of a badge."
        />
        <div className="py-2">
          <AvatarGroup>
            <AvatarGroupItem
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="image"
              text=""
            ></AvatarGroupItem>
            <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>

            <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>

            <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>

            <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
          </AvatarGroup>
        </div>
        <div className="w-full pt-3">
          <Snipet code={AvatarDefault} />
        </div>
      </section>

      {/*Icon with text */}
      <section>
        <PageData
          subTitle="Avatar group with text"
          subDescription="Users can replace text instead of avatar "
        />
        <div className="py-2">
          <AvatarGroup>
            <AvatarGroupItem
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="image"
              text=""
            ></AvatarGroupItem>
            <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
            <AvatarGroupItem text="sm"></AvatarGroupItem>
            <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
            <AvatarGroupItem text="sm ttt sd "></AvatarGroupItem>
            <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
            <AvatarGroupItem text="sm"></AvatarGroupItem>
            <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
            <AvatarGroupItem text="sm ttt sd "></AvatarGroupItem>
          </AvatarGroup>
        </div>
        <div className="w-full pt-3">
          <Snipet code={AvatarWithText} />
        </div>
      </section>

      {/* Avatar group with max count */}
      <section>
        <PageData
          subTitle="Avatar group with max count "
          subDescription="Users can decide how many icons should be shown"
        />
        <div className="py-2">
          <AvatarGroup maxCount={5}>
            <AvatarGroupItem
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="image"
              text=""
            ></AvatarGroupItem>
            <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
            <AvatarGroupItem text="sm"></AvatarGroupItem>
            <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
            <AvatarGroupItem text="sm ttt sd "></AvatarGroupItem>
            <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
            <AvatarGroupItem text="sm"></AvatarGroupItem>
            <AvatarGroupItem src={"assets/avatar.svg"}></AvatarGroupItem>
            <AvatarGroupItem text="sm ttt sd "></AvatarGroupItem>
          </AvatarGroup>
        </div>
        <div className="w-full pt-3">
          <Snipet code={AvatarWithMaxItem} />
        </div>
      </section>
    </div>
  );
};

export default AvatarGroupExample;
