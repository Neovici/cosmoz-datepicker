import{i as c,n as r,b as B,w as v,I as x}from"./iframe-Bm6Cp20B.js";import"./cosmoz-datepicker-DiDt89Ur.js";import{d as E,a as S,m as b}from"./helper-CUVgPaiC.js";import"./preload-helper-PPVm8Dsz.js";import"./calendar-DW0JXwNM.js";import"./date-C9w5d6U0.js";import"./date-input-CJBY7n1_.js";const{expect:t,userEvent:s,waitFor:i}=__STORYBOOK_MODULE_TEST__,o={start:"2026-08-14",end:"2026-08-18",afterStart:"2026-08-16",afterEnd:"2026-08-20",presetStart:"2026-08-03",presetEnd:"2026-08-07"},M={title:"Tests/CosmozDatepicker",component:"cosmoz-datepicker",tags:["!autodocs"],argTypes:{mode:b,value:S,min:E,max:E},args:{mode:"range",value:{start:o.start,end:o.end},min:"",max:"",disabled:!1,noPresets:!0,singleCalendar:!0,presets:void 0,triggerSize:"",triggerVariant:"secondary"}},d=e=>B`
    <cosmoz-datepicker
        mode=${e.mode}
        locale="en-US"
        trigger-variant=${e.triggerVariant}
        .value=${e.value}
        .min=${e.min||void 0}
        .max=${e.max||void 0}
        .presets=${e.presets}
        ?disabled=${e.disabled}
        ?no-presets=${e.noPresets}
        ?single-calendar=${e.singleCalendar}
    ></cosmoz-datepicker>
`,h=e=>{const n=e.querySelector("cosmoz-datepicker");return t(n).toBeTruthy(),n},l=(e,n)=>x(e,`date-${n}`),u={render:d,play:async({canvasElement:e,step:n})=>{const a=c(e,"Date picker");await n("syncs calendar range selection to inputs and trigger",async()=>{await s.click(a),await i(()=>t(a.ariaExpanded).toBe("true")),await s.click(l(e,o.afterStart)),t(r(e,"spinbutton",{name:/^month, start date$/iu}).value).toBe("8"),t(r(e,"spinbutton",{name:/^day, start date$/iu}).value).toBe("16"),t(r(e,"spinbutton",{name:/^year, start date$/iu}).value).toBe("2026"),await s.click(l(e,o.afterEnd)),t(r(e,"spinbutton",{name:/^month, end date$/iu}).value).toBe("8"),t(r(e,"spinbutton",{name:/^day, end date$/iu}).value).toBe("20"),t(r(e,"spinbutton",{name:/^year, end date$/iu}).value).toBe("2026"),t(a.textContent).toContain("Aug 16, 2026"),t(a.textContent).toContain("Aug 20, 2026")})}},g={render:d,args:{mode:"single",value:o.start},play:async({canvasElement:e,step:n})=>{const a=c(e,"Date picker");await n("syncs single date calendar selection",async()=>{await s.click(a),await i(()=>t(a.ariaExpanded).toBe("true")),await s.click(l(e,o.afterStart)),await i(()=>{t(r(e,"spinbutton",{name:/^month$/iu}).value).toBe("8"),t(r(e,"spinbutton",{name:/^day$/iu}).value).toBe("16"),t(r(e,"spinbutton",{name:/^year$/iu}).value).toBe("2026")}),t(a.textContent).toContain("Aug 16, 2026")})}},m={render:d,play:async({canvasElement:e,step:n})=>{const a=c(e,"Date picker");await n("opens from the trigger",async()=>{await s.click(a),await i(()=>t(a.ariaExpanded).toBe("true")),t(r(e,"dialog")).toBeTruthy()}),await n("closes from the OK button",async()=>{await s.click(r(e,"button",{name:/^ok$/iu})),await i(()=>t(a.ariaExpanded).toBe("false"))})}},w={render:d,play:async({canvasElement:e,step:n})=>{const a=h(e),p=c(e,"Date picker");await n("opens the dropdown and selects a new range",async()=>{await s.click(p),await i(()=>t(p.ariaExpanded).toBe("true")),await s.click(l(e,o.afterStart)),await s.click(l(e,o.afterEnd)),t(a.value).toEqual({start:o.start,end:o.end})}),await n("updates the value once the dropdown closes",async()=>{await s.click(r(e,"button",{name:/^ok$/iu})),await i(()=>t(a.value).toEqual({start:o.afterStart,end:o.afterEnd}))})}},y={render:d,args:{disabled:!0},play:async({canvasElement:e,step:n})=>{const a=c(e,"Date picker");await n("does not open while disabled",async()=>{await s.click(a),t(a.ariaDisabled).toBe("true"),t(a.ariaExpanded).toBe("false")})}},k={render:d,args:{noPresets:!1,singleCalendar:!1,presets:[{label:"Work week",start:o.presetStart,end:o.presetEnd}]},globals:{viewport:{value:"desktop",isRotated:!1}},play:async({canvasElement:e,step:n})=>{const a=c(e,"Date picker");await n("syncs preset selection to calendar, inputs, and trigger",async()=>{await s.click(a),await i(()=>t(a.ariaExpanded).toBe("true")),await s.click(r(e,"button",{name:"Work week"}));const p=v(e,"Work week",{selector:"cosmoz-button"});t(r(e,"spinbutton",{name:/^day, start date$/iu}).value).toBe("3"),t(r(e,"spinbutton",{name:/^day, end date$/iu}).value).toBe("7"),t(p.ariaPressed).toBe("true"),t(a.textContent).toContain("Aug 3, 2026"),t(a.textContent).toContain("Aug 7, 2026")})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: renderDatepicker,
  play: async ({
    canvasElement,
    step
  }) => {
    const trigger = getByShadowLabelText<HTMLElement>(canvasElement, 'Date picker');
    await step('syncs calendar range selection to inputs and trigger', async () => {
      await userEvent.click(trigger);
      await waitFor(() => expect(trigger.ariaExpanded).toBe('true'));
      await userEvent.click(getDateButton(canvasElement, dates.afterStart));
      expect(getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
        name: /^month, start date$/iu
      }).value).toBe('8');
      expect(getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
        name: /^day, start date$/iu
      }).value).toBe('16');
      expect(getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
        name: /^year, start date$/iu
      }).value).toBe('2026');
      await userEvent.click(getDateButton(canvasElement, dates.afterEnd));
      expect(getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
        name: /^month, end date$/iu
      }).value).toBe('8');
      expect(getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
        name: /^day, end date$/iu
      }).value).toBe('20');
      expect(getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
        name: /^year, end date$/iu
      }).value).toBe('2026');
      expect(trigger.textContent).toContain('Aug 16, 2026');
      expect(trigger.textContent).toContain('Aug 20, 2026');
    });
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: renderDatepicker,
  args: {
    mode: 'single',
    value: dates.start
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const trigger = getByShadowLabelText<HTMLElement>(canvasElement, 'Date picker');
    await step('syncs single date calendar selection', async () => {
      await userEvent.click(trigger);
      await waitFor(() => expect(trigger.ariaExpanded).toBe('true'));
      await userEvent.click(getDateButton(canvasElement, dates.afterStart));
      await waitFor(() => {
        expect(getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
          name: /^month$/iu
        }).value).toBe('8');
        expect(getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
          name: /^day$/iu
        }).value).toBe('16');
        expect(getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
          name: /^year$/iu
        }).value).toBe('2026');
      });
      expect(trigger.textContent).toContain('Aug 16, 2026');
    });
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: renderDatepicker,
  play: async ({
    canvasElement,
    step
  }) => {
    const trigger = getByShadowLabelText<HTMLElement>(canvasElement, 'Date picker');
    await step('opens from the trigger', async () => {
      await userEvent.click(trigger);
      await waitFor(() => expect(trigger.ariaExpanded).toBe('true'));
      expect(getByShadowRole(canvasElement, 'dialog')).toBeTruthy();
    });
    await step('closes from the OK button', async () => {
      await userEvent.click(getByShadowRole(canvasElement, 'button', {
        name: /^ok$/iu
      }));
      await waitFor(() => expect(trigger.ariaExpanded).toBe('false'));
    });
  }
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: renderDatepicker,
  play: async ({
    canvasElement,
    step
  }) => {
    const datepicker = getDatepicker(canvasElement);
    const trigger = getByShadowLabelText<HTMLElement>(canvasElement, 'Date picker');
    await step('opens the dropdown and selects a new range', async () => {
      await userEvent.click(trigger);
      await waitFor(() => expect(trigger.ariaExpanded).toBe('true'));
      await userEvent.click(getDateButton(canvasElement, dates.afterStart));
      await userEvent.click(getDateButton(canvasElement, dates.afterEnd));
      expect(datepicker.value).toEqual({
        start: dates.start,
        end: dates.end
      });
    });
    await step('updates the value once the dropdown closes', async () => {
      await userEvent.click(getByShadowRole(canvasElement, 'button', {
        name: /^ok$/iu
      }));
      await waitFor(() => expect(datepicker.value).toEqual({
        start: dates.afterStart,
        end: dates.afterEnd
      }));
    });
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: renderDatepicker,
  args: {
    disabled: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const trigger = getByShadowLabelText<HTMLElement>(canvasElement, 'Date picker');
    await step('does not open while disabled', async () => {
      await userEvent.click(trigger);
      expect(trigger.ariaDisabled).toBe('true');
      expect(trigger.ariaExpanded).toBe('false');
    });
  }
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: renderDatepicker,
  args: {
    noPresets: false,
    singleCalendar: false,
    presets: [{
      label: 'Work week',
      start: dates.presetStart,
      end: dates.presetEnd
    }]
  },
  // Presets are intentionally hidden on narrow viewports
  globals: {
    viewport: {
      value: 'desktop',
      isRotated: false
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const trigger = getByShadowLabelText<HTMLElement>(canvasElement, 'Date picker');
    await step('syncs preset selection to calendar, inputs, and trigger', async () => {
      await userEvent.click(trigger);
      await waitFor(() => expect(trigger.ariaExpanded).toBe('true'));
      await userEvent.click(getByShadowRole(canvasElement, 'button', {
        name: 'Work week'
      }));
      const preset = getByShadowText<HTMLElement>(canvasElement, 'Work week', {
        selector: 'cosmoz-button'
      });
      expect(getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
        name: /^day, start date$/iu
      }).value).toBe('3');
      expect(getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
        name: /^day, end date$/iu
      }).value).toBe('7');
      expect(preset.ariaPressed).toBe('true');
      expect(trigger.textContent).toContain('Aug 3, 2026');
      expect(trigger.textContent).toContain('Aug 7, 2026');
    });
  }
}`,...k.parameters?.docs?.source}}};const H=["CalendarSelectionSyncsRange","SingleDateSync","DropdownOpenClose","ValueUpdatesOnlyOnClose","DisabledState","PresetSyncsRange"];export{u as CalendarSelectionSyncsRange,y as DisabledState,m as DropdownOpenClose,k as PresetSyncsRange,g as SingleDateSync,w as ValueUpdatesOnlyOnClose,H as __namedExportsOrder,M as default};
