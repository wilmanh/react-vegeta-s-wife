import{j as e}from"./jsx-runtime-u17CrQMm.js";import{G as p}from"./iconBase-Cf9QxpcK.js";import"./index-Bi8qpGUj.js";import{E as t}from"./element-DVQbf_BR.js";import{C as l}from"./content-8cfvO41g.js";import{I as u}from"./icon-C3JfGt5c.js";import{I as c}from"./image-lB_fap5s.js";import"./iframe-DMzMWQeg.js";import"./preload-helper-PPVm8Dsz.js";import"./sizeClassNameResolver-CHrYS43U.js";import"./ratioClassNameResolver-haYHnPzV.js";import"./roundedClassNameResolver-T9nZQFSr.js";function x(a){return p({attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 4.21875 10.78125 L 2.78125 12.21875 L 15.28125 24.71875 L 16 25.40625 L 16.71875 24.71875 L 29.21875 12.21875 L 27.78125 10.78125 L 16 22.5625 Z"},child:[]}]})(a)}const j=({children:a,...s})=>{const r=t;return e.jsx(r,{nameOf:"card",as:"div",...s,children:a})},m=({children:a,...s})=>{const r=t;return e.jsx(r,{nameOf:"card-content",as:"div",...s,children:e.jsx(l,{children:a})})},g=({items:a,...s})=>{const r=t;return e.jsx(r,{nameOf:"card-footer",as:"footer",...s,children:a.map(n=>{if(n.href){const h=t;return e.jsx(h,{nameOf:"card-footer-item",as:"a",href:n.href??void 0,children:n.value},n.id)}const d=t;return e.jsx(d,{nameOf:"card-footer-item",as:"p",children:n.value},n.id)})})},f=({title:a,icon:s,...r})=>{const n=t;return e.jsxs(n,{nameOf:"card-header",as:"header",...r,children:[a?e.jsx(n,{nameOf:"card-header-title",as:"p",children:a}):null,s?e.jsx(n,{nameOf:"card-header-icon","aria-label":"more options",as:"button",children:s}):null]})},C=({children:a,...s})=>{const r=t;return e.jsx(r,{nameOf:"card-image",as:"div",...s,children:a})},{fn:v}=__STORYBOOK_MODULE_TEST__,F={title:"Bulma/Components/Card",component:j,decorators:a=>e.jsx("div",{className:"theme-light",children:e.jsx(a,{})}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{options:["div","section"]}},args:{onClick:v()}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx(c,{ratio:"4by3",src:"https://bulma.io/assets/images/placeholders/1280x960.png",alt:"Placeholder image"})}),e.jsxs(m,{children:[e.jsxs("div",{className:"media",children:[e.jsx("div",{className:"media-left",children:e.jsx(c,{shape:"48x48",src:"https://bulma.io/assets/images/placeholders/96x96.png",alt:"Placeholder image"})}),e.jsxs("div",{className:"media-content",children:[e.jsx("p",{className:"title is-4",children:"John Smith"}),e.jsx("p",{className:"subtitle is-6",children:"@johnsmith"})]})]}),e.jsxs(l,{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ",e.jsx("a",{children:"@bulmaio"}),". ",e.jsx("a",{href:"#",children:"#css"}),e.jsx("a",{href:"#",children:"#responsive"}),e.jsx("br",{}),e.jsx("time",{dateTime:"2016-1-1",children:"11:09 PM - 1 Jan 2016"})]})]})]})}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Component",icon:e.jsx(u,{children:e.jsx(x,{size:"large"})})}),e.jsx(m,{children:e.jsxs(l,{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ",e.jsx("a",{children:"@bulmaio"}),". ",e.jsx("a",{href:"#",children:"#css"}),e.jsx("a",{href:"#",children:"#responsive"}),e.jsx("br",{}),e.jsx("time",{dateTime:"2016-1-1",children:"11:09 PM - 1 Jan 2016"})]})}),e.jsx(g,{items:[{id:"item-1",value:"Save"},{id:"item-2",value:"Edit"},{id:"item-3",value:"Cance;"}]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <CardImage>
          <Image ratio='4by3' src='https://bulma.io/assets/images/placeholders/1280x960.png' alt='Placeholder image' />
        </CardImage>
        <CardContent>
          <div className='media'>
            <div className='media-left'>
              <Image shape='48x48' src='https://bulma.io/assets/images/placeholders/96x96.png' alt='Placeholder image' />
            </div>
            <div className='media-content'>
              <p className='title is-4'>John Smith</p>
              <p className='subtitle is-6'>@johnsmith</p>
            </div>
          </div>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>. <a href='#'>#css</a>
            <a href='#'>#responsive</a>
            <br />
            <time dateTime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
          </Content>
        </CardContent>
      </>
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <CardHeader title='Component' icon={<Icon>
              <LiaAngleDownSolid size={'large'} />
            </Icon>}></CardHeader>

        <CardContent>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>. <a href='#'>#css</a>
            <a href='#'>#responsive</a>
            <br />
            <time dateTime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
          </Content>
        </CardContent>
        <CardFooter items={[{
        id: 'item-1',
        value: 'Save'
      }, {
        id: 'item-2',
        value: 'Edit'
      }, {
        id: 'item-3',
        value: 'Cance;'
      }]}></CardFooter>
      </>
  }
}`,...o.parameters?.docs?.source}}};const $=["Example","Example1"];export{i as Example,o as Example1,$ as __namedExportsOrder,F as default};
