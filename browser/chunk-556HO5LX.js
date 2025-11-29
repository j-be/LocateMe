import{a as Qe}from"./chunk-RBHODUNQ.js";import{a as Ge}from"./chunk-O6N5RBC2.js";import{E as Oe,F as Pe,G as Re,b as Ce,c as ve,ca as De,da as Fe,e as ye,ea as x,f as we,g as I,ga as Ne,ha as G,ia as Q,ja as Ae,k as Te,ka as z,l as ke,ma as H,o as Me,oa as q,pa as W,q as Ie,qa as f,r as Se,t as Be,ta as $e,u as Ee,v as ze,va as Le,wa as Ve}from"./chunk-AMAZZWZR.js";import{Ab as a,Ac as je,Bb as c,Bc as te,Cb as l,Db as g,Dc as oe,Fc as ie,H as le,Jb as j,Kb as $,Mb as L,Nb as r,Oa as de,Ob as ue,Pb as fe,Qb as S,Sa as s,Sb as B,Tb as E,Ub as _e,Vb as he,X as O,Xa as me,Xb as u,Y as v,Yb as b,Zb as M,_ as P,aa as m,dc as V,ec as X,fc as be,ga as R,gb as w,ha as D,hb as T,hc as Z,ia as F,ic as ee,jc as xe,kb as N,lb as A,mb as C,oa as pe,ta as y,tb as k,ub as p,vb as ge,vc as ne,wb as d,x as ce,xb as J,yb as K,zb as U}from"./chunk-UA5L6WHW.js";var He=`
    .p-message {
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
        height: 100%;
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

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition:
            max-height 0.45s cubic-bezier(0, 1, 0, 1),
            opacity 0.3s,
            margin 0.3s;
    }

    .p-message-leave-active .p-message-close-button {
        opacity: 0;
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
`;var tn=["container"],on=["icon"],sn=["closeicon"],an=["*"],rn=(e,t)=>({showTransitionParams:e,hideTransitionParams:t}),cn=e=>({value:"visible()",params:e}),ln=e=>({closeCallback:e});function pn(e,t){e&1&&j(0)}function dn(e,t){if(e&1&&C(0,pn,1,0,"ng-container",4),e&2){let n=r(2);a("ngTemplateOutlet",n.iconTemplate||n._iconTemplate)}}function mn(e,t){if(e&1&&g(0,"i",2),e&2){let n=r(2);u(n.cn(n.cx("icon"),n.icon)),a("pBind",n.ptm("icon"))}}function gn(e,t){e&1&&j(0)}function un(e,t){if(e&1&&C(0,gn,1,0,"ng-container",5),e&2){let n=r(2);a("ngTemplateOutlet",n.containerTemplate||n._containerTemplate)("ngTemplateOutletContext",X(2,ln,n.closeCallback))}}function fn(e,t){if(e&1&&g(0,"span",9),e&2){let n=r(4);a("pBind",n.ptm("text"))("ngClass",n.cx("text"))("innerHTML",n.text,de)}}function _n(e,t){if(e&1&&(c(0,"div"),C(1,fn,1,3,"span",8),l()),e&2){let n=r(3);s(),a("ngIf",!n.escape)}}function hn(e,t){if(e&1&&(c(0,"span",7),b(1),l()),e&2){let n=r(4);a("pBind",n.ptm("text"))("ngClass",n.cx("text")),s(),M(n.text)}}function bn(e,t){if(e&1&&C(0,hn,2,3,"span",10),e&2){let n=r(3);a("ngIf",n.escape&&n.text)}}function xn(e,t){if(e&1&&(C(0,_n,2,1,"div",6)(1,bn,1,1,"ng-template",null,0,xe),c(3,"span",7),fe(4),l()),e&2){let n=_e(2),o=r(2);a("ngIf",!o.escape)("ngIfElse",n),s(3),a("pBind",o.ptm("text"))("ngClass",o.cx("text"))}}function Cn(e,t){if(e&1&&g(0,"i",7),e&2){let n=r(3);u(n.cn(n.cx("closeIcon"),n.closeIcon)),a("pBind",n.ptm("closeIcon"))("ngClass",n.closeIcon)}}function vn(e,t){e&1&&j(0)}function yn(e,t){if(e&1&&C(0,vn,1,0,"ng-container",4),e&2){let n=r(3);a("ngTemplateOutlet",n.closeIconTemplate||n._closeIconTemplate)}}function wn(e,t){if(e&1&&(F(),g(0,"svg",14)),e&2){let n=r(3);u(n.cx("closeIcon")),a("pBind",n.ptm("closeIcon"))}}function Tn(e,t){if(e&1){let n=$();c(0,"button",11),L("click",function(i){R(n);let _=r(2);return D(_.close(i))}),p(1,Cn,1,4,"i",12),p(2,yn,1,1,"ng-container"),p(3,wn,1,3,":svg:svg",13),l()}if(e&2){let n=r(2);u(n.cx("closeButton")),a("pBind",n.ptm("closeButton")),k("aria-label",n.closeAriaLabel),s(),d(n.closeIcon?1:-1),s(),d(n.closeIconTemplate||n._closeIconTemplate?2:-1),s(),d(!n.closeIconTemplate&&!n._closeIconTemplate&&!n.closeIcon?3:-1)}}function kn(e,t){if(e&1&&(c(0,"div",2)(1,"div",2),p(2,dn,1,1,"ng-container"),p(3,mn,1,3,"i",1),p(4,un,1,4,"ng-container")(5,xn,5,4),p(6,Tn,4,7,"button",3),l()()),e&2){let n=r();u(n.cn(n.cx("root"),n.styleClass)),a("pBind",n.ptm("root"))("@messageAnimation",X(16,cn,be(13,rn,n.showTransitionOptions,n.hideTransitionOptions))),k("aria-live","polite")("role","alert"),s(),u(n.cx("content")),a("pBind",n.ptm("content")),s(),d(n.iconTemplate||n._iconTemplate?2:-1),s(),d(n.icon?3:-1),s(),d(n.containerTemplate||n._containerTemplate?4:5),s(2),d(n.closable?6:-1)}}var Mn={root:({instance:e})=>["p-message p-component p-message-"+e.severity,"p-message-"+e.variant,{"p-message-sm":e.size==="small","p-message-lg":e.size==="large"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},qe=(()=>{class e extends H{name="message";style=He;classes=Mn;static \u0275fac=(()=>{let n;return function(i){return(n||(n=y(e)))(i||e)}})();static \u0275prov=O({token:e,factory:e.\u0275fac})}return e})();var We=new P("MESSAGE_INSTANCE"),ae=(()=>{class e extends W{_componentStyle=m(qe);bindDirectiveInstance=m(f,{self:!0});$pcMessage=m(We,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new me;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=pe(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=n=>{this.close(n)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(n=>{switch(n.getType()){case"container":this._containerTemplate=n.template;break;case"icon":this._iconTemplate=n.template;break;case"closeicon":this._closeIconTemplate=n.template;break}})}close(n){this.visible.set(!1),this.onClose.emit({originalEvent:n})}static \u0275fac=(()=>{let n;return function(i){return(n||(n=y(e)))(i||e)}})();static \u0275cmp=w({type:e,selectors:[["p-message"]],contentQueries:function(o,i,_){if(o&1&&(S(_,tn,4),S(_,on,4),S(_,sn,4),S(_,Fe,4)),o&2){let h;B(h=E())&&(i.containerTemplate=h.first),B(h=E())&&(i.iconTemplate=h.first),B(h=E())&&(i.closeIconTemplate=h.first),B(h=E())&&(i.templates=h)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",ne],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",ne],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[V([qe,{provide:We,useExisting:e},{provide:q,useExisting:e}]),A([f]),N],ngContentSelectors:an,decls:1,vars:1,consts:[["escapeOut",""],[3,"pBind","class"],[3,"pBind"],["pRipple","","type","button",3,"pBind","class"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","ngClass","innerHTML",4,"ngIf"],[3,"pBind","ngClass","innerHTML"],[3,"pBind","ngClass",4,"ngIf"],["pRipple","","type","button",3,"click","pBind"],[3,"pBind","class","ngClass"],["data-p-icon","times",3,"pBind","class"],["data-p-icon","times",3,"pBind"]],template:function(o,i){o&1&&(ue(),p(0,kn,7,18,"div",1)),o&2&&d(i.visible()?0:-1)},dependencies:[I,Ce,ve,ye,$e,Ge,x,f],encapsulation:2,data:{animation:[je("messageAnimation",[ie(":enter",[oe({opacity:0,transform:"translateY(-25%)"}),te("{{showTransitionParams}}")]),ie(":leave",[te("{{hideTransitionParams}}",oe({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return e})(),Ye=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=T({type:e});static \u0275inj=v({imports:[ae,x,x]})}return e})();var Je=`
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
`;var Sn={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Ke=(()=>{class e extends H{name="progressspinner";style=Je;classes=Sn;static \u0275fac=(()=>{let n;return function(i){return(n||(n=y(e)))(i||e)}})();static \u0275prov=O({token:e,factory:e.\u0275fac})}return e})();var Ue=new P("PROGRESSSPINNER_INSTANCE"),re=(()=>{class e extends W{$pcProgressSpinner=m(Ue,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(f,{self:!0});styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=m(Ke);static \u0275fac=(()=>{let n;return function(i){return(n||(n=y(e)))(i||e)}})();static \u0275cmp=w({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:5,hostBindings:function(o,i){o&2&&(k("aria-label",i.ariaLabel)("role","progressbar")("aria-busy",!0),u(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[V([Ke,{provide:Ue,useExisting:e},{provide:q,useExisting:e}]),A([f]),N],decls:2,vars:10,consts:[["viewBox","25 25 50 50",3,"pBind"],["cx","50","cy","50","r","20","stroke-miterlimit","10",3,"pBind"]],template:function(o,i){o&1&&(F(),c(0,"svg",0),g(1,"circle",1),l()),o&2&&(u(i.cx("spin")),he("animation-duration",i.animationDuration),a("pBind",i.ptm("spin")),s(),u(i.cx("circle")),a("pBind",i.ptm("circle")),k("fill",i.fill)("stroke-width",i.strokeWidth))},dependencies:[I,x,f],encapsulation:2,changeDetection:0})}return e})(),Xe=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=T({type:e});static \u0275inj=v({imports:[re,x,x]})}return e})();function En(e,t){e&1&&(c(0,"div",5),g(1,"p-progressSpinner"),l())}function zn(e,t){if(e&1&&(c(0,"div"),g(1,"app-public-transport-chip",13),l()),e&2){let n=t.$implicit;s(),a("line",n.mode)}}function On(e,t){if(e&1){let n=$();c(0,"div",7),L("click",function(){let i=R(n).$implicit,_=r(4);return D(_.showDetails(i))}),c(1,"div",8)(2,"span",9),b(3),l(),g(4,"br"),c(5,"div",10)(6,"div",11),K(7,zn,2,1,"div",null,J),l(),c(9,"div",12),b(10),l()(),c(11,"span"),b(12),l()()()}if(e&2){let n=t.$implicit,o=r(4);s(3),M(o.formatPoint(n.legs[0].points[0])),s(4),U(n.legs),s(3),M(n.duration),s(2),M(o.formatPoint(n.legs[n.legs.length-1].points[1]))}}function Pn(e,t){if(e&1&&K(0,On,13,3,"div",6,J),e&2){let n=r();U(n.trips)}}function Rn(e,t){e&1&&(c(0,"div"),g(1,"p-message",14),l())}function Dn(e,t){if(e&1&&p(0,Pn,2,0)(1,Rn,2,0,"div"),e&2){let n=t;d(n.trips!=null&&n.trips.length?0:1)}}function Fn(e,t){if(e&1&&(p(0,Dn,2,1),Z(1,"async")),e&2){let n,o=r();d((n=ee(1,1,o.routes$))?0:-1,n)}}var Y=class e{store=m(Ee);router=m(Ie);activatedRoute=m(Me);origin$;destination$;routes$;fetching$;constructor(){this.origin$=this.store.select(G.getState),this.destination$=this.store.select(Q.getState),this.routes$=this.store.select(z.getState),this.fetching$=this.store.select(z.fetching)}ngOnInit(){this.store.dispatch(new Oe),ce([this.origin$,this.destination$]).pipe(le(1)).subscribe(([t,n])=>{t&&n?this.store.dispatch(new Pe(t,n)):this.router.navigate(["/"])})}showDetails(t){this.store.dispatch(new Re(t)),this.router.navigate(["detail"],{relativeTo:this.activatedRoute})}formatPoint(t){return t.dateTime.time+" "+t.name}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=w({type:e,selectors:[["app-route"]],standalone:!1,decls:11,vars:3,consts:[["role","nav",1,"nav-wrapper","grey","lighten-4"],[1,"title"],[1,"right-align"],["routerLink","../"],[1,"material-icons"],[2,"overflow","hidden","text-align","center"],["tabindex","0",1,"trip","card"],["tabindex","0",1,"trip","card",3,"click"],[1,"card-content"],[1,"card-title"],[1,"flex-row"],[1,"transport-sequence","flex-row"],[1,"duration"],[3,"line"],["severity","warn","text","Sorry, could not find any routes."]],template:function(n,o){n&1&&(c(0,"app-layout")(1,"div",0)(2,"div",1),b(3,"Routes"),l(),c(4,"div",2)(5,"a",3)(6,"i",4),b(7,"close"),l()()()(),p(8,En,2,0,"div",5),Z(9,"async"),ge(10,Fn,2,3),l()),n&2&&(s(8),d(ee(9,1,o.fetching$)?8:10))},dependencies:[Se,ae,re,Ve,Qe,we],styles:[".nav-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;color:#000000de;font-weight:700;font-size:1rem;padding:0 16px}.nav-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex-grow:1}td[_ngcontent-%COMP%]{padding:0 1rem}.trip[_ngcontent-%COMP%]{margin-bottom:12px}.duration[_ngcontent-%COMP%]{flex-grow:1;text-align:right;margin-left:10px;padding-top:6px}.transport-sequence[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:5px;overflow-x:auto;margin-right:5px}"]})};var Ze=class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=T({type:e});static \u0275inj=v({providers:[Ne,De,Te(ke())],imports:[I,Be.forChild([{path:"",component:Y},{path:"detail",loadChildren:()=>import("./chunk-QLFBOWQS.js").then(t=>t.RouteDetailModule)}]),Ye,Xe,ze.forFeature([G,Q,Ae,z]),Le]})};export{Ze as RouteModule};
