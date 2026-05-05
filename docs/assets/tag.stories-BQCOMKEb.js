import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as N}from"./argColors-B6cMnwwl.js";import{a as R}from"./argSizes-Ban4xGOr.js";import{D as A}from"./delete-CTS8DanW.js";import{i as l,c as C}from"./index-Bi8qpGUj.js";import{E as v}from"./element-DVQbf_BR.js";import{C as b}from"./colorClassNameResolver-Dzgf_lzU.js";import{R as E}from"./roundedClassNameResolver-T9nZQFSr.js";import{S as P}from"./sizeClassNameResolver-CHrYS43U.js";import"./sizes-pK9ilt6j.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";class _{prepareClasses=a=>{const{deleted:n}=a;return{"is-delete":n}}}class O{prepareClasses=a=>{const{hoverable:n}=a;return{"is-hoverable":n}}}class B{prepareClasses=a=>{const n=l.resolve(b),o=l.resolve(P),g=l.resolve(E),i=l.resolve(O),t=l.resolve(_);return{...n.prepareClasses({color:a?.color,dark:a?.dark,light:a?.light}),...i.prepareClasses({hoverable:a?.hoverable}),...t.prepareClasses({deleted:a?.deleted}),...o.prepareClasses({size:a?.size}),...g.prepareClasses({rounded:a?.rounded})}}}const r=({hoverable:e,className:a,children:n,rounded:o,deleted:g,color:i,light:t,size:f,dark:y,as:k,...S})=>{const D=l.resolve(B).prepareClasses({hoverable:e,rounded:o,color:i,light:t,deleted:g,dark:y,size:f}),z=k??"span",w=v;return s.jsx(w,{className:C(a,D),as:z,nameOf:"tag",...S,children:n})};class W{prepareClasses=a=>{const{addons:n}=a;return{"has-addons":n}}}class L{prepareClasses=a=>({...l.resolve(W).prepareClasses({addons:a?.addons})})}const c=({className:e,children:a,addons:n,...o})=>{const i=l.resolve(L).prepareClasses({addons:n}),t=v;return s.jsx(t,{className:C(e,i),as:"div",nameOf:"tags",...o,children:a})},{fn:$}=__STORYBOOK_MODULE_TEST__,Z={title:"Bulma/Elements/Tag",component:r,decorators:e=>s.jsx("div",{className:"theme-light",children:s.jsx(e,{})}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...N,...R},args:{onClick:$()}},d={args:{children:"Tags"}},m={render:e=>s.jsxs(c,{children:[s.jsx(r,{...e,color:"white",children:"white"}),s.jsx(r,{...e,light:!0,children:"light"}),s.jsx(r,{...e,dark:!0,children:"dark"}),s.jsx(r,{...e,color:"black",children:"black"}),s.jsx(r,{...e,color:"text",children:"text"}),s.jsx(r,{...e,color:"ghost",children:"ghost"})]})},p={render:e=>s.jsxs(c,{children:[s.jsx(r,{...e,color:"primary",children:"primary"}),s.jsx(r,{...e,color:"link",children:"link"}),s.jsx(r,{...e,color:"info",children:"info"}),s.jsx(r,{...e,color:"success",children:"success"}),s.jsx(r,{...e,color:"warning",children:"warning"}),s.jsx(r,{...e,color:"danger",children:"danger"})]})},T={render:e=>s.jsxs(c,{children:[s.jsx(r,{...e,light:!0,color:"primary",children:"primary"}),s.jsx(r,{...e,light:!0,color:"link",children:"link"}),s.jsx(r,{...e,light:!0,color:"info",children:"info"}),s.jsx(r,{...e,light:!0,color:"success",children:"success"}),s.jsx(r,{...e,light:!0,color:"warning",children:"warning"}),s.jsx(r,{...e,light:!0,color:"danger",children:"danger"})]})},h={render:e=>s.jsxs(c,{style:{gap:18},children:[s.jsx(r,{...e,size:"small",children:"small"}),s.jsx(r,{...e,children:"Default"}),s.jsx(r,{...e,size:"medium",children:"medium"}),s.jsx(r,{...e,size:"large",children:"large"})]})},u={render:e=>s.jsx(c,{children:s.jsx(r,{...e,rounded:!0,color:"primary",children:"rounded"})})},x={render:e=>s.jsx(c,{children:s.jsxs(r,{...e,color:"primary",children:["Delete",s.jsx(A,{size:"small"})]})})},j={render:()=>s.jsx("div",{className:"field is-grouped is-grouped-multiline",children:s.jsxs("div",{className:"control",children:[s.jsxs(c,{addons:!0,children:[s.jsx(r,{color:"danger",children:"Delete"}),s.jsx(r,{as:"a",deleted:!0})]}),s.jsxs(c,{addons:!0,children:[s.jsx(r,{color:"warning",children:"Warning"}),s.jsx(r,{color:"primary",children:"Delete"})]})]})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Tags'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <Tags>
      <Tag {...args} color='white'>
        white
      </Tag>
      <Tag {...args} light>
        light
      </Tag>
      <Tag {...args} dark>
        dark
      </Tag>
      <Tag {...args} color='black'>
        black
      </Tag>
      <Tag {...args} color='text'>
        text
      </Tag>
      <Tag {...args} color='ghost'>
        ghost
      </Tag>
    </Tags>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <Tags>
      <Tag {...args} color='primary'>
        primary
      </Tag>
      <Tag {...args} color='link'>
        link
      </Tag>
      <Tag {...args} color='info'>
        info
      </Tag>
      <Tag {...args} color='success'>
        success
      </Tag>
      <Tag {...args} color='warning'>
        warning
      </Tag>
      <Tag {...args} color='danger'>
        danger
      </Tag>
    </Tags>
}`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <Tags>
      <Tag {...args} light color='primary'>
        primary
      </Tag>
      <Tag {...args} light color='link'>
        link
      </Tag>
      <Tag {...args} light color='info'>
        info
      </Tag>
      <Tag {...args} light color='success'>
        success
      </Tag>
      <Tag {...args} light color='warning'>
        warning
      </Tag>
      <Tag {...args} light color='danger'>
        danger
      </Tag>
    </Tags>
}`,...T.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <Tags style={{
    gap: 18
  }}>
      <Tag {...args} size='small'>
        small
      </Tag>
      <Tag {...args}>Default</Tag>
      <Tag {...args} size='medium'>
        medium
      </Tag>
      <Tag {...args} size='large'>
        large
      </Tag>
    </Tags>
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <Tags>
      <Tag {...args} rounded color='primary'>
        rounded
      </Tag>
    </Tags>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => <Tags>
      <Tag {...args} color='primary'>
        Delete
        <Del size='small' />
      </Tag>
    </Tags>
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className='field is-grouped is-grouped-multiline'>
      <div className='control'>
        <Tags addons>
          <Tag color='danger'>Delete</Tag>
          <Tag as='a' deleted></Tag>
        </Tags>
        <Tags addons>
          <Tag color='warning'>Warning</Tag>
          <Tag color='primary'>Delete</Tag>
        </Tags>
      </div>
    </div>
}`,...j.parameters?.docs?.source}}};const ss=["Primary","BlackAndWhite","Colors","LightColors","Sizes","Styles","Delete","TagsAddons"];export{m as BlackAndWhite,p as Colors,x as Delete,T as LightColors,d as Primary,h as Sizes,u as Styles,j as TagsAddons,ss as __namedExportsOrder,Z as default};
