(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,n){e.exports=n(276)},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){},274:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(152),i=n.n(o),c=(n(163),n(11)),u=n(20),s=n(14),l=n(13),p=n(15),d=(n(164),n(18)),m=n(55),g=(n(165),"".concat("/cloud-sample-app-preview-react")),f="".concat("/","callback"),h=("".concat("/","logout"),"".concat("/",":projectId(").concat("[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}",")")),v="".concat(h,"/products"),b="".concat(v,"/:productId"),j=("".concat("/","error"),n(98)),w=n(153),y={domain:"kentico.auth0.com",clientID:"kk5POR5ME2uYwFQWovQ32n61Z5MwDWAH",audience:"https://app.kenticocloud.com/",redirectUri:"https://kentico.github.io/cloud-sample-app-preview-react/callback",responseType:"token id_token",scope:"openid"},P={returnTo:"https://kentico.github.io/cloud-sample-app-preview-react/logout"},A=function e(){var t=this;Object(c.a)(this,e),this.webAuth=new w.a.WebAuth(y),this.login=function(){t.webAuth.authorize()},this.silentLogin=function(){localStorage.setItem("redirectUri",window.location.pathname),t.webAuth.authorize({prompt:"none"})},this.logout=function(){t.webAuth.logout(P)},this.getRedirectUri=function(){var e=localStorage.getItem("redirectUri");localStorage.removeItem("redirectUri");var t=e||"/";return t.startsWith("/cloud-sample-app-preview-react")?t.slice(31):t},this.handleAuthentication=function(e,n){t.webAuth.parseHash(function(a,r){if(r&&r.accessToken&&r.idToken){var o={accessToken:r.accessToken,expiresAt:1e3*(r.expiresIn||0)+(new Date).getTime()},i=t.getRedirectUri();e(o,i)}else a&&(n(),t.login())})},this.isAuthenticated=function(e){return(new Date).getTime()<e}},E=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Loading..."))},I={accessToken:"",expiresAt:0,isLoggedIn:!1,logout:function(){}},O=r.a.createContext(I),L=O.Provider,_=O.Consumer,S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).webAuth=new A,n.isAuthUrlHash=function(e){return/access_token|id_token|error/.test(e)},n.handleAuthCallback=function(e){var t=e.location;n.isAuthUrlHash(t.hash)&&n.webAuth.handleAuthentication(n.onSuccessLogin,n.onFailedLogin)},n.onSuccessLogin=function(e,t){n.setState({accessToken:e.accessToken,expiresAt:e.expiresAt,isLoggedIn:!0}),n.props.history.push(t)},n.onFailedLogin=function(){console.warn("on failed login")},n.state={accessToken:"",isLoggedIn:!1,expiresAt:0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.webAuth.silentLogin;this.isAuthUrlHash(window.location.hash)||e()}},{key:"render",value:function(){var e=this,t=Object(j.a)({},this.state,{logout:this.webAuth.logout}),n=this.state.isLoggedIn;return r.a.createElement(d.d,null,n?r.a.createElement(d.a,{from:f,to:"/"}):r.a.createElement(d.b,{path:f,render:function(t){return e.handleAuthCallback(t),r.a.createElement(E,null)}}),n&&r.a.createElement(d.b,{render:function(){return r.a.createElement(L,{value:t},e.props.children)}}))}}]),t}(r.a.Component),k=Object(d.g)(S),x=n(156);function T(e,t){return Object(x.compile)(e)(t)}var C,K=n(34),N=n.n(K),D=n(61);!function(e){e.NotLoaded="notLoaded",e.InProgress="inProgress",e.Finished="finished",e.Failed="failed"}(C||(C={}));var F,U=n(38),W=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).body=void 0,n.title=void 0,n.url=void 0,n}return Object(p.a)(t,e),t}(U.ContentItem),M=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this,{propertyResolver:function(e){return"product_list"===e?"productList":e}}))).productList=void 0,e.title=void 0,e.url=void 0,e}return Object(p.a)(t,e),t}(U.ContentItem),H=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this,{propertyResolver:function(e){return"taxonomy___categorizing_target_audience"===e?"taxonomyCategorizingTargetAudience":e}}))).description=void 0,e.name=void 0,e.image=void 0,e.taxonomyCategorizingTargetAudience=void 0,e}return Object(p.a)(t,e),t}(U.ContentItem),R=null,z=function(e,t){R||(R=new U.DeliveryClient({enablePreviewMode:!0,enableAdvancedLogging:!0,previewApiKey:t,projectId:e,basePreviewUrl:"https://preview-deliver.kenticocloud.com",typeResolvers:[new U.TypeResolver("article_example_content_type",function(){return new W}),new U.TypeResolver("landing_page_example_content_type",function(){return new M}),new U.TypeResolver("product_example_content_type",function(){return new H})]}))},q=function(e,t){if(z(e,t),!R)throw"Delivery client is not initialized yet";return R.items().type("article_example_content_type").toPromise().then(function(e){return e.items}).catch(function(e){return console.log(e),new Array})},G=function(e,t){if(z(e,t),!R)throw"Delivery client is not initialized yet";return R.items().type("landing_page_example_content_type").toPromise().then(function(e){return e.items}).catch(function(e){return console.log(e),new Array})},J=n(114),B={dataLoadingStatus:C.NotLoaded,previewApiKey:"",previewApiKeyLoadingStatus:C.NotLoaded,projectId:"",projectIdLoadingStatus:C.NotLoaded,pages:new Array,products:new Array,loadWelcomePage:function(){},loadProducts:function(){},setProjectId:function(){},setLoadingStatus:function(){},setProjectIdLoadingStatus:function(){},setPreviewApiKey:function(){},setPreviewApiKeyLoadingStatus:function(){}},Q=r.a.createContext(B),X=Q.Provider,Y=Q.Consumer,Z=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={dataLoadingStatus:C.NotLoaded,previewApiKey:"",previewApiKeyLoadingStatus:C.NotLoaded,projectId:"",projectIdLoadingStatus:C.NotLoaded,pages:new Array,products:new Array},n._dataPollingTimer=null,n._setDataPolling=function(e){null!==n._dataPollingTimer&&Object(J.clearInterval)(n._dataPollingTimer),n._dataPollingTimer=Object(J.setInterval)(e,3e3)},n.setProjectId=function(e){n.setState({projectId:e})},n.setLoadingStatus=function(e){n.setState({dataLoadingStatus:e})},n.setProjectIdLoadingStatus=function(e){n.setState({projectIdLoadingStatus:e})},n.setPreviewApiKey=function(e){n.setState({previewApiKey:e})},n.setPreviewApiKeyLoadingStatus=function(e){n.setState({previewApiKeyLoadingStatus:e})},n._loadWelcomePageData=Object(D.a)(N.a.mark(function e(){var t;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(n.state.projectId,n.state.previewApiKey);case 2:t=e.sent,n.setState({pages:t});case 4:case"end":return e.stop()}},e)})),n.loadWelcomePage=Object(D.a)(N.a.mark(function e(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n._setDataPolling(n._loadWelcomePageData),e.next=3,n._loadWelcomePageData();case 3:case"end":return e.stop()}},e)})),n._loadProductsData=Object(D.a)(N.a.mark(function e(){var t;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(n.state.projectId,n.state.previewApiKey);case 2:(t=e.sent)&&t[0]&&n.setState({products:t[0].productList});case 4:case"end":return e.stop()}},e)})),n.loadProducts=Object(D.a)(N.a.mark(function e(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n._setDataPolling(n._loadProductsData),e.next=3,n._loadProductsData();case 3:case"end":return e.stop()}},e)})),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.products,n=e.pages,a=e.projectId,o=e.dataLoadingStatus,i=e.projectIdLoadingStatus,c={dataLoadingStatus:o,previewApiKey:e.previewApiKey,previewApiKeyLoadingStatus:e.previewApiKeyLoadingStatus,projectId:a,projectIdLoadingStatus:i,pages:n,products:t,loadWelcomePage:this.loadWelcomePage,loadProducts:this.loadProducts,setProjectId:this.setProjectId,setLoadingStatus:this.setLoadingStatus,setProjectIdLoadingStatus:this.setProjectIdLoadingStatus,setPreviewApiKey:this.setPreviewApiKey,setPreviewApiKeyLoadingStatus:this.setPreviewApiKeyLoadingStatus};return r.a.createElement(X,{value:c},this.props.children)}}]),t}(r.a.PureComponent),$=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(Y,null,function(e){return r.a.createElement(_,null,function(t){return r.a.createElement("div",{className:"navigation-bar"},r.a.createElement("nav",{className:"navigation-bar__app-menu"},r.a.createElement(m.b,{className:"navigation-bar__app-menu-button",to:T(h,{projectId:e.projectId})},"Welcome"),r.a.createElement(m.b,{className:"navigation-bar__app-menu-button",to:T(v,{projectId:e.projectId})},"Products")),r.a.createElement("div",{className:"navigation-bar__user-menu"},r.a.createElement("button",{className:"navigation-bar__user-menu-button",onClick:t.logout},"Sign Out")))})})}}]),t}(r.a.PureComponent),V=(n(272),n(273),function(e){var t=e.title,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app-title"},t),r.a.createElement("div",{className:"app-content"},n))}),ee=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.init()}},{key:"render",value:function(){var e=this.props.product;if(e){var t=e.image.assets[0]?e.image.assets[0].url:"";return r.a.createElement(V,{title:e.name.value},t&&r.a.createElement("img",{className:"product-details__image",alt:e.name.value,src:e.image.assets[0]?e.image.assets[0].url:""}),r.a.createElement("div",{className:"product-details__description",dangerouslySetInnerHTML:{__html:e.description.getHtml()}}))}return null}}]),t}(r.a.PureComponent),te=function(e){var t=e.match;return r.a.createElement(Y,null,function(e){return r.a.createElement(ee,{product:e.products.filter(function(e){return e.system.codename===t.params.productId})[0],init:e.loadProducts})})},ne=(n(274),n(275),"".concat("https://kentico.github.io").concat("/cloud-sample-app-preview-react","/placeholder-images.png")),ae=function(e){var t=e.projectId,n=e.productId,a=e.pictureUrl,o=e.title,i=a||ne;return r.a.createElement("div",{className:"product-card"},r.a.createElement(m.b,{to:T(b,{projectId:t,productId:n})},r.a.createElement("img",{className:"product-card__thumbnail",src:i,alt:"product thumbnail"}),o))},re=n(157),oe=n.n(re),ie=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.init()}},{key:"render",value:function(){var e=this.props,t=e.projectId,n=e.products,a=1===n.length;return r.a.createElement(V,{title:"Products"},r.a.createElement("div",{className:oe()("products-page",{"products-page--is-single-product":a})},n.map(function(e){return r.a.createElement(ae,{title:e.name.value,pictureUrl:e.image.assets[0]?e.image.assets[0].url:"",productId:e.system.codename,projectId:t,key:e.system.id})})))}}]),t}(r.a.PureComponent),ce=function(){return r.a.createElement(Y,null,function(e){return r.a.createElement(ie,{init:e.loadProducts,projectId:e.projectId,products:e.products})})},ue=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.init()}},{key:"render",value:function(){var e=this.props.pages[0];return e?r.a.createElement(V,{title:e.title.value},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.body.getHtml()}})):r.a.createElement("p",null,"Missing data for Welcome page")}}]),t}(r.a.PureComponent),se=function(){return r.a.createElement(Y,null,function(e){return r.a.createElement(ue,{pages:e.pages,init:e.loadWelcomePage})})},le=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(d.b,{path:h,component:$}),r.a.createElement("div",{className:"app__content-wrapper"},r.a.createElement(d.d,null,r.a.createElement(d.b,{path:h,exact:!0,component:se}),r.a.createElement(d.b,{path:b,component:te}),r.a.createElement(d.b,{path:v,component:ce}),r.a.createElement(d.b,{render:function(){return r.a.createElement("p",null,"Ooops, missing page!")}}))))}}]),t}(r.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));!function(e){e.MissingProjectId="missingProjectId",e.UnableToGetPreviewApiKey="unableToGetPreviewApiKey"}(F||(F={}));var pe="https://kentico.github.io/cloud-sample-app-preview-react/<your_project_id>",de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Didn't you forget to provide Project Id in the url? E.g. ",r.a.createElement("i",null,pe)))},me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"There was problem retrieving Preview Api Key."),r.a.createElement("p",null,"Did you provide correct Project Id? E.g. ",r.a.createElement("i",null,pe)))},ge=function(e){var t=e.type;return r.a.createElement(_,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navigation-bar"},r.a.createElement("nav",{className:"navigation-bar__app-menu"}),r.a.createElement("div",{className:"navigation-bar__user-menu"},r.a.createElement("button",{className:"navigation-bar__user-menu-button",onClick:e.logout},"Sign Out"))),r.a.createElement("p",null,"Ooops, there was some error!"),t===F.MissingProjectId&&r.a.createElement(de,null),t===F.UnableToGetPreviewApiKey&&r.a.createElement(me,null))})};function fe(e,t){t&&Object.keys(t).forEach(function(n){var a=t[n];n&&a&&e.setRequestHeader(n,a)})}function he(){return new XMLHttpRequest}function ve(e){return e.responseText?JSON.parse(e.responseText):null}var be=function(e){function t(t,n,a,r){var o=function(e,t){if(!t)return e;var n,a=t.authToken?(n=t.authToken,{Authorization:"Bearer ".concat(n)}):{};return t.appInstanceId&&(a["X-AppInstanceId"]=t.appInstanceId),Object(j.a)({},e,a)}({"Content-type":"application/json"},r),i=a?function(e){if(e&&"object"===typeof e);else if("string"===typeof e)return JSON.stringify(e);return e}(a):null;return e.request(t,n,i,o)}return{post:function(e,n,a){return t("POST",e,n,a).then((r=[200,201],function(e){if(r.indexOf(e.status)>=0)return e;throw e})).then(ve);var r}}}(function(){return e=!0,{request:function(t,n,a,r){return new Promise(function(o){var i=he();i.open(t,n,!0),i.withCredentials=e,fe(i,r),i.onreadystatechange=function(){4===i.readyState&&o(i)},i.send(a)})},requestFile:function(t,n,a,r){return new Promise(function(o){var i=he();i.open(t,n,!0),i.responseType="blob",i.withCredentials=e,fe(i,r),i.onreadystatechange=function(){4===i.readyState&&o(i)},i.send(a)})},upload:function(e,t,n,a){return new Promise(function(r){var o=he();o.open("POST",e,!0),fe(o,a),o.onreadystatechange=function(){4===o.readyState&&r(o)},o.upload.addEventListener("progress",n),o.send(t)})}};var e}()),je=function(e,t){var n={authToken:e},a="".concat("https://app.kenticocloud.com","/api/project-management/").concat(t,"/keys/preview-delivery-api-primary");return be.post(a,null,n)},we=function(){if(console.log("get project id from url (".concat(window.location,")")),window.location){var e=g+h+"*";console.log("route to match:",e);var t=Object(d.f)(window.location.pathname,e);if(t)return console.log("got projectId from url: ",t.params.projectId),t.params.projectId;console.log("no projectId in url")}return null},ye=function(e){var t=e.authContext.accessToken,n=e.appContext.projectId;return function(){return je(t,n).then(function(e){return e.api_key}).catch(function(){return null})}},Pe=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.loadApplicationData()}},{key:"render",value:function(){var e=this.props.appContext,t=e.projectIdLoadingStatus,n=e.previewApiKeyLoadingStatus,a=e.dataLoadingStatus;return t===C.Failed?r.a.createElement(ge,{type:F.MissingProjectId}):n===C.Failed?r.a.createElement(ge,{type:F.UnableToGetPreviewApiKey}):a===C.Finished?this.props.children:r.a.createElement(E,null)}}]),t}(r.a.PureComponent),Ae=Object(d.g)(function(e){return r.a.createElement(Y,null,function(t){return r.a.createElement(_,null,function(n){var a,o=(a={appContext:t,authContext:n,fetchData:function(){return"have some data"},loadPreviewApikey:ye({authContext:n,appContext:t,getPreviewApiKey:je})},Object(D.a)(N.a.mark(function e(){var t,n,r,o,i;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.appContext,n=a.loadPreviewApikey,r=a.fetchData,t.projectIdLoadingStatus===C.NotLoaded&&((o=we())?(t.setProjectId(o),t.setProjectIdLoadingStatus(C.Finished)):t.setProjectIdLoadingStatus(C.Failed)),t.projectIdLoadingStatus!==C.Finished||t.previewApiKeyLoadingStatus!==C.NotLoaded){e.next=8;break}return t.setPreviewApiKeyLoadingStatus(C.InProgress),e.next=6,n();case 6:(i=e.sent)?(t.setPreviewApiKey(i),t.setPreviewApiKeyLoadingStatus(C.Finished)):t.setPreviewApiKeyLoadingStatus(C.Failed);case 8:t.previewApiKeyLoadingStatus===C.Finished&&t.dataLoadingStatus===C.NotLoaded&&(t.setLoadingStatus(C.InProgress),r(),t.setLoadingStatus(C.Finished));case 9:case"end":return e.stop()}},e)})));return r.a.createElement(Pe,Object.assign({loadApplicationData:o,authContext:n,appContext:t},e))})})});i.a.render(r.a.createElement(m.a,{basename:g},r.a.createElement(k,null,r.a.createElement(Z,null,r.a.createElement(Ae,null,r.a.createElement(le,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[158,1,2]]]);
//# sourceMappingURL=main.4fdc3917.chunk.js.map