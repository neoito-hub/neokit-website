_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"+c+7":function(e,c,n){"use strict";n.r(c);var t=n("nKUr"),o=n("q1tI");var a=function(e){var c=e.checked,n=e.onChange,a=e.label,s=e.id,l=e.name,b=e.defaultChecked,i=e.isDisabled,d=e.size,h=Object(o.useState)(!1),r=h[0],x=h[1],u=Object(o.useState)(!1),k=u[0],m=u[1],j=Object(o.useState)(!1),f=j[0],C=j[1];Object(o.useEffect)((function(){c&&!b&&m(!0),b&&x(!0),p()}),[]);var p=function(){switch(d){case"small":C("w-3 h-3");break;case"medium":C("w-4 h-4");break;case"large":C("w-6 h-6");break;case"xlarge":C("w-8 h-8");break;default:C("w-4 h-4")}},g=function(){console.log("enter"),k?(console.log("enter ds"),n(!c)):(console.log("enter"),x(!r),n(!r))};return Object(t.jsx)("div",{className:"text-sm font-normal text-gray-700 ",children:Object(t.jsxs)("label",{className:"flex gap-3 items-center  ".concat(i?" cursor-not-allowed  opacity-50":" cursor-pointer "),children:[Object(t.jsx)("input",{className:"".concat(f),type:"checkbox",checked:c&&!b?c:r,id:s,name:l,disabled:i,onChange:function(){return g()}}),Object(t.jsxs)("span",{className:"".concat("small"===d?" text-xs ":"large"===d?" text-base ":"xlarge"===d?" text-lg ":"text-sm"),children:[" ",a]})]})})},s=n("MvPf"),l=n("Qe+f");c.default=function(){var e=Object(o.useState)(!0),c=e[0],n=e[1],b=Object(o.useState)(!1),i=b[0],d=b[1],h=Object(o.useState)(!0),r=h[0],x=h[1];return console.log(i,"fe"),console.log(c,"se"),console.log(r,"third"),Object(t.jsxs)("div",{className:"flex flex-col  w-full flex-start",children:[Object(t.jsx)(s.a,{title:"Checkbox",description:"A checkbox is an input control that allows a user to select one or more options from a number of choices."}),Object(t.jsxs)("section",{children:[Object(t.jsx)(s.a,{subTitle:"Default",subDescription:"By default, a checkbox input includes a selected and unselected state. "}),Object(t.jsx)("div",{className:"py-2",children:Object(t.jsx)(a,{label:"Default checkbox",name:"checkbox-default",id:"cb-default",onChange:function(e){return d(e)}})}),Object(t.jsx)("div",{className:"w-full pt-3",children:Object(t.jsx)(l.a,{code:"\n  import React, { useState } from \"react\";\n  import { Checkboxes } from '@neoKit/checkbox';\n  const [isdefaultChecked, setIsDefaultChecked] = useState(false);\n  \n  const CheckboxDefaultExample = () => {\n    return (\n      <Checkbox\n      label='Default checkbox'\n      name='checkbox-default'\n      id='cb-default'\n      onChange={(checked) => \n          setIsDefaultChecked(checked)\n      }\n      />\n    );\n  };\n\nexport default CheckboxDefaultExample;\n    "})})]}),Object(t.jsxs)("section",{children:[Object(t.jsx)(s.a,{subTitle:"Controlled",subDescription:"By default, a checkbox input includes a selected and unselected state.. "}),Object(t.jsx)("div",{className:"py-2",children:Object(t.jsx)(a,{checked:c,label:"Controlled checkbox, with props.isChecked: ".concat(c),name:"checkbox-default",id:"cb-default",onChange:function(e){return n(e)}})}),Object(t.jsx)("div",{className:"w-full pt-3",children:Object(t.jsx)(l.a,{code:"\n  import React, { useState } from \"react\";\n  import { Checkboxes } from '@neoKit/checkbox';\n  const [isChecked, setIsChecked] = useState(true);\n  \n  const CheckboxControlledExample = () => {\n\n    return (\n        <Checkboxes\n        checked={isChecked}\n        label={'label goes here'}\n        name='checkbox-default'\n        id='cb-default'\n        onChange={(checked) => setIsChecked(checked)}\n      ></Checkboxes>\n    );\n  };\n  export default CheckboxControlledExample;\n    "})})]}),Object(t.jsxs)("section",{children:[Object(t.jsx)(s.a,{subTitle:"Uncontrolled",subDescription:"In an uncontrolled checkbox, the checked state is managed by the DOM. Use defaultChecked to set the initial selected state."}),Object(t.jsx)("div",{className:"py-2",children:Object(t.jsx)(a,{defaultChecked:!0,checked:c,label:"Uncontrolled checkbox",name:"uncontrolled-checkbox",onChange:function(e){return x(e)}})}),Object(t.jsx)("div",{className:"w-full pt-3",children:Object(t.jsx)(l.a,{code:"\n    import React, { useState } from \"react\";\n    import { Checkboxes } from '@neoKit/checkbox';\n    const [isUnControlChecked, setIsUnControlChecked] = useState(true);\n    \n    const CheckboxUncontrolledExample = () => (\n\n  \n      return (\n        <Checkboxes\n        defaultChecked\n        checked={isChecked}\n        label='Uncontrolled checkbox'\n        name='uncontrolled-checkbox'\n        onChange={(checked) => setIsUnControlChecked(checked)}\n      ></Checkboxes>\n      );\n    };\n    \nexport default CheckboxUncontrolledExample;\n      "})})]}),Object(t.jsxs)("section",{children:[Object(t.jsx)(s.a,{subTitle:"Disabled",subDescription:"Set isDisabled to disable a checkbox when another action has to be completed before the checkbox is usable."}),Object(t.jsx)("div",{className:"py-2",children:Object(t.jsx)(a,{defaultChecked:!0,isDisabled:!0,checked:c,label:"Disabled checkbox",name:"checkbox-disabled",id:"cb-disabled",onChange:function(e){return x(e)}})}),Object(t.jsx)("div",{className:"w-full pt-3",children:Object(t.jsx)(l.a,{code:'\n      import React, { useState } from "react";\n      import { Checkboxes } from \'@neoKit/checkbox\';\n      const [isUnControlChecked, setIsUnControlChecked] = useState(true);\n      \n      const CheckboxUncontrolledExample = () => (\n  \n    \n        return (\n            <Checkboxes\n            defaultChecked\n            isDisabled\n            checked={isChecked}\n            label="Disabled checkbox"\n            name="checkbox-disabled"\n            id="cb-disabled"\n            onChange={(checked) => setIsUnControlChecked(checked)}\n          ></Checkboxes>\n        );\n      };\n      \n  export default CheckboxUncontrolledExample;\n        '})})]}),Object(t.jsxs)("section",{children:[Object(t.jsx)(s.a,{subTitle:"Size",subDescription:"Set size to change the size of the checkbox."}),Object(t.jsxs)("div",{className:"py-2 flex flex-col gap-4",children:[Object(t.jsx)(a,{label:"Small checkbox",name:"checkbox-basic",id:"cb-small",size:"small",onChange:function(){}}),Object(t.jsx)(a,{value:"Medium checkbox",label:"Medium checkbox",id:"cb-medium",size:"medium",onChange:function(){}}),Object(t.jsx)(a,{value:"Large checkbox",label:"Large checkbox",id:"cb-large",size:"large",onChange:function(){}}),Object(t.jsx)(a,{value:"Extra large checkbox",label:"Extra large checkbox",id:"cb-xlarge",size:"xlarge",onChange:function(){}})]}),Object(t.jsx)("div",{className:"w-full pt-3",children:Object(t.jsx)(l.a,{code:"\n     import React, { useState } from \"react\";\n     import { Checkboxes } from '@neoKit/checkbox';\n\nconst CheckboxSizesExample = () => {\n    return (\n      <div>\n     <Checkboxes\n     label='Small checkbox'\n     name='checkbox-basic'\n     id='cb-small'\n     size='small'\n     onChange={() => {}}\n   ></Checkboxes>\n\n   <Checkboxes\n     value='Medium checkbox'\n     label='Medium checkbox'\n     id='cb-medium'\n     size='medium'\n     onChange={() => {}}\n   ></Checkboxes>\n   <Checkboxes\n     value='Large checkbox'\n     label='Large checkbox'\n     id='cb-large'\n     size='large'\n     onChange={() => {}}\n   ></Checkboxes>\n   <Checkboxes\n     value='Extra large checkbox'\n     label='Extra large checkbox'\n     id='cb-xlarge'\n     size='xlarge'\n     onChange={() => {}}\n   ></Checkboxes>\n   </div>\n   );\n };\n \n export default CheckboxSizesExample;\n\n     "})})]})]})}},M6Qx:function(e,c,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkbox",function(){return n("+c+7")}])}},[["M6Qx",0,1,2,3]]]);