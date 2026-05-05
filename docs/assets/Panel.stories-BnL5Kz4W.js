import{j as e}from"./jsx-runtime-u17CrQMm.js";import{b as f}from"./argColors-B6cMnwwl.js";import{i as P,c as h}from"./index-Bi8qpGUj.js";import{E as r}from"./element-DVQbf_BR.js";import{S as u}from"./stateClassNameResolver-DojVhQ0T.js";import{C as b}from"./colorClassNameResolver-Dzgf_lzU.js";import{B as k}from"./button-CsTjHu3_.js";import{G as d}from"./index-D3jDu19M.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";import"./fullwidthClassNameResolver-C6QnhJIm.js";import"./sizeClassNameResolver-CHrYS43U.js";import"./styleClassNameResolver-B6lYuz0n.js";import"./iconBase-Cf9QxpcK.js";const l=({children:s,active:n,className:a,...t})=>{const i=P.resolve(u).prepareClasses({active:n}),o=r;return e.jsx(o,{className:h(a,i),nameOf:"panel-block",as:"div",...t,children:s})},B=({children:s,...n})=>{const a=r;return e.jsx(a,{nameOf:"panel-heading",as:"p",...n,children:s})},x=({children:s,...n})=>{const a=r;return e.jsx(a,{nameOf:"panel-icon",as:"span",...n,children:s})},g=({className:s,as:n,color:a,children:t,...p})=>{const o=P.resolve(b).prepareClasses({color:a}),j=r;return e.jsx(j,{className:h(s,o),nameOf:"panel",as:n??"nav",...p,children:t})},c=({active:s,children:n,className:a,...t})=>{const i=P.resolve(u).prepareClasses({active:s}),o=r;return e.jsx(o,{className:h(a,i),nameOf:"panel-tabs",as:"a",...t,children:n})},v=({children:s,...n})=>{const a=r;return e.jsx(a,{nameOf:"panel-tabs",as:"div",...n,children:s})},H={title:"Bulma/Components/Panel",component:g,decorators:s=>e.jsx("div",{style:{padding:"5rem"},className:"theme-light",children:e.jsx(s,{})}),parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{...f}},m={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(B,{children:"Repositories"}),e.jsx(l,{children:e.jsxs("p",{className:"control has-icons-left",children:[e.jsx("input",{className:"input",type:"text",placeholder:"Search"}),e.jsx("span",{className:"icon is-left",children:e.jsx("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),e.jsxs(v,{children:[e.jsx(c,{active:!0,children:"All"}),e.jsx(c,{children:"Public"}),e.jsx(c,{children:"Private"}),e.jsx(c,{children:"Sources"}),e.jsx(c,{children:"Forks"})]}),e.jsxs(l,{active:!0,children:[e.jsx(x,{children:e.jsx(d,{})}),"Vegeta"]}),e.jsxs(l,{children:[e.jsx(x,{children:e.jsx(d,{})}),"MarkSheet"]}),e.jsxs(l,{children:[e.jsx(x,{children:e.jsx(d,{})}),"MiniReset.css"]}),e.jsxs(l,{children:[e.jsx("input",{type:"checkbox"}),"Remember me"]}),e.jsx(l,{children:e.jsx(k,{color:"link",outlined:!0,fullwidth:!0,children:"Reser All Filters"})})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <PanelHeading>Repositories</PanelHeading>
        <PanelBlock>
          <p className='control has-icons-left'>
            <input className='input' type='text' placeholder='Search' />
            <span className='icon is-left'>
              <i className='fas fa-search' aria-hidden='true'></i>
            </span>
          </p>
        </PanelBlock>
        <PanelTabs>
          <PanelTab active>All</PanelTab>
          <PanelTab>Public</PanelTab>
          <PanelTab>Private</PanelTab>
          <PanelTab>Sources</PanelTab>
          <PanelTab>Forks</PanelTab>
        </PanelTabs>
        <PanelBlock active>
          <PanelIcon>
            <GrBug />
          </PanelIcon>
          Vegeta
        </PanelBlock>
        <PanelBlock>
          <PanelIcon>
            <GrBug />
          </PanelIcon>
          MarkSheet
        </PanelBlock>
        <PanelBlock>
          <PanelIcon>
            <GrBug />
          </PanelIcon>
          MiniReset.css
        </PanelBlock>
        <PanelBlock>
          <input type='checkbox' />
          Remember me
        </PanelBlock>
        <PanelBlock>
          <Button color='link' outlined fullwidth>
            Reser All Filters
          </Button>
        </PanelBlock>
      </>
  }
}`,...m.parameters?.docs?.source}}};const w=["Example"];export{m as Example,w as __namedExportsOrder,H as default};
