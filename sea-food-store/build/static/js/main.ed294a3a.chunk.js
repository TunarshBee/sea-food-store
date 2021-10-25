(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{19:function(e,a,t){e.exports=t(36)},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(11),i=t(38),l=t(39),c=t(40),o=t(3),u=t(4),m=t(5),h=t(6);function p(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function d(e){return e[Math.floor(Math.random()*e.length)]}function f(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(d(e),"-").concat(d(e),"-").concat(d(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var v=function(e){Object(h.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=a.call.apply(a,[this].concat(s))).myInput=n.a.createRef(),e.goToStore=function(a){a.preventDefault();var t=e.myInput.current.value;e.props.history.push("/store/".concat(t))},e}return Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},n.a.createElement("h2",null,"Please Enter A Store"),n.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name",defaultValue:f()}),n.a.createElement("button",{type:"submit"},"Visit Store \u2192"))}}]),t}(n.a.Component),g=t(9),b=function(e){var a=e.tagline;return n.a.createElement("header",{className:"top"},n.a.createElement("h1",null,"Bids",n.a.createElement("span",{className:"ofThe"},n.a.createElement("span",{className:"of"},"Of"),n.a.createElement("span",{className:"the"},"The")),"Week"),n.a.createElement("h3",{className:"tagline"},n.a.createElement("span",null,a)))},y=t(10),E=function(e){Object(h.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=a.call.apply(a,[this].concat(s))).renderOrder=function(a){var t=e.props.fishes[a],r=e.props.order[a],s=t&&"available"===t.status,i={classNames:"order",key:a,timeout:{enter:500,exit:500}};return t?s?n.a.createElement(y.CSSTransition,i,n.a.createElement("li",{key:a},n.a.createElement("span",null,n.a.createElement(y.TransitionGroup,{component:"span",className:"count"},n.a.createElement(y.CSSTransition,{classNames:"count",key:r,timeout:{enter:500,exit:500}},n.a.createElement("span",null,r))),"lbs ",t.name,p(r*t.price)),n.a.createElement("button",{onClick:function(){return e.props.removeFromOrder(a)}},"\xd7"))):n.a.createElement(y.CSSTransition,i,n.a.createElement("li",{key:a},"Sorry ",t?t.name:"fish"," is no longer available")):null},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=Object.keys(this.props.order),t=a.reduce((function(a,t){var r=e.props.fishes[t],n=e.props.order[t];return r&&"available"===r.status?a+n*r.price:a}),0);return n.a.createElement("div",{className:"order-wrap"},n.a.createElement("h2",null,"Order"),n.a.createElement(y.TransitionGroup,{component:"ul",className:"order"},a.map(this.renderOrder)),n.a.createElement("div",{className:"total"},"Total:",n.a.createElement("strong",null,p(t))))}}]),t}(n.a.Component),O=function(e){Object(h.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=a.call.apply(a,[this].concat(s))).nameRef=n.a.createRef(),e.priceRef=n.a.createRef(),e.statusRef=n.a.createRef(),e.descRef=n.a.createRef(),e.imageRef=n.a.createRef(),e.createFish=function(a){a.preventDefault();var t={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addFish(t),a.currentTarget.reset()},e}return Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish},n.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),n.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),n.a.createElement("select",{name:"status",ref:this.statusRef},n.a.createElement("option",{value:"available"},"Fresh!"),n.a.createElement("option",{value:"unavailable"},"Sold Out!")),n.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),n.a.createElement("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),n.a.createElement("button",{type:"submit"},"+ Add Fish"))}}]),t}(n.a.Component),j=function(e){Object(h.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).handleChange=function(a){console.log(a.currentTarget.value);var t=Object(g.a)({},e.props.fish,{[a.currentTarget.name]:a.currentTarget.value});e.props.updateFish(e.props.index,t)},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"fish-edit"},n.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.fish.name}),n.a.createElement("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.fish.price}),n.a.createElement("select",{name:"status",onChange:this.handleChange,value:this.props.fish.status},n.a.createElement("option",{value:"available"},"Fresh!"),n.a.createElement("option",{value:"unavailable"},"Sold Out!")),n.a.createElement("textarea",{name:"desc",onChange:this.handleChange,value:this.props.fish.desc}),n.a.createElement("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.fish.image}),n.a.createElement("button",{onClick:function(){return e.props.deleteFish(e.props.index)}},"Delete Fish"))}}]),t}(n.a.Component),k=function(e){Object(h.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"inventory"},n.a.createElement("h2",null,"Inventory"),Object.keys(this.props.fishes).map((function(a){return n.a.createElement(j,{key:a,index:a,fish:e.props.fishes[a],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish})})),n.a.createElement(O,{addFish:this.props.addFish}),n.a.createElement("button",{onClick:this.props.loadSampleFishes},"Load Sample Fishes"))}}]),t}(n.a.Component),F={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"available"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"unavailable"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},S=function(e){Object(h.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=this.props.details,t=a.image,r=a.name,s=a.price,i=a.desc,l="available"===a.status;return n.a.createElement("li",{className:"menu-fish"},n.a.createElement("img",{src:t,alt:r}),n.a.createElement("h3",{className:"fish-name"},r,n.a.createElement("span",{className:"price"},p(s))),n.a.createElement("p",null,i),n.a.createElement("button",{disabled:!l,onClick:function(){return e.props.addToOrder(e.props.index)}},l?"Add To Order":"Sold Out!"))}}]),t}(n.a.Component),w=function(e){Object(h.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={fishes:{},order:{}},e.addFish=function(a){var t=Object(g.a)({},e.state.fishes);t["fish".concat(Date.now())]=a,e.setState({fishes:t})},e.updateFish=function(a,t){var r=Object(g.a)({},e.state.fishes);r[a]=t,e.setState({fishes:r})},e.deleteFish=function(a){var t=Object(g.a)({},e.state.fishes);t[a]=null,e.setState({fishes:t})},e.loadSampleFishes=function(a){a.preventDefault(),e.setState({fishes:F}),console.log("loading sample fishes \n ".concat(a))},e.addToOrder=function(a){var t=Object(g.a)({},e.state.order);t[a]=t[a]+1||1,e.setState({order:t})},e.removeFromOrder=function(a){var t=Object(g.a)({},e.state.order);delete t[a],e.setState({order:t})},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"catch-of-the-day"},n.a.createElement("div",{className:"menu"},n.a.createElement(b,{tagline:"Fresh Sea-food Market"}),n.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map((function(a){return n.a.createElement(S,{key:a,index:a,details:e.state.fishes[a],addToOrder:e.addToOrder})})))),n.a.createElement(E,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),n.a.createElement(k,{addFish:this.addFish,updateFish:this.updateFish,deleteFish:this.deleteFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,storeId:this.props.match.params.storeId}))}}]),t}(n.a.Component),C=function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"Not Found!?!!!!1111"))},N=function(){return n.a.createElement(i.a,null,n.a.createElement(l.a,null,n.a.createElement(c.a,{exact:!0,path:"/",component:v}),n.a.createElement(c.a,{path:"/store/:storeId",component:w}),n.a.createElement(c.a,{component:C})))};t(35);Object(s.render)(n.a.createElement(N,null),document.querySelector("#main"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ed294a3a.chunk.js.map