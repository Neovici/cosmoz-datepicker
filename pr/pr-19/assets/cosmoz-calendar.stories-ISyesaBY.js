import"./calendar-Q4nStrUv.js";import{d as o,a as t,m,l as c,e as d,b as e}from"./helper-DDoiV5o3.js";import"./date-CAliyzCn.js";import"./iframe-_0gbPUuk.js";import"./preload-helper-PPVm8Dsz.js";const M={title:"CosmozCalendar",component:"cosmoz-calendar",tags:["autodocs"],render:d,argTypes:{locale:c,mode:m,value:t,min:o,max:o,numberOfMonths:{control:"number",description:"Number of visible calendar months."}},args:{mode:"range",value:{start:e(12),end:e(17)},min:"",max:"",numberOfMonths:2}},r={parameters:{docs:{description:{story:"Basic date range calendar."}}}},a={parameters:{docs:{description:{story:"Minimum and maximum allowed date boundaries set."}}},args:{min:e(9),max:e(22)}},n={parameters:{docs:{description:{story:"Single visible calendar month."}}},args:{numberOfMonths:1}},s={parameters:{docs:{description:{story:"Single date selection mode."}}},args:{mode:"single",value:e(12)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Basic date range calendar.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Minimum and maximum allowed date boundaries set.'
      }
    }
  },
  args: {
    min: currentMonthDate(9),
    max: currentMonthDate(22)
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Single visible calendar month.'
      }
    }
  },
  args: {
    numberOfMonths: 1
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Single date selection mode.'
      }
    }
  },
  args: {
    mode: 'single',
    value: currentMonthDate(12)
  }
}`,...s.parameters?.docs?.source}}};const y=["Basic","MinMax","SingleCalendar","SingleDate"];export{r as Basic,a as MinMax,n as SingleCalendar,s as SingleDate,y as __namedExportsOrder,M as default};
