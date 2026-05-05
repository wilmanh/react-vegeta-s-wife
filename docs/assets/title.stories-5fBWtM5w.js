import{j as e}from"./jsx-runtime-u17CrQMm.js";import{a,b as n}from"./argSpaced-B3MX9ed7.js";import{A as l}from"./sizes-pK9ilt6j.js";import{T as i}from"./title-BhUUgLBK.js";import"./index-Bi8qpGUj.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";import"./headingClassNameResolver-BFjv7ODl.js";import"./element-DVQbf_BR.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,g={title:"Bulma/Elements/Headings/Title",component:i,decorators:s=>e.jsx("div",{className:"theme-light",children:e.jsx(s,{})}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"select",options:["p","h1","h2","h3","h4","h5","h6"]},...n,...a},args:{onClick:c()}},r={args:{children:"Title 1",hSize:l[0]}},t={render:()=>e.jsxs("div",{children:[e.jsx(i,{spaced:!0,hSize:1,children:"Title 1"}),e.jsx(i,{spaced:!0,hSize:2,children:"Title 2"}),e.jsx(i,{spaced:!0,hSize:3,children:"Title 3"}),e.jsx(i,{spaced:!0,hSize:4,children:"Title 4"}),e.jsx(i,{spaced:!0,hSize:5,children:"Title 5"}),e.jsx(i,{spaced:!0,hSize:6,children:"Title 6"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Title 1',
    hSize: ArrayOfHeadingSizes[0]
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Title spaced hSize={1}>
        Title 1
      </Title>
      <Title spaced hSize={2}>
        Title 2
      </Title>
      <Title spaced hSize={3}>
        Title 3
      </Title>
      <Title spaced hSize={4}>
        Title 4
      </Title>
      <Title spaced hSize={5}>
        Title 5
      </Title>
      <Title spaced hSize={6}>
        Title 6
      </Title>
    </div>
}`,...t.parameters?.docs?.source}}};const x=["Primary","Titles"];export{r as Primary,t as Titles,x as __namedExportsOrder,g as default};
