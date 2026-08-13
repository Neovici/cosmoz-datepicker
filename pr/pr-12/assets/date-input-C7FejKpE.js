import{t as C,e as U,f as _,i as W,g as h,h as j,j as V,u as $,k as z,n as q,o as K,p as E,q as H,s as v,v as G,w as J,x as Q,y as X}from"./helper-bzctNRoS.js";import{r as Z,E as D,A as tt,p as et,t as w,d as M}from"./iframe-D6xBhSQL.js";function O(t,e){const a=C(t,e?.in),n=a.getFullYear(),o=a.getMonth(),u=U(a,0);return u.setFullYear(n,o+1,0),u.setHours(0,0,0,0),u.getDate()}const nt=_(class extends W{constructor(t){if(super(t),t.type!==h.PROPERTY&&t.type!==h.ATTRIBUTE&&t.type!==h.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Z(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===D||e===tt)return e;const a=t.element,n=t.name;if(t.type===h.PROPERTY){if(e===a[n])return D}else if(t.type===h.BOOLEAN_ATTRIBUTE){if(!!e===a.hasAttribute(n))return D}else if(t.type===h.ATTRIBUTE&&a.getAttribute(n)===e+"")return D;return et(t),e}}),at=j`
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

	input {
		appearance: none;
		box-shadow: none;
		caret-color: transparent;
		min-width: 0;
		outline: 0;
		width: 100%;
	}

	input::selection {
		background-color: rgba(0, 0, 0, 0.01);
	}

	input::placeholder {
		color: currentColor;
	}
`,s="",rt=t=>["year","month","day"].includes(t),N=({year:t,month:e})=>e===s||t===s?31:O(new Date(Number(t),Number(e)-1)),ot=(t,e)=>t>e,I=({input:t,max:e,previous:a})=>{if(t===s)return s;if(isNaN(Number(t)))return a;const n=Number(t);return ot(n,e)?String(n).slice(-1):String(n)},st=(t,e)=>I({input:t,max:N(e),previous:e.day}),it=(t,e)=>I({input:t,max:12,previous:e.month}),ct=(t,e)=>I({input:t,max:9999,previous:e.year}),S=({value:t,offset:e,min:a,max:n})=>{const o=Number(t)+e;return o>n?String(a):o<a?String(n):String(o)},ut=(t,e)=>S({value:t.day,offset:e,min:1,max:N(t)}),lt=(t,e)=>S({value:t.month,offset:e,min:1,max:12}),mt=(t,e)=>S({value:t.year,offset:e,min:1,max:9999}),A=(t,e)=>{if(t===s)return s;const a=Number(t);if(a===0)return String(a);const n=new Date(2e3,a-1,1);return Intl.DateTimeFormat(e,{numberingSystem:"latn",calendar:"gregory"}).formatToParts(n).find(i=>i.type==="month").value},x=(t,e)=>{if(t===s)return s;const a=Number(t);if(a===0)return String(a);const n=new Date(2e3,0,a);return Intl.DateTimeFormat(e,{numberingSystem:"latn",calendar:"gregory"}).formatToParts(n).find(i=>i.type==="day").value},k=t=>{switch(t){case"year":return"YYYY";case"month":return"MM";case"day":return"DD"}},L=({day:t,month:e,year:a})=>V(new Date(Number(a),Number(e)-1,Number(t)),"yyyy-MM-dd"),dt=t=>t.year.length===4&&Number(t.year)>=1&&Number(t.year)<=9999&&Number(t.month)>=1&&Number(t.month)<=12&&Number(t.day)>=1&&Number(t.day)<=O(new Date(Number(t.year),Number(t.month)-1))&&Object.values(t).every(e=>e!==s),yt={year:"numeric",month:"numeric",day:"numeric",numberingSystem:"latn",calendar:"gregory"},pt=(t,e)=>{const a=t.shadowRoot?.activeElement;if(!a)return;const n=[...t.shadowRoot?.querySelectorAll("input[data-type]")],o=n.indexOf(a);n[o+(e==="ArrowLeft"?-1:1)]?.focus()},Y=(t,e)=>t?{year:String(t.getFullYear()),month:A(t.getMonth()+1,e),day:x(t.getDate(),e)}:{year:s,month:s,day:s},gt=t=>{const{locale:e,ariaLabel:a}=t,n=e??navigator.language,[o,u]=$("value"),i=z(()=>q(o),[o]),[m,l]=K(Y(i,n)),c=z(()=>Intl.DateTimeFormat(n,yt).formatToParts(i),[i,n]);E(()=>{(!i||!H(i,L(m)))&&l(Y(i,n))},[i,n,l]),E(()=>{dt(m)&&u(L(m))},[m,u]);const y=v(r=>{const d=r.target.value,f=r.target.dataset.type;l(p=>{if(f==="year"){const T=ct(d,p);return{...p,year:T}}if(f==="month"){const T=it(d,p);return{...p,month:A(T,n)}}const b=st(d,p);return{...p,day:x(b,n)}})},[n,l]),R=v(r=>{const g=r.target.dataset.type;(r.key==="ArrowDown"||r.key==="ArrowUp")&&(r.preventDefault(),l(d=>{const f=r.key==="ArrowUp"?1:-1;if(g==="year"){const b=mt(d,f);return{...d,year:b}}if(g==="month"){const b=lt(d,f);return{...d,month:A(b,n)}}const p=ut(d,f);return{...d,day:x(p,n)}})),(r.key==="ArrowLeft"||r.key==="ArrowRight")&&(r.preventDefault(),pt(t,r.key))},[t,n,l]),B=v(()=>{const r=N(m);l(g=>Number(m.day)>r?{...g,day:x(r,n)}:g)},[m,l,n]),F=v(r=>{r.target.select()},[]);return{inputState:m,onChange:y,onKeyDown:R,onBlur:B,onClick:F,localeDateParts:c,hostAriaLabel:a}},P={year:{getLabel:()=>w("Year"),valuemax:"9999"},month:{getLabel:()=>w("Month"),valuemax:"12"},day:{getLabel:()=>w("Day"),valuemax:"31"}},ft=(t,e)=>[P[t].getLabel(),e].filter(Boolean).join(", "),ht=t=>{const{inputState:e,onChange:a,onKeyDown:n,onBlur:o,onClick:u,localeDateParts:i,hostAriaLabel:m}=gt(t);return Q(i,(l,c)=>c,({value:l,type:c})=>{if(rt(c)){const y=e[c];return M`
					<span class="date-input-part">
						<span class="date-input-sizer" aria-hidden="true"
							>${y||k(c)}</span
						>
						<input
							role="spinbutton"
							aria-label=${ft(c,m)}
							aria-valuemin="1"
							aria-valuemax=${P[c].valuemax}
							aria-valuenow=${X(y!==s?y:void 0)}
							aria-valuetext=${y!==s?y:w("Empty")}
							type="text"
							inputmode="numeric"
							autocomplete="off"
							spellcheck="false"
							data-type=${c}
							placeholder=${k(c)}
							.value=${nt(y)}
							@click=${u}
							@blur=${o}
							@input=${a}
							@keydown=${n}
						/>
					</span>
				`}if(c==="literal")return M`<span>${l}</span>`})};customElements.define("cosmoz-date-input",G(ht,{observedAttributes:["locale"],styleSheets:[J,at],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));
