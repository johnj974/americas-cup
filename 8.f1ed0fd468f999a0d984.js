(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{YXEz:function(t,e,n){"use strict";n.r(e),n.d(e,"NewsModule",(function(){return x}));var i=n("ofXK"),o=n("PCNd"),r=n("tyNb"),a=n("fXoL"),s=n("tk/3");let c=(()=>{class t{constructor(t){this.http=t}getCovidInfo(){return this.http.get("https://disease.sh/v3/covid-19/countries/New%20Zealand?strict=true")}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(s.b))},t.\u0275prov=a.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=n("uOtW");let h=(()=>{class t{constructor(){this.weatherKey="c84144b5229259369c06211673b893d1"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{constructor(t,e){this.http=t,this.apiService=e,this.weatherKey=this.apiService.weatherKey}getWeather(){return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=auckland&units=metric&appid="+this.weatherKey)}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(s.b),a.Pb(h))},t.\u0275prov=a.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();class p{constructor(t,e,n,i){this.image=t,this.title=e,this.text=n,this.author=i}}let u=(()=>{class t{constructor(){this.newsList=[new p("assets/images/new-zealand-boat.jpg","New Zealand Progress","New Zealand progress easily, Remaining boats to fight for a place in the final. ","-Joe Harrington"),new p("assets/images/american-boat.jpg","Patriot Capsize","The American boat Patriot capsizes, All crew members uninjured. Major repairs underway","-Kevin Cashell"),new p("assets/images/uk-boat3.jpg","UK Revival","Ineos team UK start poorly, Unable to adapt to the changing conditions, Major improvements required.","-Sounita Son"),new p("assets/images/italy2-boat.jpg","Italian Masterclass","Prada Pirelli Lunna Rosa take a commanding four race lead in the Prada Cup final to maintain their charge for a final spot.","-Pietro Pielso"),new p("assets/images/americas-bow.jpg","Prada Cup","Ineos team Uk have it all to do after two disappointing days on the water with Prada Pirelli Lunna Rosa opening up a lead.","-Ludo Motoscafo"),new p("assets/images/new-zealand-boat2.jpg","American Cup","Who will contest the final with Emirates team New Zealand.","-Brendan Murray")]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=n("320Y");let g=(()=>{class t{transform(t,...e){return t?(3.6*t).toFixed(1):"No Wind Speed Available"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a.Hb({name:"convert",type:t,pure:!0}),t})(),w=(()=>{class t{transform(t,...e){return["North","North North East","North East","East North East","East","East South East","South East","South South East","South","South South West","South West","West South West","West","West North West","North West","North North West"][Math.floor(t/22.5+.5)%16]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a.Hb({name:"compass",type:t,pure:!0}),t})();function f(t,e){if(1&t&&(a.Lb(0,"div",4),a.Lb(1,"h5"),a.jc(2,"Covid 19 Info"),a.Kb(),a.Lb(3,"table",6),a.Lb(4,"tbody"),a.Lb(5,"tr"),a.Lb(6,"th"),a.jc(7,"Population"),a.Kb(),a.Lb(8,"td"),a.jc(9),a.Kb(),a.Kb(),a.Lb(10,"tr"),a.Lb(11,"th"),a.jc(12,"Active Cases"),a.Kb(),a.Lb(13,"td"),a.jc(14),a.Kb(),a.Kb(),a.Lb(15,"tr"),a.Lb(16,"th"),a.jc(17,"Todays Cases"),a.Kb(),a.Lb(18,"td"),a.jc(19),a.Kb(),a.Kb(),a.Lb(20,"tr"),a.Lb(21,"th"),a.jc(22,"Todays Recovered"),a.Kb(),a.Lb(23,"td"),a.jc(24),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&t){const t=e.$implicit;a.xb(9),a.kc(t.population),a.xb(5),a.kc(t.active),a.xb(5),a.kc(t.todayCases),a.xb(5),a.kc(t.todayRecovered)}}function m(t,e){if(1&t&&(a.Lb(0,"div",4),a.Lb(1,"h5"),a.jc(2,"Auckland Weather"),a.Kb(),a.Lb(3,"table",6),a.Lb(4,"tbody"),a.Lb(5,"tr"),a.Lb(6,"th"),a.jc(7,"Temperature"),a.Kb(),a.Lb(8,"td"),a.jc(9),a.Vb(10,"number"),a.Kb(),a.Kb(),a.Lb(11,"tr"),a.Lb(12,"th"),a.jc(13,"Conditions"),a.Kb(),a.Lb(14,"td"),a.jc(15),a.Kb(),a.Kb(),a.Lb(16,"tr"),a.Lb(17,"th"),a.jc(18,"Wind Speed"),a.Kb(),a.Lb(19,"td"),a.jc(20),a.Vb(21,"convert"),a.Kb(),a.Kb(),a.Lb(22,"tr"),a.Lb(23,"th"),a.jc(24,"Wind Direction"),a.Kb(),a.Lb(25,"td"),a.jc(26),a.Vb(27,"compass"),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&t){const t=e.$implicit;a.xb(9),a.lc("",a.Xb(10,4,t.main.temp,"1.0-0")," \u2103"),a.xb(6),a.kc(t.weather[0].main),a.xb(5),a.lc("",a.Wb(21,7,t.wind.speed)," km/h"),a.xb(6),a.kc(a.Wb(27,9,t.wind.deg))}}function K(t,e){if(1&t&&(a.Lb(0,"div",11),a.Lb(1,"div",12),a.Jb(2,"img",13),a.Lb(3,"div",14),a.Lb(4,"h4"),a.jc(5),a.Kb(),a.Kb(),a.Lb(6,"div",15),a.Lb(7,"p",16),a.jc(8),a.Kb(),a.Kb(),a.Lb(9,"div",17),a.Lb(10,"p",18),a.jc(11),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&t){const t=e.$implicit,n=e.index;a.xb(2),a.bc("alt",t.title),a.ac("src",t.image,a.gc),a.xb(3),a.kc(t.title),a.xb(3),a.lc(" ",t.text," "),a.xb(1),a.zb(n%2==0?"bg-dark text-white":"bg-danger text-white"),a.xb(2),a.kc(t.author)}}const L=[{path:"",component:(()=>{class t{constructor(t,e,n,i){this.covidService=t,this.competitionService=e,this.weatherService=n,this.newsService=i,this.covidInfo=[],this.weatherData=[],this.newsListArray=[],this.compResults=[],this.italy=0,this.usa=0,this.uk=0,this.nz=0}ngOnInit(){this.getCovidReport(),this.fetchResults(),this.getWeatherReport(),this.newsListArray=this.newsService.newsList}getCovidReport(){this.covidSubscription=this.covidService.getCovidInfo().subscribe(t=>{this.covidCountry=t.country,this.covidInfo.push(t)})}getWeatherReport(){this.weatherSubscription=this.weatherService.getWeather().subscribe(t=>{this.weatherData.push(t)})}fetchResults(){this.competitionSubscription=this.competitionService.retrievePosts().subscribe(t=>{this.compResults=t;for(let e=0;e<this.compResults.length;e++)"Italy"===this.compResults[e].winnerChoice&&(this.italy+=1),"USA"===this.compResults[e].winnerChoice&&(this.usa+=1),"UK"===this.compResults[e].winnerChoice&&(this.uk+=1),"New Zealand"===this.compResults[e].winnerChoice&&(this.nz+=1)})}ngOnDestroy(){this.covidSubscription.unsubscribe(),this.weatherSubscription.unsubscribe(),this.competitionSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(a.Ib(c),a.Ib(b.a),a.Ib(d),a.Ib(u))},t.\u0275cmp=a.Cb({type:t,selectors:[["app-news"]],decls:35,vars:8,consts:[["id","news"],[1,"container-fluid","bg-dark","text-white","http-section"],[1,"row"],["class","col-lg-4 pb-3",4,"ngFor","ngForOf"],[1,"col-lg-4","pb-3"],[3,"innerText"],[1,"table"],[1,"container-fluid","bg-dark","card-section","py-5"],["id","card-row",1,"row","mx-auto","justify-content-center"],[1,"card-group"],["class","col-lg-4 col-sm-6 py-3","align","center",4,"ngFor","ngForOf"],["align","center",1,"col-lg-4","col-sm-6","py-3"],[1,"card"],[1,"card-img-top",3,"src","alt"],[1,"card-header"],[1,"card-body"],[1,"card-text"],[1,"card-footer"],[1,"muted","pb-0","mb-0","text-end"]],template:function(t,e){1&t&&(a.Lb(0,"section",0),a.Lb(1,"app-header"),a.jc(2,"News"),a.Kb(),a.Lb(3,"div",1),a.Lb(4,"div",2),a.ic(5,f,25,4,"div",3),a.ic(6,m,28,11,"div",3),a.Lb(7,"div",4),a.Jb(8,"h5",5),a.Lb(9,"table",6),a.Lb(10,"tbody"),a.Lb(11,"tr"),a.Lb(12,"th"),a.jc(13,"New Zealand"),a.Kb(),a.Lb(14,"td"),a.jc(15),a.Kb(),a.Kb(),a.Lb(16,"tr"),a.Lb(17,"th"),a.jc(18,"UK"),a.Kb(),a.Lb(19,"td"),a.jc(20),a.Kb(),a.Kb(),a.Lb(21,"tr"),a.Lb(22,"th"),a.jc(23,"Italy"),a.Kb(),a.Lb(24,"td"),a.jc(25),a.Kb(),a.Kb(),a.Lb(26,"tr"),a.Lb(27,"th"),a.jc(28,"USA"),a.Kb(),a.Lb(29,"td"),a.jc(30),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Lb(31,"div",7),a.Lb(32,"div",8),a.Lb(33,"div",9),a.ic(34,K,12,7,"div",10),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&t&&(a.xb(5),a.ac("ngForOf",e.covidInfo),a.xb(1),a.ac("ngForOf",e.weatherData),a.xb(2),a.ac("innerText",e.compResults.length<1?"Please Login To See Votes":"Competition Votes"),a.xb(7),a.kc(e.nz),a.xb(5),a.kc(e.uk),a.xb(5),a.kc(e.italy),a.xb(5),a.kc(e.usa),a.xb(4),a.ac("ngForOf",e.newsListArray))},directives:[l.a,i.i],pipes:[i.d,g,w],styles:[".http-section[_ngcontent-%COMP%]{border-bottom:3px solid red}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;color:#fff;padding:10px 10px 0 45px}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{width:60%}h5[_ngcontent-%COMP%]{text-align:center;border-bottom:1px solid #fff;width:80%;margin:0 auto}table.td[_ngcontent-%COMP%]{text-align:right}.card-section[_ngcontent-%COMP%]{padding:20px 0}#card-row[_ngcontent-%COMP%]{width:80%}.card[_ngcontent-%COMP%]{height:45vh;width:18rem;transition:.3s;border-radius:0}.card[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 8px 16px #fff}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20vh}@media only screen and (max-width:768px){.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px 10px 0 75px}}@media only screen and (max-width:600px){.card[_ngcontent-%COMP%]{height:450px}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px 10px 0 35px}}"]}),t})()}];let v=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(e){return new(e||t)},imports:[[r.f.forChild(L)],r.f]}),t})(),x=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(e){return new(e||t)},imports:[[v,i.b,o.a]]}),t})()}}]);