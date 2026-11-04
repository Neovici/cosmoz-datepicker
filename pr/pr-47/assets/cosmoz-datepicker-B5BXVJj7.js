import{u as Ot,n as Et,a as tt,s as xt,b as lt,e as Pt,c as Ft,i as Ct,g as ut,d as le,f as de,h as ue,j as fe,k as pe,l as Wt,m as me,o as ge}from"./calendar-D1ucaIqF.js";import{e as Ut,i as qt,d as he,g as st,k as G,u as O,o as W,a as Kt,t as ve,f as k,s as Vt,m as we,n as ye,l as Bt}from"./date-DOQIn1pT.js";import{E as Rt,b as R,g as X,h as N,e as et,A as be,u as Zt,k as xe,j as T,l as ze}from"./iframe-CEpW0NJf.js";import"./date-input-CU0DHU5r.js";const $e={},Ee=Ut(class extends qt{constructor(){super(...arguments),this.ot=$e}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,r)=>o===this.ot[r]))return Rt}else if(this.ot===e)return Rt;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}});const Gt="important",Ce=" !"+Gt,Re=Ut(class extends qt{constructor(t){if(super(t),t.type!==he.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const r=e[o];if(r!=null){this.ft.add(o);const s=typeof r=="string"&&r.endsWith(Ce);o.includes("-")||s?n.setProperty(o,s?r.slice(0,-11):r,s?Gt:""):n[o]=r}}return Rt}}),ke=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Me=st`
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
`,Oe=()=>R`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",ke(G(Oe,{styleSheets:[Me]})));const ft=Math.min,U=Math.max,pt=Math.round,dt=Math.floor,V=t=>({x:t,y:t}),Te={left:"right",right:"left",bottom:"top",top:"bottom"};function Se(t,e,n){return U(t,ft(e,n))}function Tt(t,e){return typeof t=="function"?t(e):t}function ot(t){return t.split("-")[0]}function St(t){return t.split("-")[1]}function Jt(t){return t==="x"?"y":"x"}function Qt(t){return t==="y"?"height":"width"}function Y(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function te(t){return Jt(Y(t))}function Le(t,e,n){n===void 0&&(n=!1);const o=St(t),r=te(t),s=Qt(r);let i=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=mt(i)),[i,mt(i)]}function Ae(t){const e=mt(t);return[kt(t),e,kt(e)]}function kt(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const It=["left","right"],Nt=["right","left"],De=["top","bottom"],Pe=["bottom","top"];function Fe(t,e,n){switch(t){case"top":case"bottom":return n?e?Nt:It:e?It:Nt;case"left":case"right":return e?De:Pe;default:return[]}}function We(t,e,n,o){const r=St(t);let s=Fe(ot(t),n==="start",o);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(kt)))),s}function mt(t){const e=ot(t);return Te[e]+t.slice(e.length)}function Ve(t){var e,n,o,r;return{top:(e=t.top)!=null?e:0,right:(n=t.right)!=null?n:0,bottom:(o=t.bottom)!=null?o:0,left:(r=t.left)!=null?r:0}}function Be(t){return typeof t!="number"?Ve(t):{top:t,right:t,bottom:t,left:t}}function gt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function _t(t,e,n){let{reference:o,floating:r}=t;const s=Y(e),i=te(e),c=Qt(i),l=ot(e),d=s==="y",u=o.x+o.width/2-r.width/2,a=o.y+o.height/2-r.height/2,f=o[c]/2-r[c]/2;let m;switch(l){case"top":m={x:u,y:o.y-r.height};break;case"bottom":m={x:u,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:a};break;case"left":m={x:o.x-r.width,y:a};break;default:m={x:o.x,y:o.y}}const h=St(e);return h&&(m[i]+=f*(h==="end"?1:-1)*(n&&d?-1:1)),m}async function Ie(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:s,rects:i,elements:c,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:a="floating",altBoundary:f=!1,padding:m=0}=Tt(e,t),h=Be(m),p=c[f?a==="floating"?"reference":"floating":a],v=gt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(p)))==null||n?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:d,rootBoundary:u,strategy:l})),w=a==="floating"?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),z=await(s.isElement==null?void 0:s.isElement(x))&&await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1},E=gt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:x,strategy:l}):w);return{top:(v.top-E.top+h.top)/z.y,bottom:(E.bottom-v.bottom+h.bottom)/z.y,left:(v.left-E.left+h.left)/z.x,right:(E.right-v.right+h.right)/z.x}}const Ne=50,_e=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:i}=n,c=i.detectOverflow?i:{...i,detectOverflow:Ie},l=await(i.isRTL==null?void 0:i.isRTL(e));let d=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:a}=_t(d,o,l),f=o,m=0;const h={};for(let g=0;g<s.length;g++){const p=s[g];if(!p)continue;const{name:v,fn:w}=p,{x,y:z,data:E,reset:b}=await w({x:u,y:a,initialPlacement:o,placement:f,strategy:r,middlewareData:h,rects:d,platform:c,elements:{reference:t,floating:e}});u=x??u,a=z??a,h[v]={...h[v],...E},b&&m<Ne&&(m++,typeof b=="object"&&(b.placement&&(f=b.placement),b.rects&&(d=b.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:u,y:a}=_t(d,f,l)),g=-1)}return{x:u,y:a,placement:f,strategy:r,middlewareData:h}},He=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:s,rects:i,initialPlacement:c,platform:l,elements:d}=e,{mainAxis:u=!0,crossAxis:a=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...p}=Tt(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const v=ot(r),w=Y(c),x=ot(c)===c,z=await(l.isRTL==null?void 0:l.isRTL(d.floating)),E=f||(x||!g?[mt(c)]:Ae(c)),b=h!=="none";!f&&b&&E.push(...We(c,g,h,z));const $=[c,...E],S=await l.detectOverflow(e,p),L=[];let y=((o=s.flip)==null?void 0:o.overflows)||[];if(u&&L.push(S[v]),a){const F=Le(r,i,z);L.push(S[F[0]],S[F[1]])}if(y=[...y,{placement:r,overflows:L}],!L.every(F=>F<=0)){var it,ct;const F=(((it=s.flip)==null?void 0:it.index)||0)+1,Q=$[F];if(Q&&(!(a==="alignment"?w!==Y(Q):!1)||y.every(A=>Y(A.placement)===w?A.overflows[0]>0:!0)))return{data:{index:F,overflows:y},reset:{placement:Q}};let H=(ct=y.filter(C=>C.overflows[0]<=0).sort((C,A)=>C.overflows[1]-A.overflows[1])[0])==null?void 0:ct.placement;if(!H)switch(m){case"bestFit":{var at;const C=(at=y.filter(A=>{if(b){const I=Y(A.placement);return I===w||I==="y"}return!0}).map(A=>[A.placement,A.overflows.filter(I=>I>0).reduce((I,ae)=>I+ae,0)]).sort((A,I)=>A[1]-I[1])[0])==null?void 0:at[0];C&&(H=C);break}case"initialPlacement":H=c;break}if(r!==H)return{reset:{placement:H}}}return{}}}},je=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r,platform:s}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:l={fn:w=>{let{x,y:z}=w;return{x,y:z}}},...d}=Tt(t,e),u={x:n,y:o},a=await s.detectOverflow(e,d),f=Y(r),m=Jt(f);let h=u[m],g=u[f];const p=(w,x)=>Se(x+a[w==="y"?"top":"left"],x,x-a[w==="y"?"bottom":"right"]);i&&(h=p(m,h)),c&&(g=p(f,g));const v=l.fn({...e,[m]:h,[f]:g});return{...v,data:{x:v.x-n,y:v.y-o,enabled:{[m]:i,[f]:c}}}}}};function ht(){return typeof window<"u"}function J(t){return ee(t)?(t.nodeName||"").toLowerCase():"#document"}function M(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function B(t){var e;return(e=(ee(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ee(t){return ht()?t instanceof Node||t instanceof M(t).Node:!1}function D(t){return ht()?t instanceof Element||t instanceof M(t).Element:!1}function _(t){return ht()?t instanceof HTMLElement||t instanceof M(t).HTMLElement:!1}function Ht(t){return!ht()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof M(t).ShadowRoot}function vt(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&r!=="inline"&&r!=="contents"}function Ye(t){return/^(table|td|th)$/.test(J(t))}function wt(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const Xe=/transform|translate|scale|rotate|perspective|filter/,Ue=/paint|layout|strict|content/,j=t=>!!t&&t!=="none";let zt;function Lt(t){const e=D(t)?P(t):t;return j(e.transform)||j(e.translate)||j(e.scale)||j(e.rotate)||j(e.perspective)||!At()&&(j(e.backdropFilter)||j(e.filter))||Xe.test(e.willChange||"")||Ue.test(e.contain||"")}function qe(t){let e=q(t);for(;_(e)&&!nt(e);){if(Lt(e))return e;if(wt(e))return null;e=q(e)}return null}function At(){return zt==null&&(zt=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),zt}function nt(t){return/^(html|body|#document)$/.test(J(t))}function P(t){return M(t).getComputedStyle(t)}function yt(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function q(t){if(J(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ht(t)&&t.host||B(t);return Ht(e)?e.host:e}function oe(t){const e=q(t);return nt(e)?(t.ownerDocument||t).body:_(e)&&vt(e)?e:oe(e)}function rt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=oe(t),s=r===((o=t.ownerDocument)==null?void 0:o.body),i=M(r);if(s){const c=Mt(i);return e.concat(i,i.visualViewport||[],vt(r)?r:[],c&&n?rt(c):[])}else return e.concat(r,rt(r,[],n))}function Mt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ne(t){const e=P(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=_(t),s=r?t.offsetWidth:n,i=r?t.offsetHeight:o,c=pt(n)!==s||pt(o)!==i;return c&&(n=s,o=i),{width:n,height:o,$:c}}function Dt(t){return D(t)?t:t.contextElement}function Z(t){const e=Dt(t);if(!_(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:s}=ne(e);let i=(s?pt(n.width):n.width)/o,c=(s?pt(n.height):n.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const Ke=V(0);function re(t){const e=M(t);return!At()||!e.visualViewport?Ke:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ze(t,e,n){return e===void 0&&(e=!1),!!n&&e&&n===M(t)}function K(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=Dt(t);let i=V(1);e&&(o?D(o)&&(i=Z(o)):i=Z(t));const c=Ze(s,n,o)?re(s):V(0);let l=(r.left+c.x)/i.x,d=(r.top+c.y)/i.y,u=r.width/i.x,a=r.height/i.y;if(s&&o){const f=M(s),m=D(o)?M(o):o;let h=f,g=Mt(h);for(;g&&m!==h;){const p=Z(g),v=g.getBoundingClientRect(),w=P(g),x=v.left+(g.clientLeft+parseFloat(w.paddingLeft))*p.x,z=v.top+(g.clientTop+parseFloat(w.paddingTop))*p.y;l*=p.x,d*=p.y,u*=p.x,a*=p.y,l+=x,d+=z,h=M(g),g=Mt(h)}}return gt({width:u,height:a,x:l,y:d})}function bt(t,e){const n=yt(t).scrollLeft;return e?e.left+n:K(B(t)).left+n}function se(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-bt(t,n),r=n.top+e.scrollTop;return{x:o,y:r}}function Ge(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const s=r==="fixed",i=B(o),c=e?wt(e.floating):!1;if(o===i||c&&s)return n;let l={scrollLeft:0,scrollTop:0},d=V(1);const u=V(0),a=_(o);if((a||!s)&&((J(o)!=="body"||vt(i))&&(l=yt(o)),a)){const m=K(o);d=Z(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}const f=i&&!a&&!s?se(i,l):V(0);return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-l.scrollLeft*d.x+u.x+f.x,y:n.y*d.y-l.scrollTop*d.y+u.y+f.y}}function Je(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function Qe(t){const e=yt(t),n=t.ownerDocument.body,o=U(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=U(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let s=-e.scrollLeft+bt(t);const i=-e.scrollTop;return P(n).direction==="rtl"&&(s+=U(t.clientWidth,n.clientWidth)-o),{width:o,height:r,x:s,y:i}}const to=25;function eo(t,e,n){n===void 0&&(n="viewport");const o=n==="layoutViewport",r=M(t),s=B(t),i=r.visualViewport;let c=s.clientWidth,l=s.clientHeight,d=0,u=0;if(i){const f=!At()||e==="fixed";o?f||(d=-i.offsetLeft,u=-i.offsetTop):(c=i.width,l=i.height,f&&(d=i.offsetLeft,u=i.offsetTop))}if(bt(s)<=0){const f=s.ownerDocument,m=f.body,h=getComputedStyle(m),g=f.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,p=Math.abs(s.clientWidth-m.clientWidth-g),v=getComputedStyle(s).scrollbarGutter==="stable both-edges"?p/2:p;v<=to&&(c-=v)}return{width:c,height:l,x:d,y:u}}function oo(t,e){const n=K(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,s=Z(t),i=t.clientWidth*s.x,c=t.clientHeight*s.y,l=r*s.x,d=o*s.y;return{width:i,height:c,x:l,y:d}}function jt(t,e,n){let o;if(e==="viewport"||e==="layoutViewport")o=eo(t,n,e);else if(e==="document")o=Qe(B(t));else if(D(e))o=oo(e,n);else{const r=re(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return gt(o)}function no(t,e){const n=e.get(t);if(n)return n;let o=rt(t,[],!1).filter(c=>D(c)&&J(c)!=="body"),r=null;const s=P(t).position==="fixed";let i=s?q(t):t;for(;D(i)&&!nt(i);){const c=P(i),l=Lt(i),d=r?r.position:s?"fixed":"";!l&&(d==="fixed"||d==="absolute"&&c.position==="static")?o=o.filter(a=>a!==i):r=c,i=q(i)}return e.set(t,o),o}function ro(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[...n==="clippingAncestors"?wt(e)?[]:no(e,this._c):[].concat(n),o],c=jt(e,i[0],r);let l=c.top,d=c.right,u=c.bottom,a=c.left;for(let f=1;f<i.length;f++){const m=jt(e,i[f],r);l=U(m.top,l),d=ft(m.right,d),u=ft(m.bottom,u),a=U(m.left,a)}return{width:d-a,height:u-l,x:a,y:l}}function so(t){const{width:e,height:n}=ne(t);return{width:e,height:n}}function io(t,e,n){const o=_(e),r=B(e),s=n==="fixed",i=K(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=V(0);if((o||!s)&&((J(e)!=="body"||vt(r))&&(c=yt(e)),o)){const f=K(e,!0,s,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}!o&&r&&(l.x=bt(r));const d=r&&!o&&!s?se(r,c):V(0),u=i.left+c.scrollLeft-l.x-d.x,a=i.top+c.scrollTop-l.y-d.y;return{x:u,y:a,width:i.width,height:i.height}}function $t(t){return P(t).position==="static"}function Yt(t,e){if(!_(t)||P(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return B(t)===n&&(n=n.ownerDocument.body),n}function ie(t,e){const n=M(t);if(wt(t))return n;if(!_(t)){let r=q(t);for(;r&&!nt(r);){if(D(r)&&!$t(r))return r;r=q(r)}return n}let o=Yt(t,e);for(;o&&Ye(o)&&$t(o);)o=Yt(o,e);return o&&nt(o)&&$t(o)&&!Lt(o)?n:o||qe(t)||n}const co=async function(t){const e=this.getOffsetParent||ie,n=this.getDimensions,o=await n(t.floating);return{reference:io(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function ao(t){return P(t).direction==="rtl"}const lo={convertOffsetParentRelativeRectToViewportRelativeRect:Ge,getDocumentElement:B,getClippingRect:ro,getOffsetParent:ie,getElementRects:co,getClientRects:Je,getDimensions:so,getScale:Z,isElement:D,isRTL:ao};function ce(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function uo(t,e,n){let o=null,r;const s=B(t);function i(){var u;clearTimeout(r),(u=o)==null||u.disconnect(),o=null}function c(u,a){u===void 0&&(u=!1),a===void 0&&(a=1),i();const f=t.getBoundingClientRect(),{left:m,top:h,width:g,height:p}=f;if(u||e(),!g||!p)return;const v=dt(h),w=dt(s.clientWidth-(m+g)),x=dt(s.clientHeight-(h+p)),z=dt(m),b={rootMargin:-v+"px "+-w+"px "+-x+"px "+-z+"px",threshold:U(0,ft(1,a))||1};let $=!0;function S(L){const y=L[0].intersectionRatio;if(!ce(f,t.getBoundingClientRect()))return c();if(y!==a){if(!$)return c();y?c(!1,y):r=setTimeout(()=>{c(!1,1e-7)},1e3)}$=!1}try{o=new IntersectionObserver(S,{...b,root:s.ownerDocument})}catch{o=new IntersectionObserver(S,b)}o.observe(t)}const l=M(t),d=()=>c(n);return l.addEventListener("resize",d),c(!0),()=>{l.removeEventListener("resize",d),i()}}function fo(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,d=Dt(t),u=r||s?[...d?rt(d):[],...e?rt(e):[]]:[];u.forEach(v=>{r&&v.addEventListener("scroll",n),s&&v.addEventListener("resize",n)});const a=d&&c?uo(d,n,s):null;let f=-1,m=null;i&&(m=new ResizeObserver(v=>{let[w]=v;w&&w.target===d&&m&&e&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var x;(x=m)==null||x.observe(e)})),n()}),d&&!l&&m.observe(d),e&&m.observe(e));let h,g=l?K(t):null;l&&p();function p(){const v=K(t);g&&!ce(g,v)&&n(),g=v,h=requestAnimationFrame(p)}return n(),()=>{var v;u.forEach(w=>{r&&w.removeEventListener("scroll",n),s&&w.removeEventListener("resize",n)}),a?.(),(v=m)==null||v.disconnect(),m=null,l&&cancelAnimationFrame(h)}}const po=je,mo=He,go=(t,e,n)=>{const o=new Map,r=n??{},s={...lo,...r.platform,_c:o};return _e(t,e,{...r,platform:s})},ho=[mo({fallbackAxisSideDirection:"start",crossAxis:!1}),po()],vo=({placement:t="bottom-start",strategy:e,middleware:n=ho}={})=>{const[o,r]=X(),[s,i]=X(),[c,l]=X();return N(()=>{if(!o||!(s instanceof HTMLElement)){l(void 0);return}return fo(o,s,()=>go(o,s,{placement:t,strategy:e,middleware:n}).then(l))},[o,s,t,e,n]),{setReference:r,setFloating:i,styles:et(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},wo=t=>{const e=et(()=>({}),[]);return et(()=>Object.assign(e,t),[e,...Object.values(t)])},Xt=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,yo=({disabled:t,onFocus:e})=>{const[n,o]=X(),{focused:r,closed:s}=n||{},i=r&&!t,c=wo({closed:s,onFocus:e}),l=O(u=>o(a=>({...a,closed:u})),[]),d=O(u=>{const a=u.currentTarget;return Xt(a)?o(f=>({focused:!0,closed:!f?.closed})):a.focus()},[]);return N(()=>{if(!i)return;const u=a=>{if(a.defaultPrevented)return;const{closed:f}=c;a.key==="Escape"&&!f?(a.preventDefault(),l(!0)):["ArrowUp","Up"].includes(a.key)&&f&&(a.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!s,setClosed:l,onToggle:d,onFocus:O(u=>{const a=Xt(u.currentTarget);o({focused:a}),c.onFocus?.(a)},[c])}},bo=t=>{const e=yo(t),{onFocus:n}=e,o=Ot();return N(()=>{t.setAttribute("tabindex","0");const r=i=>{clearTimeout(o.current),n(i)},s=i=>{clearTimeout(o.current);const c=i.currentTarget;o.current=setTimeout(()=>n({currentTarget:c}),30)};return t.addEventListener("focusin",r),t.addEventListener("focusout",s),()=>{clearTimeout(o.current),t.removeEventListener("focusin",r),t.removeEventListener("focusout",s)}},[n]),e},xo=t=>t.preventDefault(),zo=st`
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
`,$o=t=>{const{placement:e,strategy:n,middleware:o,render:r}=t,{active:s,onToggle:i}=bo(t),{styles:c,setReference:l,setFloating:d}=vo({placement:e,strategy:n,middleware:o});return R` <div class="anchor" part="anchor" ${Et(l)}>
			<button
				@mousedown=${xo}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${tt(s,()=>R`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Re(c)}"
					@connected=${u=>u.target.showPopover?.()}
					${Et(d)}
					><slot></slot>${Ee([r],()=>r?.()||be)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",G($o,{styleSheets:[zo]}));const Eo=st`
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
`,Co=()=>R` <slot></slot> `;customElements.define("cosmoz-dropdown-list",G(Co,{styleSheets:[Eo]}));const Ro=({placement:t})=>R` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",G(Ro));const ko=({host:t,popoverRef:e,disabled:n,openOnHover:o,openOnFocus:r,open:s,close:i})=>{const c=Ot(),l=()=>clearTimeout(c.current),d=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const a=e.current;o&&(t.matches(":hover")||a?.matches(":hover"))||t.matches(":focus-within")||a?.matches(":focus-within")||i()},100)},u=()=>{n||(l(),s())};return N(()=>{if(!(!o||n))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",d),()=>{l(),t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",d)}},[o,n,t]),N(()=>{if(!(!r||n))return t.addEventListener("focusin",u),t.addEventListener("focusout",d),()=>{l(),t.removeEventListener("focusin",u),t.removeEventListener("focusout",d)}},[r,n,t]),{scheduleClose:d,cancelClose:l}},Mo=t=>{if(t.newState!=="open")return;const o=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of o){const s=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},Oo=st`
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
`,To=t=>{const{placement:e="bottom span-right",disabled:n,passthrough:o,openOnHover:r,openOnFocus:s}=t,i=Ot(),[c,l]=Zt("opened",!1),d=O(()=>{n||(l(!0),i.current?.showPopover?.())},[n]),u=O(()=>{l(!1),i.current?.hidePopover?.()},[]),a=O(()=>{if(n)return;i.current?.matches(":popover-open")?u():d()},[n]);N(()=>{const p=i.current;p&&(c?p.showPopover?.():p.hidePopover?.())},[c]),N(()=>{t.toggleAttribute("opened",!!c)},[c]);const{scheduleClose:f,cancelClose:m}=ko({host:t,popoverRef:i,disabled:n,openOnHover:r,openOnFocus:s,open:d,close:u}),h=s?d:a,g=O(p=>{Mo(p),l(p.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:p.newState,oldState:p.oldState,composed:!0}))},[]);return R`
		<slot name="button" @click=${h}></slot>
		${n&&o?R`<slot></slot>`:R`<div
					popover
					style="position-area: ${e}"
					@toggle=${g}
					@select=${u}
					@focusout=${f}
					@focusin=${m}
					${Et(p=>p&&(i.current=p))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",G(To,{styleSheets:[Oo],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const So=({slot:t,title:e,className:n,width:o="24",height:r="24",styles:s}={})=>R`
  <svg
    slot=${W(t)}
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
    height=${r}
    style=${W(s)}
  >
    ${tt(e,()=>xe`<title>${e}</title>`)}
    <path
      d="M21 10H3m13-8v4M8 2v4m-.2 16h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22Z"
    />
  </svg>
`;function Lo(t,e,n){return Kt(t,e*7,n)}function Ao(t,e){const n=ve(t,e?.in),o=n.getFullYear();return n.setFullYear(o+1,0,0),n.setHours(23,59,59,999),n}function Do(t,e,n){return Lo(t,-1,n)}const Po=st`
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

	/* single-date presets: a column beside the calendar, a row above it when narrow */
	.date-presets {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 0.5);
		width: calc(var(--cz-spacing) * 44);
		padding: calc(var(--cz-spacing) * 3);
		flex-shrink: 0;
		border-right: 1px solid var(--cz-color-border-secondary);
	}

	.date-presets cosmoz-button::part(button) {
		justify-content: space-between;
		font-weight: var(--cz-font-weight-medium);
	}

	.date-presets cosmoz-button[active]::part(button) {
		background: var(--cz-color-bg-secondary);
	}

	.preset-date {
		color: var(--cz-color-text-tertiary);
		font-weight: var(--cz-font-weight-regular);
		font-variant-numeric: tabular-nums;
	}

	@media (max-width: 734px) {
		.content:has(.date-presets) {
			flex-direction: column;
		}

		.date-presets {
			flex-direction: row;
			flex-wrap: wrap;
			width: auto;
			border-right: 0;
			border-bottom: 1px solid var(--cz-color-border-secondary);
		}

		.date-presets cosmoz-button {
			flex: 1 1 auto;
		}

		.date-presets cosmoz-button::part(button) {
			gap: calc(var(--cz-spacing) * 1.5);
		}
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
`,Fo=t=>{const e=et(()=>matchMedia(t),[t]),[n,o]=X(e.matches);return N(()=>{const r=s=>o(i=>i!==s.matches?s.matches:i);return e.addEventListener("change",r),()=>e.removeEventListener("change",r)},[e]),n},Wo=t=>[{label:T("Today"),start:()=>k(new Date,"yyyy-MM-dd"),end:()=>k(new Date,"yyyy-MM-dd")},{label:T("Yesterday"),start:()=>k(xt(new Date,1),"yyyy-MM-dd"),end:()=>k(xt(new Date,1),"yyyy-MM-dd")},{label:T("This week"),start:()=>k(lt(new Date,t),"yyyy-MM-dd"),end:()=>k(Kt(lt(new Date,t),6),"yyyy-MM-dd")},{label:T("Last week"),start:()=>k(Do(lt(new Date,t)),"yyyy-MM-dd"),end:()=>k(xt(lt(new Date,t),1),"yyyy-MM-dd")},{label:T("This month"),start:()=>k(Vt(new Date),"yyyy-MM-dd"),end:()=>k(Pt(new Date),"yyyy-MM-dd")},{label:T("Last month"),start:()=>k(Ft(Vt(new Date),1),"yyyy-MM-dd"),end:()=>k(Ft(Pt(new Date),1),"yyyy-MM-dd")},{label:T("This year"),start:()=>k(we(new Date),"yyyy-MM-dd"),end:()=>k(Ao(new Date),"yyyy-MM-dd")}],Vo=({presets:t,single:e,noPresets:n,locale:o,value:r,min:s,max:i,setValue:c})=>{const l=et(()=>e?[]:t??Wo(o),[e,o,t]),d=e&&!n?t??[]:[],u=d.find(f=>Ct(f.value)===r),a=O(f=>c(ut(Ct(f.value),s,i)),[s,i,c]);return{rangePresets:l,datePresets:d,activePreset:u,pickPreset:a}},Bo=t=>{const{mode:e="range",locale:n,min:o,max:r,presets:s,singleCalendar:i=!1,disabled:c,noPresets:l,triggerSize:d,triggerVariant:u}=t,a=e==="single",f=n??navigator.language,[m,h]=Zt("value"),[g,p]=X(m),v=Fo("(width < 735px)"),w=i||v||a,x=w?1:2,[z,E]=X(!1),{start:b,end:$}=le(g,e),{rangePresets:S,datePresets:L,activePreset:y,pickPreset:it}=Vo({presets:s,single:a,noPresets:l,locale:f,value:g,min:o,max:r,setValue:p}),ct=O(({newState:C})=>{C==="closed"?h(g):p(m),E(C==="open")},[g,m,E,h,p]),at=O(C=>{if(a){p(ut(C.detail.value,o,r));return}p({start:ut(C.detail.value,o,r),end:$})},[a,o,r,$,p]),F=O(C=>p({start:b,end:ut(C.detail.value,o,r)}),[o,r,b,p]),Q=O(()=>{!a&&b&&$&&de(new Date(b),new Date($))&&p({start:b,end:b})},[a,b,$,p]),H=O(()=>{b&&$&&ue(new Date($),new Date(b))&&p({start:$,end:$})},[b,$,p]);return{datePresets:L,activePreset:y,pickPreset:it,end:$,isSingleCalendar:w,locale:f,mode:e,isSingleDateMode:a,numberOfMonths:x,onEndInput:F,onStartInput:at,rangePresets:S,setValue:p,start:b,value:g,disabled:c,noPresets:l,min:o,max:r,triggerSize:d,triggerVariant:u,onStartInputBlur:Q,onEndInputBlur:H,isOpen:z,onDropdownToggle:ct}},Io=t=>{const{end:e,isSingleCalendar:n,locale:o,mode:r,isSingleDateMode:s,numberOfMonths:i,onEndInput:c,onStartInput:l,rangePresets:d,setValue:u,start:a,value:f,min:m,max:h,disabled:g,noPresets:p,triggerSize:v,triggerVariant:w="secondary",onStartInputBlur:x,onEndInputBlur:z,isOpen:E,onDropdownToggle:b,datePresets:$,activePreset:S,pickPreset:L}=Bo(t);return R`
		<cosmoz-dropdown-next
			?disabled=${g}
			@dropdown-toggle=${b}
			aria-disabled=${W(g?"true":void 0)}
		>
			<cosmoz-button
				slot="button"
				type="button"
				exportparts="button:trigger"
				variant=${w}
				size=${W(v)}
				aria-label=${T("Date picker")}
				aria-disabled=${W(g?"true":void 0)}
				aria-haspopup="dialog"
				aria-expanded=${E?"true":"false"}
				?disabled=${g}
			>
				${So()}
				${pe(a,e,o,s)}
			</cosmoz-button>

			<div class="content" role="dialog">
				${tt(!(p||n||s),()=>R`
						<div class="range-presets">
							${Bt(d,y=>y.label,y=>R`
									<cosmoz-button
										variant="tertiary"
										full-width
										?active=${Wt(y,a,e)}
										aria-pressed=${Wt(y,a,e)?"true":"false"}
										@click=${()=>me(y,u,m,h)}
										>${y.label}</cosmoz-button
									>
								`)}
						</div>
					`)}
				${tt($.length,()=>R`
						<div class="date-presets" role="group" aria-label=${T("Presets")}>
							${Bt($,y=>y.label,y=>R`
									<cosmoz-button
										variant="tertiary"
										full-width
										title=${W(y.title)}
										?active=${y===S}
										aria-pressed=${y===S?"true":"false"}
										@click=${()=>L(y)}
										>${y.label}
										<span class="preset-date"
											>${ge(Ct(y.value),o)}</span
										></cosmoz-button
									>
								`)}
						</div>
					`)}

				<div class="main">
					<cosmoz-calendar
						autofocus
						mode=${r}
						locale=${o}
						number-of-months=${i}
						.min=${W(m)}
						.max=${W(h)}
						.value=${f}
						@value-changed=${ze(u)}
					></cosmoz-calendar>

					<footer>
						<div class="footer-left">
							<cosmoz-date-input
								aria-label=${W(s?void 0:T("Start date"))}
								locale=${o}
								.value=${a}
								@value-changed=${l}
								@blur=${x}
							></cosmoz-date-input>
							${tt(!s,()=>R`
									<span>–</span>
									<cosmoz-date-input
										aria-label=${T("End date")}
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
								@click=${fe}
								>${T("OK")}</cosmoz-button
							>
						</div>
					</footer>
				</div>
			</div>
		</cosmoz-dropdown-next>
	`};customElements.define("cosmoz-datepicker",G(Io,{observedAttributes:["locale","min","max","disabled","mode","no-presets","single-calendar","trigger-size","trigger-variant"],styleSheets:[ye,Po],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));
