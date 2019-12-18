(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"173f":function(t,e,r){},"3ce0":function(t,e,r){"use strict";var a=r("173f"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("8c4f"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("main",{attrs:{role:"main"}},[r("router-view")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"navbar navbar-dark bg-dark box-shadow"},[r("div",{staticClass:"container d-flex justify-content-between"},[r("a",{staticClass:"navbar-brand d-flex align-items-center",attrs:{href:"/"}},[t._v("\n                Hipster Shop\n            ")]),r("form",{staticClass:"form-inline ml-auto",attrs:{method:"POST",action:"/setCurrency",id:"currency_form"}},[t.currencies.length>0?r("select",{staticClass:"form-control",staticStyle:{width:"auto"},attrs:{name:"currency_code"},on:{change:function(e){return t.onCurrencyChange(e)}}},t._l(t.currencies,(function(e){return r("option",{key:e,domProps:{value:e,selected:e==t.$root.currency}},[t._v(t._s(e))])})),0):t._e(),r("a",{staticClass:"btn btn-primary btn-light ml-2",attrs:{href:"#",role:"button"}},[t._v("View Cart (0)")])])])])])},c=[],u=r("bc3a"),l=r.n(u),d={name:"Header",data:function(){return{currencies:[]}},mounted:function(){var t=this,e=this.$router,r="/currencyservice/currencies?api_key="+localStorage.getItem("CURRENCY_KEY"),a=localStorage.getItem("CURRENCY_KEY");l()({method:"GET",url:r,headers:{"x-api-key":a}}).then((function(e){t.currencies=e.data})).catch((function(t){console.log(t),e.push("config")}))},methods:{onCurrencyChange:function(t){this.$root.currency=t.target.value}},props:{}},p=d,m=r("2877"),h=Object(m["a"])(p,s,c,!1,null,"307fc262",null),f=h.exports,g=r("89a8"),v={name:"app",data:function(){return{products:g}},components:{Header:f}},y=v,b=(r("034f"),Object(m["a"])(y,o,i,!1,null,null,null)),C=b.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"jumbotron text-center mb-0",staticStyle:{"background-color":"light-gray"}},[r("div",{staticClass:"container"},[r("h1",{staticClass:"jumbotron-heading"},[t._v("\n                One-stop for Hipster Fashion & Style Online\n            ")]),r("p",{staticClass:"lead text-muted"},[t._v("\n                Tired of mainstream fashion ideas, popular trends and\n                societal norms? This line of lifestyle products will help\n                you catch up with the hipster trend and express your\n                personal style. Start shopping hip and vintage items now!\n            ")]),t.showHipsterKids?r("div",[r("a",{attrs:{href:"#"},on:{click:function(e){return t.goToKids()}}},[r("img",{attrs:{src:"img/kids-banner.png"}})])]):t._e()])]),r("div",{staticClass:"py-5 bg-light"},[r("div",{staticClass:"container"},[t.showHipsterKids?r("ul",{staticClass:"nav nav-tabs",attrs:{id:"hipster-tabs"}},[t._m(0),t._m(1)]):t._e(),r("div",{staticClass:"row"},[r("div",{staticClass:"tab-content",attrs:{id:"hipster-tab-content"}},[r("div",{staticClass:"tab-pane fade in show active",attrs:{id:"hipster-adult",role:"tabpanel","aria-labelledby":"hipster-adult-tab"}},[r("div",{staticClass:"row"},t._l(t.$root.showcaseProducts["adults"],(function(e){return r("div",{key:e.id,staticClass:"col-md-4"},[r("div",{staticClass:"card mb-4 box-shadow"},[r("a",{attrs:{href:"/product/"+e.id}},[r("img",{staticClass:"card-img-top",staticStyle:{width:"100%",height:"auto"},attrs:{alt:"",src:e.picture}})]),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("\n                                            "+t._s(e.name)+"\n                                        ")]),r("div",{staticClass:"d-flex justify-content-between align-items-center"},[t._m(2,!0),r("small",{staticClass:"text-muted"},[r("strong",[t._v("\n                                                "+t._s(t.$root.currency+" "+e.price)+" \n                                                ")])])])])])])})),0)]),t.showHipsterKids?r("div",{staticClass:"tab-pane fade",attrs:{id:"hipster-kids",role:"tabpanel","aria-labelledby":"hipster-kids-tab"}},[r("div",{staticClass:"row"},t._l(t.$root.showcaseProducts["kids"],(function(e){return r("div",{key:e.id,staticClass:"col-md-4"},[r("div",{staticClass:"card mb-4 box-shadow"},[r("a",{attrs:{href:"/product/"+e.id}},[r("img",{staticClass:"card-img-top",staticStyle:{width:"100%",height:"auto"},attrs:{alt:"",src:e.picture}})]),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("\n                                            "+t._s(e.name)+"\n                                        ")]),r("div",{staticClass:"d-flex justify-content-between align-items-center"},[t._m(3,!0),r("small",{staticClass:"text-muted"},[r("strong",[t._v("\n                                                "+t._s(t.$root.currency+" "+e.price)+" \n                                                ")])])])])])])})),0)]):t._e()])])])])])},w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"active"},[r("a",{staticClass:"nav-link active",attrs:{id:"hipster-adult-tab","data-toggle":"tab",href:"#hipster-adult","aria-controls":"hipster-adult"}},[t._v("Hipster Classic")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{staticClass:"nav-link",attrs:{id:"hipster-kids-tab","data-toggle":"tab",href:"#hipster-kids","aria-controls":"hipster-kids"}},[t._v("Hipster Kids (NEW!)")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"btn-group"},[r("a",{attrs:{href:"#"}},[r("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v("Buy")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"btn-group"},[r("a",{attrs:{href:"#"}},[r("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v("Buy")])])])}],P=r("768b"),E=(r("ac6a"),r("ffc1"),{name:"ProductShowcase",data:function(){return{products:[],showHipsterKids:!1}},mounted:function(){var t=this,e=this.$router,r="/productcatalogservice/products?api_key="+localStorage.getItem("PRODUCT_KEY");l()({method:"GET",url:r,headers:{"x-api-key":localStorage.getItem("PRODUCT_KEY")}}).then((function(e){t.$root.showcaseProducts=e.data;for(var r=0,a=Object.entries(t.$root.showcaseProducts);r<a.length;r++)for(var n=Object(P["a"])(a[r],2),o=(n[0],n[1]),i=0;i<o.length;i++){var s=o[i];"USD"==t.$root.currency?s.price=s.priceUsd:t.refreshPrice(s)}})).catch((function(t){console.log(t),e.push("/config")})),l()({method:"GET",url:"/parameters/SHOW_HIPSTER_KIDS"}).then((function(e){t.showHipsterKids="true"==e.data.result.toLowerCase(),console.log("SHOW_HIPSTER_KIDS: "+t.showHipsterKids)})).catch((function(t){console.log(t)}))},methods:{refreshPrice:function(t){var e="/currencyservice/convert?api_key="+localStorage.getItem("PRODUCT_KEY"),r=this;l.a.post(e,{priceUsd:t.priceUsd,toCurrency:this.$root.currency}).then((function(e){t.price=parseFloat(e.data.price),r.$forceUpdate()})).catch((function(t){console.log(t)}))},goToKids:function(){$('.nav-tabs a[href="#hipster-kids"]').tab("show")},goToClassic:function(){$('.nav-tabs a[href="#hipster-adults"]').tab("show")}},computed:{},props:{},watch:{"$root.currency":function(t){for(var e=0,r=Object.entries(this.$root.showcaseProducts);e<r.length;e++)for(var a=Object(P["a"])(r[e],2),n=(a[0],a[1]),o=0;o<n.length;o++){var i=n[o];"USD"==this.$root.currency?i.price=i.priceUsd:this.refreshPrice(i)}}}}),I=E,K=(r("5cc1"),Object(m["a"])(I,_,w,!1,null,"7fce013b",null)),S=K.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{attrs:{role:"main"}},[r("div",{staticClass:"py-5"},[r("div",{staticClass:"container bg-light py-3 px-lg-5 py-lg-5"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-5"},[r("img",{staticClass:"img-fluid border",staticStyle:{width:"100%"},attrs:{src:t.product.picture}})]),r("div",{staticClass:"col-12 col-lg-7"},[r("h2",[t._v(t._s(t.product.name))]),t.product.price?r("p",{staticClass:"text-muted"},[t._v("\n                            "+t._s(t.$root.currency+" "+t.product.price)+"\n                        ")]):t._e(),r("hr"),r("p"),r("h6",[t._v("Product Description:")]),t._v("\n                            "+t._s(t.product.description)+"\n                        "),r("p"),r("hr"),t._m(0)])]),r("br"),r("Recommendations")],1)])])},O=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"form-inline text-muted",attrs:{method:"POST",action:"/cart"}},[r("input",{attrs:{type:"hidden",name:"product_id",value:"1234"}}),r("div",{staticClass:"input-group"},[r("div",{staticClass:"input-group-prepend"},[r("label",{staticClass:"input-group-text",attrs:{for:"quantity"}},[t._v("Quantity")])]),r("select",{staticClass:"custom-select form-control form-control-lg",attrs:{name:"quantity",id:"quantity"}},[r("option",[t._v("1")]),r("option",[t._v("2")]),r("option",[t._v("3")]),r("option",[t._v("4")]),r("option",[t._v("5")]),r("option",[t._v("10")])]),r("button",{staticClass:"btn btn-info btn-lg ml-3",attrs:{type:"submit",disabled:""}},[t._v("Add to Cart")])])])}],k=(r("a481"),r("28a5"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.products.length>0?r("div",[r("h5",{staticClass:"text-muted"},[t._v("Products you might like")]),r("div",{staticClass:"row my-2 py-3"},t._l(t.products,(function(e){return r("div",{staticClass:"col-sm-6 col-md-4 col-lg-3"},[r("div",{staticClass:"card mb-3 box-shadow"},[r("a",{attrs:{href:"/product/"+e.id}},[r("img",{staticClass:"card-img-top border-bottom",staticStyle:{width:"100%",height:"auto"},attrs:{alt:"",src:e.picture}})]),r("div",{staticClass:"card-body text-center py-2"},[r("small",{staticClass:"card-title text-muted"},[t._v("\n                        "+t._s(e.name)+"\n                    ")])])])])})),0)]):t._e()}),T=[],j={name:"Recommendations",data:function(){return{products:[]}},mounted:function(){var t=this,e=(this.$router,window.location.pathname.split("/")),r="/recommendationservice/recommendations/"+e[e.length-1]+"?api_key="+localStorage.getItem("RECOMMENDATION_KEY");l()({method:"GET",url:r,headers:{"x-api-key":localStorage.getItem("RECOMMENDATION_KEY")}}).then((function(e){var r=e.data;if(void 0!=r&&r.length>0)for(var a=0;a<r.length;a++){var n="/productcatalogservice/product/"+r[a]+"?api_key="+localStorage.getItem("PRODUCT_KEY");l()({method:"GET",url:n,headers:{"x-api-key":localStorage.getItem("PRODUCT_KEY")}}).then((function(e){t.products.push(e.data)})).catch((function(t){console.log(t)}))}})).catch((function(t){console.log(t)}))},props:{}},N=j,U=Object(m["a"])(N,k,T,!1,null,"349d94b4",null),R=U.exports,Y={name:"Product",data:function(){return{product:{}}},mounted:function(){var t=this,e=this.$router,r=window.location.pathname.split("/"),a="/productcatalogservice/product/"+r[r.length-1]+"?api_key="+localStorage.getItem("PRODUCT_KEY");l()({method:"GET",url:a,headers:{"x-api-key":localStorage.getItem("PRODUCT_KEY")}}).then((function(e){t.product=e.data,t.refreshPrice(t.product)})).catch((function(t){console.log(t),e.replace("/config")}))},methods:{refreshPrice:function(t){var e="/currencyservice/convert?api_key="+localStorage.getItem("PRODUCT_KEY"),r=this;l.a.post(e,{priceUsd:t.priceUsd,toCurrency:this.$root.currency}).then((function(e){t.price=parseFloat(e.data.price),r.$forceUpdate()})).catch((function(t){console.log(t)}))}},props:{},watch:{"$root.currency":function(t){"USD"==this.$root.currency?this.product.price=this.product.priceUsd:this.refreshPrice(this.product)}},components:{Recommendations:R}},H=Y,D=Object(m["a"])(H,x,O,!1,null,"a4a43868",null),A=D.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"config-div"},[r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\n        Oops!  We have a slight issue with our configuration...\n    ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.authorized&&!t.authorizing,expression:"!authorized && !authorizing"}]},[t._m(0),r("button",{staticClass:"btn btn-info config-div",attrs:{type:"button"},on:{click:t.authorize}},[t._v("Are you the Hipster Admin? Click here to update the config...")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.authorizing,expression:"authorizing"}],staticStyle:{"text-align":"left",margin:"30px"}},[t._m(1),r("button",{staticClass:"btn btn-secondary config-button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")]),r("button",{staticClass:"btn btn-primary config-button",attrs:{type:"button",id:"adminButton"},on:{click:t.checkAuthorize}},[t._v("Submit")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.authorized,expression:"authorized"}],staticStyle:{"text-align":"left",margin:"30px"}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"adminInput"}},[t._v("Currency API Key:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$root.currencyKey,expression:"$root.currencyKey"}],staticClass:"form-control",attrs:{type:"text",id:"currencyInput",placeholder:"Enter Currency API Key"},domProps:{value:t.$root.currencyKey},on:{input:function(e){e.target.composing||t.$set(t.$root,"currencyKey",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"productInput"}},[t._v("Product Catalog API Key:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$root.productKey,expression:"$root.productKey"}],staticClass:"form-control",attrs:{type:"text",id:"productInput",placeholder:"Enter Product Catalog API Key"},domProps:{value:t.$root.productKey},on:{input:function(e){e.target.composing||t.$set(t.$root,"productKey",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"recommendationInput"}},[t._v("Recommendation API Key:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$root.recommendationKey,expression:"$root.recommendationKey"}],staticClass:"form-control",attrs:{type:"text",id:"recommendationInput",placeholder:"Enter Recommendation API Key"},domProps:{value:t.$root.recommendationKey},on:{input:function(e){e.target.composing||t.$set(t.$root,"recommendationKey",e.target.value)}}})]),r("button",{staticClass:"btn btn-secondary config-button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")]),r("button",{staticClass:"btn btn-primary config-button",attrs:{type:"button"},on:{click:t.save}},[t._v("Save")])]),r("div",{staticClass:"config-div"})])},z=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{staticStyle:{opacity:".5",margin:"60px"},attrs:{width:"300px",src:"img/hipster-admin.jpg"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"adminInput"}},[t._v("Admin Password:")]),r("input",{staticClass:"form-control",attrs:{type:"password",id:"adminInput","aria-describedby":"adminHelp",placeholder:"Enter Admin Password"}}),r("small",{staticClass:"form-text text-muted",attrs:{id:"adminHelp"}},[t._v("(Hint: it's 'HipsterAdmin')")])])}],B={name:"Config",data:function(){return{authorized:!1,authorizing:!1}},methods:{authorize:function(t){this.authorizing=!0,setTimeout((function(){document.getElementById("adminInput").focus()}),100)},checkAuthorize:function(t){"HipsterAdmin"==document.getElementById("adminInput").value?(this.cancel(),this.authorized=!0):this.cancel()},cancel:function(t){document.getElementById("adminInput").value="",this.authorized=!1,this.authorizing=!1},save:function(t){localStorage.setItem("CURRENCY_KEY",document.getElementById("currencyInput").value),localStorage.setItem("PRODUCT_KEY",document.getElementById("productInput").value),localStorage.setItem("RECOMMENDATION_KEY",document.getElementById("recommendationInput").value),window.top.location.href="/"}},mounted:function(){var t=document.getElementById("adminInput");t.addEventListener("keyup",(function(t){13===t.keyCode&&(t.preventDefault(),document.getElementById("adminButton").click())}))},props:{}},V=B,G=(r("3ce0"),Object(m["a"])(V,M,z,!1,null,"741a81dc",null)),J=G.exports;a["a"].config.productionTip=!1;var F=[{path:"/",component:S},{path:"/product/:id",component:A},{path:"/config",component:J}],L=new n["a"]({mode:"history",routes:F});a["a"].use(n["a"]),new a["a"]({router:L,data:{currency:"USD",showcaseProducts:[],currencyKey:"",productKey:"",recommendationKey:""},mounted:function(){this.currencyKey=localStorage.getItem("CURRENCY_KEY"),this.productKey=localStorage.getItem("PRODUCT_KEY"),this.recommendationKey=localStorage.getItem("RECOMMENDATION_KEY")},render:function(t){return t(C)}}).$mount("#app")},"5cc1":function(t,e,r){"use strict";var a=r("8420"),n=r.n(a);n.a},"64a9":function(t,e,r){},8420:function(t,e,r){},"89a8":function(t){t.exports=JSON.parse('{"default":[{"Id":"OLJCESPC7Z","Name":"Vintage Typewriter","Picture":"img/products/typewriter.jpg","Price":67.98},{"Id":"66VCHSJNUP","Name":"Vintage Camera Lens","Picture":"img/products/camera-lens.jpg","Price":12.48},{"Id":"1YMWWN1N4O","Name":"Home Barista Kit","Picture":"img/products/barista-kit.jpg","Price":123.99},{"Id":"L9ECAV7KIM","Name":"Terrarium","Picture":"img/products/terrarium.jpg","Price":34.44},{"Id":"2ZYFJ3GM2N","Name":"Film Camera","Picture":"img/products/film-camera.jpg","Price":2244.99},{"Id":"0PUK6V6EV0","Name":"Vintage Record Player","Picture":"img/products/record-player.jpg","Price":65.5},{"Id":"LS4PSXUNUM","Name":"Metal Camping Mug","Picture":"img/products/camp-mug.jpg","Price":24.33},{"Id":"9SIQT8TOJO","Name":"City Bike","Picture":"img/products/city-bike.jpg","Price":789.5},{"Id":"6E92ZMYYFZ","Name":"Air Plant","Picture":"img/products/air-plant.jpg","Price":789.5}],"baby":[]}')}});
//# sourceMappingURL=app.dcb94adf.js.map