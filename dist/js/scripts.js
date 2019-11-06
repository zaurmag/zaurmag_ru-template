/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});
/* ============================================================================
   Fixed block Func
   ========================================================================= */
(function($) {
    $.fn.addFixClass = function(options) {
        options = $.extend({
            offset: 200,
            timeAnimate: 500,
            destroy: false
        }, options);
        var fixClass = $(this);
        $(window).bind('scroll', function() {
            addClassFn();
        });
        if ($(window).scrollTop() >= options.offset && !options.destroy) {
            addClassFn();
        }
        function addClassFn() {
            if ($(window).scrollTop() >= options.offset && !options.destroy) {
                $(fixClass).removeClass('static').addClass("fixed");
                setTimeout(function() {
                    $(fixClass).addClass("animate");
                }, options.timeAnimate);
            } else {
                $(fixClass).addClass('static').removeClass("fixed");
                setTimeout(function() {
                    $(fixClass).removeClass("animate");
                }, options.timeAnimate);
            }
        }
        if (options.destroy) {
            $(window).unbind('scroll');
            $(fixClass).addClass('static').removeClass('fixed animate');
        }
    };
})(jQuery);
/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2018 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.0-beta.51
*/

!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var i,a,r,o;"function"==typeof Symbol&&Symbol.iterator;o=function(e){return e},a=[n(2)],void 0===(r="function"==typeof(i=o)?i.apply(t,a):i)||(e.exports=r)},function(e,t,n){"use strict";var i,a,r,o,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o=function(e,t,n,i){var a=navigator.userAgent,r=f("touchstart"),o=/iemobile/i.test(a),l=/iphone/i.test(a)&&!o;function u(t,n,a){if(!(this instanceof u))return new u(t,n,a);this.el=i,this.events={},this.maskset=i,this.refreshValue=!1,!0!==a&&(e.isPlainObject(t)?n=t:(n=n||{},t&&(n.alias=t)),this.opts=e.extend(!0,{},this.defaults,n),this.noMasksCache=n&&n.definitions!==i,this.userOptions=n||{},this.isRTL=this.opts.numericInput,c(this.opts.alias,n,this.opts))}function c(t,n,a){var r=u.prototype.aliases[t];return r?(r.alias&&c(r.alias,i,a),e.extend(!0,a,r),e.extend(!0,a,n),!0):(null===a.mask&&(a.mask=t),!1)}function p(t,n){function a(t,a,r){var o=!1;if(null!==t&&""!==t||((o=null!==r.regex)?t=(t=r.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(o=!0,t=".*")),1===t.length&&!1===r.greedy&&0!==r.repeat&&(r.placeholder=""),r.repeat>0||"*"===r.repeat||"+"===r.repeat){var s="*"===r.repeat?0:"+"===r.repeat?1:r.repeat;t=r.groupmarker[0]+t+r.groupmarker[1]+r.quantifiermarker[0]+s+","+r.repeat+r.quantifiermarker[1]}var l,c=o?"regex_"+r.regex:r.numericInput?t.split("").reverse().join(""):t;return u.prototype.masksCache[c]===i||!0===n?(l={mask:t,maskToken:u.prototype.analyseMask(t,o,r),validPositions:{},_buffer:i,buffer:i,tests:{},excludes:{},metadata:a,maskLength:i},!0!==n&&(u.prototype.masksCache[c]=l,l=e.extend(!0,{},u.prototype.masksCache[c]))):l=e.extend(!0,{},u.prototype.masksCache[c]),l}if(e.isFunction(t.mask)&&(t.mask=t.mask(t)),e.isArray(t.mask)){if(t.mask.length>1){if(null===t.keepStatic){t.keepStatic="auto";for(var r=0;r<t.mask.length;r++)if(t.mask[r].charAt(0)!==t.mask[0].charAt(0)){t.keepStatic=!0;break}}var o=t.groupmarker[0];return e.each(t.isRTL?t.mask.reverse():t.mask,function(n,a){o.length>1&&(o+=t.groupmarker[1]+t.alternatormarker+t.groupmarker[0]),a.mask===i||e.isFunction(a.mask)?o+=a:o+=a.mask}),a(o+=t.groupmarker[1],t.mask,t)}t.mask=t.mask.pop()}return t.mask&&t.mask.mask!==i&&!e.isFunction(t.mask.mask)?a(t.mask.mask,t.mask,t):a(t.mask,t.mask,t)}function f(e){var t=n.createElement("input"),i="on"+e,a=i in t;return a||(t.setAttribute(i,"return;"),a="function"==typeof t[i]),t=null,a}function m(a,c,p){c=c||this.maskset,p=p||this.opts;var d,h,g,v,k=this,y=this.el,b=this.isRTL,x=!1,P=!1,S=!1,A=!1,C=!1;function E(e,t,n,a,r){var o=p.greedy;r&&(p.greedy=!1),t=t||0;var s,l,u,c=[],f=0,m=O();do{if(!0===e&&M().validPositions[f])l=(u=!r||!0!==M().validPositions[f].match.optionality||!0!==M().validPositions[f].generatedInput&&M().validPositions[f].input!=p.skipOptionalPartCharacter||M().validPositions[f+1]!==i?M().validPositions[f]:D(f,N(f,s,f-1))).match,s=u.locator.slice(),c.push(!0===n?u.input:!1===n?l.nativeDef:$(f,l));else{l=(u=F(f,s,f-1)).match,s=u.locator.slice();var d=!0!==a&&(!1!==p.jitMasking?p.jitMasking:l.jit);(!1===d||d===i||f<m||"number"==typeof d&&isFinite(d)&&d>f)&&c.push(!1===n?l.nativeDef:$(f,l))}"auto"===p.keepStatic&&l.newBlockMarker&&null!==l.fn&&(p.keepStatic=f-1),f++}while((g===i||f<g)&&(null!==l.fn||""!==l.def)||t>f);return""===c[c.length-1]&&c.pop(),!1===n&&M().maskLength!==i||(M().maskLength=f-1),p.greedy=o,c}function M(){return c}function w(e){var t=M();t.buffer=i,!0!==e&&(t.validPositions={},t.p=0)}function O(e,t,n){var a=-1,r=-1,o=n||M().validPositions;for(var s in e===i&&(e=-1),o){var l=parseInt(s);o[l]&&(t||!0!==o[l].generatedInput)&&(l<=e&&(a=l),l>=e&&(r=l))}return-1===a||a==e?r:-1==r?a:e-a<r-e?a:r}function D(e,t,n){for(var a,r=T(e=e>0?e-1:0,t),o=r.alternation!==i?r.locator[r.alternation].toString().split(","):[],s=0;s<t.length&&(!((a=t[s]).match&&(p.greedy&&!0!==a.match.optionalQuantifier||(!1===a.match.optionality||!1===a.match.newBlockMarker)&&!0!==a.match.optionalQuantifier)&&(r.alternation===i||r.alternation!==a.alternation||a.locator[r.alternation]!==i&&L(a.locator[r.alternation].toString().split(","),o)))||!0===n&&(null!==a.match.fn||/[0-9a-bA-Z]/.test(a.match.def)));s++);return a}function _(e){var t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",")[0]),t!==i?t.toString():""}function j(e,t){for(var n=(e.alternation!=i?e.mloc[_(e)]:e.locator).join("");n.length<t;)n+="0";return n}function F(e,t,n){return M().validPositions[e]||D(e,N(e,t?t.slice():t,n))}function T(e,t){return M().validPositions[e]?M().validPositions[e]:(t||N(e))[0]}function R(e,t){for(var n=!1,i=N(e),a=0;a<i.length;a++)if(i[a].match&&i[a].match.def===t){n=!0;break}return n}function N(t,n,a){var r,o,s,l,u=M().maskToken,c=n?a:0,f=n?n.slice():[0],m=[],d=!1,h=n?n.join(""):"";function g(n,a,o,s){function l(o,s,u){function f(t,n){var i=0===e.inArray(t,n.matches);return i||e.each(n.matches,function(e,a){if(!0===a.isQuantifier?i=f(t,n.matches[e-1]):!0===a.isOptional?i=f(t,a):!0===a.isAlternate&&(i=f(t,a)),i)return!1}),i}function v(t,n,a){var r,o;if((M().tests[t]||M().validPositions[t])&&e.each(M().tests[t]||[M().validPositions[t]],function(e,t){if(t.mloc[n])return r=t,!1;var s=a!==i?a:t.alternation,l=t.locator[s]!==i?t.locator[s].toString().indexOf(n):-1;(o===i||l<o)&&-1!==l&&(r=t,o=l)}),r){var s=r.locator[r.alternation];return(r.mloc[n]||r.mloc[s]||r.locator).slice((a!==i?a:r.alternation)+1)}return a!==i?v(t,n):i}function k(e,t){function n(e){for(var t,n,i=[],a=0,r=e.length;a<r;a++)if("-"===e.charAt(a))for(n=e.charCodeAt(a+1);++t<n;)i.push(String.fromCharCode(t));else t=e.charCodeAt(a),i.push(e.charAt(a));return i.join("")}return p.regex&&null!==e.match.fn&&null!==t.match.fn?-1!==n(t.match.def.replace(/[\[\]]/g,"")).indexOf(n(e.match.def.replace(/[\[\]]/g,""))):e.match.def===t.match.nativeDef}function y(e,t){if(t===i||e.alternation===t.alternation&&-1===e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])){e.mloc=e.mloc||{};var n=e.locator[e.alternation];if(n!==i){if("string"==typeof n&&(n=n.split(",")[0]),e.mloc[n]===i&&(e.mloc[n]=e.locator.slice()),t!==i){for(var a in t.mloc)"string"==typeof a&&(a=a.split(",")[0]),e.mloc[a]===i&&(e.mloc[a]=t.mloc[a]);e.locator[e.alternation]=Object.keys(e.mloc).join(",")}return!0}e.alternation=i}return!1}if(c>5e3)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+M().mask;if(c===t&&o.matches===i)return m.push({match:o,locator:s.reverse(),cd:h,mloc:{}}),!0;if(o.matches!==i){if(o.isGroup&&u!==o){if(o=l(n.matches[e.inArray(o,n.matches)+1],s))return!0}else if(o.isOptional){var b=o;if(o=g(o,a,s,u)){if(r=m[m.length-1].match,u!==i||!f(r,b))return!0;d=!0,c=t}}else if(o.isAlternator){var x,P=o,S=[],A=m.slice(),C=s.length,E=a.length>0?a.shift():-1;if(-1===E||"string"==typeof E){var w,O=c,D=a.slice(),_=[];if("string"==typeof E)_=E.split(",");else for(w=0;w<P.matches.length;w++)_.push(w.toString());if(M().excludes[t]){for(var j=_.slice(),F=0,T=M().excludes[t].length;F<T;F++)_.splice(_.indexOf(M().excludes[t][F].toString()),1);0===_.length&&(M().excludes[t]=i,_=j)}(!0===p.keepStatic||isFinite(parseInt(p.keepStatic))&&O>=p.keepStatic)&&(_=_.slice(0,1));for(var R=!1,N=0;N<_.length;N++){w=parseInt(_[N]),m=[],a="string"==typeof E&&v(c,w,C)||D.slice(),P.matches[w]&&l(P.matches[w],[w].concat(s),u)?o=!0:0===N&&(R=!0),x=m.slice(),c=O,m=[];for(var G=0;G<x.length;G++){var I=x[G],B=!1;I.match.jit=I.match.jit||R,I.alternation=I.alternation||C,y(I);for(var L=0;L<S.length;L++){var H=S[L];if("string"!=typeof E||I.alternation!==i&&-1!==e.inArray(I.locator[I.alternation].toString(),_)){if(I.match.nativeDef===H.match.nativeDef){B=!0,y(H,I);break}if(k(I,H)){y(I,H)&&(B=!0,S.splice(S.indexOf(H),0,I));break}if(k(H,I)){y(H,I);break}if(q=H,null===(z=I).match.fn&&null!==q.match.fn&&q.match.fn.test(z.match.def,M(),t,!1,p,!1)){y(I,H)&&(B=!0,S.splice(S.indexOf(H),0,I));break}}}B||S.push(I)}}m=A.concat(S),c=t,d=m.length>0,o=S.length>0,a=D.slice()}else o=l(P.matches[E]||n.matches[E],[E].concat(s),u);if(o)return!0}else if(o.isQuantifier&&u!==n.matches[e.inArray(o,n.matches)-1])for(var V=o,K=a.length>0?a.shift():0;K<(isNaN(V.quantifier.max)?K+1:V.quantifier.max)&&c<=t;K++){var U=n.matches[e.inArray(V,n.matches)-1];if(o=l(U,[K].concat(s),U)){if((r=m[m.length-1].match).optionalQuantifier=K>V.quantifier.min-1,r.jit=K+U.matches.indexOf(r)>=V.quantifier.jit,f(r,U)&&K>V.quantifier.min-1){d=!0,c=t;break}if(V.quantifier.jit!==i&&isNaN(V.quantifier.max)&&r.optionalQuantifier&&M().validPositions[t-1]===i){m.pop(),d=!0,c=t,h=i;break}return!0}}else if(o=g(o,a,s,u))return!0}else c++;var z,q}for(var u=a.length>0?a.shift():0;u<n.matches.length;u++)if(!0!==n.matches[u].isQuantifier){var f=l(n.matches[u],[u].concat(o),s);if(f&&c===t)return f;if(c>t)break}}if(t>-1){if(n===i){for(var v,k=t-1;(v=M().validPositions[k]||M().tests[k])===i&&k>-1;)k--;v!==i&&k>-1&&(o=k,s=v,l=[],e.isArray(s)||(s=[s]),s.length>0&&(s[0].alternation===i?0===(l=D(o,s.slice()).locator.slice()).length&&(l=s[0].locator.slice()):e.each(s,function(e,t){if(""!==t.def)if(0===l.length)l=t.locator.slice();else for(var n=0;n<l.length;n++)t.locator[n]&&-1===l[n].toString().indexOf(t.locator[n])&&(l[n]+=","+t.locator[n])})),h=(f=l).join(""),c=k)}if(M().tests[t]&&M().tests[t][0].cd===h)return M().tests[t];for(var y=f.shift();y<u.length;y++){if(g(u[y],f,[y])&&c===t||c>t)break}}return(0===m.length||d)&&m.push({match:{fn:null,optionality:!0,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:h}),n!==i&&M().tests[t]?e.extend(!0,[],m):(M().tests[t]=e.extend(!0,[],m),M().tests[t])}function G(){return M()._buffer===i&&(M()._buffer=E(!1,1),M().buffer===i&&(M().buffer=M()._buffer.slice())),M()._buffer}function I(e){return M().buffer!==i&&!0!==e||(M().buffer=E(!0,O(),!0)),M().buffer}function B(e,t,n){var a,r;if(!0===e)w(),e=0,t=n.length;else for(a=e;a<t;a++)delete M().validPositions[a];for(r=e,a=e;a<t;a++)if(w(!0),n[a]!==p.skipOptionalPartCharacter){var o=V(r,n[a],!0,!0);!1!==o&&(w(!0),r=o.caret!==i?o.caret:o.pos+1)}}function L(t,n,a){for(var r,o=p.greedy?n:n.slice(0,1),s=!1,l=a!==i?a.split(","):[],u=0;u<l.length;u++)-1!==(r=t.indexOf(l[u]))&&t.splice(r,1);for(var c=0;c<t.length;c++)if(-1!==e.inArray(t[c],o)){s=!0;break}return s}function H(t,n,a,r,o){var s,l,u,c,p,f,m,d=e.extend(!0,{},M().validPositions),h=!1,g=o!==i?o:O();if(-1===g&&o===i)l=(c=T(s=0)).alternation;else for(;g>=0;g--)if((u=M().validPositions[g])&&u.alternation!==i){if(c&&c.locator[u.alternation]!==u.locator[u.alternation])break;s=g,l=M().validPositions[s].alternation,c=u}if(l!==i){m=parseInt(s),M().excludes[m]=M().excludes[m]||[],!0!==t&&M().excludes[m].push(_(c));var v=[],k=0;for(p=m;p<O(i,!0)+1;p++)(f=M().validPositions[p])&&!0!==f.generatedInput?v.push(f.input):p<t&&k++,delete M().validPositions[p];for(;M().excludes[m]&&M().excludes[m].length<10;){var y=-1*k,b=v.slice();for(M().tests[m]=i,w(!0),h=!0;b.length>0;){var x=b.shift();if(!(h=V(O(i,!0)+1,x,!1,r,!0)))break}if(h&&n!==i){var P=O(t)+1;for(p=m;p<O()+1;p++)((f=M().validPositions[p])===i||null==f.match.fn)&&p<t+y&&y++;h=V((t+=y)>P?P:t,n,a,r,!0)}if(h)break;if(w(),c=T(m),M().validPositions=e.extend(!0,{},d),!M().excludes[m]){h=H(t,n,a,r,m-1);break}var S=_(c);if(-1!==M().excludes[m].indexOf(S)){h=H(t,n,a,r,m-1);break}for(M().excludes[m].push(S),p=m;p<O(i,!0)+1;p++)delete M().validPositions[p]}}return M().excludes[m]=i,h}function V(t,n,a,r,o,s){function l(e){return b?e.begin-e.end>1||e.begin-e.end==1:e.end-e.begin>1||e.end-e.begin==1}a=!0===a;var c=t;function f(n,a,o){var s=!1;return e.each(N(n),function(c,f){var m=f.match;if(I(!0),!1!==(s=null!=m.fn?m.fn.test(a,M(),n,o,p,l(t)):(a===m.def||a===p.skipOptionalPartCharacter)&&""!==m.def&&{c:$(n,m,!0)||m.def,pos:n})){var d=s.c!==i?s.c:a,h=n;return d=d===p.skipOptionalPartCharacter&&null===m.fn?$(n,m,!0)||m.def:d,s.remove!==i&&(e.isArray(s.remove)||(s.remove=[s.remove]),e.each(s.remove.sort(function(e,t){return t-e}),function(e,t){U({begin:t,end:t+1})})),s.insert!==i&&(e.isArray(s.insert)||(s.insert=[s.insert]),e.each(s.insert.sort(function(e,t){return e-t}),function(e,t){V(t.pos,t.c,!0,r)})),!0!==s&&s.pos!==i&&s.pos!==n&&(h=s.pos),!0!==s&&s.pos===i&&s.c===i?!1:(U(t,e.extend({},f,{input:function(t,n,i){switch(p.casing||n.casing){case"upper":t=t.toUpperCase();break;case"lower":t=t.toLowerCase();break;case"title":var a=M().validPositions[i-1];t=0===i||a&&a.input===String.fromCharCode(u.keyCode.SPACE)?t.toUpperCase():t.toLowerCase();break;default:if(e.isFunction(p.casing)){var r=Array.prototype.slice.call(arguments);r.push(M().validPositions),t=p.casing.apply(this,r)}}return t}(d,m,h)}),r,h)||(s=!1),!1)}}),s}t.begin!==i&&(c=b?t.end:t.begin);var m=!0,d=e.extend(!0,{},M().validPositions);if(e.isFunction(p.preValidation)&&!a&&!0!==r&&!0!==s&&(m=p.preValidation(I(),c,n,l(t),p,M())),!0===m){if(K(i,c,!0),(g===i||c<g)&&(m=f(c,n,a),(!a||!0===r)&&!1===m&&!0!==s)){var h=M().validPositions[c];if(!h||null!==h.match.fn||h.match.def!==n&&n!==p.skipOptionalPartCharacter){if((p.insertMode||M().validPositions[q(c)]===i)&&!z(c,!0))for(var v=c+1,k=q(c);v<=k;v++)if(!1!==(m=f(v,n,a))){m=K(c,m.pos!==i?m.pos:v)||m,c=v;break}}else m={caret:q(c)}}!1!==m||!1===p.keepStatic||null!=p.regex&&!re(I())||a||!0===o||(m=H(c,n,a,r)),!0===m&&(m={pos:c})}if(e.isFunction(p.postValidation)&&!1!==m&&!a&&!0!==r&&!0!==s){var y=p.postValidation(I(!0),m,p);if(y!==i){if(y.refreshFromBuffer&&y.buffer){var x=y.refreshFromBuffer;B(!0===x?x:x.start,x.end,y.buffer)}m=!0===y?m:y}}return m&&m.pos===i&&(m.pos=c),!1!==m&&!0!==s||(w(!0),M().validPositions=e.extend(!0,{},d)),m}function K(t,n,a){var r;if(t===i)for(t=n-1;t>0&&!M().validPositions[t];t--);for(var o=t;o<n;o++)if(M().validPositions[o]===i&&!z(o,!0)){var s=0==o?T(o):M().validPositions[o-1];if(s){var l,u=j(s),c=N(o).slice(),p=i,f=T(o);if(""===c[c.length-1].match.def&&c.pop(),e.each(c,function(e,t){l=j(t,u.length);var n=Math.abs(l-u);(p===i||n<p)&&null===t.match.fn&&!0!==t.match.optionality&&!0!==t.match.optionalQuantifier&&(p=n,f=t)}),(f=e.extend({},f,{input:$(o,f.match,!0)||f.match.def})).generatedInput=!0,U(o,f,!0),!0!==a){var m=M().validPositions[n].input;M().validPositions[n]=i,r=V(n,m,!0,!0)}}}return r}function U(t,n,a,r){function o(e,t,n){var a=t[e];if(a!==i&&(null===a.match.fn&&!0!==a.match.optionality||a.input===p.radixPoint)){var r=n.begin<=e-1?t[e-1]&&null===t[e-1].match.fn&&t[e-1]:t[e-1],o=n.end>e+1?t[e+1]&&null===t[e+1].match.fn&&t[e+1]:t[e+1];return r&&o}return!1}var s=t.begin!==i?t.begin:t,l=t.end!==i?t.end:t;if(t.begin>t.end&&(s=t.end,l=t.begin),r=r!==i?r:s,s!==l||p.insertMode&&M().validPositions[r]!==i&&a===i){var u=e.extend(!0,{},M().validPositions),c=O(i,!0);for(M().p=s,g=c;g>=s;g--)M().validPositions[g]&&"+"===M().validPositions[g].match.nativeDef&&(p.isNegative=!1),delete M().validPositions[g];var f=!0,m=r,d=(M().validPositions,!1),h=m,g=m;for(n&&(M().validPositions[r]=e.extend(!0,{},n),h++,m++,s<l&&g++);g<=c;g++){var v=u[g];if(v!==i&&(g>=l||g>=s&&!0!==v.generatedInput&&o(g,u,{begin:s,end:l}))){for(;""!==T(h).match.def;){if(!1===d&&u[h]&&u[h].match.nativeDef===v.match.nativeDef)M().validPositions[h]=e.extend(!0,{},u[h]),M().validPositions[h].input=v.input,K(i,h,!0),m=h+1,f=!0;else if(R(h,v.match.def)){var k=V(h,v.input,!0,!0);f=!1!==k,m=k.caret||k.insert?O():h+1,d=!0}else if(!(f=!0===v.generatedInput||v.input===p.radixPoint&&!0===p.numericInput)&&""===T(h).match.def)break;if(f)break;h++}""==T(h).match.def&&(f=!1),h=m}if(!f)break}if(!f)return M().validPositions=e.extend(!0,{},u),w(!0),!1}else n&&(M().validPositions[r]=e.extend(!0,{},n));return w(!0),!0}function z(e,t){var n=F(e).match;if(""===n.def&&(n=T(e).match),null!=n.fn)return n.fn;if(!0!==t&&e>-1){var i=N(e);return i.length>1+(""===i[i.length-1].match.def?1:0)}return!1}function q(e,t){for(var n=e+1;""!==T(n).match.def&&(!0===t&&(!0!==T(n).match.newBlockMarker||!z(n))||!0!==t&&!z(n));)n++;return n}function Q(e,t){var n,i=e;if(i<=0)return 0;for(;--i>0&&(!0===t&&!0!==T(i).match.newBlockMarker||!0!==t&&!z(i)&&((n=N(i)).length<2||2===n.length&&""===n[1].match.def)););return i}function W(t,n,a,r,o){if(r&&e.isFunction(p.onBeforeWrite)){var s=p.onBeforeWrite.call(k,r,n,a,p);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;B(!0===l?l:l.start,l.end,s.buffer||n),n=I(!0)}a!==i&&(a=s.caret!==i?s.caret:a)}}if(t!==i&&(t.inputmask._valueSet(n.join("")),a===i||r!==i&&"blur"===r.type?le(t,a,0===n.length):ne(t,a),!0===o)){var u=e(t),c=t.inputmask._valueGet();P=!0,u.trigger("input"),setTimeout(function(){c===G().join("")?u.trigger("cleared"):!0===re(n)&&u.trigger("complete")},0)}}function $(t,n,a){if((n=n||T(t).match).placeholder!==i||!0===a)return e.isFunction(n.placeholder)?n.placeholder(p):n.placeholder;if(null===n.fn){if(t>-1&&M().validPositions[t]===i){var r,o=N(t),s=[];if(o.length>1+(""===o[o.length-1].match.def?1:0))for(var l=0;l<o.length;l++)if(!0!==o[l].match.optionality&&!0!==o[l].match.optionalQuantifier&&(null===o[l].match.fn||r===i||!1!==o[l].match.fn.test(r.match.def,M(),t,!0,p))&&(s.push(o[l]),null===o[l].match.fn&&(r=o[l]),s.length>1&&/[0-9a-bA-Z]/.test(s[0].match.def)))return p.placeholder.charAt(t%p.placeholder.length)}return n.def}return p.placeholder.charAt(t%p.placeholder.length)}var Z,J={on:function(t,n,a){var s=function(t){var n=this;if(n.inputmask===i&&"FORM"!==this.nodeName){var s=e.data(n,"_inputmask_opts");s?new u(s).mask(n):J.off(n)}else{if("setvalue"===t.type||"FORM"===this.nodeName||!(n.disabled||n.readOnly&&!("keydown"===t.type&&t.ctrlKey&&67===t.keyCode||!1===p.tabThrough&&t.keyCode===u.keyCode.TAB))){switch(t.type){case"input":if(!0===P)return P=!1,t.preventDefault();if(r){C=!0;var c=arguments;return setTimeout(function(){a.apply(n,c)},0),!1}break;case"keydown":x=!1,P=!1;break;case"keypress":if(!0===x)return t.preventDefault();x=!0;break;case"click":if(o||l){c=arguments;return setTimeout(function(){a.apply(n,c)},0),!1}}var f=a.apply(n,arguments);return C&&(C=!1,setTimeout(function(){ne(n,n.inputmask.caretPos,i,!0)})),!1===f&&(t.preventDefault(),t.stopPropagation()),f}t.preventDefault()}};t.inputmask.events[n]=t.inputmask.events[n]||[],t.inputmask.events[n].push(s),-1!==e.inArray(n,["submit","reset"])?null!==t.form&&e(t.form).on(n,s):e(t).on(n,s)},off:function(t,n){var i;t.inputmask&&t.inputmask.events&&(n?(i=[])[n]=t.inputmask.events[n]:i=t.inputmask.events,e.each(i,function(n,i){for(;i.length>0;){var a=i.pop();-1!==e.inArray(n,["submit","reset"])?null!==t.form&&e(t.form).off(n,a):e(t).off(n,a)}delete t.inputmask.events[n]}))}},Y={keydownEvent:function(t){var n=this,i=e(n),a=t.keyCode,r=ne(n);if(a===u.keyCode.BACKSPACE||a===u.keyCode.DELETE||l&&a===u.keyCode.BACKSPACE_SAFARI||t.ctrlKey&&a===u.keyCode.X&&!f("cut"))t.preventDefault(),oe(n,a,r),W(n,I(!0),M().p,t,n.inputmask._valueGet()!==I().join(""));else if(a===u.keyCode.END||a===u.keyCode.PAGE_DOWN){t.preventDefault();var o=q(O());p.insertMode||o!==M().maskLength||t.shiftKey||o--,ne(n,t.shiftKey?r.begin:o,o,!0)}else a===u.keyCode.HOME&&!t.shiftKey||a===u.keyCode.PAGE_UP?(t.preventDefault(),ne(n,0,t.shiftKey?r.begin:0,!0)):(p.undoOnEscape&&a===u.keyCode.ESCAPE||90===a&&t.ctrlKey)&&!0!==t.altKey?(X(n,!0,!1,d.split("")),i.trigger("click")):a!==u.keyCode.INSERT||t.shiftKey||t.ctrlKey?!0===p.tabThrough&&a===u.keyCode.TAB?(!0===t.shiftKey?(null===T(r.begin).match.fn&&(r.begin=q(r.begin)),r.end=Q(r.begin,!0),r.begin=Q(r.end,!0)):(r.begin=q(r.begin,!0),r.end=q(r.begin,!0),r.end<M().maskLength&&r.end--),r.begin<M().maskLength&&(t.preventDefault(),ne(n,r.begin,r.end))):t.shiftKey||!1===p.insertMode&&(a===u.keyCode.RIGHT?setTimeout(function(){var e=ne(n);ne(n,e.begin)},0):a===u.keyCode.LEFT&&setTimeout(function(){var e=ne(n);ne(n,b?e.begin+1:e.begin-1)},0)):(p.insertMode=!p.insertMode,ne(n,p.insertMode||r.begin!==M().maskLength?r.begin:r.begin-1));p.onKeyDown.call(this,t,I(),ne(n).begin,p),S=-1!==e.inArray(a,p.ignorables)},keypressEvent:function(t,n,a,r,o){var s=this,l=e(s),c=t.which||t.charCode||t.keyCode;if(!(!0===n||t.ctrlKey&&t.altKey)&&(t.ctrlKey||t.metaKey||S))return c===u.keyCode.ENTER&&d!==I().join("")&&(d=I().join(""),setTimeout(function(){l.trigger("change")},0)),!0;if(c){46===c&&!1===t.shiftKey&&""!==p.radixPoint&&(c=p.radixPoint.charCodeAt(0));var f,m=n?{begin:o,end:o}:ne(s),h=String.fromCharCode(c),g=0;if(p._radixDance&&p.numericInput){var v=I().indexOf(p.radixPoint.charAt(0))+1;m.begin<=v&&(c===p.radixPoint.charCodeAt(0)&&(g=1),m.begin-=1,m.end-=1)}M().writeOutBuffer=!0;var k=V(m,h,r);if(!1!==k&&(w(!0),f=k.caret!==i?k.caret:q(k.pos.begin?k.pos.begin:k.pos),M().p=f),f=(p.numericInput&&k.caret===i?Q(f):f)+g,!1!==a&&(setTimeout(function(){p.onKeyValidation.call(s,c,k,p)},0),M().writeOutBuffer&&!1!==k)){var y=I();W(s,y,f,t,!0!==n)}if(t.preventDefault(),n)return!1!==k&&(k.forwardPosition=f),k}},pasteEvent:function(n){var i,a=this,r=n.originalEvent||n,o=(e(a),a.inputmask._valueGet(!0)),s=ne(a);b&&(i=s.end,s.end=s.begin,s.begin=i);var l=o.substr(0,s.begin),u=o.substr(s.end,o.length);if(l===(b?G().reverse():G()).slice(0,s.begin).join("")&&(l=""),u===(b?G().reverse():G()).slice(s.end).join("")&&(u=""),b&&(i=l,l=u,u=i),t.clipboardData&&t.clipboardData.getData)o=l+t.clipboardData.getData("Text")+u;else{if(!r.clipboardData||!r.clipboardData.getData)return!0;o=l+r.clipboardData.getData("text/plain")+u}var c=o;if(e.isFunction(p.onBeforePaste)){if(!1===(c=p.onBeforePaste.call(k,o,p)))return n.preventDefault();c||(c=o)}return X(a,!1,!1,b?c.split("").reverse():c.toString().split("")),W(a,I(),q(O()),n,d!==I().join("")),n.preventDefault()},inputFallBackEvent:function(t){var n,i,a=this,r=a.inputmask._valueGet();if(I().join("")!==r){var s=ne(a);if(i=s,"."===(n=r).charAt(i.begin-1)&&""!==p.radixPoint&&((n=n.split(""))[i.begin-1]=p.radixPoint.charAt(0),n=n.join("")),r=function(e,t,n){if(o){var i=t.replace(I().join(""),"");if(1===i.length){var a=t.split("");a.splice(n.begin,0,i),t=a.join("")}}return t}(0,r=n,s),I().join("")!==r){var l=I().join(""),c=!p.numericInput&&r.length>l.length?-1:0,f=r.substr(0,s.begin),m=r.substr(s.begin),d=l.substr(0,s.begin+c),h=l.substr(s.begin+c),g=s,v="",k=!1;if(f!==d){for(var y=(k=f.length>=d.length)?f.length:d.length,b=0;f.charAt(b)===d.charAt(b)&&b<y;b++);k&&(0===c&&(g.begin=b),v+=f.slice(b,g.end))}if(m!==h&&(m.length>h.length?v+=m.slice(0,1):m.length<h.length&&(g.end+=h.length-m.length,k||""===p.radixPoint||""!==m||f.charAt(g.begin+c-1)!==p.radixPoint||(g.begin--,v=p.radixPoint))),W(a,I(),{begin:g.begin+c,end:g.end+c}),v.length>0)e.each(v.split(""),function(t,n){var i=new e.Event("keypress");i.which=n.charCodeAt(0),S=!1,Y.keypressEvent.call(a,i)});else{g.begin===g.end-1&&(g.begin=Q(g.begin+1),g.begin===g.end-1?ne(a,g.begin):ne(a,g.begin,g.end));var x=new e.Event("keydown");x.keyCode=p.numericInput?u.keyCode.BACKSPACE:u.keyCode.DELETE,Y.keydownEvent.call(a,x),!1===p.insertMode&&ne(a,ne(a).begin-1)}t.preventDefault()}}},setValueEvent:function(t){this.inputmask.refreshValue=!1;var n=(n=t&&t.detail?t.detail[0]:arguments[1])||this.inputmask._valueGet(!0);e.isFunction(p.onBeforeMask)&&(n=p.onBeforeMask.call(k,n,p)||n),n=n.split(""),X(this,!0,!1,b?n.reverse():n),d=I().join(""),(p.clearMaskOnLostFocus||p.clearIncomplete)&&this.inputmask._valueGet()===G().join("")&&this.inputmask._valueSet("")},focusEvent:function(e){var t=this,n=t.inputmask._valueGet();p.showMaskOnFocus&&(!p.showMaskOnHover||p.showMaskOnHover&&""===n)&&(t.inputmask._valueGet()!==I().join("")?W(t,I(),q(O())):!1===A&&ne(t,q(O()))),!0===p.positionCaretOnTab&&!1===A&&Y.clickEvent.apply(t,[e,!0]),d=I().join("")},mouseleaveEvent:function(e){if(A=!1,p.clearMaskOnLostFocus&&n.activeElement!==this){var t=I().slice(),i=this.inputmask._valueGet();i!==this.getAttribute("placeholder")&&""!==i&&(-1===O()&&i===G().join("")?t=[]:ae(t),W(this,t))}},clickEvent:function(t,a){var r=this;setTimeout(function(){if(n.activeElement===r){var t=ne(r);if(a&&(b?t.end=t.begin:t.begin=t.end),t.begin===t.end)switch(p.positionCaretOnClick){case"none":break;case"select":ne(r,0,I().length);break;case"radixFocus":if(function(t){if(""!==p.radixPoint){var n=M().validPositions;if(n[t]===i||n[t].input===$(t)){if(t<q(-1))return!0;var a=e.inArray(p.radixPoint,I());if(-1!==a){for(var r in n)if(a<r&&n[r].input!==$(r))return!1;return!0}}}return!1}(t.begin)){var o=I().join("").indexOf(p.radixPoint);ne(r,p.numericInput?q(o):o);break}case"ignore":ne(r,q(O()));break;default:var s=t.begin,l=O(s,!0),u=q(l);if(s<u)ne(r,z(s,!0)||z(s-1,!0)?s:q(s));else{var c=M().validPositions[l],f=F(u,c?c.match.locator:i,c),m=$(u,f.match);if(""!==m&&I()[u]!==m&&!0!==f.match.optionalQuantifier&&!0!==f.match.newBlockMarker||!z(u,p.keepStatic)&&f.match.def===m){var d=q(u);(s>=d||s===u)&&(u=d)}ne(r,u)}}}},0)},dblclickEvent:function(e){var t=this;setTimeout(function(){ne(t,0,q(O()))},0)},cutEvent:function(i){e(this);var a=ne(this),r=i.originalEvent||i,o=t.clipboardData||r.clipboardData,s=b?I().slice(a.end,a.begin):I().slice(a.begin,a.end);o.setData("text",b?s.reverse().join(""):s.join("")),n.execCommand&&n.execCommand("copy"),oe(this,u.keyCode.DELETE,a),W(this,I(),M().p,i,d!==I().join(""))},blurEvent:function(t){var n=e(this);if(this.inputmask){var a=this.inputmask._valueGet(),r=I().slice();""===a&&v===i||(p.clearMaskOnLostFocus&&(-1===O()&&a===G().join("")?r=[]:ae(r)),!1===re(r)&&(setTimeout(function(){n.trigger("incomplete")},0),p.clearIncomplete&&(w(),r=p.clearMaskOnLostFocus?[]:G().slice())),W(this,r,i,t)),d!==I().join("")&&(d=r.join(""),n.trigger("change"))}},mouseenterEvent:function(e){A=!0,n.activeElement!==this&&p.showMaskOnHover&&this.inputmask._valueGet()!==I().join("")&&W(this,I())},submitEvent:function(e){d!==I().join("")&&h.trigger("change"),p.clearMaskOnLostFocus&&-1===O()&&y.inputmask._valueGet&&y.inputmask._valueGet()===G().join("")&&y.inputmask._valueSet(""),p.clearIncomplete&&!1===re(I())&&y.inputmask._valueSet(""),p.removeMaskOnSubmit&&(y.inputmask._valueSet(y.inputmask.unmaskedvalue(),!0),setTimeout(function(){W(y,I())},0))},resetEvent:function(e){y.inputmask.refreshValue=!0,setTimeout(function(){h.trigger("setvalue")},0)}};function X(t,n,a,r,o){var s=r.slice(),l="",c=-1,f=i;if(w(),a||!0===p.autoUnmask)c=q(c);else{var m=G().slice(0,q(-1)).join(""),d=s.join("").match(new RegExp("^"+u.escapeRegex(m),"g"));d&&d.length>0&&(s.splice(0,d.length*m.length),c=q(c))}-1===c?(M().p=q(c),c=0):M().p=c,e.each(s,function(n,r){if(r!==i)if(M().validPositions[n]===i&&s[n]===$(n)&&z(n,!0)&&!1===V(n,s[n],!0,i,i,!0))M().p++;else{var o=new e.Event("_checkval");o.which=r.charCodeAt(0),l+=r;var u=O(i,!0),m=T(u),d=F(u+1,m?m.locator.slice():i,u);if(g=c,v=l,-1===E(!0,0,!1).slice(g,q(g)).join("").indexOf(v)||z(g)||T(g).match.nativeDef!==v.charAt(0)&&(" "!==T(g).match.nativeDef||T(g+1).match.nativeDef!==v.charAt(0))||a||p.autoUnmask){var h=a?n:null==d.match.fn&&d.match.optionality&&u+1<M().p?u+1:M().p;(f=Y.keypressEvent.call(t,o,!0,!1,a,h))&&(c=h+1,l="")}else f=Y.keypressEvent.call(t,o,!0,!1,!0,u+1);W(i,I(),f.forwardPosition,o,!1)}var g,v}),n&&W(t,I(),f?f.forwardPosition:i,o||new e.Event("checkval"),o&&"input"===o.type)}function ee(t){if(t){if(t.inputmask===i)return t.value;t.inputmask&&t.inputmask.refreshValue&&Y.setValueEvent.call(t)}var n=[],a=M().validPositions;for(var r in a)a[r].match&&null!=a[r].match.fn&&n.push(a[r].input);var o=0===n.length?"":(b?n.reverse():n).join("");if(e.isFunction(p.onUnMask)){var s=(b?I().slice().reverse():I()).join("");o=p.onUnMask.call(k,s,o,p)}return o}function te(e){return!b||"number"!=typeof e||p.greedy&&""===p.placeholder||(e=y.inputmask._valueGet().length-e),e}function ne(a,r,o,s){var u;if(r===i)return a.setSelectionRange?(r=a.selectionStart,o=a.selectionEnd):t.getSelection?(u=t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==a&&u.commonAncestorContainer!==a||(r=u.startOffset,o=u.endOffset):n.selection&&n.selection.createRange&&(o=(r=0-(u=n.selection.createRange()).duplicate().moveStart("character",-a.inputmask._valueGet().length))+u.text.length),{begin:s?r:te(r),end:s?o:te(o)};if(e.isArray(r)&&(o=b?r[0]:r[1],r=b?r[1]:r[0]),r.begin!==i&&(o=b?r.begin:r.end,r=b?r.end:r.begin),"number"==typeof r){r=s?r:te(r),o="number"==typeof(o=s?o:te(o))?o:r;var c=parseInt(((a.ownerDocument.defaultView||t).getComputedStyle?(a.ownerDocument.defaultView||t).getComputedStyle(a,null):a.currentStyle).fontSize)*o;if(a.scrollLeft=c>a.scrollWidth?c:0,l||!1!==p.insertMode||r!==o||o++,a.inputmask.caretPos={begin:r,end:o},a.setSelectionRange)a.selectionStart=r,a.selectionEnd=o;else if(t.getSelection){if(u=n.createRange(),a.firstChild===i||null===a.firstChild){var f=n.createTextNode("");a.appendChild(f)}u.setStart(a.firstChild,r<a.inputmask._valueGet().length?r:a.inputmask._valueGet().length),u.setEnd(a.firstChild,o<a.inputmask._valueGet().length?o:a.inputmask._valueGet().length),u.collapse(!0);var m=t.getSelection();m.removeAllRanges(),m.addRange(u)}else a.createTextRange&&((u=a.createTextRange()).collapse(!0),u.moveEnd("character",o),u.moveStart("character",r),u.select());le(a,{begin:r,end:o})}}function ie(t){var n,a,r=E(!0,O(),!0,!0),o=r.length,s=O(),l={},u=M().validPositions[s],c=u!==i?u.locator.slice():i;for(n=s+1;n<r.length;n++)c=(a=F(n,c,n-1)).locator.slice(),l[n]=e.extend(!0,{},a);var p=u&&u.alternation!==i?u.locator[u.alternation]:i;for(n=o-1;n>s&&(((a=l[n]).match.optionality||a.match.optionalQuantifier&&a.match.newBlockMarker||p&&(p!==l[n].locator[u.alternation]&&null!=a.match.fn||null===a.match.fn&&a.locator[u.alternation]&&L(a.locator[u.alternation].toString().split(","),p.toString().split(","))&&""!==N(n)[0].def))&&r[n]===$(n,a.match));n--)o--;return t?{l:o,def:l[o]?l[o].match:i}:o}function ae(e){e.length=0;for(var t,n=E(!0,0,!0,i,!0);(t=n.shift())!==i;)e.push(t);return e}function re(t){if(e.isFunction(p.isComplete))return p.isComplete(t,p);if("*"===p.repeat)return i;var n=!1,a=ie(!0),r=Q(a.l);if(a.def===i||a.def.newBlockMarker||a.def.optionality||a.def.optionalQuantifier){n=!0;for(var o=0;o<=r;o++){var s=F(o).match;if(null!==s.fn&&M().validPositions[o]===i&&!0!==s.optionality&&!0!==s.optionalQuantifier||null===s.fn&&t[o]!==$(o,s)){n=!1;break}}}return n}function oe(e,t,n,a,r){if((p.numericInput||b)&&(t===u.keyCode.BACKSPACE?t=u.keyCode.DELETE:t===u.keyCode.DELETE&&(t=u.keyCode.BACKSPACE),b)){var o=n.end;n.end=n.begin,n.begin=o}if(t===u.keyCode.BACKSPACE&&(n.end-n.begin<1||!1===p.insertMode)?(n.begin=Q(n.begin),M().validPositions[n.begin]!==i&&M().validPositions[n.begin].input===p.groupSeparator&&n.begin--,!1===p.insertMode&&n.end!==M().maskLength&&n.end--):t===u.keyCode.DELETE&&n.begin===n.end&&(n.end=z(n.end,!0)&&M().validPositions[n.end]&&M().validPositions[n.end].input!==p.radixPoint?n.end+1:q(n.end)+1,M().validPositions[n.begin]!==i&&M().validPositions[n.begin].input===p.groupSeparator&&n.end++),U(n),!0!==a&&!1!==p.keepStatic||null!==p.regex){var s=H(!0);if(s){var l=s.caret!==i?s.caret:s.pos?q(s.pos.begin?s.pos.begin:s.pos):O(-1,!0);(t!==u.keyCode.DELETE||n.begin>l)&&n.begin}}var c=O(n.begin,!0);if(c<n.begin||-1===n.begin)M().p=q(c);else if(!0!==a&&(M().p=n.begin,!0!==r))for(;M().p<c&&M().validPositions[M().p]===i;)M().p++}function se(i){var a=(i.ownerDocument.defaultView||t).getComputedStyle(i,null);var r=n.createElement("div");r.style.width=a.width,r.style.textAlign=a.textAlign,v=n.createElement("div"),i.inputmask.colorMask=v,v.className="im-colormask",i.parentNode.insertBefore(v,i),i.parentNode.removeChild(i),v.appendChild(i),v.appendChild(r),i.style.left=r.offsetLeft+"px",e(v).on("mouseleave",function(e){return Y.mouseleaveEvent.call(i,[e])}),e(v).on("mouseenter",function(e){return Y.mouseenterEvent.call(i,[e])}),e(v).on("click",function(e){return ne(i,function(e){var t,r=n.createElement("span");for(var o in a)isNaN(o)&&-1!==o.indexOf("font")&&(r.style[o]=a[o]);r.style.textTransform=a.textTransform,r.style.letterSpacing=a.letterSpacing,r.style.position="absolute",r.style.height="auto",r.style.width="auto",r.style.visibility="hidden",r.style.whiteSpace="nowrap",n.body.appendChild(r);var s,l=i.inputmask._valueGet(),u=0;for(t=0,s=l.length;t<=s;t++){if(r.innerHTML+=l.charAt(t)||"_",r.offsetWidth>=e){var c=e-u,p=r.offsetWidth-e;r.innerHTML=l.charAt(t),t=(c-=r.offsetWidth/3)<p?t-1:t;break}u=r.offsetWidth}return n.body.removeChild(r),t}(e.clientX)),Y.clickEvent.call(i,[e])}),e(i).on("keydown",function(e){e.shiftKey||!1===p.insertMode||setTimeout(function(){le(i)},0)})}function le(e,t,a){var r,o,s,l=[],u=!1,c=0;function f(e){if(e===i&&(e=""),u||null!==r.fn&&o.input!==i)if(u&&(null!==r.fn&&o.input!==i||""===r.def)){u=!1;var t=l.length;l[t-1]=l[t-1]+"</span>",l.push(e)}else l.push(e);else u=!0,l.push("<span class='im-static'>"+e)}if(v!==i){var m=I();if(t===i?t=ne(e):t.begin===i&&(t={begin:t,end:t}),!0!==a){var d=O();do{M().validPositions[c]?(o=M().validPositions[c],r=o.match,s=o.locator.slice(),f(m[c])):(o=F(c,s,c-1),r=o.match,s=o.locator.slice(),!1===p.jitMasking||c<d||"number"==typeof p.jitMasking&&isFinite(p.jitMasking)&&p.jitMasking>c?f($(c,r)):u=!1),c++}while((g===i||c<g)&&(null!==r.fn||""!==r.def)||d>c||u);u&&f(),n.activeElement===e&&(l.splice(t.begin,0,t.begin===t.end||t.end>M().maskLength?'<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">':'<mark class="im-caret-select">'),l.splice(t.end+1,0,"</mark>"))}var h=v.getElementsByTagName("div")[0];h.innerHTML=l.join(""),e.inputmask.positionColorMask(e,h)}}if(u.prototype.positionColorMask=function(e,t){e.style.left=t.offsetLeft+"px"},a!==i)switch(a.action){case"isComplete":return y=a.el,re(I());case"unmaskedvalue":return y!==i&&a.value===i||(Z=a.value,Z=(e.isFunction(p.onBeforeMask)&&p.onBeforeMask.call(k,Z,p)||Z).split(""),X(i,!1,!1,b?Z.reverse():Z),e.isFunction(p.onBeforeWrite)&&p.onBeforeWrite.call(k,i,I(),0,p)),ee(y);case"mask":!function(t){J.off(t);var a=function(t,a){var r=t.getAttribute("type"),o="INPUT"===t.tagName&&-1!==e.inArray(r,a.supportsInputType)||t.isContentEditable||"TEXTAREA"===t.tagName;if(!o)if("INPUT"===t.tagName){var l=n.createElement("input");l.setAttribute("type",r),o="text"===l.type,l=null}else o="partial";return!1!==o?function(t){var r,o,l;function u(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==O()||!0!==a.nullable?n.activeElement===this&&a.clearMaskOnLostFocus?(b?ae(I().slice()).reverse():ae(I().slice())).join(""):r.call(this):"":r.call(this)}function c(t){o.call(this,t),this.inputmask&&e(this).trigger("setvalue",[t])}if(!t.inputmask.__valueGet){if(!0!==a.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===s("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype});var p=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):i;p&&p.get&&p.set?(r=p.get,o=p.set,Object.defineProperty(t,"value",{get:u,set:c,configurable:!0})):"INPUT"!==t.tagName&&(r=function(){return this.textContent},o=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:u,set:c,configurable:!0}))}else n.__lookupGetter__&&t.__lookupGetter__("value")&&(r=t.__lookupGetter__("value"),o=t.__lookupSetter__("value"),t.__defineGetter__("value",u),t.__defineSetter__("value",c));t.inputmask.__valueGet=r,t.inputmask.__valueSet=o}t.inputmask._valueGet=function(e){return b&&!0!==e?r.call(this.el).split("").reverse().join(""):r.call(this.el)},t.inputmask._valueSet=function(e,t){o.call(this.el,null===e||e===i?"":!0!==t&&b?e.split("").reverse().join(""):e)},r===i&&(r=function(){return this.value},o=function(e){this.value=e},function(t){if(e.valHooks&&(e.valHooks[t]===i||!0!==e.valHooks[t].inputmaskpatch)){var n=e.valHooks[t]&&e.valHooks[t].get?e.valHooks[t].get:function(e){return e.value},r=e.valHooks[t]&&e.valHooks[t].set?e.valHooks[t].set:function(e,t){return e.value=t,e};e.valHooks[t]={get:function(e){if(e.inputmask){if(e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();var t=n(e);return-1!==O(i,i,e.inputmask.maskset.validPositions)||!0!==a.nullable?t:""}return n(e)},set:function(t,n){var i,a=e(t);return i=r(t,n),t.inputmask&&a.trigger("setvalue",[n]),i},inputmaskpatch:!0}}}(t.type),l=t,J.on(l,"mouseenter",function(t){var n=e(this);this.inputmask._valueGet()!==I().join("")&&n.trigger("setvalue")}))}}(t):t.inputmask=i,o}(t,p);if(!1!==a&&(h=e(y=t),-1===(g=y!==i?y.maxLength:i)&&(g=i),!0===p.colorMask&&se(y),r&&("inputmode"in y&&(y.inputmode=p.inputmode,y.setAttribute("inputmode",p.inputmode)),!0===p.disablePredictiveText&&("autocorrect"in y?y.autocorrect=!1:(!0!==p.colorMask&&se(y),y.type="password"))),!0===a&&(J.on(y,"submit",Y.submitEvent),J.on(y,"reset",Y.resetEvent),J.on(y,"blur",Y.blurEvent),J.on(y,"focus",Y.focusEvent),!0!==p.colorMask&&(J.on(y,"click",Y.clickEvent),J.on(y,"mouseleave",Y.mouseleaveEvent),J.on(y,"mouseenter",Y.mouseenterEvent)),J.on(y,"dblclick",Y.dblclickEvent),J.on(y,"paste",Y.pasteEvent),J.on(y,"dragdrop",Y.pasteEvent),J.on(y,"drop",Y.pasteEvent),J.on(y,"cut",Y.cutEvent),J.on(y,"complete",p.oncomplete),J.on(y,"incomplete",p.onincomplete),J.on(y,"cleared",p.oncleared),r||!0===p.inputEventOnly?y.removeAttribute("maxLength"):(J.on(y,"keydown",Y.keydownEvent),J.on(y,"keypress",Y.keypressEvent)),J.on(y,"compositionstart",e.noop),J.on(y,"compositionupdate",e.noop),J.on(y,"compositionend",e.noop),J.on(y,"keyup",e.noop),J.on(y,"input",Y.inputFallBackEvent),J.on(y,"beforeinput",e.noop)),J.on(y,"setvalue",Y.setValueEvent),d=G().join(""),""!==y.inputmask._valueGet(!0)||!1===p.clearMaskOnLostFocus||n.activeElement===y)){var o=e.isFunction(p.onBeforeMask)&&p.onBeforeMask.call(k,y.inputmask._valueGet(!0),p)||y.inputmask._valueGet(!0);""!==o&&X(y,!0,!1,b?o.split("").reverse():o.split(""));var l=I().slice();d=l.join(""),!1===re(l)&&p.clearIncomplete&&w(),p.clearMaskOnLostFocus&&n.activeElement!==y&&(-1===O()?l=[]:ae(l)),(!1===p.clearMaskOnLostFocus||p.showMaskOnFocus&&n.activeElement===y||""!==y.inputmask._valueGet(!0))&&W(y,l),n.activeElement===y&&ne(y,q(O()))}}(y);break;case"format":return Z=(e.isFunction(p.onBeforeMask)&&p.onBeforeMask.call(k,a.value,p)||a.value).split(""),X(i,!0,!1,b?Z.reverse():Z),a.metadata?{value:b?I().slice().reverse().join(""):I().join(""),metadata:m.call(this,{action:"getmetadata"},c,p)}:b?I().slice().reverse().join(""):I().join("");case"isValid":a.value?(Z=a.value.split(""),X(i,!0,!0,b?Z.reverse():Z)):a.value=I().join("");for(var ue=I(),ce=ie(),pe=ue.length-1;pe>ce&&!z(pe);pe--);return ue.splice(ce,pe+1-ce),re(ue)&&a.value===I().join("");case"getemptymask":return G().join("");case"remove":if(y&&y.inputmask)e.data(y,"_inputmask_opts",null),h=e(y),y.inputmask._valueSet(p.autoUnmask?ee(y):y.inputmask._valueGet(!0)),J.off(y),y.inputmask.colorMask&&((v=y.inputmask.colorMask).removeChild(y),v.parentNode.insertBefore(y,v),v.parentNode.removeChild(v)),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(y),"value")&&y.inputmask.__valueGet&&Object.defineProperty(y,"value",{get:y.inputmask.__valueGet,set:y.inputmask.__valueSet,configurable:!0}):n.__lookupGetter__&&y.__lookupGetter__("value")&&y.inputmask.__valueGet&&(y.__defineGetter__("value",y.inputmask.__valueGet),y.__defineSetter__("value",y.inputmask.__valueSet)),y.inputmask=i;return y;case"getmetadata":if(e.isArray(c.metadata)){var fe=E(!0,0,!1).join("");return e.each(c.metadata,function(e,t){if(t.mask===fe)return fe=t,!1}),fe}return c.metadata}}return u.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:e.noop,onBeforeMask:null,onBeforePaste:function(t,n){return e.isFunction(n.onBeforeMask)?n.onBeforeMask.call(this,t,n):t},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password","search"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:i,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,disablePredictiveText:!1,importDataAttributes:!0},definitions:{9:{validator:"[0-9１-９]",definitionSymbol:"*"},a:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",definitionSymbol:"*"},"*":{validator:"[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"}},aliases:{},masksCache:{},mask:function(a){var r=this;return"string"==typeof a&&(a=n.getElementById(a)||n.querySelectorAll(a)),a=a.nodeName?[a]:a,e.each(a,function(n,a){var o=e.extend(!0,{},r.opts);if(function(n,a,r,o){if(!0===a.importDataAttributes){var s,l,u,p,f=function(e,a){null!==(a=a!==i?a:n.getAttribute(o+"-"+e))&&("string"==typeof a&&(0===e.indexOf("on")?a=t[a]:"false"===a?a=!1:"true"===a&&(a=!0)),r[e]=a)},m=n.getAttribute(o);if(m&&""!==m&&(m=m.replace(/'/g,'"'),l=JSON.parse("{"+m+"}")),l)for(p in u=i,l)if("alias"===p.toLowerCase()){u=l[p];break}for(s in f("alias",u),r.alias&&c(r.alias,r,a),a){if(l)for(p in u=i,l)if(p.toLowerCase()===s.toLowerCase()){u=l[p];break}f(s,u)}}return e.extend(!0,a,r),("rtl"===n.dir||a.rightAlign)&&(n.style.textAlign="right"),("rtl"===n.dir||a.numericInput)&&(n.dir="ltr",n.removeAttribute("dir"),a.isRTL=!0),Object.keys(r).length}(a,o,e.extend(!0,{},r.userOptions),r.dataAttribute)){var s=p(o,r.noMasksCache);s!==i&&(a.inputmask!==i&&(a.inputmask.opts.autoUnmask=!0,a.inputmask.remove()),a.inputmask=new u(i,i,!0),a.inputmask.opts=o,a.inputmask.noMasksCache=r.noMasksCache,a.inputmask.userOptions=e.extend(!0,{},r.userOptions),a.inputmask.isRTL=o.isRTL||o.numericInput,a.inputmask.el=a,a.inputmask.maskset=s,e.data(a,"_inputmask_opts",o),m.call(a.inputmask,{action:"mask"}))}}),a&&a[0]&&a[0].inputmask||this},option:function(t,n){return"string"==typeof t?this.opts[t]:"object"===(void 0===t?"undefined":s(t))?(e.extend(this.userOptions,t),this.el&&!0!==n&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){return this.maskset=this.maskset||p(this.opts,this.noMasksCache),m.call(this,{action:"unmaskedvalue",value:e})},remove:function(){return m.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||p(this.opts,this.noMasksCache),m.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||p(this.opts,this.noMasksCache),m.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||p(this.opts,this.noMasksCache),m.call(this,{action:"getmetadata"})},isValid:function(e){return this.maskset=this.maskset||p(this.opts,this.noMasksCache),m.call(this,{action:"isValid",value:e})},format:function(e,t){return this.maskset=this.maskset||p(this.opts,this.noMasksCache),m.call(this,{action:"format",value:e,metadata:t})},setValue:function(t){this.el&&e(this.el).trigger("setvalue",[t])},analyseMask:function(t,n,a){var r,o,s,l,c,p,f=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,m=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,d=!1,h=new k,g=[],v=[];function k(e,t,n,i){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=n||!1,this.isAlternator=i||!1,this.quantifier={min:1,max:1}}function y(t,r,o){o=o!==i?o:t.matches.length;var s=t.matches[o-1];if(n)0===r.indexOf("[")||d&&/\\d|\\s|\\w]/i.test(r)||"."===r?t.matches.splice(o++,0,{fn:new RegExp(r,a.casing?"i":""),optionality:t.isOptional,newBlockMarker:s===i||s.def!==r,casing:null,def:r,placeholder:i,nativeDef:r}):(d&&(r=r[r.length-1]),e.each(r.split(""),function(e,n){s=t.matches[o-1],t.matches.splice(o++,0,{fn:null,optionality:t.isOptional,newBlockMarker:s===i||s.def!==n&&null!==s.fn,casing:null,def:a.staticDefinitionSymbol||n,placeholder:a.staticDefinitionSymbol!==i?n:i,nativeDef:n})})),d=!1;else{var l=(a.definitions?a.definitions[r]:i)||u.prototype.definitions[r];l&&!d?t.matches.splice(o++,0,{fn:l.validator?"string"==typeof l.validator?new RegExp(l.validator,a.casing?"i":""):new function(){this.test=l.validator}:new RegExp("."),optionality:t.isOptional,newBlockMarker:s===i||s.def!==(l.definitionSymbol||r),casing:l.casing,def:l.definitionSymbol||r,placeholder:l.placeholder,nativeDef:r}):(t.matches.splice(o++,0,{fn:null,optionality:t.isOptional,newBlockMarker:s===i||s.def!==r&&null!==s.fn,casing:null,def:a.staticDefinitionSymbol||r,placeholder:a.staticDefinitionSymbol!==i?r:i,nativeDef:r}),d=!1)}}function b(){if(g.length>0){if(y(l=g[g.length-1],o),l.isAlternator){c=g.pop();for(var e=0;e<c.matches.length;e++)c.matches[e].isGroup&&(c.matches[e].isGroup=!1);g.length>0?(l=g[g.length-1]).matches.push(c):h.matches.push(c)}}else y(h,o)}function x(e){var t=new k(!0);return t.openGroup=!1,t.matches=e,t}for(n&&(a.optionalmarker[0]=i,a.optionalmarker[1]=i);r=n?m.exec(t):f.exec(t);){if(o=r[0],n)switch(o.charAt(0)){case"?":o="{0,1}";break;case"+":case"*":o="{"+o+"}"}if(d)b();else switch(o.charAt(0)){case a.escapeChar:d=!0,n&&b();break;case a.optionalmarker[1]:case a.groupmarker[1]:if((s=g.pop()).openGroup=!1,s!==i)if(g.length>0){if((l=g[g.length-1]).matches.push(s),l.isAlternator){c=g.pop();for(var P=0;P<c.matches.length;P++)c.matches[P].isGroup=!1,c.matches[P].alternatorGroup=!1;g.length>0?(l=g[g.length-1]).matches.push(c):h.matches.push(c)}}else h.matches.push(s);else b();break;case a.optionalmarker[0]:g.push(new k(!1,!0));break;case a.groupmarker[0]:g.push(new k(!0));break;case a.quantifiermarker[0]:var S=new k(!1,!1,!0),A=(o=o.replace(/[{}]/g,"")).split("|"),C=A[0].split(","),E=isNaN(C[0])?C[0]:parseInt(C[0]),M=1===C.length?E:isNaN(C[1])?C[1]:parseInt(C[1]);"*"!==M&&"+"!==M||(E="*"===M?0:1),S.quantifier={min:E,max:M,jit:A[1]};var w=g.length>0?g[g.length-1].matches:h.matches;if((r=w.pop()).isAlternator){w.push(r),w=r.matches;var O=new k(!0),D=w.pop();w.push(O),w=O.matches,r=D}r.isGroup||(r=x([r])),w.push(r),w.push(S);break;case a.alternatormarker:var _=function(e){var t=e.pop();return t.isQuantifier&&(t=x([e.pop(),t])),t};if(g.length>0){var j=(l=g[g.length-1]).matches[l.matches.length-1];p=l.openGroup&&(j.matches===i||!1===j.isGroup&&!1===j.isAlternator)?g.pop():_(l.matches)}else p=_(h.matches);if(p.isAlternator)g.push(p);else if(p.alternatorGroup?(c=g.pop(),p.alternatorGroup=!1):c=new k(!1,!1,!1,!0),c.matches.push(p),g.push(c),p.openGroup){p.openGroup=!1;var F=new k(!0);F.alternatorGroup=!0,g.push(F)}break;default:b()}}for(;g.length>0;)s=g.pop(),h.matches.push(s);return h.matches.length>0&&(!function t(r){r&&r.matches&&e.each(r.matches,function(e,o){var s=r.matches[e+1];(s===i||s.matches===i||!1===s.isQuantifier)&&o&&o.isGroup&&(o.isGroup=!1,n||(y(o,a.groupmarker[0],0),!0!==o.openGroup&&y(o,a.groupmarker[1]))),t(o)})}(h),v.push(h)),(a.numericInput||a.isRTL)&&function e(t){for(var n in t.matches=t.matches.reverse(),t.matches)if(t.matches.hasOwnProperty(n)){var r=parseInt(n);if(t.matches[n].isQuantifier&&t.matches[r+1]&&t.matches[r+1].isGroup){var o=t.matches[n];t.matches.splice(n,1),t.matches.splice(r+1,0,o)}t.matches[n].matches!==i?t.matches[n]=e(t.matches[n]):t.matches[n]=((s=t.matches[n])===a.optionalmarker[0]?s=a.optionalmarker[1]:s===a.optionalmarker[1]?s=a.optionalmarker[0]:s===a.groupmarker[0]?s=a.groupmarker[1]:s===a.groupmarker[1]&&(s=a.groupmarker[0]),s)}var s;return t}(v[0]),v}},u.extendDefaults=function(t){e.extend(!0,u.prototype.defaults,t)},u.extendDefinitions=function(t){e.extend(!0,u.prototype.definitions,t)},u.extendAliases=function(t){e.extend(!0,u.prototype.aliases,t)},u.format=function(e,t,n){return u(t).format(e,n)},u.unmask=function(e,t){return u(t).unmaskedvalue(e)},u.isValid=function(e,t){return u(t).isValid(e)},u.remove=function(t){"string"==typeof t&&(t=n.getElementById(t)||n.querySelectorAll(t)),t=t.nodeName?[t]:t,e.each(t,function(e,t){t.inputmask&&t.inputmask.remove()})},u.setValue=function(t,i){"string"==typeof t&&(t=n.getElementById(t)||n.querySelectorAll(t)),t=t.nodeName?[t]:t,e.each(t,function(t,n){n.inputmask?n.inputmask.setValue(i):e(n).trigger("setvalue",[i])})},u.escapeRegex=function(e){return e.replace(new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim"),"\\$1")},u.keyCode={BACKSPACE:8,BACKSPACE_SAFARI:127,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,SPACE:32,TAB:9,UP:38,X:88,CONTROL:17},u},a=[n(0),n(5),n(6)],void 0===(r="function"==typeof(i=o)?i.apply(t,a):i)||(e.exports=r)},function(e,t){e.exports=jQuery},function(e,t,n){"use strict";n(4),n(7),n(8),n(9);var i=o(n(1)),a=o(n(0)),r=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}a.default===r.default&&n(10),window.Inputmask=i.default},function(e,t,n){"use strict";var i,a,r,o;"function"==typeof Symbol&&Symbol.iterator;o=function(e,t){var n={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return o(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return o(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return o(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return o(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return o(Date.prototype.getHours.call(this),2)}],hhh:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["[01][0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return o(Date.prototype.getHours.call(this),2)}],HHH:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["[0-5][0-9]",Date.prototype.setMinutes,"minutes",function(){return o(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["[0-5][0-9]",Date.prototype.setSeconds,"seconds",function(){return o(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return o(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return o(Date.prototype.getMilliseconds.call(this),2)}],t:["[ap]"],tt:["[ap]m"],T:["[AP]"],TT:["[AP]M"],Z:[""],o:[""],S:[""]},i={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function a(e){if(!e.tokenizer){var t=[];for(var i in n)-1===t.indexOf(i[0])&&t.push(i[0]);e.tokenizer="("+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function r(e,i,r){for(var o,s="";o=a(r).exec(e);){if(void 0===i)if(n[o[0]])s+="("+n[o[0]][0]+")";else switch(o[0]){case"[":s+="(";break;case"]":s+=")?";break;default:s+=t.escapeRegex(o[0])}else if(n[o[0]])s+=n[o[0]][3].call(i.date);else s+=o[0]}return s}function o(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function s(e,t,i){var r,o,s,l={date:new Date(1,0,1)},u=e;function c(e,t,n){var a,o;"year"===r?(e[r]=(o=4===(a=t).length?a:(new Date).getFullYear().toString().substr(0,4-a.length)+a,i.min&&i.min.year&&i.max&&i.max.year?(o=o.replace(/[^0-9]/g,""),o+=i.min.year==i.max.year?i.min.year.substr(o.length):(""!==o&&0==i.max.year.indexOf(o)?parseInt(i.max.year)-1:parseInt(i.min.year)+1).toString().substr(o.length)):o=o.replace(/[^0-9]/g,"0"),o),e["raw"+r]=t):e[r]=n.min&&t.match(/[^0-9]/)?n.min[r]:t,void 0!==s&&s.call(e.date,"month"==r?parseInt(e[r])-1:e[r])}if("string"==typeof u){for(;o=a(i).exec(t);){var p=u.slice(0,o[0].length);n.hasOwnProperty(o[0])&&(r=n[o[0]][2],s=n[o[0]][1],c(l,p,i)),u=u.slice(p.length)}return l}}return t.extendAliases({datetime:{mask:function(e){return n.S=e.i18n.ordinalSuffix.join("|"),e.inputFormat=i[e.inputFormat]||e.inputFormat,e.displayFormat=i[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=i[e.outputFormat]||e.outputFormat||e.inputFormat,e.placeholder=""!==e.placeholder?e.placeholder:e.inputFormat.replace(/[\[\]]/,""),e.min=s(e.min,e.inputFormat,e),e.max=s(e.max,e.inputFormat,e),e.regex=r(e.inputFormat,void 0,e),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},postValidation:function(e,t,n){var i,a,r,o,l,u=t,c=s(e.join(""),n.inputFormat,n);return u&&c.date.getTime()==c.date.getTime()&&(o=c,l=u,u=(u=(!isFinite(o.day)||"29"==o.day&&!isFinite(o.rawyear)||new Date(o.date.getFullYear(),isFinite(o.month)?o.month:o.date.getMonth()+1,0).getDate()>=o.day)&&l)&&(i=c,r=!0,(a=n).min&&a.min.date.getTime()==a.min.date.getTime()&&(r=a.min.date.getTime()<=i.date.getTime()),r&&a.max&&a.max.date.getTime()==a.max.date.getTime()&&(r=a.max.date.getTime()>=i.date.getTime()),r)),u},onKeyDown:function(n,i,r,s){if(n.ctrlKey&&n.keyCode===t.keyCode.RIGHT){for(var l,u=new Date,c="";l=a(s).exec(s.inputFormat);)"d"===l[0].charAt(0)?c+=o(u.getDate(),l[0].length):"m"===l[0].charAt(0)?c+=o(u.getMonth()+1,l[0].length):"yyyy"===l[0]?c+=u.getFullYear().toString():"y"===l[0].charAt(0)&&(c+=o(u.getYear(),l[0].length));this.inputmask._valueSet(c),e(this).trigger("setvalue")}},onUnMask:function(e,t,n){return r(n.outputFormat,s(e,n.inputFormat,n),n)},casing:function(e,t,n,i){return 0==t.nativeDef.indexOf("[ap]")?e.toLowerCase():0==t.nativeDef.indexOf("[AP]")?e.toUpperCase():e},insertMode:!1}}),t},a=[n(0),n(1)],void 0===(r="function"==typeof(i=o)?i.apply(t,a):i)||(e.exports=r)},function(e,t,n){"use strict";var i;"function"==typeof Symbol&&Symbol.iterator;void 0===(i=function(){return window}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){"use strict";var i;"function"==typeof Symbol&&Symbol.iterator;void 0===(i=function(){return document}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){"use strict";var i,a,r,o;"function"==typeof Symbol&&Symbol.iterator;o=function(e,t){return t.extendDefinitions({A:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",casing:"upper"},"&":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}}),t.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)//.*",autoUnmask:!1},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(e,t,n,i,a){return n-1>-1&&"."!==t.buffer[n-1]?(e=t.buffer[n-1]+e,e=n-2>-1&&"."!==t.buffer[n-2]?t.buffer[n-2]+e:"0"+e):e="00"+e,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)}}},onUnMask:function(e,t,n){return e},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,casing:"lower",onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function(e,t,n){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),t},a=[n(0),n(1)],void 0===(r="function"==typeof(i=o)?i.apply(t,a):i)||(e.exports=r)},function(e,t,n){"use strict";var i,a,r,o;"function"==typeof Symbol&&Symbol.iterator;o=function(e,t,n){function i(e,n){for(var i="",a=0;a<e.length;a++)t.prototype.definitions[e.charAt(a)]||n.definitions[e.charAt(a)]||n.optionalmarker.start===e.charAt(a)||n.optionalmarker.end===e.charAt(a)||n.quantifiermarker.start===e.charAt(a)||n.quantifiermarker.end===e.charAt(a)||n.groupmarker.start===e.charAt(a)||n.groupmarker.end===e.charAt(a)||n.alternatormarker===e.charAt(a)?i+="\\"+e.charAt(a):i+=e.charAt(a);return i}return t.extendAliases({numeric:{mask:function(e){if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=n),e.autoGroup=e.autoGroup&&""!==e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var t=Math.floor(e.integerDigits/e.groupSize),a=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0===a?t-1:t),e.integerDigits<1&&(e.integerDigits="*")}e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&!1===e.integerOptional&&(e.positionCaretOnClick="lvp"),e.definitions[";"]=e.definitions["~"],e.definitions[";"].definitionSymbol="~",!0===e.numericInput&&(e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e.decimalProtect=!1);var r="[+]";if(r+=i(e.prefix,e),!0===e.integerOptional?r+="~{1,"+e.integerDigits+"}":r+="~{"+e.integerDigits+"}",e.digits!==n){var o=e.decimalProtect?":":e.radixPoint,s=e.digits.toString().split(",");isFinite(s[0])&&s[1]&&isFinite(s[1])?r+=o+";{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional?r+="["+o+";{1,"+e.digits+"}]":r+=o+";{"+e.digits+"}")}return r+=i(e.suffix,e),r+="[-]",e.greedy=!1,r},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",preValidation:function(t,i,a,r,o,s){if("-"===a||a===o.negationSymbol.front)return!0===o.allowMinus&&(o.isNegative=o.isNegative===n||!o.isNegative,""===t.join("")||{caret:i,dopost:!0});if(!1===r&&a===o.radixPoint&&o.digits!==n&&(isNaN(o.digits)||parseInt(o.digits)>0)){var l=e.inArray(o.radixPoint,t);if(-1!==l&&s.validPositions[l]!==n)return!0===o.numericInput?i===l:{caret:l+1}}return!0},postValidation:function(i,a,r){var o=r.suffix.split(""),s=r.prefix.split("");if(a.pos===n&&a.caret!==n&&!0!==a.dopost)return a;var l=a.caret!==n?a.caret:a.pos,u=i.slice();r.numericInput&&(l=u.length-l-1,u=u.reverse());var c=u[l];if(c===r.groupSeparator&&(c=u[l+=1]),l===u.length-r.suffix.length-1&&c===r.radixPoint)return a;c!==n&&c!==r.radixPoint&&c!==r.negationSymbol.front&&c!==r.negationSymbol.back&&(u[l]="?",r.prefix.length>0&&l>=(!1===r.isNegative?1:0)&&l<r.prefix.length-1+(!1===r.isNegative?1:0)?s[l-(!1===r.isNegative?1:0)]="?":r.suffix.length>0&&l>=u.length-r.suffix.length-(!1===r.isNegative?1:0)&&(o[l-(u.length-r.suffix.length-(!1===r.isNegative?1:0))]="?")),s=s.join(""),o=o.join("");var p=u.join("").replace(s,"");if(p=(p=(p=(p=p.replace(o,"")).replace(new RegExp(t.escapeRegex(r.groupSeparator),"g"),"")).replace(new RegExp("[-"+t.escapeRegex(r.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(r.negationSymbol.back)+"$"),""),isNaN(r.placeholder)&&(p=p.replace(new RegExp(t.escapeRegex(r.placeholder),"g"),"")),p.length>1&&1!==p.indexOf(r.radixPoint)&&("0"===c&&(p=p.replace(/^\?/g,"")),p=p.replace(/^0/g,"")),p.charAt(0)===r.radixPoint&&""!==r.radixPoint&&!0!==r.numericInput&&(p="0"+p),""!==p){if(p=p.split(""),(!r.digitsOptional||r.enforceDigitsOnBlur&&"blur"===a.event)&&isFinite(r.digits)){var f=e.inArray(r.radixPoint,p),m=e.inArray(r.radixPoint,u);-1===f&&(p.push(r.radixPoint),f=p.length-1);for(var d=1;d<=r.digits;d++)r.digitsOptional&&(!r.enforceDigitsOnBlur||"blur"!==a.event)||p[f+d]!==n&&p[f+d]!==r.placeholder.charAt(0)?-1!==m&&u[m+d]!==n&&(p[f+d]=p[f+d]||u[m+d]):p[f+d]=a.placeholder||r.placeholder.charAt(0)}if(!0!==r.autoGroup||""===r.groupSeparator||c===r.radixPoint&&a.pos===n&&!a.dopost)p=p.join("");else{var h=p[p.length-1]===r.radixPoint&&a.c===r.radixPoint;p=t(function(e,t){var n="";if(n+="("+t.groupSeparator+"*{"+t.groupSize+"}){*}",""!==t.radixPoint){var i=e.join("").split(t.radixPoint);i[1]&&(n+=t.radixPoint+"*{"+i[1].match(/^\d*\??\d*/)[0].length+"}")}return n}(p,r),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(p.join("")),h&&(p+=r.radixPoint),p.charAt(0)===r.groupSeparator&&p.substr(1)}}if(r.isNegative&&"blur"===a.event&&(r.isNegative="0"!==p),p=s+p,p+=o,r.isNegative&&(p=r.negationSymbol.front+p,p+=r.negationSymbol.back),p=p.split(""),c!==n)if(c!==r.radixPoint&&c!==r.negationSymbol.front&&c!==r.negationSymbol.back)(l=e.inArray("?",p))>-1?p[l]=c:l=a.caret||0;else if(c===r.radixPoint||c===r.negationSymbol.front||c===r.negationSymbol.back){var g=e.inArray(c,p);-1!==g&&(l=g)}r.numericInput&&(l=p.length-l-1,p=p.reverse());var v={caret:c===n||a.pos!==n?l+(r.numericInput?-1:1):l,buffer:p,refreshFromBuffer:a.dopost||i.join("")!==p.join("")};return v.refreshFromBuffer?v:a},onBeforeWrite:function(i,a,r,o){if(i)switch(i.type){case"keydown":return o.postValidation(a,{caret:r,dopost:!0},o);case"blur":case"checkval":var s;if((l=o).parseMinMaxOptions===n&&(null!==l.min&&(l.min=l.min.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator),"g"),""),","===l.radixPoint&&(l.min=l.min.replace(l.radixPoint,".")),l.min=isFinite(l.min)?parseFloat(l.min):NaN,isNaN(l.min)&&(l.min=Number.MIN_VALUE)),null!==l.max&&(l.max=l.max.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator),"g"),""),","===l.radixPoint&&(l.max=l.max.replace(l.radixPoint,".")),l.max=isFinite(l.max)?parseFloat(l.max):NaN,isNaN(l.max)&&(l.max=Number.MAX_VALUE)),l.parseMinMaxOptions="done"),null!==o.min||null!==o.max){if(s=o.onUnMask(a.join(""),n,e.extend({},o,{unmaskAsNumber:!0})),null!==o.min&&s<o.min)return o.isNegative=o.min<0,o.postValidation(o.min.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o);if(null!==o.max&&s>o.max)return o.isNegative=o.max<0,o.postValidation(o.max.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o)}return o.postValidation(a,{caret:r,placeholder:"0",event:"blur"},o);case"_checkval":return{caret:r}}var l},regex:{integerPart:function(e,n){return n?new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?"):new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?\\d+")},integerNPart:function(e){return new RegExp("[\\d"+t.escapeRegex(e.groupSeparator)+t.escapeRegex(e.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function(e,i,a,r,o,s){var l;if("k"===e||"m"===e){l={insert:[],c:0};for(var u=0,c="k"===e?2:5;u<c;u++)l.insert.push({pos:a+u,c:0});return l.pos=a+c,l}if(!0===(l=r?new RegExp("[0-9"+t.escapeRegex(o.groupSeparator)+"]").test(e):new RegExp("[0-9]").test(e))){if(!0!==o.numericInput&&i.validPositions[a]!==n&&"~"===i.validPositions[a].match.def&&!s){var p=i.buffer.join(""),f=(p=(p=p.replace(new RegExp("[-"+t.escapeRegex(o.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(o.negationSymbol.back)+"$"),"")).split(o.radixPoint);f.length>1&&(f[1]=f[1].replace(/0/g,o.placeholder.charAt(0))),"0"===f[0]&&(f[0]=f[0].replace(/0/g,o.placeholder.charAt(0))),p=f[0]+o.radixPoint+f[1]||"";var m=i._buffer.join("");for(p===o.radixPoint&&(p=m);null===p.match(t.escapeRegex(m)+"$");)m=m.slice(1);l=(p=(p=p.replace(m,"")).split(""))[a]===n?{pos:a,remove:a}:{pos:a}}}else r||e!==o.radixPoint||i.validPositions[a-1]!==n||(l={insert:{pos:a,c:0},pos:a+1});return l},cardinality:1},"+":{validator:function(e,t,n,i,a){return a.allowMinus&&("-"===e||e===a.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function(e,t,n,i,a){return a.allowMinus&&e===a.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function(e,n,i,a,r){var o="["+t.escapeRegex(r.radixPoint)+"]",s=new RegExp(o).test(e);return s&&n.validPositions[i]&&n.validPositions[i].match.placeholder===r.radixPoint&&(s={caret:i+1}),s},cardinality:1,placeholder:function(e){return e.radixPoint}}},onUnMask:function(e,n,i){if(""===n&&!0===i.nullable)return n;var a=e.replace(i.prefix,"");return a=(a=a.replace(i.suffix,"")).replace(new RegExp(t.escapeRegex(i.groupSeparator),"g"),""),""!==i.placeholder.charAt(0)&&(a=a.replace(new RegExp(i.placeholder.charAt(0),"g"),"0")),i.unmaskAsNumber?(""!==i.radixPoint&&-1!==a.indexOf(i.radixPoint)&&(a=a.replace(t.escapeRegex.call(this,i.radixPoint),".")),a=(a=a.replace(new RegExp("^"+t.escapeRegex(i.negationSymbol.front)),"-")).replace(new RegExp(t.escapeRegex(i.negationSymbol.back)+"$"),""),Number(a)):a},isComplete:function(e,n){var i=e.join("");if(e.slice().join("")!==i)return!1;var a=i.replace(new RegExp("^"+t.escapeRegex(n.negationSymbol.front)),"-");return a=(a=(a=(a=a.replace(new RegExp(t.escapeRegex(n.negationSymbol.back)+"$"),"")).replace(n.prefix,"")).replace(n.suffix,"")).replace(new RegExp(t.escapeRegex(n.groupSeparator)+"([0-9]{3})","g"),"$1"),","===n.radixPoint&&(a=a.replace(t.escapeRegex(n.radixPoint),".")),isFinite(a)},onBeforeMask:function(e,i){if(i.isNegative=n,"number"==typeof e&&""!==i.radixPoint&&(e=e.toString().replace(".",i.radixPoint)),e=e.toString().charAt(e.length-1)===i.radixPoint?e.toString().substr(0,e.length-1):e.toString(),""!==i.radixPoint&&isFinite(e)){var a=e.split("."),r=""!==i.groupSeparator?parseInt(i.groupSize):0;2===a.length&&(a[0].length>r||a[1].length>r||a[0].length<=r&&a[1].length<r)&&(e=e.replace(".",i.radixPoint))}var o=e.match(/,/g),s=e.match(/\./g);if(e=s&&o?s.length>o.length?(e=e.replace(/\./g,"")).replace(",",i.radixPoint):o.length>s.length?(e=e.replace(/,/g,"")).replace(".",i.radixPoint):e.indexOf(".")<e.indexOf(",")?e.replace(/\./g,""):e.replace(/,/g,""):e.replace(new RegExp(t.escapeRegex(i.groupSeparator),"g"),""),0===i.digits&&(-1!==e.indexOf(".")?e=e.substring(0,e.indexOf(".")):-1!==e.indexOf(",")&&(e=e.substring(0,e.indexOf(",")))),""!==i.radixPoint&&isFinite(i.digits)&&-1!==e.indexOf(i.radixPoint)){var l=e.split(i.radixPoint)[1].match(new RegExp("\\d*"))[0];if(parseInt(i.digits)<l.toString().length){var u=Math.pow(10,parseInt(i.digits));e=e.replace(t.escapeRegex(i.radixPoint),"."),e=(e=Math.round(parseFloat(e)*u)/u).toString().replace(".",i.radixPoint)}}return e},onKeyDown:function(n,i,a,r){var o=e(this);if(n.ctrlKey)switch(n.keyCode){case t.keyCode.UP:o.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),o.trigger("setvalue");break;case t.keyCode.DOWN:o.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),o.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}}),t},a=[n(0),n(1)],void 0===(r="function"==typeof(i=o)?i.apply(t,a):i)||(e.exports=r)},function(e,t,n){"use strict";var i,a,r,o;"function"==typeof Symbol&&Symbol.iterator;o=function(e,t){function n(e,t){var n=(e.mask||e).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,""),i=(t.mask||t).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,"");return n.localeCompare(i)}var i=t.prototype.analyseMask;return t.prototype.analyseMask=function(t,n,a){var r={};return a.phoneCodes&&(a.phoneCodes&&a.phoneCodes.length>1e3&&(function e(n,i,a){i=i||"",a=a||r,""!==i&&(a[i]={});for(var o="",s=a[i]||a,l=n.length-1;l>=0;l--)s[o=(t=n[l].mask||n[l]).substr(0,1)]=s[o]||[],s[o].unshift(t.substr(1)),n.splice(l,1);for(var u in s)s[u].length>500&&e(s[u].slice(),u,s)}((t=t.substr(1,t.length-2)).split(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])),t=function t(n){var i="",r=[];for(var o in n)e.isArray(n[o])?1===n[o].length?r.push(o+n[o]):r.push(o+a.groupmarker[0]+n[o].join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1]):r.push(o+t(n[o]));return 1===r.length?i+=r[0]:i+=a.groupmarker[0]+r.join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1],i}(r)),t=t.replace(/9/g,"\\9")),i.call(this,t,n,a)},t.extendAliases({abstractphone:{groupmarker:["<",">"],countrycode:"",phoneCodes:[],keepStatic:"auto",mask:function(e){return e.definitions={"#":t.prototype.definitions[9]},e.phoneCodes.sort(n)},onBeforeMask:function(e,t){var n=e.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(n.indexOf(t.countrycode)>1||-1===n.indexOf(t.countrycode))&&(n="+"+t.countrycode+n),n},onUnMask:function(e,t,n){return e.replace(/[()#-]/g,"")},inputmode:"tel"}}),t},a=[n(0),n(1)],void 0===(r="function"==typeof(i=o)?i.apply(t,a):i)||(e.exports=r)},function(e,t,n){"use strict";var i,a,r,o,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o=function(e,t){return void 0===e.fn.inputmask&&(e.fn.inputmask=function(n,i){var a,r=this[0];if(void 0===i&&(i={}),"string"==typeof n)switch(n){case"unmaskedvalue":return r&&r.inputmask?r.inputmask.unmaskedvalue():e(r).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return r&&r.inputmask?r.inputmask.getemptymask():"";case"hasMaskedValue":return!(!r||!r.inputmask)&&r.inputmask.hasMaskedValue();case"isComplete":return!r||!r.inputmask||r.inputmask.isComplete();case"getmetadata":return r&&r.inputmask?r.inputmask.getmetadata():void 0;case"setvalue":t.setValue(r,i);break;case"option":if("string"!=typeof i)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(i)});if(r&&void 0!==r.inputmask)return r.inputmask.option(i);break;default:return i.alias=n,a=new t(i),this.each(function(){a.mask(this)})}else{if("object"==(void 0===n?"undefined":s(n)))return a=new t(n),void 0===n.mask&&void 0===n.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(n);a.mask(this)}):this.each(function(){a.mask(this)});if(void 0===n)return this.each(function(){(a=new t(i)).mask(this)})}}),e.fn.inputmask},a=[n(2),n(1)],void 0===(r="function"==typeof(i=o)?i.apply(t,a):i)||(e.exports=r)}]);
/* Tabs Function
   ========================================================================= */

(function($) {
    $.fn.tabs = function() {
        this.each(function() {
            $(this).on('click', 'li', function(e) {
                e.preventDefault();
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('.tabs').find('.tab-block').removeClass('active').eq($(this).index()).addClass('active');
            });
        });
    };

})(jQuery);
/**
 * Focus and blur on the input field
 */
var formInput = $('.form__input');

function addClassFn(object) {
    object.parent('.form__element').addClass('form__element--focused');
}

function remClassFn(object) {
    object.parent('.form__element').removeClass('form__element--focused');
}

formInput
    .on('focus', function() {
        addClassFn($(this));
    })
    .on('blur', function() {
        if($(this).val() === '') {
            remClassFn($(this));
        }
    });

formInput.each(function(){
    if($(this).attr('value')) {
        addClassFn($(this));
    }
});

jQuery(document).ready(function($) {
    $hamburger = $('.hamburger');
    $menu = $('.menu');

    enquire.register("screen and (max-width: 768px)", {
        match: function() {

        },
        deferSetup: true,
        setup: function() {
            $hamburger.on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();

                $this = $(this);

                if ($menu.is(':visible')) {
                    hideMenu($hamburger, $menu);
                }
                if (!$menu.is(':visible')) {
                    showMenu($hamburger, $menu);
                }
            });

            // Hide sidebar on page click/tap.
            $(document).on('click touchend', function(event) {
                if ($(event.target).closest($hamburger).length) return;
                hideMenu($hamburger, $menu);
            });
        },
        unmatch: function() {
            $menu.show();
            $(document).off();
        }
    });

    function showMenu(hamburger, menu) {
        hamburger.parent().addClass('show');
        menu.slideDown(200);
    }

    function hideMenu(hamburger, menu) {
        hamburger.parent().removeClass('show');
        menu.slideUp(200);
    }
}); // end ready


jQuery(document).ready(function($) {
    $('.lazyYT').lazyYT();
});

function overlayAddFn() {
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    setTimeout(function() {
        document.body.classList.add('animate');
    }, 100);
    document.body.appendChild(overlay);
}
function overlayRemFn() {
    jQuery(document).ready(function($) {
        $('.overlay').remove();
        $('body').removeClass('animate');
    });
}

jQuery(document).ready(function($) {
    $('.slider-courses').owlCarousel({
        autoplay: true,
        loop: false,
        margin: 0,
        nav: true,
        dots: true,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        navText: ['<svg class="icon icon-angle-left"><use xlink:href="#angle-left"></use></svg>', '<svg class="icon icon-angle-right"><use xlink:href="#angle-right"></use></svg>'],
        responsive: {
            0: {
                items: 1
            },
            769: {
                items: 2
            },
            992: {
                items: 1
            }
        }
    });
}); // end ready


// ======= Go Top =======
(function($) {
    jQuery.fn.scrollToTop = function() {
        $(this).hide();
        if ($(window).scrollTop() != "0") {
            $(this).fadeIn("slow")
        }
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() == "0") {
                $(scrollDiv).fadeOut("slow")
            } else {
                $(scrollDiv).fadeIn("slow")
            }
        });
        $(this).on('click', function(e) {
            e.preventDefault();

            $("html, body").animate({
                scrollTop: 0
            }, 300)
        });
    }
})(jQuery);

jQuery(document).ready(function($) {
    $('.go-top').scrollToTop();
});

/* jQuery Form Styler v1.7.7 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";function t(t,s){this.element=t,this.options=e.extend({},l,s);var i=this.options.locale;void 0!==this.options.locales[i]&&e.extend(this.options,this.options.locales[i]),this.init()}function s(t){if(!e(t.target).parents().hasClass("jq-selectbox")&&"OPTION"!=t.target.nodeName&&e("div.jq-selectbox.opened").length){var s=e("div.jq-selectbox.opened"),l=e("div.jq-selectbox__search input",s),o=e("div.jq-selectbox__dropdown",s),a=s.find("select").data("_"+i).options;a.onSelectClosed.call(s),l.length&&l.val("").keyup(),o.hide().find("li.sel").addClass("selected"),s.removeClass("focused opened dropup dropdown")}}var i="styler",l={idSuffix:"-styler",filePlaceholder:"Файл не выбран",fileBrowse:"Обзор...",fileNumber:"Выбрано файлов: %s",selectPlaceholder:"Выберите...",selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"Совпадений не найдено",selectSearchPlaceholder:"Поиск...",selectVisibleOptions:0,singleSelectzIndex:"100",selectSmartPositioning:!0,locale:"ru",locales:{en:{filePlaceholder:"No file selected",fileBrowse:"Browse...",fileNumber:"Selected files: %s",selectPlaceholder:"Select...",selectSearchNotFound:"No matches found",selectSearchPlaceholder:"Search..."}},onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}};t.prototype={init:function(){function t(){void 0!==i.attr("id")&&""!==i.attr("id")&&(this.id=i.attr("id")+l.idSuffix),this.title=i.attr("title"),this.classes=i.attr("class"),this.data=i.data()}var i=e(this.element),l=this.options,o=!(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)||navigator.userAgent.match(/(Windows\sPhone)/i)),a=!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/(Windows\sPhone)/i));if(i.is(":checkbox")){var d=function(){var s=new t,l=e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(l).prependTo(l),l.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative",overflow:"hidden"}),i.is(":checked")&&l.addClass("checked"),i.is(":disabled")&&l.addClass("disabled"),l.click(function(e){e.preventDefault(),l.is(".disabled")||(i.is(":checked")?(i.prop("checked",!1),l.removeClass("checked")):(i.prop("checked",!0),l.addClass("checked")),i.focus().change())}),i.closest("label").add('label[for="'+i.attr("id")+'"]').on("click.styler",function(t){e(t.target).is("a")||e(t.target).closest(l).length||(l.triggerHandler("click"),t.preventDefault())}),i.on("change.styler",function(){i.is(":checked")?l.addClass("checked"):l.removeClass("checked")}).on("keydown.styler",function(e){32==e.which&&l.click()}).on("focus.styler",function(){l.is(".disabled")||l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")})};d(),i.on("refresh",function(){i.closest("label").add('label[for="'+i.attr("id")+'"]').off(".styler"),i.off(".styler").parent().before(i).remove(),d()})}else if(i.is(":radio")){var r=function(){var s=new t,l=e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(l).prependTo(l),l.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative"}),i.is(":checked")&&l.addClass("checked"),i.is(":disabled")&&l.addClass("disabled"),e.fn.commonParents=function(){var t=this;return t.first().parents().filter(function(){return e(this).find(t).length===t.length})},e.fn.commonParent=function(){return e(this).commonParents().first()},l.click(function(t){if(t.preventDefault(),!l.is(".disabled")){var s=e('input[name="'+i.attr("name")+'"]');s.commonParent().find(s).prop("checked",!1).parent().removeClass("checked"),i.prop("checked",!0).parent().addClass("checked"),i.focus().change()}}),i.closest("label").add('label[for="'+i.attr("id")+'"]').on("click.styler",function(t){e(t.target).is("a")||e(t.target).closest(l).length||(l.triggerHandler("click"),t.preventDefault())}),i.on("change.styler",function(){i.parent().addClass("checked")}).on("focus.styler",function(){l.is(".disabled")||l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")})};r(),i.on("refresh",function(){i.closest("label").add('label[for="'+i.attr("id")+'"]').off(".styler"),i.off(".styler").parent().before(i).remove(),r()})}else if(i.is(":file")){i.css({position:"absolute",top:0,right:0,margin:0,padding:0,opacity:0,fontSize:"100px"});var n=function(){var s=new t,o=i.data("placeholder");void 0===o&&(o=l.filePlaceholder);var a=i.data("browse");void 0!==a&&""!==a||(a=l.fileBrowse);var d=e('<div class="jq-file"><div class="jq-file__name">'+o+'</div><div class="jq-file__browse">'+a+"</div></div>").css({display:"inline-block",position:"relative",overflow:"hidden"}).attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.after(d).appendTo(d),i.is(":disabled")&&d.addClass("disabled"),i.on("change.styler",function(){var t=i.val(),s=e("div.jq-file__name",d);if(i.is("[multiple]")){t="";var a=i[0].files.length;if(a>0){var r=i.data("number");void 0===r&&(r=l.fileNumber),r=r.replace("%s",a),t=r}}s.text(t.replace(/.+[\\\/]/,"")),""===t?(s.text(o),d.removeClass("changed")):d.addClass("changed")}).on("focus.styler",function(){d.addClass("focused")}).on("blur.styler",function(){d.removeClass("focused")}).on("click.styler",function(){d.removeClass("focused")})};n(),i.on("refresh",function(){i.off(".styler").parent().before(i).remove(),n()})}else if(i.is('input[type="number"]')){var c=function(){var s=new t,l=e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.after(l).prependTo(l).wrap('<div class="jq-number__field"></div>'),i.is(":disabled")&&l.addClass("disabled");var o,a,d,r=null,n=null;void 0!==i.attr("min")&&(o=i.attr("min")),void 0!==i.attr("max")&&(a=i.attr("max")),d=void 0!==i.attr("step")&&e.isNumeric(i.attr("step"))?Number(i.attr("step")):Number(1);var c=function(t){var s,l=i.val();e.isNumeric(l)||(l=0,i.val("0")),t.is(".minus")?s=Number(l)-d:t.is(".plus")&&(s=Number(l)+d);var r=(d.toString().split(".")[1]||[]).length;if(r>0){for(var n="1";n.length<=r;)n+="0";s=Math.round(s*n)/n}e.isNumeric(o)&&e.isNumeric(a)?s>=o&&a>=s&&i.val(s):e.isNumeric(o)&&!e.isNumeric(a)?s>=o&&i.val(s):!e.isNumeric(o)&&e.isNumeric(a)?a>=s&&i.val(s):i.val(s)};l.is(".disabled")||(l.on("mousedown","div.jq-number__spin",function(){var t=e(this);c(t),r=setTimeout(function(){n=setInterval(function(){c(t)},40)},350)}).on("mouseup mouseout","div.jq-number__spin",function(){clearTimeout(r),clearInterval(n)}).on("mouseup","div.jq-number__spin",function(){i.change()}),i.on("focus.styler",function(){l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")}))};c(),i.on("refresh",function(){i.off(".styler").closest(".jq-number").before(i).remove(),c()})}else if(i.is("select")){var f=function(){function d(t){t.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(t){var s=null;"mousewheel"==t.type?s=-1*t.originalEvent.wheelDelta:"DOMMouseScroll"==t.type&&(s=40*t.originalEvent.detail),s&&(t.stopPropagation(),t.preventDefault(),e(this).scrollTop(s+e(this).scrollTop()))})}function r(){for(var e=0;e<f.length;e++){var t=f.eq(e),s="",i="",o="",a="",d="",r="",n="",c="",u="",p="disabled",v="selected sel disabled";t.prop("selected")&&(i="selected sel"),t.is(":disabled")&&(i=p),t.is(":selected:disabled")&&(i=v),void 0!==t.attr("id")&&""!==t.attr("id")&&(a=' id="'+t.attr("id")+l.idSuffix+'"'),void 0!==t.attr("title")&&""!==f.attr("title")&&(d=' title="'+t.attr("title")+'"'),void 0!==t.attr("class")&&(n=" "+t.attr("class"),u=' data-jqfs-class="'+t.attr("class")+'"');var m=t.data();for(var g in m)""!==m[g]&&(r+=" data-"+g+'="'+m[g]+'"');i+n!==""&&(o=' class="'+i+n+'"'),s="<li"+u+r+o+d+a+">"+t.html()+"</li>",t.parent().is("optgroup")&&(void 0!==t.parent().attr("class")&&(c=" "+t.parent().attr("class")),s="<li"+u+r+' class="'+i+n+" option"+c+'"'+d+a+">"+t.html()+"</li>",t.is(":first-child")&&(s='<li class="optgroup'+c+'">'+t.parent().attr("label")+"</li>"+s)),h+=s}}function n(){var a=new t,n="",c=i.data("placeholder"),u=i.data("search"),p=i.data("search-limit"),v=i.data("search-not-found"),m=i.data("search-placeholder"),g=i.data("z-index"),b=i.data("smart-positioning");void 0===c&&(c=l.selectPlaceholder),void 0!==u&&""!==u||(u=l.selectSearch),void 0!==p&&""!==p||(p=l.selectSearchLimit),void 0!==v&&""!==v||(v=l.selectSearchNotFound),void 0===m&&(m=l.selectSearchPlaceholder),void 0!==g&&""!==g||(g=l.singleSelectzIndex),void 0!==b&&""!==b||(b=l.selectSmartPositioning);var y=e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select" style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').css({display:"inline-block",position:"relative",zIndex:g}).attr({id:a.id,title:a.title}).addClass(a.classes).data(a.data);i.css({margin:0,padding:0}).after(y).prependTo(y);var C=e("div.jq-selectbox__select",y),x=e("div.jq-selectbox__select-text",y),w=f.filter(":selected");r(),u&&(n='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+m+'"></div><div class="jq-selectbox__not-found">'+v+"</div>");var q=e('<div class="jq-selectbox__dropdown" style="position: absolute">'+n+'<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">'+h+"</ul></div>");y.append(q);var _=e("ul",q),j=e("li",q),k=e("input",q),S=e("div.jq-selectbox__not-found",q).hide();j.length<p&&k.parent().hide(),""===f.first().text()&&f.first().is(":selected")&&c!==!1?x.text(c).addClass("placeholder"):x.text(w.text());var T=0,N=0;if(j.css({display:"inline-block"}),j.each(function(){var t=e(this);t.innerWidth()>T&&(T=t.innerWidth(),N=t.width())}),j.css({display:""}),x.is(".placeholder")&&x.width()>T)x.width(x.width());else{var P=y.clone().appendTo("body").width("auto"),A=P.outerWidth();P.remove(),A==y.outerWidth()&&x.width(N)}T>y.width()&&q.width(T),""===f.first().text()&&""!==i.data("placeholder")&&j.first().hide(),i.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0});var D=y.outerHeight(!0),I=k.parent().outerHeight(!0)||0,H=_.css("max-height"),z=j.filter(".selected");z.length<1&&j.first().addClass("selected sel"),void 0===j.data("li-height")&&j.data("li-height",j.outerHeight());var K=q.css("top");if("auto"==q.css("left")&&q.css({left:0}),"auto"==q.css("top")&&(q.css({top:D}),K=D),q.hide(),z.length&&(f.first().text()!=w.text()&&y.addClass("changed"),y.data("jqfs-class",z.data("jqfs-class")),y.addClass(z.data("jqfs-class"))),i.is(":disabled"))return y.addClass("disabled"),!1;C.click(function(){if(e("div.jq-selectbox").filter(".opened").length&&l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")),i.focus(),!o){var t=e(window),s=j.data("li-height"),a=y.offset().top,r=t.height()-D-(a-t.scrollTop()),n=i.data("visible-options");void 0!==n&&""!==n||(n=l.selectVisibleOptions);var c=5*s,h=s*n;n>0&&6>n&&(c=h),0===n&&(h="auto");var u=function(){q.height("auto").css({bottom:"auto",top:K});var e=function(){_.css("max-height",Math.floor((r-20-I)/s)*s)};e(),_.css("max-height",h),"none"!=H&&_.css("max-height",H),r<q.outerHeight()+20&&e()},p=function(){q.height("auto").css({top:"auto",bottom:K});var e=function(){_.css("max-height",Math.floor((a-t.scrollTop()-20-I)/s)*s)};e(),_.css("max-height",h),"none"!=H&&_.css("max-height",H),a-t.scrollTop()-20<q.outerHeight()+20&&e()};b===!0||1===b?r>c+I+20?(u(),y.removeClass("dropup").addClass("dropdown")):(p(),y.removeClass("dropdown").addClass("dropup")):b!==!1&&0!==b||r>c+I+20&&(u(),y.removeClass("dropup").addClass("dropdown")),y.offset().left+q.outerWidth()>t.width()&&q.css({left:"auto",right:0}),e("div.jqselect").css({zIndex:g-1}).removeClass("opened"),y.css({zIndex:g}),q.is(":hidden")?(e("div.jq-selectbox__dropdown:visible").hide(),q.show(),y.addClass("opened focused"),l.onSelectOpened.call(y)):(q.hide(),y.removeClass("opened dropup dropdown"),e("div.jq-selectbox").filter(".opened").length&&l.onSelectClosed.call(y)),k.length&&(k.val("").keyup(),S.hide(),k.keyup(function(){var t=e(this).val();j.each(function(){e(this).html().match(new RegExp(".*?"+t+".*?","i"))?e(this).show():e(this).hide()}),""===f.first().text()&&""!==i.data("placeholder")&&j.first().hide(),j.filter(":visible").length<1?S.show():S.hide()})),j.filter(".selected").length&&(""===i.val()?_.scrollTop(0):(_.innerHeight()/s%2!==0&&(s/=2),_.scrollTop(_.scrollTop()+j.filter(".selected").position().top-_.innerHeight()/2+s))),d(_)}}),j.hover(function(){e(this).siblings().removeClass("selected")});var M=j.filter(".selected").text();j.filter(":not(.disabled):not(.optgroup)").click(function(){i.focus();var t=e(this),s=t.text();if(!t.is(".selected")){var o=t.index();o-=t.prevAll(".optgroup").length,t.addClass("selected sel").siblings().removeClass("selected sel"),f.prop("selected",!1).eq(o).prop("selected",!0),M=s,x.text(s),y.data("jqfs-class")&&y.removeClass(y.data("jqfs-class")),y.data("jqfs-class",t.data("jqfs-class")),y.addClass(t.data("jqfs-class")),i.change()}q.hide(),y.removeClass("opened dropup dropdown"),l.onSelectClosed.call(y)}),q.mouseout(function(){e("li.sel",q).addClass("selected")}),i.on("change.styler",function(){x.text(f.filter(":selected").text()).removeClass("placeholder"),j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"),f.first().text()!=j.filter(".selected").text()?y.addClass("changed"):y.removeClass("changed")}).on("focus.styler",function(){y.addClass("focused"),e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",function(){y.removeClass("focused")}).on("keydown.styler keyup.styler",function(e){var t=j.data("li-height");""===i.val()?x.text(c).addClass("placeholder"):x.text(f.filter(":selected").text()),j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"),38!=e.which&&37!=e.which&&33!=e.which&&36!=e.which||(""===i.val()?_.scrollTop(0):_.scrollTop(_.scrollTop()+j.filter(".selected").position().top)),40!=e.which&&39!=e.which&&34!=e.which&&35!=e.which||_.scrollTop(_.scrollTop()+j.filter(".selected").position().top-_.innerHeight()+t),13==e.which&&(e.preventDefault(),q.hide(),y.removeClass("opened dropup dropdown"),l.onSelectClosed.call(y))}).on("keydown.styler",function(e){32==e.which&&(e.preventDefault(),C.click())}),s.registered||(e(document).on("click",s),s.registered=!0)}function c(){var s=new t,l=e('<div class="jq-select-multiple jqselect"></div>').css({display:"inline-block",position:"relative"}).attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.css({margin:0,padding:0}).after(l),r(),l.append("<ul>"+h+"</ul>");var o=e("ul",l).css({position:"relative","overflow-x":"hidden","-webkit-overflow-scrolling":"touch"}),a=e("li",l).attr("unselectable","on"),n=i.attr("size"),c=o.outerHeight(),u=a.outerHeight();void 0!==n&&n>0?o.css({height:u*n}):o.css({height:4*u}),c>l.height()&&(o.css("overflowY","scroll"),d(o),a.filter(".selected").length&&o.scrollTop(o.scrollTop()+a.filter(".selected").position().top)),i.prependTo(l).css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0}),i.is(":disabled")?(l.addClass("disabled"),f.each(function(){e(this).is(":selected")&&a.eq(e(this).index()).addClass("selected")})):(a.filter(":not(.disabled):not(.optgroup)").click(function(t){i.focus();var s=e(this);if(t.ctrlKey||t.metaKey||s.addClass("selected"),t.shiftKey||s.addClass("first"),t.ctrlKey||t.metaKey||t.shiftKey||s.siblings().removeClass("selected first"),(t.ctrlKey||t.metaKey)&&(s.is(".selected")?s.removeClass("selected first"):s.addClass("selected first"),s.siblings().removeClass("first")),t.shiftKey){var l=!1,o=!1;s.siblings().removeClass("selected").siblings(".first").addClass("selected"),s.prevAll().each(function(){e(this).is(".first")&&(l=!0)}),s.nextAll().each(function(){e(this).is(".first")&&(o=!0)}),l&&s.prevAll().each(function(){return e(this).is(".selected")?!1:void e(this).not(".disabled, .optgroup").addClass("selected")}),o&&s.nextAll().each(function(){return e(this).is(".selected")?!1:void e(this).not(".disabled, .optgroup").addClass("selected")}),1==a.filter(".selected").length&&s.addClass("first")}f.prop("selected",!1),a.filter(".selected").each(function(){var t=e(this),s=t.index();t.is(".option")&&(s-=t.prevAll(".optgroup").length),f.eq(s).prop("selected",!0)}),i.change()}),f.each(function(t){e(this).data("optionIndex",t)}),i.on("change.styler",function(){a.removeClass("selected");var t=[];f.filter(":selected").each(function(){t.push(e(this).data("optionIndex"))}),a.not(".optgroup").filter(function(s){return e.inArray(s,t)>-1}).addClass("selected")}).on("focus.styler",function(){l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")}),c>l.height()&&i.on("keydown.styler",function(e){38!=e.which&&37!=e.which&&33!=e.which||o.scrollTop(o.scrollTop()+a.filter(".selected").position().top-u),40!=e.which&&39!=e.which&&34!=e.which||o.scrollTop(o.scrollTop()+a.filter(".selected:last").position().top-o.innerHeight()+2*u)}))}var f=e("option",i),h="";if(i.is("[multiple]")){if(a||o)return;c()}else n()};f(),i.on("refresh",function(){i.off(".styler").parent().before(i).remove(),f()})}else i.is(":reset")&&i.on("click",function(){setTimeout(function(){i.closest("form").find("input, select").trigger("refresh")},1)})},destroy:function(){var t=e(this.element);t.is(":checkbox")||t.is(":radio")?(t.removeData("_"+i).off(".styler refresh").removeAttr("style").parent().before(t).remove(),t.closest("label").add('label[for="'+t.attr("id")+'"]').off(".styler")):t.is('input[type="number"]')?t.removeData("_"+i).off(".styler refresh").closest(".jq-number").before(t).remove():(t.is(":file")||t.is("select"))&&t.removeData("_"+i).off(".styler refresh").removeAttr("style").parent().before(t).remove()}},e.fn[i]=function(s){var l=arguments;if(void 0===s||"object"==typeof s)return this.each(function(){e.data(this,"_"+i)||e.data(this,"_"+i,new t(this,s))}).promise().done(function(){var t=e(this[0]).data("_"+i);t&&t.options.onFormStyled.call()}),this;if("string"==typeof s&&"_"!==s[0]&&"init"!==s){var o;return this.each(function(){var a=e.data(this,"_"+i);a instanceof t&&"function"==typeof a[s]&&(o=a[s].apply(a,Array.prototype.slice.call(l,1)))}),void 0!==o?o:this}},s.registered=!1});
/*!
* lazyYT (lazy load YouTube videos)
* v1.0.1 - 2014-12-30
* (CC) This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
* http://creativecommons.org/licenses/by-sa/4.0/
* Contributors: https://github.com/tylerpearson/lazyYT/graphs/contributors || https://github.com/daugilas/lazyYT/graphs/contributors
* 
* Usage: <div class="lazyYT" data-youtube-id="laknj093n" data-parameters="rel=0">loading...</div>
*/

;(function ($) {
    'use strict';

    function setUp($el, settings) {
        var width = $el.data('width'),
            height = $el.data('height'),
            ratio = ($el.data('ratio')) ? $el.data('ratio') : settings.default_ratio,
            id = $el.data('youtube-id'),
            padding_bottom,
            innerHtml = [],
            $thumb,
            thumb_img,
            loading_text = $el.text() ? $el.text() : settings.loading_text,
            youtube_parameters = $el.data('parameters') || '';
        
        ratio = ratio.split(":");
        
        // width and height might override default_ratio value
        if (typeof width === 'number' && typeof height === 'number') {
          $el.width(width);
          padding_bottom = height + 'px';
        } else if (typeof width === 'number') {
          $el.width(width);
          padding_bottom = (width * ratio[1] / ratio[0]) + 'px';
        } else {
          width = $el.width();
		      
          // no width means that container is fluid and will be the size of its parent
          if (width == 0) {
            width = $el.parent().width();
          }
		      
          padding_bottom = (ratio[1] / ratio[0] * 100) + '%';
        }
        
        //
        // This HTML will be placed inside 'lazyYT' container
        
        innerHtml.push('<div class="ytp-thumbnail">');
        
          // Play button from YouTube (exactly as it is in YouTube)
          innerHtml.push('<div class="ytp-large-play-button"');
          if (width <= 640) innerHtml.push(' style="transform: scale(0.563888888888889);"');
          innerHtml.push('>');
          innerHtml.push('<svg>');
            innerHtml.push('<path fill-rule="evenodd" clip-rule="evenodd" fill="#1F1F1F" class="ytp-large-play-button-svg" d="M84.15,26.4v6.35c0,2.833-0.15,5.967-0.45,9.4c-0.133,1.7-0.267,3.117-0.4,4.25l-0.15,0.95c-0.167,0.767-0.367,1.517-0.6,2.25c-0.667,2.367-1.533,4.083-2.6,5.15c-1.367,1.4-2.967,2.383-4.8,2.95c-0.633,0.2-1.316,0.333-2.05,0.4c-0.767,0.1-1.3,0.167-1.6,0.2c-4.9,0.367-11.283,0.617-19.15,0.75c-2.434,0.034-4.883,0.067-7.35,0.1h-2.95C38.417,59.117,34.5,59.067,30.3,59c-8.433-0.167-14.05-0.383-16.85-0.65c-0.067-0.033-0.667-0.117-1.8-0.25c-0.9-0.133-1.683-0.283-2.35-0.45c-2.066-0.533-3.783-1.5-5.15-2.9c-1.033-1.067-1.9-2.783-2.6-5.15C1.317,48.867,1.133,48.117,1,47.35L0.8,46.4c-0.133-1.133-0.267-2.55-0.4-4.25C0.133,38.717,0,35.583,0,32.75V26.4c0-2.833,0.133-5.95,0.4-9.35l0.4-4.25c0.167-0.966,0.417-2.05,0.75-3.25c0.7-2.333,1.567-4.033,2.6-5.1c1.367-1.434,2.967-2.434,4.8-3c0.633-0.167,1.333-0.3,2.1-0.4c0.4-0.066,0.917-0.133,1.55-0.2c4.9-0.333,11.283-0.567,19.15-0.7C35.65,0.05,39.083,0,42.05,0L45,0.05c2.467,0,4.933,0.034,7.4,0.1c7.833,0.133,14.2,0.367,19.1,0.7c0.3,0.033,0.833,0.1,1.6,0.2c0.733,0.1,1.417,0.233,2.05,0.4c1.833,0.566,3.434,1.566,4.8,3c1.066,1.066,1.933,2.767,2.6,5.1c0.367,1.2,0.617,2.284,0.75,3.25l0.4,4.25C84,20.45,84.15,23.567,84.15,26.4z M33.3,41.4L56,29.6L33.3,17.75V41.4z"></path>');
            innerHtml.push('<polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="33.3,41.4 33.3,17.75 56,29.6"></polygon>');
          innerHtml.push('</svg>');
          innerHtml.push('</div>'); // end of .ytp-large-play-button
        
        innerHtml.push('</div>'); // end of .ytp-thumbnail
        
        // Video title (info bar)
        innerHtml.push('<div class="html5-info-bar">');
        innerHtml.push('<div class="html5-title">');
        innerHtml.push('<div class="html5-title-text-wrapper">');
        innerHtml.push('<a id="lazyYT-title-', id, '" class="html5-title-text" target="_blank" tabindex="3100" href="//www.youtube.com/watch?v=', id, '">');
        innerHtml.push(loading_text);
        innerHtml.push('</a>');
        innerHtml.push('</div>'); // .html5-title
        innerHtml.push('</div>'); // .html5-title-text-wrapper
        innerHtml.push('</div>'); // end of Video title .html5-info-bar

        $el.css({
            'padding-bottom': padding_bottom
        })
          .html(innerHtml.join(''));
        
        if (width > 640) {
          thumb_img = 'maxresdefault.jpg';
        } else if (width > 480) {
          thumb_img = 'sddefault.jpg';
        } else if (width > 320) {
          thumb_img = 'hqdefault.jpg';
        } else if (width > 120) {
          thumb_img = 'mqdefault.jpg';
        } else if (width == 0) { // sometimes it fails on fluid layout
          thumb_img = 'hqdefault.jpg';
        } else {
          thumb_img = 'default.jpg';
        }
        
        $thumb = $el.find('.ytp-thumbnail').css({
            'background-image': ['url(//img.youtube.com/vi/', id, '/', thumb_img, ')'].join('')
        })
          .addClass('lazyYT-image-loaded')
          .on('click', function (e) {
            e.preventDefault();
            if (!$el.hasClass('lazyYT-video-loaded') && $thumb.hasClass('lazyYT-image-loaded')) {
              $el.html('<iframe src="//www.youtube.com/embed/' + id + '?autoplay=1&' + youtube_parameters + '" frameborder="0" allowfullscreen></iframe>')
                .addClass('lazyYT-video-loaded');
            }
          });

        $.getJSON('//gdata.youtube.com/feeds/api/videos/' + id + '?v=2&alt=json', function (data) {
            $el.find('#lazyYT-title-' + id).text(data.entry.title.$t);
        });

    }

    $.fn.lazyYT = function (newSettings) {
      var defaultSettings = {
        loading_text: 'Loading...',
        default_ratio: '16:9',
        callback: null, // ToDO execute callback if given
        container_class: 'lazyYT-container'
      };
      var settings = $.extend(defaultSettings, newSettings);
      
      return this.each(function () {
          var $el = $(this).addClass(settings.container_class);
          setUp($el, settings);
      });
    };

}(jQuery));

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) { 
if (typeof define === 'function' && define.amd) { 
 // AMD. Register as an anonymous module. 
 define(['jquery'], factory); 
 } else if (typeof exports === 'object') { 
 // Node/CommonJS 
 factory(require('jquery')); 
 } else { 
 // Browser globals 
 factory(window.jQuery || window.Zepto); 
 } 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;

		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;

		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},


	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		}

		var eName = 'click.magnificPopup';
		options.mainEl = el;

		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}

		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},

	defaults: {

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);

		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};

