import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as a}from"./sizes-pK9ilt6j.js";import{a as n,b as l}from"./argSpaced-B3MX9ed7.js";import{S as t}from"./subtitle-cvI5KCPq.js";import"./index-Bi8qpGUj.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";import"./headingClassNameResolver-BFjv7ODl.js";import"./element-DVQbf_BR.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,g={title:"Bulma/Elements/Headings/Subtitle",component:t,decorators:s=>e.jsx("div",{className:"theme-light",children:e.jsx(s,{})}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"select",options:["p","h1","h2","h3","h4","h5","h6"]},...l,...n},args:{onClick:S()}},r={args:{children:"Title 1",hSize:a[0]}},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{spaced:!0,hSize:1,children:"Subtitle 1"}),e.jsx(t,{spaced:!0,hSize:2,children:"Subtitle 2"}),e.jsx(t,{spaced:!0,hSize:3,children:"Subtitle 3"}),e.jsx(t,{spaced:!0,hSize:4,children:"Subtitle 4"}),e.jsx(t,{spaced:!0,hSize:5,children:"Subtitle 5"}),e.jsx(t,{spaced:!0,hSize:6,children:"Subtitle 6"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Title 1',
    hSize: ArrayOfHeadingSizes[0]
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Subtitle spaced hSize={1}>
        Subtitle 1
      </Subtitle>
      <Subtitle spaced hSize={2}>
        Subtitle 2
      </Subtitle>
      <Subtitle spaced hSize={3}>
        Subtitle 3
      </Subtitle>
      <Subtitle spaced hSize={4}>
        Subtitle 4
      </Subtitle>
      <Subtitle spaced hSize={5}>
        Subtitle 5
      </Subtitle>
      <Subtitle spaced hSize={6}>
        Subtitle 6
      </Subtitle>
    </>
}`,...i.parameters?.docs?.source}}};const x=["Primary","Subtitles"];export{r as Primary,i as Subtitles,x as __namedExportsOrder,g as default};
