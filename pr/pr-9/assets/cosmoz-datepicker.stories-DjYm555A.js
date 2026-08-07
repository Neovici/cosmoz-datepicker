import{i as he,s as Et,a as st,e as _t,b as It,c as Ht,g as jt,d as ye,f as ve,h as we,j as be,k as xe,l as ze}from"./calendar-B5ADaUHm.js";import{e as te,t as Ce,o as J,v as Tt,g as ee,h as ne,j as Ee,p as rt,q as K,y as Q,u as A,x as tt,z as M,w as Me,m as z,A as Re,s as $e,n as Se,B as Yt,C as ke,d as it,l as Oe,c as W}from"./helper-bgKLFhcK.js";import{w as Te,d as R,E as $t,A as Ae,t as F}from"./iframe-jyMnPp1e.js";import{u as At,n as St,a as De,b as Le}from"./date-input-BBhyAn0f.js";import"./preload-helper-PPVm8Dsz.js";function Pe(t,e,n){return te(t,e*7,n)}function Fe(t,e){const n=Ce(t,e?.in),o=n.getFullYear();return n.setFullYear(o+1,0,0),n.setHours(23,59,59,999),n}function We(t,e,n){return Pe(t,-1,n)}const Ne=({slot:t,title:e,className:n,width:o="24",height:r="24",styles:s}={})=>R`
  <svg
    slot=${J(t)}
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
    style=${J(s)}
  >
    ${Tt(e,()=>Te`<title>${e}</title>`)}
    <path
      d="M21 10H3m13-8v4M8 2v4m-.2 16h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22Z"
    />
  </svg>
`;const Ve={},Be=ee(class extends ne{constructor(){super(...arguments),this.ot=Ve}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,r)=>o===this.ot[r]))return $t}else if(this.ot===e)return $t;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}});const oe="important",_e=" !"+oe,Ie=ee(class extends ne{constructor(t){if(super(t),t.type!==Ee.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const r=e[o];if(r!=null){this.ft.add(o);const s=typeof r=="string"&&r.endsWith(_e);o.includes("-")||s?n.setProperty(o,s?r.slice(0,-11):r,s?oe:""):n[o]=r}}return $t}}),He=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},je=rt`
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
`,Ye=()=>R`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",He(K(Ye,{styleSheets:[je]})));const mt=Math.min,j=Math.max,gt=Math.round,ct=Math.floor,T=t=>({x:t,y:t}),Xe={left:"right",right:"left",bottom:"top",top:"bottom"};function Ue(t,e,n){return j(t,mt(e,n))}function Dt(t,e){return typeof t=="function"?t(e):t}function et(t){return t.split("-")[0]}function Lt(t){return t.split("-")[1]}function re(t){return t==="x"?"y":"x"}function se(t){return t==="y"?"height":"width"}function H(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function ie(t){return re(H(t))}function qe(t,e,n){n===void 0&&(n=!1);const o=Lt(t),r=ie(t),s=se(r);let i=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=ht(i)),[i,ht(i)]}function Ke(t){const e=ht(t);return[kt(t),e,kt(e)]}function kt(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const Xt=["left","right"],Ut=["right","left"],Ze=["top","bottom"],Ge=["bottom","top"];function Je(t,e,n){switch(t){case"top":case"bottom":return n?e?Ut:Xt:e?Xt:Ut;case"left":case"right":return e?Ze:Ge;default:return[]}}function Qe(t,e,n,o){const r=Lt(t);let s=Je(et(t),n==="start",o);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(kt)))),s}function ht(t){const e=et(t);return Xe[e]+t.slice(e.length)}function tn(t){var e,n,o,r;return{top:(e=t.top)!=null?e:0,right:(n=t.right)!=null?n:0,bottom:(o=t.bottom)!=null?o:0,left:(r=t.left)!=null?r:0}}function en(t){return typeof t!="number"?tn(t):{top:t,right:t,bottom:t,left:t}}function yt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function qt(t,e,n){let{reference:o,floating:r}=t;const s=H(e),i=ie(e),c=se(i),a=et(e),d=s==="y",u=o.x+o.width/2-r.width/2,l=o.y+o.height/2-r.height/2,p=o[c]/2-r[c]/2;let f;switch(a){case"top":f={x:u,y:o.y-r.height};break;case"bottom":f={x:u,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:l};break;case"left":f={x:o.x-r.width,y:l};break;default:f={x:o.x,y:o.y}}const g=Lt(e);return g&&(f[i]+=p*(g==="end"?1:-1)*(n&&d?-1:1)),f}async function nn(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:s,rects:i,elements:c,strategy:a}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:l="floating",altBoundary:p=!1,padding:f=0}=Dt(e,t),g=en(f),m=c[p?l==="floating"?"reference":"floating":l],y=yt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(m)))==null||n?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:d,rootBoundary:u,strategy:a})),w=l==="floating"?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(v))&&await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1},E=yt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:v,strategy:a}):w);return{top:(y.top-E.top+g.top)/b.y,bottom:(E.bottom-y.bottom+g.bottom)/b.y,left:(y.left-E.left+g.left)/b.x,right:(E.right-y.right+g.right)/b.x}}const on=50,rn=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:i}=n,c=i.detectOverflow?i:{...i,detectOverflow:nn},a=await(i.isRTL==null?void 0:i.isRTL(e));let d=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:l}=qt(d,o,a),p=o,f=0;const g={};for(let h=0;h<s.length;h++){const m=s[h];if(!m)continue;const{name:y,fn:w}=m,{x:v,y:b,data:E,reset:x}=await w({x:u,y:l,initialPlacement:o,placement:p,strategy:r,middlewareData:g,rects:d,platform:c,elements:{reference:t,floating:e}});u=v??u,l=b??l,g[y]={...g[y],...E},x&&f<on&&(f++,typeof x=="object"&&(x.placement&&(p=x.placement),x.rects&&(d=x.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):x.rects),{x:u,y:l}=qt(d,p,a)),h=-1)}return{x:u,y:l,placement:p,strategy:r,middlewareData:g}},sn=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:s,rects:i,initialPlacement:c,platform:a,elements:d}=e,{mainAxis:u=!0,crossAxis:l=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...m}=Dt(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const y=et(r),w=H(c),v=et(c)===c,b=await(a.isRTL==null?void 0:a.isRTL(d.floating)),E=p||(v||!h?[ht(c)]:Ke(c)),x=g!=="none";!p&&x&&E.push(...Qe(c,h,g,b));const L=[c,...E],U=await a.detectOverflow(e,m),V=[];let S=((o=s.flip)==null?void 0:o.overflows)||[];if(u&&V.push(U[y]),l){const B=qe(r,i,b);V.push(U[B[0]],U[B[1]])}if(S=[...S,{placement:r,overflows:V}],!V.every(B=>B<=0)){var Nt,Vt;const B=(((Nt=s.flip)==null?void 0:Nt.index)||0)+1,Ct=L[B];if(Ct&&(!(l==="alignment"?w!==H(Ct):!1)||S.every($=>H($.placement)===w?$.overflows[0]>0:!0)))return{data:{index:B,overflows:S},reset:{placement:Ct}};let G=(Vt=S.filter(_=>_.overflows[0]<=0).sort((_,$)=>_.overflows[1]-$.overflows[1])[0])==null?void 0:Vt.placement;if(!G)switch(f){case"bestFit":{var Bt;const _=(Bt=S.filter($=>{if(x){const P=H($.placement);return P===w||P==="y"}return!0}).map($=>[$.placement,$.overflows.filter(P=>P>0).reduce((P,ge)=>P+ge,0)]).sort(($,P)=>$[1]-P[1])[0])==null?void 0:Bt[0];_&&(G=_);break}case"initialPlacement":G=c;break}if(r!==G)return{reset:{placement:G}}}return{}}}},cn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r,platform:s}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:a={fn:w=>{let{x:v,y:b}=w;return{x:v,y:b}}},...d}=Dt(t,e),u={x:n,y:o},l=await s.detectOverflow(e,d),p=H(r),f=re(p);let g=u[f],h=u[p];const m=(w,v)=>Ue(v+l[w==="y"?"top":"left"],v,v-l[w==="y"?"bottom":"right"]);i&&(g=m(f,g)),c&&(h=m(p,h));const y=a.fn({...e,[f]:g,[p]:h});return{...y,data:{x:y.x-n,y:y.y-o,enabled:{[f]:i,[p]:c}}}}}};function vt(){return typeof window<"u"}function Z(t){return ce(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function D(t){var e;return(e=(ce(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ce(t){return vt()?t instanceof Node||t instanceof C(t).Node:!1}function k(t){return vt()?t instanceof Element||t instanceof C(t).Element:!1}function N(t){return vt()?t instanceof HTMLElement||t instanceof C(t).HTMLElement:!1}function Kt(t){return!vt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function wt(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=O(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&r!=="inline"&&r!=="contents"}function an(t){return/^(table|td|th)$/.test(Z(t))}function bt(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const ln=/transform|translate|scale|rotate|perspective|filter/,un=/paint|layout|strict|content/,I=t=>!!t&&t!=="none";let Mt;function Pt(t){const e=k(t)?O(t):t;return I(e.transform)||I(e.translate)||I(e.scale)||I(e.rotate)||I(e.perspective)||!Ft()&&(I(e.backdropFilter)||I(e.filter))||ln.test(e.willChange||"")||un.test(e.contain||"")}function dn(t){let e=Y(t);for(;N(e)&&!nt(e);){if(Pt(e))return e;if(bt(e))return null;e=Y(e)}return null}function Ft(){return Mt==null&&(Mt=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Mt}function nt(t){return/^(html|body|#document)$/.test(Z(t))}function O(t){return C(t).getComputedStyle(t)}function xt(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Y(t){if(Z(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Kt(t)&&t.host||D(t);return Kt(e)?e.host:e}function ae(t){const e=Y(t);return nt(e)?(t.ownerDocument||t).body:N(e)&&wt(e)?e:ae(e)}function ot(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=ae(t),s=r===((o=t.ownerDocument)==null?void 0:o.body),i=C(r);if(s){const c=Ot(i);return e.concat(i,i.visualViewport||[],wt(r)?r:[],c&&n?ot(c):[])}else return e.concat(r,ot(r,[],n))}function Ot(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function le(t){const e=O(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=N(t),s=r?t.offsetWidth:n,i=r?t.offsetHeight:o,c=gt(n)!==s||gt(o)!==i;return c&&(n=s,o=i),{width:n,height:o,$:c}}function Wt(t){return k(t)?t:t.contextElement}function q(t){const e=Wt(t);if(!N(e))return T(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:s}=le(e);let i=(s?gt(n.width):n.width)/o,c=(s?gt(n.height):n.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const fn=T(0);function ue(t){const e=C(t);return!Ft()||!e.visualViewport?fn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function pn(t,e,n){return e===void 0&&(e=!1),!!n&&e&&n===C(t)}function X(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=Wt(t);let i=T(1);e&&(o?k(o)&&(i=q(o)):i=q(t));const c=pn(s,n,o)?ue(s):T(0);let a=(r.left+c.x)/i.x,d=(r.top+c.y)/i.y,u=r.width/i.x,l=r.height/i.y;if(s&&o){const p=C(s),f=k(o)?C(o):o;let g=p,h=Ot(g);for(;h&&f!==g;){const m=q(h),y=h.getBoundingClientRect(),w=O(h),v=y.left+(h.clientLeft+parseFloat(w.paddingLeft))*m.x,b=y.top+(h.clientTop+parseFloat(w.paddingTop))*m.y;a*=m.x,d*=m.y,u*=m.x,l*=m.y,a+=v,d+=b,g=C(h),h=Ot(g)}}return yt({width:u,height:l,x:a,y:d})}function zt(t,e){const n=xt(t).scrollLeft;return e?e.left+n:X(D(t)).left+n}function de(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-zt(t,n),r=n.top+e.scrollTop;return{x:o,y:r}}function mn(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const s=r==="fixed",i=D(o),c=e?bt(e.floating):!1;if(o===i||c&&s)return n;let a={scrollLeft:0,scrollTop:0},d=T(1);const u=T(0),l=N(o);if((l||!s)&&((Z(o)!=="body"||wt(i))&&(a=xt(o)),l)){const f=X(o);d=q(o),u.x=f.x+o.clientLeft,u.y=f.y+o.clientTop}const p=i&&!l&&!s?de(i,a):T(0);return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-a.scrollLeft*d.x+u.x+p.x,y:n.y*d.y-a.scrollTop*d.y+u.y+p.y}}function gn(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function hn(t){const e=xt(t),n=t.ownerDocument.body,o=j(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=j(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let s=-e.scrollLeft+zt(t);const i=-e.scrollTop;return O(n).direction==="rtl"&&(s+=j(t.clientWidth,n.clientWidth)-o),{width:o,height:r,x:s,y:i}}const yn=25;function vn(t,e,n){n===void 0&&(n="viewport");const o=n==="layoutViewport",r=C(t),s=D(t),i=r.visualViewport;let c=s.clientWidth,a=s.clientHeight,d=0,u=0;if(i){const p=!Ft()||e==="fixed";o?p||(d=-i.offsetLeft,u=-i.offsetTop):(c=i.width,a=i.height,p&&(d=i.offsetLeft,u=i.offsetTop))}if(zt(s)<=0){const p=s.ownerDocument,f=p.body,g=getComputedStyle(f),h=p.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,m=Math.abs(s.clientWidth-f.clientWidth-h),y=getComputedStyle(s).scrollbarGutter==="stable both-edges"?m/2:m;y<=yn&&(c-=y)}return{width:c,height:a,x:d,y:u}}function wn(t,e){const n=X(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,s=q(t),i=t.clientWidth*s.x,c=t.clientHeight*s.y,a=r*s.x,d=o*s.y;return{width:i,height:c,x:a,y:d}}function Zt(t,e,n){let o;if(e==="viewport"||e==="layoutViewport")o=vn(t,n,e);else if(e==="document")o=hn(D(t));else if(k(e))o=wn(e,n);else{const r=ue(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return yt(o)}function bn(t,e){const n=e.get(t);if(n)return n;let o=ot(t,[],!1).filter(c=>k(c)&&Z(c)!=="body"),r=null;const s=O(t).position==="fixed";let i=s?Y(t):t;for(;k(i)&&!nt(i);){const c=O(i),a=Pt(i),d=r?r.position:s?"fixed":"";!a&&(d==="fixed"||d==="absolute"&&c.position==="static")?o=o.filter(l=>l!==i):r=c,i=Y(i)}return e.set(t,o),o}function xn(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[...n==="clippingAncestors"?bt(e)?[]:bn(e,this._c):[].concat(n),o],c=Zt(e,i[0],r);let a=c.top,d=c.right,u=c.bottom,l=c.left;for(let p=1;p<i.length;p++){const f=Zt(e,i[p],r);a=j(f.top,a),d=mt(f.right,d),u=mt(f.bottom,u),l=j(f.left,l)}return{width:d-l,height:u-a,x:l,y:a}}function zn(t){const{width:e,height:n}=le(t);return{width:e,height:n}}function Cn(t,e,n){const o=N(e),r=D(e),s=n==="fixed",i=X(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const a=T(0);if((o||!s)&&((Z(e)!=="body"||wt(r))&&(c=xt(e)),o)){const p=X(e,!0,s,e);a.x=p.x+e.clientLeft,a.y=p.y+e.clientTop}!o&&r&&(a.x=zt(r));const d=r&&!o&&!s?de(r,c):T(0),u=i.left+c.scrollLeft-a.x-d.x,l=i.top+c.scrollTop-a.y-d.y;return{x:u,y:l,width:i.width,height:i.height}}function Rt(t){return O(t).position==="static"}function Gt(t,e){if(!N(t)||O(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return D(t)===n&&(n=n.ownerDocument.body),n}function fe(t,e){const n=C(t);if(bt(t))return n;if(!N(t)){let r=Y(t);for(;r&&!nt(r);){if(k(r)&&!Rt(r))return r;r=Y(r)}return n}let o=Gt(t,e);for(;o&&an(o)&&Rt(o);)o=Gt(o,e);return o&&nt(o)&&Rt(o)&&!Pt(o)?n:o||dn(t)||n}const En=async function(t){const e=this.getOffsetParent||fe,n=this.getDimensions,o=await n(t.floating);return{reference:Cn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Mn(t){return O(t).direction==="rtl"}const Rn={convertOffsetParentRelativeRectToViewportRelativeRect:mn,getDocumentElement:D,getClippingRect:xn,getOffsetParent:fe,getElementRects:En,getClientRects:gn,getDimensions:zn,getScale:q,isElement:k,isRTL:Mn};function pe(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function $n(t,e,n){let o=null,r;const s=D(t);function i(){var u;clearTimeout(r),(u=o)==null||u.disconnect(),o=null}function c(u,l){u===void 0&&(u=!1),l===void 0&&(l=1),i();const p=t.getBoundingClientRect(),{left:f,top:g,width:h,height:m}=p;if(u||e(),!h||!m)return;const y=ct(g),w=ct(s.clientWidth-(f+h)),v=ct(s.clientHeight-(g+m)),b=ct(f),x={rootMargin:-y+"px "+-w+"px "+-v+"px "+-b+"px",threshold:j(0,mt(1,l))||1};let L=!0;function U(V){const S=V[0].intersectionRatio;if(!pe(p,t.getBoundingClientRect()))return c();if(S!==l){if(!L)return c();S?c(!1,S):r=setTimeout(()=>{c(!1,1e-7)},1e3)}L=!1}try{o=new IntersectionObserver(U,{...x,root:s.ownerDocument})}catch{o=new IntersectionObserver(U,x)}o.observe(t)}const a=C(t),d=()=>c(n);return a.addEventListener("resize",d),c(!0),()=>{a.removeEventListener("resize",d),i()}}function Sn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,d=Wt(t),u=r||s?[...d?ot(d):[],...e?ot(e):[]]:[];u.forEach(y=>{r&&y.addEventListener("scroll",n),s&&y.addEventListener("resize",n)});const l=d&&c?$n(d,n,s):null;let p=-1,f=null;i&&(f=new ResizeObserver(y=>{let[w]=y;w&&w.target===d&&f&&e&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var v;(v=f)==null||v.observe(e)})),n()}),d&&!a&&f.observe(d),e&&f.observe(e));let g,h=a?X(t):null;a&&m();function m(){const y=X(t);h&&!pe(h,y)&&n(),h=y,g=requestAnimationFrame(m)}return n(),()=>{var y;u.forEach(w=>{r&&w.removeEventListener("scroll",n),s&&w.removeEventListener("resize",n)}),l?.(),(y=f)==null||y.disconnect(),f=null,a&&cancelAnimationFrame(g)}}const kn=cn,On=sn,Tn=(t,e,n)=>{const o=new Map,r=n??{},s={...Rn,...r.platform,_c:o};return rn(t,e,{...r,platform:s})},An=[On({fallbackAxisSideDirection:"start",crossAxis:!1}),kn()],Dn=({placement:t="bottom-start",strategy:e,middleware:n=An}={})=>{const[o,r]=Q(),[s,i]=Q(),[c,a]=Q();return A(()=>{if(!o||!(s instanceof HTMLElement)){a(void 0);return}return Sn(o,s,()=>Tn(o,s,{placement:t,strategy:e,middleware:n}).then(a))},[o,s,t,e,n]),{setReference:r,setFloating:i,styles:tt(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},me=t=>{const e=tt(()=>({}),[]);return tt(()=>Object.assign(e,t),[e,...Object.values(t)])},Jt=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,Ln=({disabled:t,onFocus:e})=>{const[n,o]=Q(),{focused:r,closed:s}=n||{},i=r&&!t,c=me({closed:s,onFocus:e}),a=M(u=>o(l=>({...l,closed:u})),[]),d=M(u=>{const l=u.currentTarget;return Jt(l)?o(p=>({focused:!0,closed:!p?.closed})):l.focus()},[]);return A(()=>{if(!i)return;const u=l=>{if(l.defaultPrevented)return;const{closed:p}=c;l.key==="Escape"&&!p?(l.preventDefault(),a(!0)):["ArrowUp","Up"].includes(l.key)&&p&&(l.preventDefault(),a(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!s,setClosed:a,onToggle:d,onFocus:M(u=>{const l=Jt(u.currentTarget);o({focused:l}),c.onFocus?.(l)},[c])}},Pn=t=>{const e=Ln(t),{onFocus:n}=e,o=At();return A(()=>{t.setAttribute("tabindex","0");const r=i=>{clearTimeout(o.current),n(i)},s=i=>{clearTimeout(o.current);const c=i.currentTarget;o.current=setTimeout(()=>n({currentTarget:c}),30)};return t.addEventListener("focusin",r),t.addEventListener("focusout",s),()=>{clearTimeout(o.current),t.removeEventListener("focusin",r),t.removeEventListener("focusout",s)}},[n]),e},Fn=t=>t.preventDefault(),Wn=rt`
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
`,Nn=t=>{const{placement:e,strategy:n,middleware:o,render:r}=t,{active:s,onToggle:i}=Pn(t),{styles:c,setReference:a,setFloating:d}=Dn({placement:e,strategy:n,middleware:o});return R` <div class="anchor" part="anchor" ${St(a)}>
			<button
				@mousedown=${Fn}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${Tt(s,()=>R`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Ie(c)}"
					@connected=${u=>u.target.showPopover?.()}
					${St(d)}
					><slot></slot>${Be([r],()=>r?.()||Ae)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",K(Nn,{styleSheets:[Wn]}));const Vn=rt`
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
`,Bn=()=>R` <slot></slot> `;customElements.define("cosmoz-dropdown-list",K(Bn,{styleSheets:[Vn]}));const _n=({placement:t})=>R` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",K(_n));const In=({host:t,popoverRef:e,disabled:n,openOnHover:o,openOnFocus:r,open:s,close:i})=>{const c=At(),a=()=>clearTimeout(c.current),d=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const l=e.current;o&&(t.matches(":hover")||l?.matches(":hover"))||t.matches(":focus-within")||l?.matches(":focus-within")||i()},100)},u=()=>{n||(a(),s())};return A(()=>{if(!(!o||n))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",d),()=>{a(),t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",d)}},[o,n,t]),A(()=>{if(!(!r||n))return t.addEventListener("focusin",u),t.addEventListener("focusout",d),()=>{a(),t.removeEventListener("focusin",u),t.removeEventListener("focusout",d)}},[r,n,t]),{scheduleClose:d,cancelClose:a}},Hn=t=>{if(t.newState!=="open")return;const o=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of o){const s=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},jn=rt`
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
`,Yn=t=>{const{placement:e="bottom span-right",disabled:n,passthrough:o,openOnHover:r,openOnFocus:s}=t,i=At(),[c,a]=Me("opened",!1),d=M(()=>{n||(a(!0),i.current?.showPopover?.())},[n]),u=M(()=>{a(!1),i.current?.hidePopover?.()},[]),l=M(()=>{if(n)return;i.current?.matches(":popover-open")?u():d()},[n]);A(()=>{const m=i.current;m&&(c?m.showPopover?.():m.hidePopover?.())},[c]),A(()=>{t.toggleAttribute("opened",!!c)},[c]);const{scheduleClose:p,cancelClose:f}=In({host:t,popoverRef:i,disabled:n,openOnHover:r,openOnFocus:s,open:d,close:u}),g=s?d:l,h=M(m=>{Hn(m),a(m.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:m.newState,oldState:m.oldState,composed:!0}))},[]);return R`
		<slot name="button" @click=${g}></slot>
		${n&&o?R`<slot></slot>`:R`<div
					popover
					style="position-area: ${e}"
					@toggle=${h}
					@select=${u}
					@focusout=${p}
					@focusin=${f}
					${St(m=>m&&(i.current=m))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",K(Yn,{styleSheets:[jn],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Xn=rt`
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
`;function Qt(t,e){const n=De(),o=n[t],r=M(i=>{const c=n[t],a=typeof i=="function"?i(c):i;Object.is(c,a)||Le(n,t,a)},[]),s=me({init:e});return A(()=>{const{init:i}=s;i!=null&&r(he(i))},[]),[o,r]}const Un=t=>[{label:F("Today"),start:()=>z(new Date,"yyyy-MM-dd"),end:()=>z(new Date,"yyyy-MM-dd")},{label:F("Yesterday"),start:()=>z(Et(new Date,1),"yyyy-MM-dd"),end:()=>z(Et(new Date,1),"yyyy-MM-dd")},{label:F("This week"),start:()=>z(st(new Date,t),"yyyy-MM-dd"),end:()=>z(te(st(new Date,t),6),"yyyy-MM-dd")},{label:F("Last week"),start:()=>z(We(st(new Date,t)),"yyyy-MM-dd"),end:()=>z(Et(st(new Date,t),1),"yyyy-MM-dd")},{label:F("This month"),start:()=>z(It(new Date),"yyyy-MM-dd"),end:()=>z(_t(new Date),"yyyy-MM-dd")},{label:F("Last month"),start:()=>z(Ht(It(new Date),1),"yyyy-MM-dd"),end:()=>z(Ht(_t(new Date),1),"yyyy-MM-dd")},{label:F("This year"),start:()=>z(Re(new Date),"yyyy-MM-dd"),end:()=>z(Fe(new Date),"yyyy-MM-dd")}],qn=t=>{const e=tt(()=>matchMedia(t),[t]),[n,o]=Q(e.matches);return A(()=>{const r=s=>o(i=>i!==s.matches?s.matches:i);return e.addEventListener("change",r),()=>e.removeEventListener("change",r)}),n},Kn=t=>{const{locale:e,min:n,max:o,presets:r,singleCalendar:s=!1,disabled:i,noPresets:c,triggerSize:a,triggerVariant:d}=t,u=e??navigator.language,[l,p]=Qt("start"),[f,g]=Qt("end"),h=qn("(width < 735px)"),m=s||h,y=m?1:2,w=tt(()=>r??Un(u),[u,r]),v=M(L=>p(jt(L.detail.value,n,o)),[n,o]),b=M(L=>g(jt(L.detail.value,n,o)),[n,o]),E=M(()=>{l&&f&&ye(new Date(l),new Date(f))&&g(l)},[l,f]),x=M(()=>{l&&f&&ve(new Date(f),new Date(l))&&p(f)},[l,f]);return{end:f,isSingleCalendar:m,locale:u,numberOfMonths:y,onEndInput:b,onStartInput:v,rangePresets:w,setEnd:g,setStart:p,start:l,disabled:i,noPresets:c,min:n,max:o,triggerSize:a,triggerVariant:d,onStartInputBlur:E,onEndInputBlur:x}},Zn=t=>{const{end:e,isSingleCalendar:n,locale:o,numberOfMonths:r,onEndInput:s,onStartInput:i,rangePresets:c,setEnd:a,setStart:d,start:u,min:l,max:p,disabled:f,noPresets:g,triggerSize:h,triggerVariant:m="secondary",onStartInputBlur:y,onEndInputBlur:w}=Kn(t);return R`
		<cosmoz-dropdown-next ?disabled=${f}>
			<cosmoz-button
				slot="button"
				type="button"
				exposedparts="button: trigger"
				variant=${m}
				size=${J(h)}
				?disabled=${f}
				>${Ne()} ${be(u,e,o)}</cosmoz-button
			>

			<div class="content">
				${Tt(!(g||n),()=>R`
						<div class="range-presets">
							${Se(c,v=>v.label,v=>R`
									<cosmoz-button
										variant="tertiary"
										full-width
										?active=${xe(v,u,e)}
										@click=${()=>ze(v,d,a,l,p)}
										>${v.label}</cosmoz-button
									>
								`)}
						</div>
					`)}

				<div class="main">
					<cosmoz-calendar
						locale=${o}
						number-of-months=${r}
						.min=${J(l)}
						.max=${J(p)}
						.start=${u}
						.end=${e}
						@start-changed=${Yt(d)}
						@end-changed=${Yt(a)}
					></cosmoz-calendar>

					<footer>
						<div class="footer-left">
							<cosmoz-date-input
								locale=${o}
								.value=${u}
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
								@click=${we}
								>${F("OK")}</cosmoz-button
							>
						</div>
					</footer>
				</div>
			</div>
		</cosmoz-dropdown-next>
	`};customElements.define("cosmoz-datepicker",K(Zn,{observedAttributes:["locale","min","max","disabled","no-presets","single-calendar","trigger-size","trigger-variant"],styleSheets:[$e,Xn],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));const no={title:"CosmozDatepicker",component:"cosmoz-datepicker",tags:["autodocs"],argTypes:{locale:Oe,start:it,end:it,min:it,max:it,disabled:{control:"boolean",description:"Disables opening the datepicker dropdown."},noPresets:{control:"boolean",description:"Hides the built-in range preset buttons."},singleCalendar:{control:"boolean",description:"Forces a single calendar month layout."},customPresets:{control:"boolean",description:"Uses a small custom presets array."},triggerSize:{control:"select",options:["sm","md","lg","xl"],description:"Optional cosmoz-button trigger size."},triggerVariant:{control:"select",options:["primary","secondary","tertiary"],description:"cosmoz-button trigger variant."}},args:{start:W(1),end:W(4),min:"",max:"",disabled:!1,noPresets:!1,singleCalendar:!1,customPresets:!1,triggerSize:"",triggerVariant:"secondary"}},at={render:ke},lt={args:{start:"",end:""}},ut={args:{start:W(11),end:W(14),min:W(4),max:W(24)}},dt={args:{start:W(11),end:W(14),singleCalendar:!0}},ft={args:{customPresets:!0}},pt={args:{noPresets:!0}};at.parameters={...at.parameters,docs:{...at.parameters?.docs,source:{originalSource:`{
  render: renderDatepicker
}`,...at.parameters?.docs?.source}}};lt.parameters={...lt.parameters,docs:{...lt.parameters?.docs,source:{originalSource:`{
  args: {
    start: '',
    end: ''
  }
}`,...lt.parameters?.docs?.source}}};ut.parameters={...ut.parameters,docs:{...ut.parameters?.docs,source:{originalSource:`{
  args: {
    start: currentMonthDate(11),
    end: currentMonthDate(14),
    min: currentMonthDate(4),
    max: currentMonthDate(24)
  }
}`,...ut.parameters?.docs?.source}}};dt.parameters={...dt.parameters,docs:{...dt.parameters?.docs,source:{originalSource:`{
  args: {
    start: currentMonthDate(11),
    end: currentMonthDate(14),
    singleCalendar: true
  }
}`,...dt.parameters?.docs?.source}}};ft.parameters={...ft.parameters,docs:{...ft.parameters?.docs,source:{originalSource:`{
  args: {
    customPresets: true
  }
}`,...ft.parameters?.docs?.source}}};pt.parameters={...pt.parameters,docs:{...pt.parameters?.docs,source:{originalSource:`{
  args: {
    noPresets: true
  }
}`,...pt.parameters?.docs?.source}}};const oo=["Datepicker","Empty","MinMax","SingleCalendar","CustomPresets","NoPresets"];export{ft as CustomPresets,at as Datepicker,lt as Empty,ut as MinMax,pt as NoPresets,dt as SingleCalendar,oo as __namedExportsOrder,no as default};
