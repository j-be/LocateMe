import{a as Qe}from"./chunk-J4TZROTY.js";import{a as We}from"./chunk-KRAXDRFX.js";import{$a as ze,$b as Le,A as ce,Aa as Y,Ba as Z,Ca as ve,D as s,Da as ye,Ea as Ce,F as T,G as M,Ga as ee,I as N,Ia as xe,J as F,Ja as we,K as C,Kb as Fe,L as p,La as Te,Lb as Ae,M as le,Ma as Me,Mb as y,N as pe,Na as I,O as m,Ob as je,P as de,Pb as V,Q as g,Qa as ke,Qb as H,R as K,Ra as Ie,Rb as $e,S as U,Sb as E,T as X,U as a,Ua as Se,Ub as G,V as r,W as c,Wa as Be,Wb as W,X as u,Xa as Ee,Xb as Q,Yb as b,Za as Pe,_a as Oe,a as J,ba as A,bc as Ve,ca as j,dc as He,e as ie,ea as $,ec as Ge,fa as l,g as se,ga as me,ha as ge,i as P,ia as ue,j as x,jb as De,k as O,ka as S,kb as Re,l as d,la as B,lb as Ne,m as z,ma as fe,n as D,na as he,o as R,oa as be,q as ae,qa as f,ra as v,sa as k,t as re,w,xa as L,ya as _e}from"./chunk-E25VPOKD.js";var qe=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`;var sn=["container"],an=["icon"],rn=["closeicon"],cn=["*"],ln=e=>({closeCallback:e});function pn(e,o){e&1&&A(0)}function dn(e,o){if(e&1&&C(0,pn,1,0,"ng-container",4),e&2){let n=l();a("ngTemplateOutlet",n.iconTemplate||n._iconTemplate)}}function mn(e,o){if(e&1&&u(0,"i",1),e&2){let n=l();f(n.cn(n.cx("icon"),n.icon)),a("pBind",n.ptm("icon")),p("data-p",n.dataP)}}function gn(e,o){e&1&&A(0)}function un(e,o){if(e&1&&C(0,gn,1,0,"ng-container",5),e&2){let n=l();a("ngTemplateOutlet",n.containerTemplate||n._containerTemplate)("ngTemplateOutletContext",_e(2,ln,n.closeCallback))}}function fn(e,o){if(e&1&&u(0,"span",9),e&2){let n=l(3);a("pBind",n.ptm("text"))("ngClass",n.cx("text"))("innerHTML",n.text,ce),p("data-p",n.dataP)}}function hn(e,o){if(e&1&&(r(0,"div"),C(1,fn,1,4,"span",8),c()),e&2){let n=l(2);s(),a("ngIf",!n.escape)}}function bn(e,o){if(e&1&&(r(0,"span",7),v(1),c()),e&2){let n=l(3);a("pBind",n.ptm("text"))("ngClass",n.cx("text")),p("data-p",n.dataP),s(),k(n.text)}}function _n(e,o){if(e&1&&C(0,bn,2,4,"span",10),e&2){let n=l(2);a("ngIf",n.escape&&n.text)}}function vn(e,o){if(e&1&&(C(0,hn,2,1,"div",6)(1,_n,1,1,"ng-template",null,0,ve),r(3,"span",7),ge(4),c()),e&2){let n=fe(2),i=l();a("ngIf",!i.escape)("ngIfElse",n),s(3),a("pBind",i.ptm("text"))("ngClass",i.cx("text")),p("data-p",i.dataP)}}function yn(e,o){if(e&1&&u(0,"i",7),e&2){let n=l(2);f(n.cn(n.cx("closeIcon"),n.closeIcon)),a("pBind",n.ptm("closeIcon"))("ngClass",n.closeIcon),p("data-p",n.dataP)}}function Cn(e,o){e&1&&A(0)}function xn(e,o){if(e&1&&C(0,Cn,1,0,"ng-container",4),e&2){let n=l(2);a("ngTemplateOutlet",n.closeIconTemplate||n._closeIconTemplate)}}function wn(e,o){if(e&1&&(R(),u(0,"svg",14)),e&2){let n=l(2);f(n.cx("closeIcon")),a("pBind",n.ptm("closeIcon")),p("data-p",n.dataP)}}function Tn(e,o){if(e&1){let n=j();r(0,"button",11),$("click",function(t){z(n);let h=l();return D(h.close(t))}),m(1,yn,1,5,"i",12),m(2,xn,1,1,"ng-container"),m(3,wn,1,4,":svg:svg",13),c()}if(e&2){let n=l();f(n.cx("closeButton")),a("pBind",n.ptm("closeButton")),p("aria-label",n.closeAriaLabel)("data-p",n.dataP),s(),g(n.closeIcon?1:-1),s(),g(n.closeIconTemplate||n._closeIconTemplate?2:-1),s(),g(!n.closeIconTemplate&&!n._closeIconTemplate&&!n.closeIcon?3:-1)}}var Mn={root:({instance:e})=>["p-message p-component p-message-"+e.severity,e.variant&&"p-message-"+e.variant,{"p-message-sm":e.size==="small","p-message-lg":e.size==="large"}],contentWrapper:"p-message-content-wrapper",content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Je=(()=>{class e extends G{name="message";style=qe;classes=Mn;static \u0275fac=(()=>{let n;return function(t){return(n||(n=w(e)))(t||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var Ke=new O("MESSAGE_INSTANCE"),te=(()=>{class e extends Q{_componentStyle=d(Je);bindDirectiveInstance=d(b,{self:!0});$pcMessage=d(Ke,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;motionOptions=Ce(void 0);computedMotionOptions=ye(()=>J(J({},this.ptm("motion")),this.motionOptions()));onClose=new ae;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=re(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=n=>{this.close(n)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(n=>{switch(n.getType()){case"container":this._containerTemplate=n.template;break;case"icon":this._iconTemplate=n.template;break;case"closeicon":this._closeIconTemplate=n.template;break}})}close(n){this.visible.set(!1),this.onClose.emit({originalEvent:n})}get dataP(){return this.cn({outlined:this.variant==="outlined",simple:this.variant==="simple",[this.severity]:this.severity,[this.size]:this.size})}static \u0275fac=(()=>{let n;return function(t){return(n||(n=w(e)))(t||e)}})();static \u0275cmp=T({type:e,selectors:[["p-message"]],contentQueries:function(i,t,h){if(i&1&&ue(h,sn,4)(h,an,4)(h,rn,4)(h,Ae,4),i&2){let _;S(_=B())&&(t.containerTemplate=_.first),S(_=B())&&(t.iconTemplate=_.first),S(_=B())&&(t.closeIconTemplate=_.first),S(_=B())&&(t.templates=_)}},hostAttrs:["role","alert","aria-live","polite"],hostVars:5,hostBindings:function(i,t){i&1&&(le(function(){return"p-message-enter-active"}),pe(function(){return"p-message-leave-active"})),i&2&&(p("data-p",t.dataP),f(t.cn(t.cx("root"),t.styleClass)),be("p-message-leave-active",!t.visible()))},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",ee],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",ee],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant",motionOptions:[1,"motionOptions"]},outputs:{onClose:"onClose"},features:[L([Je,{provide:Ke,useExisting:e},{provide:W,useExisting:e}]),N([b]),F],ngContentSelectors:cn,decls:7,vars:12,consts:[["escapeOut",""],[3,"pBind"],[3,"pBind","class"],["pRipple","","type","button",3,"pBind","class"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","ngClass","innerHTML",4,"ngIf"],[3,"pBind","ngClass","innerHTML"],[3,"pBind","ngClass",4,"ngIf"],["pRipple","","type","button",3,"click","pBind"],[3,"pBind","class","ngClass"],["data-p-icon","times",3,"pBind","class"],["data-p-icon","times",3,"pBind"]],template:function(i,t){i&1&&(me(),r(0,"div",1)(1,"div",1),m(2,dn,1,1,"ng-container"),m(3,mn,1,4,"i",2),m(4,un,1,4,"ng-container")(5,vn,5,5),m(6,Tn,4,8,"button",3),c()()),i&2&&(f(t.cx("contentWrapper")),a("pBind",t.ptm("contentWrapper")),p("data-p",t.dataP),s(),f(t.cx("content")),a("pBind",t.ptm("content")),p("data-p",t.dataP),s(),g(t.iconTemplate||t._iconTemplate?2:-1),s(),g(t.icon?3:-1),s(),g(t.containerTemplate||t._containerTemplate?4:5),s(2),g(t.closable?6:-1))},dependencies:[I,xe,we,Te,Le,We,y,b,Ve],encapsulation:2,changeDetection:0})}return e})(),Ue=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=M({type:e});static \u0275inj=x({imports:[te,y,y]})}return e})();var Xe=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`;var In={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Ye=(()=>{class e extends G{name="progressspinner";style=Xe;classes=In;static \u0275fac=(()=>{let n;return function(t){return(n||(n=w(e)))(t||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var Ze=new O("PROGRESSSPINNER_INSTANCE"),oe=(()=>{class e extends Q{$pcProgressSpinner=d(Ze,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(b,{self:!0});styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=d(Ye);static \u0275fac=(()=>{let n;return function(t){return(n||(n=w(e)))(t||e)}})();static \u0275cmp=T({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:5,hostBindings:function(i,t){i&2&&(p("aria-label",t.ariaLabel)("role","progressbar")("aria-busy",!0),f(t.cn(t.cx("root"),t.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[L([Ye,{provide:Ze,useExisting:e},{provide:W,useExisting:e}]),N([b]),F],decls:2,vars:10,consts:[["viewBox","25 25 50 50",3,"pBind"],["cx","50","cy","50","r","20","stroke-miterlimit","10",3,"pBind"]],template:function(i,t){i&1&&(R(),r(0,"svg",0),u(1,"circle",1),c()),i&2&&(f(t.cx("spin")),he("animation-duration",t.animationDuration),a("pBind",t.ptm("spin")),s(),f(t.cx("circle")),a("pBind",t.ptm("circle")),p("fill",t.fill)("stroke-width",t.strokeWidth))},dependencies:[I,y,b],encapsulation:2,changeDetection:0})}return e})(),en=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=M({type:e});static \u0275inj=x({imports:[oe,y,y]})}return e})();function Bn(e,o){e&1&&(r(0,"div",5),u(1,"p-progressSpinner"),c())}function En(e,o){if(e&1&&(r(0,"div"),u(1,"app-public-transport-chip",13),c()),e&2){let n=o.$implicit;s(),a("line",n.mode)}}function Pn(e,o){if(e&1){let n=j();r(0,"div",7),$("click",function(){let t=z(n).$implicit,h=l(4);return D(h.showDetails(t))}),r(1,"div",8)(2,"span",9),v(3),c(),u(4,"br"),r(5,"div",10)(6,"div",11),U(7,En,2,1,"div",null,K),c(),r(9,"div",12),v(10),c()(),r(11,"span"),v(12),c()()()}if(e&2){let n=o.$implicit,i=l(4);s(3),k(i.formatPoint(n.legs[0].points[0])),s(4),X(n.legs),s(3),k(n.duration),s(2),k(i.formatPoint(n.legs[n.legs.length-1].points[1]))}}function On(e,o){if(e&1&&U(0,Pn,13,3,"div",6,K),e&2){let n=l();X(n.trips)}}function zn(e,o){e&1&&(r(0,"div"),u(1,"p-message",14),c())}function Dn(e,o){if(e&1&&m(0,On,2,0)(1,zn,2,0,"div"),e&2){let n=o;g(n.trips!=null&&n.trips.length?0:1)}}function Rn(e,o){if(e&1&&(m(0,Dn,2,1),Y(1,"async")),e&2){let n,i=l();g((n=Z(1,1,i.routes$))?0:-1,n)}}var q=class e{store=d(Oe);router=d(Be);activatedRoute=d(Se);origin$;destination$;routes$;fetching$;constructor(){this.origin$=this.store.select(V.getState),this.destination$=this.store.select(H.getState),this.routes$=this.store.select(E.getState),this.fetching$=this.store.select(E.fetching)}ngOnInit(){this.store.dispatch(new De),ie([this.origin$,this.destination$]).pipe(se(1)).subscribe(([o,n])=>{o&&n?this.store.dispatch(new Re(o,n)):this.router.navigate(["/"])})}showDetails(o){this.store.dispatch(new Ne(o)),this.router.navigate(["detail"],{relativeTo:this.activatedRoute})}formatPoint(o){return o.dateTime.time+" "+o.name}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=T({type:e,selectors:[["app-route"]],standalone:!1,decls:11,vars:3,consts:[["role","nav",1,"nav-wrapper","grey","lighten-4"],[1,"title"],[1,"right-align"],["routerLink","../"],[1,"material-icons"],[2,"overflow","hidden","text-align","center"],["tabindex","0",1,"trip","card"],["tabindex","0",1,"trip","card",3,"click"],[1,"card-content"],[1,"card-title"],[1,"flex-row"],[1,"transport-sequence","flex-row"],[1,"duration"],[3,"line"],["severity","warn","text","Sorry, could not find any routes."]],template:function(n,i){n&1&&(r(0,"app-layout")(1,"div",0)(2,"div",1),v(3,"Routes"),c(),r(4,"div",2)(5,"a",3)(6,"i",4),v(7,"close"),c()()()(),m(8,Bn,2,0,"div",5),Y(9,"async"),de(10,Rn,2,3),c()),n&2&&(s(8),g(Z(9,1,i.fetching$)?8:10))},dependencies:[Ee,te,oe,Ge,Qe,Me],styles:[".nav-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;color:#000000de;font-weight:700;font-size:1rem;padding:0 16px}.nav-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex-grow:1}td[_ngcontent-%COMP%]{padding:0 1rem}.trip[_ngcontent-%COMP%]{margin-bottom:12px}.duration[_ngcontent-%COMP%]{flex-grow:1;text-align:right;margin-left:10px;padding-top:6px}.transport-sequence[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:5px;overflow-x:auto;margin-right:5px}"]})};var nn=class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=M({type:e});static \u0275inj=x({providers:[je,Fe,ke(Ie())],imports:[I,Pe.forChild([{path:"",component:q},{path:"detail",loadChildren:()=>import("./chunk-L7CZ24ZE.js").then(o=>o.RouteDetailModule)}]),Ue,en,ze.forFeature([V,H,$e,E]),He]})};export{nn as RouteModule};
