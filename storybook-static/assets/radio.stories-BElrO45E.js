import{j as e}from"./jsx-runtime-u17CrQMm.js";import{b as s}from"./argColors-B6cMnwwl.js";import{b as c}from"./argSizes-Ban4xGOr.js";import{F as o}from"./field-eLWXzYE2.js";import{R as n}from"./radio-BMrDgfG8.js";import"./sizes-pK9ilt6j.js";import"./index-4Zh_KXMq.js";import"./iframe-jP6eckoW.js";import"./preload-helper-PPVm8Dsz.js";import"./element-rpMEa1yt.js";import"./inputClassNameResolver-CHlRW4Au.js";import"./colorClassNameResolver-Dzgf_lzU.js";import"./sizeClassNameResolver-CHrYS43U.js";import"./stateClassNameResolver-DojVhQ0T.js";const y={title:"Bulma/Form/Radio",component:n,decorators:r=>e.jsx("div",{style:{padding:"1rem"},className:"theme-dark",children:e.jsx(r,{})}),parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{...c,...s}},a={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx(n,{...r,name:"radiostorybook",children:"Selected"})}),e.jsx(o,{children:e.jsx(n,{...r,name:"radiostorybook",children:"Unselected"})})]})},i={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx(n,{...r,name:"radiostorybook2",inputSize:"small",children:"Small"})}),e.jsx(o,{children:e.jsx(n,{...r,name:"radiostorybook2",children:"Default"})}),e.jsx(o,{children:e.jsx(n,{...r,name:"radiostorybook2",inputSize:"medium",children:"Medium"})}),e.jsx(o,{children:e.jsx(n,{...r,name:"radiostorybook2",inputSize:"large",children:"Large"})})]})},d={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx(n,{...r,checked:!0,name:"default",children:"Small"})}),e.jsx(o,{children:e.jsx(n,{...r,checked:!0,name:"info",color:"info",children:"Default"})}),e.jsx(o,{children:e.jsx(n,{...r,checked:!0,name:"succcess",color:"success",children:"Medium"})}),e.jsx(o,{children:e.jsx(n,{...r,checked:!0,name:"warning",color:"warning",children:"Large"})}),e.jsx(o,{children:e.jsx(n,{...r,checked:!0,name:"danger",color:"danger",children:"Large"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <>
      <Field>
        <Radio {...args} name='radiostorybook'>
          Selected
        </Radio>
      </Field>
      <Field>
        <Radio {...args} name='radiostorybook'>
          Unselected
        </Radio>
      </Field>
    </>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <>
      <Field>
        <Radio {...args} name='radiostorybook2' inputSize='small'>
          Small
        </Radio>
      </Field>
      <Field>
        <Radio {...args} name='radiostorybook2'>
          Default
        </Radio>
      </Field>
      <Field>
        <Radio {...args} name='radiostorybook2' inputSize='medium'>
          Medium
        </Radio>
      </Field>
      <Field>
        <Radio {...args} name='radiostorybook2' inputSize='large'>
          Large
        </Radio>
      </Field>
    </>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <>
      <Field>
        <Radio {...args} checked={true} name='default'>
          Small
        </Radio>
      </Field>
      <Field>
        <Radio {...args} checked={true} name='info' color='info'>
          Default
        </Radio>
      </Field>
      <Field>
        <Radio {...args} checked={true} name='succcess' color='success'>
          Medium
        </Radio>
      </Field>
      <Field>
        <Radio {...args} checked={true} name='warning' color='warning'>
          Large
        </Radio>
      </Field>
      <Field>
        <Radio {...args} checked={true} name='danger' color='danger'>
          Large
        </Radio>
      </Field>
    </>
}`,...d.parameters?.docs?.source}}};const b=["Primary","Sizes","Colors"];export{d as Colors,a as Primary,i as Sizes,b as __namedExportsOrder,y as default};
