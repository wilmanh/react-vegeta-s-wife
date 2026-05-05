import{j as e}from"./jsx-runtime-u17CrQMm.js";import{b as d}from"./argColors-B6cMnwwl.js";import{a as t}from"./argSizes-Ban4xGOr.js";import{F as s}from"./field-eLWXzYE2.js";import{T as a}from"./textarea-DSNgNNJ-.js";import"./sizes-pK9ilt6j.js";import"./index-4Zh_KXMq.js";import"./iframe-jP6eckoW.js";import"./preload-helper-PPVm8Dsz.js";import"./element-rpMEa1yt.js";import"./inputClassNameResolver-CHlRW4Au.js";import"./colorClassNameResolver-Dzgf_lzU.js";import"./sizeClassNameResolver-CHrYS43U.js";import"./stateClassNameResolver-DojVhQ0T.js";const S={title:"Bulma/Form/Textarea",component:a,decorators:r=>e.jsx("div",{style:{padding:"1rem"},className:"theme-light",children:e.jsx(r,{})}),parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{...t,...d}},l={args:{hover:!1,focus:!1,fixed:!1,rows:4,disabled:!1,value:"",placeholder:"Type something..."}},o={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(a,{...r,value:"default"})}),e.jsx(s,{children:e.jsx(a,{...r,value:"info",color:"info"})}),e.jsx(s,{children:e.jsx(a,{...r,value:"succcess",color:"success"})}),e.jsx(s,{children:e.jsx(a,{...r,value:"warning",color:"warning"})}),e.jsx(s,{children:e.jsx(a,{...r,value:"danger",color:"danger"})})]})},n={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(a,{...r,value:"small",size:"small"})}),e.jsx(s,{children:e.jsx(a,{...r,value:"default"})}),e.jsx(s,{children:e.jsx(a,{...r,value:"medium",size:"medium"})}),e.jsx(s,{children:e.jsx(a,{...r,value:"large",size:"large"})})]})},i={render:r=>e.jsx(s,{children:e.jsx(a,{...r,disabled:!0,value:"loading"})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    hover: false,
    focus: false,
    fixed: false,
    rows: 4,
    disabled: false,
    value: '',
    placeholder: 'Type something...'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: object) => <>
      <Field>
        <Textarea {...args} value='default' />
      </Field>
      <Field>
        <Textarea {...args} value='info' color='info' />
      </Field>
      <Field>
        <Textarea {...args} value='succcess' color='success' />
      </Field>
      <Field>
        <Textarea {...args} value='warning' color='warning' />
      </Field>
      <Field>
        <Textarea {...args} value='danger' color='danger' />
      </Field>
    </>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: object) => <>
      <Field>
        <Textarea {...args} value='small' size='small' />
      </Field>
      <Field>
        <Textarea {...args} value='default' />
      </Field>
      <Field>
        <Textarea {...args} value='medium' size='medium' />
      </Field>
      <Field>
        <Textarea {...args} value='large' size='large' />
      </Field>
    </>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: object) => <Field>
      <Textarea {...args} disabled value='loading' />
    </Field>
}`,...i.parameters?.docs?.source}}};const w=["Example","Colors","Sizes","Loading"];export{o as Colors,l as Example,i as Loading,n as Sizes,w as __namedExportsOrder,S as default};
