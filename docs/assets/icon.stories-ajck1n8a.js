import{j as r}from"./jsx-runtime-u17CrQMm.js";import{G as o}from"./index-D3jDu19M.js";import{a as i}from"./argColors-B6cMnwwl.js";import{a as l}from"./argSizes-Ban4xGOr.js";import{I as s}from"./icon-C3JfGt5c.js";import"./iconBase-Cf9QxpcK.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";import"./sizes-pK9ilt6j.js";import"./index-Bi8qpGUj.js";import"./element-DVQbf_BR.js";import"./sizeClassNameResolver-CHrYS43U.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,v={title:"Bulma/Elements/Icon",component:s,decorators:e=>r.jsx("div",{className:"theme-light",children:r.jsx(e,{})}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"select",options:["div","span"]},...i,...l},args:{onClick:c()}},n={render:e=>r.jsx(s,{...e,children:r.jsx(o,{size:e.size})})},a={render:e=>r.jsxs("div",{className:"buttons",children:[r.jsx(s,{...e,size:"large",textColor:"primary",children:r.jsx(o,{size:"large"})}),r.jsx(s,{...e,size:"large",textColor:"link",children:r.jsx(o,{size:"large"})}),r.jsx(s,{...e,size:"large",textColor:"info",children:r.jsx(o,{size:"large"})}),r.jsx(s,{...e,size:"large",textColor:"success",children:r.jsx(o,{size:"large"})}),r.jsx(s,{...e,size:"large",textColor:"warning",children:r.jsx(o,{size:"large"})}),r.jsx(s,{...e,size:"large",textColor:"danger",children:r.jsx(o,{size:"large"})})]})},t={render:()=>r.jsx("div",{className:"buttons",children:r.jsxs(s,{as:"div",text:!0,textColor:"primary",children:[r.jsx(s,{textColor:"primary",children:r.jsx(o,{})}),r.jsx("span",{children:"Text"})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: IconProps) => <Icon {...args}>
      <GrBug size={args.size} />
    </Icon>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div className='buttons'>
      <Icon {...args} size={'large'} textColor='primary'>
        <GrBug size={'large'} />
      </Icon>
      <Icon {...args} size={'large'} textColor='link'>
        <GrBug size={'large'} />
      </Icon>
      <Icon {...args} size={'large'} textColor='info'>
        <GrBug size={'large'} />
      </Icon>
      <Icon {...args} size={'large'} textColor='success'>
        <GrBug size={'large'} />
      </Icon>
      <Icon {...args} size={'large'} textColor='warning'>
        <GrBug size={'large'} />
      </Icon>
      <Icon {...args} size={'large'} textColor='danger'>
        <GrBug size={'large'} />
      </Icon>
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className='buttons'>
      <Icon as={'div'} text textColor='primary'>
        <Icon textColor='primary'>
          <GrBug />
        </Icon>
        <span>Text</span>
      </Icon>
    </div>
}`,...t.parameters?.docs?.source}}};const y=["Primary","Colors","WithText"];export{a as Colors,n as Primary,t as WithText,y as __namedExportsOrder,v as default};
