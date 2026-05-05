import{j as r}from"./jsx-runtime-u17CrQMm.js";import{G as B}from"./index-dGYFDuUH.js";import{b as p}from"./argColors-B6cMnwwl.js";import{a as h}from"./argLightness-Cvewibtz.js";import{a as j}from"./argSizes-Ban4xGOr.js";import{B as o}from"./button-Bp_ysoWx.js";import{B as t}from"./buttons-nehNc9rG.js";import{I as g}from"./icon-DyIrqKA2.js";import"./iconBase-DprbEJhT.js";import"./iframe-jP6eckoW.js";import"./preload-helper-PPVm8Dsz.js";import"./sizes-pK9ilt6j.js";import"./index-4Zh_KXMq.js";import"./element-rpMEa1yt.js";import"./colorClassNameResolver-Dzgf_lzU.js";import"./fullwidthClassNameResolver-C6QnhJIm.js";import"./sizeClassNameResolver-CHrYS43U.js";import"./stateClassNameResolver-DojVhQ0T.js";import"./styleClassNameResolver-B6lYuz0n.js";const x={disabled:{control:"boolean"}},y={fullwidth:{control:"boolean"}},f={loading:{control:"boolean"}},k={noResponsive:{control:"boolean"}},b={hover:{control:"boolean"},focus:{control:"boolean"},active:{control:"boolean"}},w={outlined:{control:"boolean"},inverted:{control:"boolean"},rounded:{control:"boolean"},static:{control:"boolean"}},{fn:S}=__STORYBOOK_MODULE_TEST__,U={title:"Bulma/Elements/Button",component:o,decorators:n=>r.jsx("div",{className:"theme-light",children:r.jsx(n,{})}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"select",options:["submit","reset","a","button"]},...p,...h,...j,...k,...y,...w,...b,...f,...x},args:{onClick:S()}},e={args:{children:"Button"}},s={args:{children:"Button"},render:n=>r.jsxs(t,{children:[r.jsx(o,{...n,color:"white",children:"white"}),r.jsx(o,{...n,light:!0,children:"light"}),r.jsx(o,{...n,dark:!0,children:"dark"}),r.jsx(o,{...n,color:"black",children:"black"}),r.jsx(o,{...n,color:"text",children:"text"}),r.jsx(o,{...n,color:"ghost",children:"ghost"})]})},c={render:n=>r.jsxs(t,{children:[r.jsx(o,{focus:!0,fullwidth:!0,...n,color:"primary",children:"primary"}),r.jsx(o,{...n,color:"link",children:"link"}),r.jsx(o,{...n,color:"info",children:"info"}),r.jsx(o,{...n,color:"success",children:"success"}),r.jsx(o,{...n,color:"warning",children:"warning"}),r.jsx(o,{...n,color:"danger",children:"danger"})]})},a={render:n=>r.jsxs(t,{children:[r.jsx(o,{...n,dark:!0,color:"primary",children:"primary"}),r.jsx(o,{...n,dark:!0,color:"link",children:"link"}),r.jsx(o,{...n,dark:!0,color:"info",children:"info"}),r.jsx(o,{...n,dark:!0,color:"success",children:"success"}),r.jsx(o,{...n,dark:!0,color:"warning",children:"warning"}),r.jsx(o,{...n,dark:!0,color:"danger",children:"danger"})]})},l={render:n=>r.jsxs(t,{children:[r.jsx(o,{...n,light:!0,color:"primary",children:"primary"}),r.jsx(o,{...n,light:!0,color:"link",children:"link"}),r.jsx(o,{...n,light:!0,color:"info",children:"info"}),r.jsx(o,{...n,light:!0,color:"success",children:"success"}),r.jsx(o,{...n,light:!0,color:"warning",children:"warning"}),r.jsx(o,{...n,light:!0,color:"danger",children:"danger"})]})},i={render:n=>r.jsxs(t,{style:{gap:20},children:[r.jsx(o,{...n,size:"small",children:"small"}),r.jsx(o,{...n,children:"Default"}),r.jsx(o,{...n,size:"normal",children:"normal"}),r.jsx(o,{...n,size:"medium",children:"medium"}),r.jsx(o,{...n,size:"large",children:"large"})]})},u={render:n=>r.jsxs(t,{children:[r.jsx(o,{...n,outlined:!0,color:"primary",children:"outlined"}),r.jsx(o,{...n,inverted:!0,color:"primary",children:"inverted"}),r.jsx(o,{...n,rounded:!0,color:"primary",children:"rounded"})]})},d={args:{children:"Button"},render:n=>r.jsxs(t,{children:[r.jsx(o,{...n,color:"primary",children:"normal"}),r.jsx(o,{...n,active:!0,color:"primary",children:"active"}),r.jsx(o,{...n,hover:!0,color:"primary",children:"hover"}),r.jsx(o,{...n,focus:!0,color:"primary",children:"focus"}),r.jsx(o,{...n,loading:!0,color:"primary",children:"focus"}),r.jsx(o,{...n,static:!0,color:"primary",children:"static"}),r.jsx(o,{...n,disabled:!0,color:"primary",children:"disabled"})]})},m={render:n=>r.jsxs(t,{children:[r.jsx(o,{...n,color:"primary",children:r.jsx(g,{children:r.jsx(B,{})})}),r.jsxs(o,{...n,color:"info",children:[r.jsx("span",{children:"Bug"}),r.jsx(g,{children:r.jsx(B,{})})]}),r.jsxs(o,{...n,color:"success",children:[r.jsx(g,{children:r.jsx(B,{})}),r.jsx("span",{children:"Bug"})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: (args: object) => <Buttons>
      <Button {...args} color='white'>
        white
      </Button>
      <Button {...args} light>
        light
      </Button>
      <Button {...args} dark>
        dark
      </Button>
      <Button {...args} color='black'>
        black
      </Button>
      <Button {...args} color='text'>
        text
      </Button>
      <Button {...args} color='ghost'>
        ghost
      </Button>
    </Buttons>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: object) => <Buttons>
      <Button focus fullwidth {...args} color='primary'>
        primary
      </Button>
      <Button {...args} color='link'>
        link
      </Button>
      <Button {...args} color='info'>
        info
      </Button>
      <Button {...args} color='success'>
        success
      </Button>
      <Button {...args} color='warning'>
        warning
      </Button>
      <Button {...args} color='danger'>
        danger
      </Button>
    </Buttons>
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: object) => <Buttons>
      <Button {...args} dark color='primary'>
        primary
      </Button>
      <Button {...args} dark color='link'>
        link
      </Button>
      <Button {...args} dark color='info'>
        info
      </Button>
      <Button {...args} dark color='success'>
        success
      </Button>
      <Button {...args} dark color='warning'>
        warning
      </Button>
      <Button {...args} dark color='danger'>
        danger
      </Button>
    </Buttons>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: object) => <Buttons>
      <Button {...args} light color='primary'>
        primary
      </Button>
      <Button {...args} light color='link'>
        link
      </Button>
      <Button {...args} light color='info'>
        info
      </Button>
      <Button {...args} light color='success'>
        success
      </Button>
      <Button {...args} light color='warning'>
        warning
      </Button>
      <Button {...args} light color='danger'>
        danger
      </Button>
    </Buttons>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: object) => <Buttons style={{
    gap: 20
  }}>
      <Button {...args} size='small'>
        small
      </Button>
      <Button {...args}>Default</Button>
      <Button {...args} size='normal'>
        normal
      </Button>
      <Button {...args} size='medium'>
        medium
      </Button>
      <Button {...args} size='large'>
        large
      </Button>
    </Buttons>
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: object) => <Buttons>
      <Button {...args} outlined color='primary'>
        outlined
      </Button>
      <Button {...args} inverted color='primary'>
        inverted
      </Button>
      <Button {...args} rounded color='primary'>
        rounded
      </Button>
    </Buttons>
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: (args: object) => <Buttons>
      <Button {...args} color='primary'>
        normal
      </Button>
      <Button {...args} active color='primary'>
        active
      </Button>
      <Button {...args} hover color='primary'>
        hover
      </Button>
      <Button {...args} focus color='primary'>
        focus
      </Button>
      <Button {...args} loading color='primary'>
        focus
      </Button>
      <Button {...args} static color='primary'>
        static
      </Button>
      <Button {...args} disabled color='primary'>
        disabled
      </Button>
    </Buttons>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: object) => <Buttons>
      <Button {...args} color='primary'>
        <Icon>
          <GrBug />
        </Icon>
      </Button>
      <Button {...args} color='info'>
        <span>Bug</span>
        <Icon>
          <GrBug />
        </Icon>
      </Button>
      <Button {...args} color='success'>
        <Icon>
          <GrBug />
        </Icon>
        <span>Bug</span>
      </Button>
    </Buttons>
}`,...m.parameters?.docs?.source}}};const Y=["Primary","BlackAndWhite","Colors","DarkColors","LightColors","Sizes","Styles","States","WithIcons"];export{s as BlackAndWhite,c as Colors,a as DarkColors,l as LightColors,e as Primary,i as Sizes,d as States,u as Styles,m as WithIcons,Y as __namedExportsOrder,U as default};
