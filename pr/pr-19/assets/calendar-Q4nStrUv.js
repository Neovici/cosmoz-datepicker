import{g as tt,k as vt,n as ft,o as w,e as pt,i as mt,c as zt,p as Lt,t as E,j as C,a as K,b as I,d as Ft,h as k,f as P,s as et,l as W,u as L}from"./date-CAliyzCn.js";import{h as Y,b as f,A as Ot,k as yt,E as Z,j as M,u as Pt,e as F,g as B}from"./iframe-_0gbPUuk.js";const jt=tt`
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
`,_t=tt`
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
		${jt}
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
`,Nt=["variant","size","disabled","full-width","type","value","href","target","rel","download"],Rt=t=>{const e=t.hasAttribute("disabled"),r=t.getAttribute("type")||"button",o=t.getAttribute("href");Y(()=>{const c=l=>{t.hasAttribute("disabled")&&l.stopImmediatePropagation()};return t.addEventListener("click",c,{capture:!0}),()=>t.removeEventListener("click",c,{capture:!0})},[]);const a=f`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(o!=null){const c=t.getAttribute("target"),l=t.getAttribute("rel"),g=t.getAttribute("download");return f`
			<a
				href=${o}
				class="button"
				part="button"
				aria-disabled=${e?"true":Ot}
				target=${w(c)}
				rel=${w(l)}
				download=${w(g)}
				>${a}</a
			>
		`}return f`
		<button type=${r} class="button" ?disabled=${e} part="button">
			${a}
		</button>
	`};customElements.define("cosmoz-button",vt(Rt,{observedAttributes:Nt,styleSheets:[ft,_t],shadowRootInit:{mode:"open",delegatesFocus:!0}}));function N(t,e,r){return t?e(t):r?.(t)}const Bt=({slot:t,title:e,className:r,width:o="24",height:a="24",styles:c}={})=>f`
  <svg
    slot=${w(t)}
    class=${`chevron-left-icon ${r??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${o}
    height=${a}
    style=${w(c)}
  >
    ${N(e,()=>yt`<title>${e}</title>`)}
    <path d="m15 18-6-6 6-6" />
  </svg>
`,Vt=({slot:t,title:e,className:r,width:o="24",height:a="24",styles:c}={})=>f`
  <svg
    slot=${w(t)}
    class=${`chevron-right-icon ${r??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${o}
    height=${a}
    style=${w(c)}
  >
    ${N(e,()=>yt`<title>${e}</title>`)}
    <path d="m9 18 6-6-6-6" />
  </svg>
`,Wt=(t,e)=>{if(!t||!e)return;const r=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(o=>r.includes(o)?[]:[[o,void 0]]))};class Yt extends mt{_props;render(e){return Z}update(e,[r]){return this._props!==r&&Object.assign(e.element,Wt(this._props,r),this._props=r),Z}}const it=pt(Yt);function Ht(t){return zt(t,Date.now())}function lt(t,e,r){const[o,a]=Lt(r?.in,t,e),c=o.getFullYear()-a.getFullYear(),l=o.getMonth()-a.getMonth();return c*12+l}function wt(t,e){const r=E(t,e?.in),o=r.getMonth();return r.setFullYear(r.getFullYear(),o+1,0),r.setHours(23,59,59,999),r}function rt(t,e){return+E(t)>+E(e)}function U(t,e){return+E(t)<+E(e)}function Kt(t,e){return C(zt(t,t),Ht(t))}function dt(t,e,r){const o=+E(t,r?.in),[a,c]=[+E(e.start,r?.in),+E(e.end,r?.in)].sort((l,g)=>l-g);return o>=a&&o<=c}function J(t,e,r){return K(t,-e,r)}function Q(t,e,r){return I(t,-e,r)}const ut=pt(class extends mt{constructor(t){if(super(t),t.type!==Ft.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const a=!!e[o];a===this.st.has(o)||this.nt?.has(o)||(a?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Z}}),G=(t,...e)=>typeof t=="function"?t(...e):t,xt=t=>(new Intl.Locale(t).getWeekInfo?.()?.firstDay??1)%7,Gt=(t,e)=>{const r=xt(e);return(t.getDay()-r+7)%7},Ut=(t,e)=>J(t,Gt(t,e)),be=(t,e,r,o)=>{const a=k(t),c=k(e),l=new Intl.DateTimeFormat(r,{year:"numeric",month:"short",day:"numeric"});return o?a?l.format(a):M("Select date"):a&&c?`${l.format(a)} – ${l.format(c)}`:M("Select dates")},ge=t=>t.target?.dispatchEvent(new Event("select",{bubbles:!0})),_=(t,e,r)=>e&&U(t,e)?e:r&&rt(t,r)?r:t,ht=(t,e,r)=>{const o=k(t),a=k(e),c=k(r);return P(_(o,a,c),"yyyy-MM-dd")},ve=({start:t,end:e},r,o,a)=>{r({start:ht(G(t),o,a),end:ht(G(e),o,a)})},fe=(t,e,r)=>!!e&&!!r&&e===G(t.start)&&r===G(t.end),bt=(t,e)=>e!=="single",qt=t=>{const e=xt(t),r=new Intl.DateTimeFormat(t,{weekday:"short"});return Array.from({length:7},(a,c)=>r.format(new Date(2023,0,1+c+e)))},Xt=(t,e)=>{const r=et(t),o=Ut(r,e),a=6,c=[];for(let l=0;l<a;l++){const g=[];for(let d=0;d<7;d++){const y=K(o,l*7+d),p={day:y.getDate(),iso:y.toISOString(),isToday:Kt(y),isCurrentMonth:r.getMonth()===y.getMonth()};g.push(p)}c.push(g)}return c},kt=(t,e,r)=>!!(e&&C(t,e)||r&&C(t,r)),$t=(t,e,r,o)=>!!(r&&e&&dt(t,{start:e,end:r})||!r&&o&&e&&dt(t,{start:e,end:o})),H=(t,e,r)=>!!(e&&U(t,e)||r&&rt(t,r)),Zt=(t,e,r,o)=>e&&H(t,r,o)?"true":void 0,ot=(t,e)=>e&&C(t,e)?!0:void 0,at=(t,e)=>e&&C(t,e)?!0:void 0,q=(t,e)=>U(t,et(e)),X=(t,e,r)=>rt(t,wt(I(e,r-1))),Jt=(t,e)=>({ArrowLeft:J(e,1),ArrowRight:K(e,1),ArrowUp:J(e,7),ArrowDown:K(e,7)})[t.key],V=t=>k(t.target.dataset.date),St=(t,e,r,o,a)=>a?$t(t,e,r,o):kt(t,e,r),Qt=(t,e,r,o,a)=>St(t,e,r,o,a)?"true":void 0,te=(t,e,r,o,a)=>a&&!r&&!!e&&C(t,o),ee=(t,e)=>e?C(new Date(t.iso),e):t.isToday&&t.isCurrentMonth,gt=(t,e,r)=>r&&t&&!e,re=(t,e,r,o)=>{const a={weekday:"long",year:"numeric",month:"long",day:"numeric"};return e&&r&&(ot(t,e)||at(t,r))?[M("Selected range: {startDate} to {endDate}",{startDate:e.toLocaleString(o,a),endDate:r.toLocaleString(o,a)}),t.toLocaleString(o,a)].join(", "):t.toLocaleString(o,a)},oe=({day:t,date:e,startDate:r,endDate:o,focusedDate:a,locale:c,isRangeMode:l})=>[gt(r,o,l)&&M("Selecting"),re(e,r,o,c),t.isToday&&t.isCurrentMonth&&M("Today"),ot(e,r)&&l&&M("Start date"),at(e,o)&&M("End date"),!gt(r,o,l)&&St(e,r,o,a,l)&&M("Selected")].filter(Boolean).join(", "),ae=({day:t,endDate:e,focusedDate:r,locale:o,maxDate:a,minDate:c,isSingleDateMode:l,numberOfMonths:g,onClick:d,onFocus:y,onPointerDown:p,onPointerEnter:$,startDate:m})=>{const n=new Date(t.iso),x=!l,z=!t.isCurrentMonth&&g>1,u=Zt(n,t.isCurrentMonth,c,a),h=u||!t.isCurrentMonth?"true":void 0,b={role:"gridcell",ariaHidden:z?"true":void 0,ariaDisabled:h,ariaSelected:Qt(n,m,e,r,x)},D={role:"button",tabIndex:C(n,r)?0:-1,ariaLabel:oe({day:t,date:n,startDate:m,endDate:e,focusedDate:r,locale:o,isRangeMode:x}),ariaDisabled:h,autofocus:ee(t,m)};return f`
		<td ?data-hidden=${z} ${it(b)}>
			<div
				class=${ut({"date-cell-wrapper":!0,"in-range":x&&$t(n,m,e,r)})}
			>
				<div
					class=${ut({"date-cell":!0,"selected-cell":kt(n,m,e),"focused-highlighted-cell":te(n,m,e,r,x),"today-cell":t.isToday&&t.isCurrentMonth,"other-month-cell":!t.isCurrentMonth})}
					data-date=${w(t.isCurrentMonth?P(n,"yyyy-MM-dd"):void 0)}
					data-testid=${w(t.isCurrentMonth?`date-${P(n,"yyyy-MM-dd")}`:void 0)}
					data-disabled=${w(u)}
					data-start=${w(ot(n,m))}
					data-end=${w(at(n,e))}
					@pointerdown=${p}
					@click=${d}
					@pointerenter=${$}
					@focus=${y}
					${it(D)}
				>
					${t.day}
				</div>
			</div>
		</td>
	`},ne=({endDate:t,focusedDate:e,locale:r,maxDate:o,minDate:a,isSingleDateMode:c,month:l,numberOfMonths:g,onClick:d,onFocus:y,onKeyDown:p,onPointerDown:$,onPointerEnter:m,startDate:n,weekdayNames:x})=>f`
	<table role="grid" @keydown=${p}>
		<thead>
			<tr aria-hidden="true">
				${W(x,z=>z,z=>f`<th><div class="weekday">${z}</div></th>`)}
			</tr>
		</thead>
		<tbody>
			${W(l,(z,u)=>`month-${u}`,z=>f`
					<tr>
						${W(z,u=>u.iso,u=>ae({day:u,endDate:t,focusedDate:e,locale:r,maxDate:o,minDate:a,isSingleDateMode:c,numberOfMonths:g,onClick:d,onFocus:y,onPointerDown:$,onPointerEnter:m,startDate:n}))}
					</tr>
				`)}
		</tbody>
	</table>
`,se=({index:t,locale:e,numberOfMonths:r,selectedMonth:o,setSelectedMonth:a})=>f`
	<header>
		${N(t===0,()=>f`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="prev-button"
					aria-label=${M("Previous month")}
					@click=${()=>a(Q(o,r))}
					><span aria-hidden="true">${Bt()}</span></cosmoz-button
				>
			`)}
		<h2 class="month-label" aria-live="polite" aria-atomic="true">
			${I(o,t).toLocaleString(e,{month:"long",year:"numeric"})}
		</h2>
		${N(t===r-1,()=>f`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="next-button"
					aria-label=${M("Next month")}
					@click=${()=>a(I(o,r))}
					><span aria-hidden="true">${Vt()}</span></cosmoz-button
				>
			`)}
	</header>
`,ce=tt`
	:host {
		--cell-size: calc(var(--cz-spacing) * 10);
		color: var(--cz-color-text-primary);
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
`,ie=(t,e)=>{const r=bt(t,e)?t?.start:t,o=bt(t,e)?t?.end:void 0;return{start:r,end:o}},le=t=>{const{locale:e,mode:r="range",numberOfMonths:o,min:a,max:c}=t,l=r==="single",g=e??navigator.language,d=Number(o??1),[y,p]=Pt("value"),{start:$,end:m}=ie(y,r),n=F(()=>k($),[$]),[x,z]=B(n),u=F(()=>k(m),[m]),h=F(()=>k(a),[a]),b=F(()=>k(c),[c]),D=F(()=>_(n??new Date,h,b),[n,h,b]),[v,T]=B(D),[nt,j]=B(!1),[O,A]=B(D),Mt=F(()=>qt(g),[g]);Y(()=>{nt&&t.shadowRoot?.querySelector(`[data-date="${P(O,"yyyy-MM-dd")}"]`)?.focus()},[O,t,nt]);const Dt=F(()=>{const i=[];for(let s=0;s<d;s++)i.push(Xt(I(v,s),g));return i},[v,g,d]),R=L(i=>{const s=P(i,"yyyy-MM-dd");if(l){p(s);return}if(!n&&!u){p({start:s,end:void 0});return}if(n&&!u&&U(i,n)){p({start:s,end:P(n,"yyyy-MM-dd")});return}if(n&&!u){p({start:$,end:s});return}n&&u&&p({start:s,end:void 0})},[l,n,u,$,p]),st=L(i=>{const s=_(i,h,b);q(s,v)&&T(S=>Q(S,d)),X(s,v,d)&&T(S=>I(S,d)),A(s)},[h,b,d,v,A,T]);Y(()=>{if(!(!n||C(x,n))){if(z(n),n&&q(n,v)){const i=lt(n,v),s=Math.ceil(Math.abs(i)/d);T(S=>Q(S,s*d))}if(n&&X(n,v,d)){const i=lt(n,I(v,d-1)),s=Math.ceil(i/d);T(S=>I(S,s*d))}}},[n,x,z,v,T,d]),Y(()=>{if(q(O,v)){const i=_(et(v),h,b);j(!1),A(i)}if(X(O,v,d)){const i=_(wt(I(v,d-1)),h,b);j(!1),A(i)}},[O,b,h,d,v,A,j]);const At=L(i=>{if(!(i.target instanceof Element))return;const s=i.target.closest("[data-date]");if(!s?.dataset.date||s.dataset.disabled==="true")return;const S=k(s.dataset.date);if(i.key==="Enter"||i.key===" "){i.preventDefault(),R(S);return}const ct=Jt(i,S);ct&&(i.preventDefault(),st(ct))},[st,R]),It=L(i=>{const s=V(i);!s||H(s,h,b)||R(s)},[R,h,b]),Ct=L(i=>{const s=V(i);(!s||H(s,h,b))&&i.preventDefault()},[h,b]),Et=L(i=>{const s=V(i);!l&&s&&n&&!u&&!H(s,h,b)&&A(s)},[l,n,u,h,b,A]),Tt=L(i=>{const s=V(i);s&&(A(s),j(!0))},[n,u,A,j]);return{endDate:u,focusedDate:O,isSingleDateMode:l,locale:g,maxDate:b,minDate:h,monthMatrices:Dt,numberOfMonths:d,onClick:It,onKeyDown:At,selectedMonth:v,setSelectedMonth:T,startDate:n,weekdayNames:Mt,onPointerEnter:Et,onFocus:Tt,onPointerDown:Ct}},de=t=>{const{endDate:e,focusedDate:r,isSingleDateMode:o,locale:a,maxDate:c,minDate:l,monthMatrices:g,numberOfMonths:d,onClick:y,onFocus:p,onKeyDown:$,onPointerDown:m,onPointerEnter:n,selectedMonth:x,setSelectedMonth:z,startDate:u,weekdayNames:h}=le(t);return f`<div class="calendar">
		${W(g,(b,D)=>`cal-${D}`,(b,D)=>[f`
					<div class="month-wrapper ${d>1?"padded":""}">
						${[se({index:D,locale:a,numberOfMonths:d,selectedMonth:x,setSelectedMonth:z}),ne({endDate:e,focusedDate:r,locale:a,maxDate:c,minDate:l,isSingleDateMode:o,month:b,numberOfMonths:d,onClick:y,onFocus:p,onKeyDown:$,onPointerDown:m,onPointerEnter:n,startDate:u,weekdayNames:h})]}
					</div>
				`,N(D<d-1,()=>f`<div class="separator"></div>`)])}
	</div> `};customElements.define("cosmoz-calendar",vt(de,{observedAttributes:["locale","mode","number-of-months"],styleSheets:[ft,ce],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));export{Ut as a,Q as b,U as c,ge as d,wt as e,be as f,ht as g,fe as h,rt as i,ve as l,N as n,J as s,ie as u};
