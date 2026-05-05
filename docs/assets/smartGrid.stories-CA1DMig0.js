import{j as r}from"./jsx-runtime-u17CrQMm.js";import{G as l,C as t}from"./cell-BJoaV29E.js";import"./index-Bi8qpGUj.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";import"./element-DVQbf_BR.js";const o=(e,a=1)=>Array.from({length:e},(i,c)=>c+a),g={title:"Bulma/Frame/Grid/Smart",component:l,decorators:e=>r.jsx("div",{className:"theme-light",children:r.jsx(e,{})}),tags:["autodocs"],argTypes:{columnSize:{control:"select",options:o(32)},gap:{control:"select",options:o(9,0)},columnGap:{control:"select",options:o(9,0)},rowGap:{control:"select",options:o(9,0)}}},n=o(24),s={args:{children:r.jsx(r.Fragment,{children:n.map(e=>r.jsx(t,{children:r.jsx("p",{className:"bd-notification is-primary",children:r.jsxs("code",{children:["Cell ",e]})})},`cell-${e}`))})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        {cellsArray.map(cell => <Cell key={\`cell-\${cell}\`}>
            <p className='bd-notification is-primary'>
              <code>Cell {cell}</code>
            </p>
          </Cell>)}
      </>
  }
}`,...s.parameters?.docs?.source}}};const j=["Basics"];export{s as Basics,j as __namedExportsOrder,g as default};
