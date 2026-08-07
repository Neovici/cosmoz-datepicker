import{b as K,e as rt,n as at,u as Y,o as z,f as N,g as nt,t as $,i as A,h as R,j as D,k as pt,m as mt,p as zt,q as y,s as L,v as B,w as Z,x as M,y as V,z as S}from"./helper-D7kxrPvK.js";import{d as g,A as yt,w as st,E as wt,t as xt}from"./iframe-C9d0ZXyf.js";const kt=K`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		inset: 1px;
		border: 1px solid var(--skeumorphic-color, rgba(255, 255, 255, 0.12));
		border-radius: var(--skeumorphic-radius, calc(var(--cz-radius-md) - 1px));
		pointer-events: none;
		mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
		-webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
	}
`,$t=K`
	:host {
		display: inline-flex;
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .button {
		height: 36px;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	:host([size='lg']) .button {
		height: 44px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='xl']) .button {
		height: 48px;
		padding: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * BUTTON BASE STYLES (Primary - default)
	 * ======================================== */

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		cursor: pointer;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-semibold);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease;
		width: 100%;
		white-space: nowrap;
		border: none;
		background: none;
		text-align: center;

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${kt}
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			outline: none;
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	/* ========================================
	 * STYLE VARIANTS
	 * ======================================== */

	:host([variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-tertiary);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	:host([variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&::before {
			display: none;
		}

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-secondary);
		}

		&:focus-visible {
			box-shadow: var(--cz-focus-ring);
		}
	}

	:host([variant='destructive']) .button {
		background-color: var(--cz-color-bg-error-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-error-800);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring-error);
		}
	}

	:host([variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-brand);
		box-shadow: none;
		padding: 0;
		height: auto;

		&::before {
			display: none;
		}

		&:hover {
			text-decoration: underline;
			color: var(--cz-color-text-brand-hover);
		}

		&:active {
			color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			text-decoration: underline;
			box-shadow: var(--cz-focus-ring);
			border-radius: var(--cz-radius-xs);
		}
	}

	/* ========================================
	 * DISABLED STATE
	 * ======================================== */

	:host([disabled]) .button {
		cursor: not-allowed;
		pointer-events: none;

		&::before {
			display: none;
		}
	}

	:host([disabled]) .button,
	:host([disabled][variant='primary']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='destructive']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
	}

	/* ========================================
	 * ICON SLOTS
	 * ======================================== */

	::slotted(svg) {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
`,Dt=["variant","size","disabled","full-width","type","value","href","target","rel","download"],Mt=t=>{const e=t.hasAttribute("disabled"),o=t.getAttribute("type")||"button",r=t.getAttribute("href");Y(()=>{const a=i=>{t.hasAttribute("disabled")&&i.stopImmediatePropagation()};return t.addEventListener("click",a,{capture:!0}),()=>t.removeEventListener("click",a,{capture:!0})},[]);const n=g`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(r!=null){const a=t.getAttribute("target"),i=t.getAttribute("rel"),h=t.getAttribute("download");return g`
			<a
				href=${r}
				class="button"
				part="button"
				aria-disabled=${e?"true":yt}
				target=${z(a)}
				rel=${z(i)}
				download=${z(h)}
				>${n}</a
			>
		`}return g`
		<button type=${o} class="button" ?disabled=${e} part="button">
			${n}
		</button>
	`};customElements.define("cosmoz-button",rt(Mt,{observedAttributes:Dt,styleSheets:[at,$t],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const St=({slot:t,title:e,className:o,width:r="24",height:n="24",styles:a}={})=>g`
  <svg
    slot=${z(t)}
    class=${`chevron-left-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${n}
    style=${z(a)}
  >
    ${N(e,()=>st`<title>${e}</title>`)}
    <path d="m15 18-6-6 6-6" />
  </svg>
`,At=({slot:t,title:e,className:o,width:r="24",height:n="24",styles:a}={})=>g`
  <svg
    slot=${z(t)}
    class=${`chevron-right-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${n}
    style=${z(a)}
  >
    ${N(e,()=>st`<title>${e}</title>`)}
    <path d="m9 18 6-6-6-6" />
  </svg>
`;function Et(t){return nt(t,Date.now())}function ct(t,e){const o=$(t,e?.in),r=o.getMonth();return o.setFullYear(o.getFullYear(),r+1,0),o.setHours(23,59,59,999),o}function U(t,e){const o=$(t,e?.in);return o.setDate(1),o.setHours(0,0,0,0),o}function q(t,e){return+$(t)>+$(e)}function _(t,e){return+$(t)<+$(e)}function It(t,e){return A(nt(t,t),Et(t))}function J(t,e,o){const r=+$(t,o?.in),[n,a]=[+$(e.start,o?.in),+$(e.end,o?.in)].sort((i,h)=>i-h);return r>=n&&r<=a}function H(t,e,o){return R(t,-e,o)}function it(t,e,o){return D(t,-e,o)}const Ct=pt(class extends mt{constructor(t){if(super(t),t.type!==zt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}const o=t.element.classList;for(const r of this.st)r in e||(o.remove(r),this.st.delete(r));for(const r in e){const n=!!e[r];n===this.st.has(r)||this.nt?.has(r)||(n?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return wt}}),W=(t,...e)=>typeof t=="function"?t(...e):t,lt=t=>(new Intl.Locale(t).getWeekInfo?.()?.firstDay??1)%7,Tt=(t,e)=>{const o=lt(e);return(t.getDay()-o+7)%7},Ft=(t,e)=>H(t,Tt(t,e)),Xt=(t,e,o)=>{const r=y(t),n=y(e);if(r&&n){const a=new Intl.DateTimeFormat(o,{year:"numeric",month:"short",day:"numeric"});return`${a.format(r)} – ${a.format(n)}`}return xt("Select dates")},Zt=t=>t.target?.dispatchEvent(new Event("select",{bubbles:!0})),F=(t,e,o)=>e&&_(t,e)?e:o&&q(t,o)?o:t,Q=(t,e,o)=>{const r=y(t),n=y(e),a=y(o);return L(F(r,n,a),"yyyy-MM-dd")},Jt=({start:t,end:e},o,r,n,a)=>{o(Q(W(t),n,a)),r(Q(W(e),n,a))},Qt=(t,e,o)=>!!e&&!!o&&e===W(t.start)&&o===W(t.end),Lt=t=>{const e=lt(t),o=new Intl.DateTimeFormat(t,{weekday:"short"});return Array.from({length:7},(n,a)=>o.format(new Date(2023,0,1+a+e)))},Nt=(t,e)=>Intl.DateTimeFormat(e,{month:"long"}).format(t),Ot=(t,e)=>{const o=U(t),r=Ft(o,e),n=6,a=[];for(let i=0;i<n;i++){const h=[];for(let v=0;v<7;v++){const f=R(r,i*7+v),m={month:f.getMonth(),day:f.getDate(),iso:f.toISOString(),isToday:It(f),isCurrentMonth:o.getMonth()===f.getMonth()};h.push(m)}a.push(h)}return a},jt=(t,e,o)=>!!(e&&A(t,e)||o&&A(t,o)),Bt=(t,e,o,r)=>!!(o&&e&&J(t,{start:e,end:o})||!o&&r&&e&&J(t,{start:e,end:r})),P=(t,e,o)=>!!(e&&_(t,e)||o&&q(t,o)),tt=(t,e,o,r)=>e&&P(t,o,r)?"true":void 0,Pt=(t,e)=>e&&A(new Date(t.iso),e)?!0:void 0,Rt=(t,e)=>e&&A(new Date(t.iso),e)?!0:void 0,et=(t,e)=>_(t,U(e)),ot=(t,e,o)=>q(t,ct(D(e,o-1))),Wt=(t,e)=>({ArrowLeft:H(e,1),ArrowRight:R(e,1),ArrowUp:H(e,7),ArrowDown:R(e,7)})[t.key],j=t=>y(t.target.dataset.date),_t=({day:t,endDate:e,focusedDate:o,locale:r,maxDate:n,minDate:a,numberOfMonths:i,onClick:h,onFocus:v,onPointerDown:f,onPointerEnter:m,startDate:d})=>{const u=new Date(t.iso);return g`
		<td ?data-hidden=${!t.isCurrentMonth&&i>1}>
			<div
				class="date-cell-wrapper ${Bt(u,d,e,o)?"in-range":""}"
			>
				<div
					class=${Ct({"date-cell":!0,"selected-cell":jt(u,d,e),"focused-highlighted-cell":!e&&!!d&&A(u,o),"today-cell":t.isToday&&t.isCurrentMonth,"other-month-cell":!t.isCurrentMonth})}
					role="button"
					tabindex=${A(u,o)?"0":"-1"}
					aria-label=${u.toLocaleString(r,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}
					aria-disabled=${z(tt(u,t.isCurrentMonth,a,n))}
					data-date=${z(t.isCurrentMonth?L(u,"yyyy-MM-dd"):void 0)}
					data-disabled=${z(tt(u,t.isCurrentMonth,a,n))}
					data-start=${z(Pt(t,d))}
					data-end=${z(Rt(t,e))}
					@pointerdown=${f}
					@click=${h}
					@pointerenter=${m}
					@focus=${v}
				>
					${t.day}
				</div>
			</div>
		</td>
	`},Vt=({endDate:t,focusedDate:e,locale:o,maxDate:r,minDate:n,month:a,numberOfMonths:i,onClick:h,onFocus:v,onKeyDown:f,onPointerDown:m,onPointerEnter:d,startDate:u,weekdayNames:b})=>g`
	<table @keydown=${f}>
		<thead>
			<tr>
				${B(b,l=>l,l=>g`<th><div class="weekday">${l}</div></th>`)}
			</tr>
		</thead>
		<tbody>
			${B(a,(l,w)=>`month-${w}`,l=>g`
					<tr>
						${B(l,w=>w.iso,w=>_t({day:w,endDate:t,focusedDate:e,locale:o,maxDate:r,minDate:n,numberOfMonths:i,onClick:h,onFocus:v,onPointerDown:m,onPointerEnter:d,startDate:u}))}
					</tr>
				`)}
		</tbody>
	</table>
`,Yt=({index:t,locale:e,numberOfMonths:o,selectedMonth:r,setSelectedMonth:n})=>g`
	<header>
		${N(t===0,()=>g`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="prev-button"
					@click=${()=>n(it(r,o))}
					>${St()}</cosmoz-button
				>
			`)}
		<h2 class="month-label">
			${Nt(D(r,t),e)}
			${D(r,t).getFullYear()}
		</h2>
		${N(t===o-1,()=>g`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="next-button"
					@click=${()=>n(D(r,o))}
					>${At()}</cosmoz-button
				>
			`)}
	</header>
`,Ht=K`
	:host {
		--cell-size: calc(var(--cz-spacing) * 10);
	}

	.calendar {
		display: flex;
	}

	.separator {
		width: 1px;
		align-self: stretch;
		background: var(--cz-color-border-secondary);
		flex-shrink: 0;
	}

	.month-wrapper {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 3);
	}

	.month-wrapper.padded {
		padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 6);
	}

	header {
		display: grid;
		align-items: center;
		grid-template-columns: 36px 1fr 36px;
		grid-template-areas: 'a b c';
	}

	.month-label {
		grid-area: b;
		text-align: center;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-semibold);
		color: var(--cz-color-text-secondary);
		text-transform: capitalize;
	}

	.prev-button {
		grid-area: a;
	}

	.next-button {
		grid-area: c;
	}

	cosmoz-button::part(button) {
		padding: calc(var(--cz-spacing) * 2);
	}

	table {
		border-collapse: collapse;
	}

	tr {
		border-bottom: var(--cz-spacing) solid transparent;
	}

	.weekday {
		width: var(--cell-size);
		height: var(--cell-size);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-medium);
		color: var(--cz-color-text-secondary);
		text-transform: capitalize;
	}

	.date-cell-wrapper {
		position: relative;
	}

	td:not([data-hidden]) .date-cell-wrapper.in-range {
		background: var(--cz-color-bg-secondary);
		border-radius: 0;
	}

	.date-cell-wrapper.in-range:has(.date-cell[data-start]),
	td:first-child .date-cell-wrapper.in-range {
		border-top-left-radius: var(--cz-radius-full);
		border-bottom-left-radius: var(--cz-radius-full);
	}

	.date-cell-wrapper.in-range:has(.date-cell[data-end]),
	td:last-child .date-cell-wrapper.in-range {
		border-top-right-radius: var(--cz-radius-full);
		border-bottom-right-radius: var(--cz-radius-full);
	}

	td:not([data-hidden]) + td[data-hidden] .date-cell-wrapper.in-range::after {
		content: '';
		position: absolute;
		inset: 0;

		background: linear-gradient(
			to left,
			transparent,
			var(--cz-color-bg-secondary)
		);
	}

	td[data-hidden]:has(+ td:not([data-hidden]))
		.date-cell-wrapper.in-range::after {
		content: '';
		position: absolute;
		inset: 0;

		background: linear-gradient(
			to right,
			transparent,
			var(--cz-color-bg-secondary)
		);
	}

	.date-cell {
		position: relative;
		width: var(--cell-size);
		height: var(--cell-size);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--cz-radius-full);
		user-select: none;
		cursor: pointer;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
	}

	.date-cell:not([data-disabled='true'], .other-month-cell):hover {
		background: var(--cz-color-bg-primary-hover);
		color: var(--cz-color-text-primary);
		font-weight: var(--cz-font-weight-medium);
	}

	.date-cell[data-disabled='true'] {
		cursor: not-allowed;
		color: var(--cz-color-text-placeholder-subtle);
	}

	.date-cell:focus-within {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}

	.date-cell.today-cell {
		background: var(--cz-color-bg-secondary);
	}

	.date-cell.today-cell::after {
		content: '';
		width: 4px;
		height: 4px;
		border-radius: var(--cz-radius-full);
		position: absolute;
		bottom: 4px;
		left: 50%;
		transform: translateX(-50%);
		background: var(--cz-color-bg-brand-solid);
	}

	.date-cell.selected-cell.today-cell::after,
	.date-cell.focused-highlighted-cell.today-cell::after {
		background: var(--cz-color-text-on-brand);
	}

	.date-cell.today-cell:hover {
		background: var(--cz-color-bg-secondary-hover);
	}

	.in-range .date-cell:hover {
		background: var(--cz-color-bg-secondary-hover);
	}

	.date-cell.selected-cell,
	.date-cell.focused-highlighted-cell {
		color: var(--cz-color-text-on-brand);
		background: var(--cz-color-bg-brand-solid);
	}

	.date-cell.selected-cell:hover,
	.date-cell.focused-highlighted-cell:hover {
		color: var(--cz-color-text-on-brand);
		background: var(--cz-color-bg-brand-solid-hover);
	}

	.date-cell.other-month-cell {
		cursor: default;
		color: var(--cz-color-text-placeholder-subtle);
	}

	td[data-hidden] .date-cell {
		visibility: hidden;
	}
