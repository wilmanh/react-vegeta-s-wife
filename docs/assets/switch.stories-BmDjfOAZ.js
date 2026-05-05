import{j as e}from"./jsx-runtime-u17CrQMm.js";import{b as F}from"./argColors-B6cMnwwl.js";import{b as k}from"./argSizes-Ban4xGOr.js";import{F as s}from"./field-CSjFoNiE.js";import{i as d,c as t}from"./index-Bi8qpGUj.js";import{I as f}from"./inputClassNameResolver-gtlj6s6S.js";import{R as y}from"./roundedClassNameResolver-T9nZQFSr.js";import{S as b}from"./styleClassNameResolver-B6lYuz0n.js";import{E as R}from"./element-DVQbf_BR.js";import"./sizes-pK9ilt6j.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";import"./colorClassNameResolver-Dzgf_lzU.js";import"./sizeClassNameResolver-CHrYS43U.js";import"./stateClassNameResolver-DojVhQ0T.js";const n=({className:r,color:m,isRounded:u,inputSize:h,outlined:p,children:S,...g})=>{const l=d.resolve(f),x=d.resolve(b),j=d.resolve(y),w=R;return e.jsxs("label",{className:t("switch",x.prepareClasses({outlined:p}),j.prepareClasses({isRounded:u}),l.prepareClasses({size:h})),children:[e.jsx(w,{...g,className:t(r),as:"input",type:"checkbox"}),e.jsx("span",{className:t("check",l.prepareClasses({color:m}))}),e.jsx("span",{className:"control-label",children:S})]})},T={title:"Bulma/Form/Switch",component:n,decorators:r=>e.jsx("div",{style:{padding:"1rem"},className:"theme-dark",children:e.jsx(r,{})}),parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{...k,...F}},i={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(n,{...r,name:"radiostorybook",children:"Selected"})}),e.jsx(s,{children:e.jsx(n,{...r,isRounded:!0,name:"radiostorybook",children:"Unselected"})})]})},c={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(n,{...r,name:"radiostorybook2",inputSize:"small",children:"Small"})}),e.jsx(s,{children:e.jsx(n,{...r,name:"radiostorybook2",children:"Default"})}),e.jsx(s,{children:e.jsx(n,{...r,name:"radiostorybook2",inputSize:"medium",children:"Medium"})}),e.jsx(s,{children:e.jsx(n,{...r,name:"radiostorybook2",inputSize:"large",children:"Large"})})]})},o={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(n,{...r,checked:!0,name:"default",children:"Small"})}),e.jsx(s,{children:e.jsx(n,{...r,checked:!0,name:"info",color:"info",children:"Default"})}),e.jsx(s,{children:e.jsx(n,{...r,checked:!0,name:"succcess",color:"success",children:"Medium"})}),e.jsx(s,{children:e.jsx(n,{...r,isRounded:!0,checked:!0,name:"warning",color:"warning",children:"Large"})}),e.jsx(s,{children:e.jsx(n,{...r,isRounded:!0,checked:!0,name:"danger",color:"danger",children:"Large"})})]})},a={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(n,{outlined:!0,...r,checked:!0,name:"default",children:"Small"})}),e.jsx(s,{children:e.jsx(n,{outlined:!0,...r,checked:!0,name:"info",color:"info",children:"Default"})}),e.jsx(s,{children:e.jsx(n,{outlined:!0,...r,checked:!0,name:"succcess",color:"success",children:"Medium"})}),e.jsx(s,{children:e.jsx(n,{outlined:!0,isRounded:!0,...r,checked:!0,name:"warning",color:"warning",children:"Large"})}),e.jsx(s,{children:e.jsx(n,{outlined:!0,isRounded:!0,...r,checked:!0,name:"danger",color:"danger",children:"Large"})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <>
      <Field>
        <Switch {...args} name='radiostorybook'>
          Selected
        </Switch>
      </Field>
      <Field>
        <Switch {...args} isRounded name='radiostorybook'>
          Unselected
        </Switch>
      </Field>
    </>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <>
      <Field>
        <Switch {...args} name='radiostorybook2' inputSize='small'>
          Small
        </Switch>
      </Field>
      <Field>
        <Switch {...args} name='radiostorybook2'>
          Default
        </Switch>
      </Field>
      <Field>
        <Switch {...args} name='radiostorybook2' inputSize='medium'>
          Medium
        </Switch>
      </Field>
      <Field>
        <Switch {...args} name='radiostorybook2' inputSize='large'>
          Large
        </Switch>
      </Field>
    </>
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <>
      <Field>
        <Switch {...args} checked={true} name='default'>
          Small
        </Switch>
      </Field>
      <Field>
        <Switch {...args} checked={true} name='info' color='info'>
          Default
        </Switch>
      </Field>
      <Field>
        <Switch {...args} checked={true} name='succcess' color='success'>
          Medium
        </Switch>
      </Field>
      <Field>
        <Switch {...args} isRounded checked={true} name='warning' color='warning'>
          Large
        </Switch>
      </Field>
      <Field>
        <Switch {...args} isRounded checked={true} name='danger' color='danger'>
          Large
        </Switch>
      </Field>
    </>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <>
      <Field>
        <Switch outlined {...args} checked={true} name='default'>
          Small
        </Switch>
      </Field>
      <Field>
        <Switch outlined {...args} checked={true} name='info' color='info'>
          Default
        </Switch>
      </Field>
      <Field>
        <Switch outlined {...args} checked={true} name='succcess' color='success'>
          Medium
        </Switch>
      </Field>
      <Field>
        <Switch outlined isRounded {...args} checked={true} name='warning' color='warning'>
          Large
        </Switch>
      </Field>
      <Field>
        <Switch outlined isRounded {...args} checked={true} name='danger' color='danger'>
          Large
        </Switch>
      </Field>
    </>
}`,...a.parameters?.docs?.source}}};const $=["Primary","Sizes","Colors","Outlined"];export{o as Colors,a as Outlined,i as Primary,c as Sizes,$ as __namedExportsOrder,T as default};
