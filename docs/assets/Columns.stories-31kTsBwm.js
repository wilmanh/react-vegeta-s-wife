import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as E}from"./iframe-DMzMWQeg.js";import{i as T,c as k}from"./index-Bi8qpGUj.js";import{g as F,E as B}from"./element-DVQbf_BR.js";import{B as v}from"./box-BlyYtcrV.js";import{T as G}from"./title-BhUUgLBK.js";import"./preload-helper-PPVm8Dsz.js";import"./headingClassNameResolver-BFjv7ODl.js";class V{prepareClasses=i=>{const{narrow:a,offset:r,size:c}=i;return{...F(a,"narrow",!0),...F(c),[`is-offset-${r}`]:!!r}}}const e=({children:s,offset:i,size:a,narrow:r,className:c,...l})=>{const d=T.resolve(V),t=B;return n.jsx(t,{className:k(c,d.prepareClasses({narrow:r,offset:i,size:a})),nameOf:"column",as:"div",...l,children:s})};class O{prepareClasses=i=>{const{gap:a,responsive:r,gapless:c,multiline:l,vCenter:d,center:t}=i;return{"is-mobile":r==="mobile","is-desktop":r==="desktop","is-vcentered":d,"is-multiline":l,"is-centered":t,"is-gapless":c,...F(a,"gap")}}}const o=({gap:s,responsive:i,center:a,gapless:r,vCenter:c,children:l,multiline:d,className:t,...D})=>{const A=T.resolve(O),M=B;return n.jsx(M,{className:k(t,A.prepareClasses({gap:s,responsive:i,center:a,gapless:r,vCenter:c,multiline:d})),nameOf:"columns",as:"div",...D,children:l})},W={title:"Bulma/Frame/Columns",component:o,decorators:s=>n.jsx("div",{className:"theme-light",children:n.jsx(s,{})}),tags:["autodocs"]},m={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"First column"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Second column"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Third column"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Fourth column"})})})]})}},P=["full","four-fifths","three-quarters","two-thirds","three-fifths","half","two-fifths","one-third","one-quarter","one-fifth"],$=["1","2","3","4","5","6","7","8","9","10","11","12"],p={render:s=>n.jsx(n.Fragment,{children:P.map(i=>n.jsxs(o,{...s,children:[n.jsx(e,{size:i,children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsxs("code",{children:["is ",i]})})}),i!=="full"?n.jsxs(n.Fragment,{children:[n.jsx(e,{children:n.jsx("p",{className:"bd-notification",children:n.jsx("code",{children:"auto"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification",children:n.jsx("code",{children:"auto"})})})]}):null]}))})},u={render:s=>n.jsx(n.Fragment,{children:$.map(i=>n.jsxs(o,{...s,children:[n.jsx(e,{size:i,children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsxs("code",{children:["is ",i]})})}),i!=="12"?n.jsx(e,{children:n.jsx("p",{className:"bd-notification",children:n.jsx("code",{children:"auto"})})}):null]}))})},h={render:s=>n.jsxs(n.Fragment,{children:[n.jsx(o,{...s,children:n.jsx(e,{size:"half",offset:"one-quarter",children:n.jsxs("p",{className:"bd-notification is-primary",children:[n.jsx("code",{children:"is-half"}),n.jsx("code",{children:"is-offset-one-quarter"})]})})}),n.jsx(o,{...s,children:n.jsx(e,{size:"three-fifths",offset:"one-fifth",children:n.jsxs("p",{className:"bd-notification is-primary",children:[n.jsx("code",{children:"is-three-fifths"}),n.jsx("code",{children:"is-offset-one-fifth"})]})})}),n.jsx(o,{...s,children:n.jsx(e,{size:"4",offset:"8",children:n.jsxs("p",{className:"bd-notification is-primary",children:[n.jsx("code",{children:"is-4"}),n.jsx("code",{children:"is-offset-8"})]})})}),n.jsx(o,{...s,children:n.jsx(e,{size:"11",offset:"1",children:n.jsxs("p",{className:"bd-notification is-primary",children:[n.jsx("code",{children:"is-11"}),n.jsx("code",{children:"is-offset-1"})]})})})]})},x={render:s=>n.jsxs(o,{...s,children:[n.jsx(e,{narrow:!0,children:n.jsx(v,{style:{width:"200px"},children:n.jsx(G,{hSize:5,children:"This column is only 200px wide, it is narrow."})})}),n.jsx(e,{children:n.jsx(v,{children:n.jsx(G,{hSize:5,children:"This column will take the remaining space available."})})})]})},j={args:{responsive:"mobile",children:n.jsxs(n.Fragment,{children:[n.jsx(e,{size:{mobile:"three-quarters",tablet:"two-thirds",desktop:"half",widescreen:"one-third",fullhd:"one-quarter"},children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Second column 2"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Column 3"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Column 4"})})})]})}},f={args:{children:n.jsxs(n.Fragment,{children:[n.jsxs(e,{children:[n.jsx("p",{className:"bd-notification is-info",children:n.jsx("code",{children:"First Column"})}),n.jsxs(o,{responsive:"mobile",children:[n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-info",children:n.jsx("code",{children:"First nested column"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-info",children:n.jsx("code",{children:"Second nested column"})})})]})]}),n.jsxs(e,{children:[n.jsx("p",{className:"bd-notification is-danger",children:n.jsx("code",{children:"First Column"})}),n.jsxs(o,{responsive:"mobile",children:[n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-danger",children:n.jsx("code",{children:"50%"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-danger",children:n.jsx("code",{children:"Auto"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-danger",children:n.jsx("code",{children:"Auto"})})})]})]})]})}},C={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Default gap"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Default gap"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Default gap"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Default gap"})})})]})}},b={args:{gapless:!0,children:n.jsxs(n.Fragment,{children:[n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Gapless"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Gapless"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Gapless"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Gapless"})})})]})}},N={args:{gapless:!0,multiline:!0,responsive:"mobile",children:n.jsxs(n.Fragment,{children:[n.jsx(e,{size:"one-quarter",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-one-quarter"})})}),n.jsx(e,{size:"one-quarter",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-one-quarter"})})}),n.jsx(e,{size:"one-quarter",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-one-quarter"})})}),n.jsx(e,{size:"one-quarter",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-one-quarter"})})}),n.jsx(e,{size:"half",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-half"})})}),n.jsx(e,{size:"one-quarter",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-one-quarter"})})}),n.jsx(e,{size:"one-quarter",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-one-quarter"})})}),n.jsx(e,{size:"one-quarter",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-one-quarter"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"auto"})})})]})}},_=()=>{const[s,i]=E.useState(3),a=[0,1,2,3,4,5,6,7,8].map(r=>n.jsxs("a",{className:`bd-klmn-gap${r.toString()===s.toString()?" bd-is-selected":""}`,onClick:()=>i(r),"data-value":r.toString(),children:["is-",r]}));return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bd-klmn-gaps",children:[n.jsxs("strong",{className:"bd-klmn-label",children:["Gap:",n.jsxs("code",{id:"klmnValue",className:"bd-klmn-value",children:[.25*s,"rem"]})]}),a]}),n.jsxs(o,{gap:s.toString(),children:[n.jsx(e,{size:"3",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Side"})})}),n.jsx(e,{size:"9",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Column"})})})]}),n.jsxs(o,{gap:s.toString(),children:[n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Three Columns"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Three Columns"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Three Columns"})})})]})]})},y={render:()=>n.jsx(_,{})},g={args:{gap:{mobile:"2",tablet:"0",desktop:"3",widescreen:"7",fullhd:"1"},children:n.jsxs(n.Fragment,{children:[n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Column"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Column"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Column"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Column"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Column"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Column"})})})]})}},q={args:{vCenter:!0,children:n.jsxs(n.Fragment,{children:[n.jsx(e,{size:"8",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"First Column"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"Second column with more content. This is so you can see the vertical alignment."})})})]})}},z={args:{multiline:!0,responsive:"mobile",children:n.jsxs(n.Fragment,{children:[n.jsx(e,{size:"one-quarter",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-one-quarter"})})}),n.jsx(e,{size:"one-quarter",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-one-quarter"})})}),n.jsx(e,{size:"one-quarter",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-one-quarter"})})}),n.jsx(e,{size:"one-quarter",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-one-quarter"})})}),n.jsx(e,{size:"half",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-half"})})}),n.jsx(e,{size:"one-quarter",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-one-quarter"})})}),n.jsx(e,{size:"one-quarter",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-one-quarter"})})}),n.jsx(e,{size:"one-quarter",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-one-quarter"})})}),n.jsx(e,{children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"auto"})})})]})}},w={args:{center:!0,responsive:"mobile",children:n.jsx(n.Fragment,{children:n.jsx(e,{size:"half",children:n.jsx("p",{className:"bd-notification is-primary",children:n.jsx("code",{children:"is-half"})})})})}},S={args:{center:!0,multiline:!0,responsive:"mobile",children:n.jsxs(n.Fragment,{children:[n.jsx(e,{narrow:!0,children:n.jsxs("p",{style:{padding:"1.25rem 1.5rem"},className:"bd-notification is-primary",children:[n.jsx("code",{children:"is-narrow"}),n.jsx("br",{}),"First Column"]})}),n.jsx(e,{narrow:!0,children:n.jsxs("p",{style:{padding:"1.25rem 1.5rem"},className:"bd-notification is-primary",children:[n.jsx("code",{children:"is-narrow"}),n.jsx("br",{}),"Second Column"]})}),n.jsx(e,{narrow:!0,children:n.jsxs("p",{style:{padding:"1.25rem 1.5rem"},className:"bd-notification is-primary",children:[n.jsx("code",{children:"is-narrow"}),n.jsx("br",{}),"Third Column"]})}),n.jsx(e,{narrow:!0,children:n.jsxs("p",{style:{padding:"1.25rem 1.5rem"},className:"bd-notification is-primary",children:[n.jsx("code",{children:"is-narrow"}),n.jsx("br",{}),"Fourth Column"]})}),n.jsx(e,{narrow:!0,children:n.jsxs("p",{style:{padding:"1.25rem 1.5rem"},className:"bd-notification is-primary",children:[n.jsx("code",{children:"is-narrow"}),n.jsx("br",{}),"Fifth Column"]})})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Column>
          <p className='bd-notification is-primary'>
            <code>First column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Second column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Third column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Fourth column</code>
          </p>
        </Column>
      </>
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => {
    return <>
        {sizeText.map(size => <Columns {...args}>
            <Column size={size as ColumnSize}>
              <p className='bd-notification is-primary'>
                <code>is {size}</code>
              </p>
            </Column>
            {size !== 'full' ? <>
                <Column>
                  <p className='bd-notification'>
                    <code>auto</code>
                  </p>
                </Column>
                <Column>
                  <p className='bd-notification'>
                    <code>auto</code>
                  </p>
                </Column>
              </> : null}
          </Columns>)}
      </>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => {
    return <>
        {sizeNumber.map(size => <Columns {...args}>
            <Column size={size as ColumnSize}>
              <p className='bd-notification is-primary'>
                <code>is {size}</code>
              </p>
            </Column>
            {size !== '12' ? <Column>
                <p className='bd-notification'>
                  <code>auto</code>
                </p>
              </Column> : null}
          </Columns>)}
      </>;
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => {
    return <>
        <Columns {...args}>
          <Column size={'half'} offset={'one-quarter'}>
            <p className='bd-notification is-primary'>
              <code>is-half</code>
              <code>is-offset-one-quarter</code>
            </p>
          </Column>
        </Columns>
        <Columns {...args}>
          <Column size={'three-fifths'} offset={'one-fifth'}>
            <p className='bd-notification is-primary'>
              <code>is-three-fifths</code>
              <code>is-offset-one-fifth</code>
            </p>
          </Column>
        </Columns>
        <Columns {...args}>
          <Column size={'4'} offset={'8'}>
            <p className='bd-notification is-primary'>
              <code>is-4</code>
              <code>is-offset-8</code>
            </p>
          </Column>
        </Columns>
        <Columns {...args}>
          <Column size={'11'} offset={'1'}>
            <p className='bd-notification is-primary'>
              <code>is-11</code>
              <code>is-offset-1</code>
            </p>
          </Column>
        </Columns>
      </>;
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: ArgsProps) => {
    return <Columns {...args}>
        <Column narrow>
          <Box style={{
          width: '200px'
        }}>
            <Title hSize={5}>
              This column is only 200px wide, it is narrow.
            </Title>
          </Box>
        </Column>
        <Column>
          <Box>
            <Title hSize={5}>
              This column will take the remaining space available.
            </Title>
          </Box>
        </Column>
      </Columns>;
  }
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    responsive: 'mobile',
    children: <>
        <Column size={{
        mobile: 'three-quarters',
        tablet: 'two-thirds',
        desktop: 'half',
        widescreen: 'one-third',
        fullhd: 'one-quarter'
      }}>
          <p className='bd-notification is-primary'>
            <code>
              is-three-quarters-mobile is-two-thirds-tablet is-half-desktop
              is-one-third-widescreen is-one-quarter-fullhd
            </code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Second column 2</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Column 3</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Column 4</code>
          </p>
        </Column>
      </>
  }
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Column>
          <p className='bd-notification is-info'>
            <code>First Column</code>
          </p>
          <Columns responsive='mobile'>
            <Column>
              <p className='bd-notification is-info'>
                <code>First nested column</code>
              </p>
            </Column>
            <Column>
              <p className='bd-notification is-info'>
                <code>Second nested column</code>
              </p>
            </Column>
          </Columns>
        </Column>
        <Column>
          <p className='bd-notification is-danger'>
            <code>First Column</code>
          </p>
          <Columns responsive='mobile'>
            <Column>
              <p className='bd-notification is-danger'>
                <code>50%</code>
              </p>
            </Column>
            <Column>
              <p className='bd-notification is-danger'>
                <code>Auto</code>
              </p>
            </Column>
            <Column>
              <p className='bd-notification is-danger'>
                <code>Auto</code>
              </p>
            </Column>
          </Columns>
        </Column>
      </>
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Default gap</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Default gap</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Default gap</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Default gap</code>
          </p>
        </Column>
      </>
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    gapless: true,
    children: <>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Gapless</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Gapless</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Gapless</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Gapless</code>
          </p>
        </Column>
      </>
  }
}`,...b.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    gapless: true,
    multiline: true,
    responsive: 'mobile',
    children: <>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>

        <Column size='half'>
          <p className='bd-notification is-primary'>
            <code>is-half</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>auto</code>
          </p>
        </Column>
      </>
  }
}`,...N.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VariableGapComponent />;
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    gap: {
      mobile: '2',
      tablet: '0',
      desktop: '3',
      widescreen: '7',
      fullhd: '1'
    },
    children: <>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Column</code>
          </p>
        </Column>

        <Column>
          <p className='bd-notification is-primary'>
            <code>Column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Column</code>
          </p>
        </Column>
      </>
  }
}`,...g.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    vCenter: true,
    children: <>
        <Column size='8'>
          <p className='bd-notification is-primary'>
            <code>First Column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>
              Second column with more content. This is so you can see the
              vertical alignment.
            </code>
          </p>
        </Column>
      </>
  }
}`,...q.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    multiline: true,
    responsive: 'mobile',
    children: <>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>

        <Column size='half'>
          <p className='bd-notification is-primary'>
            <code>is-half</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>auto</code>
          </p>
        </Column>
      </>
  }
}`,...z.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    center: true,
    responsive: 'mobile',
    children: <>
        <Column size='half'>
          <p className='bd-notification is-primary'>
            <code>is-half</code>
          </p>
        </Column>
      </>
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    center: true,
    multiline: true,
    responsive: 'mobile',
    children: <>
        <Column narrow>
          <p style={{
          padding: '1.25rem 1.5rem'
        }} className='bd-notification is-primary'>
            <code>is-narrow</code>
            <br />
            First Column
          </p>
        </Column>
        <Column narrow>
          <p style={{
          padding: '1.25rem 1.5rem'
        }} className='bd-notification is-primary'>
            <code>is-narrow</code>
            <br />
            Second Column
          </p>
        </Column>
        <Column narrow>
          <p style={{
          padding: '1.25rem 1.5rem'
        }} className='bd-notification is-primary'>
            <code>is-narrow</code>
            <br />
            Third Column
          </p>
        </Column>
        <Column narrow>
          <p style={{
          padding: '1.25rem 1.5rem'
        }} className='bd-notification is-primary'>
            <code>is-narrow</code>
            <br />
            Fourth Column
          </p>
        </Column>
        <Column narrow>
          <p style={{
          padding: '1.25rem 1.5rem'
        }} className='bd-notification is-primary'>
            <code>is-narrow</code>
            <br />
            Fifth Column
          </p>
        </Column>
      </>
  }
}`,...S.parameters?.docs?.source}}};const X=["Basics","SizesByString","SizesByNumber","Offset","Narrow","ColumnsMobile","Nesting","DefaultGap","Gapless","GaplessMultiline","VariableGap","BreakpointBasedColumnGaps","VerticalAlignment","Multiline","CenteringColumns","CenteringMultiline"];export{m as Basics,g as BreakpointBasedColumnGaps,w as CenteringColumns,S as CenteringMultiline,j as ColumnsMobile,C as DefaultGap,b as Gapless,N as GaplessMultiline,z as Multiline,x as Narrow,f as Nesting,h as Offset,u as SizesByNumber,p as SizesByString,y as VariableGap,q as VerticalAlignment,X as __namedExportsOrder,W as default};
