import"./cosmoz-datepicker-DPIvYtC9.js";import{c as d,d as i,a as p,m,l,r as g,b as e}from"./helper-7LHRpDl7.js";import"./calendar-CgU7mt2l.js";import"./date-6UvBi5bj.js";import"./iframe-DfcboDYQ.js";import"./preload-helper-PPVm8Dsz.js";import"./date-input-JnmMadqA.js";const D={title:"CosmozDatepicker",component:"cosmoz-datepicker",tags:["autodocs"],render:g,argTypes:{locale:l,mode:m,value:p,min:i,max:i,disabled:{control:"boolean",description:"Disables opening the datepicker dropdown."},noPresets:{control:"boolean",description:"Hides the built-in range preset buttons."},singleCalendar:{control:"boolean",description:"Forces a single calendar month layout."},presets:{control:"object",description:"Consumer-provided range presets replacing the defaults.",table:{type:{summary:"RangePreset[]"}}},triggerSize:{control:"select",options:["sm","md","lg","xl"],description:"Optional cosmoz-button trigger size."},triggerVariant:{control:"select",options:["primary","secondary","tertiary"],description:"cosmoz-button trigger variant."}},args:{mode:"range",value:{start:e(1),end:e(4)},min:"",max:"",disabled:!1,noPresets:!1,singleCalendar:!1,presets:void 0,triggerSize:"",triggerVariant:"secondary"}},r={parameters:{docs:{description:{story:"Basic date range picker."}}}},s={parameters:{docs:{description:{story:"Minimum and maximum allowed date boundaries set."}}},args:{value:{start:e(11),end:e(14)},min:e(4),max:e(24)}},t={parameters:{docs:{description:{story:"Single calendar layout for ranges."}}},args:{value:{start:e(11),end:e(14)},singleCalendar:!0}},a={parameters:{docs:{description:{story:"Single date selection mode."}}},args:{mode:"single",value:e(12)}},n={parameters:{docs:{description:{story:"No selected dates set."}}},args:{value:{}}},o={parameters:{docs:{description:{story:"Custom range presets configured."}}},args:{presets:d}},c={parameters:{docs:{description:{story:"Range preset buttons hidden."}}},args:{noPresets:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Basic date range picker.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Minimum and maximum allowed date boundaries set.'
      }
    }
  },
  args: {
    value: {
      start: currentMonthDate(11),
      end: currentMonthDate(14)
    },
    min: currentMonthDate(4),
    max: currentMonthDate(24)
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Single calendar layout for ranges.'
      }
    }
  },
  args: {
    value: {
      start: currentMonthDate(11),
      end: currentMonthDate(14)
    },
    singleCalendar: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No selected dates set.'
      }
    }
  },
  args: {
    value: {}
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Custom range presets configured.'
      }
    }
  },
  args: {
    presets: customPresets
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Range preset buttons hidden.'
      }
    }
  },
  args: {
    noPresets: true
  }
}`,...c.parameters?.docs?.source}}};const C=["Basic","MinMax","SingleCalendar","SingleDate","EmptyState","CustomPresets","NoPresets"];export{r as Basic,o as CustomPresets,n as EmptyState,s as MinMax,c as NoPresets,t as SingleCalendar,a as SingleDate,C as __namedExportsOrder,D as default};
