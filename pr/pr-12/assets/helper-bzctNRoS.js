import{D as wt,A as vt,M as Mt,u as S,v as W,h as H,E as kt,p as xt,d as X}from"./iframe-D6xBhSQL.js";let L,ct=0;function V(t){L=t}function J(){L=null,ct=0}function St(){return ct++}const Q=Symbol("haunted.phase"),A=Symbol("haunted.hook"),K=Symbol("haunted.update"),Z=Symbol("haunted.commit"),D=Symbol("haunted.effects"),N=Symbol("haunted.layoutEffects"),B="haunted.context";class Pt{update;host;virtual;[A];[D];[N];constructor(e,n){this.update=e,this.host=n,this[A]=new Map,this[D]=[],this[N]=[]}run(e){V(this);let n=e();return J(),n}_runEffects(e){let n=this[e];V(this);for(let r of n)r.call(this);J()}runEffects(){this._runEffects(D)}runLayoutEffects(){this._runEffects(N)}teardown(){this[A].forEach(n=>{typeof n.teardown=="function"&&n.teardown(!0)})}}class Ot extends Error{constructor(e){const n=e?` <${e}>`:"";super(`Infinite update loop detected in component${n}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const _t=100,Dt=Promise.resolve().then.bind(Promise.resolve());function dt(){let t=[],e;function n(){e=null;let r=t;t=[];for(var a=0,s=r.length;a<s;a++)r[a]()}return function(r){t.push(r),e==null&&(e=Dt(n))}}const Et=dt(),tt=dt();class U{renderer;host;state;[Q];_updateQueued;_active;_updateCount;_processing;static maxUpdates=_t;constructor(e,n){this.renderer=e,this.host=n,this.state=new Pt(this.update.bind(this),n),this[Q]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>U.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new Ot(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Et(()=>{let e=this.handlePhase(K);tt(()=>{this.handlePhase(Z,e),tt(()=>{this.handlePhase(D),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,n){switch(this[Q]=e,e){case Z:this.commit(n),this.runEffects(N);return;case K:return this.render();case D:return this.runEffects(D)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}const ht=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Ct=t=>t?.map(e=>typeof e=="string"?ht(e):e),Tt=(t,...e)=>t.flatMap((n,r)=>[n,e[r]||""]).join(""),Wt=Tt,Yt=(t="")=>t.replace(/-+([a-z])?/g,(e,n)=>n?n.toUpperCase():"");function Ft(t){class e extends U{frag;renderResult;constructor(a,s,o){super(a,o||s),this.frag=s}commit(a){this.renderResult=t(a,this.frag)}}function n(r,a,s){const o=(s||a||{}).baseElement||HTMLElement,{observedAttributes:u=[],useShadowDOM:d=!0,shadowRootInit:p={},styleSheets:f}=s||a||{},i=Ct(r.styleSheets||f);class h extends o{_scheduler;static get observedAttributes(){return r.observedAttributes||u||[]}constructor(){if(super(),d===!1)this._scheduler=new e(r,this);else{const m=this.attachShadow({mode:"open",...p});i&&(m.adoptedStyleSheets=i),this._scheduler=new e(r,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,w,v){if(w===v)return;let M=v===""?!0:v;Reflect.set(this,Yt(m),M)}}function l(g){let m=g,w=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(v){w&&m===v||(w=!0,m=v,this._scheduler&&this._scheduler.update())}})}const y=new Proxy(o.prototype,{getPrototypeOf(g){return g},set(g,m,w,v){let M;return m in g?(M=Object.getOwnPropertyDescriptor(g,m),M&&M.set?(M.set.call(v,w),!0):(Reflect.set(g,m,w,v),!0)):(typeof m=="symbol"||m[0]==="_"?M={enumerable:!0,configurable:!0,writable:!0,value:w}:M=l(w),Object.defineProperty(v,m,M),M.set&&M.set.call(v,w),!0)}});return Object.setPrototypeOf(h.prototype,y),h}return n}class E{id;state;constructor(e,n){this.id=e,this.state=n}}function Nt(t,...e){let n=St(),r=L[A],a=r.get(n);return a||(a=new t(n,L,...e),r.set(n,a)),a.update(...e)}function C(t){return Nt.bind(null,t)}function lt(t){return C(class extends E{callback;lastValues;values;_teardown;constructor(e,n,r,a){super(e,n),t(n,this)}update(e,n){this.callback=e,this.values=n}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,n)=>this.lastValues[n]!==e)}})}function ft(t,e){t[D].push(e)}const sn=lt(ft),$t=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Rt=C(class extends E{Context;value;_ranEffect;_unsubscribe;constructor(t,e,n){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ft(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};$t(this.state.host).dispatchEvent(new CustomEvent(B,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:a}=e;this.value=r?a:t.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function At(t){return e=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(B,this)}disconnectedCallback(){this.removeEventListener(B,this)}handleEvent(r){const{detail:a}=r;a.Context===n&&(a.value=this.value,a.unsubscribe=this.unsubscribe.bind(this,a.callback),this.listeners.add(a.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let a of this.listeners)a(r)}get value(){return this._value}},Consumer:t(function({render:r}){const a=Rt(n);return r(a)},{useShadowDOM:!1}),defaultValue:e};return n}}const Lt=C(class extends E{value;values;constructor(t,e,n,r){super(t,e),this.value=n(),this.values=r}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),on=(t,e)=>Lt(()=>t,e);function qt(t,e){t[N].push(e)}lt(qt);const un=C(class extends E{args;constructor(t,e,n){super(t,e),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});C(class extends E{reducer;currentState;constructor(t,e,n,r,a){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=a!==void 0?a(r):r}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const zt=/([A-Z])/gu,cn=C(class extends E{property;eventName;constructor(t,e,n,r){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(zt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updater(r))}update(t,e){return[this.state.host[this.property],this.updater]}resolve(t){const e=this.state.host[this.property],n=typeof t=="function"?t:void 0,r=n?n(e):t;return[e,r,n]}notify(t,e){const n=new CustomEvent(this.eventName,{detail:{value:t,updater:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(t){const[e,n,r]=this.resolve(t);this.notify(n,r).defaultPrevented||Object.is(e,n)||(this.state.host[this.property]=n)}}),dn=t=>e=>{e.preventDefault(),t(e.detail.updater??e.detail.value)};C(class extends E{update(){return this.state.host}});function jt({render:t}){const e=Ft(t),n=At(e);return{component:e,createContext:n}}const Ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Qt=t=>(...e)=>({_$litDirective$:t,values:e});class It{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}const{component:hn}=jt({render:wt}),ln=ht(Wt`
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
`);const O=t=>t??vt;const et=(t,e,n)=>{const r=new Map;for(let a=e;a<=n;a++)r.set(t[a],a);return r},fn=Qt(class extends It{constructor(t){if(super(t),t.type!==Ht.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);const a=[],s=[];let o=0;for(const u of t)a[o]=r?r(u,o):o,s[o]=n(u,o),o++;return{values:s,keys:a}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){const a=Mt(t),{values:s,keys:o}=this.dt(e,n,r);if(!Array.isArray(a))return this.ut=o,s;const u=this.ut??=[],d=[];let p,f,i=0,h=a.length-1,l=0,y=s.length-1;for(;i<=h&&l<=y;)if(a[i]===null)i++;else if(a[h]===null)h--;else if(u[i]===o[l])d[l]=S(a[i],s[l]),i++,l++;else if(u[h]===o[y])d[y]=S(a[h],s[y]),h--,y--;else if(u[i]===o[y])d[y]=S(a[i],s[y]),W(t,d[y+1],a[i]),i++,y--;else if(u[h]===o[l])d[l]=S(a[h],s[l]),W(t,a[i],a[h]),h--,l++;else if(p===void 0&&(p=et(o,l,y),f=et(u,i,h)),p.has(u[i]))if(p.has(u[h])){const g=f.get(o[l]),m=g!==void 0?a[g]:null;if(m===null){const w=W(t,a[i]);S(w,s[l]),d[l]=w}else d[l]=S(m,s[l]),W(t,a[i],m),a[g]=null;l++}else H(a[h]),h--;else H(a[i]),i++;for(;l<=y;){const g=W(t,d[y+1]);S(g,s[l]),d[l++]=g}for(;i<=h;){const g=a[i++];g!==null&&H(g)}return this.ut=o,xt(t,d),kt}}),mt=6048e5,Bt=864e5,nt=Symbol.for("constructDateFrom");function k(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&nt in t?t[nt](e):t instanceof Date?new t.constructor(e):new Date(e)}function b(t,e){return k(e||t,t)}function Xt(t,e,n){const r=b(t,n?.in);return isNaN(e)?k(t,NaN):(e&&r.setDate(r.getDate()+e),r)}function rt(t,e,n){const r=b(t,n?.in);if(isNaN(e))return k(t,NaN);if(!e)return r;const a=r.getDate(),s=k(t,r.getTime());s.setMonth(r.getMonth()+e+1,0);const o=s.getDate();return a>=o?s:(r.setFullYear(s.getFullYear(),s.getMonth(),a),r)}let Ut={};function j(){return Ut}function $(t,e){const n=j(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=b(t,e?.in),s=a.getDay(),o=(s<r?7:0)+s-r;return a.setDate(a.getDate()-o),a.setHours(0,0,0,0),a}function q(t,e){return $(t,{...e,weekStartsOn:1})}function gt(t,e){const n=b(t,e?.in),r=n.getFullYear(),a=k(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const s=q(a),o=k(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);const u=q(o);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function at(t){const e=b(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function pt(t,...e){const n=k.bind(null,e.find(r=>typeof r=="object"));return e.map(n)}function z(t,e){const n=b(t,e?.in);return n.setHours(0,0,0,0),n}function Gt(t,e,n){const[r,a]=pt(n?.in,t,e),s=z(r),o=z(a),u=+s-at(s),d=+o-at(o);return Math.round((u-d)/Bt)}function Vt(t,e){const n=gt(t,e),r=k(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),q(r)}function mn(t,e,n){const[r,a]=pt(n?.in,t,e);return+z(r)==+z(a)}function Jt(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Kt(t){return!(!Jt(t)&&typeof t!="number"||isNaN(+b(t)))}function Zt(t,e){const n=b(t,e?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function te(t,e){const n=b(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const ee={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ne=(t,e,n)=>{let r;const a=ee[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function I(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const re={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ae={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},se={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},oe={date:I({formats:re,defaultWidth:"full"}),time:I({formats:ae,defaultWidth:"full"}),dateTime:I({formats:se,defaultWidth:"full"})},ie={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ue=(t,e,n,r)=>ie[t];function Y(t){return(e,n)=>{const r=n?.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,u=n?.width?String(n.width):o;a=t.formattingValues[u]||t.formattingValues[o]}else{const o=t.defaultWidth,u=n?.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[o]}const s=t.argumentCallback?t.argumentCallback(e):e;return a[s]}}const ce={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},de={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},he={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},le={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},fe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},me={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ge=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},pe={ordinalNumber:ge,era:Y({values:ce,defaultWidth:"wide"}),quarter:Y({values:de,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Y({values:he,defaultWidth:"wide"}),day:Y({values:le,defaultWidth:"wide"}),dayPeriod:Y({values:fe,defaultWidth:"wide",formattingValues:me,defaultFormattingWidth:"wide"})};function F(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(a);if(!s)return null;const o=s[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(u)?ye(u,i=>i.test(o)):be(u,i=>i.test(o));let p;p=t.valueCallback?t.valueCallback(d):d,p=n.valueCallback?n.valueCallback(p):p;const f=e.slice(o.length);return{value:p,rest:f}}}function be(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function ye(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function we(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],s=e.match(t.parsePattern);if(!s)return null;let o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;const u=e.slice(a.length);return{value:o,rest:u}}}const ve=/^(\d+)(th|st|nd|rd)?/i,Me=/\d+/i,ke={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},xe={any:[/^b/i,/^(a|c)/i]},Se={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Pe={any:[/1/i,/2/i,/3/i,/4/i]},Oe={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},_e={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},De={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ee={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ce={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Te={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},We={ordinalNumber:we({matchPattern:ve,parsePattern:Me,valueCallback:t=>parseInt(t,10)}),era:F({matchPatterns:ke,defaultMatchWidth:"wide",parsePatterns:xe,defaultParseWidth:"any"}),quarter:F({matchPatterns:Se,defaultMatchWidth:"wide",parsePatterns:Pe,defaultParseWidth:"any",valueCallback:t=>t+1}),month:F({matchPatterns:Oe,defaultMatchWidth:"wide",parsePatterns:_e,defaultParseWidth:"any"}),day:F({matchPatterns:De,defaultMatchWidth:"wide",parsePatterns:Ee,defaultParseWidth:"any"}),dayPeriod:F({matchPatterns:Ce,defaultMatchWidth:"any",parsePatterns:Te,defaultParseWidth:"any"})},Ye={code:"en-US",formatDistance:ne,formatLong:oe,formatRelative:ue,localize:pe,match:We,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Fe(t,e){const n=b(t,e?.in);return Gt(n,te(n))+1}function Ne(t,e){const n=b(t,e?.in),r=+q(n)-+Vt(n);return Math.round(r/mt)+1}function bt(t,e){const n=b(t,e?.in),r=n.getFullYear(),a=j(),s=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,o=k(e?.in||t,0);o.setFullYear(r+1,0,s),o.setHours(0,0,0,0);const u=$(o,e),d=k(e?.in||t,0);d.setFullYear(r,0,s),d.setHours(0,0,0,0);const p=$(d,e);return+n>=+u?r+1:+n>=+p?r:r-1}function $e(t,e){const n=j(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=bt(t,e),s=k(e?.in||t,0);return s.setFullYear(a,0,r),s.setHours(0,0,0,0),$(s,e)}function Re(t,e){const n=b(t,e?.in),r=+$(n,e)-+$e(n,e);return Math.round(r/mt)+1}function c(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const x={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return c(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):c(n+1,2)},d(t,e){return c(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return n==="am"?"a.m.":"p.m."}},h(t,e){return c(t.getHours()%12||12,e.length)},H(t,e){return c(t.getHours(),e.length)},m(t,e){return c(t.getMinutes(),e.length)},s(t,e){return c(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return c(a,e.length)}},T={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},st={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return x.y(t,e)},Y:function(t,e,n,r){const a=bt(t,r),s=a>0?a:1-a;if(e==="YY"){const o=s%100;return c(o,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):c(s,e.length)},R:function(t,e){const n=gt(t);return c(n,e.length)},u:function(t,e){const n=t.getFullYear();return c(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return c(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return c(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return x.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return c(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=Re(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):c(a,e.length)},I:function(t,e,n){const r=Ne(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):c(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):x.d(t,e)},D:function(t,e,n){const r=Fe(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):c(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),s=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return c(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),s=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return c(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return c(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=T.noon:r===0?a=T.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=T.evening:r>=12?a=T.afternoon:r>=4?a=T.morning:a=T.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return x.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):x.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):x.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):x.s(t,e)},S:function(t,e){return x.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return it(r);case"XXXX":case"XX":return P(r);default:return P(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return it(r);case"xxxx":case"xx":return P(r);default:return P(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ot(r,":");default:return"GMT"+P(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ot(r,":");default:return"GMT"+P(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return c(r,e.length)},T:function(t,e,n){return c(+t,e.length)}};function ot(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),s=r%60;return s===0?n+String(a):n+String(a)+e+c(s,2)}function it(t,e){return t%60===0?(t>0?"-":"+")+c(Math.abs(t)/60,2):P(t,e)}function P(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=c(Math.trunc(r/60),2),s=c(r%60,2);return n+a+e+s}const ut=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},yt=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Ae=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return ut(t,e);let s;switch(r){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",ut(r,e)).replace("{{time}}",yt(a,e))},Le={p:yt,P:Ae},qe=/^D+$/,ze=/^Y+$/,je=["D","DD","YY","YYYY"];function He(t){return qe.test(t)}function Qe(t){return ze.test(t)}function Ie(t,e,n){const r=Be(t,e,n);if(console.warn(r),je.includes(t))throw new RangeError(r)}function Be(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Xe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ue=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ge=/^'([^]*?)'?$/,Ve=/''/g,Je=/[a-zA-Z]/;function R(t,e,n){const r=j(),a=r.locale??Ye,s=r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=r.weekStartsOn??r.locale?.options?.weekStartsOn??0,u=b(t,n?.in);if(!Kt(u))throw new RangeError("Invalid time value");let d=e.match(Ue).map(f=>{const i=f[0];if(i==="p"||i==="P"){const h=Le[i];return h(f,a.formatLong)}return f}).join("").match(Xe).map(f=>{if(f==="''")return{isToken:!1,value:"'"};const i=f[0];if(i==="'")return{isToken:!1,value:Ke(f)};if(st[i])return{isToken:!0,value:f};if(i.match(Je))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return{isToken:!1,value:f}});a.localize.preprocessor&&(d=a.localize.preprocessor(u,d));const p={firstWeekContainsDate:s,weekStartsOn:o,locale:a};return d.map(f=>{if(!f.isToken)return f.value;const i=f.value;(Qe(i)||He(i))&&Ie(i,e,String(t));const h=st[i[0]];return h(u,i,a.localize,p)}).join("")}function Ke(t){const e=t.match(Ge);return e?e[1].replace(Ve,"'"):t}function Ze(t,e){const n=b(t,e?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(0,0,0,0),b(n,e?.in)}const tn={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},en=t=>typeof t=="string"&&tn.isoBasic.test(t)?new Date(`${t}T00:00`):new Date(t),gn=t=>{if(t==null)return;if(t instanceof Date&&!isNaN(t.getTime()))return t;if(!(typeof t=="number"||typeof t=="string"))return;const e=en(t);if(!(e instanceof Date&&isNaN(e.getTime())))return e},nn=["US (en-US)","Sweden (sv-SE)","Germany (de-DE)","Romania (ro-RO)"],rn={"US (en-US)":"en-US","Sweden (sv-SE)":"sv-SE","Germany (de-DE)":"de-DE","Romania (ro-RO)":"ro-RO"},pn={control:"select",options:nn,description:"Locale used for formatting dates."},bn={control:"text",description:"Date string in yyyy-MM-dd format. Leave empty for no value."},yn={control:"object",description:"String yyyy-MM-dd value in single mode, or an object with start and end yyyy-MM-dd strings in range mode."},wn={control:"select",options:["range","single"],description:"Selection mode."},vn=t=>{const e=new Date;return e.setDate(t),e.toISOString().slice(0,10)},_=t=>t||void 0,G=t=>t?rn[t]:void 0,Mn=[{label:"Today tomorrow",start:R(new Date,"yyyy-MM-dd"),end:R(Xt(new Date,1),"yyyy-MM-dd")},{label:"Next month",start:R(Zt(rt(new Date,1)),"yyyy-MM-dd"),end:R(Ze(rt(new Date,1)),"yyyy-MM-dd")}],kn=t=>X`
	<cosmoz-date-input
		locale=${O(G(t.locale))}
		.value=${_(t.value)}
	></cosmoz-date-input>
`,xn=t=>X`
	<cosmoz-calendar
		mode=${O(t.mode)}
		locale=${O(G(t.locale))}
		number-of-months=${t.numberOfMonths}
		.value=${t.value}
		.min=${_(t.min)}
		.max=${_(t.max)}
	></cosmoz-calendar>
`,Sn=t=>X`
	<cosmoz-datepicker
		mode=${O(t.mode)}
		locale=${O(G(t.locale))}
		trigger-size=${O(_(t.triggerSize))}
		trigger-variant=${O(_(t.triggerVariant))}
		.value=${t.value}
		.min=${_(t.min)}
		.max=${_(t.max)}
		.presets=${t.presets}
		?disabled=${t.disabled}
		?no-presets=${t.noPresets}
		?single-calendar=${t.singleCalendar}
	></cosmoz-datepicker>
`;export{rt as A,Zt as B,te as C,dn as D,Mn as E,Sn as F,yn as a,kn as b,vn as c,bn as d,k as e,Qt as f,Ht as g,Wt as h,It as i,R as j,Lt as k,pn as l,wn as m,gn as n,un as o,sn as p,mn as q,xn as r,on as s,b as t,cn as u,hn as v,ln as w,fn as x,O as y,Xt as z};
