import{e as q,f as st,n as ct,u as H,o as z,g as R,h as it,t as $,i as E,j as W,k as D,p as yt,q as wt,s as xt,v as w,w as N,x as G,y as V,z as kt,A,B as K,C as I}from"./helper-D02Nojs0.js";import{d as v,A as $t,w as lt,E as Dt,t as Q}from"./iframe-DR6klARx.js";const Mt=q`
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
`,St=q`
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
		${Mt}
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
`,At=["variant","size","disabled","full-width","type","value","href","target","rel","download"],It=t=>{const e=t.hasAttribute("disabled"),o=t.getAttribute("type")||"button",r=t.getAttribute("href");H(()=>{const s=l=>{t.hasAttribute("disabled")&&l.stopImmediatePropagation()};return t.addEventListener("click",s,{capture:!0}),()=>t.removeEventListener("click",s,{capture:!0})},[]);const a=v`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(r!=null){const s=t.getAttribute("target"),l=t.getAttribute("rel"),b=t.getAttribute("download");return v`
			<a
				href=${r}
				class="button"
				part="button"
				aria-disabled=${e?"true":$t}
				target=${z(s)}
				rel=${z(l)}
				download=${z(b)}
				>${a}</a
			>
		`}return v`
		<button type=${o} class="button" ?disabled=${e} part="button">
			${a}
		</button>
	`};customElements.define("cosmoz-button",st(It,{observedAttributes:At,styleSheets:[ct,St],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Et=({slot:t,title:e,className:o,width:r="24",height:a="24",styles:s}={})=>v`
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
    height=${a}
    style=${z(s)}
  >
    ${R(e,()=>lt`<title>${e}</title>`)}
    <path d="m15 18-6-6 6-6" />
  </svg>
`,Ct=({slot:t,title:e,className:o,width:r="24",height:a="24",styles:s}={})=>v`
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
    height=${a}
    style=${z(s)}
  >
    ${R(e,()=>lt`<title>${e}</title>`)}
    <path d="m9 18 6-6-6-6" />
  </svg>
`;function Tt(t){return it(t,Date.now())}function dt(t,e){const o=$(t,e?.in),r=o.getMonth();return o.setFullYear(o.getFullYear(),r+1,0),o.setHours(23,59,59,999),o}function X(t,e){return+$(t)>+$(e)}function _(t,e){return+$(t)<+$(e)}function Ft(t,e){return E(it(t,t),Tt(t))}function tt(t,e,o){const r=+$(t,o?.in),[a,s]=[+$(e.start,o?.in),+$(e.end,o?.in)].sort((l,b)=>l-b);return r>=a&&r<=s}function U(t,e,o){return W(t,-e,o)}function ut(t,e,o){return D(t,-e,o)}const Lt=yt(class extends wt{constructor(t){if(super(t),t.type!==xt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}const o=t.element.classList;for(const r of this.st)r in e||(o.remove(r),this.st.delete(r));for(const r in e){const a=!!e[r];a===this.st.has(r)||this.nt?.has(r)||(a?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return Dt}}),Y=(t,...e)=>typeof t=="function"?t(...e):t,ht=t=>(new Intl.Locale(t).getWeekInfo?.()?.firstDay??1)%7,Nt=(t,e)=>{const o=ht(e);return(t.getDay()-o+7)%7},Rt=(t,e)=>U(t,Nt(t,e)),te=(t,e,o,r)=>{const a=w(t),s=w(e),l=new Intl.DateTimeFormat(o,{year:"numeric",month:"short",day:"numeric"});return r?a?l.format(a):Q("Select date"):a&&s?`${l.format(a)} – ${l.format(s)}`:Q("Select dates")},ee=t=>t.target?.dispatchEvent(new Event("select",{bubbles:!0})),L=(t,e,o)=>e&&_(t,e)?e:o&&X(t,o)?o:t,et=(t,e,o)=>{const r=w(t),a=w(e),s=w(o);return N(L(r,a,s),"yyyy-MM-dd")},oe=({start:t,end:e},o,r,a)=>{o({start:et(Y(t),r,a),end:et(Y(e),r,a)})},re=(t,e,o)=>!!e&&!!o&&e===Y(t.start)&&o===Y(t.end),ot=(t,e)=>e!=="single",Bt=t=>{const e=ht(t),o=new Intl.DateTimeFormat(t,{weekday:"short"});return Array.from({length:7},(a,s)=>o.format(new Date(2023,0,1+s+e)))},Ot=(t,e)=>Intl.DateTimeFormat(e,{month:"long"}).format(t),Pt=(t,e)=>{const o=G(t),r=Rt(o,e),a=6,s=[];for(let l=0;l<a;l++){const b=[];for(let u=0;u<7;u++){const m=W(r,l*7+u),f={day:m.getDate(),iso:m.toISOString(),isToday:Ft(m),isCurrentMonth:o.getMonth()===m.getMonth()};b.push(f)}s.push(b)}return s},Vt=(t,e,o)=>!!(e&&E(t,e)||o&&E(t,o)),jt=(t,e,o,r)=>!!(o&&e&&tt(t,{start:e,end:o})||!o&&r&&e&&tt(t,{start:e,end:r})),j=(t,e,o)=>!!(e&&_(t,e)||o&&X(t,o)),rt=(t,e,o,r)=>e&&j(t,o,r)?"true":void 0,Wt=(t,e)=>e&&E(new Date(t.iso),e)?!0:void 0,Yt=(t,e)=>e&&E(new Date(t.iso),e)?!0:void 0,at=(t,e)=>_(t,G(e)),nt=(t,e,o)=>X(t,dt(D(e,o-1))),_t=(t,e)=>({ArrowLeft:U(e,1),ArrowRight:W(e,1),ArrowUp:U(e,7),ArrowDown:W(e,7)})[t.key],P=t=>w(t.target.dataset.date),Kt=({day:t,endDate:e,focusedDate:o,locale:r,maxDate:a,minDate:s,isSingleDateMode:l,numberOfMonths:b,onClick:u,onFocus:m,onPointerDown:f,onPointerEnter:x,startDate:y})=>{const i=new Date(t.iso),g=!l;return v`
		<td ?data-hidden=${!t.isCurrentMonth&&b>1}>
			<div
				class="date-cell-wrapper ${g&&jt(i,y,e,o)?"in-range":""}"
			>
				<div
					class=${Lt({"date-cell":!0,"selected-cell":Vt(i,y,e),"focused-highlighted-cell":g&&!e&&!!y&&E(i,o),"today-cell":t.isToday&&t.isCurrentMonth,"other-month-cell":!t.isCurrentMonth})}
					role="button"
					tabindex=${E(i,o)?"0":"-1"}
					aria-label=${i.toLocaleString(r,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}
					aria-disabled=${z(rt(i,t.isCurrentMonth,s,a))}
					data-date=${z(t.isCurrentMonth?N(i,"yyyy-MM-dd"):void 0)}
					data-disabled=${z(rt(i,t.isCurrentMonth,s,a))}
					data-start=${z(Wt(t,y))}
					data-end=${z(Yt(t,e))}
					@pointerdown=${f}
					@click=${u}
					@pointerenter=${x}
					@focus=${m}
				>
					${t.day}
				</div>
			</div>
		</td>
	`},Ht=({endDate:t,focusedDate:e,locale:o,maxDate:r,minDate:a,isSingleDateMode:s,month:l,numberOfMonths:b,onClick:u,onFocus:m,onKeyDown:f,onPointerDown:x,onPointerEnter:y,startDate:i,weekdayNames:g})=>v`
	<table @keydown=${f}>
		<thead>
			<tr>
				${V(g,d=>d,d=>v`<th><div class="weekday">${d}</div></th>`)}
			</tr>
		</thead>
		<tbody>
			${V(l,(d,h)=>`month-${h}`,d=>v`
					<tr>
						${V(d,h=>h.iso,h=>Kt({day:h,endDate:t,focusedDate:e,locale:o,maxDate:r,minDate:a,isSingleDateMode:s,numberOfMonths:b,onClick:u,onFocus:m,onPointerDown:x,onPointerEnter:y,startDate:i}))}
					</tr>
				`)}
		</tbody>
	</table>
`,Ut=({index:t,locale:e,numberOfMonths:o,selectedMonth:r,setSelectedMonth:a})=>v`
	<header>
		${R(t===0,()=>v`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="prev-button"
					@click=${()=>a(ut(r,o))}
					>${Et()}</cosmoz-button
				>
			`)}
		<h2 class="month-label">
			${Ot(D(r,t),e)}
			${D(r,t).getFullYear()}
		</h2>
		${R(t===o-1,()=>v`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="next-button"
					@click=${()=>a(D(r,o))}
					>${Ct()}</cosmoz-button
				>
			`)}
	</header>
`,qt=q`
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
`,Gt=(t,e)=>{const o=ot(t,e)?t?.start:t,r=ot(t,e)?t?.end:void 0;return{start:o,end:r}},Xt=t=>{const{locale:e,mode:o="range",numberOfMonths:r,min:a,max:s}=t,l=o==="single",b=e??navigator.language,u=Number(r??1),[m,f]=kt("value"),{start:x,end:y}=Gt(m,o),i=A(()=>w(x),[x]),g=A(()=>w(y),[y]),d=A(()=>w(a),[a]),h=A(()=>w(s),[s]),B=A(()=>L(i??new Date,d,h),[i,d,h]),[p,M]=K(B),[S,F]=K(!1),[C,k]=K(B),bt=A(()=>Bt(b),[b]);H(()=>{S&&t.shadowRoot?.querySelector(`[data-date="${N(C,"yyyy-MM-dd")}"]`)?.focus()},[C,t,S]);const gt=A(()=>{const c=[];for(let n=0;n<u;n++)c.push(Pt(D(p,n),b));return c},[p,b,u]),O=I(c=>{const n=N(c,"yyyy-MM-dd");if(l){f(n);return}if(!i&&!g){f({start:n,end:void 0});return}if(i&&!g&&_(c,i)){f({start:n,end:N(i,"yyyy-MM-dd")});return}if(i&&!g){f({start:x,end:n});return}i&&g&&f({start:n,end:void 0})},[l,i,g,x,f]),Z=I(c=>{const n=L(c,d,h);at(n,p)&&M(T=>ut(T,u)),nt(n,p,u)&&M(T=>D(T,u)),k(n)},[d,h,u,p,k,M]);H(()=>{if(at(C,p)){const c=L(G(p),d,h);k(c)}if(nt(C,p,u)){const c=L(dt(D(p,u-1)),d,h);k(c)}},[C,h,d,u,p,k]);const vt=I(c=>{if(!(c.target instanceof Element))return;const n=c.target.closest("[data-date]");if(!n?.dataset.date||n.dataset.disabled==="true")return;const T=w(n.dataset.date);if(c.key==="Enter"||c.key===" "){c.preventDefault(),O(T);return}const J=_t(c,T);J&&(c.preventDefault(),Z(J))},[Z,O]),ft=I(c=>{const n=P(c);!n||j(n,d,h)||O(n)},[O,d,h]),pt=I(c=>{const n=P(c);(!n||j(n,d,h))&&c.preventDefault()},[d,h]),mt=I(c=>{const n=P(c);!l&&n&&i&&!g&&!j(n,d,h)&&(k(n),F(!0))},[l,i,g,d,h,k,F]),zt=I(c=>{const n=P(c);n&&(k(n),F(!0))},[i,g,k,F]);return{endDate:g,focusedDate:C,isSingleDateMode:l,locale:b,maxDate:h,minDate:d,monthMatrices:gt,numberOfMonths:u,onClick:ft,onKeyDown:vt,selectedMonth:p,setIsFocused:F,setSelectedMonth:M,startDate:i,weekdayNames:bt,onPointerEnter:mt,onFocus:zt,onPointerDown:pt}},Zt=t=>{const{endDate:e,focusedDate:o,isSingleDateMode:r,locale:a,maxDate:s,minDate:l,monthMatrices:b,numberOfMonths:u,onClick:m,onFocus:f,onKeyDown:x,onPointerDown:y,onPointerEnter:i,selectedMonth:g,setIsFocused:d,setSelectedMonth:h,startDate:B,weekdayNames:p}=Xt(t);return v`<div
		class="calendar"
		@focus=${()=>d(!0)}
		@blur=${()=>d(!1)}
	>
		${V(b,(M,S)=>`cal-${S}`,(M,S)=>[v`
					<div class="month-wrapper ${u>1?"padded":""}">
						${[Ut({index:S,locale:a,numberOfMonths:u,selectedMonth:g,setSelectedMonth:h}),Ht({endDate:e,focusedDate:o,locale:a,maxDate:s,minDate:l,isSingleDateMode:r,month:M,numberOfMonths:u,onClick:m,onFocus:f,onKeyDown:x,onPointerDown:y,onPointerEnter:i,startDate:B,weekdayNames:p})]}
					</div>
				`,R(S<u-1,()=>v`<div class="separator"></div>`)])}
	</div> `};customElements.define("cosmoz-calendar",st(Zt,{observedAttributes:["locale","mode","number-of-months"],styleSheets:[ct,qt]}));export{Rt as a,ut as b,_ as c,ee as d,dt as e,te as f,et as g,re as h,X as i,oe as l,U as s,Gt as u};
