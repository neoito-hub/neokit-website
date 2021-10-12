import React from "react";
import Cards from "../components/cards/cards";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";

const CardsExample = () => {
  // default
  const CardsExample = `
  import React from 'react';
  import Card from '@neoKit/cards';
  const CardsExample = () => {
    return (
        <Cards
          src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Flower and sky"
        ></Cards> 
    )
  };
  export default CardsExample;`;

  const CardWithTextExample = `
  import React from 'react';
  import Card from '@neoKit/cards';
  const CardWithTextExample = () => {
    return (
        <Cards
        text="This is the title"
        title="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
      ></Cards>
    )
  };
  export default CardWithTextExample;`;

  const CardWithTextAndImageExample = `
  import React from 'react';
  import Card from '@neoKit/cards';
  const CardWithTextAndImageExample = () => {
    return (
        <Cards
          src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Flower and sky"
          text="This is the title"
          title="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
        ></Cards>
    )
  };
  export default CardWithTextAndImageExample;`;

  const HorizontalExample = `
  import React from 'react';
  import Card from '@neoKit/cards';
  const HorizontalExample = () => {
    return (
        <Cards
        src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Flower and sky"
        text="This is the title"
        title="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
        appearance="horizontal"
        ></Cards>
    )
  };
  export default HorizontalExample;`;

  const OverlayCardButton = `
  import React from 'react';
  import Card from '@neoKit/cards';
  const OverlayCardButton = () => {
    return (
        <Cards
          src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Flower and sky"
          alt="Flower and sky"
          text="This is the title"
          title="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
          appearance="overlay"
        ></Cards>
  };
  export default OverlayCardButton;`;
  return (
    <div className="flex flex-col  w-full flex-start">
      <PageData
        title="Cards"
        description="A button triggers an event or action. They let users know what will happen next."
      />

      {/* Card with image */}
      <section>
        <PageData
          subTitle="Card with image"
          subDescription="Card with just an image.

          "
        />
        <Cards
          src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Flower and sky"
        ></Cards>
        <div className="w-full pt-3">
          <Snipet code={CardsExample} />
        </div>
      </section>

      {/* Card with text */}
      <section>
        <PageData
          subTitle="Card with text"
          subDescription="Card with just text."
        />
        <Cards
          text="This is the title"
          title="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
        ></Cards>
        <div className="w-full pt-3">
          <Snipet code={CardWithTextExample} />
        </div>
      </section>

      {/* Card with image and text */}
      <section>
        <PageData
          subTitle="Card with image and text"
          subDescription="Card with just text."
        />
        <Cards
          src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Flower and sky"
          text="This is the title"
          title="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
        ></Cards>
        <div className="w-full pt-3">
          <Snipet code={CardWithTextAndImageExample} />
        </div>
      </section>
      {/* Card horizontal */}
      <section>
        <PageData
          subTitle="Card horizontal"
          subDescription="Card with top image and text side-by-side"
        />
        <Cards
          src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Flower and sky"
          text="This is the title"
          title="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
          appearance="horizontal"
        ></Cards>
        <div className="w-full pt-3">
          <Snipet code={HorizontalExample} />
        </div>
      </section>

      {/* Card image with text over */}
      <section>
        <PageData
          subTitle="Card image with text over"
          subDescription="Card with backrgound image and text"
        />
        <Cards
          src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Flower and sky"
          alt="Flower and sky"
          text="This is the title"
          title="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
          appearance="overlay"
        ></Cards>
        <div className="w-full pt-3">
          <Snipet code={OverlayCardButton} />
        </div>
      </section>
    </div>
  );
};

export default CardsExample;
