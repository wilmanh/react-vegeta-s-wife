import{j as r}from"./jsx-runtime-u17CrQMm.js";import{F as i}from"./fixedGrid-C4xL7pYR.js";import{G as n,C as c}from"./cell-CRhjzc9h.js";import"./index-4Zh_KXMq.js";import"./iframe-jP6eckoW.js";import"./preload-helper-PPVm8Dsz.js";import"./element-rpMEa1yt.js";const o=(e,a=1)=>Array.from({length:e},(m,t)=>(t+a).toString()),g={title:"Bulma/Frame/Grid/Fixed",component:i,decorators:e=>r.jsx("div",{className:"theme-light",children:r.jsx(e,{})}),tags:["autodocs"],argTypes:{columns:{control:"select",options:o(12)},autoCount:{control:"select",options:[!0,!1]}}},l=o(12),s={args:{children:r.jsx(r.Fragment,{children:r.jsx(n,{children:l.map(e=>r.jsx(c,{children:r.jsx("p",{className:"bd-notification is-primary",children:r.jsxs("code",{children:["Cell ",e]})})},e))})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Grid>
          {cellsArray.map(cell => <Cell key={cell}>
              <p className='bd-notification is-primary'>
                <code>Cell {cell}</code>
              </p>
            </Cell>)}
        </Grid>
      </>
  }
}`,...s.parameters?.docs?.source}}};const y=["Basics"];export{s as Basics,y as __namedExportsOrder,g as default};
