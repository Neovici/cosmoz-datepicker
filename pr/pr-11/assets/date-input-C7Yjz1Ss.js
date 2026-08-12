import{A as N,q as rt,s as T,p as at,o as $,g as y,t as gt,h as ft,e as D,f as _,n as H,H as B,u as w,B as st,C as z,I as it,J as ct,w as bt,z as yt,v as zt,i as wt,y as xt}from"./helper-D02Nojs0.js";import{r as lt,A as L,w as $t,d as p,E as R,p as At,D as kt}from"./iframe-DR6klARx.js";function Et(t){let e=t;return{get current(){return e},set current(o){e=o},get value(){return e},set value(o){e=o}}}function C(t){return N(()=>Et(t),[])}const S=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(e,!1),S(n,e);return!0},M=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},dt=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),_t(e)}};function Tt(t){this._$AN!==void 0?(M(this),this._$AM=t,dt(this)):this._$AM=t}function Dt(t,e=!1,o=0){const n=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(e)if(Array.isArray(n))for(let r=o;r<n.length;r++)S(n[r],!1),M(n[r]);else n!=null&&(S(n,!1),M(n));else S(this,t)}const _t=t=>{t.type==T.CHILD&&(t._$AP??=Dt,t._$AQ??=Tt)};class Ct extends rt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,n){super._$AT(e,o,n),dt(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(S(this,e),M(this))}setValue(e){if(lt(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const F=new WeakMap,I=at(class extends Ct{render(t){return L}update(t,[e]){const o=e!==this.G;return o&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),L}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=F.get(e);o===void 0&&(o=new WeakMap,F.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?F.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),St=({slot:t,title:e,className:o,width:n="24",height:a="24",styles:r}={})=>p`
  <svg
    slot=${$(t)}
    class=${`info-circle-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${a}
    style=${$(r)}
  >
    ${y(e,()=>$t`<title>${e}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`;function ut(t,e){const o=gt(t,e?.in),n=o.getFullYear(),a=o.getMonth(),r=ft(o,0);return r.setFullYear(n,a+1,0),r.setHours(0,0,0,0),r.getDate()}const Y=at(class extends rt{constructor(t){if(super(t),t.type!==T.PROPERTY&&t.type!==T.ATTRIBUTE&&t.type!==T.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!lt(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===R||e===L)return e;const o=t.element,n=t.name;if(t.type===T.PROPERTY){if(e===o[n])return R}else if(t.type===T.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(n))return R}else if(t.type===T.ATTRIBUTE&&o.getAttribute(n)===e+"")return R;return At(t),e}}),It=D`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`;customElements.define("cosmoz-tooltip-content",_(()=>p`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[H,It]}));const O=B(D`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`),Q=(t,e,o)=>kt(p`<cosmoz-tooltip-content>
			${y(e,()=>p`<strong slot="heading">${e}</strong>`)}
			${y(o,()=>p`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,t),Nt=(t,e)=>{const{for:o,heading:n,description:a,placement:r="top",delay:c=300,disabled:l=!1}=e,s=C(),f=!!(n||a)&&!l;w(()=>{if(!o||!f)return;const v=t.getRootNode(),b=v.adoptedStyleSheets??[];b.includes(O)||(v.adoptedStyleSheets=[...b,O]);const i=document.createElement("div");i.setAttribute("popover","manual"),i.setAttribute("role","tooltip"),i.classList.add("cosmoz-tooltip-popover"),t.after(i),s.current=i,Q(i,n,a);const h=`[name="${o}"]`,u=`--tooltip-anchor-${o}`;let d;const g=k=>{l||(clearTimeout(d),k.style.anchorName=u,i.style.positionAnchor=u,i.style.positionArea=r,d=window.setTimeout(()=>i.showPopover(),c))},A=()=>{clearTimeout(d),i.hidePopover()},W=k=>{const E=k.target.closest?.(h);E&&g(E)},j=k=>{const E=k.target.closest?.(h);if(!E)return;const J=k.relatedTarget;J&&E.contains(J)||A()},K=k=>{const E=k.target.closest?.(h);E&&g(E)},Z=k=>{k.target.closest?.(h)&&A()};return v.addEventListener("pointerover",W),v.addEventListener("pointerout",j),v.addEventListener("focusin",K),v.addEventListener("focusout",Z),()=>{clearTimeout(d),v.removeEventListener("pointerover",W),v.removeEventListener("pointerout",j),v.removeEventListener("focusin",K),v.removeEventListener("focusout",Z),i.hidePopover(),i.remove(),s.current=void 0}},[o,r,c,f]),w(()=>{!o||!s.current||Q(s.current,n,a)},[n,a,o]),w(()=>{!l||!s.current||s.current.hidePopover()},[l])},Rt=t=>{const[e,o]=st(!1);return w(()=>{const n=t.current;if(!n)return;const a=()=>{o(n.assignedElements().length>0)};return a(),n.addEventListener("slotchange",a),()=>n.removeEventListener("slotchange",a)},[t.current]),e},Pt=D`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,Lt=t=>{const{heading:e,description:o,for:n,placement:a="top",delay:r=300,disabled:c=!1}=t,l=C(),s=C(),m=C(),f=Rt(m),b=!!(e||o||f)&&!c,i=z(()=>{b&&(clearTimeout(s.current),s.current=window.setTimeout(()=>{l.current?.showPopover()},r))},[r,b]);w(()=>{c&&(clearTimeout(s.current),l.current?.hidePopover())},[c]);const h=z(()=>{clearTimeout(s.current),l.current?.hidePopover()},[]);return w(()=>{if(n)return;const u=d=>{const g=d.relatedTarget;g&&t.contains(g)||h()};return t.addEventListener("pointerover",i),t.addEventListener("pointerout",u),()=>{t.removeEventListener("pointerover",i),t.removeEventListener("pointerout",u)}},[n,i,h]),Nt(t,{for:n,heading:e,description:o,placement:a,delay:r,disabled:c}),n?L:b?p`
		<slot @focusin=${i} @focusout=${h}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${a}"
			${I(l)}
		>
			<cosmoz-tooltip-content>
				${y(e,()=>p`<strong slot="heading">${e}</strong>`)}
				${y(o,()=>p`<p slot="description">${o}</p>`)}
				<slot name="content" ${I(m)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:p`
			<slot></slot>
			<slot name="content" ${I(m)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",_(Lt,{styleSheets:[H,O,Pt],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const pt=(t,{hint:e,label:o,invalid:n,errorMessage:a,compact:r,required:c})=>p`
		<!-- label: hidden in compact mode -->
		${y(!r&&o,()=>p`<label for="input" part="label"
					>${o}
					${y(c,()=>p`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${y(r&&n&&a,()=>p`<cosmoz-tooltip
						placement="top"
						description=${a}
						delay="300"
					>
						${St({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${y(!r&&e&&!n,()=>p`<span class="hint" part="hint">${e}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${y(!r&&n&&a,()=>p`<span class="error" part="error">${a}</span>`)}
	`,ht=["autocomplete","readonly","disabled","maxlength","invalid"],Mt=(t,...e)=>t.flatMap((o,n)=>[o,e[n]??""]).join(""),mt=Mt`
	/* === Host === */

	:host {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 1.5);
		position: relative;
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-family: var(--cz-font-body);
		margin-bottom: calc(var(--cz-spacing) * 6);
	}

	:host(:focus-within) {
		caret-color: var(--cz-color-text-primary);
	}

	:host([disabled]) .wrap {
		color: var(--cz-color-text-disabled);
		opacity: 0.5;
		cursor: not-allowed;
	}

	:host([disabled]) #input {
		cursor: not-allowed;
	}

	:host([invalid]) {
		caret-color: var(--cz-color-text-error);
	}

	:host([invalid]) .required,
	.error {
		color: var(--cz-color-text-error);
	}

	/* === Layout === */

	.wrap {
		display: flex;
		align-items: center;
		position: relative;
		width: 100%;
		border-radius: var(--cz-radius-md);
		box-shadow: 0 0 0 1px var(--cz-color-border-primary);
		overflow: hidden;
	}

	.wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring);
	}

	:host([invalid]) .wrap {
		box-shadow: 0 0 0 1px var(--cz-color-border-error);
	}

	:host([invalid]) .wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring-error);
	}

	.control {
		flex: 1;
		position: relative;
	}

	/* === Input === */

	#input {
		box-sizing: border-box;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
		color: var(--cz-color-text-primary);
		padding-block: calc(var(--cz-spacing) * 2);
		padding-inline: calc(var(--cz-spacing) * 3);
	}

	#input::placeholder {
		color: var(--cz-color-text-placeholder);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	/* === Label === */

	label {
		position: relative;
		font-size: var(--cz-text-sm);
		color: var(--cz-color-text-secondary);
	}

	/* === Hint & Error === */

	.hint {
		font-size: var(--cz-text-xs);
		color: var(--cz-color-text-tertiary);
		position: absolute;
		bottom: calc(var(--cz-spacing) * -6);
	}

	.error {
		font-size: var(--cz-text-xs);
		position: absolute;
		bottom: calc(var(--cz-spacing) * -6);
	}

	/* === Tooltip (fluid error indicator) === */

	cosmoz-tooltip {
		display: flex;
		align-items: center;
		margin-right: calc(var(--cz-spacing) * 2);
	}

	:host([invalid]) cosmoz-tooltip {
		color: var(--cz-color-text-error);
	}

	:host([variant='inline']) cosmoz-tooltip {
		display: none;
	}

	/* === Slots === */

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	/* === Variant: inline === */
	:host([variant='inline']) {
		margin-bottom: 0;
	}

	:host([variant='inline']) .wrap {
		margin-top: calc(var(--cz-spacing) * 2.5);
	}

	:host([variant='inline']) #input {
		padding-inline: 0;
	}

	:host([variant='inline']) #input::placeholder {
		color: transparent;
	}

	:host([variant='inline']) .wrap {
		border-radius: 0;
		box-shadow: none;
		padding-inline: 0;
	}

	:host([variant='inline']) .wrap:has(#input:focus) {
		box-shadow: none;
	}

	:host([variant='inline']) .hint,
	:host([variant='inline']) .error {
		display: none;
	}
	:host([variant='inline'][disabled]) label {
		color: var(--cz-color-text-disabled);
		opacity: 0.5;
		cursor: not-allowed;
	}
	:host([variant='inline']) label {
		position: absolute;
		top: 25%;
		left: 0;
		width: 100%;
		transform-origin: left;
		transition:
			transform 0.25s,
			width 0.25s;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		z-index: 1;
	}

	:host([variant='inline']:focus-within) label,
	:host([variant='inline'][has-value]) label {
		transform: translateY(-75%) scale(0.85);
	}

	:host([variant='inline']) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(0);
		}
	}

	/* === Variant: cell === */

	:host([variant='cell']) {
		margin-bottom: 0;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	:host([variant='cell']) .wrap:has(#input) {
		border: 0.5px solid var(--cz-color-bg-quaternary);
		border-radius: 0;
		box-shadow: none;
	}

	:host([variant='cell']) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-quaternary);
	}

	:host([variant='cell'][invalid]) .wrap:has(#input) {
		border-color: var(--cz-color-border-error);
		box-shadow: none;
	}

	:host([variant='cell'][invalid]) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-error);
		border: 0.5px solid transparent;
	}

	:host([variant='cell']) label {
		display: none;
	}

	:host([variant='cell']) .error {
		left: calc(var(--cz-spacing) * 3);
		bottom: 50%;
		transform: translateY(50%);
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		max-width: calc(100% - calc(var(--cz-spacing) * 6));
	}

	:host([variant='cell']:focus-within) .error,
	:host([variant='cell'][has-value]) .error {
		visibility: hidden;
	}

	/* === No spinner === */

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	/* === Autosize === */

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		--_pad: calc(var(--cz-spacing) * 12);
		min-width: calc(2ch + var(--_pad));
		width: calc(var(--chars) + var(--_pad));
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px + var(--_pad));
		min-width: calc(2ch + 0.25em + 15px + var(--_pad));
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: calc(var(--width) + var(--_pad));
		min-width: calc(2ch + 0.25em + var(--_pad));
	}
	slot[name='prefix']::slotted(*) {
		padding-inline-start: calc(var(--cz-spacing) * 2);
	}

	slot[name='suffix']::slotted(*) {
		padding-inline-end: calc(var(--cz-spacing) * 2);
	}
`,Yt=t=>N(()=>{if(t==null)return;const e=new RegExp(t,"u");return o=>{!o.defaultPrevented&&o.data&&!e.test(o.data)&&o.preventDefault()}},[t]),Ft=it(class extends ct{values;constructor(t,e,o,n){super(t,e),Object.assign(e.host,o),this.values=n}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,o)=>this.values[o]!==e)}});it(class extends ct{update(){return this.state.host}});const Ot=/([A-Z])/gu,X=(t,e,o)=>{t[e]=o,t.dispatchEvent(new CustomEvent(e.replace(Ot,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},vt=t=>{const e=C(void 0),o=z(s=>e.current=s,[]),n=t.shadowRoot,a=z(s=>t.dispatchEvent(new Event(s.type,{bubbles:s.bubbles})),[]),r=z(s=>X(t,"value",s.target.value),[]),c=z(s=>X(t,"focused",s.type==="focus"),[]),l=z(()=>{const s=e.current?.checkValidity();return t.toggleAttribute("invalid",!s),s},[]);return Ft({validate:l},[l]),w(()=>{const s=m=>{m.composedPath()[0]?.closest?.("input, textarea")||(m.preventDefault(),e.current?.focus())};return n.addEventListener("mousedown",s),()=>n.removeEventListener("mousedown",s)},[]),{onChange:a,onFocus:c,onInput:r,onRef:o}},qt=({placeholder:t})=>t||" ",Ht=(t,e)=>e??(t==="date"?"9999-12-31":void 0),Bt=["type","variant","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...ht],Gt=t=>{const{type:e="text",pattern:o,allowedPattern:n,autocomplete:a,value:r,readonly:c,disabled:l,min:s,max:m,step:f,maxlength:v,required:b}=t,{onChange:i,onFocus:h,onInput:u,onRef:d}=vt(t),g=Yt(n);return t.toggleAttribute("has-value",!!r),pt(p`
			<input
				${I(d)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${$(o)}
				autocomplete=${$(a)}
				placeholder=${qt({placeholder:t.placeholder})}
				?readonly=${c}
				aria-disabled=${l?"true":"false"}
				?disabled=${l}
				?required=${b}
				.value=${Y(r??"")}
				maxlength=${$(v)}
				@beforeinput=${g}
				@input=${u}
				@change=${i}
				@focus=${h}
				@blur=${h}
				min=${$(s)}
				max=${$(Ht(e,m))}
				step=${$(f)}
			/>
		`,t)};customElements.define("cosmoz-input",_(Gt,{observedAttributes:Bt,styleSheets:[B(mt)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const tt=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},Ut=(t,e=0)=>{if(e>0){const o=t.getAttribute("rows")??"",n=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=n,t.setAttribute("rows",o)}},Vt=t=>{const{value:e,maxRows:o}=t,n=N(()=>()=>t.shadowRoot.querySelector("#input"),[]);w(()=>Ut(n(),o),[o,n]),w(()=>tt(n()),[n,e]),w(()=>{const a=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>tt(a)));return r.observe(a),()=>r.unobserve(a)},[n])},Wt=["rows","placeholder","label","hint","required",...ht],jt=t=>{const{autocomplete:e,value:o,placeholder:n,readonly:a,disabled:r,rows:c,cols:l,maxlength:s}=t,{onChange:m,onFocus:f,onInput:v,onRef:b}=vt(t);return Vt(t),pt(p`
			<textarea id="input" part="input"
				${I(b)}
				autocomplete=${$(e)}
				placeholder=${n||" "}
				rows=${c??1} cols=${$(l)}
				?readonly=${a} ?aria-disabled=${r} ?disabled=${r}
				.value=${Y(o??"")} maxlength=${$(s)} @input=${v}
				@change=${m} @focus=${f} @blur=${f}>`,t)};customElements.define("cosmoz-textarea",_(jt,{observedAttributes:Wt,styleSheets:[B(mt)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Kt=t=>{const{label:e,value:o,disabled:n,error:a}=t,r=z(c=>t.dispatchEvent(new CustomEvent("change",{detail:c.target.checked})),[]);return p`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Y(!!o)}
			?disabled=${n}
			@change=${r}
		/>
		${y(e,()=>p`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${y(a,c=>p`<div class="failure">${c}</div>`)} `},Zt=D`
	.toggle {
		appearance: none;
		width: calc(var(--cz-spacing) * 9);
		height: calc(var(--cz-spacing) * 4.5);
		display: inline-block;
		position: relative;
		border-radius: var(--cz-radius-3xl);
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-color-bg-quaternary);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: calc(var(--cz-spacing) * 3.5);
		height: calc(var(--cz-spacing) * 3.5);
		background: var(--cz-color-brand-25);
		left: calc(var(--cz-spacing) * 0.5);
		top: calc(var(--cz-spacing) * 0.5);
		border-radius: var(--cz-radius-full);
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-color-bg-brand-solid);
	}
	.toggle:checked::before {
		left: calc(var(--cz-spacing) * 5);
	}
	label {
		padding-left: calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
		cursor: pointer;
		user-select: none;
	}

	.failure {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,Jt=D`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: calc(var(--cz-spacing) * 1);
	}
`;customElements.define("cosmoz-toggle",_(Kt,{styleSheets:[Jt,Zt],observedAttributes:["label","disabled","error"]}));const Qt=D`
	:host {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 0.5);
		position: relative;
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-family: var(--cz-font-body);
		padding: calc(var(--cz-spacing) * 2);
		border-radius: var(--cz-radius-md);
		box-shadow: 0 0 0 1px var(--cz-color-border-primary);
		width: min-content;
	}

	:host(:focus-within) {
		box-shadow: var(--cz-focus-ring);
	}

	.date-input-part {
		display: grid;
		padding: 0 calc(var(--cz-spacing) * 1);
	}

	.date-input-part:focus-within {
		background: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		border-radius: var(--cz-radius-sm);
	}

	.date-input-part > * {
		grid-area: 1 / 1;
	}

	.date-input-sizer {
		font: inherit;
		visibility: hidden;
	}

	cosmoz-input {
		margin: 0;
		padding: 0;
	}

	cosmoz-input::part(input) {
		padding: 0;
		caret-color: transparent;
		color: inherit;
	}

	cosmoz-input:focus-within {
		--cz-color-text-placeholder: currentColor;
	}

	cosmoz-input::part(input)::selection {
		background-color: rgba(0, 0, 0, 0.01);
	}

	cosmoz-input::part(wrap) {
		box-shadow: none;
		border-radius: 0;
	}
