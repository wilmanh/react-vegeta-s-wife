import{j as s}from"./jsx-runtime-u17CrQMm.js";import{a as j}from"./sizes-pK9ilt6j.js";import{i as c,c as d}from"./index-Bi8qpGUj.js";import{E as p}from"./element-DVQbf_BR.js";import{R as v}from"./roundedClassNameResolver-T9nZQFSr.js";import{S as h}from"./sizeClassNameResolver-CHrYS43U.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";class f{prepareClasses=n=>{const{disabled:a}=n;return{"is-disabled":a}}}const u=({children:e,className:n,type:a,disabled:t,...o})=>{const r=c.resolve(f).prepareClasses({disabled:t}),g=p;return s.jsx(g,{className:d(n,r),nameOf:`pagination-${a}`,as:"a",...o,children:e})},x=({...e})=>{const n=p;return s.jsx("li",{children:s.jsx(n,{nameOf:"pagination-ellipsis",as:"span",...e,children:"…"})})};class C{prepareClasses=n=>{const{current:a}=n;return{"is-current":a}}}const l=({className:e,children:n,current:a,...t})=>{const i=c.resolve(C).prepareClasses({current:a}),r=p;return s.jsx("li",{children:s.jsx(r,{className:d(e,i),nameOf:"pagination-link",as:"a",...t,children:n})})},L=({children:e,...n})=>{const a=p;return s.jsx(a,{nameOf:"pagination-list",as:"ul",...n,children:e})};class R{prepareClasses=n=>{const{position:a,isRounded:t,size:o}=n,i=c.resolve(h),r=c.resolve(v);return{"is-centered":a==="centered","is-right":a==="right",...i.prepareClasses({size:o}),...r.prepareClasses({isRounded:t})}}}const E=({isRounded:e,className:n,children:a,position:t,size:o,...i})=>{const g=c.resolve(R).prepareClasses({position:t,isRounded:e,size:o}),P=p;return s.jsx(P,{className:d(n,g),nameOf:"pagination",as:"nav",role:i?.role??"navigation","aria-label":i?.["aria-label"]??"pagination",...i,children:a})},S={title:"Bulma/Components/Pagination",component:E,decorators:e=>s.jsx("div",{style:{padding:"5rem"},className:"theme-light",children:s.jsx(e,{})}),parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{size:{control:"select",options:j},position:{control:"select",options:["centered","right","left"]}}},m={args:{isRounded:!1,children:s.jsxs(s.Fragment,{children:[s.jsx(u,{type:"next",children:"Next"}),s.jsx(u,{type:"previous",children:"Previous"}),s.jsxs(L,{children:[s.jsx(l,{children:"1"}),s.jsx(x,{}),s.jsx(l,{children:"29"}),s.jsx(l,{children:"30"}),s.jsx(l,{current:!0,children:"31"}),s.jsx(x,{}),s.jsx(l,{children:"50"})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isRounded: false,
    children: <>
        <PaginationButton type='next'>Next</PaginationButton>
        <PaginationButton type='previous'>Previous</PaginationButton>
        <PaginationList>
          <PaginationLink>1</PaginationLink>
          <PaginationEllipsis />
          <PaginationLink>29</PaginationLink>
          <PaginationLink>30</PaginationLink>
          <PaginationLink current>31</PaginationLink>
          <PaginationEllipsis />
          <PaginationLink>50</PaginationLink>
        </PaginationList>
      </>
  }
}`,...m.parameters?.docs?.source}}};const _=["Example"];export{m as Example,_ as __namedExportsOrder,S as default};
