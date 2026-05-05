import{j as e}from"./jsx-runtime-u17CrQMm.js";import{b as i}from"./argColors-B6cMnwwl.js";import{a as d}from"./argSizes-Ban4xGOr.js";import{C as n}from"./checkbox-DR2I4nyv.js";import{F as o}from"./field-eLWXzYE2.js";import"./sizes-pK9ilt6j.js";import"./index-4Zh_KXMq.js";import"./iframe-jP6eckoW.js";import"./preload-helper-PPVm8Dsz.js";import"./inputClassNameResolver-CHlRW4Au.js";import"./colorClassNameResolver-Dzgf_lzU.js";import"./sizeClassNameResolver-CHrYS43U.js";import"./stateClassNameResolver-DojVhQ0T.js";import"./element-rpMEa1yt.js";const f={title:"Bulma/Form/Checkbox",component:n,decorators:r=>e.jsx("div",{style:{padding:"1rem"},className:"theme-dark",children:e.jsx(r,{})}),parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{...d,...i}},s={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx(n,{...r,name:"radiostorybook",children:"Selected"})}),e.jsx(o,{children:e.jsx(n,{...r,name:"radiostorybook",children:"Unselected"})})]})},a={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx(n,{...r,inputSize:"small",name:"radiostorybook2",children:"Small"})}),e.jsx(o,{children:e.jsx(n,{...r,name:"radiostorybook2",children:"Default"})}),e.jsx(o,{children:e.jsx(n,{...r,name:"radiostorybook2",inputSize:"medium",children:"Medium"})}),e.jsx(o,{children:e.jsx(n,{...r,name:"radiostorybook2",inputSize:"large",children:"Large"})})]})},c={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx(n,{...r,checked:!0,name:"default",children:"Small"})}),e.jsx(o,{children:e.jsx(n,{...r,checked:!0,name:"info",color:"info",children:"Default"})}),e.jsx(o,{children:e.jsx(n,{...r,checked:!0,name:"succcess",color:"success",children:"Medium"})}),e.jsx(o,{children:e.jsx(n,{...r,checked:!0,name:"warning",color:"warning",children:"Large"})}),e.jsx(o,{children:e.jsx(n,{...r,checked:!0,name:"danger",color:"danger",children:"Large"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <>
      <Field>
        <Checkbox {...args} name='radiostorybook'>
          Selected
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} name='radiostorybook'>
          Unselected
        </Checkbox>
      </Field>
    </>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <>
      <Field>
        <Checkbox {...args} inputSize={'small'} name='radiostorybook2'>
          Small
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} name='radiostorybook2'>
          Default
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} name='radiostorybook2' inputSize='medium'>
          Medium
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} name='radiostorybook2' inputSize='large'>
          Large
        </Checkbox>
      </Field>
    </>
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <>
      <Field>
        <Checkbox {...args} checked={true} name='default'>
          Small
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} checked={true} name='info' color='info'>
          Default
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} checked={true} name='succcess' color='success'>
          Medium
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} checked={true} name='warning' color='warning'>
          Large
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} checked={true} name='danger' color='danger'>
          Large
        </Checkbox>
      </Field>
    </>
}`,...c.parameters?.docs?.source}}};const y=["Primary","Sizes","Colors"];export{c as Colors,s as Primary,a as Sizes,y as __namedExportsOrder,f as default};
