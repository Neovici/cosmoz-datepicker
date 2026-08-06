import{D as le,M as he,u as C,v as R,h as dt,E as Rt,p as fe,A as jt,d as x,w as qt}from"./iframe-Bp8gKx8t.js";import"./preload-helper-PPVm8Dsz.js";let nt,Ht=0;function zt(t){nt=t}function Mt(){nt=null,Ht=0}function me(){return Ht++}const lt=Symbol("haunted.phase"),Z=Symbol("haunted.hook"),Dt=Symbol("haunted.update"),Et=Symbol("haunted.commit"),T=Symbol("haunted.effects"),B=Symbol("haunted.layoutEffects"),gt="haunted.context";class ge{update;host;virtual;[Z];[T];[B];constructor(e,n){this.update=e,this.host=n,this[Z]=new Map,this[T]=[],this[B]=[]}run(e){zt(this);let n=e();return Mt(),n}_runEffects(e){let n=this[e];zt(this);for(let r of n)r.call(this);Mt()}runEffects(){this._runEffects(T)}runLayoutEffects(){this._runEffects(B)}teardown(){this[Z].forEach(n=>{typeof n.teardown=="function"&&n.teardown(!0)})}}class be extends Error{constructor(e){const n=e?` <${e}>`:"";super(`Infinite update loop detected in component${n}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const pe=100,ve=Promise.resolve().then.bind(Promise.resolve());function Bt(){let t=[],e;function n(){e=null;let r=t;t=[];for(var a=0,o=r.length;a<o;a++)r[a]()}return function(r){t.push(r),e==null&&(e=ve(n))}}const we=Bt(),Pt=Bt();class wt{renderer;host;state;[lt];_updateQueued;_active;_updateCount;_processing;static maxUpdates=pe;constructor(e,n){this.renderer=e,this.host=n,this.state=new ge(this.update.bind(this),n),this[lt]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>wt.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new be(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,we(()=>{let e=this.handlePhase(Dt);Pt(()=>{this.handlePhase(Et,e),Pt(()=>{this.handlePhase(T),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,n){switch(this[lt]=e,e){case Et:this.commit(n),this.runEffects(B);return;case Dt:return this.render();case T:return this.runEffects(T)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}const Qt=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},ye=t=>t?.map(e=>typeof e=="string"?Qt(e):e),xe=(t,...e)=>t.flatMap((n,r)=>[n,e[r]||""]).join(""),st=xe,ke=(t="")=>t.replace(/-+([a-z])?/g,(e,n)=>n?n.toUpperCase():"");function Se(t){class e extends wt{frag;renderResult;constructor(a,o,s){super(a,s||o),this.frag=o}commit(a){this.renderResult=t(a,this.frag)}}function n(r,a,o){const s=(o||a||{}).baseElement||HTMLElement,{observedAttributes:c=[],useShadowDOM:u=!0,shadowRootInit:g={},styleSheets:h}=o||a||{},i=ye(r.styleSheets||h);class l extends s{_scheduler;static get observedAttributes(){return r.observedAttributes||c||[]}constructor(){if(super(),u===!1)this._scheduler=new e(r,this);else{const f=this.attachShadow({mode:"open",...g});i&&(f.adoptedStyleSheets=i),this._scheduler=new e(r,f,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(f,v,S){if(v===S)return;let z=S===""?!0:S;Reflect.set(this,ke(f),z)}}function d(p){let f=p,v=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return f},set(S){v&&f===S||(v=!0,f=S,this._scheduler&&this._scheduler.update())}})}const m=new Proxy(s.prototype,{getPrototypeOf(p){return p},set(p,f,v,S){let z;return f in p?(z=Object.getOwnPropertyDescriptor(p,f),z&&z.set?(z.set.call(S,v),!0):(Reflect.set(p,f,v,S),!0)):(typeof f=="symbol"||f[0]==="_"?z={enumerable:!0,configurable:!0,writable:!0,value:v}:z=d(v),Object.defineProperty(S,f,z),z.set&&z.set.call(S,v),!0)}});return Object.setPrototypeOf(l.prototype,m),l}return n}class Y{id;state;constructor(e,n){this.id=e,this.state=n}}function ze(t,...e){let n=me(),r=nt[Z],a=r.get(n);return a||(a=new t(n,nt,...e),r.set(n,a)),a.update(...e)}function F(t){return ze.bind(null,t)}function Ut(t){return F(class extends Y{callback;lastValues;values;_teardown;constructor(e,n,r,a){super(e,n),t(n,this)}update(e,n){this.callback=e,this.values=n}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,n)=>this.lastValues[n]!==e)}})}function Xt(t,e){t[T].push(e)}const bt=Ut(Xt),Me=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,De=F(class extends Y{Context;value;_ranEffect;_unsubscribe;constructor(t,e,n){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Xt(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Me(this.state.host).dispatchEvent(new CustomEvent(gt,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:a}=e;this.value=r?a:t.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function Ee(t){return e=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(gt,this)}disconnectedCallback(){this.removeEventListener(gt,this)}handleEvent(r){const{detail:a}=r;a.Context===n&&(a.value=this.value,a.unsubscribe=this.unsubscribe.bind(this,a.callback),this.listeners.add(a.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let a of this.listeners)a(r)}get value(){return this._value}},Consumer:t(function({render:r}){const a=De(n);return r(a)},{useShadowDOM:!1}),defaultValue:e};return n}}const _=F(class extends Y{value;values;constructor(t,e,n,r){super(t,e),this.value=n(),this.values=r}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),ht=(t,e)=>_(()=>t,e);function Pe(t,e){t[B].push(e)}Ut(Pe);const ft=F(class extends Y{args;constructor(t,e,n){super(t,e),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});F(class extends Y{reducer;currentState;constructor(t,e,n,r,a){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=a!==void 0?a(r):r}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const _e=/([A-Z])/gu,_t=F(class extends Y{property;eventName;constructor(t,e,n,r){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(_e,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updater(r))}update(t,e){return[this.state.host[this.property],this.updater]}resolve(t){const e=this.state.host[this.property],n=typeof t=="function"?t:void 0,r=n?n(e):t;return[e,r,n]}notify(t,e){const n=new CustomEvent(this.eventName,{detail:{value:t,updater:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(t){const[e,n,r]=this.resolve(t);this.notify(n,r).defaultPrevented||Object.is(e,n)||(this.state.host[this.property]=n)}});F(class extends Y{update(){return this.state.host}});function Oe({render:t}){const e=Se(t),n=Ee(e);return{component:e,createContext:n}}const Gt={ATTRIBUTE:1,CHILD:2},Vt=t=>(...e)=>({_$litDirective$:t,values:e});class Jt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}const{component:Kt}=Oe({render:le}),Zt=Qt(st`
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
`);const Ot=(t,e,n)=>{const r=new Map;for(let a=e;a<=n;a++)r.set(t[a],a);return r},tt=Vt(class extends Jt{constructor(t){if(super(t),t.type!==Gt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);const a=[],o=[];let s=0;for(const c of t)a[s]=r?r(c,s):s,o[s]=n(c,s),s++;return{values:o,keys:a}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){const a=he(t),{values:o,keys:s}=this.dt(e,n,r);if(!Array.isArray(a))return this.ut=s,o;const c=this.ut??=[],u=[];let g,h,i=0,l=a.length-1,d=0,m=o.length-1;for(;i<=l&&d<=m;)if(a[i]===null)i++;else if(a[l]===null)l--;else if(c[i]===s[d])u[d]=C(a[i],o[d]),i++,d++;else if(c[l]===s[m])u[m]=C(a[l],o[m]),l--,m--;else if(c[i]===s[m])u[m]=C(a[i],o[m]),R(t,u[m+1],a[i]),i++,m--;else if(c[l]===s[d])u[d]=C(a[l],o[d]),R(t,a[i],a[l]),l--,d++;else if(g===void 0&&(g=Ot(s,d,m),h=Ot(c,i,l)),g.has(c[i]))if(g.has(c[l])){const p=h.get(s[d]),f=p!==void 0?a[p]:null;if(f===null){const v=R(t,a[i]);C(v,o[d]),u[d]=v}else u[d]=C(f,o[d]),R(t,a[i],f),a[p]=null;d++}else dt(a[l]),l--;else dt(a[i]),i++;for(;d<=m;){const p=R(t,u[m+1]);C(p,o[d]),u[d++]=p}for(;i<=l;){const p=a[i++];p!==null&&dt(p)}return this.ut=s,fe(t,u),Rt}});function Q(t,e,n){return t?e(t):n?.(t)}const te=6048e5,Ce=864e5,Ct=Symbol.for("constructDateFrom");function M(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&Ct in t?t[Ct](e):t instanceof Date?new t.constructor(e):new Date(e)}function w(t,e){return M(e||t,t)}function rt(t,e,n){const r=w(t,n?.in);return isNaN(e)?M(t,NaN):(e&&r.setDate(r.getDate()+e),r)}function O(t,e,n){const r=w(t,n?.in);if(isNaN(e))return M(t,NaN);if(!e)return r;const a=r.getDate(),o=M(t,r.getTime());o.setMonth(r.getMonth()+e+1,0);const s=o.getDate();return a>=s?o:(r.setFullYear(o.getFullYear(),o.getMonth(),a),r)}let $e={};function it(){return $e}function U(t,e){const n=it(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=w(t,e?.in),o=a.getDay(),s=(o<r?7:0)+o-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function at(t,e){return U(t,{...e,weekStartsOn:1})}function ee(t,e){const n=w(t,e?.in),r=n.getFullYear(),a=M(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=at(a),s=M(n,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const c=at(s);return n.getTime()>=o.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function $t(t){const e=w(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function ne(t,...e){const n=M.bind(null,e.find(r=>typeof r=="object"));return e.map(n)}function ot(t,e){const n=w(t,e?.in);return n.setHours(0,0,0,0),n}function Te(t,e,n){const[r,a]=ne(n?.in,t,e),o=ot(r),s=ot(a),c=+o-$t(o),u=+s-$t(s);return Math.round((c-u)/Ce)}function We(t,e){const n=ee(t,e),r=M(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),at(r)}function Ye(t){return M(t,Date.now())}function W(t,e,n){const[r,a]=ne(n?.in,t,e);return+ot(r)==+ot(a)}function Fe(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Ne(t){return!(!Fe(t)&&typeof t!="number"||isNaN(+w(t)))}function re(t,e){const n=w(t,e?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(23,59,59,999),n}function yt(t,e){const n=w(t,e?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function Ae(t,e){const n=w(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Ie={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Le=(t,e,n)=>{let r;const a=Ie[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function mt(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const Re={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},je={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},qe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},He={date:mt({formats:Re,defaultWidth:"full"}),time:mt({formats:je,defaultWidth:"full"}),dateTime:mt({formats:qe,defaultWidth:"full"})},Be={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Qe=(t,e,n,r)=>Be[t];function j(t){return(e,n)=>{const r=n?.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,c=n?.width?String(n.width):s;a=t.formattingValues[c]||t.formattingValues[s]}else{const s=t.defaultWidth,c=n?.width?String(n.width):t.defaultWidth;a=t.values[c]||t.values[s]}const o=t.argumentCallback?t.argumentCallback(e):e;return a[o]}}const Ue={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Xe={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ge={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ve={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Je={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ke={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ze=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},tn={ordinalNumber:Ze,era:j({values:Ue,defaultWidth:"wide"}),quarter:j({values:Xe,defaultWidth:"wide",argumentCallback:t=>t-1}),month:j({values:Ge,defaultWidth:"wide"}),day:j({values:Ve,defaultWidth:"wide"}),dayPeriod:j({values:Je,defaultWidth:"wide",formattingValues:Ke,defaultFormattingWidth:"wide"})};function q(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const s=o[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(c)?nn(c,i=>i.test(s)):en(c,i=>i.test(s));let g;g=t.valueCallback?t.valueCallback(u):u,g=n.valueCallback?n.valueCallback(g):g;const h=e.slice(s.length);return{value:g,rest:h}}}function en(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function nn(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function rn(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],o=e.match(t.parsePattern);if(!o)return null;let s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const c=e.slice(a.length);return{value:s,rest:c}}}const an=/^(\d+)(th|st|nd|rd)?/i,on=/\d+/i,sn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},cn={any:[/^b/i,/^(a|c)/i]},un={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},dn={any:[/1/i,/2/i,/3/i,/4/i]},ln={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},hn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},fn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},mn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},gn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},bn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},pn={ordinalNumber:rn({matchPattern:an,parsePattern:on,valueCallback:t=>parseInt(t,10)}),era:q({matchPatterns:sn,defaultMatchWidth:"wide",parsePatterns:cn,defaultParseWidth:"any"}),quarter:q({matchPatterns:un,defaultMatchWidth:"wide",parsePatterns:dn,defaultParseWidth:"any",valueCallback:t=>t+1}),month:q({matchPatterns:ln,defaultMatchWidth:"wide",parsePatterns:hn,defaultParseWidth:"any"}),day:q({matchPatterns:fn,defaultMatchWidth:"wide",parsePatterns:mn,defaultParseWidth:"any"}),dayPeriod:q({matchPatterns:gn,defaultMatchWidth:"any",parsePatterns:bn,defaultParseWidth:"any"})},vn={code:"en-US",formatDistance:Le,formatLong:He,formatRelative:Qe,localize:tn,match:pn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function wn(t,e){const n=w(t,e?.in);return Te(n,Ae(n))+1}function yn(t,e){const n=w(t,e?.in),r=+at(n)-+We(n);return Math.round(r/te)+1}function ae(t,e){const n=w(t,e?.in),r=n.getFullYear(),a=it(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,s=M(e?.in||t,0);s.setFullYear(r+1,0,o),s.setHours(0,0,0,0);const c=U(s,e),u=M(e?.in||t,0);u.setFullYear(r,0,o),u.setHours(0,0,0,0);const g=U(u,e);return+n>=+c?r+1:+n>=+g?r:r-1}function xn(t,e){const n=it(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=ae(t,e),o=M(e?.in||t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),U(o,e)}function kn(t,e){const n=w(t,e?.in),r=+U(n,e)-+xn(n,e);return Math.round(r/te)+1}function b(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const P={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return b(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):b(n+1,2)},d(t,e){return b(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return n==="am"?"a.m.":"p.m."}},h(t,e){return b(t.getHours()%12||12,e.length)},H(t,e){return b(t.getHours(),e.length)},m(t,e){return b(t.getMinutes(),e.length)},s(t,e){return b(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return b(a,e.length)}},L={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Tt={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return P.y(t,e)},Y:function(t,e,n,r){const a=ae(t,r),o=a>0?a:1-a;if(e==="YY"){const s=o%100;return b(s,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):b(o,e.length)},R:function(t,e){const n=ee(t);return b(n,e.length)},u:function(t,e){const n=t.getFullYear();return b(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return b(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return b(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return P.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return b(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=kn(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):b(a,e.length)},I:function(t,e,n){const r=yn(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):b(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):P.d(t,e)},D:function(t,e,n){const r=wn(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):b(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return b(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return b(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return b(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=L.noon:r===0?a=L.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=L.evening:r>=12?a=L.afternoon:r>=4?a=L.morning:a=L.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return P.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):P.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):b(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):b(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):P.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):P.s(t,e)},S:function(t,e){return P.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return Yt(r);case"XXXX":case"XX":return $(r);default:return $(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return Yt(r);case"xxxx":case"xx":return $(r);default:return $(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Wt(r,":");default:return"GMT"+$(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Wt(r,":");default:return"GMT"+$(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return b(r,e.length)},T:function(t,e,n){return b(+t,e.length)}};function Wt(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return o===0?n+String(a):n+String(a)+e+b(o,2)}function Yt(t,e){return t%60===0?(t>0?"-":"+")+b(Math.abs(t)/60,2):$(t,e)}function $(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=b(Math.trunc(r/60),2),o=b(r%60,2);return n+a+e+o}const Ft=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},oe=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Sn=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return Ft(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",Ft(r,e)).replace("{{time}}",oe(a,e))},zn={p:oe,P:Sn},Mn=/^D+$/,Dn=/^Y+$/,En=["D","DD","YY","YYYY"];function Pn(t){return Mn.test(t)}function _n(t){return Dn.test(t)}function On(t,e,n){const r=Cn(t,e,n);if(console.warn(r),En.includes(t))throw new RangeError(r)}function Cn(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const $n=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Tn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Wn=/^'([^]*?)'?$/,Yn=/''/g,Fn=/[a-zA-Z]/;function et(t,e,n){const r=it(),a=r.locale??vn,o=r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,s=r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=w(t,n?.in);if(!Ne(c))throw new RangeError("Invalid time value");let u=e.match(Tn).map(h=>{const i=h[0];if(i==="p"||i==="P"){const l=zn[i];return l(h,a.formatLong)}return h}).join("").match($n).map(h=>{if(h==="''")return{isToken:!1,value:"'"};const i=h[0];if(i==="'")return{isToken:!1,value:Nn(h)};if(Tt[i])return{isToken:!0,value:h};if(i.match(Fn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return{isToken:!1,value:h}});a.localize.preprocessor&&(u=a.localize.preprocessor(c,u));const g={firstWeekContainsDate:o,weekStartsOn:s,locale:a};return u.map(h=>{if(!h.isToken)return h.value;const i=h.value;(_n(i)||Pn(i))&&On(i,e,String(t));const l=Tt[i[0]];return l(c,i,a.localize,g)}).join("")}function Nn(t){const e=t.match(Wn);return e?e[1].replace(Yn,"'"):t}function xt(t,e){return+w(t)>+w(e)}function ct(t,e){return+w(t)<+w(e)}function An(t,e){return W(M(t,t),Ye(t))}function Nt(t,e,n){const r=+w(t,n?.in),[a,o]=[+w(e.start,n?.in),+w(e.end,n?.in)].sort((s,c)=>s-c);return r>=a&&r<=o}function pt(t,e,n){return rt(t,-e,n)}function se(t,e,n){return O(t,-e,n)}const In=Vt(class extends Jt{constructor(t){if(super(t),t.type!==Gt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}const n=t.element.classList;for(const r of this.st)r in e||(n.remove(r),this.st.delete(r));for(const r in e){const a=!!e[r];a===this.st.has(r)||this.nt?.has(r)||(a?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return Rt}});const D=t=>t??jt,ie=t=>(new Intl.Locale(t).getWeekInfo?.()?.firstDay??1)%7,Ln=(t,e)=>{const n=ie(e);return(t.getDay()-n+7)%7},Rn=t=>{const e=ie(t),n=new Intl.DateTimeFormat(t,{weekday:"short"});return Array.from({length:7},(a,o)=>n.format(new Date(2023,0,1+o+e)))},jn=(t,e)=>Intl.DateTimeFormat(e,{month:"long"}).format(t),qn=(t,e)=>pt(t,Ln(t,e)),Hn=(t,e)=>{const n=yt(t),r=qn(n,e),a=6,o=[];for(let s=0;s<a;s++){const c=[];for(let u=0;u<7;u++){const g=rt(r,s*7+u),h={month:g.getMonth(),day:g.getDate(),iso:g.toISOString(),isToday:An(g),isCurrentMonth:n.getMonth()===g.getMonth()};c.push(h)}o.push(c)}return o},Bn=(t,e,n)=>!!(e&&W(t,e)||n&&W(t,n)),Qn=(t,e,n,r)=>!!(n&&e&&Nt(t,{start:e,end:n})||!n&&r&&e&&Nt(t,{start:e,end:r})),vt=(t,e,n)=>!!(!t.isCurrentMonth||e&&ct(new Date(t.iso),e)||n&&xt(new Date(t.iso),n)),At=(t,e,n)=>vt(t,e,n)?"true":void 0,Un=(t,e)=>e&&W(new Date(t.iso),e)?!0:void 0,Xn=(t,e)=>e&&W(new Date(t.iso),e)?!0:void 0,It=(t,e)=>ct(t,yt(e)),Lt=(t,e,n)=>xt(t,re(O(e,n-1))),X=(t,e,n)=>e&&ct(t,e)?e:n&&xt(t,n)?n:t,Gn=(t,e)=>({ArrowLeft:pt(e,1),ArrowRight:rt(e,1),ArrowUp:pt(e,7),ArrowDown:rt(e,7)})[t.key],Vn=({day:t,endDate:e,focusedDate:n,locale:r,maxDate:a,minDate:o,numberOfMonths:s,onClick:c,setFocusedDate:u,setIsFocused:g,startDate:h})=>{const i=new Date(t.iso);return x`
		<td
			class="${Qn(i,h,e,n)?"in-range":""}"
		>
			<div
				class=${In({"date-cell":!0,"selected-cell":Bn(i,h,e),"focused-highlighted-cell":!e&&!!h&&W(i,n),"today-cell":t.isToday&&t.isCurrentMonth,"other-month-cell":!t.isCurrentMonth,"hidden-cell":!t.isCurrentMonth&&s>1})}
				role="button"
				tabindex=${W(i,n)?"0":"-1"}
				aria-label=${i.toLocaleString(r,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}
				aria-disabled=${D(At(t,o,a))}
				data-date=${D(t.isCurrentMonth?et(i,"yyyy-MM-dd"):void 0)}
				data-disabled=${D(At(t,o,a))}
				data-start=${D(Un(t,h))}
				data-end=${D(Xn(t,e))}
				@pointerdown=${l=>{vt(t,o,a)&&l.preventDefault()}}
				@click=${()=>!vt(t,o,a)&&c(i)}
				@focus=${()=>{u(i),g(!0)}}
			>
				${t.day}
			</div>
		</td>
	`},Jn=({endDate:t,focusedDate:e,locale:n,maxDate:r,minDate:a,month:o,numberOfMonths:s,onClick:c,onKeyDown:u,setFocusedDate:g,setIsFocused:h,startDate:i,weekdayNames:l})=>x`
	<table @keydown=${u}>
		<thead>
			<tr>
				${tt(l,d=>d,d=>x`<th><div class="weekday">${d}</div></th>`)}
			</tr>
		</thead>
		<tbody>
			${tt(o,(d,m)=>`month-${m}`,d=>x`
					<tr>
						${tt(d,m=>m.iso,m=>Vn({day:m,endDate:t,focusedDate:e,locale:n,maxDate:r,minDate:a,numberOfMonths:s,onClick:c,setFocusedDate:g,setIsFocused:h,startDate:i}))}
					</tr>
				`)}
		</tbody>
	</table>
`,Kn=st`
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
`,Zn=st`
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
		${Kn}
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
`,tr=["variant","size","disabled","full-width","type","value","href","target","rel","download"],er=t=>{const e=t.hasAttribute("disabled"),n=t.getAttribute("type")||"button",r=t.getAttribute("href");bt(()=>{const o=s=>{t.hasAttribute("disabled")&&s.stopImmediatePropagation()};return t.addEventListener("click",o,{capture:!0}),()=>t.removeEventListener("click",o,{capture:!0})},[]);const a=x`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(r!=null){const o=t.getAttribute("target"),s=t.getAttribute("rel"),c=t.getAttribute("download");return x`
			<a
				href=${r}
				class="button"
				part="button"
				aria-disabled=${e?"true":jt}
				target=${D(o)}
				rel=${D(s)}
				download=${D(c)}
				>${a}</a
			>
		`}return x`
		<button type=${n} class="button" ?disabled=${e} part="button">
			${a}
		</button>
	`};customElements.define("cosmoz-button",Kt(er,{observedAttributes:tr,styleSheets:[Zt,Zn],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const nr=({slot:t,title:e,className:n,width:r="24",height:a="24",styles:o}={})=>x`
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
    ${Q(e,()=>qt`<title>${e}</title>`)}
    <path d="m15 18-6-6 6-6" />
  </svg>
`,rr=({slot:t,title:e,className:n,width:r="24",height:a="24",styles:o}={})=>x`
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
    ${Q(e,()=>qt`<title>${e}</title>`)}
    <path d="m9 18 6-6-6-6" />
  </svg>
`,ar=({index:t,locale:e,numberOfMonths:n,selectedMonth:r,setSelectedMonth:a})=>x`
	<header>
		${Q(t===0,()=>x`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="prev-button"
					@click=${()=>a(se(r,n))}
					>${nr()}</cosmoz-button
				>
			`)}
		<h2 class="month-label">
			${jn(O(r,t),e)}
			${O(r,t).getFullYear()}
		</h2>
		${Q(t===n-1,()=>x`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="next-button"
					@click=${()=>a(O(r,n))}
					>${rr()}</cosmoz-button
				>
			`)}
	</header>
`,or=st`
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

	td.in-range:not(:has(.hidden-cell)) {
		background: var(--cz-color-bg-secondary);
		border-radius: 0;
	}

	td.in-range:has(.date-cell[data-start]) {
		border-top-left-radius: var(--cz-radius-full);
		border-bottom-left-radius: var(--cz-radius-full);
	}

	td.in-range:has(.date-cell[data-end]) {
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

	.date-cell:not(.selected-cell, .focused-highlighted-cell):focus-within {
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
`,sr={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},ir=t=>typeof t=="string"&&sr.isoBasic.test(t)?new Date(`${t}T00:00`):new Date(t),H=t=>{if(t==null)return;if(t instanceof Date&&!isNaN(t.getTime()))return t;if(!(typeof t=="number"||typeof t=="string"))return;const e=ir(t);if(!(e instanceof Date&&isNaN(e.getTime())))return e},cr=t=>{const{locale:e,numberOfMonths:n,min:r,max:a}=t,o=e??navigator.language,s=Number(n??1),[c,u]=_t("start"),[g,h]=_t("end"),i=_(()=>H(c),[c]),l=_(()=>H(g),[g]),d=_(()=>H(r),[r]),m=_(()=>H(a),[a]),p=_(()=>X(i??new Date,d,m),[i,d,m]),[f,v]=ft(p),[S,z]=ft(!1),[N,A]=ft(p),ce=_(()=>Rn(o),[o]);bt(()=>{S&&t.shadowRoot?.querySelector(`[data-date="${et(N,"yyyy-MM-dd")}"]`)?.focus()},[N,t,S]);const ue=_(()=>{const y=[];for(let k=0;k<s;k++)y.push(Hn(O(f,k),o));return y},[f,o,s]),ut=ht(y=>{const k=et(y,"yyyy-MM-dd");if(!i&&!l){u(k);return}if(i&&!l&&ct(y,i)){u(k),h(et(i,"yyyy-MM-dd"));return}if(i&&!l){h(k);return}i&&l&&(u(k),h(void 0))},[i,l,u,h]),kt=ht(y=>{const k=X(y,d,m);It(k,f)&&v(I=>se(I,s)),Lt(k,f,s)&&v(I=>O(I,s)),A(k)},[d,m,s,f,A,v]);bt(()=>{if(It(N,f)){const y=X(yt(f),d,m);A(y)}if(Lt(N,f,s)){const y=X(re(O(f,s-1)),d,m);A(y)}},[N,m,d,s,f,A]);const de=ht(y=>{if(!(y.target instanceof Element))return;const k=y.target.closest("[data-date]");if(!k?.dataset.date||k.dataset.disabled==="true")return;const I=H(k.dataset.date);if(y.key==="Enter"||y.key===" "){y.preventDefault(),ut(I);return}const St=Gn(y,I);St&&(y.preventDefault(),kt(St))},[kt,ut]);return{endDate:l,focusedDate:N,locale:o,maxDate:m,minDate:d,monthMatrices:ue,numberOfMonths:s,onClick:ut,onKeyDown:de,selectedMonth:f,setFocusedDate:A,setIsFocused:z,setSelectedMonth:v,startDate:i,weekdayNames:ce}},ur=t=>{const{endDate:e,focusedDate:n,locale:r,maxDate:a,minDate:o,monthMatrices:s,numberOfMonths:c,onClick:u,onKeyDown:g,selectedMonth:h,setFocusedDate:i,setIsFocused:l,setSelectedMonth:d,startDate:m,weekdayNames:p}=cr(t);return x`<div
		class="calendar"
		@focus=${()=>l(!0)}
		@blur=${()=>l(!1)}
	>
		${tt(s,(f,v)=>`cal-${v}`,(f,v)=>[x`
					<div class="month-wrapper ${c>1?"padded":""}">
						${[ar({index:v,locale:r,numberOfMonths:c,selectedMonth:h,setSelectedMonth:d}),Jn({endDate:e,focusedDate:n,locale:r,maxDate:a,minDate:o,month:f,numberOfMonths:c,onClick:u,onKeyDown:g,setFocusedDate:i,setIsFocused:l,startDate:m,weekdayNames:p})]}
					</div>
				`,Q(v<c-1,()=>x`<div class="separator"></div>`)])}
	</div> `};customElements.define("cosmoz-calendar",Kt(ur,{observedAttributes:["locale","number-of-months"],styleSheets:[Zt,or]}));const E=t=>{const e=new Date;return e.setDate(t),e.toISOString().slice(0,10)},hr={title:"CosmozCalendar",component:"cosmoz-calendar",tags:["autodocs"]},G={name:"sv-SE Two Calendars",render:()=>x`<cosmoz-calendar
            .start=${E(12)}
            .end=${E(17)}
            locale="sv-SE"
            number-of-months="2"
        ></cosmoz-calendar>`},V={name:"sv-SE Min Max Set",render:()=>x`<cosmoz-calendar
            .start=${E(12)}
            .end=${E(17)}
            .min=${E(9)}
            .max=${E(22)}
            locale="sv-SE"
            number-of-months="2"
        ></cosmoz-calendar>`},J={name:"sv-SE One Calendar",render:()=>x`<cosmoz-calendar
            locale="sv-SE"
            .start=${E(12)}
            .end=${E(17)}
        ></cosmoz-calendar>`},K={name:"en-US Two Calendars",render:()=>x`<cosmoz-calendar
            locale="en-US"
            number-of-months="2"
            .start=${E(12)}
            .end=${E(17)}
        ></cosmoz-calendar>`};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'sv-SE Two Calendars',
  render: () => html\`<cosmoz-calendar
            .start=\${currentMonthDate(12)}
            .end=\${currentMonthDate(17)}
            locale="sv-SE"
            number-of-months="2"
        ></cosmoz-calendar>\`
}`,...G.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'sv-SE Min Max Set',
  render: () => html\`<cosmoz-calendar
            .start=\${currentMonthDate(12)}
            .end=\${currentMonthDate(17)}
            .min=\${currentMonthDate(9)}
            .max=\${currentMonthDate(22)}
            locale="sv-SE"
            number-of-months="2"
        ></cosmoz-calendar>\`
}`,...V.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'sv-SE One Calendar',
  render: () => html\`<cosmoz-calendar
            locale="sv-SE"
            .start=\${currentMonthDate(12)}
            .end=\${currentMonthDate(17)}
        ></cosmoz-calendar>\`
}`,...J.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'en-US Two Calendars',
  render: () => html\`<cosmoz-calendar
            locale="en-US"
            number-of-months="2"
            .start=\${currentMonthDate(12)}
            .end=\${currentMonthDate(17)}
        ></cosmoz-calendar>\`
}`,...K.parameters?.docs?.source}}};const fr=["Swedish","SwedishMinMax","SwedishSingle","EnglishUs"];export{K as EnglishUs,G as Swedish,V as SwedishMinMax,J as SwedishSingle,fr as __namedExportsOrder,hr as default};
