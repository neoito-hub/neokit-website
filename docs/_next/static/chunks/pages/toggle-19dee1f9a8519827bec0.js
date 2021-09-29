_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{Q2XO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toggle",function(){return n("e0E0")}])},e0E0:function(e,t,n){"use strict";n.r(t);var l=n("nKUr"),o=n("q1tI"),s=n("MvPf"),a=n("Qe+f");var i=function(e){var t=e.color,n=e.name,s=e.id,a=e.onChange,i=e.value,c=e.disabled,r=e.icon,g=Object(o.useState)(!1),d=g[0],u=g[1],j=Object(o.useState)("");return j[0],j[1],Object(o.useEffect)((function(){i&&u(i)}),[]),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{name:n,id:s,class:"flex justify-between items-center w-max relative  ".concat(c?"  opacity-40 cursor-not-allowed":" cursor-pointer"," "),onClick:function(e){c?e.stopPropagation():(u(!d),a&&a(!d))},children:[Object(l.jsxs)("span",{className:"absolute  top-2 ".concat(d?"left-1.5":"right-1.5 -ml-1 "," "),children:[r&&d&&Object(l.jsx)("img",{src:"assets/tick.svg",width:"10",height:"10",className:" max-w-max"}),r&&!d&&Object(l.jsx)("img",{src:"assets/close.svg",width:"8",height:"8",className:" max-w-max"})]}),Object(l.jsx)("div",{class:'w-11 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out" '.concat(d?"bg-green-400":""," "),style:{backgroundColor:d?t||"#00FF7F":"#C0C0C0"},children:Object(l.jsx)("div",{class:'bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out" '.concat(d?"translate-x-5":"")})})]})})};t.default=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(s.a,{title:"Toggle",description:"A toggle is used to view or switch between enabled or disabled states."}),Object(l.jsxs)("section",{children:[Object(l.jsx)(s.a,{subTitle:"Default",subDescription:"The default form of a toggle. For pages with lots of toggles, use the default size."}),Object(l.jsxs)("div",{className:"py-2",children:[Object(l.jsx)("div",{className:"text-sm text-gray-500 font-medium tracking-wide pb-2",children:"Allow pull requests"}),Object(l.jsx)(i,{name:"toggle",id:"toggleID",onChange:function(e){}})]}),Object(l.jsx)("div",{className:"w-full pt-3",children:Object(l.jsx)(a.a,{code:"\n  import React from 'react';\n\n  import Toggle from '@neoKit/toggle';\n  \n  export defaultToggleExample() {\n    return (\n      <>\n        <Toggler id=\"toggle-default\" />\n      </>\n    );\n  }\n        "})})]}),Object(l.jsxs)("section",{children:[Object(l.jsx)(s.a,{subTitle:"Color",subDescription:"The default form of a toggle. For pages with lots of toggles, use the default size."}),Object(l.jsxs)("div",{className:"py-2",children:[Object(l.jsx)("div",{className:"text-sm text-gray-500 font-medium tracking-wide pb-2",children:"Allow pull requests"}),Object(l.jsx)(i,{name:"toggle",id:"toggleID",color:"red",onChange:function(e){}})]}),Object(l.jsx)("div",{className:"w-full pt-3",children:Object(l.jsx)(a.a,{code:"\n        import React from 'react';\n        \n        import Toggle from '@neoKit/toggle';\n        \n        export coloredExample() {\n          return (\n            <>\n            <Toggler\n            name='toggle'\n            id='toggleID'\n            color='red'\n            onChange={(value) => {}}\n            value={true}\n          ></Toggler>\n            </>\n          );\n        }\n              "})})]}),Object(l.jsxs)("section",{children:[Object(l.jsx)(s.a,{subTitle:"Toggle State",subDescription:"The default form of a toggle. For pages with lots of toggles, use the default size."}),Object(l.jsxs)("div",{className:"py-2",children:[Object(l.jsx)("div",{className:"text-sm text-gray-500 font-medium tracking-wide pb-2",children:"Allow pull requests"}),Object(l.jsx)(i,{name:"toggle",id:"toggleID",onChange:function(e){},value:!0})]}),Object(l.jsx)("div",{className:"w-full pt-3",children:Object(l.jsx)(a.a,{code:"\n      import React from 'react';\n      \n      import Toggle from '@neoKit/toggle';\n      \n      export toggleStateExample() {\n        return (\n          <>\n          <Toggler\n          name='toggle'\n          id='toggleID'\n          disabled\n          value ={true}\n          onChange={(value) => {}}\n          value={true}\n        ></Toggler>\n          </>\n        );\n      }\n            "})})]}),Object(l.jsxs)("section",{children:[Object(l.jsx)(s.a,{subTitle:" Disabled ",subDescription:"A toggle is disabled when a selection has already been made outside of the current context that negates the need for the toggle."}),Object(l.jsxs)("div",{className:"py-2",children:[Object(l.jsx)("div",{className:"text-sm text-gray-500 font-medium tracking-wide pb-2",children:"Allow pull requests"}),Object(l.jsx)(i,{name:"toggle",id:"toggleID",disabled:!0,onChange:function(e){},value:!0})]}),Object(l.jsx)("div",{className:"w-full pt-3",children:Object(l.jsx)(a.a,{code:"\nimport React from 'react';\n\nimport Toggle from '@neoKit/toggle';\n\nexport diabledToggleExample() {\n  return (\n    <>\n    <Toggler\n    name='toggle'\n    id='toggleID'\n    disabled\n    onChange={(value) => {}}\n    value={true}\n  ></Toggler>\n    </>\n  );\n}\n      "})})]}),Object(l.jsxs)("section",{children:[Object(l.jsx)(s.a,{subTitle:"Icon ",subDescription:"Toggle button with icon"}),Object(l.jsx)("div",{className:"flex flex-wrap",children:Object(l.jsxs)("div",{className:"py-2",children:[Object(l.jsx)("div",{className:"text-sm text-gray-500 font-medium tracking-wide pb-2",children:"Allow pull requests"}),Object(l.jsx)(i,{name:"toggle",id:"toggleID",onChange:function(e){},value:!0,icon:!0})]})}),Object(l.jsx)("div",{className:"w-full pt-3",children:Object(l.jsx)(a.a,{code:"\n            import React from 'react';\n            import Toggle from '@neoKit/toggle';\n            \n            export toggleStateExample() {\n              return (\n                <>\n                <Toggler\n                name='toggle'\n                id='toggleID'\n                disabled\n               icon={true}\n                onChange={(value) => {}}\n                value={true}\n              ></Toggler>\n                </>\n              );\n            }\n                  "})})]})]})}}},[["Q2XO",0,1,2,3]]]);