`,Kt=t=>{const{locale:e,numberOfMonths:o,min:r,max:n}=t,a=e??navigator.language,i=Number(o??1),[h,v]=Z("start"),[f,m]=Z("end"),d=M(()=>y(h),[h]),u=M(()=>y(f),[f]),b=M(()=>y(r),[r]),l=M(()=>y(n),[n]),w=M(()=>F(d??new Date,b,l),[d,b,l]),[p,E]=V(w),[T,x]=V(!1),[I,k]=V(w),dt=M(()=>Lt(a),[a]);Y(()=>{T&&t.shadowRoot?.querySelector(`[data-date="${L(I,"yyyy-MM-dd")}"]`)?.focus()},[I,t,T]);const ut=M(()=>{const c=[];for(let s=0;s<i;s++)c.push(Ot(D(p,s),a));return c},[p,a,i]),O=S(c=>{const s=L(c,"yyyy-MM-dd");if(!d&&!u){v(s);return}if(d&&!u&&_(c,d)){v(s),m(L(d,"yyyy-MM-dd"));return}if(d&&!u){m(s);return}d&&u&&(v(s),m(void 0))},[d,u,v,m]),G=S(c=>{const s=F(c,b,l);et(s,p)&&E(C=>it(C,i)),ot(s,p,i)&&E(C=>D(C,i)),k(s)},[b,l,i,p,k,E]);Y(()=>{if(et(I,p)){const c=F(U(p),b,l);k(c)}if(ot(I,p,i)){const c=F(ct(D(p,i-1)),b,l);k(c)}},[I,l,b,i,p,k]);const ht=S(c=>{if(!(c.target instanceof Element))return;const s=c.target.closest("[data-date]");if(!s?.dataset.date||s.dataset.disabled==="true")return;const C=y(s.dataset.date);if(c.key==="Enter"||c.key===" "){c.preventDefault(),O(C);return}const X=Wt(c,C);X&&(c.preventDefault(),G(X))},[G,O]),bt=S(c=>{const s=j(c);!s||P(s,b,l)||O(s)},[O,b,l]),gt=S(c=>{const s=j(c);(!s||P(s,b,l))&&c.preventDefault()},[b,l]),vt=S(c=>{const s=j(c);s&&d&&!u&&!P(s,b,l)&&(k(s),x(!0))},[d,u,b,l,k,x]),ft=S(c=>{const s=j(c);s&&(k(s),x(!0))},[d,u,k,x]);return{endDate:u,focusedDate:I,locale:a,maxDate:l,minDate:b,monthMatrices:ut,numberOfMonths:i,onClick:bt,onKeyDown:ht,selectedMonth:p,setFocusedDate:k,setIsFocused:x,setSelectedMonth:E,startDate:d,weekdayNames:dt,onPointerEnter:vt,onFocus:ft,onPointerDown:gt}},Ut=t=>{const{endDate:e,focusedDate:o,locale:r,maxDate:n,minDate:a,monthMatrices:i,numberOfMonths:h,onClick:v,onFocus:f,onKeyDown:m,onPointerDown:d,onPointerEnter:u,selectedMonth:b,setIsFocused:l,setSelectedMonth:w,startDate:p,weekdayNames:E}=Kt(t);return g`<div
		class="calendar"
		@focus=${()=>l(!0)}
		@blur=${()=>l(!1)}
	>
		${B(i,(T,x)=>`cal-${x}`,(T,x)=>[g`
					<div class="month-wrapper ${h>1?"padded":""}">
						${[Yt({index:x,locale:r,numberOfMonths:h,selectedMonth:b,setSelectedMonth:w}),Vt({endDate:e,focusedDate:o,locale:r,maxDate:n,minDate:a,month:T,numberOfMonths:h,onClick:v,onFocus:f,onKeyDown:m,onPointerDown:d,onPointerEnter:u,startDate:p,weekdayNames:E})]}
					</div>
				`,N(x<h-1,()=>g`<div class="separator"></div>`)])}
	</div> `};customElements.define("cosmoz-calendar",rt(Ut,{observedAttributes:["locale","number-of-months"],styleSheets:[at,Ht]}));export{Ft as a,U as b,it as c,_ as d,ct as e,Zt as f,Q as g,Xt as h,q as i,Qt as j,Jt as l,H as s};
