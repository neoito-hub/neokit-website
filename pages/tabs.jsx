import React from "react";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";
import TabItem from "../components/tabs-example/tab-item";
import Tabs from "../components/tabs-example/tabs";

const TabsExample = () => {
  const defaultTab = `  
    import React from 'react';
    import tabs{ TabList ,Tab } from '@neoKit/tabs';
    const TabExample = () => {
        return (
          
            <Tabs>
              <TabItem head='tab 1'>
                <div>
                  <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                    Tab 1
                  </h2>
                </div>
              </TabItem>
              <TabItem head='tab 2'>
                <div>
                  <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                    Tab 2
                  </h2>
                </div>
              </TabItem>
              <TabItem head='tab 3'>
                <div>
                  <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                    Tab 3
                  </h2>
                </div>
              </TabItem>
            </Tabs>
         
        );
      };
      
      export default TabExample;`;

  const fadeInTab = `  
      import React from 'react';
      import tabs{ TabList ,Tab } from '@neoKit/tabs';
      const FadeInTabExample = () => {
          return (
            
              <Tabs appearance='fade-in-down'>
                <TabItem head='tab 1'>
                  <div>
                    <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                      Tab 1
                    </h2>
                  </div>
                </TabItem>
                <TabItem head='tab 2'>
                  <div>
                    <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                      Tab 2
                    </h2>
                  </div>
                </TabItem>
                <TabItem head='tab 3'>
                  <div>
                    <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                      Tab 3
                    </h2>
                  </div>
                </TabItem>
              </Tabs>
           
          );
        };
        
        export default FadeInTabExample;`;
  const fadedownTab = `  
        import React from 'react';
        import tabs{ TabList ,Tab } from '@neoKit/tabs';
        const FadeDownTabExample = () => {
            return (
              
              <Tabs appearance='fade-out-down'>
                  <TabItem head='tab 1'>
                    <div>
                      <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                        Tab 1
                      </h2>
                    </div>
                  </TabItem>
                  <TabItem head='tab 2'>
                    <div>
                      <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                        Tab 2
                      </h2>
                    </div>
                  </TabItem>
                  <TabItem head='tab 3'>
                    <div>
                      <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                        Tab 3
                      </h2>
                    </div>
                  </TabItem>
                </Tabs>
             
            );
          };
          
          export default FadeDownTabExample;`;
  const fadeInUpTab = `  
          import React from 'react';
          import tabs{ TabList ,Tab } from '@neoKit/tabs';
          const FadeInUpTabExample = () => {
              return (
                
                <Tabs appearance='fade-in-up'>
                    <TabItem head='tab 1'>
                      <div>
                        <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                          Tab 1
                        </h2>
                      </div>
                    </TabItem>
                    <TabItem head='tab 2'>
                      <div>
                        <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                          Tab 2
                        </h2>
                      </div>
                    </TabItem>
                    <TabItem head='tab 3'>
                      <div>
                        <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                          Tab 3
                        </h2>
                      </div>
                    </TabItem>
                  </Tabs>
               
              );
            };
            
            export default FadeInUpTabExample;`;

  const tabFadeOutUp = `  
          import React from 'react';
          import tabs{ TabList ,Tab } from '@neoKit/tabs';
          const FadeOutUpTabExample = () => {
              return (
                
                <Tabs appearance='fade-out-up'>
                    <TabItem head='tab 1'>
                      <div>
                        <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                          Tab 1
                        </h2>
                      </div>
                    </TabItem>
                    <TabItem head='tab 2'>
                      <div>
                        <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                          Tab 2
                        </h2>
                      </div>
                    </TabItem>
                    <TabItem head='tab 3'>
                      <div>
                        <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                          Tab 3
                        </h2>
                      </div>
                    </TabItem>
                  </Tabs>
               
              );
            };
            
            export default FadeOutUpTabExample;`;
  const tooltipTab = `import React from 'react';
import tabs{ TabList ,Tab } from '@neoKit/tabs';
const TooltipTabExample = () => {
    return (
      
        <Tabs>
          <TabItem head='tab 1' tooltip='Tooltip for tab 1'>
            <div>
              <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                Tab 1
              </h2>
            </div>
          </TabItem>
          <TabItem head='tab 2' tooltip='Tooltip for tab 2'>
            <div>
              <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                Tab 2
              </h2>
            </div>
          </TabItem>
          <TabItem head='tab 3' tooltip='Tooltip for tab 2'>
            <div>
              <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                Tab 3
              </h2>
            </div>
          </TabItem>
        </Tabs>
      </Tabs>
    );
  };
  
  export default TooltipTabExample;`;

  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Tabs'
        description='Tabs are used to organize content by grouping similar information on the same page.'
      />

      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='The default form of tabs.'
        />
        <div className='py-2'>
          <Tabs>
            <TabItem head='tab 1'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 1
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>
            </TabItem>
            <TabItem head='tab 2'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 2
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>
            </TabItem>
            <TabItem head='tab 3'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 3
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>{" "}
            </TabItem>
          </Tabs>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={defaultTab} />
        </div>
      </section>

      {/*Appearance fade-in-down */}
      <section>
        <PageData subHead='Appearance' />
        <PageData
          subTitle='fade-in-down'
          subDescription='fade-in-down Animation'
        />
        <div className='py-2'>
          {/* <Tabs></Tabs> */}

          <Tabs appearance='fade-in-down'>
            <TabItem head='tab 1'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 1
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>
            </TabItem>
            <TabItem head='tab 2'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 2
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>
            </TabItem>
            <TabItem head='tab 3'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 3
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>{" "}
            </TabItem>
          </Tabs>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={fadeInTab} />
        </div>
      </section>

      {/* fade-out-down */}
      <section>
        <PageData
          subTitle='fade-out-down'
          subDescription='fade-out-down Animation'
        />
        <div className='py-2'>
          {/* <Tabs></Tabs> */}

          <Tabs appearance='fade-out-down'>
            <TabItem head='tab 1'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 1
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>
            </TabItem>
            <TabItem head='tab 2'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 2
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>
            </TabItem>
            <TabItem head='tab 3'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 3
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>{" "}
            </TabItem>
          </Tabs>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={fadedownTab} />
        </div>
      </section>
      {/* fade-in-up */}
      <section>
        <PageData subTitle='fade-in-up' subDescription='fade-in-up Animation' />
        <div className='py-2'>
          {/* <Tabs></Tabs> */}

          <Tabs appearance='fade-in-up'>
            <TabItem head='tab 1'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 1
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>
            </TabItem>
            <TabItem head='tab 2'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 2
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>
            </TabItem>
            <TabItem head='tab 3'>
              /{" "}
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 3
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>{" "}
            </TabItem>
          </Tabs>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={fadeInUpTab} />
        </div>
      </section>
      {/* fade-out-up */}
      <section>
        <PageData
          subTitle='fade-out-up'
          subDescription='fade-out-up Animation'
        />
        <div className='py-2'>
          {/* <Tabs></Tabs> */}

          <Tabs appearance='fade-out-up'>
            <TabItem head='tab 1'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 1
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>
            </TabItem>
            <TabItem head='tab 2'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 2
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>
            </TabItem>
            <TabItem head='tab 3'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 3
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>{" "}
            </TabItem>
          </Tabs>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={tabFadeOutUp} />
        </div>
      </section>
      {/* Tooltip */}
      <section>
        <PageData
          subTitle='Tabs with Tooltip'
          subDescription='In this example we have added a tooltip to each tab.'
        />
        <div className='py-2'>
          {/* <Tabs></Tabs> */}

          <Tabs appearance='fade-out-up'>
            <TabItem head='tab 1' tooltip='Tooltip for tab 1'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 1
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>
            </TabItem>
            <TabItem head='tab 2' tooltip='Tooltip for tab 2'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 2
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>
            </TabItem>
            <TabItem head='tab 3' tooltip='Tooltip for tab 3'>
              <div>
                <h2 className='font-bold text-lg border-b border-blue-500 p2-3 mb-2'>
                  {" "}
                  Tab 3
                </h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                dolore asperiores fugiat, optio, veritatis pariatur sapiente
                nesciunt consequatur, libero aspernatur ipsa assumenda ducimus.
                Illum esse aliquam iste nobis repudiandae facere.
              </div>{" "}
            </TabItem>
          </Tabs>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={tooltipTab} />
        </div>
      </section>
    </div>
  );
};

export default TabsExample;
