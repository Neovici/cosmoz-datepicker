import{B as V,m as J,o as R,e as K,D as Z,A as tt,M as et,q as O,v as S,s as F,E as nt,p as rt}from"./iframe-C3mFOlT7.js";const $=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},at=t=>t?.map(e=>typeof e=="string"?$(e):e),ot=(t,...e)=>t.flatMap((n,r)=>[n,e[r]||""]).join(""),it=ot,st=(t="")=>t.replace(/-+([a-z])?/g,(e,n)=>n?n.toUpperCase():"");function ut(t){class e extends V{frag;renderResult;constructor(a,o,i){super(a,i||o),this.frag=o}commit(a){this.renderResult=t(a,this.frag)}}function n(r,a,o){const i=(o||a||{}).baseElement||HTMLElement,{observedAttributes:u=[],useShadowDOM:d=!0,shadowRootInit:b={},styleSheets:f}=o||a||{},s=at(r.styleSheets||f);class l extends i{_scheduler;static get observedAttributes(){return r.observedAttributes||u||[]}constructor(){if(super(),d===!1)this._scheduler=new e(r,this);else{const m=this.attachShadow({mode:"open",...b});s&&(m.adoptedStyleSheets=s),this._scheduler=new e(r,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,p,v){if(p===v)return;let M=v===""?!0:v;Reflect.set(this,st(m),M)}}function h(g){let m=g,p=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(v){p&&m===v||(p=!0,m=v,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(i.prototype,{getPrototypeOf(g){return g},set(g,m,p,v){let M;return m in g?(M=Object.getOwnPropertyDescriptor(g,m),M&&M.set?(M.set.call(v,p),!0):(Reflect.set(g,m,p,v),!0)):(typeof m=="symbol"||m[0]==="_"?M={enumerable:!0,configurable:!0,writable:!0,value:p}:M=h(p),Object.defineProperty(v,m,M),M.set&&M.set.call(v,p),!0)}});return Object.setPrototypeOf(l.prototype,w),l}return n}function ct(t){return e=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(R,this)}disconnectedCallback(){this.removeEventListener(R,this)}handleEvent(r){const{detail:a}=r;a.Context===n&&(a.value=this.value,a.unsubscribe=this.unsubscribe.bind(this,a.callback),this.listeners.add(a.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let a of this.listeners)a(r)}get value(){return this._value}},Consumer:t(function({render:r}){const a=J(n);return r(a)},{useShadowDOM:!1}),defaultValue:e};return n}}const Pe=(t,e)=>K(()=>t,e);function dt({render:t}){const e=ut(t),n=ct(e);return{component:e,createContext:n}}const lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ht=t=>(...e)=>({_$litDirective$:t,values:e});class ft{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}const{component:xe}=dt({render:Z}),Oe=$(it`
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
`);const ke=t=>t??tt;const q=(t,e,n)=>{const r=new Map;for(let a=e;a<=n;a++)r.set(t[a],a);return r},De=ht(class extends ft{constructor(t){if(super(t),t.type!==lt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);const a=[],o=[];let i=0;for(const u of t)a[i]=r?r(u,i):i,o[i]=n(u,i),i++;return{values:o,keys:a}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){const a=et(t),{values:o,keys:i}=this.dt(e,n,r);if(!Array.isArray(a))return this.ut=i,o;const u=this.ut??=[],d=[];let b,f,s=0,l=a.length-1,h=0,w=o.length-1;for(;s<=l&&h<=w;)if(a[s]===null)s++;else if(a[l]===null)l--;else if(u[s]===i[h])d[h]=O(a[s],o[h]),s++,h++;else if(u[l]===i[w])d[w]=O(a[l],o[w]),l--,w--;else if(u[s]===i[w])d[w]=O(a[s],o[w]),S(t,d[w+1],a[s]),s++,w--;else if(u[l]===i[h])d[h]=O(a[l],o[h]),S(t,a[s],a[l]),l--,h++;else if(b===void 0&&(b=q(i,h,w),f=q(u,s,l)),b.has(u[s]))if(b.has(u[l])){const g=f.get(i[h]),m=g!==void 0?a[g]:null;if(m===null){const p=S(t,a[s]);O(p,o[h]),d[h]=p}else d[h]=O(m,o[h]),S(t,a[s],m),a[g]=null;h++}else F(a[l]),l--;else F(a[s]),s++;for(;h<=w;){const g=S(t,d[w+1]);O(g,o[h]),d[h++]=g}for(;s<=l;){const g=a[s++];g!==null&&F(g)}return this.ut=i,rt(t,d),nt}}),Q=6048e5,mt=864e5,A=Symbol.for("constructDateFrom");function P(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&A in t?t[A](e):t instanceof Date?new t.constructor(e):new Date(e)}function y(t,e){return P(e||t,t)}function Se(t,e,n){const r=y(t,n?.in);return isNaN(e)?P(t,NaN):(e&&r.setDate(r.getDate()+e),r)}function We(t,e,n){const r=y(t,n?.in);if(isNaN(e))return P(t,NaN);if(!e)return r;const a=r.getDate(),o=P(t,r.getTime());o.setMonth(r.getMonth()+e+1,0);const i=o.getDate();return a>=i?o:(r.setFullYear(o.getFullYear(),o.getMonth(),a),r)}let gt={};function _(){return gt}function C(t,e){const n=_(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=y(t,e?.in),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function Y(t,e){return C(t,{...e,weekStartsOn:1})}function X(t,e){const n=y(t,e?.in),r=n.getFullYear(),a=P(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=Y(a),i=P(n,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const u=Y(i);return n.getTime()>=o.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function H(t){const e=y(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function I(t,...e){const n=P.bind(null,e.find(r=>typeof r=="object"));return e.map(n)}function E(t,e){const n=y(t,e?.in);return n.setHours(0,0,0,0),n}function bt(t,e,n){const[r,a]=I(n?.in,t,e),o=E(r),i=E(a),u=+o-H(o),d=+i-H(i);return Math.round((u-d)/mt)}function wt(t,e){const n=X(t,e),r=P(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),Y(r)}function Te(t,e,n){const[r,a]=I(n?.in,t,e);return+E(r)==+E(a)}function yt(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function pt(t){return!(!yt(t)&&typeof t!="number"||isNaN(+y(t)))}function Ce(t,e){const n=y(t,e?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function vt(t,e){const n=y(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Mt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Pt=(t,e,n)=>{let r;const a=Mt[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function N(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const xt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ot={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},kt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Dt={date:N({formats:xt,defaultWidth:"full"}),time:N({formats:Ot,defaultWidth:"full"}),dateTime:N({formats:kt,defaultWidth:"full"})},St={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Wt=(t,e,n,r)=>St[t];function W(t){return(e,n)=>{const r=n?.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const i=t.defaultFormattingWidth||t.defaultWidth,u=n?.width?String(n.width):i;a=t.formattingValues[u]||t.formattingValues[i]}else{const i=t.defaultWidth,u=n?.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[i]}const o=t.argumentCallback?t.argumentCallback(e):e;return a[o]}}const Tt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ct={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Yt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Et={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},_t={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ft={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Nt=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Rt={ordinalNumber:Nt,era:W({values:Tt,defaultWidth:"wide"}),quarter:W({values:Ct,defaultWidth:"wide",argumentCallback:t=>t-1}),month:W({values:Yt,defaultWidth:"wide"}),day:W({values:Et,defaultWidth:"wide"}),dayPeriod:W({values:_t,defaultWidth:"wide",formattingValues:Ft,defaultFormattingWidth:"wide"})};function T(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(u)?At(u,s=>s.test(i)):qt(u,s=>s.test(i));let b;b=t.valueCallback?t.valueCallback(d):d,b=n.valueCallback?n.valueCallback(b):b;const f=e.slice(i.length);return{value:b,rest:f}}}function qt(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function At(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Ht(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],o=e.match(t.parsePattern);if(!o)return null;let i=t.valueCallback?t.valueCallback(o[0]):o[0];i=n.valueCallback?n.valueCallback(i):i;const u=e.slice(a.length);return{value:i,rest:u}}}const jt=/^(\d+)(th|st|nd|rd)?/i,Lt=/\d+/i,zt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Bt={any:[/^b/i,/^(a|c)/i]},$t={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Qt={any:[/1/i,/2/i,/3/i,/4/i]},Xt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},It={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Gt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ut={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Vt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Jt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Kt={ordinalNumber:Ht({matchPattern:jt,parsePattern:Lt,valueCallback:t=>parseInt(t,10)}),era:T({matchPatterns:zt,defaultMatchWidth:"wide",parsePatterns:Bt,defaultParseWidth:"any"}),quarter:T({matchPatterns:$t,defaultMatchWidth:"wide",parsePatterns:Qt,defaultParseWidth:"any",valueCallback:t=>t+1}),month:T({matchPatterns:Xt,defaultMatchWidth:"wide",parsePatterns:It,defaultParseWidth:"any"}),day:T({matchPatterns:Gt,defaultMatchWidth:"wide",parsePatterns:Ut,defaultParseWidth:"any"}),dayPeriod:T({matchPatterns:Vt,defaultMatchWidth:"any",parsePatterns:Jt,defaultParseWidth:"any"})},Zt={code:"en-US",formatDistance:Pt,formatLong:Dt,formatRelative:Wt,localize:Rt,match:Kt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function te(t,e){const n=y(t,e?.in);return bt(n,vt(n))+1}function ee(t,e){const n=y(t,e?.in),r=+Y(n)-+wt(n);return Math.round(r/Q)+1}function G(t,e){const n=y(t,e?.in),r=n.getFullYear(),a=_(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=P(e?.in||t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const u=C(i,e),d=P(e?.in||t,0);d.setFullYear(r,0,o),d.setHours(0,0,0,0);const b=C(d,e);return+n>=+u?r+1:+n>=+b?r:r-1}function ne(t,e){const n=_(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=G(t,e),o=P(e?.in||t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),C(o,e)}function re(t,e){const n=y(t,e?.in),r=+C(n,e)-+ne(n,e);return Math.round(r/Q)+1}function c(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const x={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return c(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):c(n+1,2)},d(t,e){return c(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return n==="am"?"a.m.":"p.m."}},h(t,e){return c(t.getHours()%12||12,e.length)},H(t,e){return c(t.getHours(),e.length)},m(t,e){return c(t.getMinutes(),e.length)},s(t,e){return c(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return c(a,e.length)}},D={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},j={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return x.y(t,e)},Y:function(t,e,n,r){const a=G(t,r),o=a>0?a:1-a;if(e==="YY"){const i=o%100;return c(i,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):c(o,e.length)},R:function(t,e){const n=X(t);return c(n,e.length)},u:function(t,e){const n=t.getFullYear();return c(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return c(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return c(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return x.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return c(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=re(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):c(a,e.length)},I:function(t,e,n){const r=ee(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):c(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):x.d(t,e)},D:function(t,e,n){const r=te(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):c(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return c(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return c(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return c(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=D.noon:r===0?a=D.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=D.evening:r>=12?a=D.afternoon:r>=4?a=D.morning:a=D.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return x.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):x.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):x.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):x.s(t,e)},S:function(t,e){return x.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return z(r);case"XXXX":case"XX":return k(r);default:return k(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return z(r);case"xxxx":case"xx":return k(r);default:return k(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+L(r,":");default:return"GMT"+k(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+L(r,":");default:return"GMT"+k(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return c(r,e.length)},T:function(t,e,n){return c(+t,e.length)}};function L(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return o===0?n+String(a):n+String(a)+e+c(o,2)}function z(t,e){return t%60===0?(t>0?"-":"+")+c(Math.abs(t)/60,2):k(t,e)}function k(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=c(Math.trunc(r/60),2),o=c(r%60,2);return n+a+e+o}const B=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},U=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},ae=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return B(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",B(r,e)).replace("{{time}}",U(a,e))},oe={p:U,P:ae},ie=/^D+$/,se=/^Y+$/,ue=["D","DD","YY","YYYY"];function ce(t){return ie.test(t)}function de(t){return se.test(t)}function le(t,e,n){const r=he(t,e,n);if(console.warn(r),ue.includes(t))throw new RangeError(r)}function he(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const fe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,me=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ge=/^'([^]*?)'?$/,be=/''/g,we=/[a-zA-Z]/;function Ye(t,e,n){const r=_(),a=r.locale??Zt,o=r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=r.weekStartsOn??r.locale?.options?.weekStartsOn??0,u=y(t,n?.in);if(!pt(u))throw new RangeError("Invalid time value");let d=e.match(me).map(f=>{const s=f[0];if(s==="p"||s==="P"){const l=oe[s];return l(f,a.formatLong)}return f}).join("").match(fe).map(f=>{if(f==="''")return{isToken:!1,value:"'"};const s=f[0];if(s==="'")return{isToken:!1,value:ye(f)};if(j[s])return{isToken:!0,value:f};if(s.match(we))throw new RangeError("Format string contains an unescaped latin alphabet character `"+s+"`");return{isToken:!1,value:f}});a.localize.preprocessor&&(d=a.localize.preprocessor(u,d));const b={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return d.map(f=>{if(!f.isToken)return f.value;const s=f.value;(de(s)||ce(s))&&le(s,e,String(t));const l=j[s[0]];return l(u,s,a.localize,b)}).join("")}function ye(t){const e=t.match(ge);return e?e[1].replace(be,"'"):t}const pe={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},ve=t=>typeof t=="string"&&pe.isoBasic.test(t)?new Date(`${t}T00:00`):new Date(t),Ee=t=>{if(t==null)return;if(t instanceof Date&&!isNaN(t.getTime()))return t;if(!(typeof t=="number"||typeof t=="string"))return;const e=ve(t);if(!(e instanceof Date&&isNaN(e.getTime())))return e};export{Se as a,We as b,P as c,lt as d,ht as e,Ye as f,it as g,Ee as h,ft as i,Te as j,xe as k,De as l,vt as m,Oe as n,ke as o,I as p,Ce as s,y as t,Pe as u};
