import{r as Gt,D as Ut,A as V,E as B,p as Qt,w as de,d as y,M as he,u as W,v as q,h as lt}from"./iframe-BFq7XEtP.js";import"./preload-helper-PPVm8Dsz.js";let ot,Xt=0;function $t(t){ot=t}function Mt(){ot=null,Xt=0}function fe(){return Xt++}const dt=Symbol("haunted.phase"),nt=Symbol("haunted.hook"),Dt=Symbol("haunted.update"),Ct=Symbol("haunted.commit"),N=Symbol("haunted.effects"),G=Symbol("haunted.layoutEffects"),mt="haunted.context";class me{update;host;virtual;[nt];[N];[G];constructor(e,n){this.update=e,this.host=n,this[nt]=new Map,this[N]=[],this[G]=[]}run(e){$t(this);let n=e();return Mt(),n}_runEffects(e){let n=this[e];$t(this);for(let r of n)r.call(this);Mt()}runEffects(){this._runEffects(N)}runLayoutEffects(){this._runEffects(G)}teardown(){this[nt].forEach(n=>{typeof n.teardown=="function"&&n.teardown(!0)})}}class pe extends Error{constructor(e){const n=e?` <${e}>`:"";super(`Infinite update loop detected in component${n}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const ge=100,be=Promise.resolve().then.bind(Promise.resolve());function Vt(){let t=[],e;function n(){e=null;let r=t;t=[];for(var o=0,a=r.length;o<a;o++)r[o]()}return function(r){t.push(r),e==null&&(e=be(n))}}const ve=Vt(),Tt=Vt();class bt{renderer;host;state;[dt];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ge;constructor(e,n){this.renderer=e,this.host=n,this.state=new me(this.update.bind(this),n),this[dt]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>bt.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new pe(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,ve(()=>{let e=this.handlePhase(Dt);Tt(()=>{this.handlePhase(Ct,e),Tt(()=>{this.handlePhase(N),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,n){switch(this[dt]=e,e){case Ct:this.commit(n),this.runEffects(G);return;case Dt:return this.render();case N:return this.runEffects(N)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}const K=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},ye=t=>t?.map(e=>typeof e=="string"?K(e):e),we=(t,...e)=>t.flatMap((n,r)=>[n,e[r]||""]).join(""),R=we,xe=(t="")=>t.replace(/-+([a-z])?/g,(e,n)=>n?n.toUpperCase():"");function ze(t){class e extends bt{frag;renderResult;constructor(o,a,s){super(o,s||a),this.frag=a}commit(o){this.renderResult=t(o,this.frag)}}function n(r,o,a){const s=(a||o||{}).baseElement||HTMLElement,{observedAttributes:i=[],useShadowDOM:c=!0,shadowRootInit:g={},styleSheets:p}=a||o||{},u=ye(r.styleSheets||p);class m extends s{_scheduler;static get observedAttributes(){return r.observedAttributes||i||[]}constructor(){if(super(),c===!1)this._scheduler=new e(r,this);else{const d=this.attachShadow({mode:"open",...g});u&&(d.adoptedStyleSheets=u),this._scheduler=new e(r,d,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(d,b,w){if(b===w)return;let x=w===""?!0:w;Reflect.set(this,xe(d),x)}}function l(h){let d=h,b=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return d},set(w){b&&d===w||(b=!0,d=w,this._scheduler&&this._scheduler.update())}})}const f=new Proxy(s.prototype,{getPrototypeOf(h){return h},set(h,d,b,w){let x;return d in h?(x=Object.getOwnPropertyDescriptor(h,d),x&&x.set?(x.set.call(w,b),!0):(Reflect.set(h,d,b,w),!0)):(typeof d=="symbol"||d[0]==="_"?x={enumerable:!0,configurable:!0,writable:!0,value:b}:x=l(b),Object.defineProperty(w,d,x),x.set&&x.set.call(w,b),!0)}});return Object.setPrototypeOf(m.prototype,f),m}return n}class C{id;state;constructor(e,n){this.id=e,this.state=n}}function ke(t,...e){let n=fe(),r=ot[nt],o=r.get(n);return o||(o=new t(n,ot,...e),r.set(n,o)),o.update(...e)}function T(t){return ke.bind(null,t)}function Jt(t){return T(class extends C{callback;lastValues;values;_teardown;constructor(e,n,r,o){super(e,n),t(n,this)}update(e,n){this.callback=e,this.values=n}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,n)=>this.lastValues[n]!==e)}})}function Kt(t,e){t[N].push(e)}const S=Jt(Kt),Se=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Ee=T(class extends C{Context;value;_ranEffect;_unsubscribe;constructor(t,e,n){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Kt(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Se(this.state.host).dispatchEvent(new CustomEvent(mt,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:o}=e;this.value=r?o:t.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function _e(t){return e=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(mt,this)}disconnectedCallback(){this.removeEventListener(mt,this)}handleEvent(r){const{detail:o}=r;o.Context===n&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let o of this.listeners)o(r)}get value(){return this._value}},Consumer:t(function({render:r}){const o=Ee(n);return r(o)},{useShadowDOM:!1}),defaultValue:e};return n}}const L=T(class extends C{value;values;constructor(t,e,n,r){super(t,e),this.value=n(),this.values=r}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),z=(t,e)=>L(()=>t,e);function Pe(t,e){t[G].push(e)}Jt(Pe);const Zt=T(class extends C{args;constructor(t,e,n){super(t,e),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});T(class extends C{reducer;currentState;constructor(t,e,n,r,o){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=o!==void 0?o(r):r}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const $e=/([A-Z])/gu,Me=T(class extends C{property;eventName;constructor(t,e,n,r){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace($e,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updater(r))}update(t,e){return[this.state.host[this.property],this.updater]}resolve(t){const e=this.state.host[this.property],n=typeof t=="function"?t:void 0,r=n?n(e):t;return[e,r,n]}notify(t,e){const n=new CustomEvent(this.eventName,{detail:{value:t,updater:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(t){const[e,n,r]=this.resolve(t);this.notify(n,r).defaultPrevented||Object.is(e,n)||(this.state.host[this.property]=n)}});function De(t){let e=t;return{get current(){return e},set current(n){e=n},get value(){return e},set value(n){e=n}}}function U(t){return L(()=>De(t),[])}const Ce=T(class extends C{update(){return this.state.host}});function Te({render:t}){const e=ze(t),n=_e(e);return{component:e,createContext:n}}const A={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},vt=t=>(...e)=>({_$litDirective$:t,values:e});class yt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}const Q=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const r of n)r._$AO?.(e,!1),Q(r,e);return!0},at=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},te=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),We(e)}};function Oe(t){this._$AN!==void 0?(at(this),this._$AM=t,te(this)):this._$AM=t}function Ae(t,e=!1,n=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let a=n;a<r.length;a++)Q(r[a],!1),at(r[a]);else r!=null&&(Q(r,!1),at(r));else Q(this,t)}const We=t=>{t.type==A.CHILD&&(t._$AP??=Ae,t._$AQ??=Oe)};class Ye extends yt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),te(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(Q(this,e),at(this))}setValue(e){if(Gt(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:I}=Te({render:Ut});const P=t=>t??V;const ct=vt(class extends yt{constructor(t){if(super(t),t.type!==A.PROPERTY&&t.type!==A.ATTRIBUTE&&t.type!==A.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Gt(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===B||e===V)return e;const n=t.element,r=t.name;if(t.type===A.PROPERTY){if(e===n[r])return B}else if(t.type===A.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(r))return B}else if(t.type===A.ATTRIBUTE&&n.getAttribute(r)===e+"")return B;return Qt(t),e}}),ht=new WeakMap,X=vt(class extends Ye{render(t){return V}update(t,[e]){const n=e!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),V}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let n=ht.get(e);n===void 0&&(n=new WeakMap,ht.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?ht.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function k(t,e,n){return t?e(t):n?.(t)}const Ne=({slot:t,title:e,className:n,width:r="24",height:o="24",styles:a}={})=>y`
  <svg
    slot=${P(t)}
    class=${`info-circle-icon ${n??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${o}
    style=${P(a)}
  >
    ${k(e,()=>de`<title>${e}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,wt=K(R`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`),Re=R`
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
`;customElements.define("cosmoz-tooltip-content",I(()=>y`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[wt,Re]}));const pt=K(R`
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
`),Ot=(t,e,n)=>Ut(y`<cosmoz-tooltip-content>
			${k(e,()=>y`<strong slot="heading">${e}</strong>`)}
			${k(n,()=>y`<p slot="description">${n}</p>`)}
		</cosmoz-tooltip-content>`,t),Fe=(t,e)=>{const{for:n,heading:r,description:o,placement:a="top",delay:s=300,disabled:i=!1}=e,c=U(),p=!!(r||o)&&!i;S(()=>{if(!n||!p)return;const u=t.getRootNode(),m=u.adoptedStyleSheets??[];m.includes(pt)||(u.adoptedStyleSheets=[...m,pt]);const l=document.createElement("div");l.setAttribute("popover","manual"),l.setAttribute("role","tooltip"),l.classList.add("cosmoz-tooltip-popover"),t.after(l),c.current=l,Ot(l,r,o);const f=`[name="${n}"]`,h=`--tooltip-anchor-${n}`;let d;const b=$=>{i||(clearTimeout(d),$.style.anchorName=h,l.style.positionAnchor=h,l.style.positionArea=a,d=window.setTimeout(()=>l.showPopover(),s))},w=()=>{clearTimeout(d),l.hidePopover()},x=$=>{const M=$.target.closest?.(f);M&&b(M)},St=$=>{const M=$.target.closest?.(f);if(!M)return;const Pt=$.relatedTarget;Pt&&M.contains(Pt)||w()},Et=$=>{const M=$.target.closest?.(f);M&&b(M)},_t=$=>{$.target.closest?.(f)&&w()};return u.addEventListener("pointerover",x),u.addEventListener("pointerout",St),u.addEventListener("focusin",Et),u.addEventListener("focusout",_t),()=>{clearTimeout(d),u.removeEventListener("pointerover",x),u.removeEventListener("pointerout",St),u.removeEventListener("focusin",Et),u.removeEventListener("focusout",_t),l.hidePopover(),l.remove(),c.current=void 0}},[n,a,s,p]),S(()=>{!n||!c.current||Ot(c.current,r,o)},[r,o,n]),S(()=>{!i||!c.current||c.current.hidePopover()},[i])},Le=t=>{const[e,n]=Zt(!1);return S(()=>{const r=t.current;if(!r)return;const o=()=>{n(r.assignedElements().length>0)};return o(),r.addEventListener("slotchange",o),()=>r.removeEventListener("slotchange",o)},[t.current]),e},Ie=R`
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
`,qe=t=>{const{heading:e,description:n,for:r,placement:o="top",delay:a=300,disabled:s=!1}=t,i=U(),c=U(),g=U(),p=Le(g),m=!!(e||n||p)&&!s,l=z(()=>{m&&(clearTimeout(c.current),c.current=window.setTimeout(()=>{i.current?.showPopover()},a))},[a,m]);S(()=>{s&&(clearTimeout(c.current),i.current?.hidePopover())},[s]);const f=z(()=>{clearTimeout(c.current),i.current?.hidePopover()},[]);return S(()=>{if(r)return;const h=d=>{const b=d.relatedTarget;b&&t.contains(b)||f()};return t.addEventListener("pointerover",l),t.addEventListener("pointerout",h),()=>{t.removeEventListener("pointerover",l),t.removeEventListener("pointerout",h)}},[r,l,f]),Fe(t,{for:r,heading:e,description:n,placement:o,delay:a,disabled:s}),r?V:m?y`
		<slot @focusin=${l} @focusout=${f}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${o}"
			${X(i)}
		>
			<cosmoz-tooltip-content>
				${k(e,()=>y`<strong slot="heading">${e}</strong>`)}
				${k(n,()=>y`<p slot="description">${n}</p>`)}
				<slot name="content" ${X(g)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:y`
			<slot></slot>
			<slot name="content" ${X(g)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",I(qe,{styleSheets:[wt,pt,Ie],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const ee=(t,{hint:e,label:n,invalid:r,errorMessage:o,compact:a,required:s})=>y`
		<!-- label: hidden in compact mode -->
		${k(!a&&n,()=>y`<label for="input" part="label"
					>${n}
					${k(s,()=>y`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${k(a&&r&&o,()=>y`<cosmoz-tooltip
						placement="top"
						description=${o}
						delay="300"
					>
						${Ne({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${k(!a&&e&&!r,()=>y`<span class="hint" part="hint">${e}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${k(!a&&r&&o,()=>y`<span class="error" part="error">${o}</span>`)}
	`,ne=["autocomplete","readonly","disabled","maxlength","invalid"],He={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},je=t=>typeof t=="string"&&He.isoBasic.test(t)?new Date(`${t}T00:00`):new Date(t),Be=t=>{if(t==null)return;if(t instanceof Date&&!isNaN(t.getTime()))return t;if(!(typeof t=="number"||typeof t=="string"))return;const e=je(t);if(!(e instanceof Date&&isNaN(e.getTime())))return e},Ge=(t,...e)=>t.flatMap((n,r)=>[n,e[r]??""]).join(""),re=Ge`
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
`,Ue=t=>L(()=>{if(t==null)return;const e=new RegExp(t,"u");return n=>{!n.defaultPrevented&&n.data&&!e.test(n.data)&&n.preventDefault()}},[t]),Qe=T(class extends C{values;constructor(t,e,n,r){super(t,e),Object.assign(e.host,n),this.values=r}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}});T(class extends C{update(){return this.state.host}});const Xe=/([A-Z])/gu,At=(t,e,n)=>{t[e]=n,t.dispatchEvent(new CustomEvent(e.replace(Xe,"-$1").toLowerCase()+"-changed",{detail:{value:n}}))},oe=t=>{const e=U(void 0),n=z(c=>e.current=c,[]),r=t.shadowRoot,o=z(c=>t.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),a=z(c=>At(t,"value",c.target.value),[]),s=z(c=>At(t,"focused",c.type==="focus"),[]),i=z(()=>{const c=e.current?.checkValidity();return t.toggleAttribute("invalid",!c),c},[]);return Qe({validate:i},[i]),S(()=>{const c=g=>{g.composedPath()[0]?.closest?.("input, textarea")||(g.preventDefault(),e.current?.focus())};return r.addEventListener("mousedown",c),()=>r.removeEventListener("mousedown",c)},[]),{onChange:o,onFocus:s,onInput:a,onRef:n}},Ve=({placeholder:t})=>t||" ",Je=(t,e)=>e??(t==="date"?"9999-12-31":void 0),Ke=["type","variant","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...ne],Ze=t=>{const{type:e="text",pattern:n,allowedPattern:r,autocomplete:o,value:a,readonly:s,disabled:i,min:c,max:g,step:p,maxlength:u,required:m}=t,{onChange:l,onFocus:f,onInput:h,onRef:d}=oe(t),b=Ue(r);return t.toggleAttribute("has-value",!!a),ee(y`
			<input
				${X(d)}
				style="--chars: ${a?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${P(n)}
				autocomplete=${P(o)}
				placeholder=${Ve({placeholder:t.placeholder})}
				?readonly=${s}
				aria-disabled=${i?"true":"false"}
				?disabled=${i}
				?required=${m}
				.value=${ct(a??"")}
				maxlength=${P(u)}
				@beforeinput=${b}
				@input=${h}
				@change=${l}
				@focus=${f}
				@blur=${f}
				min=${P(c)}
				max=${P(Je(e,g))}
				step=${P(p)}
			/>
		`,t)};customElements.define("cosmoz-input",I(Ze,{observedAttributes:Ke,styleSheets:[K(re)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Wt=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},tn=(t,e=0)=>{if(e>0){const n=t.getAttribute("rows")??"",r=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=r,t.setAttribute("rows",n)}},en=t=>{const{value:e,maxRows:n}=t,r=L(()=>()=>t.shadowRoot.querySelector("#input"),[]);S(()=>tn(r(),n),[n,r]),S(()=>Wt(r()),[r,e]),S(()=>{const o=r(),a=new ResizeObserver(()=>requestAnimationFrame(()=>Wt(o)));return a.observe(o),()=>a.unobserve(o)},[r])},nn=["rows","placeholder","label","hint","required",...ne],rn=t=>{const{autocomplete:e,value:n,placeholder:r,readonly:o,disabled:a,rows:s,cols:i,maxlength:c}=t,{onChange:g,onFocus:p,onInput:u,onRef:m}=oe(t);return en(t),ee(y`
			<textarea id="input" part="input"
				${X(m)}
				autocomplete=${P(e)}
				placeholder=${r||" "}
				rows=${s??1} cols=${P(i)}
				?readonly=${o} ?aria-disabled=${a} ?disabled=${a}
				.value=${ct(n??"")} maxlength=${P(c)} @input=${u}
				@change=${g} @focus=${p} @blur=${p}>`,t)};customElements.define("cosmoz-textarea",I(rn,{observedAttributes:nn,styleSheets:[K(re)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const on=t=>{const{label:e,value:n,disabled:r,error:o}=t,a=z(s=>t.dispatchEvent(new CustomEvent("change",{detail:s.target.checked})),[]);return y`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${ct(!!n)}
			?disabled=${r}
			@change=${a}
		/>
		${k(e,()=>y`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${k(o,s=>y`<div class="failure">${s}</div>`)} `},an=R`
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
`,sn=R`
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
`;customElements.define("cosmoz-toggle",I(on,{styleSheets:[sn,an],observedAttributes:["label","disabled","error"]}));const Yt=(t,e,n)=>{const r=new Map;for(let o=e;o<=n;o++)r.set(t[o],o);return r},cn=vt(class extends yt{constructor(t){if(super(t),t.type!==A.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);const o=[],a=[];let s=0;for(const i of t)o[s]=r?r(i,s):s,a[s]=n(i,s),s++;return{values:a,keys:o}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){const o=he(t),{values:a,keys:s}=this.dt(e,n,r);if(!Array.isArray(o))return this.ut=s,a;const i=this.ut??=[],c=[];let g,p,u=0,m=o.length-1,l=0,f=a.length-1;for(;u<=m&&l<=f;)if(o[u]===null)u++;else if(o[m]===null)m--;else if(i[u]===s[l])c[l]=W(o[u],a[l]),u++,l++;else if(i[m]===s[f])c[f]=W(o[m],a[f]),m--,f--;else if(i[u]===s[f])c[f]=W(o[u],a[f]),q(t,c[f+1],o[u]),u++,f--;else if(i[m]===s[l])c[l]=W(o[m],a[l]),q(t,o[u],o[m]),m--,l++;else if(g===void 0&&(g=Yt(s,l,f),p=Yt(i,u,m)),g.has(i[u]))if(g.has(i[m])){const h=p.get(s[l]),d=h!==void 0?o[h]:null;if(d===null){const b=q(t,o[u]);W(b,a[l]),c[l]=b}else c[l]=W(d,a[l]),q(t,o[u],d),o[h]=null;l++}else lt(o[m]),m--;else lt(o[u]),u++;for(;l<=f;){const h=q(t,c[f+1]);W(h,a[l]),c[l++]=h}for(;u<=m;){const h=o[u++];h!==null&&lt(h)}return this.ut=s,Qt(t,c),B}}),un=R`
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
`,ae=6048e5,ln=864e5,Nt=Symbol.for("constructDateFrom");function D(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&Nt in t?t[Nt](e):t instanceof Date?new t.constructor(e):new Date(e)}function _(t,e){return D(e||t,t)}let dn={};function ut(){return dn}function J(t,e){const n=ut(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=_(t,e?.in),a=o.getDay(),s=(a<r?7:0)+a-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function st(t,e){return J(t,{...e,weekStartsOn:1})}function se(t,e){const n=_(t,e?.in),r=n.getFullYear(),o=D(n,0);o.setFullYear(r+1,0,4),o.setHours(0,0,0,0);const a=st(o),s=D(n,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const i=st(s);return n.getTime()>=a.getTime()?r+1:n.getTime()>=i.getTime()?r:r-1}function Rt(t){const e=_(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function ie(t,...e){const n=D.bind(null,e.find(r=>typeof r=="object"));return e.map(n)}function it(t,e){const n=_(t,e?.in);return n.setHours(0,0,0,0),n}function hn(t,e,n){const[r,o]=ie(n?.in,t,e),a=it(r),s=it(o),i=+a-Rt(a),c=+s-Rt(s);return Math.round((i-c)/ln)}function fn(t,e){const n=se(t,e),r=D(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),st(r)}function mn(t,e,n){const[r,o]=ie(n?.in,t,e);return+it(r)==+it(o)}function pn(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function gn(t){return!(!pn(t)&&typeof t!="number"||isNaN(+_(t)))}function bn(t,e){const n=_(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const vn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},yn=(t,e,n)=>{let r;const o=vn[t];return typeof o=="string"?r=o:e===1?r=o.one:r=o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function ft(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const wn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},xn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},zn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},kn={date:ft({formats:wn,defaultWidth:"full"}),time:ft({formats:xn,defaultWidth:"full"}),dateTime:ft({formats:zn,defaultWidth:"full"})},Sn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},En=(t,e,n,r)=>Sn[t];function H(t){return(e,n)=>{const r=n?.context?String(n.context):"standalone";let o;if(r==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,i=n?.width?String(n.width):s;o=t.formattingValues[i]||t.formattingValues[s]}else{const s=t.defaultWidth,i=n?.width?String(n.width):t.defaultWidth;o=t.values[i]||t.values[s]}const a=t.argumentCallback?t.argumentCallback(e):e;return o[a]}}const _n={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Pn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},$n={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Mn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Dn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Cn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Tn=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},On={ordinalNumber:Tn,era:H({values:_n,defaultWidth:"wide"}),quarter:H({values:Pn,defaultWidth:"wide",argumentCallback:t=>t-1}),month:H({values:$n,defaultWidth:"wide"}),day:H({values:Mn,defaultWidth:"wide"}),dayPeriod:H({values:Dn,defaultWidth:"wide",formattingValues:Cn,defaultFormattingWidth:"wide"})};function j(t){return(e,n={})=>{const r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;const s=a[0],i=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(i)?Wn(i,u=>u.test(s)):An(i,u=>u.test(s));let g;g=t.valueCallback?t.valueCallback(c):c,g=n.valueCallback?n.valueCallback(g):g;const p=e.slice(s.length);return{value:g,rest:p}}}function An(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Wn(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Yn(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const o=r[0],a=e.match(t.parsePattern);if(!a)return null;let s=t.valueCallback?t.valueCallback(a[0]):a[0];s=n.valueCallback?n.valueCallback(s):s;const i=e.slice(o.length);return{value:s,rest:i}}}const Nn=/^(\d+)(th|st|nd|rd)?/i,Rn=/\d+/i,Fn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ln={any:[/^b/i,/^(a|c)/i]},In={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},qn={any:[/1/i,/2/i,/3/i,/4/i]},Hn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},jn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Bn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Gn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Un={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Qn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Xn={ordinalNumber:Yn({matchPattern:Nn,parsePattern:Rn,valueCallback:t=>parseInt(t,10)}),era:j({matchPatterns:Fn,defaultMatchWidth:"wide",parsePatterns:Ln,defaultParseWidth:"any"}),quarter:j({matchPatterns:In,defaultMatchWidth:"wide",parsePatterns:qn,defaultParseWidth:"any",valueCallback:t=>t+1}),month:j({matchPatterns:Hn,defaultMatchWidth:"wide",parsePatterns:jn,defaultParseWidth:"any"}),day:j({matchPatterns:Bn,defaultMatchWidth:"wide",parsePatterns:Gn,defaultParseWidth:"any"}),dayPeriod:j({matchPatterns:Un,defaultMatchWidth:"any",parsePatterns:Qn,defaultParseWidth:"any"})},Vn={code:"en-US",formatDistance:yn,formatLong:kn,formatRelative:En,localize:On,match:Xn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Jn(t,e){const n=_(t,e?.in);return hn(n,bn(n))+1}function Kn(t,e){const n=_(t,e?.in),r=+st(n)-+fn(n);return Math.round(r/ae)+1}function ce(t,e){const n=_(t,e?.in),r=n.getFullYear(),o=ut(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,s=D(e?.in||t,0);s.setFullYear(r+1,0,a),s.setHours(0,0,0,0);const i=J(s,e),c=D(e?.in||t,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);const g=J(c,e);return+n>=+i?r+1:+n>=+g?r:r-1}function Zn(t,e){const n=ut(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=ce(t,e),a=D(e?.in||t,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),J(a,e)}function tr(t,e){const n=_(t,e?.in),r=+J(n,e)-+Zn(n,e);return Math.round(r/ae)+1}function v(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const O={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return v(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):v(n+1,2)},d(t,e){return v(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return n==="am"?"a.m.":"p.m."}},h(t,e){return v(t.getHours()%12||12,e.length)},H(t,e){return v(t.getHours(),e.length)},m(t,e){return v(t.getMinutes(),e.length)},s(t,e){return v(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return v(o,e.length)}},F={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ft={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return O.y(t,e)},Y:function(t,e,n,r){const o=ce(t,r),a=o>0?o:1-o;if(e==="YY"){const s=a%100;return v(s,2)}return e==="Yo"?n.ordinalNumber(a,{unit:"year"}):v(a,e.length)},R:function(t,e){const n=se(t);return v(n,e.length)},u:function(t,e){const n=t.getFullYear();return v(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return v(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return v(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return O.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return v(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const o=tr(t,r);return e==="wo"?n.ordinalNumber(o,{unit:"week"}):v(o,e.length)},I:function(t,e,n){const r=Kn(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):v(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):O.d(t,e)},D:function(t,e,n){const r=Jn(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):v(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return v(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return v(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),o=r===0?7:r;switch(e){case"i":return String(o);case"ii":return v(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const o=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let o;switch(r===12?o=F.noon:r===0?o=F.midnight:o=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let o;switch(r>=17?o=F.evening:r>=12?o=F.afternoon:r>=4?o=F.morning:o=F.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return O.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):O.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):v(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):v(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):O.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):O.s(t,e)},S:function(t,e){return O.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return It(r);case"XXXX":case"XX":return Y(r);default:return Y(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return It(r);case"xxxx":case"xx":return Y(r);default:return Y(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Lt(r,":");default:return"GMT"+Y(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Lt(r,":");default:return"GMT"+Y(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return v(r,e.length)},T:function(t,e,n){return v(+t,e.length)}};function Lt(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),o=Math.trunc(r/60),a=r%60;return a===0?n+String(o):n+String(o)+e+v(a,2)}function It(t,e){return t%60===0?(t>0?"-":"+")+v(Math.abs(t)/60,2):Y(t,e)}function Y(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),o=v(Math.trunc(r/60),2),a=v(r%60,2);return n+o+e+a}const qt=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},ue=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},er=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return qt(t,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;default:a=e.dateTime({width:"full"});break}return a.replace("{{date}}",qt(r,e)).replace("{{time}}",ue(o,e))},nr={p:ue,P:er},rr=/^D+$/,or=/^Y+$/,ar=["D","DD","YY","YYYY"];function sr(t){return rr.test(t)}function ir(t){return or.test(t)}function cr(t,e,n){const r=ur(t,e,n);if(console.warn(r),ar.includes(t))throw new RangeError(r)}function ur(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const lr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,dr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,hr=/^'([^]*?)'?$/,fr=/''/g,mr=/[a-zA-Z]/;function pr(t,e,n){const r=ut(),o=r.locale??Vn,a=r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,s=r.weekStartsOn??r.locale?.options?.weekStartsOn??0,i=_(t,n?.in);if(!gn(i))throw new RangeError("Invalid time value");let c=e.match(dr).map(p=>{const u=p[0];if(u==="p"||u==="P"){const m=nr[u];return m(p,o.formatLong)}return p}).join("").match(lr).map(p=>{if(p==="''")return{isToken:!1,value:"'"};const u=p[0];if(u==="'")return{isToken:!1,value:gr(p)};if(Ft[u])return{isToken:!0,value:p};if(u.match(mr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+u+"`");return{isToken:!1,value:p}});o.localize.preprocessor&&(c=o.localize.preprocessor(i,c));const g={firstWeekContainsDate:a,weekStartsOn:s,locale:o};return c.map(p=>{if(!p.isToken)return p.value;const u=p.value;(ir(u)||sr(u))&&cr(u,e,String(t));const m=Ft[u[0]];return m(i,u,o.localize,g)}).join("")}function gr(t){const e=t.match(hr);return e?e[1].replace(fr,"'"):t}function le(t,e){const n=_(t,e?.in),r=n.getFullYear(),o=n.getMonth(),a=D(n,0);return a.setFullYear(r,o+1,0),a.setHours(0,0,0,0),a.getDate()}const E="",br=t=>["year","month","day"].includes(t),xt=({year:t,month:e})=>e===E||t===E?31:le(new Date(Number(t),Number(e)-1)),vr=(t,e)=>t>e,zt=({input:t,max:e,previous:n})=>{if(t===E)return E;if(isNaN(Number(t)))return n;const r=Number(t);return vr(r,e)?String(r).slice(-1):String(r)},yr=(t,e)=>zt({input:t,max:xt(e),previous:e.day}),wr=(t,e)=>zt({input:t,max:12,previous:e.month}),xr=(t,e)=>zt({input:t,max:9999,previous:e.year}),kt=({value:t,offset:e,min:n,max:r})=>{const o=Number(t)+e;return o>r?String(n):o<n?String(r):String(o)},zr=(t,e)=>kt({value:t.day,offset:e,min:1,max:xt(t)}),kr=(t,e)=>kt({value:t.month,offset:e,min:1,max:12}),Sr=(t,e)=>kt({value:t.year,offset:e,min:1,max:9999}),gt=(t,e)=>{if(t===E)return E;const n=Number(t);if(n===0)return String(n);const r=new Date(2e3,n-1,1);return Intl.DateTimeFormat(e,{numberingSystem:"latn",calendar:"gregory"}).formatToParts(r).find(s=>s.type==="month").value},rt=(t,e)=>{if(t===E)return E;const n=Number(t);if(n===0)return String(n);const r=new Date(2e3,0,n);return Intl.DateTimeFormat(e,{numberingSystem:"latn",calendar:"gregory"}).formatToParts(r).find(s=>s.type==="day").value},Ht=t=>{switch(t){case"year":return"YYYY";case"month":return"MM";case"day":return"DD"}},jt=({day:t,month:e,year:n})=>pr(new Date(Number(n),Number(e)-1,Number(t)),"yyyy-MM-dd"),Er=t=>t.year.length===4&&Number(t.year)>=1&&Number(t.year)<=9999&&Number(t.month)>=1&&Number(t.month)<=12&&Number(t.day)>=1&&Number(t.day)<=le(new Date(Number(t.year),Number(t.month)-1))&&Object.values(t).every(e=>e!==E),_r={year:"numeric",month:"numeric",day:"numeric",numberingSystem:"latn",calendar:"gregory"},Bt=(t,e)=>t?{year:String(t.getFullYear()),month:gt(t.getMonth()+1,e),day:rt(t.getDate(),e)}:{year:E,month:E,day:E},Pr=()=>{const t=Ce(),{locale:e}=t,n=e??navigator.language,[r,o]=Me("value"),a=L(()=>Be(r),[r]),[s,i]=Zt(Bt(a,n)),c=L(()=>Intl.DateTimeFormat(n,_r).formatToParts(a),[a,n]);S(()=>{(!a||!mn(a,jt(s)))&&i(Bt(a,n))},[a,n,i]),S(()=>{Er(s)&&o(jt(s))},[s,o]);const g=z((l,f)=>{const h=l.detail.value;i(d=>{if(f==="year"){const w=xr(h,d);return{...d,year:w}}if(f==="month"){const w=wr(h,d);return{...d,month:gt(w,n)}}const b=yr(h,d);return{...d,day:rt(b,n)}})},[n,i]),p=z((l,f)=>{if((l.key==="ArrowDown"||l.key==="ArrowUp")&&(l.preventDefault(),i(h=>{const d=l.key==="ArrowUp"?1:-1;if(f==="year"){const w=Sr(h,d);return{...h,year:w}}if(f==="month"){const w=kr(h,d);return{...h,month:gt(w,n)}}const b=zr(h,d);return{...h,day:rt(b,n)}})),l.key==="ArrowLeft"||l.key==="ArrowRight"){l.preventDefault();const h=t.shadowRoot?.activeElement;if(!h)return;const d=[...t.shadowRoot?.querySelectorAll("cosmoz-input")],b=d.indexOf(h);if(l.key==="ArrowLeft"&&b-1>=0){d[b-1].focus();return}l.key==="ArrowRight"&&b+1<d.length&&d[b+1].focus()}},[t,n,i]),u=z(()=>{const l=xt(s);i(f=>Number(s.day)>l?{...f,day:rt(l,n)}:f)},[s,i,n]),m=z(l=>{l.currentTarget.shadowRoot?.querySelector("input")?.select()},[]);return{inputState:s,onChange:g,onKeyDown:p,onBlur:u,onClick:m,localeDateParts:c}},$r=()=>{const{inputState:t,onChange:e,onKeyDown:n,onBlur:r,onClick:o,localeDateParts:a}=Pr();return cn(a,(s,i)=>i,({value:s,type:i})=>{if(br(i))return y`
					<span class="date-input-part">
						<span class="date-input-sizer" aria-hidden="true"
							>${t[i]||Ht(i)}</span
						>
						<cosmoz-input
							type="text"
							inputmode="numeric"
							no-label-float
							autocomplete="off"
							placeholder=${Ht(i)}
							.value=${ct(t[i])}
							@click=${o}
							@blur=${r}
							@value-changed=${c=>e(c,i)}
							@keydown=${c=>n(c,i)}
						></cosmoz-input>
					</span>
				`;if(i==="literal")return y`<span>${s}</span>`})};customElements.define("cosmoz-date-input",I($r,{observedAttributes:["locale"],styleSheets:[wt,un],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));const Cr={title:"CosmozDateInput",component:"cosmoz-date-input",tags:["autodocs"]},Z={name:"sv-SE",render:()=>y`<cosmoz-date-input locale="sv-SE"></cosmoz-date-input>`},tt={name:"en-US",render:()=>y`<cosmoz-date-input locale="en-US"></cosmoz-date-input>`},et={name:"de-DE",render:()=>y`<cosmoz-date-input locale="de-DE"></cosmoz-date-input>`};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'sv-SE',
  render: () => html\`<cosmoz-date-input locale="sv-SE"></cosmoz-date-input>\`
}`,...Z.parameters?.docs?.source}}};tt.parameters={...tt.parameters,docs:{...tt.parameters?.docs,source:{originalSource:`{
  name: 'en-US',
  render: () => html\`<cosmoz-date-input locale="en-US"></cosmoz-date-input>\`
}`,...tt.parameters?.docs?.source}}};et.parameters={...et.parameters,docs:{...et.parameters?.docs,source:{originalSource:`{
  name: 'de-DE',
  render: () => html\`<cosmoz-date-input locale="de-DE"></cosmoz-date-input>\`
}`,...et.parameters?.docs?.source}}};const Tr=["Swedish","EnglishUs","German"];export{tt as EnglishUs,et as German,Z as Swedish,Tr as __namedExportsOrder,Cr as default};
