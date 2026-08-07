import"./calendar-B5ADaUHm.js";import{r as s,d as r,l as t,c as o}from"./helper-bgKLFhcK.js";import"./iframe-jyMnPp1e.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"CosmozCalendar",component:"cosmoz-calendar",tags:["autodocs"],argTypes:{locale:t,start:r,end:r,min:r,max:r,numberOfMonths:{control:"number",description:"Number of visible calendar months."}},args:{start:o(12),end:o(17),min:"",max:"",numberOfMonths:2}},e={render:s},a={args:{min:o(9),max:o(22)}},n={args:{numberOfMonths:1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderCalendar
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    min: currentMonthDate(9),
    max: currentMonthDate(22)
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    numberOfMonths: 1
  }
}`,...n.parameters?.docs?.source}}};const l=["Calendar","MinMax","SingleMonth"];export{e as Calendar,a as MinMax,n as SingleMonth,l as __namedExportsOrder,p as default};
