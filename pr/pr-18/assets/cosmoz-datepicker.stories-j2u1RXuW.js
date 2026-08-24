import{i as d,n as r,b as v,w as x,I as S}from"./iframe-lAlaxMHP.js";import"./cosmoz-datepicker-Bx_Ji7A4.js";import{d as E,a as b,m as h}from"./helper-DX30vrjs.js";import"./preload-helper-PPVm8Dsz.js";import"./calendar-CubUTFcP.js";import"./date-BRdSX8x6.js";import"./date-input-NAKVDxow.js";const{expect:t,userEvent:i,waitFor:c}=__STORYBOOK_MODULE_TEST__,o={start:"2026-08-14",end:"2026-08-18",afterStart:"2026-08-16",afterEnd:"2026-08-20",presetStart:"2026-08-03",presetEnd:"2026-08-07"},M={title:"Tests/CosmozDatepicker",component:"cosmoz-datepicker",tags:["!autodocs"],argTypes:{mode:h,value:b,min:E,max:E},args:{mode:"range",value:{start:o.start,end:o.end},min:"",max:"",disabled:!1,noPresets:!0,singleCalendar:!0,presets:void 0,triggerSize:"",triggerVariant:"secondary"}},l=e=>v`
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
`,k=e=>{const a=e.querySelector("cosmoz-datepicker");return t(a).toBeTruthy(),a},y=(e,a)=>S(e,`date-${a}`),p={render:l,play:async({canvasElement:e,step:a})=>{const n=k(e),s=d(e,"Date picker");await a("syncs calendar range selection to inputs and trigger",async()=>{await i.click(s),await c(()=>t(s.ariaExpanded).toBe("true")),await i.click(y(e,o.afterStart)),await c(()=>t(n.value).toEqual({start:o.afterStart,end:void 0})),t(r(e,"spinbutton",{name:/^month, start date$/iu}).value).toBe("8"),t(r(e,"spinbutton",{name:/^day, start date$/iu}).value).toBe("16"),t(r(e,"spinbutton",{name:/^year, start date$/iu}).value).toBe("2026"),await i.click(y(e,o.afterEnd)),await c(()=>t(n.value).toEqual({start:o.afterStart,end:o.afterEnd})),t(r(e,"spinbutton",{name:/^month, end date$/iu}).value).toBe("8"),t(r(e,"spinbutton",{name:/^day, end date$/iu}).value).toBe("20"),t(r(e,"spinbutton",{name:/^year, end date$/iu}).value).toBe("2026"),t(s.textContent).toContain("Aug 16, 2026"),t(s.textContent).toContain("Aug 20, 2026")})}},u={render:l,args:{mode:"single",value:o.start},play:async({canvasElement:e,step:a})=>{const n=k(e),s=d(e,"Date picker");await a("syncs single date calendar selection",async()=>{await i.click(s),await c(()=>t(s.ariaExpanded).toBe("true")),await i.click(y(e,o.afterStart)),await c(()=>t(n.value).toBe(o.afterStart)),await c(()=>{t(r(e,"spinbutton",{name:/^month$/iu}).value).toBe("8"),t(r(e,"spinbutton",{name:/^day$/iu}).value).toBe("16"),t(r(e,"spinbutton",{name:/^year$/iu}).value).toBe("2026")}),t(s.textContent).toContain("Aug 16, 2026")})}},g={render:l,play:async({canvasElement:e,step:a})=>{const n=d(e,"Date picker");await a("opens from the trigger",async()=>{await i.click(n),await c(()=>t(n.ariaExpanded).toBe("true")),t(r(e,"dialog")).toBeTruthy()}),await a("closes from the OK button",async()=>{await i.click(r(e,"button",{name:/^ok$/iu})),await c(()=>t(n.ariaExpanded).toBe("false"))})}},m={render:l,args:{disabled:!0},play:async({canvasElement:e,step:a})=>{const n=d(e,"Date picker");await a("does not open while disabled",async()=>{await i.click(n),t(n.ariaDisabled).toBe("true"),t(n.ariaExpanded).toBe("false")})}},w={render:l,args:{noPresets:!1,singleCalendar:!1,presets:[{label:"Work week",start:o.presetStart,end:o.presetEnd}]},globals:{viewport:{value:"desktop",isRotated:!1}},play:async({canvasElement:e,step:a})=>{const n=k(e),s=d(e,"Date picker");await a("syncs preset selection to calendar, inputs, and trigger",async()=>{await i.click(s),await c(()=>t(s.ariaExpanded).toBe("true")),await i.click(r(e,"button",{name:"Work week"}));const B=x(e,"Work week",{selector:"cosmoz-button"});await c(()=>t(n.value).toEqual({start:o.presetStart,end:o.presetEnd})),t(r(e,"spinbutton",{name:/^day, start date$/iu}).value).toBe("3"),t(r(e,"spinbutton",{name:/^day, end date$/iu}).value).toBe("7"),t(B.ariaPressed).toBe("true"),t(s.textContent).toContain("Aug 3, 2026"),t(s.textContent).toContain("Aug 7, 2026")})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: renderDatepicker,
  play: async ({
    canvasElement,
    step
  }) => {
    const datepicker = getDatepicker(canvasElement);
    const trigger = getByShadowLabelText<HTMLElement>(canvasElement, 'Date picker');
    await step('syncs calendar range selection to inputs and trigger', async () => {
      await userEvent.click(trigger);
      await waitFor(() => expect(trigger.ariaExpanded).toBe('true'));
      await userEvent.click(getDateButton(canvasElement, dates.afterStart));
      await waitFor(() => expect(datepicker.value).toEqual({
        start: dates.afterStart,
        end: undefined
      }));
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
      await waitFor(() => expect(datepicker.value).toEqual({
        start: dates.afterStart,
        end: dates.afterEnd
      }));
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: renderDatepicker,
  args: {
    mode: 'single',
    value: dates.start
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const datepicker = getDatepicker(canvasElement);
    const trigger = getByShadowLabelText<HTMLElement>(canvasElement, 'Date picker');
    await step('syncs single date calendar selection', async () => {
      await userEvent.click(trigger);
      await waitFor(() => expect(trigger.ariaExpanded).toBe('true'));
      await userEvent.click(getDateButton(canvasElement, dates.afterStart));
      await waitFor(() => expect(datepicker.value).toBe(dates.afterStart));
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    const datepicker = getDatepicker(canvasElement);
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
      await waitFor(() => expect(datepicker.value).toEqual({
        start: dates.presetStart,
        end: dates.presetEnd
      }));
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
}`,...w.parameters?.docs?.source}}};const H=["CalendarSelectionSyncsRange","SingleDateSync","DropdownOpenClose","DisabledState","PresetSyncsRange"];export{p as CalendarSelectionSyncsRange,m as DisabledState,g as DropdownOpenClose,w as PresetSyncsRange,u as SingleDateSync,H as __namedExportsOrder,M as default};
