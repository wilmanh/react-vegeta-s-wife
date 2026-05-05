import{j as l}from"./jsx-runtime-u17CrQMm.js";import{i as n,c as i}from"./index-4Zh_KXMq.js";import{C as p}from"./colorClassNameResolver-Dzgf_lzU.js";import{S as d}from"./sizeClassNameResolver-CHrYS43U.js";import{b as g}from"./argColors-B6cMnwwl.js";import{a as u}from"./argSizes-Ban4xGOr.js";import"./iframe-jP6eckoW.js";import"./preload-helper-PPVm8Dsz.js";import"./sizes-pK9ilt6j.js";class C{prepareClasses=s=>{const o=n.resolve(p),t=n.resolve(d);return{...o.prepareClasses({color:s?.color,dark:s?.dark,light:s?.light}),...t.prepareClasses({size:s?.size})}}}const h=({size:r,children:s,className:o,color:t,...m})=>{const c=n.resolve(C);return l.jsx("progress",{className:i("progress",c.prepareClasses({color:t,size:r}),o),...m,children:s})},{fn:x}=__STORYBOOK_MODULE_TEST__,O={title:"Bulma/Elements/Progress",component:h,decorators:r=>l.jsx("div",{style:{width:"20em"},className:"theme-light",children:l.jsx(r,{})}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...g,...u},args:{onClick:x()}},e={args:{value:"20",max:"100",children:"50%"}},a={args:{style:{width:"20em"},max:"100",children:"50%",color:"primary"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: '20',
    max: '100',
    children: '50%'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      width: '20em'
    },
    max: '100',
    children: '50%',
    color: 'primary'
  }
}`,...a.parameters?.docs?.source}}};const P=["Primary","Indeterminate"];export{a as Indeterminate,e as Primary,P as __namedExportsOrder,O as default};