`,x="",Xt=t=>["year","month","day"].includes(t),G=({year:t,month:e})=>e===x||t===x?31:ut(new Date(Number(t),Number(e)-1)),te=(t,e)=>t>e,U=({input:t,max:e,previous:o})=>{if(t===x)return x;if(isNaN(Number(t)))return o;const n=Number(t);return te(n,e)?String(n).slice(-1):String(n)},ee=(t,e)=>U({input:t,max:G(e),previous:e.day}),oe=(t,e)=>U({input:t,max:12,previous:e.month}),ne=(t,e)=>U({input:t,max:9999,previous:e.year}),V=({value:t,offset:e,min:o,max:n})=>{const a=Number(t)+e;return a>n?String(o):a<o?String(n):String(a)},re=(t,e)=>V({value:t.day,offset:e,min:1,max:G(t)}),ae=(t,e)=>V({value:t.month,offset:e,min:1,max:12}),se=(t,e)=>V({value:t.year,offset:e,min:1,max:9999}),q=(t,e)=>{if(t===x)return x;const o=Number(t);if(o===0)return String(o);const n=new Date(2e3,o-1,1);return Intl.DateTimeFormat(e,{numberingSystem:"latn",calendar:"gregory"}).formatToParts(n).find(c=>c.type==="month").value},P=(t,e)=>{if(t===x)return x;const o=Number(t);if(o===0)return String(o);const n=new Date(2e3,0,o);return Intl.DateTimeFormat(e,{numberingSystem:"latn",calendar:"gregory"}).formatToParts(n).find(c=>c.type==="day").value},et=t=>{switch(t){case"year":return"YYYY";case"month":return"MM";case"day":return"DD"}},ot=({day:t,month:e,year:o})=>bt(new Date(Number(o),Number(e)-1,Number(t)),"yyyy-MM-dd"),ie=t=>t.year.length===4&&Number(t.year)>=1&&Number(t.year)<=9999&&Number(t.month)>=1&&Number(t.month)<=12&&Number(t.day)>=1&&Number(t.day)<=ut(new Date(Number(t.year),Number(t.month)-1))&&Object.values(t).every(e=>e!==x),ce={year:"numeric",month:"numeric",day:"numeric",numberingSystem:"latn",calendar:"gregory"},nt=(t,e)=>t?{year:String(t.getFullYear()),month:q(t.getMonth()+1,e),day:P(t.getDate(),e)}:{year:x,month:x,day:x},le=t=>{const{locale:e}=t,o=e??navigator.language,[n,a]=yt("value"),r=N(()=>zt(n),[n]),[c,l]=st(nt(r,o)),s=N(()=>Intl.DateTimeFormat(o,ce).formatToParts(r),[r,o]);w(()=>{(!r||!wt(r,ot(c)))&&l(nt(r,o))},[r,o,l]),w(()=>{ie(c)&&a(ot(c))},[c,a]);const m=z((i,h)=>{const u=i.detail.value;l(d=>{if(h==="year"){const A=ne(u,d);return{...d,year:A}}if(h==="month"){const A=oe(u,d);return{...d,month:q(A,o)}}const g=ee(u,d);return{...d,day:P(g,o)}})},[o,l]),f=z((i,h)=>{if((i.key==="ArrowDown"||i.key==="ArrowUp")&&(i.preventDefault(),l(u=>{const d=i.key==="ArrowUp"?1:-1;if(h==="year"){const A=se(u,d);return{...u,year:A}}if(h==="month"){const A=ae(u,d);return{...u,month:q(A,o)}}const g=re(u,d);return{...u,day:P(g,o)}})),i.key==="ArrowLeft"||i.key==="ArrowRight"){i.preventDefault();const u=t.shadowRoot?.activeElement;if(!u)return;const d=[...t.shadowRoot?.querySelectorAll("cosmoz-input")],g=d.indexOf(u);if(i.key==="ArrowLeft"&&g-1>=0){d[g-1].focus();return}i.key==="ArrowRight"&&g+1<d.length&&d[g+1].focus()}},[t,o,l]),v=z(()=>{const i=G(c);l(h=>Number(c.day)>i?{...h,day:P(i,o)}:h)},[c,l,o]),b=z(i=>{i.currentTarget.shadowRoot?.querySelector("input")?.select()},[]);return{inputState:c,onChange:m,onKeyDown:f,onBlur:v,onClick:b,localeDateParts:s}},de=t=>{const{inputState:e,onChange:o,onKeyDown:n,onBlur:a,onClick:r,localeDateParts:c}=le(t);return xt(c,(l,s)=>s,({value:l,type:s})=>{if(Xt(s))return p`
					<span class="date-input-part">
						<span class="date-input-sizer" aria-hidden="true"
							>${e[s]||et(s)}</span
						>
						<cosmoz-input
							type="text"
							inputmode="numeric"
							no-label-float
							autocomplete="off"
							placeholder=${et(s)}
							.value=${Y(e[s])}
							@click=${r}
							@blur=${a}
							@value-changed=${m=>o(m,s)}
							@keydown=${m=>n(m,s)}
						></cosmoz-input>
					</span>
				`;if(s==="literal")return p`<span>${l}</span>`})};customElements.define("cosmoz-date-input",_(de,{observedAttributes:["locale"],styleSheets:[H,Qt],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));export{I as n,C as u};
