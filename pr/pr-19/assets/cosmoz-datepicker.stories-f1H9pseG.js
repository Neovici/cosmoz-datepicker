import{i as d,n as r,b as x,w as S,I as b}from"./iframe-C3mFOlT7.js";import"./cosmoz-datepicker-DwZY4yvc.js";import{d as v,a as h,m as $}from"./helper-wyyDHRzr.js";import"./preload-helper-PPVm8Dsz.js";import"./calendar-DsG3LsbE.js";import"./date-DgMyZN_h.js";import"./date-input-CnX7h9ck.js";const{expect:t,userEvent:o,waitFor:c}=__STORYBOOK_MODULE_TEST__,a={start:"2026-08-14",end:"2026-08-18",afterStart:"2026-08-16",afterEnd:"2026-08-20",presetStart:"2026-08-03",presetEnd:"2026-08-07"},H={title:"Tests/CosmozDatepicker",component:"cosmoz-datepicker",tags:["!autodocs"],argTypes:{mode:$,value:h,min:v,max:v},args:{mode:"range",value:{start:a.start,end:a.end},min:"",max:"",disabled:!1,noPresets:!0,singleCalendar:!0,presets:void 0,triggerSize:"",triggerVariant:"secondary"}},l=e=>x`
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
`,E=e=>{const n=e.querySelector("cosmoz-datepicker");return t(n).toBeTruthy(),n},p=(e,n)=>b(e,`date-${n}`),u={render:l,play:async({canvasElement:e,step:n})=>{const s=E(e),i=d(e,"Date picker");await n("syncs calendar range selection to inputs and trigger",async()=>{await o.click(i),await c(()=>t(i.ariaExpanded).toBe("true")),await o.click(p(e,a.afterStart)),t(r(e,"spinbutton",{name:/^month, start date$/iu}).value).toBe("8"),t(r(e,"spinbutton",{name:/^day, start date$/iu}).value).toBe("16"),t(r(e,"spinbutton",{name:/^year, start date$/iu}).value).toBe("2026"),await o.click(p(e,a.afterEnd)),t(r(e,"spinbutton",{name:/^month, end date$/iu}).value).toBe("8"),t(r(e,"spinbutton",{name:/^day, end date$/iu}).value).toBe("20"),t(r(e,"spinbutton",{name:/^year, end date$/iu}).value).toBe("2026"),t(i.textContent).toContain("Aug 16, 2026"),t(i.textContent).toContain("Aug 20, 2026"),await o.click(r(e,"button",{name:/^ok$/iu})),await c(()=>t(s.value).toEqual({start:a.afterStart,end:a.afterEnd}))})}},g={render:l,args:{mode:"single",value:a.start},play:async({canvasElement:e,step:n})=>{const s=E(e),i=d(e,"Date picker");await n("syncs single date calendar selection",async()=>{await o.click(i),await c(()=>t(i.ariaExpanded).toBe("true")),await o.click(p(e,a.afterStart)),await c(()=>{t(r(e,"spinbutton",{name:/^month$/iu}).value).toBe("8"),t(r(e,"spinbutton",{name:/^day$/iu}).value).toBe("16"),t(r(e,"spinbutton",{name:/^year$/iu}).value).toBe("2026")}),t(i.textContent).toContain("Aug 16, 2026"),await o.click(r(e,"button",{name:/^ok$/iu})),await c(()=>t(s.value).toBe(a.afterStart))})}},m={render:l,play:async({canvasElement:e,step:n})=>{const s=d(e,"Date picker");await n("opens from the trigger",async()=>{await o.click(s),await c(()=>t(s.ariaExpanded).toBe("true")),t(r(e,"dialog")).toBeTruthy()}),await n("closes from the OK button",async()=>{await o.click(r(e,"button",{name:/^ok$/iu})),await c(()=>t(s.ariaExpanded).toBe("false"))})}},w={render:l,play:async({canvasElement:e,step:n})=>{const s=E(e),i=d(e,"Date picker");await n("opens the dropdown and selects a new range",async()=>{await o.click(i),await c(()=>t(i.ariaExpanded).toBe("true")),await o.click(p(e,a.afterStart)),await o.click(p(e,a.afterEnd)),t(s.value).toEqual({start:a.start,end:a.end})}),await n("updates the value once the dropdown closes",async()=>{await o.click(r(e,"button",{name:/^ok$/iu})),await c(()=>t(s.value).toEqual({start:a.afterStart,end:a.afterEnd}))})}},y={render:l,args:{disabled:!0},play:async({canvasElement:e,step:n})=>{const s=d(e,"Date picker");await n("does not open while disabled",async()=>{await o.click(s),t(s.ariaDisabled).toBe("true"),t(s.ariaExpanded).toBe("false")})}},k={render:l,args:{noPresets:!1,singleCalendar:!1,presets:[{label:"Work week",start:a.presetStart,end:a.presetEnd}]},globals:{viewport:{value:"desktop",isRotated:!1}},play:async({canvasElement:e,step:n})=>{const s=E(e),i=d(e,"Date picker");await n("syncs preset selection to calendar, inputs, and trigger",async()=>{await o.click(i),await c(()=>t(i.ariaExpanded).toBe("true")),await o.click(r(e,"button",{name:"Work week"}));const B=S(e,"Work week",{selector:"cosmoz-button"});t(r(e,"spinbutton",{name:/^day, start date$/iu}).value).toBe("3"),t(r(e,"spinbutton",{name:/^day, end date$/iu}).value).toBe("7"),t(B.ariaPressed).toBe("true"),t(i.textContent).toContain("Aug 3, 2026"),t(i.textContent).toContain("Aug 7, 2026"),await o.click(r(e,"button",{name:/^ok$/iu})),await c(()=>t(s.value).toEqual({start:a.presetStart,end:a.presetEnd}))})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      await userEvent.click(getByShadowRole(canvasElement, 'button', {
        name: /^ok$/iu
      }));
      await waitFor(() => expect(datepicker.value).toEqual({
        start: dates.afterStart,
        end: dates.afterEnd
      }));
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
    const datepicker = getDatepicker(canvasElement);
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
      await userEvent.click(getByShadowRole(canvasElement, 'button', {
        name: /^ok$/iu
      }));
      await waitFor(() => expect(datepicker.value).toBe(dates.afterStart));
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
      expect(getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
        name: /^day, start date$/iu
      }).value).toBe('3');
      expect(getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
        name: /^day, end date$/iu
      }).value).toBe('7');
      expect(preset.ariaPressed).toBe('true');
      expect(trigger.textContent).toContain('Aug 3, 2026');
      expect(trigger.textContent).toContain('Aug 7, 2026');
      await userEvent.click(getByShadowRole(canvasElement, 'button', {
        name: /^ok$/iu
      }));
      await waitFor(() => expect(datepicker.value).toEqual({
        start: dates.presetStart,
        end: dates.presetEnd
      }));
    });
  }
}`,...k.parameters?.docs?.source}}};const A=["CalendarSelectionSyncsRange","SingleDateSync","DropdownOpenClose","ValueUpdatesOnlyOnClose","DisabledState","PresetSyncsRange"];export{u as CalendarSelectionSyncsRange,y as DisabledState,m as DropdownOpenClose,k as PresetSyncsRange,g as SingleDateSync,w as ValueUpdatesOnlyOnClose,A as __namedExportsOrder,H as default};
