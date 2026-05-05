import{j as t}from"./jsx-runtime-u17CrQMm.js";import{i,c as o}from"./index-Bi8qpGUj.js";import{R as d}from"./ratioClassNameResolver-haYHnPzV.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";class u{prepareClasses=e=>({...i.resolve(d).prepareClasses({ratio:e.ratio})})}const g=({key:r,children:e,ratio:a,width:l,className:c,title:m,...n})=>{const p=i.resolve(u).prepareClasses({ratio:a});return t.jsx("figure",{style:{width:l},className:o("image",p),children:t.jsx("iframe",{title:m??"Untitled Video",className:o("has-ratio",c),...n,children:e})},r)},{fn:C}=__STORYBOOK_MODULE_TEST__,R={title:"Bulma/Elements/Video",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:C()}},s={args:{src:"https://www.youtube.com/embed/YE7VzlLtp-4",width:"400px"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.youtube.com/embed/YE7VzlLtp-4',
    width: '400px'
  }
}`,...s.parameters?.docs?.source}}};const h=["Primary"];export{s as Primary,h as __namedExportsOrder,R as default};
