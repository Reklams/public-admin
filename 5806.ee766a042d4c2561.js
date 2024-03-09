"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[5806],{83951:(y,m,i)=>{i.d(m,{$:()=>c});var r=i(86825);const c=function a(n){return(0,r.X$)("fadeInUp",[(0,r.eR)(":enter",[(0,r.oB)({transform:"translateY(20px)",opacity:0}),(0,r.jt)(`${n}ms cubic-bezier(0.35, 0, 0.25, 1)`,(0,r.oB)({transform:"translateY(0)",opacity:1}))])])}(400)},45806:(y,m,i)=>{i.r(m),i.d(m,{RegisterModule:()=>J});var r=i(96814),a=i(35420),c=i(46458),n=i(56223),b=i(83951),t=i(65879),d=i(24516),u=i(64170),g=i(30617),f=i(32296),v=i(92596),h=i(75986);function T(e,p){1&e&&t._UZ(0,"mat-icon",22)}function x(e,p){1&e&&t._UZ(0,"mat-icon",23)}function U(e,p){1&e&&t._UZ(0,"mat-icon",22)}function C(e,p){1&e&&t._UZ(0,"mat-icon",23)}const I=function(){return["/login"]},A=[{path:"",component:(()=>{class e{constructor(l,s,o){this.router=l,this.fb=s,this.cd=o,this.inputType="password",this.visible=!1}ngOnInit(){this.form=this.fb.group({name:["",n.kI.required],email:["",n.kI.required],password:["",n.kI.required],passwordConfirm:["",n.kI.required]})}send(){this.router.navigate(["/"])}toggleVisibility(){this.visible?(this.inputType="password",this.visible=!1,this.cd.markForCheck()):(this.inputType="text",this.visible=!0,this.cd.markForCheck())}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(a.F0),t.Y36(n.QS),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["vex-register"]],decls:46,vars:10,consts:[[1,"w-full","h-full","bg-pattern","flex","flex-col","items-center","justify-center"],[1,"card","overflow-hidden","w-full","max-w-md"],[1,"p-6","pb-0","flex","flex-col","items-center","justify-center"],[1,"fill-current","text-center"],["src","assets/img/demo/logo.svg",1,"w-16"],[1,"text-center","mt-4"],[1,"title","m-0"],[1,"body-2","text-secondary","m-0"],[1,"p-6","flex","flex-col","gap-4","flex-auto","flex","flex-col",3,"formGroup"],[1,"flex-1","block"],["formControlName","name","matInput","","required",""],["formControlName","email","matInput","","required",""],["formControlName","password","matInput","","required","",3,"type"],["mat-icon-button","","matSuffix","","matTooltip","Toggle Visibility","type","button",3,"click"],["svgIcon","mat:visibility",4,"ngIf"],["svgIcon","mat:visibility_off",4,"ngIf"],["formControlName","passwordConfirm","matInput","","required","",3,"type"],[1,"flex","items-center","justify-center"],[1,"caption"],["color","primary","mat-raised-button","","type","button",3,"click"],[1,"text-secondary","text-center"],[3,"routerLink"],["svgIcon","mat:visibility"],["svgIcon","mat:visibility_off"]],template:function(s,o){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA()(),t.TgZ(5,"div",5)(6,"h2",6),t._uU(7,"Register for an account"),t.qZA(),t.TgZ(8,"h4",7),t._uU(9,"Simply fill out the form below"),t.qZA()(),t.TgZ(10,"div",8)(11,"div")(12,"mat-form-field",9)(13,"mat-label"),t._uU(14,"Name"),t.qZA(),t._UZ(15,"input",10),t.qZA(),t.TgZ(16,"mat-form-field",9)(17,"mat-label"),t._uU(18,"E-Mail"),t.qZA(),t._UZ(19,"input",11),t.qZA(),t.TgZ(20,"mat-form-field",9)(21,"mat-label"),t._uU(22,"Password"),t.qZA(),t._UZ(23,"input",12),t.TgZ(24,"button",13),t.NdJ("click",function(){return o.toggleVisibility()}),t.YNc(25,T,1,0,"mat-icon",14),t.YNc(26,x,1,0,"mat-icon",15),t.qZA()(),t.TgZ(27,"mat-form-field",9)(28,"mat-label"),t._uU(29,"Password (Confirm)"),t.qZA(),t._UZ(30,"input",16),t.TgZ(31,"button",13),t.NdJ("click",function(){return o.toggleVisibility()}),t.YNc(32,U,1,0,"mat-icon",14),t.YNc(33,C,1,0,"mat-icon",15),t.qZA()()(),t.TgZ(34,"div",17)(35,"mat-checkbox",18),t._uU(36,"I accept the "),t.TgZ(37,"a"),t._uU(38,"terms and conditions."),t.qZA()()(),t.TgZ(39,"button",19),t.NdJ("click",function(){return o.send()}),t._uU(40," CREATE ACCOUNT "),t.qZA(),t.TgZ(41,"p",20),t._uU(42," Already have an account?"),t._UZ(43,"br"),t.TgZ(44,"a",21),t._uU(45,"Sign in here"),t.qZA()()()()()),2&s&&(t.xp6(1),t.Q6J("@fadeInUp",void 0),t.xp6(9),t.Q6J("formGroup",o.form),t.xp6(13),t.Q6J("type",o.inputType),t.xp6(2),t.Q6J("ngIf",o.visible),t.xp6(1),t.Q6J("ngIf",!o.visible),t.xp6(4),t.Q6J("type",o.inputType),t.xp6(2),t.Q6J("ngIf",o.visible),t.xp6(1),t.Q6J("ngIf",!o.visible),t.xp6(11),t.Q6J("routerLink",t.DdM(9,I)))},dependencies:[r.O5,a.rH,c.jG,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u,d.Nt,u.KE,u.hX,u.R9,g.Hw,f.lW,f.RK,v.gM,h.oG],data:{animation:[b.$]}})}return e})()}];let R=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(A),a.Bz,c.d8]})}return e})(),J=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[r.ez,R,n.UX,d.c,g.Ps,f.ot,v.AV,h.p9]})}return e})()}}]);