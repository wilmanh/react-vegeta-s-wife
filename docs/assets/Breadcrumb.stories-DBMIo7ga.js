import{j as r}from"./jsx-runtime-u17CrQMm.js";import{G as g}from"./index-D3jDu19M.js";import{i as v,c as D}from"./index-Bi8qpGUj.js";import{E as H}from"./element-DVQbf_BR.js";import{S as f}from"./sizeClassNameResolver-CHrYS43U.js";import{S as B}from"./stateClassNameResolver-DojVhQ0T.js";import{I as j}from"./icon-C3JfGt5c.js";import"./iconBase-Cf9QxpcK.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";class z{prepareClasses=a=>{const{size:c,position:s,separator:o}=a;return{...v.resolve(f).prepareClasses({size:c}),[`is-${s}`]:s!=="left"?s:!1,[`has-${o}-separator`]:o}}}const I=({children:n,position:a,separator:c,size:s,className:o,...h})=>{const b=v.resolve(z),x=H,S=b.prepareClasses({position:a,separator:c,size:s});return r.jsx(x,{"aria-label":"breadcrumbs",nameOf:"breadcrumb",as:"nav",className:D(o,S),...h,children:r.jsx("ul",{children:n})})},e=({children:n,active:a,href:c,className:s,...o})=>{const b=v.resolve(B).prepareClasses({active:a}),x=H;return r.jsx(x,{nameOf:"",as:"li",className:D(s,b),...o,children:r.jsx("a",{"aria-current":a?"page":void 0,href:c??"#",children:n})})},{fn:R}=__STORYBOOK_MODULE_TEST__,y={title:"Bulma/Components/Breadcrumbs",component:I,decorators:n=>r.jsx("div",{className:"theme-light",children:r.jsx(n,{})}),tags:["autodocs"],argTypes:{as:{options:["div","section"]}},args:{onClick:R()}},t={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Home"}),r.jsx(e,{children:"Docs"}),r.jsx(e,{active:!0,children:"Components"})]})}},m={args:{position:"centered",children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Home"}),r.jsx(e,{children:"Docs"}),r.jsx(e,{active:!0,children:"Components"})]})}},i={args:{position:"right",children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Home"}),r.jsx(e,{children:"Docs"}),r.jsx(e,{active:!0,children:"Components"})]})}},l={args:{children:r.jsxs(r.Fragment,{children:[r.jsxs(e,{children:[r.jsx(j,{size:"small",textColor:"danger",children:r.jsx(g,{"aria-hidden":"true"})}),r.jsx("span",{children:"Home"})]}),r.jsxs(e,{children:[r.jsx(j,{size:"small",textColor:"danger",children:r.jsx(g,{"aria-hidden":"true"})}),r.jsx("span",{children:"Docs"})]}),r.jsxs(e,{active:!0,children:[r.jsx(j,{size:"small",textColor:"danger",children:r.jsx(g,{"aria-hidden":"true"})}),r.jsx("span",{children:"Components"})]})]})}},d={args:{separator:"arrow",children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Home"}),r.jsx(e,{children:"Docs"}),r.jsx(e,{active:!0,children:"Components"})]})}},u={args:{separator:"bullet",children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Home"}),r.jsx(e,{children:"Docs"}),r.jsx(e,{active:!0,children:"Components"})]})}},p={args:{separator:"dot",children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Home"}),r.jsx(e,{children:"Docs"}),r.jsx(e,{active:!0,children:"Components"})]})}},C={args:{separator:"succeeds",children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Home"}),r.jsx(e,{children:"Docs"}),r.jsx(e,{active:!0,children:"Components"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Crumb>Home</Crumb>
        <Crumb>Docs</Crumb>
        <Crumb active>Components</Crumb>
      </>
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'centered',
    children: <>
        <Crumb>Home</Crumb>
        <Crumb>Docs</Crumb>
        <Crumb active>Components</Crumb>
      </>
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'right',
    children: <>
        <Crumb>Home</Crumb>
        <Crumb>Docs</Crumb>
        <Crumb active>Components</Crumb>
      </>
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Crumb>
          <Icon size='small' textColor='danger'>
            <GrBug aria-hidden='true' />
          </Icon>
          <span>Home</span>
        </Crumb>
        <Crumb>
          <Icon size='small' textColor='danger'>
            <GrBug aria-hidden='true' />
          </Icon>
          <span>Docs</span>
        </Crumb>
        <Crumb active>
          <Icon size='small' textColor='danger'>
            <GrBug aria-hidden='true' />
          </Icon>
          <span>Components</span>
        </Crumb>
      </>
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    separator: 'arrow',
    children: <>
        <Crumb>Home</Crumb>
        <Crumb>Docs</Crumb>
        <Crumb active>Components</Crumb>
      </>
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    separator: 'bullet',
    children: <>
        <Crumb>Home</Crumb>
        <Crumb>Docs</Crumb>
        <Crumb active>Components</Crumb>
      </>
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    separator: 'dot',
    children: <>
        <Crumb>Home</Crumb>
        <Crumb>Docs</Crumb>
        <Crumb active>Components</Crumb>
      </>
  }
}`,...p.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    separator: 'succeeds',
    children: <>
        <Crumb>Home</Crumb>
        <Crumb>Docs</Crumb>
        <Crumb active>Components</Crumb>
      </>
  }
}`,...C.parameters?.docs?.source}}};const P=["Primary","AlignmentCenter","AlignmentRight","Icons","separatorsArrow","separatorsBullet","separatorsDot","separatorsSucceeds"];export{m as AlignmentCenter,i as AlignmentRight,l as Icons,t as Primary,P as __namedExportsOrder,y as default,d as separatorsArrow,u as separatorsBullet,p as separatorsDot,C as separatorsSucceeds};
