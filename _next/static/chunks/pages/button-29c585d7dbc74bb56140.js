_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{Kfdc:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/button",function(){return n("vt2x")}])},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var o=n("J4zp"),r=n("284h");e.__esModule=!0,e.default=void 0;var a=r(n("q1tI")),i=n("elyg"),s=n("nOHt"),c=n("vNVm"),l={};function u(t,e,n,o){if(t&&(0,i.isLocalURL)(e)){t.prefetch(e,n,o).catch((function(t){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:t&&t.locale;l[e+"%"+n+(r?"%"+r:"")]=!0}}var p=function(t){var e=!1!==t.prefetch,n=(0,s.useRouter)(),r=n&&n.pathname||"/",p=a.default.useMemo((function(){var e=(0,i.resolveHref)(r,t.href,!0),n=o(e,2),a=n[0],s=n[1];return{href:a,as:t.as?(0,i.resolveHref)(r,t.as):s||a}}),[r,t.href,t.as]),b=p.href,d=p.as,f=t.children,m=t.replace,j=t.shallow,x=t.scroll,h=t.locale;"string"===typeof f&&(f=a.default.createElement("a",null,f));var g=a.Children.only(f),O=g&&"object"===typeof g&&g.ref,y=(0,c.useIntersection)({rootMargin:"200px"}),v=o(y,2),w=v[0],B=v[1],D=a.default.useCallback((function(t){w(t),O&&("function"===typeof O?O(t):"object"===typeof O&&(O.current=t))}),[O,w]);(0,a.useEffect)((function(){var t=B&&e&&(0,i.isLocalURL)(b),o="undefined"!==typeof h?h:n&&n.locale,r=l[b+"%"+d+(o?"%"+o:"")];t&&!r&&u(n,b,d,{locale:o})}),[d,b,B,h,e,n]);var k={ref:D,onClick:function(t){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(t),t.defaultPrevented||function(t,e,n,o,r,a,s,c){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,i.isLocalURL)(n))&&(t.preventDefault(),null==s&&(s=o.indexOf("#")<0),e[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:s}))}(t,n,b,d,m,j,x,h)},onMouseEnter:function(t){(0,i.isLocalURL)(b)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(t),u(n,b,d,{priority:!0}))}};if(t.passHref||"a"===g.type&&!("href"in g.props)){var E="undefined"!==typeof h?h:n&&n.locale,N=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(d,E,n&&n.locales,n&&n.domainLocales);k.href=N||(0,i.addBasePath)((0,i.addLocale)(d,E,n&&n.defaultLocale))}return a.default.cloneElement(g,k)};e.default=p},rePB:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}))},vNVm:function(t,e,n){"use strict";var o=n("J4zp");e.__esModule=!0,e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!i,c=(0,r.useRef)(),l=(0,r.useState)(!1),u=o(l,2),p=u[0],b=u[1],d=(0,r.useCallback)((function(t){c.current&&(c.current(),c.current=void 0),n||p||t&&t.tagName&&(c.current=function(t,e,n){var o=function(t){var e=t.rootMargin||"",n=s.get(e);if(n)return n;var o=new Map,r=new IntersectionObserver((function(t){t.forEach((function(t){var e=o.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return s.set(e,n={id:e,observer:r,elements:o}),n}(n),r=o.id,a=o.observer,i=o.elements;return i.set(t,e),a.observe(t),function(){i.delete(t),a.unobserve(t),0===i.size&&(a.disconnect(),s.delete(r))}}(t,(function(t){return t&&b(t)}),{rootMargin:e}))}),[n,e,p]);return(0,r.useEffect)((function(){if(!i&&!p){var t=(0,a.requestIdleCallback)((function(){return b(!0)}));return function(){return(0,a.cancelIdleCallback)(t)}}}),[p]),[d,p]};var r=n("q1tI"),a=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var s=new Map},vt2x:function(t,e,n){"use strict";n.r(e);var o=n("nKUr"),r=(n("q1tI"),n("yRpu")),a=n("MvPf"),i=n("Qe+f");e.default=function(){var t="\n    import React from 'react';\n    import Buttons from '@neoKit/button';\n    const  ButtonLoadingExample = () => {\n      return <Buttons  appearance=\"primary\" isLoading>\n      Loading button</Buttons>;\n    export default  ButtonLoadingExample;";return Object(o.jsxs)("div",{className:"flex flex-col  w-full flex-start",children:[Object(o.jsx)(a.a,{title:"Button",description:"A button triggers an event or action. They let users know what will happen next."}),Object(o.jsxs)("section",{children:[Object(o.jsx)(a.a,{subTitle:"Default",subDescription:"The default form of a button, used for most cases. They are not impactful enough to represent the primary action in a container."}),Object(o.jsx)(r.a,{children:" Default button"}),Object(o.jsx)("div",{className:"w-full pt-3",children:Object(o.jsx)(i.a,{code:"\n    import React from 'react';\n    import Buttons from '@neoKit/button';\n    const ButtonDefaultExample = () => {\n      return <Buttons>Default button</Buttons>;\n    };\n    export default ButtonDefaultExample;"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)(a.a,{subTitle:"Primary",subDescription:"Use a primary button to call attention to an action on a form or to highlight the strongest call to action on a page. Primary buttons should only appear once per container (not including the application header or in a modal dialog). Not every screen requires a primary button."}),Object(o.jsx)(r.a,{appearance:"primary",children:" Primary button"}),Object(o.jsx)("div",{className:"w-full pt-3",children:Object(o.jsx)(i.a,{code:"\n    import React from 'react';\n    import Buttons from '@neoKit/button';\n    const  ButtonPrimaryExample = () => {\n      return <Buttons appearance=\"primary\">Primary button</Buttons>;\n    export default  ButtonPrimaryExample;"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)(a.a,{subTitle:"Subtle",subDescription:'Use a subtle button with a primary button for secondary actions, such as \u201cCancel".'}),Object(o.jsx)(r.a,{appearance:"subtle",children:" Subtle button "}),Object(o.jsx)("div",{className:"w-full pt-3",children:Object(o.jsx)(i.a,{code:"\n    import React from 'react';\n    import Buttons from '@neoKit/button';\n    const  ButtonSubtleExample = () => {\n      return <Buttons appearance=\"subtle\">Subtle button</Buttons>;\n    export default  ButtonPrimaryExample;"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)(a.a,{subTitle:"Link",subDescription:"Use a link button to navigate to another page. These should open in the same window unless information may be lost (for example, when someone is filling out a form), or when the destination is an external site (for example, a knowledge base article)."}),Object(o.jsx)(r.a,{appearance:"link",children:" Link button "}),Object(o.jsx)("div",{className:"w-full pt-3",children:Object(o.jsx)(i.a,{code:"\n      import React from 'react';\n      import Buttons from '@neoKit/button';\n      const  ButtonLinkExample = () => {\n        return <Buttons appearance=\"link\">Link button</Buttons>;\n      export default  ButtonLinkExample;"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)(a.a,{subTitle:"Subtle link",subDescription:"Similar to a subtle button, but behaves like a link button. Use a subtle link button to avoid overwhelming the page with blue links."}),Object(o.jsx)(r.a,{appearance:"subtle-link",children:"Subtle link button"}),Object(o.jsx)("div",{className:"w-full pt-3",children:Object(o.jsx)(i.a,{code:"\n      import React from 'react';\n      import Buttons from '@neoKit/button';\n      const  ButtonsubtleLinkExample = () => {\n        return <Buttons appearance=\"subtle-link\">Subtle Link button</Buttons>;\n      export default  ButtonsubtleLinkExample;"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)(a.a,{subTitle:"Warning",subDescription:"A warning button appears before we request the user to take action, usually in anticipation of a significant change. These are found mostly in confirmation modals."}),Object(o.jsx)(r.a,{appearance:"warning",children:"Warning button"}),Object(o.jsx)("div",{className:"w-full pt-3",children:Object(o.jsx)(i.a,{code:"\n      import React from 'react';\n      import Buttons from '@neoKit/button';\n      const  ButtonWarningExample = () => {\n        return <Buttons appearance=\"warning\">Warning button</Buttons>;\n      export default  ButtonWarningExample;"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)(a.a,{subTitle:"Danger",subDescription:"The danger button appears as a final confirmation for a destructive action such as deleting. These are found mostly in confirmation modals."}),Object(o.jsx)(r.a,{appearance:"danger",children:"Danger button"}),Object(o.jsx)("div",{className:"w-full pt-3",children:Object(o.jsx)(i.a,{code:"\n      import React from 'react';\n      import Buttons from '@neoKit/button';\n      const  ButtonDangerExample = () => {\n        return <Buttons appearance=\"danger\">Danger button</Buttons>;\n      export default  ButtonDangerExample;"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)(a.a,{subTitle:"Disabled",subDescription:"Set isDisabled to disable a button that isn\u2019t usable. Disabled buttons can cause accessibility problems, so avoid using isDisabled, especially for form submissions."}),Object(o.jsxs)(r.a,{appearance:"primary",isDisabled:!0,children:[" ","Disabled button"," "]}),Object(o.jsx)("div",{className:"w-full pt-3",children:Object(o.jsx)(i.a,{code:"\n  import React from 'react';\n  import Buttons from '@neoKit/button';\n  const  ButtonDisabledExample = () => {\n    return <Buttons appearance=\"primary\" isDisabled>   Disabled button</Buttons>;\n  export default  ButtonDisabledExample;"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)(a.a,{subTitle:"Selected",subDescription:"Set isSelected to indicate the button is selected."}),Object(o.jsx)(r.a,{isSelected:!0,children:" Selected button "}),Object(o.jsx)("div",{className:"w-full pt-3",children:Object(o.jsx)(i.a,{code:t})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)(a.a,{subTitle:"Loading",subDescription:"Set isLoading to indicate the button is loading. The button text is hidden and a spinner is shown in its place, while maintaining the width that it would have if the text were visible."}),Object(o.jsx)(r.a,{appearance:"primary",isLoading:!0,children:"Loading button "}),Object(o.jsx)("div",{className:"w-full pt-3",children:Object(o.jsx)(i.a,{code:t})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)(a.a,{subTitle:"Full width",subDescription:"Buttons can be expanded to full width to fill its parent container."}),Object(o.jsx)(r.a,{shouldFitContainer:!0,appearance:"primary",children:"Full width button "}),Object(o.jsx)("div",{className:"w-full pt-3",children:Object(o.jsx)(i.a,{code:"\n        import React from 'react';\n        import Buttons from '@neoKit/button';\n        const  ButtonFullWidthExample = () => {\n            <Buttons shouldFitContainer appearance=\"primary\">\n      Full width button\n    </Buttons>\n        export default  ButtonFullWidthExample;"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)(a.a,{subTitle:"Button with icon",subDescription:"Buttons may include an icon before or after the text. "}),Object(o.jsx)(a.a,{subTitle:"Icon before",subDescription:"Display an icon before the text."}),Object(o.jsx)(r.a,{icon:"assets/star.svg",position:"before",appearance:"primary",children:"Icon before"}),Object(o.jsx)("div",{className:"w-full pt-3",children:Object(o.jsx)(i.a,{code:'\n                import React from \'react\';\n                import Buttons from \'@neoKit/button\';\n                const  ButtonsIconBeforeExample = () => {\n                    <Buttons icon="assets/star.svg" position="before"  appearance="primary">\n              Full width button\n            </Buttons>\n                export default  ButtonIconBeforeExample;'})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)(a.a,{subTitle:"Icon after",subDescription:"Display an icon after the text."}),Object(o.jsx)(r.a,{icon:"assets/star.svg",position:"after",appearance:"primary",children:"Icon after"}),Object(o.jsx)("div",{className:"w-full pt-3",children:Object(o.jsx)(i.a,{code:'\n                  import React from \'react\';\n                  import Buttons from \'@neoKit/button\';\n                  const  ButtonsIconBeforeExample = () => {\n                      <Buttons icon="assets/star.svg" position="before"  appearance="primary">\n                Full width button\n              </Buttons>\n                  export default  ButtonIconBeforeExample;'})})]})]})}},yRpu:function(t,e,n){"use strict";var o=n("rePB"),r=n("nKUr");function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=n("q1tI");n("YFqc");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t){var e=t.children,n=t.appearance,o=t.href,s=t.isDisabled,l=t.isSelected,u=t.isLoading,p=t.shouldFitContainer,b=t.icon,d=t.position,f=a(t,["children","appearance","href","isDisabled","isSelected","isLoading","shouldFitContainer","icon","position"]),m=Object(i.useState)(""),j=m[0],x=m[1],h=Object(i.useState)(""),g=h[0],O=h[1];Object(i.useEffect)((function(){y(),v(),console.log(l)}),[]);var y=function(){"default"!==n&&n?"primary"===n?(x(" text-white"),O(" bg-blue-700 hover:opacity-70 ")):"subtle"===n?(x(" text-gray-700 "),O("bg-transparent hover:bg-gray-200 ")):"link"===n?(x(" text-blue-700 "),O(" bg-transparent hover:underline ")):"subtle-link"===n?(x(" text-gray-500"),O(" bg-transparent hover:underline ")):"warning"===n?(x(" text-gray-700"),O(" bg-yellow-400 hover:opacity-70 ")):"danger"===n&&(x(" text-white"),O(" bg-red-500 hover:opacity-70 ")):(x(" text-gray-700 "),O(" bg-gray-200 hover:bg-gray-300 "))},v=function(){s?(x(" text-gray-700 cursor-not-allowed "),O(" bg-gray-300 opacity-60 ")):l&&(x(" text-white"),O(" bg-blue-900 hover:opacity-100  sijo"))};return Object(r.jsx)("div",{children:n&&"link"===n||"subtle-link"===n?Object(r.jsx)("a",{href:o,children:Object(r.jsx)("button",{type:"button",tabIndex:"0",onClick:function(){},className:"focus:outline-none rounded items-baseline inline-flex px-2.5  w-auto align-middle cursor-pointer truncate text-center  font-medium py-1.5 text-sm tracking-wide  ".concat(s?"text-gray-700 cursor-not-allowed  bg-gray-300 opacity-60 ":"","  ")+j+g,children:Object(r.jsx)("span",{className:"flex-grow flex-shrink my-0 mx-0.5 truncate transition ",children:e})})}):Object(r.jsx)("button",c(c({type:"button",tabIndex:"0"},f),{},{className:"rounded items-baseline inline-flex px-2.5   align-middle  truncate text-center  font-medium py-1.5 text-sm tracking-wide focus:outline-none ".concat(u?" cursor-default":"cursor-pointer ","  ").concat(p?" w-full":" w-auto ","  ").concat(s?"primary"===n?" text-white  cursor-not-allowed  bg-gray-300 opacity-60 ":"text-gray-700 cursor-not-allowed  bg-gray-300 opacity-60 ":""," ")+j+g,style:{opacity:u&&"100%"},disabled:s,children:u?Object(r.jsx)("span",{className:" w-20 h-5 flex items-center justify-center",children:Object(r.jsxs)("svg",{className:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Object(r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),Object(r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}):Object(r.jsxs)("div",{className:"flex items-center justify-center gap-1 ".concat(b&&"after"===d?"flex-row-reverse":"flex-row"," "),children:[b&&Object(r.jsx)("img",{src:b,className:"h-full w-full max-w-max"}),Object(r.jsx)("span",{className:"flex flex-grow flex-shrink my-0 mx-0.5 truncate transition  ",children:e})]})}))})}}},[["Kfdc",0,1,2,3,4]]]);