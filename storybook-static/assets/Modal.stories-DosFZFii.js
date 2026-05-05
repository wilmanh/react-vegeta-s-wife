import{j as e}from"./jsx-runtime-u17CrQMm.js";import{i as m,c as u}from"./index-4Zh_KXMq.js";import{E as s}from"./element-rpMEa1yt.js";import{D as p}from"./delete-6YEh4Pee.js";import{S as x}from"./stateClassNameResolver-DojVhQ0T.js";import{B as h}from"./box-ZnsdBKGL.js";import{B as l}from"./button-Bp_ysoWx.js";import"./iframe-jP6eckoW.js";import"./preload-helper-PPVm8Dsz.js";import"./sizeClassNameResolver-CHrYS43U.js";import"./colorClassNameResolver-Dzgf_lzU.js";import"./fullwidthClassNameResolver-C6QnhJIm.js";import"./styleClassNameResolver-B6lYuz0n.js";const j=({children:a,...r})=>{const o=s;return e.jsx(o,{nameOf:"modal-card-body",as:"section",...r,children:a})},f=({children:a,...r})=>{const o=s;return e.jsx(o,{nameOf:"modal-card",as:"div",...r,children:a})},C=({children:a,...r})=>{const o=s;return e.jsx(o,{nameOf:"modal-card-foot",as:"footer",...r,children:e.jsx(o,{nameOf:"buttons",as:"div",children:a})})},v=({children:a,...r})=>{const o=s;return e.jsxs(o,{nameOf:"modal-card-head",as:"header",...r,children:[a,e.jsx(p,{"aria-label":"close"})]})},g=({children:a,...r})=>{const o=s;return e.jsx(o,{nameOf:"modal-card-title",as:"p",...r,children:a})},M=({children:a,...r})=>{const o=s;return e.jsx(o,{nameOf:"modal-content",as:"div",...r,children:a})},B=({...a})=>{const r=s;return e.jsx(r,{nameOf:"modal-background",as:"div",...a})},E=({children:a,className:r,active:o,...d})=>{const i=m.resolve(x).prepareClasses({active:o}),c=s;return e.jsxs(c,{className:u(i,r),nameOf:"modal",as:"div",...d,children:[e.jsx(B,{}),a]})},D={title:"Bulma/Components/Modal",component:E,decorators:a=>e.jsx("div",{className:"theme-light",children:e.jsx(a,{})}),parameters:{layout:"fullscreen"}},t={args:{active:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(M,{children:e.jsx(h,{children:e.jsx("p",{children:"Hello World"})})}),e.jsx("button",{className:"modal-close is-large","aria-label":"close"})]})}},n={args:{active:!0,children:e.jsxs(f,{children:[e.jsx(v,{children:e.jsx(g,{children:"Hello World"})}),e.jsx(j,{children:e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et sint corrupti fugit necessitatibus, minus velit voluptatem rerum fugiat nemo quis hic sed unde architecto voluptatibus itaque? Quasi, error unde!"})}),e.jsxs(C,{children:[e.jsx(l,{color:"primary",children:"Save"}),e.jsx(l,{color:"danger",children:"Close"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    active: true,
    children: <>
        <Content>
          <Box>
            <p>Hello World</p>
          </Box>
        </Content>
        <button className='modal-close is-large' aria-label='close'></button>
      </>
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    active: true,
    children: <ModalCard>
        <ModalCardHeader>
          <ModalCardTitle>Hello World</ModalCardTitle>
        </ModalCardHeader>
        <ModalCardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et
            sint corrupti fugit necessitatibus, minus velit voluptatem rerum
            fugiat nemo quis hic sed unde architecto voluptatibus itaque? Quasi,
            error unde!
          </p>
        </ModalCardBody>
        <ModalCardFooter>
          <Button color='primary'>Save</Button>
          <Button color='danger'>Close</Button>
        </ModalCardFooter>
      </ModalCard>
  }
}`,...n.parameters?.docs?.source}}};const L=["Example","Headless"];export{t as Example,n as Headless,L as __namedExportsOrder,D as default};
