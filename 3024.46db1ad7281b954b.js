"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[3024],{83951:(y,l,n)=>{n.d(l,{$:()=>m});var o=n(86825);const m=function s(d){return(0,o.X$)("fadeInUp",[(0,o.eR)(":enter",[(0,o.oB)({transform:"translateY(20px)",opacity:0}),(0,o.jt)(`${d}ms cubic-bezier(0.35, 0, 0.25, 1)`,(0,o.oB)({transform:"translateY(0)",opacity:1}))])])}(400)},86820:(y,l,n)=>{n.d(l,{KF:()=>p,Nu:()=>d,v$:()=>g,xg:()=>m});var o=n(86825);function s(f){return(0,o.X$)("stagger",[(0,o.eR)("* => *",[(0,o.IO)(":enter",(0,o.EY)(f,(0,o.pV)()),{optional:!0})])])}const m=s(80),d=s(60),p=s(40),g=s(20)},63024:(y,l,n)=>{n.r(l),n.d(l,{SocialTimelineModule:()=>S});var o=n(96814),s=n(35420),m=n(46458),d=n(42598),p=n(83951),g=n(95982),f=n(62008),U=n(86820),e=n(65879),v=n(30617),x=n(32296),h=n(56263),Z=n(23680);function T(t,u){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"img",12),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("src",i.imageUrl,e.LSH)}}const _=["*"];let I=(()=>{class t{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["vex-profile-timeline-entry"]],inputs:{avatarUrl:"avatarUrl",name:"name",time:"time",imageUrl:"imageUrl",likes:"likes",comments:"comments"},ngContentSelectors:_,decls:18,vars:8,consts:[[1,"px-gutter","py-4","flex","items-center"],["alt","User Picture",1,"flex-none","avatar","ltr:mr-4","rtl:ml-4",3,"src"],[1,"flex-auto"],[1,"font-medium"],[1,"text-secondary","font-medium","text-xs"],[4,"ngIf"],[1,"flex","justify-between"],["matRipple","",1,"px-gutter","py-2","flex","flex-row","cursor-pointer","select-none","items-center","text-pink","ltr:rounded-bl","rtl:rounded-br","relative","hover:bg-pink/10","trans-ease-out","h-10"],["svgIcon","mat:favorite",1,"icon-sm"],[1,"font-medium","ltr:ml-2","rtl:mr-2","text-sm"],["matRipple","",1,"px-gutter","py-2","flex","flex-row","cursor-pointer","select-none","items-center","text-primary","ltr:rounded-br","rtl:rounded-bl","relative","hover:bg-primary/10","trans-ease-out","h-10"],["svgIcon","mat:comment",1,"icon-sm"],[3,"src"]],template:function(a,r){1&a&&(e.F$t(),e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2)(3,"p",3),e._uU(4),e.qZA(),e.TgZ(5,"p",4),e._uU(6),e.qZA()()(),e.Hsn(7),e.YNc(8,T,2,1,"div",5),e.TgZ(9,"div",6)(10,"div",7),e._UZ(11,"mat-icon",8),e.TgZ(12,"p",9),e._uU(13),e.qZA()(),e.TgZ(14,"div",10),e._UZ(15,"mat-icon",11),e.TgZ(16,"p",9),e._uU(17),e.qZA()()()),2&a&&(e.xp6(1),e.Q6J("src",r.avatarUrl,e.LSH),e.xp6(3),e.Oqu(r.name),e.xp6(2),e.Oqu(r.time),e.xp6(2),e.Q6J("ngIf",r.imageUrl),e.xp6(1),e.ekj("border-t",!r.imageUrl),e.xp6(4),e.hij("",r.likes," Likes"),e.xp6(4),e.hij("",r.comments," Comments"))},dependencies:[o.O5,v.Hw,Z.wG]})}return t})();function A(t,u){if(1&t){const i=e.EpF();e.TgZ(0,"button",64),e.NdJ("click",function(){e.CHM(i);const r=e.oxw().$implicit,c=e.oxw();return e.KtG(c.addFriend(r))}),e._UZ(1,"mat-icon",65),e.qZA()}}function b(t,u){if(1&t){const i=e.EpF();e.TgZ(0,"button",64),e.NdJ("click",function(){e.CHM(i);const r=e.oxw().$implicit,c=e.oxw();return e.KtG(c.removeFriend(r))}),e._UZ(1,"mat-icon",66),e.qZA()}}function J(t,u){if(1&t&&(e.TgZ(0,"div",59),e._UZ(1,"img",60),e.TgZ(2,"div",1)(3,"h4",61),e._uU(4),e.qZA(),e.TgZ(5,"h5",62),e._uU(6),e.qZA()(),e.YNc(7,A,2,0,"button",63),e.YNc(8,b,2,0,"button",63),e.qZA()),2&t){const i=u.$implicit;e.xp6(1),e.Q6J("@scaleIn",void 0)("src",i.imageSrc,e.LSH),e.xp6(1),e.Q6J("@fadeInRight",void 0),e.xp6(2),e.Oqu(i.name),e.xp6(2),e.hij("",i.friends," mutual friends"),e.xp6(1),e.Q6J("ngIf",!i.added),e.xp6(1),e.Q6J("ngIf",i.added)}}const q=[{path:"",component:(()=>{class t{constructor(){this.suggestions=d.$}ngOnInit(){}addFriend(i){i.added=!0}removeFriend(i){i.added=!1}trackByName(i,a){return a.name}static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["vex-social-timeline"]],decls:119,vars:29,consts:[[1,"mt-6","flex","flex-col","md:flex-row","md:items-start"],[1,"flex-auto"],[1,"flex","justify-between"],["matRipple","",1,"relative","flex","items-center","cursor-pointer","select-none","rounded-full","px-4","py-1","hover:bg-primary/10","trans-ease-out"],[1,"p-2","bg-primary/10","text-primary","rounded-full","ltr:mr-4","rtl:ml-4"],["svgIcon","mat:add",1,"block"],[1,"font-medium","text-primary"],["matRipple","",1,"relative","flex","items-center","cursor-pointer","select-none","rounded-full","px-4","py-2","hover:bg-green/10","trans-ease-out"],[1,"p-2","bg-green/10","text-green","rounded-full","ltr:mr-4","rtl:ml-4"],["svgIcon","mat:add_a_photo",1,"block"],[1,"font-medium","text-green"],["matRipple","",1,"relative","flex","items-center","cursor-pointer","select-none","rounded-full","px-4","py-2","hover:bg-cyan/10","trans-ease-out"],[1,"p-2","bg-cyan/10","text-cyan","rounded-full","ltr:mr-4","rtl:ml-4"],["svgIcon","mat:photo_filter",1,"block"],[1,"font-medium","text-cyan"],[1,"card","mt-6"],[1,"bg-foreground","rounded-t","flex",3,"click"],["cdkTextareaAutosize","","placeholder","Share your thoughts...",1,"outline-none","bg-foreground","p-6","rounded-t","flex-auto"],["textarea",""],[1,"bg-app-bar","flex"],["mat-button","","type","button",1,"text-secondary","uppercase","font-medium","rounded-none","ltr:rounded-bl","rtl:rounded-br"],["matButtonIcon","","svgIcon","mat:add_a_photo"],[1,"text-xs"],["mat-button","","type","button",1,"text-secondary","uppercase","font-medium","rounded-none"],["matButtonIcon","","svgIcon","mat:attach_file"],[1,"flex-1"],["color","primary","mat-flat-button","","type","button",1,"uppercase","font-medium","rounded-none","ltr:rounded-br","rtl:rounded-bl"],["iconPositionEnd","","matButtonIcon","","svgIcon","mat:keyboard_arrow_right"],[1,"flex","flex-col","sm:flex-row"],["avatarUrl","assets/img/avatars/6.jpg","comments","5","imageUrl","assets/img/demo/3.jpg","likes","16","name","Jimmy Fallon","time","14 minutes ago"],["avatarUrl","assets/img/avatars/7.jpg","comments","15","likes","62","name","Jens Zaracha","time","18 minutes ago"],[1,"px-gutter","pt-1","pb-4"],["avatarUrl","assets/img/avatars/5.jpg","comments","4","imageUrl","assets/img/demo/5.jpg","likes","48","name","Daniela Longcliff","time","33 minutes ago"],["avatarUrl","assets/img/avatars/10.jpg","comments","7","imageUrl","assets/img/demo/6.jpg","likes","31","name","Jack White","time","2 hours ago"],[1,"flex-1","sm:ltr:ml-4","sm:rtl:mr-4"],["avatarUrl","assets/img/avatars/3.jpg","comments","2","likes","14","name","Franklin Treasor","time","23 minutes ago"],["avatarUrl","assets/img/avatars/2.jpg","comments","9","imageUrl","assets/img/demo/4.jpg","likes","33","name","Johnathan McCloud","time","48 minutes ago"],["avatarUrl","assets/img/avatars/11.jpg","comments","7","imageUrl","assets/img/demo/7.jpg","likes","26","name","Peter Proll","time","2 hours ago"],["avatarUrl","assets/img/avatars/10.jpg","comments","15","likes","62","name","Michael Baltan","time","3 hours ago"],[1,"flex-none","max-w-unset","md:max-w-xs","w-full","md:ltr:ml-6","md:rtl:mr-6","mt-6","md:mt-0"],[1,"card"],[1,"px-gutter","py-4","border-b"],[1,"title","m-0"],[1,"px-gutter","py-3"],[1,"py-3","flex","items-center"],[1,"w-10","h-10","rounded-full","bg-primary/10","text-primary","ltr:mr-3","rtl:ml-3","flex","items-center","justify-center"],["svgIcon","mat:phone",1,"icon-sm"],[1,"m-0","body-1"],[1,"m-0","caption","text-hint"],["svgIcon","mat:work",1,"icon-sm"],["svgIcon","mat:mail",1,"icon-sm"],["svgIcon","mat:access_time",1,"icon-sm"],[1,"w-10","h-10","rounded-full","bg-gray/10","text-dark","ltr:mr-3","rtl:ml-3","cursor-pointer","flex","items-center","justify-center"],["svgIcon","mat:add",1,"icon-sm"],[1,"m-0","body-1","cursor-pointer"],["svgIcon","mat:whatshot",1,"icon-sm"],[1,"px-6","py-4","border-b"],[1,"px-6","py-4","flex","flex-col","gap-4"],["class","flex items-center",4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","items-center"],["alt","Profile Picture",1,"avatar","ltr:mr-3","rtl:ml-3","flex-none",3,"src"],[1,"body-2","m-0","leading-snug"],[1,"text-secondary","m-0","caption","leading-none"],["color","primary","mat-icon-button","","type","button",3,"click",4,"ngIf"],["color","primary","mat-icon-button","","type","button",3,"click"],["svgIcon","mat:person_add"],["svgIcon","mat:check"]],template:function(a,r){if(1&a){const c=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"mat-icon",5),e.qZA(),e.TgZ(6,"p",6),e._uU(7,"Share your thoughts"),e.qZA()(),e.TgZ(8,"div",7)(9,"div",8),e._UZ(10,"mat-icon",9),e.qZA(),e.TgZ(11,"p",10),e._uU(12,"Take a picture"),e.qZA()(),e.TgZ(13,"div",11)(14,"div",12),e._UZ(15,"mat-icon",13),e.qZA(),e.TgZ(16,"p",14),e._uU(17,"Create a story"),e.qZA()()(),e.TgZ(18,"div",15)(19,"div",16),e.NdJ("click",function(){e.CHM(c);const j=e.MAs(21);return e.KtG(j.focus())}),e._UZ(20,"textarea",17,18),e.qZA(),e.TgZ(22,"div",19)(23,"button",20),e._UZ(24,"mat-icon",21),e.TgZ(25,"span",22),e._uU(26,"Photo"),e.qZA()(),e.TgZ(27,"button",23),e._UZ(28,"mat-icon",24),e.TgZ(29,"span",22),e._uU(30,"File/Document"),e.qZA()(),e._UZ(31,"span",25),e.TgZ(32,"button",26)(33,"span"),e._uU(34,"Post"),e.qZA(),e._UZ(35,"mat-icon",27),e.qZA()()(),e.TgZ(36,"div",28)(37,"div",25)(38,"div",15),e._UZ(39,"vex-profile-timeline-entry",29),e.qZA(),e.TgZ(40,"div",15)(41,"vex-profile-timeline-entry",30)(42,"p",31),e._uU(43,"I'm absolutely in love with the new Angular template I bought a few days ago, it's called Vex and it's absolutely gorgeous."),e.qZA()()(),e.TgZ(44,"div",15)(45,"vex-profile-timeline-entry",32)(46,"p",31),e._uU(47,"Having fun @work! Anyone want to get a drink later?"),e.qZA()()(),e.TgZ(48,"div",15),e._UZ(49,"vex-profile-timeline-entry",33),e.qZA()(),e.TgZ(50,"div",34)(51,"div",15)(52,"vex-profile-timeline-entry",35)(53,"p",31),e._uU(54,"Finally! I managed to get my shiny new PC up & running. Anyone want to meet up and get some hands-on details?"),e.qZA()()(),e.TgZ(55,"div",15)(56,"vex-profile-timeline-entry",36)(57,"p",31),e._uU(58,"Have you ever seen such a clean workspace?"),e.qZA()()(),e.TgZ(59,"div",15),e._UZ(60,"vex-profile-timeline-entry",37),e.qZA(),e.TgZ(61,"div",15)(62,"vex-profile-timeline-entry",38)(63,"p",31),e._uU(64,"Have you ever scrolled so far that you wondered why you landed here? If you're still scrolling and love the template, take a look at the beautiful Scrumboard or the Contacts list! :)"),e.qZA()()()()()(),e.TgZ(65,"div",39)(66,"div",40)(67,"div",41)(68,"h2",42),e._uU(69,"About"),e.qZA()(),e.TgZ(70,"div",43)(71,"div",44)(72,"div",45),e._UZ(73,"mat-icon",46),e.qZA(),e.TgZ(74,"div")(75,"p",47),e._uU(76,"+1 (930) 502-3182"),e.qZA(),e.TgZ(77,"p",48),e._uU(78,"Business"),e.qZA()()(),e.TgZ(79,"div",44)(80,"div",45),e._UZ(81,"mat-icon",49),e.qZA(),e.TgZ(82,"div")(83,"p",47),e._uU(84,"Web Developer at IceCube"),e.qZA(),e.TgZ(85,"p",48),e._uU(86,"Previously Designer at HotStuff"),e.qZA()()(),e.TgZ(87,"div",44)(88,"div",45),e._UZ(89,"mat-icon",50),e.qZA(),e.TgZ(90,"div")(91,"p",47),e._uU(92,"david.smith@example.com"),e.qZA(),e.TgZ(93,"p",48),e._uU(94,"Business inquiries only"),e.qZA()()(),e.TgZ(95,"div",44)(96,"div",45),e._UZ(97,"mat-icon",51),e.qZA(),e.TgZ(98,"div")(99,"p",47),e._uU(100,"Usually available 9am-5pm"),e.qZA(),e.TgZ(101,"p",48),e._uU(102,"Call +1 (930) 242-5186"),e.qZA()()(),e.TgZ(103,"div",44)(104,"div",52),e._UZ(105,"mat-icon",53),e.qZA(),e.TgZ(106,"p",54),e._uU(107,"Add an address"),e.qZA()(),e.TgZ(108,"div",44)(109,"div",52),e._UZ(110,"mat-icon",55),e.qZA(),e.TgZ(111,"p",54),e._uU(112,"Add social profiles"),e.qZA()()()(),e.TgZ(113,"div",15)(114,"div",56)(115,"h2",42),e._uU(116,"Friend Suggestions"),e.qZA()(),e.TgZ(117,"div",57),e.YNc(118,J,9,7,"div",58),e.qZA()()()()}2&a&&(e.xp6(4),e.Q6J("@scaleIn",void 0),e.xp6(2),e.Q6J("@fadeInRight",void 0),e.xp6(3),e.Q6J("@scaleIn",void 0),e.xp6(2),e.Q6J("@fadeInRight",void 0),e.xp6(5),e.Q6J("@fadeInRight",void 0),e.xp6(2),e.Q6J("@fadeInUp",void 0),e.xp6(20),e.Q6J("@fadeInUp",void 0),e.xp6(2),e.Q6J("@fadeInUp",void 0),e.xp6(4),e.Q6J("@fadeInUp",void 0),e.xp6(4),e.Q6J("@fadeInUp",void 0),e.xp6(3),e.Q6J("@fadeInUp",void 0),e.xp6(4),e.Q6J("@fadeInUp",void 0),e.xp6(4),e.Q6J("@fadeInUp",void 0),e.xp6(2),e.Q6J("@fadeInUp",void 0),e.xp6(11),e.Q6J("@scaleIn",void 0),e.xp6(2),e.Q6J("@fadeInRight",void 0),e.xp6(6),e.Q6J("@scaleIn",void 0),e.xp6(2),e.Q6J("@fadeInRight",void 0),e.xp6(6),e.Q6J("@scaleIn",void 0),e.xp6(2),e.Q6J("@fadeInRight",void 0),e.xp6(6),e.Q6J("@scaleIn",void 0),e.xp6(2),e.Q6J("@fadeInRight",void 0),e.xp6(6),e.Q6J("@scaleIn",void 0),e.xp6(2),e.Q6J("@fadeInRight",void 0),e.xp6(3),e.Q6J("@scaleIn",void 0),e.xp6(2),e.Q6J("@fadeInRight",void 0),e.xp6(6),e.Q6J("@stagger",void 0),e.xp6(1),e.Q6J("ngForOf",r.suggestions)("ngForTrackBy",r.trackByName))},dependencies:[o.sg,o.O5,v.Hw,x.lW,x.RK,h.IC,Z.wG,I],data:{animation:[p.$,g.G,f.a,U.KF]}})}return t})()}];let Q=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[s.Bz.forChild(q),s.Bz,m.d8]})}return t})();var k=n(74104),C=n(24516);let S=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[o.ez,Q,k.Nh,v.Ps,x.ot,C.c,Z.si]})}return t})()}}]);