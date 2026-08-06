import{D as be,M as pe,u as $,v as q,h as ft,E as jt,p as ve,A as qt,d as S,w as Ht}from"./iframe-BOtQcaUg.js";import"./preload-helper-PPVm8Dsz.js";let st,Bt=0;function Mt(t){st=t}function Dt(){st=null,Bt=0}function we(){return Bt++}const mt=Symbol("haunted.phase"),nt=Symbol("haunted.hook"),Et=Symbol("haunted.update"),Pt=Symbol("haunted.commit"),F=Symbol("haunted.effects"),Q=Symbol("haunted.layoutEffects"),pt="haunted.context";class ye{update;host;virtual;[nt];[F];[Q];constructor(e,n){this.update=e,this.host=n,this[nt]=new Map,this[F]=[],this[Q]=[]}run(e){Mt(this);let n=e();return Dt(),n}_runEffects(e){let n=this[e];Mt(this);for(let r of n)r.call(this);Dt()}runEffects(){this._runEffects(F)}runLayoutEffects(){this._runEffects(Q)}teardown(){this[nt].forEach(n=>{typeof n.teardown=="function"&&n.teardown(!0)})}}class xe extends Error{constructor(e){const n=e?` <${e}>`:"";super(`Infinite update loop detected in component${n}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const ke=100,Se=Promise.resolve().then.bind(Promise.resolve());function Qt(){let t=[],e;function n(){e=null;let r=t;t=[];for(var a=0,o=r.length;a<o;a++)r[a]()}return function(r){t.push(r),e==null&&(e=Se(n))}}const ze=Qt(),_t=Qt();class yt{renderer;host;state;[mt];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ke;constructor(e,n){this.renderer=e,this.host=n,this.state=new ye(this.update.bind(this),n),this[mt]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>yt.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new xe(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,ze(()=>{let e=this.handlePhase(Et);_t(()=>{this.handlePhase(Pt,e),_t(()=>{this.handlePhase(F),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,n){switch(this[mt]=e,e){case Pt:this.commit(n),this.runEffects(Q);return;case Et:return this.render();case F:return this.runEffects(F)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}const Ut=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Me=t=>t?.map(e=>typeof e=="string"?Ut(e):e),De=(t,...e)=>t.flatMap((n,r)=>[n,e[r]||""]).join(""),dt=De,Ee=(t="")=>t.replace(/-+([a-z])?/g,(e,n)=>n?n.toUpperCase():"");function Pe(t){class e extends yt{frag;renderResult;constructor(a,o,s){super(a,s||o),this.frag=o}commit(a){this.renderResult=t(a,this.frag)}}function n(r,a,o){const s=(o||a||{}).baseElement||HTMLElement,{observedAttributes:c=[],useShadowDOM:d=!0,shadowRootInit:g={},styleSheets:f}=o||a||{},i=Me(r.styleSheets||f);class u extends s{_scheduler;static get observedAttributes(){return r.observedAttributes||c||[]}constructor(){if(super(),d===!1)this._scheduler=new e(r,this);else{const m=this.attachShadow({mode:"open",...g});i&&(m.adoptedStyleSheets=i),this._scheduler=new e(r,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,k,z){if(k===z)return;let y=z===""?!0:z;Reflect.set(this,Ee(m),y)}}function l(p){let m=p,k=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(z){k&&m===z||(k=!0,m=z,this._scheduler&&this._scheduler.update())}})}const h=new Proxy(s.prototype,{getPrototypeOf(p){return p},set(p,m,k,z){let y;return m in p?(y=Object.getOwnPropertyDescriptor(p,m),y&&y.set?(y.set.call(z,k),!0):(Reflect.set(p,m,k,z),!0)):(typeof m=="symbol"||m[0]==="_"?y={enumerable:!0,configurable:!0,writable:!0,value:k}:y=l(k),Object.defineProperty(z,m,y),y.set&&y.set.call(z,k),!0)}});return Object.setPrototypeOf(u.prototype,h),u}return n}class N{id;state;constructor(e,n){this.id=e,this.state=n}}function _e(t,...e){let n=we(),r=st[nt],a=r.get(n);return a||(a=new t(n,st,...e),r.set(n,a)),a.update(...e)}function A(t){return _e.bind(null,t)}function Xt(t){return A(class extends N{callback;lastValues;values;_teardown;constructor(e,n,r,a){super(e,n),t(n,this)}update(e,n){this.callback=e,this.values=n}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,n)=>this.lastValues[n]!==e)}})}function Gt(t,e){t[F].push(e)}const vt=Xt(Gt),Oe=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Ce=A(class extends N{Context;value;_ranEffect;_unsubscribe;constructor(t,e,n){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Gt(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Oe(this.state.host).dispatchEvent(new CustomEvent(pt,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:a}=e;this.value=r?a:t.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function $e(t){return e=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(pt,this)}disconnectedCallback(){this.removeEventListener(pt,this)}handleEvent(r){const{detail:a}=r;a.Context===n&&(a.value=this.value,a.unsubscribe=this.unsubscribe.bind(this,a.callback),this.listeners.add(a.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let a of this.listeners)a(r)}get value(){return this._value}},Consumer:t(function({render:r}){const a=Ce(n);return r(a)},{useShadowDOM:!1}),defaultValue:e};return n}}const O=A(class extends N{value;values;constructor(t,e,n,r){super(t,e),this.value=n(),this.values=r}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),T=(t,e)=>O(()=>t,e);function Te(t,e){t[Q].push(e)}Xt(Te);const gt=A(class extends N{args;constructor(t,e,n){super(t,e),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});A(class extends N{reducer;currentState;constructor(t,e,n,r,a){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=a!==void 0?a(r):r}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const We=/([A-Z])/gu,Ot=A(class extends N{property;eventName;constructor(t,e,n,r){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(We,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updater(r))}update(t,e){return[this.state.host[this.property],this.updater]}resolve(t){const e=this.state.host[this.property],n=typeof t=="function"?t:void 0,r=n?n(e):t;return[e,r,n]}notify(t,e){const n=new CustomEvent(this.eventName,{detail:{value:t,updater:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(t){const[e,n,r]=this.resolve(t);this.notify(n,r).defaultPrevented||Object.is(e,n)||(this.state.host[this.property]=n)}});A(class extends N{update(){return this.state.host}});function Fe({render:t}){const e=Pe(t),n=$e(e);return{component:e,createContext:n}}const Vt={ATTRIBUTE:1,CHILD:2},Jt=t=>(...e)=>({_$litDirective$:t,values:e});class Kt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}const{component:Zt}=Fe({render:be}),te=Ut(dt`
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
`);const Ct=(t,e,n)=>{const r=new Map;for(let a=e;a<=n;a++)r.set(t[a],a);return r},rt=Jt(class extends Kt{constructor(t){if(super(t),t.type!==Vt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);const a=[],o=[];let s=0;for(const c of t)a[s]=r?r(c,s):s,o[s]=n(c,s),s++;return{values:o,keys:a}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){const a=pe(t),{values:o,keys:s}=this.dt(e,n,r);if(!Array.isArray(a))return this.ut=s,o;const c=this.ut??=[],d=[];let g,f,i=0,u=a.length-1,l=0,h=o.length-1;for(;i<=u&&l<=h;)if(a[i]===null)i++;else if(a[u]===null)u--;else if(c[i]===s[l])d[l]=$(a[i],o[l]),i++,l++;else if(c[u]===s[h])d[h]=$(a[u],o[h]),u--,h--;else if(c[i]===s[h])d[h]=$(a[i],o[h]),q(t,d[h+1],a[i]),i++,h--;else if(c[u]===s[l])d[l]=$(a[u],o[l]),q(t,a[i],a[u]),u--,l++;else if(g===void 0&&(g=Ct(s,l,h),f=Ct(c,i,u)),g.has(c[i]))if(g.has(c[u])){const p=f.get(s[l]),m=p!==void 0?a[p]:null;if(m===null){const k=q(t,a[i]);$(k,o[l]),d[l]=k}else d[l]=$(m,o[l]),q(t,a[i],m),a[p]=null;l++}else ft(a[u]),u--;else ft(a[i]),i++;for(;l<=h;){const p=q(t,d[h+1]);$(p,o[l]),d[l++]=p}for(;i<=u;){const p=a[i++];p!==null&&ft(p)}return this.ut=s,ve(t,d),jt}});function U(t,e,n){return t?e(t):n?.(t)}const ee=6048e5,Ye=864e5,$t=Symbol.for("constructDateFrom");function M(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&$t in t?t[$t](e):t instanceof Date?new t.constructor(e):new Date(e)}function x(t,e){return M(e||t,t)}function it(t,e,n){const r=x(t,n?.in);return isNaN(e)?M(t,NaN):(e&&r.setDate(r.getDate()+e),r)}function C(t,e,n){const r=x(t,n?.in);if(isNaN(e))return M(t,NaN);if(!e)return r;const a=r.getDate(),o=M(t,r.getTime());o.setMonth(r.getMonth()+e+1,0);const s=o.getDate();return a>=s?o:(r.setFullYear(o.getFullYear(),o.getMonth(),a),r)}let Ne={};function lt(){return Ne}function X(t,e){const n=lt(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=x(t,e?.in),o=a.getDay(),s=(o<r?7:0)+o-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function ct(t,e){return X(t,{...e,weekStartsOn:1})}function ne(t,e){const n=x(t,e?.in),r=n.getFullYear(),a=M(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=ct(a),s=M(n,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const c=ct(s);return n.getTime()>=o.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function Tt(t){const e=x(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function re(t,...e){const n=M.bind(null,e.find(r=>typeof r=="object"));return e.map(n)}function ut(t,e){const n=x(t,e?.in);return n.setHours(0,0,0,0),n}function Ae(t,e,n){const[r,a]=re(n?.in,t,e),o=ut(r),s=ut(a),c=+o-Tt(o),d=+s-Tt(s);return Math.round((c-d)/Ye)}function Ie(t,e){const n=ne(t,e),r=M(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),ct(r)}function Le(t){return M(t,Date.now())}function Y(t,e,n){const[r,a]=re(n?.in,t,e);return+ut(r)==+ut(a)}function Re(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function je(t){return!(!Re(t)&&typeof t!="number"||isNaN(+x(t)))}function ae(t,e){const n=x(t,e?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(23,59,59,999),n}function xt(t,e){const n=x(t,e?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function qe(t,e){const n=x(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const He={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Be=(t,e,n)=>{let r;const a=He[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function bt(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const Qe={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ue={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Xe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ge={date:bt({formats:Qe,defaultWidth:"full"}),time:bt({formats:Ue,defaultWidth:"full"}),dateTime:bt({formats:Xe,defaultWidth:"full"})},Ve={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Je=(t,e,n,r)=>Ve[t];function H(t){return(e,n)=>{const r=n?.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,c=n?.width?String(n.width):s;a=t.formattingValues[c]||t.formattingValues[s]}else{const s=t.defaultWidth,c=n?.width?String(n.width):t.defaultWidth;a=t.values[c]||t.values[s]}const o=t.argumentCallback?t.argumentCallback(e):e;return a[o]}}const Ke={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ze={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},tn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},en={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},nn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},rn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},an=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},on={ordinalNumber:an,era:H({values:Ke,defaultWidth:"wide"}),quarter:H({values:Ze,defaultWidth:"wide",argumentCallback:t=>t-1}),month:H({values:tn,defaultWidth:"wide"}),day:H({values:en,defaultWidth:"wide"}),dayPeriod:H({values:nn,defaultWidth:"wide",formattingValues:rn,defaultFormattingWidth:"wide"})};function B(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const s=o[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(c)?cn(c,i=>i.test(s)):sn(c,i=>i.test(s));let g;g=t.valueCallback?t.valueCallback(d):d,g=n.valueCallback?n.valueCallback(g):g;const f=e.slice(s.length);return{value:g,rest:f}}}function sn(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function cn(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function un(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],o=e.match(t.parsePattern);if(!o)return null;let s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const c=e.slice(a.length);return{value:s,rest:c}}}const dn=/^(\d+)(th|st|nd|rd)?/i,ln=/\d+/i,hn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},fn={any:[/^b/i,/^(a|c)/i]},mn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},gn={any:[/1/i,/2/i,/3/i,/4/i]},bn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},pn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},vn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},wn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},yn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},xn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},kn={ordinalNumber:un({matchPattern:dn,parsePattern:ln,valueCallback:t=>parseInt(t,10)}),era:B({matchPatterns:hn,defaultMatchWidth:"wide",parsePatterns:fn,defaultParseWidth:"any"}),quarter:B({matchPatterns:mn,defaultMatchWidth:"wide",parsePatterns:gn,defaultParseWidth:"any",valueCallback:t=>t+1}),month:B({matchPatterns:bn,defaultMatchWidth:"wide",parsePatterns:pn,defaultParseWidth:"any"}),day:B({matchPatterns:vn,defaultMatchWidth:"wide",parsePatterns:wn,defaultParseWidth:"any"}),dayPeriod:B({matchPatterns:yn,defaultMatchWidth:"any",parsePatterns:xn,defaultParseWidth:"any"})},Sn={code:"en-US",formatDistance:Be,formatLong:Ge,formatRelative:Je,localize:on,match:kn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function zn(t,e){const n=x(t,e?.in);return Ae(n,qe(n))+1}function Mn(t,e){const n=x(t,e?.in),r=+ct(n)-+Ie(n);return Math.round(r/ee)+1}function oe(t,e){const n=x(t,e?.in),r=n.getFullYear(),a=lt(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,s=M(e?.in||t,0);s.setFullYear(r+1,0,o),s.setHours(0,0,0,0);const c=X(s,e),d=M(e?.in||t,0);d.setFullYear(r,0,o),d.setHours(0,0,0,0);const g=X(d,e);return+n>=+c?r+1:+n>=+g?r:r-1}function Dn(t,e){const n=lt(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=oe(t,e),o=M(e?.in||t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),X(o,e)}function En(t,e){const n=x(t,e?.in),r=+X(n,e)-+Dn(n,e);return Math.round(r/ee)+1}function w(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const _={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return w(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):w(n+1,2)},d(t,e){return w(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return n==="am"?"a.m.":"p.m."}},h(t,e){return w(t.getHours()%12||12,e.length)},H(t,e){return w(t.getHours(),e.length)},m(t,e){return w(t.getMinutes(),e.length)},s(t,e){return w(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return w(a,e.length)}},R={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Wt={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return _.y(t,e)},Y:function(t,e,n,r){const a=oe(t,r),o=a>0?a:1-a;if(e==="YY"){const s=o%100;return w(s,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):w(o,e.length)},R:function(t,e){const n=ne(t);return w(n,e.length)},u:function(t,e){const n=t.getFullYear();return w(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return w(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return w(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return _.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return w(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=En(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):w(a,e.length)},I:function(t,e,n){const r=Mn(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):w(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):_.d(t,e)},D:function(t,e,n){const r=zn(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):w(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return w(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return w(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return w(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=R.noon:r===0?a=R.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=R.evening:r>=12?a=R.afternoon:r>=4?a=R.morning:a=R.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return _.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):_.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):w(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):w(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):_.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):_.s(t,e)},S:function(t,e){return _.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return Yt(r);case"XXXX":case"XX":return W(r);default:return W(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return Yt(r);case"xxxx":case"xx":return W(r);default:return W(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Ft(r,":");default:return"GMT"+W(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Ft(r,":");default:return"GMT"+W(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return w(r,e.length)},T:function(t,e,n){return w(+t,e.length)}};function Ft(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return o===0?n+String(a):n+String(a)+e+w(o,2)}function Yt(t,e){return t%60===0?(t>0?"-":"+")+w(Math.abs(t)/60,2):W(t,e)}function W(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=w(Math.trunc(r/60),2),o=w(r%60,2);return n+a+e+o}const Nt=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},se=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Pn=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return Nt(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",Nt(r,e)).replace("{{time}}",se(a,e))},_n={p:se,P:Pn},On=/^D+$/,Cn=/^Y+$/,$n=["D","DD","YY","YYYY"];function Tn(t){return On.test(t)}function Wn(t){return Cn.test(t)}function Fn(t,e,n){const r=Yn(t,e,n);if(console.warn(r),$n.includes(t))throw new RangeError(r)}function Yn(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Nn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,An=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,In=/^'([^]*?)'?$/,Ln=/''/g,Rn=/[a-zA-Z]/;function at(t,e,n){const r=lt(),a=r.locale??Sn,o=r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,s=r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=x(t,n?.in);if(!je(c))throw new RangeError("Invalid time value");let d=e.match(An).map(f=>{const i=f[0];if(i==="p"||i==="P"){const u=_n[i];return u(f,a.formatLong)}return f}).join("").match(Nn).map(f=>{if(f==="''")return{isToken:!1,value:"'"};const i=f[0];if(i==="'")return{isToken:!1,value:jn(f)};if(Wt[i])return{isToken:!0,value:f};if(i.match(Rn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return{isToken:!1,value:f}});a.localize.preprocessor&&(d=a.localize.preprocessor(c,d));const g={firstWeekContainsDate:o,weekStartsOn:s,locale:a};return d.map(f=>{if(!f.isToken)return f.value;const i=f.value;(Wn(i)||Tn(i))&&Fn(i,e,String(t));const u=Wt[i[0]];return u(c,i,a.localize,g)}).join("")}function jn(t){const e=t.match(In);return e?e[1].replace(Ln,"'"):t}function kt(t,e){return+x(t)>+x(e)}function ht(t,e){return+x(t)<+x(e)}function qn(t,e){return Y(M(t,t),Le(t))}function At(t,e,n){const r=+x(t,n?.in),[a,o]=[+x(e.start,n?.in),+x(e.end,n?.in)].sort((s,c)=>s-c);return r>=a&&r<=o}function wt(t,e,n){return it(t,-e,n)}function ie(t,e,n){return C(t,-e,n)}const Hn=Jt(class extends Kt{constructor(t){if(super(t),t.type!==Vt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}const n=t.element.classList;for(const r of this.st)r in e||(n.remove(r),this.st.delete(r));for(const r in e){const a=!!e[r];a===this.st.has(r)||this.nt?.has(r)||(a?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return jt}});const D=t=>t??qt,Bn={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},Qn=t=>typeof t=="string"&&Bn.isoBasic.test(t)?new Date(`${t}T00:00`):new Date(t),j=t=>{if(t==null)return;if(t instanceof Date&&!isNaN(t.getTime()))return t;if(!(typeof t=="number"||typeof t=="string"))return;const e=Qn(t);if(!(e instanceof Date&&isNaN(e.getTime())))return e},ce=t=>(new Intl.Locale(t).getWeekInfo?.()?.firstDay??1)%7,Un=(t,e)=>{const n=ce(e);return(t.getDay()-n+7)%7},Xn=t=>{const e=ce(t),n=new Intl.DateTimeFormat(t,{weekday:"short"});return Array.from({length:7},(a,o)=>n.format(new Date(2023,0,1+o+e)))},Gn=(t,e)=>Intl.DateTimeFormat(e,{month:"long"}).format(t),Vn=(t,e)=>wt(t,Un(t,e)),Jn=(t,e)=>{const n=xt(t),r=Vn(n,e),a=6,o=[];for(let s=0;s<a;s++){const c=[];for(let d=0;d<7;d++){const g=it(r,s*7+d),f={month:g.getMonth(),day:g.getDate(),iso:g.toISOString(),isToday:qn(g),isCurrentMonth:n.getMonth()===g.getMonth()};c.push(f)}o.push(c)}return o},Kn=(t,e,n)=>!!(e&&Y(t,e)||n&&Y(t,n)),Zn=(t,e,n,r)=>!!(n&&e&&At(t,{start:e,end:n})||!n&&r&&e&&At(t,{start:e,end:r})),ot=(t,e,n)=>!!(e&&ht(t,e)||n&&kt(t,n)),It=(t,e,n,r)=>e&&ot(t,n,r)?"true":void 0,tr=(t,e)=>e&&Y(new Date(t.iso),e)?!0:void 0,er=(t,e)=>e&&Y(new Date(t.iso),e)?!0:void 0,Lt=(t,e)=>ht(t,xt(e)),Rt=(t,e,n)=>kt(t,ae(C(e,n-1))),V=(t,e,n)=>e&&ht(t,e)?e:n&&kt(t,n)?n:t,nr=(t,e)=>({ArrowLeft:wt(e,1),ArrowRight:it(e,1),ArrowUp:wt(e,7),ArrowDown:it(e,7)})[t.key],J=t=>j(t.target.dataset.date),rr=({day:t,endDate:e,focusedDate:n,locale:r,maxDate:a,minDate:o,numberOfMonths:s,onClick:c,onFocus:d,onPointerDown:g,onPointerEnter:f,startDate:i})=>{const u=new Date(t.iso);return S`
		<td>
			<div
				class="date-cell-wrapper ${Zn(u,i,e,n)?"in-range":""}"
			>
				<div
					class=${Hn({"date-cell":!0,"selected-cell":Kn(u,i,e),"focused-highlighted-cell":!e&&!!i&&Y(u,n),"today-cell":t.isToday&&t.isCurrentMonth,"other-month-cell":!t.isCurrentMonth,"hidden-cell":!t.isCurrentMonth&&s>1})}
					role="button"
					tabindex=${Y(u,n)?"0":"-1"}
					aria-label=${u.toLocaleString(r,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}
					aria-disabled=${D(It(u,t.isCurrentMonth,o,a))}
					data-date=${D(t.isCurrentMonth?at(u,"yyyy-MM-dd"):void 0)}
					data-disabled=${D(It(u,t.isCurrentMonth,o,a))}
					data-start=${D(tr(t,i))}
					data-end=${D(er(t,e))}
					@pointerdown=${g}
					@click=${c}
					@pointerenter=${f}
					@focus=${d}
				>
					${t.day}
				</div>
			</div>
		</td>
	`},ar=({endDate:t,focusedDate:e,locale:n,maxDate:r,minDate:a,month:o,numberOfMonths:s,onClick:c,onFocus:d,onKeyDown:g,onPointerDown:f,onPointerEnter:i,startDate:u,weekdayNames:l})=>S`
	<table @keydown=${g}>
		<thead>
			<tr>
				${rt(l,h=>h,h=>S`<th><div class="weekday">${h}</div></th>`)}
			</tr>
		</thead>
		<tbody>
			${rt(o,(h,p)=>`month-${p}`,h=>S`
					<tr>
						${rt(h,p=>p.iso,p=>rr({day:p,endDate:t,focusedDate:e,locale:n,maxDate:r,minDate:a,numberOfMonths:s,onClick:c,onFocus:d,onPointerDown:f,onPointerEnter:i,startDate:u}))}
					</tr>
				`)}
		</tbody>
	</table>
`,or=dt`
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
`,sr=dt`
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
		${or}
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
`,ir=["variant","size","disabled","full-width","type","value","href","target","rel","download"],cr=t=>{const e=t.hasAttribute("disabled"),n=t.getAttribute("type")||"button",r=t.getAttribute("href");vt(()=>{const o=s=>{t.hasAttribute("disabled")&&s.stopImmediatePropagation()};return t.addEventListener("click",o,{capture:!0}),()=>t.removeEventListener("click",o,{capture:!0})},[]);const a=S`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(r!=null){const o=t.getAttribute("target"),s=t.getAttribute("rel"),c=t.getAttribute("download");return S`
			<a
				href=${r}
				class="button"
				part="button"
				aria-disabled=${e?"true":qt}
				target=${D(o)}
				rel=${D(s)}
				download=${D(c)}
				>${a}</a
			>
		`}return S`
		<button type=${n} class="button" ?disabled=${e} part="button">
			${a}
		</button>
	`};customElements.define("cosmoz-button",Zt(cr,{observedAttributes:ir,styleSheets:[te,sr],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const ur=({slot:t,title:e,className:n,width:r="24",height:a="24",styles:o}={})=>S`
  <svg
    slot=${D(t)}
    class=${`chevron-left-icon ${n??""}`}
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
    style=${D(o)}
  >
    ${U(e,()=>Ht`<title>${e}</title>`)}
    <path d="m15 18-6-6 6-6" />
  </svg>
`,dr=({slot:t,title:e,className:n,width:r="24",height:a="24",styles:o}={})=>S`
  <svg
    slot=${D(t)}
    class=${`chevron-right-icon ${n??""}`}
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
    style=${D(o)}
  >
    ${U(e,()=>Ht`<title>${e}</title>`)}
    <path d="m9 18 6-6-6-6" />
  </svg>
`,lr=({index:t,locale:e,numberOfMonths:n,selectedMonth:r,setSelectedMonth:a})=>S`
	<header>
		${U(t===0,()=>S`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="prev-button"
					@click=${()=>a(ie(r,n))}
					>${ur()}</cosmoz-button
				>
			`)}
		<h2 class="month-label">
			${Gn(C(r,t),e)}
			${C(r,t).getFullYear()}
		</h2>
		${U(t===n-1,()=>S`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="next-button"
					@click=${()=>a(C(r,n))}
					>${dr()}</cosmoz-button
				>
			`)}
	</header>
`,hr=dt`
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

	.date-cell-wrapper.in-range:not(:has(.hidden-cell)) {
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

	.date-cell:not([data-disabled='true']):hover {
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

	.date-cell.hidden-cell {
		visibility: hidden;
	}
`,fr=t=>{const{locale:e,numberOfMonths:n,min:r,max:a}=t,o=e??navigator.language,s=Number(n??1),[c,d]=Ot("start"),[g,f]=Ot("end"),i=O(()=>j(c),[c]),u=O(()=>j(g),[g]),l=O(()=>j(r),[r]),h=O(()=>j(a),[a]),p=O(()=>V(i??new Date,l,h),[i,l,h]),[m,k]=gt(p),[z,y]=gt(!1),[I,E]=gt(p),ue=O(()=>Xn(o),[o]);vt(()=>{z&&t.shadowRoot?.querySelector(`[data-date="${at(I,"yyyy-MM-dd")}"]`)?.focus()},[I,t,z]);const de=O(()=>{const v=[];for(let b=0;b<s;b++)v.push(Jn(C(m,b),o));return v},[m,o,s]),G=T(v=>{const b=at(v,"yyyy-MM-dd");if(!i&&!u){d(b);return}if(i&&!u&&ht(v,i)){d(b),f(at(i,"yyyy-MM-dd"));return}if(i&&!u){f(b);return}i&&u&&(d(b),f(void 0))},[i,u,d,f]),St=T(v=>{const b=V(v,l,h);Lt(b,m)&&k(L=>ie(L,s)),Rt(b,m,s)&&k(L=>C(L,s)),E(b)},[l,h,s,m,E,k]);vt(()=>{if(Lt(I,m)){const v=V(xt(m),l,h);E(v)}if(Rt(I,m,s)){const v=V(ae(C(m,s-1)),l,h);E(v)}},[I,h,l,s,m,E]);const le=T(v=>{if(!(v.target instanceof Element))return;const b=v.target.closest("[data-date]");if(!b?.dataset.date||b.dataset.disabled==="true")return;const L=j(b.dataset.date);if(v.key==="Enter"||v.key===" "){v.preventDefault(),G(L);return}const zt=nr(v,L);zt&&(v.preventDefault(),St(zt))},[St,G]),he=T(v=>{const b=J(v);!b||ot(b,l,h)||G(b)},[G,l,h]),fe=T(v=>{const b=J(v);(!b||ot(b,l,h))&&v.preventDefault()},[l,h]),me=T(v=>{const b=J(v);b&&i&&!u&&!ot(b,l,h)&&(E(b),y(!0))},[i,u,l,h,E,y]),ge=T(v=>{const b=J(v);b&&(E(b),y(!0))},[i,u,E,y]);return{endDate:u,focusedDate:I,locale:o,maxDate:h,minDate:l,monthMatrices:de,numberOfMonths:s,onClick:he,onKeyDown:le,selectedMonth:m,setFocusedDate:E,setIsFocused:y,setSelectedMonth:k,startDate:i,weekdayNames:ue,onPointerEnter:me,onFocus:ge,onPointerDown:fe}},mr=t=>{const{endDate:e,focusedDate:n,locale:r,maxDate:a,minDate:o,monthMatrices:s,numberOfMonths:c,onClick:d,onFocus:g,onKeyDown:f,onPointerDown:i,onPointerEnter:u,selectedMonth:l,setIsFocused:h,setSelectedMonth:p,startDate:m,weekdayNames:k}=fr(t);return S`<div
		class="calendar"
		@focus=${()=>h(!0)}
		@blur=${()=>h(!1)}
	>
		${rt(s,(z,y)=>`cal-${y}`,(z,y)=>[S`
					<div class="month-wrapper ${c>1?"padded":""}">
						${[lr({index:y,locale:r,numberOfMonths:c,selectedMonth:l,setSelectedMonth:p}),ar({endDate:e,focusedDate:n,locale:r,maxDate:a,minDate:o,month:z,numberOfMonths:c,onClick:d,onFocus:g,onKeyDown:f,onPointerDown:i,onPointerEnter:u,startDate:m,weekdayNames:k})]}
					</div>
				`,U(y<c-1,()=>S`<div class="separator"></div>`)])}
	</div> `};customElements.define("cosmoz-calendar",Zt(mr,{observedAttributes:["locale","number-of-months"],styleSheets:[te,hr]}));const P=t=>{const e=new Date;return e.setDate(t),e.toISOString().slice(0,10)},pr={title:"CosmozCalendar",component:"cosmoz-calendar",tags:["autodocs"]},K={name:"sv-SE Two Calendars",render:()=>S`<cosmoz-calendar
            .start=${P(12)}
            .end=${P(17)}
            locale="sv-SE"
            number-of-months="2"
        ></cosmoz-calendar>`},Z={name:"sv-SE Min Max Set",render:()=>S`<cosmoz-calendar
            .start=${P(12)}
            .end=${P(17)}
            .min=${P(9)}
            .max=${P(22)}
            locale="sv-SE"
            number-of-months="2"
        ></cosmoz-calendar>`},tt={name:"sv-SE One Calendar",render:()=>S`<cosmoz-calendar
            locale="sv-SE"
            .start=${P(12)}
            .end=${P(17)}
        ></cosmoz-calendar>`},et={name:"en-US Two Calendars",render:()=>S`<cosmoz-calendar
            locale="en-US"
            number-of-months="2"
            .start=${P(12)}
            .end=${P(17)}
        ></cosmoz-calendar>`};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'sv-SE Two Calendars',
  render: () => html\`<cosmoz-calendar
            .start=\${currentMonthDate(12)}
            .end=\${currentMonthDate(17)}
            locale="sv-SE"
            number-of-months="2"
        ></cosmoz-calendar>\`
}`,...K.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'sv-SE Min Max Set',
  render: () => html\`<cosmoz-calendar
            .start=\${currentMonthDate(12)}
            .end=\${currentMonthDate(17)}
            .min=\${currentMonthDate(9)}
            .max=\${currentMonthDate(22)}
            locale="sv-SE"
            number-of-months="2"
        ></cosmoz-calendar>\`
}`,...Z.parameters?.docs?.source}}};tt.parameters={...tt.parameters,docs:{...tt.parameters?.docs,source:{originalSource:`{
  name: 'sv-SE One Calendar',
  render: () => html\`<cosmoz-calendar
            locale="sv-SE"
            .start=\${currentMonthDate(12)}
            .end=\${currentMonthDate(17)}
        ></cosmoz-calendar>\`
}`,...tt.parameters?.docs?.source}}};et.parameters={...et.parameters,docs:{...et.parameters?.docs,source:{originalSource:`{
  name: 'en-US Two Calendars',
  render: () => html\`<cosmoz-calendar
            locale="en-US"
            number-of-months="2"
            .start=\${currentMonthDate(12)}
            .end=\${currentMonthDate(17)}
        ></cosmoz-calendar>\`
}`,...et.parameters?.docs?.source}}};const vr=["Swedish","SwedishMinMax","SwedishSingle","EnglishUs"];export{et as EnglishUs,K as Swedish,Z as SwedishMinMax,tt as SwedishSingle,vr as __namedExportsOrder,pr as default};
