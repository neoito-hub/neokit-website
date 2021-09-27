import React, { useState } from "react";
import ProgressIndicators from "../components/progressIndicator-example/progressIndicator";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";
import Buttons from "../components/button-example/buttons";

function ProgressIndicator() {
  const defaultIndicator = `
  import React, { useState } from "react";
  import ProgressIndicators from "@neoKit/progressIndicator";
  import Buttons from "../components/button-example/buttons";
  function DefaultIndicator() {
          const [selectedIndex, setSelectedIndex] = useState(3);
          const [values, setValues] = useState(["one", "two", "three", "four"]);
          const dotNextClicked = () => {
              if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);
          };
          const dotPrevClicked = () => {
              if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);
          };

return (
<div className='flex justify-between items-center'>
<span onClick={() => dotPrevClicked()}>
  <Buttons isDisabled={selectedIndex === 2}>
    Prev
  </Buttons>
</span>

<ProgressIndicators
selectedIndex={selectedIndex}
values={values}
onChange={(values) => setSelectedIndex(values)}
/>

<span onClick={() => dotNextClicked()}>
  <Buttons
    isDisabled={selectedIndex === values.length}
    
  >
    Next
  </Buttons>
</span>
</div>
);
}

  export default DefaultIndicator;
  `;

  const primaryIndicator = `
  import React, { useState } from "react";
  import ProgressIndicators from "@neoKit/progressIndicator";
  import Buttons from "../components/button-example/buttons";
  function PrimaryIndicator() {
          const [selectedIndex, setSelectedIndex] = useState(3);
          const [values, setValues] = useState(["one", "two", "three", "four"]);
          const dotNextClicked = () => {
              if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);
          };
          const dotPrevClicked = () => {
              if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);
          };

return (
<div className='flex justify-between items-center'>
<span onClick={() => dotPrevClicked()}>
  <Buttons isDisabled={selectedIndex === 2}>
    Prev
  </Buttons>
</span>

<ProgressIndicators
              selectedIndex={selectedIndex}
              values={values}
              appearance={"primary"}
              onChange={(values) => setSelectedIndex(values)}
            />

<span onClick={() => dotNextClicked()}>
  <Buttons
    isDisabled={selectedIndex === values.length}
    
  >
    Next
  </Buttons>
</span>
</div>
);
}

  export default PrimaryIndicator;
  `;

  const helpIndicator = `
            import React, { useState } from "react";
            import ProgressIndicators from "@neoKit/progressIndicator";
            import Buttons from "../components/button-example/buttons";
            function HelpIndicator() {
                    const [selectedIndex, setSelectedIndex] = useState(3);
                    const [values, setValues] = useState(["one", "two", "three", "four"]);
                    const dotNextClicked = () => {
                        if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);
                    };
                    const dotPrevClicked = () => {
                        if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);
                    };
          
          return (
          <div className='flex justify-between items-center'>
          <span onClick={() => dotPrevClicked()}>
            <Buttons isDisabled={selectedIndex === 2}>
              Prev
            </Buttons>
          </span>
          
          <ProgressIndicators
              selectedIndex={selectedIndex}
              values={values}
              appearance={"help"}
              onChange={(values) => setSelectedIndex(values)}
            />
          
          <span onClick={() => dotNextClicked()}>
            <Buttons
              isDisabled={selectedIndex === values.length}
              
            >
              Next
            </Buttons>
          </span>
          </div>
          );
          }
          
            export default HelpIndicator;
            `;

  const invertedIndicator = `
import React, { useState } from "react";
import ProgressIndicators from "@neoKit/progressIndicator";
import Buttons from "../components/button-example/buttons";
function InvertedProgressIndicator() {
        const [selectedIndex, setSelectedIndex] = useState(3);
        const [values, setValues] = useState(["one", "two", "three", "four"]);
        const dotNextClicked = () => {
            if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);
        };
        const dotPrevClicked = () => {
            if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);
        };

return (
<div className='flex justify-between items-center'>
<span onClick={() => dotPrevClicked()}>
<Buttons isDisabled={selectedIndex === 2}>
  Prev
</Buttons>
</span>

<ProgressIndicators
selectedIndex={selectedIndex}
values={values}
appearance={"inverted"}
onChange={(values) => setSelectedIndex(values)}
/>
<span onClick={() => dotNextClicked()}>
<Buttons
  isDisabled={selectedIndex === values.length}
  
>
  Next
</Buttons>
</span>
</div>
);
}

export default  InvertedProgressIndicator;

`;

  const smallIndicator = `
import React, { useState } from "react";
import ProgressIndicators from "@neoKit/progressIndicator";
import Buttons from "../components/button-example/buttons";
function SmallProgressIndicator() {
        const [selectedIndex, setSelectedIndex] = useState(3);
        const [values, setValues] = useState(["one", "two", "three", "four"]);
        const dotNextClicked = () => {
            if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);
        };
        const dotPrevClicked = () => {
            if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);
        };

return (
<div className='flex justify-between items-center'>
<span onClick={() => dotPrevClicked()}>
<Buttons isDisabled={selectedIndex === 2}>
  Prev
</Buttons>
</span>

<ProgressIndicators
selectedIndex={selectedIndex}
values={values}
size={"small"}
onChange={(values) => setSelectedIndex(values)}
/>

<span onClick={() => dotNextClicked()}>
<Buttons
  isDisabled={selectedIndex === values.length}
  
>
  Next
</Buttons>
</span>
</div>
);
}

export default  SmallProgressIndicator;
;
`;

  const defaultSizeIndicator = `
import React, { useState } from "react";
import ProgressIndicators from "@neoKit/progressIndicator";
import Buttons from "../components/button-example/buttons";
function DefaultProgressIndicator() {
        const [selectedIndex, setSelectedIndex] = useState(3);
        const [values, setValues] = useState(["one", "two", "three", "four"]);
        const dotNextClicked = () => {
            if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);
        };
        const dotPrevClicked = () => {
            if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);
        };

return (
<div className='flex justify-between items-center'>
<span onClick={() => dotPrevClicked()}>
<Buttons isDisabled={selectedIndex === 2}>
  Prev
</Buttons>
</span>

<ProgressIndicators
selectedIndex={selectedIndex}
values={values}
onChange={(values) => setSelectedIndex(values)}
/>

<span onClick={() => dotNextClicked()}>
<Buttons
  isDisabled={selectedIndex === values.length}
  
>
  Next
</Buttons>
</span>
</div>
);
}

export default  DefaultProgressIndicator;
;
`;

  const largeProgress = `
  import React, { useState } from "react";
  import ProgressIndicators from "@neoKit/progressIndicator";
  import Buttons from "../components/button-example/buttons";
  function LargeProgressIndicator() {
          const [selectedIndex, setSelectedIndex] = useState(3);
          const [values, setValues] = useState(["one", "two", "three", "four"]);
          const dotNextClicked = () => {
              if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);
          };
          const dotPrevClicked = () => {
              if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);
          };

return (
<div className='flex justify-between items-center'>
<span onClick={() => dotPrevClicked()}>
  <Buttons isDisabled={selectedIndex === 2}>
    Prev
  </Buttons>
</span>

<ProgressIndicators
selectedIndex={selectedIndex}
values={values}
size={"large"}
onChange={(values) => setSelectedIndex(values)}
/>

<span onClick={() => dotNextClicked()}>
  <Buttons
    isDisabled={selectedIndex === values.length}
    
  >
    Next
  </Buttons>
</span>
</div>
);
}

export default  LargeProgressIndicator;
;
`;

  const comfortableProgress = `
import React, { useState } from "react";
  import ProgressIndicators from "@neoKit/progressIndicator";
  import Buttons from "../components/button-example/buttons";
  function ComfortableProgressIndicator() {
          const [selectedIndex, setSelectedIndex] = useState(3);
          const [values, setValues] = useState(["one", "two", "three", "four"]);
          const dotNextClicked = () => {
              if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);
          };
          const dotPrevClicked = () => {
              if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);
          };

return (
<div className='flex justify-between items-center'>
<span onClick={() => dotPrevClicked()}>
  <Buttons isDisabled={selectedIndex === 2}>
    Prev
  </Buttons>
</span>

<ProgressIndicators
selectedIndex={selectedIndex}
values={values}
spacing="comfortable"
onChange={(values) => setSelectedIndex(values)}
/>

<span onClick={() => dotNextClicked()}>
  <Buttons
    isDisabled={selectedIndex === values.length}
    
  >
    Next
  </Buttons>
</span>
</div>
);
}

export default  ComfortableProgressIndicator;
;
`;

  const cozyProgress = `
import React, { useState } from "react";
  import ProgressIndicators from "@neoKit/progressIndicator";
  import Buttons from "../components/button-example/buttons";
  function CozyProgressIndicator() {
          const [selectedIndex, setSelectedIndex] = useState(3);
          const [values, setValues] = useState(["one", "two", "three", "four"]);
          const dotNextClicked = () => {
              if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);
          };
          const dotPrevClicked = () => {
              if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);
          };

return (
<div className='flex justify-between items-center'>
<span onClick={() => dotPrevClicked()}>
  <Buttons isDisabled={selectedIndex === 2}>
    Prev
  </Buttons>
</span>
<ProgressIndicators
              selectedIndex={selectedIndex}
              values={values}
              spacing='cozy'
              onChange={(values) => setSelectedIndex(values)}
            />

<span onClick={() => dotNextClicked()}>
  <Buttons
    isDisabled={selectedIndex === values.length}
    
  >
    Next
  </Buttons>
</span>
</div>
);
}

export default  CozyProgressIndicator;
`;

  const compactProgress = `
import React, { useState } from "react";
  import ProgressIndicators from "@neoKit/progressIndicator";
  import Buttons from "../components/button-example/buttons";
  function CompactProgressIndicator() {
          const [selectedIndex, setSelectedIndex] = useState(3);
          const [values, setValues] = useState(["one", "two", "three", "four"]);
          const dotNextClicked = () => {
              if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);
          };
          const dotPrevClicked = () => {
              if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);
          };

return (
<div className='flex justify-between items-center'>
<span onClick={() => dotPrevClicked()}>
  <Buttons isDisabled={selectedIndex === 2}>
    Prev
  </Buttons>
</span>
<ProgressIndicators
selectedIndex={selectedIndex}
values={values}
spacing='compact'
onChange={(values) => setSelectedIndex(values)}
/>

<span onClick={() => dotNextClicked()}>
  <Buttons
    isDisabled={selectedIndex === values.length}
    
  >
    Next
  </Buttons>
</span>
</div>
);
}

export default CompactProgressIndicator;
`;

  const interactionProgress = `
  import React, { useState } from "react";
    import ProgressIndicators from "@neoKit/progressIndicator";
    import Buttons from "../components/button-example/buttons";
    function InteractionProgressIndicator() {
            const [selectedIndex, setSelectedIndex] = useState(3);
            const [values, setValues] = useState(["one", "two", "three", "four"]);
            const dotNextClicked = () => {
                if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);
            };
            const dotPrevClicked = () => {
                if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);
            };

  return (
  <div className='flex justify-between items-center'>
  <span onClick={() => dotPrevClicked()}>
    <Buttons isDisabled={selectedIndex === 2}>
      Prev
    </Buttons>
  </span>
  <ProgressIndicators
    selectedIndex={selectedIndex}
    values={values}
    onChange={(values) => setSelectedIndex(values)}
  />

  <span onClick={() => dotNextClicked()}>
    <Buttons
      isDisabled={selectedIndex === values.length}
      
    >
      Next
    </Buttons>
  </span>
</div>
);
}

export default InteractionProgressIndicator;
  `;

  const [selectedIndex, setSelectedIndex] = useState(3);
  const [values, setValues] = useState(["one", "two", "three", "four"]);
  const dotNextClicked = () => {
    if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);
  };
  const dotPrevClicked = () => {
    if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);
  };

  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Progress indicator'
        description='A progress indicator shows the user where they are along the steps of a journey.'
      />

      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='Progress indicators in the default (N900) color.  '
        />
        <div className='py-2'>
          <div className='flex justify-between items-center'>
            <span onClick={() => dotPrevClicked()}>
              <Buttons isDisabled={selectedIndex === 1}> Prev </Buttons>
            </span>
            <ProgressIndicators
              selectedIndex={selectedIndex}
              values={values}
              onChange={(values) => setSelectedIndex(values)}
            />
            <span onClick={() => dotNextClicked()}>
              <Buttons isDisabled={selectedIndex === values.length}>
                Next
              </Buttons>
            </span>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={defaultIndicator} />
        </div>
      </section>

      {/* Primary */}
      <section>
        <PageData
          subTitle='Primary'
          subDescription='Progress indicators in the primary (B400) color.  '
        />
        <div className='py-2'>
          <div className='flex justify-between items-center'>
            <span onClick={() => dotPrevClicked()}>
              <Buttons isDisabled={selectedIndex === 2}> Prev </Buttons>
            </span>

            <ProgressIndicators
              selectedIndex={selectedIndex}
              values={values}
              appearance={"primary"}
              onChange={(values) => setSelectedIndex(values)}
            />

            <span onClick={() => dotNextClicked()}>
              <Buttons isDisabled={selectedIndex === values.length}>
                Next
              </Buttons>
            </span>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={primaryIndicator} />
        </div>
      </section>

      {/* Help*/}
      <section>
        <PageData
          subTitle='Help'
          subDescription='Progress indicators in the purple (P400) color are used indicate help, for use in user benefit modals. '
        />
        <div className='py-2'>
          <div className='flex justify-between items-center'>
            <span onClick={() => dotPrevClicked()}>
              <Buttons isDisabled={selectedIndex === 2}> Prev </Buttons>
            </span>

            {/* <ProgressIndicators value={5}   appearance={'primary'} onChange={(values)=>setButtonState(values)} valueCount={(count)=> setButtonCount(count)}/> */}
            <ProgressIndicators
              selectedIndex={selectedIndex}
              values={values}
              appearance={"help"}
              onChange={(values) => setSelectedIndex(values)}
            />

            <span onClick={() => dotNextClicked()}>
              <Buttons isDisabled={selectedIndex === values.length}>
                Next
              </Buttons>
            </span>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={helpIndicator} />
        </div>
      </section>

      {/* Inverted*/}
      <section>
        <PageData
          subTitle='Inverted'
          subDescription='Use an inverted progress indicator when high contrast against a darker background color is needed. '
        />
        <div className='py-2 px-2' style={{ backgroundColor: "#1b2638" }}>
          <div className='flex justify-between items-center'>
            <span onClick={() => dotPrevClicked()}>
              <Buttons isDisabled={selectedIndex === 2} appearance={"primary"}>
                {" "}
                Prev{" "}
              </Buttons>
            </span>
            <ProgressIndicators
              selectedIndex={selectedIndex}
              values={values}
              appearance={"inverted"}
              onChange={(values) => setSelectedIndex(values)}
            />

            <span onClick={() => dotNextClicked()}>
              <Buttons
                isDisabled={selectedIndex === values.length}
                appearance={"primary"}
              >
                Next
              </Buttons>
            </span>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={invertedIndicator} />
        </div>
      </section>

      <section>
        <h5 className='lg:text-lg md:text-base text-sm text-primary font-normal pb-3 pt-2'>
          Size
        </h5>

        <p>
          {" "}
          The size of progress indicators can be small, default (medium), or
          large depending on how subtle or prominent the indicator should be.{" "}
        </p>
        <PageData
          subTitle='Small'
          subDescription='Small sized progress indicators.'
        />
        <div className='py-2'>
          <div className='flex justify-between items-center'>
            <span onClick={() => dotPrevClicked()}>
              <Buttons isDisabled={selectedIndex === 2}> Prev </Buttons>
            </span>
            <ProgressIndicators
              selectedIndex={selectedIndex}
              values={values}
              size={"small"}
              onChange={(values) => setSelectedIndex(values)}
            />

            <span onClick={() => dotNextClicked()}>
              <Buttons isDisabled={selectedIndex === values.length}>
                Next
              </Buttons>
            </span>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={smallIndicator} />
        </div>
      </section>

      {/* Default */}
      <section>
        <PageData
          subTitle='Default (medium)'
          subDescription='Default sized progress indicators.'
        />
        <div className='py-2'>
          <div className='flex justify-between items-center'>
            <span onClick={() => dotPrevClicked()}>
              <Buttons isDisabled={selectedIndex === 2}> Prev </Buttons>
            </span>

            {/* <ProgressIndicators value={5}   appearance={'primary'} onChange={(values)=>setButtonState(values)} valueCount={(count)=> setButtonCount(count)}/> */}
            <ProgressIndicators
              selectedIndex={selectedIndex}
              values={values}
              onChange={(values) => setSelectedIndex(values)}
            />

            <span onClick={() => dotNextClicked()}>
              <Buttons isDisabled={selectedIndex === values.length}>
                Next
              </Buttons>
            </span>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={defaultSizeIndicator} />
        </div>
      </section>

      {/* large */}
      <section>
        <PageData
          subTitle='Large'
          subDescription='Large sized progress indicators.'
        />
        <div className='py-2'>
          <div className='flex justify-between items-center'>
            <span onClick={() => dotPrevClicked()}>
              <Buttons isDisabled={selectedIndex === 2}> Prev </Buttons>
            </span>

            {/* <ProgressIndicators value={5}   appearance={'primary'} onChange={(values)=>setButtonState(values)} valueCount={(count)=> setButtonCount(count)}/> */}
            <ProgressIndicators
              selectedIndex={selectedIndex}
              values={values}
              size={"large"}
              onChange={(values) => setSelectedIndex(values)}
            />

            <span onClick={() => dotNextClicked()}>
              <Buttons isDisabled={selectedIndex === values.length}>
                Next
              </Buttons>
            </span>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={largeProgress} />
        </div>
      </section>
      {/* Spacing */}
      <section>
        <h5 className='lg:text-lg md:text-base text-sm text-primary font-normal pb-3 pt-2'>
          Spacing
        </h5>

        <p>
          Spacing of the dots can be either comfortable, cozy, or compact
          depending on the availability of space on the page.
        </p>
        <PageData
          subTitle='Comfortable'
          subDescription='Progress indicators with the default comfortable spacing.'
        />
        <div className='py-2'>
          <div className='flex justify-between items-center'>
            <span onClick={() => dotPrevClicked()}>
              <Buttons isDisabled={selectedIndex === 2}> Prev </Buttons>
            </span>

            <ProgressIndicators
              selectedIndex={selectedIndex}
              values={values}
              spacing='comfortable'
              onChange={(values) => setSelectedIndex(values)}
            />

            <span onClick={() => dotNextClicked()}>
              <Buttons isDisabled={selectedIndex === values.length}>
                Next
              </Buttons>
            </span>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={comfortableProgress} />
        </div>
      </section>

      {/* Cozy */}
      <section>
        <PageData
          subTitle='Cozy'
          subDescription='Progress indicators with cozy spacing.'
        />
        <div className='py-2'>
          <div className='flex justify-between items-center'>
            <span onClick={() => dotPrevClicked()}>
              <Buttons isDisabled={selectedIndex === 2}> Prev </Buttons>
            </span>
            <ProgressIndicators
              selectedIndex={selectedIndex}
              values={values}
              spacing='cozy'
              onChange={(values) => setSelectedIndex(values)}
            />

            <span onClick={() => dotNextClicked()}>
              <Buttons isDisabled={selectedIndex === values.length}>
                Next
              </Buttons>
            </span>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={cozyProgress} />
        </div>
      </section>

      {/* Compact */}
      <section>
        <PageData
          subTitle='Compact'
          subDescription='Progress indicators with compact spacing.'
        />
        <div className='py-2'>
          <div className='flex justify-between items-center'>
            <span onClick={() => dotPrevClicked()}>
              <Buttons isDisabled={selectedIndex === 2}> Prev </Buttons>
            </span>

            {/* <ProgressIndicators value={5}   appearance={'primary'} onChange={(values)=>setButtonState(values)} valueCount={(count)=> setButtonCount(count)}/> */}
            <ProgressIndicators
              selectedIndex={selectedIndex}
              values={values}
              spacing='compact'
              onChange={(values) => setSelectedIndex(values)}
            />

            <span onClick={() => dotNextClicked()}>
              <Buttons isDisabled={selectedIndex === values.length}>
                Next
              </Buttons>
            </span>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={compactProgress} />
        </div>
      </section>

      {/* Interaction */}
      <section>
        <PageData
          subTitle='Interaction'
          subDescription='If interaction is enabled, the user is able to navigate to the selected step by selecting the corresponding dot indicator. Once the dots are in focus, navigation can be accomplished using the keyboard arrow keys.'
        />
        <div className='py-2'>
          <div className='flex justify-between items-center'>
            <span onClick={() => dotPrevClicked()}>
              <Buttons isDisabled={selectedIndex === 2}>Prev </Buttons>
            </span>

            {/* <ProgressIndicators value={5}   appearance={'primary'} onChange={(values)=>setButtonState(values)} valueCount={(count)=> setButtonCount(count)}/> */}
            <ProgressIndicators
              selectedIndex={selectedIndex}
              values={values}
              onChange={(values) => setSelectedIndex(values)}
            />

            <span onClick={() => dotNextClicked()}>
              <Buttons isDisabled={selectedIndex === values.length}>
                Next
              </Buttons>
            </span>
          </div>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={interactionProgress} />
        </div>
      </section>
    </div>
  );
}

export default ProgressIndicator;
