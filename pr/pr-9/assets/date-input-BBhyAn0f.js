import{x as N,h as rt,j as T,t as gt,b as ft,o as $,v as y,g as at,p as D,q as _,s as q,D as G,u as w,y as st,z,E as it,H as ct,m as bt,F as yt,w as zt,k as wt,i as xt,n as $t}from"./helper-bgKLFhcK.js";import{r as lt,w as At,d as p,E as R,A as L,p as kt,D as Et}from"./iframe-jyMnPp1e.js";function Tt(t){let e=t;return{get current(){return e},set current(o){e=o},get value(){return e},set value(o){e=o}}}function C(t){return N(()=>Tt(t),[])}const S=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(e,!1),S(n,e);return!0},M=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},dt=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Ct(e)}};function Dt(t){this._$AN!==void 0?(M(this),this._$AM=t,dt(this)):this._$AM=t}function _t(t,e=!1,o=0){const n=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(e)if(Array.isArray(n))for(let r=o;r<n.length;r++)S(n[r],!1),M(n[r]);else n!=null&&(S(n,!1),M(n));else S(this,t)}const Ct=t=>{t.type==T.CHILD&&(t._$AP??=_t,t._$AQ??=Dt)};class St extends rt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,n){super._$AT(e,o,n),dt(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(S(this,e),M(this))}setValue(e){if(lt(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}function ut(t,e){const o=gt(t,e?.in),n=o.getFullYear(),a=o.getMonth(),r=ft(o,0);return r.setFullYear(n,a+1,0),r.setHours(0,0,0,0),r.getDate()}const It=({slot:t,title:e,className:o,width:n="24",height:a="24",styles:r}={})=>p`
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
    ${y(e,()=>At`<title>${e}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`;const Y=at(class extends rt{constructor(t){if(super(t),t.type!==T.PROPERTY&&t.type!==T.ATTRIBUTE&&t.type!==T.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!lt(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===R||e===L)return e;const o=t.element,n=t.name;if(t.type===T.PROPERTY){if(e===o[n])return R}else if(t.type===T.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(n))return R}else if(t.type===T.ATTRIBUTE&&o.getAttribute(n)===e+"")return R;return kt(t),e}}),F=new WeakMap,I=at(class extends St{render(t){return L}update(t,[e]){const o=e!==this.G;return o&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),L}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=F.get(e);o===void 0&&(o=new WeakMap,F.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?F.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Nt=D`
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
		`,{styleSheets:[q,Nt]}));const O=G(D`
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
`),J=(t,e,o)=>Et(p`<cosmoz-tooltip-content>
			${y(e,()=>p`<strong slot="heading">${e}</strong>`)}
			${y(o,()=>p`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,t),Rt=(t,e)=>{const{for:o,heading:n,description:a,placement:r="top",delay:l=300,disabled:s=!1}=e,i=C(),f=!!(n||a)&&!s;w(()=>{if(!o||!f)return;const m=t.getRootNode(),b=m.adoptedStyleSheets??[];b.includes(O)||(m.adoptedStyleSheets=[...b,O]);const c=document.createElement("div");c.setAttribute("popover","manual"),c.setAttribute("role","tooltip"),c.classList.add("cosmoz-tooltip-popover"),t.after(c),i.current=c,J(c,n,a);const h=`[name="${o}"]`,u=`--tooltip-anchor-${o}`;let d;const v=k=>{s||(clearTimeout(d),k.style.anchorName=u,c.style.positionAnchor=u,c.style.positionArea=r,d=window.setTimeout(()=>c.showPopover(),l))},A=()=>{clearTimeout(d),c.hidePopover()},W=k=>{const E=k.target.closest?.(h);E&&v(E)},j=k=>{const E=k.target.closest?.(h);if(!E)return;const Q=k.relatedTarget;Q&&E.contains(Q)||A()},K=k=>{const E=k.target.closest?.(h);E&&v(E)},Z=k=>{k.target.closest?.(h)&&A()};return m.addEventListener("pointerover",W),m.addEventListener("pointerout",j),m.addEventListener("focusin",K),m.addEventListener("focusout",Z),()=>{clearTimeout(d),m.removeEventListener("pointerover",W),m.removeEventListener("pointerout",j),m.removeEventListener("focusin",K),m.removeEventListener("focusout",Z),c.hidePopover(),c.remove(),i.current=void 0}},[o,r,l,f]),w(()=>{!o||!i.current||J(i.current,n,a)},[n,a,o]),w(()=>{!s||!i.current||i.current.hidePopover()},[s])},Pt=t=>{const[e,o]=st(!1);return w(()=>{const n=t.current;if(!n)return;const a=()=>{o(n.assignedElements().length>0)};return a(),n.addEventListener("slotchange",a),()=>n.removeEventListener("slotchange",a)},[t.current]),e},Lt=D`
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
`,Mt=t=>{const{heading:e,description:o,for:n,placement:a="top",delay:r=300,disabled:l=!1}=t,s=C(),i=C(),g=C(),f=Pt(g),b=!!(e||o||f)&&!l,c=z(()=>{b&&(clearTimeout(i.current),i.current=window.setTimeout(()=>{s.current?.showPopover()},r))},[r,b]);w(()=>{l&&(clearTimeout(i.current),s.current?.hidePopover())},[l]);const h=z(()=>{clearTimeout(i.current),s.current?.hidePopover()},[]);return w(()=>{if(n)return;const u=d=>{const v=d.relatedTarget;v&&t.contains(v)||h()};return t.addEventListener("pointerover",c),t.addEventListener("pointerout",u),()=>{t.removeEventListener("pointerover",c),t.removeEventListener("pointerout",u)}},[n,c,h]),Rt(t,{for:n,heading:e,description:o,placement:a,delay:r,disabled:l}),n?L:b?p`
		<slot @focusin=${c} @focusout=${h}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${a}"
			${I(s)}
		>
			<cosmoz-tooltip-content>
				${y(e,()=>p`<strong slot="heading">${e}</strong>`)}
				${y(o,()=>p`<p slot="description">${o}</p>`)}
				<slot name="content" ${I(g)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:p`
			<slot></slot>
			<slot name="content" ${I(g)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",_(Mt,{styleSheets:[q,O,Lt],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const pt=(t,{hint:e,label:o,invalid:n,errorMessage:a,compact:r,required:l})=>p`
		<!-- label: hidden in compact mode -->
		${y(!r&&o,()=>p`<label for="input" part="label"
					>${o}
					${y(l,()=>p`<span class="required">*</span>`)}
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
						${It({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${y(!r&&e&&!n,()=>p`<span class="hint" part="hint">${e}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${y(!r&&n&&a,()=>p`<span class="error" part="error">${a}</span>`)}
	`,ht=["autocomplete","readonly","disabled","maxlength","invalid"],Yt=(t,...e)=>t.flatMap((o,n)=>[o,e[n]??""]).join(""),mt=Yt`
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
`,Ft=t=>N(()=>{if(t==null)return;const e=new RegExp(t,"u");return o=>{!o.defaultPrevented&&o.data&&!e.test(o.data)&&o.preventDefault()}},[t]),Ot=it(class extends ct{values;constructor(t,e,o,n){super(t,e),Object.assign(e.host,o),this.values=n}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,o)=>this.values[o]!==e)}}),me=it(class extends ct{update(){return this.state.host}}),Ht=/([A-Z])/gu,X=(t,e,o)=>{t[e]=o,t.dispatchEvent(new CustomEvent(e.replace(Ht,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},vt=t=>{const e=C(void 0),o=z(i=>e.current=i,[]),n=t.shadowRoot,a=z(i=>t.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),r=z(i=>X(t,"value",i.target.value),[]),l=z(i=>X(t,"focused",i.type==="focus"),[]),s=z(()=>{const i=e.current?.checkValidity();return t.toggleAttribute("invalid",!i),i},[]);return Ot({validate:s},[s]),w(()=>{const i=g=>{g.composedPath()[0]?.closest?.("input, textarea")||(g.preventDefault(),e.current?.focus())};return n.addEventListener("mousedown",i),()=>n.removeEventListener("mousedown",i)},[]),{onChange:a,onFocus:l,onInput:r,onRef:o}},qt=({placeholder:t})=>t||" ",Gt=(t,e)=>e??(t==="date"?"9999-12-31":void 0),Bt=["type","variant","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...ht],Ut=t=>{const{type:e="text",pattern:o,allowedPattern:n,autocomplete:a,value:r,readonly:l,disabled:s,min:i,max:g,step:f,maxlength:m,required:b}=t,{onChange:c,onFocus:h,onInput:u,onRef:d}=vt(t),v=Ft(n);return t.toggleAttribute("has-value",!!r),pt(p`
			<input
				${I(d)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${$(o)}
				autocomplete=${$(a)}
				placeholder=${qt({placeholder:t.placeholder})}
				?readonly=${l}
				aria-disabled=${s?"true":"false"}
				?disabled=${s}
				?required=${b}
				.value=${Y(r??"")}
				maxlength=${$(m)}
				@beforeinput=${v}
				@input=${u}
				@change=${c}
				@focus=${h}
				@blur=${h}
				min=${$(i)}
				max=${$(Gt(e,g))}
				step=${$(f)}
			/>
		`,t)};customElements.define("cosmoz-input",_(Ut,{observedAttributes:Bt,styleSheets:[G(mt)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const tt=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},Vt=(t,e=0)=>{if(e>0){const o=t.getAttribute("rows")??"",n=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=n,t.setAttribute("rows",o)}},Wt=t=>{const{value:e,maxRows:o}=t,n=N(()=>()=>t.shadowRoot.querySelector("#input"),[]);w(()=>Vt(n(),o),[o,n]),w(()=>tt(n()),[n,e]),w(()=>{const a=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>tt(a)));return r.observe(a),()=>r.unobserve(a)},[n])},jt=["rows","placeholder","label","hint","required",...ht],Kt=t=>{const{autocomplete:e,value:o,placeholder:n,readonly:a,disabled:r,rows:l,cols:s,maxlength:i}=t,{onChange:g,onFocus:f,onInput:m,onRef:b}=vt(t);return Wt(t),pt(p`
			<textarea id="input" part="input"
				${I(b)}
				autocomplete=${$(e)}
				placeholder=${n||" "}
				rows=${l??1} cols=${$(s)}
				?readonly=${a} ?aria-disabled=${r} ?disabled=${r}
				.value=${Y(o??"")} maxlength=${$(i)} @input=${m}
				@change=${g} @focus=${f} @blur=${f}>`,t)};customElements.define("cosmoz-textarea",_(Kt,{observedAttributes:jt,styleSheets:[G(mt)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Zt=t=>{const{label:e,value:o,disabled:n,error:a}=t,r=z(l=>t.dispatchEvent(new CustomEvent("change",{detail:l.target.checked})),[]);return p`<input
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
		${y(a,l=>p`<div class="failure">${l}</div>`)} `},Qt=D`
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
`;customElements.define("cosmoz-toggle",_(Zt,{styleSheets:[Jt,Qt],observedAttributes:["label","disabled","error"]}));const Xt=D`
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
`,x="",te=t=>["year","month","day"].includes(t),B=({year:t,month:e})=>e===x||t===x?31:ut(new Date(Number(t),Number(e)-1)),ee=(t,e)=>t>e,U=({input:t,max:e,previous:o})=>{if(t===x)return x;if(isNaN(Number(t)))return o;const n=Number(t);return ee(n,e)?String(n).slice(-1):String(n)},oe=(t,e)=>U({input:t,max:B(e),previous:e.day}),ne=(t,e)=>U({input:t,max:12,previous:e.month}),re=(t,e)=>U({input:t,max:9999,previous:e.year}),V=({value:t,offset:e,min:o,max:n})=>{const a=Number(t)+e;return a>n?String(o):a<o?String(n):String(a)},ae=(t,e)=>V({value:t.day,offset:e,min:1,max:B(t)}),se=(t,e)=>V({value:t.month,offset:e,min:1,max:12}),ie=(t,e)=>V({value:t.year,offset:e,min:1,max:9999}),H=(t,e)=>{if(t===x)return x;const o=Number(t);if(o===0)return String(o);const n=new Date(2e3,o-1,1);return Intl.DateTimeFormat(e,{numberingSystem:"latn",calendar:"gregory"}).formatToParts(n).find(l=>l.type==="month").value},P=(t,e)=>{if(t===x)return x;const o=Number(t);if(o===0)return String(o);const n=new Date(2e3,0,o);return Intl.DateTimeFormat(e,{numberingSystem:"latn",calendar:"gregory"}).formatToParts(n).find(l=>l.type==="day").value},et=t=>{switch(t){case"year":return"YYYY";case"month":return"MM";case"day":return"DD"}},ot=({day:t,month:e,year:o})=>bt(new Date(Number(o),Number(e)-1,Number(t)),"yyyy-MM-dd"),ce=t=>t.year.length===4&&Number(t.year)>=1&&Number(t.year)<=9999&&Number(t.month)>=1&&Number(t.month)<=12&&Number(t.day)>=1&&Number(t.day)<=ut(new Date(Number(t.year),Number(t.month)-1))&&Object.values(t).every(e=>e!==x),le={year:"numeric",month:"numeric",day:"numeric",numberingSystem:"latn",calendar:"gregory"},nt=(t,e)=>t?{year:String(t.getFullYear()),month:H(t.getMonth()+1,e),day:P(t.getDate(),e)}:{year:x,month:x,day:x},de=()=>{const t=yt(),{locale:e}=t,o=e??navigator.language,[n,a]=zt("value"),r=N(()=>wt(n),[n]),[l,s]=st(nt(r,o)),i=N(()=>Intl.DateTimeFormat(o,le).formatToParts(r),[r,o]);w(()=>{(!r||!xt(r,ot(l)))&&s(nt(r,o))},[r,o,s]),w(()=>{ce(l)&&a(ot(l))},[l,a]);const g=z((c,h)=>{const u=c.detail.value;s(d=>{if(h==="year"){const A=re(u,d);return{...d,year:A}}if(h==="month"){const A=ne(u,d);return{...d,month:H(A,o)}}const v=oe(u,d);return{...d,day:P(v,o)}})},[o,s]),f=z((c,h)=>{if((c.key==="ArrowDown"||c.key==="ArrowUp")&&(c.preventDefault(),s(u=>{const d=c.key==="ArrowUp"?1:-1;if(h==="year"){const A=ie(u,d);return{...u,year:A}}if(h==="month"){const A=se(u,d);return{...u,month:H(A,o)}}const v=ae(u,d);return{...u,day:P(v,o)}})),c.key==="ArrowLeft"||c.key==="ArrowRight"){c.preventDefault();const u=t.shadowRoot?.activeElement;if(!u)return;const d=[...t.shadowRoot?.querySelectorAll("cosmoz-input")],v=d.indexOf(u);if(c.key==="ArrowLeft"&&v-1>=0){d[v-1].focus();return}c.key==="ArrowRight"&&v+1<d.length&&d[v+1].focus()}},[t,o,s]),m=z(()=>{const c=B(l);s(h=>Number(l.day)>c?{...h,day:P(c,o)}:h)},[l,s,o]),b=z(c=>{c.currentTarget.shadowRoot?.querySelector("input")?.select()},[]);return{inputState:l,onChange:g,onKeyDown:f,onBlur:m,onClick:b,localeDateParts:i}},ue=()=>{const{inputState:t,onChange:e,onKeyDown:o,onBlur:n,onClick:a,localeDateParts:r}=de();return $t(r,(l,s)=>s,({value:l,type:s})=>{if(te(s))return p`
					<span class="date-input-part">
						<span class="date-input-sizer" aria-hidden="true"
							>${t[s]||et(s)}</span
						>
						<cosmoz-input
							type="text"
							inputmode="numeric"
							no-label-float
							autocomplete="off"
							placeholder=${et(s)}
							.value=${Y(t[s])}
							@click=${a}
							@blur=${n}
							@value-changed=${i=>e(i,s)}
							@keydown=${i=>o(i,s)}
						></cosmoz-input>
					</span>
				`;if(s==="literal")return p`<span>${l}</span>`})};customElements.define("cosmoz-date-input",_(ue,{observedAttributes:["locale"],styleSheets:[q,Xt],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));export{me as a,X as b,I as n,C as u};
