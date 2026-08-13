import{h as q,v as ut,w as ht,p as K,y as w,f as bt,i as gt,e as vt,t as M,q as D,z as V,A as C,g as Ct,n as y,j as P,B as X,x as R,u as Et,k as A,o as Y,s as I}from"./helper-bzctNRoS.js";import{d as f,A as Tt,w as ft,E as G,t as k}from"./iframe-D6xBhSQL.js";const Lt=q`
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
`,Ot=q`
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
		${Lt}
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
`,Ft=["variant","size","disabled","full-width","type","value","href","target","rel","download"],Pt=t=>{const e=t.hasAttribute("disabled"),r=t.getAttribute("type")||"button",o=t.getAttribute("href");K(()=>{const n=c=>{t.hasAttribute("disabled")&&c.stopImmediatePropagation()};return t.addEventListener("click",n,{capture:!0}),()=>t.removeEventListener("click",n,{capture:!0})},[]);const a=f`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(o!=null){const n=t.getAttribute("target"),c=t.getAttribute("rel"),b=t.getAttribute("download");return f`
			<a
				href=${o}
				class="button"
				part="button"
				aria-disabled=${e?"true":Tt}
				target=${w(n)}
				rel=${w(c)}
				download=${w(b)}
				>${a}</a
			>
		`}return f`
		<button type=${r} class="button" ?disabled=${e} part="button">
			${a}
		</button>
	`};customElements.define("cosmoz-button",ut(Pt,{observedAttributes:Ft,styleSheets:[ht,Ot],shadowRootInit:{mode:"open",delegatesFocus:!0}}));function j(t,e,r){return t?e(t):r?.(t)}const jt=({slot:t,title:e,className:r,width:o="24",height:a="24",styles:n}={})=>f`
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
    style=${w(n)}
  >
    ${j(e,()=>ft`<title>${e}</title>`)}
    <path d="m15 18-6-6 6-6" />
  </svg>
`,Bt=({slot:t,title:e,className:r,width:o="24",height:a="24",styles:n}={})=>f`
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
    style=${w(n)}
  >
    ${j(e,()=>ft`<title>${e}</title>`)}
    <path d="m9 18 6-6-6-6" />
  </svg>
`,Nt=(t,e)=>{if(!t||!e)return;const r=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(o=>r.includes(o)?[]:[[o,void 0]]))};class Rt extends gt{_props;render(e){return G}update(e,[r]){return this._props!==r&&Object.assign(e.element,Nt(this._props,r),this._props=r),G}}const ot=bt(Rt);function _t(t){return vt(t,Date.now())}function pt(t,e){const r=M(t,e?.in),o=r.getMonth();return r.setFullYear(r.getFullYear(),o+1,0),r.setHours(23,59,59,999),r}function Z(t,e){return+M(t)>+M(e)}function H(t,e){return+M(t)<+M(e)}function Vt(t,e){return D(vt(t,t),_t(t))}function at(t,e,r){const o=+M(t,r?.in),[a,n]=[+M(e.start,r?.in),+M(e.end,r?.in)].sort((c,b)=>c-b);return o>=a&&o<=n}function U(t,e,r){return V(t,-e,r)}function mt(t,e,r){return C(t,-e,r)}const nt=bt(class extends gt{constructor(t){if(super(t),t.type!==Ct.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const a=!!e[o];a===this.st.has(o)||this.nt?.has(o)||(a?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return G}}),W=(t,...e)=>typeof t=="function"?t(...e):t,zt=t=>(new Intl.Locale(t).getWeekInfo?.()?.firstDay??1)%7,Wt=(t,e)=>{const r=zt(e);return(t.getDay()-r+7)%7},Ht=(t,e)=>U(t,Wt(t,e)),le=(t,e,r,o)=>{const a=y(t),n=y(e),c=new Intl.DateTimeFormat(r,{year:"numeric",month:"short",day:"numeric"});return o?a?c.format(a):k("Select date"):a&&n?`${c.format(a)} – ${c.format(n)}`:k("Select dates")},de=t=>t.target?.dispatchEvent(new Event("select",{bubbles:!0})),F=(t,e,r)=>e&&H(t,e)?e:r&&Z(t,r)?r:t,st=(t,e,r)=>{const o=y(t),a=y(e),n=y(r);return P(F(o,a,n),"yyyy-MM-dd")},ue=({start:t,end:e},r,o,a)=>{r({start:st(W(t),o,a),end:st(W(e),o,a)})},he=(t,e,r)=>!!e&&!!r&&e===W(t.start)&&r===W(t.end),ct=(t,e)=>e!=="single",Yt=t=>{const e=zt(t),r=new Intl.DateTimeFormat(t,{weekday:"short"});return Array.from({length:7},(a,n)=>r.format(new Date(2023,0,1+n+e)))},Kt=(t,e)=>{const r=X(t),o=Ht(r,e),a=6,n=[];for(let c=0;c<a;c++){const b=[];for(let h=0;h<7;h++){const z=V(o,c*7+h),p={day:z.getDate(),iso:z.toISOString(),isToday:Vt(z),isCurrentMonth:r.getMonth()===z.getMonth()};b.push(p)}n.push(b)}return n},yt=(t,e,r)=>!!(e&&D(t,e)||r&&D(t,r)),wt=(t,e,r,o)=>!!(r&&e&&at(t,{start:e,end:r})||!r&&o&&e&&at(t,{start:e,end:o})),_=(t,e,r)=>!!(e&&H(t,e)||r&&Z(t,r)),Gt=(t,e,r,o)=>e&&_(t,r,o)?"true":void 0,J=(t,e)=>e&&D(t,e)?!0:void 0,Q=(t,e)=>e&&D(t,e)?!0:void 0,it=(t,e)=>H(t,X(e)),lt=(t,e,r)=>Z(t,pt(C(e,r-1))),Ut=(t,e)=>({ArrowLeft:U(e,1),ArrowRight:V(e,1),ArrowUp:U(e,7),ArrowDown:V(e,7)})[t.key],N=t=>y(t.target.dataset.date),xt=(t,e,r,o,a)=>a?wt(t,e,r,o):yt(t,e,r),qt=(t,e,r,o,a)=>xt(t,e,r,o,a)?"true":void 0,Xt=(t,e,r,o,a)=>a&&!r&&!!e&&D(t,o),Zt=(t,e)=>e?D(new Date(t.iso),e):t.isToday&&t.isCurrentMonth,dt=(t,e,r)=>r&&t&&!e,Jt=(t,e,r,o)=>{const a={weekday:"long",year:"numeric",month:"long",day:"numeric"};return e&&r&&(J(t,e)||Q(t,r))?[k("Selected range: {startDate} to {endDate}",{startDate:e.toLocaleString(o,a),endDate:r.toLocaleString(o,a)}),t.toLocaleString(o,a)].join(", "):t.toLocaleString(o,a)},Qt=({day:t,date:e,startDate:r,endDate:o,focusedDate:a,locale:n,isRangeMode:c})=>[dt(r,o,c)&&k("Selecting"),Jt(e,r,o,n),t.isToday&&t.isCurrentMonth&&k("Today"),J(e,r)&&c&&k("Start date"),Q(e,o)&&k("End date"),!dt(r,o,c)&&xt(e,r,o,a,c)&&k("Selected")].filter(Boolean).join(", "),te=({day:t,endDate:e,focusedDate:r,locale:o,maxDate:a,minDate:n,isSingleDateMode:c,numberOfMonths:b,onClick:h,onFocus:z,onPointerDown:p,onPointerEnter:x,startDate:m})=>{const l=new Date(t.iso),g=!c,d=!t.isCurrentMonth&&b>1,u=Gt(l,t.isCurrentMonth,n,a),E={role:"gridCell",ariaHidden:d?"true":void 0,ariaDisabled:u||!t.isCurrentMonth,ariaSelected:qt(l,m,e,r,g)},v={role:"button",tabIndex:D(l,r)?0:-1,ariaLabel:Qt({day:t,date:l,startDate:m,endDate:e,focusedDate:r,locale:o,isRangeMode:g}),ariaDisabled:u||!t.isCurrentMonth,autofocus:Zt(t,m)};return f`
		<td ?data-hidden=${d} ${ot(E)}>
			<div
				class=${nt({"date-cell-wrapper":!0,"in-range":g&&wt(l,m,e,r)})}
			>
				<div
					class=${nt({"date-cell":!0,"selected-cell":yt(l,m,e),"focused-highlighted-cell":Xt(l,m,e,r,g),"today-cell":t.isToday&&t.isCurrentMonth,"other-month-cell":!t.isCurrentMonth})}
					data-date=${w(t.isCurrentMonth?P(l,"yyyy-MM-dd"):void 0)}
					data-disabled=${w(u)}
					data-start=${w(J(l,m))}
					data-end=${w(Q(l,e))}
					@pointerdown=${p}
					@click=${h}
					@pointerenter=${x}
					@focus=${z}
					${ot(v)}
				>
					${t.day}
				</div>
			</div>
		</td>
	`},ee=({endDate:t,focusedDate:e,locale:r,maxDate:o,minDate:a,isSingleDateMode:n,month:c,numberOfMonths:b,onClick:h,onFocus:z,onKeyDown:p,onPointerDown:x,onPointerEnter:m,startDate:l,weekdayNames:g})=>f`
	<table role="grid" @keydown=${p}>
		<thead>
			<tr aria-hidden="true">
				${R(g,d=>d,d=>f`<th><div class="weekday">${d}</div></th>`)}
			</tr>
		</thead>
		<tbody>
			${R(c,(d,u)=>`month-${u}`,d=>f`
					<tr>
						${R(d,u=>u.iso,u=>te({day:u,endDate:t,focusedDate:e,locale:r,maxDate:o,minDate:a,isSingleDateMode:n,numberOfMonths:b,onClick:h,onFocus:z,onPointerDown:x,onPointerEnter:m,startDate:l}))}
					</tr>
				`)}
		</tbody>
	</table>
`,re=({index:t,locale:e,numberOfMonths:r,selectedMonth:o,setSelectedMonth:a})=>f`
	<header>
		${j(t===0,()=>f`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="prev-button"
					aria-label=${k("Previous month")}
					@click=${()=>a(mt(o,r))}
					><span aria-hidden="true">${jt()}</span></cosmoz-button
				>
			`)}
		<h2 class="month-label" aria-live="polite" aria-atomic="true">
			${C(o,t).toLocaleString(e,{month:"long",year:"numeric"})}
		</h2>
		${j(t===r-1,()=>f`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="next-button"
					aria-label=${k("Next month")}
					@click=${()=>a(C(o,r))}
					><span aria-hidden="true">${Bt()}</span></cosmoz-button
				>
			`)}
	</header>
`,oe=q`
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
`,ae=(t,e)=>{const r=ct(t,e)?t?.start:t,o=ct(t,e)?t?.end:void 0;return{start:r,end:o}},ne=t=>{const{locale:e,mode:r="range",numberOfMonths:o,min:a,max:n}=t,c=r==="single",b=e??navigator.language,h=Number(o??1),[z,p]=Et("value"),{start:x,end:m}=ae(z,r),l=A(()=>y(x),[x]),g=A(()=>y(m),[m]),d=A(()=>y(a),[a]),u=A(()=>y(n),[n]),E=A(()=>F(l??new Date,d,u),[l,d,u]),[v,$]=Y(E),[tt,O]=Y(!1),[T,S]=Y(E),kt=A(()=>Yt(b),[b]);K(()=>{tt&&t.shadowRoot?.querySelector(`[data-date="${P(T,"yyyy-MM-dd")}"]`)?.focus()},[T,t,tt]);const $t=A(()=>{const i=[];for(let s=0;s<h;s++)i.push(Kt(C(v,s),b));return i},[v,b,h]),B=I(i=>{const s=P(i,"yyyy-MM-dd");if(c){p(s);return}if(!l&&!g){p({start:s,end:void 0});return}if(l&&!g&&H(i,l)){p({start:s,end:P(l,"yyyy-MM-dd")});return}if(l&&!g){p({start:x,end:s});return}l&&g&&p({start:s,end:void 0})},[c,l,g,x,p]),et=I(i=>{const s=F(i,d,u);it(s,v)&&$(L=>mt(L,h)),lt(s,v,h)&&$(L=>C(L,h)),S(s)},[d,u,h,v,S,$]);K(()=>{if(it(T,v)){const i=F(X(v),d,u);O(!1),S(i)}if(lt(T,v,h)){const i=F(pt(C(v,h-1)),d,u);O(!1),S(i)}},[T,u,d,h,v,S,O]);const St=I(i=>{if(!(i.target instanceof Element))return;const s=i.target.closest("[data-date]");if(!s?.dataset.date||s.dataset.disabled==="true")return;const L=y(s.dataset.date);if(i.key==="Enter"||i.key===" "){i.preventDefault(),B(L);return}const rt=Ut(i,L);rt&&(i.preventDefault(),et(rt))},[et,B]),Mt=I(i=>{const s=N(i);!s||_(s,d,u)||B(s)},[B,d,u]),Dt=I(i=>{const s=N(i);(!s||_(s,d,u))&&i.preventDefault()},[d,u]),At=I(i=>{const s=N(i);!c&&s&&l&&!g&&!_(s,d,u)&&S(s)},[c,l,g,d,u,S]),It=I(i=>{const s=N(i);s&&(S(s),O(!0))},[l,g,S,O]);return{endDate:g,focusedDate:T,isSingleDateMode:c,locale:b,maxDate:u,minDate:d,monthMatrices:$t,numberOfMonths:h,onClick:Mt,onKeyDown:St,selectedMonth:v,setSelectedMonth:$,startDate:l,weekdayNames:kt,onPointerEnter:At,onFocus:It,onPointerDown:Dt}},se=t=>{const{endDate:e,focusedDate:r,isSingleDateMode:o,locale:a,maxDate:n,minDate:c,monthMatrices:b,numberOfMonths:h,onClick:z,onFocus:p,onKeyDown:x,onPointerDown:m,onPointerEnter:l,selectedMonth:g,setSelectedMonth:d,startDate:u,weekdayNames:E}=ne(t);return f`<div class="calendar">
		${R(b,(v,$)=>`cal-${$}`,(v,$)=>[f`
					<div class="month-wrapper ${h>1?"padded":""}">
						${[re({index:$,locale:a,numberOfMonths:h,selectedMonth:g,setSelectedMonth:d}),ee({endDate:e,focusedDate:r,locale:a,maxDate:n,minDate:c,isSingleDateMode:o,month:v,numberOfMonths:h,onClick:z,onFocus:p,onKeyDown:x,onPointerDown:m,onPointerEnter:l,startDate:u,weekdayNames:E})]}
					</div>
				`,j($<h-1,()=>f`<div class="separator"></div>`)])}
	</div> `};customElements.define("cosmoz-calendar",ut(se,{observedAttributes:["locale","mode","number-of-months"],styleSheets:[ht,oe],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));export{Ht as a,mt as b,H as c,de as d,pt as e,le as f,st as g,he as h,Z as i,ue as l,j as n,U as s,ae as u};
