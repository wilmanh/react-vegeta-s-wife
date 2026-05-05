import{j as e}from"./jsx-runtime-u17CrQMm.js";import{i as o,c as d}from"./index-Bi8qpGUj.js";import{E as i}from"./element-DVQbf_BR.js";import{S as M}from"./stateClassNameResolver-DojVhQ0T.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";const x=({children:s,...t})=>{const a=i;return e.jsx(a,{nameOf:"menu",as:"aside",...t,children:s})},l=({children:s,...t})=>{const a=i;return e.jsx(a,{nameOf:"menu-label",as:"p",...t,children:s})},n=({children:s,className:t,active:a,...u})=>{const c=o.resolve(M).prepareClasses({active:a});return e.jsx(i,{nameOf:"",as:"li",children:e.jsx("a",{className:d(t,c),...u,children:s})})},m=({children:s,...t})=>e.jsx(i,{nameOf:"menu-list",as:"ul",...t,children:s}),f={title:"Bulma/Components/Menu",component:x,decorators:s=>e.jsx("div",{className:"theme-light",style:{width:"600px"},children:e.jsx(s,{})}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"General"}),e.jsxs(m,{children:[e.jsx(n,{children:"Dashboard"}),e.jsx(n,{children:"Customers"})]}),e.jsx(l,{children:"Administration"}),e.jsxs(m,{children:[e.jsx(n,{children:"Team Settings"}),e.jsxs(n,{active:!0,children:["Manage Your Team",e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{children:"Members"})}),e.jsx("li",{children:e.jsx("a",{children:"Plugins"})}),e.jsx("li",{children:e.jsx("a",{children:"Add a member"})})]})]}),e.jsx(n,{children:"Invitations"}),e.jsx(n,{children:"Cloud Storage Environment Settings"}),e.jsx(n,{children:"Authentication"})]}),e.jsx(l,{children:"Transactions"}),e.jsxs(m,{children:[e.jsx(n,{children:"Payments"}),e.jsx(n,{children:"Transfers"}),e.jsx(n,{children:"Balance"})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <MenuLabel>General</MenuLabel>
        <MenuList>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Customers</MenuItem>
        </MenuList>
        <MenuLabel>Administration</MenuLabel>
        <MenuList>
          <MenuItem>Team Settings</MenuItem>
          <MenuItem active>
            Manage Your Team
            <ul>
              <li>
                <a>Members</a>
              </li>
              <li>
                <a>Plugins</a>
              </li>
              <li>
                <a>Add a member</a>
              </li>
            </ul>
          </MenuItem>
          <MenuItem>Invitations</MenuItem>
          <MenuItem>Cloud Storage Environment Settings</MenuItem>
          <MenuItem>Authentication</MenuItem>
        </MenuList>
        <MenuLabel>Transactions</MenuLabel>
        <MenuList>
          <MenuItem>Payments</MenuItem>
          <MenuItem>Transfers</MenuItem>
          <MenuItem>Balance</MenuItem>
        </MenuList>
      </>
  }
}`,...r.parameters?.docs?.source}}};const v=["Example"];export{r as Example,v as __namedExportsOrder,f as default};
