var navToggle = document.querySelector('.page-header__toggle');
var navMain = document.querySelector('.main-nav');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.add('page-header__toggle--opened')
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--opened');
  }
});

var tns=function(){Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var t=window,hi=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,pi=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function mi(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function gi(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function yi(t,e,n){return n&&localStorage.setItem(t,e),e}function xi(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function bi(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function wi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Ci(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Ai(t){return("insertRule"in t?t.cssRules:t.rules).length}function Ti(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Ei=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Mi=i?function(t,e){Ei(t,e)||t.classList.add(e)}:function(t,e){Ei(t,e)||(t.className+=" "+e)},ki=i?function(t,e){Ei(t,e)&&t.classList.remove(e)}:function(t,e){Ei(t,e)&&(t.className=t.className.replace(e,""))};function Ni(t,e){return t.hasAttribute(e)}function r(t){return void 0!==t.item}function Oi(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Di(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Bi(t){t.style.cssText=""}function Li(t){Ni(t,"hidden")||Oi(t,{hidden:""})}function Si(t){Ni(t,"hidden")&&Di(t,"hidden")}function Ii(t){return 0<t.offsetWidth&&0<t.offsetHeight}function Pi(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function Wi(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var s=!!a&&{passive:!0};function Ri(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&s;t.addEventListener(n,e[n],i)}}function Hi(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&s;t.removeEventListener(n,e[n],i)}}function zi(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}var qi=function(C){C=mi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,fixedWidthViewportWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},C||{});var k=document,A=window,s=13,u=32,l=33,c=34,f=35,d=36,v=37,h=38,p=39,m=40,e={},n=C.useLocalStorage;if(n){var t=navigator.userAgent;try{(e=localStorage).tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t}catch(t){n=!1}n&&!localStorage&&(n=!(e={}))}for(var i,a,r,o,g,y,x,T=e.tC?gi(e.tC):yi("tC",function(){var t=document,e=xi(),n=bi(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],u=0;u<3;u++)if(r=s[u],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?wi(e,n):i.remove(),a}(),n),E=e.tPL?gi(e.tPL):yi("tPL",function(){var t,e=document,n=xi(),i=bi(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?wi(n,i):a.remove(),t}(),n),N=e.tMQ?gi(e.tMQ):yi("tMQ",(a=document,r=xi(),o=bi(r),g=a.createElement("div"),y=a.createElement("style"),x="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",y.type="text/css",g.className="tns-mq-test",r.appendChild(y),r.appendChild(g),y.styleSheet?y.styleSheet.cssText=x:y.appendChild(a.createTextNode(x)),i=window.getComputedStyle?window.getComputedStyle(g).position:g.currentStyle.position,r.fake?wi(r,o):g.remove(),"absolute"===i),n),b=e.tTf?gi(e.tTf):yi("tTf",Pi("transform"),n),w=e.t3D?gi(e.t3D):yi("t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=xi(),a=bi(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?wi(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(b),n),M=e.tTDu?gi(e.tTDu):yi("tTDu",Pi("transitionDuration"),n),O=e.tTDe?gi(e.tTDe):yi("tTDe",Pi("transitionDelay"),n),D=e.tADu?gi(e.tADu):yi("tADu",Pi("animationDuration"),n),B=e.tADe?gi(e.tADe):yi("tADe",Pi("animationDelay"),n),L=e.tTE?gi(e.tTE):yi("tTE",Wi(M,"Transition"),n),S=e.tAE?gi(e.tAE):yi("tAE",Wi(D,"Animation"),n),I=A.console&&"function"==typeof A.console.warn,P=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],W=P.length;W--;){var R=P[W];if("string"==typeof C[R]){var H=k.querySelector(C[R]);if(!H||!H.nodeName)return void(I&&console.warn("Can't find",C[R]));C[R]=H}}if(!(C.container.children.length<1)){if(C.responsive){var z={},q=C.responsive;for(var j in q){var F=q[j];z[j]="number"==typeof F?{items:F}:F}C.responsive=z,z=null,0 in C.responsive&&delete(C=mi(C,C.responsive[0])).responsive[0]}var V="carousel"===C.mode;if(!V){C.axis="horizontal",C.edgePadding=!1;var Q="tns-fadeIn",X="tns-fadeOut",Y=!1,K=C.animateNormal||"tns-normal";L&&S&&(Q=C.animateIn||Q,X=C.animateOut||X,Y=C.animateDelay||Y)}var U,G,J="horizontal"===C.axis,_=k.createElement("div"),Z=k.createElement("div"),$=C.container,tt=$.parentNode,et=$.children,nt=et.length,it=C.responsive,at=[],rt=!1,ot=0,st=un();if(C.fixedWidth)var ut=ln(tt);if(it){(rt=Object.keys(it).map(function(t){return parseInt(t)}).sort(function(t,e){return t-e})).forEach(function(t){at=at.concat(Object.keys(it[t]))});var lt=[];at.forEach(function(t){lt.indexOf(t)<0&&lt.push(t)}),at=lt,wn()}var ct,ft,dt,vt,ht,pt,mt,gt,yt=fn("items"),xt="page"===fn("slideBy")?yt:fn("slideBy"),bt=C.nested,wt=fn("gutter"),Ct=fn("edgePadding"),At=fn("fixedWidth"),Tt=C.fixedWidthViewportWidth,Et=fn("arrowKeys"),Mt=fn("speed"),kt=C.rewind,Nt=!kt&&C.loop,Ot=fn("autoHeight"),Dt=(gt=document.createElement("style"),mt&&gt.setAttribute("media",mt),document.querySelector("head").appendChild(gt),gt.sheet?gt.sheet:gt.styleSheet),Bt=C.lazyload,Lt=[],St=cn("edgePadding"),It=Nt?(ht=function(){{if(At&&!Tt)return nt-1;var n=At?"fixedWidth":"items",i=[];return(At||C[n]<nt)&&i.push(C[n]),rt&&0<=at.indexOf(n)&&rt.forEach(function(t){var e=it[t][n];e&&(At||e<nt)&&i.push(e)}),i.length||i.push(0),At?Math.ceil(Tt/Math.min.apply(null,i)):Math.max.apply(null,i)}}(),pt=V?Math.ceil((5*ht-nt)/2):4*ht-nt,pt=Math.max(ht,pt),St?pt+1:pt):0,Pt=V?nt+2*It:nt+It,Wt=!(!At||Nt||Ct),Rt=!V||!Nt,Ht=J?"left":"top",zt="",qt="",jt=fn("startIndex"),Ft=jt?function(t){(t%=nt)<0&&(t+=nt);return t=Math.min(t,Pt-yt)}(jt):V?It:0,Vt=Ft,Qt=0,Xt=on(),Yt=C.swipeAngle,Kt=!Yt||"?",Ut=!1,Gt=C.onInit,Jt=new zi,_t=$.id,Zt=" tns-slider tns-"+C.mode,$t=$.id||(vt=window.tnsId,window.tnsId=vt?vt+1:1,"tns"+window.tnsId),te=fn("disable"),ee=C.freezable,ne=!!te||!!ee&&nt<=yt,ie="inner"===bt?" !important":"",ae={click:Gn,keydown:function(t){switch((t=ai(t)).keyCode){case v:case h:case l:Ee.disabled||Gn(t,-1);break;case p:case m:case c:Me.disabled||Gn(t,1);break;case d:Un("first",t);break;case f:Un(nt-1,t)}}},re={click:function(t){Ut&&Kn();var e,n=(t=ai(t)).target||t.srcElement;for(;n!==Oe&&!Ni(n,"data-nav");)n=n.parentNode;Ni(n,"data-nav")&&(e=Le=[].indexOf.call(ke,n),Un(V?e+It:e,t))},keydown:function(t){var e=k.activeElement;if(!Ni(e,"data-nav"))return;var n=(t=ai(t)).keyCode,i=[].indexOf.call(ke,e),a=De.length,r=De.indexOf(i);C.navContainer&&(a=nt,r=i);function o(t){return C.navContainer?t:De[t]}switch(n){case v:case l:0<r&&ni(ke[o(r-1)]);break;case h:case d:0<r&&ni(ke[o(0)]);break;case p:case c:r<a-1&&ni(ke[o(r+1)]);break;case m:case f:r<a-1&&ni(ke[o(a-1)]);break;case s:case u:Un((Le=i)+It,t)}}},oe={mouseover:function(){Re&&(_n(),He=!0)},mouseout:function(){He&&(Jn(),He=!1)}},se={visibilitychange:function(){k.hidden?Re&&(_n(),qe=!0):qe&&(Jn(),qe=!1)}},ue={keydown:function(t){switch((t=ai(t)).keyCode){case v:Gn(t,-1);break;case p:Gn(t,1)}}},le={touchstart:ui,touchmove:li,touchend:ci,touchcancel:ci},ce={mousedown:ui,mousemove:li,mouseup:ci,mouseleave:ci},fe=cn("controls"),de=cn("nav"),ve=C.navAsThumbnails,he=cn("autoplay"),pe=cn("touch"),me=cn("mouseDrag"),ge="tns-slide-active",ye="tns-complete",xe={load:Mn,error:Mn};if(fe)var be,we,Ce=fn("controls"),Ae=fn("controlsText"),Te=C.controlsContainer,Ee=C.prevButton,Me=C.nextButton;if(de)var ke,Ne=fn("nav"),Oe=C.navContainer,De=[],Be=De,Le=-1,Se=sn(),Ie=Se,Pe="tns-nav-active";if(he)var We,Re,He,ze,qe,je=fn("autoplay"),Fe=fn("autoplayTimeout"),Ve="forward"===C.autoplayDirection?1:-1,Qe=fn("autoplayText"),Xe=fn("autoplayHoverPause"),Ye=C.autoplayButton,Ke=fn("autoplayResetOnVisibility"),Ue=["<span class='tns-visually-hidden'>"," animation</span>"];if(pe||me)var Ge,Je={},_e={},Ze=!1,$e=0,tn=J?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};if(pe)var en=fn("touch");if(me)var nn=fn("mouseDrag");ne&&(Ce=Ne=en=nn=Et=je=Xe=Ke=!1),b&&(Ht=b,zt="translate",w?(zt+=J?"3d(":"3d(0px, ",qt=J?", 0px, 0px)":", 0px)"):(zt+=J?"X(":"Y(",qt=")")),function(){_.appendChild(Z),tt.insertBefore(_,$),Z.appendChild($);var t="tns-outer",e="tns-inner",n=cn("gutter");V?J&&(cn("edgePadding")||n&&!C.fixedWidth)?t+=" tns-ovh":e+=" tns-ovh":n&&(t+=" tns-ovh"),_.className=t,Z.className=e,Z.id=$t+"-iw",Ot&&(Z.className+=" tns-ah"),""===$.id&&($.id=$t),Zt+=E?" tns-subpixel":" tns-no-subpixel",Zt+=T?" tns-calc":" tns-no-calc",V&&(Zt+=" tns-"+C.axis),$.className+=Zt,U=ln(Z);var i=fn("edgePadding");fn("gutter");if(U+=i?-(2*i+wt):wt,V&&L){var a={};a[L]=Kn,Ri($,a)}t=e=null;for(var r=0;r<nt;r++){(g=et[r]).id||(g.id=$t+"-item"+r),Mi(g,"tns-item"),!V&&K&&Mi(g,K),Oi(g,{"aria-hidden":"true",tabindex:"-1"})}if(Nt||Ct){for(var o=k.createDocumentFragment(),s=k.createDocumentFragment(),u=It;u--;){var l=u%nt,c=et[l].cloneNode(!0);if(Di(c,"id"),s.insertBefore(c,s.firstChild),V){var f=et[nt-1-l].cloneNode(!0);Di(f,"id"),o.appendChild(f)}}$.insertBefore(o,$.firstChild),$.appendChild(s),et=$.children}if(cn("autoHeight")||!V||!J){var d=$.querySelectorAll("img");Ti(d,function(t){Ri(t,xe);var e=t.src;t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e}),hi(function(){On(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(d),function(){dt=!0,te||(J||(Sn(),fi()),V&&Fn())})})}V&&J&&Fn();for(var v=Ft,h=Ft+Math.min(nt,yt);v<h;v++){Oi(g=et[v],{"aria-hidden":"false"}),Di(g,["tabindex"]),Mi(g,ge),V||(g.style.left=100*(v-Ft)/yt+"%",Mi(g,Q),ki(g,K))}if(V&&J&&(E?(Ci(Dt,"#"+$t+" > .tns-item","font-size:"+A.getComputedStyle(et[0]).fontSize+";",Ai(Dt)),Ci(Dt,"#"+$t,"font-size:0;",Ai(Dt))):Ti(et,function(t,e){var n;t.style.marginLeft=(n=e,T?T+"("+100*n+"% / "+Pt+")":100*n/Pt+"%")})),N){var p=dn(C.edgePadding,C.gutter,C.fixedWidth,C.speed);Ci(Dt,"#"+$t+"-iw",p,Ai(Dt)),V&&(p=J?"width:"+vn(C.fixedWidth,C.gutter,C.items)+";":"",M&&(p+=gn(Mt)),Ci(Dt,"#"+$t,p,Ai(Dt))),p=J?hn(C.fixedWidth,C.gutter,C.items):"",C.gutter&&(p+=pn(C.gutter)),V||(M&&(p+=gn(Mt)),D&&(p+=yn(Mt))),p&&Ci(Dt,"#"+$t+" > .tns-item",p,Ai(Dt))}else{Z.style.cssText=dn(Ct,wt,At),V&&J&&($.style.width=vn(At,wt,yt));p=J?hn(At,wt,yt):"";wt&&(p+=pn(wt)),p&&Ci(Dt,"#"+$t+" > .tns-item",p,Ai(Dt))}if(it&&N&&rt.forEach(function(t){var e,n=it[t],i="",a="",r="",o=fn("items",t),s=fn("fixedWidth",t),u=fn("speed",t),l=fn("edgePadding",t),c=fn("gutter",t);("edgePadding"in n||"gutter"in n)&&(i="#"+$t+"-iw{"+dn(l,c,s,u)+"}"),V&&J&&("fixedWidth"in n||"items"in n||At&&"gutter"in n)&&(a="width:"+vn(s,c,o)+";"),M&&"speed"in n&&(a+=gn(u)),a&&(a="#"+$t+"{"+a+"}"),("fixedWidth"in n||At&&"gutter"in n||!V&&"items"in n)&&(r+=hn(s,c,o)),"gutter"in n&&(r+=pn(c)),!V&&"speed"in n&&(M&&(r+=gn(u)),D&&(r+=yn(u))),r&&(r="#"+$t+" > .tns-item{"+r+"}"),(e=i+a+r)&&Dt.insertRule("@media (min-width: "+t/16+"em) {"+e+"}",Dt.cssRules.length)}),navigator.msMaxTouchPoints&&(Mi($,"ms-touch"),Ri($,{scroll:ii}),In()),de){var m=V?It:0;if(Oe){Oi(Oe,{"aria-label":"Carousel Pagination"}),ke=Oe.children;for(v=0;v<nt;v++){var g;(g=ke[v])&&Oi(g,{"data-nav":v,tabindex:"-1","aria-selected":"false","aria-controls":et[m+v].id})}}else{var y="",x=ve?"":"hidden";for(v=0;v<nt;v++)y+='<button data-nav="'+v+'" tabindex="-1" aria-selected="false" aria-controls="'+et[m+v].id+'" '+x+' type="button"></button>';y='<div class="tns-nav" aria-label="Carousel Pagination">'+y+"</div>",_.insertAdjacentHTML("afterbegin",y),Oe=_.querySelector(".tns-nav"),ke=Oe.children}if(di(),M){var b=M.substring(0,M.length-18).toLowerCase();p="transition: all "+Mt/1e3+"s";b&&(p="-"+b+"-"+p),Ci(Dt,"[aria-controls^="+$t+"-item]",p,Ai(Dt))}Oi(ke[Se],{tabindex:"0","aria-selected":"true"}),Mi(ke[Se],Pe),Ri(Oe,re),Ne||Li(Oe)}if(he){var w=je?"stop":"start";Ye?Oi(Ye,{"data-action":w}):C.autoplayButtonOutput&&(Z.insertAdjacentHTML("beforebegin",'<button data-action="'+w+'" type="button">'+Ue[0]+w+Ue[1]+Qe[0]+"</button>"),Ye=_.querySelector("[data-action]")),Ye&&Ri(Ye,{click:ei}),je?($n(),Xe&&Ri($,oe),Ke&&Ri($,se)):Ye&&Li(Ye)}fe&&(Te||Ee&&Me?(Te&&(Ee=Te.children[0],Me=Te.children[1],Oi(Te,{"aria-label":"Carousel Navigation",tabindex:"0"}),Oi(Te.children,{"aria-controls":$t,tabindex:"-1"})),Oi(Ee,{"data-controls":"prev"}),Oi(Me,{"data-controls":"next"})):(_.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+$t+'" type="button">'+Ae[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+$t+'" type="button">'+Ae[1]+"</button></div>"),Te=_.querySelector(".tns-controls"),Ee=Te.children[0],Me=Te.children[1]),be=Wn(Ee),we=Wn(Me),zn(),Te?Ri(Te,ae):(Ri(Ee,ae),Ri(Me,ae)),Ce||Li(Te)),V&&(en&&Ri($,le),nn&&Ri($,ce)),Et&&Ri(k,ue),"inner"===bt?Jt.on("outerResized",function(){bn(),Jt.emit("innerLoaded",vi())}):Ri(A,{resize:xn}),"outer"===bt?Jt.on("innerLoaded",Nn):!Ot&&V||te||Nn(),En(),Cn(),An(),Jt.on("indexChanged",Dn),"function"==typeof Gt&&Gt(vi()),"inner"===bt&&Jt.emit("innerLoaded",vi()),te&&Tn(!0),G=!0}();var an=Nt?V?function(){var t=Qt,e=Xt;if(t+=xt,e-=xt,Ct)t+=1,e-=1;else if(At){var n=wt||0;n<ut%(At+n)&&(e-=1)}It&&(e<Ft?Ft-=nt:Ft<t&&(Ft+=nt))}:function(){if(Xt<Ft)for(;Qt+nt<=Ft;)Ft-=nt;else if(Ft<Qt)for(;Ft<=Xt-nt;)Ft+=nt}:function(){Ft=Math.max(Qt,Math.min(Xt,Ft))},rn=V?function(t,e){var n,i,a,r,o,s,u,l,c,f,d;e||(e=jn()),Wt&&Ft===Xt&&(e=-((At+wt)*Pt-U)+"px"),M||!t?(Vn(e),t&&Ii($)||Kn()):(n=$,i=Ht,a=zt,r=qt,o=e,s=Mt,u=Kn,l=Math.min(s,10),c=0<=o.indexOf("%")?"%":"px",o=o.replace(c,""),f=Number(n.style[i].replace(a,"").replace(r,"").replace(c,"")),d=(o-f)/s*l,setTimeout(function t(){s-=l,f+=d,n.style[i]=a+f+c+r,0<s?setTimeout(t,l):u()},l)),J||fi()}:function(t){Lt=[];var e={};e[L]=e[S]=Kn,Hi(et[Vt],e),Ri(et[Ft],e),Qn(Vt,Q,X,!0),Qn(Ft,K,Q),L&&S&&t||Kn()};return{getInfo:vi,events:Jt,goTo:Un,play:function(){je&&!Re&&($n(),ze=!1)},pause:function(){Re&&(ti(),ze=!0)},isOn:G,updateSliderHeight:Ln,rebuild:function(){return qi(C)},destroy:function(){if(Hi(A,{resize:xn}),Hi(k,ue),Dt.disabled=!0,Nt)for(var t=It;t--;)V&&et[0].remove(),et[et.length-1].remove();var e=["tns-item",ge];V||(e=e.concat("tns-normal",Q));for(var n=nt;n--;){var i=et[n];0<=i.id.indexOf($t+"-item")&&(i.id=""),e.forEach(function(t){ki(i,t)})}if(Di(et,["style","aria-hidden","tabindex"]),et=$t=nt=Pt=It=null,Ce&&(Hi(Te,ae),C.controlsContainer&&(Di(Te,["aria-label","tabindex"]),Di(Te.children,["aria-controls","aria-disabled","tabindex"])),Te=Ee=Me=null),Ne&&(Hi(Oe,re),C.navContainer&&(Di(Oe,["aria-label"]),Di(ke,["aria-selected","aria-controls","tabindex"])),Oe=ke=null),je&&(clearInterval(We),Ye&&Hi(Ye,{click:ei}),Hi($,oe),Hi($,se),C.autoplayButton&&Di(Ye,["data-action"])),$.id=_t||"",$.className=$.className.replace(Zt,""),Bi($),V&&L){var a={};a[L]=Kn,Hi($,a)}Hi($,le),Hi($,ce),tt.insertBefore($,_),_.remove(),_=Z=$=Ft=Vt=yt=xt=Se=Ie=fe=De=Be=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=G=!1}}}function on(){return V||Nt?Math.max(0,Pt-yt):Pt-1}function sn(t){void 0===t&&(t=Ft);for(var e=V?It:0;t<e;)t+=nt;return V&&(t-=It),t?t%nt:t}function un(){return A.innerWidth||k.documentElement.clientWidth||k.body.clientWidth}function ln(t){return t.clientWidth||ln(t.parentNode)}function cn(e){var n=C[e];return!n&&rt&&0<=at.indexOf(e)&&rt.forEach(function(t){it[t][e]&&(n=!0)}),n}function fn(t,e){e=e||st;var n,i={slideBy:"page",edgePadding:!1};if(!V&&t in i)n=i[t];else if("items"===t&&fn("fixedWidth"))n=Math.floor(ut/(fn("fixedWidth")+fn("gutter")));else if("autoHeight"===t&&"outer"===bt)n=!0;else if(n=C[t],rt&&0<=at.indexOf(t))for(var a=0,r=rt.length;a<r;a++){var o=rt[a];if(!(o<=e))break;t in it[o]&&(n=it[o][t])}return"slideBy"===t&&"page"===n&&(n=fn("items")),n}function dn(t,e,n,i){var a="";if(t){var r=t;e&&(r+=e),a=n?"margin: 0px "+(ut%(n+e)+e)/2+"px;":J?"margin: 0 "+t+"px 0 "+r+"px;":"padding: "+r+"px 0 "+t+"px 0;"}else if(e&&!n){var o="-"+e+"px";a="margin: 0 "+(J?o+" 0 0":"0 "+o+" 0")+";"}return M&&i&&(a+=gn(i)),a}function vn(t,e,n){return t?(t+e)*Pt+"px":T?T+"("+100*Pt+"% / "+n+")":100*Pt/n+"%"}function hn(t,e,n){var i;if(t)i=t+e+"px";else{var a=V?Pt:n;i=T?T+"(100% / "+a+")":100/a+"%"}return"width:"+i+ie+";"}function pn(t){var e="";!1!==t&&(e=(J?"padding-":"margin-")+(J?"right":"bottom")+": "+t+"px;");return e}function mn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function gn(t){return mn(M,18)+"transition-duration:"+t/1e3+"s;"}function yn(t){return mn(D,17)+"animation-duration:"+t/1e3+"s;"}function xn(t){hi(function(){bn(ai(t))})}function bn(t){if(G){st=un(),"outer"===bt&&Jt.emit("outerResized",vi(t));var e,n,i=ot,a=Ft,r=yt,o=ne,s=!1;if(At&&(ut=ln(_)),U=ln(Z),rt&&wn(),i!==ot&&Jt.emit("newBreakpointStart",vi(t)),i!==ot||At){var u=Et,l=Ot,c=At,f=Ct,d=wt,v=te;if(yt=fn("items"),xt=fn("slideBy"),te=fn("disable"),ne=!!te||!!ee&&nt<=yt,yt!==r&&(Xt=on(),an()),te!==v&&Tn(te),ne!==o&&(ne&&(Ft=V?It:0),Cn()),i!==ot&&(Mt=fn("speed"),Ct=fn("edgePadding"),wt=fn("gutter"),At=fn("fixedWidth"),te||At===c||(s=!0),(Ot=fn("autoHeight"))!==l&&(Ot||(Z.style.height=""))),(Et=!ne&&fn("arrowKeys"))!==u&&(Et?Ri(k,ue):Hi(k,ue)),fe){var h=Ce,p=Ae;Ce=!ne&&fn("controls"),Ae=fn("controlsText"),Ce!==h&&(Ce?Si(Te):Li(Te)),Ae!==p&&(Ee.innerHTML=Ae[0],Me.innerHTML=Ae[1])}if(de){var m=Ne;(Ne=!ne&&fn("nav"))!==m&&(Ne?(Si(Oe),di()):Li(Oe))}if(pe){var g=en;(en=!ne&&fn("touch"))!==g&&V&&(en?Ri($,le):Hi($,le))}if(me){var y=nn;(nn=!ne&&fn("mouseDrag"))!==y&&V&&(nn?Ri($,ce):Hi($,ce))}if(he){var x=je,b=Xe,w=Ke,C=Qe;if(ne?je=Xe=Ke=!1:(je=fn("autoplay"))?(Xe=fn("autoplayHoverPause"),Ke=fn("autoplayResetOnVisibility")):Xe=Ke=!1,Qe=fn("autoplayText"),Fe=fn("autoplayTimeout"),je!==x&&(je?(Ye&&Si(Ye),Re||ze||$n()):(Ye&&Li(Ye),Re&&ti())),Xe!==b&&(Xe?Ri($,oe):Hi($,oe)),Ke!==w&&(Ke?Ri(k,se):Hi(k,se)),Ye&&Qe!==C){var A=je?1:0,T=Ye.innerHTML,E=T.length-C[A].length;T.substring(E)===C[A]&&(Ye.innerHTML=T.substring(0,E)+Qe[A])}}if(!N){if(ne||Ct===f&&wt===d||(Z.style.cssText=dn(Ct,wt,At)),J&&!At){V&&($.style.width=vn(!1,null,yt));var M=hn(At,wt,yt)+pn(wt);n=Ai(e=Dt)-1,"deleteRule"in e?e.deleteRule(n):e.removeRule(n),Ci(Dt,"#"+$t+" > .tns-item",M,Ai(Dt))}At||(s=!0)}Ft!==a&&(Jt.emit("indexChanged",vi()),s=!0),yt!==r&&(Dn(),function(){if(!V){for(var t=Ft+Math.min(nt,yt),e=Pt;e--;){var n=et[e];Ft<=e&&e<t?(Mi(n,"tns-moving"),n.style.left=100*(e-Ft)/yt+"%",Mi(n,Q),ki(n,K)):n.style.left&&(n.style.left="",Mi(n,K),ki(n,Q)),ki(n,X)}setTimeout(function(){Ti(et,function(t){ki(t,"tns-moving")})},300)}}(),navigator.msMaxTouchPoints&&In())}J||te||(Sn(),fi(),s=!0),s&&(Fn(),Vt=Ft),An(!0),!Ot&&V||te||Nn(),i!==ot&&Jt.emit("newBreakpointEnd",vi(t))}}function wn(){ot=0,rt.forEach(function(t,e){t<=st&&(ot=e+1)})}function Cn(){var t="tns-transparent";if(ne){if(!ft){if(Ct&&(Z.style.margin="0px"),It)for(var e=It;e--;)V&&Mi(et[e],t),Mi(et[Pt-e-1],t);ft=!0}}else if(ft){if(Ct&&!At&&N&&(Z.style.margin=""),It)for(e=It;e--;)V&&ki(et[e],t),ki(et[Pt-e-1],t);ft=!1}}function An(t){At&&Ct&&(ne||ut<=At+wt?"0px"!==Z.style.margin&&(Z.style.margin="0px"):t&&(Z.style.cssText=dn(Ct,wt,At)))}function Tn(t){var e=et.length;if(t){if(Dt.disabled=!0,$.className=$.className.replace(Zt.substring(1),""),Bi($),Nt)for(var n=It;n--;)V&&Li(et[n]),Li(et[e-n-1]);if(J&&V||Bi(Z),!V)for(var i=Ft,a=Ft+nt;i<a;i++){Bi(r=et[i]),ki(r,Q),ki(r,K)}}else{if(Dt.disabled=!1,$.className+=Zt,J||Sn(),Fn(),Nt)for(n=It;n--;)V&&Si(et[n]),Si(et[e-n-1]);if(!V)for(i=Ft,a=Ft+nt;i<a;i++){var r=et[i],o=i<Ft+yt?Q:K;r.style.left=100*(i-Ft)/yt+"%",Mi(r,o)}}}function En(){if(Bt&&!te){var t=Ft,e=Ft+yt;for(Ct&&(t-=1,e+=1),t=Math.max(t,0),e=Math.min(e,Pt);t<e;t++)Ti(et[t].querySelectorAll(".tns-lazy-img"),function(t){var e,n={};n[L]=function(t){t.stopPropagation()},Ri(t,n),Ei(t,"loaded")||(t.src=(e="data-src",t.getAttribute(e)),Mi(t,"loaded"))})}}function Mn(t){var e=ri(t);Mi(e,ye),Hi(e,xe)}function kn(t,e){for(var n=[],i=t,a=Math.min(t+e,Pt);i<a;i++)Ti(et[i].querySelectorAll("img"),function(t){n.push(t)});return n}function Nn(){var t=Ot?kn(Ft,yt):kn(It,nt);hi(function(){On(t,Ln)})}function On(n,t){return dt?t():(n.forEach(function(t,e){Ei(t,ye)&&n.splice(e,1)}),n.length?void hi(function(){On(n,t)}):t())}function Dn(){En(),function(){for(var t=Ft+Math.min(nt,yt),e=Pt;e--;){var n=et[e];Ft<=e&&e<t?Ni(n,"tabindex")&&(Oi(n,{"aria-hidden":"false"}),Di(n,["tabindex"]),Mi(n,ge)):(Ni(n,"tabindex")||Oi(n,{"aria-hidden":"true",tabindex:"-1"}),Ei(n,ge)&&ki(n,ge))}}(),zn(),di(),function(){if(Ne&&(Se=-1!==Le?Le:sn(),Le=-1,Se!==Ie)){var t=ke[Ie],e=ke[Se];Oi(t,{tabindex:"-1","aria-selected":"false"}),Oi(e,{tabindex:"0","aria-selected":"true"}),ki(t,Pe),Mi(e,Pe)}}()}function Bn(t,e){for(var n=[],i=t,a=Math.min(t+e,Pt);i<a;i++)n.push(et[i].offsetHeight);return Math.max.apply(null,n)}function Ln(){var t=Ot?Bn(Ft,yt):Bn(It,nt);Z.style.height!==t&&(Z.style.height=t+"px")}function Sn(){ct=[0];for(var t,e=et[0].getBoundingClientRect().top,n=1;n<Pt;n++)t=et[n].getBoundingClientRect().top,ct.push(t-e)}function In(){_.style.msScrollSnapPointsX="snapInterval(0%, "+100/yt+"%)"}function Pn(t){return t.nodeName.toLowerCase()}function Wn(t){return"button"===Pn(t)}function Rn(t){return"true"===t.getAttribute("aria-disabled")}function Hn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function zn(){if(Ce&&!kt&&!Nt){var t=be?Ee.disabled:Rn(Ee),e=we?Me.disabled:Rn(Me),n=Ft===Qt,i=!kt&&Ft===Xt;n&&!t&&Hn(be,Ee,!0),!n&&t&&Hn(be,Ee,!1),i&&!e&&Hn(we,Me,!0),!i&&e&&Hn(we,Me,!1)}}function qn(t,e){M&&(t.style[M]=e)}function jn(){var t;J?t=At?-(At+wt)*Ft+"px":100*-Ft/(b?Pt:yt)+"%":t=-ct[Ft]+"px";return t}function Fn(t){qn($,"0s"),Vn(t),setTimeout(function(){qn($,"")},10)}function Vn(t,e){t||(t=jn()),$.style[Ht]=zt+t+qt}function Qn(t,e,n,i){var a=t+yt;Nt||(a=Math.min(a,Pt));for(var r=t;r<a;r++){var o=et[r];i||(o.style.left=100*(r-Ft)/yt+"%"),Y&&O&&(o.style[O]=o.style[B]=Y*(r-t)/1e3+"s"),ki(o,e),Mi(o,n),i&&Lt.push(o)}}function Xn(t,e){var n,i;Rt&&an(),(Ft!==Vt||e)&&(Jt.emit("indexChanged",vi()),Jt.emit("transitionStart",vi()),Re&&t&&0<=["click","keydown"].indexOf(t.type)&&ti(),Ut=!0,isNaN(n)&&(n=Mt),Re&&!Ii($)&&(n=0),rn(n,i))}function Yn(t){return t.toLowerCase().replace(/-/g,"")}function Kn(t){if(V||Ut){if(Jt.emit("transitionEnd",vi(t)),!V&&0<Lt.length)for(var e=0;e<Lt.length;e++){var n=Lt[e];n.style.left="",B&&O&&(n.style[B]="",n.style[O]=""),ki(n,X),Mi(n,K)}if(!t||!V&&t.target.parentNode===$||t.target===$&&Yn(t.propertyName)===Yn(Ht)){if(!Rt){var i=Ft;an(),Ft!==i&&(Jt.emit("indexChanged",vi()),Fn())}Ot&&Nn(),"inner"===bt&&Jt.emit("innerLoaded",vi()),Ut=!1,Ie=Se,Vt=Ft}}}function Un(t,e){if(!ne)if("prev"===t)Gn(e,-1);else if("next"===t)Gn(e,1);else{Ut&&Kn();var n=sn(),i=0;if(n<0&&(n+=nt),"first"===t)i=-n;else if("last"===t)i=V?nt-yt-n:nt-1-n;else if("number"!=typeof t&&(t=parseInt(t)),!isNaN(t)){e||(t-=1,V&&It&&(t+=It));var a=sn(t);a<0&&(a+=nt),i=a-n}if(!V&&i&&Math.abs(i)<yt){var r=0<i?1:-1;i+=Qt<=Ft+i-nt?nt*r:2*nt*r*-1}Ft+=i,V&&Nt&&(Ft<Qt&&(Ft+=nt),Xt<Ft&&(Ft-=nt)),sn(Ft)!==sn(Vt)&&Xn(e)}}function Gn(t,e){var n;if(Ut&&Kn(),!e){for(var i=(t=ai(t)).target||t.srcElement;i!==Te&&[Ee,Me].indexOf(i)<0;)i=i.parentNode;var a=[Ee,Me].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(kt){if(Ft===Qt&&-1===e)return void Un("last",t);if(Ft===Xt&&1===e)return void Un("first",t)}e&&(Ft+=xt*e,Xn(n||t&&"keydown"===t.type?t:null))}function Jn(){We=setInterval(function(){Gn(null,Ve)},Fe),Re=!0}function _n(){clearInterval(We),Re=!1}function Zn(t,e){Oi(Ye,{"data-action":t}),Ye.innerHTML=Ue[0]+t+Ue[1]+e}function $n(){Jn(),Ye&&Zn("stop",Qe[1])}function ti(){_n(),Ye&&Zn("start",Qe[0])}function ei(){Re?(ti(),ze=!0):($n(),ze=!1)}function ni(t){t.focus()}function ii(){rn(0,$.scrollLeft),Vt=Ft}function ai(t){return oi(t=t||A.event)?t.changedTouches[0]:t}function ri(t){return t.target||A.event.srcElement}function oi(t){return 0<=t.type.indexOf("touch")}function si(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function ui(t){Ut&&Kn(),Ze=!0,pi($e),$e=0;var e=ai(t);Jt.emit(oi(t)?"touchStart":"dragStart",vi(t)),!oi(t)&&0<=["img","a"].indexOf(Pn(ri(t)))&&si(t),_e.x=Je.x=parseInt(e.clientX),_e.y=Je.y=parseInt(e.clientY),Ge=parseFloat($.style[Ht].replace(zt,"").replace(qt,"")),qn($,"0s")}function li(t){if(Ze){var e=ai(t);_e.x=parseInt(e.clientX),_e.y=parseInt(e.clientY)}$e||($e=hi(function(){!function t(e){if(!Kt)return void(Ze=!1);pi($e);Ze&&($e=hi(function(){t(e)}));"?"===Kt&&_e.x!==Je.x&&_e.y!==Je.y&&(o=_e.y-Je.y,s=_e.x-Je.x,n=Math.atan2(o,s)*(180/Math.PI),i=Yt,a=!1,r=Math.abs(90-Math.abs(n)),90-i<=r?a="horizontal":r<=i&&(a="vertical"),Kt=a===C.axis);var n,i,a,r;var o,s;if(Kt){try{e.type&&Jt.emit(oi(e)?"touchMove":"dragMove",vi(e))}catch(t){}var u=Ge,l=tn(_e,Je);if(!J||At)u+=l,u+="px";else{var c=b?l*yt*100/(U*Pt):100*l/U;u+=c,u+="%"}$.style[Ht]=zt+u+qt}}(t)}))}function ci(i){if(Yt&&(Kt="?"),Ze){pi($e),qn($,""),Ze=!1;var t=ai(i);_e.x=parseInt(t.clientX),_e.y=parseInt(t.clientY);var a=tn(_e,Je);if(5<=Math.abs(a)){if(!oi(i)){var n=ri(i);Ri(n,{click:function t(e){si(e),Hi(n,{click:t})}})}$e=hi(function(){if(J){var t=-a*yt/U;t=0<a?Math.floor(t):Math.ceil(t),Ft+=t}else{var e=-(Ge+a);if(e<=0)Ft=Qt;else if(e>=ct[ct.length-1])Ft=Xt;else for(var n=0;n++,Ft=a<0?n+1:n,n<Pt&&e>=ct[n+1];);}Xn(i,a),Jt.emit(oi(i)?"touchEnd":"dragEnd",vi(i))})}}}function fi(){Z.style.height=ct[Ft+yt]-ct[Ft]+"px"}function di(){Ne&&!ve&&(!function(){De=[];for(var t=sn()%yt;t<nt;)V&&!Nt&&nt<t+yt&&(t=nt-yt),De.push(t),t+=yt;(Nt&&De.length*yt<nt||!Nt&&0<De[0])&&De.unshift(0)}(),De!==Be&&(Ti(ke,function(t,e){De.indexOf(e)<0?Li(t):Si(t)}),Be=De))}function vi(t){return{container:$,slideItems:et,navContainer:Oe,navItems:ke,controlsContainer:Te,hasControls:fe,prevButton:Ee,nextButton:Me,items:yt,slideBy:xt,cloneCount:It,slideCount:nt,slideCountNew:Pt,index:Ft,indexCached:Vt,navCurrentIndex:Se,navCurrentIndexCached:Ie,visibleNavIndexes:De,visibleNavIndexesCached:Be,sheet:Dt,event:t||{}}}I&&console.warn("No slides found in",C.container)};return qi}();

var mainSlider = tns({
  container: '.intro__slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  controls: false,
  nav: true,
  navContainer: '.intro__pagination',
  autoplayButtonOutput: false
});


var testimonialsSlider = tns({
  container: '.testimonials__slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  controls: false,
  nav: true,
  navContainer: '.testimonials__pagination',
  autoplayButtonOutput: false,
  responsive: {
    1200: {
      items: 2,
      gutter: 60
    }
  }
});

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(root);
  } else {
    root.SmoothScroll = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

  'use strict';

  //
  // Default settings
  //

  var defaults = {
    // Selectors
    ignore: '[data-scroll-ignore]',
    header: null,
    topOnEmptyHash: true,

    // Speed & Easing
    speed: 500,
    clip: true,
    offset: 0,
    easing: 'easeInOutCubic',
    customEasing: null,

    // History
    updateURL: true,
    popstate: true,

    // Custom Events
    emitEvents: true
  };


  //
  // Utility Methods
  //

  /**
   * Check if browser supports required methods
   * @return {Boolean} Returns true if all required methods are supported
   */
  var supports = function () {
    return (
      'querySelector' in document &&
      'addEventListener' in window &&
      'requestAnimationFrame' in window &&
      'closest' in window.Element.prototype
    );
  };

  /**
   * Merge two or more objects. Returns a new object.
   * @param {Object}   objects  The objects to merge together
   * @returns {Object}          Merged values of defaults and options
   */
  var extend = function () {

    // Variables
    var extended = {};

    // Merge the object into the extended object
    var merge = function (obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          extended[prop] = obj[prop];
        }
      }
    };

    // Loop through each object and conduct a merge
    for (var i = 0; i < arguments.length; i++) {
      merge(arguments[i]);
    }

    return extended;

  };

  /**
   * Check to see if user prefers reduced motion
   * @param  {Object} settings Script settings
   */
  var reduceMotion = function (settings) {
    if ('matchMedia' in window && window.matchMedia('(prefers-reduced-motion)').matches) {
      return true;
    }
    return false;
  };

  /**
   * Get the height of an element.
   * @param  {Node} elem The element to get the height of
   * @return {Number}    The element's height in pixels
   */
  var getHeight = function (elem) {
    return parseInt(window.getComputedStyle(elem).height, 10);
  };

  /**
   * Decode a URI, with error check
   * @param  {String} hash The URI to decode
   * @return {String}      A decoded URI (or the original string if an error is thrown)
   */
  var decode = function (hash) {
    var decoded;
    try {
      decoded = decodeURIComponent(hash);
    } catch(e) {
      decoded = hash;
    }
    return decoded;
  };

  /**
   * Escape special characters for use with querySelector
   * @author Mathias Bynens
   * @link https://github.com/mathiasbynens/CSS.escape
   * @param {String} id The anchor ID to escape
   */
  var escapeCharacters = function (id) {

    // Remove leading hash
    if (id.charAt(0) === '#') {
      id = id.substr(1);
    }

    var string = String(id);
    var length = string.length;
    var index = -1;
    var codeUnit;
    var result = '';
    var firstCodeUnit = string.charCodeAt(0);
    while (++index < length) {
      codeUnit = string.charCodeAt(index);
      // Note: there’s no need to special-case astral symbols, surrogate
      // pairs, or lone surrogates.

      // If the character is NULL (U+0000), then throw an
      // `InvalidCharacterError` exception and terminate these steps.
      if (codeUnit === 0x0000) {
        throw new InvalidCharacterError(
          'Invalid character: the input contains U+0000.'
        );
      }

      if (
        // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
      // U+007F, […]
        (codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
        // If the character is the first character and is in the range [0-9]
        // (U+0030 to U+0039), […]
        (index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
        // If the character is the second character and is in the range [0-9]
        // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
        (
          index === 1 &&
          codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
          firstCodeUnit === 0x002D
        )
      ) {
        // http://dev.w3.org/csswg/cssom/#escape-a-character-as-code-point
        result += '\\' + codeUnit.toString(16) + ' ';
        continue;
      }

      // If the character is not handled by one of the above rules and is
      // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
      // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
      // U+005A), or [a-z] (U+0061 to U+007A), […]
      if (
        codeUnit >= 0x0080 ||
        codeUnit === 0x002D ||
        codeUnit === 0x005F ||
        codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
        codeUnit >= 0x0041 && codeUnit <= 0x005A ||
        codeUnit >= 0x0061 && codeUnit <= 0x007A
      ) {
        // the character itself
        result += string.charAt(index);
        continue;
      }

      // Otherwise, the escaped character.
      // http://dev.w3.org/csswg/cssom/#escape-a-character
      result += '\\' + string.charAt(index);

    }

    // Return sanitized hash
    var hash;
    try {
      hash = decodeURIComponent('#' + result);
    } catch(e) {
      hash = '#' + result;
    }
    return hash;

  };

  /**
   * Calculate the easing pattern
   * @link https://gist.github.com/gre/1650294
   * @param {String} type Easing pattern
   * @param {Number} time Time animation should take to complete
   * @returns {Number}
   */
  var easingPattern = function (settings, time) {
    var pattern;

    // Default Easing Patterns
    if (settings.easing === 'easeInQuad') pattern = time * time; // accelerating from zero velocity
    if (settings.easing === 'easeOutQuad') pattern = time * (2 - time); // decelerating to zero velocity
    if (settings.easing === 'easeInOutQuad') pattern = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
    if (settings.easing === 'easeInCubic') pattern = time * time * time; // accelerating from zero velocity
    if (settings.easing === 'easeOutCubic') pattern = (--time) * time * time + 1; // decelerating to zero velocity
    if (settings.easing === 'easeInOutCubic') pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
    if (settings.easing === 'easeInQuart') pattern = time * time * time * time; // accelerating from zero velocity
    if (settings.easing === 'easeOutQuart') pattern = 1 - (--time) * time * time * time; // decelerating to zero velocity
    if (settings.easing === 'easeInOutQuart') pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
    if (settings.easing === 'easeInQuint') pattern = time * time * time * time * time; // accelerating from zero velocity
    if (settings.easing === 'easeOutQuint') pattern = 1 + (--time) * time * time * time * time; // decelerating to zero velocity
    if (settings.easing === 'easeInOutQuint') pattern = time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration

    // Custom Easing Patterns
    if (!!settings.customEasing) pattern = settings.customEasing(time);

    return pattern || time; // no easing, no acceleration
  };

  /**
   * Determine the document's height
   * @returns {Number}
   */
  var getDocumentHeight = function () {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  };

  /**
   * Calculate how far to scroll
   * Clip support added by robjtede - https://github.com/cferdinandi/smooth-scroll/issues/405
   * @param {Element} anchor       The anchor element to scroll to
   * @param {Number}  headerHeight Height of a fixed header, if any
   * @param {Number}  offset       Number of pixels by which to offset scroll
   * @param {Boolean} clip         If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
   * @returns {Number}
   */
  var getEndLocation = function (anchor, headerHeight, offset, clip) {
    var location = 0;
    if (anchor.offsetParent) {
      do {
        location += anchor.offsetTop;
        anchor = anchor.offsetParent;
      } while (anchor);
    }
    location = Math.max(location - headerHeight - offset, 0);
    if (clip) {
      location = Math.min(location, getDocumentHeight() - window.innerHeight);
    }
    return location;
  };

  /**
   * Get the height of the fixed header
   * @param  {Node}   header The header
   * @return {Number}        The height of the header
   */
  var getHeaderHeight = function (header) {
    return !header ? 0 : (getHeight(header) + header.offsetTop);
  };

  /**
   * Update the URL
   * @param  {Node}    anchor  The anchor that was scrolled to
   * @param  {Boolean} isNum   If true, anchor is a number
   * @param  {Object}  options Settings for Smooth Scroll
   */
  var updateURL = function (anchor, isNum, options) {

    // Bail if the anchor is a number
    if (isNum) return;

    // Verify that pushState is supported and the updateURL option is enabled
    if (!history.pushState || !options.updateURL) return;

    // Update URL
    history.pushState(
      {
        smoothScroll: JSON.stringify(options),
        anchor: anchor.id
      },
      document.title,
      anchor === document.documentElement ? '#top' : '#' + anchor.id
    );

  };

  /**
   * Bring the anchored element into focus
   * @param {Node}     anchor      The anchor element
   * @param {Number}   endLocation The end location to scroll to
   * @param {Boolean}  isNum       If true, scroll is to a position rather than an element
   */
  var adjustFocus = function (anchor, endLocation, isNum) {

    // Is scrolling to top of page, blur
    if (anchor === 0) {
      document.body.focus();
    }

    // Don't run if scrolling to a number on the page
    if (isNum) return;

    // Otherwise, bring anchor element into focus
    anchor.focus();
    if (document.activeElement !== anchor) {
      anchor.setAttribute('tabindex', '-1');
      anchor.focus();
      anchor.style.outline = 'none';
    }
    window.scrollTo(0 , endLocation);

  };

  /**
   * Emit a custom event
   * @param  {String} type    The event type
   * @param  {Object} options The settings object
   * @param  {Node}   anchor  The anchor element
   * @param  {Node}   toggle  The toggle element
   */
  var emitEvent = function (type, options, anchor, toggle) {
    if (!options.emitEvents || typeof window.CustomEvent !== 'function') return;
    var event = new CustomEvent(type, {
      bubbles: true,
      detail: {
        anchor: anchor,
        toggle: toggle
      }
    });
    document.dispatchEvent(event);
  };


  //
  // SmoothScroll Constructor
  //

  var SmoothScroll = function (selector, options) {

    //
    // Variables
    //

    var smoothScroll = {}; // Object for public APIs
    var settings, anchor, toggle, fixedHeader, headerHeight, eventTimeout, animationInterval;


    //
    // Methods
    //

    /**
     * Cancel a scroll-in-progress
     */
    smoothScroll.cancelScroll = function (noEvent) {
      cancelAnimationFrame(animationInterval);
      animationInterval = null;
      if (noEvent) return;
      emitEvent('scrollCancel', settings);
    };

    /**
     * Start/stop the scrolling animation
     * @param {Node|Number} anchor  The element or position to scroll to
     * @param {Element}     toggle  The element that toggled the scroll event
     * @param {Object}      options
     */
    smoothScroll.animateScroll = function (anchor, toggle, options) {

      // Local settings
      var animateSettings = extend(settings || defaults, options || {}); // Merge user options with defaults

      // Selectors and variables
      var isNum = Object.prototype.toString.call(anchor) === '[object Number]' ? true : false;
      var anchorElem = isNum || !anchor.tagName ? null : anchor;
      if (!isNum && !anchorElem) return;
      var startLocation = window.pageYOffset; // Current location on the page
      if (animateSettings.header && !fixedHeader) {
        // Get the fixed header if not already set
        fixedHeader = document.querySelector(animateSettings.header);
      }
      if (!headerHeight) {
        // Get the height of a fixed header if one exists and not already set
        headerHeight = getHeaderHeight(fixedHeader);
      }
      var endLocation = isNum ? anchor : getEndLocation(anchorElem, headerHeight, parseInt((typeof animateSettings.offset === 'function' ? animateSettings.offset(anchor, toggle) : animateSettings.offset), 10), animateSettings.clip); // Location to scroll to
      var distance = endLocation - startLocation; // distance to travel
      var documentHeight = getDocumentHeight();
      var timeLapsed = 0;
      var start, percentage, position;

      /**
       * Stop the scroll animation when it reaches its target (or the bottom/top of page)
       * @param {Number} position Current position on the page
       * @param {Number} endLocation Scroll to location
       * @param {Number} animationInterval How much to scroll on this loop
       */
      var stopAnimateScroll = function (position, endLocation) {

        // Get the current location
        var currentLocation = window.pageYOffset;

        // Check if the end location has been reached yet (or we've hit the end of the document)
        if (position == endLocation || currentLocation == endLocation || ((startLocation < endLocation && window.innerHeight + currentLocation) >= documentHeight)) {

          // Clear the animation timer
          smoothScroll.cancelScroll(true);

          // Bring the anchored element into focus
          adjustFocus(anchor, endLocation, isNum);

          // Emit a custom event
          emitEvent('scrollStop', animateSettings, anchor, toggle);

          // Reset start
          start = null;
          animationInterval = null;

          return true;

        }
      };

      /**
       * Loop scrolling animation
       */
      var loopAnimateScroll = function (timestamp) {
        if (!start) { start = timestamp; }
        timeLapsed += timestamp - start;
        percentage = (timeLapsed / parseInt(animateSettings.speed, 10));
        percentage = (percentage > 1) ? 1 : percentage;
        position = startLocation + (distance * easingPattern(animateSettings, percentage));
        window.scrollTo(0, Math.floor(position));
        if (!stopAnimateScroll(position, endLocation)) {
          animationInterval = window.requestAnimationFrame(loopAnimateScroll);
          start = timestamp;
        }
      };

      /**
       * Reset position to fix weird iOS bug
       * @link https://github.com/cferdinandi/smooth-scroll/issues/45
       */
      if (window.pageYOffset === 0) {
        window.scrollTo(0, 0);
      }

      // Update the URL
      updateURL(anchor, isNum, animateSettings);

      // Emit a custom event
      emitEvent('scrollStart', animateSettings, anchor, toggle);

      // Start scrolling animation
      smoothScroll.cancelScroll(true);
      window.requestAnimationFrame(loopAnimateScroll);

    };

    /**
     * If smooth scroll element clicked, animate scroll
     */
    var clickHandler = function (event) {

      // Don't run if the user prefers reduced motion
      if (reduceMotion(settings)) return;

      // Don't run if right-click or command/control + click
      if (event.button !== 0 || event.metaKey || event.ctrlKey) return;

      // Check if event.target has closest() method
      // By @totegi - https://github.com/cferdinandi/smooth-scroll/pull/401/
      if(!('closest' in event.target))return;

      // Check if a smooth scroll link was clicked
      toggle = event.target.closest(selector);
      if (!toggle || toggle.tagName.toLowerCase() !== 'a' || event.target.closest(settings.ignore)) return;

      // Only run if link is an anchor and points to the current page
      if (toggle.hostname !== window.location.hostname || toggle.pathname !== window.location.pathname || !/#/.test(toggle.href)) return;

      // Get an escaped version of the hash
      var hash = escapeCharacters(decode(toggle.hash));

      // Get the anchored element
      var anchor = settings.topOnEmptyHash && hash === '#' ? document.documentElement : document.querySelector(hash);
      anchor = !anchor && hash === '#top' ? document.documentElement : anchor;

      // If anchored element exists, scroll to it
      if (!anchor) return;
      event.preventDefault();
      smoothScroll.animateScroll(anchor, toggle);

    };

    /**
     * Animate scroll on popstate events
     */
    var popstateHandler = function (event) {

      // Only run if state is a popstate record for this instantiation
      if (!history.state.smoothScroll || history.state.smoothScroll !== JSON.stringify(settings)) return;

      // Only run if state includes an anchor
      if (!history.state.anchor) return;

      // Get the anchor
      var anchor = document.querySelector(escapeCharacters(decode(history.state.anchor)));
      if (!anchor) return;

      // Animate scroll to anchor link
      smoothScroll.animateScroll(anchor, null, {updateURL: false});

    };

    /**
     * On window scroll and resize, only run events at a rate of 15fps for better performance
     */
    var resizeThrottler = function (event) {
      if (!eventTimeout) {
        eventTimeout = setTimeout(function() {
          eventTimeout = null; // Reset timeout
          headerHeight = getHeaderHeight(fixedHeader); // Get the height of a fixed header if one exists
        }, 66);
      }
    };

    /**
     * Destroy the current initialization.
     */
    smoothScroll.destroy = function () {

      // If plugin isn't already initialized, stop
      if (!settings) return;

      // Remove event listeners
      document.removeEventListener('click', clickHandler, false);
      window.removeEventListener('resize', resizeThrottler, false);
      window.removeEventListener('popstate', popstateHandler, false);

      // Cancel any scrolls-in-progress
      smoothScroll.cancelScroll();

      // Reset variables
      settings = null;
      anchor = null;
      toggle = null;
      fixedHeader = null;
      headerHeight = null;
      eventTimeout = null;
      animationInterval = null;

    };

    /**
     * Initialize Smooth Scroll
     * @param {Object} options User settings
     */
    smoothScroll.init = function (options) {

      // feature test
      if (!supports()) throw 'Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.';

      // Destroy any existing initializations
      smoothScroll.destroy();

      // Selectors and variables
      settings = extend(defaults, options || {}); // Merge user options with defaults
      fixedHeader = settings.header ? document.querySelector(settings.header) : null; // Get the fixed header
      headerHeight = getHeaderHeight(fixedHeader);

      // When a toggle is clicked, run the click handler
      document.addEventListener('click', clickHandler, false);

      // If window is resized and there's a fixed header, recalculate its size
      if (fixedHeader) {
        window.addEventListener('resize', resizeThrottler, false);
      }

      // If updateURL and popState are enabled, listen for pop events
      if (settings.updateURL && settings.popstate) {
        window.addEventListener('popstate', popstateHandler, false);
      }

    };


    //
    // Initialize plugin
    //

    smoothScroll.init(options);


    //
    // Public APIs
    //

    return smoothScroll;

  };

  return SmoothScroll;

});

var scroll = new SmoothScroll('.main-nav__link, .page-footer__link');

/*! Tabby v11.2.0 | (c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/tabby */
!(function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.tabby=e(t)})("undefined"!=typeof global?global:this.window||this.global,(function(t){"use strict";var e,o,n={},a="querySelector"in document&&"addEventListener"in t&&"classList"in document.createElement("_")&&"onhashchange"in t,r={selectorToggle:"[data-tab]",selectorToggleGroup:"[data-tabs]",selectorContent:"[data-tabs-pane]",selectorContentGroup:"[data-tabs-content]",toggleActiveClass:"active",contentActiveClass:"active",initClass:"js-tabby",stopVideo:!0,callback:function(){}},c=function(t,e,o){if("[object Object]"===Object.prototype.toString.call(t))for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(o,t[n],n,t);else for(var a=0,r=t.length;a<r;a++)e.call(o,t[a],a,t)},s=function(){var t={},e=!1,o=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);for(var a=function(o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e&&"[object Object]"===Object.prototype.toString.call(o[n])?t[n]=s(!0,t[n],o[n]):t[n]=o[n])};o<n;o++){var r=arguments[o];a(r)}return t},i=function(t,e){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),o=e.length;--o>=0&&e.item(o)!==this;);return o>-1});t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null},l=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,o=String(t),n=o.length,a=-1,r="",c=o.charCodeAt(0);++a<n;){if(e=o.charCodeAt(a),0===e)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=e>=1&&e<=31||127==e||0===a&&e>=48&&e<=57||1===a&&e>=48&&e<=57&&45===c?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?o.charAt(a):"\\"+o.charAt(a)}return"#"+r},u=function(t,e){if(e.stopVideo&&!t.classList.contains(e.contentActiveClass)){var o=t.querySelector("iframe"),n=t.querySelector("video");if(o){var a=o.src;o.src=a}n&&n.pause()}},d=function(e,o){if(!e.hasAttribute("data-tab-no-focus")){if(!e.classList.contains(o.contentActiveClass))return void(e.hasAttribute("data-tab-focused")&&e.removeAttribute("tabindex"));var n={x:t.pageXOffset,y:t.pageYOffset};e.focus(),document.activeElement.id!==e.id&&(e.setAttribute("tabindex","-1"),e.setAttribute("data-tab-focused",!0),e.focus()),t.scrollTo(n.x,n.y)}},f=function(t,e){var o=i(t,e.selectorToggleGroup);if(o){var n,a=o.querySelectorAll(e.selectorToggle);c(a,(function(o){return o.hash===t.hash?(o.classList.add(e.toggleActiveClass),n=i(o,"li"),void(n&&n.classList.add(e.toggleActiveClass))):(o.classList.remove(e.toggleActiveClass),n=i(o,"li"),void(n&&n.classList.remove(e.toggleActiveClass)))}))}},v=function(t,e){var o=document.querySelector(l(t));if(o){var n=i(o,e.selectorContentGroup);if(n){var a=n.querySelectorAll(e.selectorContent);c(a,(function(o){return o.id===t.substring(1)?(o.classList.add(e.contentActiveClass),void d(o,e)):(o.classList.remove(e.contentActiveClass),u(o,e),void d(o,e))}))}}};n.toggleTab=function(t,o,n){var a=s(e||r,n||{}),c=document.querySelectorAll(l(t));v(t,a),o&&f(o,a),a.callback(c,o)};var h=function(a){var r=t.location.hash;if(o&&(o.id=o.getAttribute("data-tab-id"),o=null),r){var c=document.querySelector(e.selectorToggle+'[href*="'+r+'"]');n.toggleTab(r,c)}},b=function(n){if(0===n.button&&!n.metaKey&&!n.ctrlKey){var a=i(n.target,e.selectorToggle);if(a&&a.hash){if(a.hash===t.location.hash)return void n.preventDefault();o=document.querySelector(a.hash),o&&(o.setAttribute("data-tab-id",o.id),o.id="")}}},m=function(t){if(o=i(t.target,e.selectorContent),o&&!o.classList.contains(e.contentActiveClass)){var n=o.id;o.setAttribute("data-tab-id",n),o.setAttribute("data-tab-no-focus",!0),o.id="",location.hash=n}};return n.destroy=function(){e&&(document.documentElement.classList.remove(e.initClass),document.removeEventListener("click",b,!1),document.removeEventListener("focus",m,!0),t.removeEventListener("hashchange",h,!1),e=null,o=null)},n.init=function(o){a&&(n.destroy(),e=s(r,o||{}),document.documentElement.classList.add(e.initClass),document.addEventListener("click",b,!1),document.addEventListener("focus",m,!0),t.addEventListener("hashchange",h,!1),h())},n}));

tabby.init();
