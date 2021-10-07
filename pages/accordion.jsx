import React from 'react'
import Accordion from '../components/accordion-example/accordion'
import AccordionHeadding from '../components/accordion-example/accordion-headding'
import AccordionItem from '../components/accordion-example/accordion-item'
import AccordionPannel from '../components/accordion-example/accordion-pannel'
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";

const AccordionExample = () => {
    const accordionDefualt=`
    import React from 'react';
    import Accordion from '@neoKit/accordion';
    
    const AccordionExample = () => {
      return(
        <Accordion>
        <AccordionItem>
           <AccordionHeadding>
               sample data 1
           </AccordionHeadding>
           <AccordionPannel>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
           </AccordionPannel>
        </AccordionItem>
        <AccordionItem>
           <AccordionHeadding>
               sample data 2
           </AccordionHeadding>
           <AccordionPannel>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
           </AccordionPannel>
        </AccordionItem>   
        <AccordionItem>
           <AccordionHeadding>
               sample data 3
           </AccordionHeadding>
           <AccordionPannel>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
           </AccordionPannel>
        </AccordionItem>    
    </Accordion>
      ) 
      
    };
    
    export default AccordionExample;
    `

    const AccordionOpenAllExample=`
    import React from 'react';
    import Accordion from '@neoKit/accordion';
    
    const AccordionOpenAllExample = () => {
      return(
        <Accordion isOpen>
        <AccordionItem>
           <AccordionHeadding>
               sample data 1
           </AccordionHeadding>
           <AccordionPannel>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
           </AccordionPannel>
        </AccordionItem>
        <AccordionItem>
           <AccordionHeadding>
               sample data 2
           </AccordionHeadding>
           <AccordionPannel>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
           </AccordionPannel>
        </AccordionItem>   
        <AccordionItem>
           <AccordionHeadding>
               sample data 3
           </AccordionHeadding>
           <AccordionPannel>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
           </AccordionPannel>
        </AccordionItem>    
    </Accordion>
      ) 
      
    };
    
    export default AccordionOpenAllExample;
    `
    const AccordionDisabledExample=`
    import React from 'react';
    import Accordion from '@neoKit/accordion';
    
    const  AccordionDisabledExample = () => {
      return(
        <Accordion isOpen>
        <AccordionItem>
           <AccordionHeadding>
               sample data 1
           </AccordionHeadding>
           <AccordionPannel>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
           </AccordionPannel>
        </AccordionItem>
        <AccordionItem isDisabled>
           <AccordionHeadding>
               sample data 2
           </AccordionHeadding>
           <AccordionPannel>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
           </AccordionPannel>
        </AccordionItem>   
        <AccordionItem>
           <AccordionHeadding>
               sample data 3
           </AccordionHeadding>
           <AccordionPannel>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
           </AccordionPannel>
        </AccordionItem>    
    </Accordion>
      ) 
      
    };
    
    export default AccordionDisabledExample;
    `


  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Accordion'
        description='Accordion is a vertically collapsing element to show and hide content via class changes.'
      />

      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='The default accordion view.'
        />
        <div className="py-2">
        <Accordion>
                <AccordionItem>
                   <AccordionHeadding>
                       sample data 1
                   </AccordionHeadding>
                   <AccordionPannel>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
                   </AccordionPannel>
                </AccordionItem>
                <AccordionItem>
                   <AccordionHeadding>
                       sample data 2
                   </AccordionHeadding>
                   <AccordionPannel>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
                   </AccordionPannel>
                </AccordionItem>   
                <AccordionItem>
                   <AccordionHeadding>
                       sample data 3
                   </AccordionHeadding>
                   <AccordionPannel>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
                   </AccordionPannel>
                </AccordionItem>    
            </Accordion>
       </div>
        <div className='w-full pt-3'>
          <Snipet code={accordionDefualt} />
        </div>
      </section>

       {/* Open All */}
       <section>
        <PageData
          subTitle='Open All'
          subDescription='initiall all fields are opened'
        />
        <div className="py-2">
        <Accordion isOpen>
                <AccordionItem>
                   <AccordionHeadding>
                       sample data 1
                   </AccordionHeadding>
                   <AccordionPannel>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
                   </AccordionPannel>
                </AccordionItem>
                <AccordionItem>
                   <AccordionHeadding>
                       sample data 2
                   </AccordionHeadding>
                   <AccordionPannel>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
                   </AccordionPannel>
                </AccordionItem>   
                <AccordionItem >
                   <AccordionHeadding>
                       sample data 3
                   </AccordionHeadding>
                   <AccordionPannel>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
                   </AccordionPannel>
                </AccordionItem>    
            </Accordion>
       </div>
        <div className='w-full pt-3'>
          <Snipet code={AccordionOpenAllExample} />
        </div>
      </section>

       {/* disabled */}
       <section>
        <PageData
          subTitle='Disabled'
          subDescription='The user can disable the specific field'
        />
        <div className="py-2">
        <Accordion>
                <AccordionItem>
                   <AccordionHeadding>
                       sample data 1
                   </AccordionHeadding>
                   <AccordionPannel>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
                   </AccordionPannel>
                </AccordionItem>
                <AccordionItem isDisabled>
                   <AccordionHeadding>
                       sample data 2
                   </AccordionHeadding>
                   <AccordionPannel>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
                   </AccordionPannel>
                </AccordionItem>   
                <AccordionItem>
                   <AccordionHeadding>
                       sample data 3
                   </AccordionHeadding>
                   <AccordionPannel>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, vitae, rem corrupti consectetur nisi explicabo cumque fugit asperiores consequatur praesentium, at atque repellendus tempora laudantium odit doloribus dolore earum veniam.
                   </AccordionPannel>
                </AccordionItem>    
            </Accordion>
       </div>
        <div className='w-full pt-3'>
          <Snipet code={AccordionDisabledExample} />
        </div>
      </section>
        </div>
    )
}

export default AccordionExample
