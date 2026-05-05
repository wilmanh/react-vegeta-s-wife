import{j as e}from"./jsx-runtime-u17CrQMm.js";import{i as p,c as x}from"./index-Bi8qpGUj.js";import{E as f}from"./element-DVQbf_BR.js";import{B as E}from"./button-CsTjHu3_.js";import{I as b}from"./icon-C3JfGt5c.js";import{G as O}from"./iconBase-Cf9QxpcK.js";import{S as R}from"./stateClassNameResolver-DojVhQ0T.js";import{C as y}from"./colorClassNameResolver-Dzgf_lzU.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";import"./fullwidthClassNameResolver-C6QnhJIm.js";import"./sizeClassNameResolver-CHrYS43U.js";import"./styleClassNameResolver-B6lYuz0n.js";function S(s){return O({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(s)}class B{prepareClasses=i=>{const{active:m,hoverable:l,right:c,up:r}=i;return{...p.resolve(R).prepareClasses({active:m}),"is-down":!r,"is-up":r,"is-right":c,"is-hoverable":l}}}const D=({className:s,hoverable:i,children:m,active:l,title:c,right:r,color:v,light:h,dark:w,up:u,...N})=>{const j=p.resolve(B),g=p.resolve(y),I=j.prepareClasses({active:l,hoverable:i,right:r,up:u}),C=g.prepareClasses({color:v,light:h,dark:w}),a=f;return e.jsxs(a,{className:x(s,I),nameOf:"dropdown",as:"div",...N,children:[e.jsx(a,{nameOf:"dropdown-trigger",as:"div",children:e.jsxs(E,{className:x(C),"aria-haspopup":"true","aria-controls":"testing",children:[e.jsx("span",{children:c}),e.jsx(b,{children:e.jsx(S,{})})]})}),e.jsx(a,{nameOf:"dropdown-menu",role:"menu",as:"div",children:e.jsx(a,{nameOf:"dropdown-content",as:"div",children:m})})]})},k={title:"Bulma/Components/Dropdown",component:D,decorators:s=>e.jsx("div",{style:{height:"10em"},className:"theme-light",children:e.jsx(s,{})}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},t={args:{color:"primary",title:"Content",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-item",children:"Item 1"}),e.jsx("div",{className:"dropdown-item",children:"Item 2"}),e.jsx("div",{className:"dropdown-item",children:"Item 3"})]})}},o={args:{active:!0,title:"Content",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-item",children:"Item 1"}),e.jsx("div",{className:"dropdown-item",children:"Item 2"}),e.jsx("div",{className:"dropdown-item",children:"Item 3"})]})}},n={args:{hoverable:!0,title:"Content",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-item",children:"Item 1"}),e.jsx("div",{className:"dropdown-item",children:"Item 2"}),e.jsx("div",{className:"dropdown-item",children:"Item 3"})]})}},d={args:{hoverable:!0,title:"Content",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-item",children:"Item 1"}),e.jsx("div",{className:"dropdown-item",children:"Item 2"}),e.jsx("div",{className:"dropdown-item",children:"Item 3"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    title: 'Content',
    children: <>
        <div className='dropdown-item'>Item 1</div>
        <div className='dropdown-item'>Item 2</div>
        <div className='dropdown-item'>Item 3</div>
      </>
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    active: true,
    title: 'Content',
    children: <>
        <div className='dropdown-item'>Item 1</div>
        <div className='dropdown-item'>Item 2</div>
        <div className='dropdown-item'>Item 3</div>
      </>
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    hoverable: true,
    title: 'Content',
    children: <>
        <div className='dropdown-item'>Item 1</div>
        <div className='dropdown-item'>Item 2</div>
        <div className='dropdown-item'>Item 3</div>
      </>
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    hoverable: true,
    title: 'Content',
    children: <>
        <div className='dropdown-item'>Item 1</div>
        <div className='dropdown-item'>Item 2</div>
        <div className='dropdown-item'>Item 3</div>
      </>
  }
}`,...d.parameters?.docs?.source}}};const q=["Example","ExampleOpen","ExampleHoverable","ExampleUp"];export{t as Example,n as ExampleHoverable,o as ExampleOpen,d as ExampleUp,q as __namedExportsOrder,k as default};
