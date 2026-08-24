import{n as ht,s as St,a as ct,e as Ut,b as qt,u as $e,g as Rt,i as Ce,c as ze,d as Ae,f as Me,h as Kt,l as Ee}from"./calendar-DrpBiCVH.js";import{k as Q,i as Nt,g as ie,f as Bt,h as it,v as J,o as K,p as W,s as k,u as ce,y as B,z as ae,t as Se,j as z,B as Zt,C as Re,w as ke,x as Te,D as Oe,E as De,d as Qt,a as Le,m as Pe,l as _e,F as Fe,c as L}from"./helper-bzctNRoS.js";import{r as Ne,E as Dt,A as Lt,d as M,w as Be,t as R}from"./iframe-D6xBhSQL.js";import"./date-input-C7FejKpE.js";import"./preload-helper-PPVm8Dsz.js";function We(t){let e=t;return{get current(){return e},set current(n){e=n},get value(){return e},set value(n){e=n}}}function Wt(t){return Q(()=>We(t),[])}const nt=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const o of n)o._$AO?.(e,!1),nt(o,e);return!0},vt=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},le=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),He(e)}};function Ie(t){this._$AN!==void 0?(vt(this),this._$AM=t,le(this)):this._$AM=t}function Ve(t,e=!1,n=0){const o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(o))for(let r=n;r<o.length;r++)nt(o[r],!1),vt(o[r]);else o!=null&&(nt(o,!1),vt(o));else nt(this,t)}const He=t=>{t.type==ie.CHILD&&(t._$AP??=Ve,t._$AQ??=Ie)};class je extends Nt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,o){super._$AT(e,n,o),le(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(nt(this,e),vt(this))}setValue(e){if(Ne(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const Ge={},Ye=Bt(class extends Nt{constructor(){super(...arguments),this.ot=Ge}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,s)=>o===this.ot[s]))return Dt}else if(this.ot===e)return Dt;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}}),kt=new WeakMap,Pt=Bt(class extends je{render(t){return Lt}update(t,[e]){const n=e!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),Lt}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let n=kt.get(e);n===void 0&&(n=new WeakMap,kt.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?kt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const de="important",Xe=" !"+de,Ue=Bt(class extends Nt{constructor(t){if(super(t),t.type!==ie.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const s=e[o];if(s!=null){this.ft.add(o);const r=typeof s=="string"&&s.endsWith(Xe);o.includes("-")||r?n.setProperty(o,r?s.slice(0,-11):s,r?de:""):n[o]=s}}return Dt}}),qe=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Ke=it`
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
`,Ze=()=>M`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",qe(J(Ze,{styleSheets:[Ke]})));const yt=Math.min,X=Math.max,wt=Math.round,at=Math.floor,P=t=>({x:t,y:t}),Qe={left:"right",right:"left",bottom:"top",top:"bottom"};function Je(t,e,n){return X(t,yt(e,n))}function It(t,e){return typeof t=="function"?t(e):t}function ot(t){return t.split("-")[0]}function Vt(t){return t.split("-")[1]}function ue(t){return t==="x"?"y":"x"}function fe(t){return t==="y"?"height":"width"}function Y(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function pe(t){return ue(Y(t))}function tn(t,e,n){n===void 0&&(n=!1);const o=Vt(t),s=pe(t),r=fe(s);let i=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(i=bt(i)),[i,bt(i)]}function en(t){const e=bt(t);return[_t(t),e,_t(e)]}function _t(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const Jt=["left","right"],te=["right","left"],nn=["top","bottom"],on=["bottom","top"];function sn(t,e,n){switch(t){case"top":case"bottom":return n?e?te:Jt:e?Jt:te;case"left":case"right":return e?nn:on;default:return[]}}function rn(t,e,n,o){const s=Vt(t);let r=sn(ot(t),n==="start",o);return s&&(r=r.map(i=>i+"-"+s),e&&(r=r.concat(r.map(_t)))),r}function bt(t){const e=ot(t);return Qe[e]+t.slice(e.length)}function cn(t){var e,n,o,s;return{top:(e=t.top)!=null?e:0,right:(n=t.right)!=null?n:0,bottom:(o=t.bottom)!=null?o:0,left:(s=t.left)!=null?s:0}}function an(t){return typeof t!="number"?cn(t):{top:t,right:t,bottom:t,left:t}}function xt(t){const{x:e,y:n,width:o,height:s}=t;return{width:o,height:s,top:n,left:e,right:e+o,bottom:n+s,x:e,y:n}}function ee(t,e,n){let{reference:o,floating:s}=t;const r=Y(e),i=pe(e),c=fe(i),l=ot(e),d=r==="y",u=o.x+o.width/2-s.width/2,a=o.y+o.height/2-s.height/2,f=o[c]/2-s[c]/2;let m;switch(l){case"top":m={x:u,y:o.y-s.height};break;case"bottom":m={x:u,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:a};break;case"left":m={x:o.x-s.width,y:a};break;default:m={x:o.x,y:o.y}}const g=Vt(e);return g&&(m[i]+=f*(g==="end"?1:-1)*(n&&d?-1:1)),m}async function ln(t,e){var n;e===void 0&&(e={});const{x:o,y:s,platform:r,rects:i,elements:c,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:a="floating",altBoundary:f=!1,padding:m=0}=It(e,t),g=an(m),p=c[f?a==="floating"?"reference":"floating":a],v=xt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(p)))==null||n?p:p.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:d,rootBoundary:u,strategy:l})),y=a==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,w=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),b=await(r.isElement==null?void 0:r.isElement(w))&&await(r.getScale==null?void 0:r.getScale(w))||{x:1,y:1},C=xt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:w,strategy:l}):y);return{top:(v.top-C.top+g.top)/b.y,bottom:(C.bottom-v.bottom+g.bottom)/b.y,left:(v.left-C.left+g.left)/b.x,right:(C.right-v.right+g.right)/b.x}}const dn=50,un=async(t,e,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:r=[],platform:i}=n,c=i.detectOverflow?i:{...i,detectOverflow:ln},l=await(i.isRTL==null?void 0:i.isRTL(e));let d=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:a}=ee(d,o,l),f=o,m=0;const g={};for(let h=0;h<r.length;h++){const p=r[h];if(!p)continue;const{name:v,fn:y}=p,{x:w,y:b,data:C,reset:x}=await y({x:u,y:a,initialPlacement:o,placement:f,strategy:s,middlewareData:g,rects:d,platform:c,elements:{reference:t,floating:e}});u=w??u,a=b??a,g[v]={...g[v],...C},x&&m<dn&&(m++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(d=x.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):x.rects),{x:u,y:a}=ee(d,f,l)),h=-1)}return{x:u,y:a,placement:f,strategy:s,middlewareData:g}},fn=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:s,middlewareData:r,rects:i,initialPlacement:c,platform:l,elements:d}=e,{mainAxis:u=!0,crossAxis:a=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...p}=It(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const v=ot(s),y=Y(c),w=ot(c)===c,b=await(l.isRTL==null?void 0:l.isRTL(d.floating)),C=f||(w||!h?[bt(c)]:en(c)),x=g!=="none";!f&&x&&C.push(...rn(c,h,g,b));const $=[c,...C],F=await l.detectOverflow(e,p),D=[];let E=((o=r.flip)==null?void 0:o.overflows)||[];if(u&&D.push(F[v]),a){const H=tn(s,i,b);D.push(F[H[0]],F[H[1]])}if(E=[...E,{placement:s,overflows:D}],!D.every(H=>H<=0)){var V,Yt;const H=(((V=r.flip)==null?void 0:V.index)||0)+1,Et=$[H];if(Et&&(!(a==="alignment"?y!==Y(Et):!1)||E.every(S=>Y(S.placement)===y?S.overflows[0]>0:!0)))return{data:{index:H,overflows:E},reset:{placement:Et}};let et=(Yt=E.filter(j=>j.overflows[0]<=0).sort((j,S)=>j.overflows[1]-S.overflows[1])[0])==null?void 0:Yt.placement;if(!et)switch(m){case"bestFit":{var Xt;const j=(Xt=E.filter(S=>{if(x){const N=Y(S.placement);return N===y||N==="y"}return!0}).map(S=>[S.placement,S.overflows.filter(N=>N>0).reduce((N,xe)=>N+xe,0)]).sort((S,N)=>S[1]-N[1])[0])==null?void 0:Xt[0];j&&(et=j);break}case"initialPlacement":et=c;break}if(s!==et)return{reset:{placement:et}}}return{}}}},pn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:s,platform:r}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:l={fn:y=>{let{x:w,y:b}=y;return{x:w,y:b}}},...d}=It(t,e),u={x:n,y:o},a=await r.detectOverflow(e,d),f=Y(s),m=ue(f);let g=u[m],h=u[f];const p=(y,w)=>Je(w+a[y==="y"?"top":"left"],w,w-a[y==="y"?"bottom":"right"]);i&&(g=p(m,g)),c&&(h=p(f,h));const v=l.fn({...e,[m]:g,[f]:h});return{...v,data:{x:v.x-n,y:v.y-o,enabled:{[m]:i,[f]:c}}}}}};function $t(){return typeof window<"u"}function tt(t){return me(t)?(t.nodeName||"").toLowerCase():"#document"}function A(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function _(t){var e;return(e=(me(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function me(t){return $t()?t instanceof Node||t instanceof A(t).Node:!1}function T(t){return $t()?t instanceof Element||t instanceof A(t).Element:!1}function I(t){return $t()?t instanceof HTMLElement||t instanceof A(t).HTMLElement:!1}function ne(t){return!$t()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof A(t).ShadowRoot}function Ct(t){const{overflow:e,overflowX:n,overflowY:o,display:s}=O(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&s!=="inline"&&s!=="contents"}function mn(t){return/^(table|td|th)$/.test(tt(t))}function zt(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const gn=/transform|translate|scale|rotate|perspective|filter/,hn=/paint|layout|strict|content/,G=t=>!!t&&t!=="none";let Tt;function Ht(t){const e=T(t)?O(t):t;return G(e.transform)||G(e.translate)||G(e.scale)||G(e.rotate)||G(e.perspective)||!jt()&&(G(e.backdropFilter)||G(e.filter))||gn.test(e.willChange||"")||hn.test(e.contain||"")}function vn(t){let e=U(t);for(;I(e)&&!st(e);){if(Ht(e))return e;if(zt(e))return null;e=U(e)}return null}function jt(){return Tt==null&&(Tt=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Tt}function st(t){return/^(html|body|#document)$/.test(tt(t))}function O(t){return A(t).getComputedStyle(t)}function At(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function U(t){if(tt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ne(t)&&t.host||_(t);return ne(e)?e.host:e}function ge(t){const e=U(t);return st(e)?(t.ownerDocument||t).body:I(e)&&Ct(e)?e:ge(e)}function rt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=ge(t),r=s===((o=t.ownerDocument)==null?void 0:o.body),i=A(s);if(r){const c=Ft(i);return e.concat(i,i.visualViewport||[],Ct(s)?s:[],c&&n?rt(c):[])}else return e.concat(s,rt(s,[],n))}function Ft(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function he(t){const e=O(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=I(t),r=s?t.offsetWidth:n,i=s?t.offsetHeight:o,c=wt(n)!==r||wt(o)!==i;return c&&(n=r,o=i),{width:n,height:o,$:c}}function Gt(t){return T(t)?t:t.contextElement}function Z(t){const e=Gt(t);if(!I(e))return P(1);const n=e.getBoundingClientRect(),{width:o,height:s,$:r}=he(e);let i=(r?wt(n.width):n.width)/o,c=(r?wt(n.height):n.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const yn=P(0);function ve(t){const e=A(t);return!jt()||!e.visualViewport?yn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function wn(t,e,n){return e===void 0&&(e=!1),!!n&&e&&n===A(t)}function q(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),r=Gt(t);let i=P(1);e&&(o?T(o)&&(i=Z(o)):i=Z(t));const c=wn(r,n,o)?ve(r):P(0);let l=(s.left+c.x)/i.x,d=(s.top+c.y)/i.y,u=s.width/i.x,a=s.height/i.y;if(r&&o){const f=A(r),m=T(o)?A(o):o;let g=f,h=Ft(g);for(;h&&m!==g;){const p=Z(h),v=h.getBoundingClientRect(),y=O(h),w=v.left+(h.clientLeft+parseFloat(y.paddingLeft))*p.x,b=v.top+(h.clientTop+parseFloat(y.paddingTop))*p.y;l*=p.x,d*=p.y,u*=p.x,a*=p.y,l+=w,d+=b,g=A(h),h=Ft(g)}}return xt({width:u,height:a,x:l,y:d})}function Mt(t,e){const n=At(t).scrollLeft;return e?e.left+n:q(_(t)).left+n}function ye(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-Mt(t,n),s=n.top+e.scrollTop;return{x:o,y:s}}function bn(t){let{elements:e,rect:n,offsetParent:o,strategy:s}=t;const r=s==="fixed",i=_(o),c=e?zt(e.floating):!1;if(o===i||c&&r)return n;let l={scrollLeft:0,scrollTop:0},d=P(1);const u=P(0),a=I(o);if((a||!r)&&((tt(o)!=="body"||Ct(i))&&(l=At(o)),a)){const m=q(o);d=Z(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}const f=i&&!a&&!r?ye(i,l):P(0);return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-l.scrollLeft*d.x+u.x+f.x,y:n.y*d.y-l.scrollTop*d.y+u.y+f.y}}function xn(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function $n(t){const e=At(t),n=t.ownerDocument.body,o=X(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=X(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-e.scrollLeft+Mt(t);const i=-e.scrollTop;return O(n).direction==="rtl"&&(r+=X(t.clientWidth,n.clientWidth)-o),{width:o,height:s,x:r,y:i}}const Cn=25;function zn(t,e,n){n===void 0&&(n="viewport");const o=n==="layoutViewport",s=A(t),r=_(t),i=s.visualViewport;let c=r.clientWidth,l=r.clientHeight,d=0,u=0;if(i){const f=!jt()||e==="fixed";o?f||(d=-i.offsetLeft,u=-i.offsetTop):(c=i.width,l=i.height,f&&(d=i.offsetLeft,u=i.offsetTop))}if(Mt(r)<=0){const f=r.ownerDocument,m=f.body,g=getComputedStyle(m),h=f.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,p=Math.abs(r.clientWidth-m.clientWidth-h),v=getComputedStyle(r).scrollbarGutter==="stable both-edges"?p/2:p;v<=Cn&&(c-=v)}return{width:c,height:l,x:d,y:u}}function An(t,e){const n=q(t,!0,e==="fixed"),o=n.top+t.clientTop,s=n.left+t.clientLeft,r=Z(t),i=t.clientWidth*r.x,c=t.clientHeight*r.y,l=s*r.x,d=o*r.y;return{width:i,height:c,x:l,y:d}}function oe(t,e,n){let o;if(e==="viewport"||e==="layoutViewport")o=zn(t,n,e);else if(e==="document")o=$n(_(t));else if(T(e))o=An(e,n);else{const s=ve(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return xt(o)}function Mn(t,e){const n=e.get(t);if(n)return n;let o=rt(t,[],!1).filter(c=>T(c)&&tt(c)!=="body"),s=null;const r=O(t).position==="fixed";let i=r?U(t):t;for(;T(i)&&!st(i);){const c=O(i),l=Ht(i),d=s?s.position:r?"fixed":"";!l&&(d==="fixed"||d==="absolute"&&c.position==="static")?o=o.filter(a=>a!==i):s=c,i=U(i)}return e.set(t,o),o}function En(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const i=[...n==="clippingAncestors"?zt(e)?[]:Mn(e,this._c):[].concat(n),o],c=oe(e,i[0],s);let l=c.top,d=c.right,u=c.bottom,a=c.left;for(let f=1;f<i.length;f++){const m=oe(e,i[f],s);l=X(m.top,l),d=yt(m.right,d),u=yt(m.bottom,u),a=X(m.left,a)}return{width:d-a,height:u-l,x:a,y:l}}function Sn(t){const{width:e,height:n}=he(t);return{width:e,height:n}}function Rn(t,e,n){const o=I(e),s=_(e),r=n==="fixed",i=q(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=P(0);if((o||!r)&&((tt(e)!=="body"||Ct(s))&&(c=At(e)),o)){const f=q(e,!0,r,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}!o&&s&&(l.x=Mt(s));const d=s&&!o&&!r?ye(s,c):P(0),u=i.left+c.scrollLeft-l.x-d.x,a=i.top+c.scrollTop-l.y-d.y;return{x:u,y:a,width:i.width,height:i.height}}function Ot(t){return O(t).position==="static"}function se(t,e){if(!I(t)||O(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return _(t)===n&&(n=n.ownerDocument.body),n}function we(t,e){const n=A(t);if(zt(t))return n;if(!I(t)){let s=U(t);for(;s&&!st(s);){if(T(s)&&!Ot(s))return s;s=U(s)}return n}let o=se(t,e);for(;o&&mn(o)&&Ot(o);)o=se(o,e);return o&&st(o)&&Ot(o)&&!Ht(o)?n:o||vn(t)||n}const kn=async function(t){const e=this.getOffsetParent||we,n=this.getDimensions,o=await n(t.floating);return{reference:Rn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Tn(t){return O(t).direction==="rtl"}const On={convertOffsetParentRelativeRectToViewportRelativeRect:bn,getDocumentElement:_,getClippingRect:En,getOffsetParent:we,getElementRects:kn,getClientRects:xn,getDimensions:Sn,getScale:Z,isElement:T,isRTL:Tn};function be(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Dn(t,e,n){let o=null,s;const r=_(t);function i(){var u;clearTimeout(s),(u=o)==null||u.disconnect(),o=null}function c(u,a){u===void 0&&(u=!1),a===void 0&&(a=1),i();const f=t.getBoundingClientRect(),{left:m,top:g,width:h,height:p}=f;if(u||e(),!h||!p)return;const v=at(g),y=at(r.clientWidth-(m+h)),w=at(r.clientHeight-(g+p)),b=at(m),x={rootMargin:-v+"px "+-y+"px "+-w+"px "+-b+"px",threshold:X(0,yt(1,a))||1};let $=!0;function F(D){const E=D[0].intersectionRatio;if(!be(f,t.getBoundingClientRect()))return c();if(E!==a){if(!$)return c();E?c(!1,E):s=setTimeout(()=>{c(!1,1e-7)},1e3)}$=!1}try{o=new IntersectionObserver(F,{...x,root:r.ownerDocument})}catch{o=new IntersectionObserver(F,x)}o.observe(t)}const l=A(t),d=()=>c(n);return l.addEventListener("resize",d),c(!0),()=>{l.removeEventListener("resize",d),i()}}function Ln(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,d=Gt(t),u=s||r?[...d?rt(d):[],...e?rt(e):[]]:[];u.forEach(v=>{s&&v.addEventListener("scroll",n),r&&v.addEventListener("resize",n)});const a=d&&c?Dn(d,n,r):null;let f=-1,m=null;i&&(m=new ResizeObserver(v=>{let[y]=v;y&&y.target===d&&m&&e&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var w;(w=m)==null||w.observe(e)})),n()}),d&&!l&&m.observe(d),e&&m.observe(e));let g,h=l?q(t):null;l&&p();function p(){const v=q(t);h&&!be(h,v)&&n(),h=v,g=requestAnimationFrame(p)}return n(),()=>{var v;u.forEach(y=>{s&&y.removeEventListener("scroll",n),r&&y.removeEventListener("resize",n)}),a?.(),(v=m)==null||v.disconnect(),m=null,l&&cancelAnimationFrame(g)}}const Pn=pn,_n=fn,Fn=(t,e,n)=>{const o=new Map,s=n??{},r={...On,...s.platform,_c:o};return un(t,e,{...s,platform:r})},Nn=[_n({fallbackAxisSideDirection:"start",crossAxis:!1}),Pn()],Bn=({placement:t="bottom-start",strategy:e,middleware:n=Nn}={})=>{const[o,s]=K(),[r,i]=K(),[c,l]=K();return W(()=>{if(!o||!(r instanceof HTMLElement)){l(void 0);return}return Ln(o,r,()=>Fn(o,r,{placement:t,strategy:e,middleware:n}).then(l))},[o,r,t,e,n]),{setReference:s,setFloating:i,styles:Q(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Wn=t=>{const e=Q(()=>({}),[]);return Q(()=>Object.assign(e,t),[e,...Object.values(t)])},re=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,In=({disabled:t,onFocus:e})=>{const[n,o]=K(),{focused:s,closed:r}=n||{},i=s&&!t,c=Wn({closed:r,onFocus:e}),l=k(u=>o(a=>({...a,closed:u})),[]),d=k(u=>{const a=u.currentTarget;return re(a)?o(f=>({focused:!0,closed:!f?.closed})):a.focus()},[]);return W(()=>{if(!i)return;const u=a=>{if(a.defaultPrevented)return;const{closed:f}=c;a.key==="Escape"&&!f?(a.preventDefault(),l(!0)):["ArrowUp","Up"].includes(a.key)&&f&&(a.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!r,setClosed:l,onToggle:d,onFocus:k(u=>{const a=re(u.currentTarget);o({focused:a}),c.onFocus?.(a)},[c])}},Vn=t=>{const e=In(t),{onFocus:n}=e,o=Wt();return W(()=>{t.setAttribute("tabindex","0");const s=i=>{clearTimeout(o.current),n(i)},r=i=>{clearTimeout(o.current);const c=i.currentTarget;o.current=setTimeout(()=>n({currentTarget:c}),30)};return t.addEventListener("focusin",s),t.addEventListener("focusout",r),()=>{clearTimeout(o.current),t.removeEventListener("focusin",s),t.removeEventListener("focusout",r)}},[n]),e},Hn=t=>t.preventDefault(),jn=it`
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
`,Gn=t=>{const{placement:e,strategy:n,middleware:o,render:s}=t,{active:r,onToggle:i}=Vn(t),{styles:c,setReference:l,setFloating:d}=Bn({placement:e,strategy:n,middleware:o});return M` <div class="anchor" part="anchor" ${Pt(l)}>
			<button
				@mousedown=${Hn}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${ht(r,()=>M`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Ue(c)}"
					@connected=${u=>u.target.showPopover?.()}
					${Pt(d)}
					><slot></slot>${Ye([s],()=>s?.()||Lt)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",J(Gn,{styleSheets:[jn]}));const Yn=it`
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
`,Xn=()=>M` <slot></slot> `;customElements.define("cosmoz-dropdown-list",J(Xn,{styleSheets:[Yn]}));const Un=({placement:t})=>M` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",J(Un));const qn=({host:t,popoverRef:e,disabled:n,openOnHover:o,openOnFocus:s,open:r,close:i})=>{const c=Wt(),l=()=>clearTimeout(c.current),d=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const a=e.current;o&&(t.matches(":hover")||a?.matches(":hover"))||t.matches(":focus-within")||a?.matches(":focus-within")||i()},100)},u=()=>{n||(l(),r())};return W(()=>{if(!(!o||n))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",d),()=>{l(),t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",d)}},[o,n,t]),W(()=>{if(!(!s||n))return t.addEventListener("focusin",u),t.addEventListener("focusout",d),()=>{l(),t.removeEventListener("focusin",u),t.removeEventListener("focusout",d)}},[s,n,t]),{scheduleClose:d,cancelClose:l}},Kn=t=>{if(t.newState!=="open")return;const o=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of o){const r=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},Zn=it`
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
`,Qn=t=>{const{placement:e="bottom span-right",disabled:n,passthrough:o,openOnHover:s,openOnFocus:r}=t,i=Wt(),[c,l]=ce("opened",!1),d=k(()=>{n||(l(!0),i.current?.showPopover?.())},[n]),u=k(()=>{l(!1),i.current?.hidePopover?.()},[]),a=k(()=>{if(n)return;i.current?.matches(":popover-open")?u():d()},[n]);W(()=>{const p=i.current;p&&(c?p.showPopover?.():p.hidePopover?.())},[c]),W(()=>{t.toggleAttribute("opened",!!c)},[c]);const{scheduleClose:f,cancelClose:m}=qn({host:t,popoverRef:i,disabled:n,openOnHover:s,openOnFocus:r,open:d,close:u}),g=r?d:a,h=k(p=>{Kn(p),l(p.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:p.newState,oldState:p.oldState,composed:!0}))},[]);return M`
		<slot name="button" @click=${g}></slot>
		${n&&o?M`<slot></slot>`:M`<div
					popover
					style="position-area: ${e}"
					@toggle=${h}
					@select=${u}
					@focusout=${f}
					@focusin=${m}
					${Pt(p=>p&&(i.current=p))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",J(Qn,{styleSheets:[Zn],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Jn=({slot:t,title:e,className:n,width:o="24",height:s="24",styles:r}={})=>M`
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
    ${ht(e,()=>Be`<title>${e}</title>`)}
    <path
      d="M21 10H3m13-8v4M8 2v4m-.2 16h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22Z"
    />
  </svg>
`;function to(t,e,n){return ae(t,e*7,n)}function eo(t,e){const n=Se(t,e?.in),o=n.getFullYear();return n.setFullYear(o+1,0,0),n.setHours(23,59,59,999),n}function no(t,e,n){return to(t,-1,n)}const oo=it`
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
`,so=t=>[{label:R("Today"),start:()=>z(new Date,"yyyy-MM-dd"),end:()=>z(new Date,"yyyy-MM-dd")},{label:R("Yesterday"),start:()=>z(St(new Date,1),"yyyy-MM-dd"),end:()=>z(St(new Date,1),"yyyy-MM-dd")},{label:R("This week"),start:()=>z(ct(new Date,t),"yyyy-MM-dd"),end:()=>z(ae(ct(new Date,t),6),"yyyy-MM-dd")},{label:R("Last week"),start:()=>z(no(ct(new Date,t)),"yyyy-MM-dd"),end:()=>z(St(ct(new Date,t),1),"yyyy-MM-dd")},{label:R("This month"),start:()=>z(Zt(new Date),"yyyy-MM-dd"),end:()=>z(Ut(new Date),"yyyy-MM-dd")},{label:R("Last month"),start:()=>z(qt(Zt(new Date),1),"yyyy-MM-dd"),end:()=>z(qt(Ut(new Date),1),"yyyy-MM-dd")},{label:R("This year"),start:()=>z(Re(new Date),"yyyy-MM-dd"),end:()=>z(eo(new Date),"yyyy-MM-dd")}],ro=t=>{const e=Q(()=>matchMedia(t),[t]),[n,o]=K(e.matches);return W(()=>{const s=r=>o(i=>i!==r.matches?r.matches:i);return e.addEventListener("change",s),()=>e.removeEventListener("change",s)},[e]),n},io=t=>{const{mode:e="range",locale:n,min:o,max:s,presets:r,singleCalendar:i=!1,disabled:c,noPresets:l,triggerSize:d,triggerVariant:u}=t,a=e==="single",f=n??navigator.language,[m,g]=ce("value"),{start:h,end:p}=$e(m,e),v=ro("(width < 735px)"),y=i||v||a,w=y?1:2,[b,C]=K(!1),x=Q(()=>r??so(f),[f,r]),$=k(V=>{if(a){g(Rt(V.detail.value,o,s));return}g({start:Rt(V.detail.value,o,s),end:p})},[a,o,s,p,g]),F=k(V=>g({start:h,end:Rt(V.detail.value,o,s)}),[o,s,h,g]),D=k(()=>{!a&&h&&p&&Ce(new Date(h),new Date(p))&&g({start:h,end:h})},[a,h,p,g]),E=k(()=>{h&&p&&ze(new Date(p),new Date(h))&&g({start:p,end:p})},[h,p,g]);return{end:p,isSingleCalendar:y,locale:f,mode:e,isSingleDateMode:a,numberOfMonths:w,onEndInput:F,onStartInput:$,rangePresets:x,setValue:g,start:h,value:m,disabled:c,noPresets:l,min:o,max:s,triggerSize:d,triggerVariant:u,onStartInputBlur:D,onEndInputBlur:E,isOpen:b,setIsOpen:C}},co=t=>{const{end:e,isSingleCalendar:n,locale:o,mode:s,isSingleDateMode:r,numberOfMonths:i,onEndInput:c,onStartInput:l,rangePresets:d,setValue:u,start:a,value:f,min:m,max:g,disabled:h,noPresets:p,triggerSize:v,triggerVariant:y="secondary",onStartInputBlur:w,onEndInputBlur:b,isOpen:C,setIsOpen:x}=io(t);return M`
		<cosmoz-dropdown-next
			?disabled=${h}
			@dropdown-toggle=${()=>x($=>!$)}
			aria-disabled=${B(h?"true":void 0)}
		>
			<cosmoz-button
				slot="button"
				type="button"
				exposedparts="button: trigger"
				variant=${y}
				size=${B(v)}
				aria-label=${R("Date picker")}
				aria-disabled=${B(h?"true":void 0)}
				aria-haspopup="dialog"
				aria-expanded=${C?"true":"false"}
				?disabled=${h}
			>
				${Jn()}
				${Me(a,e,o,r)}
			</cosmoz-button>

			<div class="content">
				${ht(!(p||n||r),()=>M`
						<div class="range-presets">
							${Te(d,$=>$.label,$=>M`
									<cosmoz-button
										variant="tertiary"
										full-width
										?active=${Kt($,a,e)}
										aria-pressed=${Kt($,a,e)?"true":"false"}
										@click=${()=>Ee($,u,m,g)}
										>${$.label}</cosmoz-button
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
						.max=${B(g)}
						.value=${f}
						@value-changed=${Oe(u)}
					></cosmoz-calendar>

					<footer>
						<div class="footer-left">
							<cosmoz-date-input
								aria-label=${B(r?void 0:R("Start date"))}
								locale=${o}
								.value=${a}
								@value-changed=${l}
								@blur=${w}
							></cosmoz-date-input>
							${ht(!r,()=>M`
									<span>–</span>
									<cosmoz-date-input
										aria-label=${R("End date")}
										locale=${o}
										.value=${e}
										@value-changed=${c}
										@blur=${b}
									></cosmoz-date-input>
								`)}
						</div>
						<div>
							<cosmoz-button
								?full-width=${n}
								@click=${Ae}
								>${R("OK")}</cosmoz-button
							>
						</div>
					</footer>
				</div>
			</div>
		</cosmoz-dropdown-next>
	`};customElements.define("cosmoz-datepicker",J(co,{observedAttributes:["locale","min","max","disabled","mode","no-presets","single-calendar","trigger-size","trigger-variant"],styleSheets:[ke,oo],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));const mo={title:"CosmozDatepicker",component:"cosmoz-datepicker",tags:["autodocs"],render:Fe,argTypes:{locale:_e,mode:Pe,value:Le,min:Qt,max:Qt,disabled:{control:"boolean",description:"Disables opening the datepicker dropdown."},noPresets:{control:"boolean",description:"Hides the built-in range preset buttons."},singleCalendar:{control:"boolean",description:"Forces a single calendar month layout."},presets:{control:"object",description:"Consumer-provided range presets replacing the defaults.",table:{type:{summary:"RangePreset[]"}}},triggerSize:{control:"select",options:["sm","md","lg","xl"],description:"Optional cosmoz-button trigger size."},triggerVariant:{control:"select",options:["primary","secondary","tertiary"],description:"cosmoz-button trigger variant."}},args:{mode:"range",value:{start:L(1),end:L(4)},min:"",max:"",disabled:!1,noPresets:!1,singleCalendar:!1,presets:void 0,triggerSize:"",triggerVariant:"secondary"}},lt={parameters:{docs:{description:{story:"Basic date range picker."}}}},dt={parameters:{docs:{description:{story:"Minimum and maximum allowed date boundaries set."}}},args:{value:{start:L(11),end:L(14)},min:L(4),max:L(24)}},ut={parameters:{docs:{description:{story:"Single calendar layout for ranges."}}},args:{value:{start:L(11),end:L(14)},singleCalendar:!0}},ft={parameters:{docs:{description:{story:"Single date selection mode."}}},args:{mode:"single",value:L(12)}},pt={parameters:{docs:{description:{story:"No selected dates set."}}},args:{value:{}}},mt={parameters:{docs:{description:{story:"Custom range presets configured."}}},args:{presets:De}},gt={parameters:{docs:{description:{story:"Range preset buttons hidden."}}},args:{noPresets:!0}};lt.parameters={...lt.parameters,docs:{...lt.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Basic date range picker.'
      }
    }
  }
}`,...lt.parameters?.docs?.source}}};dt.parameters={...dt.parameters,docs:{...dt.parameters?.docs,source:{originalSource:`{
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
}`,...dt.parameters?.docs?.source}}};ut.parameters={...ut.parameters,docs:{...ut.parameters?.docs,source:{originalSource:`{
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
}`,...ut.parameters?.docs?.source}}};ft.parameters={...ft.parameters,docs:{...ft.parameters?.docs,source:{originalSource:`{
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
}`,...ft.parameters?.docs?.source}}};pt.parameters={...pt.parameters,docs:{...pt.parameters?.docs,source:{originalSource:`{
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
}`,...pt.parameters?.docs?.source}}};mt.parameters={...mt.parameters,docs:{...mt.parameters?.docs,source:{originalSource:`{
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
}`,...mt.parameters?.docs?.source}}};gt.parameters={...gt.parameters,docs:{...gt.parameters?.docs,source:{originalSource:`{
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
}`,...gt.parameters?.docs?.source}}};const go=["Basic","MinMax","SingleCalendar","SingleDate","EmptyState","CustomPresets","NoPresets"];export{lt as Basic,mt as CustomPresets,pt as EmptyState,dt as MinMax,gt as NoPresets,ut as SingleCalendar,ft as SingleDate,go as __namedExportsOrder,mo as default};