/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}

			return template;
		}
	}
});

/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}

					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});

			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery';

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					arrowLeft.click(function() {
						mfp.prev();
					});
					arrowRight.click(function() {
						mfp.next();
					});

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/
 _checkInstance(); }));
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

/* Ajax SimpleSubmit Form Plugin
   ========================================================================= */
(function($) {
    $.fn.simpleSendForm = function(options) {
        // Options
        options = $.extend({
            successTitle: "Спасибо, что выбрали нас!",
            successText: "Мы свяжемся с Вами в ближайшее время.",
            errorTitle: "Сообщение не отправлено!",
            errorSubmit: "Ошибка отправки формы!",
            errorNocaptcha: "Вы не заполнили каптчу",
            errorCaptcha: "Вы не прошли проверку каптчи",
            mailUrl: "../form-submit/submit.php",
            autoClose: false,
            autoCloseDelay: 5000,
            debug: false,
            captcha: false,
            captchaPublicKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
        }, options);

        if(options.captcha) {
            window.onload = function () {
                var addScriptCaptcha = document.createElement('script');
                addScriptCaptcha.src = 'https://www.google.com/recaptcha/api.js';
                document.body.appendChild(addScriptCaptcha);
            };
        }

        // Submit function
        var make = function() {
            var $this = $(this),
                form = $this.find('.form'),
                btn = $this.find('.btn-submit'),
                captcha = $this.find('.recaptcha');

            if(options.captcha) {
                captcha.append('<div class="g-recaptcha" data-sitekey="' + options.captchaPublicKey + '"></div>')
            }

            $(this).submit(function() {
                var data = $(this).serialize();
                function errorRes(errorMessage) {
                    btn.removeClass('progress-bar-animated progress-bar-striped bg-success');
                    $this.append('<div class="form__error alert alert-danger text-center mt-3 mb-0">' + errorMessage + '</div>');
                    setTimeout(function() {
                        $this.find('.form__error').remove();
                    }, 5000);
                }
                $.ajax({
                    url: options.mailUrl,
                    type: "POST",
                    data: data,
                    beforeSend: function() {
                        btn.addClass('progress-bar-animated progress-bar-striped bg-success');
                    },
                    success: function(res) {
                        if (res == 1) {
                            $this[0].reset();
                            if(options.captcha) {
                                grecaptcha.reset();
                            }
                            $this.find('.form__hide-success').slideUp().delay(5000).slideDown();
                            btn.removeClass('progress-bar-animated progress-bar-striped bg-success');
                            $this.find('.form__hide-success').after('<div class="form__sys-message alert alert-success text-center mb-0"></div>');
                            $this.find('.form__sys-message').html('<h4 class="form__success-title alert-heading">' + options.successTitle + '</h4><p class = "form__success-text" >' + options.successText + '</p>');
                            setTimeout(function() {
                                $this.find('.form__sys-message').fadeOut().delay(3000).remove();
                                if (options.autoClose) {
                                    $.magnificPopup.close();
                                }
                            }, options.autoCloseDelay);
                        } else if (res == 2) {
                            errorRes(options.errorNocaptcha);
                        } else if (res == 3) {
                            errorRes(options.errorCaptcha);
                        } else {
                            errorRes(options.errorSubmit);
                        }
                        if(options.debug) {
                            console.log(res);
                        }
                    },
                    error: function(res) {
                        errorRes(options.errorSubmit);
                        if(options.debug) {
                            console.log(res);
                        }
                    }
                });
                return false;
            });
        };

        return this.each(make);
    };
})(jQuery);
/*!
  * Bootstrap util.js v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, global.Util = factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    }
  };
  setTransitionEndSupport();

  return Util;

}));
//# sourceMappingURL=util.js.map

/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return $(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?o['offset'+e]+n['margin'+('Height'===e?'Top':'Left')]+n['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=document.body,t=document.documentElement,o=r(10)&&getComputedStyle(t);return{height:h('Height',e,t,o),width:h('Width',e,t,o)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c():{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&'HTML'===o.nodeName&&(a.top=$(a.top,0),a.left=$(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var y=parseFloat(m.marginTop,10),w=parseFloat(m.marginLeft,10);b.top-=h-y,b.bottom-=h-y,b.left-=c-w,b.right-=c-w,b.marginTop=y,b.marginLeft=w}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function y(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=$(o.clientWidth,window.innerWidth||0),r=$(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function w(e){var n=e.nodeName;return'BODY'===n||'HTML'===n?!1:'fixed'===t(e,'position')||w(o(e))}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=y(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!w(d)){var m=c(),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}return s.left+=i,s.top+=i,s.right-=i,s.bottom-=i,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),n=parseFloat(t.marginLeft)+parseFloat(t.marginRight),i={width:e.offsetWidth+n,height:e.offsetHeight+o};return i}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function I(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function F(){this.state.eventsEnabled||(this.state=I(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function K(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function G(e){return'end'===e?'start':'start'===e?'end':e}function z(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=me.indexOf(e),n=me.slice(o+1).concat(me.slice(0,o));return t?n.reverse():n}function V(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?$(document.documentElement.clientHeight,window.innerHeight||0):$(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function _(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function X(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:_(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var J=Math.min,Q=Math.round,Z=Math.floor,$=Math.max,ee='undefined'!=typeof window&&'undefined'!=typeof document,te=['Edge','Trident','Firefox'],oe=0,ne=0;ne<te.length;ne+=1)if(ee&&0<=navigator.userAgent.indexOf(te[ne])){oe=1;break}var i=ee&&window.Promise,ie=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=ee&&!!(window.MSInputMethodContext&&document.documentMode),pe=ee&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],me=fe.slice(3),he={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ce=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return F.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ce.Utils=('undefined'==typeof window?global:window).PopperUtils,ce.placements=fe,ce.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:X,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=$(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=J(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!q(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,y=t(e.instance.popper),w=parseFloat(y['margin'+f],10),E=parseFloat(y['border'+f+'Width'],10),v=b-e.offsets.popper[m]-w-E;return v=$(J(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,Q(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case he.FLIP:p=[n,i];break;case he.CLOCKWISE:p=z(n);break;case he.COUNTERCLOCKWISE:p=z(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,y=-1!==['top','bottom'].indexOf(n),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),w&&(r=G(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!q(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h={left:Z(i.left),top:Q(i.top),bottom:Q(i.bottom),right:Z(i.right)},c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==g?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==g?-1:1;m[c]=d*y,m[g]=s*w,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),K(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ce});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap dropdown.js v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('popper.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'popper.js', './util.js'], factory) :
  (global = global || self, global.Dropdown = factory(global.jQuery, global.Popper, global.Util));
}(this, function ($, Popper, Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'dropdown';
  var VERSION = '4.3.1';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
    KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic'
  };
  var DefaultType = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);

      var isActive = $(this._menu).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event.SHOW, relatedTarget);
      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName.SHOW);
      $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
    };

    _proto.show = function show() {
      if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED) || $(this._menu).hasClass(ClassName.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      $(this._menu).toggleClass(ClassName.SHOW);
      $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED) || !$(this._menu).hasClass(ClassName.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(this._menu).toggleClass(ClassName.SHOW);
      $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, this.constructor.Default, $(this._element).data(), config);
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        } // Disable Popper.js if we have a static display

      };

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return popperConfig;
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        $(dropdownMenu).removeClass(ClassName.SHOW);
        $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName.SHOW);

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector.VISIBLE_ITEMS));

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Dropdown._jQueryInterface;
  $.fn[NAME].Constructor = Dropdown;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;

}));
//# sourceMappingURL=dropdown.js.map
