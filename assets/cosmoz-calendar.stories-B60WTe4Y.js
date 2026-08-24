import{i as E,w as d,t as k,I as O,b as T}from"./iframe-lAlaxMHP.js";import"./calendar-CubUTFcP.js";import"./preload-helper-PPVm8Dsz.js";import"./date-BRdSX8x6.js";const{expect:n,userEvent:c,waitFor:o}=__STORYBOOK_MODULE_TEST__,t={start:"2026-08-14",end:"2026-08-18",inRange:"2026-08-16",beforeStart:"2026-08-10",nextDayAfterStart:"2026-08-15",oneWeekAfterStart:"2026-08-21",min:"2026-08-10",max:"2026-08-20",beforeMin:"2026-08-09",afterMax:"2026-08-21",lastOfMonth:"2026-08-31",firstOfNextMonth:"2026-09-01"},N={title:"Tests/CosmozCalendar",component:"cosmoz-calendar",tags:["!autodocs"],args:{mode:"range",value:{start:t.start,end:t.end},min:"",max:"",numberOfMonths:2}},i=e=>a=>T`
    <cosmoz-calendar
        mode=${a.mode}
        locale=${e}
        number-of-months=${a.numberOfMonths}
        .value=${a.value}
        .min=${a.min||void 0}
        .max=${a.max||void 0}
    ></cosmoz-calendar>
`,m=e=>{const a=e.querySelector("cosmoz-calendar");return n(a).toBeTruthy(),a},r=(e,a)=>O(e,`date-${a}`),u={render:i("en-US"),args:{value:{start:t.start,end:void 0},min:t.min,max:t.max,numberOfMonths:1},play:async({canvasElement:e,step:a})=>{const s=m(e);await a("marks dates outside min and max as disabled",async()=>{const l=r(e,t.beforeMin),S=r(e,t.afterMax),M=r(e,t.min),D=r(e,t.max);n(l.ariaDisabled).toBe("true"),n(l.closest('[role="gridcell"]')?.ariaDisabled).toBe("true"),n(S.ariaDisabled).toBe("true"),n(S.closest('[role="gridcell"]')?.ariaDisabled).toBe("true"),n(M.ariaDisabled).toBeNull(),n(D.ariaDisabled).toBeNull()}),await a("ignores disabled dates when selecting a range end",async()=>{await c.click(r(e,t.afterMax)),await o(()=>n(s.value).toEqual({start:t.start,end:void 0})),await c.click(r(e,t.max)),await o(()=>n(s.value).toEqual({start:t.start,end:t.max}))})}},h={render:i("en-US"),play:async({canvasElement:e,step:a})=>{await a("renders the configured number of calendar grids",async()=>{const s=k(e,"grid");n(s).toHaveLength(2),n(r(e,t.start)).toBeTruthy(),n(r(e,t.firstOfNextMonth)).toBeTruthy()})}},w={render:i("en-US"),args:{mode:"single",value:t.start,numberOfMonths:1},play:async({canvasElement:e,step:a})=>{const s=m(e);await a("stores a string value in single date mode",async()=>{await c.click(r(e,t.end)),await o(()=>n(s.value).toBe(t.end))}),await a("selects only the chosen date in single date mode",async()=>{n(r(e,t.start).closest('[role="gridcell"]')?.ariaSelected).toBeNull(),n(r(e,t.end).closest('[role="gridcell"]')?.ariaSelected).toBe("true")})}},y={render:i("sv-SE"),args:{numberOfMonths:1},play:async({canvasElement:e,step:a})=>{await a("starts the week on the locale first day",async()=>{n(d(e,"mån")).toBeTruthy()})}},p={render:i("en-US"),args:{numberOfMonths:1},play:async({canvasElement:e,step:a})=>{await a("starts the week on the locale first day",async()=>{n(d(e,"Sun")).toBeTruthy()})}},g={render:i("en-US"),args:{value:{start:t.start,end:void 0},numberOfMonths:1},play:async({canvasElement:e,step:a})=>{const s=m(e);await a("swaps range endpoints when the end is before the start",async()=>{await c.click(r(e,t.beforeStart)),await o(()=>n(s.value).toEqual({start:t.beforeStart,end:t.start}))})}},v={render:i("en-US"),args:{value:{start:t.start,end:t.end},numberOfMonths:1},play:async({canvasElement:e,step:a})=>{await a("marks dates inside the selected range",async()=>{n(r(e,t.inRange).closest('[role="gridcell"]')?.ariaSelected).toBe("true")})}},f={render:i("en-US"),args:{value:{start:t.start,end:void 0},numberOfMonths:1},play:async({canvasElement:e,step:a})=>{const s=m(e),l=r(e,t.start);await a("moves focus by day and week with arrow keys",async()=>{l.focus(),await o(()=>n(s.shadowRoot?.activeElement).toBe(l)),await c.keyboard("{ArrowRight}"),await o(()=>n(s.shadowRoot?.activeElement).toBe(r(e,t.nextDayAfterStart))),await c.keyboard("{ArrowLeft}"),await c.keyboard("{ArrowDown}"),await o(()=>n(s.shadowRoot?.activeElement).toBe(r(e,t.oneWeekAfterStart))),await c.keyboard("{ArrowUp}"),await o(()=>n(s.shadowRoot?.activeElement).toBe(r(e,t.start)))}),await a("selects the focused date with the keyboard",async()=>{await c.keyboard("{ArrowRight}{Enter}"),await o(()=>n(s.value).toEqual({start:t.start,end:t.nextDayAfterStart}))})}},b={render:i("en-US"),args:{numberOfMonths:1},play:async({canvasElement:e,step:a})=>{await a("moves to the next visible month from the header",async()=>{await c.click(E(e,"Next month")),await o(()=>n(d(e,"September 2026")).toBeTruthy())}),await a("moves to the previous visible month from the header",async()=>{await c.click(E(e,"Previous month")),await o(()=>n(d(e,"August 2026")).toBeTruthy()),n(r(e,t.start)).toBeTruthy()})}},x={render:i("en-US"),args:{value:{start:t.start,end:void 0},numberOfMonths:1},play:async({canvasElement:e,step:a})=>{const s=m(e);await a("moves to the next month when focus passes the visible month",async()=>{r(e,t.lastOfMonth).focus(),await o(()=>n(s.shadowRoot?.activeElement).toBe(r(e,t.lastOfMonth))),await c.keyboard("{ArrowRight}"),await o(()=>n(s.shadowRoot?.activeElement).toBe(r(e,t.firstOfNextMonth))),n(d(e,"September 2026")).toBeTruthy()}),await a("moves to the previous month when focus leaves the visible month",async()=>{await c.keyboard("{ArrowLeft}"),await o(()=>n(s.shadowRoot?.activeElement).toBe(r(e,t.lastOfMonth))),n(d(e,"August 2026")).toBeTruthy()})}},B={render:i("en-US"),args:{value:{},numberOfMonths:1},play:async({canvasElement:e,step:a})=>{const s=new Date().toISOString().slice(0,10);await a("marks today",async()=>{n(r(e,s).ariaLabel).toContain("Today")})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  args: {
    value: {
      start: dates.start,
      end: undefined
    },
    min: dates.min,
    max: dates.max,
    numberOfMonths: 1
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const calendar = getCalendar(canvasElement);
    await step('marks dates outside min and max as disabled', async () => {
      const beforeMin = getDateButton(canvasElement, dates.beforeMin);
      const afterMax = getDateButton(canvasElement, dates.afterMax);
      const min = getDateButton(canvasElement, dates.min);
      const max = getDateButton(canvasElement, dates.max);
      expect(beforeMin.ariaDisabled).toBe('true');
      expect(beforeMin.closest<HTMLElement>('[role="gridcell"]')?.ariaDisabled).toBe('true');
      expect(afterMax.ariaDisabled).toBe('true');
      expect(afterMax.closest<HTMLElement>('[role="gridcell"]')?.ariaDisabled).toBe('true');
      expect(min.ariaDisabled).toBeNull();
      expect(max.ariaDisabled).toBeNull();
    });
    await step('ignores disabled dates when selecting a range end', async () => {
      await userEvent.click(getDateButton(canvasElement, dates.afterMax));
      await waitFor(() => expect(calendar.value).toEqual({
        start: dates.start,
        end: undefined
      }));
      await userEvent.click(getDateButton(canvasElement, dates.max));
      await waitFor(() => expect(calendar.value).toEqual({
        start: dates.start,
        end: dates.max
      }));
    });
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  play: async ({
    canvasElement,
    step
  }) => {
    await step('renders the configured number of calendar grids', async () => {
      const grids = getAllByShadowRole(canvasElement, 'grid');
      expect(grids).toHaveLength(2);
      expect(getDateButton(canvasElement, dates.start)).toBeTruthy();
      expect(getDateButton(canvasElement, dates.firstOfNextMonth)).toBeTruthy();
    });
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  args: {
    mode: 'single',
    value: dates.start,
    numberOfMonths: 1
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const calendar = getCalendar(canvasElement);
    await step('stores a string value in single date mode', async () => {
      await userEvent.click(getDateButton(canvasElement, dates.end));
      await waitFor(() => expect(calendar.value).toBe(dates.end));
    });
    await step('selects only the chosen date in single date mode', async () => {
      expect(getDateButton(canvasElement, dates.start).closest<HTMLElement>('[role="gridcell"]')?.ariaSelected).toBeNull();
      expect(getDateButton(canvasElement, dates.end).closest<HTMLElement>('[role="gridcell"]')?.ariaSelected).toBe('true');
    });
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('sv-SE'),
  args: {
    numberOfMonths: 1
  },
  play: async ({
    canvasElement,
    step
  }) => {
    await step('starts the week on the locale first day', async () => {
      expect(getByShadowText(canvasElement, 'mån')).toBeTruthy();
    });
  }
}`,...y.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  args: {
    numberOfMonths: 1
  },
  play: async ({
    canvasElement,
    step
  }) => {
    await step('starts the week on the locale first day', async () => {
      expect(getByShadowText(canvasElement, 'Sun')).toBeTruthy();
    });
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  args: {
    value: {
      start: dates.start,
      end: undefined
    },
    numberOfMonths: 1
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const calendar = getCalendar(canvasElement);
    await step('swaps range endpoints when the end is before the start', async () => {
      await userEvent.click(getDateButton(canvasElement, dates.beforeStart));
      await waitFor(() => expect(calendar.value).toEqual({
        start: dates.beforeStart,
        end: dates.start
      }));
    });
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  args: {
    value: {
      start: dates.start,
      end: dates.end
    },
    numberOfMonths: 1
  },
  play: async ({
    canvasElement,
    step
  }) => {
    await step('marks dates inside the selected range', async () => {
      expect(getDateButton(canvasElement, dates.inRange).closest<HTMLElement>('[role="gridcell"]')?.ariaSelected).toBe('true');
    });
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  args: {
    value: {
      start: dates.start,
      end: undefined
    },
    numberOfMonths: 1
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const calendar = getCalendar(canvasElement);
    const start = getDateButton(canvasElement, dates.start);
    await step('moves focus by day and week with arrow keys', async () => {
      start.focus();
      await waitFor(() => expect(calendar.shadowRoot?.activeElement).toBe(start));
      await userEvent.keyboard('{ArrowRight}');
      await waitFor(() => expect(calendar.shadowRoot?.activeElement).toBe(getDateButton(canvasElement, dates.nextDayAfterStart)));
      await userEvent.keyboard('{ArrowLeft}');
      await userEvent.keyboard('{ArrowDown}');
      await waitFor(() => expect(calendar.shadowRoot?.activeElement).toBe(getDateButton(canvasElement, dates.oneWeekAfterStart)));
      await userEvent.keyboard('{ArrowUp}');
      await waitFor(() => expect(calendar.shadowRoot?.activeElement).toBe(getDateButton(canvasElement, dates.start)));
    });
    await step('selects the focused date with the keyboard', async () => {
      await userEvent.keyboard('{ArrowRight}{Enter}');
      await waitFor(() => expect(calendar.value).toEqual({
        start: dates.start,
        end: dates.nextDayAfterStart
      }));
    });
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  args: {
    numberOfMonths: 1
  },
  play: async ({
    canvasElement,
    step
  }) => {
    await step('moves to the next visible month from the header', async () => {
      await userEvent.click(getByShadowLabelText(canvasElement, 'Next month'));
      await waitFor(() => expect(getByShadowText(canvasElement, 'September 2026')).toBeTruthy());
    });
    await step('moves to the previous visible month from the header', async () => {
      await userEvent.click(getByShadowLabelText(canvasElement, 'Previous month'));
      await waitFor(() => expect(getByShadowText(canvasElement, 'August 2026')).toBeTruthy());
      expect(getDateButton(canvasElement, dates.start)).toBeTruthy();
    });
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  args: {
    value: {
      start: dates.start,
      end: undefined
    },
    numberOfMonths: 1
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const calendar = getCalendar(canvasElement);
    await step('moves to the next month when focus passes the visible month', async () => {
      getDateButton(canvasElement, dates.lastOfMonth).focus();
      await waitFor(() => expect(calendar.shadowRoot?.activeElement).toBe(getDateButton(canvasElement, dates.lastOfMonth)));
      await userEvent.keyboard('{ArrowRight}');
      await waitFor(() => expect(calendar.shadowRoot?.activeElement).toBe(getDateButton(canvasElement, dates.firstOfNextMonth)));
      expect(getByShadowText(canvasElement, 'September 2026')).toBeTruthy();
    });
    await step('moves to the previous month when focus leaves the visible month', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      await waitFor(() => expect(calendar.shadowRoot?.activeElement).toBe(getDateButton(canvasElement, dates.lastOfMonth)));
      expect(getByShadowText(canvasElement, 'August 2026')).toBeTruthy();
    });
  }
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  args: {
    value: {},
    numberOfMonths: 1
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const today = new Date().toISOString().slice(0, 10);
    await step('marks today', async () => {
      expect(getDateButton(canvasElement, today).ariaLabel).toContain('Today');
    });
  }
}`,...B.parameters?.docs?.source}}};const F=["MinMaxRange","NumberOfCalendars","SelectionMode","LocaleSwedenFirstDayOfWeek","LocaleUsFirstDayOfWeek","SwapsEndBeforeStart","RangeSelection","KeyboardNavigation","HeaderMonthNavigation","KeyboardMonthNavigation","TodaySemantics"];export{b as HeaderMonthNavigation,x as KeyboardMonthNavigation,f as KeyboardNavigation,y as LocaleSwedenFirstDayOfWeek,p as LocaleUsFirstDayOfWeek,u as MinMaxRange,h as NumberOfCalendars,v as RangeSelection,w as SelectionMode,g as SwapsEndBeforeStart,B as TodaySemantics,F as __namedExportsOrder,N as default};
