/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";var e=function(){};e.version="2.0.5",window.addEventListener("mousewheel",function(){});var t="data-scrollmagic-pin-spacer";e.Controller=function(r){var o,s,a="ScrollMagic.Controller",l="FORWARD",c="REVERSE",u="PAUSED",f=n.defaults,d=this,h=i.extend({},f,r),g=[],p=!1,v=0,m=u,w=!0,y=0,S=!0,b=function(){for(var e in h)f.hasOwnProperty(e)||delete h[e];if(h.container=i.get.elements(h.container)[0],!h.container)throw a+" init failed.";w=h.container===window||h.container===document.body||!document.body.contains(h.container),w&&(h.container=window),y=z(),h.container.addEventListener("resize",T),h.container.addEventListener("scroll",T),h.refreshInterval=parseInt(h.refreshInterval)||f.refreshInterval,E()},E=function(){h.refreshInterval>0&&(s=window.setTimeout(A,h.refreshInterval))},x=function(){return h.vertical?i.get.scrollTop(h.container):i.get.scrollLeft(h.container)},z=function(){return h.vertical?i.get.height(h.container):i.get.width(h.container)},C=this._setScrollPos=function(e){h.vertical?w?window.scrollTo(i.get.scrollLeft(),e):h.container.scrollTop=e:w?window.scrollTo(e,i.get.scrollTop()):h.container.scrollLeft=e},F=function(){if(S&&p){var e=i.type.Array(p)?p:g.slice(0);p=!1;var t=v;v=d.scrollPos();var n=v-t;0!==n&&(m=n>0?l:c),m===c&&e.reverse(),e.forEach(function(e){e.update(!0)})}},L=function(){o=i.rAF(F)},T=function(e){"resize"==e.type&&(y=z(),m=u),p!==!0&&(p=!0,L())},A=function(){if(!w&&y!=z()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){e=document.createEvent("Event"),e.initEvent("resize",!1,!1)}h.container.dispatchEvent(e)}g.forEach(function(e){e.refresh()}),E()};this._options=h;var O=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(i.type.Array(t))t.forEach(function(e){d.addScene(e)});else if(t instanceof e.Scene)if(t.controller()!==d)t.addTo(d);else if(g.indexOf(t)<0){g.push(t),g=O(g),t.on("shift.controller_sort",function(){g=O(g)});for(var n in h.globalSceneOptions)t[n]&&t[n].call(t,h.globalSceneOptions[n])}return d},this.removeScene=function(e){if(i.type.Array(e))e.forEach(function(e){d.removeScene(e)});else{var t=g.indexOf(e);t>-1&&(e.off("shift.controller_sort"),g.splice(t,1),e.remove())}return d},this.updateScene=function(t,n){return i.type.Array(t)?t.forEach(function(e){d.updateScene(e,n)}):n?t.update(!0):p!==!0&&t instanceof e.Scene&&(p=p||[],-1==p.indexOf(t)&&p.push(t),p=O(p),L()),d},this.update=function(e){return T({type:"resize"}),e&&F(),d},this.scrollTo=function(n,r){if(i.type.Number(n))C.call(h.container,n,r);else if(n instanceof e.Scene)n.controller()===d&&d.scrollTo(n.scrollOffset(),r);else if(i.type.Function(n))C=n;else{var o=i.get.elements(n)[0];if(o){for(;o.parentNode.hasAttribute(t);)o=o.parentNode;var s=h.vertical?"top":"left",a=i.get.offset(h.container),l=i.get.offset(o);w||(a[s]-=d.scrollPos()),d.scrollTo(l[s]-a[s],r)}}return d},this.scrollPos=function(e){return arguments.length?(i.type.Function(e)&&(x=e),d):x.call(d)},this.info=function(e){var t={size:y,vertical:h.vertical,scrollPos:v,scrollDirection:m,container:h.container,isDocument:w};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(){return d},this.enabled=function(e){return arguments.length?(S!=e&&(S=!!e,d.updateScene(g,!0)),d):S},this.destroy=function(e){window.clearTimeout(s);for(var t=g.length;t--;)g[t].destroy(e);return h.container.removeEventListener("resize",T),h.container.removeEventListener("scroll",T),i.cAF(o),null},b(),d};var n={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,t){n.defaults[e]=t},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(n){var o,s,a="BEFORE",l="DURING",c="AFTER",u=r.defaults,f=this,d=i.extend({},u,n),h=a,g=0,p={start:0,end:0},v=0,m=!0,w=function(){for(var e in d)u.hasOwnProperty(e)||delete d[e];for(var t in u)L(t);C()},y={};this.on=function(e,t){return i.type.Function(t)&&(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1];"*"!=r&&(y[r]||(y[r]=[]),y[r].push({namespace:i||"",callback:t}))})),f},this.off=function(e,t){return e?(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1]||"",o="*"===r?Object.keys(y):[r];o.forEach(function(e){for(var n=y[e]||[],r=n.length;r--;){var o=n[r];!o||i!==o.namespace&&"*"!==i||t&&t!=o.callback||n.splice(r,1)}n.length||delete y[e]})}),f):f},this.trigger=function(t,n){if(t){var r=t.trim().split("."),i=r[0],o=r[1],s=y[i];s&&s.forEach(function(t){o&&o!==t.namespace||t.callback.call(f,new e.Event(i,t.namespace,f,n))})}return f},f.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?E():"reverse"===e.what&&f.update())}).on("shift.internal",function(){S(),f.update()}),this.addTo=function(t){return t instanceof e.Controller&&s!=t&&(s&&s.removeScene(f),s=t,C(),b(!0),E(!0),S(),s.info("container").addEventListener("resize",x),t.addScene(f),f.trigger("add",{controller:s}),f.update()),f},this.enabled=function(e){return arguments.length?(m!=e&&(m=!!e,f.update(!0)),f):m},this.remove=function(){if(s){s.info("container").removeEventListener("resize",x);var e=s;s=void 0,e.removeScene(f),f.trigger("remove")}return f},this.destroy=function(e){return f.trigger("destroy",{reset:e}),f.remove(),f.off("*.*"),null},this.update=function(e){if(s)if(e)if(s.enabled()&&m){var t,n=s.info("scrollPos");t=d.duration>0?(n-p.start)/(p.end-p.start):n>=p.start?1:0,f.trigger("update",{startPos:p.start,endPos:p.end,scrollPos:n}),f.progress(t)}else T&&h===l&&O(!0);else s.updateScene(f,!1);return f},this.refresh=function(){return b(),E(),f},this.progress=function(e){if(arguments.length){var t=!1,n=h,r=s?s.info("scrollDirection"):"PAUSED",i=d.reverse||e>=g;if(0===d.duration?(t=g!=e,g=1>e&&i?0:1,h=0===g?a:l):0>e&&h!==a&&i?(g=0,h=a,t=!0):e>=0&&1>e&&i?(g=e,h=l,t=!0):e>=1&&h!==c?(g=1,h=c,t=!0):h!==l||i||O(),t){var o={progress:g,state:h,scrollDirection:r},u=h!=n,p=function(e){f.trigger(e,o)};u&&n!==l&&(p("enter"),p(n===a?"start":"end")),p("progress"),u&&h!==l&&(p(h===a?"start":"end"),p("leave"))}return f}return g};var S=function(){p={start:v+d.offset},s&&d.triggerElement&&(p.start-=s.info("size")*d.triggerHook),p.end=p.start+d.duration},b=function(e){if(o){var t="duration";F(t,o.call(f))&&!e&&(f.trigger("change",{what:t,newval:d[t]}),f.trigger("shift",{reason:t}))}},E=function(e){var n=0,r=d.triggerElement;if(s&&r){for(var o=s.info(),a=i.get.offset(o.container),l=o.vertical?"top":"left";r.parentNode.hasAttribute(t);)r=r.parentNode;var c=i.get.offset(r);o.isDocument||(a[l]-=s.scrollPos()),n=c[l]-a[l]}var u=n!=v;v=n,u&&!e&&f.trigger("shift",{reason:"triggerElementPosition"})},x=function(){d.triggerHook>0&&f.trigger("shift",{reason:"containerResize"})},z=i.extend(r.validate,{duration:function(e){if(i.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return s?s.info("size")*t:0}}if(i.type.Function(e)){o=e;try{e=parseFloat(o())}catch(n){e=-1}}if(e=parseFloat(e),!i.type.Number(e)||0>e)throw o?(o=void 0,0):0;return e}}),C=function(e){e=arguments.length?[e]:Object.keys(z),e.forEach(function(e){var t;if(z[e])try{t=z[e](d[e])}catch(n){t=u[e]}finally{d[e]=t}})},F=function(e,t){var n=!1,r=d[e];return d[e]!=t&&(d[e]=t,C(e),n=r!=d[e]),n},L=function(e){f[e]||(f[e]=function(t){return arguments.length?("duration"===e&&(o=void 0),F(e,t)&&(f.trigger("change",{what:e,newval:d[e]}),r.shifts.indexOf(e)>-1&&f.trigger("shift",{reason:e})),f):d[e]})};this.controller=function(){return s},this.state=function(){return h},this.scrollOffset=function(){return p.start},this.triggerPosition=function(){var e=d.offset;return s&&(e+=d.triggerElement?v:s.info("size")*f.triggerHook()),e};var T,A;f.on("shift.internal",function(e){var t="duration"===e.reason;(h===c&&t||h===l&&0===d.duration)&&O(),t&&_()}).on("progress.internal",function(){O()}).on("add.internal",function(){_()}).on("destroy.internal",function(e){f.removePin(e.reset)});var O=function(e){if(T&&s){var t=s.info(),n=A.spacer.firstChild;if(e||h!==l){var r={position:A.inFlow?"relative":"absolute",top:0,left:0},o=i.css(n,"position")!=r.position;A.pushFollowers?d.duration>0&&(h===c&&0===parseFloat(i.css(A.spacer,"padding-top"))?o=!0:h===a&&0===parseFloat(i.css(A.spacer,"padding-bottom"))&&(o=!0)):r[t.vertical?"top":"left"]=d.duration*g,i.css(n,r),o&&_()}else{"fixed"!=i.css(n,"position")&&(i.css(n,{position:"fixed"}),_());var u=i.get.offset(A.spacer,!0),f=d.reverse||0===d.duration?t.scrollPos-p.start:Math.round(g*d.duration*10)/10;u[t.vertical?"top":"left"]+=f,i.css(A.spacer.firstChild,{top:u.top,left:u.left})}}},_=function(){if(T&&s&&A.inFlow){var e=h===l,t=s.info("vertical"),n=A.spacer.firstChild,r=i.isMarginCollapseType(i.css(A.spacer,"display")),o={};A.relSize.width||A.relSize.autoFullWidth?e?i.css(T,{width:i.get.width(A.spacer)}):i.css(T,{width:"100%"}):(o["min-width"]=i.get.width(t?T:n,!0,!0),o.width=e?o["min-width"]:"auto"),A.relSize.height?e?i.css(T,{height:i.get.height(A.spacer)-(A.pushFollowers?d.duration:0)}):i.css(T,{height:"100%"}):(o["min-height"]=i.get.height(t?n:T,!0,!r),o.height=e?o["min-height"]:"auto"),A.pushFollowers&&(o["padding"+(t?"Top":"Left")]=d.duration*g,o["padding"+(t?"Bottom":"Right")]=d.duration*(1-g)),i.css(A.spacer,o)}},N=function(){s&&T&&h===l&&!s.info("isDocument")&&O()},P=function(){s&&T&&h===l&&((A.relSize.width||A.relSize.autoFullWidth)&&i.get.width(window)!=i.get.width(A.spacer.parentNode)||A.relSize.height&&i.get.height(window)!=i.get.height(A.spacer.parentNode))&&_()},D=function(e){s&&T&&h===l&&!s.info("isDocument")&&(e.preventDefault(),s._setScrollPos(s.info("scrollPos")-((e.wheelDelta||e[s.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,n){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"};if(n=i.extend({},r,n),e=i.get.elements(e)[0],!e)return f;if("fixed"===i.css(e,"position"))return f;if(T){if(T===e)return f;f.removePin()}T=e;var o=T.parentNode.style.display,s=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];T.parentNode.style.display="none";var a="absolute"!=i.css(T,"position"),l=i.css(T,s.concat(["display"])),c=i.css(T,["width","height"]);T.parentNode.style.display=o,!a&&n.pushFollowers&&(n.pushFollowers=!1);var u=T.parentNode.insertBefore(document.createElement("div"),T),d=i.extend(l,{position:a?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(a||i.extend(d,i.css(T,["width","height"])),i.css(u,d),u.setAttribute(t,""),i.addClass(u,n.spacerClass),A={spacer:u,relSize:{width:"%"===c.width.slice(-1),height:"%"===c.height.slice(-1),autoFullWidth:"auto"===c.width&&a&&i.isMarginCollapseType(l.display)},pushFollowers:n.pushFollowers,inFlow:a},!T.___origStyle){T.___origStyle={};var h=T.style,g=s.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);g.forEach(function(e){T.___origStyle[e]=h[e]||""})}return A.relSize.width&&i.css(u,{width:c.width}),A.relSize.height&&i.css(u,{height:c.height}),u.appendChild(T),i.css(T,{position:a?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(A.relSize.width||A.relSize.autoFullWidth)&&i.css(T,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",N),window.addEventListener("resize",N),window.addEventListener("resize",P),T.addEventListener("mousewheel",D),T.addEventListener("DOMMouseScroll",D),O(),f},this.removePin=function(e){if(T){if(h===l&&O(!0),e||!s){var n=A.spacer.firstChild;if(n.hasAttribute(t)){var r=A.spacer.style,o=["margin","marginLeft","marginRight","marginTop","marginBottom"];margins={},o.forEach(function(e){margins[e]=r[e]||""}),i.css(n,margins)}A.spacer.parentNode.insertBefore(n,A.spacer),A.spacer.parentNode.removeChild(A.spacer),T.parentNode.hasAttribute(t)||(i.css(T,T.___origStyle),delete T.___origStyle)}window.removeEventListener("scroll",N),window.removeEventListener("resize",N),window.removeEventListener("resize",P),T.removeEventListener("mousewheel",D),T.removeEventListener("DOMMouseScroll",D),T=void 0}return f};var R,k=[];return f.on("destroy.internal",function(e){f.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=i.get.elements(e);return 0!==n.length&&i.type.String(t)?(k.length>0&&f.removeClassToggle(),R=t,k=n,f.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?i.addClass:i.removeClass;k.forEach(function(e){t(e,R)})}),f):f},this.removeClassToggle=function(e){return e&&k.forEach(function(e){i.removeClass(e,R)}),f.off("start.internal_class end.internal_class"),R=void 0,k=[],f},w(),f};var r={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!i.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=i.get.elements(e)[0];if(!t)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(i.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(e,t,n,i){e in r.defaults||(r.defaults[e]=t,r.validate[e]=n,i&&r.shifts.push(e))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,r){r=r||{};for(var i in r)this[i]=r[i];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var i=e._util=function(e){var t,n={},r=function(e){return parseFloat(e)||0},i=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},o=function(t,n,o,s){if(n=n===document?e:n,n===e)s=!1;else if(!f.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var a=(o?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(o&&s){var l=i(n);a+="Height"===t?r(l.marginTop)+r(l.marginBottom):r(l.marginLeft)+r(l.marginRight)}return a},s=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var a=0,l=["ms","moz","webkit","o"],c=e.requestAnimationFrame,u=e.cancelAnimationFrame;for(t=0;!c&&t<l.length;++t)c=e[l[t]+"RequestAnimationFrame"],u=e[l[t]+"CancelAnimationFrame"]||e[l[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-a)),i=e.setTimeout(function(){t(n+r)},r);return a=n+r,i}),u||(u=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=u.bind(e);var f=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};f.String=function(e){return"string"===f(e)},f.Function=function(e){return"function"===f(e)},f.Array=function(e){return Array.isArray(e)},f.Number=function(e){return!f.Array(e)&&e-parseFloat(e)+1>=0},f.DomElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=n.get={};return d.elements=function(t){var n=[];if(f.String(t))try{t=document.querySelectorAll(t)}catch(r){return n}if("nodelist"===f(t)||f.Array(t))for(var i=0,o=n.length=t.length;o>i;i++){var s=t[i];n[i]=f.DomElement(s)?s:d.elements(s)}else(f.DomElement(t)||t===document||t===e)&&(n=[t]);return n},d.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},d.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},d.width=function(e,t,n){return o("width",e,t,n)},d.height=function(e,t,n){return o("height",e,t,n)},d.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=d.scrollTop(),n.left+=d.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(f.String(t))return i(e)[s(t)];if(f.Array(t)){var n={},r=i(e);return t.forEach(function(e){n[e]=r[s(e)]}),n}for(var o in t){var a=t[o];a==parseFloat(a)&&(a+="px"),e.style[s(o)]=a}},n}(window||{});return e});
/*!
 * VERSION: 1.20.3
 * DATE: 2017-10-02
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.20.3",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,i,j,k,l,m,n,o,p=this._dirty?this.totalDuration():this._totalDuration,q=this._time,r=this._totalTime,s=this._cycle,t=this._duration,u=this._rawPrevTime;if(a>=p-1e-7&&a>=0?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=t,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(e=!0,f="onComplete",d=d||this._timeline.autoRemoveChildren),0===t&&(this._initted||!this.vars.lazy||d)&&(this._startTime===this._timeline._duration&&(a=0),(0>u||0>=a&&a>=-1e-7||u===g&&"isPause"!==this.data)&&u!==a&&(d=!0,u>g&&(f="onReverseComplete")),this._rawPrevTime=n=!b||a||u===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==r||0===t&&u>0)&&(f="onReverseComplete",e=this._reversed),0>a&&(this._active=!1,0===t&&(this._initted||!this.vars.lazy||d)&&(u>=0&&(d=!0),this._rawPrevTime=n=!b||a||u===a?a:g)),this._initted||(d=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(j=t+this._repeatDelay,this._cycle=this._totalTime/j>>0,0!==this._cycle&&this._cycle===this._totalTime/j&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*j,this._yoyo&&0!==(1&this._cycle)&&(this._time=t-this._time,o=this._yoyoEase||this.vars.yoyoEase,o&&(this._yoyoEase||(o!==!0||this._initted?this._yoyoEase=o=o===!0?this._ease:o instanceof Ease?o:Ease.map[o]:(o=this.vars.ease,this._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,this.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),this.ratio=o?1-o.getRatio((t-this._time)/t):0)),this._time>t?this._time=t:this._time<0&&(this._time=0)),this._easeType&&!o?(k=this._time/t,l=this._easeType,m=this._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:this._time/t<.5?this.ratio=k/2:this.ratio=1-k/2):o||(this.ratio=this._ease.getRatio(this._time/t))),q===this._time&&!d&&s===this._cycle)return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!d&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=q,this._totalTime=r,this._rawPrevTime=u,this._cycle=s,h.lazyTweens.push(this),void(this._lazy=[a,b]);!this._time||e||o?e&&this._ease._calcEnd&&!o&&(this.ratio=this._ease.getRatio(0===this._time?0:1)):this.ratio=this._ease.getRatio(this._time/t)}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==q&&a>=0&&(this._active=!0),0===r&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,!0,d):f||(f="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===t)&&(b||this._callback("onStart"))),i=this._firstPT;i;)i.f?i.t[i.p](i.c*this.ratio+i.s):i.t[i.p]=i.c*this.ratio+i.s,i=i._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,!0,d),b||(this._totalTime!==r||f)&&this._callback("onUpdate")),this._cycle!==s&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),f&&(!this._gc||d)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,!0,d),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[f]&&this._callback(f),0===t&&this._rawPrevTime===g&&n!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.20.3",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),e._time&&e.render((this.rawTime()-e._startTime)*e._timeScale,!1,!1),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._time,o=this._dirty?this.totalDuration():this._totalDuration,p=this._startTime,q=this._timeScale,r=this._paused;if(n!==this._time&&(a+=this._time-n),a>=o-1e-7&&a>=0)this._totalTime=this._time=o,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=o+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==n||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=n)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==n&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==n&&a>0&&(this._active=!0),0===n&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=n)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=n&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(e,e._startTime-e._delay),this._calculatingDuration=0):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale,this._time-=e._startTime,this._totalTime-=e._startTime,this._rawPrevTime-=e._startTime),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.20.3",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._time,p=this._dirty?this.totalDuration():this._totalDuration,q=this._duration,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(o!==this._time&&(a+=this._time-o),a>=p-1e-7&&a>=0)this._locked||(this._totalTime=p,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=q,a=q+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==o||0===q&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=q||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===q&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=q+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=q-this._time),this._time>q?(this._time=q,a=q+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=o||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&m._startTime<q&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*q,this._cycle<w?x=!x:this._totalTime+=q,this._time=o,this._rawPrevTime=0===q?u-1e-4:u,this._cycle=w,this._locked=!0,o=x?0:q,this.render(o,b,0===q),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),o!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,o=x?q+1e-4:-1e-4,this.render(o,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==o&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=o)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,
d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.20.3",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,-1!==_(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}else i=$(a).lineHeight,a.style.lineHeight=d,h=parseFloat($(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(c[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(-1!==(d+c).indexOf("rgb")||-1!==(d+c).indexOf("hsl")?(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" ")):(D=D.join(" ").split(",").join(", ").split(" "),E=E.join(" ").split(",").join(", ").split(" ")),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,z=u,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!Ha||!a.getCTM||a.parentNode&&!a.ownerSVGElement||!Na(a))},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,!Ca||!(h=!$(a)||"none"===$(a).display)&&a.parentNode||(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*L,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{
parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(D.skewType=A.skewType||D.skewType||g.defaultSkewType,d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),"simple"===D.skewType&&(l.scaleY*=Math.cos(l.skewX*K)),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g])c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",$(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.m=Math.round),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=Math.round;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._mod(h):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1===a?0:1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},q.config=b.config=function(a,c){return new b(a,c)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!e.TweenLite){var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p=f.length,s=p;--p>-1;)(l=q[f[p]]||new r(f[p],[])).gsClass?(i[p]=l.gsClass,s--):j&&l.sc.push(this);if(0===s&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"==typeof define&&define.amd&&define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){return arguments.length?(p=a||1/m,void(q=Math.min(b,p,0))):1/m>p},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==d.visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,X){j||i.wake();var c=this.vars.useFrames?W:X;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&("hidden"!==d.visibilityState||!i.lagSmoothing())&&i.wake();var a=setTimeout(E,2e3);a.unref&&a.unref()};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-1e-7},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Z(),this.render(a,b,!1),J.length&&Z())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;var b,c;for(a=a||m,this._timeline&&this._timeline.smoothChildTiming&&(b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime(),this._startTime=c-(c-this._startTime)*this._timeScale/a),this._timeScale=a,c=this.timeline;c&&c.timeline;)c._dirty=!0,c.totalDuration(),c=c.timeline;return this},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,
this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?V[G.defaultOverwrite]:"number"==typeof i?i>>0:V[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=$(f,this,!1),1===i&&this._siblings[e].length>1&&aa(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=$(b,this,!1),1===i&&this._siblings.length>1&&aa(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)U[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!R[c]||R[c]&&R[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.20.3",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):"undefined"==typeof d?b:d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=/[\+-]=-?[\.\d]/,N=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&null!=this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},O=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=N,M.test(b)&&(l.end=null),l},P=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=O(m,n?parseFloat(o.s)+o.c:d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},Q=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:O},R=G._plugins={},S=Q.tweenLookup={},T=0,U=Q.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},V={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},W=D._rootFramesTimeline=new F,X=D._rootTimeline=new F,Y=30,Z=Q.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};X._startTime=i.time,W._startTime=i.frame,X._active=W._active=!0,setTimeout(Z,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Z(),X.render((i.time-X._startTime)*X._timeScale,!1,!1),W.render((i.frame-W._startTime)*W._timeScale,!1,!1),J.length&&Z(),i.frame>=Y){Y=i.frame+(parseInt(G.autoSleep,10)||120);for(c in S){for(b=S[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete S[c]}if(c=X._first,(!c||c._paused)&&G.autoSleep&&!W._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var $=function(a,b,c){var d,e,f=a._gsTweenID;if(S[f||(a._gsTweenID=f="t"+T++)]||(S[f]={target:a,tweens:[]}),b&&(d=S[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return S[f].tweens},_=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},aa=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||ba(b,0,o),0===ba(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!_(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},ba=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.data="isStart",e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateParams=g.onUpdateParams,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=G.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)U[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Z(),this.vars.css||b.style&&b!==a&&b.nodeType&&R.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],U[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(R[g]&&(j=new R[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=P.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&aa(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),(!this._initted||this._startAt&&this._startAt.progress())&&(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,!0,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,!0,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,!0,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!_(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=$(d[c],this,!0);else this._siblings=$(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=$(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ca=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ca.prototype},!0);if(h=ca.prototype,ca.version="1.19.0",ca.API=2,h._firstPT=null,h._addTween=P,h.setRatio=N,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ca.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ca.API&&(R[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ca.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ca(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ca.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*!
 * VERSION: 1.20.3
 * DATE: 2017-10-02
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.20.3",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._time,p=this._dirty?this.totalDuration():this._totalDuration,q=this._duration,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(o!==this._time&&(a+=this._time-o),a>=p-1e-7&&a>=0)this._locked||(this._totalTime=p,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=q,a=q+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==o||0===q&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=q||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===q&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=q+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=q-this._time),this._time>q?(this._time=q,a=q+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=o||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&m._startTime<q&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*q,this._cycle<w?x=!x:this._totalTime+=q,this._time=o,this._rawPrevTime=0===q?u-1e-4:u,this._cycle=w,this._locked=!0,o=x?0:q,this.render(o,b,0===q),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),o!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,o=x?q+1e-4:-1e-4,this.render(o,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==o&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=o)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.20.3",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),e._time&&e.render((this.rawTime()-e._startTime)*e._timeScale,!1,!1),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7&&a>=0)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(e,e._startTime-e._delay),this._calculatingDuration=0):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale,this._time-=e._startTime,this._totalTime-=e._startTime,this._rawPrevTime-=e._startTime),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("./TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("TimelineMax");
/*!
 * VERSION: 0.1.12
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com/jquery-gsap-plugin/
 *
 * Requires TweenLite version 1.8.0 or higher and CSSPlugin.
 *
 * @license Copyright (c) 2013-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
!function(a){"use strict";var b,c,d,e=a.fn.animate,f=a.fn.stop,g=!0,h=function(a){var b,c={};for(b in a)c[b]=a[b];return c},i={overwrite:1,delay:1,useFrames:1,runBackwards:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,autoCSS:1},j=",scrollTop,scrollLeft,show,hide,toggle,",k=j,l=function(a,b){for(var c in i)i[c]&&void 0!==a[c]&&(b[c]=a[c])},m=function(a){return function(b){return a.getRatio(b)}},n={},o=function(){var e,f,g,h=window.GreenSockGlobals||window;if(b=h.TweenMax||h.TweenLite,b&&(e=(b.version+".0.0").split("."),f=!(Number(e[0])>0&&Number(e[1])>7),h=h.com.greensock,c=h.plugins.CSSPlugin,n=h.easing.Ease.map||{}),!b||!c||f)return b=null,void(!d&&window.console&&(window.console.log("The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)."+(f?" Version "+e.join(".")+" is too old.":"")),d=!0));if(a.easing){for(g in n)a.easing[g]=m(n[g]);o=!1}};a.fn.animate=function(d,f,i,j){if(d=d||{},o&&(o(),!b||!c))return e.call(this,d,f,i,j);if(!g||d.skipGSAP===!0||"object"==typeof f&&"function"==typeof f.step)return e.call(this,d,f,i,j);var m,p,q,r,s=a.speed(f,i,j),t={ease:n[s.easing]||(s.easing===!1?n.linear:n.swing)},u=this,v="object"==typeof f?f.specialEasing:null;for(p in d){if(m=d[p],m instanceof Array&&n[m[1]]&&(v=v||{},v[p]=m[1],m=m[0]),"show"===m||"hide"===m||"toggle"===m||-1!==k.indexOf(p)&&-1!==k.indexOf(","+p+","))return e.call(this,d,f,i,j);t[-1===p.indexOf("-")?p:a.camelCase(p)]=m}if(v){t=h(t),r=[];for(p in v)m=r[r.length]={},l(t,m),m.ease=n[v[p]]||t.ease,-1!==p.indexOf("-")&&(p=a.camelCase(p)),m[p]=t[p],delete t[p];0===r.length&&(r=null)}return q=function(c){var d,e=h(t);if(r)for(d=r.length;--d>-1;)b.to(this,a.fx.off?0:s.duration/1e3,r[d]);e.onComplete=function(){c?c():s.old&&a(this).each(s.old)},b.to(this,a.fx.off?0:s.duration/1e3,e)},s.queue!==!1?(u.queue(s.queue,q),"function"==typeof s.old&&a(u[u.length-1]).queue(s.queue,function(a){s.old.call(u),a()})):q.call(u),u},a.fn.stop=function(a,c){if(f.call(this,a,c),b){if(c)for(var d,e=b.getTweensOf(this),g=e.length;--g>-1;)d=e[g].totalTime()/e[g].totalDuration(),d>0&&1>d&&e[g].seek(e[g].totalDuration());b.killTweensOf(this)}return this},a.gsap={enabled:function(a){g=a},version:"0.1.12",legacyProps:function(a){k=j+a+","}}}(jQuery);

/*!
 * VERSION: 0.1.2
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * DrawSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

	"use strict";

	var _doc = _gsScope.document,
		_getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {},
		_numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
		DrawSVGPlugin;

	function getDistance(x1, y1, x2, y2, scaleX, scaleY) {
		x2 = (parseFloat(x2) - parseFloat(x1)) * scaleX;
		y2 = (parseFloat(y2) - parseFloat(y1)) * scaleY;
		return Math.sqrt(x2 * x2 + y2 * y2);
	}

	function unwrap(element) {
		if (typeof(element) === "string" || !element.nodeType) {
			element = _gsScope.TweenLite.selector(element);
			if (element.length) {
				element = element[0];
			}
		}
		return element;
	}

	//accepts values like "100%" or "20% 80%" or "20 50" and parses it into an absolute start and end position on the line/stroke based on its length. Returns an an array with the start and end values, like [0, 243]
	function parse(value, length, defaultStart) {
		var i = value.indexOf(" "),
			s, e;
		if (i === -1) {
			s = defaultStart !== undefined ? defaultStart + "" : value;
			e = value;
		} else {
			s = value.substr(0, i);
			e = value.substr(i+1);
		}
		s = (s.indexOf("%") !== -1) ? (parseFloat(s) / 100) * length : parseFloat(s);
		e = (e.indexOf("%") !== -1) ? (parseFloat(e) / 100) * length : parseFloat(e);
		return (s > e) ? [e, s] : [s, e];
	}

	function getLength(element) {
		if (!element) {
			return 0;
		}
		element = unwrap(element);
		var type = element.tagName.toLowerCase(),
			scaleX = 1,
			scaleY = 1,
			length, bbox, points, prevPoint, i, rx, ry;
		if (element.getAttribute("vector-effect") === "non-scaling-stroke") { //non-scaling-stroke basically scales the shape and then strokes it at the screen-level (after transforms), thus we need to adjust the length accordingly.
			scaleY = element.getScreenCTM();
			scaleX = scaleY.a;
			scaleY = scaleY.d;
		}
		try { //IE bug: calling <path>.getTotalLength() locks the repaint area of the stroke to whatever its current dimensions are on that frame/tick. To work around that, we must call getBBox() to force IE to recalculate things.
			bbox = element.getBBox(); //solely for fixing bug in IE - we don't actually use the bbox.
		} catch (e) {
			//firefox has a bug that throws an error if the element isn't visible.
		}
		if ((!bbox || (!bbox.width && !bbox.height)) && (type === "rect" || type === "circle" || type === "ellipse")) { //if the element isn't visible, try to discern width/height using its attributes.
			bbox = {
				width: parseFloat( element.getAttribute( (type === "rect") ? "width" : (type === "circle") ? "r" : "rx")),
				height: parseFloat( element.getAttribute( (type === "rect") ? "height" : (type === "circle") ? "r" : "ry") )
			};
			if (type !== "rect") {
				bbox.width *= 2;
				bbox.height *= 2;
			}
		}
		if (type === "path") {
			prevPoint = element.style.strokeDasharray;
			element.style.strokeDasharray = "none";
			length = element.getTotalLength() || 0;
			if (scaleX !== scaleY) {
				console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled.");
			}
			length *= (scaleX + scaleY) / 2;
			element.style.strokeDasharray = prevPoint;
		} else if (type === "rect") {
			length = bbox.width * 2 * scaleX + bbox.height * 2 * scaleY;
		} else if (type === "line") {
			length = getDistance(element.getAttribute("x1"), element.getAttribute("y1"), element.getAttribute("x2"), element.getAttribute("y2"), scaleX, scaleY);
		} else if (type === "polyline" || type === "polygon") {
			points = element.getAttribute("points").match(_numbersExp) || [];
			if (type === "polygon") {
				points.push(points[0], points[1]);
			}
			length = 0;
			for (i = 2; i < points.length; i+=2) {
				length += getDistance(points[i-2], points[i-1], points[i], points[i+1], scaleX, scaleY) || 0;
			}
		} else if (type === "circle" || type === "ellipse") {
			rx = (bbox.width / 2) * scaleX;
			ry = (bbox.height / 2) * scaleY;
			length = Math.PI * ( 3 * (rx + ry) - Math.sqrt((3 * rx + ry) * (rx + 3 * ry)) );
		}
		return length || 0;
	}

	function getPosition(element, length) {
		if (!element) {
			return [0, 0];
		}
		element = unwrap(element);
		length = length || (getLength(element) + 1);
		var cs = _getComputedStyle(element),
			dash = cs.strokeDasharray || "",
			offset = parseFloat(cs.strokeDashoffset),
			i = dash.indexOf(",");
		if (i < 0) {
			i = dash.indexOf(" ");
		}
		dash = (i < 0) ? length : parseFloat(dash.substr(0, i)) || 0.00001;
		if (dash > length) {
			dash = length;
		}
		return [Math.max(0, -offset), Math.max(0, dash - offset)];
	}

	DrawSVGPlugin = _gsScope._gsDefine.plugin({
		propName: "drawSVG",
		API: 2,
		version: "0.1.1",
		global: true,
		overwriteProps: ["drawSVG"],

		init: function(target, value, tween, index) {
			if (!target.getBBox) {
				return false;
			}
			var length = getLength(target) + 1,
				start, end, overage;
			this._style = target.style;
			if (typeof(value) === "function") {
				value = value(index, target);
			}
			if (value === true || value === "true") {
				value = "0 100%";
			} else if (!value) {
				value = "0 0";
			} else if ((value + "").indexOf(" ") === -1) {
				value = "0 " + value;
			}
			start = getPosition(target, length);
			end = parse(value, length, start[0]);
			this._length = length + 10;
			if (start[0] === 0 && end[0] === 0) {
				overage = Math.max(0.00001, end[1] - length); //allow people to go past the end, like values of 105% because for some paths, Firefox doesn't return an accurate getTotalLength(), so it could end up coming up short.
				this._dash = length + overage;
				this._offset = length - start[1] + overage;
				this._addTween(this, "_offset", this._offset, length - end[1] + overage, "drawSVG");
			} else {
				this._dash = (start[1] - start[0]) || 0.000001; //some browsers render artifacts if dash is 0, so we use a very small number in that case.
				this._offset = -start[0];
				this._addTween(this, "_dash", this._dash, (end[1] - end[0]) || 0.00001, "drawSVG");
				this._addTween(this, "_offset", this._offset, -end[0], "drawSVG");
			}
			return true;
		},

		//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
		set: function(ratio) {
			if (this._firstPT) {
				this._super.setRatio.call(this, ratio);
				this._style.strokeDashoffset = this._offset;
				if (ratio === 1 || ratio === 0) {
					this._style.strokeDasharray = (this._offset < 0.001 && this._length - this._dash <= 10) ? "none" : (this._offset === this._dash) ? "0px, 999999px" : this._dash + "px," + this._length + "px";
				} else {
					this._style.strokeDasharray = this._dash + "px," + this._length + "px";
				}
			}
		}

	});

	DrawSVGPlugin.getLength = getLength;
	DrawSVGPlugin.getPosition = getPosition;

}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }
//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
(function(name) {
	"use strict";
	var getGlobal = function() {
		return (_gsScope.GreenSockGlobals || _gsScope)[name];
	};
	if (typeof(define) === "function" && define.amd) { //AMD
		define(["TweenLite"], getGlobal);
	} else if (typeof(module) !== "undefined" && module.exports) { //node
		require("../TweenLite.js");
		module.exports = getGlobal();
	}
}("DrawSVGPlugin"));
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,n){"function"==typeof define&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],n):"object"==typeof exports?(require("gsap"),n(require("scrollmagic"),TweenMax,TimelineMax)):n(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.TweenMax||e.TweenLite,e.TimelineMax||e.TimelineLite)}(this,function(e,n,r){"use strict";e.Scene.addOption("tweenChanges",!1,function(e){return!!e}),e.Scene.extend(function(){var e,t=this;t.on("progress.plugin_gsap",function(){i()}),t.on("destroy.plugin_gsap",function(e){t.removeTween(e.reset)});var i=function(){if(e){var n=t.progress(),r=t.state();e.repeat&&-1===e.repeat()?"DURING"===r&&e.paused()?e.play():"DURING"===r||e.paused()||e.pause():n!=e.progress()&&(0===t.duration()?n>0?e.play():e.reverse():t.tweenChanges()&&e.tweenTo?e.tweenTo(n*e.duration()):e.progress(n).pause())}};t.setTween=function(o,a,s){var u;arguments.length>1&&(arguments.length<3&&(s=a,a=1),o=n.to(o,a,s));try{u=r?new r({smoothChildTiming:!0}).add(o):o,u.pause()}catch(p){return t}return e&&t.removeTween(),e=u,o.repeat&&-1===o.repeat()&&(e.repeat(-1),e.yoyo(o.yoyo())),i(),t},t.removeTween=function(n){return e&&(n&&e.progress(0).pause(),e.kill(),e=void 0),t}})});
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,i){"function"==typeof define&&define.amd?define(["ScrollMagic","jquery"],i):"object"==typeof exports?i(require("scrollmagic"),require("jquery")):i(e.ScrollMagic,e.jQuery)}(this,function(e,i){"use strict";e._util.get.elements=function(e){return i(e).toArray()},e._util.addClass=function(e,t){i(e).addClass(t)},e._util.removeClass=function(e,t){i(e).removeClass(t)},i.ScrollMagic=e});
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,i){"function"==typeof define&&define.amd?define(["ScrollMagic","velocity"],i):"object"==typeof exports?i(require("scrollmagic"),require("velocity")):i(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.Velocity||e.jQuery&&e.jQuery.Velocity)}(this,function(e,i){"use strict";var t="animation.velocity",o=0;e.Scene.extend(function(){var r,u,n,c,l=this,s=e._util,a=0;l.on("progress.plugin_velocity",function(){v()}),l.on("destroy.plugin_velocity",function(e){l.off("*.plugin_velocity"),l.removeVelocity(e.reset)});var f=function(e,t,o){s.type.Array(e)?e.forEach(function(e){f(e,t,o)}):(i.Utilities.data(e,c)||i.Utilities.data(e,c,{reverseProps:s.css(e,Object.keys(u))}),i(e,t,o),void 0!==o.queue&&i.Utilities.dequeue(e,o.queue))},y=function(e,t){if(s.type.Array(e))e.forEach(function(e){y(e,t)});else{var o=i.Utilities.data(e,c);o&&o.reverseProps&&(i(e,o.reverseProps,t),void 0!==t.queue&&i.Utilities.dequeue(e,t.queue))}},v=function(){if(r){var e=l.progress();e!=a&&(0===l.duration()&&(e>0?f(r,u,n):y(r,n)),a=e)}};l.setVelocity=function(e,i,a){return r&&l.removeVelocity(),r=s.get.elements(e),u=i||{},n=a||{},c="ScrollMagic."+t+"["+o++ +"]",void 0!==n.queue&&(n.queue=c+"_queue"),v(),l},l.removeVelocity=function(e){return r&&(void 0!==n.queue&&i(r,"stop",n.queue),e&&y(r,{duration:0}),r.forEach(function(e){i.Utilities.removeData(e,c)}),r=u=n=c=void 0),l}})});
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,r){"function"==typeof define&&define.amd?define(["ScrollMagic"],r):r("object"==typeof exports?require("scrollmagic"):e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic)}(this,function(e){"use strict";var r="0.85em",t="9999",i=15,o=e._util,n=0;e.Scene.extend(function(){var e,r=this;r.addIndicators=function(t){if(!e){var i={name:"",indent:0,parent:void 0,colorStart:"green",colorEnd:"red",colorTrigger:"blue"};t=o.extend({},i,t),n++,e=new s(r,t),r.on("add.plugin_addIndicators",e.add),r.on("remove.plugin_addIndicators",e.remove),r.on("destroy.plugin_addIndicators",r.removeIndicators),r.controller()&&e.add()}return r},r.removeIndicators=function(){return e&&(e.remove(),this.off("*.plugin_addIndicators"),e=void 0),r}}),e.Controller.addOption("addIndicators",!1),e.Controller.extend(function(){var r=this,t=r.info(),n=t.container,s=t.isDocument,d=t.vertical,a={groups:[]};this._indicators=a;var g=function(){a.updateBoundsPositions()},p=function(){a.updateTriggerGroupPositions()};return n.addEventListener("resize",p),s||(window.addEventListener("resize",p),window.addEventListener("scroll",p)),n.addEventListener("resize",g),n.addEventListener("scroll",g),this._indicators.updateBoundsPositions=function(e){for(var r,t,s,g=e?[o.extend({},e.triggerGroup,{members:[e]})]:a.groups,p=g.length,u={},c=d?"left":"top",l=d?"width":"height",f=d?o.get.scrollLeft(n)+o.get.width(n)-i:o.get.scrollTop(n)+o.get.height(n)-i;p--;)for(s=g[p],r=s.members.length,t=o.get[l](s.element.firstChild);r--;)u[c]=f-t,o.css(s.members[r].bounds,u)},this._indicators.updateTriggerGroupPositions=function(e){for(var t,g,p,u,c,l=e?[e]:a.groups,f=l.length,m=s?document.body:n,h=s?{top:0,left:0}:o.get.offset(m,!0),v=d?o.get.width(n)-i:o.get.height(n)-i,b=d?"width":"height",G=d?"Y":"X";f--;)t=l[f],g=t.element,p=t.triggerHook*r.info("size"),u=o.get[b](g.firstChild.firstChild),c=p>u?"translate"+G+"(-100%)":"",o.css(g,{top:h.top+(d?p:v-t.members[0].options.indent),left:h.left+(d?v-t.members[0].options.indent:p)}),o.css(g.firstChild.firstChild,{"-ms-transform":c,"-webkit-transform":c,transform:c})},this._indicators.updateTriggerGroupLabel=function(e){var r="trigger"+(e.members.length>1?"":" "+e.members[0].options.name),t=e.element.firstChild.firstChild,i=t.textContent!==r;i&&(t.textContent=r,d&&a.updateBoundsPositions())},this.addScene=function(t){this._options.addIndicators&&t instanceof e.Scene&&t.controller()===r&&t.addIndicators(),this.$super.addScene.apply(this,arguments)},this.destroy=function(){n.removeEventListener("resize",p),s||(window.removeEventListener("resize",p),window.removeEventListener("scroll",p)),n.removeEventListener("resize",g),n.removeEventListener("scroll",g),this.$super.destroy.apply(this,arguments)},r});var s=function(e,r){var t,i,s=this,a=d.bounds(),g=d.start(r.colorStart),p=d.end(r.colorEnd),u=r.parent&&o.get.elements(r.parent)[0];r.name=r.name||n,g.firstChild.textContent+=" "+r.name,p.textContent+=" "+r.name,a.appendChild(g),a.appendChild(p),s.options=r,s.bounds=a,s.triggerGroup=void 0,this.add=function(){i=e.controller(),t=i.info("vertical");var r=i.info("isDocument");u||(u=r?document.body:i.info("container")),r||"static"!==o.css(u,"position")||o.css(u,{position:"relative"}),e.on("change.plugin_addIndicators",l),e.on("shift.plugin_addIndicators",c),G(),h(),setTimeout(function(){i._indicators.updateBoundsPositions(s)},0)},this.remove=function(){if(s.triggerGroup){if(e.off("change.plugin_addIndicators",l),e.off("shift.plugin_addIndicators",c),s.triggerGroup.members.length>1){var r=s.triggerGroup;r.members.splice(r.members.indexOf(s),1),i._indicators.updateTriggerGroupLabel(r),i._indicators.updateTriggerGroupPositions(r),s.triggerGroup=void 0}else b();m()}};var c=function(){h()},l=function(e){"triggerHook"===e.what&&G()},f=function(){var e=i.info("vertical");o.css(g.firstChild,{"border-bottom-width":e?1:0,"border-right-width":e?0:1,bottom:e?-1:r.indent,right:e?r.indent:-1,padding:e?"0 8px":"2px 4px"}),o.css(p,{"border-top-width":e?1:0,"border-left-width":e?0:1,top:e?"100%":"",right:e?r.indent:"",bottom:e?"":r.indent,left:e?"":"100%",padding:e?"0 8px":"2px 4px"}),u.appendChild(a)},m=function(){a.parentNode.removeChild(a)},h=function(){a.parentNode!==u&&f();var r={};r[t?"top":"left"]=e.triggerPosition(),r[t?"height":"width"]=e.duration(),o.css(a,r),o.css(p,{display:e.duration()>0?"":"none"})},v=function(){var n=d.trigger(r.colorTrigger),a={};a[t?"right":"bottom"]=0,a[t?"border-top-width":"border-left-width"]=1,o.css(n.firstChild,a),o.css(n.firstChild.firstChild,{padding:t?"0 8px 3px 8px":"3px 4px"}),document.body.appendChild(n);var g={triggerHook:e.triggerHook(),element:n,members:[s]};i._indicators.groups.push(g),s.triggerGroup=g,i._indicators.updateTriggerGroupLabel(g),i._indicators.updateTriggerGroupPositions(g)},b=function(){i._indicators.groups.splice(i._indicators.groups.indexOf(s.triggerGroup),1),s.triggerGroup.element.parentNode.removeChild(s.triggerGroup.element),s.triggerGroup=void 0},G=function(){var r=e.triggerHook(),t=1e-4;if(!(s.triggerGroup&&Math.abs(s.triggerGroup.triggerHook-r)<t)){for(var o,n=i._indicators.groups,d=n.length;d--;)if(o=n[d],Math.abs(o.triggerHook-r)<t)return s.triggerGroup&&(1===s.triggerGroup.members.length?b():(s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s),1),i._indicators.updateTriggerGroupLabel(s.triggerGroup),i._indicators.updateTriggerGroupPositions(s.triggerGroup))),o.members.push(s),s.triggerGroup=o,void i._indicators.updateTriggerGroupLabel(o);if(s.triggerGroup){if(1===s.triggerGroup.members.length)return s.triggerGroup.triggerHook=r,void i._indicators.updateTriggerGroupPositions(s.triggerGroup);s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s),1),i._indicators.updateTriggerGroupLabel(s.triggerGroup),i._indicators.updateTriggerGroupPositions(s.triggerGroup),s.triggerGroup=void 0}v()}}},d={start:function(e){var r=document.createElement("div");r.textContent="start",o.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e});var t=document.createElement("div");return o.css(t,{position:"absolute",overflow:"visible",width:0,height:0}),t.appendChild(r),t},end:function(e){var r=document.createElement("div");return r.textContent="end",o.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),r},bounds:function(){var e=document.createElement("div");return o.css(e,{position:"absolute",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":r}),e.style.zIndex=t,e},trigger:function(e){var i=document.createElement("div");i.textContent="trigger",o.css(i,{position:"relative"});var n=document.createElement("div");o.css(n,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),n.appendChild(i);var s=document.createElement("div");return o.css(s,{position:"fixed",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":r}),s.style.zIndex=t,s.appendChild(n),s}}});
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function() {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap( $( '<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function() {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function(item) {
				return $(item);
			});

			this._mergers = this._items.map(function() {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function() {
		return this.settings.checkVisibility
			? this.$element.is(':visible')
			: true;
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's' + (
					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
				)
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);
					//TODO: Need documentation for this new option
					if (settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						// If the carousel is looping also preload images that are to the "left"
						if (settings.loop) {
              position -= settings.lazyLoadEager;
              n++;
            }
					}

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		this._previousHeight = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function() {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function() {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function() {
					refThis.update();
				}, 250);
			}
		});

	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			lazyLoadEnabled = this._core.settings.lazyLoad,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}

		this._previousHeight = maxheight;

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = $('<div/>',{
						"class": 'owl-video-tn ' + lazyClass,
						"srcType": path
					});
				} else {
					tnLink = $( '<div/>', {
						"class": "owl-video-tn",
						"style": 'opacity:1;background-image:url(' + path + ')'
					});
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap( $( '<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html,
			iframe;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
		html.attr( 'height', height );
		html.attr( 'width', width );
		if (video.type === 'youtube') {
			html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
		} else if (video.type === 'vimeo') {
			html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
		} else if (video.type === 'vzaar') {
			html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
		}

		iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function(speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}

	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function() {
		return new Date().getTime() - this._time;
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<button role="button">')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);
var a, b; "undefined" != typeof navigator && (a = window || {}, b = function (window) { "use strict"; var svgNS = "http://www.w3.org/2000/svg", locationHref = "", initialDefaultFrame = -999999, subframeEnabled = !0, expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), cachedColors = {}, bm_rounder = Math.round, bm_rnd, bm_pow = Math.pow, bm_sqrt = Math.sqrt, bm_abs = Math.abs, bm_floor = Math.floor, bm_max = Math.max, bm_min = Math.min, blitter = 10, BMMath = {}; function ProjectInterface() { return {} } !function () { var t, e = Object.getOwnPropertyNames(Math), r = e.length; for (t = 0; t < r; t += 1)BMMath[e[t]] = Math[e[t]] }(), BMMath.random = Math.random, BMMath.abs = function (t) { if ("object" === typeof t && t.length) { var e, r = createSizedArray(t.length), i = t.length; for (e = 0; e < i; e += 1)r[e] = Math.abs(t[e]); return r } return Math.abs(t) }; var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = .5519; function roundValues(t) { bm_rnd = t ? Math.round : function (t) { return t } } function styleDiv(t) { t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d" } function BMEnterFrameEvent(t, e, r, i) { this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1 } function BMCompleteEvent(t, e) { this.type = t, this.direction = e < 0 ? -1 : 1 } function BMCompleteLoopEvent(t, e, r, i) { this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1 } function BMSegmentStartEvent(t, e, r) { this.type = t, this.firstFrame = e, this.totalFrames = r } function BMDestroyEvent(t, e) { this.type = t, this.target = e } roundValues(!1); var createElementID = (D = 0, function () { return "__lottie_element_" + ++D }), D; function HSVtoRGB(t, e, r) { var i, s, a, n, o, h, l, p; switch (h = r * (1 - e), l = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = r * (1 - (1 - o) * e), n % 6) { case 0: i = r, s = p, a = h; break; case 1: i = l, s = r, a = h; break; case 2: i = h, s = r, a = p; break; case 3: i = h, s = l, a = r; break; case 4: i = p, s = h, a = r; break; case 5: i = r, s = h, a = l }return [i, s, a] } function RGBtoHSV(t, e, r) { var i, s = Math.max(t, e, r), a = Math.min(t, e, r), n = s - a, o = 0 === s ? 0 : n / s, h = s / 255; switch (s) { case a: i = 0; break; case t: i = e - r + n * (e < r ? 6 : 0), i /= 6 * n; break; case e: i = r - t + 2 * n, i /= 6 * n; break; case r: i = t - e + 4 * n, i /= 6 * n }return [i, o, h] } function addSaturationToRGB(t, e) { var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return r[1] += e, 1 < r[1] ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]) } function addBrightnessToRGB(t, e) { var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return r[2] += e, 1 < r[2] ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]) } function addHueToRGB(t, e) { var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return r[0] += e / 360, 1 < r[0] ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]) } var rgbToHex = function () { var t, e, i = []; for (t = 0; t < 256; t += 1)e = t.toString(16), i[t] = 1 == e.length ? "0" + e : e; return function (t, e, r) { return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + i[t] + i[e] + i[r] } }(); function BaseEvent() { } BaseEvent.prototype = { triggerEvent: function (t, e) { if (this._cbs[t]) for (var r = this._cbs[t].length, i = 0; i < r; i++)this._cbs[t][i](e) }, addEventListener: function (t, e) { return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), function () { this.removeEventListener(t, e) }.bind(this) }, removeEventListener: function (t, e) { if (e) { if (this._cbs[t]) { for (var r = 0, i = this._cbs[t].length; r < i;)this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1; this._cbs[t].length || (this._cbs[t] = null) } } else this._cbs[t] = null } }; var createTypedArray = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function (t, e) { return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0 } : function (t, e) { var r, i = 0, s = []; switch (t) { case "int16": case "uint8c": r = 1; break; default: r = 1.1 }for (i = 0; i < e; i += 1)s.push(r); return s }; function createSizedArray(t) { return Array.apply(null, { length: t }) } function createNS(t) { return document.createElementNS(svgNS, t) } function createTag(t) { return document.createElement(t) } function DynamicPropertyContainer() { } DynamicPropertyContainer.prototype = { addDynamicProperty: function (t) { -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0) }, iterateDynamicProperties: function () { this._mdf = !1; var t, e = this.dynamicProperties.length; for (t = 0; t < e; t += 1)this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0) }, initDynamicPropertyContainer: function (t) { this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1 } }; var getBlendMode = (Ma = { 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" }, function (t) { return Ma[t] || "" }), Ma, Matrix = function () { var s = Math.cos, a = Math.sin, n = Math.tan, i = Math.round; function t() { return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this } function e(t) { if (0 === t) return this; var e = s(t), r = a(t); return this._t(e, -r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) } function r(t) { if (0 === t) return this; var e = s(t), r = a(t); return this._t(1, 0, 0, 0, 0, e, -r, 0, 0, r, e, 0, 0, 0, 0, 1) } function o(t) { if (0 === t) return this; var e = s(t), r = a(t); return this._t(e, 0, r, 0, 0, 1, 0, 0, -r, 0, e, 0, 0, 0, 0, 1) } function h(t) { if (0 === t) return this; var e = s(t), r = a(t); return this._t(e, -r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) } function l(t, e) { return this._t(1, e, t, 1, 0, 0) } function p(t, e) { return this.shear(n(t), n(e)) } function m(t, e) { var r = s(e), i = a(e); return this._t(r, i, 0, 0, -i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) } function f(t, e, r) { return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1) } function c(t, e, r, i, s, a, n, o, h, l, p, m, f, c, d, u) { return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = i, this.props[4] = s, this.props[5] = a, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = m, this.props[12] = f, this.props[13] = c, this.props[14] = d, this.props[15] = u, this } function d(t, e, r) { return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this } function u(t, e, r, i, s, a, n, o, h, l, p, m, f, c, d, u) { var y = this.props; if (1 === t && 0 === e && 0 === r && 0 === i && 0 === s && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === m) return y[12] = y[12] * t + y[15] * f, y[13] = y[13] * a + y[15] * c, y[14] = y[14] * p + y[15] * d, y[15] = y[15] * u, this._identityCalculated = !1, this; var g = y[0], v = y[1], b = y[2], E = y[3], x = y[4], P = y[5], S = y[6], _ = y[7], C = y[8], A = y[9], T = y[10], D = y[11], k = y[12], M = y[13], w = y[14], F = y[15]; return y[0] = g * t + v * s + b * h + E * f, y[1] = g * e + v * a + b * l + E * c, y[2] = g * r + v * n + b * p + E * d, y[3] = g * i + v * o + b * m + E * u, y[4] = x * t + P * s + S * h + _ * f, y[5] = x * e + P * a + S * l + _ * c, y[6] = x * r + P * n + S * p + _ * d, y[7] = x * i + P * o + S * m + _ * u, y[8] = C * t + A * s + T * h + D * f, y[9] = C * e + A * a + T * l + D * c, y[10] = C * r + A * n + T * p + D * d, y[11] = C * i + A * o + T * m + D * u, y[12] = k * t + M * s + w * h + F * f, y[13] = k * e + M * a + w * l + F * c, y[14] = k * r + M * n + w * p + F * d, y[15] = k * i + M * o + w * m + F * u, this._identityCalculated = !1, this } function y() { return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity } function g(t) { for (var e = 0; e < 16;) { if (t.props[e] !== this.props[e]) return !1; e += 1 } return !0 } function v(t) { var e; for (e = 0; e < 16; e += 1)t.props[e] = this.props[e] } function b(t) { var e; for (e = 0; e < 16; e += 1)this.props[e] = t[e] } function E(t, e, r) { return { x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14] } } function x(t, e, r) { return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12] } function P(t, e, r) { return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13] } function S(t, e, r) { return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14] } function _(t) { var e = this.props[0] * this.props[5] - this.props[1] * this.props[4], r = this.props[5] / e, i = -this.props[1] / e, s = -this.props[4] / e, a = this.props[0] / e, n = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e, o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e; return [t[0] * r + t[1] * s + n, t[0] * i + t[1] * a + o, 0] } function C(t) { var e, r = t.length, i = []; for (e = 0; e < r; e += 1)i[e] = _(t[e]); return i } function A(t, e, r) { var i = createTypedArray("float32", 6); if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = r[0], i[5] = r[1]; else { var s = this.props[0], a = this.props[1], n = this.props[4], o = this.props[5], h = this.props[12], l = this.props[13]; i[0] = t[0] * s + t[1] * n + h, i[1] = t[0] * a + t[1] * o + l, i[2] = e[0] * s + e[1] * n + h, i[3] = e[0] * a + e[1] * o + l, i[4] = r[0] * s + r[1] * n + h, i[5] = r[0] * a + r[1] * o + l } return i } function T(t, e, r) { return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]] } function D(t, e) { if (this.isIdentity()) return t + "," + e; var r = this.props; return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100 } function k() { for (var t = 0, e = this.props, r = "matrix3d("; t < 16;)r += i(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1; return r } function M(t) { return t < 1e-6 && 0 < t || -1e-6 < t && t < 0 ? i(1e4 * t) / 1e4 : t } function w() { var t = this.props; return "matrix(" + M(t[0]) + "," + M(t[1]) + "," + M(t[4]) + "," + M(t[5]) + "," + M(t[12]) + "," + M(t[13]) + ")" } return function () { this.reset = t, this.rotate = e, this.rotateX = r, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = m, this.shear = l, this.scale = f, this.setTransform = c, this.translate = d, this.transform = u, this.applyToPoint = E, this.applyToX = x, this.applyToY = P, this.applyToZ = S, this.applyToPointArray = T, this.applyToTriplePoints = A, this.applyToPointStringified = D, this.toCSS = k, this.to2dCSS = w, this.clone = v, this.cloneFromProps = b, this.equals = g, this.inversePoints = C, this.inversePoint = _, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset() } }(); !function (o, h) { var l, p = this, m = 256, f = 6, c = "random", d = h.pow(m, f), u = h.pow(2, 52), y = 2 * u, g = m - 1; function v(t) { var e, r = t.length, n = this, i = 0, s = n.i = n.j = 0, a = n.S = []; for (r || (t = [r++]); i < m;)a[i] = i++; for (i = 0; i < m; i++)a[i] = a[s = g & s + t[i % r] + (e = a[i])], a[s] = e; n.g = function (t) { for (var e, r = 0, i = n.i, s = n.j, a = n.S; t--;)e = a[i = g & i + 1], r = r * m + a[g & (a[i] = a[s = g & s + e]) + (a[s] = e)]; return n.i = i, n.j = s, r } } function b(t, e) { return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e } function E(t, e) { for (var r, i = t + "", s = 0; s < i.length;)e[g & s] = g & (r ^= 19 * e[g & s]) + i.charCodeAt(s++); return x(e) } function x(t) { return String.fromCharCode.apply(0, t) } h["seed" + c] = function (t, e, r) { var i = [], s = E(function t(e, r) { var i, s = [], a = typeof e; if (r && "object" == a) for (i in e) try { s.push(t(e[i], r - 1)) } catch (t) { } return s.length ? s : "string" == a ? e : e + "\0" }((e = !0 === e ? { entropy: !0 } : e || {}).entropy ? [t, x(o)] : null === t ? function () { try { if (l) return x(l.randomBytes(m)); var t = new Uint8Array(m); return (p.crypto || p.msCrypto).getRandomValues(t), x(t) } catch (t) { var e = p.navigator, r = e && e.plugins; return [+new Date, p, r, p.screen, x(o)] } }() : t, 3), i), a = new v(i), n = function () { for (var t = a.g(f), e = d, r = 0; t < u;)t = (t + r) * m, e *= m, r = a.g(1); for (; y <= t;)t /= 2, e /= 2, r >>>= 1; return (t + r) / e }; return n.int32 = function () { return 0 | a.g(4) }, n.quick = function () { return a.g(4) / 4294967296 }, n.double = n, E(x(a.S), o), (e.pass || r || function (t, e, r, i) { return i && (i.S && b(i, a), t.state = function () { return b(a, {}) }), r ? (h[c] = t, e) : t })(n, s, "global" in e ? e.global : this == h, e.state) }, E(h.random(), o) }([], BMMath); var BezierFactory = function () { var t = { getBezierEasing: function (t, e, r, i, s) { var a = s || ("bez_" + t + "_" + e + "_" + r + "_" + i).replace(/\./g, "p"); if (o[a]) return o[a]; var n = new h([t, e, r, i]); return o[a] = n } }, o = {}; var l = 11, p = 1 / (l - 1), e = "function" == typeof Float32Array; function i(t, e) { return 1 - 3 * e + 3 * t } function s(t, e) { return 3 * e - 6 * t } function a(t) { return 3 * t } function m(t, e, r) { return ((i(e, r) * t + s(e, r)) * t + a(e)) * t } function f(t, e, r) { return 3 * i(e, r) * t * t + 2 * s(e, r) * t + a(e) } function h(t) { this._p = t, this._mSampleValues = e ? new Float32Array(l) : new Array(l), this._precomputed = !1, this.get = this.get.bind(this) } return h.prototype = { get: function (t) { var e = this._p[0], r = this._p[1], i = this._p[2], s = this._p[3]; return this._precomputed || this._precompute(), e === r && i === s ? t : 0 === t ? 0 : 1 === t ? 1 : m(this._getTForX(t), r, s) }, _precompute: function () { var t = this._p[0], e = this._p[1], r = this._p[2], i = this._p[3]; this._precomputed = !0, t === e && r === i || this._calcSampleValues() }, _calcSampleValues: function () { for (var t = this._p[0], e = this._p[2], r = 0; r < l; ++r)this._mSampleValues[r] = m(r * p, t, e) }, _getTForX: function (t) { for (var e = this._p[0], r = this._p[2], i = this._mSampleValues, s = 0, a = 1, n = l - 1; a !== n && i[a] <= t; ++a)s += p; var o = s + (t - i[--a]) / (i[a + 1] - i[a]) * p, h = f(o, e, r); return .001 <= h ? function (t, e, r, i) { for (var s = 0; s < 4; ++s) { var a = f(e, r, i); if (0 === a) return e; e -= (m(e, r, i) - t) / a } return e }(t, o, e, r) : 0 === h ? o : function (t, e, r, i, s) { for (var a, n, o = 0; 0 < (a = m(n = e + (r - e) / 2, i, s) - t) ? r = n : e = n, 1e-7 < Math.abs(a) && ++o < 10;); return n }(t, s, s + p, e, r) } }, t }(); function extendPrototype(t, e) { var r, i, s = t.length; for (r = 0; r < s; r += 1)for (var a in i = t[r].prototype) i.hasOwnProperty(a) && (e.prototype[a] = i[a]) } function getDescriptor(t, e) { return Object.getOwnPropertyDescriptor(t, e) } function createProxyFunction(t) { function e() { } return e.prototype = t, e } function bezFunction() { Math; function g(t, e, r, i, s, a) { var n = t * i + e * s + r * a - s * i - a * t - r * e; return -.001 < n && n < .001 } var p = function (t, e, r, i) { var s, a, n, o, h, l, p = defaultCurveSegments, m = 0, f = [], c = [], d = bezier_length_pool.newElement(); for (n = r.length, s = 0; s < p; s += 1) { for (h = s / (p - 1), a = l = 0; a < n; a += 1)o = bm_pow(1 - h, 3) * t[a] + 3 * bm_pow(1 - h, 2) * h * r[a] + 3 * (1 - h) * bm_pow(h, 2) * i[a] + bm_pow(h, 3) * e[a], f[a] = o, null !== c[a] && (l += bm_pow(f[a] - c[a], 2)), c[a] = f[a]; l && (m += l = bm_sqrt(l)), d.percents[s] = h, d.lengths[s] = m } return d.addedLength = m, d }; function v(t) { this.segmentLength = 0, this.points = new Array(t) } function b(t, e) { this.partialLength = t, this.point = e } var E, t = (E = {}, function (t) { var e = t.s, r = t.e, i = t.to, s = t.ti, a = (e[0] + "_" + e[1] + "_" + r[0] + "_" + r[1] + "_" + i[0] + "_" + i[1] + "_" + s[0] + "_" + s[1]).replace(/\./g, "p"); if (E[a]) t.bezierData = E[a]; else { var n, o, h, l, p, m, f, c = defaultCurveSegments, d = 0, u = null; 2 === e.length && (e[0] != r[0] || e[1] != r[1]) && g(e[0], e[1], r[0], r[1], e[0] + i[0], e[1] + i[1]) && g(e[0], e[1], r[0], r[1], r[0] + s[0], r[1] + s[1]) && (c = 2); var y = new v(c); for (h = i.length, n = 0; n < c; n += 1) { for (f = createSizedArray(h), p = n / (c - 1), o = m = 0; o < h; o += 1)l = bm_pow(1 - p, 3) * e[o] + 3 * bm_pow(1 - p, 2) * p * (e[o] + i[o]) + 3 * (1 - p) * bm_pow(p, 2) * (r[o] + s[o]) + bm_pow(p, 3) * r[o], f[o] = l, null !== u && (m += bm_pow(f[o] - u[o], 2)); d += m = bm_sqrt(m), y.points[n] = new b(m, f), u = f } y.segmentLength = d, t.bezierData = y, E[a] = y } }); function k(t, e) { var r = e.percents, i = e.lengths, s = r.length, a = bm_floor((s - 1) * t), n = t * e.addedLength, o = 0; if (a === s - 1 || 0 === a || n === i[a]) return r[a]; for (var h = i[a] > n ? -1 : 1, l = !0; l;)if (i[a] <= n && i[a + 1] > n ? (o = (n - i[a]) / (i[a + 1] - i[a]), l = !1) : a += h, a < 0 || s - 1 <= a) { if (a === s - 1) return r[a]; l = !1 } return r[a] + (r[a + 1] - r[a]) * o } var M = createTypedArray("float32", 8); return { getSegmentsLength: function (t) { var e, r = segments_length_pool.newElement(), i = t.c, s = t.v, a = t.o, n = t.i, o = t._length, h = r.lengths, l = 0; for (e = 0; e < o - 1; e += 1)h[e] = p(s[e], s[e + 1], a[e], n[e + 1]), l += h[e].addedLength; return i && o && (h[e] = p(s[e], s[0], a[e], n[0]), l += h[e].addedLength), r.totalLength = l, r }, getNewSegment: function (t, e, r, i, s, a, n) { var o, h = k(s = s < 0 ? 0 : 1 < s ? 1 : s, n), l = k(a = 1 < a ? 1 : a, n), p = t.length, m = 1 - h, f = 1 - l, c = m * m * m, d = h * m * m * 3, u = h * h * m * 3, y = h * h * h, g = m * m * f, v = h * m * f + m * h * f + m * m * l, b = h * h * f + m * h * l + h * m * l, E = h * h * l, x = m * f * f, P = h * f * f + m * l * f + m * f * l, S = h * l * f + m * l * l + h * f * l, _ = h * l * l, C = f * f * f, A = l * f * f + f * l * f + f * f * l, T = l * l * f + f * l * l + l * f * l, D = l * l * l; for (o = 0; o < p; o += 1)M[4 * o] = Math.round(1e3 * (c * t[o] + d * r[o] + u * i[o] + y * e[o])) / 1e3, M[4 * o + 1] = Math.round(1e3 * (g * t[o] + v * r[o] + b * i[o] + E * e[o])) / 1e3, M[4 * o + 2] = Math.round(1e3 * (x * t[o] + P * r[o] + S * i[o] + _ * e[o])) / 1e3, M[4 * o + 3] = Math.round(1e3 * (C * t[o] + A * r[o] + T * i[o] + D * e[o])) / 1e3; return M }, getPointInSegment: function (t, e, r, i, s, a) { var n = k(s, a), o = 1 - n; return [Math.round(1e3 * (o * o * o * t[0] + (n * o * o + o * n * o + o * o * n) * r[0] + (n * n * o + o * n * n + n * o * n) * i[0] + n * n * n * e[0])) / 1e3, Math.round(1e3 * (o * o * o * t[1] + (n * o * o + o * n * o + o * o * n) * r[1] + (n * n * o + o * n * n + n * o * n) * i[1] + n * n * n * e[1])) / 1e3] }, buildBezierData: t, pointOnLine2D: g, pointOnLine3D: function (t, e, r, i, s, a, n, o, h) { if (0 === r && 0 === a && 0 === h) return g(t, e, i, s, n, o); var l, p = Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - e, 2) + Math.pow(a - r, 2)), m = Math.sqrt(Math.pow(n - t, 2) + Math.pow(o - e, 2) + Math.pow(h - r, 2)), f = Math.sqrt(Math.pow(n - i, 2) + Math.pow(o - s, 2) + Math.pow(h - a, 2)); return -1e-4 < (l = m < p ? f < p ? p - m - f : f - m - p : m < f ? f - m - p : m - p - f) && l < 1e-4 } } } !function () { for (var a = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !window.requestAnimationFrame; ++e)window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"]; window.requestAnimationFrame || (window.requestAnimationFrame = function (t, e) { var r = (new Date).getTime(), i = Math.max(0, 16 - (r - a)), s = setTimeout(function () { t(r + i) }, i); return a = r + i, s }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) { clearTimeout(t) }) }(); var bez = bezFunction(); function dataFunctionManager() { function c(t, e) { for (var r = 0, i = e.length; r < i;) { if (e[r].id === t) return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers)) : (e[r].layers.__used = !0, e[r].layers); r += 1 } } function d(t) { var e, r, i; for (e = t.length - 1; 0 <= e; e -= 1)if ("sh" == t[e].ty) { if (t[e].ks.k.i) u(t[e].ks.k); else for (i = t[e].ks.k.length, r = 0; r < i; r += 1)t[e].ks.k[r].s && u(t[e].ks.k[r].s[0]), t[e].ks.k[r].e && u(t[e].ks.k[r].e[0]); !0 } else "gr" == t[e].ty && d(t[e].it) } function u(t) { var e, r = t.i.length; for (e = 0; e < r; e += 1)t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1] } function o(t, e) { var r = e ? e.split(".") : [100, 100, 100]; return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && void 0)) } var h, r = function () { var i = [4, 4, 14]; function s(t) { var e, r, i, s = t.length; for (e = 0; e < s; e += 1)5 === t[e].ty && (r = t[e], void 0, i = r.t.d, r.t.d = { k: [{ s: i, t: 0 }] }) } return function (t) { if (o(i, t.v) && (s(t.layers), t.assets)) { var e, r = t.assets.length; for (e = 0; e < r; e += 1)t.assets[e].layers && s(t.assets[e].layers) } } }(), i = (h = [4, 7, 99], function (t) { if (t.chars && !o(h, t.v)) { var e, r, i, s, a, n = t.chars.length; for (e = 0; e < n; e += 1)if (t.chars[e].data && t.chars[e].data.shapes) for (i = (a = t.chars[e].data.shapes[0].it).length, r = 0; r < i; r += 1)(s = a[r].ks.k).__converted || (u(a[r].ks.k), s.__converted = !0) } }), s = function () { var i = [4, 1, 9]; function a(t) { var e, r, i, s = t.length; for (e = 0; e < s; e += 1)if ("gr" === t[e].ty) a(t[e].it); else if ("fl" === t[e].ty || "st" === t[e].ty) if (t[e].c.k && t[e].c.k[0].i) for (i = t[e].c.k.length, r = 0; r < i; r += 1)t[e].c.k[r].s && (t[e].c.k[r].s[0] /= 255, t[e].c.k[r].s[1] /= 255, t[e].c.k[r].s[2] /= 255, t[e].c.k[r].s[3] /= 255), t[e].c.k[r].e && (t[e].c.k[r].e[0] /= 255, t[e].c.k[r].e[1] /= 255, t[e].c.k[r].e[2] /= 255, t[e].c.k[r].e[3] /= 255); else t[e].c.k[0] /= 255, t[e].c.k[1] /= 255, t[e].c.k[2] /= 255, t[e].c.k[3] /= 255 } function s(t) { var e, r = t.length; for (e = 0; e < r; e += 1)4 === t[e].ty && a(t[e].shapes) } return function (t) { if (o(i, t.v) && (s(t.layers), t.assets)) { var e, r = t.assets.length; for (e = 0; e < r; e += 1)t.assets[e].layers && s(t.assets[e].layers) } } }(), a = function () { var i = [4, 4, 18]; function l(t) { var e, r, i; for (e = t.length - 1; 0 <= e; e -= 1)if ("sh" == t[e].ty) { if (t[e].ks.k.i) t[e].ks.k.c = t[e].closed; else for (i = t[e].ks.k.length, r = 0; r < i; r += 1)t[e].ks.k[r].s && (t[e].ks.k[r].s[0].c = t[e].closed), t[e].ks.k[r].e && (t[e].ks.k[r].e[0].c = t[e].closed); !0 } else "gr" == t[e].ty && l(t[e].it) } function s(t) { var e, r, i, s, a, n, o = t.length; for (r = 0; r < o; r += 1) { if ((e = t[r]).hasMask) { var h = e.masksProperties; for (s = h.length, i = 0; i < s; i += 1)if (h[i].pt.k.i) h[i].pt.k.c = h[i].cl; else for (n = h[i].pt.k.length, a = 0; a < n; a += 1)h[i].pt.k[a].s && (h[i].pt.k[a].s[0].c = h[i].cl), h[i].pt.k[a].e && (h[i].pt.k[a].e[0].c = h[i].cl) } 4 === e.ty && l(e.shapes) } } return function (t) { if (o(i, t.v) && (s(t.layers), t.assets)) { var e, r = t.assets.length; for (e = 0; e < r; e += 1)t.assets[e].layers && s(t.assets[e].layers) } } }(); var t = {}; return t.completeData = function (t, e) { t.__complete || (s(t), r(t), i(t), a(t), function t(e, r, i) { var s, a, n, o, h, l, p, m = e.length; for (a = 0; a < m; a += 1)if ("ks" in (s = e[a]) && !s.completed) { if (s.completed = !0, s.tt && (e[a - 1].td = s.tt), s.hasMask) { var f = s.masksProperties; for (o = f.length, n = 0; n < o; n += 1)if (f[n].pt.k.i) u(f[n].pt.k); else for (l = f[n].pt.k.length, h = 0; h < l; h += 1)f[n].pt.k[h].s && u(f[n].pt.k[h].s[0]), f[n].pt.k[h].e && u(f[n].pt.k[h].e[0]) } 0 === s.ty ? (s.layers = c(s.refId, r), t(s.layers, r, i)) : 4 === s.ty ? d(s.shapes) : 5 == s.ty && (0 !== (p = s).t.a.length || "m" in p.t.p || (p.singleShape = !0)) } }(t.layers, t.assets, e), t.__complete = !0) }, t } var dataManager = dataFunctionManager(), FontManager = function () { var a = { w: 0, size: 0, shapes: [] }, t = []; function u(t, e) { var r = createTag("span"); r.style.fontFamily = e; var i = createTag("span"); i.innerHTML = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(i), document.body.appendChild(r); var s = i.offsetWidth; return i.style.fontFamily = t + ", " + e, { node: i, w: s, parent: r } } t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]); var e = function () { this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now() }; return e.getCombinedCharacterCodes = function () { return t }, e.prototype.addChars = function (t) { if (t) { this.chars || (this.chars = []); var e, r, i, s = t.length, a = this.chars.length; for (e = 0; e < s; e += 1) { for (r = 0, i = !1; r < a;)this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0), r += 1; i || (this.chars.push(t[e]), a += 1) } } }, e.prototype.addFonts = function (t, e) { if (t) { if (this.chars) return this.isLoaded = !0, void (this.fonts = t.list); var r, i, s, a, n = t.list, o = n.length, h = o; for (r = 0; r < o; r += 1) { var l, p, m = !0; if (n[r].loaded = !1, n[r].monoCase = u(n[r].fFamily, "monospace"), n[r].sansCase = u(n[r].fFamily, "sans-serif"), n[r].fPath) { if ("p" === n[r].fOrigin || 3 === n[r].origin) { if (0 < (l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[r].fFamily + '"], style[f-origin="3"][f-family="' + n[r].fFamily + '"]')).length && (m = !1), m) { var f = createTag("style"); f.setAttribute("f-forigin", n[r].fOrigin), f.setAttribute("f-origin", n[r].origin), f.setAttribute("f-family", n[r].fFamily), f.type = "text/css", f.innerHTML = "@font-face {font-family: " + n[r].fFamily + "; font-style: normal; src: url('" + n[r].fPath + "');}", e.appendChild(f) } } else if ("g" === n[r].fOrigin || 1 === n[r].origin) { for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), p = 0; p < l.length; p++)-1 !== l[p].href.indexOf(n[r].fPath) && (m = !1); if (m) { var c = createTag("link"); c.setAttribute("f-forigin", n[r].fOrigin), c.setAttribute("f-origin", n[r].origin), c.type = "text/css", c.rel = "stylesheet", c.href = n[r].fPath, document.body.appendChild(c) } } else if ("t" === n[r].fOrigin || 2 === n[r].origin) { for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), p = 0; p < l.length; p++)n[r].fPath === l[p].src && (m = !1); if (m) { var d = createTag("link"); d.setAttribute("f-forigin", n[r].fOrigin), d.setAttribute("f-origin", n[r].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", n[r].fPath), e.appendChild(d) } } } else n[r].loaded = !0, h -= 1; n[r].helper = (i = e, s = n[r], a = void 0, (a = createNS("text")).style.fontSize = "100px", a.setAttribute("font-family", s.fFamily), a.setAttribute("font-style", s.fStyle), a.setAttribute("font-weight", s.fWeight), a.textContent = "1", s.fClass ? (a.style.fontFamily = "inherit", a.className = s.fClass) : a.style.fontFamily = s.fFamily, i.appendChild(a), createTag("canvas").getContext("2d").font = s.fWeight + " " + s.fStyle + " 100px " + s.fFamily, a), n[r].cache = {}, this.fonts.push(n[r]) } 0 === h ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100) } else this.isLoaded = !0 }, e.prototype.getCharData = function (t, e, r) { for (var i = 0, s = this.chars.length; i < s;) { if (this.chars[i].ch === t && this.chars[i].style === e && this.chars[i].fFamily === r) return this.chars[i]; i += 1 } return console && console.warn && console.warn("Missing character from exported characters list: ", t, e, r), a }, e.prototype.getFontByName = function (t) { for (var e = 0, r = this.fonts.length; e < r;) { if (this.fonts[e].fName === t) return this.fonts[e]; e += 1 } return this.fonts[0] }, e.prototype.measureText = function (t, e, r) { var i = this.getFontByName(e), s = t.charCodeAt(0); if (!i.cache[s + 1]) { var a = i.helper; if (" " === t) { a.textContent = "|" + t + "|"; var n = a.getComputedTextLength(); a.textContent = "||"; var o = a.getComputedTextLength(); i.cache[s + 1] = (n - o) / 100 } else a.textContent = t, i.cache[s + 1] = a.getComputedTextLength() / 100 } return i.cache[s + 1] * r }, e.prototype.checkLoadedFonts = function () { var t, e, r, i = this.fonts.length, s = i; for (t = 0; t < i; t += 1)this.fonts[t].loaded ? s -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (s -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (s -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent))); 0 !== s && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout(function () { this.isLoaded = !0 }.bind(this), 0) }, e.prototype.loaded = function () { return this.isLoaded }, e }(), PropertyFactory = function () { var m = initialDefaultFrame, s = Math.abs; function f(t, e) { var r, i = this.offsetTime; "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length)); for (var s, a, n, o, h, l, p, m, f = e.lastIndex, c = f, d = this.keyframes.length - 1, u = !0; u;) { if (s = this.keyframes[c], a = this.keyframes[c + 1], c === d - 1 && t >= a.t - i) { s.h && (s = a), f = 0; break } if (a.t - i > t) { f = c; break } c < d - 1 ? c += 1 : (f = 0, u = !1) } var y, g, v, b, E, x, P, S, _, C = a.t - i, A = s.t - i; if (s.to) { s.bezierData || bez.buildBezierData(s); var T = s.bezierData; if (C <= t || t < A) { var D = C <= t ? T.points.length - 1 : 0; for (o = T.points[D].point.length, n = 0; n < o; n += 1)r[n] = T.points[D].point[n] } else { s.__fnct ? m = s.__fnct : (m = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, s.__fnct = m), h = m((t - A) / (C - A)); var k, M = T.segmentLength * h, w = e.lastFrame < t && e._lastBezierData === T ? e._lastAddedLength : 0; for (p = e.lastFrame < t && e._lastBezierData === T ? e._lastPoint : 0, u = !0, l = T.points.length; u;) { if (w += T.points[p].partialLength, 0 === M || 0 === h || p === T.points.length - 1) { for (o = T.points[p].point.length, n = 0; n < o; n += 1)r[n] = T.points[p].point[n]; break } if (w <= M && M < w + T.points[p + 1].partialLength) { for (k = (M - w) / T.points[p + 1].partialLength, o = T.points[p].point.length, n = 0; n < o; n += 1)r[n] = T.points[p].point[n] + (T.points[p + 1].point[n] - T.points[p].point[n]) * k; break } p < l - 1 ? p += 1 : u = !1 } e._lastPoint = p, e._lastAddedLength = w - T.points[p].partialLength, e._lastBezierData = T } } else { var F, I, V, R, B; if (d = s.s.length, this.sh && 1 !== s.h) if (C <= t) r[0] = s.e[0], r[1] = s.e[1], r[2] = s.e[2]; else if (t <= A) r[0] = s.s[0], r[1] = s.s[1], r[2] = s.s[2]; else { var L = z(s.s), G = z(s.e); y = r, g = function (t, e, r) { var i, s, a, n, o, h = [], l = t[0], p = t[1], m = t[2], f = t[3], c = e[0], d = e[1], u = e[2], y = e[3]; (s = l * c + p * d + m * u + f * y) < 0 && (s = -s, c = -c, d = -d, u = -u, y = -y); o = 1e-6 < 1 - s ? (i = Math.acos(s), a = Math.sin(i), n = Math.sin((1 - r) * i) / a, Math.sin(r * i) / a) : (n = 1 - r, r); return h[0] = n * l + o * c, h[1] = n * p + o * d, h[2] = n * m + o * u, h[3] = n * f + o * y, h }(L, G, (t - A) / (C - A)), v = g[0], b = g[1], E = g[2], x = g[3], P = Math.atan2(2 * b * x - 2 * v * E, 1 - 2 * b * b - 2 * E * E), S = Math.asin(2 * v * b + 2 * E * x), _ = Math.atan2(2 * v * x - 2 * b * E, 1 - 2 * v * v - 2 * E * E), y[0] = P / degToRads, y[1] = S / degToRads, y[2] = _ / degToRads } else for (c = 0; c < d; c += 1)1 !== s.h && (h = C <= t ? 1 : t < A ? 0 : (s.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[c] ? m = s.__fnct[c] : (F = void 0 === typeof s.o.x[c] ? s.o.x[0] : s.o.x[c], I = void 0 === typeof s.o.y[c] ? s.o.y[0] : s.o.y[c], V = void 0 === typeof s.i.x[c] ? s.i.x[0] : s.i.x[c], R = void 0 === typeof s.i.y[c] ? s.i.y[0] : s.i.y[c], m = BezierFactory.getBezierEasing(F, I, V, R).get, s.__fnct[c] = m)) : s.__fnct ? m = s.__fnct : (F = s.o.x, I = s.o.y, V = s.i.x, R = s.i.y, m = BezierFactory.getBezierEasing(F, I, V, R).get, s.__fnct = m), m((t - A) / (C - A)))), B = 1 === s.h ? s.s[c] : s.s[c] + (s.e[c] - s.s[c]) * h, 1 === d ? r = B : r[c] = B } return e.lastIndex = f, r } function z(t) { var e = t[0] * degToRads, r = t[1] * degToRads, i = t[2] * degToRads, s = Math.cos(e / 2), a = Math.cos(r / 2), n = Math.cos(i / 2), o = Math.sin(e / 2), h = Math.sin(r / 2), l = Math.sin(i / 2); return [o * h * n + s * a * l, o * a * n + s * h * l, s * h * n - o * a * l, s * a * n - o * h * l] } function c() { var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime; if (!(t === this._caching.lastFrame || this._caching.lastFrame !== m && (this._caching.lastFrame >= r && r <= t || this._caching.lastFrame < e && t < e))) { this._caching.lastFrame >= t && (this._caching._lastBezierData = null, this._caching.lastIndex = 0); var i = this.interpolateValue(t, this._caching); this.pv = i } return this._caching.lastFrame = t, this.pv } function d(t) { var e; if ("unidimensional" === this.propType) e = t * this.mult, 1e-5 < s(this.v - e) && (this.v = e, this._mdf = !0); else for (var r = 0, i = this.v.length; r < i;)e = t[r] * this.mult, 1e-5 < s(this.v[r] - e) && (this.v[r] = e, this._mdf = !0), r += 1 } function u() { if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) if (this.lock) this.setVValue(this.pv); else { this.lock = !0, this._mdf = this._isFirstFrame; var t, e = this.effectsSequence.length, r = this.kf ? this.pv : this.data.k; for (t = 0; t < e; t += 1)r = this.effectsSequence[t](r); this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId } } function y(t) { this.effectsSequence.push(t), this.container.addDynamicProperty(this) } function n(t, e, r, i) { this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = u, this.setVValue = d, this.addEffect = y } function o(t, e, r, i) { this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1; var s, a = e.k.length; this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a); createTypedArray("float32", a); for (this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1)this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s]; this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = u, this.setVValue = d, this.addEffect = y } function h(t, e, r, i) { this.propType = "unidimensional", this.keyframes = e.k, this.offsetTime = t.data.st, this.frameId = -1, this._caching = { lastFrame: m, lastIndex: 0, value: 0, _lastBezierData: null }, this.k = !0, this.kf = !0, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = m, this.pv = m, this._isFirstFrame = !0, this.getValue = u, this.setVValue = d, this.interpolateValue = f, this.effectsSequence = [c.bind(this)], this.addEffect = y } function l(t, e, r, i) { this.propType = "multidimensional"; var s, a, n, o, h, l = e.k.length; for (s = 0; s < l - 1; s += 1)e.k[s].to && e.k[s].s && e.k[s].e && (a = e.k[s].s, n = e.k[s].e, o = e.k[s].to, h = e.k[s].ti, (2 === a.length && (a[0] !== n[0] || a[1] !== n[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === a.length && (a[0] !== n[0] || a[1] !== n[1] || a[2] !== n[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[s].to = null, e.k[s].ti = null), a[0] === n[0] && a[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === a.length || a[2] === n[2] && 0 === o[2] && 0 === h[2]) && (e.k[s].to = null, e.k[s].ti = null)); this.effectsSequence = [c.bind(this)], this.keyframes = e.k, this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = u, this.setVValue = d, this.interpolateValue = f, this.frameId = -1; var p = e.k[0].s.length; for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), s = 0; s < p; s += 1)this.v[s] = m, this.pv[s] = m; this._caching = { lastFrame: m, lastIndex: 0, value: createTypedArray("float32", p) }, this.addEffect = y } return { getProp: function (t, e, r, i, s) { var a; if (0 === e.a) a = 0 === r ? new n(t, e, i, s) : new o(t, e, i, s); else if (1 === e.a) a = 0 === r ? new h(t, e, i, s) : new l(t, e, i, s); else if (e.k.length) if ("number" == typeof e.k[0]) a = new o(t, e, i, s); else switch (r) { case 0: a = new h(t, e, i, s); break; case 1: a = new l(t, e, i, s) } else a = new n(t, e, i, s); return a.effectsSequence.length && s.addDynamicProperty(a), a } } }(), TransformPropertyFactory = function () { function i(t, e, r) { if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), e.r) this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this); else if (e.rx) { if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) { var i, s = e.or.k.length; for (i = 0; i < s; i += 1)e.or.k[i].to = e.or.k[i].ti = null } this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0 } e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), e.a && (this.a = PropertyFactory.getProp(t, e.a, 1, 0, this)), e.s && (this.s = PropertyFactory.getProp(t, e.s, 1, .01, this)), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = { _mdf: !1, v: 1 }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0) } return i.prototype = { applyToMatrix: function (t) { var e = this._mdf; this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]) }, getValue: function (t) { if (this.elem.globalData.frameId !== this.frameId) { if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) { if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) { var e, r, i = this.elem.globalData.frameRate; if (this.p && this.p.keyframes && this.p.getValueAtTime) r = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .01) / i, 0)) : (e = this.p.pv, this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime)); else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) { e = [], r = []; var s = this.px, a = this.py; s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (e[0] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0), e[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), r[0] = s.getValueAtTime(s.keyframes[0].t / i, 0), r[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (e[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0), e[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), r[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0), r[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (e = [s.pv, a.pv], r[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime), r[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime)) } this.v.rotate(-Math.atan2(e[1] - r[1], e[0] - r[0])) } this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]) } this.frameId = this.elem.globalData.frameId } }, precalculateMatrix: function () { if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) { if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) { if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return; this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3 } if (this.r) { if (this.r.effectsSequence.length) return; this.pre.rotate(-this.r.v), this.appliedTransformations = 4 } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4) } }, autoOrient: function () { } }, extendPrototype([DynamicPropertyContainer], i), i.prototype.addDynamicProperty = function (t) { this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0 }, i.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, { getTransformProperty: function (t, e, r) { return new i(t, e, r) } } }(); function ShapePath() { this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength) } ShapePath.prototype.setPathData = function (t, e) { this.c = t, this.setLength(e); for (var r = 0; r < e;)this.v[r] = point_pool.newElement(), this.o[r] = point_pool.newElement(), this.i[r] = point_pool.newElement(), r += 1 }, ShapePath.prototype.setLength = function (t) { for (; this._maxLength < t;)this.doubleArrayLength(); this._length = t }, ShapePath.prototype.doubleArrayLength = function () { this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2 }, ShapePath.prototype.setXYAt = function (t, e, r, i, s) { var a; switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) { case "v": a = this.v; break; case "i": a = this.i; break; case "o": a = this.o }(!a[i] || a[i] && !s) && (a[i] = point_pool.newElement()), a[i][0] = t, a[i][1] = e }, ShapePath.prototype.setTripleAt = function (t, e, r, i, s, a, n, o) { this.setXYAt(t, e, "v", n, o), this.setXYAt(r, i, "o", n, o), this.setXYAt(s, a, "i", n, o) }, ShapePath.prototype.reverse = function () { var t = new ShapePath; t.setPathData(this.c, this._length); var e = this.v, r = this.o, i = this.i, s = 0; this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), s = 1); var a, n = this._length - 1, o = this._length; for (a = s; a < o; a += 1)t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], a, !1), n -= 1; return t }; var ShapePropertyFactory = function () { var s = -999999; function t(t, e, r) { var i, s, a, n, o, h, l, p, m, f = r.lastIndex, c = this.keyframes; if (t < c[0].t - this.offsetTime) i = c[0].s[0], a = !0, f = 0; else if (t >= c[c.length - 1].t - this.offsetTime) i = 1 === c[c.length - 2].h ? c[c.length - 1].s[0] : c[c.length - 2].e[0], a = !0; else { for (var d, u, y = f, g = c.length - 1, v = !0; v && (d = c[y], !((u = c[y + 1]).t - this.offsetTime > t));)y < g - 1 ? y += 1 : v = !1; if (f = y, !(a = 1 === d.h)) { if (t >= u.t - this.offsetTime) p = 1; else if (t < d.t - this.offsetTime) p = 0; else { var b; d.__fnct ? b = d.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = b), p = b((t - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime))) } s = d.e[0] } i = d.s[0] } for (h = e._length, l = i.i[0].length, r.lastIndex = f, n = 0; n < h; n += 1)for (o = 0; o < l; o += 1)m = a ? i.i[n][o] : i.i[n][o] + (s.i[n][o] - i.i[n][o]) * p, e.i[n][o] = m, m = a ? i.o[n][o] : i.o[n][o] + (s.o[n][o] - i.o[n][o]) * p, e.o[n][o] = m, m = a ? i.v[n][o] : i.v[n][o] + (s.v[n][o] - i.v[n][o]) * p, e.v[n][o] = m } function a() { this.paths = this.localShapeCollection } function e(t) { (function (t, e) { if (t._length !== e._length || t.c !== e.c) return !1; var r, i = t._length; for (r = 0; r < i; r += 1)if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1; return !0 })(this.v, t) || (this.v = shape_pool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection) } function r() { if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) if (this.lock) this.setVValue(this.pv); else { this.lock = !0, this._mdf = !1; var t, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k, r = this.effectsSequence.length; for (t = 0; t < r; t += 1)e = this.effectsSequence[t](e); this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId } } function n(t, e, r) { this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1; var i = 3 === r ? e.pt.k : e.ks.k; this.v = shape_pool.clone(i), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = a, this.effectsSequence = [] } function i(t) { this.effectsSequence.push(t), this.container.addDynamicProperty(this) } function o(t, e, r) { this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === r ? e.pt.k : e.ks.k, this.k = !0, this.kf = !0; var i = this.keyframes[0].s[0].i.length; this.keyframes[0].s[0].i[0].length; this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, i), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = s, this.reset = a, this._caching = { lastFrame: s, lastIndex: 0 }, this.effectsSequence = [function () { var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, i = this._caching.lastFrame; return i !== s && (i < e && t < e || r < i && r < t) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv }.bind(this)] } n.prototype.interpolateShape = t, n.prototype.getValue = r, n.prototype.setVValue = e, n.prototype.addEffect = i, o.prototype.getValue = r, o.prototype.interpolateShape = t, o.prototype.setVValue = e, o.prototype.addEffect = i; var h = function () { var n = roundCorner; function t(t, e) { this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath()) } return t.prototype = { reset: a, getValue: function () { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath()) }, convertEllToPath: function () { var t = this.p.v[0], e = this.p.v[1], r = this.s.v[0] / 2, i = this.s.v[1] / 2, s = 3 !== this.d, a = this.v; a.v[0][0] = t, a.v[0][1] = e - i, a.v[1][0] = s ? t + r : t - r, a.v[1][1] = e, a.v[2][0] = t, a.v[2][1] = e + i, a.v[3][0] = s ? t - r : t + r, a.v[3][1] = e, a.i[0][0] = s ? t - r * n : t + r * n, a.i[0][1] = e - i, a.i[1][0] = s ? t + r : t - r, a.i[1][1] = e - i * n, a.i[2][0] = s ? t + r * n : t - r * n, a.i[2][1] = e + i, a.i[3][0] = s ? t - r : t + r, a.i[3][1] = e + i * n, a.o[0][0] = s ? t + r * n : t - r * n, a.o[0][1] = e - i, a.o[1][0] = s ? t + r : t - r, a.o[1][1] = e + i * n, a.o[2][0] = s ? t - r * n : t + r * n, a.o[2][1] = e + i, a.o[3][0] = s ? t - r : t + r, a.o[3][1] = e - i * n } }, extendPrototype([DynamicPropertyContainer], t), t }(), l = function () { function t(t, e) { this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath()) } return t.prototype = { reset: a, getValue: function () { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath()) }, convertStarToPath: function () { var t, e, r, i, s = 2 * Math.floor(this.pt.v), a = 2 * Math.PI / s, n = !0, o = this.or.v, h = this.ir.v, l = this.os.v, p = this.is.v, m = 2 * Math.PI * o / (2 * s), f = 2 * Math.PI * h / (2 * s), c = -Math.PI / 2; c += this.r.v; var d = 3 === this.data.d ? -1 : 1; for (t = this.v._length = 0; t < s; t += 1) { r = n ? l : p, i = n ? m : f; var u = (e = n ? o : h) * Math.cos(c), y = e * Math.sin(c), g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y), v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y); u += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(u, y, u - g * i * r * d, y - v * i * r * d, u + g * i * r * d, y + v * i * r * d, t, !0), n = !n, c += a * d } }, convertPolygonToPath: function () { var t, e = Math.floor(this.pt.v), r = 2 * Math.PI / e, i = this.or.v, s = this.os.v, a = 2 * Math.PI * i / (4 * e), n = -Math.PI / 2, o = 3 === this.data.d ? -1 : 1; for (n += this.r.v, t = this.v._length = 0; t < e; t += 1) { var h = i * Math.cos(n), l = i * Math.sin(n), p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l), m = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l); h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * a * s * o, l - m * a * s * o, h + p * a * s * o, l + m * a * s * o, t, !0), n += r * o } this.paths.length = 0, this.paths[0] = this.v } }, extendPrototype([DynamicPropertyContainer], t), t }(), p = function () { function t(t, e) { this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath()) } return t.prototype = { convertRectToPath: function () { var t = this.p.v[0], e = this.p.v[1], r = this.s.v[0] / 2, i = this.s.v[1] / 2, s = bm_min(r, i, this.r.v), a = s * (1 - roundCorner); this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + s, t + r, e - i + s, t + r, e - i + a, 0, !0), this.v.setTripleAt(t + r, e + i - s, t + r, e + i - a, t + r, e + i - s, 1, !0), 0 !== s ? (this.v.setTripleAt(t + r - s, e + i, t + r - s, e + i, t + r - a, e + i, 2, !0), this.v.setTripleAt(t - r + s, e + i, t - r + a, e + i, t - r + s, e + i, 3, !0), this.v.setTripleAt(t - r, e + i - s, t - r, e + i - s, t - r, e + i - a, 4, !0), this.v.setTripleAt(t - r, e - i + s, t - r, e - i + a, t - r, e - i + s, 5, !0), this.v.setTripleAt(t - r + s, e - i, t - r + s, e - i, t - r + a, e - i, 6, !0), this.v.setTripleAt(t + r - s, e - i, t + r - a, e - i, t + r - s, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + a, e + i, t - r, e + i, 2), this.v.setTripleAt(t - r, e - i, t - r, e - i + a, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + s, t + r, e - i + a, t + r, e - i + s, 0, !0), 0 !== s ? (this.v.setTripleAt(t + r - s, e - i, t + r - s, e - i, t + r - a, e - i, 1, !0), this.v.setTripleAt(t - r + s, e - i, t - r + a, e - i, t - r + s, e - i, 2, !0), this.v.setTripleAt(t - r, e - i + s, t - r, e - i + s, t - r, e - i + a, 3, !0), this.v.setTripleAt(t - r, e + i - s, t - r, e + i - a, t - r, e + i - s, 4, !0), this.v.setTripleAt(t - r + s, e + i, t - r + s, e + i, t - r + a, e + i, 5, !0), this.v.setTripleAt(t + r - s, e + i, t + r - a, e + i, t + r - s, e + i, 6, !0), this.v.setTripleAt(t + r, e + i - s, t + r, e + i - s, t + r, e + i - a, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + a, e - i, t - r, e - i, 1, !0), this.v.setTripleAt(t - r, e + i, t - r, e + i - a, t - r, e + i, 2, !0), this.v.setTripleAt(t + r, e + i, t + r - a, e + i, t + r, e + i, 3, !0))) }, getValue: function (t) { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath()) }, reset: a }, extendPrototype([DynamicPropertyContainer], t), t }(); var m = { getShapeProp: function (t, e, r) { var i; if (3 === r || 4 === r) { var s = 3 === r ? e.pt : e.ks, a = s.k; i = 1 === s.a || a.length ? new o(t, e, r) : new n(t, e, r) } else 5 === r ? i = new p(t, e) : 6 === r ? i = new h(t, e) : 7 === r && (i = new l(t, e)); return i.k && t.addDynamicProperty(i), i }, getConstructorFunction: function () { return n }, getKeyframedConstructorFunction: function () { return o } }; return m }(), ShapeModifiers = (Tr = {}, Ur = {}, Tr.registerModifier = function (t, e) { Ur[t] || (Ur[t] = e) }, Tr.getModifier = function (t, e, r) { return new Ur[t](e, r) }, Tr), Tr, Ur; function ShapeModifier() { } function TrimModifier() { } function RoundCornersModifier() { } function RepeaterModifier() { } function ShapeCollection() { this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength) } function DashProperty(t, e, r, i) { this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i); var s, a, n = e.length || 0; for (s = 0; s < n; s += 1)a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = { n: e[s].n, p: a }; this.k || this.getValue(!0), this._isAnimated = this.k } function GradientProperty(t, e, r) { this.data = e, this.c = createTypedArray("uint8c", 4 * e.p); var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p; this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0) } ShapeModifier.prototype.initModifierProperties = function () { }, ShapeModifier.prototype.addShapeToModifier = function () { }, ShapeModifier.prototype.addShape = function (t) { if (!this.closed) { var e = { shape: t.sh, data: t, localShapeCollection: shapeCollection_pool.newShapeCollection() }; this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated() } }, ShapeModifier.prototype.init = function (t, e) { this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0) }, ShapeModifier.prototype.processKeys = function () { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties()) }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function (t, e) { this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length }, TrimModifier.prototype.addShapeToModifier = function (t) { t.pathsData = [] }, TrimModifier.prototype.calculateShapeEdges = function (t, e, r, i, s) { var a = []; e <= 1 ? a.push({ s: t, e: e }) : 1 <= t ? a.push({ s: t - 1, e: e - 1 }) : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 })); var n, o, h = [], l = a.length; for (n = 0; n < l; n += 1) { var p, m; if ((o = a[n]).e * s < i || o.s * s > i + r); else p = o.s * s <= i ? 0 : (o.s * s - i) / r, m = o.e * s >= i + r ? 1 : (o.e * s - i) / r, h.push([p, m]) } return h.length || h.push([0, 0]), h }, TrimModifier.prototype.releasePathsData = function (t) { var e, r = t.length; for (e = 0; e < r; e += 1)segments_length_pool.release(t[e]); return t.length = 0, t }, TrimModifier.prototype.processShapes = function (t) { var e, r, i; if (this._mdf || t) { var s = this.o.v % 360 / 360; if (s < 0 && (s += 1), e = (1 < this.s.v ? 1 : this.s.v < 0 ? 0 : this.s.v) + s, (r = (1 < this.e.v ? 1 : this.e.v < 0 ? 0 : this.e.v) + s) < e) { var a = e; e = r, r = a } e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r } else e = this.sValue, r = this.eValue; var n, o, h, l, p, m, f = this.shapes.length, c = 0; if (r === e) for (n = 0; n < f; n += 1)this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection; else if (1 === r && 0 === e || 0 === r && 1 === e) { if (this._mdf) for (n = 0; n < f; n += 1)this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0 } else { var d, u, y = []; for (n = 0; n < f; n += 1)if ((d = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) { if (h = (i = d.shape.paths)._length, m = 0, !d.shape._mdf && d.pathsData.length) m = d.totalShapeLength; else { for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1)p = bez.getSegmentsLength(i.shapes[o]), l.push(p), m += p.totalLength; d.totalShapeLength = m, d.pathsData = l } c += m, d.shape._mdf = !0 } else d.shape.paths = d.localShapeCollection; var g, v = e, b = r, E = 0; for (n = f - 1; 0 <= n; n -= 1)if ((d = this.shapes[n]).shape._mdf) { for ((u = d.localShapeCollection).releaseShapes(), 2 === this.m && 1 < f ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, E, c), E += d.totalShapeLength) : g = [[v, b]], h = g.length, o = 0; o < h; o += 1) { v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({ s: d.totalShapeLength * v, e: d.totalShapeLength * b }) : 1 <= v ? y.push({ s: d.totalShapeLength * (v - 1), e: d.totalShapeLength * (b - 1) }) : (y.push({ s: d.totalShapeLength * v, e: d.totalShapeLength }), y.push({ s: 0, e: d.totalShapeLength * (b - 1) })); var x = this.addShapes(d, y[0]); if (y[0].s !== y[0].e) { if (1 < y.length) if (d.shape.paths.shapes[d.shape.paths._length - 1].c) { var P = x.pop(); this.addPaths(x, u), x = this.addShapes(d, y[1], P) } else this.addPaths(x, u), x = this.addShapes(d, y[1]); this.addPaths(x, u) } } d.shape.paths = u } } }, TrimModifier.prototype.addPaths = function (t, e) { var r, i = t.length; for (r = 0; r < i; r += 1)e.addShape(t[r]) }, TrimModifier.prototype.addSegment = function (t, e, r, i, s, a, n) { s.setXYAt(e[0], e[1], "o", a), s.setXYAt(r[0], r[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(i[0], i[1], "v", a + 1) }, TrimModifier.prototype.addSegmentFromArray = function (t, e, r, i) { e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1) }, TrimModifier.prototype.addShapes = function (t, e, r) { var i, s, a, n, o, h, l, p, m = t.pathsData, f = t.shape.paths.shapes, c = t.shape.paths._length, d = 0, u = [], y = !0; for (p = r ? (o = r._length, r._length) : (r = shape_pool.newElement(), o = 0), u.push(r), i = 0; i < c; i += 1) { for (h = m[i].lengths, r.c = f[i].c, a = f[i].c ? h.length : h.length + 1, s = 1; s < a; s += 1)if (d + (n = h[s - 1]).addedLength < e.s) d += n.addedLength, r.c = !1; else { if (d > e.e) { r.c = !1; break } e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[s], f[i].v[s], r, o, y), y = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[s], f[i].o[s - 1], f[i].i[s], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[s - 1]), this.addSegmentFromArray(l, r, o, y), y = !1, r.c = !1), d += n.addedLength, o += 1 } if (f[i].c && h.length) { if (n = h[s - 1], d <= e.e) { var g = h[s - 1].addedLength; e.s <= d && e.e >= d + g ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[0], f[i].v[0], r, o, y), y = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[0], f[i].o[s - 1], f[i].i[0], (e.s - d) / g, (e.e - d) / g, h[s - 1]), this.addSegmentFromArray(l, r, o, y), y = !1, r.c = !1) } else r.c = !1; d += n.addedLength, o += 1 } if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e) break; i < c - 1 && (r = shape_pool.newElement(), y = !0, u.push(r), o = 0) } return u }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function (t, e) { this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length }, RoundCornersModifier.prototype.processPath = function (t, e) { var r = shape_pool.newElement(); r.c = t.c; var i, s, a, n, o, h, l, p, m, f, c, d, u, y = t._length, g = 0; for (i = 0; i < y; i += 1)s = t.v[i], n = t.o[i], a = t.i[i], s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = d = s[0] + (o[0] - s[0]) * l, m = u = s[1] - (s[1] - o[1]) * l, f = p - (p - s[0]) * roundCorner, c = m - (m - s[1]) * roundCorner, r.setTripleAt(p, m, f, c, d, u, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = f = s[0] + (o[0] - s[0]) * l, m = c = s[1] + (o[1] - s[1]) * l, d = p - (p - s[0]) * roundCorner, u = m - (m - s[1]) * roundCorner, r.setTripleAt(p, m, f, c, d, u, g)) : r.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g) : r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1; return r }, RoundCornersModifier.prototype.processShapes = function (t) { var e, r, i, s, a, n, o = this.shapes.length, h = this.rd.v; if (0 !== h) for (r = 0; r < o; r += 1) { if ((a = this.shapes[r]).shape.paths, n = a.localShapeCollection, a.shape._mdf || this._mdf || t) for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1)n.addShape(this.processPath(e[i], h)); a.shape.paths = a.localShapeCollection } this.dynamicProperties.length || (this._mdf = !1) }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function (t, e) { this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix }, RepeaterModifier.prototype.applyTransforms = function (t, e, r, i, s, a) { var n = a ? -1 : 1, o = i.s.v[0] + (1 - i.s.v[0]) * (1 - s), h = i.s.v[1] + (1 - i.s.v[1]) * (1 - s); t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / h : h), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]) }, RepeaterModifier.prototype.init = function (t, e, r, i) { this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); for (; 0 < r;)r -= 1, this._elements.unshift(e[r]), 1; this.dynamicProperties.length ? this.k = !0 : this.getValue(!0) }, RepeaterModifier.prototype.resetElements = function (t) { var e, r = t.length; for (e = 0; e < r; e += 1)t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it) }, RepeaterModifier.prototype.cloneElements = function (t) { t.length; var e = JSON.parse(JSON.stringify(t)); return this.resetElements(e), e }, RepeaterModifier.prototype.changeGroupRender = function (t, e) { var r, i = t.length; for (r = 0; r < i; r += 1)t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e) }, RepeaterModifier.prototype.processShapes = function (t) { var e, r, i, s, a; if (this._mdf || t) { var n, o = Math.ceil(this.c.v); if (this._groups.length < o) { for (; this._groups.length < o;) { var h = { it: this.cloneElements(this._elements), ty: "gr" }; h.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1 } this.elem.reloadShapes() } for (i = a = 0; i <= this._groups.length - 1; i += 1)n = a < o, this._groups[i]._render = n, this.changeGroupRender(this._groups[i].it, n), a += 1; this._currentCopies = o; var l = this.o.v, p = l % 1, m = 0 < l ? Math.floor(l) : Math.ceil(l), f = (this.tr.v.props, this.pMatrix.props), c = this.rMatrix.props, d = this.sMatrix.props; this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset(); var u, y, g = 0; if (0 < l) { for (; g < m;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), g += 1; p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), g += p) } else if (l < 0) { for (; m < g;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), g -= 1; p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), g -= p) } for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) { if (y = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== g) { for ((0 !== i && 1 === s || i !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), u = 0; u < y; u += 1)r[u] = this.matrix.props[u]; this.matrix.reset() } else for (this.matrix.reset(), u = 0; u < y; u += 1)r[u] = this.matrix.props[u]; g += 1, a -= 1, i += s } } else for (a = this._currentCopies, i = 0, s = 1; a;)r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += s }, RepeaterModifier.prototype.addShape = function () { }, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function (t) { this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1 }, ShapeCollection.prototype.releaseShapes = function () { var t; for (t = 0; t < this._length; t += 1)shape_pool.release(this.shapes[t]); this._length = 0 }, DashProperty.prototype.getValue = function (t) { if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) { var e = 0, r = this.dataProps.length; for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1)"o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v } }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function (t, e) { for (var r = 0, i = this.o.length / 2; r < i;) { if (.01 < Math.abs(t[4 * r] - t[4 * e + 2 * r])) return !1; r += 1 } return !0 }, GradientProperty.prototype.checkCollapsable = function () { if (this.o.length / 2 != this.c.length / 4) return !1; if (this.data.k.k[0].s) for (var t = 0, e = this.data.k.k.length; t < e;) { if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1; t += 1 } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1; return !0 }, GradientProperty.prototype.getValue = function (t) { if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) { var e, r, i, s = 4 * this.data.p; for (e = 0; e < s; e += 1)r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t); if (this.o.length) for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1)r = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t); this._mdf = !t } }, extendPrototype([DynamicPropertyContainer], GradientProperty); var buildShapeString = function (t, e, r, i) { if (0 === e) return ""; var s, a = t.o, n = t.i, o = t.v, h = " M" + i.applyToPointStringified(o[0][0], o[0][1]); for (s = 1; s < e; s += 1)h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[s][0], n[s][1]) + " " + i.applyToPointStringified(o[s][0], o[s][1]); return r && e && (h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h }, ImagePreloader = function () { var s = function () { var t = createTag("canvas"); t.width = 1, t.height = 1; var e = t.getContext("2d"); return e.fillStyle = "#FF0000", e.fillRect(0, 0, 1, 1), t }(); function t() { this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null) } function e(t) { var e = function (t, e, r) { var i = ""; if (t.e) i = t.p; else if (e) { var s = t.p; -1 !== s.indexOf("images/") && (s = s.split("/")[1]), i = e + s } else i = r, i += t.u ? t.u : "", i += t.p; return i }(t, this.assetsPath, this.path), r = createTag("img"); r.crossOrigin = "anonymous", r.addEventListener("load", this._imageLoaded.bind(this), !1), r.addEventListener("error", function () { i.img = s, this._imageLoaded() }.bind(this), !1), r.src = e; var i = { img: r, assetData: t }; return i } function r(t, e) { this.imagesLoadedCb = e; var r, i = t.length; for (r = 0; r < i; r += 1)t[r].layers || (this.totalImages += 1, this.images.push(this._createImageData(t[r]))) } function i(t) { this.path = t || "" } function a(t) { this.assetsPath = t || "" } function n(t) { for (var e = 0, r = this.images.length; e < r;) { if (this.images[e].assetData === t) return this.images[e].img; e += 1 } } function o() { this.imagesLoadedCb = null, this.images.length = 0 } function h() { return this.totalImages === this.loadedAssets } return function () { this.loadAssets = r, this.setAssetsPath = a, this.setPath = i, this.loaded = h, this.destroy = o, this.getImage = n, this._createImageData = e, this._imageLoaded = t, this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = [] } }(), featureSupport = (lw = { maskType: !0 }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (lw.maskType = !1), lw), lw, filtersFactory = (mw = {}, mw.createFilter = function (t) { var e = createNS("filter"); return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e }, mw.createAlphaToLuminanceFilter = function () { var t = createNS("feColorMatrix"); return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t }, mw), mw, assetLoader = function () { function a(t) { return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0 } return { load: function (t, e, r) { var i, s = new XMLHttpRequest; s.open("GET", t, !0), s.responseType = "json", s.send(), s.onreadystatechange = function () { if (4 == s.readyState) if (200 == s.status) i = a(s), e(i); else try { i = a(s), e(i) } catch (t) { r && r(t) } } } } }(); function TextAnimatorProperty(t, e, r) { this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r) } function TextAnimatorDataProperty(t, e, r) { var i = { propType: !1 }, s = PropertyFactory.getProp, a = e.a; this.a = { r: a.r ? s(t, a.r, 0, degToRads, r) : i, rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i, ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i, sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i, sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i, s: a.s ? s(t, a.s, 1, .01, r) : i, a: a.a ? s(t, a.a, 1, 0, r) : i, o: a.o ? s(t, a.o, 0, .01, r) : i, p: a.p ? s(t, a.p, 1, 0, r) : i, sw: a.sw ? s(t, a.sw, 0, 0, r) : i, sc: a.sc ? s(t, a.sc, 1, 0, r) : i, fc: a.fc ? s(t, a.fc, 1, 0, r) : i, fh: a.fh ? s(t, a.fh, 0, 0, r) : i, fs: a.fs ? s(t, a.fs, 0, .01, r) : i, fb: a.fb ? s(t, a.fb, 0, .01, r) : i, t: a.t ? s(t, a.t, 0, 0, r) : i }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t } function LetterProps(t, e, r, i, s, a) { this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.p = a, this._mdf = { o: !0, sw: !!e, sc: !!r, fc: !!i, m: !0, p: !0 } } function TextProperty(t, e) { this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: !1, strokeColorAnim: !1, strokeWidthAnim: !1, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: !1 }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData) } TextAnimatorProperty.prototype.searchProperties = function () { var t, e, r = this._textData.a.length, i = PropertyFactory.getProp; for (t = 0; t < r; t += 1)e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this); this._textData.p && "m" in this._textData.p ? (this._pathData = { f: i(this._elem, this._textData.p.f, 0, 0, this), l: i(this._elem, this._textData.p.l, 0, 0, this), r: this._textData.p.r, m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this) }, TextAnimatorProperty.prototype.getMeasures = function (t, e) { if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) { this._isFirstFrame = !1; var r, i, s, a, n, o, h, l, p, m, f, c, d, u, y, g, v, b, E, x = this._moreOptions.alignment.v, P = this._animatorsData, S = this._textData, _ = this.mHelper, C = this._renderType, A = this.renderedLetters.length, T = (this.data, t.l); if (this._hasMaskedPath) { if (E = this._pathData.m, !this._pathData.n || this._pathData._mdf) { var D, k = E.v; for (this._pathData.r && (k = k.reverse()), n = { tLength: 0, segments: [] }, a = k._length - 1, s = g = 0; s < a; s += 1)D = { s: k.v[s], e: k.v[s + 1], to: [k.o[s][0] - k.v[s][0], k.o[s][1] - k.v[s][1]], ti: [k.i[s + 1][0] - k.v[s + 1][0], k.i[s + 1][1] - k.v[s + 1][1]] }, bez.buildBezierData(D), n.tLength += D.bezierData.segmentLength, n.segments.push(D), g += D.bezierData.segmentLength; s = a, E.v.c && (D = { s: k.v[s], e: k.v[0], to: [k.o[s][0] - k.v[s][0], k.o[s][1] - k.v[s][1]], ti: [k.i[0][0] - k.v[0][0], k.i[0][1] - k.v[0][1]] }, bez.buildBezierData(D), n.tLength += D.bezierData.segmentLength, n.segments.push(D), g += D.bezierData.segmentLength), this._pathData.pi = n } if (n = this._pathData.pi, o = this._pathData.f.v, m = 1, p = !(l = f = 0), u = n.segments, o < 0 && E.v.c) for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), m = (d = u[f = u.length - 1].bezierData.points).length - 1; o < 0;)o += d[m].partialLength, (m -= 1) < 0 && (m = (d = u[f -= 1].bezierData.points).length - 1); c = (d = u[f].bezierData.points)[m - 1], y = (h = d[m]).partialLength } a = T.length, i = r = 0; var M, w, F, I, V = 1.2 * t.finalSize * .714, R = !0; F = P.length; var B, L, G, z, N, O, H, j, q, W, Y, X, J, U = -1, $ = o, K = f, Z = m, Q = -1, tt = "", et = this.defaultPropsArray; if (2 === t.j || 1 === t.j) { var rt = 0, it = 0, st = 2 === t.j ? -.5 : -1, at = 0, nt = !0; for (s = 0; s < a; s += 1)if (T[s].n) { for (rt && (rt += it); at < s;)T[at].animatorJustifyOffset = rt, at += 1; nt = !(rt = 0) } else { for (w = 0; w < F; w += 1)(M = P[w].a).t.propType && (nt && 2 === t.j && (it += M.t.v * st), (B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars)).length ? rt += M.t.v * B[0] * st : rt += M.t.v * B * st); nt = !1 } for (rt && (rt += it); at < s;)T[at].animatorJustifyOffset = rt, at += 1 } for (s = 0; s < a; s += 1) { if (_.reset(), N = 1, T[s].n) r = 0, i += t.yOffset, i += R ? 1 : 0, o = $, R = !1, 0, this._hasMaskedPath && (m = Z, c = (d = u[f = K].bezierData.points)[m - 1], y = (h = d[m]).partialLength, l = 0), J = W = X = tt = "", et = this.defaultPropsArray; else { if (this._hasMaskedPath) { if (Q !== T[s].line) { switch (t.j) { case 1: o += g - t.lineWidths[T[s].line]; break; case 2: o += (g - t.lineWidths[T[s].line]) / 2 }Q = T[s].line } U !== T[s].ind && (T[U] && (o += T[U].extra), o += T[s].an / 2, U = T[s].ind), o += x[0] * T[s].an / 200; var ot = 0; for (w = 0; w < F; w += 1)(M = P[w].a).p.propType && ((B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars)).length ? ot += M.p.v[0] * B[0] : ot += M.p.v[0] * B), M.a.propType && ((B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars)).length ? ot += M.a.v[0] * B[0] : ot += M.a.v[0] * B); for (p = !0; p;)o + ot <= l + y || !d ? (v = (o + ot - l) / h.partialLength, G = c.point[0] + (h.point[0] - c.point[0]) * v, z = c.point[1] + (h.point[1] - c.point[1]) * v, _.translate(-x[0] * T[s].an / 200, -x[1] * V / 100), p = !1) : d && (l += h.partialLength, (m += 1) >= d.length && (m = 0, d = u[f += 1] ? u[f].bezierData.points : E.v.c ? u[f = m = 0].bezierData.points : (l -= h.partialLength, null)), d && (c = h, y = (h = d[m]).partialLength)); L = T[s].an / 2 - T[s].add, _.translate(-L, 0, 0) } else L = T[s].an / 2 - T[s].add, _.translate(-L, 0, 0), _.translate(-x[0] * T[s].an / 200, -x[1] * V / 100, 0); for (T[s].l / 2, w = 0; w < F; w += 1)(M = P[w].a).t.propType && (B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? B.length ? o += M.t.v * B[0] : o += M.t.v * B : B.length ? r += M.t.v * B[0] : r += M.t.v * B)); for (T[s].l / 2, t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (O = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]), w = 0; w < F; w += 1)(M = P[w].a).a.propType && ((B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars)).length ? _.translate(-M.a.v[0] * B[0], -M.a.v[1] * B[1], M.a.v[2] * B[2]) : _.translate(-M.a.v[0] * B, -M.a.v[1] * B, M.a.v[2] * B)); for (w = 0; w < F; w += 1)(M = P[w].a).s.propType && ((B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars)).length ? _.scale(1 + (M.s.v[0] - 1) * B[0], 1 + (M.s.v[1] - 1) * B[1], 1) : _.scale(1 + (M.s.v[0] - 1) * B, 1 + (M.s.v[1] - 1) * B, 1)); for (w = 0; w < F; w += 1) { if (M = P[w].a, B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars), M.sk.propType && (B.length ? _.skewFromAxis(-M.sk.v * B[0], M.sa.v * B[1]) : _.skewFromAxis(-M.sk.v * B, M.sa.v * B)), M.r.propType && (B.length ? _.rotateZ(-M.r.v * B[2]) : _.rotateZ(-M.r.v * B)), M.ry.propType && (B.length ? _.rotateY(M.ry.v * B[1]) : _.rotateY(M.ry.v * B)), M.rx.propType && (B.length ? _.rotateX(M.rx.v * B[0]) : _.rotateX(M.rx.v * B)), M.o.propType && (B.length ? N += (M.o.v * B[0] - N) * B[0] : N += (M.o.v * B - N) * B), t.strokeWidthAnim && M.sw.propType && (B.length ? H += M.sw.v * B[0] : H += M.sw.v * B), t.strokeColorAnim && M.sc.propType) for (q = 0; q < 3; q += 1)B.length ? O[q] = O[q] + (M.sc.v[q] - O[q]) * B[0] : O[q] = O[q] + (M.sc.v[q] - O[q]) * B; if (t.fillColorAnim && t.fc) { if (M.fc.propType) for (q = 0; q < 3; q += 1)B.length ? j[q] = j[q] + (M.fc.v[q] - j[q]) * B[0] : j[q] = j[q] + (M.fc.v[q] - j[q]) * B; M.fh.propType && (j = B.length ? addHueToRGB(j, M.fh.v * B[0]) : addHueToRGB(j, M.fh.v * B)), M.fs.propType && (j = B.length ? addSaturationToRGB(j, M.fs.v * B[0]) : addSaturationToRGB(j, M.fs.v * B)), M.fb.propType && (j = B.length ? addBrightnessToRGB(j, M.fb.v * B[0]) : addBrightnessToRGB(j, M.fb.v * B)) } } for (w = 0; w < F; w += 1)(M = P[w].a).p.propType && (B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars), this._hasMaskedPath ? B.length ? _.translate(0, M.p.v[1] * B[0], -M.p.v[2] * B[1]) : _.translate(0, M.p.v[1] * B, -M.p.v[2] * B) : B.length ? _.translate(M.p.v[0] * B[0], M.p.v[1] * B[1], -M.p.v[2] * B[2]) : _.translate(M.p.v[0] * B, M.p.v[1] * B, -M.p.v[2] * B)); if (t.strokeWidthAnim && (W = H < 0 ? 0 : H), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * O[0]) + "," + Math.round(255 * O[1]) + "," + Math.round(255 * O[2]) + ")"), t.fillColorAnim && t.fc && (X = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), this._hasMaskedPath) { if (_.translate(0, -t.ls), _.translate(0, x[1] * V / 100 + i, 0), S.p.p) { b = (h.point[1] - c.point[1]) / (h.point[0] - c.point[0]); var ht = 180 * Math.atan(b) / Math.PI; h.point[0] < c.point[0] && (ht += 180), _.rotate(-ht * Math.PI / 180) } _.translate(G, z, 0), o -= x[0] * T[s].an / 200, T[s + 1] && U !== T[s + 1].ind && (o += T[s].an / 2, o += t.tr / 1e3 * t.finalSize) } else { switch (_.translate(r, i, 0), t.ps && _.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) { case 1: _.translate(T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]), 0, 0); break; case 2: _.translate(T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]) / 2, 0, 0) }_.translate(0, -t.ls), _.translate(L, 0, 0), _.translate(x[0] * T[s].an / 200, x[1] * V / 100, 0), r += T[s].l + t.tr / 1e3 * t.finalSize } "html" === C ? tt = _.toCSS() : "svg" === C ? tt = _.to2dCSS() : et = [_.props[0], _.props[1], _.props[2], _.props[3], _.props[4], _.props[5], _.props[6], _.props[7], _.props[8], _.props[9], _.props[10], _.props[11], _.props[12], _.props[13], _.props[14], _.props[15]], J = N } this.lettersChangedFlag = A <= s ? (I = new LetterProps(J, W, Y, X, tt, et), this.renderedLetters.push(I), A += 1, !0) : (I = this.renderedLetters[s]).update(J, W, Y, X, tt, et) || this.lettersChangedFlag } } }, TextAnimatorProperty.prototype.getValue = function () { this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties()) }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function (t, e, r, i, s, a) { this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1; var n = this._mdf.p = !1; return this.o !== t && (this.o = t, n = this._mdf.o = !0), this.sw !== e && (this.sw = e, n = this._mdf.sw = !0), this.sc !== r && (this.sc = r, n = this._mdf.sc = !0), this.fc !== i && (this.fc = i, n = this._mdf.fc = !0), this.m !== s && (this.m = s, n = this._mdf.m = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, n = this._mdf.p = !0), n }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function (t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]); return t }, TextProperty.prototype.setCurrentData = function (t) { t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0 }, TextProperty.prototype.searchProperty = function () { return this.searchKeyframes() }, TextProperty.prototype.searchKeyframes = function () { return this.kf = 1 < this.data.d.k.length, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf }, TextProperty.prototype.addEffect = function (t) { this.effectsSequence.push(t), this.elem.addDynamicProperty(this) }, TextProperty.prototype.getValue = function (t) { if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) { this.currentData.t = this.data.d.k[this.keysIndex].s.t; var e = this.currentData, r = this.keysIndex; if (this.lock) this.setCurrentData(this.currentData); else { this.lock = !0, this._mdf = !1; var i, s = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s; for (i = 0; i < s; i += 1)a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t); e !== a && this.setCurrentData(a), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId } } }, TextProperty.prototype.getKeyframeValue = function () { for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && (t[r].s, !(r === i - 1 || t[r + 1].t > e));)r += 1; return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s }, TextProperty.prototype.buildFinalText = function (t) { for (var e = FontManager.getCombinedCharacterCodes(), r = [], i = 0, s = t.length; i < s;)-1 !== e.indexOf(t.charCodeAt(i)) ? r[r.length - 1] += t.charAt(i) : r.push(t.charAt(i)), i += 1; return r }, TextProperty.prototype.completeTextData = function (t) { t.__complete = !0; var e, r, i, s, a, n, o, h = this.elem.globalData.fontManager, l = this.data, p = [], m = 0, f = l.m.g, c = 0, d = 0, u = 0, y = [], g = 0, v = 0, b = h.getFontByName(t.f), E = 0, x = b.fStyle ? b.fStyle.split(" ") : [], P = "normal", S = "normal"; for (r = x.length, e = 0; e < r; e += 1)switch (x[e].toLowerCase()) { case "italic": S = "italic"; break; case "bold": P = "700"; break; case "black": P = "900"; break; case "medium": P = "500"; break; case "regular": case "normal": P = "400"; break; case "light": case "thin": P = "200" }t.fWeight = b.fWeight || P, t.fStyle = S, r = t.t.length, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), t.finalLineHeight = t.lh; var _, C = t.tr / 1e3 * t.finalSize; if (t.sz) for (var A, T, D = !0, k = t.sz[0], M = t.sz[1]; D;) { g = A = 0, r = (T = this.buildFinalText(t.t)).length, C = t.tr / 1e3 * t.finalSize; var w = -1; for (e = 0; e < r; e += 1)_ = T[e].charCodeAt(0), i = !1, " " === T[e] ? w = e : 13 !== _ && 3 !== _ || (i = !(g = 0), A += t.finalLineHeight || 1.2 * t.finalSize), k < g + (E = h.chars ? (o = h.getCharData(T[e], b.fStyle, b.fFamily), i ? 0 : o.w * t.finalSize / 100) : h.measureText(T[e], t.f, t.finalSize)) && " " !== T[e] ? (-1 === w ? r += 1 : e = w, A += t.finalLineHeight || 1.2 * t.finalSize, T.splice(e, w === e ? 1 : 0, "\r"), w = -1, g = 0) : (g += E, g += C); A += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && M < A ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = T, r = t.finalText.length, D = !1) } g = -C; var F, I = E = 0; for (e = 0; e < r; e += 1)if (i = !1, _ = (F = t.finalText[e]).charCodeAt(0), " " === F ? s = "\xa0" : 13 === _ || 3 === _ ? (I = 0, y.push(g), v = v < g ? g : v, g = -2 * C, i = !(s = ""), u += 1) : s = t.finalText[e], E = h.chars ? (o = h.getCharData(F, b.fStyle, h.getFontByName(t.f).fFamily), i ? 0 : o.w * t.finalSize / 100) : h.measureText(s, t.f, t.finalSize), " " === F ? I += E + C : (g += E + C + I, I = 0), p.push({ l: E, an: E, add: c, n: i, anIndexes: [], val: s, line: u, animatorJustifyOffset: 0 }), 2 == f) { if (c += E, "" === s || "\xa0" === s || e === r - 1) { for ("" !== s && "\xa0" !== s || (c -= E); d <= e;)p[d].an = c, p[d].ind = m, p[d].extra = E, d += 1; m += 1, c = 0 } } else if (3 == f) { if (c += E, "" === s || e === r - 1) { for ("" === s && (c -= E); d <= e;)p[d].an = c, p[d].ind = m, p[d].extra = E, d += 1; c = 0, m += 1 } } else p[m].ind = m, p[m].extra = 0, m += 1; if (t.l = p, v = v < g ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0; else switch (t.boxWidth = v, t.j) { case 1: t.justifyOffset = -t.boxWidth; break; case 2: t.justifyOffset = -t.boxWidth / 2; break; default: t.justifyOffset = 0 }t.lineWidths = y; var V, R, B = l.a; n = B.length; var L, G, z = []; for (a = 0; a < n; a += 1) { for ((V = B[a]).a.sc && (t.strokeColorAnim = !0), V.a.sw && (t.strokeWidthAnim = !0), (V.a.fc || V.a.fh || V.a.fs || V.a.fb) && (t.fillColorAnim = !0), G = 0, L = V.s.b, e = 0; e < r; e += 1)(R = p[e]).anIndexes[a] = G, (1 == L && "" !== R.val || 2 == L && "" !== R.val && "\xa0" !== R.val || 3 == L && (R.n || "\xa0" == R.val || e == r - 1) || 4 == L && (R.n || e == r - 1)) && (1 === V.s.rn && z.push(G), G += 1); l.a[a].s.totalChars = G; var N, O = -1; if (1 === V.s.rn) for (e = 0; e < r; e += 1)O != (R = p[e]).anIndexes[a] && (O = R.anIndexes[a], N = z.splice(Math.floor(Math.random() * z.length), 1)[0]), R.anIndexes[a] = N } t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100 }, TextProperty.prototype.updateDocumentData = function (t, e) { e = void 0 === e ? this.keysIndex : e; var r = this.copyData({}, this.data.d.k[e].s); r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this) }, TextProperty.prototype.recalculate = function (t) { var e = this.data.d.k[t].s; e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e) }, TextProperty.prototype.canResizeFont = function (t) { this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this) }, TextProperty.prototype.setMinimumFontSize = function (t) { this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this) }; var TextSelectorProp = function () { var l = Math.max, p = Math.min, m = Math.floor; function i(t, e) { this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || { k: 0 }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : { v: 100 }, this.o = PropertyFactory.getProp(t, e.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || { k: 0 }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue() } return i.prototype = { getMult: function (t) { this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue(); var e = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get, r = 0, i = this.finalS, s = this.finalE, a = this.data.sh; if (2 == a) r = e(r = s === i ? s <= t ? 1 : 0 : l(0, p(.5 / (s - i) + (t - i) / (s - i), 1))); else if (3 == a) r = e(r = s === i ? s <= t ? 0 : 1 : 1 - l(0, p(.5 / (s - i) + (t - i) / (s - i), 1))); else if (4 == a) s === i ? r = 0 : (r = l(0, p(.5 / (s - i) + (t - i) / (s - i), 1))) < .5 ? r *= 2 : r = 1 - 2 * (r - .5), r = e(r); else if (5 == a) { if (s === i) r = 0; else { var n = s - i, o = -n / 2 + (t = p(l(0, t + .5 - i), s - i)), h = n / 2; r = Math.sqrt(1 - o * o / (h * h)) } r = e(r) } else r = 6 == a ? e(r = s === i ? 0 : (t = p(l(0, t + .5 - i), s - i), (1 + Math.cos(Math.PI + 2 * Math.PI * t / (s - i))) / 2)) : (t >= m(i) && (r = t - i < 0 ? 1 - (i - t) : l(0, p(s - t, 1))), e(r)); return r * this.a.v }, getValue: function (t) { this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength); var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars, r = this.o.v / e, i = this.s.v / e + r, s = this.e.v / e + r; if (s < i) { var a = i; i = s, s = a } this.finalS = i, this.finalE = s } }, extendPrototype([DynamicPropertyContainer], i), { getTextSelectorProp: function (t, e, r) { return new i(t, e, r) } } }(), pool_factory = function (t, e, r, i) { var s = 0, a = t, n = createSizedArray(a); function o() { return s ? n[s -= 1] : e() } return { newElement: o, release: function (t) { s === a && (n = pooling.double(n), a *= 2), r && r(t), n[s] = t, s += 1 } } }, pooling = { double: function (t) { return t.concat(createSizedArray(t.length)) } }, point_pool = pool_factory(8, function () { return createTypedArray("float32", 2) }), shape_pool = (xA = pool_factory(4, function () { return new ShapePath }, function (t) { var e, r = t._length; for (e = 0; e < r; e += 1)point_pool.release(t.v[e]), point_pool.release(t.i[e]), point_pool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null; t._length = 0, t.c = !1 }), xA.clone = function (t) { var e, r = xA.newElement(), i = void 0 === t._length ? t.v.length : t._length; for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1)r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e); return r }, xA), xA, shapeCollection_pool = (GA = { newShapeCollection: function () { var t; t = HA ? JA[HA -= 1] : new ShapeCollection; return t }, release: function (t) { var e, r = t._length; for (e = 0; e < r; e += 1)shape_pool.release(t.shapes[e]); t._length = 0, HA === IA && (JA = pooling.double(JA), IA *= 2); JA[HA] = t, HA += 1 } }, HA = 0, IA = 4, JA = createSizedArray(IA), GA), GA, HA, IA, JA, segments_length_pool = pool_factory(8, function () { return { lengths: [], totalLength: 0 } }, function (t) { var e, r = t.lengths.length; for (e = 0; e < r; e += 1)bezier_length_pool.release(t.lengths[e]); t.lengths.length = 0 }), bezier_length_pool = pool_factory(8, function () { return { addedLength: 0, percents: createTypedArray("float32", defaultCurveSegments), lengths: createTypedArray("float32", defaultCurveSegments) } }); function BaseRenderer() { } function SVGRenderer(t, e) { this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg"); var r = createNS("defs"); this.svgElement.appendChild(r); var i = createNS("g"); this.svgElement.appendChild(i), this.layerElement = i, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", progressiveLoad: e && e.progressiveLoad || !1, hideOnTransparent: !e || !1 !== e.hideOnTransparent, viewBoxOnly: e && e.viewBoxOnly || !1, viewBoxSize: e && e.viewBoxSize || !1, className: e && e.className || "" }, this.globalData = { _mdf: !1, frameNum: -1, defs: r, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg" } function CanvasRenderer(t, e) { this.animationItem = t, this.renderConfig = { clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas, context: e && e.context || null, progressiveLoad: e && e.progressiveLoad || !1, preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", className: e && e.className || "" }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: !1, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas" } function HybridRenderer(t, e) { this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !e || !1 !== e.hideOnTransparent }, this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html" } function MaskElement(t, e, r) { this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null; var i, s = this.globalData.defs, a = this.masksProperties ? this.masksProperties.length : 0; this.viewData = createSizedArray(a), this.solidPath = ""; var n, o, h, l, p, m, f, c = this.masksProperties, d = 0, u = [], y = createElementID(), g = "clipPath", v = "clip-path"; for (i = 0; i < a; i++)if (("a" !== c[i].mode && "n" !== c[i].mode || c[i].inv || 100 !== c[i].o.k) && (v = g = "mask"), "s" != c[i].mode && "i" != c[i].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), n = createNS("path"), "n" != c[i].mode) { var b; if (d += 1, n.setAttribute("fill", "s" === c[i].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== c[i].x.k ? (v = g = "mask", f = PropertyFactory.getProp(this.element, c[i].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (m = createNS("feMorphology")).setAttribute("operator", "dilate"), m.setAttribute("in", "SourceGraphic"), m.setAttribute("radius", "0"), p.appendChild(m), s.appendChild(p), n.setAttribute("stroke", "s" === c[i].mode ? "#000000" : "#ffffff")) : f = m = null, this.storedData[i] = { elem: n, x: f, expan: m, lastPath: "", lastOperator: "", filterId: b, lastRadius: 0 }, "i" == c[i].mode) { h = u.length; var E = createNS("g"); for (o = 0; o < h; o += 1)E.appendChild(u[o]); var x = createNS("mask"); x.setAttribute("mask-type", "alpha"), x.setAttribute("id", y + "_" + d), x.appendChild(n), s.appendChild(x), E.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + d + ")"), u.length = 0, u.push(E) } else u.push(n); c[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = { elem: n, lastPath: "", op: PropertyFactory.getProp(this.element, c[i].o, 0, .01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3), invRect: l }, this.viewData[i].prop.k || this.drawPath(c[i], this.viewData[i].prop.v, this.viewData[i]) } else this.viewData[i] = { op: PropertyFactory.getProp(this.element, c[i].o, 0, .01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3), elem: n, lastPath: "" }, s.appendChild(n); for (this.maskElement = createNS(g), a = u.length, i = 0; i < a; i += 1)this.maskElement.appendChild(u[i]); 0 < d && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this) } function HierarchyElement() { } function FrameElement() { } function TransformElement() { } function RenderableElement() { } function RenderableDOMElement() { } function ProcessedElement(t, e) { this.elem = t, this.pos = e } function SVGStyleData(t, e) { this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null } function SVGShapeData(t, e, r) { this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k; for (var i = 0, s = t.length; i < s;) { if (t[i].mProps.dynamicProperties.length) { this._isAnimated = !0; break } i += 1 } } function SVGTransformData(t, e, r) { this.transform = { mProps: t, op: e, container: r }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length } function SVGStrokeStyleData(t, e, r) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated } function SVGFillStyleData(t, e, r) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r } function SVGGradientFillStyleData(t, e, r) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r) } function SVGGradientStrokeStyleData(t, e, r) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated } function ShapeGroupData() { this.it = [], this.prevViewData = [], this.gr = createNS("g") } BaseRenderer.prototype.checkLayers = function (t) { var e, r, i = this.layers.length; for (this.completeLayers = !0, e = i - 1; 0 <= e; e--)this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers; this.checkPendingElements() }, BaseRenderer.prototype.createItem = function (t) { switch (t.ty) { case 2: return this.createImage(t); case 0: return this.createComp(t); case 1: return this.createSolid(t); case 3: return this.createNull(t); case 4: return this.createShape(t); case 5: return this.createText(t); case 13: return this.createCamera(t) }return this.createNull(t) }, BaseRenderer.prototype.createCamera = function () { throw new Error("You're using a 3d camera. Try the html renderer.") }, BaseRenderer.prototype.buildAllItems = function () { var t, e = this.layers.length; for (t = 0; t < e; t += 1)this.buildItem(t); this.checkPendingElements() }, BaseRenderer.prototype.includeLayers = function (t) { this.completeLayers = !1; var e, r, i = t.length, s = this.layers.length; for (e = 0; e < i; e += 1)for (r = 0; r < s;) { if (this.layers[r].id == t[e].id) { this.layers[r] = t[e]; break } r += 1 } }, BaseRenderer.prototype.setProjectInterface = function (t) { this.globalData.projectInterface = t }, BaseRenderer.prototype.initItems = function () { this.globalData.progressiveLoad || this.buildAllItems() }, BaseRenderer.prototype.buildElementParenting = function (t, e, r) { for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n;)s[a].ind == e && (i[a] && !0 !== i[a] ? (r.push(i[a]), i[a].setAsParent(), void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), a += 1 }, BaseRenderer.prototype.addPendingElement = function (t) { this.pendingElements.push(t) }, BaseRenderer.prototype.searchExtraCompositions = function (t) { var e, r = t.length; for (e = 0; e < r; e += 1)if (t[e].xt) { var i = this.createComp(t[e]); i.initExpressions(), this.globalData.projectInterface.registerComposition(i) } }, BaseRenderer.prototype.setupGlobalData = function (t, e) { this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h } }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function (t) { return new NullElement(t, this.globalData, this) }, SVGRenderer.prototype.createShape = function (t) { return new SVGShapeElement(t, this.globalData, this) }, SVGRenderer.prototype.createText = function (t) { return new SVGTextElement(t, this.globalData, this) }, SVGRenderer.prototype.createImage = function (t) { return new IImageElement(t, this.globalData, this) }, SVGRenderer.prototype.createComp = function (t) { return new SVGCompElement(t, this.globalData, this) }, SVGRenderer.prototype.createSolid = function (t) { return new ISolidElement(t, this.globalData, this) }, SVGRenderer.prototype.configAnimation = function (t) { this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement); var e = this.globalData.defs; this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t; var r = createNS("clipPath"), i = createNS("rect"); i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0); var s = createElementID(); r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + s + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length) }, SVGRenderer.prototype.destroy = function () { this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null; var t, e = this.layers ? this.layers.length : 0; for (t = 0; t < e; t++)this.elements[t] && this.elements[t].destroy(); this.elements.length = 0, this.destroyed = !0, this.animationItem = null }, SVGRenderer.prototype.updateContainerSize = function () { }, SVGRenderer.prototype.buildItem = function (t) { var e = this.elements; if (!e[t] && 99 != this.layers[t].ty) { e[t] = !0; var r = this.createItem(this.layers[t]); e[t] = r, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(r))) } }, SVGRenderer.prototype.checkPendingElements = function () { for (; this.pendingElements.length;) { var t = this.pendingElements.pop(); if (t.checkParenting(), t.data.tt) for (var e = 0, r = this.elements.length; e < r;) { if (this.elements[e] === t) { t.setMatte(this.elements[e - 1].layerId); break } e += 1 } } }, SVGRenderer.prototype.renderFrame = function (t) { if (this.renderedFrame !== t && !this.destroyed) { null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1; var e, r = this.layers.length; for (this.completeLayers || this.checkLayers(t), e = r - 1; 0 <= e; e--)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st); if (this.globalData._mdf) for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame() } }, SVGRenderer.prototype.appendElementInPos = function (t, e) { var r = t.getBaseElement(); if (r) { for (var i, s = 0; s < e;)this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (i = this.elements[s].getBaseElement()), s += 1; i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r) } }, SVGRenderer.prototype.hide = function () { this.layerElement.style.display = "none" }, SVGRenderer.prototype.show = function () { this.layerElement.style.display = "block" }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function (t) { return new CVShapeElement(t, this.globalData, this) }, CanvasRenderer.prototype.createText = function (t) { return new CVTextElement(t, this.globalData, this) }, CanvasRenderer.prototype.createImage = function (t) { return new CVImageElement(t, this.globalData, this) }, CanvasRenderer.prototype.createComp = function (t) { return new CVCompElement(t, this.globalData, this) }, CanvasRenderer.prototype.createSolid = function (t) { return new CVSolidElement(t, this.globalData, this) }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function (t) { if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13]) if (this.renderConfig.clearCanvas) { this.transformMat.cloneFromProps(t); var e = this.contextData.cTr.props; this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props); var r = this.contextData.cTr.props; this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]) } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]) }, CanvasRenderer.prototype.ctxOpacity = function (t) { if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void (this.globalData.currentGlobalAlpha = this.contextData.cO); this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO) }, CanvasRenderer.prototype.reset = function () { this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore() }, CanvasRenderer.prototype.save = function (t) { if (this.renderConfig.clearCanvas) { t && this.canvasContext.save(); var e = this.contextData.cTr.props; this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate(); var r, i = this.contextData.saved[this.contextData.cArrPos]; for (r = 0; r < 16; r += 1)i[r] = e[r]; this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1 } else this.canvasContext.save() }, CanvasRenderer.prototype.restore = function (t) { if (this.renderConfig.clearCanvas) { t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1; var e, r = this.contextData.saved[this.contextData.cArrPos], i = this.contextData.cTr.props; for (e = 0; e < 16; e += 1)i[e] = r[e]; this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), r = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r, this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r, this.globalData.currentGlobalAlpha = r) } else this.canvasContext.restore() }, CanvasRenderer.prototype.configAnimation = function (t) { this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className)) : this.canvasContext = this.renderConfig.context, this.data = t, this.layers = t.layers, this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, (this.globalData.renderer = this).globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize() }, CanvasRenderer.prototype.updateContainerSize = function () { var t, e, r, i; if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) { var s = this.renderConfig.preserveAspectRatio.split(" "), a = s[1] || "meet", n = s[0] || "xMidYMid", o = n.substr(0, 4), h = n.substr(4); r = t / e, i = this.transformCanvas.w / this.transformCanvas.h, this.transformCanvas.sy = r < i && "meet" === a || i < r && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (i < r && "meet" === a || r < i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (i < r && "meet" === a || r < i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (r < i && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (r < i && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0 } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0; this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip() }, CanvasRenderer.prototype.destroy = function () { var t; for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""), t = (this.layers ? this.layers.length : 0) - 1; 0 <= t; t -= 1)this.elements[t] && this.elements[t].destroy(); this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0 }, CanvasRenderer.prototype.renderFrame = function (t) { if (!(this.renderedFrame == t && !0 === this.renderConfig.clearCanvas || this.destroyed || -1 === t)) { this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas, this.globalData.projectInterface.currentFrame = t; var e, r = this.layers.length; for (this.completeLayers || this.checkLayers(t), e = 0; e < r; e++)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st); if (this.globalData._mdf) { for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), e = r - 1; 0 <= e; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame(); !0 !== this.renderConfig.clearCanvas && this.restore() } } }, CanvasRenderer.prototype.buildItem = function (t) { var e = this.elements; if (!e[t] && 99 != this.layers[t].ty) { var r = this.createItem(this.layers[t], this, this.globalData); (e[t] = r).initExpressions() } }, CanvasRenderer.prototype.checkPendingElements = function () { for (; this.pendingElements.length;) { this.pendingElements.pop().checkParenting() } }, CanvasRenderer.prototype.hide = function () { this.animationItem.container.style.display = "none" }, CanvasRenderer.prototype.show = function () { this.animationItem.container.style.display = "block" }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function () { for (; this.pendingElements.length;) { this.pendingElements.pop().checkParenting() } }, HybridRenderer.prototype.appendElementInPos = function (t, e) { var r = t.getBaseElement(); if (r) { var i = this.layers[e]; if (i.ddd && this.supports3d) this.addTo3dContainer(r, e); else if (this.threeDElements) this.addTo3dContainer(r, e); else { for (var s, a, n = 0; n < e;)this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n], s = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || s), n += 1; s ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, s) : i.ddd && this.supports3d || this.layerElement.appendChild(r) } } }, HybridRenderer.prototype.createShape = function (t) { return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this) }, HybridRenderer.prototype.createText = function (t) { return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextElement(t, this.globalData, this) }, HybridRenderer.prototype.createCamera = function (t) { return this.camera = new HCameraElement(t, this.globalData, this), this.camera }, HybridRenderer.prototype.createImage = function (t) { return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this) }, HybridRenderer.prototype.createComp = function (t) { return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this) }, HybridRenderer.prototype.createSolid = function (t) { return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this) }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function (t) { for (var e = 0, r = this.threeDElements.length; e < r;) { if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem; e += 1 } }, HybridRenderer.prototype.createThreeDContainer = function (t, e) { var r = createTag("div"); styleDiv(r); var i = createTag("div"); styleDiv(i), "3d" === e && (r.style.width = this.globalData.compSize.w + "px", r.style.height = this.globalData.compSize.h + "px", r.style.transformOrigin = r.style.mozTransformOrigin = r.style.webkitTransformOrigin = "50% 50%", i.style.transform = i.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"), r.appendChild(i); var s = { container: i, perspectiveElem: r, startPos: t, endPos: t, type: e }; return this.threeDElements.push(s), s }, HybridRenderer.prototype.build3dContainers = function () { var t, e, r = this.layers.length, i = ""; for (t = 0; t < r; t += 1)this.layers[t].ddd && 3 !== this.layers[t].ty ? "3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")) : "2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t); for (t = (r = this.threeDElements.length) - 1; 0 <= t; t--)this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem) }, HybridRenderer.prototype.addTo3dContainer = function (t, e) { for (var r = 0, i = this.threeDElements.length; r < i;) { if (e <= this.threeDElements[r].endPos) { for (var s, a = this.threeDElements[r].startPos; a < e;)this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), a += 1; s ? this.threeDElements[r].container.insertBefore(t, s) : this.threeDElements[r].container.appendChild(t); break } r += 1 } }, HybridRenderer.prototype.configAnimation = function (t) { var e = createTag("div"), r = this.animationItem.wrapper; e.style.width = t.w + "px", e.style.height = t.h + "px", styleDiv(this.resizerElem = e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), e.style.overflow = "hidden"; var i = createNS("svg"); i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i); var s = createNS("defs"); i.appendChild(s), this.data = t, this.setupGlobalData(t, i), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize() }, HybridRenderer.prototype.destroy = function () { this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null; var t, e = this.layers ? this.layers.length : 0; for (t = 0; t < e; t++)this.elements[t].destroy(); this.elements.length = 0, this.destroyed = !0, this.animationItem = null }, HybridRenderer.prototype.updateContainerSize = function () { var t, e, r, i, s = this.animationItem.wrapper.offsetWidth, a = this.animationItem.wrapper.offsetHeight; i = s / a < this.globalData.compSize.w / this.globalData.compSize.h ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, r = 0, (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, r = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)" }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function () { this.resizerElem.style.display = "none" }, HybridRenderer.prototype.show = function () { this.resizerElem.style.display = "block" }, HybridRenderer.prototype.initItems = function () { if (this.buildAllItems(), this.camera) this.camera.setup(); else { var t, e = this.globalData.compSize.w, r = this.globalData.compSize.h, i = this.threeDElements.length; for (t = 0; t < i; t += 1)this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px" } }, HybridRenderer.prototype.searchExtraCompositions = function (t) { var e, r = t.length, i = createTag("div"); for (e = 0; e < r; e += 1)if (t[e].xt) { var s = this.createComp(t[e], i, this.globalData.comp, null); s.initExpressions(), this.globalData.projectInterface.registerComposition(s) } }, MaskElement.prototype.getMaskProperty = function (t) { return this.viewData[t].prop }, MaskElement.prototype.renderFrame = function (t) { var e, r = this.element.finalTransform.mat, i = this.masksProperties.length; for (e = 0; e < i; e++)if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && (this.viewData[e].invRect.setAttribute("x", -r.props[12]), this.viewData[e].invRect.setAttribute("y", -r.props[13])), this.storedData[e].x && (this.storedData[e].x._mdf || t))) { var s = this.storedData[e].expan; this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v)) } }, MaskElement.prototype.getMaskelement = function () { return this.maskElement }, MaskElement.prototype.createLayerSolidPath = function () { var t = "M0,0 "; return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " " }, MaskElement.prototype.drawPath = function (t, e, r) { var i, s, a = " M" + e.v[0][0] + "," + e.v[0][1]; for (s = e._length, i = 1; i < s; i += 1)a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1]; if (e.c && 1 < s && (a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== a) { var n = ""; r.elem && (e.c && (n = t.inv ? this.solidPath + a : a), r.elem.setAttribute("d", n)), r.lastPath = a } }, MaskElement.prototype.destroy = function () { this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null }, HierarchyElement.prototype = { initHierarchy: function () { this.hierarchy = [], this._isParent = !1, this.checkParenting() }, setHierarchy: function (t) { this.hierarchy = t }, setAsParent: function () { this._isParent = !0 }, checkParenting: function () { void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []) } }, FrameElement.prototype = { initFrame: function () { this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1 }, prepareProperties: function (t, e) { var r, i = this.dynamicProperties.length; for (r = 0; r < i; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0)) }, addDynamicProperty: function (t) { -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t) } }, TransformElement.prototype = { initTransform: function () { this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: !1, _opMdf: !1, mat: new Matrix }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty }, renderTransform: function () { if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) { var t, e = this.finalTransform.mat, r = 0, i = this.hierarchy.length; if (!this.finalTransform._matMdf) for (; r < i;) { if (this.hierarchy[r].finalTransform.mProp._mdf) { this.finalTransform._matMdf = !0; break } r += 1 } if (this.finalTransform._matMdf) for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1)t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]) } }, globalToLocal: function (t) { var e = []; e.push(this.finalTransform); for (var r = !0, i = this.comp; r;)i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : r = !1; var s, a, n = e.length; for (s = 0; s < n; s += 1)a = e[s].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0]; return t }, mHelper: new Matrix }, RenderableElement.prototype = { initRenderable: function () { this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [] }, addRenderableComponent: function (t) { -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t) }, removeRenderableComponent: function (t) { -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1) }, prepareRenderableFrame: function (t) { this.checkLayerLimits(t) }, checkTransparency: function () { this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show()) }, checkLayerLimits: function (t) { this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide()) }, renderRenderable: function () { var t, e = this.renderableComponents.length; for (t = 0; t < e; t += 1)this.renderableComponents[t].renderFrame(this._isFirstFrame) }, sourceRectAtTime: function () { return { top: 0, left: 0, width: 100, height: 100 } }, getLayerSize: function () { return 5 === this.data.ty ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height } } }, extendPrototype([RenderableElement, createProxyFunction({ initElement: function (t, e, r) { this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide() }, hide: function () { this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0) }, show: function () { this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0) }, renderFrame: function () { this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1)) }, renderInnerContent: function () { }, prepareFrame: function (t) { this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency() }, destroy: function () { this.innerElem = null, this.destroyBaseElement() } })], RenderableDOMElement), SVGStyleData.prototype.reset = function () { this.d = "", this._mdf = !1 }, SVGShapeData.prototype.setAsAnimated = function () { this._isAnimated = !0 }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function (t, e, r) { this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated }, SVGGradientFillStyleData.prototype.setGradientData = function (t, e) { var r = createElementID(), i = createNS(1 === e.t ? "linearGradient" : "radialGradient"); i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse"); var s, a, n, o = []; for (n = 4 * e.g.p, a = 0; a < n; a += 4)s = createNS("stop"), i.appendChild(s), o.push(s); t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"), this.gf = i, this.cst = o }, SVGGradientFillStyleData.prototype.setGradientOpacity = function (t, e) { if (this.g._hasOpacity && !this.g._collapsable) { var r, i, s, a = createNS("mask"), n = createNS("path"); a.appendChild(n); var o = createElementID(), h = createElementID(); a.setAttribute("id", h); var l = createNS(1 === t.t ? "linearGradient" : "radialGradient"); l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length; var p = this.stops; for (i = 4 * t.g.p; i < s; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(r), p.push(r); n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = l, this.ms = a, this.ost = p, this.maskId = h, e.msElem = n } }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData); var SVGElementsRenderer = function () { var y = new Matrix, g = new Matrix; function e(t, e, r) { (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS()) } function r(t, e, r) { var i, s, a, n, o, h, l, p, m, f, c, d = e.styles.length, u = e.lvl; for (h = 0; h < d; h += 1) { if (n = e.sh._mdf || r, e.styles[h].lvl < u) { for (p = g.reset(), f = u - e.styles[h].lvl, c = e.transformers.length - 1; !n && 0 < f;)n = e.transformers[c].mProps._mdf || n, f-- , c--; if (n) for (f = u - e.styles[h].lvl, c = e.transformers.length - 1; 0 < f;)m = e.transformers[c].mProps.v.props, p.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), f-- , c-- } else p = y; if (s = (l = e.sh.paths)._length, n) { for (a = "", i = 0; i < s; i += 1)(o = l.shapes[i]) && o._length && (a += buildShapeString(o, o._length, o.c, p)); e.caches[h] = a } else a = e.caches[h]; e.styles[h].d += !0 === t.hd ? "" : a, e.styles[h]._mdf = n || e.styles[h]._mdf } } function i(t, e, r) { var i = e.style; (e.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v) } function s(t, e, r) { a(t, e, r), n(t, e, r) } function a(t, e, r) { var i, s, a, n, o, h = e.gf, l = e.g._hasOpacity, p = e.s.v, m = e.e.v; if (e.o._mdf || r) { var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity"; e.style.pElem.setAttribute(f, e.o.v) } if (e.s._mdf || r) { var c = 1 === t.t ? "x1" : "cx", d = "x1" === c ? "y1" : "cy"; h.setAttribute(c, p[0]), h.setAttribute(d, p[1]), l && !e.g._collapsable && (e.of.setAttribute(c, p[0]), e.of.setAttribute(d, p[1])) } if (e.g._cmdf || r) { i = e.cst; var u = e.g.c; for (a = i.length, s = 0; s < a; s += 1)(n = i[s]).setAttribute("offset", u[4 * s] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * s + 1] + "," + u[4 * s + 2] + "," + u[4 * s + 3] + ")") } if (l && (e.g._omdf || r)) { var y = e.g.o; for (a = (i = e.g._collapsable ? e.cst : e.ost).length, s = 0; s < a; s += 1)n = i[s], e.g._collapsable || n.setAttribute("offset", y[2 * s] + "%"), n.setAttribute("stop-opacity", y[2 * s + 1]) } if (1 === t.t) (e.e._mdf || r) && (h.setAttribute("x2", m[0]), h.setAttribute("y2", m[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", m[0]), e.of.setAttribute("y2", m[1]))); else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) { o || (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2))); var g = Math.atan2(m[1] - p[1], m[0] - p[0]), v = o * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v), b = Math.cos(g + e.a.v) * v + p[0], E = Math.sin(g + e.a.v) * v + p[1]; h.setAttribute("fx", b), h.setAttribute("fy", E), l && !e.g._collapsable && (e.of.setAttribute("fx", b), e.of.setAttribute("fy", E)) } } function n(t, e, r) { var i = e.style, s = e.d; s && (s._mdf || r) && s.dashStr && (i.pElem.setAttribute("stroke-dasharray", s.dashStr), i.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])), e.c && (e.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v)) } return { createRenderFunction: function (t) { t.ty; switch (t.ty) { case "fl": return i; case "gf": return a; case "gs": return s; case "st": return n; case "sh": case "el": case "rc": case "sr": return r; case "tr": return e } } } }(); function ShapeTransformManager() { this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0 } function CVShapeData(t, e, r, i) { this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0]; var s = 4; "rc" == e.ty ? s = 5 : "el" == e.ty ? s = 6 : "sr" == e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t); var a, n, o = r.length; for (a = 0; a < o; a += 1)r[a].closed || (n = { transforms: i.addTransformSequence(r[a].transforms), trNodes: [] }, this.styledShapes.push(n), r[a].elements.push(n)) } function BaseElement() { } function NullElement(t, e, r) { this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy() } function SVGBaseElement() { } function IShapeElement() { } function ITextElement() { } function ICompElement() { } function IImageElement(t, e, r) { this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r) } function ISolidElement(t, e, r) { this.initElement(t, e, r) } function SVGCompElement(t, e, r) { this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } } function SVGTextElement(t, e, r) { this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r) } function SVGShapeElement(t, e, r) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = [] } function SVGTintFilter(t, e) { this.filterManager = e; var r = createNS("feColorMatrix"); if (r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r), (r = createNS("feColorMatrix")).setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", "f2"), t.appendChild(r), this.matrixFilter = r, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) { var i, s = createNS("feMerge"); t.appendChild(s), (i = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), s.appendChild(i), (i = createNS("feMergeNode")).setAttribute("in", "f2"), s.appendChild(i) } } function SVGFillFilter(t, e) { this.filterManager = e; var r = createNS("feColorMatrix"); r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(r), this.matrixFilter = r } function SVGStrokeEffect(t, e) { this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = [] } function SVGTritoneFilter(t, e) { this.filterManager = e; var r = createNS("feColorMatrix"); r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r); var i = createNS("feComponentTransfer"); i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.matrixFilter = i; var s = createNS("feFuncR"); s.setAttribute("type", "table"), i.appendChild(s), this.feFuncR = s; var a = createNS("feFuncG"); a.setAttribute("type", "table"), i.appendChild(a), this.feFuncG = a; var n = createNS("feFuncB"); n.setAttribute("type", "table"), i.appendChild(n), this.feFuncB = n } function SVGProLevelsFilter(t, e) { this.filterManager = e; var r = this.filterManager.effectElements, i = createNS("feComponentTransfer"); (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), i = createNS("feComponentTransfer")), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.feFuncRComposed = this.createFeFunc("feFuncR", i), this.feFuncGComposed = this.createFeFunc("feFuncG", i), this.feFuncBComposed = this.createFeFunc("feFuncB", i)) } function SVGDropShadowEffect(t, e) { t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "400%"), t.setAttribute("height", "400%"), this.filterManager = e; var r = createNS("feGaussianBlur"); r.setAttribute("in", "SourceAlpha"), r.setAttribute("result", "drop_shadow_1"), r.setAttribute("stdDeviation", "0"), this.feGaussianBlur = r, t.appendChild(r); var i = createNS("feOffset"); i.setAttribute("dx", "25"), i.setAttribute("dy", "0"), i.setAttribute("in", "drop_shadow_1"), i.setAttribute("result", "drop_shadow_2"), this.feOffset = i, t.appendChild(i); var s = createNS("feFlood"); s.setAttribute("flood-color", "#00ff00"), s.setAttribute("flood-opacity", "1"), s.setAttribute("result", "drop_shadow_3"), this.feFlood = s, t.appendChild(s); var a = createNS("feComposite"); a.setAttribute("in", "drop_shadow_3"), a.setAttribute("in2", "drop_shadow_2"), a.setAttribute("operator", "in"), a.setAttribute("result", "drop_shadow_4"), t.appendChild(a); var n, o = createNS("feMerge"); t.appendChild(o), n = createNS("feMergeNode"), o.appendChild(n), (n = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = n, this.feMerge = o, this.originalNodeAdded = !1, o.appendChild(n) } ShapeTransformManager.prototype = { addTransformSequence: function (t) { var e, r = t.length, i = "_"; for (e = 0; e < r; e += 1)i += t[e].transform.key + "_"; var s = this.sequences[i]; return s || (s = { transforms: [].concat(t), finalTransform: new Matrix, _mdf: !1 }, this.sequences[i] = s, this.sequenceList.push(s)), s }, processSequence: function (t, e) { for (var r, i = 0, s = t.transforms.length, a = e; i < s && !e;) { if (t.transforms[i].transform.mProps._mdf) { a = !0; break } i += 1 } if (a) for (t.finalTransform.reset(), i = s - 1; 0 <= i; i -= 1)r = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]); t._mdf = a }, processSequences: function (t) { var e, r = this.sequenceList.length; for (e = 0; e < r; e += 1)this.processSequence(this.sequenceList[e], t) }, getNewKey: function () { return "_" + this.transform_key_count++ } }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = { checkMasks: function () { if (!this.data.hasMask) return !1; for (var t = 0, e = this.data.masksProperties.length; t < e;) { if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0; t += 1 } return !1 }, initExpressions: function () { this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager); var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface); this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface) }, setBlendMode: function () { var t = getBlendMode(this.data.bm); (this.baseElement || this.layerElement).style["mix-blend-mode"] = t }, initBaseData: function (t, e, r) { this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties) }, getType: function () { return this.type } }, NullElement.prototype.prepareFrame = function (t) { this.prepareProperties(t, !0) }, NullElement.prototype.renderFrame = function () { }, NullElement.prototype.getBaseElement = function () { return null }, NullElement.prototype.destroy = function () { }, NullElement.prototype.sourceRectAtTime = function () { }, NullElement.prototype.hide = function () { }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = { initRendererElement: function () { this.layerElement = createNS("g") }, createContainerElements: function () { this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1; var t, e, r, i = null; if (this.data.td) { if (3 == this.data.td || 1 == this.data.td) { var s = createNS("mask"); s.setAttribute("id", this.layerId), s.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), s.appendChild(this.layerElement), i = s, this.globalData.defs.appendChild(s), featureSupport.maskType || 1 != this.data.td || (s.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), i = r, s.appendChild(r), r.setAttribute("filter", "url(" + locationHref + "#" + t + ")")) } else if (2 == this.data.td) { var a = createNS("mask"); a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha"); var n = createNS("g"); a.appendChild(n), t = createElementID(), e = filtersFactory.createFilter(t); var o = createNS("feColorMatrix"); o.setAttribute("type", "matrix"), o.setAttribute("color-interpolation-filters", "sRGB"), o.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1"), e.appendChild(o), this.globalData.defs.appendChild(e); var h = createNS("rect"); h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), n.appendChild(h), n.appendChild(this.layerElement), i = n, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), n.appendChild(h), r.appendChild(this.layerElement), i = r, n.appendChild(r)), this.globalData.defs.appendChild(a) } } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), i = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement; if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) { var l = createNS("clipPath"), p = createNS("path"); p.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z"); var m = createElementID(); if (l.setAttribute("id", m), l.appendChild(p), this.globalData.defs.appendChild(l), this.checkMasks()) { var f = createNS("g"); f.setAttribute("clip-path", "url(" + locationHref + "#" + m + ")"), f.appendChild(this.layerElement), this.transformedElement = f, i ? i.appendChild(this.transformedElement) : this.baseElement = this.transformedElement } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + m + ")") } 0 !== this.data.bm && this.setBlendMode() }, renderElement: function () { this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v) }, destroyBaseElement: function () { this.layerElement = null, this.matteElement = null, this.maskManager.destroy() }, getBaseElement: function () { return this.data.hd ? null : this.baseElement }, createRenderableComponents: function () { this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this) }, setMatte: function (t) { this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")") } }, IShapeElement.prototype = { addShapeToModifiers: function (t) { var e, r = this.shapeModifiers.length; for (e = 0; e < r; e += 1)this.shapeModifiers[e].addShape(t) }, isShapeInAnimatedModifiers: function (t) { for (var e = this.shapeModifiers.length; 0 < e;)if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0; return !1 }, renderModifiers: function () { if (this.shapeModifiers.length) { var t, e = this.shapes.length; for (t = 0; t < e; t += 1)this.shapes[t].sh.reset(); for (t = (e = this.shapeModifiers.length) - 1; 0 <= t; t -= 1)this.shapeModifiers[t].processShapes(this._isFirstFrame) } }, lcEnum: { 1: "butt", 2: "round", 3: "square" }, ljEnum: { 1: "miter", 2: "round", 3: "bevel" }, searchProcessedElement: function (t) { for (var e = this.processedElements, r = 0, i = e.length; r < i;) { if (e[r].elem === t) return e[r].pos; r += 1 } return 0 }, addProcessedElement: function (t, e) { for (var r = this.processedElements, i = r.length; i;)if (r[i -= 1].elem === t) return void (r[i].pos = e); r.push(new ProcessedElement(t, e)) }, prepareFrame: function (t) { this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange) } }, ITextElement.prototype.initElement = function (t, e, r) { this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties) }, ITextElement.prototype.prepareFrame = function (t) { this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1) }, ITextElement.prototype.createPathShape = function (t, e) { var r, i, s = e.length, a = ""; for (r = 0; r < s; r += 1)i = e[r].ks.k, a += buildShapeString(i, i.i.length, !0, t); return a }, ITextElement.prototype.updateDocumentData = function (t, e) { this.textProperty.updateDocumentData(t, e) }, ITextElement.prototype.canResizeFont = function (t) { this.textProperty.canResizeFont(t) }, ITextElement.prototype.setMinimumFontSize = function (t) { this.textProperty.setMinimumFontSize(t) }, ITextElement.prototype.applyTextPropertiesToMatrix = function (t, e, r, i, s) { switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) { case 1: e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0); break; case 2: e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0) }e.translate(i, s, 0) }, ITextElement.prototype.buildColor = function (t) { return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")" }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function () { }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function (t, e, r) { this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide() }, ICompElement.prototype.prepareFrame = function (t) { if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) { if (this.tm._placeholder) this.renderedFrame = t / this.data.sr; else { var e = this.tm.v; e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e } var r, i = this.elements.length; for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; 0 <= r; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0)) } }, ICompElement.prototype.renderInnerContent = function () { var t, e = this.layers.length; for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame() }, ICompElement.prototype.setElements = function (t) { this.elements = t }, ICompElement.prototype.getElements = function () { return this.elements }, ICompElement.prototype.destroyElements = function () { var t, e = this.layers.length; for (t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy() }, ICompElement.prototype.destroy = function () { this.destroyElements(), this.destroyBaseElement() }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function () { var t = this.globalData.getAssetsPath(this.assetData); this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem) }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function () { var t = createNS("rect"); t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t) }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement), SVGTextElement.prototype.createContent = function () { this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text")) }, SVGTextElement.prototype.buildTextContents = function (t) { for (var e = 0, r = t.length, i = [], s = ""; e < r;)t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s), s = "") : s += t[e], e += 1; return i.push(s), i }, SVGTextElement.prototype.buildNewText = function () { var t, e, r = this.textProperty.currentData; this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize); var i = this.globalData.fontManager.getFontByName(r.f); if (i.fClass) this.layerElement.setAttribute("class", i.fClass); else { this.layerElement.setAttribute("font-family", i.fFamily); var s = r.fWeight, a = r.fStyle; this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s) } var n, o = r.l || [], h = !!this.globalData.fontManager.chars; e = o.length; var l, p = this.mHelper, m = "", f = this.data.singleShape, c = 0, d = 0, u = !0, y = r.tr / 1e3 * r.finalSize; if (!f || h || r.sz) { var g, v, b = this.textSpans.length; for (t = 0; t < e; t += 1)h && f && 0 !== t || (n = t < b ? this.textSpans[t] : createNS(h ? "path" : "text"), b <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = n, this.layerElement.appendChild(n)), n.style.display = "inherit"), p.reset(), p.scale(r.finalSize / 100, r.finalSize / 100), f && (o[t].n && (c = -y, d += r.yOffset, d += u ? 1 : 0, u = !1), this.applyTextPropertiesToMatrix(r, p, o[t].line, c, d), c += o[t].l || 0, c += y), h ? (l = (g = (v = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && v.data || {}).shapes ? g.shapes[0].it : [], f ? m += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (f && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")); f && n && n.setAttribute("d", m) } else { var E = this.textContainer, x = "start"; switch (r.j) { case 1: x = "end"; break; case 2: x = "middle" }E.setAttribute("text-anchor", x), E.setAttribute("letter-spacing", y); var P = this.buildTextContents(r.finalText); for (e = P.length, d = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t] || createNS("tspan")).textContent = P[t], n.setAttribute("x", 0), n.setAttribute("y", d), n.style.display = "inherit", E.appendChild(n), this.textSpans[t] = n, d += r.finalLineHeight; this.layerElement.appendChild(E) } for (; t < this.textSpans.length;)this.textSpans[t].style.display = "none", t += 1; this._sizeChanged = !0 }, SVGTextElement.prototype.sourceRectAtTime = function (t) { if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) { this._sizeChanged = !1; var e = this.layerElement.getBBox(); this.bbox = { top: e.y, left: e.x, width: e.width, height: e.height } } return this.bbox }, SVGTextElement.prototype.renderInnerContent = function () { if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) { var t, e; this._sizeChanged = !0; var r, i, s = this.textAnimator.renderedLetters, a = this.textProperty.currentData.l; for (e = a.length, t = 0; t < e; t += 1)a[t].n || (r = s[t], i = this.textSpans[t], r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc)) } }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function () { }, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function () { }, SVGShapeElement.prototype.createContent = function () { this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes() }, SVGShapeElement.prototype.filterUniqueShapes = function () { var t, e, r, i, s = this.shapes.length, a = this.stylesList.length, n = [], o = !1; for (r = 0; r < a; r += 1) { for (i = this.stylesList[r], o = !1, t = n.length = 0; t < s; t += 1)-1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), o = e._isAnimated || o); 1 < n.length && o && this.setShapesAsAnimated(n) } }, SVGShapeElement.prototype.setShapesAsAnimated = function (t) { var e, r = t.length; for (e = 0; e < r; e += 1)t[e].setAsAnimated() }, SVGShapeElement.prototype.createStyleElement = function (t, e) { var r, i = new SVGStyleData(t, e), s = i.pElem; if ("st" === t.ty) r = new SVGStrokeStyleData(this, t, i); else if ("fl" === t.ty) r = new SVGFillStyleData(this, t, i); else if ("gf" === t.ty || "gs" === t.ty) { r = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")")) } return "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), s.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r }, SVGShapeElement.prototype.createGroupElement = function (t) { var e = new ShapeGroupData; return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e }, SVGShapeElement.prototype.createTransformElement = function (t, e) { var r = TransformPropertyFactory.getTransformProperty(this, t, this), i = new SVGTransformData(r, r.o, e); return this.addToAnimatedContents(t, i), i }, SVGShapeElement.prototype.createShapeElement = function (t, e, r) { var i = 4; "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7); var s = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this)); return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s }, SVGShapeElement.prototype.addToAnimatedContents = function (t, e) { for (var r = 0, i = this.animatedContents.length; r < i;) { if (this.animatedContents[r].element === e) return; r += 1 } this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t }) }, SVGShapeElement.prototype.setElementStyles = function (t) { var e, r = t.styles, i = this.stylesList.length; for (e = 0; e < i; e += 1)this.stylesList[e].closed || r.push(this.stylesList[e]) }, SVGShapeElement.prototype.reloadShapes = function () { this._isFirstFrame = !0; var t, e = this.itemsData.length; for (t = 0; t < e; t += 1)this.prevViewData[t] = this.itemsData[t]; for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)this.dynamicProperties[t].getValue(); this.renderModifiers() }, SVGShapeElement.prototype.searchShapes = function (t, e, r, i, s, a, n) { var o, h, l, p, m, f, c = [].concat(a), d = t.length - 1, u = [], y = []; for (o = d; 0 <= o; o -= 1) { if ((f = this.searchProcessedElement(t[o])) ? e[o] = r[f - 1] : t[o]._render = n, "fl" == t[o].ty || "st" == t[o].ty || "gf" == t[o].ty || "gs" == t[o].ty) f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && i.appendChild(e[o].style.pElem), u.push(e[o].style); else if ("gr" == t[o].ty) { if (f) for (l = e[o].it.length, h = 0; h < l; h += 1)e[o].prevViewData[h] = e[o].it[h]; else e[o] = this.createGroupElement(t[o]); this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, c, n), t[o]._render && i.appendChild(e[o].gr) } else "tr" == t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, c.push(p)) : "sh" == t[o].ty || "rc" == t[o].ty || "el" == t[o].ty || "sr" == t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], c, s)), this.setElementStyles(e[o])) : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty ? (f ? (m = e[o]).closed = !1 : ((m = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = m, this.shapeModifiers.push(m)), y.push(m)) : "rp" == t[o].ty && (f ? (m = e[o]).closed = !0 : (m = ShapeModifiers.getModifier(t[o].ty), (e[o] = m).init(this, t, o, e), this.shapeModifiers.push(m), n = !1), y.push(m)); this.addProcessedElement(t[o], o + 1) } for (d = u.length, o = 0; o < d; o += 1)u[o].closed = !0; for (d = y.length, o = 0; o < d; o += 1)y[o].closed = !0 }, SVGShapeElement.prototype.renderInnerContent = function () { this.renderModifiers(); var t, e = this.stylesList.length; for (t = 0; t < e; t += 1)this.stylesList[t].reset(); for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0")) }, SVGShapeElement.prototype.renderShape = function () { var t, e, r = this.animatedContents.length; for (t = 0; t < r; t += 1)e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame) }, SVGShapeElement.prototype.destroy = function () { this.destroyBaseElement(), this.shapesData = null, this.itemsData = null }, SVGTintFilter.prototype.renderFrame = function (t) { if (t || this.filterManager._mdf) { var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v / 100; this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0") } }, SVGFillFilter.prototype.renderFrame = function (t) { if (t || this.filterManager._mdf) { var e = this.filterManager.effectElements[2].p.v, r = this.filterManager.effectElements[6].p.v; this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0") } }, SVGStrokeEffect.prototype.initialize = function () { var t, e, r, i, s = this.elem.layerElement.children || this.elem.layerElement.childNodes; for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1)t = createNS("path"), e.appendChild(t), this.paths.push({ p: t, m: r }); if (3 === this.filterManager.effectElements[10].p.v) { var a = createNS("mask"), n = createElementID(); a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a); var o = createNS("g"); for (o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); s[0];)o.appendChild(s[0]); this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff") } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) { if (2 === this.filterManager.effectElements[10].p.v) for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length;)this.elem.layerElement.removeChild(s[0]); this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff") } this.initialized = !0, this.pathMasker = e }, SVGStrokeEffect.prototype.renderFrame = function (t) { this.initialized || this.initialize(); var e, r, i, s = this.paths.length; for (e = 0; e < s; e += 1)if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) { var a; if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) { var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100, o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100, h = i.getTotalLength(); a = "0 0 0 " + h * n + " "; var l, p = h * (o - n), m = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100, f = Math.floor(p / m); for (l = 0; l < f; l += 1)a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " "; a += "0 " + 10 * h + " 0 0" } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100; i.setAttribute("stroke-dasharray", a) } if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) { var c = this.filterManager.effectElements[3].p.v; this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * c[0]) + "," + bm_floor(255 * c[1]) + "," + bm_floor(255 * c[2]) + ")") } }, SVGTritoneFilter.prototype.renderFrame = function (t) { if (t || this.filterManager._mdf) { var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v, s = i[0] + " " + r[0] + " " + e[0], a = i[1] + " " + r[1] + " " + e[1], n = i[2] + " " + r[2] + " " + e[2]; this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n) } }, SVGProLevelsFilter.prototype.createFeFunc = function (t, e) { var r = createNS(t); return r.setAttribute("type", "table"), e.appendChild(r), r }, SVGProLevelsFilter.prototype.getTableValue = function (t, e, r, i, s) { for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, { length: 256 }), m = 0, f = s - i, c = e - t; o <= 256;)n = (a = o / 256) <= h ? c < 0 ? s : i : l <= a ? c < 0 ? i : s : i + f * Math.pow((a - t) / c, 1 / r), p[m++] = n, o += 256 / 255; return p.join(" ") }, SVGProLevelsFilter.prototype.renderFrame = function (t) { if (t || this.filterManager._mdf) { var e, r = this.filterManager.effectElements; this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e)) } }, SVGDropShadowEffect.prototype.renderFrame = function (t) { if (t || this.filterManager._mdf) { if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) { var e = this.filterManager.effectElements[0].p.v; this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2]))) } if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) { var r = this.filterManager.effectElements[3].p.v, i = (this.filterManager.effectElements[2].p.v - 90) * degToRads, s = r * Math.cos(i), a = r * Math.sin(i); this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a) } } }; var _svgMatteSymbols = []; function SVGMatte3Effect(t, e, r) { this.initialized = !1, this.filterManager = e, this.filterElem = t, (this.elem = r).matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement } function SVGEffects(t) { var e, r, i = t.data.ef ? t.data.ef.length : 0, s = createElementID(), a = filtersFactory.createFilter(s), n = 0; for (this.filters = [], e = 0; e < i; e += 1)r = null, 20 === t.data.ef[e].ty ? (n += 1, r = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1, r = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1, r = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1, r = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1, r = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty && (r = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t)), r && this.filters.push(r); n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this) } function CVContextData() { this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1; var t; for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1)this.saved[t] = createTypedArray("float32", 16); this._length = 15 } function CVBaseElement() { } function CVImageElement(t, e, r) { this.failed = !1, this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getImage(this.assetData), this.initElement(t, e, r) } function CVCompElement(t, e, r) { this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } } function CVMaskElement(t, e) { this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length); var r, i = this.masksProperties.length, s = !1; for (r = 0; r < i; r++)"n" !== this.masksProperties[r].mode && (s = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3); (this.hasMasks = s) && this.element.addRenderableComponent(this) } function CVShapeElement(t, e, r) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r) } function CVSolidElement(t, e, r) { this.initElement(t, e, r) } function CVTextElement(t, e, r) { this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(t, e, r) } function CVEffects() { } function HBaseElement(t, e, r) { } function HSolidElement(t, e, r) { this.initElement(t, e, r) } function HCompElement(t, e, r) { this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } } function HShapeElement(t, e, r) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 } } function HTextElement(t, e, r) { this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r) } function HImageElement(t, e, r) { this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r) } function HCameraElement(t, e, r) { this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy(); var i = PropertyFactory.getProp; if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) { var s, a = t.ks.or.k.length; for (s = 0; s < a; s += 1)t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null } this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0 } function HEffects() { } SVGMatte3Effect.prototype.findSymbol = function (t) { for (var e = 0, r = _svgMatteSymbols.length; e < r;) { if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e]; e += 1 } return null }, SVGMatte3Effect.prototype.replaceInParent = function (t, e) { var r = t.layerElement.parentNode; if (r) { for (var i, s = r.children, a = 0, n = s.length; a < n && s[a] !== t.layerElement;)a += 1; a <= n - 2 && (i = s[a + 1]); var o = createNS("use"); o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o) } }, SVGMatte3Effect.prototype.setElementAsMask = function (t, e) { if (!this.findSymbol(e)) { var r = createElementID(), i = createNS("mask"); i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e); var s = t.globalData.defs; s.appendChild(i); var a = createNS("symbol"); a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), s.appendChild(a); var n = createNS("use"); n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = !1, e.show() } t.setMatte(e.layerId) }, SVGMatte3Effect.prototype.initialize = function () { for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;)e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1; this.initialized = !0 }, SVGMatte3Effect.prototype.renderFrame = function () { this.initialized || this.initialize() }, SVGEffects.prototype.renderFrame = function (t) { var e, r = this.filters.length; for (e = 0; e < r; e += 1)this.filters[e].renderFrame(t) }, CVContextData.prototype.duplicate = function () { var t = 2 * this._length, e = this.savedOp; this.savedOp = createTypedArray("float32", t), this.savedOp.set(e); var r = 0; for (r = this._length; r < t; r += 1)this.saved[r] = createTypedArray("float32", 16); this._length = t }, CVContextData.prototype.reset = function () { this.cArrPos = 0, this.cTr.reset(), this.cO = 1 }, CVBaseElement.prototype = { createElements: function () { }, initRendererElement: function () { }, createContainerElements: function () { this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this) }, createContent: function () { }, setBlendMode: function () { var t = this.globalData; if (t.blendMode !== this.data.bm) { t.blendMode = this.data.bm; var e = getBlendMode(this.data.bm); t.canvasContext.globalCompositeOperation = e } }, createRenderableComponents: function () { this.maskManager = new CVMaskElement(this.data, this) }, hideElement: function () { this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0) }, showElement: function () { this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0) }, renderFrame: function () { this.hidden || this.data.hd || (this.renderTransform(), this.renderRenderable(), this.setBlendMode(), this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)) }, destroy: function () { this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy() }, mHelper: new Matrix }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function () { if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) { var t = createTag("canvas"); t.width = this.assetData.w, t.height = this.assetData.h; var e, r, i = t.getContext("2d"), s = this.img.width, a = this.img.height, n = s / a, o = this.assetData.w / this.assetData.h, h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio; o < n && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (r = a) * o : r = (e = s) / o, i.drawImage(this.img, (s - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t } }, CVImageElement.prototype.renderInnerContent = function (t) { this.failed || this.canvasContext.drawImage(this.img, 0, 0) }, CVImageElement.prototype.destroy = function () { this.img = null }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function () { var t; for (t = this.layers.length - 1; 0 <= t; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame() }, CVCompElement.prototype.destroy = function () { var t; for (t = this.layers.length - 1; 0 <= t; t -= 1)this.elements[t] && this.elements[t].destroy(); this.layers = null, this.elements = null }, CVMaskElement.prototype.renderFrame = function () { if (this.hasMasks) { var t, e, r, i, s = this.element.finalTransform.mat, a = this.element.canvasContext, n = this.masksProperties.length; for (a.beginPath(), t = 0; t < n; t++)if ("n" !== this.masksProperties[t].mode) { this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[t].v, e = s.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(e[0], e[1]); var o, h = i._length; for (o = 1; o < h; o++)r = s.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]); r = s.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]) } this.element.globalData.renderer.save(!0), a.clip() } }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function () { this.element = null }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function () { this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []) }, CVShapeElement.prototype.createStyleElement = function (t, e) { var r = { data: t, type: t.ty, preTransforms: this.transformsManager.addTransformSequence(e), transforms: [], elements: [], closed: !0 === t.hd }, i = {}; if ("fl" == t.ty || "st" == t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bm_floor(i.c.v[0]) + "," + bm_floor(i.c.v[1]) + "," + bm_floor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" == t.ty || "gs" == t.ty) { if (r.lc = this.lcEnum[t.lc] || "round", r.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) { var s = new DashProperty(this, t.d, "canvas"); i.d = s, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0]) } } else r.r = 2 === t.r ? "evenodd" : "nonzero"; return this.stylesList.push(r), i.style = r, i }, CVShapeElement.prototype.createGroupElement = function (t) { return { it: [], prevViewData: [] } }, CVShapeElement.prototype.createTransformElement = function (t) { return { transform: { opacity: 1, _opMdf: !1, key: this.transformsManager.getNewKey(), op: PropertyFactory.getProp(this, t.o, 0, .01, this), mProps: TransformPropertyFactory.getTransformProperty(this, t, this) } } }, CVShapeElement.prototype.createShapeElement = function (t) { var e = new CVShapeData(this, t, this.stylesList, this.transformsManager); return this.shapes.push(e), this.addShapeToModifiers(e), e }, CVShapeElement.prototype.reloadShapes = function () { this._isFirstFrame = !0; var t, e = this.itemsData.length; for (t = 0; t < e; t += 1)this.prevViewData[t] = this.itemsData[t]; for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1)this.dynamicProperties[t].getValue(); this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame) }, CVShapeElement.prototype.addTransformToStyleList = function (t) { var e, r = this.stylesList.length; for (e = 0; e < r; e += 1)this.stylesList[e].closed || this.stylesList[e].transforms.push(t) }, CVShapeElement.prototype.removeTransformFromStyleList = function () { var t, e = this.stylesList.length; for (t = 0; t < e; t += 1)this.stylesList[t].closed || this.stylesList[t].transforms.pop() }, CVShapeElement.prototype.closeStyles = function (t) { var e, r = t.length; for (e = 0; e < r; e += 1)t[e].closed = !0 }, CVShapeElement.prototype.searchShapes = function (t, e, r, i, s) { var a, n, o, h, l, p, m = t.length - 1, f = [], c = [], d = [].concat(s); for (a = m; 0 <= a; a -= 1) { if ((h = this.searchProcessedElement(t[a])) ? e[a] = r[h - 1] : t[a]._shouldRender = i, "fl" == t[a].ty || "st" == t[a].ty || "gf" == t[a].ty || "gs" == t[a].ty) h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d), f.push(e[a].style); else if ("gr" == t[a].ty) { if (h) for (o = e[a].it.length, n = 0; n < o; n += 1)e[a].prevViewData[n] = e[a].it[n]; else e[a] = this.createGroupElement(t[a]); this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, d) } else "tr" == t[a].ty ? (h || (p = this.createTransformElement(t[a]), e[a] = p), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" == t[a].ty || "rc" == t[a].ty || "el" == t[a].ty || "sr" == t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" == t[a].ty || "rd" == t[a].ty ? (h ? (l = e[a]).closed = !1 : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = l, this.shapeModifiers.push(l)), c.push(l)) : "rp" == t[a].ty && (h ? (l = e[a]).closed = !0 : (l = ShapeModifiers.getModifier(t[a].ty), (e[a] = l).init(this, t, a, e), this.shapeModifiers.push(l), i = !1), c.push(l)); this.addProcessedElement(t[a], a + 1) } for (this.removeTransformFromStyleList(), this.closeStyles(f), m = c.length, a = 0; a < m; a += 1)c[a].closed = !0 }, CVShapeElement.prototype.renderInnerContent = function () { this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0) }, CVShapeElement.prototype.renderShapeTransform = function (t, e) { (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0) }, CVShapeElement.prototype.drawLayer = function () { var t, e, r, i, s, a, n, o, h, l = this.stylesList.length, p = this.globalData.renderer, m = this.globalData.canvasContext; for (t = 0; t < l; t += 1)if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) { for (p.save(), a = h.elements, "st" === o || "gs" === o ? (m.strokeStyle = "st" === o ? h.co : h.grd, m.lineWidth = h.wi, m.lineCap = h.lc, m.lineJoin = h.lj, m.miterLimit = h.ml || 0) : m.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && m.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), r = a.length, e = 0; e < r; e += 1) { for ("st" !== o && "gs" !== o || (m.beginPath(), h.da && (m.setLineDash(h.da), m.lineDashOffset = h.do)), s = (n = a[e].trNodes).length, i = 0; i < s; i += 1)"m" == n[i].t ? m.moveTo(n[i].p[0], n[i].p[1]) : "c" == n[i].t ? m.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : m.closePath(); "st" !== o && "gs" !== o || (m.stroke(), h.da && m.setLineDash(this.dashResetter)) } "st" !== o && "gs" !== o && m.fill(h.r), p.restore() } }, CVShapeElement.prototype.renderShape = function (t, e, r, i) { var s, a; for (a = t, s = e.length - 1; 0 <= s; s -= 1)"tr" == e[s].ty ? (a = r[s].transform, this.renderShapeTransform(t, a)) : "sh" == e[s].ty || "el" == e[s].ty || "rc" == e[s].ty || "sr" == e[s].ty ? this.renderPath(e[s], r[s]) : "fl" == e[s].ty ? this.renderFill(e[s], r[s], a) : "st" == e[s].ty ? this.renderStroke(e[s], r[s], a) : "gf" == e[s].ty || "gs" == e[s].ty ? this.renderGradientFill(e[s], r[s], a) : "gr" == e[s].ty ? this.renderShape(a, e[s].it, r[s].it) : e[s].ty; i && this.drawLayer() }, CVShapeElement.prototype.renderStyledShape = function (t, e) { if (this._isFirstFrame || e._mdf || t.transforms._mdf) { var r, i, s, a = t.trNodes, n = e.paths, o = n._length; a.length = 0; var h = t.transforms.finalTransform; for (s = 0; s < o; s += 1) { var l = n.shapes[s]; if (l && l.v) { for (i = l._length, r = 1; r < i; r += 1)1 === r && a.push({ t: "m", p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0) }), a.push({ t: "c", pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r]) }); 1 === i && a.push({ t: "m", p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0) }), l.c && i && (a.push({ t: "c", pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0]) }), a.push({ t: "z" })) } } t.trNodes = a } }, CVShapeElement.prototype.renderPath = function (t, e) { if (!0 !== t.hd && t._shouldRender) { var r, i = e.styledShapes.length; for (r = 0; r < i; r += 1)this.renderStyledShape(e.styledShapes[r], e.sh) } }, CVShapeElement.prototype.renderFill = function (t, e, r) { var i = e.style; (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity) }, CVShapeElement.prototype.renderGradientFill = function (t, e, r) { var i = e.style; if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) { var s = this.globalData.canvasContext, a = e.s.v, n = e.e.v; if (1 === t.t) f = s.createLinearGradient(a[0], a[1], n[0], n[1]); else var o = Math.sqrt(Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2)), h = Math.atan2(n[1] - a[1], n[0] - a[0]), l = o * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v), p = Math.cos(h + e.a.v) * l + a[0], m = Math.sin(h + e.a.v) * l + a[1], f = s.createRadialGradient(p, m, 0, a[0], a[1], o); var c, d = t.g.p, u = e.g.c, y = 1; for (c = 0; c < d; c += 1)e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * c + 1]), f.addColorStop(u[4 * c] / 100, "rgba(" + u[4 * c + 1] + "," + u[4 * c + 2] + "," + u[4 * c + 3] + "," + y + ")"); i.grd = f } i.coOp = e.o.v * r.opacity }, CVShapeElement.prototype.renderStroke = function (t, e, r) { var i = e.style, s = e.d; s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v) }, CVShapeElement.prototype.destroy = function () { this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0 }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function () { var t = this.canvasContext; t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh) }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function () { var t = this.textProperty.currentData; this.renderedLetters = createSizedArray(t.l ? t.l.length : 0); var e = !1; t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e; var r = !1; t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw); var i, s, a = this.globalData.fontManager.getFontByName(t.f), n = t.l, o = this.mHelper; this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length; var h, l, p, m, f, c, d, u, y, g, v = this.data.singleShape, b = t.tr / 1e3 * t.finalSize, E = 0, x = 0, P = !0, S = 0; for (i = 0; i < s; i += 1) { for (l = (h = this.globalData.fontManager.getCharData(t.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && h.data || {}, o.reset(), v && n[i].n && (E = -b, x += t.yOffset, x += P ? 1 : 0, P = !1), d = (f = l.shapes ? l.shapes[0].it : []).length, o.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, o, n[i].line, E, x), y = createSizedArray(d), c = 0; c < d; c += 1) { for (m = f[c].ks.k.i.length, u = f[c].ks.k, g = [], p = 1; p < m; p += 1)1 == p && g.push(o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), g.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[p][0], u.i[p][1], 0), o.applyToY(u.i[p][0], u.i[p][1], 0), o.applyToX(u.v[p][0], u.v[p][1], 0), o.applyToY(u.v[p][0], u.v[p][1], 0)); g.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[0][0], u.i[0][1], 0), o.applyToY(u.i[0][0], u.i[0][1], 0), o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), y[c] = g } v && (E += n[i].l, E += b), this.textSpans[S] ? this.textSpans[S].elem = y : this.textSpans[S] = { elem: y }, S += 1 } }, CVTextElement.prototype.renderInnerContent = function () { var t, e, r, i, s, a, n = this.canvasContext; this.finalTransform.mat.props; n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag); var o, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l; e = l.length; var p, m, f = null, c = null, d = null; for (t = 0; t < e; t += 1)if (!l[t].n) { if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) { for (o && o.fc ? f !== o.fc && (f = o.fc, n.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill, n.fillStyle = this.values.fill), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)for (a = (m = p[r]).length, this.globalData.canvasContext.moveTo(m[0], m[1]), s = 2; s < a; s += 6)this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]); this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill() } if (this.stroke) { for (o && o.sw ? d !== o.sw && (d = o.sw, n.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? c !== o.sc && (c = o.sc, n.strokeStyle = o.sc) : c !== this.values.stroke && (c = this.values.stroke, n.strokeStyle = this.values.stroke), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)for (a = (m = p[r]).length, this.globalData.canvasContext.moveTo(m[0], m[1]), s = 2; s < a; s += 6)this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]); this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke() } o && this.globalData.renderer.restore() } }, CVEffects.prototype.renderFrame = function () { }, HBaseElement.prototype = { checkBlendMode: function () { }, initRendererElement: function () { this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement) }, createContainerElements: function () { this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode() }, renderElement: function () { this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()), this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v) }, renderFrame: function () { this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1)) }, destroy: function () { this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null) }, createRenderableComponents: function () { this.maskManager = new MaskElement(this.data, this, this.globalData) }, addEffects: function () { }, setMatte: function () { } }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function () { var t; this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t) }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function () { this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement }, HCompElement.prototype.addTo3dContainer = function (t, e) { for (var r, i = 0; i < e;)this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1; r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t) }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function () { var t; if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement; else { t = createNS("svg"); var e = this.comp.data ? this.comp.data : this.globalData.compSize; t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t) } this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t }, HShapeElement.prototype.getTransformedPoint = function (t, e) { var r, i = t.length; for (r = 0; r < i; r += 1)e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0); return e }, HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) { var r, i, s, a, n, o = t.sh.v, h = t.transformers, l = o._length; if (!(l <= 1)) { for (r = 0; r < l - 1; r += 1)i = this.getTransformedPoint(h, o.v[r]), s = this.getTransformedPoint(h, o.o[r]), a = this.getTransformedPoint(h, o.i[r + 1]), n = this.getTransformedPoint(h, o.v[r + 1]), this.checkBounds(i, s, a, n, e); o.c && (i = this.getTransformedPoint(h, o.v[r]), s = this.getTransformedPoint(h, o.o[r]), a = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(i, s, a, n, e)) } }, HShapeElement.prototype.checkBounds = function (t, e, r, i, s) { this.getBoundsOfCurve(t, e, r, i); var a = this.shapeBoundingBox; s.x = bm_min(a.left, s.x), s.xMax = bm_max(a.right, s.xMax), s.y = bm_min(a.top, s.y), s.yMax = bm_max(a.bottom, s.yMax) }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, HShapeElement.prototype.getBoundsOfCurve = function (t, e, r, i) { for (var s, a, n, o, h, l, p, m = [[t[0], i[0]], [t[1], i[1]]], f = 0; f < 2; ++f)if (a = 6 * t[f] - 12 * e[f] + 6 * r[f], s = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f], n = 3 * e[f] - 3 * t[f], a |= 0, n |= 0, 0 !== (s |= 0)) (h = a * a - 4 * n * s) < 0 || (0 < (l = (-a + bm_sqrt(h)) / (2 * s)) && l < 1 && m[f].push(this.calculateF(l, t, e, r, i, f)), 0 < (p = (-a - bm_sqrt(h)) / (2 * s)) && p < 1 && m[f].push(this.calculateF(p, t, e, r, i, f))); else { if (0 === a) continue; 0 < (o = -n / a) && o < 1 && m[f].push(this.calculateF(o, t, e, r, i, f)) } this.shapeBoundingBox.left = bm_min.apply(null, m[0]), this.shapeBoundingBox.top = bm_min.apply(null, m[1]), this.shapeBoundingBox.right = bm_max.apply(null, m[0]), this.shapeBoundingBox.bottom = bm_max.apply(null, m[1]) }, HShapeElement.prototype.calculateF = function (t, e, r, i, s, a) { return bm_pow(1 - t, 3) * e[a] + 3 * bm_pow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bm_pow(t, 2) * i[a] + bm_pow(t, 3) * s[a] }, HShapeElement.prototype.calculateBoundingBox = function (t, e) { var r, i = t.length; for (r = 0; r < i; r += 1)t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e) }, HShapeElement.prototype.currentBoxContains = function (t) { return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height }, HShapeElement.prototype.renderInnerContent = function () { if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) { var t = this.tempBoundingBox, e = 999999; if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return; var r = !1; this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), (r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) && (this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)") } }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function () { if (this.isMasked = this.checkMasks(), this.isMasked) { this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH); var t = createNS("g"); this.maskedElement.appendChild(t), this.innerElem = t } else this.renderType = "html", this.innerElem = this.layerElement; this.checkParenting() }, HTextElement.prototype.buildNewText = function () { var t = this.textProperty.currentData; this.renderedLetters = createSizedArray(t.l ? t.l.length : 0); var e = this.innerElem.style; e.color = e.fill = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)", t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px"); var r, i, s = this.globalData.fontManager.getFontByName(t.f); if (!this.globalData.fontManager.chars) if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass; else { e.fontFamily = s.fFamily; var a = t.fWeight, n = t.fStyle; e.fontStyle = n, e.fontWeight = a } var o, h, l, p = t.l; i = p.length; var m, f = this.mHelper, c = "", d = 0; for (r = 0; r < i; r += 1) { if (this.globalData.fontManager.chars ? (this.textPaths[d] ? o = this.textPaths[d] : ((o = createNS("path")).setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? l = (h = this.textSpans[d]).children[0] : (h = createTag("div"), (l = createNS("svg")).appendChild(o), styleDiv(h)))) : this.isMasked ? o = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (h = this.textSpans[d], o = this.textPaths[d]) : (styleDiv(h = createTag("span")), styleDiv(o = createTag("span")), h.appendChild(o)), this.globalData.fontManager.chars) { var u, y = this.globalData.fontManager.getCharData(t.finalText[r], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily); if (u = y ? y.data : null, f.reset(), u && u.shapes && (m = u.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), c = this.createPathShape(f, m), o.setAttribute("d", c)), this.isMasked) this.innerElem.appendChild(o); else { if (this.innerElem.appendChild(h), u && u.shapes) { document.body.appendChild(l); var g = l.getBBox(); l.setAttribute("width", g.width + 2), l.setAttribute("height", g.height + 2), l.setAttribute("viewBox", g.x - 1 + " " + (g.y - 1) + " " + (g.width + 2) + " " + (g.height + 2)), l.style.transform = l.style.webkitTransform = "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)", p[r].yOffset = g.y - 1 } else l.setAttribute("width", 1), l.setAttribute("height", 1); h.appendChild(l) } } else o.textContent = p[r].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(h), o.style.transform = o.style.webkitTransform = "translate3d(0," + -t.finalSize / 1.2 + "px,0)"); this.isMasked ? this.textSpans[d] = o : this.textSpans[d] = h, this.textSpans[d].style.display = "block", this.textPaths[d] = o, d += 1 } for (; d < this.textSpans.length;)this.textSpans[d].style.display = "none", d += 1 }, HTextElement.prototype.renderInnerContent = function () { if (this.data.singleShape) { if (!this._isFirstFrame && !this.lettersChangedFlag) return; this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)") } if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) { var t, e, r, i, s, a = 0, n = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l; for (e = o.length, t = 0; t < e; t += 1)o[t].n ? a += 1 : (i = this.textSpans[t], s = this.textPaths[t], r = n[a], a += 1, r._mdf.m && (this.isMasked ? i.setAttribute("transform", r.m) : i.style.transform = i.style.webkitTransform = r.m), i.style.opacity = r.o, r.sw && r._mdf.sw && s.setAttribute("stroke-width", r.sw), r.sc && r._mdf.sc && s.setAttribute("stroke", r.sc), r.fc && r._mdf.fc && (s.setAttribute("fill", r.fc), s.style.color = r.fc)); if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) { var h = this.innerElem.getBBox(); this.currentBBox.w !== h.width && (this.currentBBox.w = h.width, this.svgElement.setAttribute("width", h.width)), this.currentBBox.h !== h.height && (this.currentBBox.h = h.height, this.svgElement.setAttribute("height", h.height)); this.currentBBox.w === h.width + 2 && this.currentBBox.h === h.height + 2 && this.currentBBox.x === h.x - 1 && this.currentBBox.y === h.y - 1 || (this.currentBBox.w = h.width + 2, this.currentBBox.h = h.height + 2, this.currentBBox.x = h.x - 1, this.currentBBox.y = h.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)") } } }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function () { var t = this.globalData.getAssetsPath(this.assetData), e = new Image; this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln) }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function () { var t, e, r = this.comp.threeDElements.length; for (t = 0; t < r; t += 1)"3d" === (e = this.comp.threeDElements[t]).type && (e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)") }, HCameraElement.prototype.createElements = function () { }, HCameraElement.prototype.hide = function () { }, HCameraElement.prototype.renderFrame = function () { var t, e, r = this._isFirstFrame; if (this.hierarchy) for (e = this.hierarchy.length, t = 0; t < e; t += 1)r = this.hierarchy[t].finalTransform.mProp._mdf || r; if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) { if (this.mat.reset(), this.hierarchy) for (t = e = this.hierarchy.length - 1; 0 <= t; t -= 1) { var i = this.hierarchy[t].finalTransform.mProp; this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]) } if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) { var s = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]], a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)), n = [s[0] / a, s[1] / a, s[2] / a], o = Math.sqrt(n[2] * n[2] + n[0] * n[0]), h = Math.atan2(n[1], o), l = Math.atan2(n[0], -n[2]); this.mat.rotateY(l).rotateX(-h) } this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v); var p = !this._prevMat.equals(this.mat); if ((p || this.pe._mdf) && this.comp.threeDElements) { var m; for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)"3d" === (m = this.comp.threeDElements[t]).type && (p && (m.container.style.transform = m.container.style.webkitTransform = this.mat.toCSS()), this.pe._mdf && (m.perspectiveElem.style.perspective = m.perspectiveElem.style.webkitPerspective = this.pe.v + "px")); this.mat.clone(this._prevMat) } } this._isFirstFrame = !1 }, HCameraElement.prototype.prepareFrame = function (t) { this.prepareProperties(t, !0) }, HCameraElement.prototype.destroy = function () { }, HCameraElement.prototype.initExpressions = function () { }, HCameraElement.prototype.getBaseElement = function () { return null }, HEffects.prototype.renderFrame = function () { }; var animationManager = function () { var t = {}, s = [], i = 0, a = 0, n = 0, o = !0, h = !1; function r(t) { for (var e = 0, r = t.target; e < a;)s[e].animation === r && (s.splice(e, 1), e -= 1, a -= 1, r.isPaused || m()), e += 1 } function l(t, e) { if (!t) return null; for (var r = 0; r < a;) { if (s[r].elem == t && null !== s[r].elem) return s[r].animation; r += 1 } var i = new AnimationItem; return f(i, t), i.setData(t, e), i } function p() { n += 1, d() } function m() { n -= 1 } function f(t, e) { t.addEventListener("destroy", r), t.addEventListener("_active", p), t.addEventListener("_idle", m), s.push({ elem: e, animation: t }), a += 1 } function c(t) { var e, r = t - i; for (e = 0; e < a; e += 1)s[e].animation.advanceTime(r); i = t, n && !h ? window.requestAnimationFrame(c) : o = !0 } function e(t) { i = t, window.requestAnimationFrame(c) } function d() { !h && n && o && (window.requestAnimationFrame(e), o = !1) } return t.registerAnimation = l, t.loadAnimation = function (t) { var e = new AnimationItem; return f(e, null), e.setParams(t), e }, t.setSpeed = function (t, e) { var r; for (r = 0; r < a; r += 1)s[r].animation.setSpeed(t, e) }, t.setDirection = function (t, e) { var r; for (r = 0; r < a; r += 1)s[r].animation.setDirection(t, e) }, t.play = function (t) { var e; for (e = 0; e < a; e += 1)s[e].animation.play(t) }, t.pause = function (t) { var e; for (e = 0; e < a; e += 1)s[e].animation.pause(t) }, t.stop = function (t) { var e; for (e = 0; e < a; e += 1)s[e].animation.stop(t) }, t.togglePause = function (t) { var e; for (e = 0; e < a; e += 1)s[e].animation.togglePause(t) }, t.searchAnimations = function (t, e, r) { var i, s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), a = s.length; for (i = 0; i < a; i += 1)r && s[i].setAttribute("data-bm-type", r), l(s[i], t); if (e && 0 === a) { r || (r = "svg"); var n = document.getElementsByTagName("body")[0]; n.innerHTML = ""; var o = createTag("div"); o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), n.appendChild(o), l(o, t) } }, t.resize = function () { var t; for (t = 0; t < a; t += 1)s[t].animation.resize() }, t.goToAndStop = function (t, e, r) { var i; for (i = 0; i < a; i += 1)s[i].animation.goToAndStop(t, e, r) }, t.destroy = function (t) { var e; for (e = a - 1; 0 <= e; e -= 1)s[e].animation.destroy(t) }, t.freeze = function () { h = !0 }, t.unfreeze = function () { h = !1, d() }, t.getRegisteredAnimations = function () { var t, e = s.length, r = []; for (t = 0; t < e; t += 1)r.push(s[t].animation); return r }, t }(), AnimationItem = function () { this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader }; extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function (t) { t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container); var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg"; switch (e) { case "canvas": this.renderer = new CanvasRenderer(this, t.rendererSettings); break; case "svg": this.renderer = new SVGRenderer(this, t.rendererSettings); break; default: this.renderer = new HybridRenderer(this, t.rendererSettings) }this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || (!1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop)), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, t.animationData ? this.configAnimation(t.animationData) : t.path && ("json" != t.path.substr(-4) && ("/" != t.path.substr(-1, 1) && (t.path += "/"), t.path += "data.json"), -1 != t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function () { this.trigger("data_failed") }.bind(this))) }, AnimationItem.prototype.setData = function (t, e) { var r = { wrapper: t, animationData: e ? "object" == typeof e ? e : JSON.parse(e) : null }, i = t.attributes; r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas"; var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : ""; "" === s || (r.loop = "false" !== s && ("true" === s || parseInt(s))); var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value; r.autoplay = "false" !== a, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r) }, AnimationItem.prototype.includeLayers = function (t) { t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip)); var e, r, i = this.animationData.layers, s = i.length, a = t.layers, n = a.length; for (r = 0; r < n; r += 1)for (e = 0; e < s;) { if (i[e].id == a[r].id) { i[e] = a[r]; break } e += 1 } if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (s = t.assets.length, e = 0; e < s; e += 1)this.animationData.assets.push(t.assets[e]); this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment() }, AnimationItem.prototype.loadNextSegment = function () { var t = this.animationData.segments; if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames); var e = t.shift(); this.timeCompleted = e.time * this.frameRate; var r = this.path + this.fileName + "_" + this.segmentPos + ".json"; this.segmentPos += 1, assetLoader.load(r, this.includeLayers.bind(this), function () { this.trigger("data_failed") }.bind(this)) }, AnimationItem.prototype.loadSegments = function () { this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment() }, AnimationItem.prototype.imagesLoaded = function () { this.trigger("loaded_images"), this.checkLoaded() }, AnimationItem.prototype.preloadImages = function () { this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this)) }, AnimationItem.prototype.configAnimation = function (t) { this.renderer && (this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.renderer.searchExtraCompositions(t.assets), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded()) }, AnimationItem.prototype.waitForFontsLoaded = function () { this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20)) }, AnimationItem.prototype.checkLoaded = function () { this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function () { this.trigger("DOMLoaded") }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()) }, AnimationItem.prototype.resize = function () { this.renderer.updateContainerSize() }, AnimationItem.prototype.setSubframe = function (t) { this.subframeEnabled = !!t }, AnimationItem.prototype.gotoFrame = function () { this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame() }, AnimationItem.prototype.renderFrame = function () { !1 !== this.isLoaded && this.renderer.renderFrame(this.currentFrame + this.firstFrame) }, AnimationItem.prototype.play = function (t) { t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active"))) }, AnimationItem.prototype.pause = function (t) { t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle")) }, AnimationItem.prototype.togglePause = function (t) { t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause()) }, AnimationItem.prototype.stop = function (t) { t && this.name != t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0)) }, AnimationItem.prototype.goToAndStop = function (t, e, r) { r && this.name != r || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause()) }, AnimationItem.prototype.goToAndPlay = function (t, e, r) { this.goToAndStop(t, e, r), this.play() }, AnimationItem.prototype.advanceTime = function (t) { if (!0 !== this.isPaused && !1 !== this.isLoaded) { var e = this.currentRawFrame + t * this.frameModifier, r = !1; e >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete")) } }, AnimationItem.prototype.adjustSegment = function (t, e) { this.playCount = 0, t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart") }, AnimationItem.prototype.setSegment = function (t, e) { var r = -1; this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.timeCompleted = this.totalFrames = e - t, -1 !== r && this.goToAndStop(r, !0) }, AnimationItem.prototype.playSegments = function (t, e) { if (e && (this.segments.length = 0), "object" == typeof t[0]) { var r, i = t.length; for (r = 0; r < i; r += 1)this.segments.push(t[r]) } else this.segments.push(t); this.segments.length && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play() }, AnimationItem.prototype.resetSegments = function (t) { this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0) }, AnimationItem.prototype.checkSegments = function (t) { return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0) }, AnimationItem.prototype.destroy = function (t) { t && this.name != t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null) }, AnimationItem.prototype.setCurrentRawFrameValue = function (t) { this.currentRawFrame = t, this.gotoFrame() }, AnimationItem.prototype.setSpeed = function (t) { this.playSpeed = t, this.updaFrameModifier() }, AnimationItem.prototype.setDirection = function (t) { this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier() }, AnimationItem.prototype.updaFrameModifier = function () { this.frameModifier = this.frameMult * this.playSpeed * this.playDirection }, AnimationItem.prototype.getPath = function () { return this.path }, AnimationItem.prototype.getAssetsPath = function (t) { var e = ""; if (t.e) e = t.p; else if (this.assetsPath) { var r = t.p; -1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r } else e = this.path, e += t.u ? t.u : "", e += t.p; return e }, AnimationItem.prototype.getAssetData = function (t) { for (var e = 0, r = this.assets.length; e < r;) { if (t == this.assets[e].id) return this.assets[e]; e += 1 } }, AnimationItem.prototype.hide = function () { this.renderer.hide() }, AnimationItem.prototype.show = function () { this.renderer.show() }, AnimationItem.prototype.getDuration = function (t) { return t ? this.totalFrames : this.totalFrames / this.frameRate }, AnimationItem.prototype.trigger = function (t) { if (this._cbs && this._cbs[t]) switch (t) { case "enterFrame": this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)); break; case "loopComplete": this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)); break; case "complete": this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult)); break; case "segmentStart": this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)); break; case "destroy": this.triggerEvent(t, new BMDestroyEvent(t, this)); break; default: this.triggerEvent(t) }"enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this)) }; var Expressions = (XV = {}, XV.initExpressions = function (t) { var e = 0, r = []; function i() { var t, e = r.length; for (t = 0; t < e; t += 1)r[t].release(); r.length = 0 } t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function () { e += 1 }, t.renderer.globalData.popExpression = function () { 0 == (e -= 1) && i() }, t.renderer.globalData.registerExpressionProperty = function (t) { -1 === r.indexOf(t) && r.push(t) } }, XV), XV; expressionsPlugin = Expressions; var ExpressionManager = function () { var ob = {}, Math = BMMath, window = null, document = null; function $bm_isInstanceOfArray(t) { return t.constructor === Array || t.constructor === Float32Array } function isNumerable(t, e) { return "number" === t || "boolean" === t || "string" === t || e instanceof Number } function $bm_neg(t) { var e = typeof t; if ("number" === e || "boolean" === e || t instanceof Number) return -t; if ($bm_isInstanceOfArray(t)) { var r, i = t.length, s = []; for (r = 0; r < i; r += 1)s[r] = -t[r]; return s } } var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get; function sum(t, e) { var r = typeof t, i = typeof e; if ("string" === r || "string" === i) return t + e; if (isNumerable(r, t) && isNumerable(i, e)) return t + e; if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] = t[0] + e, t; if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e; if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) { for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1; return o } return 0 } var add = sum; function sub(t, e) { var r = typeof t, i = typeof e; if (isNumerable(r, t) && isNumerable(i, e)) return "string" === r && (t = parseInt(t)), "string" === i && (e = parseInt(e)), t - e; if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] = t[0] - e, t; if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e; if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) { for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1; return o } return 0 } function mul(t, e) { var r, i, s, a = typeof t, n = typeof e; if (isNumerable(a, t) && isNumerable(n, e)) return t * e; if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) { for (s = t.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1)r[i] = t[i] * e; return r } if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) { for (s = e.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1)r[i] = t * e[i]; return r } return 0 } function div(t, e) { var r, i, s, a = typeof t, n = typeof e; if (isNumerable(a, t) && isNumerable(n, e)) return t / e; if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) { for (s = t.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1)r[i] = t[i] / e; return r } if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) { for (s = e.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1)r[i] = t / e[i]; return r } return 0 } function mod(t, e) { return "string" == typeof t && (t = parseInt(t)), "string" == typeof e && (e = parseInt(e)), t % e } function clamp(t, e, r) { if (r < e) { var i = r; r = e, e = i } return Math.min(Math.max(t, e), r) } function radiansToDegrees(t) { return t / degToRads } var radians_to_degrees = radiansToDegrees; function degreesToRadians(t) { return t * degToRads } var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0]; function length(t, e) { if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e); e || (e = helperLengthArray); var r, i = Math.min(t.length, e.length), s = 0; for (r = 0; r < i; r += 1)s += Math.pow(e[r] - t[r], 2); return Math.sqrt(s) } function normalize(t) { return div(t, length(t)) } function rgbToHsl(t) { var e, r, i = t[0], s = t[1], a = t[2], n = Math.max(i, s, a), o = Math.min(i, s, a), h = (n + o) / 2; if (n == o) e = r = 0; else { var l = n - o; switch (r = .5 < h ? l / (2 - n - o) : l / (n + o), n) { case i: e = (s - a) / l + (s < a ? 6 : 0); break; case s: e = (a - i) / l + 2; break; case a: e = (i - s) / l + 4 }e /= 6 } return [e, r, h, t[3]] } function hue2rgb(t, e, r) { return r < 0 && (r += 1), 1 < r && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t } function hslToRgb(t) { var e, r, i, s = t[0], a = t[1], n = t[2]; if (0 === a) e = r = i = n; else { var o = n < .5 ? n * (1 + a) : n + a - n * a, h = 2 * n - o; e = hue2rgb(h, o, s + 1 / 3), r = hue2rgb(h, o, s), i = hue2rgb(h, o, s - 1 / 3) } return [e, r, i, t[3]] } function linear(t, e, r, i, s) { if (void 0 !== i && void 0 !== s || (i = e, s = r, e = 0, r = 1), r < e) { var a = r; r = e, e = a } if (t <= e) return i; if (r <= t) return s; var n = r === e ? 0 : (t - e) / (r - e); if (!i.length) return i + (s - i) * n; var o, h = i.length, l = createTypedArray("float32", h); for (o = 0; o < h; o += 1)l[o] = i[o] + (s[o] - i[o]) * n; return l } function random(t, e) { if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) { var r, i = e.length; t || (t = createTypedArray("float32", i)); var s = createTypedArray("float32", i), a = BMMath.random(); for (r = 0; r < i; r += 1)s[r] = t[r] + a * (e[r] - t[r]); return s } return void 0 === t && (t = 0), t + BMMath.random() * (e - t) } function createPath(t, e, r, i) { var s, a = t.length, n = shape_pool.newElement(); n.setPathData(!!i, a); var o, h, l = [0, 0]; for (s = 0; s < a; s += 1)o = e && e[s] ? e[s] : l, h = r && r[s] ? r[s] : l, n.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0); return n } function initiateExpression(elem, data, property) { var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property; thisProperty.valueAtTime = thisProperty.getValueAtTime, elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0; var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [], scoped_bm_rt; if (data.xf) { var i, len = data.xf.length; for (i = 0; i < len; i += 1)__expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())") } var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || !0 !== this.data.hd, wiggle = function (t, e) { var r, i, s = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", s); var n = Math.floor(5 * time); for (i = r = 0; r < n;) { for (i = 0; i < s; i += 1)a[i] += -e + 2 * e * BMMath.random(); r += 1 } var o = 5 * time, h = o - Math.floor(o), l = createTypedArray("float32", s); if (1 < s) { for (i = 0; i < s; i += 1)l[i] = this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * h; return l } return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h }.bind(this); function loopInDuration(t, e) { return loopIn(t, e, !0) } function loopOutDuration(t, e) { return loopOut(t, e, !0) } thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this)); var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue; function lookAt(t, e) { var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]], i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads; return [-Math.atan2(r[1], r[2]) / degToRads, i, 0] } function easeOut(t, e, r, i, s) { return applyEase(easeOutBez, t, e, r, i, s) } function easeIn(t, e, r, i, s) { return applyEase(easeInBez, t, e, r, i, s) } function ease(t, e, r, i, s) { return applyEase(easeInOutBez, t, e, r, i, s) } function applyEase(t, e, r, i, s, a) { void 0 === s ? (s = r, a = i) : e = (e - r) / (i - r); var n = t(e = 1 < e ? 1 : e < 0 ? 0 : e); if ($bm_isInstanceOfArray(s)) { var o, h = s.length, l = createTypedArray("float32", h); for (o = 0; o < h; o += 1)l[o] = (a[o] - s[o]) * n + s[o]; return l } return (a - s) * n + s } function nearestKey(t) { var e, r, i, s = data.k.length; if (data.k.length && "number" != typeof data.k[0]) if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t; else { for (e = 0; e < s - 1; e += 1) { if (t === data.k[e].t) { r = e + 1, i = data.k[e].t; break } if (t > data.k[e].t && t < data.k[e + 1].t) { i = t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, data.k[e + 1].t) : (r = e + 1, data.k[e].t); break } } -1 === r && (r = e + 1, i = data.k[e].t) } else i = r = 0; var a = {}; return a.index = r, a.time = i / elem.comp.globalData.frameRate, a } function key(t) { var e, r, i, s; if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t); for (t -= 1, e = { time: data.k[t].t / elem.comp.globalData.frameRate }, i = (s = t !== data.k.length - 1 || data.k[t].h ? data.k[t].s : data.k[t - 1].e).length, r = 0; r < i; r += 1)e[r] = s[r]; return e } function framesToTime(t, e) { return e || (e = elem.comp.globalData.frameRate), t / e } function timeToFrames(t, e) { return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e } function seedRandom(t) { BMMath.seedrandom(randSeed + t) } function sourceRectAtTime() { return elem.sourceRectAtTime() } function substring(t, e) { return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : "" } function substr(t, e) { return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : "" } var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData; function executeExpression(t) { return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), ($bm_transform = transform) && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt) } return executeExpression } return ob.initiateExpression = initiateExpression, ob }(); !function () { function o() { return this.pv } function h(t, e, r) { if (!this.k || !this.keyframes) return this.pv; t = t ? t.toLowerCase() : ""; var i, s, a, n, o, h = this.comp.renderedFrame, l = this.keyframes, p = l[l.length - 1].t; if (h <= p) return this.pv; if (r ? s = p - (i = e ? Math.abs(p - elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = p - (s = l[l.length - 1 - e].t)), "pingpong" === t) { if (Math.floor((h - s) / i) % 2 != 0) return this.getValueAtTime((i - (h - s) % i + s) / this.comp.globalData.frameRate, 0) } else { if ("offset" === t) { var m = this.getValueAtTime(s / this.comp.globalData.frameRate, 0), f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), c = this.getValueAtTime(((h - s) % i + s) / this.comp.globalData.frameRate, 0), d = Math.floor((h - s) / i); if (this.pv.length) { for (n = (o = new Array(m.length)).length, a = 0; a < n; a += 1)o[a] = (f[a] - m[a]) * d + c[a]; return o } return (f - m) * d + c } if ("continue" === t) { var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0); if (this.pv.length) { for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1)o[a] = u[a] + (u[a] - y[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4; return o } return u + (h - p) / .001 * (u - y) } } return this.getValueAtTime(((h - s) % i + s) / this.comp.globalData.frameRate, 0) } function l(t, e, r) { if (!this.k) return this.pv; t = t ? t.toLowerCase() : ""; var i, s, a, n, o, h = this.comp.renderedFrame, l = this.keyframes, p = l[0].t; if (p <= h) return this.pv; if (r ? s = p + (i = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = (s = l[e].t) - p), "pingpong" === t) { if (Math.floor((p - h) / i) % 2 == 0) return this.getValueAtTime(((p - h) % i + p) / this.comp.globalData.frameRate, 0) } else { if ("offset" === t) { var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), f = this.getValueAtTime(s / this.comp.globalData.frameRate, 0), c = this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0), d = Math.floor((p - h) / i) + 1; if (this.pv.length) { for (n = (o = new Array(m.length)).length, a = 0; a < n; a += 1)o[a] = c[a] - (f[a] - m[a]) * d; return o } return c - (f - m) * d } if ("continue" === t) { var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0); if (this.pv.length) { for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1)o[a] = u[a] + (u[a] - y[a]) * (p - h) / .001; return o } return u + (u - y) * (p - h) / .001 } } return this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0) } function p(t) { return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value } function m(t) { if (void 0 !== this.vel) return this.vel; var e, r, i = this.getValueAtTime(t), s = this.getValueAtTime(t + -.001); if (i.length) for (e = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1)e[r] = (s[r] - i[r]) / -.001; else e = (s - i) / -.001; return e } function f(t) { this.propertyGroup = t } function c(t, e, r) { e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r))) } var i = function () { function r(t, e) { return this.textIndex = t + 1, this.textTotal = e, this.getValue(), this.v } return function (t, e) { this.pv = 1, this.comp = t.comp, this.elem = t, this.mult = .01, this.propType = "textSelector", this.textTotal = e.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], c.bind(this)(t, e, this), this.getMult = r, this.getVelocityAtTime = m, this.kf ? this.getValueAtTime = p.bind(this) : this.getValueAtTime = o.bind(this), this.setGroupProperty = f } }(), s = TransformPropertyFactory.getTransformProperty; TransformPropertyFactory.getTransformProperty = function (t, e, r) { var i = s(t, e, r); return i.dynamicProperties.length ? i.getValueAtTime = function (t) { console.warn("Transform at time not supported") }.bind(i) : i.getValueAtTime = function (t) { }.bind(i), i.setGroupProperty = f, i }; var d = PropertyFactory.getProp; PropertyFactory.getProp = function (t, e, r, i, s) { var a = d(t, e, r, i, s); a.kf ? a.getValueAtTime = p.bind(a) : a.getValueAtTime = o.bind(a), a.setGroupProperty = f, a.loopOut = h, a.loopIn = l, a.getVelocityAtTime = m.bind(a), a.getSpeedAtTime = function (t) { var e = this.getValueAtTime(t), r = this.getValueAtTime(t + -.01), i = 0; if (e.length) { var s; for (s = 0; s < e.length; s += 1)i += Math.pow(r[s] - e[s], 2); i = 100 * Math.sqrt(i) } else i = 0; return i }.bind(a), a.numKeys = 1 === e.a ? e.k.length : 0, a.propertyIndex = e.ix; var n = 0; return 0 !== r && (n = createTypedArray("float32", 1 === e.a ? e.k[0].s.length : e.k.length)), a._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: n }, c(t, e, a), a.k && s.addDynamicProperty(a), a }; var t = ShapePropertyFactory.getConstructorFunction(), e = ShapePropertyFactory.getKeyframedConstructorFunction(); function r() { } r.prototype = { vertices: function (t, e) { this.k && this.getValue(); var r = this.v; void 0 !== e && (r = this.getValueAtTime(e, 0)); var i, s = r._length, a = r[t], n = r.v, o = createSizedArray(s); for (i = 0; i < s; i += 1)o[i] = "i" === t || "o" === t ? [a[i][0] - n[i][0], a[i][1] - n[i][1]] : [a[i][0], a[i][1]]; return o }, points: function (t) { return this.vertices("v", t) }, inTangents: function (t) { return this.vertices("i", t) }, outTangents: function (t) { return this.vertices("o", t) }, isClosed: function () { return this.v.c }, pointOnPath: function (t, e) { var r = this.v; void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r)); for (var i, s = this._segmentsLength, a = s.lengths, n = s.totalLength * t, o = 0, h = a.length, l = 0; o < h;) { if (l + a[o].addedLength > n) { var p = o, m = r.c && o === h - 1 ? 0 : o + 1, f = (n - l) / a[o].addedLength; i = bez.getPointInSegment(r.v[p], r.v[m], r.o[p], r.i[m], f, a[o]); break } l += a[o].addedLength, o += 1 } return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), i }, vectorOnPath: function (t, e, r) { t = 1 == t ? this.v.c ? 0 : .999 : t; var i = this.pointOnPath(t, e), s = this.pointOnPath(t + .001, e), a = s[0] - i[0], n = s[1] - i[1], o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2)); return "tangent" === r ? [a / o, n / o] : [-n / o, a / o] }, tangentOnPath: function (t, e) { return this.vectorOnPath(t, e, "tangent") }, normalOnPath: function (t, e) { return this.vectorOnPath(t, e, "normal") }, setGroupProperty: f, getValueAtTime: o }, extendPrototype([r], t), extendPrototype([r], e), e.prototype.getValueAtTime = function (t) { return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shape_pool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue }, e.prototype.initiateExpression = ExpressionManager.initiateExpression; var n = ShapePropertyFactory.getShapeProp; ShapePropertyFactory.getShapeProp = function (t, e, r, i, s) { var a = n(t, e, r, i, s); return a.propertyIndex = e.ix, a.lock = !1, 3 === r ? c(t, e.pt, a) : 4 === r && c(t, e.ks, a), a.k && t.addDynamicProperty(a), a }; var a = TextSelectorProp.getTextSelectorProp; TextSelectorProp.getTextSelectorProp = function (t, e, r) { return 1 === e.t ? new i(t, e, r) : a(t, e, r) } }(), TextProperty.prototype.getExpressionValue = function (t, e) { var r = this.calculateExpression(e); if (t.t === r) return t; var i = {}; return this.copyData(i, t), i.t = r.toString(), i.__complete = !1, i }, TextProperty.prototype.searchProperty = function () { var t = this.searchKeyframes(), e = this.searchExpressions(); return this.kf = t || e, this.kf }, TextProperty.prototype.searchExpressions = function () { if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0 }; var ShapeExpressionInterface = function () { function m(t, e, r) { var i, s = [], a = t ? t.length : 0; for (i = 0; i < a; i += 1)"gr" == t[i].ty ? s.push(n(t[i], e[i], r)) : "fl" == t[i].ty ? s.push(o(t[i], e[i], r)) : "st" == t[i].ty ? s.push(h(t[i], e[i], r)) : "tm" == t[i].ty ? s.push(l(t[i], e[i], r)) : "tr" == t[i].ty || ("el" == t[i].ty ? s.push(p(t[i], e[i], r)) : "sr" == t[i].ty ? s.push(f(t[i], e[i], r)) : "sh" == t[i].ty ? s.push(y(t[i], e[i], r)) : "rc" == t[i].ty ? s.push(c(t[i], e[i], r)) : "rd" == t[i].ty ? s.push(d(t[i], e[i], r)) : "rp" == t[i].ty && s.push(u(t[i], e[i], r))); return s } function n(t, e, r) { var i = function (t) { switch (t) { case "ADBE Vectors Group": case "Contents": case 2: return i.content; default: return i.transform } }; i.propertyGroup = function (t) { return 1 === t ? i : r(t - 1) }; var s, a, n, o, h, l = (s = t, a = e, n = i.propertyGroup, (h = function (t) { for (var e = 0, r = o.length; e < r;) { if (o[e]._name === t || o[e].mn === t || o[e].propertyIndex === t || o[e].ix === t || o[e].ind === t) return o[e]; e += 1 } if ("number" == typeof t) return o[t - 1] }).propertyGroup = function (t) { return 1 === t ? h : n(t - 1) }, o = m(s.it, a.it, h.propertyGroup), h.numProperties = o.length, h.propertyIndex = s.cix, h._name = s.nm, h), p = function (e, t, r) { function i(t) { return 1 == t ? s : r(--t) } t.transform.mProps.o.setGroupProperty(i), t.transform.mProps.p.setGroupProperty(i), t.transform.mProps.a.setGroupProperty(i), t.transform.mProps.s.setGroupProperty(i), t.transform.mProps.r.setGroupProperty(i), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(i), t.transform.mProps.sa.setGroupProperty(i)); function s(t) { return e.a.ix === t || "Anchor Point" === t ? s.anchorPoint : e.o.ix === t || "Opacity" === t ? s.opacity : e.p.ix === t || "Position" === t ? s.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? s.rotation : e.s.ix === t || "Scale" === t ? s.scale : e.sk && e.sk.ix === t || "Skew" === t ? s.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? s.skewAxis : void 0 } return t.transform.op.setGroupProperty(i), Object.defineProperties(s, { opacity: { get: ExpressionPropertyInterface(t.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(t.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(t.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(t.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(t.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(t.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(t.transform.mProps.sa) }, _name: { value: e.nm } }), s.ty = "tr", s.mn = e.mn, s }(t.it[t.it.length - 1], e.it[e.it.length - 1], i.propertyGroup); return i.content = l, i.transform = p, Object.defineProperty(i, "_name", { get: function () { return t.nm } }), i.numProperties = t.np, i.propertyIndex = t.ix, i.nm = t.nm, i.mn = t.mn, i } function o(t, e, r) { function i(t) { return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : void 0 } return Object.defineProperties(i, { color: { get: ExpressionPropertyInterface(e.c) }, opacity: { get: ExpressionPropertyInterface(e.o) }, _name: { value: t.nm }, mn: { value: t.mn } }), e.c.setGroupProperty(r), e.o.setGroupProperty(r), i } function h(t, e, r) { function i(t) { return 1 === t ? ob : r(t - 1) } function s(t) { return 1 === t ? h : i(t - 1) } var a, n, o = t.d ? t.d.length : 0, h = {}; for (a = 0; a < o; a += 1)n = a, Object.defineProperty(h, t.d[n].nm, { get: ExpressionPropertyInterface(e.d.dataProps[n].p) }), e.d.dataProps[a].p.setGroupProperty(s); function l(t) { return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : void 0 } return Object.defineProperties(l, { color: { get: ExpressionPropertyInterface(e.c) }, opacity: { get: ExpressionPropertyInterface(e.o) }, strokeWidth: { get: ExpressionPropertyInterface(e.w) }, dash: { get: function () { return h } }, _name: { value: t.nm }, mn: { value: t.mn } }), e.c.setGroupProperty(i), e.o.setGroupProperty(i), e.w.setGroupProperty(i), l } function l(e, t, r) { function i(t) { return 1 == t ? s : r(--t) } function s(t) { return t === e.e.ix || "End" === t || "end" === t ? s.end : t === e.s.ix ? s.start : t === e.o.ix ? s.offset : void 0 } return s.propertyIndex = e.ix, t.s.setGroupProperty(i), t.e.setGroupProperty(i), t.o.setGroupProperty(i), s.propertyIndex = e.ix, Object.defineProperties(s, { start: { get: ExpressionPropertyInterface(t.s) }, end: { get: ExpressionPropertyInterface(t.e) }, offset: { get: ExpressionPropertyInterface(t.o) }, _name: { value: e.nm } }), s.mn = e.mn, s } function p(e, t, r) { function i(t) { return 1 == t ? a : r(--t) } a.propertyIndex = e.ix; var s = "tm" === t.sh.ty ? t.sh.prop : t.sh; function a(t) { return e.p.ix === t ? a.position : e.s.ix === t ? a.size : void 0 } return s.s.setGroupProperty(i), s.p.setGroupProperty(i), Object.defineProperties(a, { size: { get: ExpressionPropertyInterface(s.s) }, position: { get: ExpressionPropertyInterface(s.p) }, _name: { value: e.nm } }), a.mn = e.mn, a } function f(e, t, r) { function i(t) { return 1 == t ? a : r(--t) } var s = "tm" === t.sh.ty ? t.sh.prop : t.sh; function a(t) { return e.p.ix === t ? a.position : e.r.ix === t ? a.rotation : e.pt.ix === t ? a.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? a.outerRadius : e.os.ix === t ? a.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? a.innerRoundness : void 0 : a.innerRadius } return a.propertyIndex = e.ix, s.or.setGroupProperty(i), s.os.setGroupProperty(i), s.pt.setGroupProperty(i), s.p.setGroupProperty(i), s.r.setGroupProperty(i), e.ir && (s.ir.setGroupProperty(i), s.is.setGroupProperty(i)), Object.defineProperties(a, { position: { get: ExpressionPropertyInterface(s.p) }, rotation: { get: ExpressionPropertyInterface(s.r) }, points: { get: ExpressionPropertyInterface(s.pt) }, outerRadius: { get: ExpressionPropertyInterface(s.or) }, outerRoundness: { get: ExpressionPropertyInterface(s.os) }, innerRadius: { get: ExpressionPropertyInterface(s.ir) }, innerRoundness: { get: ExpressionPropertyInterface(s.is) }, _name: { value: e.nm } }), a.mn = e.mn, a } function c(e, t, r) { function i(t) { return 1 == t ? a : r(--t) } var s = "tm" === t.sh.ty ? t.sh.prop : t.sh; function a(t) { return e.p.ix === t ? a.position : e.r.ix === t ? a.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? a.size : void 0 } return a.propertyIndex = e.ix, s.p.setGroupProperty(i), s.s.setGroupProperty(i), s.r.setGroupProperty(i), Object.defineProperties(a, { position: { get: ExpressionPropertyInterface(s.p) }, roundness: { get: ExpressionPropertyInterface(s.r) }, size: { get: ExpressionPropertyInterface(s.s) }, _name: { value: e.nm } }), a.mn = e.mn, a } function d(e, t, r) { var i = t; function s(t) { if (e.r.ix === t || "Round Corners 1" === t) return s.radius } return s.propertyIndex = e.ix, i.rd.setGroupProperty(function (t) { return 1 == t ? s : r(--t) }), Object.defineProperties(s, { radius: { get: ExpressionPropertyInterface(i.rd) }, _name: { value: e.nm } }), s.mn = e.mn, s } function u(e, t, r) { function i(t) { return 1 == t ? a : r(--t) } var s = t; function a(t) { return e.c.ix === t || "Copies" === t ? a.copies : e.o.ix === t || "Offset" === t ? a.offset : void 0 } return a.propertyIndex = e.ix, s.c.setGroupProperty(i), s.o.setGroupProperty(i), Object.defineProperties(a, { copies: { get: ExpressionPropertyInterface(s.c) }, offset: { get: ExpressionPropertyInterface(s.o) }, _name: { value: e.nm } }), a.mn = e.mn, a } function y(t, e, r) { var i = e.sh; function s(t) { if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t) return s.path } return i.setGroupProperty(function (t) { return 1 == t ? s : r(--t) }), Object.defineProperties(s, { path: { get: function () { return i.k && i.getValue(), i } }, shape: { get: function () { return i.k && i.getValue(), i } }, _name: { value: t.nm }, ix: { value: t.ix }, mn: { value: t.mn } }), s } return function (t, e, r) { var i; function s(t) { if ("number" == typeof t) return i[t - 1]; for (var e = 0, r = i.length; e < r;) { if (i[e]._name === t) return i[e]; e += 1 } } return s.propertyGroup = r, i = m(t, e, s), s } }(), TextExpressionInterface = function (e) { var r; function t() { } return Object.defineProperty(t, "sourceText", { get: function () { e.textProperty.getValue(); var t = e.textProperty.currentData.t; return void 0 !== t && (e.textProperty.currentData.t = void 0, (r = new String(t)).value = t || new String(t)), r } }), t }, LayerExpressionInterface = function () { function s(t, e) { var r = new Matrix; if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) { var i, s = this._elem.hierarchy.length; for (i = 0; i < s; i += 1)this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r); return r.applyToPointArray(t[0], t[1], t[2] || 0) } return r.applyToPointArray(t[0], t[1], t[2] || 0) } function a(t, e) { var r = new Matrix; if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) { var i, s = this._elem.hierarchy.length; for (i = 0; i < s; i += 1)this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r); return r.inversePoint(t) } return r.inversePoint(t) } function n(t) { var e = new Matrix; if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) { var r, i = this._elem.hierarchy.length; for (r = 0; r < i; r += 1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e); return e.inversePoint(t) } return e.inversePoint(t) } function o() { return [1, 1, 1, 1] } return function (e) { var r; function i(t) { switch (t) { case "ADBE Root Vectors Group": case "Contents": case 2: return i.shapeInterface; case 1: case 6: case "Transform": case "transform": case "ADBE Transform Group": return r; case 4: case "ADBE Effect Parade": case "effects": case "Effects": return i.effect } } i.toWorld = s, i.fromWorld = a, i.toComp = s, i.fromComp = n, i.sampleImage = o, i.sourceRectAtTime = e.sourceRectAtTime.bind(e); var t = getDescriptor(r = TransformExpressionInterface((i._elem = e).finalTransform.mProp), "anchorPoint"); return Object.defineProperties(i, { hasParent: { get: function () { return e.hierarchy.length } }, parent: { get: function () { return e.hierarchy[0].layerInterface } }, rotation: getDescriptor(r, "rotation"), scale: getDescriptor(r, "scale"), position: getDescriptor(r, "position"), opacity: getDescriptor(r, "opacity"), anchorPoint: t, anchor_point: t, transform: { get: function () { return r } }, active: { get: function () { return e.isInRange } } }), i.startTime = e.data.st, i.index = e.data.ind, i.source = e.data.refId, i.height = 0 === e.data.ty ? e.data.h : 100, i.width = 0 === e.data.ty ? e.data.w : 100, i.inPoint = e.data.ip / e.comp.globalData.frameRate, i.outPoint = e.data.op / e.comp.globalData.frameRate, i._name = e.data.nm, i.registerMaskInterface = function (t) { i.mask = new MaskManagerInterface(t, e) }, i.registerEffectsInterface = function (t) { i.effect = t }, i } }(), CompExpressionInterface = function (i) { function t(t) { for (var e = 0, r = i.layers.length; e < r;) { if (i.layers[e].nm === t || i.layers[e].ind === t) return i.elements[e].layerInterface; e += 1 } return null } return Object.defineProperty(t, "_name", { value: i.data.nm }), (t.layer = t).pixelAspect = 1, t.height = i.data.h || i.globalData.compSize.h, t.width = i.data.w || i.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / i.globalData.frameRate, t.displayStartTime = 0, t.numLayers = i.layers.length, t }, TransformExpressionInterface = function (t) { function e(t) { switch (t) { case "scale": case "Scale": case "ADBE Scale": case 6: return e.scale; case "rotation": case "Rotation": case "ADBE Rotation": case "ADBE Rotate Z": case 10: return e.rotation; case "ADBE Rotate X": return e.xRotation; case "ADBE Rotate Y": return e.yRotation; case "position": case "Position": case "ADBE Position": case 2: return e.position; case "ADBE Position_0": return e.xPosition; case "ADBE Position_1": return e.yPosition; case "ADBE Position_2": return e.zPosition; case "anchorPoint": case "AnchorPoint": case "Anchor Point": case "ADBE AnchorPoint": case 1: return e.anchorPoint; case "opacity": case "Opacity": case 11: return e.opacity } } if (Object.defineProperty(e, "rotation", { get: ExpressionPropertyInterface(t.r || t.rz) }), Object.defineProperty(e, "zRotation", { get: ExpressionPropertyInterface(t.rz || t.r) }), Object.defineProperty(e, "xRotation", { get: ExpressionPropertyInterface(t.rx) }), Object.defineProperty(e, "yRotation", { get: ExpressionPropertyInterface(t.ry) }), Object.defineProperty(e, "scale", { get: ExpressionPropertyInterface(t.s) }), t.p) var r = ExpressionPropertyInterface(t.p); return Object.defineProperty(e, "position", { get: function () { return t.p ? r() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0] } }), Object.defineProperty(e, "xPosition", { get: ExpressionPropertyInterface(t.px) }), Object.defineProperty(e, "yPosition", { get: ExpressionPropertyInterface(t.py) }), Object.defineProperty(e, "zPosition", { get: ExpressionPropertyInterface(t.pz) }), Object.defineProperty(e, "anchorPoint", { get: ExpressionPropertyInterface(t.a) }), Object.defineProperty(e, "opacity", { get: ExpressionPropertyInterface(t.o) }), Object.defineProperty(e, "skew", { get: ExpressionPropertyInterface(t.sk) }), Object.defineProperty(e, "skewAxis", { get: ExpressionPropertyInterface(t.sa) }), Object.defineProperty(e, "orientation", { get: ExpressionPropertyInterface(t.or) }), e }, ProjectInterface = function () { function e(t) { this.compositions.push(t) } return function () { function t(t) { for (var e = 0, r = this.compositions.length; e < r;) { if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface; e += 1 } } return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t } }(), EffectsExpressionInterface = function () { function l(s, t, e, r) { var i, a = [], n = s.ef.length; for (i = 0; i < n; i += 1)5 === s.ef[i].ty ? a.push(l(s.ef[i], t.effectElements[i], t.effectElements[i].propertyGroup, r)) : a.push(p(t.effectElements[i], s.ef[i].ty, r, o)); function o(t) { return 1 === t ? h : e(t - 1) } var h = function (t) { for (var e = s.ef, r = 0, i = e.length; r < i;) { if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return 5 === e[r].ty ? a[r] : a[r](); r += 1 } return a[0]() }; return h.propertyGroup = o, "ADBE Color Control" === s.mn && Object.defineProperty(h, "color", { get: function () { return a[0]() } }), Object.defineProperty(h, "numProperties", { get: function () { return s.np } }), h.active = h.enabled = 0 !== s.en, h } function p(t, e, r, i) { var s = ExpressionPropertyInterface(t.p); return t.p.setGroupProperty && t.p.setGroupProperty(i), function () { return 10 === e ? r.comp.compInterface(t.p.v) : s() } } return { createEffectsInterface: function (s, t) { if (s.effectsManager) { var e, a = [], r = s.data.ef, i = s.effectsManager.effectElements.length; for (e = 0; e < i; e += 1)a.push(l(r[e], s.effectsManager.effectElements[e], t, s)); return function (t) { for (var e = s.data.ef || [], r = 0, i = e.length; r < i;) { if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return a[r]; r += 1 } } } } } }(), MaskManagerInterface = function () { function a(t, e) { this._mask = t, this._data = e } Object.defineProperty(a.prototype, "maskPath", { get: function () { return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop } }); return function (e, t) { var r, i = createSizedArray(e.viewData.length), s = e.viewData.length; for (r = 0; r < s; r += 1)i[r] = new a(e.viewData[r], e.masksProperties[r]); return function (t) { for (r = 0; r < s;) { if (e.masksProperties[r].nm === t) return i[r]; r += 1 } } } }(), ExpressionPropertyInterface = function () { var s = { pv: 0, v: 0, mult: 1 }, n = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 }; function o(i, s, a) { Object.defineProperty(i, "velocity", { get: function () { return s.getVelocityAtTime(s.comp.currentFrame) } }), i.numKeys = s.keyframes ? s.keyframes.length : 0, i.key = function (t) { if (i.numKeys) { var e = ""; e = "s" in s.keyframes[t - 1] ? s.keyframes[t - 1].s : "e" in s.keyframes[t - 2] ? s.keyframes[t - 2].e : s.keyframes[t - 2].s; var r = "unidimensional" === a ? new Number(e) : Object.assign({}, e); return r.time = s.keyframes[t - 1].t / s.elem.comp.globalData.frameRate, r } return 0 }, i.valueAtTime = s.getValueAtTime, i.speedAtTime = s.getSpeedAtTime, i.velocityAtTime = s.getVelocityAtTime, i.propertyGroup = s.propertyGroup } function e() { return s } return function (t) { return t ? "unidimensional" === t.propType ? function (t) { t && "pv" in t || (t = s); var e = 1 / t.mult, r = t.pv * e, i = new Number(r); return i.value = r, o(i, t, "unidimensional"), function () { return t.k && t.getValue(), r = t.v * e, i.value !== r && ((i = new Number(r)).value = r, o(i, t, "unidimensional")), i } }(t) : function (e) { e && "pv" in e || (e = n); var r = 1 / e.mult, i = e.pv.length, s = createTypedArray("float32", i), a = createTypedArray("float32", i); return s.value = a, o(s, e, "multidimensional"), function () { e.k && e.getValue(); for (var t = 0; t < i; t += 1)s[t] = a[t] = e.v[t] * r; return s } }(t) : e } }(); function SliderEffect(t, e, r) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, r) } function AngleEffect(t, e, r) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, r) } function ColorEffect(t, e, r) { this.p = PropertyFactory.getProp(e, t.v, 1, 0, r) } function PointEffect(t, e, r) { this.p = PropertyFactory.getProp(e, t.v, 1, 0, r) } function LayerIndexEffect(t, e, r) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, r) } function MaskIndexEffect(t, e, r) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, r) } function CheckboxEffect(t, e, r) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, r) } function NoValueEffect() { this.p = {} } function EffectsManager() { } function EffectsManager(t, e) { var r = t.ef || []; this.effectElements = []; var i, s, a = r.length; for (i = 0; i < a; i++)s = new GroupEffect(r[i], e), this.effectElements.push(s) } function GroupEffect(t, e) { this.init(t, e) } extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function (t, e) { this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e); var r, i, s = this.data.ef.length, a = this.data.ef; for (r = 0; r < s; r += 1) { switch (i = null, a[r].ty) { case 0: i = new SliderEffect(a[r], e, this); break; case 1: i = new AngleEffect(a[r], e, this); break; case 2: i = new ColorEffect(a[r], e, this); break; case 3: i = new PointEffect(a[r], e, this); break; case 4: case 7: i = new CheckboxEffect(a[r], e, this); break; case 10: i = new LayerIndexEffect(a[r], e, this); break; case 11: i = new MaskIndexEffect(a[r], e, this); break; case 5: i = new EffectsManager(a[r], e, this); break; default: i = new NoValueEffect(a[r], e, this) }i && this.effectElements.push(i) } }; var lottiejs = {}, _isFrozen = !1; function setLocationHref(t) { locationHref = t } function searchAnimations() { !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations() } function setSubframeRendering(t) { subframeEnabled = t } function loadAnimation(t) { return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t) } function setQuality(t) { if ("string" == typeof t) switch (t) { case "high": defaultCurveSegments = 200; break; case "medium": defaultCurveSegments = 50; break; case "low": defaultCurveSegments = 10 } else !isNaN(t) && 1 < t && (defaultCurveSegments = t); roundValues(!(50 <= defaultCurveSegments)) } function inBrowser() { return "undefined" != typeof navigator } function installPlugin(t, e) { "expressions" === t && (expressionsPlugin = e) } function getFactory(t) { switch (t) { case "propertyFactory": return PropertyFactory; case "shapePropertyFactory": return ShapePropertyFactory; case "matrix": return Matrix } } function checkReady() { "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations()) } function getQueryVariable(t) { for (var e = queryString.split("&"), r = 0; r < e.length; r++) { var i = e[r].split("="); if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]) } } lottiejs.play = animationManager.play, lottiejs.pause = animationManager.pause, lottiejs.setLocationHref = setLocationHref, lottiejs.togglePause = animationManager.togglePause, lottiejs.setSpeed = animationManager.setSpeed, lottiejs.setDirection = animationManager.setDirection, lottiejs.stop = animationManager.stop, lottiejs.searchAnimations = searchAnimations, lottiejs.registerAnimation = animationManager.registerAnimation, lottiejs.loadAnimation = loadAnimation, lottiejs.setSubframeRendering = setSubframeRendering, lottiejs.resize = animationManager.resize, lottiejs.goToAndStop = animationManager.goToAndStop, lottiejs.destroy = animationManager.destroy, lottiejs.setQuality = setQuality, lottiejs.inBrowser = inBrowser, lottiejs.installPlugin = installPlugin, lottiejs.freeze = animationManager.freeze, lottiejs.unfreeze = animationManager.unfreeze, lottiejs.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottiejs.__getFactory = getFactory, lottiejs.version = "5.4.3"; var standalone = "__[STANDALONE]__", animationData = "__[ANIMATIONDATA]__", renderer = ""; if (standalone) { var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || { src: "" }, queryString = myScript.src.replace(/^[^\?]+\??/, ""); renderer = getQueryVariable("renderer") } var readyStateCheckInterval = setInterval(checkReady, 100); return lottiejs }, "function" == typeof define && define.amd ? define(function () { return b(a) }) : "object" == typeof module && module.exports ? module.exports = b(a) : (a.lottie = b(a), a.bodymovin = a.lottie));
