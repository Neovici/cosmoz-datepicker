import{s as Et,a as st,e as It,b as Ht,c as jt,g as Yt,i as ge,d as he,f as ye,h as ve,j as we,l as be}from"./calendar-D9brIPYK.js";import{k as te,m as ee,p as xe,b as rt,e as K,y as J,u as W,x as tt,z as $,f as At,w as $t,o as Q,h as ne,t as ze,s as z,A as Ce,n as Ee,v as Me,B as Xt,d as it,l as Re,C as $e,c as F}from"./helper-CazH65BF.js";import{E as St,d as M,A as Se,w as ke,t as P}from"./iframe-Cjs3Qk9h.js";import{u as Dt,n as kt}from"./date-input-BA4l71Nk.js";import"./preload-helper-PPVm8Dsz.js";const Te={},Oe=te(class extends ee{constructor(){super(...arguments),this.ot=Te}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,r)=>o===this.ot[r]))return St}else if(this.ot===e)return St;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}});const oe="important",Ae=" !"+oe,De=te(class extends ee{constructor(t){if(super(t),t.type!==xe.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const r=e[o];if(r!=null){this.ft.add(o);const s=typeof r=="string"&&r.endsWith(Ae);o.includes("-")||s?n.setProperty(o,s?r.slice(0,-11):r,s?oe:""):n[o]=r}}return St}}),Le=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Pe=rt`
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
`,Fe=()=>M`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Le(K(Fe,{styleSheets:[Pe]})));const mt=Math.min,j=Math.max,gt=Math.round,ct=Math.floor,O=t=>({x:t,y:t}),We={left:"right",right:"left",bottom:"top",top:"bottom"};function Ne(t,e,n){return j(t,mt(e,n))}function Lt(t,e){return typeof t=="function"?t(e):t}function et(t){return t.split("-")[0]}function Pt(t){return t.split("-")[1]}function re(t){return t==="x"?"y":"x"}function se(t){return t==="y"?"height":"width"}function H(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function ie(t){return re(H(t))}function Be(t,e,n){n===void 0&&(n=!1);const o=Pt(t),r=ie(t),s=se(r);let i=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=ht(i)),[i,ht(i)]}function _e(t){const e=ht(t);return[Tt(t),e,Tt(e)]}function Tt(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const Ut=["left","right"],qt=["right","left"],Ve=["top","bottom"],Ie=["bottom","top"];function He(t,e,n){switch(t){case"top":case"bottom":return n?e?qt:Ut:e?Ut:qt;case"left":case"right":return e?Ve:Ie;default:return[]}}function je(t,e,n,o){const r=Pt(t);let s=He(et(t),n==="start",o);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(Tt)))),s}function ht(t){const e=et(t);return We[e]+t.slice(e.length)}function Ye(t){var e,n,o,r;return{top:(e=t.top)!=null?e:0,right:(n=t.right)!=null?n:0,bottom:(o=t.bottom)!=null?o:0,left:(r=t.left)!=null?r:0}}function Xe(t){return typeof t!="number"?Ye(t):{top:t,right:t,bottom:t,left:t}}function yt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function Kt(t,e,n){let{reference:o,floating:r}=t;const s=H(e),i=ie(e),c=se(i),d=et(e),u=s==="y",l=o.x+o.width/2-r.width/2,a=o.y+o.height/2-r.height/2,p=o[c]/2-r[c]/2;let f;switch(d){case"top":f={x:l,y:o.y-r.height};break;case"bottom":f={x:l,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:a};break;case"left":f={x:o.x-r.width,y:a};break;default:f={x:o.x,y:o.y}}const g=Pt(e);return g&&(f[i]+=p*(g==="end"?1:-1)*(n&&u?-1:1)),f}async function Ue(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:s,rects:i,elements:c,strategy:d}=t,{boundary:u="clippingAncestors",rootBoundary:l="viewport",elementContext:a="floating",altBoundary:p=!1,padding:f=0}=Lt(e,t),g=Xe(f),m=c[p?a==="floating"?"reference":"floating":a],y=yt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(m)))==null||n?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:u,rootBoundary:l,strategy:d})),w=a==="floating"?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(v))&&await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1},E=yt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:v,strategy:d}):w);return{top:(y.top-E.top+g.top)/b.y,bottom:(E.bottom-y.bottom+g.bottom)/b.y,left:(y.left-E.left+g.left)/b.x,right:(E.right-y.right+g.right)/b.x}}const qe=50,Ke=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:i}=n,c=i.detectOverflow?i:{...i,detectOverflow:Ue},d=await(i.isRTL==null?void 0:i.isRTL(e));let u=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:l,y:a}=Kt(u,o,d),p=o,f=0;const g={};for(let h=0;h<s.length;h++){const m=s[h];if(!m)continue;const{name:y,fn:w}=m,{x:v,y:b,data:E,reset:x}=await w({x:l,y:a,initialPlacement:o,placement:p,strategy:r,middlewareData:g,rects:u,platform:c,elements:{reference:t,floating:e}});l=v??l,a=b??a,g[y]={...g[y],...E},x&&f<qe&&(f++,typeof x=="object"&&(x.placement&&(p=x.placement),x.rects&&(u=x.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):x.rects),{x:l,y:a}=Kt(u,p,d)),h=-1)}return{x:l,y:a,placement:p,strategy:r,middlewareData:g}},Ze=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:s,rects:i,initialPlacement:c,platform:d,elements:u}=e,{mainAxis:l=!0,crossAxis:a=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...m}=Lt(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const y=et(r),w=H(c),v=et(c)===c,b=await(d.isRTL==null?void 0:d.isRTL(u.floating)),E=p||(v||!h?[ht(c)]:_e(c)),x=g!=="none";!p&&x&&E.push(...je(c,h,g,b));const D=[c,...E],U=await d.detectOverflow(e,m),B=[];let S=((o=s.flip)==null?void 0:o.overflows)||[];if(l&&B.push(U[y]),a){const _=Be(r,i,b);B.push(U[_[0]],U[_[1]])}if(S=[...S,{placement:r,overflows:B}],!B.every(_=>_<=0)){var Bt,_t;const _=(((Bt=s.flip)==null?void 0:Bt.index)||0)+1,Ct=D[_];if(Ct&&(!(a==="alignment"?w!==H(Ct):!1)||S.every(R=>H(R.placement)===w?R.overflows[0]>0:!0)))return{data:{index:_,overflows:S},reset:{placement:Ct}};let G=(_t=S.filter(V=>V.overflows[0]<=0).sort((V,R)=>V.overflows[1]-R.overflows[1])[0])==null?void 0:_t.placement;if(!G)switch(f){case"bestFit":{var Vt;const V=(Vt=S.filter(R=>{if(x){const L=H(R.placement);return L===w||L==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(L=>L>0).reduce((L,me)=>L+me,0)]).sort((R,L)=>R[1]-L[1])[0])==null?void 0:Vt[0];V&&(G=V);break}case"initialPlacement":G=c;break}if(r!==G)return{reset:{placement:G}}}return{}}}},Ge=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r,platform:s}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:d={fn:w=>{let{x:v,y:b}=w;return{x:v,y:b}}},...u}=Lt(t,e),l={x:n,y:o},a=await s.detectOverflow(e,u),p=H(r),f=re(p);let g=l[f],h=l[p];const m=(w,v)=>Ne(v+a[w==="y"?"top":"left"],v,v-a[w==="y"?"bottom":"right"]);i&&(g=m(f,g)),c&&(h=m(p,h));const y=d.fn({...e,[f]:g,[p]:h});return{...y,data:{x:y.x-n,y:y.y-o,enabled:{[f]:i,[p]:c}}}}}};function vt(){return typeof window<"u"}function Z(t){return ce(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function A(t){var e;return(e=(ce(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ce(t){return vt()?t instanceof Node||t instanceof C(t).Node:!1}function k(t){return vt()?t instanceof Element||t instanceof C(t).Element:!1}function N(t){return vt()?t instanceof HTMLElement||t instanceof C(t).HTMLElement:!1}function Zt(t){return!vt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function wt(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&r!=="inline"&&r!=="contents"}function Je(t){return/^(table|td|th)$/.test(Z(t))}function bt(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const Qe=/transform|translate|scale|rotate|perspective|filter/,tn=/paint|layout|strict|content/,I=t=>!!t&&t!=="none";let Mt;function Ft(t){const e=k(t)?T(t):t;return I(e.transform)||I(e.translate)||I(e.scale)||I(e.rotate)||I(e.perspective)||!Wt()&&(I(e.backdropFilter)||I(e.filter))||Qe.test(e.willChange||"")||tn.test(e.contain||"")}function en(t){let e=Y(t);for(;N(e)&&!nt(e);){if(Ft(e))return e;if(bt(e))return null;e=Y(e)}return null}function Wt(){return Mt==null&&(Mt=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Mt}function nt(t){return/^(html|body|#document)$/.test(Z(t))}function T(t){return C(t).getComputedStyle(t)}function xt(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Y(t){if(Z(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Zt(t)&&t.host||A(t);return Zt(e)?e.host:e}function ae(t){const e=Y(t);return nt(e)?(t.ownerDocument||t).body:N(e)&&wt(e)?e:ae(e)}function ot(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=ae(t),s=r===((o=t.ownerDocument)==null?void 0:o.body),i=C(r);if(s){const c=Ot(i);return e.concat(i,i.visualViewport||[],wt(r)?r:[],c&&n?ot(c):[])}else return e.concat(r,ot(r,[],n))}function Ot(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function le(t){const e=T(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=N(t),s=r?t.offsetWidth:n,i=r?t.offsetHeight:o,c=gt(n)!==s||gt(o)!==i;return c&&(n=s,o=i),{width:n,height:o,$:c}}function Nt(t){return k(t)?t:t.contextElement}function q(t){const e=Nt(t);if(!N(e))return O(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:s}=le(e);let i=(s?gt(n.width):n.width)/o,c=(s?gt(n.height):n.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const nn=O(0);function de(t){const e=C(t);return!Wt()||!e.visualViewport?nn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function on(t,e,n){return e===void 0&&(e=!1),!!n&&e&&n===C(t)}function X(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=Nt(t);let i=O(1);e&&(o?k(o)&&(i=q(o)):i=q(t));const c=on(s,n,o)?de(s):O(0);let d=(r.left+c.x)/i.x,u=(r.top+c.y)/i.y,l=r.width/i.x,a=r.height/i.y;if(s&&o){const p=C(s),f=k(o)?C(o):o;let g=p,h=Ot(g);for(;h&&f!==g;){const m=q(h),y=h.getBoundingClientRect(),w=T(h),v=y.left+(h.clientLeft+parseFloat(w.paddingLeft))*m.x,b=y.top+(h.clientTop+parseFloat(w.paddingTop))*m.y;d*=m.x,u*=m.y,l*=m.x,a*=m.y,d+=v,u+=b,g=C(h),h=Ot(g)}}return yt({width:l,height:a,x:d,y:u})}function zt(t,e){const n=xt(t).scrollLeft;return e?e.left+n:X(A(t)).left+n}function ue(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-zt(t,n),r=n.top+e.scrollTop;return{x:o,y:r}}function rn(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const s=r==="fixed",i=A(o),c=e?bt(e.floating):!1;if(o===i||c&&s)return n;let d={scrollLeft:0,scrollTop:0},u=O(1);const l=O(0),a=N(o);if((a||!s)&&((Z(o)!=="body"||wt(i))&&(d=xt(o)),a)){const f=X(o);u=q(o),l.x=f.x+o.clientLeft,l.y=f.y+o.clientTop}const p=i&&!a&&!s?ue(i,d):O(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-d.scrollLeft*u.x+l.x+p.x,y:n.y*u.y-d.scrollTop*u.y+l.y+p.y}}function sn(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function cn(t){const e=xt(t),n=t.ownerDocument.body,o=j(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=j(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let s=-e.scrollLeft+zt(t);const i=-e.scrollTop;return T(n).direction==="rtl"&&(s+=j(t.clientWidth,n.clientWidth)-o),{width:o,height:r,x:s,y:i}}const an=25;function ln(t,e,n){n===void 0&&(n="viewport");const o=n==="layoutViewport",r=C(t),s=A(t),i=r.visualViewport;let c=s.clientWidth,d=s.clientHeight,u=0,l=0;if(i){const p=!Wt()||e==="fixed";o?p||(u=-i.offsetLeft,l=-i.offsetTop):(c=i.width,d=i.height,p&&(u=i.offsetLeft,l=i.offsetTop))}if(zt(s)<=0){const p=s.ownerDocument,f=p.body,g=getComputedStyle(f),h=p.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,m=Math.abs(s.clientWidth-f.clientWidth-h),y=getComputedStyle(s).scrollbarGutter==="stable both-edges"?m/2:m;y<=an&&(c-=y)}return{width:c,height:d,x:u,y:l}}function dn(t,e){const n=X(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,s=q(t),i=t.clientWidth*s.x,c=t.clientHeight*s.y,d=r*s.x,u=o*s.y;return{width:i,height:c,x:d,y:u}}function Gt(t,e,n){let o;if(e==="viewport"||e==="layoutViewport")o=ln(t,n,e);else if(e==="document")o=cn(A(t));else if(k(e))o=dn(e,n);else{const r=de(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return yt(o)}function un(t,e){const n=e.get(t);if(n)return n;let o=ot(t,[],!1).filter(c=>k(c)&&Z(c)!=="body"),r=null;const s=T(t).position==="fixed";let i=s?Y(t):t;for(;k(i)&&!nt(i);){const c=T(i),d=Ft(i),u=r?r.position:s?"fixed":"";!d&&(u==="fixed"||u==="absolute"&&c.position==="static")?o=o.filter(a=>a!==i):r=c,i=Y(i)}return e.set(t,o),o}function fn(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[...n==="clippingAncestors"?bt(e)?[]:un(e,this._c):[].concat(n),o],c=Gt(e,i[0],r);let d=c.top,u=c.right,l=c.bottom,a=c.left;for(let p=1;p<i.length;p++){const f=Gt(e,i[p],r);d=j(f.top,d),u=mt(f.right,u),l=mt(f.bottom,l),a=j(f.left,a)}return{width:u-a,height:l-d,x:a,y:d}}function pn(t){const{width:e,height:n}=le(t);return{width:e,height:n}}function mn(t,e,n){const o=N(e),r=A(e),s=n==="fixed",i=X(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const d=O(0);if((o||!s)&&((Z(e)!=="body"||wt(r))&&(c=xt(e)),o)){const p=X(e,!0,s,e);d.x=p.x+e.clientLeft,d.y=p.y+e.clientTop}!o&&r&&(d.x=zt(r));const u=r&&!o&&!s?ue(r,c):O(0),l=i.left+c.scrollLeft-d.x-u.x,a=i.top+c.scrollTop-d.y-u.y;return{x:l,y:a,width:i.width,height:i.height}}function Rt(t){return T(t).position==="static"}function Jt(t,e){if(!N(t)||T(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return A(t)===n&&(n=n.ownerDocument.body),n}function fe(t,e){const n=C(t);if(bt(t))return n;if(!N(t)){let r=Y(t);for(;r&&!nt(r);){if(k(r)&&!Rt(r))return r;r=Y(r)}return n}let o=Jt(t,e);for(;o&&Je(o)&&Rt(o);)o=Jt(o,e);return o&&nt(o)&&Rt(o)&&!Ft(o)?n:o||en(t)||n}const gn=async function(t){const e=this.getOffsetParent||fe,n=this.getDimensions,o=await n(t.floating);return{reference:mn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function hn(t){return T(t).direction==="rtl"}const yn={convertOffsetParentRelativeRectToViewportRelativeRect:rn,getDocumentElement:A,getClippingRect:fn,getOffsetParent:fe,getElementRects:gn,getClientRects:sn,getDimensions:pn,getScale:q,isElement:k,isRTL:hn};function pe(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function vn(t,e,n){let o=null,r;const s=A(t);function i(){var l;clearTimeout(r),(l=o)==null||l.disconnect(),o=null}function c(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),i();const p=t.getBoundingClientRect(),{left:f,top:g,width:h,height:m}=p;if(l||e(),!h||!m)return;const y=ct(g),w=ct(s.clientWidth-(f+h)),v=ct(s.clientHeight-(g+m)),b=ct(f),x={rootMargin:-y+"px "+-w+"px "+-v+"px "+-b+"px",threshold:j(0,mt(1,a))||1};let D=!0;function U(B){const S=B[0].intersectionRatio;if(!pe(p,t.getBoundingClientRect()))return c();if(S!==a){if(!D)return c();S?c(!1,S):r=setTimeout(()=>{c(!1,1e-7)},1e3)}D=!1}try{o=new IntersectionObserver(U,{...x,root:s.ownerDocument})}catch{o=new IntersectionObserver(U,x)}o.observe(t)}const d=C(t),u=()=>c(n);return d.addEventListener("resize",u),c(!0),()=>{d.removeEventListener("resize",u),i()}}function wn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:d=!1}=o,u=Nt(t),l=r||s?[...u?ot(u):[],...e?ot(e):[]]:[];l.forEach(y=>{r&&y.addEventListener("scroll",n),s&&y.addEventListener("resize",n)});const a=u&&c?vn(u,n,s):null;let p=-1,f=null;i&&(f=new ResizeObserver(y=>{let[w]=y;w&&w.target===u&&f&&e&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var v;(v=f)==null||v.observe(e)})),n()}),u&&!d&&f.observe(u),e&&f.observe(e));let g,h=d?X(t):null;d&&m();function m(){const y=X(t);h&&!pe(h,y)&&n(),h=y,g=requestAnimationFrame(m)}return n(),()=>{var y;l.forEach(w=>{r&&w.removeEventListener("scroll",n),s&&w.removeEventListener("resize",n)}),a?.(),(y=f)==null||y.disconnect(),f=null,d&&cancelAnimationFrame(g)}}const bn=Ge,xn=Ze,zn=(t,e,n)=>{const o=new Map,r=n??{},s={...yn,...r.platform,_c:o};return Ke(t,e,{...r,platform:s})},Cn=[xn({fallbackAxisSideDirection:"start",crossAxis:!1}),bn()],En=({placement:t="bottom-start",strategy:e,middleware:n=Cn}={})=>{const[o,r]=J(),[s,i]=J(),[c,d]=J();return W(()=>{if(!o||!(s instanceof HTMLElement)){d(void 0);return}return wn(o,s,()=>zn(o,s,{placement:t,strategy:e,middleware:n}).then(d))},[o,s,t,e,n]),{setReference:r,setFloating:i,styles:tt(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Mn=t=>{const e=tt(()=>({}),[]);return tt(()=>Object.assign(e,t),[e,...Object.values(t)])},Qt=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,Rn=({disabled:t,onFocus:e})=>{const[n,o]=J(),{focused:r,closed:s}=n||{},i=r&&!t,c=Mn({closed:s,onFocus:e}),d=$(l=>o(a=>({...a,closed:l})),[]),u=$(l=>{const a=l.currentTarget;return Qt(a)?o(p=>({focused:!0,closed:!p?.closed})):a.focus()},[]);return W(()=>{if(!i)return;const l=a=>{if(a.defaultPrevented)return;const{closed:p}=c;a.key==="Escape"&&!p?(a.preventDefault(),d(!0)):["ArrowUp","Up"].includes(a.key)&&p&&(a.preventDefault(),d(!1))};return document.addEventListener("keydown",l,!0),()=>document.removeEventListener("keydown",l,!0)},[i]),{focused:i,active:i&&!s,setClosed:d,onToggle:u,onFocus:$(l=>{const a=Qt(l.currentTarget);o({focused:a}),c.onFocus?.(a)},[c])}},$n=t=>{const e=Rn(t),{onFocus:n}=e,o=Dt();return W(()=>{t.setAttribute("tabindex","0");const r=i=>{clearTimeout(o.current),n(i)},s=i=>{clearTimeout(o.current);const c=i.currentTarget;o.current=setTimeout(()=>n({currentTarget:c}),30)};return t.addEventListener("focusin",r),t.addEventListener("focusout",s),()=>{clearTimeout(o.current),t.removeEventListener("focusin",r),t.removeEventListener("focusout",s)}},[n]),e},Sn=t=>t.preventDefault(),kn=rt`
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
`,Tn=t=>{const{placement:e,strategy:n,middleware:o,render:r}=t,{active:s,onToggle:i}=$n(t),{styles:c,setReference:d,setFloating:u}=En({placement:e,strategy:n,middleware:o});return M` <div class="anchor" part="anchor" ${kt(d)}>
			<button
				@mousedown=${Sn}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${At(s,()=>M`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${De(c)}"
					@connected=${l=>l.target.showPopover?.()}
					${kt(u)}
					><slot></slot>${Oe([r],()=>r?.()||Se)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",K(Tn,{styleSheets:[kn]}));const On=rt`
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
`,An=()=>M` <slot></slot> `;customElements.define("cosmoz-dropdown-list",K(An,{styleSheets:[On]}));const Dn=({placement:t})=>M` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",K(Dn));const Ln=({host:t,popoverRef:e,disabled:n,openOnHover:o,openOnFocus:r,open:s,close:i})=>{const c=Dt(),d=()=>clearTimeout(c.current),u=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const a=e.current;o&&(t.matches(":hover")||a?.matches(":hover"))||t.matches(":focus-within")||a?.matches(":focus-within")||i()},100)},l=()=>{n||(d(),s())};return W(()=>{if(!(!o||n))return t.addEventListener("pointerenter",l),t.addEventListener("pointerleave",u),()=>{d(),t.removeEventListener("pointerenter",l),t.removeEventListener("pointerleave",u)}},[o,n,t]),W(()=>{if(!(!r||n))return t.addEventListener("focusin",l),t.addEventListener("focusout",u),()=>{d(),t.removeEventListener("focusin",l),t.removeEventListener("focusout",u)}},[r,n,t]),{scheduleClose:u,cancelClose:d}},Pn=t=>{if(t.newState!=="open")return;const o=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of o){const s=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},Fn=rt`
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
`,Wn=t=>{const{placement:e="bottom span-right",disabled:n,passthrough:o,openOnHover:r,openOnFocus:s}=t,i=Dt(),[c,d]=$t("opened",!1),u=$(()=>{n||(d(!0),i.current?.showPopover?.())},[n]),l=$(()=>{d(!1),i.current?.hidePopover?.()},[]),a=$(()=>{if(n)return;i.current?.matches(":popover-open")?l():u()},[n]);W(()=>{const m=i.current;m&&(c?m.showPopover?.():m.hidePopover?.())},[c]),W(()=>{t.toggleAttribute("opened",!!c)},[c]);const{scheduleClose:p,cancelClose:f}=Ln({host:t,popoverRef:i,disabled:n,openOnHover:r,openOnFocus:s,open:u,close:l}),g=s?u:a,h=$(m=>{Pn(m),d(m.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:m.newState,oldState:m.oldState,composed:!0}))},[]);return M`
		<slot name="button" @click=${g}></slot>
		${n&&o?M`<slot></slot>`:M`<div
					popover
					style="position-area: ${e}"
					@toggle=${h}
					@select=${l}
					@focusout=${p}
					@focusin=${f}
					${kt(m=>m&&(i.current=m))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",K(Wn,{styleSheets:[Fn],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Nn=({slot:t,title:e,className:n,width:o="24",height:r="24",styles:s}={})=>M`
  <svg
    slot=${Q(t)}
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
    style=${Q(s)}
  >
    ${At(e,()=>ke`<title>${e}</title>`)}
    <path
      d="M21 10H3m13-8v4M8 2v4m-.2 16h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22Z"
    />
  </svg>
`;function Bn(t,e,n){return ne(t,e*7,n)}function _n(t,e){const n=ze(t,e?.in),o=n.getFullYear();return n.setFullYear(o+1,0,0),n.setHours(23,59,59,999),n}function Vn(t,e,n){return Bn(t,-1,n)}const In=rt`
	.content {
		display: flex;
		background: var(--cz-color-bg-primary);
		border: 1px solid var(--cz-color-border-secondary);
		border-radius: var(--cz-radius-2xl);
		box-shadow: var(--cz-shadow-xl);
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

	:host([single-calendar]) {
		.range-presets {
			display: none;
		}

		cosmoz-calendar {
			display: flex;
			justify-content: center;
			padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 8);
		}

		footer {
			flex-direction: column;
		}
	}

	@media (max-width: 734px) {
		cosmoz-calendar {
			display: flex;
			justify-content: center;
			padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 8);
		}

		footer {
			flex-direction: column;
		}
	}
`,Hn=t=>[{label:P("Today"),start:()=>z(new Date,"yyyy-MM-dd"),end:()=>z(new Date,"yyyy-MM-dd")},{label:P("Yesterday"),start:()=>z(Et(new Date,1),"yyyy-MM-dd"),end:()=>z(Et(new Date,1),"yyyy-MM-dd")},{label:P("This week"),start:()=>z(st(new Date,t),"yyyy-MM-dd"),end:()=>z(ne(st(new Date,t),6),"yyyy-MM-dd")},{label:P("Last week"),start:()=>z(Vn(st(new Date,t)),"yyyy-MM-dd"),end:()=>z(Et(st(new Date,t),1),"yyyy-MM-dd")},{label:P("This month"),start:()=>z(Ht(new Date),"yyyy-MM-dd"),end:()=>z(It(new Date),"yyyy-MM-dd")},{label:P("Last month"),start:()=>z(jt(Ht(new Date),1),"yyyy-MM-dd"),end:()=>z(jt(It(new Date),1),"yyyy-MM-dd")},{label:P("This year"),start:()=>z(Ce(new Date),"yyyy-MM-dd"),end:()=>z(_n(new Date),"yyyy-MM-dd")}],jn=t=>{const e=tt(()=>matchMedia(t),[t]),[n,o]=J(e.matches);return W(()=>{const r=s=>o(i=>i!==s.matches?s.matches:i);return e.addEventListener("change",r),()=>e.removeEventListener("change",r)},[e]),n},Yn=t=>{const{locale:e,min:n,max:o,presets:r,singleCalendar:s=!1,disabled:i,noPresets:c,triggerSize:d,triggerVariant:u}=t,l=e??navigator.language,[a,p]=$t("start"),[f,g]=$t("end"),h=jn("(width < 735px)"),m=s||h,y=m?1:2,w=tt(()=>r??Hn(l),[l,r]),v=$(D=>p(Yt(D.detail.value,n,o)),[n,o]),b=$(D=>g(Yt(D.detail.value,n,o)),[n,o]),E=$(()=>{a&&f&&ge(new Date(a),new Date(f))&&g(a)},[a,f]),x=$(()=>{a&&f&&he(new Date(f),new Date(a))&&p(f)},[a,f]);return{end:f,isSingleCalendar:m,locale:l,numberOfMonths:y,onEndInput:b,onStartInput:v,rangePresets:w,setEnd:g,setStart:p,start:a,disabled:i,noPresets:c,min:n,max:o,triggerSize:d,triggerVariant:u,onStartInputBlur:E,onEndInputBlur:x}},Xn=t=>{const{end:e,isSingleCalendar:n,locale:o,numberOfMonths:r,onEndInput:s,onStartInput:i,rangePresets:c,setEnd:d,setStart:u,start:l,min:a,max:p,disabled:f,noPresets:g,triggerSize:h,triggerVariant:m="secondary",onStartInputBlur:y,onEndInputBlur:w}=Yn(t);return M`
		<cosmoz-dropdown-next ?disabled=${f}>
			<cosmoz-button
				slot="button"
				type="button"
				exposedparts="button: trigger"
				variant=${m}
				size=${Q(h)}
				?disabled=${f}
				>${Nn()} ${ve(l,e,o)}</cosmoz-button
			>

			<div class="content">
				${At(!(g||n),()=>M`
						<div class="range-presets">
							${Me(c,v=>v.label,v=>M`
									<cosmoz-button
										variant="tertiary"
										full-width
										?active=${we(v,l,e)}
										@click=${()=>be(v,u,d,a,p)}
										>${v.label}</cosmoz-button
									>
								`)}
						</div>
					`)}

				<div class="main">
					<cosmoz-calendar
						locale=${o}
						number-of-months=${r}
						.min=${Q(a)}
						.max=${Q(p)}
						.start=${l}
						.end=${e}
						@start-changed=${Xt(u)}
						@end-changed=${Xt(d)}
					></cosmoz-calendar>

					<footer>
						<div class="footer-left">
							<cosmoz-date-input
								locale=${o}
								.value=${l}
								@value-changed=${i}
								@blur=${y}
							></cosmoz-date-input>
							<span>–</span>
							<cosmoz-date-input
								locale=${o}
								.value=${e}
								@value-changed=${s}
								@blur=${w}
							></cosmoz-date-input>
						</div>
						<div>
							<cosmoz-button
								?full-width=${n}
								@click=${ye}
								>${P("OK")}</cosmoz-button
							>
						</div>
					</footer>
				</div>
			</div>
		</cosmoz-dropdown-next>
	`};customElements.define("cosmoz-datepicker",K(Xn,{observedAttributes:["locale","min","max","disabled","no-presets","single-calendar","trigger-size","trigger-variant"],styleSheets:[Ee,In],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));const Jn={title:"CosmozDatepicker",component:"cosmoz-datepicker",tags:["autodocs"],render:$e,argTypes:{locale:Re,start:it,end:it,min:it,max:it,disabled:{control:"boolean",description:"Disables opening the datepicker dropdown."},noPresets:{control:"boolean",description:"Hides the built-in range preset buttons."},singleCalendar:{control:"boolean",description:"Forces a single calendar month layout."},customPresets:{control:"boolean",description:"Uses a small custom presets array."},triggerSize:{control:"select",options:["sm","md","lg","xl"],description:"Optional cosmoz-button trigger size."},triggerVariant:{control:"select",options:["primary","secondary","tertiary"],description:"cosmoz-button trigger variant."}},args:{start:F(1),end:F(4),min:"",max:"",disabled:!1,noPresets:!1,singleCalendar:!1,customPresets:!1,triggerSize:"",triggerVariant:"secondary"}},at={},lt={args:{start:"",end:""}},dt={args:{start:F(11),end:F(14),min:F(4),max:F(24)}},ut={args:{start:F(11),end:F(14),singleCalendar:!0}},ft={args:{customPresets:!0}},pt={args:{noPresets:!0}};at.parameters={...at.parameters,docs:{...at.parameters?.docs,source:{originalSource:"{}",...at.parameters?.docs?.source}}};lt.parameters={...lt.parameters,docs:{...lt.parameters?.docs,source:{originalSource:`{
  args: {
    start: '',
    end: ''
  }
}`,...lt.parameters?.docs?.source}}};dt.parameters={...dt.parameters,docs:{...dt.parameters?.docs,source:{originalSource:`{
  args: {
    start: currentMonthDate(11),
    end: currentMonthDate(14),
    min: currentMonthDate(4),
    max: currentMonthDate(24)
  }
}`,...dt.parameters?.docs?.source}}};ut.parameters={...ut.parameters,docs:{...ut.parameters?.docs,source:{originalSource:`{
  args: {
    start: currentMonthDate(11),
    end: currentMonthDate(14),
    singleCalendar: true
  }
}`,...ut.parameters?.docs?.source}}};ft.parameters={...ft.parameters,docs:{...ft.parameters?.docs,source:{originalSource:`{
  args: {
    customPresets: true
  }
}`,...ft.parameters?.docs?.source}}};pt.parameters={...pt.parameters,docs:{...pt.parameters?.docs,source:{originalSource:`{
  args: {
    noPresets: true
  }
}`,...pt.parameters?.docs?.source}}};const Qn=["Datepicker","Empty","MinMax","SingleCalendar","CustomPresets","NoPresets"];export{ft as CustomPresets,at as Datepicker,lt as Empty,dt as MinMax,pt as NoPresets,ut as SingleCalendar,Qn as __namedExportsOrder,Jn as default};
