(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"QR/W":function(e,t,o){"use strict";o.r(t),o.d(t,"DetailsPageModule",function(){return d});var r=o("ofXK"),n=o("3Pt+"),i=o("TEn/"),s=o("tyNb"),c=o("fXoL"),a=o("tk/3");let b=(()=>{class e{constructor(e,t){this.route=e,this.httpClient=t,this.personDetail={}}ngOnInit(){this.getStarWarsDetails()}getStarWarsDetails(){const e=+this.route.snapshot.paramMap.get("id");this.httpClient.get(`https://swapi.dev/api/people/${e}`).subscribe(e=>{console.log("Person!",e),this.personDetail=e})}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(s.a),c.Jb(a.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-details"]],decls:27,vars:8,consts:[["color","success"]],template:function(e,t){1&e&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar",0),c.Mb(2,"ion-title"),c.dc(3,"Star War Explorer"),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-card"),c.Mb(5,"ion-card-header"),c.Mb(6,"ion-card-subtitle"),c.dc(7),c.Lb(),c.Mb(8,"ion-card-title"),c.dc(9),c.Lb(),c.Lb(),c.Mb(10,"ion-card-content"),c.Mb(11,"p"),c.dc(12),c.Lb(),c.Mb(13,"p"),c.dc(14),c.Lb(),c.Mb(15,"p"),c.dc(16),c.Lb(),c.Mb(17,"p"),c.dc(18),c.Lb(),c.Mb(19,"p"),c.dc(20),c.Lb(),c.Mb(21,"p"),c.dc(22),c.Lb(),c.Lb(),c.Lb(),c.Mb(23,"ion-footer"),c.Mb(24,"ion-toolbar"),c.Mb(25,"ion-title"),c.dc(26,"Made by Eric Sanchez"),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(7),c.ec(" ",t.personDetail.gender," "),c.zb(2),c.ec(" ",t.personDetail.name," "),c.zb(3),c.ec(" Height: ",t.personDetail.height," "),c.zb(2),c.ec(" Mass: ",t.personDetail.mass," "),c.zb(2),c.ec(" Hair color: ",t.personDetail.hair_color," "),c.zb(2),c.ec(" Skin color: ",t.personDetail.skin_color," "),c.zb(2),c.ec(" Eye color: ",t.personDetail.eye_color," "),c.zb(2),c.ec(" Birth year: ",t.personDetail.birth_year," "))},directives:[i.j,i.r,i.q,i.b,i.d,i.e,i.f,i.c,i.i],styles:[""]}),e})();const p=[{path:"",component:b},{path:":id",component:b}];let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({imports:[[s.i.forChild(p)],s.i]}),e})(),d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({imports:[[r.b,n.a,i.s,l]]}),e})()}}]);