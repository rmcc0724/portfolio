!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./dist/",n(n.s=27)}([function(e,t,n){"use strict";var r=n(3),o=n(9),s=Object.prototype.toString;function i(e){return"[object Array]"===s.call(e)}function a(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===s.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){e.exports=n(8)},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(12),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:("undefined"!=typeof XMLHttpRequest?a=n(4):void 0!==t&&(a=n(4)),a),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){c.headers[e]={}}),r.forEach(["post","put","patch"],function(e){c.headers[e]=r.merge(s)}),e.exports=c}).call(this,n(11))},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0),o=n(13),s=n(15),i=n(16),a=n(17),c=n(5),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(18);e.exports=function(e){return new Promise(function(t,f){var l=e.data,d=e.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(e.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var g=e.auth.username||"",y=e.auth.password||"";d.Authorization="Basic "+u(g+":"+y)}if(p.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};o(t,f,r),p=null}},p.onerror=function(){f(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){f(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var v=n(19),w=(e.withCredentials||a(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;w&&(d[e.xsrfHeaderName]=w)}if("setRequestHeader"in p&&r.forEach(d,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),f(e),p=null)}),void 0===l&&(l=null),p.send(l)})}},function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";var r=n(0),o=n(3),s=n(10),i=n(2);function a(e){var t=new s(e),n=o(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var c=a(i);c.Axios=s,c.create=function(e){return a(r.merge(i,e))},c.Cancel=n(7),c.CancelToken=n(25),c.isCancel=n(6),c.all=function(e){return Promise.all(e)},c.spread=n(26),e.exports=c,e.exports.default=c},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,n){"use strict";var r=n(2),o=n(0),s=n(20),i=n(21);function a(e){this.defaults=e,this.interceptors={request:new s,response:new s}}a.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){a.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){a.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=a},function(e,t){var n,r,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,u=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?u=c.concat(u):l=-1,u.length&&p())}function p(){if(!f){var e=a(d);f=!0;for(var t=u.length;t;){for(c=u,u=[];++l<t;)c&&c[l].run();l=-1,t=u.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||f||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(5);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var i=[];r.forEach(t,function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))}))}),s=i.join("&")}return s&&(e+=(-1===e.indexOf("?")?"?":"&")+s),e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,s=String(e),i="",a=0,c=r;s.charAt(0|a)||(c="=",a%1);i+=c.charAt(63&t>>8-a%1*8)){if((n=s.charCodeAt(a+=.75))>255)throw new o;t=t<<8|n}return i}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(22),s=n(6),i=n(2),a=n(23),c=n(24);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(7);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r);const s="https://cors-anywhere.herokuapp.com/",i="xtcQn1fI4aTFJGdXDuVKxHMrUOEQIQbN6lYtSf4K";class a{constructor(e){this.query=e}async getResults(){try{const e=await o()(`${s}https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.query}&end_date=${this.query}&api_key=${i}`);this.result=e.data.near_earth_objects,console.log(this.result)}catch(e){alert("There was an error in your search.")}}}class c{constructor(e){this.id=e}async getAsteroid(){try{const e=await o()(`${s}https://api.nasa.gov/neo/rest/v1/neo/${this.id}?api_key=${i}`);this.name=e.data.name,this.diameter=e.data.estimated_diameter.miles.estimated_diameter_max,this.hazardous=e.data.is_potentially_hazardous_asteroid,this.miss_distance=e.data.close_approach_data}catch(e){console.log(e),alert("Something went wrong :(")}}}const u={searchForm:document.querySelector(".search"),searchRes:document.querySelector(".results"),searchResList:document.querySelector(".results__list"),searchResPages:document.querySelector(".results__pages"),asteroid:document.querySelector(".asteroid"),likesMenu:document.querySelector(".likes__field"),likesList:document.querySelector(".likes__list"),datePicker:document.querySelector("#datepicker")},f="loader",l=e=>{const t=`\n        <div class="${f}">\n            <svg>\n                <use href="img/icons.svg#icon-cw"></use>\n            </svg>\n        </div>\n    `;e.insertAdjacentHTML("afterbegin",t)},d=()=>{const e=document.querySelector(`.${f}`);e&&e.parentElement.removeChild(e)},p=()=>{u.searchResList.innerHTML="",u.searchResPages.innerHTML=""},h=e=>{const t=`\n                        <li>\n                            <a class="results__link" href="#${e.id}">\n                                <figure class="results__fig">\n                                    <img src="img/vesta_0715.jpg" alt="Asteroid">\n                                </figure>\n                                <div class="results__data">\n                                    <h4 class="results__name">Name: ${e.name}</h4>\n                                    <p class="results__author">Hazardous?: ${e.is_potentially_hazardous_asteroid}</p>\n                                </div>\n                            </a>\n                        </li>\n                    `;u.searchResList.insertAdjacentHTML("beforeend",t)},m=(e,t)=>`\n    <button class="btn-inline results__btn--${t}" data-goto=${"prev"===t?e-1:e+1}>\n        <span>Page ${"prev"===t?e-1:e+1}</span>\n        <svg class="search__icon">\n            <use href="img/icons.svg#icon-triangle-${"prev"===t?"left":"right"}"></use>\n        </svg>\n    </button>\n`,g=(e,t=1,n=5)=>{const r=(t-1)*n,o=t*n;Object.keys(e).map(s=>{let i=`<h2>Date: ${s}</h2><br/>`;u.searchResList.insertAdjacentHTML("beforeend",i),e[s].slice(r,o).forEach(h),((e,t,n)=>{const r=Math.ceil(t/n);let o;1===e&&r>1?o=m(e,"next"):e<r?o=`\n            ${m(e,"prev")}\n            ${m(e,"next")}\n        `:e===r&&r>1?o=m(e,"prev"):e===r&&1===r&&(o=""),u.searchResPages.insertAdjacentHTML("afterbegin",o)})(t,e[s].length,n)})},y=e=>`<li>Date: ${e.close_approach_date}</li>\n            <li>Miss Distance: ${e.miss_distance.miles} miles</li>\n            <li>Orbiting Body: ${e.orbiting_body}</li>\n            <li>Relative Velocity: ${e.relative_velocity.miles_per_hour} mph</li>`,v={},w=async()=>{const e=(()=>{let e=u.datePicker.value.split("");return console.log(`${e} input`),!!`${e}`&&`${e[6]}${e[7]}${e[8]}${e[9]}-${e[0]}${e[1]}-${e[3]}${e[4]}`})();if(console.log(`${e} query`),e){console.log(e),v.search=new a(e),l(u.searchRes),u.datePicker.value="",p();try{await v.search.getResults(),d(),g(v.search.result)}catch(e){alert("Something wrong with the search..."),d()}}else alert("Input is blank!")},_=async()=>{const e=window.location.hash.replace("#","");if(e){u.asteroid.innerHTML="",l(u.asteroid),v.search&&(e=>{Array.from(document.querySelectorAll(".results__link")).forEach(e=>{e.classList.remove("results__link--active")}),document.querySelector(`.results__link[href*="${e}"]`).classList.add("results__link--active")})(e),v.asteroid=new c(e);try{await v.asteroid.getAsteroid(),d(),((e,t)=>{const n=`\n        <figure class="recipe__fig">\n            <img src="img/vesta_0715.jpg" alt="${e.name}" class="recipe__img">\n            <h1 class="recipe__title">\n                <span>${e.name}</span>\n            </h1>\n        </figure>\n\n        <div class="recipe__details">\n\n\n        <div class="recipe__ingredients">\n            <ul class="recipe__ingredient-list">\n            <li>Name: ${e.name}</li>\n            <li>Diameter: ${e.diameter} miles</li>\n            <li>Hazardous: ${e.hazardous}</li>\n            </ul>\n        </div>\n    <div class="recipe__ingredients">\n<h4>Close Approach Data</h4><br>\n  <ul class="recipe__ingredient-list">${e.miss_distance.map(y)}</ul>`;u.asteroid.insertAdjacentHTML("afterbegin",n),console.log(e)})(v.asteroid)}catch(e){console.log(e),alert("Error processing asteroid!")}}};["hashchange","load"].forEach(e=>window.addEventListener(e,_)),u.searchForm.addEventListener("submit",e=>{event.preventDefault(),w()}),u.searchResPages.addEventListener("click",e=>{const t=e.target.closest(".btn-inline");if(t){const e=parseInt(t.dataset.goto,10);p(),g(v.search.result,e)}})}]);