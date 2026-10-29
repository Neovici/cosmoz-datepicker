import{i as ut,d as Ct,e as ht,g as V,k as tt,n as et,p as Vt,u as F,o as u,c as Mt,q as Wt,t as O,j as P,a as Q,b as I,h as C,f as R,s as pt,l as q}from"./date-COk_vMeE.js";import{e as B,r as Yt,A as X,b,h as M,D as qt,g as N,m as Kt,k as Dt,E as it,j as T,u as Ut}from"./iframe-IKfAL86V.js";function Qt(t){let e=t;return{get current(){return e},set current(o){e=o},get value(){return e},set value(o){e=o}}}function K(t){return B(()=>Qt(t),[])}const H=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const r of o)r._$AO?.(e,!1),H(r,e);return!0},J=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},Et=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Zt(e)}};function Xt(t){this._$AN!==void 0?(J(this),this._$AM=t,Et(this)):this._$AM=t}function Jt(t,e=!1,o=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(r))for(let i=o;i<r.length;i++)H(r[i],!1),J(r[i]);else r!=null&&(H(r,!1),J(r));else H(this,t)}const Zt=t=>{t.type==Ct.CHILD&&(t._$AP??=Jt,t._$AQ??=Xt)};class te extends ut{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,r){super._$AT(e,o,r),Et(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(H(this,e),J(this))}setValue(e){if(Yt(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const rt=new WeakMap,nt=ht(class extends te{render(t){return X}update(t,[e]){const o=e!==this.G;return o&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),X}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=rt.get(e);o===void 0&&(o=new WeakMap,rt.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?rt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function L(t,e,o){return t?e(t):o?.(t)}const ee=V`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`;customElements.define("cosmoz-tooltip-content",tt(()=>b`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[et,ee]}));const ct=Vt(V`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`),zt=(t,e,o)=>qt(b`<cosmoz-tooltip-content>
			${L(e,()=>b`<strong slot="heading">${e}</strong>`)}
			${L(o,()=>b`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,t),oe=(t,e)=>{const{for:o,heading:r,description:n,placement:i="top",delay:c=300,disabled:h=!1}=e,a=K(),m=!!(r||n)&&!h;M(()=>{if(!o||!m)return;const f=t.getRootNode(),p=f.adoptedStyleSheets??[];p.includes(ct)||(f.adoptedStyleSheets=[...p,ct]);const s=document.createElement("div");s.setAttribute("popover","manual"),s.setAttribute("role","tooltip"),s.classList.add("cosmoz-tooltip-popover"),t.after(s),a.current=s,zt(s,r,n);const w=`[name="${o}"]`,x=`--tooltip-anchor-${o}`;let v;const g=k=>{h||(clearTimeout(v),k.style.anchorName=x,s.style.positionAnchor=x,s.style.positionArea=i,v=window.setTimeout(()=>s.showPopover(),c))},z=()=>{clearTimeout(v),s.hidePopover()},S=k=>{const A=k.target.closest?.(w);A&&g(A)},$=k=>{const A=k.target.closest?.(w);if(!A)return;const _=k.relatedTarget;_&&A.contains(_)||z()},D=k=>{const A=k.target.closest?.(w);A&&g(A)},j=k=>{k.target.closest?.(w)&&z()};return f.addEventListener("pointerover",S),f.addEventListener("pointerout",$),f.addEventListener("focusin",D),f.addEventListener("focusout",j),()=>{clearTimeout(v),f.removeEventListener("pointerover",S),f.removeEventListener("pointerout",$),f.removeEventListener("focusin",D),f.removeEventListener("focusout",j),s.hidePopover(),s.remove(),a.current=void 0}},[o,i,c,m]),M(()=>{!o||!a.current||zt(a.current,r,n)},[r,n,o]),M(()=>{!h||!a.current||a.current.hidePopover()},[h])},re=t=>{const[e,o]=N(!1);return M(()=>{const r=t.current;if(!r)return;const n=()=>{o(r.assignedElements().length>0)};return n(),r.addEventListener("slotchange",n),()=>r.removeEventListener("slotchange",n)},[t.current]),e},ne=V`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,se=t=>{const{heading:e,description:o,for:r,placement:n="top",delay:i=300,disabled:c=!1}=t,h=K(),a=K(),y=K(),m=re(y),p=!!(e||o||m)&&!c,s=F(()=>{p&&(clearTimeout(a.current),a.current=window.setTimeout(()=>{h.current?.showPopover()},i))},[i,p]);M(()=>{c&&(clearTimeout(a.current),h.current?.hidePopover())},[c]);const w=F(()=>{clearTimeout(a.current),h.current?.hidePopover()},[]);return M(()=>{if(r)return;const x=v=>{const g=v.relatedTarget;g&&t.contains(g)||w()};return t.addEventListener("pointerover",s),t.addEventListener("pointerout",x),()=>{t.removeEventListener("pointerover",s),t.removeEventListener("pointerout",x)}},[r,s,w]),oe(t,{for:r,heading:e,description:o,placement:n,delay:i,disabled:c}),r?X:p?b`
		<slot @focusin=${s} @focusout=${w}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${n}"
			${nt(h)}
		>
			<cosmoz-tooltip-content>
				${L(e,()=>b`<strong slot="heading">${e}</strong>`)}
				${L(o,()=>b`<p slot="description">${o}</p>`)}
				<slot name="content" ${nt(y)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:b`
			<slot></slot>
			<slot name="content" ${nt(y)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",tt(se,{styleSheets:[et,ct,ne],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const yt=(t,e)=>{t.type="submit",t.hidden=!0,t.disabled=!!(e.disabled||e.formDisabled),t.name=e.name??"",t.value=e.value??"";for(const o of["form","formaction","formenctype","formmethod","formnovalidate","formtarget"])e.hasAttribute(o)?t.setAttribute(o,e.getAttribute(o)):t.removeAttribute(o)};class ae extends HTMLElement{static formAssociated=!0;#o=this.attachInternals();#t;get form(){return this.#o.form}syncFormButton(){if(!this.isConnected||this.type!=="submit"||this.href!=null){this.#t?.remove(),this.#t=void 0;return}this.#t?yt(this.#t,this):(this.#t=document.createElement("button"),yt(this.#t,this),this.append(this.#t))}formAssociatedCallback(){this.syncFormButton()}formDisabledCallback(e){this.formDisabled=e,this.syncFormButton()}connectedCallback(){this.addEventListener("click",this.#e),this.syncFormButton()}disconnectedCallback(){this.removeEventListener("click",this.#e),this.#t?.remove(),this.#t=void 0}#e=e=>{this.#t&&e.composedPath().includes(this.#t)||setTimeout(()=>{if(e.defaultPrevented||!this.isConnected||this.disabled||this.formDisabled||this.href!=null)return;const o=this.form;o&&(this.type==="reset"?o.reset():this.type==="submit"&&(this.syncFormButton(),this.#t&&o.requestSubmit(this.#t)))},0)}}const ie=V`
	:host {
		display: inline-flex;

		--_wash: var(--cz-color-bg-glass, var(--cz-color-bg-tertiary));
		--_wash-strong: var(
			--cz-color-bg-glass-hover,
			var(--cz-color-bg-secondary-hover)
		);
		--_hairline: var(--cz-color-border-glass, var(--cz-color-border-primary));
		--_sheen: var(--cz-glass-action-sheen, var(--cz-action-sheen, none));
		--_lift: var(--cz-shadow-xs);
		--_pressed-bg: var(
			--cz-color-bg-glass-action-pressed,
			var(--cz-color-bg-action-solid-hover)
		);
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* Keeps the inner control stretching with host-driven sizing. */
	:host > cosmoz-tooltip {
		display: flex;
		width: 100%;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: var(--cosmoz-button-justify-content, center);
		gap: 6px;
		width: 100%;
		height: var(--cz-control-height-md);
		padding: 0 14px;
		border: 1px solid transparent;
		border-radius: var(--cz-radius-md);
		font-family: var(--cz-font-body);
		font-size: calc((var(--cz-text-sm) + var(--cz-text-xs)) / 2);
		font-weight: var(--cz-font-weight-regular);
		line-height: 1.25;
		letter-spacing: normal;
		text-align: center;
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		outline: 2px solid transparent;
		outline-offset: 2px;
		transition:
			background-color 120ms ease-out,
			color 120ms ease-out,
			box-shadow 120ms ease-out,
			outline-color 120ms ease-out;

		background:
			var(
				--cz-glass-button-action-sheen,
				var(--cz-glass-action-sheen, var(--cz-action-sheen, none))
			),
			var(--cz-color-bg-glass-action, var(--cz-color-bg-action-solid));
		border-color: var(--cz-color-border-glass-action, transparent);
		backdrop-filter: var(--cz-backdrop-filter-glass, none);
		color: var(--cz-color-text-on-glass-action, var(--cz-color-text-on-action));
		box-shadow: var(
			--cz-shadow-glass-button-action,
			var(--cz-shadow-glass-action, var(--cz-shadow-action))
		);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-action-hover,
				var(--cz-color-bg-action-solid-hover)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-focus-ring);
		}
	}

	::slotted(iron-icon) {
		pointer-events: none;
		width: var(--cosmoz-button-icon-size, var(--cz-icon-size-lg, 1.25rem));
		height: var(--cosmoz-button-icon-size, var(--cz-icon-size-lg, 1.25rem));
		flex: none;
	}

	::slotted(svg) {
		width: var(--cosmoz-button-icon-size, var(--cz-icon-size-sm, 1rem));
		height: var(--cosmoz-button-icon-size, var(--cz-icon-size-sm, 1rem));
		flex-shrink: 0;
	}

	::slotted([slot='prefix']) {
		margin-inline-start: -2px;
	}

	::slotted([slot='suffix']) {
		margin-inline-end: -2px;
	}

	/* Sizes */

	:host([size='sm']) .button {
		height: var(--cz-control-height-sm);
		padding: 0 12px;
		font-size: var(--cz-text-xs);
	}

	:host([size='sm']) ::slotted(svg) {
		width: var(--cosmoz-button-icon-size, var(--cz-icon-size-xs, 0.875rem));
		height: var(--cosmoz-button-icon-size, var(--cz-icon-size-xs, 0.875rem));
	}

	:host([size='lg']) .button {
		height: var(--cz-control-height-lg);
		padding: 0 16px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) .button {
		height: var(--cz-control-height-xl);
		padding: 0 18px;
		gap: 8px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) ::slotted(svg) {
		width: var(--cosmoz-button-icon-size, var(--cz-icon-size-md, 1.125rem));
		height: var(--cosmoz-button-icon-size, var(--cz-icon-size-md, 1.125rem));
	}

	:host([icon-only]) .button {
		border-radius: var(--cz-radius-full);
		width: var(--cz-control-height-md);
		padding: 0;
	}

	:host([icon-only][size='sm']) .button {
		width: var(--cz-control-height-sm);
	}

	:host([icon-only][size='lg']) .button {
		width: var(--cz-control-height-lg);
	}

	:host([icon-only][size='xl']) .button {
		width: var(--cz-control-height-xl);
	}

	:host([icon-only]) ::slotted(svg) {
		margin: 0;
	}

	/* Variants */

	:host([variant='secondary']) .button {
		--_pressed-bg: var(
			--cz-color-bg-glass-pressed,
			var(--cz-color-bg-secondary-hover)
		);
		background:
			var(--cz-glass-button-sheen, var(--cz-glass-sheen, none)),
			var(
				--cz-color-bg-glass-button,
				var(--cz-color-bg-glass, var(--cz-color-bg-tertiary))
			);
		color: var(--cz-color-text-primary);
		border-color: var(
			--cz-color-border-glass-button,
			var(--cz-color-border-glass, var(--cz-color-border-primary))
		);
		box-shadow: var(
			--cz-shadow-glass-button,
			var(--cz-shadow-glass, var(--cz-shadow-xs))
		);
		backdrop-filter: var(--cz-backdrop-filter-glass, none);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-hover,
				var(--cz-color-bg-secondary-hover)
			);
		}
	}

	:host([variant='tertiary']) .button {
		background: transparent;
		border-color: transparent;
		backdrop-filter: none;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&:hover {
			background: var(--cz-color-bg-tertiary);
			color: var(--cz-color-text-primary);
		}
	}

	:host([variant='tertiary']) .button:active {
		background: var(--cz-color-bg-quaternary);
		box-shadow: none;
	}

	:host([variant='destructive']) .button {
		--_pressed-bg: var(
			--cz-color-bg-glass-destructive-pressed,
			var(--cz-color-bg-error-solid-hover)
		);
		background:
			var(--_sheen),
			var(--cz-color-bg-glass-destructive, var(--cz-color-bg-error-solid));
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.06),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-destructive-hover,
				var(--cz-color-bg-error-solid-hover)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-error-500);
		}
	}

	:host([variant='success']) .button {
		--_pressed-bg: var(
			--cz-color-bg-success-solid-hover,
			color-mix(in oklab, var(--cz-color-bg-success-solid), black 12%)
		);
		background: var(--_sheen), var(--cz-color-bg-success-solid);
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.06),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: var(--_pressed-bg);
		}

		&:focus-visible {
			outline-color: var(--cz-color-success-500);
		}
	}

	:host([variant='warning']) .button {
		--_pressed-bg: var(
			--cz-color-bg-warning-solid-hover,
			color-mix(in oklab, var(--cz-color-bg-warning-solid), black 12%)
		);
		background: var(--_sheen), var(--cz-color-bg-warning-solid);
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.06),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: var(--_pressed-bg);
		}

		&:focus-visible {
			outline-color: var(--cz-color-warning-500);
		}
	}

	:host([variant='link']) .button {
		height: auto;
		padding: 0;
		background: transparent;
		border-color: transparent;
		backdrop-filter: none;
		color: var(--cz-color-text-link);
		box-shadow: none;
		border-radius: var(--cz-radius-xs);
		outline-offset: 3px;
		text-decoration: underline;
		text-decoration-color: transparent;
		text-underline-offset: 3px;
		transition-property: color, text-decoration-color, outline-color;

		&:hover {
			color: var(--cz-color-text-link-hover);
			text-decoration-color: currentColor;
		}
	}

	:host([icon-only][variant='secondary']) .button,
	:host([icon-only][variant='tertiary']) .button {
		color: var(--cz-color-text-primary);

		&:hover {
			color: var(--cz-color-text-primary);
		}
	}

	:host(:not([variant='tertiary']):not([variant='link']))
		.button:active:not(:disabled) {
		background-color: var(--_pressed-bg);
		background-image: none;
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	/* Toggled (aria-pressed) */

	:host([variant='secondary'][aria-pressed='true']) .button {
		background: var(--_wash-strong);
		color: var(--cz-color-text-primary);
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	:host([variant='tertiary'][aria-pressed='true']) .button {
		background: var(--cz-color-bg-quaternary);
		color: var(--cz-color-text-primary);
	}

	:host(:not([variant])[aria-pressed='true']) .button,
	:host([variant='primary'][aria-pressed='true']) .button,
	:host([variant='destructive'][aria-pressed='true']) .button,
	:host([variant='success'][aria-pressed='true']) .button,
	:host([variant='warning'][aria-pressed='true']) .button {
		background-image: none;
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	:host([variant='link'][aria-pressed='true']) .button {
		text-decoration-color: currentColor;
	}

	/* Disabled keeps the variant's look, just quieter. */

	:host([disabled]) .button,
	:host(:disabled) .button,
	.button:disabled {
		opacity: var(--cz-opacity-disabled, 0.45);
		cursor: not-allowed;
		pointer-events: none;
		box-shadow: none;
	}

	@media (forced-colors: active) {
		:host .button,
		:host([variant]) .button {
			border-color: ButtonText;
			background: ButtonFace;
			color: ButtonText;
		}
		:host([aria-pressed='true']) .button {
			outline: 2px solid Highlight;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.button {
			transition: none;
		}
	}
`,ce=["variant","size","disabled","full-width","icon-only","tooltip","tooltip-placement","type","value","href","target","rel","download","aria-expanded","aria-label","title","aria-pressed","aria-controls","aria-haspopup","aria-description","aria-busy","aria-current","control-role","tabindex","name","form","formaction","formenctype","formmethod","formnovalidate","formtarget"],le=t=>{const{disabled:e=!1,tooltip:o,tooltipPlacement:r,type:n="button",href:i,target:c,rel:h,download:a}=t,y=!!(e||t.formDisabled);M(()=>{t.syncFormButton()}),M(()=>{const p=s=>{(t.disabled||t.formDisabled)&&(s.preventDefault(),s.stopImmediatePropagation())};return t.addEventListener("click",p,{capture:!0}),()=>t.removeEventListener("click",p,{capture:!0})},[t.disabled,t.formDisabled]),Kt(()=>{const p=t.shadowRoot?.querySelector(".button");p&&"ariaControlsElements"in p&&(p.ariaControlsElements=t.ariaControlsElements)});const m=b`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,f=L(i!=null,()=>b`
			<a
				role=${u(t.controlRole)}
				tabindex=${u(t.getAttribute("tabindex")??void 0)}
				aria-controls=${u(t.getAttribute("aria-controls")??void 0)}
				aria-haspopup=${u(t.getAttribute("aria-haspopup")??void 0)}
				aria-description=${u(t.getAttribute("aria-description")??void 0)}
				aria-busy=${u(t.getAttribute("aria-busy")??void 0)}
				aria-current=${u(t.getAttribute("aria-current")??void 0)}
				href=${i}
				class="button"
				part="button"
				aria-disabled=${y?"true":X}
				aria-expanded=${u(t.getAttribute("aria-expanded")??void 0)}
				aria-label=${u(t.getAttribute("aria-label")??(t.iconOnly&&t.title?t.title:void 0))}
				target=${u(c)}
				rel=${u(h)}
				download=${u(a)}
				>${m}</a
			>
		`,()=>b`
			<button
				role=${u(t.controlRole)}
				tabindex=${u(t.getAttribute("tabindex")??void 0)}
				aria-controls=${u(t.getAttribute("aria-controls")??void 0)}
				aria-haspopup=${u(t.getAttribute("aria-haspopup")??void 0)}
				aria-description=${u(t.getAttribute("aria-description")??void 0)}
				aria-busy=${u(t.getAttribute("aria-busy")??void 0)}
				aria-current=${u(t.getAttribute("aria-current")??void 0)}
				type=${n}
				class="button"
				part="button"
				?disabled=${y}
				aria-expanded=${u(t.getAttribute("aria-expanded")??void 0)}
				aria-label=${u(t.getAttribute("aria-label")??(t.iconOnly&&t.title?t.title:void 0))}
				aria-pressed=${u(t.getAttribute("aria-pressed")??void 0)}
			>
				${m}
			</button>
		`);return b`<cosmoz-tooltip
		heading=${u(o??void 0)}
		placement=${u(r??void 0)}
		?disabled=${y}
	>
		${f}
	</cosmoz-tooltip>`};customElements.define("cosmoz-button",tt(le,{baseElement:ae,observedAttributes:ce,styleSheets:[et,ie],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const de=({slot:t,title:e,className:o,width:r="24",height:n="24",styles:i}={})=>b`
  <svg
    slot=${u(t)}
    class=${`chevron-left-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${n}
    style=${u(i)}
  >
    ${L(e,()=>Dt`<title>${e}</title>`)}
    <path d="m15 18-6-6 6-6" />
  </svg>
`,ue=({slot:t,title:e,className:o,width:r="24",height:n="24",styles:i}={})=>b`
  <svg
    slot=${u(t)}
    class=${`chevron-right-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${n}
    style=${u(i)}
  >
    ${L(e,()=>Dt`<title>${e}</title>`)}
    <path d="m9 18 6-6-6-6" />
  </svg>
`,he=(t,e)=>{if(!t||!e)return;const o=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(r=>o.includes(r)?[]:[[r,void 0]]))};class pe extends ut{_props;render(e){return it}update(e,[o]){return this._props!==o&&Object.assign(e.element,he(this._props,o),this._props=o),it}}const wt=ht(pe);function ve(t){return Mt(t,Date.now())}function xt(t,e,o){const[r,n]=Wt(o?.in,t,e),i=r.getFullYear()-n.getFullYear(),c=r.getMonth()-n.getMonth();return i*12+c}function Tt(t,e){const o=O(t,e?.in),r=o.getMonth();return o.setFullYear(o.getFullYear(),r+1,0),o.setHours(23,59,59,999),o}function vt(t,e){return+O(t)>+O(e)}function ot(t,e){return+O(t)<+O(e)}function ge(t,e){return P(Mt(t,t),ve(t))}function $t(t,e,o){const r=+O(t,o?.in),[n,i]=[+O(e.start,o?.in),+O(e.end,o?.in)].sort((c,h)=>c-h);return r>=n&&r<=i}function lt(t,e,o){return Q(t,-e,o)}function dt(t,e,o){return I(t,-e,o)}const kt=ht(class extends ut{constructor(t){if(super(t),t.type!==Ct.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}const o=t.element.classList;for(const r of this.st)r in e||(o.remove(r),this.st.delete(r));for(const r in e){const n=!!e[r];n===this.st.has(r)||this.nt?.has(r)||(n?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return it}}),Z=(t,...e)=>typeof t=="function"?t(...e):t,Lt=t=>(new Intl.Locale(t).getWeekInfo?.()?.firstDay??1)%7,fe=(t,e)=>{const o=Lt(e);return(t.getDay()-o+7)%7},be=(t,e)=>lt(t,fe(t,e)),Pe=(t,e,o,r)=>{const n=C(t),i=C(e),c=new Intl.DateTimeFormat(o,{year:"numeric",month:"short",day:"numeric"});return r?n?c.format(n):T("Select date"):n&&i?`${c.format(n)} – ${c.format(i)}`:T("Select dates")},Be=t=>t.target?.dispatchEvent(new Event("select",{bubbles:!0})),G=(t,e,o)=>e&&ot(t,e)?e:o&&vt(t,o)?o:t,At=(t,e,o)=>{const r=C(t),n=C(e),i=C(o);return R(G(r,n,i),"yyyy-MM-dd")},Oe=({start:t,end:e},o,r,n)=>{o({start:At(Z(t),r,n),end:At(Z(e),r,n)})},Re=(t,e,o)=>!!e&&!!o&&e===Z(t.start)&&o===Z(t.end),St=(t,e)=>e!=="single",me=t=>{const e=Lt(t),o=new Intl.DateTimeFormat(t,{weekday:"short"});return Array.from({length:7},(n,i)=>o.format(new Date(2023,0,1+i+e)))},ze=(t,e)=>{const o=pt(t),r=be(o,e),n=6,i=[];for(let c=0;c<n;c++){const h=[];for(let a=0;a<7;a++){const y=Q(r,c*7+a),m={day:y.getDate(),iso:y.toISOString(),isToday:ge(y),isCurrentMonth:o.getMonth()===y.getMonth()};h.push(m)}i.push(h)}return i},Ft=(t,e,o)=>!!(e&&P(t,e)||o&&P(t,o)),It=(t,e,o,r)=>!!(o&&e&&$t(t,{start:e,end:o})||!o&&r&&e&&$t(t,{start:e,end:r})),U=(t,e,o)=>!!(e&&ot(t,e)||o&&vt(t,o)),ye=(t,e,o,r)=>e&&U(t,o,r)?"true":void 0,gt=(t,e)=>e&&P(t,e)?!0:void 0,ft=(t,e)=>e&&P(t,e)?!0:void 0,st=(t,e)=>ot(t,pt(e)),at=(t,e,o)=>vt(t,Tt(I(e,o-1))),we=(t,e)=>({ArrowLeft:lt(e,1),ArrowRight:Q(e,1),ArrowUp:lt(e,7),ArrowDown:Q(e,7)})[t.key],Y=t=>C(t.target.dataset.date),Pt=(t,e,o,r,n)=>n?It(t,e,o,r):Ft(t,e,o),xe=(t,e,o,r,n)=>Pt(t,e,o,r,n)?"true":void 0,$e=(t,e,o,r,n)=>n&&!o&&!!e&&P(t,r),ke=(t,e)=>e?P(new Date(t.iso),e):t.isToday&&t.isCurrentMonth,_t=(t,e,o)=>o&&t&&!e,Ae=(t,e,o,r)=>{const n={weekday:"long",year:"numeric",month:"long",day:"numeric"};return e&&o&&(gt(t,e)||ft(t,o))?[T("Selected range: {startDate} to {endDate}",{startDate:e.toLocaleString(r,n),endDate:o.toLocaleString(r,n)}),t.toLocaleString(r,n)].join(", "):t.toLocaleString(r,n)},Se=({day:t,date:e,startDate:o,endDate:r,focusedDate:n,locale:i,isRangeMode:c})=>[_t(o,r,c)&&T("Selecting"),Ae(e,o,r,i),t.isToday&&t.isCurrentMonth&&T("Today"),gt(e,o)&&c&&T("Start date"),ft(e,r)&&T("End date"),!_t(o,r,c)&&Pt(e,o,r,n,c)&&T("Selected")].filter(Boolean).join(", "),_e=({day:t,endDate:e,focusedDate:o,locale:r,maxDate:n,minDate:i,isSingleDateMode:c,numberOfMonths:h,onClick:a,onFocus:y,onPointerDown:m,onPointerEnter:f,startDate:p})=>{const s=new Date(t.iso),w=!c,x=!t.isCurrentMonth&&h>1,v=ye(s,t.isCurrentMonth,i,n),g=v||!t.isCurrentMonth?"true":void 0,z={role:"gridcell",ariaHidden:x?"true":void 0,ariaDisabled:g,ariaSelected:xe(s,p,e,o,w)},S={role:"button",tabIndex:P(s,o)?0:-1,ariaLabel:Se({day:t,date:s,startDate:p,endDate:e,focusedDate:o,locale:r,isRangeMode:w}),ariaDisabled:g,autofocus:ke(t,p)};return b`
		<td ?data-hidden=${x} ${wt(z)}>
			<div
				class=${kt({"date-cell-wrapper":!0,"in-range":w&&It(s,p,e,o)})}
			>
				<div
					class=${kt({"date-cell":!0,"selected-cell":Ft(s,p,e),"focused-highlighted-cell":$e(s,p,e,o,w),"today-cell":t.isToday&&t.isCurrentMonth,"other-month-cell":!t.isCurrentMonth})}
					data-date=${u(t.isCurrentMonth?R(s,"yyyy-MM-dd"):void 0)}
					data-testid=${u(t.isCurrentMonth?`date-${R(s,"yyyy-MM-dd")}`:void 0)}
					data-disabled=${u(v)}
					data-start=${u(gt(s,p))}
					data-end=${u(ft(s,e))}
					@pointerdown=${m}
					@click=${a}
					@pointerenter=${f}
					@focus=${y}
					${wt(S)}
				>
					${t.day}
				</div>
			</div>
		</td>
	`},Ce=({endDate:t,focusedDate:e,locale:o,maxDate:r,minDate:n,isSingleDateMode:i,month:c,numberOfMonths:h,onClick:a,onFocus:y,onKeyDown:m,onPointerDown:f,onPointerEnter:p,startDate:s,weekdayNames:w})=>b`
	<table role="grid" @keydown=${m}>
		<thead>
			<tr aria-hidden="true">
				${q(w,x=>x,x=>b`<th><div class="weekday">${x}</div></th>`)}
			</tr>
		</thead>
		<tbody>
			${q(c,(x,v)=>`month-${v}`,x=>b`
					<tr>
						${q(x,v=>v.iso,v=>_e({day:v,endDate:t,focusedDate:e,locale:o,maxDate:r,minDate:n,isSingleDateMode:i,numberOfMonths:h,onClick:a,onFocus:y,onPointerDown:f,onPointerEnter:p,startDate:s}))}
					</tr>
				`)}
		</tbody>
	</table>
`,Me=({index:t,locale:e,numberOfMonths:o,selectedMonth:r,setSelectedMonth:n})=>b`
	<header>
		${L(t===0,()=>b`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="prev-button"
					aria-label=${T("Previous month")}
					@click=${()=>n(dt(r,o))}
					><span aria-hidden="true">${de()}</span></cosmoz-button
				>
			`)}
		<h2 class="month-label" aria-live="polite" aria-atomic="true">
			${I(r,t).toLocaleString(e,{month:"long",year:"numeric"})}
		</h2>
		${L(t===o-1,()=>b`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="next-button"
					aria-label=${T("Next month")}
					@click=${()=>n(I(r,o))}
					><span aria-hidden="true">${ue()}</span></cosmoz-button
				>
			`)}
	</header>
`,De=V`
	:host {
		--cell-size: calc(var(--cz-spacing) * 10);
		color: var(--cz-color-text-primary);
	}

	.calendar {
		display: flex;
	}

	.separator {
		width: 1px;
		align-self: stretch;
		background: var(--cz-color-border-secondary);
		flex-shrink: 0;
	}

	.month-wrapper {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 3);
	}

	.month-wrapper.padded {
		padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 6);
	}

	header {
		display: grid;
		align-items: center;
		grid-template-columns: 36px 1fr 36px;
		grid-template-areas: 'a b c';
	}

	.month-label {
		grid-area: b;
		text-align: center;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-semibold);
		color: var(--cz-color-text-secondary);
		text-transform: capitalize;
	}

	.prev-button {
		grid-area: a;
	}

	.next-button {
		grid-area: c;
	}

	cosmoz-button::part(button) {
		padding: calc(var(--cz-spacing) * 2);
	}

	table {
		border-collapse: collapse;
	}

	tr {
		border-bottom: var(--cz-spacing) solid transparent;
	}

	.weekday {
		width: var(--cell-size);
		height: var(--cell-size);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-medium);
		color: var(--cz-color-text-secondary);
		text-transform: capitalize;
	}

	.date-cell-wrapper {
		position: relative;
	}

	td:not([data-hidden]) .date-cell-wrapper.in-range {
		background: var(--cz-color-bg-secondary);
		border-radius: 0;
	}

	.date-cell-wrapper.in-range:has(.date-cell[data-start]),
	td:first-child .date-cell-wrapper.in-range {
		border-top-left-radius: var(--cz-radius-full);
		border-bottom-left-radius: var(--cz-radius-full);
	}

	.date-cell-wrapper.in-range:has(.date-cell[data-end]),
	td:last-child .date-cell-wrapper.in-range {
		border-top-right-radius: var(--cz-radius-full);
		border-bottom-right-radius: var(--cz-radius-full);
	}

	td:not([data-hidden]) + td[data-hidden] .date-cell-wrapper.in-range::after {
		content: '';
		position: absolute;
		inset: 0;

		background: linear-gradient(
			to left,
			transparent,
			var(--cz-color-bg-secondary)
		);
	}

	td[data-hidden]:has(+ td:not([data-hidden]))
		.date-cell-wrapper.in-range::after {
		content: '';
		position: absolute;
		inset: 0;

		background: linear-gradient(
			to right,
			transparent,
			var(--cz-color-bg-secondary)
		);
	}

	.date-cell {
		position: relative;
		width: var(--cell-size);
		height: var(--cell-size);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--cz-radius-full);
		user-select: none;
		cursor: pointer;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
	}

	.date-cell:not([data-disabled='true'], .other-month-cell):hover {
		background: var(--cz-color-bg-primary-hover);
		color: var(--cz-color-text-primary);
		font-weight: var(--cz-font-weight-medium);
	}

	.date-cell[data-disabled='true'] {
		cursor: not-allowed;
		color: var(--cz-color-text-placeholder-subtle);
	}

	.date-cell:focus-within {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}

	.date-cell.today-cell {
		background: var(--cz-color-bg-secondary);
	}

	.date-cell.today-cell::after {
		content: '';
		width: 4px;
		height: 4px;
		border-radius: var(--cz-radius-full);
		position: absolute;
		bottom: 4px;
		left: 50%;
		transform: translateX(-50%);
		background: var(--cz-color-bg-brand-solid);
	}

	.date-cell.selected-cell.today-cell::after,
	.date-cell.focused-highlighted-cell.today-cell::after {
		background: var(--cz-color-text-on-brand);
	}

	.date-cell.today-cell:hover {
		background: var(--cz-color-bg-secondary-hover);
	}

	.in-range .date-cell:hover {
		background: var(--cz-color-bg-secondary-hover);
	}

	.date-cell.selected-cell,
	.date-cell.focused-highlighted-cell {
		color: var(--cz-color-text-on-brand);
		background: var(--cz-color-bg-brand-solid);
	}

	.date-cell.selected-cell:hover,
	.date-cell.focused-highlighted-cell:hover {
		color: var(--cz-color-text-on-brand);
		background: var(--cz-color-bg-brand-solid-hover);
	}

	.date-cell.other-month-cell {
		cursor: default;
		color: var(--cz-color-text-placeholder-subtle);
	}

	td[data-hidden] .date-cell {
		visibility: hidden;
	}
`,Ee=(t,e)=>{const o=St(t,e)?t?.start:t,r=St(t,e)?t?.end:void 0;return{start:o,end:r}},Te=t=>{const{locale:e,mode:o="range",numberOfMonths:r,min:n,max:i}=t,c=o==="single",h=e??navigator.language,a=Number(r??1),[y,m]=Ut("value"),{start:f,end:p}=Ee(y,o),s=B(()=>C(f),[f]),[w,x]=N(s),v=B(()=>C(p),[p]),g=B(()=>C(n),[n]),z=B(()=>C(i),[i]),S=B(()=>G(s??new Date,g,z),[s,g,z]),[$,D]=N(S),[j,k]=N(!1),[A,_]=N(S),Bt=B(()=>me(h),[h]);M(()=>{j&&t.shadowRoot?.querySelector(`[data-date="${R(A,"yyyy-MM-dd")}"]`)?.focus()},[A,t,j]);const Ot=B(()=>{const d=[];for(let l=0;l<a;l++)d.push(ze(I($,l),h));return d},[$,h,a]),W=F(d=>{const l=R(d,"yyyy-MM-dd");if(c){m(l);return}if(!s&&!v){m({start:l,end:void 0});return}if(s&&!v&&ot(d,s)){m({start:l,end:R(s,"yyyy-MM-dd")});return}if(s&&!v){m({start:f,end:l});return}s&&v&&m({start:l,end:void 0})},[c,s,v,f,m]),bt=F(d=>{const l=G(d,g,z);st(l,$)&&D(E=>dt(E,a)),at(l,$,a)&&D(E=>I(E,a)),_(l)},[g,z,a,$,_,D]);M(()=>{if(!(!s||P(w,s))){if(x(s),s&&st(s,$)){const d=xt(s,$),l=Math.ceil(Math.abs(d)/a);D(E=>dt(E,l*a))}if(s&&at(s,$,a)){const d=xt(s,I($,a-1)),l=Math.ceil(d/a);D(E=>I(E,l*a))}}},[s,w,x,$,D,a]),M(()=>{if(st(A,$)){const d=G(pt($),g,z);k(!1),_(d)}if(at(A,$,a)){const d=G(Tt(I($,a-1)),g,z);k(!1),_(d)}},[A,z,g,a,$,_,k]);const Rt=F(d=>{if(!(d.target instanceof Element))return;const l=d.target.closest("[data-date]");if(!l?.dataset.date||l.dataset.disabled==="true")return;const E=C(l.dataset.date);if(d.key==="Enter"||d.key===" "){d.preventDefault(),W(E);return}const mt=we(d,E);mt&&(d.preventDefault(),bt(mt))},[bt,W]),jt=F(d=>{const l=Y(d);!l||U(l,g,z)||W(l)},[W,g,z]),Nt=F(d=>{const l=Y(d);(!l||U(l,g,z))&&d.preventDefault()},[g,z]),Gt=F(d=>{const l=Y(d);!c&&l&&s&&!v&&!U(l,g,z)&&_(l)},[c,s,v,g,z,_]),Ht=F(d=>{const l=Y(d);l&&(_(l),k(!0))},[s,v,_,k]);return{endDate:v,focusedDate:A,isSingleDateMode:c,locale:h,maxDate:z,minDate:g,monthMatrices:Ot,numberOfMonths:a,onClick:jt,onKeyDown:Rt,selectedMonth:$,setSelectedMonth:D,startDate:s,weekdayNames:Bt,onPointerEnter:Gt,onFocus:Ht,onPointerDown:Nt}},Le=t=>{const{endDate:e,focusedDate:o,isSingleDateMode:r,locale:n,maxDate:i,minDate:c,monthMatrices:h,numberOfMonths:a,onClick:y,onFocus:m,onKeyDown:f,onPointerDown:p,onPointerEnter:s,selectedMonth:w,setSelectedMonth:x,startDate:v,weekdayNames:g}=Te(t);return b`<div class="calendar">
		${q(h,(z,S)=>`cal-${S}`,(z,S)=>[b`
					<div class="month-wrapper ${a>1?"padded":""}">
						${[Me({index:S,locale:n,numberOfMonths:a,selectedMonth:w,setSelectedMonth:x}),Ce({endDate:e,focusedDate:o,locale:n,maxDate:i,minDate:c,isSingleDateMode:r,month:z,numberOfMonths:a,onClick:y,onFocus:m,onKeyDown:f,onPointerDown:p,onPointerEnter:s,startDate:v,weekdayNames:g})]}
					</div>
				`,L(S<a-1,()=>b`<div class="separator"></div>`)])}
	</div> `};customElements.define("cosmoz-calendar",tt(Le,{observedAttributes:["locale","mode","number-of-months"],styleSheets:[et,De],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));export{L as a,be as b,dt as c,Ee as d,Tt as e,ot as f,At as g,Be as h,vt as i,Pe as j,Re as k,Oe as l,nt as n,lt as s,K as u};
