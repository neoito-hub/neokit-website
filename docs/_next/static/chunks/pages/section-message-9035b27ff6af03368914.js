_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"0sP3":function(e,t,n){"use strict";n.r(t);var s=n("nKUr"),c=n("q1tI"),i=n("Ff2n"),a=function(e){var t=e.title,n=e.appearance,c=e.actions,a=e.children;Object(i.a)(e,["title","appearance","actions","children"]);return console.log(c),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"flex w-full mx-auto overflow-hidden rounded  my-5 p-5 items-start"+("warning"===(null===n||void 0===n?void 0:n.trim())?" bg-yellow-100 ":"error"===(null===n||void 0===n?void 0:n.trim())?" bg-red-100 ":"discovery"===(null===n||void 0===n?void 0:n.trim())?" bg-purple-200 ":" bg-blue-100 "),children:[Object(s.jsx)("div",{className:"flex items-start justify-center w-6 pt-0.5",children:"success"===(null===n||void 0===n?void 0:n.trim())?Object(s.jsx)("img",{src:"assets/tick-circle.svg",className:"h-full w-full max-w-max mt-0.5",style:{width:"23px",height:"23px"}}):"warning"===(null===n||void 0===n?void 0:n.trim())?Object(s.jsx)("img",{src:"assets/warning.svg",alt:"warning",className:"h-full w-full max-w-max mt-0.5",style:{width:"25px",height:"25px"}}):"error"===(null===n||void 0===n?void 0:n.trim())?Object(s.jsx)("img",{src:"assets/diamond-warning.svg",alt:"discover",className:"h-full w-full max-w-max mt-0.5",style:{width:"23px",height:"23px"}}):"discovery"===(null===n||void 0===n?void 0:n.trim())?Object(s.jsx)("img",{src:"assets/question.svg",alt:"default",className:"h-full w-full max-w-max mt-0.5",style:{width:"23px",height:"23px"}}):Object(s.jsx)("img",{src:"assets/section-default.svg",alt:"default",className:"h-full w-full max-w-max",style:{width:"25px",height:"25px"}})}),Object(s.jsxs)("div",{className:"mx-3 pt-0.5",children:[Object(s.jsx)("span",{className:"font-semibold  dark:text-blue-400 text-gray-800 text-lg",children:t}),Object(s.jsx)("p",{className:"text-sm text-gray-900 tracking-wider font-normal  leading-6",children:a}),Object(s.jsx)("div",{className:"flex items-center justify-start gap-3 flex-wrap",children:Array.isArray(c)?null===c||void 0===c?void 0:c.map((function(e){return e})):c})]})]})})},o=n("rePB");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=e.href,n=e.target,a=e.children,o=Object(i.a)(e,["href","target","children"]);return Object(s.jsx)(c.Fragment,{children:Object(s.jsx)("a",{href:t||"javascript:void(0)",target:n&&t?"_blank":"",children:Object(s.jsx)("button",l(l({class:"text-blue-800 background-transparent font-bold capitalize py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:underline",type:"button"},o),{},{children:a}))})})},d=n("MvPf"),p=n("Qe+f");t.default=function(){return Object(s.jsxs)("div",{className:"flex flex-col  w-full flex-start",children:[Object(s.jsx)(d.a,{title:"Section message",description:"A section message is used to alert users to a particular section of the screen."}),Object(s.jsxs)("section",{children:[Object(s.jsx)(d.a,{subHead:"Appearance",subDescription:"By default, all section message come with an icon and an area for content. A title and actions can also be added."}),Object(s.jsx)(d.a,{subTitle:"Information",subDescription:"The information section message is the default appearance used to signify a change in state or important information."}),Object(s.jsx)("div",{className:"py-2",children:Object(s.jsx)(a,{title:"Editing is restricted",actions:[Object(s.jsx)(u,{onClick:function(){},children:"Action 1"}),Object(s.jsx)(u,{href:"m.youtube.com",children:"Action 2"})],children:Object(s.jsx)("p",{children:"You're not allowed to change these restrictions. It's either due to the restrictions on the page, or permission settings for this space."})})}),Object(s.jsx)("div",{className:"w-full pt-3 ",children:Object(s.jsx)(p.a,{code:"\n    import React from 'react';\n    import SectionMessage, { SectionMessageAction } from '@neoKit/section-message';\n    \n      const DefaultSectionMessageExample = () => {\n     \n      \n        return (\n            <SectionMessage\n            title='Editing is restricted'\n            actions={[\n              <SectionMessageAction  onClick={()=>{}}>Action 1</SectionMessageAction>,\n              <SectionMessageAction href='m.youtube.com'>Action 2</SectionMessageAction>\n            ]}\n          >\n            <p>\n              You're not allowed to change these restrictions. It's either due\n              to the restrictions on the page, or permission settings for this\n              space.\n            </p>\n          </SectionMessage>\n        );\n      };\n      export default DefaultSectionMessageExample;\n    \n"})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(d.a,{subTitle:"Success",subDescription:"Use a success section message to let the user know that an action or event has happened successfully. Not a common use case for section messages."}),Object(s.jsx)("div",{className:"py-2",children:Object(s.jsx)(a,{title:"",appearance:"success",children:Object(s.jsx)("p",{children:"File has been uploaded."})})}),Object(s.jsx)("div",{className:"w-full pt-3 ",children:Object(s.jsx)(p.a,{code:"\nimport React from 'react';\nimport SectionMessage, { SectionMessageAction } from '@neoKit/section-message';\n\n  const SuccessSectionMessageExample = () => {\n    return (\n        <SectionMessage\n        title=''\n        appearance=\"success\"\n      >\n        <p>\n        File has been uploaded.\n        </p>\n      </SectionMessage>\n    );\n  };\n  export default SuccessSectionMessageExample;\n  "})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(d.a,{subTitle:"Warning",subDescription:"Use a warning section message to help users:"}),Object(s.jsx)("div",{children:Object(s.jsxs)("ul",{className:"list-disc pl-10 font-normal lg:text-sm text-xs tracking-wide text-secondary py-2 pb-0 text-left",children:[Object(s.jsx)("li",{children:"avoid errors"}),Object(s.jsx)("li",{children:"manage authentication issues"}),Object(s.jsx)("li",{children:"take the actions needed to avoid potentially dangerous actions"}),Object(s.jsx)("li",{children:"feel certain they're making the decision, for example, in confirmation modals"})]})}),Object(s.jsx)(d.a,{subDescription:" These are the most common use cases for section messages."}),Object(s.jsx)("div",{className:"py-2 pt-0",children:Object(s.jsx)(a,{title:"Cannot connect to the database",appearance:"warning",children:Object(s.jsx)("p",{children:"We are unable to save any progress at this time."})})}),Object(s.jsx)("div",{className:"w-full pt-3 ",children:Object(s.jsx)(p.a,{code:"\n  import React from 'react';\n  import SectionMessage, { SectionMessageAction } from '@neoKit/section-message';\n  \n    const  WarningSectionMessageExample = () => {\n      return (\n        <SectionMessage\n        title='Cannot connect to the database'\n        appearance='warning'\n      >\n        <p>We are unable to save any progress at this time.</p>\n      </SectionMessage>\n      );\n    };\n    export default  WarningSectionMessageExample;\n    "})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(d.a,{subTitle:"Error",subDescription:"Use an error section message to let the user know when:"}),Object(s.jsx)("div",{children:Object(s.jsxs)("ul",{className:"list-disc pl-10 font-normal lg:text-sm text-xs tracking-wide text-secondary py-2 pb-0 text-left",children:[Object(s.jsx)("li",{children:"something destructive or critical has happened"}),Object(s.jsx)("li",{children:"access has been denied"}),Object(s.jsx)("li",{children:"there are connectivity issues"})]})}),Object(s.jsx)(d.a,{subDescription:" Not a common use case for section messages."}),Object(s.jsx)("div",{className:"py-2 pt-0",children:Object(s.jsx)(a,{title:"This account will be permanently deleted",appearance:"error",children:Object(s.jsx)("p",{children:"The user `user15` no longer has access to Atlassian services."})})}),Object(s.jsx)("div",{className:"w-full pt-3 ",children:Object(s.jsx)(p.a,{code:"\n    import React from 'react';\n    import SectionMessage, { SectionMessageAction } from '@neoKit/section-message';\n    \n      const  ErrorSectionMessageExample = () => {\n        return (\n            <SectionMessage\n            title='This account will be permanently deleted'\n            appearance='error'\n          >\n            <p>The user 'user15' no longer has access to Atlassian services.</p>\n          </SectionMessage>\n        );\n      };\n      export default  ErrorSectionMessageExample;\n      "})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(d.a,{subTitle:"Discovery",subDescription:"Use a discovery section message to signify an update to the UI or provide information around new features and onboarding."}),Object(s.jsx)("div",{className:"py-2",children:Object(s.jsx)(a,{title:"Your managed accounts now include Trello access",appearance:"discovery",actions:Object(s.jsx)(u,{href:"#",children:"Learn more"}),children:Object(s.jsx)("p",{children:"Your managed accounts now include Trello access Some users haven't started using their Atlassian account for Trello. Changes you make to an account are reflected only if the user starts using the account for Trello."})})}),Object(s.jsx)("div",{className:"w-full pt-3 ",children:Object(s.jsx)(p.a,{code:"\n    import React from 'react';\n    import SectionMessage, { SectionMessageAction } from '@neoKit/section-message';\n    \n      const  DiscoverSectionMessageExample = () => {\n        return (\n            <SectionMessage\n            title='Your managed accounts now include Trello access'\n            appearance='discovery'\n            actions={<SectionMessageAction href=\"#\">Learn more</SectionMessageAction>}\n          >\n            <p>\n              Your managed accounts now include Trello access Some users haven't\n              started using their Atlassian account for Trello. Changes you make\n              to an account are reflected only if the user starts using the\n              account for Trello.\n            </p>\n          </SectionMessage>\n        );\n      };\n      export default  DiscoverSectionMessageExample;\n      "})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(d.a,{subTitle:"Actions",subDescription:"Use the actions prop to let users act on the content in the section message. The SectionMessageAction component is designed to work with the actions prop. In most cases you should use the section message action, but you can also use any JSX element in the actions array. An action will render a button if you supply an onClick handler, or a link if you supply an href. You can override the default link component using the linkComponent prop; this works well with router libraries."}),Object(s.jsx)("div",{className:"py-2",children:Object(s.jsx)(a,{title:"Merged pull request",appearance:"success",actions:[Object(s.jsx)(u,{href:"#",children:"View commit"}),Object(s.jsx)(u,{onClick:function(){},children:"Dismiss"})],children:Object(s.jsx)("p",{children:"Pull request #10146 merged after a successful build"})})}),Object(s.jsx)("div",{className:"w-full pt-3 ",children:Object(s.jsx)(p.a,{code:"\n      import React from 'react';\n      import SectionMessage, { SectionMessageAction } from '@neoKit/section-message';\n      \n        const  ActionSectionMessageExample = () => {\n          return (\n            <SectionMessage\n            title='Merged pull request'\n            appearance='success'\n            actions={[\n              <SectionMessageAction href='#'>View commit</SectionMessageAction>,\n              <SectionMessageAction onClick={() => {}}>\n                Dismiss\n              </SectionMessageAction>\n            ]}\n          >\n            <p>Pull request #10146 merged after a successful build</p>\n          </SectionMessage>\n          );\n        };\n        export default  ActionSectionMessageExample;\n        "})})]})]})}},Ff2n:function(e,t,n){"use strict";function s(e,t){if(null==e)return{};var n,s,c=function(e,t){if(null==e)return{};var n,s,c={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}n.d(t,"a",(function(){return s}))},rePB:function(e,t,n){"use strict";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return s}))},wkIX:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/section-message",function(){return n("0sP3")}])}},[["wkIX",0,1,2,3]]]);