import{j as e}from"./jsx-runtime-u17CrQMm.js";import{b as T}from"./argColors-B6cMnwwl.js";import{a as E}from"./argSizes-Ban4xGOr.js";import{F as a}from"./field-CSjFoNiE.js";import{i as u,c as R}from"./index-Bi8qpGUj.js";import{a as B}from"./index-D3jDu19M.js";import{E as W}from"./element-DVQbf_BR.js";import{C as y}from"./colorClassNameResolver-Dzgf_lzU.js";import{F as A}from"./fullwidthClassNameResolver-C6QnhJIm.js";import{S as O}from"./sizeClassNameResolver-CHrYS43U.js";import"./sizes-pK9ilt6j.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";import"./iconBase-Cf9QxpcK.js";class P{prepareClasses=g=>{const{name:n,right:x,centered:h,boxed:f,fullwidth:F,color:j,dark:C,light:b,inputSize:S}=g,w=u.resolve(A),z=u.resolve(y),N=u.resolve(O);return{"has-name":n,"is-right":x,"is-centered":h,"is-boxed":f,...w.prepareClasses({fullwidth:F}),...N.prepareClasses({size:S}),...z.prepareClasses({color:j,dark:C,light:b})}}}const r=({className:s,label:g,name:n,color:x,inputSize:h,centered:f,right:F,boxed:j,icon:C,fullwidth:b,dark:S,light:w,...z})=>{const N=u.resolve(P),v=W;return e.jsx("div",{className:R(s,"file",N.prepareClasses({color:x,inputSize:h,dark:S,light:w,fullwidth:b,name:n,right:F,centered:f,boxed:j})),children:e.jsxs("label",{className:"file-label",children:[e.jsx(v,{nameOf:"file-input",as:"input",...z,name:n??"file",type:"file"}),e.jsxs("span",{className:"file-cta",children:[e.jsx("span",{className:"file-icon",children:C??e.jsx(B,{})}),e.jsx("span",{className:"file-label",children:g??"Choose a file..."})]}),n?e.jsx("span",{className:"file-name",children:n}):null]})})},V={title:"Bulma/Form/File",component:r,decorators:s=>e.jsx("div",{style:{padding:"1rem"},className:"theme-light",children:e.jsx(s,{})}),parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{...E,...T}},l={args:{label:"Choose a file..."}},o={args:{label:"Choose a file...",name:"Testing.txt"}},i={args:{label:"Choose a file...",name:"Testing.txt",right:!0}},t={args:{label:"Choose a file...",name:"Testing.txt",fullwidth:!0}},c={args:{label:"Choose a file...",boxed:!0}},m={args:{label:"Choose a file...",boxed:!0,name:"Testing.txt"}},d={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx(r,{...s,name:"default"})}),e.jsx(a,{children:e.jsx(r,{...s,boxed:!0,name:"info",color:"info"})}),e.jsx(a,{children:e.jsx(r,{...s,name:"succcess",color:"success"})}),e.jsx(a,{children:e.jsx(r,{...s,name:"warning",color:"warning"})}),e.jsx(a,{children:e.jsx(r,{...s,name:"danger",color:"danger"})})]})},p={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx(r,{...s,name:"default",inputSize:"small"})}),e.jsx(a,{children:e.jsx(r,{...s,name:"warning"})}),e.jsx(a,{children:e.jsx(r,{...s,name:"warning",inputSize:"medium"})}),e.jsx(a,{children:e.jsx(r,{...s,name:"danger",inputSize:"large"})}),e.jsx(a,{children:e.jsx(r,{...s,boxed:!0,name:"info",inputSize:"large"})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose a file...'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose a file...',
    name: 'Testing.txt'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose a file...',
    name: 'Testing.txt',
    right: true
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose a file...',
    name: 'Testing.txt',
    fullwidth: true
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose a file...',
    boxed: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose a file...',
    boxed: true,
    name: 'Testing.txt'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <>
      <Field>
        <File {...args} name='default' />
      </Field>
      <Field>
        <File {...args} boxed name='info' color='info' />
      </Field>
      <Field>
        <File {...args} name='succcess' color='success' />
      </Field>
      <Field>
        <File {...args} name='warning' color='warning' />
      </Field>
      <Field>
        <File {...args} name='danger' color='danger' />
      </Field>
    </>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <>
      <Field>
        <File {...args} name='default' inputSize={'small'} />
      </Field>
      <Field>
        <File {...args} name='warning' />
      </Field>
      <Field>
        <File {...args} name='warning' inputSize={'medium'} />
      </Field>
      <Field>
        <File {...args} name='danger' inputSize={'large'} />
      </Field>
      <Field>
        <File {...args} boxed name='info' inputSize={'large'} />
      </Field>
    </>
}`,...p.parameters?.docs?.source}}};const X=["Example","WithName","Right","Fullwidth","Boxed","BoxedWithName","Colors","Sizes"];export{c as Boxed,m as BoxedWithName,d as Colors,l as Example,t as Fullwidth,i as Right,p as Sizes,o as WithName,X as __namedExportsOrder,V as default};
