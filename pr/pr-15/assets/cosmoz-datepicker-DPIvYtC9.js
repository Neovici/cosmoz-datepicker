import{n as at,s as bt,a as it,e as It,b as Vt,u as pe,g as xt,i as he,c as me,d as ge,f as ve,h as Bt,l as ye}from"./calendar-CgU7mt2l.js";import{i as Ot,d as Zt,e as Tt,g as rt,k as Q,u as O,o as N,a as Qt,t as we,f as C,s as Ht,m as be,n as xe,l as $e}from"./date-6UvBi5bj.js";import{e as Z,r as ze,E as At,A as Et,b as E,g as q,h as W,u as Jt,k as Ce,j as k,l as Ae}from"./iframe-DfcboDYQ.js";import"./date-input-JnmMadqA.js";function Ee(t){let e=t;return{get current(){return e},set current(n){e=n},get value(){return e},set value(n){e=n}}}function St(t){return Z(()=>Ee(t),[])}const et=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const o of n)o._$AO?.(e,!1),et(o,e);return!0},lt=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},te=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),ke(e)}};function Re(t){this._$AN!==void 0?(lt(this),this._$AM=t,te(this)):this._$AM=t}function Me(t,e=!1,n=0){const o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(o))for(let r=n;r<o.length;r++)et(o[r],!1),lt(o[r]);else o!=null&&(et(o,!1),lt(o));else et(this,t)}const ke=t=>{t.type==Zt.CHILD&&(t._$AP??=Me,t._$AQ??=Re)};class Oe extends Ot{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,o){super._$AT(e,n,o),te(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(et(this,e),lt(this))}setValue(e){if(ze(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const Te={},Se=Tt(class extends Ot{constructor(){super(...arguments),this.ot=Te}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,s)=>o===this.ot[s]))return At}else if(this.ot===e)return At;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}}),$t=new WeakMap,Rt=Tt(class extends Oe{render(t){return Et}update(t,[e]){const n=e!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),Et}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let n=$t.get(e);n===void 0&&(n=new WeakMap,$t.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?$t.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const ee="important",Le=" !"+ee,De=Tt(class extends Ot{constructor(t){if(super(t),t.type!==Zt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const s=e[o];if(s!=null){this.ft.add(o);const r=typeof s=="string"&&s.endsWith(Le);o.includes("-")||r?n.setProperty(o,r?s.slice(0,-11):s,r?ee:""):n[o]=s}}return At}}),_e=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Pe=rt`
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
`,Fe=()=>E`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",_e(Q(Fe,{styleSheets:[Pe]})));const dt=Math.min,Y=Math.max,ut=Math.round,ct=Math.floor,D=t=>({x:t,y:t}),Ne={left:"right",right:"left",bottom:"top",top:"bottom"};function We(t,e,n){return Y(t,dt(e,n))}function Lt(t,e){return typeof t=="function"?t(e):t}function nt(t){return t.split("-")[0]}function Dt(t){return t.split("-")[1]}function ne(t){return t==="x"?"y":"x"}function oe(t){return t==="y"?"height":"width"}function G(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function se(t){return ne(G(t))}function Ie(t,e,n){n===void 0&&(n=!1);const o=Dt(t),s=se(t),r=oe(s);let i=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(i=ft(i)),[i,ft(i)]}function Ve(t){const e=ft(t);return[Mt(t),e,Mt(e)]}function Mt(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const jt=["left","right"],Gt=["right","left"],Be=["top","bottom"],He=["bottom","top"];function je(t,e,n){switch(t){case"top":case"bottom":return n?e?Gt:jt:e?jt:Gt;case"left":case"right":return e?Be:He;default:return[]}}function Ge(t,e,n,o){const s=Dt(t);let r=je(nt(t),n==="start",o);return s&&(r=r.map(i=>i+"-"+s),e&&(r=r.concat(r.map(Mt)))),r}function ft(t){const e=nt(t);return Ne[e]+t.slice(e.length)}function Ye(t){var e,n,o,s;return{top:(e=t.top)!=null?e:0,right:(n=t.right)!=null?n:0,bottom:(o=t.bottom)!=null?o:0,left:(s=t.left)!=null?s:0}}function Xe(t){return typeof t!="number"?Ye(t):{top:t,right:t,bottom:t,left:t}}function pt(t){const{x:e,y:n,width:o,height:s}=t;return{width:o,height:s,top:n,left:e,right:e+o,bottom:n+s,x:e,y:n}}function Yt(t,e,n){let{reference:o,floating:s}=t;const r=G(e),i=se(e),c=oe(i),l=nt(e),d=r==="y",u=o.x+o.width/2-s.width/2,a=o.y+o.height/2-s.height/2,f=o[c]/2-s[c]/2;let h;switch(l){case"top":h={x:u,y:o.y-s.height};break;case"bottom":h={x:u,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:a};break;case"left":h={x:o.x-s.width,y:a};break;default:h={x:o.x,y:o.y}}const m=Dt(e);return m&&(h[i]+=f*(m==="end"?1:-1)*(n&&d?-1:1)),h}async function Ue(t,e){var n;e===void 0&&(e={});const{x:o,y:s,platform:r,rects:i,elements:c,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:a="floating",altBoundary:f=!1,padding:h=0}=Lt(e,t),m=Xe(h),p=c[f?a==="floating"?"reference":"floating":a],v=pt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(p)))==null||n?p:p.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:d,rootBoundary:u,strategy:l})),y=a==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,w=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),b=await(r.isElement==null?void 0:r.isElement(w))&&await(r.getScale==null?void 0:r.getScale(w))||{x:1,y:1},z=pt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:w,strategy:l}):y);return{top:(v.top-z.top+m.top)/b.y,bottom:(z.bottom-v.bottom+m.bottom)/b.y,left:(v.left-z.left+m.left)/b.x,right:(z.right-v.right+m.right)/b.x}}const qe=50,Ke=async(t,e,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:r=[],platform:i}=n,c=i.detectOverflow?i:{...i,detectOverflow:Ue},l=await(i.isRTL==null?void 0:i.isRTL(e));let d=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:a}=Yt(d,o,l),f=o,h=0;const m={};for(let g=0;g<r.length;g++){const p=r[g];if(!p)continue;const{name:v,fn:y}=p,{x:w,y:b,data:z,reset:x}=await y({x:u,y:a,initialPlacement:o,placement:f,strategy:s,middlewareData:m,rects:d,platform:c,elements:{reference:t,floating:e}});u=w??u,a=b??a,m[v]={...m[v],...z},x&&h<qe&&(h++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(d=x.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):x.rects),{x:u,y:a}=Yt(d,f,l)),g=-1)}return{x:u,y:a,placement:f,strategy:s,middlewareData:m}},Ze=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:s,middlewareData:r,rects:i,initialPlacement:c,platform:l,elements:d}=e,{mainAxis:u=!0,crossAxis:a=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...p}=Lt(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const v=nt(s),y=G(c),w=nt(c)===c,b=await(l.isRTL==null?void 0:l.isRTL(d.floating)),z=f||(w||!g?[ft(c)]:Ve(c)),x=m!=="none";!f&&x&&z.push(...Ge(c,g,m,b));const $=[c,...z],P=await l.detectOverflow(e,p),L=[];let R=((o=r.flip)==null?void 0:o.overflows)||[];if(u&&L.push(P[v]),a){const B=Ie(s,i,b);L.push(P[B[0]],P[B[1]])}if(R=[...R,{placement:s,overflows:L}],!L.every(B=>B<=0)){var V,Nt;const B=(((V=r.flip)==null?void 0:V.index)||0)+1,wt=$[B];if(wt&&(!(a==="alignment"?y!==G(wt):!1)||R.every(M=>G(M.placement)===y?M.overflows[0]>0:!0)))return{data:{index:B,overflows:R},reset:{placement:wt}};let tt=(Nt=R.filter(H=>H.overflows[0]<=0).sort((H,M)=>H.overflows[1]-M.overflows[1])[0])==null?void 0:Nt.placement;if(!tt)switch(h){case"bestFit":{var Wt;const H=(Wt=R.filter(M=>{if(x){const F=G(M.placement);return F===y||F==="y"}return!0}).map(M=>[M.placement,M.overflows.filter(F=>F>0).reduce((F,fe)=>F+fe,0)]).sort((M,F)=>M[1]-F[1])[0])==null?void 0:Wt[0];H&&(tt=H);break}case"initialPlacement":tt=c;break}if(s!==tt)return{reset:{placement:tt}}}return{}}}},Qe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:s,platform:r}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:l={fn:y=>{let{x:w,y:b}=y;return{x:w,y:b}}},...d}=Lt(t,e),u={x:n,y:o},a=await r.detectOverflow(e,d),f=G(s),h=ne(f);let m=u[h],g=u[f];const p=(y,w)=>We(w+a[y==="y"?"top":"left"],w,w-a[y==="y"?"bottom":"right"]);i&&(m=p(h,m)),c&&(g=p(f,g));const v=l.fn({...e,[h]:m,[f]:g});return{...v,data:{x:v.x-n,y:v.y-o,enabled:{[h]:i,[f]:c}}}}}};function ht(){return typeof window<"u"}function J(t){return re(t)?(t.nodeName||"").toLowerCase():"#document"}function A(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function _(t){var e;return(e=(re(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function re(t){return ht()?t instanceof Node||t instanceof A(t).Node:!1}function T(t){return ht()?t instanceof Element||t instanceof A(t).Element:!1}function I(t){return ht()?t instanceof HTMLElement||t instanceof A(t).HTMLElement:!1}function Xt(t){return!ht()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof A(t).ShadowRoot}function mt(t){const{overflow:e,overflowX:n,overflowY:o,display:s}=S(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&s!=="inline"&&s!=="contents"}function Je(t){return/^(table|td|th)$/.test(J(t))}function gt(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const tn=/transform|translate|scale|rotate|perspective|filter/,en=/paint|layout|strict|content/,j=t=>!!t&&t!=="none";let zt;function _t(t){const e=T(t)?S(t):t;return j(e.transform)||j(e.translate)||j(e.scale)||j(e.rotate)||j(e.perspective)||!Pt()&&(j(e.backdropFilter)||j(e.filter))||tn.test(e.willChange||"")||en.test(e.contain||"")}function nn(t){let e=X(t);for(;I(e)&&!ot(e);){if(_t(e))return e;if(gt(e))return null;e=X(e)}return null}function Pt(){return zt==null&&(zt=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),zt}function ot(t){return/^(html|body|#document)$/.test(J(t))}function S(t){return A(t).getComputedStyle(t)}function vt(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function X(t){if(J(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Xt(t)&&t.host||_(t);return Xt(e)?e.host:e}function ie(t){const e=X(t);return ot(e)?(t.ownerDocument||t).body:I(e)&&mt(e)?e:ie(e)}function st(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=ie(t),r=s===((o=t.ownerDocument)==null?void 0:o.body),i=A(s);if(r){const c=kt(i);return e.concat(i,i.visualViewport||[],mt(s)?s:[],c&&n?st(c):[])}else return e.concat(s,st(s,[],n))}function kt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ce(t){const e=S(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=I(t),r=s?t.offsetWidth:n,i=s?t.offsetHeight:o,c=ut(n)!==r||ut(o)!==i;return c&&(n=r,o=i),{width:n,height:o,$:c}}function Ft(t){return T(t)?t:t.contextElement}function K(t){const e=Ft(t);if(!I(e))return D(1);const n=e.getBoundingClientRect(),{width:o,height:s,$:r}=ce(e);let i=(r?ut(n.width):n.width)/o,c=(r?ut(n.height):n.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const on=D(0);function ae(t){const e=A(t);return!Pt()||!e.visualViewport?on:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function sn(t,e,n){return e===void 0&&(e=!1),!!n&&e&&n===A(t)}function U(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),r=Ft(t);let i=D(1);e&&(o?T(o)&&(i=K(o)):i=K(t));const c=sn(r,n,o)?ae(r):D(0);let l=(s.left+c.x)/i.x,d=(s.top+c.y)/i.y,u=s.width/i.x,a=s.height/i.y;if(r&&o){const f=A(r),h=T(o)?A(o):o;let m=f,g=kt(m);for(;g&&h!==m;){const p=K(g),v=g.getBoundingClientRect(),y=S(g),w=v.left+(g.clientLeft+parseFloat(y.paddingLeft))*p.x,b=v.top+(g.clientTop+parseFloat(y.paddingTop))*p.y;l*=p.x,d*=p.y,u*=p.x,a*=p.y,l+=w,d+=b,m=A(g),g=kt(m)}}return pt({width:u,height:a,x:l,y:d})}function yt(t,e){const n=vt(t).scrollLeft;return e?e.left+n:U(_(t)).left+n}function le(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-yt(t,n),s=n.top+e.scrollTop;return{x:o,y:s}}function rn(t){let{elements:e,rect:n,offsetParent:o,strategy:s}=t;const r=s==="fixed",i=_(o),c=e?gt(e.floating):!1;if(o===i||c&&r)return n;let l={scrollLeft:0,scrollTop:0},d=D(1);const u=D(0),a=I(o);if((a||!r)&&((J(o)!=="body"||mt(i))&&(l=vt(o)),a)){const h=U(o);d=K(o),u.x=h.x+o.clientLeft,u.y=h.y+o.clientTop}const f=i&&!a&&!r?le(i,l):D(0);return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-l.scrollLeft*d.x+u.x+f.x,y:n.y*d.y-l.scrollTop*d.y+u.y+f.y}}function cn(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function an(t){const e=vt(t),n=t.ownerDocument.body,o=Y(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=Y(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-e.scrollLeft+yt(t);const i=-e.scrollTop;return S(n).direction==="rtl"&&(r+=Y(t.clientWidth,n.clientWidth)-o),{width:o,height:s,x:r,y:i}}const ln=25;function dn(t,e,n){n===void 0&&(n="viewport");const o=n==="layoutViewport",s=A(t),r=_(t),i=s.visualViewport;let c=r.clientWidth,l=r.clientHeight,d=0,u=0;if(i){const f=!Pt()||e==="fixed";o?f||(d=-i.offsetLeft,u=-i.offsetTop):(c=i.width,l=i.height,f&&(d=i.offsetLeft,u=i.offsetTop))}if(yt(r)<=0){const f=r.ownerDocument,h=f.body,m=getComputedStyle(h),g=f.compatMode==="CSS1Compat"&&parseFloat(m.marginLeft)+parseFloat(m.marginRight)||0,p=Math.abs(r.clientWidth-h.clientWidth-g),v=getComputedStyle(r).scrollbarGutter==="stable both-edges"?p/2:p;v<=ln&&(c-=v)}return{width:c,height:l,x:d,y:u}}function un(t,e){const n=U(t,!0,e==="fixed"),o=n.top+t.clientTop,s=n.left+t.clientLeft,r=K(t),i=t.clientWidth*r.x,c=t.clientHeight*r.y,l=s*r.x,d=o*r.y;return{width:i,height:c,x:l,y:d}}function Ut(t,e,n){let o;if(e==="viewport"||e==="layoutViewport")o=dn(t,n,e);else if(e==="document")o=an(_(t));else if(T(e))o=un(e,n);else{const s=ae(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return pt(o)}function fn(t,e){const n=e.get(t);if(n)return n;let o=st(t,[],!1).filter(c=>T(c)&&J(c)!=="body"),s=null;const r=S(t).position==="fixed";let i=r?X(t):t;for(;T(i)&&!ot(i);){const c=S(i),l=_t(i),d=s?s.position:r?"fixed":"";!l&&(d==="fixed"||d==="absolute"&&c.position==="static")?o=o.filter(a=>a!==i):s=c,i=X(i)}return e.set(t,o),o}function pn(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const i=[...n==="clippingAncestors"?gt(e)?[]:fn(e,this._c):[].concat(n),o],c=Ut(e,i[0],s);let l=c.top,d=c.right,u=c.bottom,a=c.left;for(let f=1;f<i.length;f++){const h=Ut(e,i[f],s);l=Y(h.top,l),d=dt(h.right,d),u=dt(h.bottom,u),a=Y(h.left,a)}return{width:d-a,height:u-l,x:a,y:l}}function hn(t){const{width:e,height:n}=ce(t);return{width:e,height:n}}function mn(t,e,n){const o=I(e),s=_(e),r=n==="fixed",i=U(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=D(0);if((o||!r)&&((J(e)!=="body"||mt(s))&&(c=vt(e)),o)){const f=U(e,!0,r,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}!o&&s&&(l.x=yt(s));const d=s&&!o&&!r?le(s,c):D(0),u=i.left+c.scrollLeft-l.x-d.x,a=i.top+c.scrollTop-l.y-d.y;return{x:u,y:a,width:i.width,height:i.height}}function Ct(t){return S(t).position==="static"}function qt(t,e){if(!I(t)||S(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return _(t)===n&&(n=n.ownerDocument.body),n}function de(t,e){const n=A(t);if(gt(t))return n;if(!I(t)){let s=X(t);for(;s&&!ot(s);){if(T(s)&&!Ct(s))return s;s=X(s)}return n}let o=qt(t,e);for(;o&&Je(o)&&Ct(o);)o=qt(o,e);return o&&ot(o)&&Ct(o)&&!_t(o)?n:o||nn(t)||n}const gn=async function(t){const e=this.getOffsetParent||de,n=this.getDimensions,o=await n(t.floating);return{reference:mn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function vn(t){return S(t).direction==="rtl"}const yn={convertOffsetParentRelativeRectToViewportRelativeRect:rn,getDocumentElement:_,getClippingRect:pn,getOffsetParent:de,getElementRects:gn,getClientRects:cn,getDimensions:hn,getScale:K,isElement:T,isRTL:vn};function ue(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function wn(t,e,n){let o=null,s;const r=_(t);function i(){var u;clearTimeout(s),(u=o)==null||u.disconnect(),o=null}function c(u,a){u===void 0&&(u=!1),a===void 0&&(a=1),i();const f=t.getBoundingClientRect(),{left:h,top:m,width:g,height:p}=f;if(u||e(),!g||!p)return;const v=ct(m),y=ct(r.clientWidth-(h+g)),w=ct(r.clientHeight-(m+p)),b=ct(h),x={rootMargin:-v+"px "+-y+"px "+-w+"px "+-b+"px",threshold:Y(0,dt(1,a))||1};let $=!0;function P(L){const R=L[0].intersectionRatio;if(!ue(f,t.getBoundingClientRect()))return c();if(R!==a){if(!$)return c();R?c(!1,R):s=setTimeout(()=>{c(!1,1e-7)},1e3)}$=!1}try{o=new IntersectionObserver(P,{...x,root:r.ownerDocument})}catch{o=new IntersectionObserver(P,x)}o.observe(t)}const l=A(t),d=()=>c(n);return l.addEventListener("resize",d),c(!0),()=>{l.removeEventListener("resize",d),i()}}function bn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,d=Ft(t),u=s||r?[...d?st(d):[],...e?st(e):[]]:[];u.forEach(v=>{s&&v.addEventListener("scroll",n),r&&v.addEventListener("resize",n)});const a=d&&c?wn(d,n,r):null;let f=-1,h=null;i&&(h=new ResizeObserver(v=>{let[y]=v;y&&y.target===d&&h&&e&&(h.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var w;(w=h)==null||w.observe(e)})),n()}),d&&!l&&h.observe(d),e&&h.observe(e));let m,g=l?U(t):null;l&&p();function p(){const v=U(t);g&&!ue(g,v)&&n(),g=v,m=requestAnimationFrame(p)}return n(),()=>{var v;u.forEach(y=>{s&&y.removeEventListener("scroll",n),r&&y.removeEventListener("resize",n)}),a?.(),(v=h)==null||v.disconnect(),h=null,l&&cancelAnimationFrame(m)}}const xn=Qe,$n=Ze,zn=(t,e,n)=>{const o=new Map,s=n??{},r={...yn,...s.platform,_c:o};return Ke(t,e,{...s,platform:r})},Cn=[$n({fallbackAxisSideDirection:"start",crossAxis:!1}),xn()],An=({placement:t="bottom-start",strategy:e,middleware:n=Cn}={})=>{const[o,s]=q(),[r,i]=q(),[c,l]=q();return W(()=>{if(!o||!(r instanceof HTMLElement)){l(void 0);return}return bn(o,r,()=>zn(o,r,{placement:t,strategy:e,middleware:n}).then(l))},[o,r,t,e,n]),{setReference:s,setFloating:i,styles:Z(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},En=t=>{const e=Z(()=>({}),[]);return Z(()=>Object.assign(e,t),[e,...Object.values(t)])},Kt=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,Rn=({disabled:t,onFocus:e})=>{const[n,o]=q(),{focused:s,closed:r}=n||{},i=s&&!t,c=En({closed:r,onFocus:e}),l=O(u=>o(a=>({...a,closed:u})),[]),d=O(u=>{const a=u.currentTarget;return Kt(a)?o(f=>({focused:!0,closed:!f?.closed})):a.focus()},[]);return W(()=>{if(!i)return;const u=a=>{if(a.defaultPrevented)return;const{closed:f}=c;a.key==="Escape"&&!f?(a.preventDefault(),l(!0)):["ArrowUp","Up"].includes(a.key)&&f&&(a.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!r,setClosed:l,onToggle:d,onFocus:O(u=>{const a=Kt(u.currentTarget);o({focused:a}),c.onFocus?.(a)},[c])}},Mn=t=>{const e=Rn(t),{onFocus:n}=e,o=St();return W(()=>{t.setAttribute("tabindex","0");const s=i=>{clearTimeout(o.current),n(i)},r=i=>{clearTimeout(o.current);const c=i.currentTarget;o.current=setTimeout(()=>n({currentTarget:c}),30)};return t.addEventListener("focusin",s),t.addEventListener("focusout",r),()=>{clearTimeout(o.current),t.removeEventListener("focusin",s),t.removeEventListener("focusout",r)}},[n]),e},kn=t=>t.preventDefault(),On=rt`
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
`,Tn=t=>{const{placement:e,strategy:n,middleware:o,render:s}=t,{active:r,onToggle:i}=Mn(t),{styles:c,setReference:l,setFloating:d}=An({placement:e,strategy:n,middleware:o});return E` <div class="anchor" part="anchor" ${Rt(l)}>
			<button
				@mousedown=${kn}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${at(r,()=>E`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${De(c)}"
					@connected=${u=>u.target.showPopover?.()}
					${Rt(d)}
					><slot></slot>${Se([s],()=>s?.()||Et)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",Q(Tn,{styleSheets:[On]}));const Sn=rt`
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
`,Ln=()=>E` <slot></slot> `;customElements.define("cosmoz-dropdown-list",Q(Ln,{styleSheets:[Sn]}));const Dn=({placement:t})=>E` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",Q(Dn));const _n=({host:t,popoverRef:e,disabled:n,openOnHover:o,openOnFocus:s,open:r,close:i})=>{const c=St(),l=()=>clearTimeout(c.current),d=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const a=e.current;o&&(t.matches(":hover")||a?.matches(":hover"))||t.matches(":focus-within")||a?.matches(":focus-within")||i()},100)},u=()=>{n||(l(),r())};return W(()=>{if(!(!o||n))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",d),()=>{l(),t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",d)}},[o,n,t]),W(()=>{if(!(!s||n))return t.addEventListener("focusin",u),t.addEventListener("focusout",d),()=>{l(),t.removeEventListener("focusin",u),t.removeEventListener("focusout",d)}},[s,n,t]),{scheduleClose:d,cancelClose:l}},Pn=t=>{if(t.newState!=="open")return;const o=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of o){const r=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},Fn=rt`
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
`,Nn=t=>{const{placement:e="bottom span-right",disabled:n,passthrough:o,openOnHover:s,openOnFocus:r}=t,i=St(),[c,l]=Jt("opened",!1),d=O(()=>{n||(l(!0),i.current?.showPopover?.())},[n]),u=O(()=>{l(!1),i.current?.hidePopover?.()},[]),a=O(()=>{if(n)return;i.current?.matches(":popover-open")?u():d()},[n]);W(()=>{const p=i.current;p&&(c?p.showPopover?.():p.hidePopover?.())},[c]),W(()=>{t.toggleAttribute("opened",!!c)},[c]);const{scheduleClose:f,cancelClose:h}=_n({host:t,popoverRef:i,disabled:n,openOnHover:s,openOnFocus:r,open:d,close:u}),m=r?d:a,g=O(p=>{Pn(p),l(p.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:p.newState,oldState:p.oldState,composed:!0}))},[]);return E`
		<slot name="button" @click=${m}></slot>
		${n&&o?E`<slot></slot>`:E`<div
					popover
					style="position-area: ${e}"
					@toggle=${g}
					@select=${u}
					@focusout=${f}
					@focusin=${h}
					${Rt(p=>p&&(i.current=p))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",Q(Nn,{styleSheets:[Fn],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Wn=({slot:t,title:e,className:n,width:o="24",height:s="24",styles:r}={})=>E`
  <svg
    slot=${N(t)}
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
    style=${N(r)}
  >
    ${at(e,()=>Ce`<title>${e}</title>`)}
    <path
      d="M21 10H3m13-8v4M8 2v4m-.2 16h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22Z"
    />
  </svg>
`;function In(t,e,n){return Qt(t,e*7,n)}function Vn(t,e){const n=we(t,e?.in),o=n.getFullYear();return n.setFullYear(o+1,0,0),n.setHours(23,59,59,999),n}function Bn(t,e,n){return In(t,-1,n)}const Hn=rt`
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
`,jn=t=>[{label:k("Today"),start:()=>C(new Date,"yyyy-MM-dd"),end:()=>C(new Date,"yyyy-MM-dd")},{label:k("Yesterday"),start:()=>C(bt(new Date,1),"yyyy-MM-dd"),end:()=>C(bt(new Date,1),"yyyy-MM-dd")},{label:k("This week"),start:()=>C(it(new Date,t),"yyyy-MM-dd"),end:()=>C(Qt(it(new Date,t),6),"yyyy-MM-dd")},{label:k("Last week"),start:()=>C(Bn(it(new Date,t)),"yyyy-MM-dd"),end:()=>C(bt(it(new Date,t),1),"yyyy-MM-dd")},{label:k("This month"),start:()=>C(Ht(new Date),"yyyy-MM-dd"),end:()=>C(It(new Date),"yyyy-MM-dd")},{label:k("Last month"),start:()=>C(Vt(Ht(new Date),1),"yyyy-MM-dd"),end:()=>C(Vt(It(new Date),1),"yyyy-MM-dd")},{label:k("This year"),start:()=>C(be(new Date),"yyyy-MM-dd"),end:()=>C(Vn(new Date),"yyyy-MM-dd")}],Gn=t=>{const e=Z(()=>matchMedia(t),[t]),[n,o]=q(e.matches);return W(()=>{const s=r=>o(i=>i!==r.matches?r.matches:i);return e.addEventListener("change",s),()=>e.removeEventListener("change",s)},[e]),n},Yn=t=>{const{mode:e="range",locale:n,min:o,max:s,presets:r,singleCalendar:i=!1,disabled:c,noPresets:l,triggerSize:d,triggerVariant:u}=t,a=e==="single",f=n??navigator.language,[h,m]=Jt("value"),{start:g,end:p}=pe(h,e),v=Gn("(width < 735px)"),y=i||v||a,w=y?1:2,[b,z]=q(!1),x=Z(()=>r??jn(f),[f,r]),$=O(V=>{if(a){m(xt(V.detail.value,o,s));return}m({start:xt(V.detail.value,o,s),end:p})},[a,o,s,p,m]),P=O(V=>m({start:g,end:xt(V.detail.value,o,s)}),[o,s,g,m]),L=O(()=>{!a&&g&&p&&he(new Date(g),new Date(p))&&m({start:g,end:g})},[a,g,p,m]),R=O(()=>{g&&p&&me(new Date(p),new Date(g))&&m({start:p,end:p})},[g,p,m]);return{end:p,isSingleCalendar:y,locale:f,mode:e,isSingleDateMode:a,numberOfMonths:w,onEndInput:P,onStartInput:$,rangePresets:x,setValue:m,start:g,value:h,disabled:c,noPresets:l,min:o,max:s,triggerSize:d,triggerVariant:u,onStartInputBlur:L,onEndInputBlur:R,isOpen:b,setIsOpen:z}},Xn=t=>{const{end:e,isSingleCalendar:n,locale:o,mode:s,isSingleDateMode:r,numberOfMonths:i,onEndInput:c,onStartInput:l,rangePresets:d,setValue:u,start:a,value:f,min:h,max:m,disabled:g,noPresets:p,triggerSize:v,triggerVariant:y="secondary",onStartInputBlur:w,onEndInputBlur:b,isOpen:z,setIsOpen:x}=Yn(t);return E`
		<cosmoz-dropdown-next
			?disabled=${g}
			@dropdown-toggle=${()=>x($=>!$)}
			aria-disabled=${N(g?"true":void 0)}
		>
			<cosmoz-button
				slot="button"
				type="button"
				exposedparts="button: trigger"
				variant=${y}
				size=${N(v)}
				aria-label=${k("Date picker")}
				aria-disabled=${N(g?"true":void 0)}
				aria-haspopup="dialog"
				aria-expanded=${z?"true":"false"}
				?disabled=${g}
			>
				${Wn()}
				${ve(a,e,o,r)}
			</cosmoz-button>

			<div class="content" role="dialog">
				${at(!(p||n||r),()=>E`
						<div class="range-presets">
							${$e(d,$=>$.label,$=>E`
									<cosmoz-button
										variant="tertiary"
										full-width
										?active=${Bt($,a,e)}
										aria-pressed=${Bt($,a,e)?"true":"false"}
										@click=${()=>ye($,u,h,m)}
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
						.min=${N(h)}
						.max=${N(m)}
						.value=${f}
						@value-changed=${Ae(u)}
					></cosmoz-calendar>

					<footer>
						<div class="footer-left">
							<cosmoz-date-input
								aria-label=${N(r?void 0:k("Start date"))}
								locale=${o}
								.value=${a}
								@value-changed=${l}
								@blur=${w}
							></cosmoz-date-input>
							${at(!r,()=>E`
									<span>–</span>
									<cosmoz-date-input
										aria-label=${k("End date")}
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
								@click=${ge}
								>${k("OK")}</cosmoz-button
							>
						</div>
					</footer>
				</div>
			</div>
		</cosmoz-dropdown-next>
	`};customElements.define("cosmoz-datepicker",Q(Xn,{observedAttributes:["locale","min","max","disabled","mode","no-presets","single-calendar","trigger-size","trigger-variant"],styleSheets:[xe,Hn],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));
