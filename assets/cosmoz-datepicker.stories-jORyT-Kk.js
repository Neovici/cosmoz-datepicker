import{s as St,a as st,e as It,b as Ht,u as ge,g as Mt,i as he,c as ye,d as ve,f as we,h as be,l as xe}from"./calendar-BuWt50W5.js";import{p as Qt,q as te,s as ze,e as rt,f as K,B as J,u as N,A as tt,C as $,g as mt,z as ee,o as Q,j as ne,t as Ce,w as C,x as jt,D as Ee,n as Se,y as Me,E as Re,F as $e,d as Yt,a as ke,m as De,l as Te,G as Ae,c as A}from"./helper-D02Nojs0.js";import{E as kt,d as S,A as Oe,w as Le,t as B}from"./iframe-DR6klARx.js";import{u as Ot,n as Dt}from"./date-input-C7Yjz1Ss.js";import"./preload-helper-PPVm8Dsz.js";const Pe={},Fe=Qt(class extends te{constructor(){super(...arguments),this.ot=Pe}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,r)=>n===this.ot[r]))return kt}else if(this.ot===e)return kt;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}});const oe="important",Be=" !"+oe,Ne=Qt(class extends te{constructor(t){if(super(t),t.type!==ze.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const r=e[n];if(r!=null){this.ft.add(n);const s=typeof r=="string"&&r.endsWith(Be);n.includes("-")||s?o.setProperty(n,s?r.slice(0,-11):r,s?oe:""):o[n]=r}}return kt}}),Ve=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},We=rt`
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
`,_e=()=>S`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Ve(K(_e,{styleSheets:[We]})));const gt=Math.min,j=Math.max,ht=Math.round,it=Math.floor,O=t=>({x:t,y:t}),Ie={left:"right",right:"left",bottom:"top",top:"bottom"};function He(t,e,o){return j(t,gt(e,o))}function Lt(t,e){return typeof t=="function"?t(e):t}function et(t){return t.split("-")[0]}function Pt(t){return t.split("-")[1]}function re(t){return t==="x"?"y":"x"}function se(t){return t==="y"?"height":"width"}function H(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function ie(t){return re(H(t))}function je(t,e,o){o===void 0&&(o=!1);const n=Pt(t),r=ie(t),s=se(r);let i=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=yt(i)),[i,yt(i)]}function Ye(t){const e=yt(t);return[Tt(t),e,Tt(e)]}function Tt(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const Xt=["left","right"],qt=["right","left"],Xe=["top","bottom"],qe=["bottom","top"];function Ue(t,e,o){switch(t){case"top":case"bottom":return o?e?qt:Xt:e?Xt:qt;case"left":case"right":return e?Xe:qe;default:return[]}}function Ke(t,e,o,n){const r=Pt(t);let s=Ue(et(t),o==="start",n);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(Tt)))),s}function yt(t){const e=et(t);return Ie[e]+t.slice(e.length)}function Ge(t){var e,o,n,r;return{top:(e=t.top)!=null?e:0,right:(o=t.right)!=null?o:0,bottom:(n=t.bottom)!=null?n:0,left:(r=t.left)!=null?r:0}}function Ze(t){return typeof t!="number"?Ge(t):{top:t,right:t,bottom:t,left:t}}function vt(t){const{x:e,y:o,width:n,height:r}=t;return{width:n,height:r,top:o,left:e,right:e+n,bottom:o+r,x:e,y:o}}function Ut(t,e,o){let{reference:n,floating:r}=t;const s=H(e),i=ie(e),c=se(i),l=et(e),d=s==="y",u=n.x+n.width/2-r.width/2,a=n.y+n.height/2-r.height/2,f=n[c]/2-r[c]/2;let m;switch(l){case"top":m={x:u,y:n.y-r.height};break;case"bottom":m={x:u,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:a};break;case"left":m={x:n.x-r.width,y:a};break;default:m={x:n.x,y:n.y}}const g=Pt(e);return g&&(m[i]+=f*(g==="end"?1:-1)*(o&&d?-1:1)),m}async function Je(t,e){var o;e===void 0&&(e={});const{x:n,y:r,platform:s,rects:i,elements:c,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:a="floating",altBoundary:f=!1,padding:m=0}=Lt(e,t),g=Ze(m),p=c[f?a==="floating"?"reference":"floating":a],y=vt(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(p)))==null||o?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:d,rootBoundary:u,strategy:l})),v=a==="floating"?{x:n,y:r,width:i.floating.width,height:i.floating.height}:i.reference,w=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(w))&&await(s.getScale==null?void 0:s.getScale(w))||{x:1,y:1},x=vt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:w,strategy:l}):v);return{top:(y.top-x.top+g.top)/b.y,bottom:(x.bottom-y.bottom+g.bottom)/b.y,left:(y.left-x.left+g.left)/b.x,right:(x.right-y.right+g.right)/b.x}}const Qe=50,tn=async(t,e,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:s=[],platform:i}=o,c=i.detectOverflow?i:{...i,detectOverflow:Je},l=await(i.isRTL==null?void 0:i.isRTL(e));let d=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:a}=Ut(d,n,l),f=n,m=0;const g={};for(let h=0;h<s.length;h++){const p=s[h];if(!p)continue;const{name:y,fn:v}=p,{x:w,y:b,data:x,reset:z}=await v({x:u,y:a,initialPlacement:n,placement:f,strategy:r,middlewareData:g,rects:d,platform:c,elements:{reference:t,floating:e}});u=w??u,a=b??a,g[y]={...g[y],...x},z&&m<Qe&&(m++,typeof z=="object"&&(z.placement&&(f=z.placement),z.rects&&(d=z.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):z.rects),{x:u,y:a}=Ut(d,f,l)),h=-1)}return{x:u,y:a,placement:f,strategy:r,middlewareData:g}},en=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:r,middlewareData:s,rects:i,initialPlacement:c,platform:l,elements:d}=e,{mainAxis:u=!0,crossAxis:a=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...p}=Lt(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const y=et(r),v=H(c),w=et(c)===c,b=await(l.isRTL==null?void 0:l.isRTL(d.floating)),x=f||(w||!h?[yt(c)]:Ye(c)),z=g!=="none";!f&&z&&x.push(...Ke(c,h,g,b));const q=[c,...x],P=await l.detectOverflow(e,p),M=[];let k=((n=s.flip)==null?void 0:n.overflows)||[];if(u&&M.push(P[y]),a){const W=je(r,i,b);M.push(P[W[0]],P[W[1]])}if(k=[...k,{placement:r,overflows:M}],!M.every(W=>W<=0)){var Vt,Wt;const W=(((Vt=s.flip)==null?void 0:Vt.index)||0)+1,Et=q[W];if(Et&&(!(a==="alignment"?v!==H(Et):!1)||k.every(R=>H(R.placement)===v?R.overflows[0]>0:!0)))return{data:{index:W,overflows:k},reset:{placement:Et}};let Z=(Wt=k.filter(_=>_.overflows[0]<=0).sort((_,R)=>_.overflows[1]-R.overflows[1])[0])==null?void 0:Wt.placement;if(!Z)switch(m){case"bestFit":{var _t;const _=(_t=k.filter(R=>{if(z){const F=H(R.placement);return F===v||F==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(F=>F>0).reduce((F,me)=>F+me,0)]).sort((R,F)=>R[1]-F[1])[0])==null?void 0:_t[0];_&&(Z=_);break}case"initialPlacement":Z=c;break}if(r!==Z)return{reset:{placement:Z}}}return{}}}},nn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:r,platform:s}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:l={fn:v=>{let{x:w,y:b}=v;return{x:w,y:b}}},...d}=Lt(t,e),u={x:o,y:n},a=await s.detectOverflow(e,d),f=H(r),m=re(f);let g=u[m],h=u[f];const p=(v,w)=>He(w+a[v==="y"?"top":"left"],w,w-a[v==="y"?"bottom":"right"]);i&&(g=p(m,g)),c&&(h=p(f,h));const y=l.fn({...e,[m]:g,[f]:h});return{...y,data:{x:y.x-o,y:y.y-n,enabled:{[m]:i,[f]:c}}}}}};function wt(){return typeof window<"u"}function G(t){return ce(t)?(t.nodeName||"").toLowerCase():"#document"}function E(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function L(t){var e;return(e=(ce(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ce(t){return wt()?t instanceof Node||t instanceof E(t).Node:!1}function D(t){return wt()?t instanceof Element||t instanceof E(t).Element:!1}function V(t){return wt()?t instanceof HTMLElement||t instanceof E(t).HTMLElement:!1}function Kt(t){return!wt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof E(t).ShadowRoot}function bt(t){const{overflow:e,overflowX:o,overflowY:n,display:r}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&r!=="inline"&&r!=="contents"}function on(t){return/^(table|td|th)$/.test(G(t))}function xt(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const rn=/transform|translate|scale|rotate|perspective|filter/,sn=/paint|layout|strict|content/,I=t=>!!t&&t!=="none";let Rt;function Ft(t){const e=D(t)?T(t):t;return I(e.transform)||I(e.translate)||I(e.scale)||I(e.rotate)||I(e.perspective)||!Bt()&&(I(e.backdropFilter)||I(e.filter))||rn.test(e.willChange||"")||sn.test(e.contain||"")}function cn(t){let e=Y(t);for(;V(e)&&!nt(e);){if(Ft(e))return e;if(xt(e))return null;e=Y(e)}return null}function Bt(){return Rt==null&&(Rt=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Rt}function nt(t){return/^(html|body|#document)$/.test(G(t))}function T(t){return E(t).getComputedStyle(t)}function zt(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Y(t){if(G(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Kt(t)&&t.host||L(t);return Kt(e)?e.host:e}function ae(t){const e=Y(t);return nt(e)?(t.ownerDocument||t).body:V(e)&&bt(e)?e:ae(e)}function ot(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=ae(t),s=r===((n=t.ownerDocument)==null?void 0:n.body),i=E(r);if(s){const c=At(i);return e.concat(i,i.visualViewport||[],bt(r)?r:[],c&&o?ot(c):[])}else return e.concat(r,ot(r,[],o))}function At(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function le(t){const e=T(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=V(t),s=r?t.offsetWidth:o,i=r?t.offsetHeight:n,c=ht(o)!==s||ht(n)!==i;return c&&(o=s,n=i),{width:o,height:n,$:c}}function Nt(t){return D(t)?t:t.contextElement}function U(t){const e=Nt(t);if(!V(e))return O(1);const o=e.getBoundingClientRect(),{width:n,height:r,$:s}=le(e);let i=(s?ht(o.width):o.width)/n,c=(s?ht(o.height):o.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const an=O(0);function de(t){const e=E(t);return!Bt()||!e.visualViewport?an:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ln(t,e,o){return e===void 0&&(e=!1),!!o&&e&&o===E(t)}function X(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),s=Nt(t);let i=O(1);e&&(n?D(n)&&(i=U(n)):i=U(t));const c=ln(s,o,n)?de(s):O(0);let l=(r.left+c.x)/i.x,d=(r.top+c.y)/i.y,u=r.width/i.x,a=r.height/i.y;if(s&&n){const f=E(s),m=D(n)?E(n):n;let g=f,h=At(g);for(;h&&m!==g;){const p=U(h),y=h.getBoundingClientRect(),v=T(h),w=y.left+(h.clientLeft+parseFloat(v.paddingLeft))*p.x,b=y.top+(h.clientTop+parseFloat(v.paddingTop))*p.y;l*=p.x,d*=p.y,u*=p.x,a*=p.y,l+=w,d+=b,g=E(h),h=At(g)}}return vt({width:u,height:a,x:l,y:d})}function Ct(t,e){const o=zt(t).scrollLeft;return e?e.left+o:X(L(t)).left+o}function ue(t,e){const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-Ct(t,o),r=o.top+e.scrollTop;return{x:n,y:r}}function dn(t){let{elements:e,rect:o,offsetParent:n,strategy:r}=t;const s=r==="fixed",i=L(n),c=e?xt(e.floating):!1;if(n===i||c&&s)return o;let l={scrollLeft:0,scrollTop:0},d=O(1);const u=O(0),a=V(n);if((a||!s)&&((G(n)!=="body"||bt(i))&&(l=zt(n)),a)){const m=X(n);d=U(n),u.x=m.x+n.clientLeft,u.y=m.y+n.clientTop}const f=i&&!a&&!s?ue(i,l):O(0);return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-l.scrollLeft*d.x+u.x+f.x,y:o.y*d.y-l.scrollTop*d.y+u.y+f.y}}function un(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function fn(t){const e=zt(t),o=t.ownerDocument.body,n=j(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=j(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-e.scrollLeft+Ct(t);const i=-e.scrollTop;return T(o).direction==="rtl"&&(s+=j(t.clientWidth,o.clientWidth)-n),{width:n,height:r,x:s,y:i}}const pn=25;function mn(t,e,o){o===void 0&&(o="viewport");const n=o==="layoutViewport",r=E(t),s=L(t),i=r.visualViewport;let c=s.clientWidth,l=s.clientHeight,d=0,u=0;if(i){const f=!Bt()||e==="fixed";n?f||(d=-i.offsetLeft,u=-i.offsetTop):(c=i.width,l=i.height,f&&(d=i.offsetLeft,u=i.offsetTop))}if(Ct(s)<=0){const f=s.ownerDocument,m=f.body,g=getComputedStyle(m),h=f.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,p=Math.abs(s.clientWidth-m.clientWidth-h),y=getComputedStyle(s).scrollbarGutter==="stable both-edges"?p/2:p;y<=pn&&(c-=y)}return{width:c,height:l,x:d,y:u}}function gn(t,e){const o=X(t,!0,e==="fixed"),n=o.top+t.clientTop,r=o.left+t.clientLeft,s=U(t),i=t.clientWidth*s.x,c=t.clientHeight*s.y,l=r*s.x,d=n*s.y;return{width:i,height:c,x:l,y:d}}function Gt(t,e,o){let n;if(e==="viewport"||e==="layoutViewport")n=mn(t,o,e);else if(e==="document")n=fn(L(t));else if(D(e))n=gn(e,o);else{const r=de(t);n={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return vt(n)}function hn(t,e){const o=e.get(t);if(o)return o;let n=ot(t,[],!1).filter(c=>D(c)&&G(c)!=="body"),r=null;const s=T(t).position==="fixed";let i=s?Y(t):t;for(;D(i)&&!nt(i);){const c=T(i),l=Ft(i),d=r?r.position:s?"fixed":"";!l&&(d==="fixed"||d==="absolute"&&c.position==="static")?n=n.filter(a=>a!==i):r=c,i=Y(i)}return e.set(t,n),n}function yn(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t;const i=[...o==="clippingAncestors"?xt(e)?[]:hn(e,this._c):[].concat(o),n],c=Gt(e,i[0],r);let l=c.top,d=c.right,u=c.bottom,a=c.left;for(let f=1;f<i.length;f++){const m=Gt(e,i[f],r);l=j(m.top,l),d=gt(m.right,d),u=gt(m.bottom,u),a=j(m.left,a)}return{width:d-a,height:u-l,x:a,y:l}}function vn(t){const{width:e,height:o}=le(t);return{width:e,height:o}}function wn(t,e,o){const n=V(e),r=L(e),s=o==="fixed",i=X(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=O(0);if((n||!s)&&((G(e)!=="body"||bt(r))&&(c=zt(e)),n)){const f=X(e,!0,s,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}!n&&r&&(l.x=Ct(r));const d=r&&!n&&!s?ue(r,c):O(0),u=i.left+c.scrollLeft-l.x-d.x,a=i.top+c.scrollTop-l.y-d.y;return{x:u,y:a,width:i.width,height:i.height}}function $t(t){return T(t).position==="static"}function Zt(t,e){if(!V(t)||T(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return L(t)===o&&(o=o.ownerDocument.body),o}function fe(t,e){const o=E(t);if(xt(t))return o;if(!V(t)){let r=Y(t);for(;r&&!nt(r);){if(D(r)&&!$t(r))return r;r=Y(r)}return o}let n=Zt(t,e);for(;n&&on(n)&&$t(n);)n=Zt(n,e);return n&&nt(n)&&$t(n)&&!Ft(n)?o:n||cn(t)||o}const bn=async function(t){const e=this.getOffsetParent||fe,o=this.getDimensions,n=await o(t.floating);return{reference:wn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function xn(t){return T(t).direction==="rtl"}const zn={convertOffsetParentRelativeRectToViewportRelativeRect:dn,getDocumentElement:L,getClippingRect:yn,getOffsetParent:fe,getElementRects:bn,getClientRects:un,getDimensions:vn,getScale:U,isElement:D,isRTL:xn};function pe(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Cn(t,e,o){let n=null,r;const s=L(t);function i(){var u;clearTimeout(r),(u=n)==null||u.disconnect(),n=null}function c(u,a){u===void 0&&(u=!1),a===void 0&&(a=1),i();const f=t.getBoundingClientRect(),{left:m,top:g,width:h,height:p}=f;if(u||e(),!h||!p)return;const y=it(g),v=it(s.clientWidth-(m+h)),w=it(s.clientHeight-(g+p)),b=it(m),z={rootMargin:-y+"px "+-v+"px "+-w+"px "+-b+"px",threshold:j(0,gt(1,a))||1};let q=!0;function P(M){const k=M[0].intersectionRatio;if(!pe(f,t.getBoundingClientRect()))return c();if(k!==a){if(!q)return c();k?c(!1,k):r=setTimeout(()=>{c(!1,1e-7)},1e3)}q=!1}try{n=new IntersectionObserver(P,{...z,root:s.ownerDocument})}catch{n=new IntersectionObserver(P,z)}n.observe(t)}const l=E(t),d=()=>c(o);return l.addEventListener("resize",d),c(!0),()=>{l.removeEventListener("resize",d),i()}}function En(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,d=Nt(t),u=r||s?[...d?ot(d):[],...e?ot(e):[]]:[];u.forEach(y=>{r&&y.addEventListener("scroll",o),s&&y.addEventListener("resize",o)});const a=d&&c?Cn(d,o,s):null;let f=-1,m=null;i&&(m=new ResizeObserver(y=>{let[v]=y;v&&v.target===d&&m&&e&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var w;(w=m)==null||w.observe(e)})),o()}),d&&!l&&m.observe(d),e&&m.observe(e));let g,h=l?X(t):null;l&&p();function p(){const y=X(t);h&&!pe(h,y)&&o(),h=y,g=requestAnimationFrame(p)}return o(),()=>{var y;u.forEach(v=>{r&&v.removeEventListener("scroll",o),s&&v.removeEventListener("resize",o)}),a?.(),(y=m)==null||y.disconnect(),m=null,l&&cancelAnimationFrame(g)}}const Sn=nn,Mn=en,Rn=(t,e,o)=>{const n=new Map,r=o??{},s={...zn,...r.platform,_c:n};return tn(t,e,{...r,platform:s})},$n=[Mn({fallbackAxisSideDirection:"start",crossAxis:!1}),Sn()],kn=({placement:t="bottom-start",strategy:e,middleware:o=$n}={})=>{const[n,r]=J(),[s,i]=J(),[c,l]=J();return N(()=>{if(!n||!(s instanceof HTMLElement)){l(void 0);return}return En(n,s,()=>Rn(n,s,{placement:t,strategy:e,middleware:o}).then(l))},[n,s,t,e,o]),{setReference:r,setFloating:i,styles:tt(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Dn=t=>{const e=tt(()=>({}),[]);return tt(()=>Object.assign(e,t),[e,...Object.values(t)])},Jt=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,Tn=({disabled:t,onFocus:e})=>{const[o,n]=J(),{focused:r,closed:s}=o||{},i=r&&!t,c=Dn({closed:s,onFocus:e}),l=$(u=>n(a=>({...a,closed:u})),[]),d=$(u=>{const a=u.currentTarget;return Jt(a)?n(f=>({focused:!0,closed:!f?.closed})):a.focus()},[]);return N(()=>{if(!i)return;const u=a=>{if(a.defaultPrevented)return;const{closed:f}=c;a.key==="Escape"&&!f?(a.preventDefault(),l(!0)):["ArrowUp","Up"].includes(a.key)&&f&&(a.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!s,setClosed:l,onToggle:d,onFocus:$(u=>{const a=Jt(u.currentTarget);n({focused:a}),c.onFocus?.(a)},[c])}},An=t=>{const e=Tn(t),{onFocus:o}=e,n=Ot();return N(()=>{t.setAttribute("tabindex","0");const r=i=>{clearTimeout(n.current),o(i)},s=i=>{clearTimeout(n.current);const c=i.currentTarget;n.current=setTimeout(()=>o({currentTarget:c}),30)};return t.addEventListener("focusin",r),t.addEventListener("focusout",s),()=>{clearTimeout(n.current),t.removeEventListener("focusin",r),t.removeEventListener("focusout",s)}},[o]),e},On=t=>t.preventDefault(),Ln=rt`
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
`,Pn=t=>{const{placement:e,strategy:o,middleware:n,render:r}=t,{active:s,onToggle:i}=An(t),{styles:c,setReference:l,setFloating:d}=kn({placement:e,strategy:o,middleware:n});return S` <div class="anchor" part="anchor" ${Dt(l)}>
			<button
				@mousedown=${On}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${mt(s,()=>S`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Ne(c)}"
					@connected=${u=>u.target.showPopover?.()}
					${Dt(d)}
					><slot></slot>${Fe([r],()=>r?.()||Oe)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",K(Pn,{styleSheets:[Ln]}));const Fn=rt`
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
`,Bn=()=>S` <slot></slot> `;customElements.define("cosmoz-dropdown-list",K(Bn,{styleSheets:[Fn]}));const Nn=({placement:t})=>S` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",K(Nn));const Vn=({host:t,popoverRef:e,disabled:o,openOnHover:n,openOnFocus:r,open:s,close:i})=>{const c=Ot(),l=()=>clearTimeout(c.current),d=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const a=e.current;n&&(t.matches(":hover")||a?.matches(":hover"))||t.matches(":focus-within")||a?.matches(":focus-within")||i()},100)},u=()=>{o||(l(),s())};return N(()=>{if(!(!n||o))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",d),()=>{l(),t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",d)}},[n,o,t]),N(()=>{if(!(!r||o))return t.addEventListener("focusin",u),t.addEventListener("focusout",d),()=>{l(),t.removeEventListener("focusin",u),t.removeEventListener("focusout",d)}},[r,o,t]),{scheduleClose:d,cancelClose:l}},Wn=t=>{if(t.newState!=="open")return;const n=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of n){const s=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},_n=rt`
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
`,In=t=>{const{placement:e="bottom span-right",disabled:o,passthrough:n,openOnHover:r,openOnFocus:s}=t,i=Ot(),[c,l]=ee("opened",!1),d=$(()=>{o||(l(!0),i.current?.showPopover?.())},[o]),u=$(()=>{l(!1),i.current?.hidePopover?.()},[]),a=$(()=>{if(o)return;i.current?.matches(":popover-open")?u():d()},[o]);N(()=>{const p=i.current;p&&(c?p.showPopover?.():p.hidePopover?.())},[c]),N(()=>{t.toggleAttribute("opened",!!c)},[c]);const{scheduleClose:f,cancelClose:m}=Vn({host:t,popoverRef:i,disabled:o,openOnHover:r,openOnFocus:s,open:d,close:u}),g=s?d:a,h=$(p=>{Wn(p),l(p.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:p.newState,oldState:p.oldState,composed:!0}))},[]);return S`
		<slot name="button" @click=${g}></slot>
		${o&&n?S`<slot></slot>`:S`<div
					popover
					style="position-area: ${e}"
					@toggle=${h}
					@select=${u}
					@focusout=${f}
					@focusin=${m}
					${Dt(p=>p&&(i.current=p))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",K(In,{styleSheets:[_n],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Hn=({slot:t,title:e,className:o,width:n="24",height:r="24",styles:s}={})=>S`
  <svg
    slot=${Q(t)}
    class=${`calendar-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${r}
    style=${Q(s)}
  >
    ${mt(e,()=>Le`<title>${e}</title>`)}
    <path
      d="M21 10H3m13-8v4M8 2v4m-.2 16h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22Z"
    />
  </svg>
`;function jn(t,e,o){return ne(t,e*7,o)}function Yn(t,e){const o=Ce(t,e?.in),n=o.getFullYear();return o.setFullYear(n+1,0,0),o.setHours(23,59,59,999),o}function Xn(t,e,o){return jn(t,-1,o)}const qn=rt`
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
`,Un=t=>[{label:B("Today"),start:()=>C(new Date,"yyyy-MM-dd"),end:()=>C(new Date,"yyyy-MM-dd")},{label:B("Yesterday"),start:()=>C(St(new Date,1),"yyyy-MM-dd"),end:()=>C(St(new Date,1),"yyyy-MM-dd")},{label:B("This week"),start:()=>C(st(new Date,t),"yyyy-MM-dd"),end:()=>C(ne(st(new Date,t),6),"yyyy-MM-dd")},{label:B("Last week"),start:()=>C(Xn(st(new Date,t)),"yyyy-MM-dd"),end:()=>C(St(st(new Date,t),1),"yyyy-MM-dd")},{label:B("This month"),start:()=>C(jt(new Date),"yyyy-MM-dd"),end:()=>C(It(new Date),"yyyy-MM-dd")},{label:B("Last month"),start:()=>C(Ht(jt(new Date),1),"yyyy-MM-dd"),end:()=>C(Ht(It(new Date),1),"yyyy-MM-dd")},{label:B("This year"),start:()=>C(Ee(new Date),"yyyy-MM-dd"),end:()=>C(Yn(new Date),"yyyy-MM-dd")}],Kn=t=>{const e=tt(()=>matchMedia(t),[t]),[o,n]=J(e.matches);return N(()=>{const r=s=>n(i=>i!==s.matches?s.matches:i);return e.addEventListener("change",r),()=>e.removeEventListener("change",r)},[e]),o},Gn=t=>{const{mode:e="range",locale:o,min:n,max:r,presets:s,singleCalendar:i=!1,disabled:c,noPresets:l,triggerSize:d,triggerVariant:u}=t,a=e==="single",f=o??navigator.language,[m,g]=ee("value"),{start:h,end:p}=ge(m,e),y=Kn("(width < 735px)"),v=i||y||a,w=v?1:2,b=tt(()=>s??Un(f),[f,s]),x=$(M=>{if(a){g(Mt(M.detail.value,n,r));return}g({start:Mt(M.detail.value,n,r),end:p})},[a,n,r,p,g]),z=$(M=>g({start:h,end:Mt(M.detail.value,n,r)}),[n,r,h,g]),q=$(()=>{!a&&h&&p&&he(new Date(h),new Date(p))&&g({start:h,end:h})},[a,h,p,g]),P=$(()=>{h&&p&&ye(new Date(p),new Date(h))&&g({start:p,end:p})},[h,p,g]);return{end:p,isSingleCalendar:v,locale:f,mode:e,isSingleDateMode:a,numberOfMonths:w,onEndInput:z,onStartInput:x,rangePresets:b,setValue:g,start:h,value:m,disabled:c,noPresets:l,min:n,max:r,triggerSize:d,triggerVariant:u,onStartInputBlur:q,onEndInputBlur:P}},Zn=t=>{const{end:e,isSingleCalendar:o,locale:n,mode:r,isSingleDateMode:s,numberOfMonths:i,onEndInput:c,onStartInput:l,rangePresets:d,setValue:u,start:a,value:f,min:m,max:g,disabled:h,noPresets:p,triggerSize:y,triggerVariant:v="secondary",onStartInputBlur:w,onEndInputBlur:b}=Gn(t);return S`
		<cosmoz-dropdown-next ?disabled=${h}>
			<cosmoz-button
				slot="button"
				type="button"
				exposedparts="button: trigger"
				variant=${v}
				size=${Q(y)}
				?disabled=${h}
				>${Hn()}
				${we(a,e,n,s)}</cosmoz-button
			>

			<div class="content">
				${mt(!(p||o||s),()=>S`
						<div class="range-presets">
							${Me(d,x=>x.label,x=>S`
									<cosmoz-button
										variant="tertiary"
										full-width
										?active=${be(x,a,e)}
										@click=${()=>xe(x,u,m,g)}
										>${x.label}</cosmoz-button
									>
								`)}
						</div>
					`)}

				<div class="main">
					<cosmoz-calendar
						mode=${r}
						locale=${n}
						number-of-months=${i}
						.min=${Q(m)}
						.max=${Q(g)}
						.value=${f}
						@value-changed=${Re(u)}
					></cosmoz-calendar>

					<footer>
						<div class="footer-left">
							<cosmoz-date-input
								locale=${n}
								.value=${a}
								@value-changed=${l}
								@blur=${w}
							></cosmoz-date-input>
							${mt(!s,()=>S`
									<span>–</span>
									<cosmoz-date-input
										locale=${n}
										.value=${e}
										@value-changed=${c}
										@blur=${b}
									></cosmoz-date-input>
								`)}
						</div>
						<div>
							<cosmoz-button
								?full-width=${o}
								@click=${ve}
								>${B("OK")}</cosmoz-button
							>
						</div>
					</footer>
				</div>
			</div>
		</cosmoz-dropdown-next>
	`};customElements.define("cosmoz-datepicker",K(Zn,{observedAttributes:["locale","min","max","disabled","mode","no-presets","single-calendar","trigger-size","trigger-variant"],styleSheets:[Se,qn],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));const oo={title:"CosmozDatepicker",component:"cosmoz-datepicker",tags:["autodocs"],render:Ae,argTypes:{locale:Te,mode:De,value:ke,min:Yt,max:Yt,disabled:{control:"boolean",description:"Disables opening the datepicker dropdown."},noPresets:{control:"boolean",description:"Hides the built-in range preset buttons."},singleCalendar:{control:"boolean",description:"Forces a single calendar month layout."},presets:{control:"object",description:"Consumer-provided range presets replacing the defaults.",table:{type:{summary:"RangePreset[]"}}},triggerSize:{control:"select",options:["sm","md","lg","xl"],description:"Optional cosmoz-button trigger size."},triggerVariant:{control:"select",options:["primary","secondary","tertiary"],description:"cosmoz-button trigger variant."}},args:{mode:"range",value:{start:A(1),end:A(4)},min:"",max:"",disabled:!1,noPresets:!1,singleCalendar:!1,presets:void 0,triggerSize:"",triggerVariant:"secondary"}},ct={parameters:{docs:{description:{story:"Basic date range picker."}}}},at={parameters:{docs:{description:{story:"Minimum and maximum allowed date boundaries set."}}},args:{value:{start:A(11),end:A(14)},min:A(4),max:A(24)}},lt={parameters:{docs:{description:{story:"Single calendar layout for ranges."}}},args:{value:{start:A(11),end:A(14)},singleCalendar:!0}},dt={parameters:{docs:{description:{story:"Single date selection mode."}}},args:{mode:"single",value:A(12)}},ut={parameters:{docs:{description:{story:"No selected dates set."}}},args:{value:{}}},ft={parameters:{docs:{description:{story:"Custom range presets configured."}}},args:{presets:$e}},pt={parameters:{docs:{description:{story:"Range preset buttons hidden."}}},args:{noPresets:!0}};ct.parameters={...ct.parameters,docs:{...ct.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Basic date range picker.'
      }
    }
  }
}`,...ct.parameters?.docs?.source}}};at.parameters={...at.parameters,docs:{...at.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Minimum and maximum allowed date boundaries set.'
      }
    }
  },
  args: {
    value: {
      start: currentMonthDate(11),
      end: currentMonthDate(14)
    },
    min: currentMonthDate(4),
    max: currentMonthDate(24)
  }
}`,...at.parameters?.docs?.source}}};lt.parameters={...lt.parameters,docs:{...lt.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Single calendar layout for ranges.'
      }
    }
  },
  args: {
    value: {
      start: currentMonthDate(11),
      end: currentMonthDate(14)
    },
    singleCalendar: true
  }
}`,...lt.parameters?.docs?.source}}};dt.parameters={...dt.parameters,docs:{...dt.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Single date selection mode.'
      }
    }
  },
  args: {
    mode: 'single',
    value: currentMonthDate(12)
  }
}`,...dt.parameters?.docs?.source}}};ut.parameters={...ut.parameters,docs:{...ut.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No selected dates set.'
      }
    }
  },
  args: {
    value: {}
  }
}`,...ut.parameters?.docs?.source}}};ft.parameters={...ft.parameters,docs:{...ft.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Custom range presets configured.'
      }
    }
  },
  args: {
    presets: customPresets
  }
}`,...ft.parameters?.docs?.source}}};pt.parameters={...pt.parameters,docs:{...pt.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Range preset buttons hidden.'
      }
    }
  },
  args: {
    noPresets: true
  }
}`,...pt.parameters?.docs?.source}}};const ro=["Basic","MinMax","SingleCalendar","SingleDate","EmptyState","CustomPresets","NoPresets"];export{ct as Basic,ft as CustomPresets,ut as EmptyState,at as MinMax,pt as NoPresets,lt as SingleCalendar,dt as SingleDate,ro as __namedExportsOrder,oo as default};
