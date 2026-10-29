import{u as kt,n as $t,a as lt,s as bt,b as ct,e as Dt,c as Pt,d as ce,g as xt,i as ae,f as le,h as ue,j as de,k as Ft,l as fe}from"./calendar-Bnx59-sr.js";import{e as Yt,i as Xt,d as pe,g as nt,k as Z,u as O,o as B,a as Ut,t as me,f as C,s as Vt,m as ge,n as he,l as ve}from"./date-COk_vMeE.js";import{E as Ct,b as M,g as Y,h as I,e as Q,A as we,u as qt,k as ye,j as S,l as be}from"./iframe-IKfAL86V.js";import"./date-input-BcL9iPNC.js";const xe={},ze=Yt(class extends Xt{constructor(){super(...arguments),this.ot=xe}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,s)=>o===this.ot[s]))return Ct}else if(this.ot===e)return Ct;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}});const Kt="important",Ee=" !"+Kt,$e=Yt(class extends Xt{constructor(t){if(super(t),t.type!==pe.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const s=e[o];if(s!=null){this.ft.add(o);const r=typeof s=="string"&&s.endsWith(Ee);o.includes("-")||r?n.setProperty(o,r?s.slice(0,-11):s,r?Kt:""):n[o]=s}}return Ct}}),Ce=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Re=nt`
	:host {
		position: fixed;
		left: -9999999999px;
		min-width: 72px;
		box-sizing: border-box;
		padding: var(--cosmoz-dropdown-spacing, 0px);
		z-index: var(--cosmoz-dropdown-z-index, 2);
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	:host(:popover-open) {
		margin: 0;
		border: 0;
		padding: 0;
		overflow: visible;
	}
	.wrap {
		background: var(--cosmoz-dropdown-bg-color, #fff);
		box-shadow: var(
			--cosmoz-dropdown-box-shadow,
			0px 3px 4px 2px rgba(0, 0, 0, 0.1)
		);
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	::slotted(*) {
		display: block;
	}
`,Me=()=>M`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Ce(Z(Me,{styleSheets:[Re]})));const ut=Math.min,X=Math.max,dt=Math.round,at=Math.floor,P=t=>({x:t,y:t}),ke={left:"right",right:"left",bottom:"top",top:"bottom"};function Oe(t,e,n){return X(t,ut(e,n))}function Ot(t,e){return typeof t=="function"?t(e):t}function tt(t){return t.split("-")[0]}function Tt(t){return t.split("-")[1]}function Zt(t){return t==="x"?"y":"x"}function Gt(t){return t==="y"?"height":"width"}function j(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function Jt(t){return Zt(j(t))}function Te(t,e,n){n===void 0&&(n=!1);const o=Tt(t),s=Jt(t),r=Gt(s);let i=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(i=ft(i)),[i,ft(i)]}function Se(t){const e=ft(t);return[Rt(t),e,Rt(e)]}function Rt(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const Wt=["left","right"],Bt=["right","left"],Le=["top","bottom"],Ae=["bottom","top"];function De(t,e,n){switch(t){case"top":case"bottom":return n?e?Bt:Wt:e?Wt:Bt;case"left":case"right":return e?Le:Ae;default:return[]}}function Pe(t,e,n,o){const s=Tt(t);let r=De(tt(t),n==="start",o);return s&&(r=r.map(i=>i+"-"+s),e&&(r=r.concat(r.map(Rt)))),r}function ft(t){const e=tt(t);return ke[e]+t.slice(e.length)}function Fe(t){var e,n,o,s;return{top:(e=t.top)!=null?e:0,right:(n=t.right)!=null?n:0,bottom:(o=t.bottom)!=null?o:0,left:(s=t.left)!=null?s:0}}function Ve(t){return typeof t!="number"?Fe(t):{top:t,right:t,bottom:t,left:t}}function pt(t){const{x:e,y:n,width:o,height:s}=t;return{width:o,height:s,top:n,left:e,right:e+o,bottom:n+s,x:e,y:n}}function It(t,e,n){let{reference:o,floating:s}=t;const r=j(e),i=Jt(e),c=Gt(i),l=tt(e),u=r==="y",d=o.x+o.width/2-s.width/2,a=o.y+o.height/2-s.height/2,p=o[c]/2-s[c]/2;let m;switch(l){case"top":m={x:d,y:o.y-s.height};break;case"bottom":m={x:d,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:a};break;case"left":m={x:o.x-s.width,y:a};break;default:m={x:o.x,y:o.y}}const h=Tt(e);return h&&(m[i]+=p*(h==="end"?1:-1)*(n&&u?-1:1)),m}async function We(t,e){var n;e===void 0&&(e={});const{x:o,y:s,platform:r,rects:i,elements:c,strategy:l}=t,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:a="floating",altBoundary:p=!1,padding:m=0}=Ot(e,t),h=Ve(m),f=c[p?a==="floating"?"reference":"floating":a],v=pt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(f)))==null||n?f:f.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:u,rootBoundary:d,strategy:l})),w=a==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),z=await(r.isElement==null?void 0:r.isElement(b))&&await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1},E=pt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:b,strategy:l}):w);return{top:(v.top-E.top+h.top)/z.y,bottom:(E.bottom-v.bottom+h.bottom)/z.y,left:(v.left-E.left+h.left)/z.x,right:(E.right-v.right+h.right)/z.x}}const Be=50,Ie=async(t,e,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:r=[],platform:i}=n,c=i.detectOverflow?i:{...i,detectOverflow:We},l=await(i.isRTL==null?void 0:i.isRTL(e));let u=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:d,y:a}=It(u,o,l),p=o,m=0;const h={};for(let g=0;g<r.length;g++){const f=r[g];if(!f)continue;const{name:v,fn:w}=f,{x:b,y:z,data:E,reset:y}=await w({x:d,y:a,initialPlacement:o,placement:p,strategy:s,middlewareData:h,rects:u,platform:c,elements:{reference:t,floating:e}});d=b??d,a=z??a,h[v]={...h[v],...E},y&&m<Be&&(m++,typeof y=="object"&&(y.placement&&(p=y.placement),y.rects&&(u=y.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):y.rects),{x:d,y:a}=It(u,p,l)),g=-1)}return{x:d,y:a,placement:p,strategy:s,middlewareData:h}},Ne=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:s,middlewareData:r,rects:i,initialPlacement:c,platform:l,elements:u}=e,{mainAxis:d=!0,crossAxis:a=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...f}=Ot(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const v=tt(s),w=j(c),b=tt(c)===c,z=await(l.isRTL==null?void 0:l.isRTL(u.floating)),E=p||(b||!g?[ft(c)]:Se(c)),y=h!=="none";!p&&y&&E.push(...Pe(c,g,h,z));const x=[c,...E],V=await l.detectOverflow(e,f),D=[];let k=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&D.push(V[v]),a){const $=Te(s,i,z);D.push(V[$[0]],V[$[1]])}if(k=[...k,{placement:s,overflows:D}],!D.every($=>$<=0)){var st,rt;const $=(((st=r.flip)==null?void 0:st.index)||0)+1,yt=x[$];if(yt&&(!(a==="alignment"?w!==j(yt):!1)||k.every(T=>j(T.placement)===w?T.overflows[0]>0:!0)))return{data:{index:$,overflows:k},reset:{placement:yt}};let J=(rt=k.filter(_=>_.overflows[0]<=0).sort((_,T)=>_.overflows[1]-T.overflows[1])[0])==null?void 0:rt.placement;if(!J)switch(m){case"bestFit":{var it;const _=(it=k.filter(T=>{if(y){const W=j(T.placement);return W===w||W==="y"}return!0}).map(T=>[T.placement,T.overflows.filter(W=>W>0).reduce((W,ie)=>W+ie,0)]).sort((T,W)=>T[1]-W[1])[0])==null?void 0:it[0];_&&(J=_);break}case"initialPlacement":J=c;break}if(s!==J)return{reset:{placement:J}}}return{}}}},_e=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:s,platform:r}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:l={fn:w=>{let{x:b,y:z}=w;return{x:b,y:z}}},...u}=Ot(t,e),d={x:n,y:o},a=await r.detectOverflow(e,u),p=j(s),m=Zt(p);let h=d[m],g=d[p];const f=(w,b)=>Oe(b+a[w==="y"?"top":"left"],b,b-a[w==="y"?"bottom":"right"]);i&&(h=f(m,h)),c&&(g=f(p,g));const v=l.fn({...e,[m]:h,[p]:g});return{...v,data:{x:v.x-n,y:v.y-o,enabled:{[m]:i,[p]:c}}}}}};function mt(){return typeof window<"u"}function G(t){return Qt(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function F(t){var e;return(e=(Qt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Qt(t){return mt()?t instanceof Node||t instanceof R(t).Node:!1}function L(t){return mt()?t instanceof Element||t instanceof R(t).Element:!1}function N(t){return mt()?t instanceof HTMLElement||t instanceof R(t).HTMLElement:!1}function Nt(t){return!mt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof R(t).ShadowRoot}function gt(t){const{overflow:e,overflowX:n,overflowY:o,display:s}=A(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&s!=="inline"&&s!=="contents"}function He(t){return/^(table|td|th)$/.test(G(t))}function ht(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const je=/transform|translate|scale|rotate|perspective|filter/,Ye=/paint|layout|strict|content/,H=t=>!!t&&t!=="none";let zt;function St(t){const e=L(t)?A(t):t;return H(e.transform)||H(e.translate)||H(e.scale)||H(e.rotate)||H(e.perspective)||!Lt()&&(H(e.backdropFilter)||H(e.filter))||je.test(e.willChange||"")||Ye.test(e.contain||"")}function Xe(t){let e=U(t);for(;N(e)&&!et(e);){if(St(e))return e;if(ht(e))return null;e=U(e)}return null}function Lt(){return zt==null&&(zt=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),zt}function et(t){return/^(html|body|#document)$/.test(G(t))}function A(t){return R(t).getComputedStyle(t)}function vt(t){return L(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function U(t){if(G(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Nt(t)&&t.host||F(t);return Nt(e)?e.host:e}function te(t){const e=U(t);return et(e)?(t.ownerDocument||t).body:N(e)&&gt(e)?e:te(e)}function ot(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=te(t),r=s===((o=t.ownerDocument)==null?void 0:o.body),i=R(s);if(r){const c=Mt(i);return e.concat(i,i.visualViewport||[],gt(s)?s:[],c&&n?ot(c):[])}else return e.concat(s,ot(s,[],n))}function Mt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ee(t){const e=A(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=N(t),r=s?t.offsetWidth:n,i=s?t.offsetHeight:o,c=dt(n)!==r||dt(o)!==i;return c&&(n=r,o=i),{width:n,height:o,$:c}}function At(t){return L(t)?t:t.contextElement}function K(t){const e=At(t);if(!N(e))return P(1);const n=e.getBoundingClientRect(),{width:o,height:s,$:r}=ee(e);let i=(r?dt(n.width):n.width)/o,c=(r?dt(n.height):n.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const Ue=P(0);function oe(t){const e=R(t);return!Lt()||!e.visualViewport?Ue:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function qe(t,e,n){return e===void 0&&(e=!1),!!n&&e&&n===R(t)}function q(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),r=At(t);let i=P(1);e&&(o?L(o)&&(i=K(o)):i=K(t));const c=qe(r,n,o)?oe(r):P(0);let l=(s.left+c.x)/i.x,u=(s.top+c.y)/i.y,d=s.width/i.x,a=s.height/i.y;if(r&&o){const p=R(r),m=L(o)?R(o):o;let h=p,g=Mt(h);for(;g&&m!==h;){const f=K(g),v=g.getBoundingClientRect(),w=A(g),b=v.left+(g.clientLeft+parseFloat(w.paddingLeft))*f.x,z=v.top+(g.clientTop+parseFloat(w.paddingTop))*f.y;l*=f.x,u*=f.y,d*=f.x,a*=f.y,l+=b,u+=z,h=R(g),g=Mt(h)}}return pt({width:d,height:a,x:l,y:u})}function wt(t,e){const n=vt(t).scrollLeft;return e?e.left+n:q(F(t)).left+n}function ne(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-wt(t,n),s=n.top+e.scrollTop;return{x:o,y:s}}function Ke(t){let{elements:e,rect:n,offsetParent:o,strategy:s}=t;const r=s==="fixed",i=F(o),c=e?ht(e.floating):!1;if(o===i||c&&r)return n;let l={scrollLeft:0,scrollTop:0},u=P(1);const d=P(0),a=N(o);if((a||!r)&&((G(o)!=="body"||gt(i))&&(l=vt(o)),a)){const m=q(o);u=K(o),d.x=m.x+o.clientLeft,d.y=m.y+o.clientTop}const p=i&&!a&&!r?ne(i,l):P(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+d.x+p.x,y:n.y*u.y-l.scrollTop*u.y+d.y+p.y}}function Ze(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function Ge(t){const e=vt(t),n=t.ownerDocument.body,o=X(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=X(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-e.scrollLeft+wt(t);const i=-e.scrollTop;return A(n).direction==="rtl"&&(r+=X(t.clientWidth,n.clientWidth)-o),{width:o,height:s,x:r,y:i}}const Je=25;function Qe(t,e,n){n===void 0&&(n="viewport");const o=n==="layoutViewport",s=R(t),r=F(t),i=s.visualViewport;let c=r.clientWidth,l=r.clientHeight,u=0,d=0;if(i){const p=!Lt()||e==="fixed";o?p||(u=-i.offsetLeft,d=-i.offsetTop):(c=i.width,l=i.height,p&&(u=i.offsetLeft,d=i.offsetTop))}if(wt(r)<=0){const p=r.ownerDocument,m=p.body,h=getComputedStyle(m),g=p.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,f=Math.abs(r.clientWidth-m.clientWidth-g),v=getComputedStyle(r).scrollbarGutter==="stable both-edges"?f/2:f;v<=Je&&(c-=v)}return{width:c,height:l,x:u,y:d}}function to(t,e){const n=q(t,!0,e==="fixed"),o=n.top+t.clientTop,s=n.left+t.clientLeft,r=K(t),i=t.clientWidth*r.x,c=t.clientHeight*r.y,l=s*r.x,u=o*r.y;return{width:i,height:c,x:l,y:u}}function _t(t,e,n){let o;if(e==="viewport"||e==="layoutViewport")o=Qe(t,n,e);else if(e==="document")o=Ge(F(t));else if(L(e))o=to(e,n);else{const s=oe(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return pt(o)}function eo(t,e){const n=e.get(t);if(n)return n;let o=ot(t,[],!1).filter(c=>L(c)&&G(c)!=="body"),s=null;const r=A(t).position==="fixed";let i=r?U(t):t;for(;L(i)&&!et(i);){const c=A(i),l=St(i),u=s?s.position:r?"fixed":"";!l&&(u==="fixed"||u==="absolute"&&c.position==="static")?o=o.filter(a=>a!==i):s=c,i=U(i)}return e.set(t,o),o}function oo(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const i=[...n==="clippingAncestors"?ht(e)?[]:eo(e,this._c):[].concat(n),o],c=_t(e,i[0],s);let l=c.top,u=c.right,d=c.bottom,a=c.left;for(let p=1;p<i.length;p++){const m=_t(e,i[p],s);l=X(m.top,l),u=ut(m.right,u),d=ut(m.bottom,d),a=X(m.left,a)}return{width:u-a,height:d-l,x:a,y:l}}function no(t){const{width:e,height:n}=ee(t);return{width:e,height:n}}function so(t,e,n){const o=N(e),s=F(e),r=n==="fixed",i=q(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=P(0);if((o||!r)&&((G(e)!=="body"||gt(s))&&(c=vt(e)),o)){const p=q(e,!0,r,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}!o&&s&&(l.x=wt(s));const u=s&&!o&&!r?ne(s,c):P(0),d=i.left+c.scrollLeft-l.x-u.x,a=i.top+c.scrollTop-l.y-u.y;return{x:d,y:a,width:i.width,height:i.height}}function Et(t){return A(t).position==="static"}function Ht(t,e){if(!N(t)||A(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return F(t)===n&&(n=n.ownerDocument.body),n}function se(t,e){const n=R(t);if(ht(t))return n;if(!N(t)){let s=U(t);for(;s&&!et(s);){if(L(s)&&!Et(s))return s;s=U(s)}return n}let o=Ht(t,e);for(;o&&He(o)&&Et(o);)o=Ht(o,e);return o&&et(o)&&Et(o)&&!St(o)?n:o||Xe(t)||n}const ro=async function(t){const e=this.getOffsetParent||se,n=this.getDimensions,o=await n(t.floating);return{reference:so(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function io(t){return A(t).direction==="rtl"}const co={convertOffsetParentRelativeRectToViewportRelativeRect:Ke,getDocumentElement:F,getClippingRect:oo,getOffsetParent:se,getElementRects:ro,getClientRects:Ze,getDimensions:no,getScale:K,isElement:L,isRTL:io};function re(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function ao(t,e,n){let o=null,s;const r=F(t);function i(){var d;clearTimeout(s),(d=o)==null||d.disconnect(),o=null}function c(d,a){d===void 0&&(d=!1),a===void 0&&(a=1),i();const p=t.getBoundingClientRect(),{left:m,top:h,width:g,height:f}=p;if(d||e(),!g||!f)return;const v=at(h),w=at(r.clientWidth-(m+g)),b=at(r.clientHeight-(h+f)),z=at(m),y={rootMargin:-v+"px "+-w+"px "+-b+"px "+-z+"px",threshold:X(0,ut(1,a))||1};let x=!0;function V(D){const k=D[0].intersectionRatio;if(!re(p,t.getBoundingClientRect()))return c();if(k!==a){if(!x)return c();k?c(!1,k):s=setTimeout(()=>{c(!1,1e-7)},1e3)}x=!1}try{o=new IntersectionObserver(V,{...y,root:r.ownerDocument})}catch{o=new IntersectionObserver(V,y)}o.observe(t)}const l=R(t),u=()=>c(n);return l.addEventListener("resize",u),c(!0),()=>{l.removeEventListener("resize",u),i()}}function lo(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,u=At(t),d=s||r?[...u?ot(u):[],...e?ot(e):[]]:[];d.forEach(v=>{s&&v.addEventListener("scroll",n),r&&v.addEventListener("resize",n)});const a=u&&c?ao(u,n,r):null;let p=-1,m=null;i&&(m=new ResizeObserver(v=>{let[w]=v;w&&w.target===u&&m&&e&&(m.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var b;(b=m)==null||b.observe(e)})),n()}),u&&!l&&m.observe(u),e&&m.observe(e));let h,g=l?q(t):null;l&&f();function f(){const v=q(t);g&&!re(g,v)&&n(),g=v,h=requestAnimationFrame(f)}return n(),()=>{var v;d.forEach(w=>{s&&w.removeEventListener("scroll",n),r&&w.removeEventListener("resize",n)}),a?.(),(v=m)==null||v.disconnect(),m=null,l&&cancelAnimationFrame(h)}}const uo=_e,fo=Ne,po=(t,e,n)=>{const o=new Map,s=n??{},r={...co,...s.platform,_c:o};return Ie(t,e,{...s,platform:r})},mo=[fo({fallbackAxisSideDirection:"start",crossAxis:!1}),uo()],go=({placement:t="bottom-start",strategy:e,middleware:n=mo}={})=>{const[o,s]=Y(),[r,i]=Y(),[c,l]=Y();return I(()=>{if(!o||!(r instanceof HTMLElement)){l(void 0);return}return lo(o,r,()=>po(o,r,{placement:t,strategy:e,middleware:n}).then(l))},[o,r,t,e,n]),{setReference:s,setFloating:i,styles:Q(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},ho=t=>{const e=Q(()=>({}),[]);return Q(()=>Object.assign(e,t),[e,...Object.values(t)])},jt=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,vo=({disabled:t,onFocus:e})=>{const[n,o]=Y(),{focused:s,closed:r}=n||{},i=s&&!t,c=ho({closed:r,onFocus:e}),l=O(d=>o(a=>({...a,closed:d})),[]),u=O(d=>{const a=d.currentTarget;return jt(a)?o(p=>({focused:!0,closed:!p?.closed})):a.focus()},[]);return I(()=>{if(!i)return;const d=a=>{if(a.defaultPrevented)return;const{closed:p}=c;a.key==="Escape"&&!p?(a.preventDefault(),l(!0)):["ArrowUp","Up"].includes(a.key)&&p&&(a.preventDefault(),l(!1))};return document.addEventListener("keydown",d,!0),()=>document.removeEventListener("keydown",d,!0)},[i]),{focused:i,active:i&&!r,setClosed:l,onToggle:u,onFocus:O(d=>{const a=jt(d.currentTarget);o({focused:a}),c.onFocus?.(a)},[c])}},wo=t=>{const e=vo(t),{onFocus:n}=e,o=kt();return I(()=>{t.setAttribute("tabindex","0");const s=i=>{clearTimeout(o.current),n(i)},r=i=>{clearTimeout(o.current);const c=i.currentTarget;o.current=setTimeout(()=>n({currentTarget:c}),30)};return t.addEventListener("focusin",s),t.addEventListener("focusout",r),()=>{clearTimeout(o.current),t.removeEventListener("focusin",s),t.removeEventListener("focusout",r)}},[n]),e},yo=t=>t.preventDefault(),bo=nt`
	.anchor {
		pointer-events: none;
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}
	button {
		pointer-events: auto;
		border: none;
		cursor: pointer;
		background: transparent;
		padding: 0;
	}
	::slotted(svg) {
		pointer-events: none;
	}
	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,xo=t=>{const{placement:e,strategy:n,middleware:o,render:s}=t,{active:r,onToggle:i}=wo(t),{styles:c,setReference:l,setFloating:u}=go({placement:e,strategy:n,middleware:o});return M` <div class="anchor" part="anchor" ${$t(l)}>
			<button
				@mousedown=${yo}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${lt(r,()=>M`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${$e(c)}"
					@connected=${d=>d.target.showPopover?.()}
					${$t(u)}
					><slot></slot>${ze([s],()=>s?.()||we)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",Z(xo,{styleSheets:[bo]}));const zo=nt`
	:host {
		display: contents;
		max-height: var(--cosmoz-dropdown-menu-max-height, calc(96vh - 64px));
		overflow-y: auto;
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: 10px 24px;
		background: var(--cosmoz-dropdown-menu-bg-color, transparent);
		color: var(--cosmoz-dropdown-menu-color, #101010);
		transition:
			background 0.25s,
			color 0.25s;
		border: none;
		cursor: pointer;
		font-size: 14px;
		line-height: 20px;
		text-align: left;
		margin: 0;
		width: 100%;
	}

	::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-dropdown-menu-hover-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}

	::slotted(:not(slot)[disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}
`,Eo=()=>M` <slot></slot> `;customElements.define("cosmoz-dropdown-list",Z(Eo,{styleSheets:[zo]}));const $o=({placement:t})=>M` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",Z($o));const Co=({host:t,popoverRef:e,disabled:n,openOnHover:o,openOnFocus:s,open:r,close:i})=>{const c=kt(),l=()=>clearTimeout(c.current),u=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const a=e.current;o&&(t.matches(":hover")||a?.matches(":hover"))||t.matches(":focus-within")||a?.matches(":focus-within")||i()},100)},d=()=>{n||(l(),r())};return I(()=>{if(!(!o||n))return t.addEventListener("pointerenter",d),t.addEventListener("pointerleave",u),()=>{l(),t.removeEventListener("pointerenter",d),t.removeEventListener("pointerleave",u)}},[o,n,t]),I(()=>{if(!(!s||n))return t.addEventListener("focusin",d),t.addEventListener("focusout",u),()=>{l(),t.removeEventListener("focusin",d),t.removeEventListener("focusout",u)}},[s,n,t]),{scheduleClose:u,cancelClose:l}},Ro=t=>{if(t.newState!=="open")return;const o=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of o){const r=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},Mo=nt`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin-block: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
		min-width: anchor-size(width);

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		/* Transitions for smooth open/close animation */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	/* Starting state when popover opens */
	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	/* Closing state */
	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,ko=t=>{const{placement:e="bottom span-right",disabled:n,passthrough:o,openOnHover:s,openOnFocus:r}=t,i=kt(),[c,l]=qt("opened",!1),u=O(()=>{n||(l(!0),i.current?.showPopover?.())},[n]),d=O(()=>{l(!1),i.current?.hidePopover?.()},[]),a=O(()=>{if(n)return;i.current?.matches(":popover-open")?d():u()},[n]);I(()=>{const f=i.current;f&&(c?f.showPopover?.():f.hidePopover?.())},[c]),I(()=>{t.toggleAttribute("opened",!!c)},[c]);const{scheduleClose:p,cancelClose:m}=Co({host:t,popoverRef:i,disabled:n,openOnHover:s,openOnFocus:r,open:u,close:d}),h=r?u:a,g=O(f=>{Ro(f),l(f.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:f.newState,oldState:f.oldState,composed:!0}))},[]);return M`
		<slot name="button" @click=${h}></slot>
		${n&&o?M`<slot></slot>`:M`<div
					popover
					style="position-area: ${e}"
					@toggle=${g}
					@select=${d}
					@focusout=${p}
					@focusin=${m}
					${$t(f=>f&&(i.current=f))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",Z(ko,{styleSheets:[Mo],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Oo=({slot:t,title:e,className:n,width:o="24",height:s="24",styles:r}={})=>M`
  <svg
    slot=${B(t)}
    class=${`calendar-icon ${n??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${o}
    height=${s}
    style=${B(r)}
  >
    ${lt(e,()=>ye`<title>${e}</title>`)}
    <path
      d="M21 10H3m13-8v4M8 2v4m-.2 16h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22Z"
    />
  </svg>
`;function To(t,e,n){return Ut(t,e*7,n)}function So(t,e){const n=me(t,e?.in),o=n.getFullYear();return n.setFullYear(o+1,0,0),n.setHours(23,59,59,999),n}function Lo(t,e,n){return To(t,-1,n)}const Ao=nt`
	.content {
		display: flex;
		background: var(--cz-color-bg-primary);
		border: 1px solid var(--cz-color-border-secondary);
		border-radius: var(--cz-radius-2xl);
		box-shadow: var(--cz-shadow-xl);
		color: var(--cz-color-text-primary);
		font-size: var(--cz-text-base);
	}

	.range-presets {
		width: calc(var(--cz-spacing) * 38);
		padding: calc(var(--cz-spacing) * 3);
		flex-shrink: 0;
		border-right: 1px solid var(--cz-color-border-secondary);
		overflow: auto;
		contain: size;
	}

	@media (max-width: 1023px) {
		.range-presets {
			display: none;
		}
	}

	.range-presets cosmoz-button::part(button) {
		justify-content: flex-start;
		font-weight: var(--cz-font-weight-medium);
		overflow: hidden;
	}

	.range-presets cosmoz-button[active]::part(button) {
		background: var(--cz-color-bg-secondary);
	}

	footer {
		display: flex;
		justify-content: space-between;
		gap: calc(var(--cz-spacing) * 3);
		padding: calc(var(--cz-spacing) * 4);
		border-top: 1px solid var(--cz-color-border-secondary);
	}

	.footer-left {
		display: flex;
		gap: calc(var(--cz-spacing) * 2);
		align-items: center;
		justify-content: space-evenly;
	}

	:host([mode='single']),
	:host([single-calendar]) {
		.range-presets {
			display: none;
		}

		cosmoz-calendar {
			display: flex;
			justify-content: center;
			padding: calc(var(--cz-spacing) * 4) calc(var(--cz-spacing) * 3);
		}
	}

	:host([single-calendar]):not([mode='single']) {
		cosmoz-calendar {
			padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 8);
		}

		footer {
			flex-direction: column;
		}
	}

	@media (max-width: 734px) {
		:host(:not([mode='single'])) {
			cosmoz-calendar {
				display: flex;
				justify-content: center;
				padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 8);
			}

			footer {
				flex-direction: column;
			}
		}
	}
`,Do=t=>[{label:S("Today"),start:()=>C(new Date,"yyyy-MM-dd"),end:()=>C(new Date,"yyyy-MM-dd")},{label:S("Yesterday"),start:()=>C(bt(new Date,1),"yyyy-MM-dd"),end:()=>C(bt(new Date,1),"yyyy-MM-dd")},{label:S("This week"),start:()=>C(ct(new Date,t),"yyyy-MM-dd"),end:()=>C(Ut(ct(new Date,t),6),"yyyy-MM-dd")},{label:S("Last week"),start:()=>C(Lo(ct(new Date,t)),"yyyy-MM-dd"),end:()=>C(bt(ct(new Date,t),1),"yyyy-MM-dd")},{label:S("This month"),start:()=>C(Vt(new Date),"yyyy-MM-dd"),end:()=>C(Dt(new Date),"yyyy-MM-dd")},{label:S("Last month"),start:()=>C(Pt(Vt(new Date),1),"yyyy-MM-dd"),end:()=>C(Pt(Dt(new Date),1),"yyyy-MM-dd")},{label:S("This year"),start:()=>C(ge(new Date),"yyyy-MM-dd"),end:()=>C(So(new Date),"yyyy-MM-dd")}],Po=t=>{const e=Q(()=>matchMedia(t),[t]),[n,o]=Y(e.matches);return I(()=>{const s=r=>o(i=>i!==r.matches?r.matches:i);return e.addEventListener("change",s),()=>e.removeEventListener("change",s)},[e]),n},Fo=t=>{const{mode:e="range",locale:n,min:o,max:s,presets:r,singleCalendar:i=!1,disabled:c,noPresets:l,triggerSize:u,triggerVariant:d}=t,a=e==="single",p=n??navigator.language,[m,h]=qt("value"),[g,f]=Y(m),v=Po("(width < 735px)"),w=i||v||a,b=w?1:2,[z,E]=Y(!1),{start:y,end:x}=ce(g,e),V=Q(()=>r??Do(p),[p,r]),D=O(({newState:$})=>{$==="closed"?h(g):f(m),E($==="open")},[g,m,E,h,f]),k=O($=>{if(a){f(xt($.detail.value,o,s));return}f({start:xt($.detail.value,o,s),end:x})},[a,o,s,x,f]),st=O($=>f({start:y,end:xt($.detail.value,o,s)}),[o,s,y,f]),rt=O(()=>{!a&&y&&x&&ae(new Date(y),new Date(x))&&f({start:y,end:y})},[a,y,x,f]),it=O(()=>{y&&x&&le(new Date(x),new Date(y))&&f({start:x,end:x})},[y,x,f]);return{end:x,isSingleCalendar:w,locale:p,mode:e,isSingleDateMode:a,numberOfMonths:b,onEndInput:st,onStartInput:k,rangePresets:V,setValue:f,start:y,value:g,disabled:c,noPresets:l,min:o,max:s,triggerSize:u,triggerVariant:d,onStartInputBlur:rt,onEndInputBlur:it,isOpen:z,onDropdownToggle:D}},Vo=t=>{const{end:e,isSingleCalendar:n,locale:o,mode:s,isSingleDateMode:r,numberOfMonths:i,onEndInput:c,onStartInput:l,rangePresets:u,setValue:d,start:a,value:p,min:m,max:h,disabled:g,noPresets:f,triggerSize:v,triggerVariant:w="secondary",onStartInputBlur:b,onEndInputBlur:z,isOpen:E,onDropdownToggle:y}=Fo(t);return M`
		<cosmoz-dropdown-next
			?disabled=${g}
			@dropdown-toggle=${y}
			aria-disabled=${B(g?"true":void 0)}
		>
			<cosmoz-button
				slot="button"
				type="button"
				exportparts="button:trigger"
				variant=${w}
				size=${B(v)}
				aria-label=${S("Date picker")}
				aria-disabled=${B(g?"true":void 0)}
				aria-haspopup="dialog"
				aria-expanded=${E?"true":"false"}
				?disabled=${g}
			>
				${Oo()}
				${de(a,e,o,r)}
			</cosmoz-button>

			<div class="content" role="dialog">
				${lt(!(f||n||r),()=>M`
						<div class="range-presets">
							${ve(u,x=>x.label,x=>M`
									<cosmoz-button
										variant="tertiary"
										full-width
										?active=${Ft(x,a,e)}
										aria-pressed=${Ft(x,a,e)?"true":"false"}
										@click=${()=>fe(x,d,m,h)}
										>${x.label}</cosmoz-button
									>
								`)}
						</div>
					`)}

				<div class="main">
					<cosmoz-calendar
						autofocus
						mode=${s}
						locale=${o}
						number-of-months=${i}
						.min=${B(m)}
						.max=${B(h)}
						.value=${p}
						@value-changed=${be(d)}
					></cosmoz-calendar>

					<footer>
						<div class="footer-left">
							<cosmoz-date-input
								aria-label=${B(r?void 0:S("Start date"))}
								locale=${o}
								.value=${a}
								@value-changed=${l}
								@blur=${b}
							></cosmoz-date-input>
							${lt(!r,()=>M`
									<span>–</span>
									<cosmoz-date-input
										aria-label=${S("End date")}
										locale=${o}
										.value=${e}
										@value-changed=${c}
										@blur=${z}
									></cosmoz-date-input>
								`)}
						</div>
						<div>
							<cosmoz-button
								?full-width=${n}
								@click=${ue}
								>${S("OK")}</cosmoz-button
							>
						</div>
					</footer>
				</div>
			</div>
		</cosmoz-dropdown-next>
	`};customElements.define("cosmoz-datepicker",Z(Vo,{observedAttributes:["locale","min","max","disabled","mode","no-presets","single-calendar","trigger-size","trigger-variant"],styleSheets:[he,Ao],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));
