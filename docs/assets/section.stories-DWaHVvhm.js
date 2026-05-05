import{j as e}from"./jsx-runtime-u17CrQMm.js";import{H as l}from"./hero.body-Cd6mgXlB.js";import{T as a}from"./title-BhUUgLBK.js";import{S as c}from"./subtitle-cvI5KCPq.js";import{i as p,c as g}from"./index-Bi8qpGUj.js";import{E as h}from"./element-DVQbf_BR.js";import"./headingClassNameResolver-BFjv7ODl.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";class y{prepareClasses=i=>{const{size:s}=i;return{[`is-${s}`]:s}}}const x=({size:r,children:i,className:s,...d})=>{const m=h,u=p.resolve(y);return e.jsx(m,{className:g(s,u.prepareClasses({size:r})),nameOf:"section",as:"section",...d,children:i})},{fn:S}=__STORYBOOK_MODULE_TEST__,A={title:"Bulma/Layout/Section",component:x,decorators:r=>e.jsx("div",{className:"theme-light",children:e.jsx(r,{})}),tags:["autodocs"],args:{onClick:S()}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Section"}),e.jsxs(c,{children:["A simple container to divide your page into ",e.jsx("strong",{children:"sections"}),", like the one you're currently reading."]})]})}},t={args:{size:"medium",children:e.jsxs(l,{children:[e.jsx(a,{children:"Medium section"}),e.jsxs(c,{children:["A simple container to divide your page into ",e.jsx("strong",{children:"sections"}),", like the one you're currently reading."]})]})}},o={args:{size:"large",children:e.jsxs(l,{children:[e.jsx(a,{children:"Large section"}),e.jsxs(c,{children:["A simple container to divide your page into ",e.jsx("strong",{children:"sections"}),", like the one you're currently reading."]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Title>Section</Title>
        <Subtitle>
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </Subtitle>
      </>
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    children: <HeroBody>
        <Title>Medium section</Title>
        <Subtitle>
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </Subtitle>
      </HeroBody>
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: <HeroBody>
        <Title>Large section</Title>
        <Subtitle>
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </Subtitle>
      </HeroBody>
  }
}`,...o.parameters?.docs?.source}}};const H=["Default","Medium","Large"];export{n as Default,o as Large,t as Medium,H as __namedExportsOrder,A as default};
