"use strict";(self.webpackChunklocate_me=self.webpackChunklocate_me||[]).push([[288],{3288:(j,r,n)=>{n.r(r),n.d(r,{RouteDetailModule:()=>R});var a=n(177),l=n(7750),d=n(1734),s=n(9627),c=n(6697),g=n(5964),m=n(3504),t=n(4438),v=n(1552),h=n(6646);function u(e,M){if(1&e&&(t.j41(0,"div",6)(1,"div",7)(2,"div"),t.EFF(3),t.k0s(),t.nrm(4,"div"),t.j41(5,"div"),t.EFF(6),t.k0s()(),t.j41(7,"div",8)(8,"div",9),t.EFF(9,"\u25cb"),t.k0s(),t.j41(10,"div",9),t.EFF(11,"|"),t.k0s(),t.j41(12,"div",9),t.EFF(13,"\u25cb"),t.k0s()(),t.j41(14,"div",7)(15,"div",10),t.EFF(16),t.k0s(),t.j41(17,"div",11),t.nrm(18,"app-public-transport-chip",12),t.j41(19,"small",13),t.EFF(20),t.k0s()(),t.j41(21,"div",10),t.EFF(22),t.k0s()()()),2&e){const i=M.$implicit;t.R7$(3),t.JRh(i.points[0].dateTime.time),t.R7$(3),t.JRh(i.points[1].dateTime.time),t.R7$(10),t.JRh(i.points[0].name),t.R7$(2),t.Y8G("line",i.mode),t.R7$(2),t.JRh(i.mode.destination),t.R7$(2),t.JRh(i.points[1].name)}}let f=(()=>{class e{constructor(i,o){this.store=i,this.router=o,this.origin$=this.store.select(s.P7.getState),this.tripDetail$=this.store.select(s.qB.trip)}ngOnInit(){this.origin$.pipe((0,c.s)(1),(0,g.p)(i=>!i)).subscribe(()=>{this.router.navigate(["/"]).catch(i=>console.error("Failed to navigate",i))})}ngOnDestroy(){this.store.dispatch(new m.zh)}static{this.\u0275fac=function(o){return new(o||e)(t.rXU(d.il),t.rXU(l.Ix))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-route-detail"]],decls:10,vars:3,consts:[["role","nav",1,"nav-wrapper","grey","lighten-4"],[1,"title"],[1,"right-align"],["routerLink","../"],[1,"material-icons"],["class","flex-row leg",4,"ngFor","ngForOf"],[1,"flex-row","leg"],[1,"flex-column"],[1,"flex-colum"],[2,"text-align","center"],[1,"station-name"],[1,"flex-row"],[3,"line"],[1,"destination"]],template:function(o,O){if(1&o&&(t.j41(0,"app-layout")(1,"div",0)(2,"div",1),t.EFF(3,"Route details"),t.k0s(),t.j41(4,"div",2)(5,"a",3)(6,"i",4),t.EFF(7,"close"),t.k0s()()()(),t.DNE(8,u,23,6,"div",5),t.nI1(9,"async"),t.k0s()),2&o){let p;t.R7$(8),t.Y8G("ngForOf",null==(p=t.bMT(9,1,O.tripDetail$))?null:p.legs)}},dependencies:[a.Sq,l.Wk,v.C,h.C,a.Jj],styles:[".nav-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;color:#000000de;font-weight:700;font-size:1rem;padding:0 16px}.nav-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex-grow:1}td[_ngcontent-%COMP%]{padding:0 1rem}.trip[_ngcontent-%COMP%]{margin-bottom:12px}.duration[_ngcontent-%COMP%]{float:right;margin-left:10px;padding-top:6px}.leg[_ngcontent-%COMP%]{border-bottom:#aaa solid 1px;padding:6px 0}.leg[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:24px;margin:0 3px}.destination[_ngcontent-%COMP%]{padding:4px 0}"]})}}return e})();var F=n(1555),C=n(2850),x=n(1562);let R=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({providers:[C.T],imports:[a.MD,x.q1,l.iI.forChild([{path:"",component:f}]),d.rK.forFeature([s.P7,s.qB]),F.S]})}}return e})()}}]);