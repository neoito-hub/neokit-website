_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"2HvE":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tag",function(){return a("pNF3")}])},"8ANA":function(e,t,a){"use strict";var n=a("nKUr"),r=a("q1tI");t.a=function(e){var t=e.width,a=e.height,o=e.path,s=e.status,c=e.position,i=e.color,l=e.statusImage,d=e.size,u=Object(r.useState)("50"),b=u[0],m=u[1],j=Object(r.useState)("50"),g=j[0],h=j[1],x=Object(r.useState)("assets/avatar.svg"),f=x[0],p=x[1],v=Object(r.useState)(!1),O=(v[0],v[1]),T=Object(r.useState)("top-1 right-1"),w=T[0],k=(T[1],Object(r.useState)("green")),N=k[0],R=k[1];Object(r.useEffect)((function(){E()}),[]);var E=function(){if(d)switch(d){case"small":m("15"),h("15");break;case"medium":m("25"),h("25");break;case"large":m("50"),h("50");break;case"xlarge":m("75"),h("75");break;case"xxlarge":m("100"),h("100");break;default:m("20"),h("20")}else!t||m(t),a&&h(a);o&&p(o),s&&O(s),i&&R(i)},y=function(){if(!c)return w;var e=[];return(c.trim()&&c.split(" ")).length<=2?(c.includes("top")&&e.push(" top-1 "),c.includes("right")&&e.push(" right-1 "),c.includes("left")&&e.push(" left-1 "),c.includes("bottom")&&e.push(" bottom-1"),e.join("")):void 0};return Object(n.jsx)("div",{className:"flex flex-col h-auto w-auto",children:Object(n.jsxs)("div",{className:"rounded-full relative ",children:[s&&(l&&Object(n.jsx)("span",{className:"w-4 h-4  rounded-full border-3 bg-gray-300  border-white absolute flex items-center justify-center ".concat(y()),children:Object(n.jsx)("img",{src:l,className:"h-full w-full max-w-max"})})||!l&&Object(n.jsx)("span",{className:"w-4 h-4  rounded-full border-3  border-white   absolute ".concat(y()),style:{backgroundColor:N}})),Object(n.jsx)("img",{src:f,width:b,height:g,className:"max-w-max object-cover"})]})})}},pNF3:function(e,t,a){"use strict";a.r(t);var n=a("nKUr"),r=a("q1tI"),o=a("MvPf");var s=function(e){var t=e.children,a=e.href,o=e.removable,s=e.position,c=e.rounded,i=e.color,l=Object(r.useState)(""),d=l[0],u=l[1],b=Object(r.useState)(!0),m=b[0],j=b[1],g=Object(r.useState)(""),h=g[0],x=g[1];Object(r.useEffect)((function(){f(),p()}),[]);var f=function(){u(a?"cursor-pointer hover:bg-gray-200":"cursor-default")},p=function(){console.log("enyer"),x("standard"===(!i||i)?"":"black"===i?"white":"black"),console.log(h)};return Object(n.jsx)("div",{children:m&&Object(n.jsxs)("button",{class:"text-sm font-medium inline-flex items-center justify-center py-1 px-2  rounded  text-gray-600 bg-gray-100  focus:outline-none  ".concat(o?"hover:text-red-400 pointer-events-none hover:bg-red-100 ":""," , ").concat(o&&a?"hover:text-gray-500 pointer-events-auto":""," ").concat(c?" rounded-3xl":"rounded-sm"," ")+d,style:{backgroundColor:i||"",color:h||""},children:[Object(n.jsx)("a",{href:a,className:" flex items-center justify-center gap-1 ".concat(a?"hover:underline text-blue-500 ":"no-underline"," ").concat(s&&"before"!==s?"flex-row-reverse":"flex-row"),style:{color:h||""},children:t}),o&&Object(n.jsx)("button",{className:"text-sm leading-none px-1 focus:outline-none pointer-events-auto hover:text-gray-500",onClick:function(){return j(!1)},children:"\xd7"})]})})},c=a("Qe+f"),i=a("8ANA");t.default=function(){return Object(n.jsxs)("div",{className:"flex flex-col  w-full flex-start",children:[Object(n.jsx)(o.a,{title:"Tag",description:"A tag labels UI objects for quick recognition and navigation."}),Object(n.jsxs)("section",{children:[Object(n.jsx)(o.a,{subTitle:"Default",subDescription:"The default form of a tag, where text is required. Tags with static text can be used as a flag or as a reference to an object or attribute. "}),Object(n.jsx)("div",{className:"py-2",children:Object(n.jsx)(s,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dolore recusandae quo obcaecati sapiente rerum reprehenderit, odio, suscipit soluta inventore illo dolorum architecto amet pariatur eum quod eos! Odit, deleniti!"})}),Object(n.jsx)("div",{className:"w-full pt-3",children:Object(n.jsx)(c.a,{code:"  \n    import React from 'react';\n    import { Tag } from '@neoKit/tag';\n    const TagExample = () => {\n        return (\n          <Tag> Tag </Tag>\n        );\n      };\n      \n      export default TagExample;"})})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)(o.a,{subTitle:"Tag link",subDescription:" A tag with an href can link to more information on the tagged item. "}),Object(n.jsx)("div",{className:"py-2",children:Object(n.jsx)(s,{href:"/home",children:"Tag link"})}),Object(n.jsx)("div",{className:"w-full pt-3",children:Object(n.jsx)(c.a,{code:"\n  import React from 'react';\n  import { Tag } from '@neoKit/tag';\n  const TagLinkExample = () => {\n      return (\n        <Tag href=\"/home\"> Tag link</Tag>\n      );\n    };\n    export default TagLinkExample;"})})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)(o.a,{subTitle:"Removable",subDescription:'Once a tag has been removed, it cannot be re-rendered. Removable tags are visible in "edit" mode or in multi-select controls. '}),Object(n.jsx)("div",{className:"py-2 h-8",children:Object(n.jsx)(s,{removable:!0,children:"Removable tag"})}),Object(n.jsx)("div",{className:"w-full pt-3",children:Object(n.jsx)(c.a,{code:"\n    import React from 'react';\n    import { Tag } from '@neoKit/tag';\n    const RemovableTagExample = () => {\n        return (\n          <Tag removable> Removable tag </Tag>\n        );\n      };\n      export default RemovableTagExample;"})})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)(o.a,{subTitle:"Removable link",subDescription:"A removable tag with an href can link to more information."}),Object(n.jsx)("div",{className:"py-2 h-8",children:Object(n.jsx)(s,{removable:!0,href:"/",children:"Removable tag link"})}),Object(n.jsx)("div",{className:"w-full pt-3",children:Object(n.jsx)(c.a,{code:"\n      import React from 'react';\n      import { Tag } from '@neoKit/tag';\n      const removableTagLinkLnkExample = () => {\n          return (\n            <Tag removable href=\"/\"> Removable tag </Tag>\n          );\n        };\n        export default removableTagLinkLnkExample;"})})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)(o.a,{subTitle:"Rounded",subDescription:"Rounded tags with an avatar are used to add or remove people in multi-select controls."}),Object(n.jsx)("div",{className:"py-2 h-8",children:Object(n.jsxs)(s,{removable:!0,position:"after",rounded:!0,children:[Object(n.jsx)(i.a,{width:20,height:20,path:"assets/avatar.svg"}),"Removable tag link"]})}),Object(n.jsx)("div",{className:"w-full pt-3",children:Object(n.jsx)(c.a,{code:"\n        import React from 'react';\n        import { Tag } from '@neoKit/tag';\n        import { Avatar } from '@neoKit/avatar';\n        const removableRoundedTagExample = () => {\n            return (\n                <Tags removable position=\"after\" rounded >\n                <Avatars width={20} height={20} path={\"assets/avatar.svg\"} /> \n       Removable tag link</Tags>\n            );\n          };\n          export default removableRoundedTagExample;"})})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)(o.a,{subTitle:"Rounded link          ",subDescription:"A rounded tag with an avatar can link to more information."}),Object(n.jsx)("div",{className:"py-2 h-8",children:Object(n.jsxs)(s,{removable:!0,position:"after",rounded:!0,href:"/",children:[Object(n.jsx)(i.a,{width:20,height:20,path:"assets/avatar.svg"}),"Removable tag link"]})}),Object(n.jsx)("div",{className:"w-full pt-3",children:Object(n.jsx)(c.a,{code:"\n          import React from 'react';\n          import { Tag } from '@neoKit/tag';\n          import { Avatar } from '@neoKit/avatar';\n          const removableRoundedTagExample = () => {\n              return (\n                  <Tags removable position=\"after\" rounded >\n                  <Avatars width={20} height={20} path={\"assets/avatar.svg\"}  href=\"/\" /> \n         Removable tag link</Tags>\n              );\n            };\n            export default removableRoundedTagExample;"})})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)(o.a,{subTitle:"Color",subDescription:"The color theme for background and text. "}),Object(n.jsxs)("div",{className:"py-2 h-8 flex gap-2",children:[Object(n.jsx)(s,{color:"standard",children:" standard Tag"}),Object(n.jsxs)(s,{color:"green",href:"/",children:[" ","Green Tag"]}),Object(n.jsx)(s,{color:"teal",children:" Teal Tag"}),Object(n.jsx)(s,{color:"black",children:" Black Tag"})]}),Object(n.jsx)("div",{className:"w-full pt-3",children:Object(n.jsx)(c.a,{code:"\n            import React from 'react';\n            import { Tag } from '@neoKit/tag';\n            const colorsTagLinkExample = () => {\n                return (\n                    <div>\n                    <Tags color='standard'> standard Tag</Tags>\n                    <Tags color='green' href=\"/\"> Green Tag</Tags>\n                    <Tags color='teal' > Teal Tag</Tags>\n                    <Tags color='black'> Black Tag</Tags>\n                    </div>\n                   \n                );\n              };\n              export default colorsTagLinkExample;"})})]})]})}}},[["2HvE",0,1,2,3]]]);