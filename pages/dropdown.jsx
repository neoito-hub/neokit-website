import React from "react";
import { googlecode } from "react-code-blocks";
import DropdownItem from "../components/dropdown-example/dropdown-item";
import DropdownMenu from "../components/dropdown-example/dropdown-menu";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";
import Buttons from "../components/button-example/buttons";

const DropdownExample = () => {
  const DropdownDefault = `
    import React from "react";
  
    import DropdownMenu from '@neoKit/dropdown-menu';
    import DropdownItem from '@neoKit/dropdown-item';
    
    const DropdownDefault = () => {
       
      return (
        DropdownMenu
        trigger="Page actions"
        type="button"
        onChange={(event) => {
          console.log(event);
        }}
      >
        <DropdownItem> sample 1</DropdownItem>
        <DropdownItem> sample 2</DropdownItem>
        <DropdownItem> sample 3</DropdownItem>
        <DropdownItem> sample 4</DropdownItem>
      </DropdownMenu>
      );
    };
  
  export default DropdownDefault;`;

  const DropdownWithArrow = `
  import React from "react";

  import DropdownMenu from '@neoKit/dropdown-menu';
  import DropdownItem from '@neoKit/dropdown-item';
  
  const DropdownWithArrowExample = () => {
     
    return (
      <DropdownMenu
      trigger="Page actions"
      type="button"
      isArrow={false}
      onChange={(event) => {
        console.log(event);
      }}
    >
      <DropdownItem> sample 1</DropdownItem>
      <DropdownItem> sample 2</DropdownItem>
      <DropdownItem> sample 3</DropdownItem>
      <DropdownItem> sample 4</DropdownItem>
    </DropdownMenu>
    );
  };

export default DropdownWithArrowExample;`;

  const DropdownMenuShouldFitContainerExample = `
import React from "react";

import DropdownMenu from '@neoKit/dropdown-menu';
import DropdownItem from '@neoKit/dropdown-item';

const DropdownMenuShouldFitContainerExample = () => {
   
  return (
    <DropdownMenu
    shouldFitContainer
    trigger="Page actions"
    type="button"
    onChange={(event) => {
      console.log(event);
    }}
  >
    <DropdownItem> sample 1</DropdownItem>
    <DropdownItem> sample 2</DropdownItem>
    <DropdownItem> sample 3</DropdownItem>
    <DropdownItem> sample 4</DropdownItem>
  </DropdownMenu>
  );
};

export default DropdownMenuShouldFitContainerExample;`;
  const DropdownMenuMoreButtonExample = `
import React from "react";

import DropdownMenu from '@neoKit/dropdown-menu';
import DropdownItem from '@neoKit/dropdown-item';

const DropdownMenuMoreButtonExample = () => {
   
  return (
    <DropdownMenu
            trigger="Page actions"
            type="button"
            appearance="more"
            onChange={(event) => {
              console.log(event);
            }}
          >
            <DropdownItem> sample 1</DropdownItem>
            <DropdownItem> sample 2</DropdownItem>
            <DropdownItem> sample 3</DropdownItem>
            <DropdownItem> sample 4</DropdownItem>
          </DropdownMenu>
  );
};

export default DropdownMenuMoreButtonExample;`;

const DropdownMenuTallButtonExample = `
import React from "react";

import DropdownMenu from '@neoKit/dropdown-menu';
import DropdownItem from '@neoKit/dropdown-item';

const DropdownMenuTallButtonExample = () => {
   
  return (
    <DropdownMenu
            trigger="Page actions"
            type="button"
            appearance="more"
            onChange={(event) => {
              console.log(event);
            }}
          >
          <DropdownItem> sample 1</DropdownItem>
          <DropdownItem> sample 2</DropdownItem>
          <DropdownItem> sample 3</DropdownItem>
          <DropdownItem> sample 4</DropdownItem>
          <DropdownItem> sample 5</DropdownItem>
          <DropdownItem> sample 6</DropdownItem>
          <DropdownItem> sample 7</DropdownItem>
          <DropdownItem> sample 8</DropdownItem>
          <DropdownItem> sample 9</DropdownItem>
          <DropdownItem> sample 10</DropdownItem>
          <DropdownItem> sample 11</DropdownItem>
          <DropdownItem> sample 12</DropdownItem>
          <DropdownItem> sample 13</DropdownItem>
          <DropdownItem> sample 14</DropdownItem>
          <DropdownItem> sample 15</DropdownItem>
          <DropdownItem> sample 16</DropdownItem>
          <DropdownItem> sample 17</DropdownItem>
          <DropdownItem> sample 18</DropdownItem>
          <DropdownItem> sample 19</DropdownItem>
          <DropdownItem> sample 20</DropdownItem>
          <DropdownItem> sample 21</DropdownItem>
          <DropdownItem> sample 22</DropdownItem>
          <DropdownItem> sample 23</DropdownItem>
          <DropdownItem> sample 24</DropdownItem>
          </DropdownMenu>
  );
};

export default DropdownMenuTallButtonExample;`;

  return (
    <div className="flex flex-col  w-full flex-start">
      <PageData
        title="Dropdown menu"
        description="A dropdown menu displays a list of actions or options to a user."
      />
      {/* Default */}
      <section>
        <PageData
          subTitle="Default"
          subDescription=" Use default for the default dropdown menu appearance. The default menu will scroll after its height exceeds the pre-defined amount."
        />
        <div className="py-2">
          <DropdownMenu
            trigger="Page actions"
            type="button"
            onChange={(event) => {
              console.log(event);
            }}
          >
            <DropdownItem> sample 1</DropdownItem>
            <DropdownItem> sample 2</DropdownItem>
            <DropdownItem> sample 3</DropdownItem>
            <DropdownItem> sample 4</DropdownItem>
          </DropdownMenu>
        </div>
        <div className="w-full pt-3">
          <Snipet code={DropdownDefault} />
        </div>
      </section>
      {/* Dropdown without arrow */}
      <section>
        <PageData
          subTitle="Dropdown without arrow"
          subDescription="The dropdown have custom arrows user can controll that "
        />
        <div className="py-2">
          <DropdownMenu
            trigger="Page actions"
            type="button"
            isArrow={false}
            onChange={(event) => {
              console.log(event);
            }}
          >
            <DropdownItem> sample 1</DropdownItem>
            <DropdownItem> sample 2</DropdownItem>
            <DropdownItem> sample 3</DropdownItem>
            <DropdownItem> sample 4</DropdownItem>
          </DropdownMenu>
        </div>
        <div className="w-full pt-3">
          <Snipet code={DropdownWithArrow} />
        </div>
      </section>

      {/* Should fit container */}
      <section>
        <PageData
          subTitle="Should fit container"
          subDescription="Use shouldFitContainer to fit the width of the dropdown menu to its parent width. "
        />
        <div className="py-2">
          <DropdownMenu
            shouldFitContainer
            trigger="Page actions"
            type="button"
            onChange={(event) => {
              console.log(event);
            }}
          >
            <DropdownItem> sample 1</DropdownItem>
            <DropdownItem> sample 2</DropdownItem>
            <DropdownItem> sample 3</DropdownItem>
            <DropdownItem> sample 4</DropdownItem>
          </DropdownMenu>
        </div>
        <div className="w-full pt-3">
          <Snipet code={DropdownMenuShouldFitContainerExample} />
        </div>
      </section>

      {/* more button */}
      <section>
        <PageData
          subTitle="More button"
          subDescription=" user can change button icon "
        />
        <div className="py-2">
          <DropdownMenu
            trigger="Page actions"
            type="button"
            appearance="more"
            onChange={(event) => {
              console.log(event);
            }}
          >
            <DropdownItem> sample 1</DropdownItem>
            <DropdownItem> sample 2</DropdownItem>
            <DropdownItem> sample 3</DropdownItem>
            <DropdownItem> sample 4</DropdownItem>
          </DropdownMenu>
        </div>
        <div className="w-full pt-3">
          <Snipet code={DropdownMenuMoreButtonExample} />
        </div>
      </section>

      {/* Tall */}
      <section>
        <PageData
          subTitle="Tall"
          subDescription=" Use tall to control the height of the menu. The tall menu will not scroll until the height exceeds the height of the viewport. "
        />
        <div className="py-2">
          <DropdownMenu
            trigger="Page actions"
            type="button"
            appearance="more"
            onChange={(event) => {
              console.log(event);
            }}
          >
            <DropdownItem> sample 1</DropdownItem>
            <DropdownItem> sample 2</DropdownItem>
            <DropdownItem> sample 3</DropdownItem>
            <DropdownItem> sample 4</DropdownItem>
            <DropdownItem> sample 5</DropdownItem>
            <DropdownItem> sample 6</DropdownItem>
            <DropdownItem> sample 7</DropdownItem>
            <DropdownItem> sample 8</DropdownItem>
            <DropdownItem> sample 9</DropdownItem>
            <DropdownItem> sample 10</DropdownItem>
            <DropdownItem> sample 11</DropdownItem>
            <DropdownItem> sample 12</DropdownItem>
            <DropdownItem> sample 13</DropdownItem>
            <DropdownItem> sample 14</DropdownItem>
            <DropdownItem> sample 15</DropdownItem>
            <DropdownItem> sample 16</DropdownItem>
            <DropdownItem> sample 17</DropdownItem>
            <DropdownItem> sample 18</DropdownItem>
            <DropdownItem> sample 19</DropdownItem>
            <DropdownItem> sample 20</DropdownItem>
            <DropdownItem> sample 21</DropdownItem>
            <DropdownItem> sample 22</DropdownItem>
            <DropdownItem> sample 23</DropdownItem>
            <DropdownItem> sample 24</DropdownItem>
          </DropdownMenu>
        </div>
        <div className="w-full pt-3">
          <Snipet code={DropdownMenuTallButtonExample} />
        </div>
      </section>
    </div>
  );
};

export default DropdownExample;
