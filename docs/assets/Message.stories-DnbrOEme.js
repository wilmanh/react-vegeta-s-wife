import{j as e}from"./jsx-runtime-u17CrQMm.js";import{b as h}from"./argColors-B6cMnwwl.js";import{a as x}from"./argLightness-Cvewibtz.js";import{a as v}from"./argSizes-Ban4xGOr.js";import{i as l,c as j}from"./index-Bi8qpGUj.js";import{C}from"./colorClassNameResolver-Dzgf_lzU.js";import{S as q}from"./sizeClassNameResolver-CHrYS43U.js";import{E as o}from"./element-DVQbf_BR.js";import{D}from"./delete-CTS8DanW.js";import"./sizes-pK9ilt6j.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";const M=({children:s,color:a,light:r,dark:c,size:m,className:u,...d})=>{const p=l.resolve(q).prepareClasses({size:m}),g=l.resolve(C).prepareClasses({color:a,light:r,dark:c}),f=o;return e.jsx(f,{className:j(u,g,p),nameOf:"message",as:"article",...d,children:s})},n=({children:s,...a})=>{const r=o;return e.jsx(r,{nameOf:"message-body",as:"div",...a,children:s})},E=({children:s,...a})=>{const r=o;return e.jsx(r,{nameOf:"message-header",as:"div",...a,children:s})},W={title:"Bulma/Components/Message",component:M,decorators:s=>e.jsx("div",{className:"theme-light",children:e.jsx(s,{})}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...h,...v,...x}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:[e.jsx("p",{children:"Hello World"}),e.jsx(D,{})]}),e.jsxs(n,{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.jsx("strong",{children:"Pellentesque risus mi"}),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ",e.jsx("a",{children:"felis venenatis"})," efficitur. Aenean ac",e.jsx("em",{children:"eleifend lacus"}),", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."]})]})}},i={args:{children:e.jsxs(n,{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.jsx("strong",{children:"Pellentesque risus mi"}),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ",e.jsx("a",{children:"felis venenatis"})," efficitur. Aenean ac",e.jsx("em",{children:"eleifend lacus"}),", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <MessageHeader>
          <p>Hello World</p>
          <Delete />
        </MessageHeader>
        <MessageBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </MessageBody>
      </>
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <MessageBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
        nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
        <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
        sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
        a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </MessageBody>
  }
}`,...i.parameters?.docs?.source}}};const _=["Example","Headless"];export{t as Example,i as Headless,_ as __namedExportsOrder,W as default};
