_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{BsWD:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var s=t("a3WO");function c(e,n){if(e){if("string"===typeof e)return Object(s.a)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(s.a)(e,n):void 0}}},Ff2n:function(e,n,t){"use strict";function s(e,n){if(null==e)return{};var t,s,c=function(e,n){if(null==e)return{};var t,s,c={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}t.d(n,"a",(function(){return s}))},KQm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var s=t("a3WO");var c=t("BsWD");function r(e){return function(e){if(Array.isArray(e))return Object(s.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},YFqc:function(e,n,t){e.exports=t("cTJO")},a3WO:function(e,n,t){"use strict";function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,s=new Array(n);t<n;t++)s[t]=e[t];return s}t.d(n,"a",(function(){return s}))},cTJO:function(e,n,t){"use strict";var s=t("J4zp"),c=t("284h");n.__esModule=!0,n.default=void 0;var r=c(t("q1tI")),i=t("elyg"),o=t("nOHt"),l=t("vNVm"),a={};function d(e,n,t,s){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,t,s).catch((function(e){0}));var c=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;a[n+"%"+t+(c?"%"+c:"")]=!0}}var u=function(e){var n=!1!==e.prefetch,t=(0,o.useRouter)(),c=t&&t.pathname||"/",u=r.default.useMemo((function(){var n=(0,i.resolveHref)(c,e.href,!0),t=s(n,2),r=t[0],o=t[1];return{href:r,as:e.as?(0,i.resolveHref)(c,e.as):o||r}}),[c,e.href,e.as]),x=u.href,f=u.as,b=e.children,p=e.replace,j=e.shallow,v=e.scroll,h=e.locale;"string"===typeof b&&(b=r.default.createElement("a",null,b));var m=r.Children.only(b),g=m&&"object"===typeof m&&m.ref,I=(0,l.useIntersection)({rootMargin:"200px"}),O=s(I,2),y=O[0],C=O[1],w=r.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);(0,r.useEffect)((function(){var e=C&&n&&(0,i.isLocalURL)(x),s="undefined"!==typeof h?h:t&&t.locale,c=a[x+"%"+f+(s?"%"+s:"")];e&&!c&&d(t,x,f,{locale:s})}),[f,x,C,h,n,t]);var k={ref:w,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,s,c,r,o,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==o&&(o=s.indexOf("#")<0),n[c?"replace":"push"](t,s,{shallow:r,locale:l,scroll:o}))}(e,t,x,f,p,j,v,h)},onMouseEnter:function(e){(0,i.isLocalURL)(x)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),d(t,x,f,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var N="undefined"!==typeof h?h:t&&t.locale,P=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(f,N,t&&t.locales,t&&t.domainLocales);k.href=P||(0,i.addBasePath)((0,i.addLocale)(f,N,t&&t.defaultLocale))}return r.default.cloneElement(m,k)};n.default=u},iSHh:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/progress-indicator",function(){return t("j3ai")}])},j3ai:function(e,n,t){"use strict";t.r(n);var s=t("nKUr"),c=t("q1tI"),r=t("KQm4");var i=function(e){var n=e.values,t=e.onChange,i=e.selectedIndex,o=e.appearance,l=e.size,a=e.spacing,d=Object(c.useState)(" ");d[0],d[1],Object(c.useEffect)((function(){}),[]);var u=function(){return o&&"primary"===o.trim()?" bg-blue-600 ":o&&"help"===o.trim()?" bg-purple-600 ":o&&"inverted"===o.trim()?" bg-white ":" bg-black "},x=function(){return o&&"primary"===o.trim()?" bg-blue-300 ":o&&"help"===o.trim()?" bg-purple-300 ":(o&&o.trim()," bg-gray-400 ")};return Object(s.jsx)("div",{children:Object(s.jsx)("ul",{className:"flex  w-auto ".concat("comfortable"===(null===a||void 0===a?void 0:a.trim())?"gap-2.5":"cozy"===(null===a||void 0===a?void 0:a.trim())?" gap-1 ":"compact"===(null===a||void 0===a?void 0:a.trim())?" gap-0.5 ":" gap-2 "),children:n&&n.length>0?n.map((function(e,n){return Object(s.jsx)("li",{className:"",onClick:function(){return t(n+1)},children:Object(s.jsx)("p",{className:"".concat("small"===(null===l||void 0===l?void 0:l.trim())?"h-1.5 w-1.5":"large"===(null===l||void 0===l?void 0:l.trim())?" h-3 w-3 ":" h-2 w-2 ","  rounded-full border border-gray-400  cursor-pointer ").concat(i===n+1?u():x()),children:" "})},n)})):Object(r.a)(Array(1)).map((function(e,n){return Object(s.jsx)("li",{className:"",onClick:function(){return t(n+1)},children:Object(s.jsx)("p",{className:"".concat("small"===(null===l||void 0===l?void 0:l.trim())?"h-1.5 w-1.5":"large"===(null===l||void 0===l?void 0:l.trim())?" h-3 w-3 ":" h-2 w-2 ","  rounded-full border border-gray-400  cursor-pointer ").concat(i===n+1?u():x()),children:" "})},n)}))})})},o=t("MvPf"),l=t("Qe+f"),a=t("yRpu");n.default=function(){var e=Object(c.useState)(3),n=e[0],t=e[1],r=Object(c.useState)(["one","two","three","four"]),d=r[0],u=(r[1],function(){n<d.length&&t(n+1)}),x=function(){n>1&&t(n-1)};return Object(s.jsxs)("div",{className:"flex flex-col  w-full flex-start",children:[Object(s.jsx)(o.a,{title:"Progress indicator",description:"A progress indicator shows the user where they are along the steps of a journey."}),Object(s.jsxs)("section",{children:[Object(s.jsx)(o.a,{subTitle:"Default",subDescription:"Progress indicators in the default (N900) color.  "}),Object(s.jsx)("div",{className:"py-2",children:Object(s.jsxs)("div",{className:"flex justify-between items-center",children:[Object(s.jsx)("span",{onClick:function(){return x()},children:Object(s.jsx)(a.a,{isDisabled:1===n,children:" Prev "})}),Object(s.jsx)(i,{selectedIndex:n,values:d,onChange:function(e){return t(e)}}),Object(s.jsx)("span",{onClick:function(){return u()},children:Object(s.jsx)(a.a,{isDisabled:n===d.length,children:"Next"})})]})}),Object(s.jsx)("div",{className:"w-full pt-3",children:Object(s.jsx)(l.a,{code:'\n  import React, { useState } from "react";\n  import ProgressIndicators from "@neoKit/progressIndicator";\n  import Buttons from "@neoKit/buttons";\n  function DefaultIndicator() {\n          const [selectedIndex, setSelectedIndex] = useState(3);\n          const [values, setValues] = useState(["one", "two", "three", "four"]);\n          const dotNextClicked = () => {\n              if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);\n          };\n          const dotPrevClicked = () => {\n              if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);\n          };\n\nreturn (\n<div className=\'flex justify-between items-center\'>\n<span onClick={() => dotPrevClicked()}>\n  <Buttons isDisabled={selectedIndex === 2}>\n    Prev\n  </Buttons>\n</span>\n\n<ProgressIndicators\nselectedIndex={selectedIndex}\nvalues={values}\nonChange={(values) => setSelectedIndex(values)}\n/>\n\n<span onClick={() => dotNextClicked()}>\n  <Buttons\n    isDisabled={selectedIndex === values.length}\n    \n  >\n    Next\n  </Buttons>\n</span>\n</div>\n);\n}\n\n  export default DefaultIndicator;\n  '})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(o.a,{subTitle:"Primary",subDescription:"Progress indicators in the primary (B400) color.  "}),Object(s.jsx)("div",{className:"py-2",children:Object(s.jsxs)("div",{className:"flex justify-between items-center",children:[Object(s.jsx)("span",{children:Object(s.jsx)(a.a,{isDisabled:2===n,onClick:function(){return x()},children:" Prev "})}),Object(s.jsx)(i,{selectedIndex:n,values:d,appearance:"primary",onChange:function(e){return t(e)}}),Object(s.jsx)("span",{onClick:function(){return u()},children:Object(s.jsx)(a.a,{isDisabled:n===d.length,children:"Next"})})]})}),Object(s.jsx)("div",{className:"w-full pt-3",children:Object(s.jsx)(l.a,{code:'\n  import React, { useState } from "react";\n  import ProgressIndicators from "@neoKit/progressIndicator";\n  import Buttons from "@neoKit/buttons";\n  function PrimaryIndicator() {\n          const [selectedIndex, setSelectedIndex] = useState(3);\n          const [values, setValues] = useState(["one", "two", "three", "four"]);\n          const dotNextClicked = () => {\n              if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);\n          };\n          const dotPrevClicked = () => {\n              if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);\n          };\n\nreturn (\n<div className=\'flex justify-between items-center\'>\n<span onClick={() => dotPrevClicked()}>\n  <Buttons isDisabled={selectedIndex === 2}>\n    Prev\n  </Buttons>\n</span>\n\n<ProgressIndicators\n              selectedIndex={selectedIndex}\n              values={values}\n              appearance={"primary"}\n              onChange={(values) => setSelectedIndex(values)}\n            />\n\n<span onClick={() => dotNextClicked()}>\n  <Buttons\n    isDisabled={selectedIndex === values.length}\n    \n  >\n    Next\n  </Buttons>\n</span>\n</div>\n);\n}\n\n  export default PrimaryIndicator;\n  '})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(o.a,{subTitle:"Help",subDescription:"Progress indicators in the purple (P400) color are used indicate help, for use in user benefit modals. "}),Object(s.jsx)("div",{className:"py-2",children:Object(s.jsxs)("div",{className:"flex justify-between items-center",children:[Object(s.jsx)("span",{onClick:function(){return x()},children:Object(s.jsx)(a.a,{isDisabled:2===n,children:" Prev "})}),Object(s.jsx)(i,{selectedIndex:n,values:d,appearance:"help",onChange:function(e){return t(e)}}),Object(s.jsx)("span",{children:Object(s.jsx)(a.a,{isDisabled:n===d.length,onClick:function(){return u()},children:"Next"})})]})}),Object(s.jsx)("div",{className:"w-full pt-3",children:Object(s.jsx)(l.a,{code:'\n            import React, { useState } from "react";\n            import ProgressIndicators from "@neoKit/progressIndicator";\n            import Buttons from "@neoKit/buttons";\n            function HelpIndicator() {\n                    const [selectedIndex, setSelectedIndex] = useState(3);\n                    const [values, setValues] = useState(["one", "two", "three", "four"]);\n                    const dotNextClicked = () => {\n                        if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);\n                    };\n                    const dotPrevClicked = () => {\n                        if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);\n                    };\n          \n          return (\n          <div className=\'flex justify-between items-center\'>\n          <span onClick={() => dotPrevClicked()}>\n            <Buttons isDisabled={selectedIndex === 2}>\n              Prev\n            </Buttons>\n          </span>\n          \n          <ProgressIndicators\n              selectedIndex={selectedIndex}\n              values={values}\n              appearance={"help"}\n              onChange={(values) => setSelectedIndex(values)}\n            />\n          \n          <span onClick={() => dotNextClicked()}>\n            <Buttons\n              isDisabled={selectedIndex === values.length}\n              \n            >\n              Next\n            </Buttons>\n          </span>\n          </div>\n          );\n          }\n          \n            export default HelpIndicator;\n            '})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(o.a,{subTitle:"Inverted",subDescription:"Use an inverted progress indicator when high contrast against a darker background color is needed. "}),Object(s.jsx)("div",{className:"py-2 px-2",style:{backgroundColor:"#1b2638"},children:Object(s.jsxs)("div",{className:"flex justify-between items-center",children:[Object(s.jsx)("span",{onClick:function(){return x()},children:Object(s.jsxs)(a.a,{isDisabled:2===n,appearance:"primary",children:[" ","Prev"," "]})}),Object(s.jsx)(i,{selectedIndex:n,values:d,appearance:"inverted",onChange:function(e){return t(e)}}),Object(s.jsx)("span",{onClick:function(){return u()},children:Object(s.jsx)(a.a,{isDisabled:n===d.length,appearance:"primary",children:"Next"})})]})}),Object(s.jsx)("div",{className:"w-full pt-3",children:Object(s.jsx)(l.a,{code:'\nimport React, { useState } from "react";\nimport ProgressIndicators from "@neoKit/progressIndicator";\nimport Buttons from "@neoKit/buttons";\nfunction InvertedProgressIndicator() {\n        const [selectedIndex, setSelectedIndex] = useState(3);\n        const [values, setValues] = useState(["one", "two", "three", "four"]);\n        const dotNextClicked = () => {\n            if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);\n        };\n        const dotPrevClicked = () => {\n            if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);\n        };\n\nreturn (\n<div className=\'flex justify-between items-center\'>\n<span onClick={() => dotPrevClicked()}>\n<Buttons isDisabled={selectedIndex === 2}>\n  Prev\n</Buttons>\n</span>\n\n<ProgressIndicators\nselectedIndex={selectedIndex}\nvalues={values}\nappearance={"inverted"}\nonChange={(values) => setSelectedIndex(values)}\n/>\n<span onClick={() => dotNextClicked()}>\n<Buttons\n  isDisabled={selectedIndex === values.length}\n  \n>\n  Next\n</Buttons>\n</span>\n</div>\n);\n}\n\nexport default  InvertedProgressIndicator;\n\n'})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)("h5",{className:"lg:text-lg md:text-base text-sm text-primary font-normal pb-3 pt-2",children:"Size"}),Object(s.jsxs)("p",{children:[" ","The size of progress indicators can be small, default (medium), or large depending on how subtle or prominent the indicator should be."," "]}),Object(s.jsx)(o.a,{subTitle:"Small",subDescription:"Small sized progress indicators."}),Object(s.jsx)("div",{className:"py-2",children:Object(s.jsxs)("div",{className:"flex justify-between items-center",children:[Object(s.jsx)("span",{onClick:function(){return x()},children:Object(s.jsx)(a.a,{isDisabled:2===n,children:" Prev "})}),Object(s.jsx)(i,{selectedIndex:n,values:d,size:"small",onChange:function(e){return t(e)}}),Object(s.jsx)("span",{onClick:function(){return u()},children:Object(s.jsx)(a.a,{isDisabled:n===d.length,children:"Next"})})]})}),Object(s.jsx)("div",{className:"w-full pt-3",children:Object(s.jsx)(l.a,{code:'\nimport React, { useState } from "react";\nimport ProgressIndicators from "@neoKit/progressIndicator";\nimport Buttons from "@neoKit/buttons";\nfunction SmallProgressIndicator() {\n        const [selectedIndex, setSelectedIndex] = useState(3);\n        const [values, setValues] = useState(["one", "two", "three", "four"]);\n        const dotNextClicked = () => {\n            if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);\n        };\n        const dotPrevClicked = () => {\n            if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);\n        };\n\nreturn (\n<div className=\'flex justify-between items-center\'>\n<span onClick={() => dotPrevClicked()}>\n<Buttons isDisabled={selectedIndex === 2}>\n  Prev\n</Buttons>\n</span>\n\n<ProgressIndicators\nselectedIndex={selectedIndex}\nvalues={values}\nsize={"small"}\nonChange={(values) => setSelectedIndex(values)}\n/>\n\n<span onClick={() => dotNextClicked()}>\n<Buttons\n  isDisabled={selectedIndex === values.length}\n  \n>\n  Next\n</Buttons>\n</span>\n</div>\n);\n}\n\nexport default  SmallProgressIndicator;\n;\n'})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(o.a,{subTitle:"Default (medium)",subDescription:"Default sized progress indicators."}),Object(s.jsx)("div",{className:"py-2",children:Object(s.jsxs)("div",{className:"flex justify-between items-center",children:[Object(s.jsx)("span",{onClick:function(){return x()},children:Object(s.jsx)(a.a,{isDisabled:2===n,children:" Prev "})}),Object(s.jsx)(i,{selectedIndex:n,values:d,onChange:function(e){return t(e)}}),Object(s.jsx)("span",{onClick:function(){return u()},children:Object(s.jsx)(a.a,{isDisabled:n===d.length,children:"Next"})})]})}),Object(s.jsx)("div",{className:"w-full pt-3",children:Object(s.jsx)(l.a,{code:'\nimport React, { useState } from "react";\nimport ProgressIndicators from "@neoKit/progressIndicator";\nimport Buttons from "@neoKit/buttons";\nfunction DefaultProgressIndicator() {\n        const [selectedIndex, setSelectedIndex] = useState(3);\n        const [values, setValues] = useState(["one", "two", "three", "four"]);\n        const dotNextClicked = () => {\n            if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);\n        };\n        const dotPrevClicked = () => {\n            if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);\n        };\n\nreturn (\n<div className=\'flex justify-between items-center\'>\n<span onClick={() => dotPrevClicked()}>\n<Buttons isDisabled={selectedIndex === 2}>\n  Prev\n</Buttons>\n</span>\n\n<ProgressIndicators\nselectedIndex={selectedIndex}\nvalues={values}\nonChange={(values) => setSelectedIndex(values)}\n/>\n\n<span onClick={() => dotNextClicked()}>\n<Buttons\n  isDisabled={selectedIndex === values.length}\n  \n>\n  Next\n</Buttons>\n</span>\n</div>\n);\n}\n\nexport default  DefaultProgressIndicator;\n;\n'})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(o.a,{subTitle:"Large",subDescription:"Large sized progress indicators."}),Object(s.jsx)("div",{className:"py-2",children:Object(s.jsxs)("div",{className:"flex justify-between items-center",children:[Object(s.jsx)("span",{onClick:function(){return x()},children:Object(s.jsx)(a.a,{isDisabled:2===n,children:" Prev "})}),Object(s.jsx)(i,{selectedIndex:n,values:d,size:"large",onChange:function(e){return t(e)}}),Object(s.jsx)("span",{onClick:function(){return u()},children:Object(s.jsx)(a.a,{isDisabled:n===d.length,children:"Next"})})]})}),Object(s.jsx)("div",{className:"w-full pt-3",children:Object(s.jsx)(l.a,{code:'\n  import React, { useState } from "react";\n  import ProgressIndicators from "@neoKit/progressIndicator";\n  import Buttons from "@neoKit/buttons";\n  function LargeProgressIndicator() {\n          const [selectedIndex, setSelectedIndex] = useState(3);\n          const [values, setValues] = useState(["one", "two", "three", "four"]);\n          const dotNextClicked = () => {\n              if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);\n          };\n          const dotPrevClicked = () => {\n              if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);\n          };\n\nreturn (\n<div className=\'flex justify-between items-center\'>\n<span onClick={() => dotPrevClicked()}>\n  <Buttons isDisabled={selectedIndex === 2}>\n    Prev\n  </Buttons>\n</span>\n\n<ProgressIndicators\nselectedIndex={selectedIndex}\nvalues={values}\nsize={"large"}\nonChange={(values) => setSelectedIndex(values)}\n/>\n\n<span onClick={() => dotNextClicked()}>\n  <Buttons\n    isDisabled={selectedIndex === values.length}\n    \n  >\n    Next\n  </Buttons>\n</span>\n</div>\n);\n}\n\nexport default  LargeProgressIndicator;\n;\n'})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)("h5",{className:"lg:text-lg md:text-base text-sm text-primary font-normal pb-3 pt-2",children:"Spacing"}),Object(s.jsx)("p",{children:"Spacing of the dots can be either comfortable, cozy, or compact depending on the availability of space on the page."}),Object(s.jsx)(o.a,{subTitle:"Comfortable",subDescription:"Progress indicators with the default comfortable spacing."}),Object(s.jsx)("div",{className:"py-2",children:Object(s.jsxs)("div",{className:"flex justify-between items-center",children:[Object(s.jsx)("span",{onClick:function(){return x()},children:Object(s.jsx)(a.a,{isDisabled:2===n,children:" Prev "})}),Object(s.jsx)(i,{selectedIndex:n,values:d,spacing:"comfortable",onChange:function(e){return t(e)}}),Object(s.jsx)("span",{onClick:function(){return u()},children:Object(s.jsx)(a.a,{isDisabled:n===d.length,children:"Next"})})]})}),Object(s.jsx)("div",{className:"w-full pt-3",children:Object(s.jsx)(l.a,{code:'\nimport React, { useState } from "react";\n  import ProgressIndicators from "@neoKit/progressIndicator";\n  import Buttons from "@neoKit/buttons";\n  function ComfortableProgressIndicator() {\n          const [selectedIndex, setSelectedIndex] = useState(3);\n          const [values, setValues] = useState(["one", "two", "three", "four"]);\n          const dotNextClicked = () => {\n              if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);\n          };\n          const dotPrevClicked = () => {\n              if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);\n          };\n\nreturn (\n<div className=\'flex justify-between items-center\'>\n<span onClick={() => dotPrevClicked()}>\n  <Buttons isDisabled={selectedIndex === 2}>\n    Prev\n  </Buttons>\n</span>\n\n<ProgressIndicators\nselectedIndex={selectedIndex}\nvalues={values}\nspacing="comfortable"\nonChange={(values) => setSelectedIndex(values)}\n/>\n\n<span onClick={() => dotNextClicked()}>\n  <Buttons\n    isDisabled={selectedIndex === values.length}\n    \n  >\n    Next\n  </Buttons>\n</span>\n</div>\n);\n}\n\nexport default  ComfortableProgressIndicator;\n;\n'})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(o.a,{subTitle:"Cozy",subDescription:"Progress indicators with cozy spacing."}),Object(s.jsx)("div",{className:"py-2",children:Object(s.jsxs)("div",{className:"flex justify-between items-center",children:[Object(s.jsx)("span",{onClick:function(){return x()},children:Object(s.jsx)(a.a,{isDisabled:2===n,children:" Prev "})}),Object(s.jsx)(i,{selectedIndex:n,values:d,spacing:"cozy",onChange:function(e){return t(e)}}),Object(s.jsx)("span",{onClick:function(){return u()},children:Object(s.jsx)(a.a,{isDisabled:n===d.length,children:"Next"})})]})}),Object(s.jsx)("div",{className:"w-full pt-3",children:Object(s.jsx)(l.a,{code:'\nimport React, { useState } from "react";\n  import ProgressIndicators from "@neoKit/progressIndicator";\n  import Buttons from "@neoKit/buttons";\n  function CozyProgressIndicator() {\n          const [selectedIndex, setSelectedIndex] = useState(3);\n          const [values, setValues] = useState(["one", "two", "three", "four"]);\n          const dotNextClicked = () => {\n              if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);\n          };\n          const dotPrevClicked = () => {\n              if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);\n          };\n\nreturn (\n<div className=\'flex justify-between items-center\'>\n<span onClick={() => dotPrevClicked()}>\n  <Buttons isDisabled={selectedIndex === 2}>\n    Prev\n  </Buttons>\n</span>\n<ProgressIndicators\n              selectedIndex={selectedIndex}\n              values={values}\n              spacing=\'cozy\'\n              onChange={(values) => setSelectedIndex(values)}\n            />\n\n<span onClick={() => dotNextClicked()}>\n  <Buttons\n    isDisabled={selectedIndex === values.length}\n    \n  >\n    Next\n  </Buttons>\n</span>\n</div>\n);\n}\n\nexport default  CozyProgressIndicator;\n'})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(o.a,{subTitle:"Compact",subDescription:"Progress indicators with compact spacing."}),Object(s.jsx)("div",{className:"py-2",children:Object(s.jsxs)("div",{className:"flex justify-between items-center",children:[Object(s.jsx)("span",{onClick:function(){return x()},children:Object(s.jsx)(a.a,{isDisabled:2===n,children:" Prev "})}),Object(s.jsx)(i,{selectedIndex:n,values:d,spacing:"compact",onChange:function(e){return t(e)}}),Object(s.jsx)("span",{onClick:function(){return u()},children:Object(s.jsx)(a.a,{isDisabled:n===d.length,children:"Next"})})]})}),Object(s.jsx)("div",{className:"w-full pt-3",children:Object(s.jsx)(l.a,{code:'\nimport React, { useState } from "react";\n  import ProgressIndicators from "@neoKit/progressIndicator";\n  import Buttons from "@neoKit/buttons";\n  function CompactProgressIndicator() {\n          const [selectedIndex, setSelectedIndex] = useState(3);\n          const [values, setValues] = useState(["one", "two", "three", "four"]);\n          const dotNextClicked = () => {\n              if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);\n          };\n          const dotPrevClicked = () => {\n              if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);\n          };\n\nreturn (\n<div className=\'flex justify-between items-center\'>\n<span onClick={() => dotPrevClicked()}>\n  <Buttons isDisabled={selectedIndex === 2}>\n    Prev\n  </Buttons>\n</span>\n<ProgressIndicators\nselectedIndex={selectedIndex}\nvalues={values}\nspacing=\'compact\'\nonChange={(values) => setSelectedIndex(values)}\n/>\n\n<span onClick={() => dotNextClicked()}>\n  <Buttons\n    isDisabled={selectedIndex === values.length}\n    \n  >\n    Next\n  </Buttons>\n</span>\n</div>\n);\n}\n\nexport default CompactProgressIndicator;\n'})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(o.a,{subTitle:"Interaction",subDescription:"If interaction is enabled, the user is able to navigate to the selected step by selecting the corresponding dot indicator. Once the dots are in focus, navigation can be accomplished using the keyboard arrow keys."}),Object(s.jsx)("div",{className:"py-2",children:Object(s.jsxs)("div",{className:"flex justify-between items-center",children:[Object(s.jsx)("span",{onClick:function(){return x()},children:Object(s.jsx)(a.a,{isDisabled:2===n,children:"Prev "})}),Object(s.jsx)(i,{selectedIndex:n,values:d,onChange:function(e){return t(e)}}),Object(s.jsx)("span",{onClick:function(){return u()},children:Object(s.jsx)(a.a,{isDisabled:n===d.length,children:"Next"})})]})}),Object(s.jsx)("div",{className:"w-full pt-3",children:Object(s.jsx)(l.a,{code:'\n  import React, { useState } from "react";\n    import ProgressIndicators from "@neoKit/progressIndicator";\n    import Buttons from "@neoKit/buttons";\n    function InteractionProgressIndicator() {\n            const [selectedIndex, setSelectedIndex] = useState(3);\n            const [values, setValues] = useState(["one", "two", "three", "four"]);\n            const dotNextClicked = () => {\n                if (selectedIndex < values.length) setSelectedIndex(selectedIndex + 1);\n            };\n            const dotPrevClicked = () => {\n                if (selectedIndex > 1) setSelectedIndex(selectedIndex - 1);\n            };\n\n  return (\n  <div className=\'flex justify-between items-center\'>\n  <span onClick={() => dotPrevClicked()}>\n    <Buttons isDisabled={selectedIndex === 2}>\n      Prev\n    </Buttons>\n  </span>\n  <ProgressIndicators\n    selectedIndex={selectedIndex}\n    values={values}\n    onChange={(values) => setSelectedIndex(values)}\n  />\n\n  <span onClick={() => dotNextClicked()}>\n    <Buttons\n      isDisabled={selectedIndex === values.length}\n      \n    >\n      Next\n    </Buttons>\n  </span>\n</div>\n);\n}\n\nexport default InteractionProgressIndicator;\n  '})})]})]})}},rePB:function(e,n,t){"use strict";function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return s}))},vNVm:function(e,n,t){"use strict";var s=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,l=(0,c.useRef)(),a=(0,c.useState)(!1),d=s(a,2),u=d[0],x=d[1],f=(0,c.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||u||e&&e.tagName&&(l.current=function(e,n,t){var s=function(e){var n=e.rootMargin||"",t=o.get(n);if(t)return t;var s=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=s.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return o.set(n,t={id:n,observer:c,elements:s}),t}(t),c=s.id,r=s.observer,i=s.elements;return i.set(e,n),r.observe(e),function(){i.delete(e),r.unobserve(e),0===i.size&&(r.disconnect(),o.delete(c))}}(e,(function(e){return e&&x(e)}),{rootMargin:n}))}),[t,n,u]);return(0,c.useEffect)((function(){if(!i&&!u){var e=(0,r.requestIdleCallback)((function(){return x(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[u]),[f,u]};var c=t("q1tI"),r=t("0G5g"),i="undefined"!==typeof IntersectionObserver;var o=new Map},yRpu:function(e,n,t){"use strict";var s=t("rePB"),c=t("nKUr"),r=t("Ff2n"),i=t("q1tI");t("YFqc");function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.a=function(e){var n=e.children,t=e.appearance,s=e.href,o=e.isDisabled,a=e.isSelected,d=e.isLoading,u=e.shouldFitContainer,x=e.icon,f=e.position,b=Object(r.a)(e,["children","appearance","href","isDisabled","isSelected","isLoading","shouldFitContainer","icon","position"]),p=Object(i.useState)(""),j=p[0],v=p[1],h=Object(i.useState)(""),m=h[0],g=h[1];Object(i.useEffect)((function(){I(),O(),console.log(a)}),[]);var I=function(){"default"!==t&&t?"primary"===t?(v(" text-white"),g(" bg-blue-700 hover:opacity-70 ")):"subtle"===t?(v(" text-gray-700 "),g("bg-transparent hover:bg-gray-200 ")):"link"===t?(v(" text-blue-700 "),g(" bg-transparent hover:underline ")):"subtle-link"===t?(v(" text-gray-500"),g(" bg-transparent hover:underline ")):"warning"===t?(v(" text-gray-700"),g(" bg-yellow-400 hover:opacity-70 ")):"danger"===t&&(v(" text-white"),g(" bg-red-500 hover:opacity-70 ")):(v(" text-gray-700 "),g(" bg-gray-200 hover:bg-gray-300 "))},O=function(){o?(v(" text-gray-700 cursor-not-allowed "),g(" bg-gray-300 opacity-60 ")):a&&(v(" text-white"),g(" bg-blue-900 hover:opacity-100  sijo"))};return Object(c.jsx)("div",{children:t&&"link"===t||"subtle-link"===t?Object(c.jsx)("a",{href:s,children:Object(c.jsx)("button",{type:"button",tabIndex:"0",onClick:function(){},className:"focus:outline-none rounded items-baseline inline-flex px-2.5  w-auto align-middle cursor-pointer truncate text-center  font-medium py-1.5 text-sm tracking-wide  ".concat(o?"text-gray-700 cursor-not-allowed  bg-gray-300 opacity-60 ":"","  ")+j+m,children:Object(c.jsx)("span",{className:"flex-grow flex-shrink my-0 mx-0.5 truncate transition ",children:n})})}):Object(c.jsx)("button",l(l({type:"button",tabIndex:"0"},b),{},{className:"rounded items-baseline inline-flex px-2.5   align-middle  truncate text-center  font-medium py-1.5 text-sm tracking-wide focus:outline-none ".concat(d?" cursor-default":"cursor-pointer ","  ").concat(u?" w-full":" w-auto ","  ").concat(o?"primary"===t?" text-white  cursor-not-allowed  bg-gray-300 opacity-60 ":"text-gray-700 cursor-not-allowed  bg-gray-300 opacity-60 ":""," ")+j+m,style:{opacity:d&&"100%"},disabled:o,children:d?Object(c.jsx)("span",{className:" w-20 h-5 flex items-center justify-center",children:Object(c.jsxs)("svg",{className:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Object(c.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),Object(c.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}):Object(c.jsxs)("div",{className:"flex items-center justify-center gap-1 ".concat(x&&"after"===f?"flex-row-reverse":"flex-row"," "),children:[x&&Object(c.jsx)("img",{src:x,className:"h-full w-full max-w-max"}),Object(c.jsx)("span",{className:"flex flex-grow flex-shrink my-0 mx-0.5 truncate transition  ",children:n})]})}))})}}},[["iSHh",0,1,2,3,4]]]);