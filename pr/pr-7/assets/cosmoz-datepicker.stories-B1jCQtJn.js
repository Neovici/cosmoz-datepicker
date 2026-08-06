import{r as Bt,D as Gt,A as V,E as B,p as Ut,w as ue,d as y,M as le,u as W,v as q,h as ut}from"./iframe-DClnSjK5.js";import"./preload-helper-PPVm8Dsz.js";let ot,Qt=0;function Pt(t){ot=t}function $t(){ot=null,Qt=0}function de(){return Qt++}const lt=Symbol("haunted.phase"),nt=Symbol("haunted.hook"),Mt=Symbol("haunted.update"),Dt=Symbol("haunted.commit"),N=Symbol("haunted.effects"),G=Symbol("haunted.layoutEffects"),ft="haunted.context";class he{update;host;virtual;[nt];[N];[G];constructor(e,n){this.update=e,this.host=n,this[nt]=new Map,this[N]=[],this[G]=[]}run(e){Pt(this);let n=e();return $t(),n}_runEffects(e){let n=this[e];Pt(this);for(let r of n)r.call(this);$t()}runEffects(){this._runEffects(N)}runLayoutEffects(){this._runEffects(G)}teardown(){this[nt].forEach(n=>{typeof n.teardown=="function"&&n.teardown(!0)})}}class fe extends Error{constructor(e){const n=e?` <${e}>`:"";super(`Infinite update loop detected in component${n}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const me=100,pe=Promise.resolve().then.bind(Promise.resolve());function Xt(){let t=[],e;function n(){e=null;let r=t;t=[];for(var o=0,a=r.length;o<a;o++)r[o]()}return function(r){t.push(r),e==null&&(e=pe(n))}}const ge=Xt(),Ct=Xt();class gt{renderer;host;state;[lt];_updateQueued;_active;_updateCount;_processing;static maxUpdates=me;constructor(e,n){this.renderer=e,this.host=n,this.state=new he(this.update.bind(this),n),this[lt]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>gt.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new fe(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,ge(()=>{let e=this.handlePhase(Mt);Ct(()=>{this.handlePhase(Dt,e),Ct(()=>{this.handlePhase(N),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,n){switch(this[lt]=e,e){case Dt:this.commit(n),this.runEffects(G);return;case Mt:return this.render();case N:return this.runEffects(N)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}const K=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},be=t=>t?.map(e=>typeof e=="string"?K(e):e),ve=(t,...e)=>t.flatMap((n,r)=>[n,e[r]||""]).join(""),F=ve,ye=(t="")=>t.replace(/-+([a-z])?/g,(e,n)=>n?n.toUpperCase():"");function we(t){class e extends gt{frag;renderResult;constructor(o,a,s){super(o,s||a),this.frag=a}commit(o){this.renderResult=t(o,this.frag)}}function n(r,o,a){const s=(a||o||{}).baseElement||HTMLElement,{observedAttributes:i=[],useShadowDOM:u=!0,shadowRootInit:g={},styleSheets:p}=a||o||{},c=be(r.styleSheets||p);class d extends s{_scheduler;static get observedAttributes(){return r.observedAttributes||i||[]}constructor(){if(super(),u===!1)this._scheduler=new e(r,this);else{const m=this.attachShadow({mode:"open",...g});c&&(m.adoptedStyleSheets=c),this._scheduler=new e(r,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,b,w){if(b===w)return;let x=w===""?!0:w;Reflect.set(this,ye(m),x)}}function l(h){let m=h,b=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(w){b&&m===w||(b=!0,m=w,this._scheduler&&this._scheduler.update())}})}const f=new Proxy(s.prototype,{getPrototypeOf(h){return h},set(h,m,b,w){let x;return m in h?(x=Object.getOwnPropertyDescriptor(h,m),x&&x.set?(x.set.call(w,b),!0):(Reflect.set(h,m,b,w),!0)):(typeof m=="symbol"||m[0]==="_"?x={enumerable:!0,configurable:!0,writable:!0,value:b}:x=l(b),Object.defineProperty(w,m,x),x.set&&x.set.call(w,b),!0)}});return Object.setPrototypeOf(d.prototype,f),d}return n}class C{id;state;constructor(e,n){this.id=e,this.state=n}}function xe(t,...e){let n=de(),r=ot[nt],o=r.get(n);return o||(o=new t(n,ot,...e),r.set(n,o)),o.update(...e)}function T(t){return xe.bind(null,t)}function Vt(t){return T(class extends C{callback;lastValues;values;_teardown;constructor(e,n,r,o){super(e,n),t(n,this)}update(e,n){this.callback=e,this.values=n}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,n)=>this.lastValues[n]!==e)}})}function Jt(t,e){t[N].push(e)}const k=Vt(Jt),ze=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,ke=T(class extends C{Context;value;_ranEffect;_unsubscribe;constructor(t,e,n){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Jt(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};ze(this.state.host).dispatchEvent(new CustomEvent(ft,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:o}=e;this.value=r?o:t.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function Se(t){return e=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(ft,this)}disconnectedCallback(){this.removeEventListener(ft,this)}handleEvent(r){const{detail:o}=r;o.Context===n&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let o of this.listeners)o(r)}get value(){return this._value}},Consumer:t(function({render:r}){const o=ke(n);return r(o)},{useShadowDOM:!1}),defaultValue:e};return n}}const L=T(class extends C{value;values;constructor(t,e,n,r){super(t,e),this.value=n(),this.values=r}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),P=(t,e)=>L(()=>t,e);function Ee(t,e){t[G].push(e)}Vt(Ee);const Kt=T(class extends C{args;constructor(t,e,n){super(t,e),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});T(class extends C{reducer;currentState;constructor(t,e,n,r,o){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=o!==void 0?o(r):r}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const _e=/([A-Z])/gu,Pe=T(class extends C{property;eventName;constructor(t,e,n,r){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(_e,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updater(r))}update(t,e){return[this.state.host[this.property],this.updater]}resolve(t){const e=this.state.host[this.property],n=typeof t=="function"?t:void 0,r=n?n(e):t;return[e,r,n]}notify(t,e){const n=new CustomEvent(this.eventName,{detail:{value:t,updater:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(t){const[e,n,r]=this.resolve(t);this.notify(n,r).defaultPrevented||Object.is(e,n)||(this.state.host[this.property]=n)}});function $e(t){let e=t;return{get current(){return e},set current(n){e=n},get value(){return e},set value(n){e=n}}}function U(t){return L(()=>$e(t),[])}const Me=T(class extends C{update(){return this.state.host}});function De({render:t}){const e=we(t),n=Se(e);return{component:e,createContext:n}}const A={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},bt=t=>(...e)=>({_$litDirective$:t,values:e});class vt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}const Q=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const r of n)r._$AO?.(e,!1),Q(r,e);return!0},at=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},Zt=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Oe(e)}};function Ce(t){this._$AN!==void 0?(at(this),this._$AM=t,Zt(this)):this._$AM=t}function Te(t,e=!1,n=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let a=n;a<r.length;a++)Q(r[a],!1),at(r[a]);else r!=null&&(Q(r,!1),at(r));else Q(this,t)}const Oe=t=>{t.type==A.CHILD&&(t._$AP??=Te,t._$AQ??=Ce)};class Ae extends vt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),Zt(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(Q(this,e),at(this))}setValue(e){if(Bt(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:I}=De({render:Gt});const _=t=>t??V;const it=bt(class extends vt{constructor(t){if(super(t),t.type!==A.PROPERTY&&t.type!==A.ATTRIBUTE&&t.type!==A.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Bt(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===B||e===V)return e;const n=t.element,r=t.name;if(t.type===A.PROPERTY){if(e===n[r])return B}else if(t.type===A.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(r))return B}else if(t.type===A.ATTRIBUTE&&n.getAttribute(r)===e+"")return B;return Ut(t),e}}),dt=new WeakMap,X=bt(class extends Ae{render(t){return V}update(t,[e]){const n=e!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),V}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let n=dt.get(e);n===void 0&&(n=new WeakMap,dt.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?dt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function z(t,e,n){return t?e(t):n?.(t)}const We=({slot:t,title:e,className:n,width:r="24",height:o="24",styles:a}={})=>y`
  <svg
    slot=${_(t)}
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
    style=${_(a)}
  >
    ${z(e,()=>ue`<title>${e}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,yt=K(F`
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
`),Ye=F`
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
		`,{styleSheets:[yt,Ye]}));const mt=K(F`
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
`),Tt=(t,e,n)=>Gt(y`<cosmoz-tooltip-content>
			${z(e,()=>y`<strong slot="heading">${e}</strong>`)}
			${z(n,()=>y`<p slot="description">${n}</p>`)}
		</cosmoz-tooltip-content>`,t),Ne=(t,e)=>{const{for:n,heading:r,description:o,placement:a="top",delay:s=300,disabled:i=!1}=e,u=U(),p=!!(r||o)&&!i;k(()=>{if(!n||!p)return;const c=t.getRootNode(),d=c.adoptedStyleSheets??[];d.includes(mt)||(c.adoptedStyleSheets=[...d,mt]);const l=document.createElement("div");l.setAttribute("popover","manual"),l.setAttribute("role","tooltip"),l.classList.add("cosmoz-tooltip-popover"),t.after(l),u.current=l,Tt(l,r,o);const f=`[name="${n}"]`,h=`--tooltip-anchor-${n}`;let m;const b=$=>{i||(clearTimeout(m),$.style.anchorName=h,l.style.positionAnchor=h,l.style.positionArea=a,m=window.setTimeout(()=>l.showPopover(),s))},w=()=>{clearTimeout(m),l.hidePopover()},x=$=>{const M=$.target.closest?.(f);M&&b(M)},kt=$=>{const M=$.target.closest?.(f);if(!M)return;const _t=$.relatedTarget;_t&&M.contains(_t)||w()},St=$=>{const M=$.target.closest?.(f);M&&b(M)},Et=$=>{$.target.closest?.(f)&&w()};return c.addEventListener("pointerover",x),c.addEventListener("pointerout",kt),c.addEventListener("focusin",St),c.addEventListener("focusout",Et),()=>{clearTimeout(m),c.removeEventListener("pointerover",x),c.removeEventListener("pointerout",kt),c.removeEventListener("focusin",St),c.removeEventListener("focusout",Et),l.hidePopover(),l.remove(),u.current=void 0}},[n,a,s,p]),k(()=>{!n||!u.current||Tt(u.current,r,o)},[r,o,n]),k(()=>{!i||!u.current||u.current.hidePopover()},[i])},Fe=t=>{const[e,n]=Kt(!1);return k(()=>{const r=t.current;if(!r)return;const o=()=>{n(r.assignedElements().length>0)};return o(),r.addEventListener("slotchange",o),()=>r.removeEventListener("slotchange",o)},[t.current]),e},Re=F`
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
`,Le=t=>{const{heading:e,description:n,for:r,placement:o="top",delay:a=300,disabled:s=!1}=t,i=U(),u=U(),g=U(),p=Fe(g),d=!!(e||n||p)&&!s,l=P(()=>{d&&(clearTimeout(u.current),u.current=window.setTimeout(()=>{i.current?.showPopover()},a))},[a,d]);k(()=>{s&&(clearTimeout(u.current),i.current?.hidePopover())},[s]);const f=P(()=>{clearTimeout(u.current),i.current?.hidePopover()},[]);return k(()=>{if(r)return;const h=m=>{const b=m.relatedTarget;b&&t.contains(b)||f()};return t.addEventListener("pointerover",l),t.addEventListener("pointerout",h),()=>{t.removeEventListener("pointerover",l),t.removeEventListener("pointerout",h)}},[r,l,f]),Ne(t,{for:r,heading:e,description:n,placement:o,delay:a,disabled:s}),r?V:d?y`
		<slot @focusin=${l} @focusout=${f}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${o}"
			${X(i)}
		>
			<cosmoz-tooltip-content>
				${z(e,()=>y`<strong slot="heading">${e}</strong>`)}
				${z(n,()=>y`<p slot="description">${n}</p>`)}
				<slot name="content" ${X(g)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:y`
			<slot></slot>
			<slot name="content" ${X(g)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",I(Le,{styleSheets:[yt,mt,Re],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const te=(t,{hint:e,label:n,invalid:r,errorMessage:o,compact:a,required:s})=>y`
		<!-- label: hidden in compact mode -->
		${z(!a&&n,()=>y`<label for="input" part="label"
					>${n}
					${z(s,()=>y`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${z(a&&r&&o,()=>y`<cosmoz-tooltip
						placement="top"
						description=${o}
						delay="300"
					>
						${We({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${z(!a&&e&&!r,()=>y`<span class="hint" part="hint">${e}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${z(!a&&r&&o,()=>y`<span class="error" part="error">${o}</span>`)}
	`,ee=["autocomplete","readonly","disabled","maxlength","invalid"],Ie={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},qe=t=>typeof t=="string"&&Ie.isoBasic.test(t)?new Date(`${t}T00:00`):new Date(t),He=t=>{if(t==null)return;if(t instanceof Date&&!isNaN(t.getTime()))return t;if(!(typeof t=="number"||typeof t=="string"))return;const e=qe(t);if(!(e instanceof Date&&isNaN(e.getTime())))return e},je=(t,...e)=>t.flatMap((n,r)=>[n,e[r]??""]).join(""),ne=je`
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
`,Be=t=>L(()=>{if(t==null)return;const e=new RegExp(t,"u");return n=>{!n.defaultPrevented&&n.data&&!e.test(n.data)&&n.preventDefault()}},[t]),Ge=T(class extends C{values;constructor(t,e,n,r){super(t,e),Object.assign(e.host,n),this.values=r}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}});T(class extends C{update(){return this.state.host}});const Ue=/([A-Z])/gu,Ot=(t,e,n)=>{t[e]=n,t.dispatchEvent(new CustomEvent(e.replace(Ue,"-$1").toLowerCase()+"-changed",{detail:{value:n}}))},re=t=>{const e=U(void 0),n=P(u=>e.current=u,[]),r=t.shadowRoot,o=P(u=>t.dispatchEvent(new Event(u.type,{bubbles:u.bubbles})),[]),a=P(u=>Ot(t,"value",u.target.value),[]),s=P(u=>Ot(t,"focused",u.type==="focus"),[]),i=P(()=>{const u=e.current?.checkValidity();return t.toggleAttribute("invalid",!u),u},[]);return Ge({validate:i},[i]),k(()=>{const u=g=>{g.composedPath()[0]?.closest?.("input, textarea")||(g.preventDefault(),e.current?.focus())};return r.addEventListener("mousedown",u),()=>r.removeEventListener("mousedown",u)},[]),{onChange:o,onFocus:s,onInput:a,onRef:n}},Qe=({placeholder:t})=>t||" ",Xe=(t,e)=>e??(t==="date"?"9999-12-31":void 0),Ve=["type","variant","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...ee],Je=t=>{const{type:e="text",pattern:n,allowedPattern:r,autocomplete:o,value:a,readonly:s,disabled:i,min:u,max:g,step:p,maxlength:c,required:d}=t,{onChange:l,onFocus:f,onInput:h,onRef:m}=re(t),b=Be(r);return t.toggleAttribute("has-value",!!a),te(y`
			<input
				${X(m)}
				style="--chars: ${a?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${_(n)}
				autocomplete=${_(o)}
				placeholder=${Qe({placeholder:t.placeholder})}
				?readonly=${s}
				aria-disabled=${i?"true":"false"}
				?disabled=${i}
				?required=${d}
				.value=${it(a??"")}
				maxlength=${_(c)}
				@beforeinput=${b}
				@input=${h}
				@change=${l}
				@focus=${f}
				@blur=${f}
				min=${_(u)}
				max=${_(Xe(e,g))}
				step=${_(p)}
			/>
		`,t)};customElements.define("cosmoz-input",I(Je,{observedAttributes:Ve,styleSheets:[K(ne)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const At=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},Ke=(t,e=0)=>{if(e>0){const n=t.getAttribute("rows")??"",r=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=r,t.setAttribute("rows",n)}},Ze=t=>{const{value:e,maxRows:n}=t,r=L(()=>()=>t.shadowRoot.querySelector("#input"),[]);k(()=>Ke(r(),n),[n,r]),k(()=>At(r()),[r,e]),k(()=>{const o=r(),a=new ResizeObserver(()=>requestAnimationFrame(()=>At(o)));return a.observe(o),()=>a.unobserve(o)},[r])},tn=["rows","placeholder","label","hint","required",...ee],en=t=>{const{autocomplete:e,value:n,placeholder:r,readonly:o,disabled:a,rows:s,cols:i,maxlength:u}=t,{onChange:g,onFocus:p,onInput:c,onRef:d}=re(t);return Ze(t),te(y`
			<textarea id="input" part="input"
				${X(d)}
				autocomplete=${_(e)}
				placeholder=${r||" "}
				rows=${s??1} cols=${_(i)}
				?readonly=${o} ?aria-disabled=${a} ?disabled=${a}
				.value=${it(n??"")} maxlength=${_(u)} @input=${c}
				@change=${g} @focus=${p} @blur=${p}>`,t)};customElements.define("cosmoz-textarea",I(en,{observedAttributes:tn,styleSheets:[K(ne)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const nn=t=>{const{label:e,value:n,disabled:r,error:o}=t,a=P(s=>t.dispatchEvent(new CustomEvent("change",{detail:s.target.checked})),[]);return y`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${it(!!n)}
			?disabled=${r}
			@change=${a}
		/>
		${z(e,()=>y`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${z(o,s=>y`<div class="failure">${s}</div>`)} `},rn=F`
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
`,on=F`
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
`;customElements.define("cosmoz-toggle",I(nn,{styleSheets:[on,rn],observedAttributes:["label","disabled","error"]}));const Wt=(t,e,n)=>{const r=new Map;for(let o=e;o<=n;o++)r.set(t[o],o);return r},an=bt(class extends vt{constructor(t){if(super(t),t.type!==A.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);const o=[],a=[];let s=0;for(const i of t)o[s]=r?r(i,s):s,a[s]=n(i,s),s++;return{values:a,keys:o}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){const o=le(t),{values:a,keys:s}=this.dt(e,n,r);if(!Array.isArray(o))return this.ut=s,a;const i=this.ut??=[],u=[];let g,p,c=0,d=o.length-1,l=0,f=a.length-1;for(;c<=d&&l<=f;)if(o[c]===null)c++;else if(o[d]===null)d--;else if(i[c]===s[l])u[l]=W(o[c],a[l]),c++,l++;else if(i[d]===s[f])u[f]=W(o[d],a[f]),d--,f--;else if(i[c]===s[f])u[f]=W(o[c],a[f]),q(t,u[f+1],o[c]),c++,f--;else if(i[d]===s[l])u[l]=W(o[d],a[l]),q(t,o[c],o[d]),d--,l++;else if(g===void 0&&(g=Wt(s,l,f),p=Wt(i,c,d)),g.has(i[c]))if(g.has(i[d])){const h=p.get(s[l]),m=h!==void 0?o[h]:null;if(m===null){const b=q(t,o[c]);W(b,a[l]),u[l]=b}else u[l]=W(m,a[l]),q(t,o[c],m),o[h]=null;l++}else ut(o[d]),d--;else ut(o[c]),c++;for(;l<=f;){const h=q(t,u[f+1]);W(h,a[l]),u[l++]=h}for(;c<=d;){const h=o[c++];h!==null&&ut(h)}return this.ut=s,Ut(t,u),B}}),sn=F`
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
		background: transparent;
	}

	cosmoz-input::part(wrap) {
		box-shadow: none;
		border-radius: 0;
	}
`,oe=6048e5,cn=864e5,Yt=Symbol.for("constructDateFrom");function D(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&Yt in t?t[Yt](e):t instanceof Date?new t.constructor(e):new Date(e)}function E(t,e){return D(e||t,t)}let un={};function ct(){return un}function J(t,e){const n=ct(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=E(t,e?.in),a=o.getDay(),s=(a<r?7:0)+a-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function st(t,e){return J(t,{...e,weekStartsOn:1})}function ae(t,e){const n=E(t,e?.in),r=n.getFullYear(),o=D(n,0);o.setFullYear(r+1,0,4),o.setHours(0,0,0,0);const a=st(o),s=D(n,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const i=st(s);return n.getTime()>=a.getTime()?r+1:n.getTime()>=i.getTime()?r:r-1}function Nt(t){const e=E(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function ln(t,...e){const n=D.bind(null,e.find(r=>typeof r=="object"));return e.map(n)}function Ft(t,e){const n=E(t,e?.in);return n.setHours(0,0,0,0),n}function dn(t,e,n){const[r,o]=ln(n?.in,t,e),a=Ft(r),s=Ft(o),i=+a-Nt(a),u=+s-Nt(s);return Math.round((i-u)/cn)}function hn(t,e){const n=ae(t,e),r=D(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),st(r)}function fn(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function mn(t){return!(!fn(t)&&typeof t!="number"||isNaN(+E(t)))}function pn(t,e){const n=E(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const gn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},bn=(t,e,n)=>{let r;const o=gn[t];return typeof o=="string"?r=o:e===1?r=o.one:r=o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function ht(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const vn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},yn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},wn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},xn={date:ht({formats:vn,defaultWidth:"full"}),time:ht({formats:yn,defaultWidth:"full"}),dateTime:ht({formats:wn,defaultWidth:"full"})},zn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},kn=(t,e,n,r)=>zn[t];function H(t){return(e,n)=>{const r=n?.context?String(n.context):"standalone";let o;if(r==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,i=n?.width?String(n.width):s;o=t.formattingValues[i]||t.formattingValues[s]}else{const s=t.defaultWidth,i=n?.width?String(n.width):t.defaultWidth;o=t.values[i]||t.values[s]}const a=t.argumentCallback?t.argumentCallback(e):e;return o[a]}}const Sn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},En={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},_n={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Pn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},$n={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Mn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Dn=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Cn={ordinalNumber:Dn,era:H({values:Sn,defaultWidth:"wide"}),quarter:H({values:En,defaultWidth:"wide",argumentCallback:t=>t-1}),month:H({values:_n,defaultWidth:"wide"}),day:H({values:Pn,defaultWidth:"wide"}),dayPeriod:H({values:$n,defaultWidth:"wide",formattingValues:Mn,defaultFormattingWidth:"wide"})};function j(t){return(e,n={})=>{const r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;const s=a[0],i=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(i)?On(i,c=>c.test(s)):Tn(i,c=>c.test(s));let g;g=t.valueCallback?t.valueCallback(u):u,g=n.valueCallback?n.valueCallback(g):g;const p=e.slice(s.length);return{value:g,rest:p}}}function Tn(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function On(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function An(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const o=r[0],a=e.match(t.parsePattern);if(!a)return null;let s=t.valueCallback?t.valueCallback(a[0]):a[0];s=n.valueCallback?n.valueCallback(s):s;const i=e.slice(o.length);return{value:s,rest:i}}}const Wn=/^(\d+)(th|st|nd|rd)?/i,Yn=/\d+/i,Nn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Fn={any:[/^b/i,/^(a|c)/i]},Rn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ln={any:[/1/i,/2/i,/3/i,/4/i]},In={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},qn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Hn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},jn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Bn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Gn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Un={ordinalNumber:An({matchPattern:Wn,parsePattern:Yn,valueCallback:t=>parseInt(t,10)}),era:j({matchPatterns:Nn,defaultMatchWidth:"wide",parsePatterns:Fn,defaultParseWidth:"any"}),quarter:j({matchPatterns:Rn,defaultMatchWidth:"wide",parsePatterns:Ln,defaultParseWidth:"any",valueCallback:t=>t+1}),month:j({matchPatterns:In,defaultMatchWidth:"wide",parsePatterns:qn,defaultParseWidth:"any"}),day:j({matchPatterns:Hn,defaultMatchWidth:"wide",parsePatterns:jn,defaultParseWidth:"any"}),dayPeriod:j({matchPatterns:Bn,defaultMatchWidth:"any",parsePatterns:Gn,defaultParseWidth:"any"})},Qn={code:"en-US",formatDistance:bn,formatLong:xn,formatRelative:kn,localize:Cn,match:Un,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Xn(t,e){const n=E(t,e?.in);return dn(n,pn(n))+1}function Vn(t,e){const n=E(t,e?.in),r=+st(n)-+hn(n);return Math.round(r/oe)+1}function se(t,e){const n=E(t,e?.in),r=n.getFullYear(),o=ct(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,s=D(e?.in||t,0);s.setFullYear(r+1,0,a),s.setHours(0,0,0,0);const i=J(s,e),u=D(e?.in||t,0);u.setFullYear(r,0,a),u.setHours(0,0,0,0);const g=J(u,e);return+n>=+i?r+1:+n>=+g?r:r-1}function Jn(t,e){const n=ct(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=se(t,e),a=D(e?.in||t,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),J(a,e)}function Kn(t,e){const n=E(t,e?.in),r=+J(n,e)-+Jn(n,e);return Math.round(r/oe)+1}function v(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const O={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return v(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):v(n+1,2)},d(t,e){return v(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return n==="am"?"a.m.":"p.m."}},h(t,e){return v(t.getHours()%12||12,e.length)},H(t,e){return v(t.getHours(),e.length)},m(t,e){return v(t.getMinutes(),e.length)},s(t,e){return v(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return v(o,e.length)}},R={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Rt={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return O.y(t,e)},Y:function(t,e,n,r){const o=se(t,r),a=o>0?o:1-o;if(e==="YY"){const s=a%100;return v(s,2)}return e==="Yo"?n.ordinalNumber(a,{unit:"year"}):v(a,e.length)},R:function(t,e){const n=ae(t);return v(n,e.length)},u:function(t,e){const n=t.getFullYear();return v(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return v(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return v(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return O.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return v(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const o=Kn(t,r);return e==="wo"?n.ordinalNumber(o,{unit:"week"}):v(o,e.length)},I:function(t,e,n){const r=Vn(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):v(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):O.d(t,e)},D:function(t,e,n){const r=Xn(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):v(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return v(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return v(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),o=r===0?7:r;switch(e){case"i":return String(o);case"ii":return v(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const o=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let o;switch(r===12?o=R.noon:r===0?o=R.midnight:o=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let o;switch(r>=17?o=R.evening:r>=12?o=R.afternoon:r>=4?o=R.morning:o=R.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return O.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):O.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):v(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):v(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):O.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):O.s(t,e)},S:function(t,e){return O.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return It(r);case"XXXX":case"XX":return Y(r);default:return Y(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return It(r);case"xxxx":case"xx":return Y(r);default:return Y(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Lt(r,":");default:return"GMT"+Y(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Lt(r,":");default:return"GMT"+Y(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return v(r,e.length)},T:function(t,e,n){return v(+t,e.length)}};function Lt(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),o=Math.trunc(r/60),a=r%60;return a===0?n+String(o):n+String(o)+e+v(a,2)}function It(t,e){return t%60===0?(t>0?"-":"+")+v(Math.abs(t)/60,2):Y(t,e)}function Y(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),o=v(Math.trunc(r/60),2),a=v(r%60,2);return n+o+e+a}const qt=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},ie=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Zn=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return qt(t,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;default:a=e.dateTime({width:"full"});break}return a.replace("{{date}}",qt(r,e)).replace("{{time}}",ie(o,e))},tr={p:ie,P:Zn},er=/^D+$/,nr=/^Y+$/,rr=["D","DD","YY","YYYY"];function or(t){return er.test(t)}function ar(t){return nr.test(t)}function sr(t,e,n){const r=ir(t,e,n);if(console.warn(r),rr.includes(t))throw new RangeError(r)}function ir(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const cr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ur=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,lr=/^'([^]*?)'?$/,dr=/''/g,hr=/[a-zA-Z]/;function fr(t,e,n){const r=ct(),o=r.locale??Qn,a=r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,s=r.weekStartsOn??r.locale?.options?.weekStartsOn??0,i=E(t,n?.in);if(!mn(i))throw new RangeError("Invalid time value");let u=e.match(ur).map(p=>{const c=p[0];if(c==="p"||c==="P"){const d=tr[c];return d(p,o.formatLong)}return p}).join("").match(cr).map(p=>{if(p==="''")return{isToken:!1,value:"'"};const c=p[0];if(c==="'")return{isToken:!1,value:mr(p)};if(Rt[c])return{isToken:!0,value:p};if(c.match(hr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+c+"`");return{isToken:!1,value:p}});o.localize.preprocessor&&(u=o.localize.preprocessor(i,u));const g={firstWeekContainsDate:a,weekStartsOn:s,locale:o};return u.map(p=>{if(!p.isToken)return p.value;const c=p.value;(ar(c)||or(c))&&sr(c,e,String(t));const d=Rt[c[0]];return d(i,c,o.localize,g)}).join("")}function mr(t){const e=t.match(lr);return e?e[1].replace(dr,"'"):t}function ce(t,e){const n=E(t,e?.in),r=n.getFullYear(),o=n.getMonth(),a=D(n,0);return a.setFullYear(r,o+1,0),a.setHours(0,0,0,0),a.getDate()}const S="",pr=t=>["year","month","day"].includes(t),wt=({year:t,month:e})=>e===S||t===S?31:ce(new Date(Number(t),Number(e)-1)),gr=(t,e)=>t>e,xt=({input:t,max:e,previous:n})=>{if(t===S)return S;if(isNaN(Number(t)))return n;const r=Number(t);return gr(r,e)?String(r).slice(-1):String(r)},br=(t,e)=>xt({input:t,max:wt(e),previous:e.day}),vr=(t,e)=>xt({input:t,max:12,previous:e.month}),yr=(t,e)=>xt({input:t,max:9999,previous:e.year}),zt=({value:t,offset:e,min:n,max:r})=>{const o=Number(t)+e;return o>r?String(n):o<n?String(r):String(o)},wr=(t,e)=>zt({value:t.day,offset:e,min:1,max:wt(t)}),xr=(t,e)=>zt({value:t.month,offset:e,min:1,max:12}),zr=(t,e)=>zt({value:t.year,offset:e,min:1,max:9999}),pt=(t,e)=>{if(t===S)return S;const n=Number(t);if(n===0)return String(n);const r=new Date(2e3,n-1,1);return Intl.DateTimeFormat(e,{numberingSystem:"latn",calendar:"gregory"}).formatToParts(r).find(s=>s.type==="month").value},rt=(t,e)=>{if(t===S)return S;const n=Number(t);if(n===0)return String(n);const r=new Date(2e3,0,n);return Intl.DateTimeFormat(e,{numberingSystem:"latn",calendar:"gregory"}).formatToParts(r).find(s=>s.type==="day").value},Ht=t=>{switch(t){case"year":return"YYYY";case"month":return"MM";case"day":return"DD"}},kr=({day:t,month:e,year:n})=>fr(new Date(Number(n),Number(e)-1,Number(t)),"yyyy-MM-dd"),Sr=t=>t.year.length===4&&Number(t.year)>=1&&Number(t.year)<=9999&&Number(t.month)>=1&&Number(t.month)<=12&&Number(t.day)>=1&&Number(t.day)<=ce(new Date(Number(t.year),Number(t.month)-1))&&Object.values(t).every(e=>e!==S),Er={year:"numeric",month:"numeric",day:"numeric",numberingSystem:"latn",calendar:"gregory"},jt=(t,e)=>t?{year:String(t.getFullYear()),month:pt(t.getMonth()+1,e),day:rt(t.getDate(),e)}:{year:S,month:S,day:S},_r=()=>{const t=Me(),{locale:e}=t,n=e??navigator.language,[r,o]=Pe("value"),a=L(()=>He(r),[r]),[s,i]=Kt(jt(a,n)),u=L(()=>Intl.DateTimeFormat(n,Er).formatToParts(a),[a,n]);k(()=>{i(jt(a,n))},[a,n,i]),k(()=>{Sr(s)&&o(kr(s))},[s,o]);const g=P((d,l)=>{const f=d.detail.value;i(h=>{if(l==="year"){const b=yr(f,h);return{...h,year:b}}if(l==="month"){const b=vr(f,h);return{...h,month:pt(b,n)}}const m=br(f,h);return{...h,day:rt(m,n)}})},[n,i]),p=P((d,l)=>{if((d.key==="ArrowDown"||d.key==="ArrowUp")&&(d.preventDefault(),i(f=>{const h=d.key==="ArrowUp"?1:-1;if(l==="year"){const b=zr(f,h);return{...f,year:b}}if(l==="month"){const b=xr(f,h);return{...f,month:pt(b,n)}}const m=wr(f,h);return{...f,day:rt(m,n)}})),d.key==="ArrowLeft"||d.key==="ArrowRight"){d.preventDefault();const f=t.shadowRoot?.activeElement;if(!f)return;const h=[...t.shadowRoot?.querySelectorAll("cosmoz-input")],m=h.indexOf(f);if(d.key==="ArrowLeft"&&m-1>=0){h[m-1].focus();return}d.key==="ArrowRight"&&m+1<h.length&&h[m+1].focus()}},[t,n,i]),c=P(()=>{const d=wt(s);i(l=>Number(s.day)>d?{...l,day:rt(d,n)}:l)},[s,i,n]);return{inputState:s,onChange:g,onKeyDown:p,onBlur:c,localeDateParts:u}},Pr=()=>{const{inputState:t,onChange:e,onKeyDown:n,onBlur:r,localeDateParts:o}=_r();return an(o,(a,s)=>s,({value:a,type:s})=>{if(pr(s))return y`
					<span class="date-input-part">
						<span class="date-input-sizer" aria-hidden="true"
							>${t[s]||Ht(s)}</span
						>
						<cosmoz-input
							type="text"
							inputmode="numeric"
							no-label-float
							autocomplete="off"
							placeholder=${Ht(s)}
							.value=${it(t[s])}
							@blur=${r}
							@value-changed=${i=>e(i,s)}
							@keydown=${i=>n(i,s)}
						></cosmoz-input>
					</span>
				`;if(s==="literal")return y`<span>${a}</span>`})};customElements.define("cosmoz-date-input",I(Pr,{observedAttributes:["locale"],styleSheets:[yt,sn],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));const Dr={title:"CosmozDateInput",component:"cosmoz-date-input",tags:["autodocs"]},Z={name:"sv-SE",render:()=>y`<cosmoz-date-input locale="sv-SE"></cosmoz-date-input>`},tt={name:"en-US",render:()=>y`<cosmoz-date-input locale="en-US"></cosmoz-date-input>`},et={name:"de-DE",render:()=>y`<cosmoz-date-input locale="de-DE"></cosmoz-date-input>`};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'sv-SE',
  render: () => html\`<cosmoz-date-input locale="sv-SE"></cosmoz-date-input>\`
}`,...Z.parameters?.docs?.source}}};tt.parameters={...tt.parameters,docs:{...tt.parameters?.docs,source:{originalSource:`{
  name: 'en-US',
  render: () => html\`<cosmoz-date-input locale="en-US"></cosmoz-date-input>\`
}`,...tt.parameters?.docs?.source}}};et.parameters={...et.parameters,docs:{...et.parameters?.docs,source:{originalSource:`{
  name: 'de-DE',
  render: () => html\`<cosmoz-date-input locale="de-DE"></cosmoz-date-input>\`
}`,...et.parameters?.docs?.source}}};const Cr=["Swedish","EnglishUs","German"];export{tt as EnglishUs,et as German,Z as Swedish,Cr as __namedExportsOrder,Dr as default};
