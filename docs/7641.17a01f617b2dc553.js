"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[7641],{47641:(nt,p,n)=>{n.r(p),n.d(p,{ProductModule:()=>et});var m=n(96814),g=n(56223),s=n(35420),i=n(89515),w=n(62051),b=n(47774),u=n(89364),U=n(59051),P=n(13680),t=n(65879),h=n(43322);let v=(()=>{class e{constructor(o){this.productService=o}resolve(o){return this.productService.getById("Products",o.paramMap.get("id"))}static#t=this.\u0275fac=function(a){return new(a||e)(t.LFG(h.M))};static#o=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var x=n(78645),_=n(95982),O=n(83951),M=n(62008),G=n(86820),H=n(52142),f=n(58184),J=n(19347),Z=n(30617),A=n(32296),C=n(74104),S=n(92596),T=n(16072),L=n(79859),y=n(17727);function Y(e,l){if(1&e&&t._UZ(0,"img",20),2&e){const o=t.oxw(2);t.s9C("src",null==o.product||null==o.product.channel?null:o.product.channel.imageUrl,t.LSH)}}function q(e,l){if(1&e){const o=t.EpF();t.TgZ(0,"div",8)(1,"div",9)(2,"mat-tab-group",10),t.NdJ("selectedTabChange",function(r){t.CHM(o);const c=t.oxw();return t.KtG(c.tabChanged(r))}),t.TgZ(3,"mat-tab",11),t.ALo(4,"translate"),t.TgZ(5,"div",12)(6,"div",13)(7,"div",14)(8,"div",13)(9,"div",15)(10,"strong"),t._uU(11),t.ALo(12,"translate"),t.qZA()(),t.TgZ(13,"div",16)(14,"p",17),t._uU(15),t.qZA()()(),t.TgZ(16,"div",13)(17,"div",15)(18,"strong"),t._uU(19),t.ALo(20,"translate"),t.qZA()(),t.TgZ(21,"div",16)(22,"p",17),t._uU(23),t.qZA()()(),t.TgZ(24,"div",13)(25,"div",15)(26,"strong"),t._uU(27),t.ALo(28,"translate"),t.qZA()(),t.TgZ(29,"div",16)(30,"p",17),t._uU(31),t.qZA()()(),t.TgZ(32,"div",13)(33,"div",15)(34,"strong"),t._uU(35),t.ALo(36,"translate"),t.qZA()(),t.TgZ(37,"div",16)(38,"p",17),t._uU(39),t.TgZ(40,"mat-icon",18),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.openMap(r.product))}),t.ALo(41,"translate"),t.qZA()()()()(),t.TgZ(42,"div",14)(43,"div",13),t.YNc(44,Y,1,1,"img",19),t.qZA()()()()()()()()}if(2&e){const o=t.oxw();t.xp6(3),t.s9C("label",t.lcZ(4,12,"product.product")),t.xp6(8),t.Oqu(t.lcZ(12,14,"channel.name")),t.xp6(4),t.Oqu(null==o.product||null==o.product.channel?null:o.product.channel.name),t.xp6(4),t.Oqu(t.lcZ(20,16,"general.description")),t.xp6(4),t.Oqu(null==o.product?null:o.product.description),t.xp6(4),t.Oqu(t.lcZ(28,18,"product.product_count")),t.xp6(4),t.AsE("",null==o.product?null:o.product.productCount," ",null==o.product||null==o.product.productPriceUnit?null:o.product.productPriceUnit.name,""),t.xp6(4),t.Oqu(t.lcZ(36,20,"address.address")),t.xp6(4),t.hij("",null==o.product||null==o.product.address?null:o.product.address.name," "),t.xp6(1),t.s9C("matTooltip",t.lcZ(41,22,"address.see_location")),t.xp6(4),t.Q6J("ngIf",null==o.product||null==o.product.channel?null:o.product.channel.imageUrl)}}const j=function(){return["/product/product-list"]},z=function(e){return["/product/product-edit",e]};let I=(()=>{class e{constructor(o,a,r,c){this.globals=o,this.activatedRoute=a,this.dialog=r,this.translateService=c,this.destroySubject=new x.x}ngOnInit(){this.product=this.activatedRoute.snapshot.data.product,console.log("product",this.product)}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete()}tabChanged(o){}openMap(o){this.dialog.open(H.f,{width:"80vw",data:{companyAddress:o.address.coordinates}})}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(f.O),t.Y36(s.gz),t.Y36(J.uw),t.Y36(i.sK))};static#o=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-card"]],decls:19,vars:15,consts:[[1,"gap-2"],["color","primary","mat-raised-button","",3,"routerLink"],["svgIcon","mat:arrow_back"],["color","accent","mat-raised-button","",3,"routerLink"],["svgIcon","mat:edit"],["color","warn","mat-raised-button",""],["svgIcon","mat:delete"],["class","card overflow-auto mt-2",4,"ngIf"],[1,"card","overflow-auto","mt-2"],[1,"p-gutter","p-1"],[3,"selectedTabChange"],[3,"label"],[1,"p-6"],[1,"row"],[1,"col-md-6"],[1,"col-md-3"],[1,"col-md-9"],[1,"description"],["svgIcon","mat:location_on",2,"cursor","pointer",3,"matTooltip","click"],["style","height:100%",3,"src",4,"ngIf"],[2,"height","100%",3,"src"]],template:function(a,r){1&a&&(t.TgZ(0,"vex-page-layout")(1,"vex-page-layout-header",0)(2,"a",1),t._UZ(3,"mat-icon",2),t.TgZ(4,"span"),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.TgZ(7,"a",3),t._UZ(8,"mat-icon",4),t.TgZ(9,"span"),t._uU(10),t.ALo(11,"translate"),t.qZA()(),t.TgZ(12,"a",5),t._UZ(13,"mat-icon",6),t.TgZ(14,"span"),t._uU(15),t.ALo(16,"translate"),t.qZA()()(),t.TgZ(17,"vex-page-layout-content"),t.YNc(18,q,45,24,"div",7),t.qZA()()),2&a&&(t.xp6(2),t.Q6J("routerLink",t.DdM(12,j)),t.xp6(3),t.Oqu(t.lcZ(6,6,"general.go_to_list")),t.xp6(2),t.Q6J("routerLink",t.VKq(13,z,null==r.product?null:r.product.id)),t.xp6(3),t.Oqu(t.lcZ(11,8,"general.edit")),t.xp6(5),t.Oqu(t.lcZ(16,10,"general.delete")),t.xp6(3),t.Q6J("ngIf",r.product))},dependencies:[m.O5,s.rH,Z.Hw,A.zs,C.uX,C.SP,S.gM,T.w,L.U,y.d,i.X$],styles:[".mat-mdc-tab-body-content[_ngcontent-%COMP%]{height:100%;overflow:hidden!important}.row[_ngcontent-%COMP%]{margin-bottom:10px}"],data:{animation:[O.$,_.G,M.a,G.KF]}})}return e})();var N=n(59773),Q=n(42417),F=n(79362),K=n(33701);function X(e,l){if(1&e){const o=t.EpF();t.TgZ(0,"do-dropdown-button")(1,"do-dropdown-item",15),t.NdJ("click",function(){const c=t.CHM(o).row,d=t.oxw();return t.KtG(d.card(c))}),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"do-dropdown-item",15),t.NdJ("click",function(){const c=t.CHM(o).row,d=t.oxw();return t.KtG(d.edit(c))}),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"do-dropdown-item",15),t.NdJ("click",function(){const c=t.CHM(o).row,d=t.oxw();return t.KtG(d.deleteAction(c))}),t._uU(8),t.ALo(9,"translate"),t.qZA()()}2&e&&(t.xp6(2),t.hij(" ",t.lcZ(3,3,"grid.card")," "),t.xp6(3),t.hij(" ",t.lcZ(6,5,"grid.edit")," "),t.xp6(3),t.hij(" ",t.lcZ(9,7,"grid.delete")," "))}function D(e,l){if(1&e&&(t.TgZ(0,"a",16),t._uU(1),t.qZA()),2&e){const o=l.row;t.MGl("routerLink","/product/product-card/",o.id,""),t.xp6(1),t.Oqu(o.company.name)}}function E(e,l){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const o=l.row;t.xp6(1),t.Oqu(o.channel.name)}}function R(e,l){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const o=l.row;t.xp6(1),t.Oqu(o.address.name)}}function B(e,l){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const o=l.value;t.xp6(1),t.Oqu(o)}}function $(e,l){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"dateWtz"),t.qZA()),2&e){const o=l.value;t.xp6(1),t.Oqu(t.lcZ(2,1,o))}}const V=function(){return["/company/company-create"]},W=function(e,l,o){return{emptyMessage:e,totalMessage:l,exportMessage:o,selectedMessage:"selected"}},k=[{path:"",children:[{path:"product-list",component:(()=>{class e{constructor(o,a,r){this.productService=o,this.globals=a,this.router=r,this.destroySubject=new x.x,this.count=0,this.limit=20,this.offset=0,this.rows=null}ngOnInit(){this.globals.showLoading=!0,this.productService.getProducts(this.offset+1,this.limit).pipe((0,N.R)(this.destroySubject)).subscribe(o=>{console.log("productList",o),this.rows=o.result,this.count=o.pagination.totalCount,this.globals.showLoading=!1},o=>{console.log("err",o),this.globals.showLoading=!1})}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete()}onPage(o){this.offset=o.offset}onPageSizeChanged(o){this.offset=0,this.limit=o.limit}exportExcel(){}card(o){this.router.navigateByUrl("/product/product-card/"+o.id)}edit(o){this.router.navigateByUrl("/product/product-edit/"+o.id)}deleteAction(o){}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(h.M),t.Y36(f.O),t.Y36(s.F0))};static#o=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-list"]],decls:37,vars:59,consts:[["color","primary","mat-raised-button","",3,"routerLink"],["svgIcon","mat:add"],[1,"card","overflow-auto","-mt-16"],[1,"bg-app-bar","px-6","h-16","border-b","sticky","left-0","flex","items-center"],[1,"title","my-0","ltr:pr-4","rtl:pl-4","ltr:mr-4","rtl:ml-4","ltr:border-r","rtl:border-l","hidden","sm:block","flex-none"],[1,"p-1"],[1,"material","striped",3,"rows","columnMode","headerHeight","footerHeight","rowHeight","externalPaging","scrollbarH","limit","count","offset","messages"],["table",""],["name","","prop","id",3,"width","resizeable","sortable","draggable","canAutoResize"],["ngx-datatable-cell-template",""],["prop","company",3,"flexGrow","name","sortable"],["prop","channel",3,"flexGrow","name","sortable"],["prop","address",3,"flexGrow","name","sortable"],["prop","externalId",3,"flexGrow","name","sortable"],["prop","createdUtc",3,"flexGrow","name","sortable"],[3,"click"],[3,"routerLink"]],template:function(a,r){1&a&&(t.TgZ(0,"vex-page-layout")(1,"vex-page-layout-header")(2,"a",0),t._UZ(3,"mat-icon",1),t.TgZ(4,"span"),t._uU(5),t.ALo(6,"translate"),t.qZA()()(),t.TgZ(7,"vex-page-layout-content")(8,"div",2)(9,"div",3)(10,"h2",4)(11,"span"),t._uU(12),t.ALo(13,"translate"),t.qZA()()(),t.TgZ(14,"div",5)(15,"ngx-datatable",6,7),t.ALo(17,"translate"),t.ALo(18,"translate"),t.ALo(19,"translate"),t.TgZ(20,"ngx-datatable-column",8),t.YNc(21,X,10,9,"ng-template",9),t.qZA(),t.TgZ(22,"ngx-datatable-column",10),t.ALo(23,"translate"),t.YNc(24,D,2,2,"ng-template",9),t.qZA(),t.TgZ(25,"ngx-datatable-column",11),t.ALo(26,"translate"),t.YNc(27,E,2,1,"ng-template",9),t.qZA(),t.TgZ(28,"ngx-datatable-column",12),t.ALo(29,"translate"),t.YNc(30,R,2,1,"ng-template",9),t.qZA(),t.TgZ(31,"ngx-datatable-column",13),t.ALo(32,"translate"),t.YNc(33,B,2,1,"ng-template",9),t.qZA(),t.TgZ(34,"ngx-datatable-column",14),t.ALo(35,"translate"),t.YNc(36,$,3,3,"ng-template",9),t.qZA()()()()()()),2&a&&(t.xp6(2),t.Q6J("routerLink",t.DdM(54,V)),t.xp6(3),t.Oqu(t.lcZ(6,34,"general.add_new")),t.xp6(7),t.Oqu(t.lcZ(13,36,"product.products")),t.xp6(3),t.Q6J("rows",r.rows)("columnMode","force")("headerHeight",40)("footerHeight",50)("rowHeight","auto")("externalPaging",!1)("scrollbarH",!1)("limit",r.limit)("count",r.count)("offset",r.offset)("messages",t.kEZ(55,W,t.lcZ(17,38,"grid.no_data_to_display"),t.lcZ(18,40,"grid.total_count"),"<i class=ion-android-list></i>"+t.lcZ(19,42,"grid.excel"))),t.xp6(5),t.Q6J("width",40)("resizeable",!1)("sortable",!1)("draggable",!1)("canAutoResize",!1),t.xp6(2),t.s9C("name",t.lcZ(23,44,"company.name")),t.Q6J("flexGrow",1)("sortable",!0),t.xp6(3),t.s9C("name",t.lcZ(26,46,"channel.name")),t.Q6J("flexGrow",1)("sortable",!0),t.xp6(3),t.s9C("name",t.lcZ(29,48,"address.name")),t.Q6J("flexGrow",1)("sortable",!0),t.xp6(3),t.s9C("name",t.lcZ(32,50,"product.external_id")),t.Q6J("flexGrow",1)("sortable",!0),t.xp6(3),t.s9C("name",t.lcZ(35,52,"general.created_at")),t.Q6J("flexGrow",1)("sortable",!0))},dependencies:[s.rH,Z.Hw,A.zs,T.w,L.U,y.d,u.nE,u.UC,u.vq,Q.O,F.V,i.X$,K.L]})}return e})(),data:{heading:"menu.product"}},{path:"product-card/:id",component:I,resolve:{product:v},data:{heading:"menu.product_card"}}]}];var tt=n(78173),ot=n(47346);let et=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#o=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({providers:[v],imports:[m.ez,i.aw,g.u5,g.UX,s.Bz.forChild(k),b.qX,w.G,u.xD,U.j,P.K,tt.Z,ot.D]})}return e})()}}]);