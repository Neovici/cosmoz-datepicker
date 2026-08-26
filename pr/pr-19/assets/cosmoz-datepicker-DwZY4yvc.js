import{n as dt,s as $t,a as at,e as Vt,b as It,u as pe,g as zt,i as he,c as me,d as ge,f as ve,h as Bt,l as we}from"./calendar-DsG3LsbE.js";import{i as St,d as Zt,e as Lt,g as st,k as Z,u as k,o as W,a as Qt,t as ye,f as A,s as Ht,m as be,n as xe,l as $e}from"./date-DgMyZN_h.js";import{e as K,r as ze,E as Rt,A as Mt,b as R,g as G,h as V,u as Jt,k as Ce,j as O,l as Ae}from"./iframe-C3mFOlT7.js";import"./date-input-CnX7h9ck.js";function Ee(t){let e=t;return{get current(){return e},set current(o){e=o},get value(){return e},set value(o){e=o}}}function Dt(t){return K(()=>Ee(t),[])}const tt=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(e,!1),tt(n,e);return!0},ut=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},te=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),ke(e)}};function Re(t){this._$AN!==void 0?(ut(this),this._$AM=t,te(this)):this._$AM=t}function Me(t,e=!1,o=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let r=o;r<n.length;r++)tt(n[r],!1),ut(n[r]);else n!=null&&(tt(n,!1),ut(n));else tt(this,t)}const ke=t=>{t.type==Zt.CHILD&&(t._$AP??=Me,t._$AQ??=Re)};class Te extends St{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,n){super._$AT(e,o,n),te(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(tt(this,e),ut(this))}setValue(e){if(ze(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const Oe={},Se=Lt(class extends St{constructor(){super(...arguments),this.ot=Oe}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,s)=>n===this.ot[s]))return Rt}else if(this.ot===e)return Rt;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}}),Ct=new WeakMap,kt=Lt(class extends Te{render(t){return Mt}update(t,[e]){const o=e!==this.G;return o&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),Mt}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=Ct.get(e);o===void 0&&(o=new WeakMap,Ct.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?Ct.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const ee="important",Le=" !"+ee,De=Lt(class extends St{constructor(t){if(super(t),t.type!==Zt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const s=e[n];if(s!=null){this.ft.add(n);const r=typeof s=="string"&&s.endsWith(Le);n.includes("-")||r?o.setProperty(n,r?s.slice(0,-11):s,r?ee:""):o[n]=s}}return Rt}}),_e=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Pe=st`
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
`,Fe=()=>R`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",_e(Z(Fe,{styleSheets:[Pe]})));const ft=Math.min,Y=Math.max,pt=Math.round,lt=Math.floor,_=t=>({x:t,y:t}),Ne={left:"right",right:"left",bottom:"top",top:"bottom"};function We(t,e,o){return Y(t,ft(e,o))}function _t(t,e){return typeof t=="function"?t(e):t}function et(t){return t.split("-")[0]}function Pt(t){return t.split("-")[1]}function oe(t){return t==="x"?"y":"x"}function ne(t){return t==="y"?"height":"width"}function j(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function se(t){return oe(j(t))}function Ve(t,e,o){o===void 0&&(o=!1);const n=Pt(t),s=se(t),r=ne(s);let i=s==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(i=ht(i)),[i,ht(i)]}function Ie(t){const e=ht(t);return[Tt(t),e,Tt(e)]}function Tt(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const jt=["left","right"],Gt=["right","left"],Be=["top","bottom"],He=["bottom","top"];function je(t,e,o){switch(t){case"top":case"bottom":return o?e?Gt:jt:e?jt:Gt;case"left":case"right":return e?Be:He;default:return[]}}function Ge(t,e,o,n){const s=Pt(t);let r=je(et(t),o==="start",n);return s&&(r=r.map(i=>i+"-"+s),e&&(r=r.concat(r.map(Tt)))),r}function ht(t){const e=et(t);return Ne[e]+t.slice(e.length)}function Ye(t){var e,o,n,s;return{top:(e=t.top)!=null?e:0,right:(o=t.right)!=null?o:0,bottom:(n=t.bottom)!=null?n:0,left:(s=t.left)!=null?s:0}}function Xe(t){return typeof t!="number"?Ye(t):{top:t,right:t,bottom:t,left:t}}function mt(t){const{x:e,y:o,width:n,height:s}=t;return{width:n,height:s,top:o,left:e,right:e+n,bottom:o+s,x:e,y:o}}function Yt(t,e,o){let{reference:n,floating:s}=t;const r=j(e),i=se(e),c=ne(i),l=et(e),d=r==="y",u=n.x+n.width/2-s.width/2,a=n.y+n.height/2-s.height/2,p=n[c]/2-s[c]/2;let h;switch(l){case"top":h={x:u,y:n.y-s.height};break;case"bottom":h={x:u,y:n.y+n.height};break;case"right":h={x:n.x+n.width,y:a};break;case"left":h={x:n.x-s.width,y:a};break;default:h={x:n.x,y:n.y}}const g=Pt(e);return g&&(h[i]+=p*(g==="end"?1:-1)*(o&&d?-1:1)),h}async function Ue(t,e){var o;e===void 0&&(e={});const{x:n,y:s,platform:r,rects:i,elements:c,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:a="floating",altBoundary:p=!1,padding:h=0}=_t(e,t),g=Xe(h),f=c[p?a==="floating"?"reference":"floating":a],v=mt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(f)))==null||o?f:f.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:d,rootBoundary:u,strategy:l})),w=a==="floating"?{x:n,y:s,width:i.floating.width,height:i.floating.height}:i.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),$=await(r.isElement==null?void 0:r.isElement(b))&&await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1},z=mt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:b,strategy:l}):w);return{top:(v.top-z.top+g.top)/$.y,bottom:(z.bottom-v.bottom+g.bottom)/$.y,left:(v.left-z.left+g.left)/$.x,right:(z.right-v.right+g.right)/$.x}}const qe=50,Ke=async(t,e,o)=>{const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:i}=o,c=i.detectOverflow?i:{...i,detectOverflow:Ue},l=await(i.isRTL==null?void 0:i.isRTL(e));let d=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:a}=Yt(d,n,l),p=n,h=0;const g={};for(let m=0;m<r.length;m++){const f=r[m];if(!f)continue;const{name:v,fn:w}=f,{x:b,y:$,data:z,reset:y}=await w({x:u,y:a,initialPlacement:n,placement:p,strategy:s,middlewareData:g,rects:d,platform:c,elements:{reference:t,floating:e}});u=b??u,a=$??a,g[v]={...g[v],...z},y&&h<qe&&(h++,typeof y=="object"&&(y.placement&&(p=y.placement),y.rects&&(d=y.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):y.rects),{x:u,y:a}=Yt(d,p,l)),m=-1)}return{x:u,y:a,placement:p,strategy:s,middlewareData:g}},Ze=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:s,middlewareData:r,rects:i,initialPlacement:c,platform:l,elements:d}=e,{mainAxis:u=!0,crossAxis:a=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:m=!0,...f}=_t(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const v=et(s),w=j(c),b=et(c)===c,$=await(l.isRTL==null?void 0:l.isRTL(d.floating)),z=p||(b||!m?[ht(c)]:Ie(c)),y=g!=="none";!p&&y&&z.push(...Ge(c,m,g,$));const x=[c,...z],F=await l.detectOverflow(e,f),D=[];let M=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&D.push(F[v]),a){const C=Ve(s,i,$);D.push(F[C[0]],F[C[1]])}if(M=[...M,{placement:s,overflows:D}],!D.every(C=>C<=0)){var rt,it;const C=(((rt=r.flip)==null?void 0:rt.index)||0)+1,xt=x[C];if(xt&&(!(a==="alignment"?w!==j(xt):!1)||M.every(T=>j(T.placement)===w?T.overflows[0]>0:!0)))return{data:{index:C,overflows:M},reset:{placement:xt}};let J=(it=M.filter(B=>B.overflows[0]<=0).sort((B,T)=>B.overflows[1]-T.overflows[1])[0])==null?void 0:it.placement;if(!J)switch(h){case"bestFit":{var ct;const B=(ct=M.filter(T=>{if(y){const N=j(T.placement);return N===w||N==="y"}return!0}).map(T=>[T.placement,T.overflows.filter(N=>N>0).reduce((N,fe)=>N+fe,0)]).sort((T,N)=>T[1]-N[1])[0])==null?void 0:ct[0];B&&(J=B);break}case"initialPlacement":J=c;break}if(s!==J)return{reset:{placement:J}}}return{}}}},Qe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:s,platform:r}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:l={fn:w=>{let{x:b,y:$}=w;return{x:b,y:$}}},...d}=_t(t,e),u={x:o,y:n},a=await r.detectOverflow(e,d),p=j(s),h=oe(p);let g=u[h],m=u[p];const f=(w,b)=>We(b+a[w==="y"?"top":"left"],b,b-a[w==="y"?"bottom":"right"]);i&&(g=f(h,g)),c&&(m=f(p,m));const v=l.fn({...e,[h]:g,[p]:m});return{...v,data:{x:v.x-o,y:v.y-n,enabled:{[h]:i,[p]:c}}}}}};function gt(){return typeof window<"u"}function Q(t){return re(t)?(t.nodeName||"").toLowerCase():"#document"}function E(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function P(t){var e;return(e=(re(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function re(t){return gt()?t instanceof Node||t instanceof E(t).Node:!1}function S(t){return gt()?t instanceof Element||t instanceof E(t).Element:!1}function I(t){return gt()?t instanceof HTMLElement||t instanceof E(t).HTMLElement:!1}function Xt(t){return!gt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof E(t).ShadowRoot}function vt(t){const{overflow:e,overflowX:o,overflowY:n,display:s}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&s!=="inline"&&s!=="contents"}function Je(t){return/^(table|td|th)$/.test(Q(t))}function wt(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const to=/transform|translate|scale|rotate|perspective|filter/,eo=/paint|layout|strict|content/,H=t=>!!t&&t!=="none";let At;function Ft(t){const e=S(t)?L(t):t;return H(e.transform)||H(e.translate)||H(e.scale)||H(e.rotate)||H(e.perspective)||!Nt()&&(H(e.backdropFilter)||H(e.filter))||to.test(e.willChange||"")||eo.test(e.contain||"")}function oo(t){let e=X(t);for(;I(e)&&!ot(e);){if(Ft(e))return e;if(wt(e))return null;e=X(e)}return null}function Nt(){return At==null&&(At=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),At}function ot(t){return/^(html|body|#document)$/.test(Q(t))}function L(t){return E(t).getComputedStyle(t)}function yt(t){return S(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function X(t){if(Q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Xt(t)&&t.host||P(t);return Xt(e)?e.host:e}function ie(t){const e=X(t);return ot(e)?(t.ownerDocument||t).body:I(e)&&vt(e)?e:ie(e)}function nt(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const s=ie(t),r=s===((n=t.ownerDocument)==null?void 0:n.body),i=E(s);if(r){const c=Ot(i);return e.concat(i,i.visualViewport||[],vt(s)?s:[],c&&o?nt(c):[])}else return e.concat(s,nt(s,[],o))}function Ot(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ce(t){const e=L(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const s=I(t),r=s?t.offsetWidth:o,i=s?t.offsetHeight:n,c=pt(o)!==r||pt(n)!==i;return c&&(o=r,n=i),{width:o,height:n,$:c}}function Wt(t){return S(t)?t:t.contextElement}function q(t){const e=Wt(t);if(!I(e))return _(1);const o=e.getBoundingClientRect(),{width:n,height:s,$:r}=ce(e);let i=(r?pt(o.width):o.width)/n,c=(r?pt(o.height):o.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const no=_(0);function ae(t){const e=E(t);return!Nt()||!e.visualViewport?no:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function so(t,e,o){return e===void 0&&(e=!1),!!o&&e&&o===E(t)}function U(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const s=t.getBoundingClientRect(),r=Wt(t);let i=_(1);e&&(n?S(n)&&(i=q(n)):i=q(t));const c=so(r,o,n)?ae(r):_(0);let l=(s.left+c.x)/i.x,d=(s.top+c.y)/i.y,u=s.width/i.x,a=s.height/i.y;if(r&&n){const p=E(r),h=S(n)?E(n):n;let g=p,m=Ot(g);for(;m&&h!==g;){const f=q(m),v=m.getBoundingClientRect(),w=L(m),b=v.left+(m.clientLeft+parseFloat(w.paddingLeft))*f.x,$=v.top+(m.clientTop+parseFloat(w.paddingTop))*f.y;l*=f.x,d*=f.y,u*=f.x,a*=f.y,l+=b,d+=$,g=E(m),m=Ot(g)}}return mt({width:u,height:a,x:l,y:d})}function bt(t,e){const o=yt(t).scrollLeft;return e?e.left+o:U(P(t)).left+o}function le(t,e){const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-bt(t,o),s=o.top+e.scrollTop;return{x:n,y:s}}function ro(t){let{elements:e,rect:o,offsetParent:n,strategy:s}=t;const r=s==="fixed",i=P(n),c=e?wt(e.floating):!1;if(n===i||c&&r)return o;let l={scrollLeft:0,scrollTop:0},d=_(1);const u=_(0),a=I(n);if((a||!r)&&((Q(n)!=="body"||vt(i))&&(l=yt(n)),a)){const h=U(n);d=q(n),u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}const p=i&&!a&&!r?le(i,l):_(0);return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-l.scrollLeft*d.x+u.x+p.x,y:o.y*d.y-l.scrollTop*d.y+u.y+p.y}}function io(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function co(t){const e=yt(t),o=t.ownerDocument.body,n=Y(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),s=Y(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let r=-e.scrollLeft+bt(t);const i=-e.scrollTop;return L(o).direction==="rtl"&&(r+=Y(t.clientWidth,o.clientWidth)-n),{width:n,height:s,x:r,y:i}}const ao=25;function lo(t,e,o){o===void 0&&(o="viewport");const n=o==="layoutViewport",s=E(t),r=P(t),i=s.visualViewport;let c=r.clientWidth,l=r.clientHeight,d=0,u=0;if(i){const p=!Nt()||e==="fixed";n?p||(d=-i.offsetLeft,u=-i.offsetTop):(c=i.width,l=i.height,p&&(d=i.offsetLeft,u=i.offsetTop))}if(bt(r)<=0){const p=r.ownerDocument,h=p.body,g=getComputedStyle(h),m=p.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,f=Math.abs(r.clientWidth-h.clientWidth-m),v=getComputedStyle(r).scrollbarGutter==="stable both-edges"?f/2:f;v<=ao&&(c-=v)}return{width:c,height:l,x:d,y:u}}function uo(t,e){const o=U(t,!0,e==="fixed"),n=o.top+t.clientTop,s=o.left+t.clientLeft,r=q(t),i=t.clientWidth*r.x,c=t.clientHeight*r.y,l=s*r.x,d=n*r.y;return{width:i,height:c,x:l,y:d}}function Ut(t,e,o){let n;if(e==="viewport"||e==="layoutViewport")n=lo(t,o,e);else if(e==="document")n=co(P(t));else if(S(e))n=uo(e,o);else{const s=ae(t);n={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return mt(n)}function fo(t,e){const o=e.get(t);if(o)return o;let n=nt(t,[],!1).filter(c=>S(c)&&Q(c)!=="body"),s=null;const r=L(t).position==="fixed";let i=r?X(t):t;for(;S(i)&&!ot(i);){const c=L(i),l=Ft(i),d=s?s.position:r?"fixed":"";!l&&(d==="fixed"||d==="absolute"&&c.position==="static")?n=n.filter(a=>a!==i):s=c,i=X(i)}return e.set(t,n),n}function po(t){let{element:e,boundary:o,rootBoundary:n,strategy:s}=t;const i=[...o==="clippingAncestors"?wt(e)?[]:fo(e,this._c):[].concat(o),n],c=Ut(e,i[0],s);let l=c.top,d=c.right,u=c.bottom,a=c.left;for(let p=1;p<i.length;p++){const h=Ut(e,i[p],s);l=Y(h.top,l),d=ft(h.right,d),u=ft(h.bottom,u),a=Y(h.left,a)}return{width:d-a,height:u-l,x:a,y:l}}function ho(t){const{width:e,height:o}=ce(t);return{width:e,height:o}}function mo(t,e,o){const n=I(e),s=P(e),r=o==="fixed",i=U(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=_(0);if((n||!r)&&((Q(e)!=="body"||vt(s))&&(c=yt(e)),n)){const p=U(e,!0,r,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}!n&&s&&(l.x=bt(s));const d=s&&!n&&!r?le(s,c):_(0),u=i.left+c.scrollLeft-l.x-d.x,a=i.top+c.scrollTop-l.y-d.y;return{x:u,y:a,width:i.width,height:i.height}}function Et(t){return L(t).position==="static"}function qt(t,e){if(!I(t)||L(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return P(t)===o&&(o=o.ownerDocument.body),o}function de(t,e){const o=E(t);if(wt(t))return o;if(!I(t)){let s=X(t);for(;s&&!ot(s);){if(S(s)&&!Et(s))return s;s=X(s)}return o}let n=qt(t,e);for(;n&&Je(n)&&Et(n);)n=qt(n,e);return n&&ot(n)&&Et(n)&&!Ft(n)?o:n||oo(t)||o}const go=async function(t){const e=this.getOffsetParent||de,o=this.getDimensions,n=await o(t.floating);return{reference:mo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function vo(t){return L(t).direction==="rtl"}const wo={convertOffsetParentRelativeRectToViewportRelativeRect:ro,getDocumentElement:P,getClippingRect:po,getOffsetParent:de,getElementRects:go,getClientRects:io,getDimensions:ho,getScale:q,isElement:S,isRTL:vo};function ue(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function yo(t,e,o){let n=null,s;const r=P(t);function i(){var u;clearTimeout(s),(u=n)==null||u.disconnect(),n=null}function c(u,a){u===void 0&&(u=!1),a===void 0&&(a=1),i();const p=t.getBoundingClientRect(),{left:h,top:g,width:m,height:f}=p;if(u||e(),!m||!f)return;const v=lt(g),w=lt(r.clientWidth-(h+m)),b=lt(r.clientHeight-(g+f)),$=lt(h),y={rootMargin:-v+"px "+-w+"px "+-b+"px "+-$+"px",threshold:Y(0,ft(1,a))||1};let x=!0;function F(D){const M=D[0].intersectionRatio;if(!ue(p,t.getBoundingClientRect()))return c();if(M!==a){if(!x)return c();M?c(!1,M):s=setTimeout(()=>{c(!1,1e-7)},1e3)}x=!1}try{n=new IntersectionObserver(F,{...y,root:r.ownerDocument})}catch{n=new IntersectionObserver(F,y)}n.observe(t)}const l=E(t),d=()=>c(o);return l.addEventListener("resize",d),c(!0),()=>{l.removeEventListener("resize",d),i()}}function bo(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,d=Wt(t),u=s||r?[...d?nt(d):[],...e?nt(e):[]]:[];u.forEach(v=>{s&&v.addEventListener("scroll",o),r&&v.addEventListener("resize",o)});const a=d&&c?yo(d,o,r):null;let p=-1,h=null;i&&(h=new ResizeObserver(v=>{let[w]=v;w&&w.target===d&&h&&e&&(h.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var b;(b=h)==null||b.observe(e)})),o()}),d&&!l&&h.observe(d),e&&h.observe(e));let g,m=l?U(t):null;l&&f();function f(){const v=U(t);m&&!ue(m,v)&&o(),m=v,g=requestAnimationFrame(f)}return o(),()=>{var v;u.forEach(w=>{s&&w.removeEventListener("scroll",o),r&&w.removeEventListener("resize",o)}),a?.(),(v=h)==null||v.disconnect(),h=null,l&&cancelAnimationFrame(g)}}const xo=Qe,$o=Ze,zo=(t,e,o)=>{const n=new Map,s=o??{},r={...wo,...s.platform,_c:n};return Ke(t,e,{...s,platform:r})},Co=[$o({fallbackAxisSideDirection:"start",crossAxis:!1}),xo()],Ao=({placement:t="bottom-start",strategy:e,middleware:o=Co}={})=>{const[n,s]=G(),[r,i]=G(),[c,l]=G();return V(()=>{if(!n||!(r instanceof HTMLElement)){l(void 0);return}return bo(n,r,()=>zo(n,r,{placement:t,strategy:e,middleware:o}).then(l))},[n,r,t,e,o]),{setReference:s,setFloating:i,styles:K(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}},Eo=t=>{const e=K(()=>({}),[]);return K(()=>Object.assign(e,t),[e,...Object.values(t)])},Kt=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,Ro=({disabled:t,onFocus:e})=>{const[o,n]=G(),{focused:s,closed:r}=o||{},i=s&&!t,c=Eo({closed:r,onFocus:e}),l=k(u=>n(a=>({...a,closed:u})),[]),d=k(u=>{const a=u.currentTarget;return Kt(a)?n(p=>({focused:!0,closed:!p?.closed})):a.focus()},[]);return V(()=>{if(!i)return;const u=a=>{if(a.defaultPrevented)return;const{closed:p}=c;a.key==="Escape"&&!p?(a.preventDefault(),l(!0)):["ArrowUp","Up"].includes(a.key)&&p&&(a.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!r,setClosed:l,onToggle:d,onFocus:k(u=>{const a=Kt(u.currentTarget);n({focused:a}),c.onFocus?.(a)},[c])}},Mo=t=>{const e=Ro(t),{onFocus:o}=e,n=Dt();return V(()=>{t.setAttribute("tabindex","0");const s=i=>{clearTimeout(n.current),o(i)},r=i=>{clearTimeout(n.current);const c=i.currentTarget;n.current=setTimeout(()=>o({currentTarget:c}),30)};return t.addEventListener("focusin",s),t.addEventListener("focusout",r),()=>{clearTimeout(n.current),t.removeEventListener("focusin",s),t.removeEventListener("focusout",r)}},[o]),e},ko=t=>t.preventDefault(),To=st`
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
`,Oo=t=>{const{placement:e,strategy:o,middleware:n,render:s}=t,{active:r,onToggle:i}=Mo(t),{styles:c,setReference:l,setFloating:d}=Ao({placement:e,strategy:o,middleware:n});return R` <div class="anchor" part="anchor" ${kt(l)}>
			<button
				@mousedown=${ko}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${dt(r,()=>R`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${De(c)}"
					@connected=${u=>u.target.showPopover?.()}
					${kt(d)}
					><slot></slot>${Se([s],()=>s?.()||Mt)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",Z(Oo,{styleSheets:[To]}));const So=st`
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
`,Lo=()=>R` <slot></slot> `;customElements.define("cosmoz-dropdown-list",Z(Lo,{styleSheets:[So]}));const Do=({placement:t})=>R` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",Z(Do));const _o=({host:t,popoverRef:e,disabled:o,openOnHover:n,openOnFocus:s,open:r,close:i})=>{const c=Dt(),l=()=>clearTimeout(c.current),d=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const a=e.current;n&&(t.matches(":hover")||a?.matches(":hover"))||t.matches(":focus-within")||a?.matches(":focus-within")||i()},100)},u=()=>{o||(l(),r())};return V(()=>{if(!(!n||o))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",d),()=>{l(),t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",d)}},[n,o,t]),V(()=>{if(!(!s||o))return t.addEventListener("focusin",u),t.addEventListener("focusout",d),()=>{l(),t.removeEventListener("focusin",u),t.removeEventListener("focusout",d)}},[s,o,t]),{scheduleClose:d,cancelClose:l}},Po=t=>{if(t.newState!=="open")return;const n=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of n){const r=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},Fo=st`
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
`,No=t=>{const{placement:e="bottom span-right",disabled:o,passthrough:n,openOnHover:s,openOnFocus:r}=t,i=Dt(),[c,l]=Jt("opened",!1),d=k(()=>{o||(l(!0),i.current?.showPopover?.())},[o]),u=k(()=>{l(!1),i.current?.hidePopover?.()},[]),a=k(()=>{if(o)return;i.current?.matches(":popover-open")?u():d()},[o]);V(()=>{const f=i.current;f&&(c?f.showPopover?.():f.hidePopover?.())},[c]),V(()=>{t.toggleAttribute("opened",!!c)},[c]);const{scheduleClose:p,cancelClose:h}=_o({host:t,popoverRef:i,disabled:o,openOnHover:s,openOnFocus:r,open:d,close:u}),g=r?d:a,m=k(f=>{Po(f),l(f.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:f.newState,oldState:f.oldState,composed:!0}))},[]);return R`
		<slot name="button" @click=${g}></slot>
		${o&&n?R`<slot></slot>`:R`<div
					popover
					style="position-area: ${e}"
					@toggle=${m}
					@select=${u}
					@focusout=${p}
					@focusin=${h}
					${kt(f=>f&&(i.current=f))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",Z(No,{styleSheets:[Fo],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Wo=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:r}={})=>R`
  <svg
    slot=${W(t)}
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
    height=${s}
    style=${W(r)}
  >
    ${dt(e,()=>Ce`<title>${e}</title>`)}
    <path
      d="M21 10H3m13-8v4M8 2v4m-.2 16h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22Z"
    />
  </svg>
`;function Vo(t,e,o){return Qt(t,e*7,o)}function Io(t,e){const o=ye(t,e?.in),n=o.getFullYear();return o.setFullYear(n+1,0,0),o.setHours(23,59,59,999),o}function Bo(t,e,o){return Vo(t,-1,o)}const Ho=st`
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
`,jo=t=>[{label:O("Today"),start:()=>A(new Date,"yyyy-MM-dd"),end:()=>A(new Date,"yyyy-MM-dd")},{label:O("Yesterday"),start:()=>A($t(new Date,1),"yyyy-MM-dd"),end:()=>A($t(new Date,1),"yyyy-MM-dd")},{label:O("This week"),start:()=>A(at(new Date,t),"yyyy-MM-dd"),end:()=>A(Qt(at(new Date,t),6),"yyyy-MM-dd")},{label:O("Last week"),start:()=>A(Bo(at(new Date,t)),"yyyy-MM-dd"),end:()=>A($t(at(new Date,t),1),"yyyy-MM-dd")},{label:O("This month"),start:()=>A(Ht(new Date),"yyyy-MM-dd"),end:()=>A(Vt(new Date),"yyyy-MM-dd")},{label:O("Last month"),start:()=>A(It(Ht(new Date),1),"yyyy-MM-dd"),end:()=>A(It(Vt(new Date),1),"yyyy-MM-dd")},{label:O("This year"),start:()=>A(be(new Date),"yyyy-MM-dd"),end:()=>A(Io(new Date),"yyyy-MM-dd")}],Go=t=>{const e=K(()=>matchMedia(t),[t]),[o,n]=G(e.matches);return V(()=>{const s=r=>n(i=>i!==r.matches?r.matches:i);return e.addEventListener("change",s),()=>e.removeEventListener("change",s)},[e]),o},Yo=t=>{const{mode:e="range",locale:o,min:n,max:s,presets:r,singleCalendar:i=!1,disabled:c,noPresets:l,triggerSize:d,triggerVariant:u}=t,a=e==="single",p=o??navigator.language,[h,g]=Jt("value"),[m,f]=G(h),v=Go("(width < 735px)"),w=i||v||a,b=w?1:2,[$,z]=G(!1),{start:y,end:x}=pe(m,e),F=K(()=>r??jo(p),[p,r]),D=k(({newState:C})=>{C==="closed"?g(m):f(h),z(C==="open")},[m,h,z,g,f]),M=k(C=>{if(a){f(zt(C.detail.value,n,s));return}f({start:zt(C.detail.value,n,s),end:x})},[a,n,s,x,f]),rt=k(C=>f({start:y,end:zt(C.detail.value,n,s)}),[n,s,y,f]),it=k(()=>{!a&&y&&x&&he(new Date(y),new Date(x))&&f({start:y,end:y})},[a,y,x,f]),ct=k(()=>{y&&x&&me(new Date(x),new Date(y))&&f({start:x,end:x})},[y,x,f]);return{end:x,isSingleCalendar:w,locale:p,mode:e,isSingleDateMode:a,numberOfMonths:b,onEndInput:rt,onStartInput:M,rangePresets:F,setValue:f,start:y,value:m,disabled:c,noPresets:l,min:n,max:s,triggerSize:d,triggerVariant:u,onStartInputBlur:it,onEndInputBlur:ct,isOpen:$,onDropdownToggle:D}},Xo=t=>{const{end:e,isSingleCalendar:o,locale:n,mode:s,isSingleDateMode:r,numberOfMonths:i,onEndInput:c,onStartInput:l,rangePresets:d,setValue:u,start:a,value:p,min:h,max:g,disabled:m,noPresets:f,triggerSize:v,triggerVariant:w="secondary",onStartInputBlur:b,onEndInputBlur:$,isOpen:z,onDropdownToggle:y}=Yo(t);return R`
		<cosmoz-dropdown-next
			?disabled=${m}
			@dropdown-toggle=${y}
			aria-disabled=${W(m?"true":void 0)}
		>
			<cosmoz-button
				slot="button"
				type="button"
				exportparts="button:trigger"
				variant=${w}
				size=${W(v)}
				aria-label=${O("Date picker")}
				aria-disabled=${W(m?"true":void 0)}
				aria-haspopup="dialog"
				aria-expanded=${z?"true":"false"}
				?disabled=${m}
			>
				${Wo()}
				${ve(a,e,n,r)}
			</cosmoz-button>

			<div class="content" role="dialog">
				${dt(!(f||o||r),()=>R`
						<div class="range-presets">
							${$e(d,x=>x.label,x=>R`
									<cosmoz-button
										variant="tertiary"
										full-width
										?active=${Bt(x,a,e)}
										aria-pressed=${Bt(x,a,e)?"true":"false"}
										@click=${()=>we(x,u,h,g)}
										>${x.label}</cosmoz-button
									>
								`)}
						</div>
					`)}

				<div class="main">
					<cosmoz-calendar
						autofocus
						mode=${s}
						locale=${n}
						number-of-months=${i}
						.min=${W(h)}
						.max=${W(g)}
						.value=${p}
						@value-changed=${Ae(u)}
					></cosmoz-calendar>

					<footer>
						<div class="footer-left">
							<cosmoz-date-input
								aria-label=${W(r?void 0:O("Start date"))}
								locale=${n}
								.value=${a}
								@value-changed=${l}
								@blur=${b}
							></cosmoz-date-input>
							${dt(!r,()=>R`
									<span>–</span>
									<cosmoz-date-input
										aria-label=${O("End date")}
										locale=${n}
										.value=${e}
										@value-changed=${c}
										@blur=${$}
									></cosmoz-date-input>
								`)}
						</div>
						<div>
							<cosmoz-button
								?full-width=${o}
								@click=${ge}
								>${O("OK")}</cosmoz-button
							>
						</div>
					</footer>
				</div>
			</div>
		</cosmoz-dropdown-next>
	`};customElements.define("cosmoz-datepicker",Z(Xo,{observedAttributes:["locale","min","max","disabled","mode","no-presets","single-calendar","trigger-size","trigger-variant"],styleSheets:[xe,Ho],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));
