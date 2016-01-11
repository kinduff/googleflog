!function(e){"use strict";function t(e){return e.replace(/,/g,".").replace(/[^0-9\.]/g,"")}function n(e){return parseFloat(t(e))>=10}var o,r={bridge:null,version:"0.0.0",disabled:null,outdated:null,ready:null},i={},a=0,s={},l=0,u={},d=null,c=null,f=function(){var e,t,n,o,r="ZeroClipboard.swf";if(document.currentScript&&(o=document.currentScript.src));else{var i=document.getElementsByTagName("script");if("readyState"in i[0])for(e=i.length;e--&&("interactive"!==i[e].readyState||!(o=i[e].src)););else if("loading"===document.readyState)o=i[i.length-1].src;else{for(e=i.length;e--;){if(n=i[e].src,!n){t=null;break}if(n=n.split("#")[0].split("?")[0],n=n.slice(0,n.lastIndexOf("/")+1),null==t)t=n;else if(t!==n){t=null;break}}null!==t&&(o=t)}}return o&&(o=o.split("#")[0].split("?")[0],r=o.slice(0,o.lastIndexOf("/")+1)+r),r}(),p=function(){var e=/\-([a-z])/g,t=function(e,t){return t.toUpperCase()};return function(n){return n.replace(e,t)}}(),h=function(t,n){var o,r,i;return e.getComputedStyle?o=e.getComputedStyle(t,null).getPropertyValue(n):(r=p(n),o=t.currentStyle?t.currentStyle[r]:t.style[r]),"cursor"!==n||o&&"auto"!==o||(i=t.tagName.toLowerCase(),"a"!==i)?o:"pointer"},g=function(t){t||(t=e.event);var n;this!==e?n=this:t.target?n=t.target:t.srcElement&&(n=t.srcElement),A.activate(n)},y=function(e,t,n){e&&1===e.nodeType&&(e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n))},v=function(e,t,n){e&&1===e.nodeType&&(e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent&&e.detachEvent("on"+t,n))},m=function(e,t){if(!e||1!==e.nodeType)return e;if(e.classList)return e.classList.contains(t)||e.classList.add(t),e;if(t&&"string"==typeof t){var n=(t||"").split(/\s+/);if(1===e.nodeType)if(e.className){for(var o=" "+e.className+" ",r=e.className,i=0,a=n.length;a>i;i++)o.indexOf(" "+n[i]+" ")<0&&(r+=" "+n[i]);e.className=r.replace(/^\s+|\s+$/g,"")}else e.className=t}return e},b=function(e,t){if(!e||1!==e.nodeType)return e;if(e.classList)return e.classList.contains(t)&&e.classList.remove(t),e;if(t&&"string"==typeof t||void 0===t){var n=(t||"").split(/\s+/);if(1===e.nodeType&&e.className)if(t){for(var o=(" "+e.className+" ").replace(/[\n\t]/g," "),r=0,i=n.length;i>r;r++)o=o.replace(" "+n[r]+" "," ");e.className=o.replace(/^\s+|\s+$/g,"")}else e.className=""}return e},w=function(){var e,t,n,o=1;return"function"==typeof document.body.getBoundingClientRect&&(e=document.body.getBoundingClientRect(),t=e.right-e.left,n=document.body.offsetWidth,o=Math.round(t/n*100)/100),o},C=function(t,n){var o={left:0,top:0,width:0,height:0,zIndex:z(n)-1};if(t.getBoundingClientRect){var r,i,a,s=t.getBoundingClientRect();"pageXOffset"in e&&"pageYOffset"in e?(r=e.pageXOffset,i=e.pageYOffset):(a=w(),r=Math.round(document.documentElement.scrollLeft/a),i=Math.round(document.documentElement.scrollTop/a));var l=document.documentElement.clientLeft||0,u=document.documentElement.clientTop||0;o.left=s.left+r-l,o.top=s.top+i-u,o.width="width"in s?s.width:s.right-s.left,o.height="height"in s?s.height:s.bottom-s.top}return o},x=function(e,t){var n=null==t||t&&t.cacheBust===!0&&t.useNoCache===!0;return n?(-1===e.indexOf("?")?"?":"&")+"noCache="+(new Date).getTime():""},O=function(t){var n,o,r,i=[],a=[],s=[];if(t.trustedOrigins&&("string"==typeof t.trustedOrigins?a.push(t.trustedOrigins):"object"==typeof t.trustedOrigins&&"length"in t.trustedOrigins&&(a=a.concat(t.trustedOrigins))),t.trustedDomains&&("string"==typeof t.trustedDomains?a.push(t.trustedDomains):"object"==typeof t.trustedDomains&&"length"in t.trustedDomains&&(a=a.concat(t.trustedDomains))),a.length)for(n=0,o=a.length;o>n;n++)if(a.hasOwnProperty(n)&&a[n]&&"string"==typeof a[n]){if(r=j(a[n]),!r)continue;if("*"===r){s=[r];break}s.push.apply(s,[r,"//"+r,e.location.protocol+"//"+r])}return s.length&&i.push("trustedOrigins="+encodeURIComponent(s.join(","))),"string"==typeof t.jsModuleId&&t.jsModuleId&&i.push("jsModuleId="+encodeURIComponent(t.jsModuleId)),i.join("&")},E=function(e,t,n){if("function"==typeof t.indexOf)return t.indexOf(e,n);var o,r=t.length;for("undefined"==typeof n?n=0:0>n&&(n=r+n),o=n;r>o;o++)if(t.hasOwnProperty(o)&&t[o]===e)return o;return-1},T=function(e){if("string"==typeof e)throw new TypeError("ZeroClipboard doesn't accept query strings.");return e.length?e:[e]},I=function(t,n,o,r){r?e.setTimeout(function(){t.apply(n,o)},0):t.apply(n,o)},z=function(e){var t,n;return e&&("number"==typeof e&&e>0?t=e:"string"==typeof e&&(n=parseInt(e,10))&&!isNaN(n)&&n>0&&(t=n)),t||("number"==typeof D.zIndex&&D.zIndex>0?t=D.zIndex:"string"==typeof D.zIndex&&(n=parseInt(D.zIndex,10))&&!isNaN(n)&&n>0&&(t=n)),t||0},L=function(e,t){if(e&&t!==!1&&"undefined"!=typeof console&&console&&(console.warn||console.log)){var n="`"+e+"` is deprecated. See docs for more info:\n    https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md#deprecations";console.warn?console.warn(n):console.log(n)}},k=function(){var e,t,n,o,r,i,a=arguments[0]||{};for(e=1,t=arguments.length;t>e;e++)if(null!=(n=arguments[e]))for(o in n)if(n.hasOwnProperty(o)){if(r=a[o],i=n[o],a===i)continue;void 0!==i&&(a[o]=i)}return a},j=function(e){if(null==e||""===e)return null;if(e=e.replace(/^\s+|\s+$/g,""),""===e)return null;var t=e.indexOf("//");e=-1===t?e:e.slice(t+2);var n=e.indexOf("/");return e=-1===n?e:-1===t||0===n?null:e.slice(0,n),e&&".swf"===e.slice(-4).toLowerCase()?null:e||null},N=function(){var e=function(e,t){var n,o,r;if(null!=e&&"*"!==t[0]&&("string"==typeof e&&(e=[e]),"object"==typeof e&&"length"in e))for(n=0,o=e.length;o>n;n++)if(e.hasOwnProperty(n)&&(r=j(e[n]))){if("*"===r){t.length=0,t.push("*");break}-1===E(r,t)&&t.push(r)}},t={always:"always",samedomain:"sameDomain",never:"never"};return function(n,o){var r,i=o.allowScriptAccess;if("string"==typeof i&&(r=i.toLowerCase())&&/^always|samedomain|never$/.test(r))return t[r];var a=j(o.moviePath);null===a&&(a=n);var s=[];e(o.trustedOrigins,s),e(o.trustedDomains,s);var l=s.length;if(l>0){if(1===l&&"*"===s[0])return"always";if(-1!==E(n,s))return 1===l&&n===a?"sameDomain":"always"}return"never"}}(),M=function(e){if(null==e)return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},P=function(e){if(e)for(var t in e)e.hasOwnProperty(t)&&delete e[t];return e},S=function(){try{return document.activeElement}catch(e){}return null},B=function(){var e=!1;if("boolean"==typeof r.disabled)e=r.disabled===!1;else{if("function"==typeof ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(e=!0)}catch(t){}!e&&navigator.mimeTypes["application/x-shockwave-flash"]&&(e=!0)}return e},A=function(e,t){return this instanceof A?(this.id=""+a++,s[this.id]={instance:this,elements:[],handlers:{}},e&&this.clip(e),"undefined"!=typeof t&&(L("new ZeroClipboard(elements, options)",D.debug),A.config(t)),this.options=A.config(),"boolean"!=typeof r.disabled&&(r.disabled=!B()),r.disabled===!1&&r.outdated!==!0&&null===r.bridge&&(r.outdated=!1,r.ready=!1,q()),void 0):new A(e,t)};A.prototype.setText=function(e){return e&&""!==e&&(i["text/plain"]=e,r.ready===!0&&r.bridge&&"function"==typeof r.bridge.setText?r.bridge.setText(e):r.ready=!1),this},A.prototype.setSize=function(e,t){return r.ready===!0&&r.bridge&&"function"==typeof r.bridge.setSize?r.bridge.setSize(e,t):r.ready=!1,this};var Z=function(e){r.ready===!0&&r.bridge&&"function"==typeof r.bridge.setHandCursor?r.bridge.setHandCursor(e):r.ready=!1};A.prototype.destroy=function(){this.unclip(),this.off(),delete s[this.id]};var H=function(){var e,t,n,o=[],r=M(s);for(e=0,t=r.length;t>e;e++)n=s[r[e]].instance,n&&n instanceof A&&o.push(n);return o};A.version="1.3.5";var D={swfPath:f,trustedDomains:e.location.host?[e.location.host]:[],cacheBust:!0,forceHandCursor:!1,zIndex:999999999,debug:!0,title:null,autoActivate:!0};A.config=function(e){"object"==typeof e&&null!==e&&k(D,e);{if("string"!=typeof e||!e){var t={};for(var n in D)D.hasOwnProperty(n)&&(t[n]="object"==typeof D[n]&&null!==D[n]?"length"in D[n]?D[n].slice(0):k({},D[n]):D[n]);return t}if(D.hasOwnProperty(e))return D[e]}},A.destroy=function(){A.deactivate();for(var e in s)if(s.hasOwnProperty(e)&&s[e]){var t=s[e].instance;t&&"function"==typeof t.destroy&&t.destroy()}var n=F(r.bridge);n&&n.parentNode&&(n.parentNode.removeChild(n),r.ready=null,r.bridge=null)},A.activate=function(e){o&&(b(o,D.hoverClass),b(o,D.activeClass)),o=e,m(e,D.hoverClass),R();var t=D.title||e.getAttribute("title");if(t){var n=F(r.bridge);n&&n.setAttribute("title",t)}var i=D.forceHandCursor===!0||"pointer"===h(e,"cursor");Z(i)},A.deactivate=function(){var e=F(r.bridge);e&&(e.style.left="0px",e.style.top="-9999px",e.removeAttribute("title")),o&&(b(o,D.hoverClass),b(o,D.activeClass),o=null)};var q=function(){var t,n,o=document.getElementById("global-zeroclipboard-html-bridge");if(!o){var i=A.config();i.jsModuleId="string"==typeof d&&d||"string"==typeof c&&c||null;var a=N(e.location.host,D),s=O(i),l=D.moviePath+x(D.moviePath,D),u='      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="'+l+'"/>         <param name="allowScriptAccess" value="'+a+'"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="'+s+'"/>         <embed src="'+l+'"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="'+a+'"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="'+s+'"           scale="exactfit">         </embed>       </object>';o=document.createElement("div"),o.id="global-zeroclipboard-html-bridge",o.setAttribute("class","global-zeroclipboard-container"),o.style.position="absolute",o.style.left="0px",o.style.top="-9999px",o.style.width="15px",o.style.height="15px",o.style.zIndex=""+z(D.zIndex),document.body.appendChild(o),o.innerHTML=u}t=document["global-zeroclipboard-flash-bridge"],t&&(n=t.length)&&(t=t[n-1]),r.bridge=t||o.children[0].lastElementChild},F=function(e){for(var t=/^OBJECT|EMBED$/,n=e&&e.parentNode;n&&t.test(n.nodeName)&&n.parentNode;)n=n.parentNode;return n||null},R=function(){if(o){var e=C(o,D.zIndex),t=F(r.bridge);t&&(t.style.top=e.top+"px",t.style.left=e.left+"px",t.style.width=e.width+"px",t.style.height=e.height+"px",t.style.zIndex=e.zIndex+1),r.ready===!0&&r.bridge&&"function"==typeof r.bridge.setSize?r.bridge.setSize(e.width,e.height):r.ready=!1}return this};A.prototype.on=function(e,t){var n,o,i,a={},l=s[this.id]&&s[this.id].handlers;if("string"==typeof e&&e)i=e.toLowerCase().split(/\s+/);else if("object"==typeof e&&e&&"undefined"==typeof t)for(n in e)e.hasOwnProperty(n)&&"string"==typeof n&&n&&"function"==typeof e[n]&&this.on(n,e[n]);if(i&&i.length){for(n=0,o=i.length;o>n;n++)e=i[n].replace(/^on/,""),a[e]=!0,l[e]||(l[e]=[]),l[e].push(t);a.noflash&&r.disabled&&$.call(this,"noflash",{}),a.wrongflash&&r.outdated&&$.call(this,"wrongflash",{flashVersion:r.version}),a.load&&r.ready&&$.call(this,"load",{flashVersion:r.version})}return this},A.prototype.off=function(e,t){var n,o,r,i,a,l=s[this.id]&&s[this.id].handlers;if(0===arguments.length)i=M(l);else if("string"==typeof e&&e)i=e.split(/\s+/);else if("object"==typeof e&&e&&"undefined"==typeof t)for(n in e)e.hasOwnProperty(n)&&"string"==typeof n&&n&&"function"==typeof e[n]&&this.off(n,e[n]);if(i&&i.length)for(n=0,o=i.length;o>n;n++)if(e=i[n].toLowerCase().replace(/^on/,""),a=l[e],a&&a.length)if(t)for(r=E(t,a);-1!==r;)a.splice(r,1),r=E(t,a,r);else l[e].length=0;return this},A.prototype.handlers=function(e){var t,n=null,o=s[this.id]&&s[this.id].handlers;if(o){if("string"==typeof e&&e)return o[e]?o[e].slice(0):null;n={};for(t in o)o.hasOwnProperty(t)&&o[t]&&(n[t]=o[t].slice(0))}return n};var V=function(t,n,o,r){var i=s[this.id]&&s[this.id].handlers[t];if(i&&i.length){var a,l,u,d=n||this;for(a=0,l=i.length;l>a;a++)u=i[a],n=d,"string"==typeof u&&"function"==typeof e[u]&&(u=e[u]),"object"==typeof u&&u&&"function"==typeof u.handleEvent&&(n=u,u=u.handleEvent),"function"==typeof u&&I(u,n,o,r)}return this};A.prototype.clip=function(e){e=T(e);for(var t=0;t<e.length;t++)if(e.hasOwnProperty(t)&&e[t]&&1===e[t].nodeType){e[t].zcClippingId?-1===E(this.id,u[e[t].zcClippingId])&&u[e[t].zcClippingId].push(this.id):(e[t].zcClippingId="zcClippingId_"+l++,u[e[t].zcClippingId]=[this.id],D.autoActivate===!0&&y(e[t],"mouseover",g));var n=s[this.id].elements;-1===E(e[t],n)&&n.push(e[t])}return this},A.prototype.unclip=function(e){var t=s[this.id];if(t){var n,o=t.elements;e="undefined"==typeof e?o.slice(0):T(e);for(var r=e.length;r--;)if(e.hasOwnProperty(r)&&e[r]&&1===e[r].nodeType){for(n=0;-1!==(n=E(e[r],o,n));)o.splice(n,1);var i=u[e[r].zcClippingId];if(i){for(n=0;-1!==(n=E(this.id,i,n));)i.splice(n,1);0===i.length&&(D.autoActivate===!0&&v(e[r],"mouseover",g),delete e[r].zcClippingId)}}}return this},A.prototype.elements=function(){var e=s[this.id];return e&&e.elements?e.elements.slice(0):[]};var _=function(e){var t,n,o,r,i,a=[];if(e&&1===e.nodeType&&(t=e.zcClippingId)&&u.hasOwnProperty(t)&&(n=u[t],n&&n.length))for(o=0,r=n.length;r>o;o++)i=s[n[o]].instance,i&&i instanceof A&&a.push(i);return a};D.hoverClass="zeroclipboard-is-hover",D.activeClass="zeroclipboard-is-active",D.trustedOrigins=null,D.allowScriptAccess=null,D.useNoCache=!0,D.moviePath="ZeroClipboard.swf",A.detectFlashSupport=function(){return L("ZeroClipboard.detectFlashSupport",D.debug),B()},A.dispatch=function(e,t){if("string"==typeof e&&e){var n=e.toLowerCase().replace(/^on/,"");if(n)for(var r=o&&D.autoActivate===!0?_(o):H(),i=0,a=r.length;a>i;i++)$.call(r[i],n,t)}},A.prototype.setHandCursor=function(e){return L("ZeroClipboard.prototype.setHandCursor",D.debug),e="boolean"==typeof e?e:!!e,Z(e),D.forceHandCursor=e,this},A.prototype.reposition=function(){return L("ZeroClipboard.prototype.reposition",D.debug),R()},A.prototype.receiveEvent=function(e,t){if(L("ZeroClipboard.prototype.receiveEvent",D.debug),"string"==typeof e&&e){var n=e.toLowerCase().replace(/^on/,"");n&&$.call(this,n,t)}},A.prototype.setCurrent=function(e){return L("ZeroClipboard.prototype.setCurrent",D.debug),A.activate(e),this},A.prototype.resetBridge=function(){return L("ZeroClipboard.prototype.resetBridge",D.debug),A.deactivate(),this},A.prototype.setTitle=function(e){if(L("ZeroClipboard.prototype.setTitle",D.debug),e=e||D.title||o&&o.getAttribute("title")){var t=F(r.bridge);t&&t.setAttribute("title",e)}return this},A.setDefaults=function(e){L("ZeroClipboard.setDefaults",D.debug),A.config(e)},A.prototype.addEventListener=function(e,t){return L("ZeroClipboard.prototype.addEventListener",D.debug),this.on(e,t)},A.prototype.removeEventListener=function(e,t){return L("ZeroClipboard.prototype.removeEventListener",D.debug),this.off(e,t)},A.prototype.ready=function(){return L("ZeroClipboard.prototype.ready",D.debug),r.ready===!0};var $=function(e,a){e=e.toLowerCase().replace(/^on/,"");var s=a&&a.flashVersion&&t(a.flashVersion)||null,l=o,u=!0;switch(e){case"load":if(s){if(!n(s))return $.call(this,"onWrongFlash",{flashVersion:s}),void 0;r.outdated=!1,r.ready=!0,r.version=s}break;case"wrongflash":s&&!n(s)&&(r.outdated=!0,r.ready=!1,r.version=s);break;case"mouseover":m(l,D.hoverClass);break;case"mouseout":D.autoActivate===!0&&A.deactivate();break;case"mousedown":m(l,D.activeClass);break;case"mouseup":b(l,D.activeClass);break;case"datarequested":if(l){var d=l.getAttribute("data-clipboard-target"),c=d?document.getElementById(d):null;if(c){var f=c.value||c.textContent||c.innerText;f&&this.setText(f)}else{var p=l.getAttribute("data-clipboard-text");p&&this.setText(p)}}u=!1;break;case"complete":P(i),l&&l!==S()&&l.focus&&l.focus()}var h=l,g=[this,a];return V.call(this,e,h,g,u)};"function"==typeof define&&define.amd?define(["require","exports","module"],function(e,t,n){return d=n&&n.id||null,A}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports&&"function"==typeof e.require?(c=module.id||null,module.exports=A):e.ZeroClipboard=A}(function(){return this}());"use strict";Array.prototype.sample=function(){return this[Math.floor(Math.random()*this.length)]},Object.prototype.extend=function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);return this};var googleflog={translate:function(e,t){var n={noHead:!1,noTail:!1,noTrails:!1,head:"",tail:""};t="object"==typeof t?n.extend(t):n;var o=e.toLowerCase().replace(/\w/g,function(e){return googleflog.charMap[e]||e});return o=this.applyOptions(o,t)},t:function(e,t){return this.translate(e,t)},applyOptions:function(e,t){var n=e;if(!t.noTrails){if(t.noHead||""!=t.head)n=t.head+n;else{var o=this.headMap.sample();n=o+" "+n}if(t.noTail||""!=t.head)n+=t.tail;else{var r=this.tailMap.sample();n=n+" "+r}}return n},charMap:{a:"A",b:"B",c:"c",d:"d",e:"eE",f:"f",g:"G",h:"H",i:"ii",j:"j",k:"Q",l:"l",m:"m",n:"ñ","ñ":"Ñ",o:"0o",p:"p",q:"k",r:"r",s:"zh",t:"T",u:"u",v:"v",w:"w",x:"x",y:"y",z:"zh"},headMap:["**"],tailMap:["**~ xD","*+..","***","-- <3",",.-~ :D"]};"undefined"!=typeof define&&define.amd&&define(function(){return googleflog}),"undefined"!=typeof exports?exports.googleflog=googleflog:"undefined"!=typeof navigator&&(window.googleflog=googleflog),"undefined"!=typeof module&&(module.exports=googleflog);(function(){var e=document.getElementById("source"),t=document.getElementById("result"),n=document.getElementById("share"),o=document.getElementById("copy"),r=document.getElementById("more");options=document.getElementById("options"),twitter=document.getElementById("twitter"),optionsCb=document.getElementsByClassName("option");var i={noHead:false,noTail:false,noTrails:false,head:"",tail:""};e.onkeyup=a;document.getElementsByTagName("html")[0].onclick=function(e){var t=e.target.closest("#options");if(options.offsetWidth!=0&&!t){options.style.display="none"}};r.onclick=function(e){e.stopPropagation();if(options.offsetWidth==0){options.style.display="block"}else{options.style.display="none"}};function a(n){var o=googleflog.translate(e.value,i);t.innerHTML=o;if(e.value<=0)t.innerHTML=""}function s(){var t={};for(var n=0;n<optionsCb.length;n++){var o=optionsCb[n],r;switch(o.type){case"checkbox":r=o.checked;break;case"text":r=o.value;break}t[o.name]=r}i=t;a(e,i)}for(var l=0;l<optionsCb.length;l++){var u=optionsCb[l];u.onchange=s}twitter.onclick=function(e){var n="http://twitter.com/share?url=nothx&text=";var o=t.innerHTML;window.open(n+o,"twitter-share","width=550,height=235");return false};ZeroClipboard.config({moviePath:"/swf/ZeroClipboard.swf"});client=new ZeroClipboard(o);client.on({dataRequested:function(e,n){var o=t.innerHTML;e.setText(o)},complete:function(e,t){_this=this;_this.className="btn green";_this.innerHTML="¡Copiado con éxito!";setTimeout(function(){_this.innerHTML="Copiar a portapapeles";_this.className="btn"},2500)}})})();