import{n as s,f as b,t as S,b as L}from"./iframe-C3mFOlT7.js";import"./date-input-CnX7h9ck.js";import{d as x}from"./helper-wyyDHRzr.js";import"./preload-helper-PPVm8Dsz.js";import"./date-DgMyZN_h.js";const{expect:t,userEvent:p,waitFor:c}=__STORYBOOK_MODULE_TEST__,A={title:"Tests/CosmozDateInput",component:"cosmoz-date-input",tags:["!autodocs"],argTypes:{value:x},args:{value:"2026-08-14"}},E={"sv-SE":"-","en-US":"/"},i=e=>a=>L`
    <cosmoz-date-input .value=${a.value||void 0} locale=${e}>
    </cosmoz-date-input>
`,B=e=>{const a=e.querySelector("cosmoz-date-input");return t(a).toBeTruthy(),a},g=async(e,a)=>{e.focus(),e.select(),await p.type(e,a)},l={render:i("en-US"),play:async({canvasElement:e,step:a,args:n})=>{const o=s(e,"spinbutton",{name:/year/iu}),r=s(e,"spinbutton",{name:/month/iu}),u=s(e,"spinbutton",{name:/day/iu});await a("parses the input date value into date parts",async()=>{const I=`${o.value.padStart(4,"0")}-${r.value.padStart(2,"0")}-${u.value.padStart(2,"0")}`;t(I).toEqual(n.value)})}},d={render:i("en-US"),args:{value:""},play:async({canvasElement:e,step:a})=>{const n=s(e,"spinbutton",{name:/year/iu}),o=s(e,"spinbutton",{name:/month/iu}),r=s(e,"spinbutton",{name:/day/iu});await a("shows placeholders for empty date parts",async()=>{t(o.placeholder).toBe("MM"),t(r.placeholder).toBe("DD"),t(n.placeholder).toBe("YYYY"),t(o.value).toBe(""),t(r.value).toBe(""),t(n.value).toBe("")})}},y={render:i("sv-SE"),play:async({canvasElement:e,step:a})=>{await a("renders the locale correct date separator",async()=>{t(b(e,E["sv-SE"])).toHaveLength(2)}),await a("renders date parts in the locale correct order",async()=>{const[n,o,r]=S(e,"spinbutton");t(n.ariaLabel).toBe("Year"),t(o.ariaLabel).toBe("Month"),t(r.ariaLabel).toBe("Day")})}},m={render:i("en-US"),play:async({canvasElement:e,step:a})=>{await a("renders the locale correct date separator",async()=>{t(b(e,E["en-US"])).toHaveLength(2)}),await a("renders date parts in the locale correct order",async()=>{const[n,o,r]=S(e,"spinbutton");t(n.ariaLabel).toBe("Month"),t(o.ariaLabel).toBe("Day"),t(r.ariaLabel).toBe("Year")})}},w={render:i("en-US"),args:{value:"2024-12-31"},play:async({canvasElement:e,step:a})=>{const n=B(e),o=s(e,"spinbutton",{name:/month/iu}),r=s(e,"spinbutton",{name:/day/iu});await a("wraps the month when incrementing past December",async()=>{o.focus(),await p.keyboard("{ArrowUp}"),await c(()=>t(o.value).toBe("1")),await c(()=>t(n.value).toBe("2024-01-31"))}),await a("wraps the month when decrementing before January",async()=>{await p.keyboard("{ArrowDown}"),await c(()=>t(o.value).toBe("12")),await c(()=>t(n.value).toBe("2024-12-31"))}),await a("wraps the day within the current month",async()=>{r.focus(),await p.keyboard("{ArrowUp}"),await c(()=>t(r.value).toBe("1")),await c(()=>t(n.value).toBe("2024-12-01"))})}},h={render:i("en-US"),play:async({canvasElement:e,step:a})=>{const n=B(e),o=s(e,"spinbutton",{name:/year/iu}),r=s(e,"spinbutton",{name:/month/iu}),u=s(e,"spinbutton",{name:/day/iu});await a("moves focus between date parts with arrow keys",async()=>{r.focus(),t(n.shadowRoot?.activeElement).toBe(r),await p.keyboard("{ArrowRight}"),t(n.shadowRoot?.activeElement).toBe(u),await p.keyboard("{ArrowRight}"),t(n.shadowRoot?.activeElement).toBe(o),await p.keyboard("{ArrowLeft}"),t(n.shadowRoot?.activeElement).toBe(u)})}},v={render:i("en-US"),args:{value:"2024-09-15"},play:async({canvasElement:e,step:a})=>{const n=B(e),o=s(e,"spinbutton",{name:/month/iu}),r=s(e,"spinbutton",{name:/day/iu});await a("resets overflowing month input to the last typed digit",async()=>{await g(o,"91"),await c(()=>t(o.value).toBe("1")),await c(()=>t(n.value).toBe("2024-01-15"))}),await a("resets overflowing day input to the last typed digit",async()=>{await g(r,"99"),await c(()=>t(r.value).toBe("9")),await c(()=>t(n.value).toBe("2024-01-09"))})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const year = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
      name: /year/iu
    });
    const month = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
      name: /month/iu
    });
    const day = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
      name: /day/iu
    });
    await step('parses the input date value into date parts', async () => {
      const parsedValue = \`\${year.value.padStart(4, '0')}-\${month.value.padStart(2, '0')}-\${day.value.padStart(2, '0')}\`;
      expect(parsedValue).toEqual(args.value);
    });
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  args: {
    value: ''
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const year = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
      name: /year/iu
    });
    const month = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
      name: /month/iu
    });
    const day = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
      name: /day/iu
    });
    await step('shows placeholders for empty date parts', async () => {
      expect(month.placeholder).toBe('MM');
      expect(day.placeholder).toBe('DD');
      expect(year.placeholder).toBe('YYYY');
      expect(month.value).toBe('');
      expect(day.value).toBe('');
      expect(year.value).toBe('');
    });
  }
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('sv-SE'),
  play: async ({
    canvasElement,
    step
  }) => {
    await step('renders the locale correct date separator', async () => {
      expect(getAllByShadowText(canvasElement, localeSeparators['sv-SE'])).toHaveLength(2);
    });
    await step('renders date parts in the locale correct order', async () => {
      const [firstInput, secondInput, thirdInput] = getAllByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton');
      expect(firstInput.ariaLabel).toBe('Year');
      expect(secondInput.ariaLabel).toBe('Month');
      expect(thirdInput.ariaLabel).toBe('Day');
    });
  }
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  play: async ({
    canvasElement,
    step
  }) => {
    await step('renders the locale correct date separator', async () => {
      expect(getAllByShadowText(canvasElement, localeSeparators['en-US'])).toHaveLength(2);
    });
    await step('renders date parts in the locale correct order', async () => {
      const [firstInput, secondInput, thirdInput] = getAllByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton');
      expect(firstInput.ariaLabel).toBe('Month');
      expect(secondInput.ariaLabel).toBe('Day');
      expect(thirdInput.ariaLabel).toBe('Year');
    });
  }
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  args: {
    value: '2024-12-31'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const dateInput = getDateInput(canvasElement);
    const month = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
      name: /month/iu
    });
    const day = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
      name: /day/iu
    });
    await step('wraps the month when incrementing past December', async () => {
      month.focus();
      await userEvent.keyboard('{ArrowUp}');
      await waitFor(() => expect(month.value).toBe('1'));
      await waitFor(() => expect(dateInput.value).toBe('2024-01-31'));
    });
    await step('wraps the month when decrementing before January', async () => {
      await userEvent.keyboard('{ArrowDown}');
      await waitFor(() => expect(month.value).toBe('12'));
      await waitFor(() => expect(dateInput.value).toBe('2024-12-31'));
    });
    await step('wraps the day within the current month', async () => {
      day.focus();
      await userEvent.keyboard('{ArrowUp}');
      await waitFor(() => expect(day.value).toBe('1'));
      await waitFor(() => expect(dateInput.value).toBe('2024-12-01'));
    });
  }
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  play: async ({
    canvasElement,
    step
  }) => {
    const dateInput = getDateInput(canvasElement);
    const year = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
      name: /year/iu
    });
    const month = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
      name: /month/iu
    });
    const day = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
      name: /day/iu
    });
    await step('moves focus between date parts with arrow keys', async () => {
      month.focus();
      expect(dateInput.shadowRoot?.activeElement).toBe(month);
      await userEvent.keyboard('{ArrowRight}');
      expect(dateInput.shadowRoot?.activeElement).toBe(day);
      await userEvent.keyboard('{ArrowRight}');
      expect(dateInput.shadowRoot?.activeElement).toBe(year);
      await userEvent.keyboard('{ArrowLeft}');
      expect(dateInput.shadowRoot?.activeElement).toBe(day);
    });
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: renderWithLocale('en-US'),
  args: {
    value: '2024-09-15'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const dateInput = getDateInput(canvasElement);
    const month = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
      name: /month/iu
    });
    const day = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
      name: /day/iu
    });
    await step('resets overflowing month input to the last typed digit', async () => {
      await typeValue(month, '91');
      await waitFor(() => expect(month.value).toBe('1'));
      await waitFor(() => expect(dateInput.value).toBe('2024-01-15'));
    });
    await step('resets overflowing day input to the last typed digit', async () => {
      await typeValue(day, '99');
      await waitFor(() => expect(day.value).toBe('9'));
      await waitFor(() => expect(dateInput.value).toBe('2024-01-09'));
    });
  }
}`,...v.parameters?.docs?.source}}};const H=["ParsesValue","EmptyPlaceholders","LocaleSweden","LocaleUs","ArrowKeyWrapping","ArrowKeyNavigation","OverflowTypingReset"];export{h as ArrowKeyNavigation,w as ArrowKeyWrapping,d as EmptyPlaceholders,y as LocaleSweden,m as LocaleUs,v as OverflowTypingReset,l as ParsesValue,H as __namedExportsOrder,A as default};
