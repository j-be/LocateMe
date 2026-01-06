import{J as y,L as r,P as v,U as a,W as k,X as D,Y as l,Z as w,h as g,ma as b,pa as I}from"./chunk-BY7BOQ4M.js";import{X as p,Ya as c,aa as o,dc as h,ib as m,kb as f,oc as u,ta as d}from"./chunk-KNNAULL7.js";var L=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var F=`
    ${L}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,A={root:"p-ink"},M=(()=>{class i extends b{name="ripple";style=F;classes=A;static \u0275fac=(()=>{let e;return function(s){return(e||(e=d(i)))(s||i)}})();static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})();var $=(()=>{class i extends I{zone=o(c);_componentStyle=o(M);animationListener;mouseDownListener;timeout;constructor(){super(),u(()=>{g(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(r(t,"p-ink-active"),!a(t)&&!l(t)){let n=Math.max(v(this.el.nativeElement),D(this.el.nativeElement));t.style.height=n+"px",t.style.width=n+"px"}let s=k(this.el.nativeElement),x=e.pageX-s.left+this.document.body.scrollTop-l(t)/2,E=e.pageY-s.top+this.document.body.scrollLeft-a(t)/2;this.renderer.setStyle(t,"top",E+"px"),this.renderer.setStyle(t,"left",x+"px"),y(t,"p-ink-active"),this.timeout=setTimeout(()=>{let n=this.getInk();n&&r(n,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&r(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),r(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,w(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=m({type:i,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[h([M]),f]})}return i})();export{$ as a};
