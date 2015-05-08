/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*!
 * Copyright 2014 Drifty Co.
 * http://drifty.com/
 *
 * Ionic, v1.0.0-beta.14
 * A powerful HTML5 mobile app framework.
 * http://ionicframework.com/
 *
 * By @maxlynch, @benjsperry, @adamdbradley <3
 *
 * Licensed under the MIT license. Please see LICENSE for more information.
 *
 */

!function(){function e(e,t,n){t!==!1?k.addEventListener(e,Z[e],n):k.removeEventListener(e,Z[e])}function t(e){var t=T(e.target),i=E(t);if(ionic.tap.requiresNativeClick(i)||F)return!1;var r=ionic.tap.pointerCoord(e);n("click",i,r.x,r.y),_(i)}function n(e,t,n,i){var r=document.createEvent("MouseEvents");r.initMouseEvent(e,!0,!0,window,1,0,0,n,i,!1,!1,!1,!1,0,null),r.isIonicTap=!0,t.dispatchEvent(r)}function i(e){return("submit"!=e.target.type||0!==e.detail)&&(ionic.scroll.isScrolling&&ionic.tap.containsOrIsTextInput(e.target)||!e.isIonicTap&&!ionic.tap.requiresNativeClick(e.target))?(e.stopPropagation(),ionic.tap.isLabelWithTextInput(e.target)||e.preventDefault(),!1):void 0}function r(t){if(!t.isIonicTap&&!h(t)){if(H)return t.stopPropagation(),ionic.tap.isTextInput(t.target)&&W===t.target||/^(select|option)$/i.test(t.target.tagName)||t.preventDefault(),!1;F=!1,z=ionic.tap.pointerCoord(t),e("mousemove"),ionic.activator.start(t)}}function o(n){return H?(n.stopPropagation(),n.preventDefault(),!1):h(n)||/^(select|option)$/i.test(n.target.tagName)?!1:(v(n)||t(n),e("mousemove",!1),ionic.activator.end(),void(F=!1))}function s(t){return v(t)?(e("mousemove",!1),ionic.activator.end(),F=!0,!1):void 0}function a(t){if(!h(t)&&(F=!1,d(),z=ionic.tap.pointerCoord(t),e(U),ionic.activator.start(t),ionic.Platform.isIOS()&&ionic.tap.isLabelWithTextInput(t.target))){var n=E(T(t.target));n!==Y&&t.preventDefault()}}function l(e){h(e)||(d(),v(e)||(t(e),/^(select|option)$/i.test(e.target.tagName)&&e.preventDefault()),W=e.target,u())}function c(t){return v(t)?(F=!0,e(U,!1),ionic.activator.end(),!1):void 0}function u(){e(U,!1),ionic.activator.end(),F=!1}function d(){H=!0,clearTimeout(X),X=setTimeout(function(){H=!1},2e3)}function h(e){return e.isTapHandled?!0:(e.isTapHandled=!0,ionic.scroll.isScrolling&&ionic.tap.containsOrIsTextInput(e.target)?(e.preventDefault(),!0):void 0)}function _(e){$=null;var t=!1;"SELECT"==e.tagName?(n("mousedown",e,0,0),e.focus&&e.focus(),t=!0):g()===e?t=!0:/^(input|textarea)$/i.test(e.tagName)||e.isContentEditable?(t=!0,e.focus&&e.focus(),e.value=e.value,H&&($=e)):f(),t&&(g(e),ionic.trigger("ionic.focusin",{target:e},!0))}function f(){var e=g();e&&(/^(input|textarea|select)$/i.test(e.tagName)||e.isContentEditable)&&e.blur(),g(null)}function p(e){H&&ionic.tap.isTextInput(g())&&ionic.tap.isTextInput($)&&$!==e.target&&($.focus(),$=null),ionic.scroll.isScrolling=!1}function m(){g(null)}function g(e){return arguments.length&&(Y=e),Y||document.activeElement}function v(e){if(!e||1!==e.target.nodeType||!z||0===z.x&&0===z.y)return!1;var t=ionic.tap.pointerCoord(e),n=!(!e.target.classList||!e.target.classList.contains||"function"!=typeof e.target.classList.contains),i=n&&e.target.classList.contains("button")?B:q;return Math.abs(z.x-t.x)>i||Math.abs(z.y-t.y)>i}function T(e,t){for(var n=e,i=0;6>i&&n;i++){if("LABEL"===n.tagName)return n;n=n.parentElement}return t!==!1?e:void 0}function E(e){if(e&&"LABEL"===e.tagName){if(e.control)return e.control;if(e.querySelector){var t=e.querySelector("input,textarea,select");if(t)return t}}return e}function S(){C()?(window.addEventListener("native.keyboardshow",b),window.addEventListener("native.keyboardhide",L),window.addEventListener("native.showkeyboard",b),window.addEventListener("native.hidekeyboard",L)):document.body.addEventListener("focusout",L),document.body.addEventListener("ionic.focusin",w),document.body.addEventListener("focusin",w),document.body.addEventListener("orientationchange",I),window.navigator.msPointerEnabled?document.removeEventListener("MSPointerDown",S):document.removeEventListener("touchstart",S)}function b(e){clearTimeout(K),ionic.keyboard.height=e.keyboardHeight}function w(e){e.target&&!e.target.readOnly&&ionic.tap.isTextInput(e.target)&&!ionic.tap.isDateInput(e.target)&&G(e.target)&&(document.addEventListener("keydown",M,!1),document.body.scrollTop=0,document.body.querySelector(".scroll-content").scrollTop=0,j=e.target,y(e))}function y(e){clearTimeout(J),clearTimeout(K),J=setTimeout(function(){if(!(tt+350>Date.now())){tt=Date.now();var t,n=j.getBoundingClientRect(),i=0;Q=setInterval(function(){t=P(),i>10&&(clearInterval(Q),t=275),t&&(clearInterval(Q),D(e.target,n.top,n.bottom,et,t)),i++},100)}},32)}function D(e,t,n,i,r){var o={target:e,elementTop:Math.round(t),elementBottom:Math.round(n),keyboardHeight:r,viewportHeight:i};return o.hasPlugin=C(),o.contentHeight=i-r,o.isElementUnderKeyboard=o.elementBottom>o.contentHeight,ionic.keyboard.isOpen=!0,j=e,ionic.trigger("scrollChildIntoView",o,!0),ionic.requestAnimationFrame(function(){document.body.classList.add(nt)}),window.navigator.msPointerEnabled?document.addEventListener("MSPointerMove",N,!1):document.addEventListener("touchmove",N,!1),o}function L(){clearTimeout(K),K=setTimeout(ionic.keyboard.hide,350)}function x(){A()>et&&(et=A())}function M(e){ionic.scroll.isScrolling&&N(e)}function N(e){"TEXTAREA"!==e.target.tagName&&e.preventDefault()}function I(){var e=A();if(e===et)var t=0,n=setInterval(function(){t>10&&clearInterval(n),e=A(),e!==et&&(ionic.keyboard.landscape=et>e?!0:!1,et=e,clearInterval(n)),t++},50);else et=e}function P(){return ionic.keyboard.height?ionic.keyboard.height:ionic.Platform.isAndroid()?ionic.Platform.isFullScreen?275:A()<et?et-A():0:ionic.Platform.isIOS()?ionic.keyboard.landscape?206:ionic.Platform.isWebView()?260:216:275}function A(){return window.innerHeight||screen.height}function G(e){for(;e;){if(e.classList.contains(it))return!0;e=e.parentElement}return!1}function C(){return!!(window.cordova&&cordova.plugins&&cordova.plugins.Keyboard)}function O(){var e;for(e=0;e<document.head.children.length;e++)if("viewport"==document.head.children[e].name){rt=document.head.children[e];break}if(rt){var t,n=rt.content.toLowerCase().replace(/\s+/g,"").split(",");for(e=0;e<n.length;e++)n[e]&&(t=n[e].split("="),ot[t[0]]=t.length>1?t[1]:"_");R()}}function R(){var e=ot.width,t=ot.height,n=ionic.Platform,i=n.version(),r="device-width",o="device-height",s=ionic.viewport.orientation();delete ot.height,ot.width=r,n.isIPad()?i>7?delete ot.width:n.isWebView()?90==s?ot.height="0":7==i&&(ot.height=o):7>i&&(ot.height="0"):n.isIOS()&&(n.isWebView()?i>7?delete ot.width:7>i?t&&(ot.height="0"):7==i&&(ot.height=o):7>i&&t&&(ot.height="0")),(e!==ot.width||t!==ot.height)&&V()}function V(){var e,t=[];for(e in ot)ot[e]&&t.push(e+("_"==ot[e]?"":"="+ot[e]));rt.content=t.join(", ")}window.ionic=window.ionic||{},window.ionic.views={},window.ionic.version="1.0.0-beta.14",function(e){e.DelegateService=function(e){function t(){return!0}if(e.indexOf("$getByHandle")>-1)throw new Error("Method '$getByHandle' is implicitly added to each delegate service. Do not list it as a method.");return["$log",function(n){function i(e,t){this._instances=e,this.handle=t}function r(){this._instances=[]}function o(e){return function(){var t,i=this.handle,r=arguments,o=0;return this._instances.forEach(function(n){if((!i||i==n.$$delegateHandle)&&n.$$filterFn(n)){o++;var s=n[e].apply(n,r);1===o&&(t=s)}}),!o&&i?n.warn('Delegate for handle "'+i+'" could not find a corresponding element with delegate-handle="'+i+'"! '+e+"() was not called!\nPossible cause: If you are calling "+e+'() immediately, and your element with delegate-handle="'+i+'" is a child of your controller, then your element may not be compiled yet. Put a $timeout around your call to '+e+"() and try again."):t}}return e.forEach(function(e){i.prototype[e]=o(e)}),r.prototype=i.prototype,r.prototype._registerInstance=function(e,n,i){var r=this._instances;return e.$$delegateHandle=n,e.$$filterFn=i||t,r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}},r.prototype.$getByHandle=function(e){return new i(this._instances,e)},new r}]}}(window.ionic),function(e,t,n){function i(){o=!0;for(var e=0;e<r.length;e++)n.requestAnimationFrame(r[e]);r=[],t.removeEventListener("DOMContentLoaded",i)}var r=[],o="complete"===t.readyState||"interactive"===t.readyState;o||t.addEventListener("DOMContentLoaded",i),e._rAF=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(t){e.setTimeout(t,16)}}();var s=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelRequestAnimationFrame;n.DomUtil={requestAnimationFrame:function(t){return e._rAF(t)},cancelAnimationFrame:function(e){s(e)},animationFrameThrottle:function(e){var t,i,r;return function(){t=arguments,r=this,i||(i=!0,n.requestAnimationFrame(function(){e.apply(r,t),i=!1}))}},getPositionInParent:function(e){return{left:e.offsetLeft,top:e.offsetTop}},ready:function(e){o?n.requestAnimationFrame(e):r.push(e)},getTextBounds:function(n){if(t.createRange){var i=t.createRange();if(i.selectNodeContents(n),i.getBoundingClientRect){var r=i.getBoundingClientRect();if(r){var o=e.scrollX,s=e.scrollY;return{top:r.top+s,left:r.left+o,right:r.left+o+r.width,bottom:r.top+s+r.height,width:r.width,height:r.height}}}}return null},getChildIndex:function(e,t){if(t)for(var n,i=e.parentNode.children,r=0,o=0,s=i.length;s>r;r++)if(n=i[r],n.nodeName&&n.nodeName.toLowerCase()==t){if(n==e)return o;o++}return Array.prototype.slice.call(e.parentNode.children).indexOf(e)},swapNodes:function(e,t){t.parentNode.insertBefore(e,t)},elementIsDescendant:function(e,t,n){var i=e;do{if(i===t)return!0;i=i.parentNode}while(i&&i!==n);return!1},getParentWithClass:function(e,t,n){for(n=n||10;e.parentNode&&n--;){if(e.parentNode.classList&&e.parentNode.classList.contains(t))return e.parentNode;e=e.parentNode}return null},getParentOrSelfWithClass:function(e,t,n){for(n=n||10;e&&n--;){if(e.classList&&e.classList.contains(t))return e;e=e.parentNode}return null},rectContains:function(e,t,n,i,r,o){return n>e||e>r?!1:i>t||t>o?!1:!0},blurAll:function(){return t.activeElement&&t.activeElement!=t.body?(t.activeElement.blur(),t.activeElement):null},cachedAttr:function(e,t,n){if(e=e&&e.length&&e[0]||e,e&&e.setAttribute){var i="$attr-"+t;return arguments.length>2?e[i]!==n&&(e.setAttribute(t,n),e[i]=n):"undefined"==typeof e[i]&&(e[i]=e.getAttribute(t)),e[i]}},cachedStyles:function(e,t){if(e=e&&e.length&&e[0]||e,e&&e.style)for(var n in t)e["$style-"+n]!==t[n]&&(e.style[n]=e["$style-"+n]=t[n])}},n.requestAnimationFrame=n.DomUtil.requestAnimationFrame,n.cancelAnimationFrame=n.DomUtil.cancelAnimationFrame,n.animationFrameThrottle=n.DomUtil.animationFrameThrottle}(window,document,ionic),function(e){e.CustomEvent=function(){if("function"==typeof window.CustomEvent)return CustomEvent;var e=function(e,t){var n;t=t||{bubbles:!1,cancelable:!1,detail:void 0};try{n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail)}catch(i){n=document.createEvent("Event");for(var r in t)n[r]=t[r];n.initEvent(e,t.bubbles,t.cancelable)}return n};return e.prototype=window.Event.prototype,e}(),e.EventController={VIRTUALIZED_EVENTS:["tap","swipe","swiperight","swipeleft","drag","hold","release"],trigger:function(t,n,i,r){var o=new e.CustomEvent(t,{detail:n,bubbles:!!i,cancelable:!!r});n&&n.target&&n.target.dispatchEvent&&n.target.dispatchEvent(o)||window.dispatchEvent(o)},on:function(t,n,i){for(var r=i||window,o=0,s=this.VIRTUALIZED_EVENTS.length;s>o;o++)if(t==this.VIRTUALIZED_EVENTS[o]){var a=new e.Gesture(i);return a.on(t,n),a}r.addEventListener(t,n)},off:function(e,t,n){n.removeEventListener(e,t)},onGesture:function(t,n,i,r){var o=new e.Gesture(i,r);return o.on(t,n),o},offGesture:function(e,t,n){e.off(t,n)},handlePopState:function(){}},e.on=function(){e.EventController.on.apply(e.EventController,arguments)},e.off=function(){e.EventController.off.apply(e.EventController,arguments)},e.trigger=e.EventController.trigger,e.onGesture=function(){return e.EventController.onGesture.apply(e.EventController.onGesture,arguments)},e.offGesture=function(){return e.EventController.offGesture.apply(e.EventController.offGesture,arguments)}}(window.ionic),function(e){function t(){if(!e.Gestures.READY){e.Gestures.event.determineEventTypes();for(var t in e.Gestures.gestures)e.Gestures.gestures.hasOwnProperty(t)&&e.Gestures.detection.register(e.Gestures.gestures[t]);e.Gestures.event.onTouch(e.Gestures.DOCUMENT,e.Gestures.EVENT_MOVE,e.Gestures.detection.detect),e.Gestures.event.onTouch(e.Gestures.DOCUMENT,e.Gestures.EVENT_END,e.Gestures.detection.detect),e.Gestures.READY=!0}}e.Gesture=function(t,n){return new e.Gestures.Instance(t,n||{})},e.Gestures={},e.Gestures.defaults={stop_browser_behavior:"disable-user-behavior"},e.Gestures.HAS_POINTEREVENTS=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,e.Gestures.HAS_TOUCHEVENTS="ontouchstart"in window,e.Gestures.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i,e.Gestures.NO_MOUSEEVENTS=e.Gestures.HAS_TOUCHEVENTS&&window.navigator.userAgent.match(e.Gestures.MOBILE_REGEX),e.Gestures.EVENT_TYPES={},e.Gestures.DIRECTION_DOWN="down",e.Gestures.DIRECTION_LEFT="left",e.Gestures.DIRECTION_UP="up",e.Gestures.DIRECTION_RIGHT="right",e.Gestures.POINTER_MOUSE="mouse",e.Gestures.POINTER_TOUCH="touch",e.Gestures.POINTER_PEN="pen",e.Gestures.EVENT_START="start",e.Gestures.EVENT_MOVE="move",e.Gestures.EVENT_END="end",e.Gestures.DOCUMENT=window.document,e.Gestures.plugins={},e.Gestures.READY=!1,e.Gestures.Instance=function(n,i){var r=this;if(null!==n)return t(),this.element=n,this.enabled=!0,this.options=e.Gestures.utils.extend(e.Gestures.utils.extend({},e.Gestures.defaults),i||{}),this.options.stop_browser_behavior&&e.Gestures.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),e.Gestures.event.onTouch(n,e.Gestures.EVENT_START,function(t){r.enabled&&e.Gestures.detection.startDetect(r,t)}),this},e.Gestures.Instance.prototype={on:function(e,t){for(var n=e.split(" "),i=0;i<n.length;i++)this.element.addEventListener(n[i],t,!1);return this},off:function(e,t){for(var n=e.split(" "),i=0;i<n.length;i++)this.element.removeEventListener(n[i],t,!1);return this},trigger:function(t,n){var i=e.Gestures.DOCUMENT.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=n;var r=this.element;return e.Gestures.utils.hasParent(n.target,r)&&(r=n.target),r.dispatchEvent(i),this},enable:function(e){return this.enabled=e,this}};var n=null,i=!1,r=!1;e.Gestures.event={bindDom:function(e,t,n){for(var i=t.split(" "),r=0;r<i.length;r++)e.addEventListener(i[r],n,!1)},onTouch:function(t,o,s){var a=this;this.bindDom(t,e.Gestures.EVENT_TYPES[o],function(l){var c=l.type.toLowerCase();if(!c.match(/mouse/)||!r){c.match(/touch/)||c.match(/pointerdown/)||c.match(/mouse/)&&1===l.which?i=!0:c.match(/mouse/)&&1!==l.which&&(i=!1),c.match(/touch|pointer/)&&(r=!0);var u=0;i&&(e.Gestures.HAS_POINTEREVENTS&&o!=e.Gestures.EVENT_END?u=e.Gestures.PointerEvent.updatePointer(o,l):c.match(/touch/)?u=l.touches.length:r||(u=c.match(/up/)?0:1),u>0&&o==e.Gestures.EVENT_END?o=e.Gestures.EVENT_MOVE:u||(o=e.Gestures.EVENT_END),(u||null===n)&&(n=l),s.call(e.Gestures.detection,a.collectEventData(t,o,a.getTouchList(n,o),l)),e.Gestures.HAS_POINTEREVENTS&&o==e.Gestures.EVENT_END&&(u=e.Gestures.PointerEvent.updatePointer(o,l))),u||(n=null,i=!1,r=!1,e.Gestures.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=e.Gestures.HAS_POINTEREVENTS?e.Gestures.PointerEvent.getEvents():e.Gestures.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_START]=t[0],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_MOVE]=t[1],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_END]=t[2]},getTouchList:function(t){return e.Gestures.HAS_POINTEREVENTS?e.Gestures.PointerEvent.getTouchList():t.touches?t.touches:(t.identifier=1,[t])},collectEventData:function(t,n,i,r){var o=e.Gestures.POINTER_TOUCH;return(r.type.match(/mouse/)||e.Gestures.PointerEvent.matchType(e.Gestures.POINTER_MOUSE,r))&&(o=e.Gestures.POINTER_MOUSE),{center:e.Gestures.utils.getCenter(i),timeStamp:(new Date).getTime(),target:r.target,touches:i,eventType:n,pointerType:o,srcEvent:r,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return e.Gestures.detection.stopDetect()}}}},e.Gestures.PointerEvent={pointers:{},getTouchList:function(){var e=this,t=[];return Object.keys(e.pointers).sort().forEach(function(n){t.push(e.pointers[n])}),t},updatePointer:function(t,n){return t==e.Gestures.EVENT_END?this.pointers={}:(n.identifier=n.pointerId,this.pointers[n.pointerId]=n),Object.keys(this.pointers).length},matchType:function(t,n){if(!n.pointerType)return!1;var i={};return i[e.Gestures.POINTER_MOUSE]=n.pointerType==n.MSPOINTER_TYPE_MOUSE||n.pointerType==e.Gestures.POINTER_MOUSE,i[e.Gestures.POINTER_TOUCH]=n.pointerType==n.MSPOINTER_TYPE_TOUCH||n.pointerType==e.Gestures.POINTER_TOUCH,i[e.Gestures.POINTER_PEN]=n.pointerType==n.MSPOINTER_TYPE_PEN||n.pointerType==e.Gestures.POINTER_PEN,i[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},e.Gestures.utils={extend:function(e,t,n){for(var i in t)void 0!==e[i]&&n||(e[i]=t[i]);return e},hasParent:function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1},getCenter:function(e){for(var t=[],n=[],i=0,r=e.length;r>i;i++)t.push(e[i].pageX),n.push(e[i].pageY);return{pageX:(Math.min.apply(Math,t)+Math.max.apply(Math,t))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(e,t,n){return{x:Math.abs(t/e)||0,y:Math.abs(n/e)||0}},getAngle:function(e,t){var n=t.pageY-e.pageY,i=t.pageX-e.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,n){var i=Math.abs(t.pageX-n.pageX),r=Math.abs(t.pageY-n.pageY);return i>=r?t.pageX-n.pageX>0?e.Gestures.DIRECTION_LEFT:e.Gestures.DIRECTION_RIGHT:t.pageY-n.pageY>0?e.Gestures.DIRECTION_UP:e.Gestures.DIRECTION_DOWN},getDistance:function(e,t){var n=t.pageX-e.pageX,i=t.pageY-e.pageY;return Math.sqrt(n*n+i*i)},getScale:function(e,t){return e.length>=2&&t.length>=2?this.getDistance(t[0],t[1])/this.getDistance(e[0],e[1]):1},getRotation:function(e,t){return e.length>=2&&t.length>=2?this.getAngle(t[1],t[0])-this.getAngle(e[1],e[0]):0},isVertical:function(t){return t==e.Gestures.DIRECTION_UP||t==e.Gestures.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(e,t){e&&e.classList&&(e.classList.add(t),e.onselectstart=function(){return!1})}},e.Gestures.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,n){this.current||(this.stopped=!1,this.current={inst:t,startEvent:e.Gestures.utils.extend({},n),lastEvent:!1,name:""},this.detect(n))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var n=this.current.inst.options,i=0,r=this.gestures.length;r>i;i++){var o=this.gestures[i];if(!this.stopped&&n[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==e.Gestures.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=e.Gestures.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var n=this.current.startEvent;if(n&&(t.touches.length!=n.touches.length||t.touches===n.touches)){n.touches=[];for(var i=0,r=t.touches.length;r>i;i++)n.touches.push(e.Gestures.utils.extend({},t.touches[i]))}var o=t.timeStamp-n.timeStamp,s=t.center.pageX-n.center.pageX,a=t.center.pageY-n.center.pageY,l=e.Gestures.utils.getVelocity(o,s,a);return e.Gestures.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:l.x,velocityY:l.y,distance:e.Gestures.utils.getDistance(n.center,t.center),angle:e.Gestures.utils.getAngle(n.center,t.center),direction:e.Gestures.utils.getDirection(n.center,t.center),scale:e.Gestures.utils.getScale(n.touches,t.touches),rotation:e.Gestures.utils.getRotation(n.touches,t.touches),startEvent:n}),t},register:function(t){var n=t.defaults||{};return void 0===n[t.name]&&(n[t.name]=!0),e.Gestures.utils.extend(e.Gestures.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(e,t){return e.index<t.index?-1:e.index>t.index?1:0}),this.gestures}},e.Gestures.gestures=e.Gestures.gestures||{},e.Gestures.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,n){switch(t.eventType){case e.Gestures.EVENT_START:clearTimeout(this.timer),e.Gestures.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==e.Gestures.detection.current.name&&(e.tap.cancelClick(),n.trigger("hold",t))},n.options.hold_timeout);break;case e.Gestures.EVENT_MOVE:t.distance>n.options.hold_threshold&&clearTimeout(this.timer);break;case e.Gestures.EVENT_END:clearTimeout(this.timer)}}},e.Gestures.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,n){if(t.eventType==e.Gestures.EVENT_END&&"touchcancel"!=t.srcEvent.type){var i=e.Gestures.detection.previous,r=!1;if(t.deltaTime>n.options.tap_max_touchtime||t.distance>n.options.tap_max_distance)return;i&&"tap"==i.name&&t.timeStamp-i.lastEvent.timeStamp<n.options.doubletap_interval&&t.distance<n.options.doubletap_distance&&(n.trigger("doubletap",t),r=!0),(!r||n.options.tap_always)&&(e.Gestures.detection.current.name="tap",n.trigger("tap",t))}}},e.Gestures.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,n){if(t.eventType==e.Gestures.EVENT_END){if(n.options.swipe_max_touches>0&&t.touches.length>n.options.swipe_max_touches)return;(t.velocityX>n.options.swipe_velocity||t.velocityY>n.options.swipe_velocity)&&(n.trigger(this.name,t),n.trigger(this.name+t.direction,t))}}},e.Gestures.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!0,drag_block_vertical:!0,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(e.Gestures.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),void(this.triggered=!1);if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case e.Gestures.EVENT_START:this.triggered=!1;break;case e.Gestures.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&e.Gestures.detection.current.name!=this.name)return;if(e.Gestures.detection.current.name!=this.name&&(e.Gestures.detection.current.name=this.name,n.options.correct_for_drag_min_distance)){var i=Math.abs(n.options.drag_min_distance/t.distance);e.Gestures.detection.current.startEvent.center.pageX+=t.deltaX*i,e.Gestures.detection.current.startEvent.center.pageY+=t.deltaY*i,t=e.Gestures.detection.extendEventData(t)}(e.Gestures.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=e.Gestures.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=e.Gestures.utils.isVertical(r)?t.deltaY<0?e.Gestures.DIRECTION_UP:e.Gestures.DIRECTION_DOWN:t.deltaX<0?e.Gestures.DIRECTION_LEFT:e.Gestures.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&e.Gestures.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!e.Gestures.utils.isVertical(t.direction))&&t.preventDefault();break;case e.Gestures.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},e.Gestures.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(e.Gestures.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),void(this.triggered=!1);if(!(t.touches.length<2))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case e.Gestures.EVENT_START:this.triggered=!1;break;case e.Gestures.EVENT_MOVE:var i=Math.abs(1-t.scale),r=Math.abs(t.rotation);if(i<n.options.transform_min_scale&&r<n.options.transform_min_rotation)return;e.Gestures.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),r>n.options.transform_min_rotation&&n.trigger("rotate",t),i>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(t.scale<1?"in":"out"),t));break;case e.Gestures.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},e.Gestures.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==e.Gestures.POINTER_MOUSE?void t.stopDetect():(n.options.prevent_default&&t.preventDefault(),void(t.eventType==e.Gestures.EVENT_START&&n.trigger(this.name,t)))}},e.Gestures.gestures.Release={name:"release",index:1/0,handler:function(t,n){t.eventType==e.Gestures.EVENT_END&&n.trigger(this.name,t)}}}(window.ionic),function(e,t,n){function i(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}function r(){n.Platform.isWebView()?t.addEventListener("deviceready",o,!1):o(),c&&e.removeEventListener("load",r,!1)}function o(){n.Platform.isReady=!0,n.Platform.detect();for(var e=0;e<h.length;e++)h[e]();h=[],n.trigger("platformready",{target:t}),n.requestAnimationFrame(function(){t.body.classList.add("platform-ready")})}var s="ios",a="android",l="windowsphone";n.Platform={navigator:e.navigator,isReady:!1,isFullScreen:!1,platforms:null,grade:null,ua:navigator.userAgent,ready:function(e){this.isReady?e():h.push(e)},detect:function(){n.Platform._checkPlatforms(),n.requestAnimationFrame(function(){for(var e=0;e<n.Platform.platforms.length;e++)t.body.classList.add("platform-"+n.Platform.platforms[e])})},setGrade:function(e){var i=this.grade;this.grade=e,n.requestAnimationFrame(function(){i&&t.body.classList.remove("grade-"+i),t.body.classList.add("grade-"+e)})},device:function(){return e.device||{}},_checkPlatforms:function(){this.platforms=[];var e="a";this.isWebView()?(this.platforms.push("webview"),this.platforms.push("cordova")):this.platforms.push("browser"),this.isIPad()&&this.platforms.push("ipad");var t=this.platform();if(t){this.platforms.push(t);var n=this.version();if(n){var i=n.toString();i.indexOf(".")>0?i=i.replace(".","_"):i+="_0",this.platforms.push(t+i.split("_")[0]),this.platforms.push(t+i),this.isAndroid()&&4.4>n?e=4>n?"c":"b":this.isWindowsPhone()&&(e="b")}}this.setGrade(e)},isWebView:function(){return!(!e.cordova&&!e.PhoneGap&&!e.phonegap)},isIPad:function(){return/iPad/i.test(n.Platform.navigator.platform)?!0:/iPad/i.test(this.ua)},isIOS:function(){return this.is(s)},isAndroid:function(){return this.is(a)},isWindowsPhone:function(){return this.is(l)},platform:function(){return null===u&&this.setPlatform(this.device().platform),u},setPlatform:function(e){u="undefined"!=typeof e&&null!==e&&e.length?e.toLowerCase():i("ionicplatform")?i("ionicplatform"):this.ua.indexOf("Android")>0?a:this.ua.indexOf("iPhone")>-1||this.ua.indexOf("iPad")>-1||this.ua.indexOf("iPod")>-1?s:this.ua.indexOf("Windows Phone")>-1?l:n.Platform.navigator.platform&&navigator.platform.toLowerCase().split(" ")[0]||""},version:function(){return null===d&&this.setVersion(this.device().version),d},setVersion:function(e){if("undefined"!=typeof e&&null!==e&&(e=e.split("."),e=parseFloat(e[0]+"."+(e.length>1?e[1]:0)),!isNaN(e)))return void(d=e);d=0;var t=this.platform(),n={android:/Android (\d+).(\d+)?/,ios:/OS (\d+)_(\d+)?/,windowsphone:/Windows Phone (\d+).(\d+)?/};n[t]&&(e=this.ua.match(n[t]),e&&e.length>2&&(d=parseFloat(e[1]+"."+e[2])))},is:function(e){if(e=e.toLowerCase(),this.platforms)for(var t=0;t<this.platforms.length;t++)if(this.platforms[t]===e)return!0;var n=this.platform();return n?n===e.toLowerCase():this.ua.toLowerCase().indexOf(e)>=0},exitApp:function(){this.ready(function(){navigator.app&&navigator.app.exitApp&&navigator.app.exitApp()})},showStatusBar:function(i){this._showStatusBar=i,this.ready(function(){n.requestAnimationFrame(function(){n.Platform._showStatusBar?(e.StatusBar&&e.StatusBar.show(),t.body.classList.remove("status-bar-hide")):(e.StatusBar&&e.StatusBar.hide(),t.body.classList.add("status-bar-hide"))})})},fullScreen:function(e,i){this.isFullScreen=e!==!1,n.DomUtil.ready(function(){n.requestAnimationFrame(function(){panes=t.getElementsByClassName("pane");for(var e=0;e<panes.length;e++)panes[e].style.height=panes[e].offsetHeight+"px";n.Platform.isFullScreen?t.body.classList.add("fullscreen"):t.body.classList.remove("fullscreen")}),n.Platform.showStatusBar(i===!0)})}};var c,u=null,d=null,h=[];"complete"===t.readyState?r():(c=!0,e.addEventListener("load",r,!1)),e.addEventListener("load",r,!1)}(this,document,ionic),function(e,t){"use strict";t.CSS={},function(){var n,i=["webkitTransform","transform","-webkit-transform","webkit-transform","-moz-transform","moz-transform","MozTransform","mozTransform","msTransform"];for(n=0;n<i.length;n++)if(void 0!==e.documentElement.style[i[n]]){t.CSS.TRANSFORM=i[n];break}for(i=["webkitTransition","mozTransition","msTransition","transition"],n=0;n<i.length;n++)if(void 0!==e.documentElement.style[i[n]]){t.CSS.TRANSITION=i[n];break}var r=t.CSS.TRANSITION.indexOf("webkit")>-1;t.CSS.TRANSITION_DURATION=(r?"-webkit-":"")+"transition-duration",t.CSS.TRANSITIONEND=(r?"webkitTransitionEnd ":"")+"transitionend"}(),"classList"in e.documentElement||!Object.defineProperty||"undefined"==typeof HTMLElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){function e(e){return function(){var n,i=t.className.split(/\s+/);for(n=0;n<arguments.length;n++)e(i,i.indexOf(arguments[n]),arguments[n]);t.className=i.join(" ")}}var t=this;return{add:e(function(e,t,n){~t||e.push(n)}),remove:e(function(e,t){~t&&e.splice(t,1)}),toggle:e(function(e,t,n){~t?e.splice(t,1):e.push(n)}),contains:function(e){return!!~t.className.split(/\s+/).indexOf(e)},item:function(e){return t.className.split(/\s+/)[e]||null}}}})}(document,ionic);var k,Y,H,X,F,z,$,W,U="touchmove",q=12,B=50,Z={click:i,mousedown:r,mouseup:o,mousemove:s,touchstart:a,touchend:l,touchcancel:u,touchmove:c,pointerdown:a,pointerup:l,pointercancel:u,pointermove:c,MSPointerDown:a,MSPointerUp:l,MSPointerCancel:u,MSPointerMove:c,focusin:p,focusout:m};ionic.tap={register:function(t){return k=t,e("click",!0,!0),e("mouseup"),e("mousedown"),window.navigator.pointerEnabled?(e("pointerdown"),e("pointerup"),e("pointcancel"),U="pointermove"):window.navigator.msPointerEnabled?(e("MSPointerDown"),e("MSPointerUp"),e("MSPointerCancel"),U="MSPointerMove"):(e("touchstart"),e("touchend"),e("touchcancel")),e("focusin"),e("focusout"),function(){for(var t in Z)e(t,!1);k=null,Y=null,H=!1,F=!1,z=null}},ignoreScrollStart:function(e){return e.defaultPrevented||/^(file|range)$/i.test(e.target.type)||"true"==(e.target.dataset?e.target.dataset.preventScroll:e.target.getAttribute("data-prevent-scroll"))||!!/^(object|embed)$/i.test(e.target.tagName)||ionic.tap.isElementTapDisabled(e.target)},isTextInput:function(e){return!!e&&("TEXTAREA"==e.tagName||"true"===e.contentEditable||"INPUT"==e.tagName&&!/^(radio|checkbox|range|file|submit|reset)$/i.test(e.type))},isDateInput:function(e){return!!e&&"INPUT"==e.tagName&&/^(date|time|datetime-local|month|week)$/i.test(e.type)},isLabelWithTextInput:function(e){var t=T(e,!1);return!!t&&ionic.tap.isTextInput(E(t))},containsOrIsTextInput:function(e){return ionic.tap.isTextInput(e)||ionic.tap.isLabelWithTextInput(e)},cloneFocusedInput:function(e){ionic.tap.hasCheckedClone||(ionic.tap.hasCheckedClone=!0,ionic.requestAnimationFrame(function(){var t=e.querySelector(":focus");if(ionic.tap.isTextInput(t)){var n=t.parentElement.querySelector(".cloned-text-input");n||(n=document.createElement(t.tagName),n.placeholder=t.placeholder,n.type=t.type,n.value=t.value,n.style=t.style,n.className=t.className,n.classList.add("cloned-text-input"),n.readOnly=!0,t.isContentEditable&&(n.contentEditable=t.contentEditable,n.innerHTML=t.innerHTML),t.parentElement.insertBefore(n,t),t.style.top=t.offsetTop,t.classList.add("previous-input-focus"))
}}))},hasCheckedClone:!1,removeClonedInputs:function(e){ionic.tap.hasCheckedClone=!1,ionic.requestAnimationFrame(function(){var t,n=e.querySelectorAll(".cloned-text-input"),i=e.querySelectorAll(".previous-input-focus");for(t=0;t<n.length;t++)n[t].parentElement.removeChild(n[t]);for(t=0;t<i.length;t++)i[t].classList.remove("previous-input-focus"),i[t].style.top="",i[t].focus()})},requiresNativeClick:function(e){return!e||e.disabled||/^(file|range)$/i.test(e.type)||/^(object|video)$/i.test(e.tagName)||ionic.tap.isLabelContainingFileInput(e)?!0:ionic.tap.isElementTapDisabled(e)},isLabelContainingFileInput:function(e){var t=T(e);if("LABEL"!==t.tagName)return!1;var n=t.querySelector("input[type=file]");return n&&n.disabled===!1?!0:!1},isElementTapDisabled:function(e){if(e&&1===e.nodeType)for(var t=e;t;){if("true"==(t.dataset?t.dataset.tapDisabled:t.getAttribute("data-tap-disabled")))return!0;t=t.parentElement}return!1},setTolerance:function(e,t){q=e,B=t},cancelClick:function(){F=!0},pointerCoord:function(e){var t={x:0,y:0};if(e){var n=e.touches&&e.touches.length?e.touches:[e],i=e.changedTouches&&e.changedTouches[0]||n[0];i&&(t.x=i.clientX||i.pageX||0,t.y=i.clientY||i.pageY||0)}return t}},ionic.DomUtil.ready(function(){var e="undefined"!=typeof angular?angular:null;(!e||e&&!e.scenario)&&ionic.tap.register(document)}),function(e,t){"use strict";function n(){o={},t.requestAnimationFrame(r)}function i(){for(var e in o)o[e]&&(o[e].classList.add(l),s[e]=o[e]);o={}}function r(){if(t.transition&&t.transition.isActive)return void setTimeout(r,400);for(var e in s)s[e]&&(s[e].classList.remove(l),delete s[e])}var o={},s={},a=0,l="activated";t.activator={start:function(e){t.requestAnimationFrame(function(){if(!(t.scroll&&t.scroll.isScrolling||t.tap.requiresNativeClick(e.target))){for(var n,r=e.target,s=0;6>s&&(r&&1===r.nodeType);s++){if(n&&r.classList.contains("item")){n=r;break}if("A"==r.tagName||"BUTTON"==r.tagName||r.hasAttribute("ng-click")){n=r;break}if(r.classList.contains("button")){n=r;break}if("ION-CONTENT"==r.tagName||r.classList.contains("pane")||"BODY"==r.tagName)break;r=r.parentElement}n&&(o[a]=n,t.requestAnimationFrame(i),a=a>29?0:a+1)}})},end:function(){setTimeout(n,200)}}}(document,ionic),function(e){var t=["0","0","0"];e.Utils={arrayMove:function(e,t,n){if(n>=e.length)for(var i=n-e.length;i--+1;)e.push(void 0);return e.splice(n,0,e.splice(t,1)[0]),e},proxy:function(e,t){var n=Array.prototype.slice.call(arguments,2);return function(){return e.apply(t,n.concat(Array.prototype.slice.call(arguments)))}},debounce:function(e,t,n){var i,r,o,s,a;return function(){o=this,r=arguments,s=new Date;var l=function(){var c=new Date-s;t>c?i=setTimeout(l,t-c):(i=null,n||(a=e.apply(o,r)))},c=n&&!i;return i||(i=setTimeout(l,t)),c&&(a=e.apply(o,r)),a}},throttle:function(e,t,n){var i,r,o,s=null,a=0;n||(n={});var l=function(){a=n.leading===!1?0:Date.now(),s=null,o=e.apply(i,r)};return function(){var c=Date.now();a||n.leading!==!1||(a=c);var u=t-(c-a);return i=this,r=arguments,0>=u?(clearTimeout(s),s=null,a=c,o=e.apply(i,r)):s||n.trailing===!1||(s=setTimeout(l,u)),o}},inherit:function(t,n){var i,r=this;i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return r.apply(this,arguments)},e.extend(i,r,n);var o=function(){this.constructor=i};return o.prototype=r.prototype,i.prototype=new o,t&&e.extend(i.prototype,t),i.__super__=r.prototype,i},extend:function(e){for(var t=Array.prototype.slice.call(arguments,1),n=0;n<t.length;n++){var i=t[n];if(i)for(var r in i)e[r]=i[r]}return e},nextUid:function(){for(var e,n=t.length;n;){if(n--,e=t[n].charCodeAt(0),57==e)return t[n]="A",t.join("");if(90!=e)return t[n]=String.fromCharCode(e+1),t.join("");t[n]="0"}return t.unshift("0"),t.join("")},disconnectScope:function(e){if(e&&e.$root!==e){var t=e.$parent;e.$$disconnected=!0,e.$broadcast("$ionic.disconnectScope"),t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e.$parent;e.$$disconnected=!1,e.$broadcast("$ionic.reconnectScope"),e.$$prevSibling=t.$$childTail,t.$$childHead?(t.$$childTail.$$nextSibling=e,t.$$childTail=e):t.$$childHead=t.$$childTail=e}},isScopeDisconnected:function(e){for(var t=e;t;){if(t.$$disconnected)return!0;t=t.$parent}return!1}},e.inherit=e.Utils.inherit,e.extend=e.Utils.extend,e.throttle=e.Utils.throttle,e.proxy=e.Utils.proxy,e.debounce=e.Utils.debounce}(window.ionic);var j,K,J,Q,et=A(),tt=0,nt="keyboard-open",it="scroll";ionic.keyboard={isOpen:!1,height:null,landscape:!1,hide:function(){clearTimeout(J),clearTimeout(K),clearTimeout(Q),ionic.keyboard.isOpen=!1,ionic.trigger("resetScrollView",{target:j},!0),ionic.requestAnimationFrame(function(){document.body.classList.remove(nt)}),window.navigator.msPointerEnabled?document.removeEventListener("MSPointerMove",N):document.removeEventListener("touchmove",N),document.removeEventListener("keydown",M),C()&&cordova.plugins.Keyboard.close()},show:function(){C()&&cordova.plugins.Keyboard.show()}},ionic.Platform.ready(function(){x(),setTimeout(x,999),window.navigator.msPointerEnabled?document.addEventListener("MSPointerDown",S,!1):document.addEventListener("touchstart",S,!1)});var rt,ot={};ionic.viewport={orientation:function(){return window.innerWidth>window.innerHeight?90:0}},ionic.Platform.ready(function(){O(),window.addEventListener("orientationchange",function(){setTimeout(R,1e3)},!1)}),function(e){"use strict";e.views.View=function(){this.initialize.apply(this,arguments)},e.views.View.inherit=e.inherit,e.extend(e.views.View.prototype,{initialize:function(){}})}(window.ionic);var st={effect:{}};!function(e){var t=Date.now||function(){return+new Date},n=60,i=1e3,r={},o=1;st.effect.Animate={requestAnimationFrame:function(){var t=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame,n=!!t;if(t&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString())&&(n=!1),n)return function(e,n){t(e,n)};var i=60,r={},o=0,s=1,a=null,l=+new Date;return function(e){var t=s++;return r[t]=e,o++,null===a&&(a=setInterval(function(){var e=+new Date,t=r;r={},o=0;for(var n in t)t.hasOwnProperty(n)&&(t[n](e),l=e);e-l>2500&&(clearInterval(a),a=null)},1e3/i)),t}}(),stop:function(e){var t=null!=r[e];return t&&(r[e]=null),t},isRunning:function(e){return null!=r[e]},start:function(e,s,a,l,c,u){var d=t(),h=d,_=0,f=0,p=o++;if(u||(u=document.body),p%20===0){var m={};for(var g in r)m[g]=!0;r=m}var v=function(o){var m=o!==!0,g=t();if(!r[p]||s&&!s(p))return r[p]=null,void(a&&a(n-f/((g-d)/i),p,!1));if(m)for(var T=Math.round((g-h)/(i/n))-1,E=0;E<Math.min(T,4);E++)v(!0),f++;l&&(_=(g-d)/l,_>1&&(_=1));var S=c?c(_):_;e(S,g,m)!==!1&&1!==_||!m?m&&(h=g,st.effect.Animate.requestAnimationFrame(v,u)):(r[p]=null,a&&a(n-f/((g-d)/i),p,1===_||null==l))};return r[p]=!0,st.effect.Animate.requestAnimationFrame(v,u),p}}}(this);!function(e){var t=function(){},n=function(e){return Math.pow(e-1,3)+1},i=function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)};e.views.Scroll=e.views.View.inherit({initialize:function(n){var i=this;i.__container=n.el,i.__content=n.el.firstElementChild,setTimeout(function(){i.__container&&i.__content&&(i.__container.scrollTop=0,i.__content.scrollTop=0)}),i.options={scrollingX:!1,scrollbarX:!0,scrollingY:!0,scrollbarY:!0,startX:0,startY:0,wheelDampen:6,minScrollbarSizeX:5,minScrollbarSizeY:5,scrollbarsFade:!0,scrollbarFadeDelay:300,scrollbarResizeFadeDelay:1e3,animating:!0,animationDuration:250,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,deceleration:.97,preventDefault:!1,scrollingComplete:t,penetrationDeceleration:.03,penetrationAcceleration:.08,scrollEventInterval:10,getContentWidth:function(){return Math.max(i.__content.scrollWidth,i.__content.offsetWidth)},getContentHeight:function(){return Math.max(i.__content.scrollHeight,i.__content.offsetHeight+2*i.__content.offsetTop)}};for(var r in n)i.options[r]=n[r];i.hintResize=e.debounce(function(){i.resize()},1e3,!0),i.onScroll=function(){e.scroll.isScrolling?(clearTimeout(i.scrollTimer),i.scrollTimer=setTimeout(i.setScrollStop,80)):setTimeout(i.setScrollStart,50)},i.setScrollStart=function(){e.scroll.isScrolling=Math.abs(e.scroll.lastTop-i.__scrollTop)>1,clearTimeout(i.scrollTimer),i.scrollTimer=setTimeout(i.setScrollStop,80)},i.setScrollStop=function(){e.scroll.isScrolling=!1,e.scroll.lastTop=i.__scrollTop},i.triggerScrollEvent=e.throttle(function(){i.onScroll(),e.trigger("scroll",{scrollTop:i.__scrollTop,scrollLeft:i.__scrollLeft,target:i.__container})},i.options.scrollEventInterval),i.triggerScrollEndEvent=function(){e.trigger("scrollend",{scrollTop:i.__scrollTop,scrollLeft:i.__scrollLeft,target:i.__container})},i.__scrollLeft=i.options.startX,i.__scrollTop=i.options.startY,i.__callback=i.getRenderFn(),i.__initEventHandlers(),i.__createScrollbars()},run:function(){this.resize(),this.__fadeScrollbars("out",this.options.scrollbarResizeFadeDelay)},__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientLeft:0,__clientTop:0,__clientWidth:0,__clientHeight:0,__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__refreshHeight:null,__refreshActive:!1,__refreshActivate:null,__refreshDeactivate:null,__refreshStart:null,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,__maxDecelerationScrollTop:null,__decelerationVelocityX:null,__decelerationVelocityY:null,__transformProperty:null,__perspectiveProperty:null,__indicatorX:null,__indicatorY:null,__scrollbarFadeTimeout:null,__didWaitForSize:null,__sizerTimeout:null,__initEventHandlers:function(){function t(e){return e.touches&&e.touches.length?e.touches:[{pageX:e.pageX,pageY:e.pageY}]}var n=this,i=n.__container;if(n.scrollChildIntoView=function(t){var r;if(!n.isScrolledIntoView){if(e.Platform.isIOS()||e.Platform.isFullScreen){r=i.getBoundingClientRect().bottom;var o=t.detail.viewportHeight-r,s=Math.max(0,t.detail.keyboardHeight-o);i.style.height=i.clientHeight-s+"px",i.style.overflow="visible",n.resize()}n.isScrolledIntoView=!0}if(t.detail.isElementUnderKeyboard){var a;a=e.Platform.isAndroid()&&!e.Platform.isFullScreen?e.Platform.version()<4.4?500:350:80,e.scroll.isScrolling=!0,setTimeout(function(){var o=.5*i.clientHeight;r=i.getBoundingClientRect().bottom;var s=t.detail.elementTop-r,a=s+o;a>0&&(e.tap.cloneFocusedInput(i,n),n.scrollBy(0,a,!0),n.onScroll())},a)}t.stopPropagation()},n.resetScrollView=function(){n.isScrolledIntoView&&(n.isScrolledIntoView=!1,i.style.height="",i.style.overflow="",n.resize(),e.scroll.isScrolling=!1)},i.addEventListener("scrollChildIntoView",n.scrollChildIntoView),i.addEventListener("resetScrollView",n.resetScrollView),n.touchStart=function(i){if(n.startCoordinates=e.tap.pointerCoord(i),!e.tap.ignoreScrollStart(i)){if(n.__isDown=!0,e.tap.containsOrIsTextInput(i.target)||"SELECT"===i.target.tagName)return void(n.__hasStarted=!1);n.__isSelectable=!0,n.__enableScrollY=!0,n.__hasStarted=!0,n.doTouchStart(t(i),i.timeStamp),i.preventDefault()}},n.touchMove=function(r){if(!(!n.__isDown||!n.__isDown&&r.defaultPrevented||"TEXTAREA"===r.target.tagName&&r.target.parentElement.querySelector(":focus"))){if(!n.__hasStarted&&(e.tap.containsOrIsTextInput(r.target)||"SELECT"===r.target.tagName))return n.__hasStarted=!0,n.doTouchStart(t(r),r.timeStamp),void r.preventDefault();if(n.startCoordinates){var o=e.tap.pointerCoord(r);n.__isSelectable&&e.tap.isTextInput(r.target)&&Math.abs(n.startCoordinates.x-o.x)>20&&(n.__enableScrollY=!1,n.__isSelectable=!0),n.__enableScrollY&&Math.abs(n.startCoordinates.y-o.y)>10&&(n.__isSelectable=!1,e.tap.cloneFocusedInput(i,n))}n.doTouchMove(t(r),r.timeStamp,r.scale),n.__isDown=!0}},n.touchMoveBubble=function(e){n.__isDown&&n.options.preventDefault&&e.preventDefault()},n.touchEnd=function(t){n.__isDown&&(n.doTouchEnd(t.timeStamp),n.__isDown=!1,n.__hasStarted=!1,n.__isSelectable=!0,n.__enableScrollY=!0,n.__isDragging||n.__isDecelerating||n.__isAnimating||e.tap.removeClonedInputs(i,n))},"ontouchstart"in window)i.addEventListener("touchstart",n.touchStart,!1),n.options.preventDefault&&i.addEventListener("touchmove",n.touchMoveBubble,!1),document.addEventListener("touchmove",n.touchMove,!1),document.addEventListener("touchend",n.touchEnd,!1),document.addEventListener("touchcancel",n.touchEnd,!1);else if(window.navigator.pointerEnabled)i.addEventListener("pointerdown",n.touchStart,!1),n.options.preventDefault&&i.addEventListener("pointermove",n.touchMoveBubble,!1),document.addEventListener("pointermove",n.touchMove,!1),document.addEventListener("pointerup",n.touchEnd,!1),document.addEventListener("pointercancel",n.touchEnd,!1);else if(window.navigator.msPointerEnabled)i.addEventListener("MSPointerDown",n.touchStart,!1),n.options.preventDefault&&i.addEventListener("MSPointerMove",n.touchMoveBubble,!1),document.addEventListener("MSPointerMove",n.touchMove,!1),document.addEventListener("MSPointerUp",n.touchEnd,!1),document.addEventListener("MSPointerCancel",n.touchEnd,!1);else{var r=!1;n.mouseDown=function(i){e.tap.ignoreScrollStart(i)||"SELECT"===i.target.tagName||(n.doTouchStart(t(i),i.timeStamp),e.tap.isTextInput(i.target)||i.preventDefault(),r=!0)},n.mouseMove=function(e){!r||!r&&e.defaultPrevented||(n.doTouchMove(t(e),e.timeStamp),r=!0)},n.mouseMoveBubble=function(e){r&&n.options.preventDefault&&e.preventDefault()},n.mouseUp=function(e){r&&(n.doTouchEnd(e.timeStamp),r=!1)},n.mouseWheel=e.animationFrameThrottle(function(t){var i=e.DomUtil.getParentOrSelfWithClass(t.target,"ionic-scroll");i===n.__container&&(n.hintResize(),n.scrollBy((t.wheelDeltaX||t.deltaX||0)/n.options.wheelDampen,(-t.wheelDeltaY||t.deltaY||0)/n.options.wheelDampen),n.__fadeScrollbars("in"),clearTimeout(n.__wheelHideBarTimeout),n.__wheelHideBarTimeout=setTimeout(function(){n.__fadeScrollbars("out")},100))}),i.addEventListener("mousedown",n.mouseDown,!1),n.options.preventDefault&&i.addEventListener("mousemove",n.mouseMoveBubble,!1),document.addEventListener("mousemove",n.mouseMove,!1),document.addEventListener("mouseup",n.mouseUp,!1),document.addEventListener("mousewheel",n.mouseWheel,!1),document.addEventListener("wheel",n.mouseWheel,!1)}},__cleanup:function(){var t=this,n=t.__container;n.removeEventListener("touchstart",t.touchStart),n.removeEventListener("touchmove",t.touchMoveBubble),document.removeEventListener("touchmove",t.touchMove),document.removeEventListener("touchend",t.touchEnd),document.removeEventListener("touchcancel",t.touchCancel),n.removeEventListener("pointerdown",t.touchStart),n.removeEventListener("pointermove",t.touchMoveBubble),document.removeEventListener("pointermove",t.touchMove),document.removeEventListener("pointerup",t.touchEnd),document.removeEventListener("pointercancel",t.touchEnd),n.removeEventListener("MSPointerDown",t.touchStart),n.removeEventListener("MSPointerMove",t.touchMoveBubble),document.removeEventListener("MSPointerMove",t.touchMove),document.removeEventListener("MSPointerUp",t.touchEnd),document.removeEventListener("MSPointerCancel",t.touchEnd),n.removeEventListener("mousedown",t.mouseDown),n.removeEventListener("mousemove",t.mouseMoveBubble),document.removeEventListener("mousemove",t.mouseMove),document.removeEventListener("mouseup",t.mouseUp),document.removeEventListener("mousewheel",t.mouseWheel),document.removeEventListener("wheel",t.mouseWheel),n.removeEventListener("scrollChildIntoView",t.scrollChildIntoView),n.removeEventListener("resetScrollView",t.resetScrollView),e.tap.removeClonedInputs(n,t),delete t.__container,delete t.__content,delete t.__indicatorX,delete t.__indicatorY,delete t.options.el,t.__callback=t.scrollChildIntoView=t.resetScrollView=angular.noop,t.mouseMove=t.mouseDown=t.mouseUp=t.mouseWheel=t.touchStart=t.touchMove=t.touchEnd=t.touchCancel=angular.noop,t.resize=t.scrollTo=t.zoomTo=t.__scrollingComplete=angular.noop,n=null},__createScrollbar:function(e){var t=document.createElement("div"),n=document.createElement("div");return n.className="scroll-bar-indicator scroll-bar-fade-out",t.className="h"==e?"scroll-bar scroll-bar-h":"scroll-bar scroll-bar-v",t.appendChild(n),t},__createScrollbars:function(){var e,t,n=this;n.options.scrollingX&&(e={el:n.__createScrollbar("h"),sizeRatio:1},e.indicator=e.el.children[0],n.options.scrollbarX&&n.__container.appendChild(e.el),n.__indicatorX=e),n.options.scrollingY&&(t={el:n.__createScrollbar("v"),sizeRatio:1},t.indicator=t.el.children[0],n.options.scrollbarY&&n.__container.appendChild(t.el),n.__indicatorY=t)},__resizeScrollbars:function(){var t=this;if(t.__indicatorX){var n=Math.max(Math.round(t.__clientWidth*t.__clientWidth/t.__contentWidth),20);n>t.__contentWidth&&(n=0),n!==t.__indicatorX.size&&e.requestAnimationFrame(function(){t.__indicatorX.indicator.style.width=n+"px"}),t.__indicatorX.size=n,t.__indicatorX.minScale=t.options.minScrollbarSizeX/n,t.__indicatorX.maxPos=t.__clientWidth-n,t.__indicatorX.sizeRatio=t.__maxScrollLeft?t.__indicatorX.maxPos/t.__maxScrollLeft:1}if(t.__indicatorY){var i=Math.max(Math.round(t.__clientHeight*t.__clientHeight/t.__contentHeight),20);i>t.__contentHeight&&(i=0),i!==t.__indicatorY.size&&e.requestAnimationFrame(function(){t.__indicatorY&&(t.__indicatorY.indicator.style.height=i+"px")}),t.__indicatorY.size=i,t.__indicatorY.minScale=t.options.minScrollbarSizeY/i,t.__indicatorY.maxPos=t.__clientHeight-i,t.__indicatorY.sizeRatio=t.__maxScrollTop?t.__indicatorY.maxPos/t.__maxScrollTop:1}},__repositionScrollbars:function(){var e,t,n,i,r,o=this,s=0,a=0;if(o.__indicatorX){o.__indicatorY&&(s=10),i=Math.round(o.__indicatorX.sizeRatio*o.__scrollLeft)||0,t=o.__scrollLeft-(o.__maxScrollLeft-s),o.__scrollLeft<0?(widthScale=Math.max(o.__indicatorX.minScale,(o.__indicatorX.size-Math.abs(o.__scrollLeft))/o.__indicatorX.size),i=0,o.__indicatorX.indicator.style[o.__transformOriginProperty]="left center"):t>0?(widthScale=Math.max(o.__indicatorX.minScale,(o.__indicatorX.size-t)/o.__indicatorX.size),i=o.__indicatorX.maxPos-s,o.__indicatorX.indicator.style[o.__transformOriginProperty]="right center"):(i=Math.min(o.__maxScrollLeft,Math.max(0,i)),widthScale=1);var l="translate3d("+i+"px, 0, 0) scaleX("+widthScale+")";o.__indicatorX.transformProp!==l&&(o.__indicatorX.indicator.style[o.__transformProperty]=l,o.__indicatorX.transformProp=l)}if(o.__indicatorY){r=Math.round(o.__indicatorY.sizeRatio*o.__scrollTop)||0,o.__indicatorX&&(a=10),n=o.__scrollTop-(o.__maxScrollTop-a),o.__scrollTop<0?(e=Math.max(o.__indicatorY.minScale,(o.__indicatorY.size-Math.abs(o.__scrollTop))/o.__indicatorY.size),r=0,"center top"!==o.__indicatorY.originProp&&(o.__indicatorY.indicator.style[o.__transformOriginProperty]="center top",o.__indicatorY.originProp="center top")):n>0?(e=Math.max(o.__indicatorY.minScale,(o.__indicatorY.size-n)/o.__indicatorY.size),r=o.__indicatorY.maxPos-a,"center bottom"!==o.__indicatorY.originProp&&(o.__indicatorY.indicator.style[o.__transformOriginProperty]="center bottom",o.__indicatorY.originProp="center bottom")):(r=Math.min(o.__maxScrollTop,Math.max(0,r)),e=1);var c="translate3d(0,"+r+"px, 0) scaleY("+e+")";o.__indicatorY.transformProp!==c&&(o.__indicatorY.indicator.style[o.__transformProperty]=c,o.__indicatorY.transformProp=c)}},__fadeScrollbars:function(e,t){var n=this;if(n.options.scrollbarsFade){var i="scroll-bar-fade-out";n.options.scrollbarsFade===!0&&(clearTimeout(n.__scrollbarFadeTimeout),"in"==e?(n.__indicatorX&&n.__indicatorX.indicator.classList.remove(i),n.__indicatorY&&n.__indicatorY.indicator.classList.remove(i)):n.__scrollbarFadeTimeout=setTimeout(function(){n.__indicatorX&&n.__indicatorX.indicator.classList.add(i),n.__indicatorY&&n.__indicatorY.indicator.classList.add(i)},t||n.options.scrollbarFadeDelay))}},__scrollingComplete:function(){this.options.scrollingComplete(),e.tap.removeClonedInputs(this.__container,this),this.__fadeScrollbars("out")},resize:function(){var e=this;e.__container&&e.options&&e.setDimensions(e.__container.clientWidth,e.__container.clientHeight,e.options.getContentWidth(),e.options.getContentHeight())},getRenderFn:function(){var e,t=this,n=t.__content,i=document.documentElement.style;"MozAppearance"in i?e="gecko":"WebkitAppearance"in i?e="webkit":"string"==typeof navigator.cpuClass&&(e="trident");var r,o={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"}[e],s=document.createElement("div"),a=o+"Perspective",l=o+"Transform",c=o+"TransformOrigin";return t.__perspectiveProperty=l,t.__transformProperty=l,t.__transformOriginProperty=c,s.style[a]!==r?function(e,i,r,o){var s="translate3d("+-e+"px,"+-i+"px,0) scale("+r+")";s!==t.contentTransform&&(n.style[l]=s,t.contentTransform=s),t.__repositionScrollbars(),o||t.triggerScrollEvent()}:s.style[l]!==r?function(e,i,r,o){n.style[l]="translate("+-e+"px,"+-i+"px) scale("+r+")",t.__repositionScrollbars(),o||t.triggerScrollEvent()}:function(e,i,r,o){n.style.marginLeft=e?-e/r+"px":"",n.style.marginTop=i?-i/r+"px":"",n.style.zoom=r||"",t.__repositionScrollbars(),o||t.triggerScrollEvent()}},setDimensions:function(e,t,n,i){var r=this;(e||t||n||i)&&(e===+e&&(r.__clientWidth=e),t===+t&&(r.__clientHeight=t),n===+n&&(r.__contentWidth=n),i===+i&&(r.__contentHeight=i),r.__computeScrollMax(),r.__resizeScrollbars(),r.scrollTo(r.__scrollLeft,r.__scrollTop,!0,null,!0))},setPosition:function(e,t){this.__clientLeft=e||0,this.__clientTop=t||0},setSnapSize:function(e,t){this.__snapWidth=e,this.__snapHeight=t},activatePullToRefresh:function(t,n,i,r,o,s,a){var l=this;l.__refreshHeight=t,l.__refreshActivate=function(){e.requestAnimationFrame(n)},l.__refreshDeactivate=function(){e.requestAnimationFrame(i)},l.__refreshStart=function(){e.requestAnimationFrame(r)},l.__refreshShow=function(){e.requestAnimationFrame(o)},l.__refreshHide=function(){e.requestAnimationFrame(s)},l.__refreshTail=function(){e.requestAnimationFrame(a)},l.__refreshTailTime=100,l.__minSpinTime=600},triggerPullToRefresh:function(){this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,!0);var e=new Date;this.refreshStartTime=e.getTime(),this.__refreshStart&&this.__refreshStart()},finishPullToRefresh:function(){var e=this,t=new Date,n=0;e.refreshStartTime+e.__minSpinTime>t.getTime()&&(n=e.refreshStartTime+e.__minSpinTime-t.getTime()),setTimeout(function(){e.__refreshTail&&e.__refreshTail(),setTimeout(function(){e.__refreshActive=!1,e.__refreshDeactivate&&e.__refreshDeactivate(),e.__refreshHide&&e.__refreshHide(),e.scrollTo(e.__scrollLeft,e.__scrollTop,!0)},e.__refreshTailTime)},n)},getValues:function(){return{left:this.__scrollLeft,top:this.__scrollTop,zoom:this.__zoomLevel}},getScrollMax:function(){return{left:this.__maxScrollLeft,top:this.__maxScrollTop}},zoomTo:function(e,t,n,i){var r=this;if(!r.options.zooming)throw new Error("Zooming is not enabled!");r.__isDecelerating&&(st.effect.Animate.stop(r.__isDecelerating),r.__isDecelerating=!1);var o=r.__zoomLevel;null==n&&(n=r.__clientWidth/2),null==i&&(i=r.__clientHeight/2),e=Math.max(Math.min(e,r.options.maxZoom),r.options.minZoom),r.__computeScrollMax(e);var s=(n+r.__scrollLeft)*e/o-n,a=(i+r.__scrollTop)*e/o-i;s>r.__maxScrollLeft?s=r.__maxScrollLeft:0>s&&(s=0),a>r.__maxScrollTop?a=r.__maxScrollTop:0>a&&(a=0),r.__publish(s,a,e,t)},zoomBy:function(e,t,n,i){this.zoomTo(this.__zoomLevel*e,t,n,i)},scrollTo:function(e,t,n,i,r){var o=this;if(o.__isDecelerating&&(st.effect.Animate.stop(o.__isDecelerating),o.__isDecelerating=!1),null!=i&&i!==o.__zoomLevel){if(!o.options.zooming)throw new Error("Zooming is not enabled!");e*=i,t*=i,o.__computeScrollMax(i)}else i=o.__zoomLevel;o.options.scrollingX?o.options.paging?e=Math.round(e/o.__clientWidth)*o.__clientWidth:o.options.snapping&&(e=Math.round(e/o.__snapWidth)*o.__snapWidth):e=o.__scrollLeft,o.options.scrollingY?o.options.paging?t=Math.round(t/o.__clientHeight)*o.__clientHeight:o.options.snapping&&(t=Math.round(t/o.__snapHeight)*o.__snapHeight):t=o.__scrollTop,e=Math.max(Math.min(o.__maxScrollLeft,e),0),t=Math.max(Math.min(o.__maxScrollTop,t),0),e===o.__scrollLeft&&t===o.__scrollTop&&(n=!1),o.__publish(e,t,i,n,r)},scrollBy:function(e,t,n){var i=this,r=i.__isAnimating?i.__scheduledLeft:i.__scrollLeft,o=i.__isAnimating?i.__scheduledTop:i.__scrollTop;i.scrollTo(r+(e||0),o+(t||0),n)},doMouseZoom:function(e,t,n,i){var r=e>0?.97:1.03;return this.zoomTo(this.__zoomLevel*r,!1,n-this.__clientLeft,i-this.__clientTop)},doTouchStart:function(e,t){var n=this;n.hintResize(),t instanceof Date&&(t=t.valueOf()),"number"!=typeof t&&(t=Date.now()),n.__interruptedAnimation=!0,n.__isDecelerating&&(st.effect.Animate.stop(n.__isDecelerating),n.__isDecelerating=!1,n.__interruptedAnimation=!0),n.__isAnimating&&(st.effect.Animate.stop(n.__isAnimating),n.__isAnimating=!1,n.__interruptedAnimation=!0);var i,r,o=1===e.length;o?(i=e[0].pageX,r=e[0].pageY):(i=Math.abs(e[0].pageX+e[1].pageX)/2,r=Math.abs(e[0].pageY+e[1].pageY)/2),n.__initialTouchLeft=i,n.__initialTouchTop=r,n.__initialTouches=e,n.__zoomLevelStart=n.__zoomLevel,n.__lastTouchLeft=i,n.__lastTouchTop=r,n.__lastTouchMove=t,n.__lastScale=1,n.__enableScrollX=!o&&n.options.scrollingX,n.__enableScrollY=!o&&n.options.scrollingY,n.__isTracking=!0,n.__didDecelerationComplete=!1,n.__isDragging=!o,n.__isSingleTouch=o,n.__positions=[]},doTouchMove:function(e,t,n){t instanceof Date&&(t=t.valueOf()),"number"!=typeof t&&(t=Date.now());var i=this;if(i.__isTracking){var r,o;2===e.length?(r=Math.abs(e[0].pageX+e[1].pageX)/2,o=Math.abs(e[0].pageY+e[1].pageY)/2,!n&&i.options.zooming&&(n=i.__getScale(i.__initialTouches,e))):(r=e[0].pageX,o=e[0].pageY);var s=i.__positions;if(i.__isDragging){var a=r-i.__lastTouchLeft,l=o-i.__lastTouchTop,c=i.__scrollLeft,u=i.__scrollTop,d=i.__zoomLevel;if(null!=n&&i.options.zooming){var h=d;if(d=d/i.__lastScale*n,d=Math.max(Math.min(d,i.options.maxZoom),i.options.minZoom),h!==d){var _=r-i.__clientLeft,f=o-i.__clientTop;c=(_+c)*d/h-_,u=(f+u)*d/h-f,i.__computeScrollMax(d)}}if(i.__enableScrollX){c-=a*i.options.speedMultiplier;var p=i.__maxScrollLeft;(c>p||0>c)&&(i.options.bouncing?c+=a/2*i.options.speedMultiplier:c=c>p?p:0)}if(i.__enableScrollY){u-=l*i.options.speedMultiplier;var m=i.__maxScrollTop;u>m||0>u?i.options.bouncing||i.__refreshHeight&&0>u?(u+=l/2*i.options.speedMultiplier,i.__enableScrollX||null==i.__refreshHeight||(0>u?(i.__refreshHidden=!1,i.__refreshShow()):(i.__refreshHide(),i.__refreshHidden=!0),!i.__refreshActive&&u<=-i.__refreshHeight?(i.__refreshActive=!0,i.__refreshActivate&&i.__refreshActivate()):i.__refreshActive&&u>-i.__refreshHeight&&(i.__refreshActive=!1,i.__refreshDeactivate&&i.__refreshDeactivate()))):u=u>m?m:0:i.__refreshHeight&&!i.__refreshHidden&&(i.__refreshHide(),i.__refreshHidden=!0)}s.length>60&&s.splice(0,30),s.push(c,u,t),i.__publish(c,u,d)}else{var g=i.options.locking?3:0,v=5,T=Math.abs(r-i.__initialTouchLeft),E=Math.abs(o-i.__initialTouchTop);i.__enableScrollX=i.options.scrollingX&&T>=g,i.__enableScrollY=i.options.scrollingY&&E>=g,s.push(i.__scrollLeft,i.__scrollTop,t),i.__isDragging=(i.__enableScrollX||i.__enableScrollY)&&(T>=v||E>=v),i.__isDragging&&(i.__interruptedAnimation=!1,i.__fadeScrollbars("in"))}i.__lastTouchLeft=r,i.__lastTouchTop=o,i.__lastTouchMove=t,i.__lastScale=n}},doTouchEnd:function(t){t instanceof Date&&(t=t.valueOf()),"number"!=typeof t&&(t=Date.now());var n=this;if(n.__isTracking){if(n.__isTracking=!1,n.__isDragging)if(n.__isDragging=!1,n.__isSingleTouch&&n.options.animating&&t-n.__lastTouchMove<=100){for(var i=n.__positions,r=i.length-1,o=r,s=r;s>0&&i[s]>n.__lastTouchMove-100;s-=3)o=s;if(o!==r){var a=i[r]-i[o],l=n.__scrollLeft-i[o-2],c=n.__scrollTop-i[o-1];n.__decelerationVelocityX=l/a*(1e3/60),n.__decelerationVelocityY=c/a*(1e3/60);var u=n.options.paging||n.options.snapping?4:1;(Math.abs(n.__decelerationVelocityX)>u||Math.abs(n.__decelerationVelocityY)>u)&&(n.__refreshActive||n.__startDeceleration(t))}else n.__scrollingComplete()}else t-n.__lastTouchMove>100&&n.__scrollingComplete();if(!n.__isDecelerating)if(n.__refreshActive&&n.__refreshStart){n.__publish(n.__scrollLeft,-n.__refreshHeight,n.__zoomLevel,!0);var d=new Date;n.refreshStartTime=d.getTime(),n.__refreshStart&&n.__refreshStart(),e.Platform.isAndroid()||n.__startDeceleration()}else(n.__interruptedAnimation||n.__isDragging)&&n.__scrollingComplete(),n.scrollTo(n.__scrollLeft,n.__scrollTop,!0,n.__zoomLevel),n.__refreshActive&&(n.__refreshActive=!1,n.__refreshDeactivate&&n.__refreshDeactivate());n.__positions.length=0}},__publish:function(e,t,r,o,s){var a=this,l=a.__isAnimating;if(l&&(st.effect.Animate.stop(l),a.__isAnimating=!1),o&&a.options.animating){a.__scheduledLeft=e,a.__scheduledTop=t,a.__scheduledZoom=r;var c=a.__scrollLeft,u=a.__scrollTop,d=a.__zoomLevel,h=e-c,_=t-u,f=r-d,p=function(e,t,n){n&&(a.__scrollLeft=c+h*e,a.__scrollTop=u+_*e,a.__zoomLevel=d+f*e,a.__callback&&a.__callback(a.__scrollLeft,a.__scrollTop,a.__zoomLevel,s))},m=function(e){return a.__isAnimating===e},g=function(e,t,n){t===a.__isAnimating&&(a.__isAnimating=!1),(a.__didDecelerationComplete||n)&&a.__scrollingComplete(),a.options.zooming&&a.__computeScrollMax()};a.__isAnimating=st.effect.Animate.start(p,m,g,a.options.animationDuration,l?n:i)}else a.__scheduledLeft=a.__scrollLeft=e,a.__scheduledTop=a.__scrollTop=t,a.__scheduledZoom=a.__zoomLevel=r,a.__callback&&a.__callback(e,t,r,s),a.options.zooming&&a.__computeScrollMax()},__computeScrollMax:function(e){var t=this;null==e&&(e=t.__zoomLevel),t.__maxScrollLeft=Math.max(t.__contentWidth*e-t.__clientWidth,0),t.__maxScrollTop=Math.max(t.__contentHeight*e-t.__clientHeight,0),t.__didWaitForSize||t.__maxScrollLeft||t.__maxScrollTop||(t.__didWaitForSize=!0,t.__waitForSize())},__waitForSize:function(){var e=this;clearTimeout(e.__sizerTimeout);var t=function(){e.resize()};t(),e.__sizerTimeout=setTimeout(t,1e3)},__startDeceleration:function(){var e=this;if(e.options.paging){var t=Math.max(Math.min(e.__scrollLeft,e.__maxScrollLeft),0),n=Math.max(Math.min(e.__scrollTop,e.__maxScrollTop),0),i=e.__clientWidth,r=e.__clientHeight;e.__minDecelerationScrollLeft=Math.floor(t/i)*i,e.__minDecelerationScrollTop=Math.floor(n/r)*r,e.__maxDecelerationScrollLeft=Math.ceil(t/i)*i,e.__maxDecelerationScrollTop=Math.ceil(n/r)*r}else e.__minDecelerationScrollLeft=0,e.__minDecelerationScrollTop=0,e.__maxDecelerationScrollLeft=e.__maxScrollLeft,e.__maxDecelerationScrollTop=e.__maxScrollTop,e.__refreshActive&&(e.__minDecelerationScrollTop=-1*e.__refreshHeight);var o=function(t,n,i){e.__stepThroughDeceleration(i)};e.__minVelocityToKeepDecelerating=e.options.snapping?4:.1;var s=function(){var t=Math.abs(e.__decelerationVelocityX)>=e.__minVelocityToKeepDecelerating||Math.abs(e.__decelerationVelocityY)>=e.__minVelocityToKeepDecelerating;return t||(e.__didDecelerationComplete=!0,e.options.bouncing&&!e.__refreshActive&&e.scrollTo(Math.min(Math.max(e.__scrollLeft,0),e.__maxScrollLeft),Math.min(Math.max(e.__scrollTop,0),e.__maxScrollTop),e.__refreshActive)),t},a=function(){e.__isDecelerating=!1,e.__didDecelerationComplete&&e.__scrollingComplete(),e.options.paging&&e.scrollTo(e.__scrollLeft,e.__scrollTop,e.options.snapping)};e.__isDecelerating=st.effect.Animate.start(o,s,a)},__stepThroughDeceleration:function(e){var t=this,n=t.__scrollLeft+t.__decelerationVelocityX,i=t.__scrollTop+t.__decelerationVelocityY;if(!t.options.bouncing){var r=Math.max(Math.min(t.__maxDecelerationScrollLeft,n),t.__minDecelerationScrollLeft);r!==n&&(n=r,t.__decelerationVelocityX=0);var o=Math.max(Math.min(t.__maxDecelerationScrollTop,i),t.__minDecelerationScrollTop);o!==i&&(i=o,t.__decelerationVelocityY=0)}if(e?t.__publish(n,i,t.__zoomLevel):(t.__scrollLeft=n,t.__scrollTop=i),!t.options.paging){var s=t.options.deceleration;
t.__decelerationVelocityX*=s,t.__decelerationVelocityY*=s}if(t.options.bouncing){var a=0,l=0,c=t.options.penetrationDeceleration,u=t.options.penetrationAcceleration;if(n<t.__minDecelerationScrollLeft?a=t.__minDecelerationScrollLeft-n:n>t.__maxDecelerationScrollLeft&&(a=t.__maxDecelerationScrollLeft-n),i<t.__minDecelerationScrollTop?l=t.__minDecelerationScrollTop-i:i>t.__maxDecelerationScrollTop&&(l=t.__maxDecelerationScrollTop-i),0!==a){var d=a*t.__decelerationVelocityX<=t.__minDecelerationScrollLeft;d&&(t.__decelerationVelocityX+=a*c);var h=Math.abs(t.__decelerationVelocityX)<=t.__minVelocityToKeepDecelerating;(!d||h)&&(t.__decelerationVelocityX=a*u)}if(0!==l){var _=l*t.__decelerationVelocityY<=t.__minDecelerationScrollTop;_&&(t.__decelerationVelocityY+=l*c);var f=Math.abs(t.__decelerationVelocityY)<=t.__minVelocityToKeepDecelerating;(!_||f)&&(t.__decelerationVelocityY=l*u)}}},__getDistance:function(e,t){var n=t.pageX-e.pageX,i=t.pageY-e.pageY;return Math.sqrt(n*n+i*i)},__getScale:function(e,t){return e.length>=2&&t.length>=2?this.__getDistance(t[0],t[1])/this.__getDistance(e[0],e[1]):1}}),e.scroll={isScrolling:!1,lastTop:0}}(ionic),function(e){"use strict";var t="item",n="item-content",i="item-sliding",r="item-options",o="item-placeholder",s="item-reordering",a="item-reorder",l=function(){};l.prototype={start:function(){},drag:function(){},end:function(){},isSameItem:function(){return!1}};var c=function(e){this.dragThresholdX=e.dragThresholdX||10,this.el=e.el,this.canSwipe=e.canSwipe};c.prototype=new l,c.prototype.start=function(o){var s,a,l,c;this.canSwipe()&&(s=o.target.classList.contains(n)?o.target:o.target.classList.contains(t)?o.target.querySelector("."+n):e.DomUtil.getParentWithClass(o.target,n),s&&(s.classList.remove(i),l=parseFloat(s.style[e.CSS.TRANSFORM].replace("translate3d(","").split(",")[0])||0,a=s.parentNode.querySelector("."+r),a&&(a.classList.remove("invisible"),c=a.offsetWidth,this._currentDrag={buttons:a,buttonsWidth:c,content:s,startOffsetX:l})))},c.prototype.isSameItem=function(e){return e._lastDrag&&this._currentDrag?this._currentDrag.content==e._lastDrag.content:!1},c.prototype.clean=function(){var t=this._lastDrag;t&&t.content&&(t.content.style[e.CSS.TRANSITION]="",t.content.style[e.CSS.TRANSFORM]="",e.requestAnimationFrame(function(){setTimeout(function(){t.buttons&&t.buttons.classList.add("invisible")},250)}))},c.prototype.drag=e.animationFrameThrottle(function(t){var n;if(this._currentDrag&&(!this._isDragging&&(Math.abs(t.gesture.deltaX)>this.dragThresholdX||Math.abs(this._currentDrag.startOffsetX)>0)&&(this._isDragging=!0),this._isDragging)){n=this._currentDrag.buttonsWidth;var i=Math.min(0,this._currentDrag.startOffsetX+t.gesture.deltaX);-n>i&&(i=Math.min(-n,-n+.4*(t.gesture.deltaX+n))),this._currentDrag.content.style[e.CSS.TRANSFORM]="translate3d("+i+"px, 0, 0)",this._currentDrag.content.style[e.CSS.TRANSITION]="none"}}),c.prototype.end=function(t,n){var i=this;if(!this._currentDrag)return void(n&&n());var r=-this._currentDrag.buttonsWidth;t.gesture.deltaX>-(this._currentDrag.buttonsWidth/2)&&("left"==t.gesture.direction&&Math.abs(t.gesture.velocityX)<.3?r=0:"right"==t.gesture.direction&&(r=0)),e.requestAnimationFrame(function(){if(0===r){i._currentDrag.content.style[e.CSS.TRANSFORM]="";var t=i._currentDrag.buttons;setTimeout(function(){t&&t.classList.add("invisible")},250)}else i._currentDrag.content.style[e.CSS.TRANSFORM]="translate3d("+r+"px, 0, 0)";i._currentDrag.content.style[e.CSS.TRANSITION]="",i._lastDrag||(i._lastDrag={}),angular.extend(i._lastDrag,i._currentDrag),i._currentDrag&&(i._currentDrag.buttons=null,i._currentDrag.content=null),i._currentDrag=null,n&&n()})};var u=function(e){if(this.dragThresholdY=e.dragThresholdY||0,this.onReorder=e.onReorder,this.listEl=e.listEl,this.el=e.el,this.scrollEl=e.scrollEl,this.scrollView=e.scrollView,this.listElTrueTop=0,this.listEl.offsetParent){var t=this.listEl;do this.listElTrueTop+=t.offsetTop,t=t.offsetParent;while(t)}};u.prototype=new l,u.prototype._moveElement=function(t){var n=t.gesture.center.pageY+this.scrollView.getValues().top-this._currentDrag.elementHeight/2-this.listElTrueTop;this.el.style[e.CSS.TRANSFORM]="translate3d(0, "+n+"px, 0)"},u.prototype.deregister=function(){this.listEl=null,this.el=null,this.scrollEl=null,this.scrollView=null},u.prototype.start=function(t){var n=e.DomUtil.getChildIndex(this.el,this.el.nodeName.toLowerCase()),i=this.el.scrollHeight,r=this.el.cloneNode(!0);r.classList.add(o),this.el.parentNode.insertBefore(r,this.el),this.el.classList.add(s),this._currentDrag={elementHeight:i,startIndex:n,placeholder:r,scrollHeight:scroll,list:r.parentNode},this._moveElement(t)},u.prototype.drag=e.animationFrameThrottle(function(t){var n=this;if(this._currentDrag){var i=0,r=t.gesture.center.pageY,o=this.listElTrueTop;if(this.scrollView){var s=this.scrollView.__container;i=this.scrollView.getValues().top;var a=s.offsetTop,l=a-r+this._currentDrag.elementHeight/2,c=r+this._currentDrag.elementHeight/2-a-s.offsetHeight;t.gesture.deltaY<0&&l>0&&i>0&&(this.scrollView.scrollBy(null,-l),e.requestAnimationFrame(function(){n.drag(t)})),t.gesture.deltaY>0&&c>0&&i<this.scrollView.getScrollMax().top&&(this.scrollView.scrollBy(null,c),e.requestAnimationFrame(function(){n.drag(t)}))}!this._isDragging&&Math.abs(t.gesture.deltaY)>this.dragThresholdY&&(this._isDragging=!0),this._isDragging&&(this._moveElement(t),this._currentDrag.currentY=i+r-o)}}),u.prototype._getReorderIndex=function(){for(var e,t=this,n=(this._currentDrag.placeholder,Array.prototype.slice.call(this._currentDrag.placeholder.parentNode.children).filter(function(e){return e.nodeName===t.el.nodeName&&e!==t.el})),i=this._currentDrag.currentY,r=0,o=n.length;o>r;r++)if(e=n[r],r===o-1){if(i>e.offsetTop)return r}else if(0===r){if(i<e.offsetTop+e.offsetHeight)return r}else if(i>e.offsetTop-e.offsetHeight/2&&i<e.offsetTop+e.offsetHeight)return r;return this._currentDrag.startIndex},u.prototype.end=function(t,n){if(!this._currentDrag)return void(n&&n());var i=this._currentDrag.placeholder,r=this._getReorderIndex();this.el.classList.remove(s),this.el.style[e.CSS.TRANSFORM]="",i.parentNode.insertBefore(this.el,i),i.parentNode.removeChild(i),this.onReorder&&this.onReorder(this.el,this._currentDrag.startIndex,r),this._currentDrag={placeholder:null,content:null},this._currentDrag=null,n&&n()},e.views.ListView=e.views.View.inherit({initialize:function(t){var n=this;t=e.extend({onReorder:function(){},virtualRemoveThreshold:-200,virtualAddThreshold:200,canSwipe:function(){return!0}},t),e.extend(this,t),!this.itemHeight&&this.listEl&&(this.itemHeight=this.listEl.children[0]&&parseInt(this.listEl.children[0].style.height,10)),this.onRefresh=t.onRefresh||function(){},this.onRefreshOpening=t.onRefreshOpening||function(){},this.onRefreshHolding=t.onRefreshHolding||function(){},window.ionic.onGesture("release",function(e){n._handleEndDrag(e)},this.el),window.ionic.onGesture("drag",function(e){n._handleDrag(e)},this.el),this._initDrag()},deregister:function(){this.el=null,this.listEl=null,this.scrollEl=null,this.scrollView=null},stopRefreshing:function(){var e=this.el.querySelector(".list-refresher");e.style.height="0"},didScroll:function(e){if(this.isVirtual){var t=this.itemHeight,n=(this.listEl.children.length,e.target.scrollHeight),i=this.el.parentNode.offsetHeight,r=(e.scrollTop,Math.max(0,e.scrollTop+this.virtualRemoveThreshold)),o=Math.min(n,Math.abs(e.scrollTop)+i+this.virtualAddThreshold),s=Math.floor((o-r)/t),a=parseInt(Math.abs(r/t),10),l=parseInt(Math.abs(o/t),10);this._virtualItemsToRemove=Array.prototype.slice.call(this.listEl.children,0,a);{Array.prototype.slice.call(this.listEl.children,a,a+s)}this.renderViewport&&this.renderViewport(r,o,a,l)}},didStopScrolling:function(){if(this.isVirtual)for(var e=0;e<this._virtualItemsToRemove.length;e++){{this._virtualItemsToRemove[e]}this.didHideItem&&this.didHideItem(e)}},clearDragEffects:function(){this._lastDragOp&&(this._lastDragOp.clean&&this._lastDragOp.clean(),this._lastDragOp.deregister&&this._lastDragOp.deregister(),this._lastDragOp=null)},_initDrag:function(){this._lastDragOp&&this._lastDragOp.deregister&&this._lastDragOp.deregister(),this._lastDragOp=this._dragOp,this._dragOp=null},_getItem:function(e){for(;e;){if(e.classList&&e.classList.contains(t))return e;e=e.parentNode}return null},_startDrag:function(t){var n=this;this._isDragging=!1;var i,r=this._lastDragOp;this._didDragUpOrDown&&r instanceof c&&r.clean&&r.clean(),!e.DomUtil.getParentOrSelfWithClass(t.target,a)||"up"!=t.gesture.direction&&"down"!=t.gesture.direction?!this._didDragUpOrDown&&("left"==t.gesture.direction||"right"==t.gesture.direction)&&Math.abs(t.gesture.deltaX)>5&&(i=this._getItem(t.target),i&&i.querySelector(".item-options")&&(this._dragOp=new c({el:this.el,canSwipe:this.canSwipe}),this._dragOp.start(t),t.preventDefault())):(i=this._getItem(t.target),i&&(this._dragOp=new u({listEl:this.el,el:i,scrollEl:this.scrollEl,scrollView:this.scrollView,onReorder:function(e,t,i){n.onReorder&&n.onReorder(e,t,i)}}),this._dragOp.start(t),t.preventDefault())),r&&this._dragOp&&!this._dragOp.isSameItem(r)&&t.defaultPrevented&&r.clean&&r.clean()},_handleEndDrag:function(e){var t=this;this._didDragUpOrDown=!1,this._dragOp&&this._dragOp.end(e,function(){t._initDrag()})},_handleDrag:function(e){Math.abs(e.gesture.deltaY)>5&&(this._didDragUpOrDown=!0),this.isDragging||this._dragOp||this._startDrag(e),this._dragOp&&(e.gesture.srcEvent.preventDefault(),this._dragOp.drag(e))}})}(ionic),function(e){"use strict";e.views.Modal=e.views.View.inherit({initialize:function(t){t=e.extend({focusFirstInput:!1,unfocusOnHide:!0,focusFirstDelay:600,backdropClickToClose:!0,hardwareBackButtonClose:!0},t),e.extend(this,t),this.el=t.el},show:function(){var e=this;e.focusFirstInput&&window.setTimeout(function(){var t=e.el.querySelector("input, textarea");t&&t.focus&&t.focus()},e.focusFirstDelay)},hide:function(){if(this.unfocusOnHide){var e=this.el.querySelectorAll("input, textarea");window.setTimeout(function(){for(var t=0;t<e.length;t++)e[t].blur&&e[t].blur()})}}})}(ionic),function(e){"use strict";e.views.SideMenu=e.views.View.inherit({initialize:function(e){this.el=e.el,this.isEnabled="undefined"==typeof e.isEnabled?!0:e.isEnabled,this.setWidth(e.width)},getFullWidth:function(){return this.width},setWidth:function(e){this.width=e,this.el.style.width=e+"px"},setIsEnabled:function(e){this.isEnabled=e},bringUp:function(){"0"!==this.el.style.zIndex&&(this.el.style.zIndex="0")},pushDown:function(){"-1"!==this.el.style.zIndex&&(this.el.style.zIndex="-1")}}),e.views.SideMenuContent=e.views.View.inherit({initialize:function(t){e.extend(this,{animationClass:"menu-animated",onDrag:function(){},onEndDrag:function(){}},t),e.onGesture("drag",e.proxy(this._onDrag,this),this.el),e.onGesture("release",e.proxy(this._onEndDrag,this),this.el)},_onDrag:function(e){this.onDrag&&this.onDrag(e)},_onEndDrag:function(e){this.onEndDrag&&this.onEndDrag(e)},disableAnimation:function(){this.el.classList.remove(this.animationClass)},enableAnimation:function(){this.el.classList.add(this.animationClass)},getTranslateX:function(){return parseFloat(this.el.style[e.CSS.TRANSFORM].replace("translate3d(","").split(",")[0])},setTranslateX:e.animationFrameThrottle(function(t){this.el.style[e.CSS.TRANSFORM]="translate3d("+t+"px, 0, 0)"})})}(ionic),function(e){"use strict";e.views.Slider=e.views.View.inherit({initialize:function(e){function t(){m=E.children,T=m.length,m.length<2&&(e.continuous=!1),f.transitions&&e.continuous&&m.length<3&&(E.appendChild(m[0].cloneNode(!0)),E.appendChild(E.children[1].cloneNode(!0)),m=E.children),g=new Array(m.length),v=p.offsetWidth||p.getBoundingClientRect().width,E.style.width=m.length*v+"px";for(var t=m.length;t--;){var n=m[t];n.style.width=v+"px",n.setAttribute("data-index",t),f.transitions&&(n.style.left=t*-v+"px",s(t,S>t?-v:t>S?v:0,0))}e.continuous&&f.transitions&&(s(r(S-1),-v,0),s(r(S+1),v,0)),f.transitions||(E.style.left=S*-v+"px"),p.style.visibility="visible",e.slidesChanged&&e.slidesChanged()}function n(){e.continuous?o(S-1):S&&o(S-1)}function i(){e.continuous?o(S+1):S<m.length-1&&o(S+1)}function r(e){return(m.length+e%m.length)%m.length}function o(t,n){if(S!=t){if(f.transitions){var i=Math.abs(S-t)/(S-t);if(e.continuous){var o=i;i=-g[r(t)]/v,i!==o&&(t=-i*m.length+t)}for(var a=Math.abs(S-t)-1;a--;)s(r((t>S?t:S)-a-1),v*i,0);t=r(t),s(S,v*i,n||b),s(t,0,n||b),e.continuous&&s(r(t-i),-(v*i),0)}else t=r(t),l(S*-v,t*-v,n||b);S=t,_(e.callback&&e.callback(S,m[S]))}}function s(e,t,n){a(e,t,n),g[e]=t}function a(e,t,n){var i=m[e],r=i&&i.style;r&&(r.webkitTransitionDuration=r.MozTransitionDuration=r.msTransitionDuration=r.OTransitionDuration=r.transitionDuration=n+"ms",r.webkitTransform="translate("+t+"px,0)translateZ(0)",r.msTransform=r.MozTransform=r.OTransform="translateX("+t+"px)")}function l(t,n,i){if(!i)return void(E.style.left=n+"px");var r=+new Date,o=setInterval(function(){var s=+new Date-r;return s>i?(E.style.left=n+"px",D&&c(),e.transitionEnd&&e.transitionEnd.call(event,S,m[S]),void clearInterval(o)):void(E.style.left=(n-t)*(Math.floor(s/i*100)/100)+t+"px")},4)}function c(){w=setTimeout(i,D)}function u(){D=e.auto||0,clearTimeout(w)}var d=this,h=function(){},_=function(e){setTimeout(e||h,0)},f={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(e){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in t)if(void 0!==e.style[t[n]])return!0;return!1}(document.createElement("swipe"))},p=e.el;if(p){var m,g,v,T,E=p.children[0];e=e||{};var S=parseInt(e.startSlide,10)||0,b=e.speed||300;e.continuous=void 0!==e.continuous?e.continuous:!0;var w,y,D=e.auto||0,L={},x={},M={handleEvent:function(n){switch(("mousedown"==n.type||"mouseup"==n.type||"mousemove"==n.type)&&(n.touches=[{pageX:n.pageX,pageY:n.pageY}]),n.type){case"mousedown":this.start(n);break;case"touchstart":this.start(n);break;case"touchmove":this.touchmove(n);break;case"mousemove":this.touchmove(n);break;case"touchend":_(this.end(n));break;case"mouseup":_(this.end(n));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":_(this.transitionEnd(n));break;case"resize":_(t)}e.stopPropagation&&n.stopPropagation()},start:function(e){var t=e.touches[0];L={x:t.pageX,y:t.pageY,time:+new Date},y=void 0,x={},f.touch?(E.addEventListener("touchmove",this,!1),E.addEventListener("touchend",this,!1)):(E.addEventListener("mousemove",this,!1),E.addEventListener("mouseup",this,!1),document.addEventListener("mouseup",this,!1))},touchmove:function(t){if(!(t.touches.length>1||t.scale&&1!==t.scale||d.slideIsDisabled)){e.disableScroll&&t.preventDefault();var n=t.touches[0];x={x:n.pageX-L.x,y:n.pageY-L.y},"undefined"==typeof y&&(y=!!(y||Math.abs(x.x)<Math.abs(x.y))),y||(t.preventDefault(),u(),e.continuous?(a(r(S-1),x.x+g[r(S-1)],0),a(S,x.x+g[S],0),a(r(S+1),x.x+g[r(S+1)],0)):(x.x=x.x/(!S&&x.x>0||S==m.length-1&&x.x<0?Math.abs(x.x)/v+1:1),a(S-1,x.x+g[S-1],0),a(S,x.x+g[S],0),a(S+1,x.x+g[S+1],0)))}},end:function(){var t=+new Date-L.time,n=Number(t)<250&&Math.abs(x.x)>20||Math.abs(x.x)>v/2,i=!S&&x.x>0||S==m.length-1&&x.x<0;e.continuous&&(i=!1);var o=x.x<0;y||(n&&!i?(o?(e.continuous?(s(r(S-1),-v,0),s(r(S+2),v,0)):s(S-1,-v,0),s(S,g[S]-v,b),s(r(S+1),g[r(S+1)]-v,b),S=r(S+1)):(e.continuous?(s(r(S+1),v,0),s(r(S-2),-v,0)):s(S+1,v,0),s(S,g[S]+v,b),s(r(S-1),g[r(S-1)]+v,b),S=r(S-1)),e.callback&&e.callback(S,m[S])):e.continuous?(s(r(S-1),-v,b),s(S,0,b),s(r(S+1),v,b)):(s(S-1,-v,b),s(S,0,b),s(S+1,v,b))),f.touch?(E.removeEventListener("touchmove",M,!1),E.removeEventListener("touchend",M,!1)):(E.removeEventListener("mousemove",M,!1),E.removeEventListener("mouseup",M,!1),document.removeEventListener("mouseup",M,!1))},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)==S&&(D&&c(),e.transitionEnd&&e.transitionEnd.call(t,S,m[S]))}};this.update=function(){setTimeout(t)},this.setup=function(){t()},this.loop=function(t){return arguments.length&&(e.continuous=!!t),e.continuous},this.enableSlide=function(e){return arguments.length&&(this.slideIsDisabled=!e),!this.slideIsDisabled},this.slide=this.select=function(e,t){u(),o(e,t)},this.prev=this.previous=function(){u(),n()},this.next=function(){u(),i()},this.stop=function(){u()},this.start=function(){c()},this.autoPlay=function(e){!D||0>D?u():(D=e,c())},this.currentIndex=this.selected=function(){return S},this.slidesCount=this.count=function(){return T},this.kill=function(){u(),E.style.width="",E.style.left="";for(var e=m.length;e--;){var t=m[e];t.style.width="",t.style.left="",f.transitions&&a(e,0,0)}f.addEventListener?(E.removeEventListener("touchstart",M,!1),E.removeEventListener("webkitTransitionEnd",M,!1),E.removeEventListener("msTransitionEnd",M,!1),E.removeEventListener("oTransitionEnd",M,!1),E.removeEventListener("otransitionend",M,!1),E.removeEventListener("transitionend",M,!1),window.removeEventListener("resize",M,!1)):window.onresize=null},this.load=function(){t(),D&&c(),f.addEventListener?(f.touch?E.addEventListener("touchstart",M,!1):E.addEventListener("mousedown",M,!1),f.transitions&&(E.addEventListener("webkitTransitionEnd",M,!1),E.addEventListener("msTransitionEnd",M,!1),E.addEventListener("oTransitionEnd",M,!1),E.addEventListener("otransitionend",M,!1),E.addEventListener("transitionend",M,!1)),window.addEventListener("resize",M,!1)):window.onresize=function(){t()}}}}})}(ionic),function(e){"use strict";e.views.Toggle=e.views.View.inherit({initialize:function(t){var n=this;this.el=t.el,this.checkbox=t.checkbox,this.track=t.track,this.handle=t.handle,this.openPercent=-1,this.onChange=t.onChange||function(){},this.triggerThreshold=t.triggerThreshold||20,this.dragStartHandler=function(e){n.dragStart(e)},this.dragHandler=function(e){n.drag(e)},this.holdHandler=function(e){n.hold(e)},this.releaseHandler=function(e){n.release(e)},this.dragStartGesture=e.onGesture("dragstart",this.dragStartHandler,this.el),this.dragGesture=e.onGesture("drag",this.dragHandler,this.el),this.dragHoldGesture=e.onGesture("hold",this.holdHandler,this.el),this.dragReleaseGesture=e.onGesture("release",this.releaseHandler,this.el)},destroy:function(){e.offGesture(this.dragStartGesture,"dragstart",this.dragStartGesture),e.offGesture(this.dragGesture,"drag",this.dragGesture),e.offGesture(this.dragHoldGesture,"hold",this.holdHandler),e.offGesture(this.dragReleaseGesture,"release",this.releaseHandler)},tap:function(){"disabled"!==this.el.getAttribute("disabled")&&this.val(!this.checkbox.checked)},dragStart:function(e){this.checkbox.disabled||(this._dragInfo={width:this.el.offsetWidth,left:this.el.offsetLeft,right:this.el.offsetLeft+this.el.offsetWidth,triggerX:this.el.offsetWidth/2,initialState:this.checkbox.checked},e.gesture.srcEvent.preventDefault(),this.hold(e))},drag:function(t){var n=this;this._dragInfo&&(t.gesture.srcEvent.preventDefault(),e.requestAnimationFrame(function(){if(n._dragInfo){var e=(n.track.offsetLeft+n.handle.offsetWidth/2,n.track.offsetLeft+n.track.offsetWidth-n.handle.offsetWidth/2,t.gesture.deltaX,t.gesture.touches[0].pageX-n._dragInfo.left),i=n._dragInfo.width-n.triggerThreshold;n._dragInfo.initialState?e<n.triggerThreshold?n.setOpenPercent(0):e>n._dragInfo.triggerX&&n.setOpenPercent(100):e<n._dragInfo.triggerX?n.setOpenPercent(0):e>i&&n.setOpenPercent(100)}}))},endDrag:function(){this._dragInfo=null},hold:function(){this.el.classList.add("dragging")},release:function(e){this.el.classList.remove("dragging"),this.endDrag(e)},setOpenPercent:function(t){if(this.openPercent<0||t<this.openPercent-3||t>this.openPercent+3)if(this.openPercent=t,0===t)this.val(!1);else if(100===t)this.val(!0);else{var n=Math.round(t/100*this.track.offsetWidth-this.handle.offsetWidth);n=1>n?0:n,this.handle.style[e.CSS.TRANSFORM]="translate3d("+n+"px,0,0)"}},val:function(t){return(t===!0||t===!1)&&(""!==this.handle.style[e.CSS.TRANSFORM]&&(this.handle.style[e.CSS.TRANSFORM]=""),this.checkbox.checked=t,this.openPercent=t?100:0,this.onChange&&this.onChange()),this.checkbox.checked}})}(ionic)}();
/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*
 AngularJS v1.3.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(U,X,u){'use strict';function A(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.6/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ra(b){if(null==b||Sa(b))return!1;var a=b.length;return b.nodeType===
na&&a?!0:z(b)||x(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(B(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(x(b)||Ra(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Cd(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Dd(){return++kb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function G(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var k=f[g];b[k]=e[k]}}lc(b,a);return b}function $(b){return parseInt(b,10)}function H(){}function oa(b){return b}function ca(b){return function(){return b}}function C(b){return"undefined"===typeof b}function y(b){return"undefined"!==
typeof b}function O(b){return null!==b&&"object"===typeof b}function z(b){return"string"===typeof b}function Y(b){return"number"===typeof b}function pa(b){return"[object Date]"===Ja.call(b)}function B(b){return"function"===typeof b}function lb(b){return"[object RegExp]"===Ja.call(b)}function Sa(b){return b&&b.window===b}function Ta(b){return b&&b.$evalAsync&&b.$watch}function Ua(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Ed(b){var a={};
b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ua(b){return Q(b.nodeName||b[0]&&b[0].nodeName)}function Va(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Da(b,a,c,d){if(Sa(b)||Ta(b))throw Wa("cpws");if(a){if(b===a)throw Wa("cpi");c=c||[];d=d||[];if(O(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(x(b))for(var f=a.length=0;f<b.length;f++)e=Da(b[f],null,c,d),O(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;x(a)?a.length=
0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Da(b[f],null,c,d),O(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,g)}}else if(a=b)x(b)?a=Da(b,[],c,d):pa(b)?a=new Date(b.getTime()):lb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):O(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Da(b,e,c,d));return a}function qa(b,a){if(x(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(O(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=
b[c];return a||b}function ga(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(x(b)){if(!x(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ga(b[d],a[d]))return!1;return!0}}else{if(pa(b))return pa(a)?ga(b.getTime(),a.getTime()):!1;if(lb(b)&&lb(a))return b.toString()==a.toString();if(Ta(b)||Ta(a)||Sa(b)||Sa(a)||x(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!B(b[d])){if(!ga(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&
"$"!==d.charAt(0)&&a[d]!==u&&!B(a[d]))return!1;return!0}return!1}function Xa(b,a,c){return b.concat(Ya.call(a,c))}function nc(b,a){var c=2<arguments.length?Ya.call(arguments,2):[];return!B(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Xa(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Fd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=u:Sa(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":Ta(a)&&
(c="$SCOPE");return c}function Za(b,a){if("undefined"===typeof b)return u;Y(a)||(a=a?2:null);return JSON.stringify(b,Fd,a)}function oc(b){return z(b)?JSON.parse(b):b}function va(b){b=D(b).clone();try{b.empty()}catch(a){}var c=D("<div>").append(b).html();try{return b[0].nodeType===mb?Q(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(d){return Q(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}function qc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&
(c=b.replace(/\+/g,"%20").split("="),d=pc(c[0]),y(d)&&(b=y(c[1])?pc(c[1]):!0,rc.call(a,d)?x(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Nb(b){var a=[];r(b,function(b,d){x(b)?r(b,function(b){a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))}):a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))});return a.length?a.join("&"):""}function nb(b){return Ea(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ea(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Gd(b,a){var c,d,e=ob.length;b=D(b);for(d=0;d<e;++d)if(c=ob[d]+a,z(c=b.attr(c)))return c;return null}function Hd(b,a){var c,d,e={};r(ob,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(ob,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Gd(c,"strict-di"),a(c,d?[d]:[],e))}function sc(b,
a,c){O(c)||(c={});c=G({strictDi:!1},c);var d=function(){b=D(b);if(b.injector()){var d=b[0]===X?"document":va(b);throw Wa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=Ob(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},
e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;U&&e.test(U.name)&&(c.debugInfoEnabled=!0,U.name=U.name.replace(e,""));if(U&&!f.test(U.name))return d();U.name=U.name.replace(f,"");ha.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function Id(){U.name="NG_ENABLE_DEBUG_INFO!"+U.name;U.location.reload()}function Jd(b){return ha.element(b).injector().get("$$testability")}function Pb(b,a){a=a||"_";return b.replace(Kd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Ld(){var b;
tc||((ra=U.jQuery)&&ra.fn.on?(D=ra,G(ra.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ra.cleanData,ra.cleanData=function(a){var c;if(Qb)Qb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ra._data(e,"events"))&&c.$destroy&&ra(e).triggerHandler("$destroy");b(a)}):D=R,ha.element=D,tc=!0)}function Rb(b,a,c){if(!b)throw Wa("areq",a||"?",c||"required");return b}function pb(b,a,c){c&&x(b)&&(b=b[b.length-1]);Rb(B(b),a,"not a function, got "+
(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Wa("badname",a);}function uc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&B(b)?nc(e,b):b}function qb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return D(c)}function ia(){return Object.create(null)}function Md(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=A("$injector"),
d=A("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||A;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return t}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),t={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide",
"factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return t})}})}function Nd(b){G(b,{bootstrap:sc,copy:Da,extend:G,equals:ga,element:D,forEach:r,injector:Ob,noop:H,bind:nc,toJson:Za,fromJson:oc,identity:oa,isUndefined:C,
isDefined:y,isString:z,isFunction:B,isObject:O,isNumber:Y,isElement:mc,isArray:x,version:Od,isDate:pa,lowercase:Q,uppercase:rb,callbacks:{counter:0},getTestability:Jd,$$minErr:A,$$csp:$a,reloadWithDebugInfo:Id});ab=Md(U);try{ab("ngLocale")}catch(a){ab("ngLocale",[]).provider("$locale",Pd)}ab("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Qd});a.provider("$compile",vc).directive({a:Rd,input:wc,textarea:wc,form:Sd,script:Td,select:Ud,style:Vd,option:Wd,ngBind:Xd,ngBindHtml:Yd,ngBindTemplate:Zd,
ngClass:$d,ngClassEven:ae,ngClassOdd:be,ngCloak:ce,ngController:de,ngForm:ee,ngHide:fe,ngIf:ge,ngInclude:he,ngInit:ie,ngNonBindable:je,ngPluralize:ke,ngRepeat:le,ngShow:me,ngStyle:ne,ngSwitch:oe,ngSwitchWhen:pe,ngSwitchDefault:qe,ngOptions:re,ngTransclude:se,ngModel:te,ngList:ue,ngChange:ve,pattern:xc,ngPattern:xc,required:yc,ngRequired:yc,minlength:zc,ngMinlength:zc,maxlength:Ac,ngMaxlength:Ac,ngValue:we,ngModelOptions:xe}).directive({ngInclude:ye}).directive(sb).directive(Bc);a.provider({$anchorScroll:ze,
$animate:Ae,$browser:Be,$cacheFactory:Ce,$controller:De,$document:Ee,$exceptionHandler:Fe,$filter:Cc,$interpolate:Ge,$interval:He,$http:Ie,$httpBackend:Je,$location:Ke,$log:Le,$parse:Me,$rootScope:Ne,$q:Oe,$$q:Pe,$sce:Qe,$sceDelegate:Re,$sniffer:Se,$templateCache:Te,$templateRequest:Ue,$$testability:Ve,$timeout:We,$window:Xe,$$rAF:Ye,$$asyncCallback:Ze,$$jqLite:$e})}])}function bb(b){return b.replace(af,function(a,b,d,e){return e?d.toUpperCase():d}).replace(bf,"Moz$1")}function Dc(b){b=b.nodeType;
return b===na||!b||9===b}function Ec(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(cf.exec(b)||["",""])[1].toLowerCase();d=ja[d]||ja._default;c.innerHTML=d[1]+b.replace(df,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Xa(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;z(b)&&(b=P(b),
a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new R(b)}if(a){a=X;var c;b=(c=ef.exec(b))?[a.createElement(c[1])]:(c=Ec(b,a))?c.childNodes:[]}Fc(this,b)}function Ub(b){return b.cloneNode(!0)}function tb(b,a){a||ub(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)ub(c[d])}function Gc(b,a,c,d){if(y(d))throw Tb("offargs");var e=(d=vb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),function(a){if(y(c)){var d=e[a];Va(d||[],c);if(d&&0<
d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function ub(b,a){var c=b.ng339,d=c&&wb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Gc(b)),delete wb[c],b.ng339=u))}function vb(b,a){var c=b.ng339,c=c&&wb[c];a&&!c&&(b.ng339=c=++ff,c=wb[c]={events:{},data:{},handle:u});return c}function Vb(b,a,c){if(Dc(b)){var d=y(c),e=!d&&a&&!O(a),f=!a;b=(b=vb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;
if(e)return b&&b[a];G(b,a)}}}function xb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function yb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",P((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+P(a)+" "," ")))})}function zb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=P(a);-1===c.indexOf(" "+a+" ")&&
(c+=a+" ")});b.setAttribute("class",P(c))}}function Fc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Hc(b,a){return Ab(b,"$"+(a||"ngController")+"Controller")}function Ab(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=x(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=D.data(b,a[d]))!==u)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Ic(b){for(tb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}
function Jc(b,a){a||tb(b);var c=b.parentNode;c&&c.removeChild(b)}function gf(b,a){a=a||U;if("complete"===a.document.readyState)a.setTimeout(b);else D(a).on("load",b)}function Kc(b,a){var c=Bb[a.toLowerCase()];return c&&Lc[ua(b)]&&c}function hf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Mc[a]}function jf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(C(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;
c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=qa(f));for(var k=0;k<g;k++)c.isImmediatePropagationStopped()||f[k].call(b,c)}};c.elem=b;return c}function $e(){this.$get=function(){return G(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return zb(b,a)},removeClass:function(b,a){b.attr&&
(b=b[0]);return yb(b,a)}})}}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Dd)():c+":"+b}function cb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function kf(b){return(b=b.toString().replace(Nc,"").match(Oc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Wb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw z(c)&&
c||(c=b.name||kf(b)),Fa("strictdi",c);a=b.toString().replace(Nc,"");a=a.match(Oc);r(a[1].split(lf),function(a){a.replace(mf,function(a,b,c){d.push(c)})})}b.$inject=d}}else x(b)?(a=b.length-1,pb(b[a],"fn"),d=b.slice(0,a)):pb(b,"fn",!0);return d}function Ob(b,a){function c(a){return function(b,c){if(O(b))r(b,kc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(B(b)||x(b))b=q.instantiate(b);if(!b.$get)throw Fa("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,
this);if(C(c))throw Fa("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{z(a)?(c=ab(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(q.invoke(a)):x(a)?b.push(q.invoke(a)):pb(a,"module")}catch(e){throw x(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&
(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===k)throw Fa("cdep",a+" <- "+l.join(" <- "));return b[a]}try{return l.unshift(a),b[a]=k,b[a]=c(a,e)}catch(f){throw b[a]===k&&delete b[a],f;}finally{l.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=Wb(b,a,g),l,q,s;q=0;for(l=k.length;q<l;q++){s=k[q];if("string"!==typeof s)throw Fa("itkn",s);h.push(f&&f.hasOwnProperty(s)?f[s]:d(s,g))}x(b)&&
(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((x(a)?a[a.length-1]:a).prototype);a=e(a,d,b,c);return O(a)||B(a)?a:d},get:d,annotate:Wb,has:function(a){return p.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var k={},l=[],m=new cb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ca(b),!1)}),constant:c(function(a,b){La(a,
"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ha.isString(b)&&l.push(b);throw Fa("unpr",l.join(" <- "));}),t={},s=t.$injector=h(t,function(a,b){var c=q.get(a+"Provider",b);return s.invoke(c.$get,c,u,a)});r(g(b),function(a){s.invoke(a||H)});return s}function ze(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location",
"$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}
var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||gf(function(){d.$evalAsync(g)})});return g}]}function Ze(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function nf(b,a,c,d){function e(a){try{a.apply(null,Ya.call(arguments,1))}finally{if(v--,0===v)for(;w.length;)try{w.pop()()}catch(b){c.error(b)}}}function f(a,b){(function Aa(){r(K,function(a){a()});E=b(Aa,a)})()}function g(){h();k()}function h(){J=
b.history.state;J=C(J)?null:J;ga(J,S)&&(J=S);S=J}function k(){if(F!==m.url()||L!==J)F=m.url(),L=J,r(W,function(a){a(m.url(),J)})}function l(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,p=a[0],q=b.location,t=b.history,s=b.setTimeout,N=b.clearTimeout,n={};m.isMock=!1;var v=0,w=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){v++};m.notifyWhenNoOutstandingRequests=function(a){r(K,function(a){a()});0===v?a():w.push(a)};var K=[],E;m.addPollFn=function(a){C(E)&&
f(100,s);K.push(a);return a};var J,L,F=q.href,da=a.find("base"),I=null;h();L=J;m.url=function(a,c,e){C(e)&&(e=null);q!==b.location&&(q=b.location);t!==b.history&&(t=b.history);if(a){var f=L===e;if(F===a&&(!d.history||f))return m;var g=F&&Ga(F)===Ga(a);F=a;L=e;!d.history||g&&f?(g||(I=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(t[c?"replaceState":"pushState"](e,"",a),h(),L=J);return m}return I||q.href.replace(/%27/g,"'")};m.state=function(){return J};var W=
[],ba=!1,S=null;m.onUrlChange=function(a){if(!ba){if(d.history)D(b).on("popstate",g);D(b).on("hashchange",g);ba=!0}W.push(a);return a};m.$$checkUrlChange=k;m.baseHref=function(){var a=da.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var aa={},y="",ea=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===u?p.cookie=encodeURIComponent(a)+"=;path="+ea+";expires=Thu, 01 Jan 1970 00:00:00 GMT":z(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+ea).length+
1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),aa={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=l(e.substring(0,g)),aa[a]===u&&(aa[a]=l(e.substring(g+1))));return aa}};m.defer=function(a,b){var c;v++;c=s(function(){delete n[c];e(a)},b||0);n[c]=!0;return c};m.defer.cancel=function(a){return n[a]?(delete n[a],N(a),e(H),!0):!1}}function Be(){this.$get=["$window","$log","$sniffer",
"$document",function(b,a,c,d){return new nf(b,d,a,c)}]}function Ce(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw A("$cacheFactory")("iid",b);var g=0,h=G({},d,{id:b}),k={},l=d&&d.capacity||Number.MAX_VALUE,m={},p=null,q=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!C(b))return a in k||g++,k[a]=b,g>l&&this.remove(q.key),b},get:function(a){if(l<
Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete k[a];g--},removeAll:function(){k={};g=0;m={};p=q=null},destroy:function(){m=h=k=null;delete a[b]},info:function(){return G({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Te(){this.$get=["$cacheFactory",function(b){return b("templates")}]}
function vc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw ka("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Ed("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){La(a,"directive");z(a)?(Rb(e,"directiveFactory"),d.hasOwnProperty(a)||
(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);B(h)?h={compile:ca(h)}:!h.compile&&h.link&&(h.compile=ca(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";O(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,kc(p));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?
(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var l=!0;this.debugInfoEnabled=function(a){return y(a)?(l=a,this):l};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,N,n,v,w,K,E,J){function L(a,b){try{a.addClass(b)}catch(c){}}
function F(a,b,c,d,e){a instanceof D||(a=D(a));r(a,function(b,c){b.nodeType==mb&&b.nodeValue.match(/\S+/)&&(a[c]=D(b).wrap("<span></span>").parent()[0])});var f=da(a,b,a,c,d,e);F.$$addScopeClass(a);var g=null;return function(b,c,d){Rb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?D(U(g,D("<div>").append(a).html())):
c?Ka.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);F.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function da(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,q,s,n,w;if(p)for(w=Array(c.length),q=0;q<h.length;q+=3)f=h[q],w[f]=c[f];else w=c;q=0;for(s=h.length;q<s;)k=w[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(l=a.$new(),F.$$addScopeInfo(D(k),l)):l=a,n=c.transcludeOnThisElement?I(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?I(a,
b):null,c(f,l,k,d,n)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,q,s,p,n=0;n<a.length;n++){k=new V;l=W(a[n],[],k,0===n?d:u,e);(f=l.length?aa(l,a[n],k,b,c,null,[],[],f):null)&&f.scope&&F.$$addScopeClass(k.$$element);k=f&&f.terminal||!(q=a[n].childNodes)||!q.length?null:da(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(n,f,k),s=!0,p=p||f;f=null}return s?g:null}function I(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,
{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(b,c,g,h,k){var l=g.$attr,q;switch(b.nodeType){case na:ea(c,wa(ua(b)),"E",h,k);for(var s,n,w,N=b.attributes,K=0,t=N&&N.length;K<t;K++){var J=!1,v=!1;s=N[K];q=s.name;s=P(s.value);n=wa(q);if(w=Ha.test(n))q=Pb(n.substr(6),"-");var L=n.replace(/(Start|End)$/,""),E;a:{var F=L;if(d.hasOwnProperty(F)){E=void 0;for(var F=a.get(F+"Directive"),W=0,r=F.length;W<r;W++)if(E=F[W],E.multiElement){E=!0;break a}}E=!1}E&&n===L+"Start"&&
(J=q,v=q.substr(0,q.length-5)+"end",q=q.substr(0,q.length-6));n=wa(q.toLowerCase());l[n]=q;if(w||!g.hasOwnProperty(n))g[n]=s,Kc(b,n)&&(g[n]=!0);R(b,c,s,n,w);ea(c,n,"A",h,k,J,v)}b=b.className;if(z(b)&&""!==b)for(;q=f.exec(b);)n=wa(q[2]),ea(c,n,"C",h,k)&&(g[n]=P(q[3])),b=b.substr(q.index+q[0].length);break;case mb:T(c,b.nodeValue);break;case 8:try{if(q=e.exec(b.nodeValue))n=wa(q[1]),ea(c,n,"M",h,k)&&(g[n]=P(q[2]))}catch(da){}}c.sort(A);return c}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&
a.hasAttribute(b)){do{if(!a)throw ka("uterdir",b,c);a.nodeType==na&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function S(a,b,c){return function(d,e,f,g,h){e=ba(e[0],b,c);return a(d,e,f,g,h)}}function aa(a,d,e,f,g,k,l,s,p){function w(a,b,c,d){if(a){c&&(a=S(a,c,d));a.require=M.require;a.directiveName=fa;if(I===M||M.$$isolateScope)a=Y(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=S(b,c,d));b.require=M.require;b.directiveName=fa;if(I===
M||M.$$isolateScope)b=Y(b,{isolateScope:!0});s.push(b)}}function K(a,b,c,d){var e,f="data",g=!1,k=c,l;if(z(b)){l=b.match(h);b=b.substring(l[0].length);l[3]&&(l[1]?l[3]=null:l[1]=l[3]);"^"===l[1]?f="inheritedData":"^^"===l[1]&&(f="inheritedData",k=c.parent());"?"===l[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||k[f]("$"+b+"Controller");if(!e&&!g)throw ka("ctreq",b,a);return e||null}x(b)&&(e=[],r(b,function(b){e.push(K(a,b,c,d))}));return e}function J(a,c,f,g,h){function k(a,b,c){var d;
Ta(a)||(c=b,b=a,a=u);ya&&(d=L);c||(c=ya?W.parent():W);return h(a,b,d,c,Xb)}var p,w,t,v,L,db,W,S;d===f?(S=e,W=e.$$element):(W=D(f),S=new V(W,e));I&&(v=c.$new(!0));h&&(db=k,db.$$boundTransclude=h);E&&(da={},L={},r(E,function(a){var b={$scope:a===I||a.$$isolateScope?v:c,$element:W,$attrs:S,$transclude:db};t=a.controller;"@"==t&&(t=S[a.name]);b=n(t,b,!0,a.controllerAs);L[a.name]=b;ya||W.data("$"+a.name+"Controller",b.instance);da[a.name]=b}));if(I){F.$$addScopeInfo(W,v,!0,!(aa&&(aa===I||aa===I.$$originalDirective)));
F.$$addScopeClass(W,!0);g=da&&da[I.name];var ba=v;g&&g.identifier&&!0===I.bindToController&&(ba=g.instance);r(v.$$isolateBindings=I.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":S.$observe(e,function(a){ba[d]=a});S.$$observers[e].$$scope=c;S[e]&&(ba[d]=b(S[e])(c));break;case "=":if(f&&!S[e])break;h=N(S[e]);l=h.literal?ga:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=ba[d]=h(c);throw ka("nonassign",S[e],I.name);};g=ba[d]=h(c);f=function(a){l(a,
ba[d])||(l(a,g)?k(c,a=ba[d]):ba[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(S[e],f):c.$watch(N(S[e],f),null,h.literal);v.$on("$destroy",f);break;case "&":h=N(S[e]),ba[d]=function(a){return h(c,a)}}})}da&&(r(da,function(a){a()}),da=null);g=0;for(p=l.length;g<p;g++)w=l[g],Z(w,w.isolateScope?v:c,W,S,w.require&&K(w.directiveName,w.require,W,L),db);var Xb=c;I&&(I.template||null===I.templateUrl)&&(Xb=v);a&&a(Xb,f.childNodes,u,h);for(g=s.length-1;0<=g;g--)w=s[g],Z(w,w.isolateScope?
v:c,W,S,w.require&&K(w.directiveName,w.require,W,L),db)}p=p||{};for(var v=-Number.MAX_VALUE,L,E=p.controllerDirectives,da,I=p.newIsolateScopeDirective,aa=p.templateDirective,ea=p.nonTlbTranscludeDirective,H=!1,G=!1,ya=p.hasElementTranscludeDirective,T=e.$$element=D(d),M,fa,A,Ha=f,Q,xa=0,R=a.length;xa<R;xa++){M=a[xa];var Cb=M.$$start,$=M.$$end;Cb&&(T=ba(d,Cb,$));A=u;if(v>M.priority)break;if(A=M.scope)M.templateUrl||(O(A)?(Aa("new/isolated scope",I||L,M,T),I=M):Aa("new/isolated scope",I,M,T)),L=L||
M;fa=M.name;!M.templateUrl&&M.controller&&(A=M.controller,E=E||{},Aa("'"+fa+"' controller",E[fa],M,T),E[fa]=M);if(A=M.transclude)H=!0,M.$$tlb||(Aa("transclusion",ea,M,T),ea=M),"element"==A?(ya=!0,v=M.priority,A=T,T=e.$$element=D(X.createComment(" "+fa+": "+e[fa]+" ")),d=T[0],Db(g,Ya.call(A,0),d),Ha=F(A,f,v,k&&k.name,{nonTlbTranscludeDirective:ea})):(A=D(Ub(d)).contents(),T.empty(),Ha=F(A,f));if(M.template)if(G=!0,Aa("template",aa,M,T),aa=M,A=B(M.template)?M.template(T,e):M.template,A=Pc(A),M.replace){k=
M;A=Sb.test(A)?Qc(U(M.templateNamespace,P(A))):[];d=A[0];if(1!=A.length||d.nodeType!==na)throw ka("tplrt",fa,"");Db(g,T,d);R={$attr:{}};A=W(d,[],R);var pf=a.splice(xa+1,a.length-(xa+1));I&&y(A);a=a.concat(A).concat(pf);C(e,R);R=a.length}else T.html(A);if(M.templateUrl)G=!0,Aa("template",aa,M,T),aa=M,M.replace&&(k=M),J=of(a.splice(xa,a.length-xa),T,e,g,H&&Ha,l,s,{controllerDirectives:E,newIsolateScopeDirective:I,templateDirective:aa,nonTlbTranscludeDirective:ea}),R=a.length;else if(M.compile)try{Q=
M.compile(T,e,Ha),B(Q)?w(null,Q,Cb,$):Q&&w(Q.pre,Q.post,Cb,$)}catch(ca){c(ca,va(T))}M.terminal&&(J.terminal=!0,v=Math.max(v,M.priority))}J.scope=L&&!0===L.scope;J.transcludeOnThisElement=H;J.elementTranscludeOnThisElement=ya;J.templateOnThisElement=G;J.transclude=Ha;p.hasElementTranscludeDirective=ya;return J}function y(a){for(var b=0,c=a.length;b<c;b++){var d=b,e;e=G(Object.create(a[b]),{$$isolateScope:!0});a[d]=e}}function ea(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;
e=a.get(e+"Directive");for(var s=0,n=e.length;s<n;s++)try{if(q=e[s],(g===u||g>q.priority)&&-1!=q.restrict.indexOf(f)){if(k){var w={$$start:k,$$end:l};q=G(Object.create(q),w)}b.push(q);h=q}}catch(N){c(N)}}return h}function C(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(L(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+
b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function of(a,b,c,d,e,f,g,h){var k=[],l,q,p=b[0],n=a.shift(),w=G({},n,{templateUrl:null,transclude:null,replace:null,$$originalDirective:n}),N=B(n.templateUrl)?n.templateUrl(b,c):n.templateUrl,t=n.templateNamespace;b.empty();s(K.getTrustedResourceUrl(N)).then(function(s){var K,v;s=Pc(s);if(n.replace){s=Sb.test(s)?Qc(U(t,P(s))):[];K=s[0];if(1!=s.length||K.nodeType!==na)throw ka("tplrt",n.name,N);s={$attr:{}};
Db(d,b,K);var J=W(K,[],s);O(n.scope)&&y(J);a=J.concat(a);C(c,s)}else K=p,b.html(s);a.unshift(w);l=aa(a,K,c,e,b,n,f,g,h);r(d,function(a,c){a==K&&(d[c]=b[0])});for(q=da(b[0].childNodes,e);k.length;){s=k.shift();v=k.shift();var E=k.shift(),F=k.shift(),J=b[0];if(!s.$$destroyed){if(v!==p){var S=v.className;h.hasElementTranscludeDirective&&n.replace||(J=Ub(K));Db(E,D(v),J);L(D(J),S)}v=l.transcludeOnThisElement?I(s,l.transclude,F):F;l(q,s,J,d,v)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?
k.push(b,c,d,a):(l.transcludeOnThisElement&&(a=I(b,l.transclude,e)),l(q,b,c,d,a)))}}function A(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Aa(a,b,c,d){if(b)throw ka("multidir",b.name,c.name,a,va(d));}function T(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&F.$$addBindingClass(a);return function(a,c){var e=c.parent();b||F.$$addBindingClass(e);F.$$addBindingInfo(e,d.expressions);a.$watch(d,
function(a){c[0].nodeValue=a})}}})}function U(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function xa(a,b){if("srcdoc"==b)return K.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return K.RESOURCE_URL}function R(a,c,d,e,f){var h=b(d,!0);if(h){if("multiple"===e&&"select"===ua(a))throw ka("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(c,
d,l){d=l.$$observers||(l.$$observers={});if(k.test(e))throw ka("nodomevents");l[e]&&(h=b(l[e],!0,xa(a,e),g[e]||f))&&(l[e]=h(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(h,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)}))}}}})}}function Db(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=
c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);D(c).data(D(d).data());ra?(Qb=!0,ra.cleanData([d])):delete D.cache[d[D.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,b){return G(function(){return a.apply(null,arguments)},a,b)}function Z(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}var V=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr=
{};this.$$element=a};V.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&E.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&E.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Rc(a,b);c&&c.length&&E.addClass(this.$$element,c);(c=Rc(b,a))&&c.length&&E.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Kc(f,a),h=hf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=
e=Pb(a,"-"));g=ua(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=J(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=P(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var q=2*l,g=g+J(P(h[q]),!0),g=g+(" "+P(h[q+1]));h=P(h[2*l]).split(/\s/);g+=J(P(h[0]),!0);2===h.length&&(g+=" "+P(h[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&
r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ia()),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Va(e,b)}}};var ya=b.startSymbol(),fa=b.endSymbol(),Pc="{{"==ya||"}}"==fa?oa:function(a){return a.replace(/\{\{/g,ya).replace(/}}/g,fa)},Ha=/^ngAttr[A-Z]/;F.$$addBindingInfo=l?function(a,b){var c=a.data("$binding")||[];x(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:H;
F.$$addBindingClass=l?function(a){L(a,"ng-binding")}:H;F.$$addScopeInfo=l?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:H;F.$$addScopeClass=l?function(a,b){L(a,b?"ng-isolate-scope":"ng-scope")}:H;return F}]}function wa(b){return bb(b.replace(qf,""))}function Rc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Qc(b){b=D(b);var a=b.length;
if(1>=a)return b;for(;a--;)8===b[a].nodeType&&rf.call(b,a,1);return b}function De(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,"controller");O(a)?G(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!O(a.$scope))throw A("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,k,l){var m,p,q;k=!0===k;l&&z(l)&&(q=l);z(g)&&(l=g.match(c),p=l[1],q=q||l[3],g=b.hasOwnProperty(p)?b[p]:uc(h.$scope,p,
!0)||(a?uc(e,p,!0):u),pb(g,p,!0));if(k)return k=(x(g)?g[g.length-1]:g).prototype,m=Object.create(k),q&&f(h,q,m,p||g.name),G(function(){d.invoke(g,m,h,p);return m},{instance:m,identifier:q});m=d.instantiate(g,h,p);q&&f(h,q,m,p||g.name);return m}}]}function Ee(){this.$get=["$window",function(b){return D(b.document)}]}function Fe(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b,a){if(z(b)){b=b.replace(sf,"");var c=a("Content-Type");if(c&&0===c.indexOf(Sc)&&
b.trim()||tf.test(b)&&uf.test(b))b=oc(b)}return b}function Tc(b){var a=ia(),c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=Q(P(b.substr(0,e)));d=P(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Uc(b){var a=O(b)?b:u;return function(c){a||(a=Tc(b));return c?(c=a[Q(c)],void 0===c&&(c=null),c):a}}function Vc(b,a,c){if(B(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function Ie(){var b=this.defaults={transformResponse:[Yb],transformRequest:[function(a){return O(a)&&
"[object File]"!==Ja.call(a)&&"[object Blob]"!==Ja.call(a)?Za(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(Zb),put:qa(Zb),patch:qa(Zb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,k){function l(a){function c(a){var b=G({},a);b.data=a.data?Vc(a.data,a.headers,d.transformResponse):
a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}var d={method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},e=function(a){var c=b.headers,d=G({},a.headers),e,f,c=G({},c.common,c[Q(a.method)]);a:for(e in c){a=Q(e);for(f in d)if(Q(f)===a)continue a;d[e]=c[e]}(function(a){var b;r(a,function(c,d){B(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(d);return d}(a);if(!ha.isObject(a))throw A("$http")("badreq",a);G(d,a);d.headers=e;d.method=rb(d.method);var f=[function(a){e=
a.headers;var d=Vc(a.data,Uc(e),a.transformRequest);C(d)&&r(e,function(a,b){"content-type"===Q(b)&&delete e[b]});C(a.withCredentials)&&!C(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,d,e).then(c,c)},u],g=h.when(d);for(r(t,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,
b.headers,d)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,d)});return g};return g}function m(c,f,k){function m(b,c,d,e){function f(){w(c,b,d,e)}F&&(200<=b&&300>b?F.put(I,[b,c,Tc(d),e]):F.remove(I));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function w(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?J.resolve:J.reject)({data:a,status:b,headers:Uc(d),config:c,statusText:e})}function t(a){w(a.data,a.status,qa(a.headers()),a.statusText)}function E(){var a=l.pendingRequests.indexOf(c);
-1!==a&&l.pendingRequests.splice(a,1)}var J=h.defer(),L=J.promise,F,r,I=p(c.url,c.params);l.pendingRequests.push(c);L.then(E,E);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(F=O(c.cache)?c.cache:O(b.cache)?b.cache:q);F&&(r=F.get(I),y(r)?r&&B(r.then)?r.then(t,t):x(r)?w(r[1],r[0],qa(r[2]),r[3]):w(r,200,{},"OK"):F.put(I,L));C(r)&&((r=Wc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:u)&&(k[c.xsrfHeaderName||b.xsrfHeaderName]=r),d(c.method,I,f,m,k,c.timeout,c.withCredentials,
c.responseType));return L}function p(a,b){if(!b)return a;var c=[];Cd(b,function(a,b){null===a||C(a)||(x(a)||(a=[a]),r(a,function(a){O(a)&&(a=pa(a)?a.toISOString():Za(a));c.push(Ea(b)+"="+Ea(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),t=[];r(c,function(a){t.unshift(z(a)?k.get(a):k.invoke(a))});l.pendingRequests=[];(function(a){r(arguments,function(a){l[a]=function(b,c){return l(G(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,
function(a){l[a]=function(b,c,d){return l(G(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");l.defaults=b;return l}]}function vf(){return new U.XMLHttpRequest}function Je(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);
e.body.removeChild(f);f=null;var g=-1,t="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,g="error"===a.type?404:200);c&&c(g,t)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,p,q,t){function s(){v&&v();w&&w.abort()}function N(a,d,e,f,g){E!==u&&c.cancel(E);v=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(H)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==Q(e)){var n="_"+(d.counter++).toString(36);
d[n]=function(a){d[n].data=a;d[n].called=!0};var v=f(h.replace("JSON_CALLBACK","angular.callbacks."+n),n,function(a,b){N(l,a,d[n].data,"",b);d[n]=H})}else{var w=a();w.open(e,h,!0);r(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);N(l,c,b,w.getAllResponseHeaders(),a)};e=function(){N(l,-1,null,null,"")};w.onerror=e;w.onabort=e;q&&(w.withCredentials=
!0);if(t)try{w.responseType=t}catch(K){if("json"!==t)throw K;}w.send(k||null)}if(0<p)var E=c(s,p);else p&&B(p.then)&&p.then(s)}}function Ge(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,t,s){function N(c){return c.replace(l,b).replace(m,a)}function n(a){try{var b=a;a=t?e.getTrusted(t,b):e.valueOf(b);var c;if(s&&!y(a))c=
a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=Za(a)}c=a}return c}catch(g){c=$b("interr",f,g.toString()),d(c)}}s=!!s;for(var v,w,K=0,E=[],J=[],L=f.length,F=[],r=[];K<L;)if(-1!=(v=f.indexOf(b,K))&&-1!=(w=f.indexOf(a,v+h)))K!==v&&F.push(N(f.substring(K,v))),K=f.substring(v+h,w),E.push(K),J.push(c(K,n)),K=w+k,r.push(F.length),F.push("");else{K!==L&&F.push(N(f.substring(K)));break}if(t&&1<F.length)throw $b("noconcat",f);if(!g||E.length){var I=function(a){for(var b=
0,c=E.length;b<c;b++){if(s&&C(a[b]))return;F[r[b]]=a[b]}return F.join("")};return G(function(a){var b=0,c=E.length,e=Array(c);try{for(;b<c;b++)e[b]=J[b](a);return I(e)}catch(g){a=$b("interr",f,g.toString()),d(a)}},{exp:f,expressions:E,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(J,function(c,e){var f=I(c);B(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,k=a.length,l=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=
function(){return a};return g}]}function He(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,k,l){var m=a.setInterval,p=a.clearInterval,q=0,t=y(l)&&!l,s=(t?d:c).defer(),N=s.promise;k=y(k)?k:0;N.then(null,null,e);N.$$intervalId=m(function(){s.notify(q++);0<k&&q>=k&&(s.resolve(q),p(N.$$intervalId),delete f[N.$$intervalId]);t||b.$apply()},h);f[N.$$intervalId]=s;return N}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),
delete f[b.$$intervalId],!0):!1};return e}]}function Pd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=nb(b[a]);return b.join("/")}function Xc(b,a){var c=Ba(b);a.$$protocol=
c.protocol;a.$$host=c.hostname;a.$$port=$(c.port)||xf[c.protocol]||null}function Yc(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=qc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function za(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Zc(b){return b.replace(/(#.+)|#$/,
"$1")}function bc(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function cc(b,a){this.$$html5=!0;a=a||"";var c=bc(b);Xc(b,this);this.$$parse=function(a){var b=za(c,a);if(!z(b))throw Eb("ipthprfx",a,c);Yc(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Nb(this.$$search),b=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;(f=za(b,d))!==u?(g=f,g=(f=za(a,f))!==u?c+(za("/",f)||f):b+g):(f=za(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function dc(b,a){var c=bc(b);Xc(b,this);this.$$parse=function(d){d=za(b,d)||za(c,d);var e;"#"===d.charAt(0)?(e=za(a,d),C(e)&&(e=d)):e=this.$$html5?d:"";Yc(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?
"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function $c(b,a){this.$$html5=!0;dc.apply(this,arguments);var c=bc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ga(d)?f=d:(g=za(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):
"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Fb(b){return function(){return this[b]}}function ad(b,a){return function(c){if(C(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Ke(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Ua(b)?(a.enabled=b,this):O(b)?(Ua(b.enabled)&&(a.enabled=b.enabled),Ua(b.requireBase)&&(a.requireBase=b.requireBase),Ua(b.rewriteLinks)&&
(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function h(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,l;l=d.baseHref();var m=d.url(),p;if(a.enabled){if(!l&&a.requireBase)throw Eb("nobase");p=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(l||"/");l=e.history?cc:$c}else p=Ga(m),
l=dc;k=new l(p,"#"+b);k.$$parseLinkUrl(m,m);k.$$state=d.state();var q=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&2!=b.which){for(var e=D(b.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),h=e.attr("href")||e.attr("xlink:href");O(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=Ba(g.animVal).href);q.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(g,h)||(b.preventDefault(),k.absUrl()!=
d.url()&&(c.$apply(),U.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=m&&d.url(k.absUrl(),!0);var t=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,g(d,!1,e)):(t=!1,h(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=Zc(d.url()),b=Zc(k.absUrl()),f=d.state(),l=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;
if(t||q)t=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(q&&g(b,l,f===k.$$state?null:k.$$state),h(a,f)))});k.$$replace=!1});return k}]}function Le(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||H;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function sa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===
b||"__proto__"===b)throw la("isecfld",a);return b}function ta(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.window===b)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ec(b){return b.constant}function Na(b,a,c,d){ta(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=sa(a.shift(),d);var g=ta(b[e],d);g||(g={},b[e]=g);b=g}e=sa(a.shift(),d);ta(b[e],d);return b[e]=c}function Oa(b){return"constructor"==
b}function bd(b,a,c,d,e,f,g){sa(b,f);sa(a,f);sa(c,f);sa(d,f);sa(e,f);var h=function(a){return ta(a,f)},k=g||Oa(b)?h:oa,l=g||Oa(a)?h:oa,m=g||Oa(c)?h:oa,p=g||Oa(d)?h:oa,q=g||Oa(e)?h:oa;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=k(h[b]);if(!a)return h;if(null==h)return u;h=l(h[a]);if(!c)return h;if(null==h)return u;h=m(h[c]);if(!d)return h;if(null==h)return u;h=p(h[d]);return e?null==h?u:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,ta,a)}}function cd(b,
a,c){var d=a.expensiveChecks,e=d?zf:Af,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?bd(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=bd(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=u,a=f;while(e<h);return f};else{var k="";d&&(k+="s = eso(s, fe);\nl = eso(l, fe);\n");var l=d;r(g,function(a,b){sa(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Oa(a))e="eso("+e+", fe)",l=!0;k+="if(s == null) return undefined;\ns="+e+";\n"});k+="return s;";a=new Function("s",
"l","eso","fe",k);a.toString=ca(k);l&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c){return Na(a,b,c,b)};return e[b]=f}function fc(b){return B(b.valueOf)?b.valueOf():Bf.call(b)}function Me(){var b=ia(),a=ia();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===
b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&fc(b));return h},b,c)}for(var l=[],q=0,p=e.length;q<p;q++)l[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&fc(k)}b&&(h=d(a));
return h},b,c)}function k(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;B(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function l(a,b,c,d){function e(a){var b=!0;r(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;B(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){B(b)&&
b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==l&&c!==k?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},t={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var v,w,K;switch(typeof d){case "string":K=d=d.trim();var E=g?a:b;v=E[K];
v||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),g=g?t:q,v=new gc(g),v=(new eb(v,c,g)).parse(d),v.constant?v.$$watchDelegate=m:w?(v=e(v),v.$$watchDelegate=v.literal?l:k):v.inputs&&(v.$$watchDelegate=h),E[K]=v);return p(v,f);case "function":return p(d,f);default:return p(H,f)}}}]}function Oe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return dd(function(a){b.$evalAsync(a)},a)}]}function Pe(){this.$get=["$browser","$exceptionHandler",function(b,a){return dd(function(a){b.defer(a)},
a)}]}function dd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{B(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),
a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=A("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}};
g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(O(b)||B(b))d=b&&b.then;B(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=
a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(B(b)?b(c):c)}catch(h){a(h)}}})}};var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return k(e,!1)}return d&&B(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):
k(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function t(a){if(!B(a))throw h("norslvr",a);if(!(this instanceof t))return new t(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=m;p.all=function(a){var b=new g,c=0,d=x(a)?[]:{};r(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||
b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function Ye(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Ne(){var b=10,
a=A("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function k(){this.$id=++kb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function l(b){if(s.$$phase)throw a("inprog",s.$$phase);s.$$phase=b}function m(a,
b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function q(){for(;v.length;)try{v.shift()()}catch(a){f(a)}d=null}function t(){null===d&&(d=h.defer(function(){s.$apply(q)}))}k.prototype={constructor:k,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new k,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners=
{};this.$$listenerCount={};this.$id=++kb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;B(b)||(h.fn=H);f||(f=this.$$watchers=[]);f.unshift(h);
return function(){Va(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,
b){function c(a){e=a;var b,d,g,h;if(!C(e)){if(O(e))if(Ra(e))for(f!==p&&(f=p,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==m&&(f=m={},t=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)e.hasOwnProperty(b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,q=g(a,c),p=[],m=
{},n=!0,t=0;return this.$watch(q,function(){n?(n=!1,b(e,e,d)):b(e,h,d);if(k)if(O(e))if(Ra(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)rc.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,k,m,t,v,r=b,I,u=[],y,S;l("$digest");h.$$checkUrlChange();this===s&&null!==d&&(h.defer.cancel(d),q());c=null;do{v=!1;for(I=this;N.length;){try{S=N.shift(),S.scope.$eval(S.expression)}catch(A){f(A)}c=null}a:do{if(m=I.$$watchers)for(t=m.length;t--;)try{if(e=m[t])if((g=
e.get(I))!==(k=e.last)&&!(e.eq?ga(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))v=!0,c=e,e.last=e.eq?Da(g,null):g,e.fn(g,k===p?g:k,I),5>r&&(y=4-r,u[y]||(u[y]=[]),u[y].push({msg:B(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:k}));else if(e===c){v=!1;break a}}catch(D){f(D)}if(!(m=I.$$childHead||I!==this&&I.$$nextSibling))for(;I!==this&&!(m=I.$$nextSibling);)I=I.$parent}while(I=m);if((v||N.length)&&!r--)throw s.$$phase=null,a("infdig",b,u);}while(v||N.length);
for(s.$$phase=null;n.length;)try{n.shift()()}catch(ea){f(ea)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==s){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);
this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=H;this.$on=this.$watch=this.$watchGroup=function(){return H};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){s.$$phase||N.length||h.defer(function(){N.length&&s.$digest()});N.push({scope:this,expression:a})},$$postDigest:function(a){n.push(a)},$apply:function(a){try{return l("$apply"),
this.$eval(a)}catch(b){f(b)}finally{s.$$phase=null;try{s.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&v.push(b);t()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,
stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=Xa([h],arguments,1),l,q;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(q=d.length;l<q;l++)if(d[l])try{d[l].apply(null,k)}catch(m){f(m)}else d.splice(l,1),l--,q--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;
for(var g=Xa([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var s=new k,N=s.$$asyncQueue=[],n=s.$$postDigestQueue=[],v=s.$$applyAsyncQueue=[];return s}]}function Qd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Cf(b){if("self"===b)return b;if(z(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=ed(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(lb(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function fd(b){var a=
[];y(b)&&r(b,function(b){a.push(Cf(b))});return a}function Re(){this.SCE_CONTEXTS=ma;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=fd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=fd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Wc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};
b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===
e||e===u||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ma.RESOURCE_URL){var g=Ba(e.toString()),p,q,t=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){t=!0;break}if(t)for(p=0,q=a.length;p<q;p++)if(d(a[p],g)){t=!1;break}if(t)return e;throw Ca("insecurl",e.toString());}if(c===ma.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Qe(){var b=!0;this.enabled=function(a){arguments.length&&
(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Pa)throw Ca("iequirks");var d=qa(ma);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=oa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;r(ma,function(a,b){var c=Q(b);d[bb("parse_as_"+c)]=function(b){return e(a,
b)};d[bb("get_trusted_"+c)]=function(b){return f(a,b)};d[bb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Se(){this.$get=["$window","$document",function(b,a){var c={},d=$((/android (\d+)/.exec(Q((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var p in k)if(l=h.exec(p)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");
l=!!("transition"in k||g+"Transition"in k);m=!!("animation"in k||g+"Animation"in k);!d||l&&m||(l=z(f.body.style.webkitTransition),m=z(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Pa)return!1;if(C(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:$a(),vendorPrefix:g,transitions:l,animations:m,android:d}}]}function Ue(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;
var g=a.defaults&&a.defaults.transformResponse;x(g)?g=g.filter(function(a){return a!==Yb}):g===Yb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).then(function(a){d.totalPendingRequests--;return a.data},function(a){d.totalPendingRequests--;if(!f)throw ka("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Ve(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=
ha.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+ed(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function We(){this.$get=
["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,k,l){var m=y(l)&&!l,p=(m?d:c).defer(),q=p.promise;k=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[q.$$timeoutId]}m||b.$apply()},k);q.$$timeoutId=k;g[k]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Pa&&(Z.setAttribute("href",b),b=Z.href);
Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Wc(b){b=z(b)?Ba(b):b;return b.protocol===gd.protocol&&b.host===gd.host}function Xe(){this.$get=ca(U)}function Cc(b){function a(c,d){if(O(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+
"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",hd);a("date",id);a("filter",Df);a("json",Ef);a("limitTo",Ff);a("lowercase",Gf);a("number",jd);a("orderBy",kd);a("uppercase",Hf)}function Df(){return function(b,a,c){if(!x(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=If(a,c,d);break;default:return b}return b.filter(a)}}function If(b,a,c){!0===a?a=ga:B(a)||
(a=function(a,b){if(O(a)||O(b))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(d){return fb(d,b,a,c)}}function fb(b,a,c,d){var e=typeof b,f=typeof a;if("string"===f&&"!"===a.charAt(0))return!fb(b,a.substring(1),c,d);if("array"===e)return b.some(function(b){return fb(b,a,c,d)});switch(e){case "object":var g;if(d){for(g in b)if("$"!==g.charAt(0)&&fb(b[g],a,c))return!0;return!1}if("object"===f){for(g in a)if(e=a[g],!B(e)&&(f="$"===g,!fb(f?b:b[g],e,c,f)))return!1;return!0}return c(b,
a);case "function":return!1;default:return c(b,a)}}function hd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){C(d)&&(d=a.CURRENCY_SYM);C(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:ld(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:ld(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function ld(b,a,c,d,e){if(!isFinite(b)||O(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],l=!1;if(-1!==g.indexOf("e")){var m=
g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?b=0:(h=g,l=!0)}if(l)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(md)[1]||"").length;C(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(md),l=g[0],g=g[1]||"",p=0,q=a.lgSize,t=a.gSize;if(l.length>=q+t)for(p=l.length-q,m=0;m<p;m++)0===(p-m)%t&&0!==m&&(h+=c),h+=l.charAt(m);for(m=p;m<l.length;m++)0===(l.length-m)%q&&0!==m&&(h+=c),h+=l.charAt(m);for(;g.length<
e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);k.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return k.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function V(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=rb(a?"SHORT"+b:b);return d[f][e]}}function nd(b){var a=(new Date(b,0,1)).getDay();
return new Date(b,0,(4>=a?5:12)-a)}function od(b){return function(a){var c=nd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function id(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=$(b[9]+b[10]),g=$(b[9]+b[11]));h.call(a,$(b[1]),$(b[2])-1,$(b[3]));f=$(b[4]||0)-f;g=$(b[5]||0)-g;h=$(b[6]||0);b=Math.round(1E3*parseFloat("0."+
(b[7]||0)));k.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],k,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;z(c)&&(c=Jf.test(c)?$(c):a(c));Y(c)&&(c=new Date(c));if(!pa(c))return c;for(;e;)(l=Kf.exec(e))?(h=Xa(h,l,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){k=Lf[a];g+=k?k(c,b.DATETIME_FORMATS):
a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ef(){return function(b,a){C(a)&&(a=2);return Za(b,a)}}function Ff(){return function(b,a){Y(b)&&(b=b.toString());if(!x(b)&&!z(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):$(a);if(z(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function kd(b){return function(a,c,d){function e(a,b){return b?
function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c===d&&"object"===c&&(c=typeof(a.valueOf?a=a.valueOf():a),d=typeof(b.valueOf?b=b.valueOf():b),c===d&&"object"===c&&(c=typeof(a.toString?a=a.toString():a),d=typeof(b.toString?b=b.toString():b),c===d&&a===b||"object"===c))?0:c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ra(a))return a;c=x(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||oa;if(z(a)){if("+"==a.charAt(0)||
"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var l=d();return e(function(a,b){return f(a[l],b[l])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});return Ya.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){B(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function pd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||
Ib;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&
f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});Va(g,a)};qd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Va(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Qa);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Qa,Jb+" ng-submitted");
f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function gb(b,a,c,d,e,f){var g=Q(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;k()})}var k=function(b){l&&(f.defer.cancel(l),
l=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=P(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",k);else{var l,m=function(a,b,c){l||(l=f.defer(function(){l=null;b&&b.value===c||k(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",k);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?
"":d.$viewValue)}}function Kb(b,a){return function(c,d){var e,f;if(pa(c))return c;if(z(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Mf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,
f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function hb(b,a,c,d){return function(e,f,g,h,k,l,m){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?pa(a)?a:c(a):u}rd(e,f,g,h);gb(e,f,g,h,k,l);var t=h&&h.$options&&h.$options.timezone,s;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,s),"UTC"===t&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):u});h.$formatters.push(function(a){if(a&&!pa(a))throw Lb("datefmt",a);if(p(a)){if((s=
a)&&"UTC"===t){var b=6E4*s.getTimezoneOffset();s=new Date(s.getTime()+b)}return m("date")(a,d,t)}s=null;return""});if(y(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!p(a)||C(r)||c(a)>=r};g.$observe("min",function(a){r=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var n;h.$validators.max=function(a){return!p(a)||C(n)||c(a)<=n};g.$observe("max",function(a){n=q(a);h.$validate()})}}}function rd(b,a,c,d){(d.$$hasNativeValidators=O(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||
{};return c.badInput&&!c.typeMismatch?u:b})}function sd(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw A("ngModel")("constexpr",c,d);return b(a)}return e}function qd(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Pb(b,"-"):"";a(ib+b,!0===c);a(td+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,k=b.parentForm,l=b.$animate;f[td]=!(f[ib]=e.hasClass(ib));d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),g(d.$pending,
b,f)):(d.$pending&&h(d.$pending,b,f),ud(d.$pending)&&(d.$pending=u));Ua(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(vd,!0),d.$valid=d.$invalid=u,c("",null)):(a(vd,!1),d.$valid=ud(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);k.$setValidity(b,e,d)}}function ud(b){if(b)for(var a in b)return!1;return!0}function ic(b,a){b="ngClass"+b;return["$animate",
function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!x(a)){if(z(a))return a.split(" ");if(O(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===
a||f.$index%2===a){var l=e(b||[]);if(!m){var t=k(l,1);h.$addClass(t)}else if(!ga(b,m)){var s=e(m),t=d(l,s),l=d(s,l),t=k(t,1),l=k(l,-1);t&&t.length&&c.addClass(g,t);l&&l.length&&c.removeClass(g,l)}}m=qa(b)}var m;f.$watch(h[b],l,!0);h.$observe("class",function(a){l(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));g===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}var Nf=/^\/(.+)\/([a-z]*)$/,Q=function(b){return z(b)?b.toLowerCase():
b},rc=Object.prototype.hasOwnProperty,rb=function(b){return z(b)?b.toUpperCase():b},Pa,D,ra,Ya=[].slice,rf=[].splice,Of=[].push,Ja=Object.prototype.toString,Wa=A("ng"),ha=U.angular||(U.angular={}),ab,kb=0;Pa=X.documentMode;H.$inject=[];oa.$inject=[];var x=Array.isArray,P=function(b){return z(b)?b.trim():b},ed=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},$a=function(){if(y($a.isActive_))return $a.isActive_;var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));
if(!b)try{new Function("")}catch(a){b=!0}return $a.isActive_=b},ob=["ng-","data-ng-","ng:","x-ng-"],Kd=/[A-Z]/g,tc=!1,Qb,na=1,mb=3,Od={full:"1.3.6",major:1,minor:3,dot:6,codeName:"robofunky-danceblaster"};R.expando="ng339";var wb=R.cache={},ff=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var af=/([\:\-\_]+(.))/g,bf=/^moz([A-Z])/,Pf={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=A("jqLite"),ef=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,cf=/<([\w:]+)/,df=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Ka=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(U).on("load",a))},
toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?D(this[b]):D(this[this.length+b])},length:0,push:Of,sort:[].sort,splice:[].splice},Bb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){Bb[Q(b)]=b});var Lc={};r("input select option textarea button form details".split(" "),function(b){Lc[b]=!0});var Mc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};
r({data:Vb,removeData:ub},function(b,a){R[a]=b});r({data:Vb,inheritedData:Ab,scope:function(b){return D.data(b,"$scope")||Ab(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return D.data(b,"$isolateScope")||D.data(b,"$isolateScopeNoTemplate")},controller:Hc,injector:function(b){return Ab(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:xb,css:function(b,a,c){a=bb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=Q(a);if(Bb[d])if(y(c))c?
(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||H).specified?d:u;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(C(b)){var d=a.nodeType;return d===na||d===mb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(C(a)){if(b.multiple&&"select"===ua(b)){var c=[];r(b.options,function(a){a.selected&&
c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(C(a))return b.innerHTML;tb(b,!0);b.innerHTML=a},empty:Ic},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Ic&&(2==b.length&&b!==xb&&b!==Hc?a:d)===u){if(O(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});
r({removeData:ub,on:function a(c,d,e,f){if(y(f))throw Tb("onargs");if(Dc(c)){var g=vb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=jf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],k=g.length;k--;){d=g[k];var l=f[d];l||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Pf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),l=f[d]);l.push(e)}}},off:Gc,one:function(a,c,d){a=D(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,
d)},replaceWith:function(a,c){var d,e=a.parentNode;tb(a);r(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){a.nodeType===na&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===na||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===na){var d=a.firstChild;r(new R(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=D(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Jc,detach:function(a){Jc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:zb,removeClass:yb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;C(f)&&(f=!xb(a,c));(f?zb:yb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=vb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:H,type:g,target:a},c.type&&(e=G(e,
c)),c=qa(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,k=this.length;h<k;h++)C(g)?(g=a(this[h],c,e,f),y(g)&&(g=D(g))):Fc(g,a(this[h],c,e,f));return y(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});cb.prototype={put:function(a,c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];
return c}};var Oc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,lf=/,/,mf=/^\s*(_?)(\S+?)\1\s*$/,Nc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=A("$injector");Ob.$$annotate=Wb;var Qf=A("$animate"),Ae=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Qf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};
this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ia();r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function k(){m||
(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function l(a,c){if(ha.isObject(c)){var d=G(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){l(a,{from:c,to:d});return k()},enter:function(a,c,d,e){l(a,e);d?d.after(a):c.prepend(a);return k()},leave:function(a,c){a.remove();return k()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=D(a);c=z(c)?c:x(c)?c.join(" "):"";
r(a,function(a){zb(a,c)});l(a,d);return k()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=D(a);c=z(c)?c:x(c)?c.join(" "):"";r(a,function(a){yb(a,c)});l(a,d);return k()},setClass:function(a,c,d,e){var k=this,l=!1;a=D(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ha.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=x(c)?c:c.split(" ");d=x(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=
a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);l(a,e);return k()},enabled:H,cancel:H}}]}],ka=A("$compile");vc.$inject=["$provide","$$sanitizeUriProvider"];var qf=/^((?:x|data)[\:\-_])/i,Sc="application/json",Zb={"Content-Type":Sc+";charset=utf-8"},
tf=/^\s*(\[|\{[^\{])/,uf=/[\}\]]\s*$/,sf=/^\)\]\}',?\n/,$b=A("$interpolate"),Rf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xf={http:80,https:443,ftp:21},Eb=A("$location"),Sf={$$html5:!1,$$replace:!1,absUrl:Fb("$$absUrl"),url:function(a){if(C(a))return this.$$url;var c=Rf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Fb("$$protocol"),host:Fb("$$host"),port:Fb("$$port"),path:ad("$$path",function(a){a=null!==a?
a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(z(a)||Y(a))a=a.toString(),this.$$search=qc(a);else if(O(a))a=Da(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Eb("isrcharg");break;default:C(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:ad("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
r([$c,dc,cc],function(a){a.prototype=Object.create(Sf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Eb("nostate");this.$$state=C(c)?null:c;return this}});var la=A("$parse"),Tf=Function.prototype.call,Uf=Function.prototype.apply,Vf=Function.prototype.bind,Mb=ia();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;Mb[c]=a});Mb["this"]=
function(a){return a};Mb["this"].sharedGetter=!0;var jb=G(ia(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,
c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Wf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=
[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=jb[c],f=jb[d];jb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=
a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=
this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Wf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var eb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};eb.ZERO=G(function(){return 0},
{sharedGetter:!0,constant:!0});eb.prototype={constructor:eb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier?a=this.identifier():this.peek().constant?a=
this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,
e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw la("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=jb[a];return G(function(a,f){return d(a,
f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=jb[c];return G(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return Mb[a]||cd(a,this.options,this.text)},constant:function(){var a=this.consume().value;return G(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=
[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return G(function(f,h){var k=a(f,h);if(e){e[0]=
k;for(k=d.length;k--;)e[k+1]=d[k](f,h);return c.apply(u,e)}return c(k)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),G(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&
(c=this.assignment(),this.consume(":"))){var d=this.assignment();return G(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=",
"===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?
this.primary():(a=this.expect("-"))?this.binaryFn(eb.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.consume().text,e=cd(d,this.options,c);return G(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return Na(h,d,g,c)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return G(function(e,f){var g=a(e,f),h=d(e,f);sa(h,c);return g?ta(g[h],
c):u},{assign:function(e,f,g){var h=sa(d(e,g),c);(g=ta(a(e,g),c))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var k=c?c(g,h):y(c)?u:g,l=a(g,h,k)||H;if(f)for(var m=d.length;m--;)f[m]=ta(d[m](g,h),e);ta(k,e);if(l){if(l.constructor===l)throw la("isecfn",e);if(l===Tf||l===Uf||l===Vf)throw la("isecff",e);}k=l.apply?l.apply(k,
f):l(f[0],f[1],f[2],f[3],f[4]);return ta(k,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return G(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):
this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return G(function(d,f){for(var g={},h=0,k=c.length;h<k;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ec),inputs:c})}};var Af=ia(),zf=ia(),Bf=Object.prototype.valueOf,Ca=A("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ka=A("$compile"),Z=X.createElement("a"),gd=Ba(U.location.href);Cc.$inject=["$provide"];hd.$inject=["$locale"];jd.$inject=
["$locale"];var md=".",Lf={yyyy:V("FullYear",4),yy:V("FullYear",2,0,!0),y:V("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:V("Month",2,1),M:V("Month",1,1),dd:V("Date",2),d:V("Date",1),HH:V("Hours",2),H:V("Hours",1),hh:V("Hours",2,-12),h:V("Hours",1,-12),mm:V("Minutes",2),m:V("Minutes",1),ss:V("Seconds",2),s:V("Seconds",1),sss:V("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=
a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:od(2),w:od(1)},Kf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Jf=/^\-?\d+$/;id.$inject=["$locale"];var Gf=ca(Q),Hf=ca(rb);kd.$inject=["$parse"];var Rd=ca({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ja.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),sb=
{};r(Bb,function(a,c){if("multiple"!=a){var d=wa("ng-"+c);sb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Mc,function(a,c){sb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Nf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=wa("ng-"+a);sb[c]=function(){return{priority:99,
link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ja.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Pa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:H,$$renameControl:function(a,c){a.$name=c},$removeControl:H,$setValidity:H,$setDirty:H,$setPristine:H,$setSubmitted:H};pd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var wd=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:pd,compile:function(a){a.addClass(Qa).addClass(ib);return{pre:function(a,d,g,h){if(!("action"in g)){var k=function(c){a.$apply(function(){h.$commitViewValue();h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",k,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",k,!1)},0,!1)})}var l=h.$$parentForm,m=h.$name;m&&(Na(a,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(Na(a,m,u,m),m=c,Na(a,m,h,m),l.$$renameControl(h,
m))}));d.on("$destroy",function(){l.$removeControl(h);m&&Na(a,m,u,m);G(h,Ib)})}}}}}]},Sd=wd(),ee=wd(!0),Mf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Xf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Yf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Zf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,xd=/^(\d{4})-(\d{2})-(\d{2})$/,yd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
jc=/^(\d{4})-W(\d\d)$/,zd=/^(\d{4})-(\d\d)$/,Ad=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,$f=/(\s+|^)default(\s+|$)/,Lb=new A("ngModel"),Bd={text:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e)},date:hb("date",xd,Kb(xd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":hb("datetimelocal",yd,Kb(yd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:hb("time",Ad,Kb(Ad,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:hb("week",jc,function(a,c){if(pa(a))return a;if(z(a)){jc.lastIndex=0;var d=
jc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,k=0,l=nd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),k=c.getMilliseconds());return new Date(e,0,l.getDate()+f,d,g,h,k)}}return NaN},"yyyy-Www"),month:hb("month",zd,Kb(zd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){rd(a,c,d,e);gb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Zf.test(a)?parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Y(a))throw Lb("numfmt",
a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||C(h)||a>=h};d.$observe("min",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));h=Y(a)&&!isNaN(a)?a:u;e.$validate()})}if(d.max||d.ngMax){var k;e.$validators.max=function(a){return e.$isEmpty(a)||C(k)||a<=k};d.$observe("max",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));k=Y(a)&&!isNaN(a)?a:u;e.$validate()})}},url:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="url";e.$validators.url=function(a,
c){var d=a||c;return e.$isEmpty(d)||Xf.test(d)}},email:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||Yf.test(d)}},radio:function(a,c,d,e){C(d.name)&&c.attr("name",++kb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,k){var l=sd(k,a,"ngTrueValue",d.ngTrueValue,!0),
m=sd(k,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ga(a,l)});e.$parsers.push(function(a){return a?l:m})},hidden:H,button:H,submit:H,reset:H,file:H},wc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,k){k[0]&&(Bd[Q(h.type)]||Bd.text)(f,g,h,k[0],
c,a,d,e)}}}}],ib="ng-valid",td="ng-invalid",Qa="ng-pristine",Jb="ng-dirty",vd="ng-pending",ag=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,k,l,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=
!1;this.$error={};this.$$success={};this.$pending=u;this.$name=m(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,t=p,s=q,N=null,n=this;this.$$setOptions=function(a){if((n.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");t=function(a){var d=p(a);B(d)&&(d=c(a));return d};s=function(a,c){B(p(a))?g(a,{$$$p:n.$modelValue}):q(a,n.$modelValue)}}else if(!p.assign)throw Lb("nonassign",d.ngModel,va(e));};this.$render=H;this.$isEmpty=function(a){return C(a)||""===a||null===a||a!==
a};var v=e.inheritedData("$formController")||Ib,w=0;qd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Qa)};this.$setDirty=function(){n.$dirty=!0;n.$pristine=!1;g.removeClass(e,Qa);g.addClass(e,Jb);v.$setDirty()};this.$setUntouched=function(){n.$touched=!1;n.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){n.$touched=
!0;n.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(N);n.$viewValue=n.$$lastCommittedViewValue;n.$render()};this.$validate=function(){if(!Y(n.$modelValue)||!isNaN(n.$modelValue)){var a=n.$$rawModelValue,c=n.$valid,d=n.$modelValue,e=n.$options&&n.$options.allowInvalid;n.$$runValidators(n.$error[n.$$parserName||"parse"]?!1:u,a,n.$$lastCommittedViewValue,function(f){e||c===f||(n.$modelValue=f?a:u,n.$modelValue!==d&&n.$$writeModelToScope())})}};this.$$runValidators=
function(a,c,d,e){function f(){var a=!0;r(n.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(r(n.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;r(n.$asyncValidators,function(f,g){var k=f(c,d);if(!k||!B(k.then))throw Lb("$asyncValidators",k);h(g,u);a.push(k.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?l.all(a).then(function(){k(e)},H):k(!0)}function h(a,c){m===w&&n.$setValidity(a,c)}function k(a){m===w&&e(a)}w++;var m=w;(function(a){var c=
n.$$parserName||"parse";if(a===u)h(c,null);else if(h(c,a),!a)return r(n.$validators,function(a,c){h(c,null)}),r(n.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():k(!1):k(!1)};this.$commitViewValue=function(){var a=n.$viewValue;h.cancel(N);if(n.$$lastCommittedViewValue!==a||""===a&&n.$$hasNativeValidators)n.$$lastCommittedViewValue=a,n.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=n.$$lastCommittedViewValue,d=C(c)?u:!0;if(d)for(var e=
0;e<n.$parsers.length;e++)if(c=n.$parsers[e](c),C(c)){d=!1;break}Y(n.$modelValue)&&isNaN(n.$modelValue)&&(n.$modelValue=t(a));var f=n.$modelValue,g=n.$options&&n.$options.allowInvalid;n.$$rawModelValue=c;g&&(n.$modelValue=c,n.$modelValue!==f&&n.$$writeModelToScope());n.$$runValidators(d,c,n.$$lastCommittedViewValue,function(a){g||(n.$modelValue=a?c:u,n.$modelValue!==f&&n.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,n.$modelValue);r(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){n.$viewValue=a;n.$options&&!n.$options.updateOnDefault||n.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=n.$options;e&&y(e.debounce)&&(e=e.debounce,Y(e)?d=e:Y(e[c])?d=e[c]:Y(e["default"])&&(d=e["default"]));h.cancel(N);d?N=h(function(){n.$commitViewValue()},d):k.$$phase?n.$commitViewValue():a.$apply(function(){n.$commitViewValue()})};a.$watch(function(){var c=t(a);if(c!==n.$modelValue){n.$modelValue=n.$$rawModelValue=c;for(var d=
n.$formatters,e=d.length,f=c;e--;)f=d[e](f);n.$viewValue!==f&&(n.$viewValue=n.$$lastCommittedViewValue=f,n.$render(),n.$$runValidators(u,c,f,H))}return c})}],te=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:ag,priority:1,compile:function(c){c.addClass(Qa).addClass("ng-untouched").addClass(ib);return{pre:function(a,c,f,g){var h=g[0],k=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);k.$addControl(h);f.$observe("name",function(a){h.$name!==a&&k.$$renameControl(h,
a)});a.$on("$destroy",function(){k.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],ve=ca({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},xc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){z(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw A("ngPattern")("noregexp",g,a,va(c));f=a||u;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||C(f)||f.test(a)}}}}},Ac=function(){return{restrict:"A",
require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=$(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(a)||c.length<=f}}}}},zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=$(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}},ue=function(){return{restrict:"A",priority:100,require:"ngModel",
link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?P(f):f;e.$parsers.push(function(a){if(!C(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?P(a):a)});return c}});e.$formatters.push(function(a){return x(a)?a.join(f):u});e.$isEmpty=function(a){return!a||!a.length}}}},bg=/^(true|false|\d+)$/,we=function(){return{restrict:"A",priority:100,compile:function(a,c){return bg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,
function(a){f.$set("value",a)})}}}},xe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=P(this.$options.updateOn.replace($f,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Xd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,
f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],Zd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],Yd=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});
d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],$d=ic("",!0),be=ic("Odd",0),ae=ic("Even",1),ce=Ia({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),de=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Bc={},cg={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=wa("ng-"+a);Bc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};cg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ge=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,l;c.$watch(e.ngIf,function(c){c?k||g(function(c,f){k=f;c[c.length++]=X.createComment(" end ngIf: "+
e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=qb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],he=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ha.noop,compile:function(f,g){var h=g.ngInclude||g.src,k=g.onload||"",l=g.autoscroll;return function(f,g,q,r,s){var u=0,n,v,w,K=function(){v&&(v.remove(),v=null);n&&(n.$destroy(),
n=null);w&&(d.leave(w).then(function(){v=null}),v=w,w=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!y(l)||l&&!f.$eval(l)||c()},q=++u;e?(a(e,!0).then(function(a){if(q===u){var c=f.$new();r.template=a;a=s(c,function(a){K();d.enter(a,null,g).then(h)});n=c;w=a;n.$emit("$includeContentLoaded",e);f.$eval(k)}},function(){q===u&&(K(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(K(),r.template=null)})}}}}],ye=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Ec(f.template,X).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ie=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),je=Ia({terminal:!0,priority:1E3}),ke=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function k(a){g.text(a||"")}var l=
h.count,m=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(m)||{},t={},m=c.startSymbol(),s=c.endSymbol(),u=m+l+"-"+p+s,n=ha.noop,v;r(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+Q(d[2]),q[d]=g.attr(h.$attr[c]))});r(q,function(a,e){t[e]=c(a.replace(d,u))});f.$watch(l,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===v||d&&isNaN(v)||(n(),n=f.$watch(t[c],k),v=c)})}}}],le=["$parse","$animate",function(a,c){var d=A("ngRepeat"),e=function(a,c,d,e,l,m,p){a[d]=
e;l&&(a[l]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=X.createComment(" end ngRepeat: "+h+" "),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw d("iexp",h);var m=l[1],p=l[2],q=l[3],t=l[4],l=m.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
if(!l)throw d("iidexp",m);var s=l[3]||l[1],y=l[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(q)))throw d("badident",q);var n,v,w,A,E={$id:Ma};t?n=a(t):(w=function(a,c){return Ma(c)},A=function(a){return a});return function(a,f,g,l,m){n&&(v=function(c,d,e){y&&(E[y]=c);E[s]=d;E.$index=e;return n(a,E)});var t=ia();a.$watchCollection(p,function(g){var l,n,p=f[0],F,E=ia(),C,H,G,T,B,x,z;q&&(a[q]=g);if(Ra(g))B=g,n=v||
w;else{n=v||A;B=[];for(z in g)g.hasOwnProperty(z)&&"$"!=z.charAt(0)&&B.push(z);B.sort()}C=B.length;z=Array(C);for(l=0;l<C;l++)if(H=g===B?l:B[l],G=g[H],T=n(H,G,l),t[T])x=t[T],delete t[T],E[T]=x,z[l]=x;else{if(E[T])throw r(z,function(a){a&&a.scope&&(t[a.id]=a)}),d("dupes",h,T,G);z[l]={id:T,scope:u,clone:u};E[T]=!0}for(F in t){x=t[F];T=qb(x.clone);c.leave(T);if(T[0].parentNode)for(l=0,n=T.length;l<n;l++)T[l].$$NG_REMOVED=!0;x.scope.$destroy()}for(l=0;l<C;l++)if(H=g===B?l:B[l],G=g[H],x=z[l],x.scope){F=
p;do F=F.nextSibling;while(F&&F.$$NG_REMOVED);x.clone[0]!=F&&c.move(qb(x.clone),null,D(p));p=x.clone[x.clone.length-1];e(x.scope,l,s,G,y,H,C)}else m(function(a,d){x.scope=d;var f=k.cloneNode(!1);a[a.length++]=f;c.enter(a,null,D(p));p=f;x.clone=a;E[x.id]=x;e(x.scope,l,s,G,y,H,C)});t=E})}}}}],me=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],fe=["$animate",
function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ne=Ia(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),oe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],l=[],m=function(a,c){return function(){a.splice(c,
1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=qb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=X.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],pe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,
link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),qe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),se=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw A("ngTransclude")("orphan",va(c));f(function(a){c.empty();c.append(a)})}}),Td=["$templateCache",function(a){return{restrict:"E",
terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],dg=A("ngOptions"),re=ca({restrict:"A",terminal:!0}),Ud=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:H};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,
c,d){var k=this,l={},m=e,p;k.databound=d.ngModel;k.init=function(a,c,d){m=a;p=d};k.addOption=function(c,d){La(c,'"option value"');l[c]=!0;m.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};k.removeOption=function(a){this.hasOption(a)&&(delete l[a],m.$viewValue===a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c="? "+Ma(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};k.hasOption=function(a){return l.hasOwnProperty(a)};
c.$on("$destroy",function(){k.renderUnknownOption=H})}],link:function(e,g,h,k){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(E.parent()&&E.remove(),c.val(a),""===a&&n.prop("selected",!0)):C(a)&&n?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){E.parent()&&E.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new cb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){ga(e,
d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){U[B]=d;G&&(U[G]=c);return a(e,U)}function k(a){var c;if(t)if(L&&x(a)){c=new cb([]);for(var d=0;d<a.length;d++)c.put(h(L,null,a[d]),!0)}else c=new cb(a);else L&&(a=h(L,null,a));return function(d,e){var f;f=L?L:C?C:z;return t?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){v||(e.$$postDigest(n),
v=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function n(){v=!1;var a={"":[]},c=[""],d,l,p,s,u;p=g.$viewValue;s=O(e)||[];var C=G?Object.keys(s).sort():s,x,B,D,z,S={};u=k(p);var P=!1,V,X;Q={};for(z=0;D=C.length,z<D;z++){x=z;if(G&&(x=C[z],"$"===x.charAt(0)))continue;B=s[x];d=h(J,x,B)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=u(x,B);P=P||d;B=h(E,x,B);B=y(B)?B:"";X=L?L(e,U):G?C[z]:z;L&&(Q[X]=x);l.push({id:X,label:B,selected:d})}t||(A||null===p?a[""].unshift({id:"",label:"",selected:!P}):P||a[""].unshift({id:"?",
label:"",selected:!0}));x=0;for(C=c.length;x<C;x++){d=c[x];l=a[d];R.length<=x?(p={element:H.clone().attr("label",d),label:l.label},s=[p],R.push(s),f.append(p.element)):(s=R[x],p=s[0],p.label!=d&&p.element.attr("label",p.label=d));P=null;z=0;for(D=l.length;z<D;z++)d=l[z],(u=s[z+1])?(P=u.element,u.label!==d.label&&(m(S,u.label,!1),m(S,d.label,!0),P.text(u.label=d.label),P.prop("label",u.label)),u.id!==d.id&&P.val(u.id=d.id),P[0].selected!==d.selected&&(P.prop("selected",u.selected=d.selected),Pa&&P.prop("selected",
u.selected))):(""===d.id&&A?V=A:(V=w.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),s.push(u={element:V,label:d.label,id:d.id,selected:d.selected}),m(S,d.label,!0),P?P.after(V):p.element.append(V),P=V);for(z++;s.length>z;)d=s.pop(),m(S,d.label,!1),d.element.remove()}for(;R.length>x;){l=R.pop();for(z=1;z<l.length;++z)m(S,l[z].label,!1);l[0].element.remove()}r(S,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var p;if(!(p=s.match(d)))throw dg("iexp",
s,va(f));var E=c(p[2]||p[1]),B=p[4]||p[6],D=/ as /.test(p[0])&&p[1],C=D?c(D):null,G=p[5],J=c(p[3]||""),z=c(p[2]?p[1]:B),O=c(p[7]),L=p[8]?c(p[8]):null,Q={},R=[[{element:f,label:""}]],U={};A&&(a(A)(e),A.removeClass("ng-scope"),A.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=O(e)||[],c;if(t)c=[],r(f.val(),function(d){d=L?Q[d]:d;c.push("?"===d?u:""===d?null:h(C?C:z,d,a[d]))});else{var d=L?Q[f.val()]:f.val();c="?"===d?u:""===d?null:h(C?C:z,d,a[d])}g.$setViewValue(c);n()})});g.$render=
n;e.$watchCollection(O,l);e.$watchCollection(function(){var a=O(e),c;if(a&&x(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(E,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(E,d,a[d]));return c},l);t&&e.$watchCollection(function(){return g.$modelValue},l)}if(k[1]){var q=k[0];k=k[1];var t=h.multiple,s=h.ngOptions,A=!1,n,v=!1,w=D(X.createElement("option")),H=D(X.createElement("optgroup")),E=w.clone();h=0;for(var B=g.children(),G=B.length;h<G;h++)if(""===B[h].value){n=A=B.eq(h);
break}q.init(k,A,E);t&&(k.$isEmpty=function(a){return!a||0===a.length});s?p(e,g,k):t?m(e,g,k):l(e,g,k,q)}}}}],Wd=["$interpolate",function(a){var c={addOption:H,removeOption:H};return{restrict:"E",priority:100,compile:function(d,e){if(C(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var l=d.parent(),m=l.data("$selectController")||l.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,
d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Vd=ca({restrict:"E",terminal:!1});U.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Ld(),Nd(ha),D(X).ready(function(){Hd(X,sc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*
 AngularJS v1.3.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,C,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?C.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){C.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,C){return function(g){return f(function(){g()})}}]).config(["$provide","$animateProvider",function(X,C){function g(f){for(var n=0;n<f.length;n++){var g=f[n];if(1==g.nodeType)return g}}
function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,da=C.$$selectors,aa=f.isArray,ea=f.isString,ga=f.isObject,r={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,H,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}function D(a){var c,b=N.defer();
b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function I(a){if(ga(a))return a.tempClasses&&ea(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],l=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===e?(b||"addClass"==c.event)&&
l.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+l.length&&[f.join(" "),l.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(da[""]));for(var d=0;d<a.length;d++){var f=a[d],k=da[f];k&&!b[f]&&(c.push(M.get(k)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,fn:b}),J.push({event:a,fn:c}),
!0}function k(c,l,w){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(l){(l[f]||t)();if(++m<E.length)break a;l=null}w()}};switch(c.event){case "setClass":l.push(c.fn(a,e,A,p,d));break;case "animate":l.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":l.push(c.fn(a,e||b,p,d));break;case "removeClass":l.push(c.fn(a,A||b,p,d));break;default:l.push(c.fn(a,p,d))}});l&&0===l.length&&w()}var l=a[0];if(l){d&&(d.to=d.to||{},d.from=d.from||{});var e,A;aa(b)&&(e=
b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var w="setClass"==c,E=w||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(x(p)){var ca=t,m=[],J=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&w&&(h(a,"addClass"),h(a,"removeClass"))});return{node:l,event:c,className:b,isClassBased:E,isSetClassOperation:w,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){ca=a;k(J,m,function(){ca=t;a()})},after:function(a){g=
a;k(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),ca(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function G(a,c,b,d,h,k,l,e){function A(e){var l="$animate:"+e;J&&J[l]&&0<J[l].length&&H(function(){b.triggerHandler(l,{event:a,className:c})})}function w(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,k())}function g(){if(!g.hasBeenRun){m&&m.applyStyles();g.hasBeenRun=!0;l&&l.tempClasses&&n(l.tempClasses,function(a){u.removeClass(b,
a)});var w=b.data("$$ngAnimateState");w&&(m&&m.isClassBased?B(b,c):(H(function(){var e=b.data("$$ngAnimateState")||{};fa==e.index&&B(b,c,a)}),b.data("$$ngAnimateState",w)));A("close");e()}}var m=U(b,a,c,l);if(!m)return p(),w(),E(),g(),t;a=m.event;c=m.className;var J=f.element._data(m.node),J=J&&J.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),w(),E(),g(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==q.event?
(s.push(q),B(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),B(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};B(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),w(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),B(a,"ng-leave"))});
u.addClass(b,"ng-animate");l&&l.tempClasses&&n(l.tempClasses,function(a){u.addClass(b,a)});var fa=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:fa,totalActive:s});w();m.before(function(e){var l=b.data("$$ngAnimateState");e=e||!l||!l.active[c]||m.isClassBased&&l.active[c].event!=a;p();!0===e?g():(E(),m.after(g))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),n(a,function(a){a=
f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function B(a,c){if(ba(a,y))r.disabled||(r.running=!1,r.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(r.disabled)return!0;if(ba(a,y))return r.running;var b,d,g;do{if(0===c.length)break;var k=ba(c,y),l=k?r:c.data("$$ngAnimateState")||
{};if(l.disabled)return!0;k&&(g=!0);!1!==b&&(k=c.data("$$ngAnimateChildren"),f.isDefined(k)&&(b=k));d=d||l.running||l.last&&!l.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",r);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){r.running=!1})}))}),K=0,V=C.classNameFilter(),x=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,c,b,d,h){d=d||"ng-inline-animate";
h=I(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return G("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=I(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return G("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=I(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return G("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,c,b,d){d=I(d);a=f.element(a);
c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return G("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=I(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,k=a.data("$$animateClasses"),l=!!k;k||(k={classes:{}});h=k.classes;c=aa(c)?c:c.split(" ");n(c,function(a){a&&a.length&&(h[a]=
!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(l)return d&&k.options&&(k.options=f.extend(k.options||{},d)),k.promise;a.data("$$animateClasses",k={classes:h,options:d});return k.promise=D(function(e){var l=a.parent(),b=g(a),c=b.parentNode;if(!c||c.$$NG_REMOVED||b.$$NG_REMOVED)e();else{b=a.data("$$animateClasses");a.removeData("$$animateClasses");var c=a.data("$$ngAnimateState")||{},d=S(a,b,c.active);return d?G("setClass",d,a,l,null,function(){d[0]&&O.$$addClassImmediately(a,
d[0]);d[1]&&O.$$removeClassImmediately(a,d[1])},b.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)B(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:r.disabled=!a;break;default:a=!r.disabled}return!!a}}}]);C.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,C,M,Y){function y(){b||(b=Y(function(){c=[];b=null;x={}}))}function H(a,e){b&&b();c.push(e);b=Y(function(){n(c,
function(a){a()});c=[];b=null;x={}})}function P(a,e){var b=g(a);a=f.element(b);k.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(k);k=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?x[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),d);g=Math.max(Q(a[K+"Delay"]),g);var e=Q(a[K+"Duration"]);
0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(x[e]=b)}return b}function Q(a){var e=0;a=ea(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+"-"+g(e).getAttribute("class");var p=f+" "+c,h=x[p]?++x[p].total:
0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!x[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},k=Z(e,p);f=k.transitionDuration;k=k.animationDuration;if(b&&0===f&&0===k)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<k&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||[]});p=g(e);c&&(I(p,!0),d&&e.css(d));
b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,k);u.removeClass(e,t);z&&M.cancel(z);G(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-H,0)>=C&&b>=x&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&a){var k="",t="";n(b.split(" "),function(a,
b){var e=(0<b?" ":"")+a;k+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var y=0;0<v.animationDelay&&0===v.animationDuration&&(y=v.animationDelay*q,s.push(B+"animation-play-state"));r=Math.round(100*Math.max(r,y))/100}r||(u.addClass(e,k),a.blockTransition&&I(m,!1));var F=Z(e,a.cacheKey+" "+k),x=Math.max(F.transitionDuration,F.animationDuration);if(0===x)u.removeClass(e,k),G(e,b),c();else{!r&&
d&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),C=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var H=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+x)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&I(m,!1);0<F.animationDuration&&(m.style[K+"PlayState"]="");u.addClass(e,k);u.removeClass(e,t);d&&(0===
F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function I(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&G(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);G(b,c);d()}function U(a,b,c,d,f){var g=S(a,b,c,f.from);if(g){var h=g;H(b,function(){h=T(a,b,c,d,f.to)});
return function(a){(h||t)(a)}}y();d()}function G(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var B="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(B="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):(z="transition",$="transitionend");N.onanimationend===
W&&N.onwebkitanimationend!==W?(B="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var x={},a=0,c=[],b,d=null,h=0,k=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",b,c)},beforeSetClass:function(a,b,c,d,f){f=f||{};b=q(c,
"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return H(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return H(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return H(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",a,q(b,"-add"),c,d.to)},removeClass:function(a,
b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*
 AngularJS v1.3.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var d=[];s(d,h.noop).chars(a);return d.join("")}function g(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function F(a,d){function c(a,b,c,l){b=h.lowercase(b);if(t[b])for(;f.last()&&u[f.last()];)e("",f.last());v[b]&&f.last()==b&&e("",b);(l=w[b]||!!l)||f.push(b);var m={};c.replace(G,function(a,b,d,c,e){m[b]=r(d||c||e||"")});d.start&&d.start(b,m,l)}function e(a,b){var c=0,e;if(b=h.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,f=[],m=a,l;for(f.last=function(){return f[f.length-1]};a;){l="";k=!0;if(f.last()&&x[f.last()])a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");d.chars&&d.chars(r(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,
b)),a=a.substring(b+3),k=!1);else if(y.test(a)){if(b=a.match(y))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(z))a=a.substring(b[0].length),b[0].replace(z,e),k=!1}else K.test(a)&&((b=a.match(A))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(A,c)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(r(l)))}if(a==m)throw L("badparse",a);m=a}e()}function r(a){if(!a)return"";var d=M.exec(a);a=d[1];var c=d[3];if(d=d[2])q.innerHTML=
d.replace(/</g,"&lt;"),d="textContent"in q?q.textContent:q.innerText;return a+d+c}function B(a){return a.replace(/&/g,"&amp;").replace(N,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(O,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(a,d){var c=!1,e=h.bind(a,a.push);return{start:function(a,k,f){a=h.lowercase(a);!c&&x[a]&&(c=a);c||!0!==C[a]||(e("<"),e(a),h.forEach(k,function(c,f){var k=
h.lowercase(f),g="img"===a&&"src"===k||"background"===k;!0!==P[k]||!0===D[k]&&!d(c,g)||(e(" "),e(f),e('="'),e(B(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=h.lowercase(a);c||!0!==C[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(B(a))}}}var L=h.$$minErr("$sanitize"),A=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,z=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,
J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,y=/<!DOCTYPE([^>]*?)>/i,I=/<!\[CDATA\[(.*?)]]\x3e/g,N=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,O=/([^\#-~| |!])/g,w=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var v=h.extend({},p,n),t=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),u=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use");var x=g("script,style"),C=h.extend({},w,t,u,v,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan");
var P=h.extend({},D,p,n),q=document.createElement("pre"),M=/^(\s*)([\s\S]*?)(\s*)$/;h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];F(d,s(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/,c=/^mailto:/;return function(e,b){function k(a){a&&g.push(E(a))}
function f(a,c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!e)return e;for(var m,l=e,g=[],n,p;m=l.match(d);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),f(n,m[0].replace(c,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return M(new(M(function(){},{prototype:a})),b)}function e(a){return L(arguments,function(b){b!==a&&L(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var c=[];return b.forEach(a,function(a,b){c.push(b)}),c}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return M({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return L(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function m(a,b){var c=K(a),d=c?[]:{};return L(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function n(a,b){var c=K(a)?[]:{};return L(a,function(a,d){c[d]=b(a,d)}),c}function o(a,b){var d=1,f=2,i={},j=[],k=i,m=M(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,I(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);L(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return J(a)&&a.then&&a.$$promises}if(!J(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return L(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!G(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;L(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!J(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=m;var n=a.defer(),r=n.promise,s=r.$$promises={},t=M({},d),u=1+q.length/3,v=!1;if(G(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,l(f.$$inheritedValues,p)),M(s,f.$$promises),f.$$values?(v=e(t,l(f.$$values,p)),r.$$inheritedValues=l(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=l(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function p(a,b,c){this.fromConfig=function(a,b,c){return G(a.template)?this.fromString(a.template,b):G(a.templateUrl)?this.fromUrl(a.templateUrl,b):G(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return H(a)?a(b):a},this.fromUrl=function(c,d){return H(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function q(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new O.Param(b,c,d,e),p[b]}function g(a,b,c){var d=["",""],e=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return e;switch(c){case!1:d=["(",")"];break;case!0:d=["?(",")?"];break;default:d=["("+c+"|",")?"]}return e+d[0]+b+d[1]}function h(c,e){var f,g,h,i,j;return f=c[2]||c[3],j=b.params[f],h=a.substring(m,c.index),g=e?c[4]:c[4]||("*"==c[1]?".*":null),i=O.type(g||"string")||d(O.type("string"),{pattern:new RegExp(g)}),{id:f,regexp:g,segment:h,type:i,cfg:j}}b=M({params:{}},J(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new O.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function r(a){M(this,a)}function s(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(a){return this.pattern.test(a)}function i(){return{strict:t,caseInsensitive:p}}function j(a){return H(a)||K(a)&&H(a[a.length-1])}function k(){for(;x.length;){var a=x.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(v[a.name],o.invoke(a.def))}}function l(a){M(this,a||{})}O=this;var o,p=!1,t=!0,u=!1,v={},w=!0,x=[],y={string:{encode:a,decode:e,is:f,pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return G(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,is:b.identity,equals:b.equals,pattern:/.*/}};s.$$getDefaultValue=function(a){if(!j(a.value))return a.value;if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(a.value)},this.caseInsensitive=function(a){return G(a)&&(p=a),p},this.strictMode=function(a){return G(a)&&(t=a),t},this.defaultSquashPolicy=function(a){if(!G(a))return u;if(a!==!0&&a!==!1&&!I(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return u=a,a},this.compile=function(a,b){return new q(a,M(i(),b))},this.isMatcher=function(a){if(!J(a))return!1;var b=!0;return L(q.prototype,function(c,d){H(c)&&(b=b&&G(a[d])&&H(a[d]))}),b},this.type=function(a,b,c){if(!G(b))return v[a];if(v.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return v[a]=new r(M({name:a},b)),c&&(x.push({name:a,def:c}),w||k()),this},L(y,function(a,b){v[b]=new r(M({name:b},a))}),v=d(v,{}),this.$get=["$injector",function(a){return o=a,w=!1,k(),L(y,function(a,b){v[b]||(v[b]=new r(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=J(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=j(a.value)?a.value:function(){return a.value},a}function i(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof r?b.type:new r(b.type):"config"===d?v.any:v.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return M(b,c,d).array}function l(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!G(c)||null==c)return u;if(c===!0||I(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=K(a.replace)?a.replace:[],I(e)&&f.push({from:e,to:c}),g=n(f,function(a){return a.from}),m(i,function(a){return-1===h(g,a.from)}).concat(f)}function q(){if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(d.$$fn)}function s(a){function b(a){return function(b){return b.from===a}}function c(a){var c=n(m(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),G(a)?w.type.decode(a):q()}function t(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=i(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=l(d,y),A=p(d,x,y,z);M(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:s,dynamic:c,config:d,toString:t})},l.prototype={$$new:function(){return d(this,M(new l,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(l.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),L(b,function(b){L(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return L(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return L(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var b,c,d,e=!0,f=this;return L(this.$$keys(),function(g){d=f[g],c=a[g],b=!c&&d.isOptional,e=e&&(b||!!d.type.is(c))}),e},$$parent:c},this.ParamSet=l}function t(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return G(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(I(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){var e=o&&d.url()===o;if(o=c,e)return!0;var g,h=j.length;for(g=0;h>g;g++)if(b(j[g]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){d.url(a.format(b||{})),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!H(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(I(a)){var b=a;a=function(){return b}}else if(!H(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=I(b);if(I(a)&&(a=d.compile(a)),!h&&!H(b)&&!K(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),M(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:I(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),M(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function u(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){if(!a)return c;var d=I(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=l(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var m=y[e];return!m||!d&&(d||m!==a&&m.self!==a)?c:m}function m(a,b){z[a]||(z[a]=[]),z[a].push(b)}function o(a){for(var b=z[a]||[];b.length;)p(b.shift())}function p(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!I(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(y.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):I(b.parent)?b.parent:J(b.parent)&&I(b.parent.name)?b.parent.name:"";if(e&&!y[e])return m(e,b.self);for(var f in B)H(B[f])&&(b[f]=B[f](b,B.$delegates[f]));return y[c]=b,!b[A]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){x.$current.navigable==b&&j(a,c)||x.transitionTo(b,a,{inherit:!0,location:!1})}]),o(c),b}function q(a){return a.indexOf("*")>-1}function r(a){var b=a.split("."),c=x.$current.name.split(".");if("**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function s(a,b){return I(a)&&!G(b)?B[a]:H(b)&&I(a)?(B[a]&&!B.$delegates[a]&&(B.$delegates[a]=B[a]),B[a]=b,this):this}function t(a,b){return J(a)?b=a:b.name=a,p(b),this}function u(a,e,f,h,m,o,p){function s(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),B;if(!g.retry)return null;if(f.$retry)return p.update(),C;var h=x.transition=e.when(g.retry);return h.then(function(){return h!==x.transition?u:(b.options.$retry=!0,x.transitionTo(b.to,b.toParams,b.options))},function(){return B}),p.update(),h}function t(a,c,d,g,i,j){var l=d?c:k(a.params.$$keys(),c),n={$stateParams:l};i.resolve=m.resolve(a.resolve,n,i.resolve,a);var o=[i.resolve.then(function(a){i.globals=a})];return g&&o.push(g),L(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return f.load(d,{view:c,locals:n,params:l,notify:j.notify})||""}],o.push(m.resolve(e,n,i.resolve,a).then(function(f){if(H(c.controllerProvider)||K(c.controllerProvider)){var g=b.extend({},e,n);f.$$controller=h.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,i[d]=f}))}),e.all(o).then(function(){return i})}var u=e.reject(new Error("transition superseded")),z=e.reject(new Error("transition prevented")),B=e.reject(new Error("transition aborted")),C=e.reject(new Error("transition failed"));return w.locals={resolve:null,globals:{$stateParams:{}}},x={params:{},current:w.self,$current:w,transition:null},x.reload=function(){return x.transitionTo(x.current,o,{reload:!0,inherit:!1,notify:!0})},x.go=function(a,b,c){return x.transitionTo(a,b,M({inherit:!0,relative:x.$current},c))},x.transitionTo=function(b,c,f){c=c||{},f=M({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=x.$current,m=x.params,n=j.path,q=l(b,f.relative);if(!G(q)){var r={to:b,toParams:c,options:f},y=s(r,j.self,m,f);if(y)return y;if(b=r.to,c=r.toParams,f=r.options,q=l(b,f.relative),!G(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[A])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(o,c||{},x.$current,q)),!q.params.$$validates(c))return C;c=q.params.$$values(c),b=q;var B=b.path,D=0,E=B[D],F=w.locals,H=[];if(!f.reload)for(;E&&E===n[D]&&E.ownParams.$$equals(c,m);)F=H[D]=E.locals,D++,E=B[D];if(v(b,j,F,f))return b.self.reloadOnSearch!==!1&&p.update(),x.transition=null,e.when(x.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,m).defaultPrevented)return p.update(),z;for(var I=e.when(F),J=D;J<B.length;J++,E=B[J])F=H[J]=d(F),I=t(E,c,E===b,I,F,f);var K=x.transition=I.then(function(){var d,e,g;if(x.transition!==K)return u;for(d=n.length-1;d>=D;d--)g=n[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<B.length;d++)e=B[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return x.transition!==K?u:(x.$current=b,x.current=b.self,x.params=c,N(x.params,o),x.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,m),p.update(!0),x.current)},function(d){return x.transition!==K?u:(x.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,m,d),g.defaultPrevented||p.update(),e.reject(d))});return K},x.is=function(a,b,d){d=M({relative:x.$current},d||{});var e=l(a,d.relative);return G(e)?x.$current!==e?!1:b?j(e.params.$$values(b),o):!0:c},x.includes=function(a,b,d){if(d=M({relative:x.$current},d||{}),I(a)&&q(a)){if(!r(a))return!1;a=x.$current.name}var e=l(a,d.relative);return G(e)?G(x.$current.includes[e.name])?b?j(e.params.$$values(b),o,g(b)):!0:!1:c},x.href=function(a,b,d){d=M({lossy:!0,inherit:!0,absolute:!1,relative:x.$current},d||{});var e=l(a,d.relative);if(!G(e))return null;d.inherit&&(b=i(o,b||{},x.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys(),b||{}),{absolute:d.absolute}):null},x.get=function(a,b){if(0===arguments.length)return n(g(y),function(a){return y[a].self});var c=l(a,b||x.$current);return c&&c.self?c.self:null},x}function v(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var w,x,y={},z={},A="abstract",B={parent:function(a){if(G(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):w},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=M({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(I(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||w).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new O.ParamSet;return L(a.params||{},function(a,c){b[c]||(b[c]=new O.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?M(a.parent.params.$$new(),a.ownParams):new O.ParamSet},views:function(a){var b={};return L(G(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?M({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};w=p({name:"",url:"^",views:null,"abstract":!0}),w.navigable=null,this.decorator=s,this.state=t,this.$get=u,u.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function v(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=M(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function w(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function x(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=z(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function y(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=z(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function z(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function A(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function B(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function C(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=A(g.uiSref,a.current.name),j=null,k=B(f)||a.$current,l=null,m="A"===f.prop("tagName"),n="FORM"===f[0].nodeName,o=n?"action":"href",p=!0,q={relative:k,inherit:!0},r=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in r&&(q[a]=r[a])});var s=function(c){if(c&&(j=b.copy(c)),p){l=a.href(i.state,j,q);var d=h[1]||h[0];return d&&d.$$setStateInfo(i.state,j),null===l?(p=!1,!1):void g.$set(o,l)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&s(a)},!0),j=b.copy(e.$eval(i.paramExpr))),s(),n||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,q)});b.preventDefault();var g=m&&!l?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function D(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(j):d.removeClass(j)}function g(){return"undefined"!=typeof e.uiSrefActiveEq?h&&a.is(h.name,i):h&&a.includes(h.name,i)}var h,i,j;j=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$setStateInfo=function(b,c){h=a.get(b,B(d)),i=c,f()},b.$on("$stateChangeSuccess",f)}]}}function E(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function F(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var G=b.isDefined,H=b.isFunction,I=b.isString,J=b.isObject,K=b.isArray,L=b.forEach,M=b.extend,N=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),o.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",o),p.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",p);var O;q.prototype.concat=function(a,b){var c={caseInsensitive:O.caseInsensitive(),strict:O.strictMode(),squash:O.defaultSquashPolicy()};return new q(this.sourcePath+a+this.sourceSearch,M(c,b),this)},q.prototype.toString=function(){return this.source},q.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/,"-")}var d=b(a).split(/-(?!\\)/),e=n(d,b);return n(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},q.prototype.parameters=function(a){return G(a)?this.params[a]||null:this.$$paramNames},q.prototype.validates=function(a){return this.params.$$validates(a)},q.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],o=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),o),q=p?m.squash:!1,r=m.type.encode(o);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=K(r)?n(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else I(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;K(r)||(r=[r]),r=n(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},r.prototype.is=function(){return!0},r.prototype.encode=function(a){return a},r.prototype.decode=function(a){return a},r.prototype.equals=function(a,b){return a==b},r.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},r.prototype.pattern=/.*/,r.prototype.toString=function(){return"{Type:"+this.name+"}"},r.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return K(a)?a:G(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=n(c,a);return b===!0?0===m(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",s),b.module("ui.router.util").run(["$urlMatcherFactory",function(){}]),t.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",t),u.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",u),v.$inject=[],b.module("ui.router.state").provider("$view",v),b.module("ui.router.state").provider("$uiViewScroll",w),x.$inject=["$state","$injector","$uiViewScroll","$interpolate"],y.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",x),b.module("ui.router.state").directive("uiView",y),C.$inject=["$state","$timeout"],D.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",C).directive("uiSrefActive",D).directive("uiSrefActiveEq",D),E.$inject=["$state"],F.$inject=["$state"],b.module("ui.router.state").filter("isState",E).filter("includedByState",F)}(window,window.angular);
/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*!
 * Copyright 2014 Drifty Co.
 * http://drifty.com/
 *
 * Ionic, v1.0.0-beta.14
 * A powerful HTML5 mobile app framework.
 * http://ionicframework.com/
 *
 * By @maxlynch, @benjsperry, @adamdbradley <3
 *
 * Licensed under the MIT license. Please see LICENSE for more information.
 *
 */

!function(){function e(e,t){return[function(){return{priority:"99",link:function(n,i,o){o.$observe(e,function(e){e||i[0].removeAttribute(t)})}}}]}function t(e){return["$ionicGesture","$parse",function(t,n){var i=e.substr(2).toLowerCase();return function(o,r,a){var s=n(a[e]),c=function(e){o.$apply(function(){s(o,{$event:e})})},l=t.on(i,c,r);o.$on("$destroy",function(){t.off(l,i,c)})}}]}function n(){return["$ionicScrollDelegate",function(e){return{restrict:"E",link:function(t,n,i){function o(t){for(var i=3,o=t.target;i--&&o;){if(o.classList.contains("button")||o.tagName.match(/input|textarea|select/i)||o.isContentEditable)return;o=o.parentNode}var r=t.gesture&&t.gesture.touches[0]||t.detail.touches[0],a=n[0].getBoundingClientRect();ionic.DomUtil.rectContains(r.pageX,r.pageY,a.left,a.top-20,a.left+a.width,a.top+a.height)&&e.scrollTop(!0)}"true"!=i.noTapScroll&&(ionic.on("tap",o,n[0]),t.$on("$destroy",function(){ionic.off("tap",o,n[0])}))}}}]}function i(e){return["$document","$timeout",function(t,n){return{restrict:"E",controller:"$ionicHeaderBar",compile:function(i){function o(t,n,i,o){e?(t.$watch(function(){return n[0].className},function(e){var n=-1===e.indexOf("ng-hide"),i=-1!==e.indexOf("bar-subheader");t.$hasHeader=n&&!i,t.$hasSubheader=n&&i}),t.$on("$destroy",function(){delete t.$hasHeader,delete t.$hasSubheader}),o.align(),t.$on("$ionicHeader.align",function(){ionic.requestAnimationFrame(o.align)})):(t.$watch(function(){return n[0].className},function(e){var n=-1===e.indexOf("ng-hide"),i=-1!==e.indexOf("bar-subfooter");t.$hasFooter=n&&!i,t.$hasSubfooter=n&&i}),t.$on("$destroy",function(){delete t.$hasFooter,delete t.$hasSubfooter}),t.$watch("$hasTabs",function(e){n.toggleClass("has-tabs",!!e)}))}return i.addClass(e?"bar bar-header":"bar bar-footer"),n(function(){e&&t[0].getElementsByClassName("tabs-top").length&&i.addClass("has-tabs-top")}),{pre:o}}}}]}function o(e){return e.clientHeight}function r(e){e.stopPropagation()}var a={method:function(e,t,n){var i=!1;return function(){return i||(i=!0,t(e)),n.apply(this,arguments)}},field:function(e,t,n,i,o){var r=!1,a=function(){return r||(r=!0,t(e)),o},s=function(n){return r||(r=!0,t(e)),o=n,n};Object.defineProperty(n,i,{get:a,set:s,enumerable:!0})}},s=angular.module("ionic",["ngAnimate","ngSanitize","ui.router"]),c=angular.extend,l=angular.forEach,u=angular.isDefined,d=(angular.isNumber,angular.isString),f=angular.element;s.factory("$ionicActionSheet",["$rootScope","$compile","$animate","$timeout","$ionicTemplateLoader","$ionicPlatform","$ionicBody",function(e,t,n,i,o,r,a){function s(o){var s=e.$new(!0);angular.extend(s,{cancel:angular.noop,destructiveButtonClicked:angular.noop,buttonClicked:angular.noop,$deregisterBackButton:angular.noop,buttons:[],cancelOnStateChange:!0},o||{});var c=s.element=t('<ion-action-sheet ng-class="cssClass" buttons="buttons"></ion-action-sheet>')(s),l=f(c[0].querySelector(".action-sheet-wrapper")),u=s.cancelOnStateChange?e.$on("$stateChangeSuccess",function(){s.cancel()}):angular.noop;return s.removeSheet=function(e){s.removed||(s.removed=!0,l.removeClass("action-sheet-up"),i(function(){a.removeClass("action-sheet-open")},400),s.$deregisterBackButton(),u(),n.removeClass(c,"active").then(function(){s.$destroy(),c.remove(),s.cancel.$scope=l=null,(e||angular.noop)()}))},s.showSheet=function(e){s.removed||(a.append(c).addClass("action-sheet-open"),n.addClass(c,"active").then(function(){s.removed||(e||angular.noop)()}),i(function(){s.removed||l.addClass("action-sheet-up")},20,!1))},s.$deregisterBackButton=r.registerBackButtonAction(function(){i(s.cancel)},b),s.cancel=function(){s.removeSheet(o.cancel)},s.buttonClicked=function(e){o.buttonClicked(e,o.buttons[e])===!0&&s.removeSheet()},s.destructiveButtonClicked=function(){o.destructiveButtonClicked()===!0&&s.removeSheet()},s.showSheet(),s.cancel.$scope=s,s.cancel}return{show:s}}]),f.prototype.addClass=function(e){var t,n,i,o,r,a;if(e&&"ng-scope"!=e&&"ng-isolate-scope"!=e)for(t=0;t<this.length;t++)if(o=this[t],o.setAttribute)if(e.indexOf(" ")<0&&o.classList.add)o.classList.add(e);else{for(a=(" "+(o.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),r=e.split(" "),n=0;n<r.length;n++)i=r[n].trim(),-1===a.indexOf(" "+i+" ")&&(a+=i+" ");o.setAttribute("class",a.trim())}return this},f.prototype.removeClass=function(e){var t,n,i,o,r;if(e)for(t=0;t<this.length;t++)if(r=this[t],r.getAttribute)if(e.indexOf(" ")<0&&r.classList.remove)r.classList.remove(e);else for(i=e.split(" "),n=0;n<i.length;n++)o=i[n],r.setAttribute("class",(" "+(r.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+o.trim()+" "," ").trim());return this},s.factory("$$ionicAttachDrag",[function(){function e(e,t,n){function i(e){h||s.onDragStart()!==!1&&(h={startX:e.gesture.center.pageX,startY:e.gesture.center.pageY,distance:s.getDistance()})}function o(e){if(h){var t=h.startX-e.gesture.center.pageX,n=h.startY-e.gesture.center.pageY,i="up"===e.gesture.direction||"down"===e.gesture.direction;if(i&&Math.abs(n)>2*Math.abs(t))return void r(e);Math.abs(t)>2*Math.abs(n)&&(f=!0);var o=a(e.gesture.center.pageX);s.onDrag(o)}}function r(e){if(h){var t=a(e.gesture.center.pageX);n.onDragEnd(t,e.gesture.velocityX),h=null}}function a(e){var t=h.startX-e,n=t/h.distance;return n}var s=c({},{getDistance:function(){return s.element.prop("offsetWidth")},onDragStart:angular.noop,onDrag:angular.noop,onDragEnd:angular.noop},n),l=ionic.onGesture("dragstart",i,t[0]),u=ionic.onGesture("drag",o,t[0]),d=ionic.onGesture("dragend",r,t[0]);e.$on("$destroy",function(){ionic.offGesture(l,"dragstart",i),ionic.offGesture(u,"drag",o),ionic.offGesture(d,"dragend",r)});var f=!1;t.on("touchmove pointermove mousemove",function(e){f&&e.preventDefault()}),t.on("touchend mouseup mouseleave",function(){f=!1});var h}return e}]),s.factory("$ionicBackdrop",["$document","$timeout",function(e,t){function n(){1===++a&&(r.addClass("visible"),ionic.requestAnimationFrame(function(){a&&r.addClass("active")}))}function i(){0===--a&&(r.removeClass("active"),t(function(){!a&&r.removeClass("visible")},400,!1))}function o(){return r}var r=f('<div class="backdrop">'),a=0;return e[0].body.appendChild(r[0]),{retain:n,release:i,getElement:o,_element:r}}]),s.factory("$ionicBind",["$parse","$interpolate",function(e,t){var n=/^\s*([@=&])(\??)\s*(\w*)\s*$/;return function(i,o,r){l(r||{},function(r,a){var s,c,l=r.match(n)||[],u=l[3]||a,d=l[1];switch(d){case"@":if(!o[u])return;o.$observe(u,function(e){i[a]=e}),o[u]&&(i[a]=t(o[u])(i));break;case"=":if(!o[u])return;c=i.$watch(o[u],function(e){i[a]=e}),i.$on("$destroy",c);break;case"&":if(o[u]&&o[u].match(RegExp(a+"(.*?)")))throw new Error('& expression binding "'+a+'" looks like it will recursively call "'+o[u]+'" and cause a stack overflow! Please choose a different scopeName.');s=e(o[u]),i[a]=function(e){return s(i,e)}}})}}]),s.factory("$ionicBody",["$document",function(e){return{addClass:function(){for(var t=0;t<arguments.length;t++)e[0].body.classList.add(arguments[t]);return this},removeClass:function(){for(var t=0;t<arguments.length;t++)e[0].body.classList.remove(arguments[t]);return this},enableClass:function(e){var t=Array.prototype.slice.call(arguments).slice(1);return e?this.addClass.apply(this,t):this.removeClass.apply(this,t),this},append:function(t){return e[0].body.appendChild(t.length?t[0]:t),this},get:function(){return e[0].body}}}]),s.factory("$ionicClickBlock",["$document","$ionicBody","$timeout",function(e,t,n){function i(){s&&(r?r.classList.remove(c):(r=e[0].createElement("div"),r.className="click-block",t.append(r)),s=!1)}function o(){r&&r.classList.add(c)}var r,a,s,c="click-block-hide";return{show:function(e){s=!0,n.cancel(a),a=n(this.hide,e||310),ionic.requestAnimationFrame(i)},hide:function(){s=!1,n.cancel(a),ionic.requestAnimationFrame(o)}}}]),s.factory("$collectionDataSource",["$cacheFactory","$parse","$rootScope",function(e,t,n){function i(e){e.css(ionic.CSS.TRANSFORM,"translate3d(-2000px,-2000px,0)")}function o(e){this.scope=e.scope,this.transcludeFn=e.transcludeFn,this.transcludeParent=e.transcludeParent,this.element=e.element,this.keyExpr=e.keyExpr,this.listExpr=e.listExpr,this.trackByExpr=e.trackByExpr,this.heightGetter=e.heightGetter,this.widthGetter=e.widthGetter,this.dimensions=[],this.data=[],this.attachedItems={},this.BACKUP_ITEMS_LENGTH=20,this.backupItemsArray=[]}return o.prototype={setup:function(){if(!this.isSetup){this.isSetup=!0;for(var e=0;e<this.BACKUP_ITEMS_LENGTH;e++)this.detachItem(this.createItem())}},destroy:function(){this.dimensions.length=0,this.data=null,this.backupItemsArray.length=0,this.attachedItems={}},calculateDataDimensions:function(){var e={};this.dimensions=this.data.map(function(t,n){return e[this.keyExpr]=t,e.$index=n,{width:this.widthGetter(this.scope,e),height:this.heightGetter(this.scope,e)}},this),this.dimensions=this.beforeSiblings.concat(this.dimensions).concat(this.afterSiblings),this.dataStartIndex=this.beforeSiblings.length},createItem:function(){var e={};return e.scope=this.scope.$new(),this.transcludeFn(e.scope,function(t){t.css("position","absolute"),e.element=t}),this.transcludeParent.append(e.element),e},getItem:function(e){var t;return(t=this.attachedItems[e])||((t=this.backupItemsArray.pop())?ionic.Utils.reconnectScope(t.scope):t=this.createItem()),t},attachItemAtIndex:function(e){if(e<this.dataStartIndex)return this.beforeSiblings[e];if(e-=this.dataStartIndex,e>this.data.length-1)return this.afterSiblings[e-this.dataStartIndex];var t=this.getItem(e),i=this.data[e];return(t.index!==e||t.scope[this.keyExpr]!==i)&&(t.index=t.scope.$index=e,t.scope[this.keyExpr]=i,t.scope.$first=0===e,t.scope.$last=e===this.getLength()-1,t.scope.$middle=!(t.scope.$first||t.scope.$last),t.scope.$odd=!(t.scope.$even=0===(1&e)),n.$$phase||t.scope.$digest()),this.attachedItems[e]=t,t},destroyItem:function(e){e.element.remove(),e.scope.$destroy(),e.scope=null,e.element=null},detachItem:function(e){delete this.attachedItems[e.index],e.isOutside?i(e.element):this.backupItemsArray.length>=this.BACKUP_ITEMS_LENGTH?this.destroyItem(e):(this.backupItemsArray.push(e),i(e.element),ionic.Utils.disconnectScope(e.scope))},getLength:function(){return this.dimensions&&this.dimensions.length||0},setData:function(e,t,n){this.data=e||[],this.beforeSiblings=t||[],this.afterSiblings=n||[],this.calculateDataDimensions(),this.afterSiblings.forEach(function(e){e.element.css({position:"absolute",top:"0",left:"0"}),i(e.element)})}},o}]),s.factory("$collectionRepeatManager",["$rootScope","$timeout",function(){function e(e){function t(){return n.viewportSize}var n=this;this.dataSource=e.dataSource,this.element=e.element,this.scrollView=e.scrollView,this.isVertical=!!this.scrollView.options.scrollingY,this.renderedItems={},this.dimensions=[],this.setCurrentIndex(0),this.scrollView.__$callback=this.scrollView.__callback,this.scrollView.__callback=angular.bind(this,this.renderScroll),this.isVertical?(this.scrollView.options.getContentHeight=t,this.scrollValue=function(){return this.scrollView.__scrollTop},this.scrollMaxValue=function(){return this.scrollView.__maxScrollTop},this.scrollSize=function(){return this.scrollView.__clientHeight},this.secondaryScrollSize=function(){return this.scrollView.__clientWidth},this.transformString=function(e,t){return"translate3d("+t+"px,"+e+"px,0)"},this.primaryDimension=function(e){return e.height},this.secondaryDimension=function(e){return e.width}):(this.scrollView.options.getContentWidth=t,this.scrollValue=function(){return this.scrollView.__scrollLeft},this.scrollMaxValue=function(){return this.scrollView.__maxScrollLeft},this.scrollSize=function(){return this.scrollView.__clientWidth},this.secondaryScrollSize=function(){return this.scrollView.__clientHeight},this.transformString=function(e,t){return"translate3d("+e+"px,"+t+"px,0)"},this.primaryDimension=function(e){return e.width},this.secondaryDimension=function(e){return e.height})}return e.prototype={destroy:function(){this.renderedItems={},this.render=angular.noop,this.calculateDimensions=angular.noop,this.dimensions=[]},calculateDimensions:function(){function e(e){var r={primarySize:this.primaryDimension(e),secondarySize:Math.min(this.secondaryDimension(e),o)};return t&&(i+=t.secondarySize,t.primaryPos===n&&i+r.secondarySize>o&&(i=0,n+=t.primarySize)),r.primaryPos=n,r.secondaryPos=i,t=r,r}var t,n=0,i=0,o=this.secondaryScrollSize();this.dataSource.beforeSiblings&&this.dataSource.beforeSiblings.forEach(e,this);var r=n+(t?t.primarySize:0);n=i=0,t=null;var a=this.dataSource.dimensions.map(e,this),s=n+(t?t.primarySize:0);return{beforeSize:r,totalSize:s,dimensions:a}},resize:function(){var e=this.calculateDimensions();this.dimensions=e.dimensions,this.viewportSize=e.totalSize,this.beforeSize=e.beforeSize,this.setCurrentIndex(0),this.render(!0),this.dataSource.setup()},setCurrentIndex:function(e){var t=(this.dimensions[e]||{}).primaryPos||0;this.currentIndex=e,this.hasPrevIndex=e>0,this.hasPrevIndex&&(this.previousPos=Math.max(t-this.dimensions[e-1].primarySize,this.dimensions[e-1].primaryPos)),this.hasNextIndex=e+1<this.dataSource.getLength(),this.hasNextIndex&&(this.nextPos=Math.min(t+this.dimensions[e+1].primarySize,this.dimensions[e+1].primaryPos))},renderScroll:ionic.animationFrameThrottle(function(e,t,n,i){return this.renderIfNeeded(this.isVertical?t:e),this.scrollView.__$callback(e,t,n,i)}),renderIfNeeded:function(e){(this.hasNextIndex&&e>=this.nextPos||this.hasPrevIndex&&e<this.previousPos)&&this.render()},getIndexForScrollValue:function(e,t){var n;if(t<=this.dimensions[e].primaryPos)for(;(n=this.dimensions[e-1])&&n.primaryPos>t;)e--;else for(;(n=this.dimensions[e+1])&&n.primaryPos<t;)e++;return e},render:function(e){function t(e,t){e<i.dataSource.dataStartIndex||i.renderItem(e,t.primaryPos-i.beforeSize,t.secondaryPos)}var n,i=this,o=this.currentIndex>=this.dataSource.getLength();if(o||e){for(n in this.renderedItems)this.removeItem(n);if(o)return}for(var r,a=this.scrollValue(),s=this.scrollSize(),c=s+a,l=this.getIndexForScrollValue(this.currentIndex,a),u=Math.max(l-1,0);u>0&&(r=this.dimensions[u])&&r.primaryPos===this.dimensions[l-1].primaryPos;)u--;for(n=u;(r=this.dimensions[n])&&r.primaryPos-r.primarySize<c;)t(n,r),n++;i.dimensions[n]&&(t(n,i.dimensions[n]),n++),i.dimensions[n]&&t(n,i.dimensions[n]);var d=n;for(var f in this.renderedItems)(u>f||f>d)&&this.removeItem(f);this.setCurrentIndex(l)},renderItem:function(e,t,n){var i=this.dataSource.attachItemAtIndex(e);i&&i.element?((i.primaryPos!==t||i.secondaryPos!==n)&&(i.element.css(ionic.CSS.TRANSFORM,this.transformString(t,n)),i.primaryPos=t,i.secondaryPos=n),this.renderedItems[e]=i):delete this.renderedItems[e]},removeItem:function(e){var t=this.renderedItems[e];t&&(t.primaryPos=t.secondaryPos=null,this.dataSource.detachItem(t),delete this.renderedItems[e])}},e}]),s.factory("$ionicGesture",[function(){return{on:function(e,t,n,i){return window.ionic.onGesture(e,t,n[0],i)},off:function(e,t,n){return window.ionic.offGesture(e,t,n)}}}]),s.factory("$ionicHistory",["$rootScope","$state","$location","$window","$timeout","$ionicViewSwitcher","$ionicNavViewDelegate",function(e,t,n,i,o,r,a){function s(e){return e?L.views[e]:null}function l(e){return e?s(e.backViewId):null}function u(e){return e?s(e.forwardViewId):null}function d(e){return e?L.histories[e]:null}function f(e){var t=h(e);return L.histories[t.historyId]||(L.histories[t.historyId]={historyId:t.historyId,parentHistoryId:h(t.scope.$parent).historyId,stack:[],cursor:-1}),d(t.historyId)}function h(t){for(var n=t;n;){if(n.hasOwnProperty("$historyId"))return{historyId:n.$historyId,scope:n};n=n.$parent}return{historyId:"root",scope:e}}function p(e){L.currentView=s(e),L.backView=l(L.currentView),L.forwardView=u(L.currentView)}function v(){var e;if(t&&t.current&&t.current.name){if(e=t.current.name,t.params)for(var n in t.params)t.params.hasOwnProperty(n)&&t.params[n]&&(e+="_"+n+"="+t.params[n]);return e}return ionic.Utils.nextUid()}function g(){var e;if(t&&t.params)for(var n in t.params)t.params.hasOwnProperty(n)&&(e=e||{},e[n]=t.params[n]);return e}function m(e){return e&&e.length&&/ion-side-menus|ion-tabs/i.test(e[0].tagName)}var $,w,b,y,S="initialView",k="newView",T="moveBack",C="moveForward",I="back",B="forward",x="enter",V="exit",E="swap",A="none",D=0,L={histories:{root:{historyId:"root",parentHistoryId:null,stack:[],cursor:-1}},views:{},backView:null,forwardView:null,currentView:null},P=function(){};return P.prototype.initialize=function(e){if(e){for(var t in e)this[t]=e[t];return this}return null},P.prototype.go=function(){return this.stateName?t.go(this.stateName,this.stateParams):this.url&&this.url!==n.url()?L.backView===this?i.history.go(-1):L.forwardView===this?i.history.go(1):void n.url(this.url):null},P.prototype.destroy=function(){this.scope&&(this.scope.$destroy&&this.scope.$destroy(),this.scope=null)},{register:function(e,t){var i,a,c,u=v(),m=f(e),P=L.currentView,H=L.backView,N=L.forwardView,_=null,O=null,M=A,R=m.historyId,U=n.url();if($!==u&&($=u,D++),y)_=y.viewId,O=y.action,M=y.direction,y=null;else if(H&&H.stateId===u)_=H.viewId,R=H.historyId,O=T,H.historyId===P.historyId?M=I:P&&(M=V,i=d(H.historyId),i&&i.parentHistoryId===P.historyId?M=x:(i=d(P.historyId),i&&i.parentHistoryId===m.parentHistoryId&&(M=E)));else if(N&&N.stateId===u)_=N.viewId,R=N.historyId,O=C,N.historyId===P.historyId?M=B:P&&(M=V,P.historyId===m.parentHistoryId?M=x:(i=d(P.historyId),i&&i.parentHistoryId===m.parentHistoryId&&(M=E))),i=h(e),N.historyId&&i.scope&&(i.scope.$historyId=N.historyId,R=N.historyId);else if(P&&P.historyId!==R&&m.cursor>-1&&m.stack.length>0&&m.cursor<m.stack.length&&m.stack[m.cursor].stateId===u){var z=m.stack[m.cursor];_=z.viewId,R=z.historyId,O=T,M=E,i=d(P.historyId),i&&i.parentHistoryId===R?M=V:(i=d(R),i&&i.parentHistoryId===P.historyId&&(M=x)),i=s(z.backViewId),i&&z.historyId!==i.historyId&&(m.stack[m.cursor].backViewId=P.viewId)}else{if(c=r.createViewEle(t),this.isAbstractEle(c,t))return{action:"abstractView",direction:A,ele:c};if(_=ionic.Utils.nextUid(),P){if(P.forwardViewId=_,O=k,N&&P.stateId!==N.stateId&&P.historyId===N.historyId&&(i=d(N.historyId))){for(a=i.stack.length-1;a>=N.index;a--)i.stack[a].destroy(),i.stack.splice(a);R=N.historyId}m.historyId===P.historyId?M=B:P.historyId!==m.historyId&&(M=x,i=d(P.historyId),i&&i.parentHistoryId===m.parentHistoryId?M=E:(i=d(i.parentHistoryId),i&&i.historyId===m.historyId&&(M=V)))}else O=S;2>D&&(M=A),L.views[_]=this.createView({viewId:_,index:m.stack.length,historyId:m.historyId,backViewId:P&&P.viewId?P.viewId:null,forwardViewId:null,stateId:u,stateName:this.currentStateName(),stateParams:g(),url:U}),m.stack.push(L.views[_])}if(o.cancel(b),w){if(w.disableAnimate&&(M=A),w.disableBack&&(L.views[_].backViewId=null),w.historyRoot){for(a=0;a<m.stack.length;a++)m.stack[a].viewId===_?(m.stack[a].index=0,m.stack[a].backViewId=m.stack[a].forwardViewId=null):delete L.views[m.stack[a].viewId];m.stack=[L.views[_]]}w=null}if(p(_),L.backView&&R==L.backView.historyId&&u==L.backView.stateId&&U==L.backView.url)for(a=0;a<m.stack.length;a++)if(m.stack[a].viewId==_){O="dupNav",M=A,m.stack[a-1].forwardViewId=L.forwardView=null,L.currentView.index=L.backView.index,L.currentView.backViewId=L.backView.backViewId,L.backView=l(L.backView),m.stack.splice(a,1);break}return m.cursor=L.currentView.index,{viewId:_,action:O,direction:M,historyId:R,enableBack:!(!L.backView||L.backView.historyId!==L.currentView.historyId),isHistoryRoot:0===L.currentView.index,ele:c}},registerHistory:function(e){e.$historyId=ionic.Utils.nextUid()},createView:function(e){var t=new P;return t.initialize(e)},getViewById:s,viewHistory:function(){return L},currentView:function(e){return arguments.length&&(L.currentView=e),L.currentView},currentHistoryId:function(){return L.currentView?L.currentView.historyId:null},currentTitle:function(e){return L.currentView?(arguments.length&&(L.currentView.title=e),L.currentView.title):void 0},backView:function(e){return arguments.length&&(L.backView=e),L.backView},backTitle:function(){return L.backView?L.backView.title:void 0},forwardView:function(e){return arguments.length&&(L.forwardView=e),L.forwardView},currentStateName:function(){return t&&t.current?t.current.name:null},isCurrentStateNavView:function(e){return!!(t&&t.current&&t.current.views&&t.current.views[e])},goToHistoryRoot:function(e){if(e){var t=d(e);if(t&&t.stack.length){if(L.currentView&&L.currentView.viewId===t.stack[0].viewId)return;y={viewId:t.stack[0].viewId,action:T,direction:I},t.stack[0].go()}}},goBack:function(){L.backView&&L.backView.go()},clearHistory:function(){var e=L.histories,t=L.currentView;if(e)for(var n in e)e[n].stack&&(e[n].stack=[],e[n].cursor=-1),t&&t.historyId===n?(t.backViewId=t.forwardViewId=null,e[n].stack.push(t)):e[n].destroy&&e[n].destroy();for(var i in L.views)i!==t.viewId&&delete L.views[i];t&&p(t.viewId)},clearCache:function(){a._instances.forEach(function(e){e.clearCache()})},nextViewOptions:function(e){return arguments.length&&(o.cancel(b),null===e?w=e:(w=w||{},c(w,e),w.expire&&(b=o(function(){w=null},w.expire)))),w},isAbstractEle:function(e,t){return t&&t.$$state&&t.$$state.self.abstract?!0:!(!e||!m(e)&&!m(e.children()))},isActiveScope:function(e){if(!e)return!1;for(var t,n=e,i=this.currentHistoryId();n;){if(n.$$disconnected)return!1;if(!t&&n.hasOwnProperty("$historyId")&&(t=!0),i){if(n.hasOwnProperty("$historyId")&&i==n.$historyId)return!0;if(n.hasOwnProperty("$activeHistoryId")&&i==n.$activeHistoryId){if(n.hasOwnProperty("$historyId"))return!0;if(!t)return!0}}t&&n.hasOwnProperty("$activeHistoryId")&&(t=!1),n=n.$parent}return i?"root"==i:!0}}}]).run(["$rootScope","$state","$location","$document","$ionicPlatform","$ionicHistory",function(e,t,n,i,o,r){function a(e){var t=r.backView();return t?t.go():ionic.Platform.exitApp(),e.preventDefault(),!1}e.$on("$ionicView.beforeEnter",function(){ionic.keyboard&&ionic.keyboard.hide&&ionic.keyboard.hide()}),e.$on("$ionicHistory.change",function(e,i){if(i){var o=r.viewHistory(),a=i.historyId?o.histories[i.historyId]:null;if(a&&a.cursor>-1&&a.cursor<a.stack.length){var s=a.stack[a.cursor];return s.go(i)}!i.url&&i.uiSref&&(i.url=t.href(i.uiSref)),i.url&&(0===i.url.indexOf("#")&&(i.url=i.url.replace("#","")),i.url!==n.url()&&n.url(i.url))}}),e.$ionicGoBack=function(){r.goBack()},e.$on("$ionicView.afterEnter",function(e,t){t&&t.title&&(i[0].title=t.title)}),o.registerBackButtonAction(a,m)}]),s.provider("$ionicConfig",function(){function e(e,i){a.platform[e]=i,o.platform[e]={},t(a,a.platform[e]),n(a.platform[e],o.platform[e],"")}function t(e,n){for(var i in e)i!=r&&e.hasOwnProperty(i)&&(angular.isObject(e[i])?(u(n[i])||(n[i]={}),t(e[i],n[i])):u(n[i])||(n[i]=null))}function n(e,t,o){l(e,function(s,c){angular.isObject(e[c])?(t[c]={},n(e[c],t[c],o+"."+c)):t[c]=function(n){if(arguments.length)return e[c]=n,t;if(e[c]==r){var s=i(a.platform,ionic.Platform.platform()+o+"."+c);return s||s===!1?s:i(a.platform,"default"+o+"."+c)}return e[c]}})}function i(e,t){t=t.split(".");for(var n=0;n<t.length;n++){if(!e||!u(e[t[n]]))return null;e=e[t[n]]}return e}var o=this;o.platform={};var r="platform",a={views:{maxCache:r,forwardCache:r,transition:r},navBar:{alignTitle:r,positionPrimaryButtons:r,positionSecondaryButtons:r,transition:r},backButton:{icon:r,text:r,previousTitleText:r},form:{checkbox:r},tabs:{style:r,position:r},templates:{maxPrefetch:r},platform:{}};n(a,o,""),e("default",{views:{maxCache:10,forwardCache:!1,transition:"ios"},navBar:{alignTitle:"center",positionPrimaryButtons:"left",positionSecondaryButtons:"right",transition:"view"},backButton:{icon:"ion-ios7-arrow-back",text:"Back",previousTitleText:!0},form:{checkbox:"circle"},tabs:{style:"standard",position:"bottom"},templates:{maxPrefetch:30}}),e("ios",{}),e("android",{views:{transition:"android"},navBar:{alignTitle:"left",positionPrimaryButtons:"right",positionSecondaryButtons:"right"},backButton:{icon:"ion-arrow-left-c",text:!1,previousTitleText:!1},form:{checkbox:"square"},tabs:{style:"striped",position:"top"}}),o.transitions={views:{},navBar:{}},o.transitions.views.ios=function(e,t,n,i){function o(e,t,n){var o={};o[ionic.CSS.TRANSITION_DURATION]=i?"":0,o.opacity=t,o[ionic.CSS.TRANSFORM]="translate3d("+n+"%,0,0)",ionic.DomUtil.cachedStyles(e,o)}return i=i&&("forward"==n||"back"==n),{run:function(i){"forward"==n?(o(e,1,99*(1-i)),o(t,1-.1*i,-33*i)):"back"==n?(o(e,1-.1*(1-i),-33*(1-i)),o(t,1,100*i)):(o(e,1,0),o(t,0,0))},shouldAnimate:i}},o.transitions.navBar.ios=function(e,t,n,i){function o(e,t,n,o){var r={};r[ionic.CSS.TRANSITION_DURATION]=i?"":0,r.opacity=1===t?"":t,e.setCss("buttons-left",r),e.setCss("buttons-right",r),e.setCss("back-button",r),r[ionic.CSS.TRANSFORM]="translate3d("+o+"px,0,0)",e.setCss("back-text",r),r[ionic.CSS.TRANSFORM]="translate3d("+n+"px,0,0)",e.setCss("title",r)}function r(e,t,n){if(e){var i=(e.titleTextX()+e.titleWidth())*(1-n),r=t&&(t.titleTextX()-e.backButtonTextLeft())*(1-n)||0;o(e,n,i,r)}}function a(e,t,n){if(e){var i=(-(e.titleTextX()-t.backButtonTextLeft())-e.titleLeftRight())*n;o(e,1-n,i,0)}}return i=i&&("forward"==n||"back"==n),{run:function(i){var o=e.controller(),s=t&&t.controller();"back"==n?(a(o,s,1-i),r(s,o,1-i)):(r(o,s,i),a(s,o,i))},shouldAnimate:i}},o.transitions.views.android=function(e,t,n,i){function o(e,t){var n={};n[ionic.CSS.TRANSITION_DURATION]=i?"":0,n[ionic.CSS.TRANSFORM]="translate3d("+t+"%,0,0)",ionic.DomUtil.cachedStyles(e,n)}return i=i&&("forward"==n||"back"==n),{run:function(i){"forward"==n?(o(e,99*(1-i)),o(t,-100*i)):"back"==n?(o(e,-100*(1-i)),o(t,100*i)):(o(e,0),o(t,0))},shouldAnimate:i}},o.transitions.navBar.android=function(e,t,n,i){function o(e,t){if(e){var n={};n.opacity=1===t?"":t,e.setCss("buttons-left",n),e.setCss("buttons-right",n),e.setCss("back-button",n),e.setCss("back-text",n),e.setCss("title",n)}}return i=i&&("forward"==n||"back"==n),{run:function(n){o(e.controller(),n),o(t&&t.controller(),1-n)},shouldAnimate:!0}},o.transitions.views.none=function(e,t){return{run:function(n){o.transitions.views.android(e,t,!1,!1).run(n)}}},o.transitions.navBar.none=function(e,t){return{run:function(n){o.transitions.navBar.ios(e,t,!1,!1).run(n),o.transitions.navBar.android(e,t,!1,!1).run(n)}}},o.setPlatformConfig=e,o.$get=function(){return o}});var h='<div class="loading-container"><div class="loading"></div></div>',p="$ionicLoading instance.hide() has been deprecated. Use $ionicLoading.hide().",v="$ionicLoading instance.show() has been deprecated. Use $ionicLoading.show().",g="$ionicLoading instance.setContent() has been deprecated. Use $ionicLoading.show({ template: 'my content' }).";s.constant("$ionicLoadingConfig",{template:'<i class="icon ion-loading-d"></i>'}).factory("$ionicLoading",["$ionicLoadingConfig","$ionicBody","$ionicTemplateLoader","$ionicBackdrop","$timeout","$q","$log","$compile","$ionicPlatform","$rootScope",function(e,t,n,i,o,r,s,l,u,d){function f(){return w||(w=n.compile({template:h,appendTo:t.get()}).then(function(e){var a=e;return e.show=function(e){var s=e.templateUrl?n.load(e.templateUrl):r.when(e.template||e.content||"");a.scope=e.scope||a.scope,this.isShown||(this.hasBackdrop=!e.noBackdrop&&e.showBackdrop!==!1,this.hasBackdrop&&(i.retain(),i.getElement().addClass("backdrop-loading"))),e.duration&&(o.cancel(this.durationTimeout),this.durationTimeout=o(angular.bind(this,this.hide),+e.duration)),b(),b=u.registerBackButtonAction(angular.noop,S),s.then(function(e){if(e){var n=a.element.children();n.html(e),l(n.contents())(a.scope)}a.isShown&&(a.element.addClass("visible"),ionic.requestAnimationFrame(function(){a.isShown&&(a.element.addClass("active"),t.addClass("loading-active"))}))}),this.isShown=!0},e.hide=function(){b(),this.isShown&&(this.hasBackdrop&&(i.release(),i.getElement().removeClass("backdrop-loading")),a.element.removeClass("active"),t.removeClass("loading-active"),setTimeout(function(){!a.isShown&&a.element.removeClass("visible")},200)),o.cancel(this.durationTimeout),this.isShown=!1},e})),w}function m(t){t=c({},e||{},t||{});var n=t.delay||t.showDelay||0;return k&&o.cancel(k),k=o(angular.noop,n),k.then(f).then(function(e){return t.hideOnStateChange&&(y=d.$on("$stateChangeSuccess",$)),e.show(t)}),{hide:a.method(p,s.error,$),show:a.method(v,s.error,function(){m(t)}),setContent:a.method(g,s.error,function(e){f().then(function(t){t.show({template:e})})})}}function $(){y(),o.cancel(k),f().then(function(e){e.hide()})}var w,b=angular.noop,y=angular.noop,k=r.when();return{show:m,hide:$,_getLoader:f}}]),s.factory("$ionicModal",["$rootScope","$ionicBody","$compile","$timeout","$ionicPlatform","$ionicTemplateLoader","$q","$log",function(e,t,n,i,o,r,a,s){var l=ionic.views.Modal.inherit({initialize:function(e){ionic.views.Modal.prototype.initialize.call(this,e),this.animation=e.animation||"slide-in-up"},show:function(e){var n=this;if(n.scope.$$destroyed)return void s.error("Cannot call "+n.viewType+".show() after remove(). Please create a new "+n.viewType+" instance.");var r=f(n.modalEl);return n.el.classList.remove("hide"),i(function(){t.addClass(n.viewType+"-open")},400),n.el.parentElement||(r.addClass(n.animation),t.append(n.el)),e&&n.positionView&&(n.positionView(e,r),ionic.on("resize",function(){ionic.off("resize",null,window),n.positionView(e,r)},window)),r.addClass("ng-enter active").removeClass("ng-leave ng-leave-active"),n._isShown=!0,n._deregisterBackButton=o.registerBackButtonAction(n.hardwareBackButtonClose?angular.bind(n,n.hide):angular.noop,w),n._isOpenPromise=a.defer(),ionic.views.Modal.prototype.show.call(n),i(function(){r.addClass("ng-enter-active"),ionic.trigger("resize"),n.scope.$parent&&n.scope.$parent.$broadcast(n.viewType+".shown",n),n.el.classList.add("active"),n.scope.$broadcast("$ionicHeader.align")},20),i(function(){n.$el.on("click",function(e){n.backdropClickToClose&&e.target===n.el&&n.hide()})},400)},hide:function(){var e=this,n=f(e.modalEl);return e.el.classList.remove("active"),n.addClass("ng-leave"),i(function(){n.addClass("ng-leave-active").removeClass("ng-enter ng-enter-active active")},20),e.$el.off("click"),e._isShown=!1,e.scope.$parent&&e.scope.$parent.$broadcast(e.viewType+".hidden",e),e._deregisterBackButton&&e._deregisterBackButton(),ionic.views.Modal.prototype.hide.call(e),e.positionView&&ionic.off("resize",null,window),i(function(){t.removeClass(e.viewType+"-open"),e.el.classList.add("hide")},e.hideDelay||320)},remove:function(){var e=this;return e.scope.$parent&&e.scope.$parent.$broadcast(e.viewType+".removed",e),e.hide().then(function(){e.scope.$destroy(),e.$el.remove()})},isShown:function(){return!!this._isShown}}),u=function(t,i){var o=i.scope&&i.scope.$new()||e.$new(!0);i.viewType=i.viewType||"modal",c(o,{$hasHeader:!1,$hasSubheader:!1,$hasFooter:!1,$hasSubfooter:!1,$hasTabs:!1,$hasTabsTop:!1});var r=n("<ion-"+i.viewType+">"+t+"</ion-"+i.viewType+">")(o);i.$el=r,i.el=r[0],i.modalEl=i.el.querySelector("."+i.viewType);var a=new l(i);return a.scope=o,i.scope||(o[i.viewType]=a),a};return{fromTemplate:function(e,t){var n=u(e,t||{});return n},fromTemplateUrl:function(e,t,n){var i;return angular.isFunction(t)&&(i=t,t=n),r.load(e).then(function(e){var n=u(e,t||{});return i&&i(n),n})}}}]),s.service("$ionicNavBarDelegate",ionic.DelegateService(["align","showBackButton","showBar","title","changeTitle","setTitle","getTitle","back","getPreviousTitle"])),s.service("$ionicNavViewDelegate",ionic.DelegateService(["clearCache"]));var m=100,$=150,w=200,b=300,y=400,S=500;s.provider("$ionicPlatform",function(){return{$get:["$q","$rootScope",function(e){var t={onHardwareBackButton:function(e){ionic.Platform.ready(function(){document.addEventListener("backbutton",e,!1)})},offHardwareBackButton:function(e){ionic.Platform.ready(function(){document.removeEventListener("backbutton",e)})},$backButtonActions:{},registerBackButtonAction:function(e,n,i){t._hasBackButtonHandler||(t.$backButtonActions={},t.onHardwareBackButton(t.hardwareBackButtonClick),t._hasBackButtonHandler=!0);var o={id:i?i:ionic.Utils.nextUid(),priority:n?n:0,fn:e};return t.$backButtonActions[o.id]=o,function(){delete t.$backButtonActions[o.id]
}},hardwareBackButtonClick:function(e){var n,i;for(i in t.$backButtonActions)(!n||t.$backButtonActions[i].priority>=n.priority)&&(n=t.$backButtonActions[i]);return n?(n.fn(e),n):void 0},is:function(e){return ionic.Platform.is(e)},on:function(e,t){return ionic.Platform.ready(function(){document.addEventListener(e,t,!1)}),function(){ionic.Platform.ready(function(){document.removeEventListener(e,t)})}},ready:function(t){var n=e.defer();return ionic.Platform.ready(function(){n.resolve(),t&&t()}),n.promise}};return t}]}}),s.factory("$ionicPopover",["$ionicModal","$ionicPosition","$document","$window",function(e,t,n,i){function o(e,o){var a=angular.element(e.target||e),s=t.offset(a),c=o.prop("offsetWidth"),l=o.prop("offsetHeight"),u=n[0].body.clientWidth,d=i.innerHeight,h={left:s.left+s.width/2-c/2},p=f(o[0].querySelector(".popover-arrow"));h.left<r?h.left=r:h.left+c+r>u&&(h.left=u-c-r),s.top+s.height+l>d?(h.top=s.top-l,o.addClass("popover-bottom")):(h.top=s.top+s.height,o.removeClass("popover-bottom")),p.css({left:s.left+s.width/2-p.prop("offsetWidth")/2-h.left+"px"}),o.css({top:h.top+"px",left:h.left+"px",marginLeft:"0",opacity:"1"})}var r=6,a={viewType:"popover",hideDelay:1,animation:"none",positionView:o};return{fromTemplate:function(t,n){return e.fromTemplate(t,ionic.Utils.extend(a,n||{}))},fromTemplateUrl:function(t,n){return e.fromTemplateUrl(t,ionic.Utils.extend(a,n||{}))}}}]);var k='<div class="popup-container" ng-class="cssClass"><div class="popup"><div class="popup-head"><h3 class="popup-title" ng-bind-html="title"></h3><h5 class="popup-sub-title" ng-bind-html="subTitle" ng-if="subTitle"></h5></div><div class="popup-body"></div><div class="popup-buttons" ng-show="buttons.length"><button ng-repeat="button in buttons" ng-click="$buttonTapped(button, $event)" class="button" ng-class="button.type || \'button-default\'" ng-bind-html="button.text"></button></div></div></div>';s.factory("$ionicPopup",["$ionicTemplateLoader","$ionicBackdrop","$q","$timeout","$rootScope","$ionicBody","$compile","$ionicPlatform",function(e,t,n,i,o,r,a,s){function l(t){t=c({scope:null,title:"",buttons:[]},t||{});var o=e.compile({template:k,scope:t.scope&&t.scope.$new(),appendTo:r.get()}),s=t.templateUrl?e.load(t.templateUrl):n.when(t.template||t.content||"");return n.all([o,s]).then(function(e){var o=e[0],r=e[1],s=n.defer();o.responseDeferred=s;var l=f(o.element[0].querySelector(".popup-body"));return r?(l.html(r),a(l.contents())(o.scope)):l.remove(),c(o.scope,{title:t.title,buttons:t.buttons,subTitle:t.subTitle,cssClass:t.cssClass,$buttonTapped:function(e,t){var n=(e.onTap||angular.noop)(t);t=t.originalEvent||t,t.defaultPrevented||s.resolve(n)}}),o.show=function(){o.isShown||(o.isShown=!0,ionic.requestAnimationFrame(function(){o.isShown&&(o.element.removeClass("popup-hidden"),o.element.addClass("popup-showing active"),h(o.element))}))},o.hide=function(e){return e=e||angular.noop,o.isShown?(o.isShown=!1,o.element.removeClass("active"),o.element.addClass("popup-hidden"),void i(e,250)):e()},o.remove=function(){o.removed||(o.hide(function(){o.element.remove(),o.scope.$destroy()}),o.removed=!0)},o})}function u(){$[0]&&$[0].responseDeferred.resolve()}function d(e){function n(e){o.then(function(t){t.removed||t.responseDeferred.resolve(e)})}var o=w._createPopup(e),a=$[0];a&&a.hide();var c=i(angular.noop,a?m.stackPushDelay:0).then(function(){return o}).then(function(e){return a||(r.addClass("popup-open"),t.retain(),w._backButtonActionDone=s.registerBackButtonAction(u,y)),$.unshift(e),e.show(),e.responseDeferred.notify({close:c.close}),e.responseDeferred.promise.then(function(n){var o=$.indexOf(e);-1!==o&&$.splice(o,1),e.remove();var a=$[0];return a?a.show():(i(function(){r.removeClass("popup-open")},400),i(function(){t.release()},m.stackPushDelay||0),(w._backButtonActionDone||angular.noop)()),n})});return c.close=n,c}function h(e){var t=e[0].querySelector("[autofocus]");t&&t.focus()}function p(e){return d(c({buttons:[{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return!0}}]},e||{}))}function v(e){return d(c({buttons:[{text:e.cancelText||"Cancel",type:e.cancelType||"button-default",onTap:function(){return!1}},{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return!0}}]},e||{}))}function g(e){var t=o.$new(!0);t.data={};var n="";return e.template&&/<[a-z][\s\S]*>/i.test(e.template)===!1&&(n="<span>"+e.template+"</span>",delete e.template),d(c({template:n+'<input ng-model="data.response" type="'+(e.inputType||"text")+'" placeholder="'+(e.inputPlaceholder||"")+'">',scope:t,buttons:[{text:e.cancelText||"Cancel",type:e.cancelType||"button-default",onTap:function(){}},{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return t.data.response||""}}]},e||{}))}var m={stackPushDelay:75},$=[],w={show:d,alert:p,confirm:v,prompt:g,_createPopup:l,_popupStack:$};return w}]),s.factory("$ionicPosition",["$document","$window",function(e,t){function n(e,n){return e.currentStyle?e.currentStyle[n]:t.getComputedStyle?t.getComputedStyle(e)[n]:e.style[n]}function i(e){return"static"===(n(e,"position")||"static")}var o=function(t){for(var n=e[0],o=t.offsetParent||n;o&&o!==n&&i(o);)o=o.offsetParent;return o||n};return{position:function(t){var n=this.offset(t),i={top:0,left:0},r=o(t[0]);r!=e[0]&&(i=this.offset(angular.element(r)),i.top+=r.clientTop-r.scrollTop,i.left+=r.clientLeft-r.scrollLeft);var a=t[0].getBoundingClientRect();return{width:a.width||t.prop("offsetWidth"),height:a.height||t.prop("offsetHeight"),top:n.top-i.top,left:n.left-i.left}},offset:function(n){var i=n[0].getBoundingClientRect();return{width:i.width||n.prop("offsetWidth"),height:i.height||n.prop("offsetHeight"),top:i.top+(t.pageYOffset||e[0].documentElement.scrollTop),left:i.left+(t.pageXOffset||e[0].documentElement.scrollLeft)}}}}]),s.service("$ionicScrollDelegate",ionic.DelegateService(["resize","scrollTop","scrollBottom","scrollTo","scrollBy","zoomTo","zoomBy","getScrollPosition","anchorScroll","getScrollView"])),s.service("$ionicSideMenuDelegate",ionic.DelegateService(["toggleLeft","toggleRight","getOpenRatio","isOpen","isOpenLeft","isOpenRight","canDragContent","edgeDragThreshold"])),s.service("$ionicSlideBoxDelegate",ionic.DelegateService(["update","slide","select","enableSlide","previous","next","stop","autoPlay","start","currentIndex","selected","slidesCount","count","loop"])),s.service("$ionicTabsDelegate",ionic.DelegateService(["select","selectedIndex"])),function(){var e=[];s.factory("$ionicTemplateCache",["$http","$templateCache","$timeout",function(t,n,i){function o(e){return"undefined"==typeof e?r():(d(e)&&(e=[e]),l(e,function(e){s.push(e)}),void(a&&r()))}function r(){if(o._runCount++,a=!0,0!==s.length){for(var e=0;4>e&&(template=s.pop());)d(template)&&t.get(template,{cache:n}),e++;s.length&&i(r,1e3)}}var a,s=e;return o._runCount=0,o}]).config(["$stateProvider","$ionicConfigProvider",function(t,n){var i=t.state;t.state=function(o,r){if("object"==typeof r){var a=r.prefetchTemplate!==!1&&e.length<n.templates.maxPrefetch();if(a&&d(r.templateUrl)&&e.push(r.templateUrl),angular.isObject(r.views))for(var s in r.views)a=r.views[s].prefetchTemplate!==!1&&e.length<n.templates.maxPrefetch(),a&&d(r.views[s].templateUrl)&&e.push(r.views[s].templateUrl)}return i.call(t,o,r)}}]).run(["$ionicTemplateCache",function(e){e()}])}(),s.factory("$ionicTemplateLoader",["$compile","$controller","$http","$q","$rootScope","$templateCache",function(e,t,n,i,o,r){function a(e){return n.get(e,{cache:r}).then(function(e){return e.data&&e.data.trim()})}function s(n){n=c({template:"",templateUrl:"",scope:null,controller:null,locals:{},appendTo:null},n||{});var r=n.templateUrl?this.load(n.templateUrl):i.when(n.template);return r.then(function(i){var r,a=n.scope||o.$new(),s=f("<div>").html(i).contents();return n.controller&&(r=t(n.controller,c(n.locals,{$scope:a})),s.children().data("$ngControllerController",r)),n.appendTo&&f(n.appendTo).append(s),e(s)(a),{element:s,scope:a}})}return{load:a,compile:s}}]),s.factory("$ionicViewService",["$ionicHistory","$log",function(e,t){function n(e,n){t.warn("$ionicViewService"+e+" is deprecated, please use $ionicHistory"+n+" instead: http://ionicframework.com/docs/nightly/api/service/$ionicHistory/")}n("","");var i={getCurrentView:"currentView",getBackView:"backView",getForwardView:"forwardView",getCurrentStateName:"currentStateName",nextViewOptions:"nextViewOptions",clearHistory:"clearHistory"};return l(i,function(t,o){i[o]=function(){return n("."+o,"."+t),e[t].apply(this,arguments)}}),i}]),s.factory("$ionicViewSwitcher",["$timeout","$document","$q","$ionicClickBlock","$ionicConfig","$ionicNavBarDelegate",function(e,t,n,i,o,r){function a(e,t){return s(e).abstract?s(e).name:t?t.stateId||t.viewId:ionic.Utils.nextUid()}function s(e){return e&&e.$$state&&e.$$state.self||{}}function u(e,t,n,i){var r=s(e),a=v||E(t,"view-transition")||r.viewTransition||o.views.transition()||"ios",l=o.navBar.transition();return n=g||E(t,"view-direction")||r.viewDirection||n||"none",c(d(i),{transition:a,navBarTransition:"view"===l?a:l,direction:n,shouldAnimate:"none"!==a&&"none"!==n})}function d(e){return e=e||{},{viewId:e.viewId,historyId:e.historyId,stateId:e.stateId,stateName:e.stateName,stateParams:e.stateParams}}function h(e,t){return arguments.length>1?void E(e,T,t):E(e,T)}function p(e){if(e&&e.length){var t=e.scope();t&&(t.$emit("$ionicView.unloaded",e.data(k)),t.$destroy()),e.remove()}}var v,g,m="webkitTransitionEnd transitionend",$="$noCache",w="$destroyEle",b="$eleId",y="$accessed",S="$fallbackTimer",k="$viewData",T="nav-view",C="active",I="cached",B="stage",x=0;ionic.transition=ionic.transition||{},ionic.transition.isActive=!1;var V,E=ionic.DomUtil.cachedAttr,A=[],D={create:function(t,l,f,T){var V,L,P,H=++x,N={init:function(e,t){D.isTransitioning(!0),N.loadViewElements(e),N.render(e,function(){t&&t()})},loadViewElements:function(e){for(var n,i=t.getViewElements(),o=a(l,f),r=t.activeEleId(),s=0,c=i.length;c>s&&(n=i.eq(s),n.data(b)===o?n.data($)?(n.data(b,o+ionic.Utils.nextUid()),n.data(w,!0)):V=n:n.data(b)===r&&(L=n),!V||!L);s++);P=!!V,P||(V=e.ele||D.createViewEle(l),V.data(b,o)),t.activeEleId(o),e.ele=null},render:function(e,n){if(L&&ionic.Utils.disconnectScope(L.scope()),P)ionic.Utils.reconnectScope(V.scope());else{h(V,B);var i=u(l,V,e.direction,f),r=o.transitions.views[i.transition]||o.transitions.views.none;r(V,null,i.direction,!0).run(0),V.data(k,{viewId:i.viewId,historyId:i.historyId,stateName:i.stateName,stateParams:i.stateParams}),(s(l).cache===!1||"false"===s(l).cache||"false"==V.attr("cache-view")||0===o.views.maxCache())&&V.data($,!0);var a=t.appendViewElement(V,l);delete i.direction,delete i.transition,a.$emit("$ionicView.loaded",i)}V.data(y,Date.now()),n&&n()},transition:function(a,s){function p(){h(V,_.shouldAnimate?"entering":C),h(L,_.shouldAnimate?"leaving":I),_.run(1),r._instances.forEach(function(e){e.triggerTransitionStart(H)}),_.shouldAnimate||$()}function $(){$.x||($.x=!0,V.off(m,$),e.cancel(V.data(S)),L&&e.cancel(L.data(S)),N.emit("after",b,y),w.resolve(t),H===x&&(n.all(A).then(D.transitionEnd),N.cleanup(b)),r._instances.forEach(function(e){e.triggerTransitionEnd()}),v=g=f=T=V=L=null)}var w=n.defer();A.push(w.promise);var b=u(l,V,a,f),y=c(c({},b),d(T));b.transitionId=y.transitionId=H,b.fromCache=!!P,b.enableBack=!!s,E(V.parent(),"nav-view-transition",b.transition),E(V.parent(),"nav-view-direction",b.direction),e.cancel(V.data(S)),N.emit("before",b,y);var k=o.transitions.views[b.transition]||o.transitions.views.none,_=k(V,L,b.direction,b.shouldAnimate);_.shouldAnimate&&(V.on(m,$),V.data(S,e($,1e3)),i.show()),h(V,B),_.run(0),e(p,16)},emit:function(e,t,n){var i=V.scope();i&&(i.$emit("$ionicView."+e+"Enter",t),"after"==e&&i.$emit("$ionicView.enter",t)),L&&(i=L.scope(),i&&(i.$emit("$ionicView."+e+"Leave",n),"after"==e&&i.$emit("$ionicView.leave",n)))},cleanup:function(e){L&&"back"==e.direction&&!o.views.forwardCache()&&p(L);var n,i,r,a=t.getViewElements(),s=a.length,c=s-1>o.views.maxCache(),l=Date.now();for(n=0;s>n;n++)i=a.eq(n),c&&i.data(y)<l?(l=i.data(y),r=a.eq(n)):i.data(w)&&h(i)!=C&&p(i);p(r),V.data($)&&V.data(w,!0)},enteringEle:function(){return V},leavingEle:function(){return L}};return N},transitionEnd:function(e){l(e,function(e){e.transitionEnd()}),D.isTransitioning(!1),i.hide(),A=[]},nextTransition:function(e){v=e},nextDirection:function(e){g=e},isTransitioning:function(t){return arguments.length&&(ionic.transition.isActive=!!t,e.cancel(V),t&&(V=e(function(){D.isTransitioning(!1)},999))),ionic.transition.isActive},createViewEle:function(e){var n=t[0].createElement("div");return e&&e.$template&&(n.innerHTML=e.$template,1===n.children.length)?(n.children[0].classList.add("pane"),f(n.children[0])):(n.className="pane",f(n))},viewEleIsActive:function(e,t){h(e,t?C:I)},getTransitionData:u,navViewAttr:h,destroyViewEle:p};return D}]),s.config(["$provide",function(e){e.decorator("$compile",["$delegate",function(e){return e.$$addScopeInfo=function(e,t,n,i){var o=n?i?"$isolateScopeNoTemplate":"$isolateScope":"$scope";e.data(o,t)},e}])}]),s.config(["$provide",function(e){function t(e,t){return e.__hash=e.hash,e.hash=function(n){return angular.isDefined(n)&&t(function(){var e=document.querySelector(".scroll-content");e&&(e.scrollTop=0)},0,!1),e.__hash(n)},e}e.decorator("$location",["$delegate","$timeout",t])}]),s.controller("$ionicHeaderBar",["$scope","$element","$attrs","$q","$ionicConfig","$ionicHistory",function(e,t,n,i,o,r){function a(e){return T[e]||(T[e]=t[0].querySelector("."+e)),T[e]}var s="title",c="back-text",l="back-button",u="default-title",d="previous-title",f="hide",h=this,p="",v="",g=0,m=0,$="",w=!1,b=!0,y=!0,S=!1,k=0;h.beforeEnter=function(t){e.$broadcast("$ionicView.beforeEnter",t)},h.title=function(e){return arguments.length&&e!==p&&(a(s).innerHTML=e,p=e,k=0),p},h.enableBack=function(e,t){return arguments.length&&(w=e,t||h.updateBackButton()),w},h.showBack=function(e,t){return arguments.length&&(b=e,t||h.updateBackButton()),b},h.showNavBack=function(e){y=e,h.updateBackButton()},h.updateBackButton=function(){if((b&&y&&w)!==S){S=b&&y&&w;var e=a(l);e&&e.classList[S?"remove":"add"](f)}},h.titleTextWidth=function(){if(!k){var e=ionic.DomUtil.getTextBounds(a(s));k=Math.min(e&&e.width||30)}return k},h.titleWidth=function(){var e=h.titleTextWidth(),t=a(s).offsetWidth;return e>t&&(e=t+(g-m-5)),e},h.titleTextX=function(){return t[0].offsetWidth/2-h.titleWidth()/2},h.titleLeftRight=function(){return g-m},h.backButtonTextLeft=function(){for(var e=0,t=a(c);t;)e+=t.offsetLeft,t=t.parentElement;return e},h.resetBackButton=function(){if(o.backButton.previousTitleText()){var e=a(d);if(e){e.classList.remove(f);var t=r.backTitle();t!==v&&(v=e.innerHTML=t)}var n=a(u);n&&n.classList.remove(f)}},h.align=function(e){var i=a(s);e=e||n.alignTitle||o.navBar.alignTitle();var r=h.calcWidths(e,!1);if(b&&v&&o.backButton.previousTitleText()){var c=h.calcWidths(e,!0),l=t[0].offsetWidth-c.titleLeft-c.titleRight;h.titleTextWidth()<=l&&(r=c)}return h.updatePositions(i,r.titleLeft,r.titleRight,r.buttonsLeft,r.buttonsRight,r.css,r.showPrevTitle)},h.calcWidths=function(e,n){var i,o,r,h,p,v,g,m,$,w=a(s),y=a(l),S=t[0].childNodes,k=0,T=0,C=0,I=0,B="",x=0;for(i=0;i<S.length;i++){if(p=S[i],g=0,1==p.nodeType){if(p===w){$=!0;continue}if(p.classList.contains(f))continue;if(b&&p===y){for(o=0;o<p.childNodes.length;o++)if(h=p.childNodes[o],1==h.nodeType)if(h.classList.contains(c))for(r=0;r<h.children.length;r++)if(v=h.children[r],n){if(v.classList.contains(u))continue;x+=v.offsetWidth}else{if(v.classList.contains(d))continue;x+=v.offsetWidth}else x+=h.offsetWidth;else 3==h.nodeType&&h.nodeValue.trim()&&(m=ionic.DomUtil.getTextBounds(h),x+=m&&m.width||0);g=x||p.offsetWidth}else g=p.offsetWidth}else 3==p.nodeType&&p.nodeValue.trim()&&(m=ionic.DomUtil.getTextBounds(p),g=m&&m.width||0);$?T+=g:k+=g}if("left"==e)B="title-left",k&&(C=k+15),T&&(I=T+15);else if("right"==e)B="title-right",k&&(C=k+15),T&&(I=T+15);else{var V=Math.max(k,T)+10;V>10&&(C=I=V)}return{backButtonWidth:x,buttonsLeft:k,buttonsRight:T,titleLeft:C,titleRight:I,showPrevTitle:n,css:B}},h.updatePositions=function(e,n,r,s,c,l,p){var v=i.defer();if(e&&(n!==g&&(e.style.left=n?n+"px":"",g=n),r!==m&&(e.style.right=r?r+"px":"",m=r),l!==$&&(l&&e.classList.add(l),$&&e.classList.remove($),$=l)),o.backButton.previousTitleText()){var w=a(d),b=a(u);w&&w.classList[p?"remove":"add"](f),b&&b.classList[p?"add":"remove"](f)}return ionic.requestAnimationFrame(function(){if(e&&e.offsetWidth+10<e.scrollWidth){var n=c+5,i=t[0].offsetWidth-g-h.titleTextWidth()-20;r=n>i?n:i,r!==m&&(e.style.right=r+"px",m=r)}v.resolve()}),v.promise},h.setCss=function(e,t){ionic.DomUtil.cachedStyles(a(e),t)};var T={};e.$on("$destroy",function(){for(var e in T)T[e]=null})}]),s.service("$ionicListDelegate",ionic.DelegateService(["showReorder","showDelete","canSwipeItems","closeOptionButtons"])).controller("$ionicList",["$scope","$attrs","$ionicListDelegate","$ionicHistory",function(e,t,n,i){var o=this,r=!0,a=!1,s=!1,c=n._registerInstance(o,t.delegateHandle,function(){return i.isActiveScope(e)});e.$on("$destroy",c),o.showReorder=function(e){return arguments.length&&(a=!!e),a},o.showDelete=function(e){return arguments.length&&(s=!!e),s},o.canSwipeItems=function(e){return arguments.length&&(r=!!e),r},o.closeOptionButtons=function(){o.listView&&o.listView.clearDragEffects()}}]),s.controller("$ionicNavBar",["$scope","$element","$attrs","$compile","$timeout","$ionicNavBarDelegate","$ionicConfig","$ionicHistory",function(e,t,n,i,o,r,a,s){function c(e,t){var n=console.warn||console.log;n&&n("navBarController."+e+" is deprecated, please use "+t+" instead")}function d(e){return B[e]?f(B[e]):void 0}function h(){for(var e=0;e<I.length;e++)if(I[e].isActive)return I[e]}function p(){for(var e=0;e<I.length;e++)if(!I[e].isActive)return I[e]}function v(e,t){e&&ionic.DomUtil.cachedAttr(e.containerEle(),"nav-bar",t)}var g,m,$,w="hide",b="$ionNavBarController",y="primaryButtons",S="secondaryButtons",k="backButton",T="primaryButtons secondaryButtons leftButtons rightButtons title".split(" "),C=this,I=[],B={},x=!0;t.parent().data(b,C);var V=n.delegateHandle||"navBar"+ionic.Utils.nextUid(),E=r._registerInstance(C,V);C.init=function(){t.addClass("nav-bar-container"),ionic.DomUtil.cachedAttr(t,"nav-bar-transition",a.views.transition()),C.createHeaderBar(!1),C.createHeaderBar(!0),e.$emit("ionNavBar.init",V)},C.createHeaderBar=function(o){function r(e,t){e&&("title"===t?g.append(e):"rightButtons"==t||t==S&&"left"!=a.navBar.positionSecondaryButtons()||t==y&&"right"==a.navBar.positionPrimaryButtons()?(v||(v=f('<div class="buttons buttons-right">'),h.append(v)),t==S?v.append(e):v.prepend(e)):(p||(p=f('<div class="buttons buttons-left">'),m[k]?m[k].after(p):h.prepend(p)),t==S?p.append(e):p.prepend(e)))}var s=f('<div class="nav-bar-block">');ionic.DomUtil.cachedAttr(s,"nav-bar",o?"active":"cached");var c=n.alignTitle||a.navBar.alignTitle(),h=f("<ion-header-bar>").addClass(n.class).attr("align-title",c);u(n.noTapScroll)&&h.attr("no-tap-scroll",n.noTapScroll);var p,v,g=f('<div class="title title-'+c+'">'),m={},$={};m[k]=d(k),m[k]&&h.append(m[k]),h.append(g),l(T,function(e){m[e]=d(e),r(m[e],e)});for(var b=0;b<h[0].children.length;b++)h[0].children[b].classList.add("header-item");s.append(h),t.append(i(s)(e.$new()));var C=h.data("$ionHeaderBarController"),B={isActive:o,title:function(e){C.title(e)},setItem:function(e,t){B.removeItem(t),e?("title"===t&&B.title(""),r(e,t),m[t]&&m[t].addClass(w),$[t]=e):m[t]&&m[t].removeClass(w)},removeItem:function(e){$[e]&&($[e].scope().$destroy(),$[e].remove(),$[e]=null)},containerEle:function(){return s},headerBarEle:function(){return h},afterLeave:function(){l(T,function(e){B.removeItem(e)}),C.resetBackButton()},controller:function(){return C},destroy:function(){l(T,function(e){B.removeItem(e)}),s.scope().$destroy();for(var e in m)m[e]&&(m[e].removeData(),m[e]=null);p&&p.removeData(),v&&v.removeData(),g.removeData(),h.removeData(),s.remove(),s=h=g=p=v=null}};return I.push(B),B},C.navElement=function(e,t){return u(t)&&(B[e]=t),B[e]},C.update=function(e){var t=!e.hasHeaderBar&&e.showNavBar;e.transition=a.views.transition(),t||(e.direction="none"),C.enable(t);var n=C.isInitialized?p():h(),i=C.isInitialized?h():null,o=n.controller();o.enableBack(e.enableBack,!0),o.showBack(e.showBack,!0),o.updateBackButton(),C.title(e.title,n),C.showBar(t),e.navBarItems&&l(T,function(t){n.setItem(e.navBarItems[t],t)}),C.transition(n,i,e),C.isInitialized=!0},C.transition=function(e,n,i){var r=e.controller(),s=a.transitions.navBar[i.navBarTransition]||a.transitions.navBar.none,c=i.transitionId;r.beforeEnter(i);var l=s(e,n,i.direction,i.shouldAnimate&&C.isInitialized);ionic.DomUtil.cachedAttr(t,"nav-bar-transition",i.navBarTransition),ionic.DomUtil.cachedAttr(t,"nav-bar-direction",i.direction),l.shouldAnimate?v(e,"stage"):(v(e,"entering"),v(n,"leaving")),r.resetBackButton(),l.run(0),o(r.align,16),(g=function(){$===c&&(v(e,"entering"),v(n,"leaving"),l.run(1),m=function(){if($==c||!l.shouldAnimate){for(var t=0;t<I.length;t++)I[t].isActive=!1;e.isActive=!0,v(e,"active"),v(n,"cached"),m=null}},g=null)})()},C.triggerTransitionStart=function(e){$=e,g&&g()},C.triggerTransitionEnd=function(){m&&m()},C.showBar=function(t){return arguments.length&&(C.visibleBar(t),e.$parent.$hasHeader=!!t),!!e.$parent.$hasHeader},C.visibleBar=function(e){e&&!x?t.removeClass(w):!e&&x&&t.addClass(w),x=e},C.enable=function(e){C.visibleBar(e);for(var t=0;t<r._instances.length;t++)r._instances[t]!==C&&r._instances[t].visibleBar(!1)},C.showBackButton=function(t){for(var n=0;n<I.length;n++)I[n].controller().showNavBack(!!t);return e.$isBackButtonShown=!!t,e.$isBackButtonShown},C.showActiveBackButton=function(e){var t=h();t&&t.controller().showBack(e)},C.title=function(t,n){return u(t)&&(t=t||"",n=n||h(),n&&n.title(t),e.$title=t,s.currentTitle(t)),e.$title},C.align=function(e,t){t=t||h(),t&&t.controller().align(e)},C.changeTitle=function(e){c("changeTitle(val)","title(val)"),C.title(e)},C.setTitle=function(e){c("setTitle(val)","title(val)"),C.title(e)},C.getTitle=function(){return c("getTitle()","title()"),C.title()},C.back=function(){c("back()","$ionicHistory.goBack()"),s.goBack()},C.getPreviousTitle=function(){c("getPreviousTitle()","$ionicHistory.backTitle()"),s.goBack()},e.$on("$destroy",function(){e.$parent.$hasHeader=!1,t.parent().removeData(b);for(var n=0;n<I.length;n++)I[n].destroy();t.remove(),t=I=null,E()})}]),s.controller("$ionicNavView",["$scope","$element","$attrs","$compile","$controller","$ionicNavBarDelegate","$ionicNavViewDelegate","$ionicHistory","$ionicViewSwitcher",function(e,t,n,i,o,r,a,s,l){function u(){if(f)for(var e=0;e<r._instances.length;e++)if(r._instances[e].$$delegateHandle==f)return r._instances[e];return t.inheritedData("$ionNavBarController")}var d,f,h,p="$eleId",v="$destroyEle",g="$noCache",m="active",$="cached",w=this,b=!1,y=l.navViewAttr;w.scope=e,w.init=function(){var i=n.name||"",o=t.parent().inheritedData("$uiView"),r=o&&o.state?o.state.name:"";i.indexOf("@")<0&&(i=i+"@"+r);var s={name:i,state:null};t.data("$uiView",s);var c=a._registerInstance(w,n.delegateHandle);return e.$on("$destroy",c),e.$on("$ionicHistory.deselect",w.cacheCleanup),s},w.register=function(t){var n=c({},s.currentView()),i=s.register(e,t);w.update(i),w.render(i,t,n)},w.update=function(e){b=!0,d=e.direction;var n=t.parent().inheritedData("$ionNavViewController");n&&(n.isPrimary(!1),("enter"===d||"exit"===d)&&(n.direction(d),"enter"===d&&(d="none")))},w.render=function(e,t,n){var i=s.getViewById(e.viewId)||{},o=l.create(w,t,i,n);o.init(e,function(){o.transition(w.direction(),e.enableBack)})},w.beforeEnter=function(e){if(b){f=e.navBarDelegate;var t=u();t&&t.update(e)}},w.activeEleId=function(e){return arguments.length&&(h=e),h},w.transitionEnd=function(){var e,n,i,o=t.children();for(e=0,n=o.length;n>e;e++)i=o.eq(e),i.data(p)===h?y(i,m):("leaving"===y(i)||y(i)===m||y(i)===$)&&(i.data(v)||i.data(g)?l.destroyViewEle(i):y(i,$))},w.cacheCleanup=function(){for(var e=t.children(),n=0,i=e.length;i>n;n++)e.eq(n).data(v)&&l.destroyViewEle(e.eq(n))},w.clearCache=function(){for(var e,n,i=t.children(),o=0,r=i.length;r>o;o++)e=i.eq(o),y(e)==$?l.destroyViewEle(e):y(e)==m&&(n=e.scope(),n&&n.$broadcast("$ionicView.clearCache"))},w.getViewElements=function(){return t.children()},w.appendViewElement=function(n,r){var a=i(n);t.append(n);var s=e.$new();if(r&&r.$$controller){r.$scope=s;var c=o(r.$$controller,r);t.children().data("$ngControllerController",c)}return a(s),s},w.title=function(e){var t=u();t&&t.title(e)},w.enableBackButton=function(e){var t=u();t&&t.enableBackButton(e)},w.showBackButton=function(e){var t=u();t&&t.showActiveBackButton(e)},w.showBar=function(e){var t=u();t&&t.showBar(e)},w.isPrimary=function(e){return arguments.length&&(b=e),b},w.direction=function(e){return arguments.length&&(d=e),d}}]),s.controller("$ionicScroll",["$scope","scrollViewOptions","$timeout","$window","$location","$document","$ionicScrollDelegate","$ionicHistory",function(e,t,n,i,o,r,a,s){var c=this;c.__timeout=n,c._scrollViewOptions=t;var l=c.element=t.el,u=c.$element=f(l),d=c.scrollView=new ionic.views.Scroll(t);(u.parent().length?u.parent():u).data("$$ionicScrollController",c);var h=a._registerInstance(c,t.delegateHandle,function(){return s.isActiveScope(e)});angular.isDefined(t.bouncing)||ionic.Platform.ready(function(){d.options&&(d.options.bouncing=!0,ionic.Platform.isAndroid()&&(d.options.bouncing=!1,d.options.deceleration=.95))});var p=angular.bind(d,d.resize);ionic.on("resize",p,i);var v=function(t){var n=(t.originalEvent||t).detail||{};e.$onScroll&&e.$onScroll({event:t,scrollTop:n.scrollTop||0,scrollLeft:n.scrollLeft||0})};u.on("scroll",v),e.$on("$destroy",function(){h(),d.__cleanup(),ionic.off("resize",p,i),i.removeEventListener("resize",p),t=null,c._scrollViewOptions.el=null,c._scrollViewOptions=null,u.off("scroll",v),u=null,c.$element=null,l=null,c.element=null,c.scrollView=null,d=null}),n(function(){d&&d.run&&d.run()}),c.getScrollView=function(){return c.scrollView},c.getScrollPosition=function(){return c.scrollView.getValues()},c.resize=function(){return n(p).then(function(){u&&u.triggerHandler("scroll.resize")})},c.scrollTop=function(e){ionic.DomUtil.blurAll(),c.resize().then(function(){d.scrollTo(0,0,!!e)})},c.scrollBottom=function(e){ionic.DomUtil.blurAll(),c.resize().then(function(){var t=d.getScrollMax();d.scrollTo(t.left,t.top,!!e)})},c.scrollTo=function(e,t,n){ionic.DomUtil.blurAll(),c.resize().then(function(){d.scrollTo(e,t,!!n)})},c.zoomTo=function(e,t,n,i){ionic.DomUtil.blurAll(),c.resize().then(function(){d.zoomTo(e,!!t,n,i)})},c.zoomBy=function(e,t,n,i){ionic.DomUtil.blurAll(),c.resize().then(function(){d.zoomBy(e,!!t,n,i)})},c.scrollBy=function(e,t,n){ionic.DomUtil.blurAll(),c.resize().then(function(){d.scrollBy(e,t,!!n)})},c.anchorScroll=function(e){ionic.DomUtil.blurAll(),c.resize().then(function(){var t=o.hash(),n=t&&r[0].getElementById(t);if(!t||!n)return void d.scrollTo(0,0,!!e);var i=n,a=0,s=0,l=0;do null!==i&&(a+=i.offsetLeft),null!==i&&(s+=i.offsetTop),i=i.offsetParent,l++;while(i.attributes!=c.element.attributes&&i.offsetParent);d.scrollTo(a,s,!!e)})},c._setRefresher=function(e,t){var n=c.refresher=t,i=c.refresher.clientHeight||60;d.activatePullToRefresh(i,function(){n.classList.add("active"),e.$onPulling()},function(){n.classList.remove("active"),n.classList.remove("refreshing"),n.classList.remove("refreshing-tail")},function(){n.classList.add("refreshing"),e.$onRefresh()},function(){n.classList.remove("invisible")},function(){n.classList.add("invisible")},function(){n.classList.add("refreshing-tail")})}}]),s.controller("$ionicSideMenus",["$scope","$attrs","$ionicSideMenuDelegate","$ionicPlatform","$ionicBody","$ionicHistory",function(e,t,n,i,o,r){var a,s,c,l,u,d,f,h=this,p=!0;h.$scope=e,h.initialize=function(e){h.left=e.left,h.right=e.right,h.setContent(e.content),h.dragThresholdX=e.dragThresholdX||10,r.registerHistory(h.$scope)},h.setContent=function(e){e&&(h.content=e,h.content.onDrag=function(e){h._handleDrag(e)},h.content.endDrag=function(e){h._endDrag(e)})},h.isOpenLeft=function(){return h.getOpenAmount()>0},h.isOpenRight=function(){return h.getOpenAmount()<0},h.toggleLeft=function(e){if(!f&&h.left.isEnabled){var t=h.getOpenAmount();0===arguments.length&&(e=0>=t),h.content.enableAnimation(),h.openPercentage(e?100:0)}},h.toggleRight=function(e){if(!f&&h.right.isEnabled){var t=h.getOpenAmount();0===arguments.length&&(e=t>=0),h.content.enableAnimation(),h.openPercentage(e?-100:0)}},h.toggle=function(e){"right"==e?h.toggleRight():h.toggleLeft()},h.close=function(){h.openPercentage(0)},h.getOpenAmount=function(){return h.content&&h.content.getTranslateX()||0},h.getOpenRatio=function(){var e=h.getOpenAmount();return e>=0?e/h.left.width:e/h.right.width},h.isOpen=function(){return 0!==h.getOpenAmount()},h.getOpenPercentage=function(){return 100*h.getOpenRatio()},h.openPercentage=function(e){var t=e/100;if(h.left&&e>=0)h.openAmount(h.left.width*t);else if(h.right&&0>e){{h.right.width}h.openAmount(h.right.width*t)}o.enableClass(0!==e,"menu-open")},h.openAmount=function(e){var t=h.left&&h.left.width||0,n=h.right&&h.right.width||0;return(h.left&&h.left.isEnabled||!(e>0))&&(h.right&&h.right.isEnabled||!(0>e))?s&&e>t?void h.content.setTranslateX(t):a&&-n>e?void h.content.setTranslateX(-n):(h.content.setTranslateX(e),void(e>=0?(s=!0,a=!1,e>0&&(h.right&&h.right.pushDown&&h.right.pushDown(),h.left&&h.left.bringUp&&h.left.bringUp())):(a=!0,s=!1,h.right&&h.right.bringUp&&h.right.bringUp(),h.left&&h.left.pushDown&&h.left.pushDown()))):void h.content.setTranslateX(0)},h.snapToRest=function(e){h.content.enableAnimation(),c=!1;var t=h.getOpenRatio();if(0===t)return void h.openPercentage(0);var n=.3,i=e.gesture.velocityX,o=e.gesture.direction;h.openPercentage(t>0&&.5>t&&"right"==o&&n>i?0:t>.5&&"left"==o&&n>i?100:0>t&&t>-.5&&"left"==o&&n>i?0:.5>t&&"right"==o&&n>i?-100:"right"==o&&t>=0&&(t>=.5||i>n)?100:"left"==o&&0>=t&&(-.5>=t||i>n)?-100:0)},h.enableMenuWithBackViews=function(e){return arguments.length&&(p=!!e),p},h.isAsideExposed=function(){return!!f},h.exposeAside=function(e){(h.left&&h.left.isEnabled||h.right&&h.right.isEnabled)&&(h.close(),f=e,h.left&&h.left.isEnabled?h.content.setMarginLeft(f?h.left.width:0):h.right&&h.right.isEnabled&&h.content.setMarginRight(f?h.right.width:0),h.$scope.$emit("$ionicExposeAside",f))},h.activeAsideResizing=function(e){o.enableClass(e,"aside-resizing")},h._endDrag=function(e){f||(c&&h.snapToRest(e),l=null,u=null,d=null)},h._handleDrag=function(e){f||(l?u=e.gesture.touches[0].pageX:(l=e.gesture.touches[0].pageX,u=l),!c&&Math.abs(u-l)>h.dragThresholdX&&(l=u,c=!0,h.content.disableAnimation(),d=h.getOpenAmount()),c&&h.openAmount(d+(u-l)))},h.canDragContent=function(t){return arguments.length&&(e.dragContent=!!t),e.dragContent},h.edgeThreshold=25,h.edgeThresholdEnabled=!1,h.edgeDragThreshold=function(e){return arguments.length&&(angular.isNumber(e)&&e>0?(h.edgeThreshold=e,h.edgeThresholdEnabled=!0):h.edgeThresholdEnabled=!!e),h.edgeThresholdEnabled},h.isDraggableTarget=function(t){var n=h.edgeThresholdEnabled&&!h.isOpen(),i=t.gesture.startEvent&&t.gesture.startEvent.center&&t.gesture.startEvent.center.pageX,o=!n||i<=h.edgeThreshold||i>=h.content.element.offsetWidth-h.edgeThreshold,a=r.backView(),s=p?!0:!a;if(!s){var c=r.currentView()||{};return a.historyId!==c.historyId}return(e.dragContent||h.isOpen())&&o&&!t.gesture.srcEvent.defaultPrevented&&s&&!t.target.tagName.match(/input|textarea|select|object|embed/i)&&!t.target.isContentEditable&&!(t.target.dataset?t.target.dataset.preventScroll:"true"==t.target.getAttribute("data-prevent-scroll"))},e.sideMenuContentTranslateX=0;var v=angular.noop,g=angular.bind(h,h.close);e.$watch(function(){return 0!==h.getOpenAmount()},function(e){v(),e&&(v=i.registerBackButtonAction(g,$))});var m=n._registerInstance(h,t.delegateHandle,function(){return r.isActiveScope(e)});e.$on("$destroy",function(){m(),v(),h.$scope=null,h.content&&(h.content.element=null,h.content=null)
}),h.initialize({left:{width:275},right:{width:275}})}]),s.controller("$ionicTab",["$scope","$ionicHistory","$attrs","$location","$state",function(e,t,n,i,o){this.$scope=e,this.hrefMatchesState=function(){return n.href&&0===i.path().indexOf(n.href.replace(/^#/,"").replace(/\/$/,""))},this.srefMatchesState=function(){return n.uiSref&&o.includes(n.uiSref.split("(")[0])},this.navNameMatchesState=function(){return this.navViewName&&t.isCurrentStateNavView(this.navViewName)},this.tabMatchesState=function(){return this.hrefMatchesState()||this.srefMatchesState()||this.navNameMatchesState()}}]),s.controller("$ionicTabs",["$scope","$element","$ionicHistory",function(e,t,n){var i,o=this,r=null;o.tabs=[],o.selectedIndex=function(){return o.tabs.indexOf(r)},o.selectedTab=function(){return r},o.add=function(e){n.registerHistory(e),o.tabs.push(e)},o.remove=function(e){var t=o.tabs.indexOf(e);if(-1!==t){if(e.$tabSelected)if(o.deselect(e),1===o.tabs.length);else{var n=t===o.tabs.length-1?t-1:t+1;o.select(o.tabs[n])}o.tabs.splice(t,1)}},o.deselect=function(e){e.$tabSelected&&(r=i=null,e.$tabSelected=!1,(e.onDeselect||angular.noop)(),e.$broadcast&&e.$broadcast("$ionicHistory.deselect"))},o.select=function(t,a){var s;if(angular.isNumber(t)){if(s=t,s>=o.tabs.length)return;t=o.tabs[s]}else s=o.tabs.indexOf(t);1===arguments.length&&(a=!(!t.navViewName&&!t.uiSref)),r&&r.$historyId==t.$historyId?a&&n.goToHistoryRoot(t.$historyId):i!==s&&(l(o.tabs,function(e){o.deselect(e)}),r=t,i=s,o.$scope&&o.$scope.$parent&&(o.$scope.$parent.$activeHistoryId=t.$historyId),t.$tabSelected=!0,(t.onSelect||angular.noop)(),a&&e.$emit("$ionicHistory.change",{type:"tab",tabIndex:s,historyId:t.$historyId,navViewName:t.navViewName,hasNavView:!!t.navViewName,title:t.title,url:t.href,uiSref:t.uiSref}))},o.hasActiveScope=function(){for(var e=0;e<o.tabs.length;e++)if(n.isActiveScope(o.tabs[e]))return!0;return!1}}]),s.controller("$ionicView",["$scope","$element","$attrs","$compile","$rootScope","$ionicViewSwitcher",function(e,t,n,i,o){function r(){var t=u(n.viewTitle)&&"viewTitle"||u(n.title)&&"title";t&&(a(n[t]),m.push(n.$observe(t,a))),u(n.hideBackButton)&&m.push(e.$watch(n.hideBackButton,function(e){d.showBackButton(!e)})),u(n.hideNavBar)&&m.push(e.$watch(n.hideNavBar,function(e){d.showBar(!e)}))}function a(e){u(e)&&e!==p&&(p=e,d.title(p))}function s(){for(var e=0;e<m.length;e++)m[e]();m=[]}function c(t){return t?i(t)(e.$new()):void 0}function l(t){return!!e.$eval(n[t])}var d,f,h,p,v=this,g={},m=[],$=e.$on("ionNavBar.init",function(e,t){e.stopPropagation(),f=t});v.init=function(){$();var n=t.inheritedData("$ionModalController");d=t.inheritedData("$ionNavViewController"),d&&!n&&(e.$on("$ionicView.beforeEnter",v.beforeEnter),e.$on("$ionicView.afterEnter",r),e.$on("$ionicView.beforeLeave",s))},v.beforeEnter=function(t,i){if(i&&!i.viewNotified){i.viewNotified=!0,o.$$phase||e.$digest(),p=u(n.viewTitle)?n.viewTitle:n.title;var r={};for(var a in g)r[a]=c(g[a]);d.beforeEnter({title:p,direction:i.direction,transition:i.transition,navBarTransition:i.navBarTransition,transitionId:i.transitionId,shouldAnimate:i.shouldAnimate,enableBack:i.enableBack,showBack:!l("hideBackButton"),navBarItems:r,navBarDelegate:f||null,showNavBar:!l("hideNavBar"),hasHeaderBar:!!h}),s()}},v.navElement=function(e,t){g[e]=t}}]),s.directive("ionActionSheet",["$document",function(e){return{restrict:"E",scope:!0,replace:!0,link:function(t,n){var i=function(e){27==e.which&&(t.cancel(),t.$apply())},o=function(e){e.target==n[0]&&(t.cancel(),t.$apply())};t.$on("$destroy",function(){n.remove(),e.unbind("keyup",i)}),e.bind("keyup",i),n.bind("click",o)},template:'<div class="action-sheet-backdrop"><div class="action-sheet-wrapper"><div class="action-sheet"><div class="action-sheet-group"><div class="action-sheet-title" ng-if="titleText" ng-bind-html="titleText"></div><button class="button" ng-click="buttonClicked($index)" ng-repeat="button in buttons" ng-bind-html="button.text"></button></div><div class="action-sheet-group" ng-if="destructiveText"><button class="button destructive" ng-click="destructiveButtonClicked()" ng-bind-html="destructiveText"></button></div><div class="action-sheet-group" ng-if="cancelText"><button class="button" ng-click="cancel()" ng-bind-html="cancelText"></button></div></div></div></div>'}}]),s.directive("ionCheckbox",["$ionicConfig",function(e){return{restrict:"E",replace:!0,require:"?ngModel",transclude:!0,template:'<label class="item item-checkbox"><div class="checkbox checkbox-input-hidden disable-pointer-events"><input type="checkbox"><i class="checkbox-icon"></i></div><div class="item-content disable-pointer-events" ng-transclude></div></label>',compile:function(t,n){var i=t.find("input");l({name:n.name,"ng-value":n.ngValue,"ng-model":n.ngModel,"ng-checked":n.ngChecked,"ng-disabled":n.ngDisabled,"ng-true-value":n.ngTrueValue,"ng-false-value":n.ngFalseValue,"ng-change":n.ngChange},function(e,t){u(e)&&i.attr(t,e)});var o=t[0].querySelector(".checkbox");o.classList.add("checkbox-"+e.form.checkbox())}}}]);var T="Cannot create a collection-repeat within a scrollView that is scrollable on both x and y axis.  Choose either x direction or y direction.",C="collection-repeat expected attribute collection-item-height to be a an expression that returns a number (in pixels) or percentage.",I="collection-repeat expected attribute collection-item-width to be a an expression that returns a number (in pixels) or percentage.",B="collection-repeat expected expression in form of '_item_ in _collection_[ track by _id_]' but got '%'";s.directive("collectionRepeat",["$collectionRepeatManager","$collectionDataSource","$parse",function(e,t,n){return{priority:1e3,transclude:"element",terminal:!0,$$tlb:!0,require:["^$ionicScroll","^?ionNavView"],controller:[function(){}],link:function(i,o,r,a,s){function c(e){var t=[],n=[],i=!0;l(H.children,function(e){if(ionic.DomUtil.elementIsDescendant(o[0],e,H))i=!1;else{if(e.hasAttribute("collection-repeat-ignore"))return;var r=e.offsetWidth,a=e.offsetHeight;if(r&&a){var s=f(e);(i?t:n).push({width:e.offsetWidth,height:e.offsetHeight,element:s,scope:s.isolateScope()||s.scope(),isOutside:!0})}}}),m.resize(),A.setData(e,t,n),D.resize()}function u(){c(L(i)),P=!H.clientWidth&&!H.clientHeight}function h(){P&&u()}var p=a[0],v=a[1],g=f('<div style="position:relative;">');o.parent()[0].insertBefore(g[0],o[0]),g.append(o);var m=p.scrollView;if(m.options.scrollingX&&m.options.scrollingY)throw new Error(T);var $=!!m.options.scrollingY;if($&&!r.collectionItemHeight)throw new Error(C);if(!$&&!r.collectionItemWidth)throw new Error(I);var w=n(r.collectionItemHeight||'"100%"'),b=n(r.collectionItemWidth||'"100%"'),y=function(e,t){var n=w(e,t);return d(n)&&n.indexOf("%")>-1?Math.floor(parseInt(n)/100*m.__clientHeight):parseInt(n)},S=function(e,t){var n=b(e,t);return d(n)&&n.indexOf("%")>-1?Math.floor(parseInt(n)/100*m.__clientWidth):parseInt(n)},k=r.collectionRepeat.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw new Error(B.replace("%",r.collectionRepeat));var x=k[1],V=k[2],E=k[3],A=new t({scope:i,transcludeFn:s,transcludeParent:o.parent(),keyExpr:x,listExpr:V,trackByExpr:E,heightGetter:y,widthGetter:S}),D=new e({dataSource:A,element:p.$element,scrollView:p.scrollView}),L=n(V);i.$watchCollection(L,function(e){if(e&&!angular.isArray(e))throw new Error("collection-repeat expects an array to repeat over, but instead got '"+typeof e+"'.");c(e)});var P,H=p.scrollView.__content;p.$element.on("scroll.resize",u),ionic.on("resize",u,window);var N;v&&(N=v.scope.$on("$ionicView.afterEnter",h)),i.$on("$destroy",function(){D.destroy(),A.destroy(),ionic.off("resize",u,window),(N||angular.noop)()})}}}]).directive({ngSrc:e("ngSrc","src"),ngSrcset:e("ngSrcset","srcset"),ngHref:e("ngHref","href")}),s.directive("ionContent",["$timeout","$controller","$ionicBind",function(e,t,n){return{restrict:"E",require:"^?ionNavView",scope:!0,priority:800,compile:function(e,i){function o(e,o,a){var s=e.$parent;if(e.$watch(function(){return(s.$hasHeader?" has-header":"")+(s.$hasSubheader?" has-subheader":"")+(s.$hasFooter?" has-footer":"")+(s.$hasSubfooter?" has-subfooter":"")+(s.$hasTabs?" has-tabs":"")+(s.$hasTabsTop?" has-tabs-top":"")},function(e,t){o.removeClass(t),o.addClass(e)}),e.$hasHeader=e.$hasSubheader=e.$hasFooter=e.$hasSubfooter=e.$hasTabs=e.$hasTabsTop=!1,n(e,a,{$onScroll:"&onScroll",$onScrollComplete:"&onScrollComplete",hasBouncing:"@",padding:"@",direction:"@",scrollbarX:"@",scrollbarY:"@",startX:"@",startY:"@",scrollEventInterval:"@"}),e.direction=e.direction||"y",angular.isDefined(a.padding)&&e.$watch(a.padding,function(e){(r||o).toggleClass("padding",!!e)}),"false"===a.scroll);else if("true"===i.overflowScroll)o.addClass("overflow-scroll");else{var c={el:o[0],delegateHandle:i.delegateHandle,locking:"true"===(i.locking||"true"),bouncing:e.$eval(e.hasBouncing),startX:e.$eval(e.startX)||0,startY:e.$eval(e.startY)||0,scrollbarX:e.$eval(e.scrollbarX)!==!1,scrollbarY:e.$eval(e.scrollbarY)!==!1,scrollingX:e.direction.indexOf("x")>=0,scrollingY:e.direction.indexOf("y")>=0,scrollEventInterval:parseInt(e.scrollEventInterval,10)||10,scrollingComplete:function(){e.$onScrollComplete({scrollTop:this.__scrollTop,scrollLeft:this.__scrollLeft})}};t("$ionicScroll",{$scope:e,scrollViewOptions:c}),e.$on("$destroy",function(){c.scrollingComplete=angular.noop,delete c.el,r=null,o=null,i.$$element=null})}}var r;return e.addClass("scroll-content ionic-scroll"),"false"!=i.scroll?(r=f('<div class="scroll"></div>'),r.append(e.contents()),e.append(r)):e.addClass("scroll-content-false"),{pre:o}}}}]),s.directive("exposeAsideWhen",["$window",function(e){return{restrict:"A",require:"^ionSideMenus",link:function(t,n,i,o){function r(){var t="large"==i.exposeAsideWhen?"(min-width:768px)":i.exposeAsideWhen;o.exposeAside(e.matchMedia(t).matches),o.activeAsideResizing(!1)}function a(){o.activeAsideResizing(!0),s()}var s=ionic.debounce(function(){t.$apply(function(){r()})},300,!1);r(),ionic.on("resize",a,e),t.$on("$destroy",function(){ionic.off("resize",a,e)})}}}]);var x="onHold onTap onTouch onRelease onDrag onDragUp onDragRight onDragDown onDragLeft onSwipe onSwipeUp onSwipeRight onSwipeDown onSwipeLeft".split(" ");x.forEach(function(e){s.directive(e,t(e))}),s.directive("ionHeaderBar",n()).directive("ionHeaderBar",i(!0)).directive("ionFooterBar",i(!1)),s.directive("ionInfiniteScroll",["$timeout",function(e){function t(e,t,n){return n?t*(1-parseFloat(e,10)/100):t-parseFloat(e,10)}return{restrict:"E",require:["^$ionicScroll","ionInfiniteScroll"],template:'<i class="icon {{icon()}} icon-refreshing"></i>',scope:{load:"&onInfinite"},controller:["$scope","$attrs",function(e,n){this.isLoading=!1,this.scrollView=null,this.getMaxScroll=function(){var e=(n.distance||"2.5%").trim(),i=-1!==e.indexOf("%"),o=this.scrollView.getScrollMax();return{left:this.scrollView.options.scrollingX?t(e,o.left,i):-1,top:this.scrollView.options.scrollingY?t(e,o.top,i):-1}}}],link:function(t,n,i,o){function r(){if(!s.isLoading){var e=c.getValues(),t=s.getMaxScroll();(-1!==t.left&&e.left>=t.left||-1!==t.top&&e.top>=t.top)&&l()}}var a=o[0],s=o[1],c=s.scrollView=a.scrollView;t.icon=function(){return angular.isDefined(i.icon)?i.icon:"ion-loading-d"};var l=function(){n[0].classList.add("active"),s.isLoading=!0,t.load()},u=function(){n[0].classList.remove("active"),e(function(){c.resize(),d()},0,!1),s.isLoading=!1};t.$on("scroll.infiniteScrollComplete",function(){u()}),t.$on("$destroy",function(){a&&a.$element&&a.$element.off("scroll",d)});var d=ionic.animationFrameThrottle(r);e(d,0,!1),a.$element.on("scroll",d)}}}]);var V='<a class="item-content" ng-href="{{$href()}}" target="{{$target()}}"></a>',E='<div class="item-content"></div>';s.directive("ionItem",function(){return{restrict:"E",controller:["$scope","$element",function(e,t){this.$scope=e,this.$element=t}],scope:!0,compile:function(e,t){var n=angular.isDefined(t.href)||angular.isDefined(t.ngHref)||angular.isDefined(t.uiSref),i=n||/ion-(delete|option|reorder)-button/i.test(e.html());if(i){var o=f(n?V:E);o.append(e.contents()),e.append(o),e.addClass("item item-complex")}else e.addClass("item");return function(e,t,n){e.$href=function(){return n.href||n.ngHref},e.$target=function(){return n.target||"_self"}}}}});var A='<div class="item-left-edit item-delete enable-pointer-events"></div>';s.directive("ionDeleteButton",function(){return{restrict:"E",require:["^ionItem","^?ionList"],priority:Number.MAX_VALUE,compile:function(e,t){return t.$set("class",(t["class"]||"")+" button icon button-icon",!0),function(e,t,n,i){var o=i[0],r=i[1],a=f(A);a.append(t),o.$element.append(a).addClass("item-left-editable"),r&&r.showDelete()&&a.addClass("visible active")}}}}),s.directive("itemFloatingLabel",function(){return{restrict:"C",link:function(e,t){var n=t[0],i=n.querySelector("input, textarea"),o=n.querySelector(".input-label");if(i&&o){var r=function(){i.value?o.classList.add("has-input"):o.classList.remove("has-input")};i.addEventListener("input",r);var a=angular.element(i).controller("ngModel");a&&(a.$render=function(){i.value=a.$viewValue||"",r()}),e.$on("$destroy",function(){i.removeEventListener("input",r)})}}}});var D='<div class="item-options invisible"></div>';s.directive("ionOptionButton",["$compile",function(){function e(e){e.stopPropagation()}return{restrict:"E",require:"^ionItem",priority:Number.MAX_VALUE,compile:function(t,n){return n.$set("class",(n["class"]||"")+" button",!0),function(t,n,i,o){o.optionsContainer||(o.optionsContainer=f(D),o.$element.append(o.optionsContainer)),o.optionsContainer.append(n),o.$element.addClass("item-right-editable"),n.on("click",e)}}}}]);var L='<div data-prevent-scroll="true" class="item-right-edit item-reorder enable-pointer-events"></div>';s.directive("ionReorderButton",["$parse",function(e){return{restrict:"E",require:["^ionItem","^?ionList"],priority:Number.MAX_VALUE,compile:function(t,n){return n.$set("class",(n["class"]||"")+" button icon button-icon",!0),t[0].setAttribute("data-prevent-scroll",!0),function(t,n,i,o){var r=o[0],a=o[1],s=e(i.onReorder);t.$onReorder=function(e,n){s(t,{$fromIndex:e,$toIndex:n})},i.ngClick||i.onClick||i.onclick||(n[0].onclick=function(e){return e.stopPropagation(),!1});var c=f(L);c.append(n),r.$element.append(c).addClass("item-right-editable"),a&&a.showReorder()&&c.addClass("visible active")}}}}]),s.directive("keyboardAttach",function(){return function(e,t){function n(e){if(!ionic.Platform.isAndroid()||ionic.Platform.isFullScreen){var n=e.keyboardHeight||e.detail.keyboardHeight;t.css("bottom",n+"px"),r=t.controller("$ionicScroll"),r&&(r.scrollView.__container.style.bottom=n+o(t[0])+"px")}}function i(){(!ionic.Platform.isAndroid()||ionic.Platform.isFullScreen)&&(t.css("bottom",""),r&&(r.scrollView.__container.style.bottom=""))}ionic.on("native.keyboardshow",n,window),ionic.on("native.keyboardhide",i,window),ionic.on("native.showkeyboard",n,window),ionic.on("native.hidekeyboard",i,window);var r;e.$on("$destroy",function(){ionic.off("native.keyboardshow",n,window),ionic.off("native.keyboardhide",i,window),ionic.off("native.showkeyboard",n,window),ionic.off("native.hidekeyboard",i,window)})}}),s.directive("ionList",["$timeout",function(e){return{restrict:"E",require:["ionList","^?$ionicScroll"],controller:"$ionicList",compile:function(t,n){var i=f('<div class="list">').append(t.contents()).addClass(n.type);return t.append(i),function(t,i,o,r){function a(){function o(e,t){t()&&e.addClass("visible")||e.removeClass("active"),ionic.requestAnimationFrame(function(){t()&&e.addClass("active")||e.removeClass("visible")})}var r=s.listView=new ionic.views.ListView({el:i[0],listEl:i.children()[0],scrollEl:c&&c.element,scrollView:c&&c.scrollView,onReorder:function(t,n,i){var o=f(t).scope();o&&o.$onReorder&&e(function(){o.$onReorder(n,i)})},canSwipe:function(){return s.canSwipeItems()}});t.$on("$destroy",function(){r&&(r.deregister&&r.deregister(),r=null)}),u(n.canSwipe)&&t.$watch("!!("+n.canSwipe+")",function(e){s.canSwipeItems(e)}),u(n.showDelete)&&t.$watch("!!("+n.showDelete+")",function(e){s.showDelete(e)}),u(n.showReorder)&&t.$watch("!!("+n.showReorder+")",function(e){s.showReorder(e)}),t.$watch(function(){return s.showDelete()},function(e,t){if(e||t){e&&s.closeOptionButtons(),s.canSwipeItems(!e),i.children().toggleClass("list-left-editing",e),i.toggleClass("disable-pointer-events",e);var n=f(i[0].getElementsByClassName("item-delete"));o(n,s.showDelete)}}),t.$watch(function(){return s.showReorder()},function(e,t){if(e||t){e&&s.closeOptionButtons(),s.canSwipeItems(!e),i.children().toggleClass("list-right-editing",e),i.toggleClass("disable-pointer-events",e);var n=f(i[0].getElementsByClassName("item-reorder"));o(n,s.showReorder)}})}var s=r[0],c=r[1];e(a)}}}}]),s.directive("menuClose",["$ionicHistory",function(e){return{restrict:"AC",link:function(t,n){n.bind("click",function(){var t=n.inheritedData("$ionSideMenusController");t&&(e.nextViewOptions({historyRoot:!0,disableAnimate:!0,expire:300}),t.close())})}}}]),s.directive("menuToggle",function(){return{restrict:"AC",link:function(e,t,n){e.$on("$ionicView.beforeEnter",function(e,n){if(n.enableBack){var i=t.inheritedData("$ionSideMenusController");i.enableMenuWithBackViews()||t.addClass("hide")}else t.removeClass("hide")}),t.bind("click",function(){var e=t.inheritedData("$ionSideMenusController");e&&e.toggle(n.menuToggle)})}}}),s.directive("ionModal",[function(){return{restrict:"E",transclude:!0,replace:!0,controller:[function(){}],template:'<div class="modal-backdrop"><div class="modal-wrapper" ng-transclude></div></div>'}}]),s.directive("ionModalView",function(){return{restrict:"E",compile:function(e){e.addClass("modal")}}}),s.directive("ionNavBackButton",["$ionicConfig","$document",function(e,t){return{restrict:"E",require:"^ionNavBar",compile:function(n,i){function o(e){return/ion-|icon/.test(e.className)}var r=t[0].createElement("button");for(var a in i.$attr)r.setAttribute(i.$attr[a],i[a]);i.ngClick||r.setAttribute("ng-click","$ionicGoBack($event)"),r.className="button back-button hide buttons "+(n.attr("class")||""),r.innerHTML=n.html()||"";for(var s,c,l,u,d=o(n[0]),f=0;f<n[0].childNodes.length;f++)s=n[0].childNodes[f],1===s.nodeType?o(s)?d=!0:s.classList.contains("default-title")?l=!0:s.classList.contains("previous-title")&&(u=!0):c||3!==s.nodeType||(c=!!s.nodeValue.trim());var h=e.backButton.icon();if(!d&&h&&"none"!==h&&(r.innerHTML='<i class="icon '+h+'"></i> '+r.innerHTML,r.className+=" button-clear"),!c){var p=t[0].createElement("span");p.className="back-text",!l&&e.backButton.text()&&(p.innerHTML+='<span class="default-title">'+e.backButton.text()+"</span>"),!u&&e.backButton.previousTitleText()&&(p.innerHTML+='<span class="previous-title"></span>'),r.appendChild(p)}return n.attr("class","hide"),n.empty(),{pre:function(e,t,n,i){i.navElement("backButton",r.outerHTML),r=null}}}}}]),s.directive("ionNavBar",function(){return{restrict:"E",controller:"$ionicNavBar",scope:!0,link:function(e,t,n,i){i.init()}}}),s.directive("ionNavButtons",["$document",function(e){return{require:"^ionNavBar",restrict:"E",compile:function(t,n){var i="left";/^primary|secondary|right$/i.test(n.side||"")&&(i=n.side.toLowerCase());var o=e[0].createElement("span");o.className=i+"-buttons",o.innerHTML=t.html();var r=i+"Buttons";return t.attr("class","hide"),t.empty(),{pre:function(e,t,n,i){var a=t.parent().data("$ionViewController");a?a.navElement(r,o.outerHTML):i.navElement(r,o.outerHTML),o=null}}}}}]),s.directive("navDirection",["$ionicViewSwitcher",function(e){return{restrict:"A",priority:1e3,link:function(t,n,i){n.bind("click",function(){e.nextDirection(i.navDirection)})}}}]),s.directive("ionNavTitle",["$document",function(e){return{require:"^ionNavBar",restrict:"E",compile:function(t,n){var i="title",o=e[0].createElement("span");for(var r in n.$attr)o.setAttribute(n.$attr[r],n[r]);return o.classList.add("nav-bar-title"),o.innerHTML=t.html(),t.attr("class","hide"),t.empty(),{pre:function(e,t,n,r){var a=t.parent().data("$ionViewController");a?a.navElement(i,o.outerHTML):r.navElement(i,o.outerHTML),o=null}}}}}]),s.directive("navTransition",["$ionicViewSwitcher",function(e){return{restrict:"A",priority:1e3,link:function(t,n,i){n.bind("click",function(){e.nextTransition(i.navTransition)})}}}]),s.directive("ionNavView",["$state","$ionicConfig",function(e,t){return{restrict:"E",terminal:!0,priority:2e3,transclude:!0,controller:"$ionicNavView",compile:function(n,i,o){return n.addClass("view-container"),ionic.DomUtil.cachedAttr(n,"nav-view-transition",t.views.transition()),function(t,n,i,r){function a(t){var n=e.$current&&e.$current.locals[c.name];n&&(t||n!==s)&&(s=n,c.state=n.$$state,r.register(n))}var s;o(t,function(e){n.append(e)});var c=r.init();t.$on("$stateChangeSuccess",function(){a(!1)}),t.$on("$viewContentLoading",function(){a(!1)}),a(!0)}}}}]),s.config(["$provide",function(e){e.decorator("ngClickDirective",["$delegate",function(e){return e.shift(),e}])}]).factory("$ionicNgClick",["$parse",function(e){return function(t,n,i){var o=angular.isFunction(i)?i:e(i);n.on("click",function(e){t.$apply(function(){o(t,{$event:e})})}),n.onclick=function(){}}}]).directive("ngClick",["$ionicNgClick",function(e){return function(t,n,i){e(t,n,i.ngClick)}}]).directive("ionStopEvent",function(){return{restrict:"A",link:function(e,t,n){t.bind(n.ionStopEvent,r)}}}),s.directive("ionPane",function(){return{restrict:"E",link:function(e,t){t.addClass("pane")}}}),s.directive("ionPopover",[function(){return{restrict:"E",transclude:!0,replace:!0,controller:[function(){}],template:'<div class="popover-backdrop"><div class="popover-wrapper" ng-transclude></div></div>'}}]),s.directive("ionPopoverView",function(){return{restrict:"E",compile:function(e){e.append(angular.element('<div class="popover-arrow"></div>')),e.addClass("popover")}}}),s.directive("ionRadio",function(){return{restrict:"E",replace:!0,require:"?ngModel",transclude:!0,template:'<label class="item item-radio"><input type="radio" name="radio-group"><div class="item-content disable-pointer-events" ng-transclude></div><i class="radio-icon disable-pointer-events icon ion-checkmark"></i></label>',compile:function(e,t){t.icon&&e.children().eq(2).removeClass("ion-checkmark").addClass(t.icon);var n=e.find("input");return l({name:t.name,value:t.value,disabled:t.disabled,"ng-value":t.ngValue,"ng-model":t.ngModel,"ng-disabled":t.ngDisabled,"ng-change":t.ngChange},function(e,t){u(e)&&n.attr(t,e)}),function(e,t,n){e.getValue=function(){return e.ngValue||n.value}}}}}),s.directive("ionRefresher",["$ionicBind",function(e){return{restrict:"E",replace:!0,require:"^$ionicScroll",template:'<div class="scroll-refresher" collection-repeat-ignore><div class="ionic-refresher-content" ng-class="{\'ionic-refresher-with-text\': pullingText || refreshingText}"><div class="icon-pulling" ng-class="{\'pulling-rotation-disabled\':disablePullingRotation}"><i class="icon {{pullingIcon}}"></i></div><div class="text-pulling" ng-bind-html="pullingText"></div><div class="icon-refreshing"><i class="icon {{refreshingIcon}}"></i></div><div class="text-refreshing" ng-bind-html="refreshingText"></div></div></div>',compile:function(t,n){return angular.isUndefined(n.pullingIcon)&&n.$set("pullingIcon","ion-ios7-arrow-down"),angular.isUndefined(n.refreshingIcon)&&n.$set("refreshingIcon","ion-loading-d"),function(t,n,i,o){e(t,i,{pullingIcon:"@",pullingText:"@",refreshingIcon:"@",refreshingText:"@",disablePullingRotation:"@",$onRefresh:"&onRefresh",$onPulling:"&onPulling"}),o._setRefresher(t,n[0]),t.$on("scroll.refreshComplete",function(){t.$evalAsync(function(){o.scrollView.finishPullToRefresh()})})}}}}]),s.directive("ionScroll",["$timeout","$controller","$ionicBind",function(e,t,n){return{restrict:"E",scope:!0,controller:function(){},compile:function(e){function i(e,i,r){var a,s;n(e,r,{direction:"@",paging:"@",$onScroll:"&onScroll",scroll:"@",scrollbarX:"@",scrollbarY:"@",zooming:"@",minZoom:"@",maxZoom:"@"}),e.direction=e.direction||"y",angular.isDefined(r.padding)&&e.$watch(r.padding,function(e){o.toggleClass("padding",!!e)}),e.$eval(e.paging)===!0&&o.addClass("scroll-paging"),e.direction||(e.direction="y");var c=e.$eval(e.paging)===!0,l={el:i[0],delegateHandle:r.delegateHandle,locking:"true"===(r.locking||"true"),bouncing:e.$eval(r.hasBouncing),paging:c,scrollbarX:e.$eval(e.scrollbarX)!==!1,scrollbarY:e.$eval(e.scrollbarY)!==!1,scrollingX:e.direction.indexOf("x")>=0,scrollingY:e.direction.indexOf("y")>=0,zooming:e.$eval(e.zooming)===!0,maxZoom:e.$eval(e.maxZoom)||3,minZoom:e.$eval(e.minZoom)||.5,preventDefault:!0};c&&(l.speedMultiplier=.8,l.bouncing=!1),s=t("$ionicScroll",{$scope:e,scrollViewOptions:l}),a=e.$parent.scrollView=s.scrollView}e.addClass("scroll-view ionic-scroll");var o=f('<div class="scroll"></div>');return o.append(e.contents()),e.append(o),{pre:i}}}}]),s.directive("ionSideMenu",function(){return{restrict:"E",require:"^ionSideMenus",scope:!0,compile:function(e,t){return angular.isUndefined(t.isEnabled)&&t.$set("isEnabled","true"),angular.isUndefined(t.width)&&t.$set("width","275"),e.addClass("menu menu-"+t.side),function(e,n,i,o){e.side=i.side||"left";var r=o[e.side]=new ionic.views.SideMenu({width:t.width,el:n[0],isEnabled:!0});e.$watch(i.width,function(e){var t=+e;t&&t==e&&r.setWidth(+e)}),e.$watch(i.isEnabled,function(e){r.setIsEnabled(!!e)})}}}}),s.directive("ionSideMenuContent",["$timeout","$ionicGesture","$window",function(e,t,n){return{restrict:"EA",require:"^ionSideMenus",scope:!0,compile:function(i,o){function r(r,a,s,c){function l(e){0!==c.getOpenAmount()?(c.close(),e.gesture.srcEvent.preventDefault(),v=null,g=null):v||(v=ionic.tap.pointerCoord(e.gesture.srcEvent))}function d(e){c.isDraggableTarget(e)&&"x"==p(e)&&(c._handleDrag(e),e.gesture.srcEvent.preventDefault())}function f(e){"x"==p(e)&&e.gesture.srcEvent.preventDefault()}function h(e){c._endDrag(e),v=null,g=null}function p(e){if(g)return g;if(e&&e.gesture){if(v){var t=ionic.tap.pointerCoord(e.gesture.srcEvent),n=Math.abs(t.x-v.x),i=Math.abs(t.y-v.y),o=i>n?"y":"x";return Math.max(n,i)>30&&(g=o),o}v=ionic.tap.pointerCoord(e.gesture.srcEvent)}return"y"}var v=null,g=null;u(o.dragContent)?r.$watch(o.dragContent,function(e){c.canDragContent(e)}):c.canDragContent(!0),u(o.edgeDragThreshold)&&r.$watch(o.edgeDragThreshold,function(e){c.edgeDragThreshold(e)});var m={element:i[0],onDrag:function(){},endDrag:function(){},getTranslateX:function(){return r.sideMenuContentTranslateX||0},setTranslateX:ionic.animationFrameThrottle(function(t){var n=m.offsetX+t;a[0].style[ionic.CSS.TRANSFORM]="translate3d("+n+"px,0,0)",e(function(){r.sideMenuContentTranslateX=t})}),setMarginLeft:ionic.animationFrameThrottle(function(e){e?(e=parseInt(e,10),a[0].style[ionic.CSS.TRANSFORM]="translate3d("+e+"px,0,0)",a[0].style.width=n.innerWidth-e+"px",m.offsetX=e):(a[0].style[ionic.CSS.TRANSFORM]="translate3d(0,0,0)",a[0].style.width="",m.offsetX=0)}),setMarginRight:ionic.animationFrameThrottle(function(e){e?(e=parseInt(e,10),a[0].style.width=n.innerWidth-e+"px",m.offsetX=e):(a[0].style.width="",m.offsetX=0),a[0].style[ionic.CSS.TRANSFORM]="translate3d(0,0,0)"}),enableAnimation:function(){r.animationEnabled=!0,a[0].classList.add("menu-animated")},disableAnimation:function(){r.animationEnabled=!1,a[0].classList.remove("menu-animated")},offsetX:0};c.setContent(m);var $={stop_browser_behavior:!1},w=t.on("tap",l,a,$),b=t.on("dragright",d,a,$),y=t.on("dragleft",d,a,$),S=t.on("dragup",f,a,$),k=t.on("dragdown",f,a,$),T=t.on("release",h,a,$);r.$on("$destroy",function(){m&&(m.element=null,m=null),t.off(y,"dragleft",d),t.off(b,"dragright",d),t.off(S,"dragup",f),t.off(k,"dragdown",f),t.off(T,"release",h),t.off(w,"tap",l)})}return i.addClass("menu-content pane"),{pre:r}}}}]),s.directive("ionSideMenus",["$ionicBody",function(e){return{restrict:"ECA",controller:"$ionicSideMenus",compile:function(t,n){function i(t,n,i,o){o.enableMenuWithBackViews(t.$eval(i.enableMenuWithBackViews)),t.$on("$ionicExposeAside",function(n,i){t.$exposeAside||(t.$exposeAside={}),t.$exposeAside.active=i,e.enableClass(i,"aside-open")}),t.$on("$ionicView.beforeEnter",function(e,n){n.historyId&&(t.$activeHistoryId=n.historyId)}),t.$on("$destroy",function(){e.removeClass("menu-open","aside-open")})}return n.$set("class",(n["class"]||"")+" view"),{pre:i}}}}]),s.directive("ionSlideBox",["$timeout","$compile","$ionicSlideBoxDelegate","$ionicHistory",function(e,t,n,i){return{restrict:"E",replace:!0,transclude:!0,scope:{autoPlay:"=",doesContinue:"@",slideInterval:"@",showPager:"@",pagerClick:"&",disableScroll:"@",onSlideChanged:"&",activeSlide:"=?"},controller:["$scope","$element","$attrs",function(t,o,r){var a=t.$eval(t.doesContinue)===!0,s=u(r.autoPlay)?!!t.autoPlay:!1,c=s?t.$eval(t.slideInterval)||4e3:0,l=new ionic.views.Slider({el:o[0],auto:c,continuous:a,startSlide:t.activeSlide,slidesChanged:function(){t.currentSlide=l.currentIndex(),e(function(){})},callback:function(n){t.currentSlide=n,t.onSlideChanged({index:t.currentSlide,$index:t.currentSlide}),t.$parent.$broadcast("slideBox.slideChanged",n),t.activeSlide=n,e(function(){})}});l.enableSlide(t.$eval(r.disableScroll)!==!0),t.$watch("activeSlide",function(e){angular.isDefined(e)&&l.slide(e)}),t.$on("slideBox.nextSlide",function(){l.next()}),t.$on("slideBox.prevSlide",function(){l.prev()}),t.$on("slideBox.setSlide",function(e,t){l.slide(t)}),this.__slider=l;var d=n._registerInstance(l,r.delegateHandle,function(){return i.isActiveScope(t)});t.$on("$destroy",d),this.slidesCount=function(){return l.slidesCount()},this.onPagerClick=function(e){t.pagerClick({index:e})},e(function(){l.load()})}],template:'<div class="slider"><div class="slider-slides" ng-transclude></div></div>',link:function(e,n){if(e.$eval(e.showPager)!==!1){var i=e.$new(),o=f("<ion-pager></ion-pager>");n.append(o),t(o)(i)}}}}]).directive("ionSlide",function(){return{restrict:"E",require:"^ionSlideBox",compile:function(e){return e.addClass("slider-slide"),function(){}}}}).directive("ionPager",function(){return{restrict:"E",replace:!0,require:"^ionSlideBox",template:'<div class="slider-pager"><span class="slider-pager-page" ng-repeat="slide in numSlides() track by $index" ng-class="{active: $index == currentSlide}" ng-click="pagerClick($index)"><i class="icon ion-record"></i></span></div>',link:function(e,t,n,i){var o=function(e){for(var n=t[0].children,i=n.length,o=0;i>o;o++)o==e?n[o].classList.add("active"):n[o].classList.remove("active")};e.pagerClick=function(e){i.onPagerClick(e)},e.numSlides=function(){return new Array(i.slidesCount())},e.$watch("currentSlide",function(e){o(e)})}}}),s.directive("ionTab",["$compile","$ionicConfig","$ionicBind","$ionicViewSwitcher",function(e,t,n,i){function o(e,t){return angular.isDefined(t)?" "+e+'="'+t+'"':""}return{restrict:"E",require:["^ionTabs","ionTab"],controller:"$ionicTab",scope:!0,compile:function(r,a){for(var s="<ion-tab-nav"+o("ng-click",a.ngClick)+o("title",a.title)+o("icon",a.icon)+o("icon-on",a.iconOn)+o("icon-off",a.iconOff)+o("badge",a.badge)+o("badge-style",a.badgeStyle)+o("hidden",a.hidden)+o("class",a["class"])+"></ion-tab-nav>",c=document.createElement("div"),l=0;l<r[0].children.length;l++)c.appendChild(r[0].children[l].cloneNode(!0));var u=c.childElementCount;r.empty();var d,h;return u&&("ION-NAV-VIEW"===c.children[0].tagName&&(d=c.children[0].getAttribute("name"),c.children[0].classList.add("view-container"),h=!0),1===u&&(c=c.children[0]),h||c.classList.add("pane"),c.classList.add("tab-content")),function(o,r,a,l){function h(){w.tabMatchesState()&&$.select(o,!1)}function p(n){n&&u?(b||(g=o.$new(),m=f(c),i.viewEleIsActive(m,!0),$.$element.append(m),e(m)(g),b=!0),i.viewEleIsActive(m,!0)):b&&m&&(t.views.maxCache()>0?i.viewEleIsActive(m,!1):v())}function v(){g&&g.$destroy(),b&&m&&m.remove(),b=g=m=null}var g,m,$=l[0],w=l[1],b=!1;n(o,a,{onSelect:"&",onDeselect:"&",title:"@",uiSref:"@",href:"@"}),$.add(o),o.$on("$destroy",function(){o.$tabsDestroy||$.remove(o),y.isolateScope().$destroy(),y.remove(),y=c=m=null
}),r[0].removeAttribute("title"),d&&(w.navViewName=o.navViewName=d),o.$on("$stateChangeSuccess",h),h();var y=f(s);y.data("$ionTabsController",$),y.data("$ionTabController",w),$.$tabsElement.append(e(y)(o)),o.$watch("$tabSelected",p),o.$on("$ionicView.afterEnter",function(){i.viewEleIsActive(m,o.$tabSelected)}),o.$on("$ionicView.clearCache",function(){o.$tabSelected||v()})}}}}]),s.directive("ionTabNav",[function(){return{restrict:"E",replace:!0,require:["^ionTabs","^ionTab"],template:'<a ng-class="{\'tab-item-active\': isTabActive(), \'has-badge\':badge, \'tab-hidden\':isHidden()}"  class="tab-item"><span class="badge {{badgeStyle}}" ng-if="badge">{{badge}}</span><i class="icon {{getIconOn()}}" ng-if="getIconOn() && isTabActive()"></i><i class="icon {{getIconOff()}}" ng-if="getIconOff() && !isTabActive()"></i><span class="tab-title" ng-bind-html="title"></span></a>',scope:{title:"@",icon:"@",iconOn:"@",iconOff:"@",badge:"=",hidden:"@",badgeStyle:"@","class":"@"},compile:function(){return function(e,t,n,i){var o=i[0],r=i[1];t[0].removeAttribute("title"),e.selectTab=function(e){e.preventDefault(),o.select(r.$scope,!0)},n.ngClick||t.on("click",function(t){e.$apply(function(){e.selectTab(t)})}),e.isHidden=function(){return"true"===n.hidden||n.hidden===!0?!0:!1},e.getIconOn=function(){return e.iconOn||e.icon},e.getIconOff=function(){return e.iconOff||e.icon},e.isTabActive=function(){return o.selectedTab()===r.$scope}}}}}]),s.directive("ionTabs",["$ionicTabsDelegate","$ionicConfig","$ionicHistory",function(e,t){return{restrict:"E",scope:!0,controller:"$ionicTabs",compile:function(n){function i(t,n,i,o){var a=e._registerInstance(o,i.delegateHandle,o.hasActiveScope);o.$scope=t,o.$element=n,o.$tabsElement=f(n[0].querySelector(".tabs")),t.$watch(function(){return n[0].className},function(e){var n=-1!==e.indexOf("tabs-top"),i=-1!==e.indexOf("tabs-item-hide");t.$hasTabs=!n&&!i,t.$hasTabsTop=n&&!i}),t.$on("$destroy",function(){t.$tabsDestroy=!0,a(),o.$tabsElement=o.$element=o.$scope=r=null,delete t.$hasTabs,delete t.$hasTabsTop})}function o(e,t,n,i){i.selectedTab()||i.select(0)}var r=f('<div class="tab-nav tabs">');return r.append(n.contents()),n.append(r).addClass("tabs-"+t.tabs.position()+" tabs-"+t.tabs.style()),{pre:i,post:o}}}}]),s.directive("ionToggle",["$ionicGesture","$timeout",function(){return{restrict:"E",replace:!0,require:"?ngModel",transclude:!0,template:'<div class="item item-toggle"><div ng-transclude></div><label class="toggle"><input type="checkbox"><div class="track"><div class="handle"></div></div></label></div>',compile:function(e,t){var n=e.find("input");return l({name:t.name,"ng-value":t.ngValue,"ng-model":t.ngModel,"ng-checked":t.ngChecked,"ng-disabled":t.ngDisabled,"ng-true-value":t.ngTrueValue,"ng-false-value":t.ngFalseValue,"ng-change":t.ngChange},function(e,t){u(e)&&n.attr(t,e)}),t.toggleClass&&e[0].getElementsByTagName("label")[0].classList.add(t.toggleClass),function(e,t){var n,i,o,r;n=t[0].getElementsByTagName("label")[0],i=n.children[0],o=n.children[1],r=o.children[0];var a=f(i).controller("ngModel");e.toggle=new ionic.views.Toggle({el:n,track:o,checkbox:i,handle:r,onChange:function(){a.$setViewValue(i.checked?!0:!1),e.$apply()}}),e.$on("$destroy",function(){e.toggle.destroy()})}}}}]),s.directive("ionView",function(){return{restrict:"EA",priority:1e3,controller:"$ionicView",compile:function(e){return e.addClass("pane"),e[0].removeAttribute("title"),function(e,t,n,i){i.init()}}}})}();
/*
 AngularJS v1.3.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var d=[];s(d,h.noop).chars(a);return d.join("")}function g(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function F(a,d){function c(a,b,c,l){b=h.lowercase(b);if(t[b])for(;f.last()&&u[f.last()];)e("",f.last());v[b]&&f.last()==b&&e("",b);(l=w[b]||!!l)||f.push(b);var m={};c.replace(G,function(a,b,d,c,e){m[b]=r(d||c||e||"")});d.start&&d.start(b,m,l)}function e(a,b){var c=0,e;if(b=h.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,f=[],m=a,l;for(f.last=function(){return f[f.length-1]};a;){l="";k=!0;if(f.last()&&x[f.last()])a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");d.chars&&d.chars(r(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,
b)),a=a.substring(b+3),k=!1);else if(y.test(a)){if(b=a.match(y))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(z))a=a.substring(b[0].length),b[0].replace(z,e),k=!1}else K.test(a)&&((b=a.match(A))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(A,c)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(r(l)))}if(a==m)throw L("badparse",a);m=a}e()}function r(a){if(!a)return"";var d=M.exec(a);a=d[1];var c=d[3];if(d=d[2])q.innerHTML=
d.replace(/</g,"&lt;"),d="textContent"in q?q.textContent:q.innerText;return a+d+c}function B(a){return a.replace(/&/g,"&amp;").replace(N,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(O,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(a,d){var c=!1,e=h.bind(a,a.push);return{start:function(a,k,f){a=h.lowercase(a);!c&&x[a]&&(c=a);c||!0!==C[a]||(e("<"),e(a),h.forEach(k,function(c,f){var k=
h.lowercase(f),g="img"===a&&"src"===k||"background"===k;!0!==P[k]||!0===D[k]&&!d(c,g)||(e(" "),e(f),e('="'),e(B(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=h.lowercase(a);c||!0!==C[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(B(a))}}}var L=h.$$minErr("$sanitize"),A=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,z=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,
J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,y=/<!DOCTYPE([^>]*?)>/i,I=/<!\[CDATA\[(.*?)]]\x3e/g,N=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,O=/([^\#-~| |!])/g,w=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var v=h.extend({},p,n),t=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),u=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use");var x=g("script,style"),C=h.extend({},w,t,u,v,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan");
var P=h.extend({},D,p,n),q=document.createElement("pre"),M=/^(\s*)([\s\S]*?)(\s*)$/;h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];F(d,s(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/,c=/^mailto:/;return function(e,b){function k(a){a&&g.push(E(a))}
function f(a,c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!e)return e;for(var m,l=e,g=[],n,p;m=l.match(d);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),f(n,m[0].replace(c,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return M(new(M(function(){},{prototype:a})),b)}function e(a){return L(arguments,function(b){b!==a&&L(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var c=[];return b.forEach(a,function(a,b){c.push(b)}),c}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return M({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return L(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function m(a,b){var c=K(a),d=c?[]:{};return L(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function n(a,b){var c=K(a)?[]:{};return L(a,function(a,d){c[d]=b(a,d)}),c}function o(a,b){var d=1,f=2,i={},j=[],k=i,m=M(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,I(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);L(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return J(a)&&a.then&&a.$$promises}if(!J(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return L(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!G(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;L(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!J(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=m;var n=a.defer(),r=n.promise,s=r.$$promises={},t=M({},d),u=1+q.length/3,v=!1;if(G(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,l(f.$$inheritedValues,p)),M(s,f.$$promises),f.$$values?(v=e(t,l(f.$$values,p)),r.$$inheritedValues=l(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=l(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function p(a,b,c){this.fromConfig=function(a,b,c){return G(a.template)?this.fromString(a.template,b):G(a.templateUrl)?this.fromUrl(a.templateUrl,b):G(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return H(a)?a(b):a},this.fromUrl=function(c,d){return H(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function q(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new O.Param(b,c,d,e),p[b]}function g(a,b,c){var d=["",""],e=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return e;switch(c){case!1:d=["(",")"];break;case!0:d=["?(",")?"];break;default:d=["("+c+"|",")?"]}return e+d[0]+b+d[1]}function h(c,e){var f,g,h,i,j;return f=c[2]||c[3],j=b.params[f],h=a.substring(m,c.index),g=e?c[4]:c[4]||("*"==c[1]?".*":null),i=O.type(g||"string")||d(O.type("string"),{pattern:new RegExp(g)}),{id:f,regexp:g,segment:h,type:i,cfg:j}}b=M({params:{}},J(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new O.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function r(a){M(this,a)}function s(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(a){return this.pattern.test(a)}function i(){return{strict:t,caseInsensitive:p}}function j(a){return H(a)||K(a)&&H(a[a.length-1])}function k(){for(;x.length;){var a=x.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(v[a.name],o.invoke(a.def))}}function l(a){M(this,a||{})}O=this;var o,p=!1,t=!0,u=!1,v={},w=!0,x=[],y={string:{encode:a,decode:e,is:f,pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return G(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,is:b.identity,equals:b.equals,pattern:/.*/}};s.$$getDefaultValue=function(a){if(!j(a.value))return a.value;if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(a.value)},this.caseInsensitive=function(a){return G(a)&&(p=a),p},this.strictMode=function(a){return G(a)&&(t=a),t},this.defaultSquashPolicy=function(a){if(!G(a))return u;if(a!==!0&&a!==!1&&!I(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return u=a,a},this.compile=function(a,b){return new q(a,M(i(),b))},this.isMatcher=function(a){if(!J(a))return!1;var b=!0;return L(q.prototype,function(c,d){H(c)&&(b=b&&G(a[d])&&H(a[d]))}),b},this.type=function(a,b,c){if(!G(b))return v[a];if(v.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return v[a]=new r(M({name:a},b)),c&&(x.push({name:a,def:c}),w||k()),this},L(y,function(a,b){v[b]=new r(M({name:b},a))}),v=d(v,{}),this.$get=["$injector",function(a){return o=a,w=!1,k(),L(y,function(a,b){v[b]||(v[b]=new r(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=J(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=j(a.value)?a.value:function(){return a.value},a}function i(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof r?b.type:new r(b.type):"config"===d?v.any:v.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return M(b,c,d).array}function l(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!G(c)||null==c)return u;if(c===!0||I(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=K(a.replace)?a.replace:[],I(e)&&f.push({from:e,to:c}),g=n(f,function(a){return a.from}),m(i,function(a){return-1===h(g,a.from)}).concat(f)}function q(){if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(d.$$fn)}function s(a){function b(a){return function(b){return b.from===a}}function c(a){var c=n(m(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),G(a)?w.type.decode(a):q()}function t(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=i(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=l(d,y),A=p(d,x,y,z);M(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:s,dynamic:c,config:d,toString:t})},l.prototype={$$new:function(){return d(this,M(new l,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(l.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),L(b,function(b){L(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return L(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return L(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var b,c,d,e=!0,f=this;return L(this.$$keys(),function(g){d=f[g],c=a[g],b=!c&&d.isOptional,e=e&&(b||!!d.type.is(c))}),e},$$parent:c},this.ParamSet=l}function t(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return G(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(I(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){var e=o&&d.url()===o;if(o=c,e)return!0;var g,h=j.length;for(g=0;h>g;g++)if(b(j[g]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){d.url(a.format(b||{})),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!H(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(I(a)){var b=a;a=function(){return b}}else if(!H(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=I(b);if(I(a)&&(a=d.compile(a)),!h&&!H(b)&&!K(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),M(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:I(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),M(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function u(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){if(!a)return c;var d=I(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=l(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var m=y[e];return!m||!d&&(d||m!==a&&m.self!==a)?c:m}function m(a,b){z[a]||(z[a]=[]),z[a].push(b)}function o(a){for(var b=z[a]||[];b.length;)p(b.shift())}function p(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!I(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(y.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):I(b.parent)?b.parent:J(b.parent)&&I(b.parent.name)?b.parent.name:"";if(e&&!y[e])return m(e,b.self);for(var f in B)H(B[f])&&(b[f]=B[f](b,B.$delegates[f]));return y[c]=b,!b[A]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){x.$current.navigable==b&&j(a,c)||x.transitionTo(b,a,{inherit:!0,location:!1})}]),o(c),b}function q(a){return a.indexOf("*")>-1}function r(a){var b=a.split("."),c=x.$current.name.split(".");if("**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function s(a,b){return I(a)&&!G(b)?B[a]:H(b)&&I(a)?(B[a]&&!B.$delegates[a]&&(B.$delegates[a]=B[a]),B[a]=b,this):this}function t(a,b){return J(a)?b=a:b.name=a,p(b),this}function u(a,e,f,h,m,o,p){function s(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),B;if(!g.retry)return null;if(f.$retry)return p.update(),C;var h=x.transition=e.when(g.retry);return h.then(function(){return h!==x.transition?u:(b.options.$retry=!0,x.transitionTo(b.to,b.toParams,b.options))},function(){return B}),p.update(),h}function t(a,c,d,g,i,j){var l=d?c:k(a.params.$$keys(),c),n={$stateParams:l};i.resolve=m.resolve(a.resolve,n,i.resolve,a);var o=[i.resolve.then(function(a){i.globals=a})];return g&&o.push(g),L(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return f.load(d,{view:c,locals:n,params:l,notify:j.notify})||""}],o.push(m.resolve(e,n,i.resolve,a).then(function(f){if(H(c.controllerProvider)||K(c.controllerProvider)){var g=b.extend({},e,n);f.$$controller=h.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,i[d]=f}))}),e.all(o).then(function(){return i})}var u=e.reject(new Error("transition superseded")),z=e.reject(new Error("transition prevented")),B=e.reject(new Error("transition aborted")),C=e.reject(new Error("transition failed"));return w.locals={resolve:null,globals:{$stateParams:{}}},x={params:{},current:w.self,$current:w,transition:null},x.reload=function(){return x.transitionTo(x.current,o,{reload:!0,inherit:!1,notify:!0})},x.go=function(a,b,c){return x.transitionTo(a,b,M({inherit:!0,relative:x.$current},c))},x.transitionTo=function(b,c,f){c=c||{},f=M({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=x.$current,m=x.params,n=j.path,q=l(b,f.relative);if(!G(q)){var r={to:b,toParams:c,options:f},y=s(r,j.self,m,f);if(y)return y;if(b=r.to,c=r.toParams,f=r.options,q=l(b,f.relative),!G(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[A])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(o,c||{},x.$current,q)),!q.params.$$validates(c))return C;c=q.params.$$values(c),b=q;var B=b.path,D=0,E=B[D],F=w.locals,H=[];if(!f.reload)for(;E&&E===n[D]&&E.ownParams.$$equals(c,m);)F=H[D]=E.locals,D++,E=B[D];if(v(b,j,F,f))return b.self.reloadOnSearch!==!1&&p.update(),x.transition=null,e.when(x.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,m).defaultPrevented)return p.update(),z;for(var I=e.when(F),J=D;J<B.length;J++,E=B[J])F=H[J]=d(F),I=t(E,c,E===b,I,F,f);var K=x.transition=I.then(function(){var d,e,g;if(x.transition!==K)return u;for(d=n.length-1;d>=D;d--)g=n[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<B.length;d++)e=B[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return x.transition!==K?u:(x.$current=b,x.current=b.self,x.params=c,N(x.params,o),x.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,m),p.update(!0),x.current)},function(d){return x.transition!==K?u:(x.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,m,d),g.defaultPrevented||p.update(),e.reject(d))});return K},x.is=function(a,b,d){d=M({relative:x.$current},d||{});var e=l(a,d.relative);return G(e)?x.$current!==e?!1:b?j(e.params.$$values(b),o):!0:c},x.includes=function(a,b,d){if(d=M({relative:x.$current},d||{}),I(a)&&q(a)){if(!r(a))return!1;a=x.$current.name}var e=l(a,d.relative);return G(e)?G(x.$current.includes[e.name])?b?j(e.params.$$values(b),o,g(b)):!0:!1:c},x.href=function(a,b,d){d=M({lossy:!0,inherit:!0,absolute:!1,relative:x.$current},d||{});var e=l(a,d.relative);if(!G(e))return null;d.inherit&&(b=i(o,b||{},x.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys(),b||{}),{absolute:d.absolute}):null},x.get=function(a,b){if(0===arguments.length)return n(g(y),function(a){return y[a].self});var c=l(a,b||x.$current);return c&&c.self?c.self:null},x}function v(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var w,x,y={},z={},A="abstract",B={parent:function(a){if(G(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):w},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=M({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(I(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||w).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new O.ParamSet;return L(a.params||{},function(a,c){b[c]||(b[c]=new O.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?M(a.parent.params.$$new(),a.ownParams):new O.ParamSet},views:function(a){var b={};return L(G(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?M({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};w=p({name:"",url:"^",views:null,"abstract":!0}),w.navigable=null,this.decorator=s,this.state=t,this.$get=u,u.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function v(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=M(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function w(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function x(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=z(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function y(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=z(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function z(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function A(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function B(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function C(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=A(g.uiSref,a.current.name),j=null,k=B(f)||a.$current,l=null,m="A"===f.prop("tagName"),n="FORM"===f[0].nodeName,o=n?"action":"href",p=!0,q={relative:k,inherit:!0},r=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in r&&(q[a]=r[a])});var s=function(c){if(c&&(j=b.copy(c)),p){l=a.href(i.state,j,q);var d=h[1]||h[0];return d&&d.$$setStateInfo(i.state,j),null===l?(p=!1,!1):void g.$set(o,l)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&s(a)},!0),j=b.copy(e.$eval(i.paramExpr))),s(),n||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,q)});b.preventDefault();var g=m&&!l?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function D(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(j):d.removeClass(j)}function g(){return"undefined"!=typeof e.uiSrefActiveEq?h&&a.is(h.name,i):h&&a.includes(h.name,i)}var h,i,j;j=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$setStateInfo=function(b,c){h=a.get(b,B(d)),i=c,f()},b.$on("$stateChangeSuccess",f)}]}}function E(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function F(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var G=b.isDefined,H=b.isFunction,I=b.isString,J=b.isObject,K=b.isArray,L=b.forEach,M=b.extend,N=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),o.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",o),p.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",p);var O;q.prototype.concat=function(a,b){var c={caseInsensitive:O.caseInsensitive(),strict:O.strictMode(),squash:O.defaultSquashPolicy()};return new q(this.sourcePath+a+this.sourceSearch,M(c,b),this)},q.prototype.toString=function(){return this.source},q.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/,"-")}var d=b(a).split(/-(?!\\)/),e=n(d,b);return n(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},q.prototype.parameters=function(a){return G(a)?this.params[a]||null:this.$$paramNames},q.prototype.validates=function(a){return this.params.$$validates(a)},q.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],o=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),o),q=p?m.squash:!1,r=m.type.encode(o);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=K(r)?n(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else I(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;K(r)||(r=[r]),r=n(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},r.prototype.is=function(){return!0},r.prototype.encode=function(a){return a},r.prototype.decode=function(a){return a},r.prototype.equals=function(a,b){return a==b},r.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},r.prototype.pattern=/.*/,r.prototype.toString=function(){return"{Type:"+this.name+"}"},r.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return K(a)?a:G(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=n(c,a);return b===!0?0===m(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",s),b.module("ui.router.util").run(["$urlMatcherFactory",function(){}]),t.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",t),u.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",u),v.$inject=[],b.module("ui.router.state").provider("$view",v),b.module("ui.router.state").provider("$uiViewScroll",w),x.$inject=["$state","$injector","$uiViewScroll","$interpolate"],y.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",x),b.module("ui.router.state").directive("uiView",y),C.$inject=["$state","$timeout"],D.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",C).directive("uiSrefActive",D).directive("uiSrefActiveEq",D),E.$inject=["$state"],F.$inject=["$state"],b.module("ui.router.state").filter("isState",E).filter("includedByState",F)}(window,window.angular);
/*!
 * ngCordova
 * v0.1.12-alpha
 * Copyright 2014 Drifty Co. http://drifty.com/
 * See LICENSE in this repository for license information
 */
!function(){angular.module("ngCordova",["ngCordova.plugins"]),angular.module("ngCordova.plugins.actionSheet",[]).factory("$cordovaActionSheet",["$q","$window",function(e,n){return{show:function(t){var r=e.defer();return n.plugins.actionsheet.show(t,function(e){r.resolve(e)}),r.promise},hide:function(){return n.plugins.actionsheet.hide()}}}]),angular.module("ngCordova.plugins.adMob",[]).factory("$cordovaAdMob",["$q","$window",function(e,n){return{createBannerView:function(t){var r=e.defer();return n.plugins.AdMob.createBannerView(t,function(){r.resolve()},function(){r.reject()}),r.promise},createInterstitialView:function(t){var r=e.defer();return n.plugins.AdMob.createInterstitialView(t,function(){r.resolve()},function(){r.reject()}),r.promise},requestAd:function(t){var r=e.defer();return n.plugins.AdMob.requestAd(t,function(){r.resolve()},function(){r.reject()}),r.promise},showAd:function(t){var r=e.defer();return n.plugins.AdMob.showAd(t,function(){r.resolve()},function(){r.reject()}),r.promise},requestInterstitialAd:function(t){var r=e.defer();return n.plugins.AdMob.requestInterstitialAd(t,function(){r.resolve()},function(){r.reject()}),r.promise}}}]),angular.module("ngCordova.plugins.appAvailability",[]).factory("$cordovaAppAvailability",["$q",function(e){return{check:function(n){var t=e.defer();return appAvailability.check(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.appRate",[]).provider("$cordovaAppRate",[function(){this.setPreferences=function(e){e&&angular.isObject(e)&&(AppRate.preferences.useLanguage=e.language||null,AppRate.preferences.displayAppName=e.appName||"",AppRate.preferences.promptAgainForEachNewVersion=e.promptForNewVersion||!0,AppRate.preferences.openStoreInApp=e.openStoreInApp||!1,AppRate.preferences.usesUntilPrompt=e.usesUntilPrompt||3,AppRate.preferences.useCustomRateDialog=e.useCustomRateDialog||!1,AppRate.preferences.storeAppURL.ios=e.iosURL||null,AppRate.preferences.storeAppURL.android=e.androidURL||null,AppRate.preferences.storeAppURL.blackberry=e.blackberryURL||null,AppRate.preferences.storeAppURL.windows8=e.windowsURL||null)},this.setCustomLocale=function(e){var n={title:"Rate %@",message:"If you enjoy using %@, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!",cancelButtonLabel:"No, Thanks",laterButtonLabel:"Remind Me Later",rateButtonLabel:"Rate It Now"};n=angular.extend(n,e),AppRate.preferences.customLocale=n},this.$get=["$q",function(e){return{promptForRating:function(n){var t=e.defer(),r=AppRate.promptForRating(n);return t.resolve(r),t.promise},onButtonClicked:function(e){AppRate.onButtonClicked=function(n){e.call(this,n)}},onRateDialogShow:function(e){AppRate.onRateDialogShow=e()}}}]}]),angular.module("ngCordova.plugins.appVersion",[]).factory("$cordovaAppVersion",["$q",function(e){return{getAppVersion:function(){var n=e.defer();return cordova.getAppVersion(function(e){n.resolve(e)}),n.promise}}}]),angular.module("ngCordova.plugins.backgroundGeolocation",[]).factory("$cordovaBackgroundGeolocation",["$q","$window",function(e,n){return{init:function(){n.navigator.geolocation.getCurrentPosition(function(e){return e})},configure:function(t){this.init();var r=e.defer();return n.plugins.backgroundGeoLocation.configure(function(e){r.notify(e),n.plugins.backgroundGeoLocation.finish()},function(e){r.reject(e)},t),this.start(),r.promise},start:function(){var t=e.defer();return n.plugins.backgroundGeoLocation.start(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},stop:function(){var t=e.defer();return n.plugins.backgroundGeoLocation.stop(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.badge",[]).factory("$cordovaBadge",["$q",function(e){return{hasPermission:function(){var n=e.defer();return cordova.plugins.notification.badge.hasPermission(function(e){e?n.resolve(!0):n.reject("You do not have permission")}),n.promise},promptForPermission:function(){return cordova.plugins.notification.badge.promptForPermission()},set:function(n){var t=e.defer();return cordova.plugins.notification.badge.hasPermission(function(e){e?t.resolve(cordova.plugins.notification.badge.set(n)):t.reject("You do not have permission to set Badge")}),t.promise},get:function(){var n=e.defer();return cordova.plugins.notification.badge.hasPermission(function(e){e?cordova.plugins.notification.badge.get(function(e){n.resolve(e)}):n.reject("You do not have permission to get Badge")}),n.promise},clear:function(){var n=e.defer();return cordova.plugins.notification.badge.hasPermission(function(e){e?n.resolve(cordova.plugins.notification.badge.clear()):n.reject("You do not have permission to clear Badge")}),n.promise},configure:function(e){return cordova.plugins.notification.badge.configure(e)}}}]),angular.module("ngCordova.plugins.barcodeScanner",[]).factory("$cordovaBarcodeScanner",["$q",function(e){return{scan:function(){var n=e.defer();return cordova.plugins.barcodeScanner.scan(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},encode:function(n,t){var r=e.defer();return n=n||"TEXT_TYPE",cordova.plugins.barcodeScanner.encode(n,t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.batteryStatus",[]).factory("$cordovaBatteryStatus",["$rootScope","$window","$timeout",function(e,n,t){var r=function(n){t(function(){e.$broadcast("$cordovaBatteryStatus:status",n)})},o=function(n){t(function(){e.$broadcast("$cordovaBatteryStatus:critical",n)})},i=function(n){t(function(){e.$broadcast("$cordovaBatteryStatus:low",n)})};return document.addEventListener("deviceready",function(){navigator.battery&&(n.addEventListener("batterystatus",r,!1),n.addEventListener("batterycritical",o,!1),n.addEventListener("batterylow",i,!1))},!1),!0}]).run(["$cordovaBatteryStatus",function(){}]),angular.module("ngCordova.plugins.ble",[]).factory("$cordovaBLE",["$q",function(e){return{scan:function(n,t){var r=e.defer();return ble.scan(n,t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},connect:function(n){var t=e.defer();return ble.connect(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},disconnect:function(n){var t=e.defer();return ble.disconnect(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},read:function(n,t,r){var o=e.defer();return ble.read(n,t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},write:function(n,t,r,o){var i=e.defer();return ble.write(n,t,r,o,function(e){i.resolve(e)},function(e){i.reject(e)}),i.promise},writeCommand:function(n,t,r,o){var i=e.defer();return ble.writeCommand(n,t,r,o,function(e){i.resolve(e)},function(e){i.reject(e)}),i.promise},notify:function(n,t,r){var o=e.defer();return ble.notify(n,t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},indicate:function(n,t,r){var o=e.defer();return ble.indicate(n,t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},isConnected:function(n){var t=e.defer();return ble.isConnected(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},isEnabled:function(){var n=e.defer();return ble.isEnabled(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise}}}]),angular.module("ngCordova.plugins.bluetoothSerial",[]).factory("$cordovaBluetoothSerial",["$q","$window",function(e,n){return{connect:function(t){var r=e.defer();return n.bluetoothSerial.connect(t,function(){r.resolve()},function(e){r.reject(e)}),r.promise},connectInsecure:function(t){var r=e.defer();return n.bluetoothSerial.connectInsecure(t,function(){r.resolve()},function(e){r.reject(e)}),r.promise},disconnect:function(){var t=e.defer();return n.bluetoothSerial.disconnect(function(){t.resolve()},function(e){t.reject(e)}),t.promise},list:function(){var t=e.defer();return n.bluetoothSerial.list(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},isEnabled:function(){var t=e.defer();return n.bluetoothSerial.isEnabled(function(){t.resolve()},function(){t.reject()}),t.promise},isConnected:function(){var t=e.defer();return n.bluetoothSerial.isConnected(function(){t.resolve()},function(){t.reject()}),t.promise},available:function(){var t=e.defer();return n.bluetoothSerial.available(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},read:function(){var t=e.defer();return n.bluetoothSerial.read(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},readUntil:function(t){var r=e.defer();return n.bluetoothSerial.readUntil(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},write:function(t){var r=e.defer();return n.bluetoothSerial.write(t,function(){r.resolve()},function(e){r.reject(e)}),r.promise},subscribe:function(t){var r=e.defer();return n.bluetoothSerial.subscribe(t,function(e){r.notify(e)},function(e){r.reject(e)}),r.promise},subscribeRawData:function(){var t=e.defer();return n.bluetoothSerial.subscribeRawData(function(e){t.notify(e)},function(e){t.reject(e)}),t.promise},unsubscribe:function(){var t=e.defer();return n.bluetoothSerial.unsubscribe(function(){t.resolve()},function(e){t.reject(e)}),t.promise},unsubscribeRawData:function(){var t=e.defer();return n.bluetoothSerial.unsubscribeRawData(function(){t.resolve()},function(e){t.reject(e)}),t.promise},clear:function(){var t=e.defer();return n.bluetoothSerial.clear(function(){t.resolve()},function(e){t.reject(e)}),t.promise},readRSSI:function(){var t=e.defer();return n.bluetoothSerial.readRSSI(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.brightness",[]).factory("$cordovaBrightness",["$q","$window",function(e,n){return{get:function(){var t=e.defer();return n.cordova.plugins.brightness.getBrightness(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},set:function(t){var r=e.defer();return n.cordova.plugins.brightness.setBrightness(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},setKeepScreenOn:function(t){var r=e.defer();return n.cordova.plugins.brightness.setKeepScreenOn(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.calendar",[]).factory("$cordovaCalendar",["$q","$window",function(e,n){return{createCalendar:function(t){var r=e.defer(),o=n.plugins.calendar.getCreateCalendarOptions();return"string"==typeof t?o.calendarName=t:o=angular.extend(o,t),n.plugins.calendar.createCalendar(o,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},deleteCalendar:function(t){var r=e.defer();return n.plugins.calendar.deleteCalendar(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},createEvent:function(t){var r=e.defer(),o={title:null,location:null,notes:null,startDate:null,endDate:null};return o=angular.extend(o,t),n.plugins.calendar.createEvent(o.title,o.location,o.notes,new Date(o.startDate),new Date(o.endDate),function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},createEventWithOptions:function(t){var r=e.defer(),o=[],i=window.plugins.calendar.getCalendarOptions(),a={title:null,location:null,notes:null,startDate:null,endDate:null};o=Object.keys(a);for(var c in t)-1===o.indexOf(c)?i[c]=t[c]:a[c]=t[c];return n.plugins.calendar.createEventWithOptions(a.title,a.location,a.notes,new Date(a.startDate),new Date(a.endDate),i,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},createEventInteractively:function(t){var r=e.defer(),o={title:null,location:null,notes:null,startDate:null,endDate:null};return o=angular.extend(o,t),n.plugins.calendar.createEventInteractively(o.title,o.location,o.notes,new Date(o.startDate),new Date(o.endDate),function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},createEventInNamedCalendar:function(t){var r=e.defer(),o={title:null,location:null,notes:null,startDate:null,endDate:null,calendarName:null};return o=angular.extend(o,t),n.plugins.calendar.createEventInNamedCalendar(o.title,o.location,o.notes,new Date(o.startDate),new Date(o.endDate),o.calendarName,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},findEvent:function(t){var r=e.defer(),o={title:null,location:null,notes:null,startDate:null,endDate:null};return o=angular.extend(o,t),n.plugins.calendar.findEvent(o.title,o.location,o.notes,new Date(o.startDate),new Date(o.endDate),function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},listEventsInRange:function(t,r){var o=e.defer();return n.plugins.calendar.listEventsInRange(t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},listCalendars:function(){var t=e.defer();return n.plugins.calendar.listCalendars(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},findAllEventsInNamedCalendar:function(t){var r=e.defer();return n.plugins.calendar.findAllEventsInNamedCalendar(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},modifyEvent:function(t){var r=e.defer(),o={title:null,location:null,notes:null,startDate:null,endDate:null,newTitle:null,newLocation:null,newNotes:null,newStartDate:null,newEndDate:null};return o=angular.extend(o,t),n.plugins.calendar.modifyEvent(o.title,o.location,o.notes,new Date(o.startDate),new Date(o.endDate),o.newTitle,o.newLocation,o.newNotes,new Date(o.newStartDate),new Date(o.newEndDate),function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},deleteEvent:function(t){var r=e.defer(),o={newTitle:null,location:null,notes:null,startDate:null,endDate:null};return o=angular.extend(o,t),n.plugins.calendar.deleteEvent(o.newTitle,o.location,o.notes,new Date(o.startDate),new Date(o.endDate),function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.camera",[]).factory("$cordovaCamera",["$q",function(e){return{getPicture:function(n){var t=e.defer();return navigator.camera?(navigator.camera.getPicture(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise):(t.resolve(null),t.promise)},cleanup:function(){var n=e.defer();return navigator.camera.cleanup(function(){n.resolve()},function(e){n.reject(e)}),n.promise}}}]),angular.module("ngCordova.plugins.capture",[]).factory("$cordovaCapture",["$q",function(e){return{captureAudio:function(n){var t=e.defer();return navigator.device.capture?(navigator.device.capture.captureAudio(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise):(t.resolve(null),t.promise)},captureImage:function(n){var t=e.defer();return navigator.device.capture?(navigator.device.capture.captureImage(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise):(t.resolve(null),t.promise)},captureVideo:function(n){var t=e.defer();return navigator.device.capture?(navigator.device.capture.captureVideo(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise):(t.resolve(null),t.promise)}}}]),angular.module("ngCordova.plugins.clipboard",[]).factory("$cordovaClipboard",["$q","$window",function(e,n){return{copy:function(t){var r=e.defer();return n.cordova.plugins.clipboard.copy(t,function(){r.resolve()},function(){r.reject()}),r.promise},paste:function(){var t=e.defer();return n.cordova.plugins.clipboard.paste(function(e){t.resolve(e)},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins.contacts",[]).factory("$cordovaContacts",["$q",function(e){return{save:function(n){var t=e.defer(),r=navigator.contacts.create(n);return r.save(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},remove:function(n){var t=e.defer(),r=navigator.contacts.create(n);return r.remove(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},clone:function(e){var n=navigator.contacts.create(e);return n.clone(e)},find:function(n){var t=e.defer(),r=n.fields||["id","displayName"];return delete n.fields,navigator.contacts.find(r,function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise},pickContact:function(){var n=e.defer();return navigator.contacts.pickContact(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise}}}]),angular.module("ngCordova.plugins.datePicker",[]).factory("$cordovaDatePicker",["$window","$q",function(e,n){return{show:function(t){var r=n.defer();return t=t||{date:new Date,mode:"date"},e.datePicker.show(t,function(e){r.resolve(e)}),r.promise}}}]),angular.module("ngCordova.plugins.device",[]).factory("$cordovaDevice",[function(){return{getDevice:function(){return device},getCordova:function(){return device.cordova},getModel:function(){return device.model},getName:function(){return device.name},getPlatform:function(){return device.platform},getUUID:function(){return device.uuid},getVersion:function(){return device.version}}}]),angular.module("ngCordova.plugins.deviceMotion",[]).factory("$cordovaDeviceMotion",["$q",function(e){return{getCurrentAcceleration:function(){var n=e.defer();return navigator.accelerometer.getCurrentAcceleration(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},watchAcceleration:function(n){var t=e.defer(),r=navigator.accelerometer.watchAcceleration(function(e){t.notify(e)},function(e){t.reject(e)},n);return t.promise.cancel=function(){navigator.accelerometer.clearWatch(r)},t.promise.clearWatch=function(e){navigator.accelerometer.clearWatch(e||r)},t.promise.watchID=r,t.promise},clearWatch:function(e){return navigator.accelerometer.clearWatch(e)}}}]),angular.module("ngCordova.plugins.deviceOrientation",[]).factory("$cordovaDeviceOrientation",["$q",function(e){return{getCurrentHeading:function(){var n=e.defer();return navigator.compass.getCurrentHeading(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},watchHeading:function(n){var t=e.defer(),r=navigator.compass.watchHeading(function(e){t.notify(e)},function(e){t.reject(e)},n);return t.promise.cancel=function(){navigator.compass.clearWatch(r)},t.promise.clearWatch=function(e){navigator.compass.clearWatch(e||r)},t.promise.watchID=r,t.promise},clearWatch:function(e){return navigator.compass.clearWatch(e)}}}]),angular.module("ngCordova.plugins.dialogs",[]).factory("$cordovaDialogs",["$q","$window",function(e,n){return{alert:function(t,r,o){var i=e.defer();return n.navigator.notification?navigator.notification.alert(t,function(){i.resolve()},r,o):(n.alert(t),i.resolve()),i.promise},confirm:function(t,r,o){var i=e.defer();return n.navigator.notification?navigator.notification.confirm(t,function(e){i.resolve(e)},r,o):i.resolve(n.confirm(t)?1:2),i.promise},prompt:function(t,r,o,i){var a=e.defer();if(n.navigator.notification)navigator.notification.prompt(t,function(e){a.resolve(e)},r,o,i);else{var c=n.prompt(t,i);a.resolve(null!==c?{input1:c,buttonIndex:1}:{input1:c,buttonIndex:2})}return a.promise},beep:function(e){return navigator.notification.beep(e)}}}]),angular.module("ngCordova.plugins.emailComposer",[]).factory("$cordovaEmailComposer",["$q",function(e){return{isAvailable:function(){var n=e.defer();return cordova.plugins.email.isAvailable(function(e){e?n.resolve():n.reject()}),n.promise},open:function(n){var t=e.defer();return cordova.plugins.email.open(n,function(){t.reject()}),t.promise},addAlias:function(e,n){cordova.plugins.email.addAlias(e,n)}}}]),angular.module("ngCordova.plugins.facebook",[]).provider("$cordovaFacebook",[function(){this.browserInit=function(e,n){this.appID=e,this.appVersion=n||"v2.0",facebookConnectPlugin.browserInit(this.appID,this.appVersion)},this.$get=["$q",function(e){return{login:function(n){var t=e.defer();return facebookConnectPlugin.login(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},showDialog:function(n){var t=e.defer();return facebookConnectPlugin.showDialog(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},api:function(n,t){var r=e.defer();return facebookConnectPlugin.api(n,t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},getAccessToken:function(){var n=e.defer();return facebookConnectPlugin.getAccessToken(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},getLoginStatus:function(){var n=e.defer();return facebookConnectPlugin.getLoginStatus(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},logout:function(){var n=e.defer();return facebookConnectPlugin.logout(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise}}}]}]),angular.module("ngCordova.plugins.facebookAds",[]).factory("$cordovaFacebookAds",["$q","$window",function(e,n){return{setOptions:function(t){var r=e.defer();return n.FacebookAds.setOptions(t,function(){r.resolve()},function(){r.reject()}),r.promise},createBanner:function(t){var r=e.defer();return n.FacebookAds.createBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},removeBanner:function(){var t=e.defer();return n.FacebookAds.removeBanner(function(){t.resolve()},function(){t.reject()}),t.promise},showBanner:function(t){var r=e.defer();return n.FacebookAds.showBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},showBannerAtXY:function(t,r){var o=e.defer();return n.FacebookAds.showBannerAtXY(t,r,function(){o.resolve()},function(){o.reject()}),o.promise},hideBanner:function(){var t=e.defer();return n.FacebookAds.hideBanner(function(){t.resolve()},function(){t.reject()}),t.promise},prepareInterstitial:function(t){var r=e.defer();return n.FacebookAds.prepareInterstitial(t,function(){r.resolve()},function(){r.reject()}),r.promise},showInterstitial:function(){var t=e.defer();return n.FacebookAds.showInterstitial(function(){t.resolve()},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins.file",[]).factory("$cordovaFile",["$q","$window","$log","$timeout",function(e,n,t,r){function o(e){var n=new FileReader;return n.onloadend=function(){this.error?e.reject(this.error):e.resolve(this.result)},n}function i(n,t){var r=e.defer();return c(n,t).then(function(e){e.file(r.resolve,r.reject)},r.reject),r.promise}function a(n,t){var r=e.defer();return c(n,t).then(function(e){e.createWriter(r.resolve,r.reject)},r.reject),r.promise}function c(n,t){var r=e.defer();return l().then(function(e){e.root.getFile(n,t,r.resolve,r.reject)},r.reject),r.promise}function u(t){var r=e.defer();return n.resolveLocalFileSystemURL(t,function(e){e.file(r.resolve,r.reject)},r.reject),r.promise}function s(n,t){var r=e.defer();return l().then(function(e){e.root.getDirectory(n,t,r.resolve,r.reject)},r.reject),r.promise}function l(){var t=e.defer();try{n.requestFileSystem(n.PERSISTENT,1048576,t.resolve,t.reject)}catch(r){t.reject(r)}return t.promise}return{checkDir:function(e){return s(e,{create:!1})},createDir:function(e,n){return s(e,{create:!0,exclusive:n})},listDir:function(n){var t=e.defer();return s(n,{create:!1}).then(function(e){var r=e.createReader();r.readEntries(function(e){t.resolve(e)},function(){t.reject("DIR_READ_ERROR : "+n)})},function(){t.reject("DIR_NOT_FOUND : "+n)}),t.promise},checkFile:function(e){return 2==arguments.length&&(e="/"+e+"/"+arguments[1]),c(e,{create:!1})},createFile:function(e,n){return 3==arguments.length&&(e="/"+e+"/"+arguments[1],n=arguments[2]),c(e,{create:!0,exclusive:n})},removeFile:function(n){var t=e.defer();return 2==arguments.length&&(n="/"+n+"/"+arguments[1]),c(n,{create:!1}).then(function(e){e.remove(t.resolve,t.reject)},t.reject),t.promise},writeFile:function(n,t,r){var o=e.defer();return a(n,{create:!0}).then(function(e){r&&r.append===!0&&e.seek(e.length),e.onwriteend=function(e){this.error?o.reject(this.error):o.resolve(e)},e.write(t)},o.reject),o.promise},readFile:function(e){return t.log("readFile is now deprecated as of v0.1.4-alpha, use readAsText instead"),this.readAsText(e)},readAsText:function(n){var t=e.defer();return 2==arguments.length&&(n="/"+n+"/"+arguments[1]),i(n,{create:!1}).then(function(e){o(t).readAsText(e)},t.reject),t.promise},readAsDataURL:function(n){var t=e.defer();return 2==arguments.length&&(n="/"+n+"/"+arguments[1]),i(n,{create:!1}).then(function(e){o(t).readAsDataURL(e)},t.reject),t.promise},readAsBinaryString:function(n){var t=e.defer();return 2==arguments.length&&(n="/"+n+"/"+arguments[1]),i(n,{create:!1}).then(function(e){o(t).readAsBinaryString(e)},t.reject),t.promise},readAsArrayBuffer:function(n){var t=e.defer();return 2==arguments.length&&(n="/"+n+"/"+arguments[1]),i(n,{create:!1}).then(function(e){o(t).readAsArrayBuffer(e)},t.reject),t.promise},readFileMetadata:function(e){return i(e,{create:!1})},readFileAbsolute:function(n){var t=e.defer();return u(n).then(function(e){o(t).readAsText(e)},t.reject),t.promise},readFileMetadataAbsolute:function(e){return u(e)},downloadFile:function(n,t,o,i){console.warn("This method is deprecated as of v0.1.11-alpha, please refer to $cordovaFileTransfer");var a=e.defer(),c=new FileTransfer,u=encodeURI(n);return o&&void 0!==o.timeout&&null!==o.timeout&&(r(function(){c.abort()},o.timeout),o.timeout=null),c.onprogress=function(e){a.notify(e)},c.download(u,t,a.resolve,a.reject,i,o),a.promise},uploadFile:function(n,t,o,i){console.warn("This method is deprecated as of v0.1.11-alpha, please refer to $cordovaFileTransfer");var a=e.defer(),c=new FileTransfer,u=encodeURI(n);return o&&void 0!==o.timeout&&null!==o.timeout&&(r(function(){c.abort()},o.timeout),o.timeout=null),c.onprogress=function(e){a.notify(e)},a.promise.abort=function(){c.abort()},c.upload(t,u,a.resolve,a.reject,o,i),a.promise}}}]),angular.module("ngCordova.plugins.fileOpener2",[]).factory("$cordovaFileOpener2",["$q",function(e){return{open:function(n,t){var r=e.defer();return cordova.plugins.fileOpener2.open(n,t,{error:function(e){r.reject(e)},success:function(){r.resolve()}}),r.promise},uninstall:function(n){var t=e.defer();return cordova.plugins.fileOpener2.uninstall(n,{error:function(e){t.reject(e)},success:function(){t.resolve()}}),t.promise},appIsInstalled:function(n){var t=e.defer();return cordova.plugins.fileOpener2.appIsInstalled(n,{success:function(e){t.resolve(e)}}),t.promise}}}]),angular.module("ngCordova.plugins.fileTransfer",[]).factory("$cordovaFileTransfer",["$q","$timeout",function(e,n){return{download:function(t,r,o,i){var a=e.defer(),c=new FileTransfer,u=o&&o.encodeURI===!1?t:encodeURI(t);return o&&void 0!==o.timeout&&null!==o.timeout&&(n(function(){c.abort()},o.timeout),o.timeout=null),c.onprogress=function(e){a.notify(e)},c.download(u,r,a.resolve,a.reject,i,o),a.promise},upload:function(t,r,o,i){var a=e.defer(),c=new FileTransfer,u=o&&o.encodeURI===!1?t:encodeURI(t);return o&&void 0!==o.timeout&&null!==o.timeout&&(n(function(){c.abort()},o.timeout),o.timeout=null),c.onprogress=function(e){a.notify(e)},a.promise.abort=function(){c.abort()},c.upload(r,u,a.resolve,a.reject,o,i),a.promise}}}]),angular.module("ngCordova.plugins.flashlight",[]).factory("$cordovaFlashlight",["$q","$window",function(e,n){return{available:function(){var t=e.defer();return n.plugins.flashlight.available(function(e){t.resolve(e)}),t.promise},switchOn:function(){var t=e.defer();return n.plugins.flashlight.switchOn(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},switchOff:function(){var t=e.defer();return n.plugins.flashlight.switchOff(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},toggle:function(){var t=e.defer();return n.plugins.flashlight.toggle(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.flurryAds",[]).factory("$cordovaFlurryAds",["$q","$window",function(e,n){return{setOptions:function(t){var r=e.defer();return n.FlurryAds.setOptions(t,function(){r.resolve()},function(){r.reject()}),r.promise},createBanner:function(t){var r=e.defer();return n.FlurryAds.createBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},removeBanner:function(){var t=e.defer();return n.FlurryAds.removeBanner(function(){t.resolve()},function(){t.reject()}),t.promise},showBanner:function(t){var r=e.defer();return n.FlurryAds.showBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},showBannerAtXY:function(t,r){var o=e.defer();return n.FlurryAds.showBannerAtXY(t,r,function(){o.resolve()},function(){o.reject()}),o.promise},hideBanner:function(){var t=e.defer();return n.FlurryAds.hideBanner(function(){t.resolve()},function(){t.reject()}),t.promise},prepareInterstitial:function(t){var r=e.defer();return n.FlurryAds.prepareInterstitial(t,function(){r.resolve()},function(){r.reject()}),r.promise},showInterstitial:function(){var t=e.defer();return n.FlurryAds.showInterstitial(function(){t.resolve()},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins.ga",[]).factory("$cordovaGA",["$q","$window",function(e,n){return{init:function(t,r){var o=e.defer();return r=r>=0?r:10,n.plugins.gaPlugin.init(function(e){o.resolve(e)},function(e){o.reject(e)},t,r),o.promise},trackEvent:function(t,r,o,i,a,c){var u=e.defer();return n.plugins.gaPlugin.trackEvent(function(e){u.resolve(e)},function(e){u.reject(e)},o,i,a,c),u.promise},trackPage:function(t,r,o){var i=e.defer();return n.plugins.gaPlugin.trackPage(function(e){i.resolve(e)},function(e){i.reject(e)},o),i.promise},setVariable:function(t,r,o,i){var a=e.defer();return n.plugins.gaPlugin.setVariable(function(e){a.resolve(e)},function(e){a.reject(e)},o,i),a.promise},exit:function(){var t=e.defer();return n.plugins.gaPlugin.exit(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.geolocation",[]).factory("$cordovaGeolocation",["$q",function(e){return{getCurrentPosition:function(n){var t=e.defer();return navigator.geolocation.getCurrentPosition(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise},watchPosition:function(n){var t=e.defer(),r=navigator.geolocation.watchPosition(function(e){t.notify(e)},function(e){t.reject(e)},n);return t.promise.cancel=function(){navigator.geolocation.clearWatch(r)},t.promise.clearWatch=function(e){navigator.geolocation.clearWatch(e||r)},t.promise.watchID=r,t.promise},clearWatch:function(e){return navigator.geolocation.clearWatch(e)}}}]),angular.module("ngCordova.plugins.globalization",[]).factory("$cordovaGlobalization",["$q",function(e){return{getPreferredLanguage:function(){var n=e.defer();return navigator.globalization.getPreferredLanguage(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},getLocaleName:function(){var n=e.defer();return navigator.globalization.getLocaleName(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},getFirstDayOfWeek:function(){var n=e.defer();return navigator.globalization.getFirstDayOfWeek(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},dateToString:function(n,t){var r=e.defer();return navigator.globalization.dateToString(n,function(e){r.resolve(e)},function(e){r.reject(e)},t),r.promise},stringToDate:function(n,t){var r=e.defer();return navigator.globalization.stringToDate(n,function(e){r.resolve(e)},function(e){r.reject(e)},t),r.promise},getDatePattern:function(n){var t=e.defer();return navigator.globalization.getDatePattern(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise},getDateNames:function(n){var t=e.defer();return navigator.globalization.getDateNames(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise},isDayLightSavingsTime:function(n){var t=e.defer();return navigator.globalization.isDayLightSavingsTime(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},numberToString:function(n,t){var r=e.defer();return navigator.globalization.numberToString(n,function(e){r.resolve(e)},function(e){r.reject(e)},t),r.promise},stringToNumber:function(n,t){var r=e.defer();return navigator.globalization.stringToNumber(n,function(e){r.resolve(e)},function(e){r.reject(e)},t),r.promise},getNumberPattern:function(n){var t=e.defer();return navigator.globalization.getNumberPattern(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise},getCurrencyPattern:function(n){var t=e.defer();return navigator.globalization.getCurrencyPattern(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.googleAds",[]).factory("$cordovaGoogleAds",["$q","$window",function(e,n){return{setOptions:function(t){var r=e.defer();return n.AdMob.setOptions(t,function(){r.resolve()},function(){r.reject()}),r.promise},createBanner:function(t){var r=e.defer();return n.AdMob.createBanner(t,function(){r.resolve()
},function(){r.reject()}),r.promise},removeBanner:function(){var t=e.defer();return n.AdMob.removeBanner(function(){t.resolve()},function(){t.reject()}),t.promise},showBanner:function(t){var r=e.defer();return n.AdMob.showBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},showBannerAtXY:function(t,r){var o=e.defer();return n.AdMob.showBannerAtXY(t,r,function(){o.resolve()},function(){o.reject()}),o.promise},hideBanner:function(){var t=e.defer();return n.AdMob.hideBanner(function(){t.resolve()},function(){t.reject()}),t.promise},prepareInterstitial:function(t){var r=e.defer();return n.AdMob.prepareInterstitial(t,function(){r.resolve()},function(){r.reject()}),r.promise},showInterstitial:function(){var t=e.defer();return n.AdMob.showInterstitial(function(){t.resolve()},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins.googleAnalytics",[]).factory("$cordovaGoogleAnalytics",["$q","$window",function(e,n){return{startTrackerWithId:function(t){var r=e.defer();return n.analytics.startTrackerWithId(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},setUserId:function(t){var r=e.defer();return n.analytics.setUserId(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},debugMode:function(){var t=e.defer();return n.analytics.debugMode(function(e){t.resolve(e)},function(){t.reject()}),t.promise},trackView:function(t){var r=e.defer();return n.analytics.trackView(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},addCustomDimension:function(t,r){var o=e.defer();return n.analytics.addCustomDimension(t,r,function(){o.resolve()},function(e){o.reject(e)}),o.promise},trackEvent:function(t,r,o,i){var a=e.defer();return n.analytics.trackEvent(t,r,o,i,function(e){a.resolve(e)},function(e){a.reject(e)}),a.promise},addTransaction:function(t,r,o,i,a,c){var u=e.defer();return n.analytics.addTransaction(t,r,o,i,a,c,function(e){u.resolve(e)},function(e){u.reject(e)}),u.promise},addTransactionItem:function(t,r,o,i,a,c,u){var s=e.defer();return n.analytics.addTransactionItem(t,r,o,i,a,c,u,function(e){s.resolve(e)},function(e){s.reject(e)}),s.promise}}}]),angular.module("ngCordova.plugins.googleMap",[]).factory("$cordovaGoogleMap",["$q","$window",function(e,n){var t=null;return{getMap:function(r){var o=e.defer();if(n.plugin.google.maps){var i=document.getElementById("map_canvas");t=n.plugin.google.maps.Map.getMap(r),t.setDiv(i),o.resolve(t)}else o.reject(null);return o.promise},isMapLoaded:function(){return!!t},addMarker:function(n){var r=e.defer();return t.addMarker(n,function(e){r.resolve(e)}),r.promise},getMapTypeIds:function(){return n.plugin.google.maps.mapTypeId},setVisible:function(n){var r=e.defer();return t.setVisible(n),r.promise},cleanup:function(){t=null}}}]),angular.module("ngCordova.plugins.healthKit",[]).factory("$cordovaHealthKit",["$q","$window",function(e,n){return{isAvailable:function(){var t=e.defer();return n.plugins.healthkit.available(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},requestAuthorization:function(t,r){var o=e.defer();return t=t||["HKCharacteristicTypeIdentifierDateOfBirth","HKQuantityTypeIdentifierActiveEnergyBurned","HKQuantityTypeIdentifierHeight"],r=r||["HKQuantityTypeIdentifierActiveEnergyBurned","HKQuantityTypeIdentifierHeight","HKQuantityTypeIdentifierDistanceCycling"],n.plugins.healthkit.requestAuthorization({readTypes:t,writeTypes:r},function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},readDateOfBirth:function(){var t=e.defer();return n.plugins.healthkit.readDateOfBirth(function(e){t.resolve(e)},function(e){t.resolve(e)}),t.promise},readGender:function(){var t=e.defer();return n.plugins.healthkit.readGender(function(e){t.resolve(e)},function(e){t.resolve(e)}),t.promise},saveWeight:function(t,r,o){var i=e.defer();return n.plugins.healthkit.saveWeight({unit:r||"lb",amount:t,date:o||new Date},function(e){i.resolve(e)},function(e){i.resolve(e)}),i.promise},readWeight:function(t){var r=e.defer();return n.plugins.healthkit.readWeight({unit:t||"lb"},function(e){r.resolve(e)},function(e){r.resolve(e)}),r.promise},saveHeight:function(t,r,o){var i=e.defer();return n.plugins.healthkit.saveHeight({unit:r||"in",amount:t,date:o||new Date},function(e){i.resolve(e)},function(e){i.resolve(e)}),i.promise},readHeight:function(t){var r=e.defer();return n.plugins.healthkit.readHeight({unit:t||"in"},function(e){r.resolve(e)},function(e){r.resolve(e)}),r.promise},findWorkouts:function(){var t=e.defer();return n.plugins.healthkit.findWorkouts({},function(e){t.resolve(e)},function(e){t.resolve(e)}),t.promise},saveWorkout:function(t){var r=e.defer();return n.plugins.healthkit.saveWorkout(t,function(e){r.resolve(e)},function(e){r.resolve(e)}),r.promise},querySampleType:function(t){var r=e.defer();return n.plugins.healthkit.querySampleType(t,function(e){r.resolve(e)},function(e){r.resolve(e)}),r.promise}}}]),angular.module("ngCordova.plugins.httpd",[]).factory("$cordovaHttpd",["$q",function(e){return{startServer:function(n){var t=e.defer();return cordova.plugins.CorHttpd.startServer(n,function(){t.resolve()},function(){t.reject()}),t.promise},stopServer:function(){var n=e.defer();return cordova.plugins.CorHttpd.stopServer(function(){n.resolve()},function(){n.reject()}),n.promise},getURL:function(){var n=e.defer();return cordova.plugins.CorHttpd.getURL(function(e){n.resolve(e)},function(){n.reject()}),n.promise},getLocalPath:function(){var n=e.defer();return cordova.plugins.CorHttpd.getLocalPath(function(e){n.resolve(e)},function(){n.reject()}),n.promise}}}]),angular.module("ngCordova.plugins.iAd",[]).factory("$cordovaiAd",["$q","$window",function(e,n){return{setOptions:function(t){var r=e.defer();return n.iAd.setOptions(t,function(){r.resolve()},function(){r.reject()}),r.promise},createBanner:function(t){var r=e.defer();return n.iAd.createBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},removeBanner:function(){var t=e.defer();return n.iAd.removeBanner(function(){t.resolve()},function(){t.reject()}),t.promise},showBanner:function(t){var r=e.defer();return n.iAd.showBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},showBannerAtXY:function(t,r){var o=e.defer();return n.iAd.showBannerAtXY(t,r,function(){o.resolve()},function(){o.reject()}),o.promise},hideBanner:function(){var t=e.defer();return n.iAd.hideBanner(function(){t.resolve()},function(){t.reject()}),t.promise},prepareInterstitial:function(t){var r=e.defer();return n.iAd.prepareInterstitial(t,function(){r.resolve()},function(){r.reject()}),r.promise},showInterstitial:function(){var t=e.defer();return n.iAd.showInterstitial(function(){t.resolve()},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins.imagePicker",[]).factory("$cordovaImagePicker",["$q","$window",function(e,n){return{getPictures:function(t){var r=e.defer();return n.imagePicker.getPictures(function(e){r.resolve(e)},function(e){r.reject(e)},t),r.promise}}}]),angular.module("ngCordova.plugins.inAppBrowser",[]).provider("$cordovaInAppBrowser",[function(){var e,n=this.defaultOptions={};this.setDefaultOptions=function(e){n=angular.extend(n,e)},this.$get=["$rootScope","$q","$window","$timeout",function(t,r,o,i){return{open:function(a,c,u){var s=r.defer();if(u&&!angular.isObject(u))return s.reject("options must be an object"),s.promise;var l=angular.extend({},n,u),f=[];angular.forEach(l,function(e,n){f.push(n+"="+e)});var d=f.join();return e=o.open(a,c,d),e.addEventListener("loadstart",function(e){i(function(){t.$broadcast("$cordovaInAppBrowser:loadstart",e)})},!1),e.addEventListener("loadstop",function(e){s.resolve(e),i(function(){t.$broadcast("$cordovaInAppBrowser:loadstop",e)})},!1),e.addEventListener("loaderror",function(e){s.reject(e),i(function(){t.$broadcast("$cordovaInAppBrowser:loaderror",e)})},!1),e.addEventListener("exit",function(e){i(function(){t.$broadcast("$cordovaInAppBrowser:exit",e)})},!1),s.promise},close:function(){e.close(),e=null},show:function(){e.show()},executeScript:function(n){var t=r.defer();return e.executeScript(n,function(e){t.resolve(e)}),t.promise},insertCSS:function(n){var t=r.defer();return e.insertCSS(n,function(e){t.resolve(e)}),t.promise}}}]}]),angular.module("ngCordova.plugins.keyboard",[]).factory("$cordovaKeyboard",[function(){return{hideAccessoryBar:function(e){return cordova.plugins.Keyboard.hideKeyboardAccessoryBar(e)},close:function(){return cordova.plugins.Keyboard.close()},disableScroll:function(e){return cordova.plugins.Keyboard.disableScroll(e)},isVisible:function(){return cordova.plugins.Keyboard.isVisible}}}]),angular.module("ngCordova.plugins.keychain",[]).factory("$cordovaKeychain",["$q","$window",function(e,n){if("Keychain"in n)var t=new Keychain;return{getForKey:function(n,r){var o=e.defer();return t.getForKey(o.resolve,o.reject,n,r),o.promise},setForKey:function(n,r,o){var i=e.defer();return t.setForKey(i.resolve,i.reject,n,r,o),i.promise},removeForKey:function(n,r){var o=e.defer();return t.removeForKey(o.resolve,o.reject,n,r),o.promise}}}]),angular.module("ngCordova.plugins.localNotification",[]).factory("$cordovaLocalNotification",["$q","$window","$rootScope","$timeout",function(e,n,t,r){return n.plugin&&n.plugin.notification&&(n.plugin.notification.local.oncancel=function(e,n,o){var i={id:e,state:n,json:o};r(function(){t.$broadcast("$cordovaLocalNotification:canceled",i)})},n.plugin.notification.local.onclick=function(e,n,o){var i={id:e,state:n,json:o};r(function(){t.$broadcast("$cordovaLocalNotification:clicked",i)})},n.plugin.notification.local.ontrigger=function(e,n,o){var i={id:e,state:n,json:o};r(function(){t.$broadcast("$cordovaLocalNotification:triggered",i)})},n.plugin.notification.local.onadd=function(e,n,o){var i={id:e,state:n,json:o};r(function(){t.$broadcast("$cordovaLocalNotification:added",i)})}),{add:function(t,r){var o=e.defer();return r=r||null,n.plugin.notification.local.add(t,function(e){o.resolve(e)},r),o.promise},cancel:function(t,r){var o=e.defer();return r=r||null,n.plugin.notification.local.cancel(t,function(e){o.resolve(e)},r),o.promise},cancelAll:function(t){var r=e.defer();return t=t||null,n.plugin.notification.local.cancelAll(function(e){r.resolve(e)},t),r.promise},isScheduled:function(t,r){var o=e.defer();return r=r||null,n.plugin.notification.local.isScheduled(t,function(e){o.resolve(e)},r),o.promise},hasPermission:function(t){var r=e.defer();return n.plugin.notification.local.hasPermission(function(e){e?r.resolve():r.reject()},t),r.promise},promptForPermission:function(){n.plugin.notification.local.promptForPermission()},registerPermission:function(){var t=e.defer();return n.plugin.notification.local.registerPermission(function(e){e?t.resolve():t.reject()}),t.promise},getScheduledIds:function(t){var r=e.defer();return n.plugin.notification.local.getScheduledIds(function(e){r.resolve(e)},t),r.promise},isTriggered:function(t,r){var o=e.defer();return n.plugin.notification.local.isTriggered(t,function(e){o.resolve(e)},r),o.promise},getTriggeredIds:function(t){var r=e.defer();return n.plugin.notification.local.getTriggeredIds(function(e){r.resolve(e)},t),r.promise},getDefaults:function(){return n.plugin.notification.local.getDefaults()},setDefaults:function(e){n.plugin.notification.local.setDefaults(e)}}}]),angular.module("ngCordova.plugins.mMediaAds",[]).factory("$cordovaMMediaAds",["$q","$window",function(e,n){return{setOptions:function(t){var r=e.defer();return n.mMedia.setOptions(t,function(){r.resolve()},function(){r.reject()}),r.promise},createBanner:function(t){var r=e.defer();return n.mMedia.createBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},removeBanner:function(){var t=e.defer();return n.mMedia.removeBanner(function(){t.resolve()},function(){t.reject()}),t.promise},showBanner:function(t){var r=e.defer();return n.mMedia.showBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},showBannerAtXY:function(t,r){var o=e.defer();return n.mMedia.showBannerAtXY(t,r,function(){o.resolve()},function(){o.reject()}),o.promise},hideBanner:function(){var t=e.defer();return n.mMedia.hideBanner(function(){t.resolve()},function(){t.reject()}),t.promise},prepareInterstitial:function(t){var r=e.defer();return n.mMedia.prepareInterstitial(t,function(){r.resolve()},function(){r.reject()}),r.promise},showInterstitial:function(){var t=e.defer();return n.mMedia.showInterstitial(function(){t.resolve()},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins.media",[]).factory("$cordovaMedia",["$q",function(e){return{newMedia:function(n){var t,r=e.defer(),o=null;return t=new Media(n,function(e){r.resolve(e)},function(e){r.reject(e)},function(e){o=e}),r.promise.getCurrentPosition=function(){t.getCurrentPosition(function(){},function(){})},r.promise.getDuration=function(){t.getDuration()},r.promise.play=function(e){"object"!=typeof e&&(e={}),t.play(e)},r.promise.pause=function(){t.pause()},r.promise.stop=function(){t.stop()},r.promise.release=function(){t.release()},r.promise.seekTo=function(e){t.seekTo(e)},r.promise.setVolume=function(e){t.setVolume(e)},r.promise.startRecord=function(){t.startRecord()},r.promise.stopRecord=function(){t.stopRecord()},r.promise}}}]),angular.module("ngCordova.plugins.mobfoxAds",[]).factory("$cordovaMobFoxAds",["$q","$window",function(e,n){return{setOptions:function(t){var r=e.defer();return n.MobFox.setOptions(t,function(){r.resolve()},function(){r.reject()}),r.promise},createBanner:function(t){var r=e.defer();return n.MobFox.createBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},removeBanner:function(){var t=e.defer();return n.MobFox.removeBanner(function(){t.resolve()},function(){t.reject()}),t.promise},showBanner:function(t){var r=e.defer();return n.MobFox.showBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},showBannerAtXY:function(t,r){var o=e.defer();return n.MobFox.showBannerAtXY(t,r,function(){o.resolve()},function(){o.reject()}),o.promise},hideBanner:function(){var t=e.defer();return n.MobFox.hideBanner(function(){t.resolve()},function(){t.reject()}),t.promise},prepareInterstitial:function(t){var r=e.defer();return n.MobFox.prepareInterstitial(t,function(){r.resolve()},function(){r.reject()}),r.promise},showInterstitial:function(){var t=e.defer();return n.MobFox.showInterstitial(function(){t.resolve()},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins",["ngCordova.plugins.actionSheet","ngCordova.plugins.adMob","ngCordova.plugins.appAvailability","ngCordova.plugins.appRate","ngCordova.plugins.appVersion","ngCordova.plugins.backgroundGeolocation","ngCordova.plugins.badge","ngCordova.plugins.barcodeScanner","ngCordova.plugins.batteryStatus","ngCordova.plugins.ble","ngCordova.plugins.bluetoothSerial","ngCordova.plugins.brightness","ngCordova.plugins.calendar","ngCordova.plugins.camera","ngCordova.plugins.capture","ngCordova.plugins.clipboard","ngCordova.plugins.contacts","ngCordova.plugins.datePicker","ngCordova.plugins.device","ngCordova.plugins.deviceMotion","ngCordova.plugins.deviceOrientation","ngCordova.plugins.dialogs","ngCordova.plugins.emailComposer","ngCordova.plugins.facebook","ngCordova.plugins.facebookAds","ngCordova.plugins.file","ngCordova.plugins.fileTransfer","ngCordova.plugins.fileOpener2","ngCordova.plugins.flashlight","ngCordova.plugins.flurryAds","ngCordova.plugins.ga","ngCordova.plugins.geolocation","ngCordova.plugins.globalization","ngCordova.plugins.googleAds","ngCordova.plugins.googleAnalytics","ngCordova.plugins.googleMap","ngCordova.plugins.healthKit","ngCordova.plugins.httpd","ngCordova.plugins.iAd","ngCordova.plugins.imagePicker","ngCordova.plugins.inAppBrowser","ngCordova.plugins.keyboard","ngCordova.plugins.keychain","ngCordova.plugins.localNotification","ngCordova.plugins.media","ngCordova.plugins.mMediaAds","ngCordova.plugins.mobfoxAds","ngCordova.plugins.mopubAds","ngCordova.plugins.nativeAudio","ngCordova.plugins.network","ngCordova.plugins.oauth","ngCordova.plugins.oauthUtility","ngCordova.plugins.pinDialog","ngCordova.plugins.prefs","ngCordova.plugins.printer","ngCordova.plugins.progressIndicator","ngCordova.plugins.push","ngCordova.plugins.sms","ngCordova.plugins.socialSharing","ngCordova.plugins.spinnerDialog","ngCordova.plugins.splashscreen","ngCordova.plugins.sqlite","ngCordova.plugins.statusbar","ngCordova.plugins.toast","ngCordova.plugins.touchid","ngCordova.plugins.vibration","ngCordova.plugins.videoCapturePlus","ngCordova.plugins.zip"]),angular.module("ngCordova.plugins.mopubAds",[]).factory("$cordovaMoPubAds",["$q","$window",function(e,n){return{setOptions:function(t){var r=e.defer();return n.MoPub.setOptions(t,function(){r.resolve()},function(){r.reject()}),r.promise},createBanner:function(t){var r=e.defer();return n.MoPub.createBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},removeBanner:function(){var t=e.defer();return n.MoPub.removeBanner(function(){t.resolve()},function(){t.reject()}),t.promise},showBanner:function(t){var r=e.defer();return n.MoPub.showBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},showBannerAtXY:function(t,r){var o=e.defer();return n.MoPub.showBannerAtXY(t,r,function(){o.resolve()},function(){o.reject()}),o.promise},hideBanner:function(){var t=e.defer();return n.MoPub.hideBanner(function(){t.resolve()},function(){t.reject()}),t.promise},prepareInterstitial:function(t){var r=e.defer();return n.MoPub.prepareInterstitial(t,function(){r.resolve()},function(){r.reject()}),r.promise},showInterstitial:function(){var t=e.defer();return n.MoPub.showInterstitial(function(){t.resolve()},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins.nativeAudio",[]).factory("$cordovaNativeAudio",["$q","$window",function(e,n){return{preloadSimple:function(t,r){var o=e.defer();return n.plugins.NativeAudio.preloadSimple(t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},preloadComplex:function(t,r,o,i){var a=e.defer();return n.plugins.NativeAudio.preloadComplex(t,r,o,i,function(e){a.resolve(e)},function(e){a.reject(e)}),a.promise},play:function(t,r){var o=e.defer();return n.plugins.NativeAudio.play(t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},stop:function(t){var r=e.defer();return n.plugins.NativeAudio.stop(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},loop:function(t){var r=e.defer();return n.plugins.NativeAudio.loop(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},unload:function(t){var r=e.defer();return n.plugins.NativeAudio.unload(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},setVolumeForComplexAsset:function(t,r){var o=e.defer();return n.plugins.NativeAudio.setVolumeForComplexAsset(t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise}}}]),angular.module("ngCordova.plugins.network",[]).factory("$cordovaNetwork",["$rootScope","$timeout",function(e,n){var t=function(){var t=navigator.connection.type;n(function(){e.$broadcast("$cordovaNetwork:offline",t)})},r=function(){var t=navigator.connection.type;n(function(){e.$broadcast("$cordovaNetwork:online",t)})};return document.addEventListener("deviceready",function(){navigator.connection&&(document.addEventListener("offline",t,!1),document.addEventListener("online",r,!1))}),{getNetwork:function(){return navigator.connection.type},isOnline:function(){var e=navigator.connection.type;return e!==Connection.UNKNOWN&&e!==Connection.NONE},isOffline:function(){var e=navigator.connection.type;return e===Connection.UNKNOWN||e===Connection.NONE},clearOfflineWatch:function(){document.removeEventListener("offline",t),e.$$listeners["$cordovaNetwork:offline"]=[]},clearOnlineWatch:function(){document.removeEventListener("online",t),e.$$listeners["$cordovaNetwork:online"]=[]}}}]).run(["$cordovaNetwork",function(){}]),angular.module("ngCordova.plugins.oauth",["ngCordova.plugins.oauthUtility"]).factory("$cordovaOauth",["$q","$http","$cordovaOauthUtility",function(e,n,t){return{adfs:function(t,r,o){var i=e.defer();if(window.cordova){var a=cordova.require("cordova/plugin_list").metadata;if(a.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var c=window.open(r+"/adfs/oauth2/authorize?response_type=code&client_id="+t+"&redirect_uri=http://localhost/callback&resource="+o,"_blank","location=no");c.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){var o=e.url.split("code=")[1];n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:r+"/adfs/oauth2/token",data:"client_id="+t+"&code="+o+"&redirect_uri=http://localhost/callback&grant_type=authorization_code"}).success(function(e){i.resolve(e)}).error(function(){i.reject("Problem authenticating")}).finally(function(){setTimeout(function(){c.close()},10)})}}),c.addEventListener("exit",function(){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},dropbox:function(n){var t=e.defer();if(window.cordova){var r=cordova.require("cordova/plugin_list").metadata;if(r.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var o=window.open("https://www.dropbox.com/1/oauth2/authorize?client_id="+n+"&redirect_uri=http://localhost/callback&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");o.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){for(var n=e.url.split("#")[1],r=n.split("&"),i=[],a=0;a<r.length;a++)i[r[a].split("=")[0]]=r[a].split("=")[1];void 0!==i.access_token&&null!==i.access_token?t.resolve({access_token:i.access_token,token_type:i.token_type,uid:i.uid}):t.reject("Problem authenticating"),setTimeout(function(){o.close()},10)}}),o.addEventListener("exit",function(){t.reject("The sign in flow was canceled")})}else t.reject("Could not find InAppBrowser plugin")}else t.reject("Cannot authenticate via a web browser");return t.promise},digitalOcean:function(t,r){var o=e.defer();if(window.cordova){var i=cordova.require("cordova/plugin_list").metadata;if(i.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var a=window.open("https://cloud.digitalocean.com/v1/oauth/authorize?client_id="+t+"&redirect_uri=http://localhost/callback&response_type=code&scope=read%20write","_blank","location=no,clearsessioncache=yes,clearcache=yes");a.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){var i=e.url.split("code=")[1];n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://cloud.digitalocean.com/v1/oauth/token",data:"client_id="+t+"&client_secret="+r+"&redirect_uri=http://localhost/callback&grant_type=authorization_code&code="+i}).success(function(e){o.resolve(e)}).error(function(){o.reject("Problem authenticating")}).finally(function(){setTimeout(function(){a.close()},10)})}}),a.addEventListener("exit",function(){o.reject("The sign in flow was canceled")})}else o.reject("Could not find InAppBrowser plugin")}else o.reject("Cannot authenticate via a web browser");return o.promise},google:function(n,t){var r=e.defer();if(window.cordova){var o=cordova.require("cordova/plugin_list").metadata;if(o.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var i=window.open("https://accounts.google.com/o/oauth2/auth?client_id="+n+"&redirect_uri=http://localhost/callback&scope="+t.join(" ")+"&approval_prompt=force&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");i.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){for(var n=e.url.split("#")[1],t=n.split("&"),o=[],a=0;a<t.length;a++)o[t[a].split("=")[0]]=t[a].split("=")[1];void 0!==o.access_token&&null!==o.access_token?r.resolve({access_token:o.access_token,token_type:o.token_type,expires_in:o.expires_in}):r.reject("Problem authenticating"),setTimeout(function(){i.close()},10)}}),i.addEventListener("exit",function(){r.reject("The sign in flow was canceled")})}else r.reject("Could not find InAppBrowser plugin")}else r.reject("Cannot authenticate via a web browser");return r.promise},github:function(t,r,o){var i=e.defer();if(window.cordova){var a=cordova.require("cordova/plugin_list").metadata;if(a.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var c=window.open("https://github.com/login/oauth/authorize?client_id="+t+"&redirect_uri=http://localhost/callback&scope="+o.join(","),"_blank","location=no,clearsessioncache=yes,clearcache=yes");c.addEventListener("loadstart",function(e){0===e.url.indexOf("http://localhost/callback")&&(requestToken=e.url.split("code=")[1],n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n.defaults.headers.post.accept="application/json",n({method:"post",url:"https://github.com/login/oauth/access_token",data:"client_id="+t+"&client_secret="+r+"&redirect_uri=http://localhost/callback&code="+requestToken}).success(function(e){i.resolve(e)}).error(function(){i.reject("Problem authenticating")}).finally(function(){setTimeout(function(){c.close()},10)}))}),c.addEventListener("exit",function(){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},facebook:function(n,t){var r=e.defer();if(window.cordova){var o=cordova.require("cordova/plugin_list").metadata;if(o.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var i=window.open("https://www.facebook.com/dialog/oauth?client_id="+n+"&redirect_uri=http://localhost/callback&response_type=token&scope="+t.join(","),"_blank","location=no,clearsessioncache=yes,clearcache=yes");i.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){for(var n=e.url.split("#")[1],t=n.split("&"),o=[],a=0;a<t.length;a++)o[t[a].split("=")[0]]=t[a].split("=")[1];void 0!==o.access_token&&null!==o.access_token?r.resolve({access_token:o.access_token,expires_in:o.expires_in}):r.reject("Problem authenticating"),setTimeout(function(){i.close()},10)}}),i.addEventListener("exit",function(){r.reject("The sign in flow was canceled")})}else r.reject("Could not find InAppBrowser plugin")}else r.reject("Cannot authenticate via a web browser");return r.promise},linkedin:function(t,r,o,i){var a=e.defer();if(window.cordova){var c=cordova.require("cordova/plugin_list").metadata;if(c.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var u=window.open("https://www.linkedin.com/uas/oauth2/authorization?client_id="+t+"&redirect_uri=http://localhost/callback&scope="+o.join(" ")+"&response_type=code&state="+i,"_blank","location=no,clearsessioncache=yes,clearcache=yes");u.addEventListener("loadstart",function(e){0===e.url.indexOf("http://localhost/callback")&&(requestToken=e.url.split("code=")[1],n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://www.linkedin.com/uas/oauth2/accessToken",data:"client_id="+t+"&client_secret="+r+"&redirect_uri=http://localhost/callback&grant_type=authorization_code&code="+requestToken}).success(function(e){a.resolve(e)}).error(function(){a.reject("Problem authenticating")}).finally(function(){setTimeout(function(){u.close()},10)}))}),u.addEventListener("exit",function(){a.reject("The sign in flow was canceled")})}else a.reject("Could not find InAppBrowser plugin")}else a.reject("Cannot authenticate via a web browser");return a.promise},instagram:function(n,t){var r=e.defer();if(window.cordova){var o=cordova.require("cordova/plugin_list").metadata;if(o.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var i=window.open("https://api.instagram.com/oauth/authorize/?client_id="+n+"&redirect_uri=http://localhost/callback&scope="+t.join(" ")+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");i.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){for(var n=e.url.split("#")[1],t=n.split("&"),o=[],a=0;a<t.length;a++)o[t[a].split("=")[0]]=t[a].split("=")[1];void 0!==o.access_token&&null!==o.access_token?r.resolve({access_token:o.access_token}):r.reject("Problem authenticating"),setTimeout(function(){i.close()},10)}}),i.addEventListener("exit",function(){r.reject("The sign in flow was canceled")})}else r.reject("Could not find InAppBrowser plugin")}else r.reject("Cannot authenticate via a web browser");return r.promise},box:function(t,r,o){var i=e.defer();if(window.cordova){var a=cordova.require("cordova/plugin_list").metadata;if(a.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var c=window.open("https://app.box.com/api/oauth2/authorize/?client_id="+t+"&redirect_uri=http://localhost/callback&state="+o+"&response_type=code","_blank","location=no,clearsessioncache=yes,clearcache=yes");c.addEventListener("loadstart",function(e){0===e.url.indexOf("http://localhost/callback")&&(requestToken=e.url.split("code=")[1],n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://app.box.com/api/oauth2/token",data:"client_id="+t+"&client_secret="+r+"&redirect_uri=http://localhost/callback&grant_type=authorization_code&code="+requestToken}).success(function(e){i.resolve(e)}).error(function(){i.reject("Problem authenticating")}).finally(function(){setTimeout(function(){c.close()},10)}))}),c.addEventListener("exit",function(){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},reddit:function(t,r,o){var i=e.defer();if(window.cordova){var a=cordova.require("cordova/plugin_list").metadata;if(a.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var c=window.open("https://ssl.reddit.com/api/v1/authorize?client_id="+t+"&redirect_uri=http://localhost/callback&duration=permanent&state=ngcordovaoauth&scope="+o.join(",")+"&response_type=code","_blank","location=no,clearsessioncache=yes,clearcache=yes");c.addEventListener("loadstart",function(e){0===e.url.indexOf("http://localhost/callback")&&(requestToken=e.url.split("code=")[1],n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n.defaults.headers.post.Authorization="Basic "+btoa(t+":"+r),n({method:"post",url:"https://ssl.reddit.com/api/v1/access_token",data:"redirect_uri=http://localhost/callback&grant_type=authorization_code&code="+requestToken}).success(function(e){i.resolve(e)}).error(function(){i.reject("Problem authenticating")}).finally(function(){setTimeout(function(){c.close()},10)}))}),c.addEventListener("exit",function(){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},twitter:function(r,o){var i=e.defer();if(window.cordova){var a=cordova.require("cordova/plugin_list").metadata;if(a.hasOwnProperty("org.apache.cordova.inappbrowser")===!0)if("undefined"!=typeof jsSHA){var c={oauth_consumer_key:r,oauth_nonce:t.createNonce(10),oauth_signature_method:"HMAC-SHA1",oauth_timestamp:Math.round((new Date).getTime()/1e3),oauth_version:"1.0"},u=t.createSignature("POST","https://api.twitter.com/oauth/request_token",c,{oauth_callback:"http://localhost/callback"},o);n.defaults.headers.post.Authorization=u.authorization_header,n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://api.twitter.com/oauth/request_token",data:"oauth_callback=http://localhost/callback"}).success(function(e){for(var r=e.split("&"),a={},u=0;u<r.length;u++)a[r[u].split("=")[0]]=r[u].split("=")[1];a.hasOwnProperty("oauth_token")===!1&&i.reject("Oauth request token was not received");var s=window.open("https://api.twitter.com/oauth/authenticate?oauth_token="+a.oauth_token,"_blank","location=no,clearsessioncache=yes,clearcache=yes");s.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){for(var r=e.url.split("?")[1],a=r.split("&"),u={},l=0;l<a.length;l++)u[a[l].split("=")[0]]=a[l].split("=")[1];
u.hasOwnProperty("oauth_verifier")===!1&&i.reject("Browser authentication failed to complete.  No oauth_verifier was returned"),delete c.oauth_signature,c.oauth_token=u.oauth_token;var f=t.createSignature("POST","https://api.twitter.com/oauth/access_token",c,{oauth_verifier:u.oauth_verifier},o);n.defaults.headers.post.Authorization=f.authorization_header,n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://api.twitter.com/oauth/access_token",data:"oauth_verifier="+u.oauth_verifier}).success(function(e){for(var n=e.split("&"),t={},r=0;r<n.length;r++)t[n[r].split("=")[0]]=n[r].split("=")[1];t.hasOwnProperty("oauth_token_secret")===!1&&i.reject("Oauth access token was not received"),i.resolve(t)}).error(function(e){i.reject(e)}).finally(function(){setTimeout(function(){s.close()},10)})}}),s.addEventListener("exit",function(){i.reject("The sign in flow was canceled")})}).error(function(e){i.reject(e)})}else i.reject("Missing jsSHA JavaScript library");else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},meetup:function(n){var t=e.defer();if(window.cordova){var r=cordova.require("cordova/plugin_list").metadata;if(r.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var o=window.open("https://secure.meetup.com/oauth2/authorize/?client_id="+n+"&redirect_uri=http://localhost/callback&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");o.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){for(var n=e.url.split("#")[1],r=n.split("&"),i={},a=0;a<r.length;a++)i[r[a].split("=")[0]]=r[a].split("=")[1];void 0!==i.access_token&&null!==i.access_token?t.resolve(i):t.reject("Problem authenticating"),setTimeout(function(){o.close()},10)}}),o.addEventListener("exit",function(){t.reject("The sign in flow was canceled")})}else t.reject("Could not find InAppBrowser plugin")}else t.reject("Cannot authenticate via a web browser");return t.promise},salesforce:function(n,t){var r="http://localhost/callback",o=function(e,n,t){return e+"services/oauth2/authorize?display=touch&response_type=token&client_id="+escape(n)+"&redirect_uri="+escape(t)},i=function(e,n){return e.substr(0,n.length)===n},a=e.defer();if(window.cordova){var c=cordova.require("cordova/plugin_list").metadata;if(c.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var u=window.open(o(n,t,r),"_blank","location=no,clearsessioncache=yes,clearcache=yes");u.addEventListener("loadstart",function(e){if(i(e.url,r)){var n={},t=e.url.split("#")[1];if(t){var o=t.split("&");for(var c in o){var s=o[c].split("=");n[s[0]]=unescape(s[1])}}"undefined"==typeof n||"undefined"==typeof n.access_token?a.reject("Problem authenticating"):a.resolve(n),setTimeout(function(){u.close()},10)}}),u.addEventListener("exit",function(){a.reject("The sign in flow was canceled")})}else a.reject("Could not find InAppBrowser plugin")}else a.reject("Cannot authenticate via a web browser");return a.promise},strava:function(t,r,o){var i=e.defer();if(window.cordova){var a=cordova.require("cordova/plugin_list").metadata;if(a.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var c=window.open("https://www.strava.com/oauth/authorize?client_id="+t+"&redirect_uri=http://localhost/callback&scope="+o.join(",")+"&response_type=code&approval_prompt=force","_blank","location=no,clearsessioncache=yes,clearcache=yes");c.addEventListener("loadstart",function(e){0===e.url.indexOf("http://localhost/callback")&&(requestToken=e.url.split("code=")[1],n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://www.strava.com/oauth/token",data:"client_id="+t+"&client_secret="+r+"&code="+requestToken}).success(function(e){i.resolve(e)}).error(function(){i.reject("Problem authenticating")}).finally(function(){setTimeout(function(){c.close()},10)}))}),c.addEventListener("exit",function(){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},foursquare:function(n){var t=e.defer();if(window.cordova){var r=cordova.require("cordova/plugin_list").metadata;if(r.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var o=window.open("https://foursquare.com/oauth2/authenticate?client_id="+n+"&redirect_uri=http://localhost/callback&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");o.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){for(var n=e.url.split("#")[1],r=n.split("&"),i=[],a=0;a<r.length;a++)i[r[a].split("=")[0]]=r[a].split("=")[1];if(void 0!==i.access_token&&null!==i.access_token){var c={access_token:i.access_token,expires_in:i.expires_in};t.resolve(c)}else t.reject("Problem authenticating");setTimeout(function(){o.close()},10)}}),o.addEventListener("exit",function(){t.reject("The sign in flow was canceled")})}else t.reject("Could not find InAppBrowser plugin")}else t.reject("Cannot authenticate via a web browser");return t.promise},magento:function(r,o,i){var a=e.defer();if(window.cordova){var c=cordova.require("cordova/plugin_list").metadata;if(c.hasOwnProperty("org.apache.cordova.inappbrowser")===!0)if("undefined"!=typeof jsSHA){var u={oauth_callback:"http://localhost/callback",oauth_consumer_key:o,oauth_nonce:t.createNonce(5),oauth_signature_method:"HMAC-SHA1",oauth_timestamp:Math.round((new Date).getTime()/1e3),oauth_version:"1.0"},s=t.createSignature("POST",r+"/oauth/initiate",u,{oauth_callback:"http://localhost/callback"},i);n.defaults.headers.post.Authorization=s.authorization_header,n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:r+"/oauth/initiate",data:"oauth_callback=http://localhost/callback"}).success(function(e){for(var o=e.split("&"),c={},s=0;s<o.length;s++)c[o[s].split("=")[0]]=o[s].split("=")[1];c.hasOwnProperty("oauth_token")===!1&&a.reject("Oauth request token was not received");var l=c.oauth_token_secret,f=window.open(r+"/oauth/authorize?oauth_token="+c.oauth_token,"_blank","location=no,clearsessioncache=yes,clearcache=yes");f.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){for(var o=e.url.split("?")[1],c=o.split("&"),s={},d=0;d<c.length;d++)s[c[d].split("=")[0]]=c[d].split("=")[1];s.hasOwnProperty("oauth_verifier")===!1&&a.reject("Browser authentication failed to complete.  No oauth_verifier was returned"),delete u.oauth_signature,delete u.oauth_callback,u.oauth_token=s.oauth_token,u.oauth_nonce=t.createNonce(5),u.oauth_verifier=s.oauth_verifier;var p=t.createSignature("POST",r+"/oauth/token",u,{},i,l);n.defaults.headers.post.Authorization=p.authorization_header,n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:r+"/oauth/token"}).success(function(e){for(var n=e.split("&"),t={},r=0;r<n.length;r++)t[n[r].split("=")[0]]=n[r].split("=")[1];t.hasOwnProperty("oauth_token_secret")===!1&&a.reject("Oauth access token was not received"),a.resolve(t)}).error(function(e){a.reject(e)}).finally(function(){setTimeout(function(){f.close()},10)})}}),f.addEventListener("exit",function(){a.reject("The sign in flow was canceled")})}).error(function(e){a.reject(e)})}else a.reject("Missing jsSHA JavaScript library");else a.reject("Could not find InAppBrowser plugin")}else a.reject("Cannot authenticate via a web browser");return a.promise},vkontakte:function(n,t){var r=e.defer();if(window.cordova){var o=cordova.require("cordova/plugin_list").metadata;if(o.hasOwnProperty("org.apache.cordova.inappbrowser")===!0){var i=window.open("https://oauth.vk.com/authorize?client_id="+n+"&redirect_uri=http://oauth.vk.com/blank.html&response_type=token&scope="+t.join(",")+"&display=touch&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");i.addEventListener("loadstart",function(e){var n=e.url.split("#");if("https://oauth.vk.com/blank.html"==n[0]||"http://oauth.vk.com/blank.html"==n[0]){for(var t=e.url.split("#")[1],o=t.split("&"),a=[],c=0;c<o.length;c++)a[o[c].split("=")[0]]=o[c].split("=")[1];void 0!==a.access_token&&null!==a.access_token?r.resolve({access_token:a.access_token,expires_in:a.expires_in}):r.reject("Problem authenticating"),setTimeout(function(){i.close()},10)}}),i.addEventListener("exit",function(){r.reject("The sign in flow was canceled")})}else r.reject("Could not find InAppBrowser plugin")}else r.reject("Cannot authenticate via a web browser");return r.promise}}}]),angular.module("ngCordova.plugins.oauthUtility",[]).factory("$cordovaOauthUtility",["$q",function(){return{createSignature:function(e,n,t,r,o,i){if("undefined"!=typeof jsSHA){for(var a=angular.copy(t),c=Object.keys(r),u=0;u<c.length;u++)a[c[u]]=encodeURIComponent(r[c[u]]);var s=e+"&"+encodeURIComponent(n)+"&",l=Object.keys(a).sort();for(u=0;u<l.length;u++)s+=encodeURIComponent(u==l.length-1?l[u]+"="+a[l[u]]:l[u]+"="+a[l[u]]+"&");var f=new jsSHA(s,"TEXT"),d="";i&&(d=encodeURIComponent(i)),t.oauth_signature=encodeURIComponent(f.getHMAC(encodeURIComponent(o)+"&"+d,"TEXT","SHA-1","B64"));var p=Object.keys(t),v="OAuth ";for(u=0;u<p.length;u++)v+=u==p.length-1?p[u]+'="'+t[p[u]]+'"':p[u]+'="'+t[p[u]]+'",';return{signature_base_string:s,authorization_header:v,signature:t.oauth_signature}}return"Missing jsSHA JavaScript library"},createNonce:function(e){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;e>r;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}}}]),angular.module("ngCordova.plugins.pinDialog",[]).factory("$cordovaPinDialog",["$q","$window",function(e,n){return{prompt:function(t,r,o){var i=e.defer();return n.plugins.pinDialog.prompt(t,function(e){i.resolve(e)},r,o),i.promise}}}]),angular.module("ngCordova.plugins.prefs",[]).factory("$cordovaPreferences",["$window","$q",function(e,n){return{set:function(t,r){var o=n.defer();return e.appgiraffe.plugins.applicationPreferences.set(t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},get:function(t){var r=n.defer();return e.appgiraffe.plugins.applicationPreferences.get(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.printer",[]).factory("$cordovaPrinter",["$q","$window",function(e,n){return{isAvailable:function(){var t=e.defer();return n.plugin.printer.isAvailable(function(e){t.resolve(e)}),t.promise},print:function(t,r){var o=e.defer();return n.plugin.printer.print(t,r,function(){o.resolve()}),o.promise}}}]),angular.module("ngCordova.plugins.progressIndicator",[]).factory("$cordovaProgress",["$q",function(){return{show:function(e){var n=e||"Please wait...";return ProgressIndicator.show(n)},showSimple:function(e){var n=e||!1;return ProgressIndicator.showSimple(n)},showSimpleWithLabel:function(e,n){var t=e||!1,r=n||"Loading...";return ProgressIndicator.showSimpleWithLabel(t,r)},showSimpleWithLabelDetail:function(e,n,t){var r=e||!1,o=n||"Loading...",i=t||"Please wait";return ProgressIndicator.showSimpleWithLabelDetail(r,o,i)},showDeterminate:function(e,n){var t=e||!1,r=n||5e4;return ProgressIndicator.showDeterminate(t,r)},showDeterminateWithLabel:function(e,n,t){var r=e||!1,o=n||5e4,i=t||"Loading...";return ProgressIndicator.showDeterminateWithLabel(r,o,i)},showAnnular:function(e,n){var t=e||!1,r=n||5e4;return ProgressIndicator.showAnnular(t,r)},showAnnularWithLabel:function(e,n,t){var r=e||!1,o=n||5e4,i=t||"Loading...";return ProgressIndicator.showAnnularWithLabel(r,o,i)},showBar:function(e,n){var t=e||!1,r=n||5e4;return ProgressIndicator.showBar(t,r)},showBarWithLabel:function(e,n,t){var r=e||!1,o=n||5e4,i=t||"Loading...";return ProgressIndicator.showBarWithLabel(r,o,i)},showSuccess:function(e,n){var t=e||!1,r=n||"Success";return ProgressIndicator.showSuccess(t,r)},showText:function(e,n,t){var r=e||!1,o=n||"Warning",i=t||"center";return ProgressIndicator.showText(r,o,i)},hide:function(){return ProgressIndicator.hide()}}}]),angular.module("ngCordova.plugins.push",[]).factory("$cordovaPush",["$q","$window","$rootScope","$timeout",function(e,n,t,r){return{onNotification:function(e){r(function(){t.$broadcast("$cordovaPush:notificationReceived",e)})},register:function(t){var r,o=e.defer();return void 0!==t&&void 0===t.ecb&&(r=null==document.querySelector("[ng-app]")?"document.body":"document.querySelector('[ng-app]')",t.ecb="angular.element("+r+").injector().get('$cordovaPush').onNotification"),n.plugins.pushNotification.register(function(e){o.resolve(e)},function(e){o.reject(e)},t),o.promise},unregister:function(t){var r=e.defer();return n.plugins.pushNotification.unregister(function(e){r.resolve(e)},function(e){r.reject(e)},t),r.promise},setBadgeNumber:function(t){var r=e.defer();return n.plugins.pushNotification.setApplicationIconBadgeNumber(function(e){r.resolve(e)},function(e){r.reject(e)},t),r.promise}}}]),angular.module("ngCordova.plugins.sms",[]).factory("$cordovaSms",["$q",function(e){return{send:function(n,t,r){var o=e.defer();return sms.send(n,t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise}}}]),angular.module("ngCordova.plugins.socialSharing",[]).factory("$cordovaSocialSharing",["$q","$window",function(e,n){return{share:function(t,r,o,i){var a=e.defer();return r=r||null,o=o||null,i=i||null,n.plugins.socialsharing.share(t,r,o,i,function(){a.resolve(!0)},function(){a.reject(!1)}),a.promise},shareViaTwitter:function(t,r,o){var i=e.defer();return r=r||null,o=o||null,n.plugins.socialsharing.shareViaTwitter(t,r,o,function(){i.resolve(!0)},function(){i.reject(!1)}),i.promise},shareViaWhatsApp:function(t,r,o){var i=e.defer();return r=r||null,o=o||null,n.plugins.socialsharing.shareViaWhatsApp(t,r,o,function(){i.resolve(!0)},function(){i.reject(!1)}),i.promise},shareViaFacebook:function(t,r,o){var i=e.defer();return t=t||null,r=r||null,o=o||null,n.plugins.socialsharing.shareViaFacebook(t,r,o,function(){i.resolve(!0)},function(){i.reject(!1)}),i.promise},shareViaFacebookWithPasteMessageHint:function(t,r,o,i){var a=e.defer();return r=r||null,o=o||null,n.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(t,r,o,i,function(){a.resolve(!0)},function(){a.reject(!1)}),a.promise},shareViaSMS:function(t,r){var o=e.defer();return n.plugins.socialsharing.shareViaSMS(t,r,function(){o.resolve(!0)},function(){o.reject(!1)}),o.promise},shareViaEmail:function(t,r,o,i,a,c){var u=e.defer();return o=o||null,i=i||null,a=a||null,c=c||null,n.plugins.socialsharing.shareViaEmail(t,r,o,i,a,c,function(){u.resolve(!0)},function(){u.reject(!1)}),u.promise},shareVia:function(t,r,o,i,a){var c=e.defer();return r=r||null,o=o||null,i=i||null,a=a||null,n.plugins.socialsharing.shareVia(t,r,o,i,a,function(){c.resolve(!0)},function(){c.reject(!1)}),c.promise},canShareViaEmail:function(){var t=e.defer();return n.plugins.socialsharing.canShareViaEmail(function(){t.resolve(!0)},function(){t.reject(!1)}),t.promise},canShareVia:function(t,r,o,i,a){var c=e.defer();return n.plugins.socialsharing.canShareVia(t,r,o,i,a,function(e){c.resolve(e)},function(e){c.reject(e)}),c.promise},available:function(){var n=e.defer();window.plugins.socialsharing.available(function(e){e?n.resolve():n.reject()})}}}]),angular.module("ngCordova.plugins.spinnerDialog",[]).factory("$cordovaSpinnerDialog",["$window",function(e){return{show:function(n,t,r){return r=r||!1,e.plugins.spinnerDialog.show(n,t,r)},hide:function(){return e.plugins.spinnerDialog.hide()}}}]),angular.module("ngCordova.plugins.splashscreen",[]).factory("$cordovaSplashscreen",[function(){return{hide:function(){return navigator.splashscreen.hide()},show:function(){return navigator.splashscreen.show()}}}]),angular.module("ngCordova.plugins.sqlite",[]).factory("$cordovaSQLite",["$q","$window",function(e,n){return{openDB:function(e,t){return"undefined"==typeof t&&(t=0),n.sqlitePlugin.openDatabase({name:e,bgType:t})},execute:function(n,t,r){var o=e.defer();return n.transaction(function(e){e.executeSql(t,r,function(e,n){o.resolve(n)},function(e,n){o.reject(n)})}),o.promise},insertCollection:function(n,t,r){var o=e.defer(),i=r.slice(0);return n.transaction(function(e){!function n(){var r=i.splice(0,1)[0];try{e.executeSql(t,r,function(e,t){0===i.length?o.resolve(t):n()},function(e,n){o.reject(n)})}catch(a){o.reject(a)}}()}),o.promise},nestedExecute:function(n,t,r,o,i){var a=e.defer();return n.transaction(function(e){e.executeSql(t,o,function(e,n){a.resolve(n),e.executeSql(r,i,function(e,n){a.resolve(n)})})},function(e,n){a.reject(n)}),a.promise},deleteDB:function(t){var r=e.defer();return n.sqlitePlugin.deleteDatabase(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.statusbar",[]).factory("$cordovaStatusbar",[function(){return{overlaysWebView:function(e){return StatusBar.overlaysWebView(!!e)},style:function(e){switch(e){case 0:return StatusBar.styleDefault();case 1:return StatusBar.styleLightContent();case 2:return StatusBar.styleBlackTranslucent();case 3:return StatusBar.styleBlackOpaque();default:return StatusBar.styleDefault()}},styleColor:function(e){return StatusBar.backgroundColorByName(e)},styleHex:function(e){return StatusBar.backgroundColorByHexString(e)},hide:function(){return StatusBar.hide()},show:function(){return StatusBar.show()},isVisible:function(){return StatusBar.isVisible}}}]),angular.module("ngCordova.plugins.toast",[]).factory("$cordovaToast",["$q","$window",function(e,n){return{showShortTop:function(t){var r=e.defer();return n.plugins.toast.showShortTop(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},showShortCenter:function(t){var r=e.defer();return n.plugins.toast.showShortCenter(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},showShortBottom:function(t){var r=e.defer();return n.plugins.toast.showShortBottom(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},showLongTop:function(t){var r=e.defer();return n.plugins.toast.showLongTop(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},showLongCenter:function(t){var r=e.defer();return n.plugins.toast.showLongCenter(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},showLongBottom:function(t){var r=e.defer();return n.plugins.toast.showLongBottom(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},show:function(t,r,o){var i=e.defer();return n.plugins.toast.show(t,r,o,function(e){i.resolve(e)},function(e){i.reject(e)}),i.promise}}}]),angular.module("ngCordova.plugins.touchid",[]).factory("$cordovaTouchID",["$q",function(e){return{checkSupport:function(){var n=e.defer();return window.cordova?touchid.checkSupport(function(e){n.resolve(e)},function(e){n.reject(e)}):n.reject("Not supported without cordova.js"),n.promise},authenticate:function(n){var t=e.defer();return window.cordova?touchid.authenticate(function(e){t.resolve(e)},function(e){t.reject(e)},n):t.reject("Not supported without cordova.js"),t.promise}}}]),angular.module("ngCordova.plugins.vibration",[]).factory("$cordovaVibration",[function(){return{vibrate:function(e){return navigator.notification.vibrate(e)},vibrateWithPattern:function(e,n){return navigator.notification.vibrateWithPattern(e,n)},cancelVibration:function(){return navigator.notification.cancelVibration()}}}]),angular.module("ngCordova.plugins.videoCapturePlus",[]).provider("$cordovaVideoCapturePlus",[function(){var e={};this.setLimit=function(n){e.limit=n},this.setMaxDuration=function(n){e.duration=n},this.setHighQuality=function(n){e.highquality=n},this.useFrontCamera=function(n){e.frontcamera=n},this.setPortraitOverlay=function(n){e.portraitOverlay=n},this.setLandscapeOverlay=function(n){e.landscapeOverlay=n},this.setOverlayText=function(n){e.overlayText=n},this.$get=["$q","$window",function(n,t){return{captureVideo:function(r){var o=n.defer();return t.plugins.videocaptureplus?(t.plugins.videocaptureplus.captureVideo(o.resolve,o.reject,angular.extend({},e,r)),o.promise):(o.resolve(null),o.promise)}}}]}]),angular.module("ngCordova.plugins.zip",[]).factory("$cordovaZip",["$q","$window",function(e,n){return{unzip:function(t,r){var o=e.defer();return n.zip.unzip(t,r,function(e){0===e?o.resolve():o.reject()},function(e){o.notify(e)}),o.promise}}}])}();
/** 
 * @overview datejs
 * @version 1.0.0-rc3
 * @author Gregory Wild-Smith <gregory@wild-smith.com>
 * @copyright 2014 Gregory Wild-Smith
 * @license MIT
 * @homepage https://github.com/abritinthebay/datejs
 */(function () {
	var $D = Date;
	var lang = Date.CultureStrings ? Date.CultureStrings.lang : null;
	var loggedKeys = {}; // for debug purposes.
	var getText = {
		getFromKey: function (key, countryCode) {
			var output;
			if (Date.CultureStrings && Date.CultureStrings[countryCode] && Date.CultureStrings[countryCode][key]) {
				output = Date.CultureStrings[countryCode][key];
			} else {
				output = getText.buildFromDefault(key);
			}
			if (key.charAt(0) === "/") { // Assume it's a regex
				output = getText.buildFromRegex(key, countryCode);
			}
			return output;
		},
		getFromObjectValues: function (obj, countryCode) {
			var key, output = {};
			for(key in obj) {
				if (obj.hasOwnProperty(key)) {
					output[key] = getText.getFromKey(obj[key], countryCode);
				}
			}
			return output;
		},
		getFromObjectKeys: function (obj, countryCode) {
			var key, output = {};
			for(key in obj) {
				if (obj.hasOwnProperty(key)) {
					output[getText.getFromKey(key, countryCode)] = obj[key];
				}
			}
			return output;
		},
		getFromArray: function (arr, countryCode) {
			var output = [];
			for (var i=0; i < arr.length; i++){
				if (i in arr) {
					output[i] = getText.getFromKey(arr[i], countryCode);
				}
			}
			return output;
		},
		buildFromDefault: function (key) {
			var output, length, split, last;
			switch(key) {
				case "name":
					output = "en-US";
					break;
				case "englishName":
					output = "English (United States)";
					break;
				case "nativeName":
					output = "English (United States)";
					break;
				case "twoDigitYearMax":
					output = 2049;
					break;
				case "firstDayOfWeek":
					output = 0;
					break;
				default:
					output = key;
					split = key.split("_");
					length = split.length;
					if (length > 1 && key.charAt(0) !== "/") {
						// if the key isn't a regex and it has a split.
						last = split[(length - 1)].toLowerCase();
						if (last === "initial" || last === "abbr") {
							output = split[0];
						}
					}
					break;
			}
			return output;
		},
		buildFromRegex: function (key, countryCode) {
			var output;
			if (Date.CultureStrings && Date.CultureStrings[countryCode] && Date.CultureStrings[countryCode][key]) {
				output = new RegExp(Date.CultureStrings[countryCode][key], "i");
			} else {
				output = new RegExp(key.replace(new RegExp("/", "g"),""), "i");
			}
			return output;
		}
	};

	var shallowMerge = function (obj1, obj2) {
		for (var attrname in obj2) {
			if (obj2.hasOwnProperty(attrname)) {
				obj1[attrname] = obj2[attrname];
			}
		}
	};

	var __ = function (key, language) {
		var countryCode = (language) ? language : lang;
		loggedKeys[key] = key;
		if (typeof key === "object") {
			if (key instanceof Array) {
				return getText.getFromArray(key, countryCode);
			} else {
				return getText.getFromObjectKeys(key, countryCode);
			}
		} else {
			return getText.getFromKey(key, countryCode);
		}
	};
	
	var loadI18nScript = function (code) {
		// paatterned after jQuery's getScript.
		var url = Date.Config.i18n + code + ".js";
		var head = document.getElementsByTagName("head")[0] || document.documentElement;
		var script = document.createElement("script");
		script.src = url;

		var completed = false;
		var events = {
			done: function (){} // placeholder function
		};
		// Attach handlers for all browsers
		script.onload = script.onreadystatechange = function() {
			if ( !completed && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") ) {
				events.done();
				head.removeChild(script);
			}
		};

		setTimeout(function() {
			head.insertBefore(script, head.firstChild);
		}, 0); // allows return to execute first
		
		return {
			done: function (cb) {
				events.done = function() {
					if (cb) {
						setTimeout(cb,0);
					}
				};
			}
		};
	};

	var buildInfo = {
		buildFromMethodHash: function (obj) {
			var key;
			for(key in obj) {
				if (obj.hasOwnProperty(key)) {
					obj[key] = buildInfo[obj[key]]();
				}
			}
			return obj;
		},
		timeZoneDST: function () {
			var DST = {
				"CHADT": "+1345",
				"NZDT": "+1300",
				"AEDT": "+1100",
				"ACDT": "+1030",
				"AZST": "+0500",
				"IRDT": "+0430",
				"EEST": "+0300",
				"CEST": "+0200",
				"BST": "+0100",
				"PMDT": "-0200",
				"ADT": "-0300",
				"NDT": "-0230",
				"EDT": "-0400",
				"CDT": "-0500",
				"MDT": "-0600",
				"PDT": "-0700",
				"AKDT": "-0800",
				"HADT": "-0900"
			};
			return __(DST);
		},
		timeZoneStandard: function () {
			var standard = {
				"LINT": "+1400",
				"TOT": "+1300",
				"CHAST": "+1245",
				"NZST": "+1200",
				"NFT": "+1130",
				"SBT": "+1100",
				"AEST": "+1000",
				"ACST": "+0930",
				"JST": "+0900",
				"CWST": "+0845",
				"CT": "+0800",
				"ICT": "+0700",
				"MMT": "+0630",
				"BST": "+0600",
				"NPT": "+0545",
				"IST": "+0530",
				"PKT": "+0500",
				"AFT": "+0430",
				"MSK": "+0400",
				"IRST": "+0330",
				"FET": "+0300",
				"EET": "+0200",
				"CET": "+0100",
				"GMT": "+0000",
				"UTC": "+0000",
				"CVT": "-0100",
				"GST": "-0200",
				"BRT": "-0300",
				"NST": "-0330",
				"AST": "-0400",
				"EST": "-0500",
				"CST": "-0600",
				"MST": "-0700",
				"PST": "-0800",
				"AKST": "-0900",
				"MIT": "-0930",
				"HST": "-1000",
				"SST": "-1100",
				"BIT": "-1200"
			};
			return __(standard);
		},
		timeZones: function (data) {
			var zone;
			data.timezones = [];
			for (zone in data.abbreviatedTimeZoneStandard) {
				if (data.abbreviatedTimeZoneStandard.hasOwnProperty(zone)) {
					data.timezones.push({ name: zone, offset: data.abbreviatedTimeZoneStandard[zone]});
				}
			}
			for (zone in data.abbreviatedTimeZoneDST) {
				if (data.abbreviatedTimeZoneDST.hasOwnProperty(zone)) {
					data.timezones.push({ name: zone, offset: data.abbreviatedTimeZoneDST[zone], dst: true});
				}
			}
			return data.timezones;
		},
		days: function () {
			return __(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
		},
		dayAbbr: function () {
			return __(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
		},
		dayShortNames: function () {
			return __(["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]);
		},
		dayFirstLetters: function () {
			return __(["S_Sun_Initial", "M_Mon_Initial", "T_Tues_Initial", "W_Wed_Initial", "T_Thu_Initial", "F_Fri_Initial", "S_Sat_Initial"]);
		},
		months: function () {
			return __(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
		},
		monthAbbr: function () {
			return __(["Jan_Abbr", "Feb_Abbr", "Mar_Abbr", "Apr_Abbr", "May_Abbr", "Jun_Abbr", "Jul_Abbr", "Aug_Abbr", "Sep_Abbr", "Oct_Abbr", "Nov_Abbr", "Dec_Abbr"]);
		},
		formatPatterns: function () {
			return getText.getFromObjectValues({
				shortDate: "M/d/yyyy",
				longDate: "dddd, MMMM dd, yyyy",
				shortTime: "h:mm tt",
				longTime: "h:mm:ss tt",
				fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
				sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
				universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
				rfc1123: "ddd, dd MMM yyyy HH:mm:ss",
				monthDay: "MMMM dd",
				yearMonth: "MMMM, yyyy"
			}, Date.i18n.currentLanguage());
		},
		regex: function () {
			return getText.getFromObjectValues({
				inTheMorning: "/( in the )(morn(ing)?)\\b/",
				thisMorning: "/(this )(morn(ing)?)\\b/",
				amThisMorning: "/(\b\\d(am)? )(this )(morn(ing)?)/",
				inTheEvening: "/( in the )(even(ing)?)\\b/",
				thisEvening: "/(this )(even(ing)?)\\b/",
				pmThisEvening: "/(\b\\d(pm)? )(this )(even(ing)?)/",
				jan: "/jan(uary)?/",
				feb: "/feb(ruary)?/",
				mar: "/mar(ch)?/",
				apr: "/apr(il)?/",
				may: "/may/",
				jun: "/jun(e)?/",
				jul: "/jul(y)?/",
				aug: "/aug(ust)?/",
				sep: "/sep(t(ember)?)?/",
				oct: "/oct(ober)?/",
				nov: "/nov(ember)?/",
				dec: "/dec(ember)?/",
				sun: "/^su(n(day)?)?/",
				mon: "/^mo(n(day)?)?/",
				tue: "/^tu(e(s(day)?)?)?/",
				wed: "/^we(d(nesday)?)?/",
				thu: "/^th(u(r(s(day)?)?)?)?/",
				fri: "/fr(i(day)?)?/",
				sat: "/^sa(t(urday)?)?/",
				future: "/^next/",
				past: "/^last|past|prev(ious)?/",
				add: "/^(\\+|aft(er)?|from|hence)/",
				subtract: "/^(\\-|bef(ore)?|ago)/",
				yesterday: "/^yes(terday)?/",
				today: "/^t(od(ay)?)?/",
				tomorrow: "/^tom(orrow)?/",
				now: "/^n(ow)?/",
				millisecond: "/^ms|milli(second)?s?/",
				second: "/^sec(ond)?s?/",
				minute: "/^mn|min(ute)?s?/",
				hour: "/^h(our)?s?/",
				week: "/^w(eek)?s?/",
				month: "/^m(onth)?s?/",
				day: "/^d(ay)?s?/",
				year: "/^y(ear)?s?/",
				shortMeridian: "/^(a|p)/",
				longMeridian: "/^(a\\.?m?\\.?|p\\.?m?\\.?)/",
				timezone: "/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\\s*(\\+|\\-)\\s*\\d\\d\\d\\d?)|gmt|utc)/",
				ordinalSuffix: "/^\\s*(st|nd|rd|th)/",
				timeContext: "/^\\s*(\\:|a(?!u|p)|p)/"
			}, Date.i18n.currentLanguage());
		}
	};

	var CultureInfo = function () {
		var info = getText.getFromObjectValues({
			name: "name",
			englishName: "englishName",
			nativeName: "nativeName",
			amDesignator: "AM",
			pmDesignator: "PM",
			firstDayOfWeek: "firstDayOfWeek",
			twoDigitYearMax: "twoDigitYearMax",
			dateElementOrder: "mdy"
		}, Date.i18n.currentLanguage());

		var constructedInfo = buildInfo.buildFromMethodHash({
			dayNames: "days",
			abbreviatedDayNames: "dayAbbr",
			shortestDayNames: "dayShortNames",
			firstLetterDayNames: "dayFirstLetters",
			monthNames: "months",
			abbreviatedMonthNames: "monthAbbr",
			formatPatterns: "formatPatterns",
			regexPatterns: "regex",
			abbreviatedTimeZoneDST: "timeZoneDST",
			abbreviatedTimeZoneStandard: "timeZoneStandard"
		});

		shallowMerge(info, constructedInfo);
		buildInfo.timeZones(info);
		return info;
	};

	$D.i18n = {
		__: function (key, lang) {
			return __(key, lang);
		},
		currentLanguage: function () {
			return lang || "en-US";
		},
		setLanguage: function (code, force, cb) {
			var async = false;
			if (force || code === "en-US" || (!!Date.CultureStrings && !!Date.CultureStrings[code])) {
				lang = code;
				Date.CultureStrings = Date.CultureStrings || {};
				Date.CultureStrings.lang = code;
				Date.CultureInfo = new CultureInfo();
			} else {
				if (!(!!Date.CultureStrings && !!Date.CultureStrings[code])) {
					if (typeof exports !== "undefined" && this.exports !== exports) {
						// we're in a Node enviroment, load it using require
						try {
							require("../i18n/" + code + ".js");
							lang = code;
							Date.CultureStrings.lang = code;
							Date.CultureInfo = new CultureInfo();
						} catch (e) {
							// var str = "The language for '" + code + "' could not be loaded by Node. It likely does not exist.";
							throw new Error("The DateJS IETF language tag '" + code + "' could not be loaded by Node. It likely does not exist.");
						}
					} else if (Date.Config && Date.Config.i18n) {
						// we know the location of the files, so lets load them					
						async = true;
						loadI18nScript(code).done(function(){
							lang = code;
							Date.CultureStrings = Date.CultureStrings || {};
							Date.CultureStrings.lang = code;
							Date.CultureInfo = new CultureInfo();
							$D.Parsing.Normalizer.buildReplaceData(); // because this is async
							if ($D.Grammar) {
								$D.Grammar.buildGrammarFormats(); // so we can parse those strings...
							}
							if (cb) {
								setTimeout(cb,0);
							}
						});
					} else {
						Date.console.error("The DateJS IETF language tag '" + code + "' is not available and has not been loaded.");
						return false;
					}
				}
			}
			$D.Parsing.Normalizer.buildReplaceData(); // rebuild normalizer strings
			if ($D.Grammar) {
				$D.Grammar.buildGrammarFormats(); // so we can parse those strings...
			}
			if (!async && cb) {
				setTimeout(cb,0);
			}
		},
		getLoggedKeys: function () {
			return loggedKeys;
		},
		updateCultureInfo: function () {
			Date.CultureInfo = new CultureInfo();
		}
	};
	$D.i18n.updateCultureInfo(); // run automatically
}());
(function () {
	var $D = Date,
		$P = $D.prototype,
		p = function (s, l) {
			if (!l) {
				l = 2;
			}
			return ("000" + s).slice(l * -1);
		};
	
	if (typeof window !== "undefined" && typeof window.console !== "undefined" && typeof window.console.log !== "undefined") {
		$D.console = console; // used only to raise non-critical errors if available
	} else {
		// set mock so we don't give errors.
		$D.console = {
			log: function(){},
			error: function(){}
		};
	}
	$D.Config = $D.Config || {};

	$D.initOverloads = function() {
		/** 
		 * Overload of Date.now. Allows an alternate call for Date.now where it returns the 
		 * current Date as an object rather than just milliseconds since the Unix Epoch.
		 *
		 * Also provides an implementation of now() for browsers (IE<9) that don't have it.
		 * 
		 * Backwards compatible so with work with either:
		 *  Date.now() [returns ms]
		 * or
		 *  Date.now(true) [returns Date]
		 */
		if (!$D.now) {
			$D._now = function now() {
				return new Date().getTime();
			};
		} else if (!$D._now) {
			$D._now = $D.now;
		}

		$D.now = function (returnObj) {
			if (returnObj) {
				return $D.present();
			} else {
				return $D._now();
			}
		};

		if ( !$P.toISOString ) {
			$P.toISOString = function() {
				return this.getUTCFullYear() +
				"-" + p(this.getUTCMonth() + 1) +
				"-" + p(this.getUTCDate()) +
				"T" + p(this.getUTCHours()) +
				":" + p(this.getUTCMinutes()) +
				":" + p(this.getUTCSeconds()) +
				"." + String( (this.getUTCMilliseconds()/1000).toFixed(3)).slice(2, 5) +
				"Z";
			};
		}
		
		// private
		if ( $P._toString === undefined ){
			$P._toString = $P.toString;
		}

	};
	$D.initOverloads();


	/** 
	 * Gets a date that is set to the current date. The time is set to the start of the day (00:00 or 12:00 AM).
	 * @return {Date}    The current date.
	 */
	$D.today = function () {
		return new Date().clearTime();
	};

	/** 
	 * Gets a date that is set to the current date and time (same as new Date, but chainable)
	 * @return {Date}    The current date.
	 */
	$D.present = function () {
		return new Date();
	};

	/**
	 * Compares the first date to the second date and returns an number indication of their relative values.  
	 * @param {Date}     First Date object to compare [Required].
	 * @param {Date}     Second Date object to compare to [Required].
	 * @return {Number}  -1 = date1 is lessthan date2. 0 = values are equal. 1 = date1 is greaterthan date2.
	 */
	$D.compare = function (date1, date2) {
		if (isNaN(date1) || isNaN(date2)) {
			throw new Error(date1 + " - " + date2);
		} else if (date1 instanceof Date && date2 instanceof Date) {
			return (date1 < date2) ? -1 : (date1 > date2) ? 1 : 0;
		} else {
			throw new TypeError(date1 + " - " + date2);
		}
	};
	
	/**
	 * Compares the first Date object to the second Date object and returns true if they are equal.  
	 * @param {Date}     First Date object to compare [Required]
	 * @param {Date}     Second Date object to compare to [Required]
	 * @return {Boolean} true if dates are equal. false if they are not equal.
	 */
	$D.equals = function (date1, date2) {
		return (date1.compareTo(date2) === 0);
	};

	/**
	 * Gets the language appropriate day name when given the day number(0-6)
	 * eg - 0 == Sunday
	 * @return {String}  The day name
	 */
	$D.getDayName = function (n) {
		return Date.CultureInfo.dayNames[n];
	};

	/**
	 * Gets the day number (0-6) if given a CultureInfo specific string which is a valid dayName, abbreviatedDayName or shortestDayName (two char).
	 * @param {String}   The name of the day (eg. "Monday, "Mon", "tuesday", "tue", "We", "we").
	 * @return {Number}  The day number
	 */
	$D.getDayNumberFromName = function (name) {
		var n = Date.CultureInfo.dayNames, m = Date.CultureInfo.abbreviatedDayNames, o = Date.CultureInfo.shortestDayNames, s = name.toLowerCase();
		for (var i = 0; i < n.length; i++) {
			if (n[i].toLowerCase() === s || m[i].toLowerCase() === s || o[i].toLowerCase() === s) {
				return i;
			}
		}
		return -1;
	};
	
	/**
	 * Gets the month number (0-11) if given a Culture Info specific string which is a valid monthName or abbreviatedMonthName.
	 * @param {String}   The name of the month (eg. "February, "Feb", "october", "oct").
	 * @return {Number}  The day number
	 */
	$D.getMonthNumberFromName = function (name) {
		var n = Date.CultureInfo.monthNames, m = Date.CultureInfo.abbreviatedMonthNames, s = name.toLowerCase();
		for (var i = 0; i < n.length; i++) {
			if (n[i].toLowerCase() === s || m[i].toLowerCase() === s) {
				return i;
			}
		}
		return -1;
	};

	/**
	 * Gets the language appropriate month name when given the month number(0-11)
	 * eg - 0 == January
	 * @return {String}  The month name
	 */
	$D.getMonthName = function (n) {
		return Date.CultureInfo.monthNames[n];
	};

	/**
	 * Determines if the current date instance is within a LeapYear.
	 * @param {Number}   The year.
	 * @return {Boolean} true if date is within a LeapYear, otherwise false.
	 */
	$D.isLeapYear = function (year) {
		return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
	};

	/**
	 * Gets the number of days in the month, given a year and month value. Automatically corrects for LeapYear.
	 * @param {Number}   The year.
	 * @param {Number}   The month (0-11).
	 * @return {Number}  The number of days in the month.
	 */
	$D.getDaysInMonth = function (year, month) {
		if (!month && $D.validateMonth(year)) {
				month = year;
				year = Date.today().getFullYear();
		}
		return [31, ($D.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
	};

	$P.getDaysInMonth = function () {
		return $D.getDaysInMonth(this.getFullYear(), this.getMonth());
	};
 
	$D.getTimezoneAbbreviation = function (offset, dst) {
		var p, n = (dst || false) ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard;
		for (p in n) {
			if (n.hasOwnProperty(p)) {
				if (n[p] === offset) {
					return p;
				}
			}
		}
		return null;
	};
	
	$D.getTimezoneOffset = function (name, dst) {
		var i, a =[], z = Date.CultureInfo.timezones;
		if (!name) { name = (new Date()).getTimezone();}
		for (i = 0; i < z.length; i++) {
			if (z[i].name === name.toUpperCase()) {
				a.push(i);
			}
		}
		if (!z[a[0]]) {
			return null;
		}
		if (a.length === 1 || !dst) {
			return z[a[0]].offset;
		} else {
			for (i=0; i < a.length; i++) {
				if (z[a[i]].dst) {
					return z[a[i]].offset;
				}
			}
		}
	};

	$D.getQuarter = function (d) {
		d = d || new Date(); // If no date supplied, use today
		var q = [1,2,3,4];
		return q[Math.floor(d.getMonth() / 3)]; // ~~~ is a bitwise op. Faster than Math.floor
	};

	$D.getDaysLeftInQuarter = function (d) {
		d = d || new Date();
		var qEnd = new Date(d);
		qEnd.setMonth(qEnd.getMonth() + 3 - qEnd.getMonth() % 3, 0);
		return Math.floor((qEnd - d) / 8.64e7);
	};

	// private
	var validate = function (n, min, max, name) {
		name = name ? name : "Object";
		if (typeof n === "undefined") {
			return false;
		} else if (typeof n !== "number") {
			throw new TypeError(n + " is not a Number.");
		} else if (n < min || n > max) {
			// As failing validation is *not* an exceptional circumstance 
			// lets not throw a RangeError Exception here. 
			// It's semantically correct but it's not sensible.
			return false;
		}
		return true;
	};

	/**
	 * Validates the number is within an acceptable range for milliseconds [0-999].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateMillisecond = function (value) {
		return validate(value, 0, 999, "millisecond");
	};

	/**
	 * Validates the number is within an acceptable range for seconds [0-59].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateSecond = function (value) {
		return validate(value, 0, 59, "second");
	};

	/**
	 * Validates the number is within an acceptable range for minutes [0-59].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateMinute = function (value) {
		return validate(value, 0, 59, "minute");
	};

	/**
	 * Validates the number is within an acceptable range for hours [0-23].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateHour = function (value) {
		return validate(value, 0, 23, "hour");
	};

	/**
	 * Validates the number is within an acceptable range for the days in a month [0-MaxDaysInMonth].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateDay = function (value, year, month) {
		if (year === undefined || year === null || month === undefined || month === null) { return false;}
		return validate(value, 1, $D.getDaysInMonth(year, month), "day");
	};

	/**
	 * Validates the number is within an acceptable range for months [0-11].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateWeek = function (value) {
		return validate(value, 0, 53, "week");
	};

	/**
	 * Validates the number is within an acceptable range for months [0-11].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateMonth = function (value) {
		return validate(value, 0, 11, "month");
	};

	/**
	 * Validates the number is within an acceptable range for years.
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateYear = function (value) {
		/**
		 * Per ECMAScript spec the range of times supported by Date objects is 
		 * exactly -100,000,000 days to +100,000,000 days measured relative to 
		 * midnight at the beginning of 01 January, 1970 UTC. 
		 * This gives a range of 8,640,000,000,000,000 milliseconds to either 
		 * side of 01 January, 1970 UTC.
		 *
		 * Earliest possible date: Tue, 20 Apr 271,822 B.C. 00:00:00 UTC
		 * Latest possible date: Sat, 13 Sep 275,760 00:00:00 UTC
		 */
		return validate(value, -271822, 275760, "year");
	};
	$D.validateTimezone = function(value) {
		var timezones = {"ACDT":1,"ACST":1,"ACT":1,"ADT":1,"AEDT":1,"AEST":1,"AFT":1,"AKDT":1,"AKST":1,"AMST":1,"AMT":1,"ART":1,"AST":1,"AWDT":1,"AWST":1,"AZOST":1,"AZT":1,"BDT":1,"BIOT":1,"BIT":1,"BOT":1,"BRT":1,"BST":1,"BTT":1,"CAT":1,"CCT":1,"CDT":1,"CEDT":1,"CEST":1,"CET":1,"CHADT":1,"CHAST":1,"CHOT":1,"ChST":1,"CHUT":1,"CIST":1,"CIT":1,"CKT":1,"CLST":1,"CLT":1,"COST":1,"COT":1,"CST":1,"CT":1,"CVT":1,"CWST":1,"CXT":1,"DAVT":1,"DDUT":1,"DFT":1,"EASST":1,"EAST":1,"EAT":1,"ECT":1,"EDT":1,"EEDT":1,"EEST":1,"EET":1,"EGST":1,"EGT":1,"EIT":1,"EST":1,"FET":1,"FJT":1,"FKST":1,"FKT":1,"FNT":1,"GALT":1,"GAMT":1,"GET":1,"GFT":1,"GILT":1,"GIT":1,"GMT":1,"GST":1,"GYT":1,"HADT":1,"HAEC":1,"HAST":1,"HKT":1,"HMT":1,"HOVT":1,"HST":1,"ICT":1,"IDT":1,"IOT":1,"IRDT":1,"IRKT":1,"IRST":1,"IST":1,"JST":1,"KGT":1,"KOST":1,"KRAT":1,"KST":1,"LHST":1,"LINT":1,"MAGT":1,"MART":1,"MAWT":1,"MDT":1,"MET":1,"MEST":1,"MHT":1,"MIST":1,"MIT":1,"MMT":1,"MSK":1,"MST":1,"MUT":1,"MVT":1,"MYT":1,"NCT":1,"NDT":1,"NFT":1,"NPT":1,"NST":1,"NT":1,"NUT":1,"NZDT":1,"NZST":1,"OMST":1,"ORAT":1,"PDT":1,"PET":1,"PETT":1,"PGT":1,"PHOT":1,"PHT":1,"PKT":1,"PMDT":1,"PMST":1,"PONT":1,"PST":1,"PYST":1,"PYT":1,"RET":1,"ROTT":1,"SAKT":1,"SAMT":1,"SAST":1,"SBT":1,"SCT":1,"SGT":1,"SLST":1,"SRT":1,"SST":1,"SYOT":1,"TAHT":1,"THA":1,"TFT":1,"TJT":1,"TKT":1,"TLT":1,"TMT":1,"TOT":1,"TVT":1,"UCT":1,"ULAT":1,"UTC":1,"UYST":1,"UYT":1,"UZT":1,"VET":1,"VLAT":1,"VOLT":1,"VOST":1,"VUT":1,"WAKT":1,"WAST":1,"WAT":1,"WEDT":1,"WEST":1,"WET":1,"WST":1,"YAKT":1,"YEKT":1,"Z":1};
		return (timezones[value] === 1);
	};
	$D.validateTimezoneOffset= function(value) {
		// timezones go from +14hrs to -12hrs, the +X hours are negative offsets.
		return (value > -841 && value < 721);
	};

}());

(function () {
	var $D = Date,
		$P = $D.prototype,
		p = function (s, l) {
			if (!l) {
				l = 2;
			}
			return ("000" + s).slice(l * -1);
		};

	var validateConfigObject = function (obj) {
		var result = {}, self = this, prop, testFunc;
		testFunc = function (prop, func, value) {
			if (prop === "day") {
				var month = (obj.month !== undefined) ? obj.month : self.getMonth();
				var year = (obj.year !== undefined) ? obj.year : self.getFullYear();
				return $D[func](value, year, month);
			} else {
				return $D[func](value);
			}
		};
		for (prop in obj) {
			if (hasOwnProperty.call(obj, prop)) {
				var func = "validate" + prop.charAt(0).toUpperCase() + prop.slice(1);

				if ($D[func] && obj[prop] !== null && testFunc(prop, func, obj[prop])) {
					result[prop] = obj[prop];
				}
			}
		}
		return result;
	};
	/**
	 * Resets the time of this Date object to 12:00 AM (00:00), which is the start of the day.
	 * @param {Boolean}  .clone() this date instance before clearing Time
	 * @return {Date}    this
	 */
	$P.clearTime = function () {
		this.setHours(0);
		this.setMinutes(0);
		this.setSeconds(0);
		this.setMilliseconds(0);
		return this;
	};

	/**
	 * Resets the time of this Date object to the current time ('now').
	 * @return {Date}    this
	 */
	$P.setTimeToNow = function () {
		var n = new Date();
		this.setHours(n.getHours());
		this.setMinutes(n.getMinutes());
		this.setSeconds(n.getSeconds());
		this.setMilliseconds(n.getMilliseconds());
		return this;
	};
	/**
	 * Returns a new Date object that is an exact date and time copy of the original instance.
	 * @return {Date}    A new Date instance
	 */
	$P.clone = function () {
		return new Date(this.getTime());
	};

	/**
	 * Compares this instance to a Date object and returns an number indication of their relative values.  
	 * @param {Date}     Date object to compare [Required]
	 * @return {Number}  -1 = this is lessthan date. 0 = values are equal. 1 = this is greaterthan date.
	 */
	$P.compareTo = function (date) {
		return Date.compare(this, date);
	};

	/**
	 * Compares this instance to another Date object and returns true if they are equal.  
	 * @param {Date}     Date object to compare. If no date to compare, new Date() [now] is used.
	 * @return {Boolean} true if dates are equal. false if they are not equal.
	 */
	$P.equals = function (date) {
		return Date.equals(this, (date !== undefined ? date : new Date()));
	};

	/**
	 * Determines if this instance is between a range of two dates or equal to either the start or end dates.
	 * @param {Date}     Start of range [Required]
	 * @param {Date}     End of range [Required]
	 * @return {Boolean} true is this is between or equal to the start and end dates, else false
	 */
	$P.between = function (start, end) {
		return this.getTime() >= start.getTime() && this.getTime() <= end.getTime();
	};

	/**
	 * Determines if this date occurs after the date to compare to.
	 * @param {Date}     Date object to compare. If no date to compare, new Date() ("now") is used.
	 * @return {Boolean} true if this date instance is greater than the date to compare to (or "now"), otherwise false.
	 */
	$P.isAfter = function (date) {
		return this.compareTo(date || new Date()) === 1;
	};

	/**
	 * Determines if this date occurs before the date to compare to.
	 * @param {Date}     Date object to compare. If no date to compare, new Date() ("now") is used.
	 * @return {Boolean} true if this date instance is less than the date to compare to (or "now").
	 */
	$P.isBefore = function (date) {
		return (this.compareTo(date || new Date()) === -1);
	};

	/**
	 * Determines if the current Date instance occurs today.
	 * @return {Boolean} true if this date instance is 'today', otherwise false.
	 */
	
	/**
	 * Determines if the current Date instance occurs on the same Date as the supplied 'date'. 
	 * If no 'date' to compare to is provided, the current Date instance is compared to 'today'. 
	 * @param {date}     Date object to compare. If no date to compare, the current Date ("now") is used.
	 * @return {Boolean} true if this Date instance occurs on the same Day as the supplied 'date'.
	 */
	$P.isToday = $P.isSameDay = function (date) {
		return this.clone().clearTime().equals((date || new Date()).clone().clearTime());
	};
	
	/**
	 * Adds the specified number of milliseconds to this instance. 
	 * @param {Number}   The number of milliseconds to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addMilliseconds = function (value) {
		if (!value) { return this; }
		this.setTime(this.getTime() + value * 1);
		return this;
	};

	/**
	 * Adds the specified number of seconds to this instance. 
	 * @param {Number}   The number of seconds to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addSeconds = function (value) {
		if (!value) { return this; }
		return this.addMilliseconds(value * 1000);
	};

	/**
	 * Adds the specified number of seconds to this instance. 
	 * @param {Number}   The number of seconds to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addMinutes = function (value) {
		if (!value) { return this; }
		return this.addMilliseconds(value * 60000); // 60*1000
	};

	/**
	 * Adds the specified number of hours to this instance. 
	 * @param {Number}   The number of hours to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addHours = function (value) {
		if (!value) { return this; }
		return this.addMilliseconds(value * 3600000); // 60*60*1000
	};

	/**
	 * Adds the specified number of days to this instance. 
	 * @param {Number}   The number of days to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addDays = function (value) {
		if (!value) { return this; }
		this.setDate(this.getDate() + value * 1);
		return this;
	};

	/**
	 * Adds the specified number of weekdays (ie - not sat or sun) to this instance. 
	 * @param {Number}   The number of days to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addWeekdays = function (value) {
		if (!value) { return this; }
		var day = this.getDay();
		var weeks = (Math.ceil(Math.abs(value)/7));
		if (day === 0 || day === 6) {
			if (value > 0) {
				this.next().monday();
				this.addDays(-1);
				day = this.getDay();
			}
		}

		if (value < 0) {
			while (value < 0) {
				this.addDays(-1);
				day = this.getDay();
				if (day !== 0 && day !== 6) {
					value++;
				}
			}
			return this;
		} else if (value > 5 || (6-day) <= value) {
			value = value + (weeks * 2);
		}

		return this.addDays(value);
	};

	/**
	 * Adds the specified number of weeks to this instance. 
	 * @param {Number}   The number of weeks to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addWeeks = function (value) {
		if (!value) { return this; }
		return this.addDays(value * 7);
	};


	/**
	 * Adds the specified number of months to this instance. 
	 * @param {Number}   The number of months to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addMonths = function (value) {
		if (!value) { return this; }
		var n = this.getDate();
		this.setDate(1);
		this.setMonth(this.getMonth() + value * 1);
		this.setDate(Math.min(n, $D.getDaysInMonth(this.getFullYear(), this.getMonth())));
		return this;
	};

	$P.addQuarters = function (value) {
		if (!value) { return this; }
		// note this will take you to the same point in the quarter as you are now.
		// i.e. - if you are 15 days into the quarter you'll be 15 days into the resulting one.
		// bonus: this allows adding fractional quarters
		return this.addMonths(value * 3);
	};

	/**
	 * Adds the specified number of years to this instance. 
	 * @param {Number}   The number of years to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addYears = function (value) {
		if (!value) { return this; }
		return this.addMonths(value * 12);
	};

	/**
	 * Adds (or subtracts) to the value of the years, months, weeks, days, hours, minutes, seconds, milliseconds of the date instance using given configuration object. Positive and Negative values allowed.
	 * Example
	<pre><code>
	Date.today().add( { days: 1, months: 1 } )
	 
	new Date().add( { years: -1 } )
	</code></pre> 
	 * @param {Object}   Configuration object containing attributes (months, days, etc.)
	 * @return {Date}    this
	 */
	$P.add = function (config) {
		if (typeof config === "number") {
			this._orient = config;
			return this;
		}
		
		var x = config;

		if (x.day) {
			// If we should be a different date than today (eg: for 'tomorrow -1d', etc).
			// Should only effect parsing, not direct usage (eg, Finish and FinishExact)
			if ((x.day - this.getDate()) !== 0) {
				this.setDate(x.day);
			}
		}
		if (x.milliseconds) {
			this.addMilliseconds(x.milliseconds);
		}
		if (x.seconds) {
			this.addSeconds(x.seconds);
		}
		if (x.minutes) {
			this.addMinutes(x.minutes);
		}
		if (x.hours) {
			this.addHours(x.hours);
		}
		if (x.weeks) {
			this.addWeeks(x.weeks);
		}
		if (x.months) {
			this.addMonths(x.months);
		}
		if (x.years) {
			this.addYears(x.years);
		}
		if (x.days) {
			this.addDays(x.days);
		}
		return this;
	};
	
	/**
	 * Get the week number. Week one (1) is the week which contains the first Thursday of the year. Monday is considered the first day of the week.
	 * The .getWeek() function does NOT convert the date to UTC. The local datetime is used. 
	 * Please use .getISOWeek() to get the week of the UTC converted date.
	 * @return {Number}  1 to 53
	 */
	$P.getWeek = function (utc) {
		// Create a copy of this date object  
		var self, target = new Date(this.valueOf());
		if (utc) {
			target.addMinutes(target.getTimezoneOffset());
			self = target.clone();
		} else {
			self = this;
		}
		// ISO week date weeks start on monday  
		// so correct the day number  
		var dayNr = (self.getDay() + 6) % 7;
		// ISO 8601 states that week 1 is the week  
		// with the first thursday of that year.  
		// Set the target date to the thursday in the target week  
		target.setDate(target.getDate() - dayNr + 3);
		// Store the millisecond value of the target date  
		var firstThursday = target.valueOf();
		// Set the target to the first thursday of the year  
		// First set the target to january first  
		target.setMonth(0, 1);
		// Not a thursday? Correct the date to the next thursday  
		if (target.getDay() !== 4) {
			target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
		}
		// The weeknumber is the number of weeks between the   
		// first thursday of the year and the thursday in the target week  
		return 1 + Math.ceil((firstThursday - target) / 604800000); // 604800000 = 7 * 24 * 3600 * 1000  
	};
	
	/**
	 * Get the ISO 8601 week number. Week one ("01") is the week which contains the first Thursday of the year. Monday is considered the first day of the week.
	 * The .getISOWeek() function does convert the date to it's UTC value. Please use .getWeek() to get the week of the local date.
	 * @return {String}  "01" to "53"
	 */
	$P.getISOWeek = function () {
		return p(this.getWeek(true));
	};

	/**
	 * Moves the date to Monday of the week set. Week one (1) is the week which contains the first Thursday of the year.
	 * @param {Number}   A Number (1 to 53) that represents the week of the year.
	 * @return {Date}    this
	 */
	$P.setWeek = function (n) {
		if ((n - this.getWeek()) === 0) {
			if (this.getDay() !== 1) {
				return this.moveToDayOfWeek(1, (this.getDay() > 1 ? -1 : 1));
			} else {
				return this;
			}
		} else {
			return this.moveToDayOfWeek(1, (this.getDay() > 1 ? -1 : 1)).addWeeks(n - this.getWeek());
		}
	};

	$P.setQuarter = function (qtr) {
		var month = Math.abs(((qtr-1) * 3) + 1);
		return this.setMonth(month, 1);
	};

	$P.getQuarter = function () {
		return Date.getQuarter(this);
	};

	$P.getDaysLeftInQuarter = function () {
		return Date.getDaysLeftInQuarter(this);
	};

	/**
	 * Moves the date to the next n'th occurrence of the dayOfWeek starting from the beginning of the month. The number (-1) is a magic number and will return the last occurrence of the dayOfWeek in the month.
	 * @param {Number}   The dayOfWeek to move to
	 * @param {Number}   The n'th occurrence to move to. Use (-1) to return the last occurrence in the month
	 * @return {Date}    this
	 */
	$P.moveToNthOccurrence = function (dayOfWeek, occurrence) {
		if (dayOfWeek === "Weekday") {
			if (occurrence > 0) {
				this.moveToFirstDayOfMonth();
				if (this.is().weekday()) {
					occurrence -= 1;
				}
			} else if (occurrence < 0) {
				this.moveToLastDayOfMonth();
				if (this.is().weekday()) {
					occurrence += 1;
				}
			} else {
				return this;
			}
			return this.addWeekdays(occurrence);
		}
		var shift = 0;
		if (occurrence > 0) {
			shift = occurrence - 1;
		}
		else if (occurrence === -1) {
			this.moveToLastDayOfMonth();
			if (this.getDay() !== dayOfWeek) {
				this.moveToDayOfWeek(dayOfWeek, -1);
			}
			return this;
		}
		return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek, +1).addWeeks(shift);
	};


	var moveToN = function (getFunc, addFunc, nVal) {
		return function (value, orient) {
			var diff = (value - this[getFunc]() + nVal * (orient || +1)) % nVal;
			return this[addFunc]((diff === 0) ? diff += nVal * (orient || +1) : diff);
		};
	};
	/**
	 * Move to the next or last dayOfWeek based on the orient value.
	 * @param {Number}   The dayOfWeek to move to
	 * @param {Number}   Forward (+1) or Back (-1). Defaults to +1. [Optional]
	 * @return {Date}    this
	 */
	$P.moveToDayOfWeek = moveToN("getDay", "addDays", 7);
	/**
	 * Move to the next or last month based on the orient value.
	 * @param {Number}   The month to move to. 0 = January, 11 = December
	 * @param {Number}   Forward (+1) or Back (-1). Defaults to +1. [Optional]
	 * @return {Date}    this
	 */
	$P.moveToMonth = moveToN("getMonth", "addMonths", 12);
	/**
	 * Get the Ordinate of the current day ("th", "st", "rd").
	 * @return {String} 
	 */
	$P.getOrdinate = function () {
		var num = this.getDate();
		return ord(num);
	};
	/**
	 * Get the Ordinal day (numeric day number) of the year, adjusted for leap year.
	 * @return {Number} 1 through 365 (366 in leap years)
	 */
	$P.getOrdinalNumber = function () {
		return Math.ceil((this.clone().clearTime() - new Date(this.getFullYear(), 0, 1)) / 86400000) + 1;
	};

	/**
	 * Get the time zone abbreviation of the current date.
	 * @return {String} The abbreviated time zone name (e.g. "EST")
	 */
	$P.getTimezone = function () {
		return $D.getTimezoneAbbreviation(this.getUTCOffset(), this.isDaylightSavingTime());
	};

	$P.setTimezoneOffset = function (offset) {
		var here = this.getTimezoneOffset(), there = Number(offset) * -6 / 10;
		return (there || there === 0) ? this.addMinutes(there - here) : this;
	};

	$P.setTimezone = function (offset) {
		return this.setTimezoneOffset($D.getTimezoneOffset(offset));
	};

	/**
	 * Indicates whether Daylight Saving Time is observed in the current time zone.
	 * @return {Boolean} true|false
	 */
	$P.hasDaylightSavingTime = function () {
		return (Date.today().set({month: 0, day: 1}).getTimezoneOffset() !== Date.today().set({month: 6, day: 1}).getTimezoneOffset());
	};
	
	/**
	 * Indicates whether this Date instance is within the Daylight Saving Time range for the current time zone.
	 * @return {Boolean} true|false
	 */
	$P.isDaylightSavingTime = function () {
		return Date.today().set({month: 0, day: 1}).getTimezoneOffset() !== this.getTimezoneOffset();
	};

	/**
	 * Get the offset from UTC of the current date.
	 * @return {String} The 4-character offset string prefixed with + or - (e.g. "-0500")
	 */
	$P.getUTCOffset = function (offset) {
		var n = (offset || this.getTimezoneOffset()) * -10 / 6, r;
		if (n < 0) {
			r = (n - 10000).toString();
			return r.charAt(0) + r.substr(2);
		} else {
			r = (n + 10000).toString();
			return "+" + r.substr(1);
		}
	};

	/**
	 * Returns the number of milliseconds between this date and date.
	 * @param {Date} Defaults to now
	 * @return {Number} The diff in milliseconds
	 */
	$P.getElapsed = function (date) {
		return (date || new Date()) - this;
	};

	/**
	 * Set the value of year, month, day, hour, minute, second, millisecond of date instance using given configuration object.
	 * Example
	<pre><code>
	Date.today().set( { day: 20, month: 1 } )

	new Date().set( { millisecond: 0 } )
	</code></pre>
	 * 
	 * @param {Object}   Configuration object containing attributes (month, day, etc.)
	 * @return {Date}    this
	 */
	$P.set = function (config) {
		config = validateConfigObject.call(this, config);
		var key;
		for (key in config) {
			if (hasOwnProperty.call(config, key)) {
				var name = key.charAt(0).toUpperCase() + key.slice(1);
				var addFunc, getFunc;
				if (key !== "week" && key !== "month" && key !== "timezone" && key !== "timezoneOffset") {
					name += "s";
				}
				addFunc = "add" + name;
				getFunc = "get" + name;
				if (key === "month") {
					addFunc = addFunc + "s";
				} else if (key === "year"){
					getFunc = "getFullYear";
				}
				if (key !== "day" && key !== "timezone" && key !== "timezoneOffset"  && key !== "week" &&  key !== "hour") {
						this[addFunc](config[key] - this[getFunc]());
				} else if ( key === "timezone"|| key === "timezoneOffset" || key === "week" || key === "hour") {
					this["set"+name](config[key]);
				}
			}
		}
		// day has to go last because you can't validate the day without first knowing the month
		if (config.day) {
			this.addDays(config.day - this.getDate());
		}
		
		return this;
	};

	/**
	 * Moves the date to the first day of the month.
	 * @return {Date}    this
	 */
	$P.moveToFirstDayOfMonth = function () {
		return this.set({ day: 1 });
	};

	/**
	 * Moves the date to the last day of the month.
	 * @return {Date}    this
	 */
	$P.moveToLastDayOfMonth = function () {
		return this.set({ day: $D.getDaysInMonth(this.getFullYear(), this.getMonth())});
	};


	/**
	 * Converts the value of the current Date object to its equivalent string representation.
	 * Format Specifiers
	 * CUSTOM DATE AND TIME FORMAT STRINGS
	 * Format  Description                                                                  Example
	 * ------  ---------------------------------------------------------------------------  -----------------------
	 * s      The seconds of the minute between 0-59.                                      "0" to "59"
	 * ss     The seconds of the minute with leading zero if required.                     "00" to "59"
	 * 
	 * m      The minute of the hour between 0-59.                                         "0"  or "59"
	 * mm     The minute of the hour with leading zero if required.                        "00" or "59"
	 * 
	 * h      The hour of the day between 1-12.                                            "1"  to "12"
	 * hh     The hour of the day with leading zero if required.                           "01" to "12"
	 * 
	 * H      The hour of the day between 0-23.                                            "0"  to "23"
	 * HH     The hour of the day with leading zero if required.                           "00" to "23"
	 * 
	 * d      The day of the month between 1 and 31.                                       "1"  to "31"
	 * dd     The day of the month with leading zero if required.                          "01" to "31"
	 * ddd    Abbreviated day name. Date.CultureInfo.abbreviatedDayNames.                                "Mon" to "Sun" 
	 * dddd   The full day name. Date.CultureInfo.dayNames.                                              "Monday" to "Sunday"
	 * 
	 * M      The month of the year between 1-12.                                          "1" to "12"
	 * MM     The month of the year with leading zero if required.                         "01" to "12"
	 * MMM    Abbreviated month name. Date.CultureInfo.abbreviatedMonthNames.                            "Jan" to "Dec"
	 * MMMM   The full month name. Date.CultureInfo.monthNames.                                          "January" to "December"
	 *
	 * yy     The year as a two-digit number.                                              "99" or "08"
	 * yyyy   The full four digit year.                                                    "1999" or "2008"
	 * 
	 * t      Displays the first character of the A.M./P.M. designator.                    "A" or "P"
	 *		Date.CultureInfo.amDesignator or Date.CultureInfo.pmDesignator
	 * tt     Displays the A.M./P.M. designator.                                           "AM" or "PM"
	 *		Date.CultureInfo.amDesignator or Date.CultureInfo.pmDesignator
	 * 
	 * S      The ordinal suffix ("st, "nd", "rd" or "th") of the current day.            "st, "nd", "rd" or "th"
	 *
	 * STANDARD DATE AND TIME FORMAT STRINGS
	 * Format  Description                                                                  Example
	 *------  ---------------------------------------------------------------------------  -----------------------
	 * d      The CultureInfo shortDate Format Pattern                                     "M/d/yyyy"
	 * D      The CultureInfo longDate Format Pattern                                      "dddd, MMMM dd, yyyy"
	 * F      The CultureInfo fullDateTime Format Pattern                                  "dddd, MMMM dd, yyyy h:mm:ss tt"
	 * m      The CultureInfo monthDay Format Pattern                                      "MMMM dd"
	 * r      The CultureInfo rfc1123 Format Pattern                                       "ddd, dd MMM yyyy HH:mm:ss GMT"
	 * s      The CultureInfo sortableDateTime Format Pattern                              "yyyy-MM-ddTHH:mm:ss"
	 * t      The CultureInfo shortTime Format Pattern                                     "h:mm tt"
	 * T      The CultureInfo longTime Format Pattern                                      "h:mm:ss tt"
	 * u      The CultureInfo universalSortableDateTime Format Pattern                     "yyyy-MM-dd HH:mm:ssZ"
	 * y      The CultureInfo yearMonth Format Pattern                                     "MMMM, yyyy"
	 *
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @return {String}  A string representation of the current Date object.
	 */
	
	var ord = function (n) {
		switch (n * 1) {
		case 1:
		case 21:
		case 31:
			return "st";
		case 2:
		case 22:
			return "nd";
		case 3:
		case 23:
			return "rd";
		default:
			return "th";
		}
	};
	var parseStandardFormats = function (format) {
		var y, c = Date.CultureInfo.formatPatterns;
		switch (format) {
			case "d":
				return this.toString(c.shortDate);
			case "D":
				return this.toString(c.longDate);
			case "F":
				return this.toString(c.fullDateTime);
			case "m":
				return this.toString(c.monthDay);
			case "r":
			case "R":
				y = this.clone().addMinutes(this.getTimezoneOffset());
				return y.toString(c.rfc1123) + " GMT";
			case "s":
				return this.toString(c.sortableDateTime);
			case "t":
				return this.toString(c.shortTime);
			case "T":
				return this.toString(c.longTime);
			case "u":
				y = this.clone().addMinutes(this.getTimezoneOffset());
				return y.toString(c.universalSortableDateTime);
			case "y":
				return this.toString(c.yearMonth);
			default:
				return false;
		}
	};
	var parseFormatStringsClosure = function (context) {
		return function (m) {
			if (m.charAt(0) === "\\") {
				return m.replace("\\", "");
			}
			switch (m) {
				case "hh":
					return p(context.getHours() < 13 ? (context.getHours() === 0 ? 12 : context.getHours()) : (context.getHours() - 12));
				case "h":
					return context.getHours() < 13 ? (context.getHours() === 0 ? 12 : context.getHours()) : (context.getHours() - 12);
				case "HH":
					return p(context.getHours());
				case "H":
					return context.getHours();
				case "mm":
					return p(context.getMinutes());
				case "m":
					return context.getMinutes();
				case "ss":
					return p(context.getSeconds());
				case "s":
					return context.getSeconds();
				case "yyyy":
					return p(context.getFullYear(), 4);
				case "yy":
					return p(context.getFullYear());
				case "y":
					return context.getFullYear();
				case "E":
				case "dddd":
					return Date.CultureInfo.dayNames[context.getDay()];
				case "ddd":
					return Date.CultureInfo.abbreviatedDayNames[context.getDay()];
				case "dd":
					return p(context.getDate());
				case "d":
					return context.getDate();
				case "MMMM":
					return Date.CultureInfo.monthNames[context.getMonth()];
				case "MMM":
					return Date.CultureInfo.abbreviatedMonthNames[context.getMonth()];
				case "MM":
					return p((context.getMonth() + 1));
				case "M":
					return context.getMonth() + 1;
				case "t":
					return context.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);
				case "tt":
					return context.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
				case "S":
					return ord(context.getDate());
				case "W":
					return context.getWeek();
				case "WW":
					return context.getISOWeek();
				case "Q":
					return "Q" + context.getQuarter();
				case "q":
					return String(context.getQuarter());
				case "z":
					return context.getTimezone();
				case "Z":
				case "X":
					return Date.getTimezoneOffset(context.getTimezone());
				case "ZZ": // Timezone offset in seconds
					return context.getTimezoneOffset() * -60;
				case "u":
					return context.getDay();
				case "L":
					return ($D.isLeapYear(context.getFullYear())) ? 1 : 0;
				case "B":
					// Swatch Internet Time (.beats)
					return "@"+((context.getUTCSeconds() + (context.getUTCMinutes()*60) + ((context.getUTCHours()+1)*3600))/86.4);
				default:
					return m;
			}
		};
	};
	$P.toString = function (format, ignoreStandards) {
		
		// Standard Date and Time Format Strings. Formats pulled from CultureInfo file and
		// may vary by culture. 
		if (!ignoreStandards && format && format.length === 1) {
			output = parseStandardFormats.call(this, format);
			if (output) {
				return output;
			}
		}
		var parseFormatStrings = parseFormatStringsClosure(this);
		return format ? format.replace(/((\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S|q|Q|WW?W?W?)(?![^\[]*\]))/g, parseFormatStrings).replace(/\[|\]/g, "") : this._toString();
	};

}());
/*************************************************************
 * SugarPak - Domain Specific Language -  Syntactical Sugar  *
 *************************************************************/
 
(function () {
	var $D = Date, $P = $D.prototype, $N = Number.prototype;

	// private
	$P._orient = +1;

	// private
	$P._nth = null;

	// private
	$P._is = false;

	// private
	$P._same = false;
	
	// private
	$P._isSecond = false;

	// private
	$N._dateElement = "days";

	/** 
	 * Moves the date to the next instance of a date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.today().next().friday();
	Date.today().next().fri();
	Date.today().next().march();
	Date.today().next().mar();
	Date.today().next().week();
	</code></pre>
	 * 
	 * @return {Date}    date
	 */
	$P.next = function () {
		this._move = true;
		this._orient = +1;
		return this;
	};

	/** 
	 * Creates a new Date (Date.today()) and moves the date to the next instance of the date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.next().friday();
	Date.next().fri();
	Date.next().march();
	Date.next().mar();
	Date.next().week();
	</code></pre>
	 * 
	 * @return {Date}    date
	 */
	$D.next = function () {
		return $D.today().next();
	};

	/** 
	 * Moves the date to the previous instance of a date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.today().last().friday();
	Date.today().last().fri();
	Date.today().last().march();
	Date.today().last().mar();
	Date.today().last().week();
	</code></pre>
	 *  
	 * @return {Date}    date
	 */
	$P.last = $P.prev = $P.previous = function () {
		this._move = true;
		this._orient = -1;
		return this;
	};

	/** 
	 * Creates a new Date (Date.today()) and moves the date to the previous instance of the date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.last().friday();
	Date.last().fri();
	Date.previous().march();
	Date.prev().mar();
	Date.last().week();
	</code></pre>
	 *  
	 * @return {Date}    date
	 */
	$D.last = $D.prev = $D.previous = function () {
		return $D.today().last();
	};

	/** 
	 * Performs a equality check when followed by either a month name, day name or .weekday() function.
	 * Example
	<pre><code>
	Date.today().is().friday(); // true|false
	Date.today().is().fri();
	Date.today().is().march();
	Date.today().is().mar();
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.is = function () {
		this._is = true;
		return this;
	};

	/** 
	 * Determines if two date objects occur on/in exactly the same instance of the subsequent date part function.
	 * The function .same() must be followed by a date part function (example: .day(), .month(), .year(), etc).
	 *
	 * An optional Date can be passed in the date part function. If now date is passed as a parameter, 'Now' is used. 
	 *
	 * The following example demonstrates how to determine if two dates fall on the exact same day.
	 *
	 * Example
	<pre><code>
	var d1 = Date.today(); // today at 00:00
	var d2 = new Date();   // exactly now.

	// Do they occur on the same day?
	d1.same().day(d2); // true
	
	// Do they occur on the same hour?
	d1.same().hour(d2); // false, unless d2 hour is '00' (midnight).
	
	// What if it's the same day, but one year apart?
	var nextYear = Date.today().add(1).year();

	d1.same().day(nextYear); // false, because the dates must occur on the exact same day. 
	</code></pre>
	 *
	 * Scenario: Determine if a given date occurs during some week period 2 months from now. 
	 *
	 * Example
	<pre><code>
	var future = Date.today().add(2).months();
	return someDate.same().week(future); // true|false;
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.same = function () {
		this._same = true;
		this._isSecond = false;
		return this;
	};

	/** 
	 * Determines if the current date/time occurs during Today. Must be preceded by the .is() function.
	 * Example
	<pre><code>
	someDate.is().today();    // true|false
	new Date().is().today();  // true
	Date.today().is().today();// true
	Date.today().add(-1).day().is().today(); // false
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.today = function () {
		return this.same().day();
	};

	/** 
	 * Determines if the current date is a weekday. This function must be preceded by the .is() function.
	 * Example
	<pre><code>
	Date.today().is().weekday(); // true|false
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.weekday = function () {
		if (this._nth) {
			return df("Weekday").call(this);
		}
		if (this._move) {
			return this.addWeekdays(this._orient);
		}
		if (this._is) {
			this._is = false;
			return (!this.is().sat() && !this.is().sun());
		}
		return false;
	};
	/** 
	 * Determines if the current date is on the weekend. This function must be preceded by the .is() function.
	 * Example
	<pre><code>
	Date.today().is().weekend(); // true|false
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.weekend = function () {
		if (this._is) {
			this._is = false;
			return (this.is().sat() || this.is().sun());
		}
		return false;
	};

	/** 
	 * Sets the Time of the current Date instance. A string "6:15 pm" or config object {hour:18, minute:15} are accepted.
	 * Example
	<pre><code>
	// Set time to 6:15pm with a String
	Date.today().at("6:15pm");

	// Set time to 6:15pm with a config object
	Date.today().at({hour:18, minute:15});
	</code></pre>
	 *  
	 * @return {Date}    date
	 */
	$P.at = function (time) {
		return (typeof time === "string") ? $D.parse(this.toString("d") + " " + time) : this.set(time);
	};
		
	/** 
	 * Creates a new Date() and adds this (Number) to the date based on the preceding date element function (eg. second|minute|hour|day|month|year).
	 * Example
	<pre><code>
	// Undeclared Numbers must be wrapped with parentheses. Requirment of JavaScript.
	(3).days().fromNow();
	(6).months().fromNow();

	// Declared Number variables do not require parentheses. 
	var n = 6;
	n.months().fromNow();
	</code></pre>
	 *  
	 * @return {Date}    A new Date instance
	 */
	$N.fromNow = $N.after = function (date) {
		var c = {};
		c[this._dateElement] = this;
		return ((!date) ? new Date() : date.clone()).add(c);
	};

	/** 
	 * Creates a new Date() and subtract this (Number) from the date based on the preceding date element function (eg. second|minute|hour|day|month|year).
	 * Example
	<pre><code>
	// Undeclared Numbers must be wrapped with parentheses. Requirment of JavaScript.
	(3).days().ago();
	(6).months().ago();

	// Declared Number variables do not require parentheses. 
	var n = 6;
	n.months().ago();
	</code></pre>
	 *  
	 * @return {Date}    A new Date instance
	 */
	$N.ago = $N.before = function (date) {
		var c = {},
		s = (this._dateElement[this._dateElement.length-1] !== "s") ? this._dateElement + "s" : this._dateElement;
		c[s] = this * -1;
		return ((!date) ? new Date() : date.clone()).add(c);
	};

	// Do NOT modify the following string tokens. These tokens are used to build dynamic functions.
	// All culture-specific strings can be found in the CultureInfo files.
	var dx = ("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),
		mx = ("january february march april may june july august september october november december").split(/\s/),
		px = ("Millisecond Second Minute Hour Day Week Month Year Quarter Weekday").split(/\s/),
		pxf = ("Milliseconds Seconds Minutes Hours Date Week Month FullYear Quarter").split(/\s/),
		nth = ("final first second third fourth fifth").split(/\s/),
		de;

   /** 
	 * Returns an object literal of all the date parts.
	 * Example
	<pre><code>
	var o = new Date().toObject();
	
	// { year: 2008, month: 4, week: 20, day: 13, hour: 18, minute: 9, second: 32, millisecond: 812 }
	
	// The object properties can be referenced directly from the object.
	
	alert(o.day);  // alerts "13"
	alert(o.year); // alerts "2008"
	</code></pre>
	 *  
	 * @return {Date}    An object literal representing the original date object.
	 */
	$P.toObject = function () {
		var o = {};
		for (var i = 0; i < px.length; i++) {
			if (this["get" + pxf[i]]) {
				o[px[i].toLowerCase()] = this["get" + pxf[i]]();
			}
		}
		return o;
	};
   
   /** 
	 * Returns a date created from an object literal. Ignores the .week property if set in the config. 
	 * Example
	<pre><code>
	var o = new Date().toObject();
	
	return Date.fromObject(o); // will return the same date. 

	var o2 = {month: 1, day: 20, hour: 18}; // birthday party!
	Date.fromObject(o2);
	</code></pre>
	 *  
	 * @return {Date}    An object literal representing the original date object.
	 */
	$D.fromObject = function(config) {
		config.week = null;
		return Date.today().set(config);
	};
		
	// Create day name functions and abbreviated day name functions (eg. monday(), friday(), fri()).
	
	var df = function (n) {
		return function () {
			if (this._is) {
				this._is = false;
				return this.getDay() === n;
			}
			if (this._move) { this._move = null; }
			if (this._nth !== null) {
				// If the .second() function was called earlier, remove the _orient 
				// from the date, and then continue.
				// This is required because 'second' can be used in two different context.
				// 
				// Example
				//
				//   Date.today().add(1).second();
				//   Date.march().second().monday();
				// 
				// Things get crazy with the following...
				//   Date.march().add(1).second().second().monday(); // but it works!!
				//  
				if (this._isSecond) {
					this.addSeconds(this._orient * -1);
				}
				// make sure we reset _isSecond
				this._isSecond = false;

				var ntemp = this._nth;
				this._nth = null;
				var temp = this.clone().moveToLastDayOfMonth();
				this.moveToNthOccurrence(n, ntemp);
				if (this > temp) {
					throw new RangeError($D.getDayName(n) + " does not occur " + ntemp + " times in the month of " + $D.getMonthName(temp.getMonth()) + " " + temp.getFullYear() + ".");
				}
				return this;
			}
			return this.moveToDayOfWeek(n, this._orient);
		};
	};
	
	var sdf = function (n) {
		return function () {
			var t = $D.today(), shift = n - t.getDay();
			if (n === 0 && Date.CultureInfo.firstDayOfWeek === 1 && t.getDay() !== 0) {
				shift = shift + 7;
			}
			return t.addDays(shift);
		};
	};
	

	
	// Create month name functions and abbreviated month name functions (eg. january(), march(), mar()).
	var month_instance_functions = function (n) {
		return function () {
			if (this._is) {
				this._is = false;
				return this.getMonth() === n;
			}
			return this.moveToMonth(n, this._orient);
		};
	};
	
	var month_static_functions = function (n) {
		return function () {
			return $D.today().set({ month: n, day: 1 });
		};
	};
	
	var processTerms = function (names, staticFunc, instanceFunc) {
		for (var i = 0; i < names.length; i++) {
			// Create constant static Name variables.
			$D[names[i].toUpperCase()] = $D[names[i].toUpperCase().substring(0, 3)] = i;
			// Create Name functions.
			$D[names[i]] = $D[names[i].substring(0, 3)] = staticFunc(i);
			// Create Name instance functions.
			$P[names[i]] = $P[names[i].substring(0, 3)] = instanceFunc(i);
		}

	};

	processTerms(dx, sdf, df);
	processTerms(mx, month_static_functions, month_instance_functions);
	
	// Create date element functions and plural date element functions used with Date (eg. day(), days(), months()).
	var ef = function (j) {
		return function () {
			// if the .second() function was called earlier, the _orient 
			// has alread been added. Just return this and reset _isSecond.
			if (this._isSecond) {
				this._isSecond = false;
				return this;
			}

			if (this._same) {
				this._same = this._is = false;
				var o1 = this.toObject(),
					o2 = (arguments[0] || new Date()).toObject(),
					v = "",
					k = j.toLowerCase();

				// the substr trick with -1 doesn't work in IE8 or less
				k = (k[k.length-1] === "s") ? k.substring(0,k.length-1) : k;
					
				for (var m = (px.length - 1); m > -1; m--) {
					v = px[m].toLowerCase();
					if (o1[v] !== o2[v]) {
						return false;
					}
					if (k === v) {
						break;
					}
				}
				return true;
			}
			
			if (j.substring(j.length - 1) !== "s") {
				j += "s";
			}
			if (this._move) { this._move = null; }
			return this["add" + j](this._orient);
		};
	};
	
	
	var nf = function (n) {
		return function () {
			this._dateElement = n;
			return this;
		};
	};
   
	for (var k = 0; k < px.length; k++) {
		de = px[k].toLowerCase();
		if(de !== "weekday") {
			// Create date element functions and plural date element functions used with Date (eg. day(), days(), months()).
			$P[de] = $P[de + "s"] = ef(px[k]);
			
			// Create date element functions and plural date element functions used with Number (eg. day(), days(), months()).
			$N[de] = $N[de + "s"] = nf(de + "s");
		}
	}
	
	$P._ss = ef("Second");
	
	var nthfn = function (n) {
		return function (dayOfWeek) {
			if (this._same) {
				return this._ss(arguments[0]);
			}
			if (dayOfWeek || dayOfWeek === 0) {
				return this.moveToNthOccurrence(dayOfWeek, n);
			}
			this._nth = n;

			// if the operator is 'second' add the _orient, then deal with it later...
			if (n === 2 && (dayOfWeek === undefined || dayOfWeek === null)) {
				this._isSecond = true;
				return this.addSeconds(this._orient);
			}
			return this;
		};
	};

	for (var l = 0; l < nth.length; l++) {
		$P[nth[l]] = (l === 0) ? nthfn(-1) : nthfn(l);
	}
}());

(function () {
	"use strict";
	Date.Parsing = {
		Exception: function (s) {
			this.message = "Parse error at '" + s.substring(0, 10) + " ...'";
		}
	};
	var $P = Date.Parsing;
	var dayOffsets = {
		standard: [0,31,59,90,120,151,181,212,243,273,304,334],
		leap: [0,31,60,91,121,152,182,213,244,274,305,335]
	};

	$P.isLeapYear = function(year) {
		return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
	};

	var utils = {
		multiReplace : function (str, hash ) {
			var key;
			for (key in hash) {
				if (Object.prototype.hasOwnProperty.call(hash, key)) {
					var regex;
					if (typeof hash[key] === "function") {

					} else {
						regex = (hash[key] instanceof RegExp) ? hash[key] : new RegExp(hash[key], "g");
					}
					str = str.replace(regex, key);
				}
			}
			return str;
		},
		getDayOfYearFromWeek : function (obj) {
			var d, jan4, offset;
			obj.weekDay = (!obj.weekDay && obj.weekDay !== 0) ? 1 : obj.weekDay;
			d = new Date(obj.year, 0, 4);
			jan4 = d.getDay() === 0 ? 7 : d.getDay(); // JS is 0 indexed on Sunday.
			offset = jan4+3;
			obj.dayOfYear = ((obj.week * 7) + (obj.weekDay === 0 ? 7 : obj.weekDay))-offset;
			return obj;
		},
		getDayOfYear : function (obj, dayOffset) {
			if (!obj.dayOfYear) {
				obj = utils.getDayOfYearFromWeek(obj);
			}
			for (var i=0;i <= dayOffset.length;i++) {
				if (obj.dayOfYear < dayOffset[i] || i === dayOffset.length) {
					obj.day = obj.day ? obj.day : (obj.dayOfYear - dayOffset[i-1]);
					break;
				} else {
					obj.month = i;
				}
			}
			return obj;
		},
		adjustForTimeZone : function (obj, date) {
			var offset;
			if (obj.zone.toUpperCase() === "Z" || (obj.zone_hours === 0 && obj.zone_minutes === 0)) {
				// it's UTC/GML so work out the current timeszone offset
				offset = -date.getTimezoneOffset();
			} else {
				offset = (obj.zone_hours*60) + (obj.zone_minutes || 0);
				if (obj.zone_sign === "+") {
					offset *= -1;
				}
				offset -= date.getTimezoneOffset();
			}
			date.setMinutes(date.getMinutes()+offset);
			return date;
		},
		setDefaults : function (obj) {
			obj.year = obj.year || Date.today().getFullYear();
			obj.hours = obj.hours || 0;
			obj.minutes = obj.minutes || 0;
			obj.seconds = obj.seconds || 0;
			obj.milliseconds = obj.milliseconds || 0;
			if (!(!obj.month && (obj.week || obj.dayOfYear))) {
				// if we have a month, or if we don't but don't have the day calculation data
				obj.month = obj.month || 0;
				obj.day = obj.day || 1;
			}
			return obj;
		},
		dataNum: function (data, mod, explict, postProcess) {
			var dataNum = data*1;
			if (mod) {
				if (postProcess) {
					return data ? mod(data)*1 : data;
				} else {
					return data ? mod(dataNum) : data;
				}
			} else if (!explict){
				return data ? dataNum : data;
			} else {
				return (data && typeof data !== "undefined") ? dataNum : data;
			}
		},
		timeDataProcess: function (obj) {
			var timeObj = {};
			for (var x in obj.data) {
				if (obj.data.hasOwnProperty(x)) {
					timeObj[x] = obj.ignore[x] ? obj.data[x] : utils.dataNum(obj.data[x], obj.mods[x], obj.explict[x], obj.postProcess[x]);
				}
			}
			if (obj.data.secmins) {
				obj.data.secmins = obj.data.secmins.replace(",", ".") * 60;
				if (!timeObj.minutes) {
					timeObj.minutes = obj.data.secmins;
				} else if (!timeObj.seconds) {
					timeObj.seconds = obj.data.secmins;
				}
				delete obj.secmins;
			}
			return timeObj;
		},
		buildTimeObjectFromData: function (data) {
			var time = utils.timeDataProcess({
				data: {
					year : data[1],
					month : data[5],
					day : data[7],
					week : data[8],
					dayOfYear : data[10],
					hours : data[15],
					zone_hours : data[23],
					zone_minutes : data[24],
					zone : data[21],
					zone_sign : data[22],
					weekDay : data[9],
					minutes: data[16],
					seconds: data[19],
					milliseconds: data[20],
					secmins: data[18]
				},
				mods: {
					month: function(data) {
						return data-1;
					},
					weekDay: function (data) {
						data = Math.abs(data);
						return (data === 7 ? 0 : data);
					},
					minutes: function (data) {
						return data.replace(":","");
					},
					seconds: function (data) {
						return Math.floor( (data.replace(":","").replace(",","."))*1 );
					},
					milliseconds: function (data) {
						return (data.replace(",",".")*1000);
					}
				},
				postProcess: {
					minutes: true,
					seconds: true,
					milliseconds: true
				},
				explict: {
					zone_hours: true,
					zone_minutes: true
				},
				ignore: {
					zone: true,
					zone_sign: true,
					secmins: true
				}
			});
			return time;
		},
		addToHash: function (hash, keys, data) {
			keys = keys;
			data = data;
			var len = keys.length;
			for (var i = 0; i < len; i++) {
			  hash[keys[i]] = data[i];
			}
			return hash;
		},
		combineRegex: function (r1, r2) {
			return new RegExp("(("+r1.source+")\\s("+r2.source+"))");
		},
		getDateNthString: function(add, last, inc){
			if (add) {
				return Date.today().addDays(inc).toString("d");
			} else if (last) {
				return Date.today().last()[inc]().toString("d");
			}

		},
		buildRegexData: function (array) {
			var arr = [];
			var len = array.length;
			for (var i=0; i < len; i++) {
				if (Object.prototype.toString.call(array[i]) === '[object Array]') { // oldIE compat version of Array.isArray
					arr.push(this.combineRegex(array[i][0], array[i][1]));
				} else {
					arr.push(array[i]);
				}
			}
			return arr;
		}
	};

	$P.processTimeObject = function (obj) {
		var date, dayOffset;

		utils.setDefaults(obj);
		dayOffset = ($P.isLeapYear(obj.year)) ? dayOffsets.leap : dayOffsets.standard;

		if (!obj.month && (obj.week || obj.dayOfYear)) {
			utils.getDayOfYear(obj, dayOffset);
		} else {
			obj.dayOfYear = dayOffset[obj.month] + obj.day;
		}

		date = new Date(obj.year, obj.month, obj.day, obj.hours, obj.minutes, obj.seconds, obj.milliseconds);

		if (obj.zone) {
			utils.adjustForTimeZone(obj, date); // adjust (and calculate) for timezone
		}
		return date;
	};

	$P.ISO = {
		regex : /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-4])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?\s?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
		parse : function (s) {
			var time, data = s.match(this.regex);
			if (!data || !data.length) {
				return null;
			}

			time = utils.buildTimeObjectFromData(data);

			if (!time.year || (!time.year && (!time.month && !time.day) && (!time.week && !time.dayOfYear)) ) {
				return null;
			}
			return $P.processTimeObject(time);
		}
	};

	$P.Numeric = {
		isNumeric: function (e){return!isNaN(parseFloat(e))&&isFinite(e);},
		regex: /\b([0-1]?[0-9])([0-3]?[0-9])([0-2]?[0-9]?[0-9][0-9])\b/i,
		parse: function (s) {
			var data, i,
				time = {},
				order = Date.CultureInfo.dateElementOrder.split("");
			if (!(this.isNumeric(s)) || // if it's non-numeric OR
				(s[0] === "+" && s[0] === "-")) {			// It's an arithmatic string (eg +/-1000)
				return null;
			}
			if (s.length < 5 && s.indexOf(".") < 0 && s.indexOf("/") < 0) { // assume it's just a year.
				time.year = s;
				return $P.processTimeObject(time);
			}
			data = s.match(this.regex);
			if (!data || !data.length) {
				return null;
			}
			for (i=0; i < order.length; i++) {
				switch(order[i]) {
					case "d":
						time.day = data[i+1];
						break;
					case "m":
						time.month = (data[i+1]-1);
						break;
					case "y":
						time.year = data[i+1];
						break;
				}
			}
			return $P.processTimeObject(time);
		}
	};

	$P.Normalizer = {
		regexData: function () {
			var $R = Date.CultureInfo.regexPatterns;
			return utils.buildRegexData([
				$R.tomorrow,
				$R.yesterday,
				[$R.past, $R.mon],
				[$R.past, $R.tue],
				[$R.past, $R.wed],
				[$R.past, $R.thu],
				[$R.past, $R.fri],
				[$R.past, $R.sat],
				[$R.past, $R.sun]
			]);
		},
		basicReplaceHash : function() {
			var $R = Date.CultureInfo.regexPatterns;
			return {
				"January": $R.jan.source,
				"February": $R.feb,
				"March": $R.mar,
				"April": $R.apr,
				"May": $R.may,
				"June": $R.jun,
				"July": $R.jul,
				"August": $R.aug,
				"September": $R.sep,
				"October": $R.oct,
				"November": $R.nov,
				"December": $R.dec,
				"": /\bat\b/gi,
				" ": /\s{2,}/,
				"am": $R.inTheMorning,
				"9am": $R.thisMorning,
				"pm": $R.inTheEvening,
				"7pm":$R.thisEvening
			};
		},
		keys : function(){
			return [
				utils.getDateNthString(true, false, 1),				// tomorrow
				utils.getDateNthString(true, false, -1),			// yesterday
				utils.getDateNthString(false, true, "monday"),		//last mon
				utils.getDateNthString(false, true, "tuesday"),		//last tues
				utils.getDateNthString(false, true, "wednesday"),	//last wed
				utils.getDateNthString(false, true, "thursday"),	//last thurs
				utils.getDateNthString(false, true, "friday"),		//last fri
				utils.getDateNthString(false, true, "saturday"),	//last sat
				utils.getDateNthString(false, true, "sunday")		//last sun
			];
		},
		buildRegexFunctions: function () {
			var $R = Date.CultureInfo.regexPatterns;
			var __ = Date.i18n.__;
			var tomorrowRE = new RegExp("(\\b\\d\\d?("+__("AM")+"|"+__("PM")+")? )("+$R.tomorrow.source.slice(1)+")", "i"); // adapted tomorrow regex for AM PM relative dates
			var todayRE = new RegExp($R.today.source + "(?!\\s*([+-]))\\b"); // today, but excludes the math operators (eg "today + 2h")

			this.replaceFuncs = [
				[todayRE, function (full) {
					return (full.length > 1) ? Date.today().toString("d") : full;
				}],
				[tomorrowRE,
				function(full, m1) {
					var t = Date.today().addDays(1).toString("d");
					return (t + " " + m1);
				}],
				[$R.amThisMorning, function(str, am){return am;}],
				[$R.pmThisEvening, function(str, pm){return pm;}]
			];

		},
		buildReplaceData: function () {
			this.buildRegexFunctions();
			this.replaceHash = utils.addToHash(this.basicReplaceHash(), this.keys(), this.regexData());
		},
		stringReplaceFuncs: function (s) {
			for (var i=0; i < this.replaceFuncs.length; i++) {
				s = s.replace(this.replaceFuncs[i][0], this.replaceFuncs[i][1]);
			}
			return s;
		},
		parse: function (s) {
			s = this.stringReplaceFuncs(s);
			s = utils.multiReplace(s, this.replaceHash);

			try {
				var n = s.split(/([\s\-\.\,\/\x27]+)/);
				if (n.length === 3 &&
					$P.Numeric.isNumeric(n[0]) &&
					$P.Numeric.isNumeric(n[2]) &&
					(n[2].length >= 4)) {
						// ok, so we're dealing with x/year. But that's not a full date.
						// This fixes wonky dateElementOrder parsing when set to dmy order.
						if (Date.CultureInfo.dateElementOrder[0] === "d") {
							s = "1/" + n[0] + "/" + n[2]; // set to 1st of month and normalize the seperator
						}
				}
			} catch (e) {}

			return s;
		}
	};
	$P.Normalizer.buildReplaceData();
}());
(function () {
	var $P = Date.Parsing;
	var _ = $P.Operators = {
		//
		// Tokenizers
		//
		rtoken: function (r) { // regex token
			return function (s) {
				var mx = s.match(r);
				if (mx) {
					return ([ mx[0], s.substring(mx[0].length) ]);
				} else {
					throw new $P.Exception(s);
				}
			};
		},
		token: function () { // whitespace-eating token
			return function (s) {
				return _.rtoken(new RegExp("^\\s*" + s + "\\s*"))(s);
			};
		},
		stoken: function (s) { // string token
			return _.rtoken(new RegExp("^" + s));
		},

		// Atomic Operators

		until: function (p) {
			return function (s) {
				var qx = [], rx = null;
				while (s.length) {
					try {
						rx = p.call(this, s);
					} catch (e) {
						qx.push(rx[0]);
						s = rx[1];
						continue;
					}
					break;
				}
				return [ qx, s ];
			};
		},
		many: function (p) {
			return function (s) {
				var rx = [], r = null;
				while (s.length) {
					try {
						r = p.call(this, s);
					} catch (e) {
						return [ rx, s ];
					}
					rx.push(r[0]);
					s = r[1];
				}
				return [ rx, s ];
			};
		},

		// generator operators -- see below
		optional: function (p) {
			return function (s) {
				var r = null;
				try {
					r = p.call(this, s);
				} catch (e) {
					return [ null, s ];
				}
				return [ r[0], r[1] ];
			};
		},
		not: function (p) {
			return function (s) {
				try {
					p.call(this, s);
				} catch (e) {
					return [null, s];
				}
				throw new $P.Exception(s);
			};
		},
		ignore: function (p) {
			return p ?
			function (s) {
				var r = null;
				r = p.call(this, s);
				return [null, r[1]];
			} : null;
		},
		product: function () {
			var px = arguments[0],
			qx = Array.prototype.slice.call(arguments, 1), rx = [];
			for (var i = 0 ; i < px.length ; i++) {
				rx.push(_.each(px[i], qx));
			}
			return rx;
		},
		cache: function (rule) {
			var cache = {}, cache_length = 0, cache_keys = [], CACHE_MAX = Date.Config.CACHE_MAX || 100000, r = null;
			var cacheCheck = function () {
				if (cache_length === CACHE_MAX) {
					// kill several keys, don't want to have to do this all the time...
					for (var i=0; i < 10; i++) {
						var key = cache_keys.shift();
						if (key) {
							delete cache[key];
							cache_length--;
						}
					}
				}
			};
			return function (s) {
				cacheCheck();
				try {
					r = cache[s] = (cache[s] || rule.call(this, s));
				} catch (e) {
					r = cache[s] = e;
				}
				cache_length++;
				cache_keys.push(s);
				if (r instanceof $P.Exception) {
					throw r;
				} else {
					return r;
				}
			};
		},

		// vector operators -- see below
		any: function () {
			var px = arguments;
			return function (s) {
				var r = null;
				for (var i = 0; i < px.length; i++) {
					if (px[i] == null) {
						continue;
					}
					try {
						r = (px[i].call(this, s));
					} catch (e) {
						r = null;
					}
					if (r) {
						return r;
					}
				}
				throw new $P.Exception(s);
			};
		},
		each: function () {
			var px = arguments;
			return function (s) {
				var rx = [], r = null;
				for (var i = 0; i < px.length ; i++) {
					if (px[i] == null) {
						continue;
					}
					try {
						r = (px[i].call(this, s));
					} catch (e) {
						throw new $P.Exception(s);
					}
					rx.push(r[0]);
					s = r[1];
				}
				return [ rx, s];
			};
		},
		all: function () {
			var px = arguments, _ = _;
			return _.each(_.optional(px));
		},

		// delimited operators
		sequence: function (px, d, c) {
			d = d || _.rtoken(/^\s*/);
			c = c || null;
			
			if (px.length === 1) {
				return px[0];
			}
			return function (s) {
				var r = null, q = null;
				var rx = [];
				for (var i = 0; i < px.length ; i++) {
					try {
						r = px[i].call(this, s);
					} catch (e) {
						break;
					}
					rx.push(r[0]);
					try {
						q = d.call(this, r[1]);
					} catch (ex) {
						q = null;
						break;
					}
					s = q[1];
				}
				if (!r) {
					throw new $P.Exception(s);
				}
				if (q) {
					throw new $P.Exception(q[1]);
				}
				if (c) {
					try {
						r = c.call(this, r[1]);
					} catch (ey) {
						throw new $P.Exception(r[1]);
					}
				}
				return [ rx, (r?r[1]:s) ];
			};
		},

		//
		// Composite Operators
		//

		between: function (d1, p, d2) {
			d2 = d2 || d1;
			var _fn = _.each(_.ignore(d1), p, _.ignore(d2));
			return function (s) {
				var rx = _fn.call(this, s);
				return [[rx[0][0], r[0][2]], rx[1]];
			};
		},
		list: function (p, d, c) {
			d = d || _.rtoken(/^\s*/);
			c = c || null;
			return (p instanceof Array ?
				_.each(_.product(p.slice(0, -1), _.ignore(d)), p.slice(-1), _.ignore(c)) :
				_.each(_.many(_.each(p, _.ignore(d))), px, _.ignore(c)));
		},
		set: function (px, d, c) {
			d = d || _.rtoken(/^\s*/);
			c = c || null;
			return function (s) {
				// r is the current match, best the current 'best' match
				// which means it parsed the most amount of input
				var r = null, p = null, q = null, rx = null, best = [[], s], last = false;
				// go through the rules in the given set
				for (var i = 0; i < px.length ; i++) {

					// last is a flag indicating whether this must be the last element
					// if there is only 1 element, then it MUST be the last one
					q = null;
					p = null;
					r = null;
					last = (px.length === 1);
					// first, we try simply to match the current pattern
					// if not, try the next pattern
					try {
						r = px[i].call(this, s);
					} catch (e) {
						continue;
					}
					// since we are matching against a set of elements, the first
					// thing to do is to add r[0] to matched elements
					rx = [[r[0]], r[1]];
					// if we matched and there is still input to parse and 
					// we don't already know this is the last element,
					// we're going to next check for the delimiter ...
					// if there's none, or if there's no input left to parse
					// than this must be the last element after all ...
					if (r[1].length > 0 && ! last) {
						try {
							q = d.call(this, r[1]);
						} catch (ex) {
							last = true;
						}
					} else {
						last = true;
					}

					// if we parsed the delimiter and now there's no more input,
					// that means we shouldn't have parsed the delimiter at all
					// so don't update r and mark this as the last element ...
					if (!last && q[1].length === 0) {
						last = true;
					}


					// so, if this isn't the last element, we're going to see if
					// we can get any more matches from the remaining (unmatched)
					// elements ...
					if (!last) {
						// build a list of the remaining rules we can match against,
						// i.e., all but the one we just matched against
						var qx = [];
						for (var j = 0; j < px.length ; j++) {
							if (i !== j) {
								qx.push(px[j]);
							}
						}

						// now invoke recursively set with the remaining input
						// note that we don't include the closing delimiter ...
						// we'll check for that ourselves at the end
						p = _.set(qx, d).call(this, q[1]);

						// if we got a non-empty set as a result ...
						// (otw rx already contains everything we want to match)
						if (p[0].length > 0) {
							// update current result, which is stored in rx ...
							// basically, pick up the remaining text from p[1]
							// and concat the result from p[0] so that we don't
							// get endless nesting ...
							rx[0] = rx[0].concat(p[0]);
							rx[1] = p[1];
						}
					}

					// at this point, rx either contains the last matched element
					// or the entire matched set that starts with this element.

					// now we just check to see if this variation is better than
					// our best so far, in terms of how much of the input is parsed
					if (rx[1].length < best[1].length) {
						best = rx;
					}

					// if we've parsed all the input, then we're finished
					if (best[1].length === 0) {
						break;
					}
				}

				// so now we've either gone through all the patterns trying them
				// as the initial match; or we found one that parsed the entire
				// input string ...

				// if best has no matches, just return empty set ...
				if (best[0].length === 0) {
					return best;
				}

				// if a closing delimiter is provided, then we have to check it also
				if (c) {
					// we try this even if there is no remaining input because the pattern
					// may well be optional or match empty input ...
					try {
						q = c.call(this, best[1]);
					} catch (ey) {
						throw new $P.Exception(best[1]);
					}

					// it parsed ... be sure to update the best match remaining input
					best[1] = q[1];
				}
				// if we're here, either there was no closing delimiter or we parsed it
				// so now we have the best match; just return it!
				return best;
			};
		},
		forward: function (gr, fname) {
			return function (s) {
				return gr[fname].call(this, s);
			};
		},

		//
		// Translation Operators
		//
		replace: function (rule, repl) {
			return function (s) {
				var r = rule.call(this, s);
				return [repl, r[1]];
			};
		},
		process: function (rule, fn) {
			return function (s) {
				var r = rule.call(this, s);
				return [fn.call(this, r[0]), r[1]];
			};
		},
		min: function (min, rule) {
			return function (s) {
				var rx = rule.call(this, s);
				if (rx[0].length < min) {
					throw new $P.Exception(s);
				}
				return rx;
			};
		}
	};
	

	// Generator Operators And Vector Operators

	// Generators are operators that have a signature of F(R) => R,
	// taking a given rule and returning another rule, such as 
	// ignore, which parses a given rule and throws away the result.

	// Vector operators are those that have a signature of F(R1,R2,...) => R,
	// take a list of rules and returning a new rule, such as each.

	// Generator operators are converted (via the following _generator
	// function) into functions that can also take a list or array of rules
	// and return an array of new rules as though the function had been
	// called on each rule in turn (which is what actually happens).

	// This allows generators to be used with vector operators more easily.
	// Example:
	// each(ignore(foo, bar)) instead of each(ignore(foo), ignore(bar))

	// This also turns generators into vector operators, which allows
	// constructs like:
	// not(cache(foo, bar))
	
	var _generator = function (op) {
		function gen() {
			var args = null, rx = [], px, i;
			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			} else if (arguments[0] instanceof Array) {
				args = arguments[0];
			}
			if (args) {
				px = args.shift();
				if (px.length > 0) {
					args.unshift(px[i]);
					rx.push(op.apply(null, args));
					args.shift();
					return rx;
				}
			} else {
				return op.apply(null, arguments);
			}
		}

		return gen;
	};
	
	var gx = "optional not ignore cache".split(/\s/);
	
	for (var i = 0 ; i < gx.length ; i++) {
		_[gx[i]] = _generator(_[gx[i]]);
	}

	var _vector = function (op) {
		return function () {
			if (arguments[0] instanceof Array) {
				return op.apply(null, arguments[0]);
			} else {
				return op.apply(null, arguments);
			}
		};
	};
	
	var vx = "each any all".split(/\s/);
	
	for (var j = 0 ; j < vx.length ; j++) {
		_[vx[j]] = _vector(_[vx[j]]);
	}
	
}());
(function () {
	var $D = Date;

	var flattenAndCompact = function (ax) {
		var rx = [];
		for (var i = 0; i < ax.length; i++) {
			if (ax[i] instanceof Array) {
				rx = rx.concat(flattenAndCompact(ax[i]));
			} else {
				if (ax[i]) {
					rx.push(ax[i]);
				}
			}
		}
		return rx;
	};

	var parseMeridian = function () {
		if (this.meridian && (this.hour || this.hour === 0)) {
			if (this.meridian === "a" && this.hour > 11 && Date.Config.strict24hr){
				throw "Invalid hour and meridian combination";
			} else if (this.meridian === "p" && this.hour < 12 && Date.Config.strict24hr){
				throw "Invalid hour and meridian combination";
			} else if (this.meridian === "p" && this.hour < 12) {
				this.hour = this.hour + 12;
			} else if (this.meridian === "a" && this.hour === 12) {
				this.hour = 0;
			}
		}
	};

	var setDefaults = function () {
		var now = new Date();
		if ((this.hour || this.minute) && (!this.month && !this.year && !this.day)) {
			this.day = now.getDate();
		}

		if (!this.year) {
			this.year = now.getFullYear();
		}
		
		if (!this.month && this.month !== 0) {
			this.month = now.getMonth();
		}
		
		if (!this.day) {
			this.day = 1;
		}
		
		if (!this.hour) {
			this.hour = 0;
		}
		
		if (!this.minute) {
			this.minute = 0;
		}

		if (!this.second) {
			this.second = 0;
		}
		if (!this.millisecond) {
			this.millisecond = 0;
		}
	};

	var finishUtils = {
		getToday: function () {
			 if (this.now || "hour minute second".indexOf(this.unit) !== -1) {
				return new Date();
			} else {
				return $D.today();
			}
		},
		setDaysFromWeekday: function (today, orient){
			var gap;
			orient = orient || 1;
			this.unit = "day";
			gap = ($D.getDayNumberFromName(this.weekday) - today.getDay());
			this.days = gap ? ((gap + (orient * 7)) % 7) : (orient * 7);
			return this;
		},
		setMonthsFromMonth: function (today, orient) {
			var gap;
			orient = orient || 1;
			this.unit = "month";
			gap = (this.month - today.getMonth());
			this.months = gap ? ((gap + (orient * 12)) % 12) : (orient * 12);
			this.month = null;
			return this;
		},
		setDMYFromWeekday: function () {
			var d = Date[this.weekday]();
			this.day = d.getDate();
			if (!this.month) {
				this.month = d.getMonth();
			}
			this.year = d.getFullYear();
			return this;
		},
		setUnitValue: function (orient) {
			if (!this.value && this.operator && this.operator !== null && this[this.unit + "s"] && this[this.unit + "s"] !== null) {
				this[this.unit + "s"] = this[this.unit + "s"] + ((this.operator === "add") ? 1 : -1) + (this.value||0) * orient;
			} else if (this[this.unit + "s"] == null || this.operator != null) {
				if (!this.value) {
					this.value = 1;
				}
				this[this.unit + "s"] = this.value * orient;
			}
		},
		generateDateFromWeeks: function () {
			var weekday = (this.weekday !== undefined) ? this.weekday : "today";
			var d = Date[weekday]().addWeeks(this.weeks);
			if (this.now) {
				d.setTimeToNow();
			}
			return d;
		}
	};

	$D.Translator = {
		hour: function (s) {
			return function () {
				this.hour = Number(s);
			};
		},
		minute: function (s) {
			return function () {
				this.minute = Number(s);
			};
		},
		second: function (s) {
			return function () {
				this.second = Number(s);
			};
		},
		/* for ss.s format */
		secondAndMillisecond: function (s) {
			return function () {
				var mx = s.match(/^([0-5][0-9])\.([0-9]{1,3})/);
				this.second = Number(mx[1]);
				this.millisecond = Number(mx[2]);
			};
		},
		meridian: function (s) {
			return function () {
				this.meridian = s.slice(0, 1).toLowerCase();
			};
		},
		timezone: function (s) {
			return function () {
				var n = s.replace(/[^\d\+\-]/g, "");
				if (n.length) {
					this.timezoneOffset = Number(n);
				} else {
					this.timezone = s.toLowerCase();
				}
			};
		},
		day: function (x) {
			var s = x[0];
			return function () {
				this.day = Number(s.match(/\d+/)[0]);
				if (this.day < 1) {
					throw "invalid day";
				}
			};
		},
		month: function (s) {
			return function () {
				this.month = (s.length === 3) ? "jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s)/4 : Number(s) - 1;
				if (this.month < 0) {
					throw "invalid month";
				}
			};
		},
		year: function (s) {
			return function () {
				var n = Number(s);
				this.year = ((s.length > 2) ? n :
					(n + (((n + 2000) < Date.CultureInfo.twoDigitYearMax) ? 2000 : 1900)));
			};
		},
		rday: function (s) {
			return function () {
				switch (s) {
					case "yesterday":
						this.days = -1;
						break;
					case "tomorrow":
						this.days = 1;
						break;
					case "today":
						this.days = 0;
						break;
					case "now":
						this.days = 0;
						this.now = true;
						break;
				}
			};
		},
		finishExact: function (x) {
			var d;
			x = (x instanceof Array) ? x : [x];

			for (var i = 0 ; i < x.length ; i++) {
				if (x[i]) {
					x[i].call(this);
				}
			}
			
			setDefaults.call(this);
			parseMeridian.call(this);

			if (this.day > $D.getDaysInMonth(this.year, this.month)) {
				throw new RangeError(this.day + " is not a valid value for days.");
			}

			d = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
			if (this.year < 100) {
				d.setFullYear(this.year); // means years less that 100 are process correctly. JS will parse it otherwise as 1900-1999.
			}
			if (this.timezone) {
				d.set({ timezone: this.timezone });
			} else if (this.timezoneOffset) {
				d.set({ timezoneOffset: this.timezoneOffset });
			}
			
			return d;
		},
		finish: function (x) {
			var today, expression, orient, temp;

			x = (x instanceof Array) ? flattenAndCompact(x) : [ x ];

			if (x.length === 0) {
				return null;
			}

			for (var i = 0 ; i < x.length ; i++) {
				if (typeof x[i] === "function") {
					x[i].call(this);
				}
			}
			if (this.now && !this.unit && !this.operator) {
				return new Date();
			} else {
				today = finishUtils.getToday.call(this);
			}
			
			expression = !!(this.days && this.days !== null || this.orient || this.operator);
			orient = ((this.orient === "past" || this.operator === "subtract") ? -1 : 1);

			if (this.month && this.unit === "week") {
				this.value = this.month + 1;
				delete this.month;
				delete this.day;
			}

			if ((this.month || this.month === 0) && "year day hour minute second".indexOf(this.unit) !== -1) {
				if (!this.value) {
					this.value = this.month + 1;
				}
				this.month = null;
				expression = true;
			}

			if (!expression && this.weekday && !this.day && !this.days) {
				finishUtils.setDMYFromWeekday.call(this);
			}

			if (expression && this.weekday && this.unit !== "month" && this.unit !== "week") {
				finishUtils.setDaysFromWeekday.call(this, today, orient);
			}

			if (this.weekday && this.unit !== "week" && !this.day && !this.days) {
				temp = Date[this.weekday]();
				this.day = temp.getDate();
				if (temp.getMonth() !== today.getMonth()) {
					this.month = temp.getMonth();
				}
			}

			if (this.month && this.unit === "day" && this.operator) {
				if (!this.value) {
					this.value = (this.month + 1);
				}
				this.month = null;
			}

			if (this.value != null && this.month != null && this.year != null) {
				this.day = this.value * 1;
			}

			if (this.month && !this.day && this.value) {
				today.set({ day: this.value * 1 });
				if (!expression) {
					this.day = this.value * 1;
				}
			}

			if (!this.month && this.value && this.unit === "month" && !this.now) {
				this.month = this.value;
				expression = true;
			}

			if (expression && (this.month || this.month === 0) && this.unit !== "year") {
				finishUtils.setMonthsFromMonth.call(this, today, orient);
			}

			if (!this.unit) {
				this.unit = "day";
			}

			finishUtils.setUnitValue.call(this, orient);
			parseMeridian.call(this);
			
			if ((this.month || this.month === 0) && !this.day) {
				this.day = 1;
			}

			if (!this.orient && !this.operator && this.unit === "week" && this.value && !this.day && !this.month) {
				return Date.today().setWeek(this.value);
			}

			if (this.unit === "week" && this.weeks && !this.day && !this.month) {
				return finishUtils.generateDateFromWeeks.call(this);
			}

			if (expression && this.timezone && this.day && this.days) {
				this.day = this.days;
			}

			if (expression){
				today.add(this);
			} else {
				today.set(this);
			}
			
			if (this.timezone) {
				this.timezone = this.timezone.toUpperCase();
				var offset = $D.getTimezoneOffset(this.timezone);
				var timezone;
				if (today.hasDaylightSavingTime()) {
					// lets check that we're being sane with timezone setting
					timezone = $D.getTimezoneAbbreviation(offset, today.isDaylightSavingTime());
					if (timezone !== this.timezone) {
						// bugger, we're in a place where things like EST vs EDT matters.
						if (today.isDaylightSavingTime()) {
							today.addHours(-1);
						} else {
							today.addHours(1);
						}
					}
				}
				today.setTimezoneOffset(offset);
			}

			return today;
		}
	};
}());
(function () {
	var $D = Date;
	$D.Grammar = {};
	var _ = $D.Parsing.Operators, g = $D.Grammar, t = $D.Translator, _fn;
	// Allow rolling up into general purpose rules
	_fn = function () {
		return _.each(_.any.apply(null, arguments), _.not(g.ctoken2("timeContext")));
	};
	
	g.datePartDelimiter = _.rtoken(/^([\s\-\.\,\/\x27]+)/);
	g.timePartDelimiter = _.stoken(":");
	g.whiteSpace = _.rtoken(/^\s*/);
	g.generalDelimiter = _.rtoken(/^(([\s\,]|at|@|on)+)/);
  
	var _C = {};
	g.ctoken = function (keys) {
		var fn = _C[keys];
		if (! fn) {
			var c = Date.CultureInfo.regexPatterns;
			var kx = keys.split(/\s+/), px = [];
			for (var i = 0; i < kx.length ; i++) {
				px.push(_.replace(_.rtoken(c[kx[i]]), kx[i]));
			}
			fn = _C[keys] = _.any.apply(null, px);
		}
		return fn;
	};
	g.ctoken2 = function (key) {
		return _.rtoken(Date.CultureInfo.regexPatterns[key]);
	};
	var cacheProcessRtoken = function (key, token, type, eachToken) {
		if (eachToken) {
			g[key] = _.cache(_.process(_.each(_.rtoken(token),_.optional(g.ctoken2(eachToken))), type));
		} else {
			g[key] = _.cache(_.process(_.rtoken(token), type));
		}
	};
	var cacheProcessCtoken = function (token, type) {
		return _.cache(_.process(g.ctoken2(token), type));
	};
	var _F = {}; //function cache

	var _get = function (f) {
		_F[f] = (_F[f] || g.format(f)[0]);
		return _F[f];
	};

	g.allformats = function (fx) {
		var rx = [];
		if (fx instanceof Array) {
			for (var i = 0; i < fx.length; i++) {
				rx.push(_get(fx[i]));
			}
		} else {
			rx.push(_get(fx));
		}
		return rx;
	};
  
	g.formats = function (fx) {
		if (fx instanceof Array) {
			var rx = [];
			for (var i = 0 ; i < fx.length ; i++) {
				rx.push(_get(fx[i]));
			}
			return _.any.apply(null, rx);
		} else {
			return _get(fx);
		}
	};

	var grammarFormats = {
		 timeFormats: function(){
			var i,
			RTokenKeys = [
				"h",
				"hh",
				"H",
				"HH",
				"m",
				"mm",
				"s",
				"ss",
				"ss.s",
				"z",
				"zz"
			],
			RToken = [
				/^(0[0-9]|1[0-2]|[1-9])/,
				/^(0[0-9]|1[0-2])/,
				/^([0-1][0-9]|2[0-3]|[0-9])/,
				/^([0-1][0-9]|2[0-3])/,
				/^([0-5][0-9]|[0-9])/,
				/^[0-5][0-9]/,
				/^([0-5][0-9]|[0-9])/,
				/^[0-5][0-9]/,
				/^[0-5][0-9]\.[0-9]{1,3}/,
				/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/,
				/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/
			],
			tokens = [
				t.hour,
				t.hour,
				t.hour,
				t.minute,
				t.minute,
				t.second,
				t.second,
				t.secondAndMillisecond,
				t.timezone,
				t.timezone,
				t.timezone
			];

			for (i=0; i < RTokenKeys.length; i++) {
				cacheProcessRtoken(RTokenKeys[i], RToken[i], tokens[i]);
			}

			g.hms = _.cache(_.sequence([g.H, g.m, g.s], g.timePartDelimiter));

			g.t = cacheProcessCtoken("shortMeridian", t.meridian);
			g.tt = cacheProcessCtoken("longMeridian", t.meridian);
			g.zzz = cacheProcessCtoken("timezone", t.timezone);

			g.timeSuffix = _.each(_.ignore(g.whiteSpace), _.set([ g.tt, g.zzz ]));
			g.time = _.each(_.optional(_.ignore(_.stoken("T"))), g.hms, g.timeSuffix);
		 },
		 dateFormats: function () {
			// pre-loaded rules for different date part order preferences
			var _setfn = function () {
				return  _.set(arguments, g.datePartDelimiter);
			};
			var i,
			RTokenKeys = [
				"d",
				"dd",
				"M",
				"MM",
				"y",
				"yy",
				"yyy",
				"yyyy"
			],
			RToken = [
				/^([0-2]\d|3[0-1]|\d)/,
				/^([0-2]\d|3[0-1])/,
				/^(1[0-2]|0\d|\d)/,
				/^(1[0-2]|0\d)/,
				/^(\d+)/,
				/^(\d\d)/,
				/^(\d\d?\d?\d?)/,
				/^(\d\d\d\d)/
			],
			tokens = [
				t.day,
				t.day,
				t.month,
				t.month,
				t.year,
				t.year,
				t.year,
				t.year
			],
			eachToken = [
				"ordinalSuffix",
				"ordinalSuffix"
			];
			for (i=0; i < RTokenKeys.length; i++) {
				cacheProcessRtoken(RTokenKeys[i], RToken[i], tokens[i], eachToken[i]);
			}

			g.MMM = g.MMMM = _.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), t.month));
			g.ddd = g.dddd = _.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),
				function (s) {
					return function () {
						this.weekday = s;
					};
				}
			));

			g.day = _fn(g.d, g.dd);
			g.month = _fn(g.M, g.MMM);
			g.year = _fn(g.yyyy, g.yy);

			g.mdy = _setfn(g.ddd, g.month, g.day, g.year);
			g.ymd = _setfn(g.ddd, g.year, g.month, g.day);
			g.dmy = _setfn(g.ddd, g.day, g.month, g.year);
						
			g.date = function (s) {
				return ((g[Date.CultureInfo.dateElementOrder] || g.mdy).call(this, s));
			};
		 },
		 relative: function () {
			// relative date / time expressions
			g.orientation = _.process(g.ctoken("past future"),
				function (s) {
					return function () {
						this.orient = s;
					};
				}
			);

			g.operator = _.process(g.ctoken("add subtract"),
				function (s) {
					return function () {
						this.operator = s;
					};
				}
			);
			g.rday = _.process(g.ctoken("yesterday tomorrow today now"), t.rday);
			g.unit = _.process(g.ctoken("second minute hour day week month year"),
				function (s) {
					return function () {
						this.unit = s;
					};
				}
			);
		 }
	};

	g.buildGrammarFormats = function () {
		// these need to be rebuilt every time the language changes.
		_C = {};

		grammarFormats.timeFormats();
		grammarFormats.dateFormats();
		grammarFormats.relative();

		
		g.value = _.process(_.rtoken(/^([-+]?\d+)?(st|nd|rd|th)?/),
			function (s) {
				return function () {
					this.value = s.replace(/\D/g, "");
				};
			}
		);
		g.expression = _.set([g.rday, g.operator, g.value, g.unit, g.orientation, g.ddd, g.MMM ]);

		g.format = _.process(_.many(
			_.any(
				// translate format specifiers into grammar rules
				_.process(
					_.rtoken(/^(dd?d?d?(?!e)|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),
						function (fmt) {
							if (g[fmt]) {
								return g[fmt];
							} else {
								throw $D.Parsing.Exception(fmt);
							}
						}
					),
					// translate separator tokens into token rules
					_.process(_.rtoken(/^[^dMyhHmstz]+/), // all legal separators 
						function (s) {
							return _.ignore(_.stoken(s));
						}
					)
				)
			),
			// construct the parser ...
			function (rules) {
				return _.process(_.each.apply(null, rules), t.finishExact);
			}
		);

		// starting rule for general purpose grammar
		g._start = _.process(_.set([ g.date, g.time, g.expression ],
		g.generalDelimiter, g.whiteSpace), t.finish);
	};

	g.buildGrammarFormats();
	// parsing date format specifiers - ex: "h:m:s tt" 
	// this little guy will generate a custom parser based
	// on the format string, ex: g.format("h:m:s tt")
	// check for these formats first
	g._formats = g.formats([
		"\"yyyy-MM-ddTHH:mm:ssZ\"",
		"yyyy-MM-ddTHH:mm:ss.sz",
		"yyyy-MM-ddTHH:mm:ssZ",
		"yyyy-MM-ddTHH:mm:ssz",
		"yyyy-MM-ddTHH:mm:ss",
		"yyyy-MM-ddTHH:mmZ",
		"yyyy-MM-ddTHH:mmz",
		"yyyy-MM-ddTHH:mm",
		"ddd, MMM dd, yyyy H:mm:ss tt",
		"ddd MMM d yyyy HH:mm:ss zzz",
		"MMddyyyy",
		"ddMMyyyy",
		"Mddyyyy",
		"ddMyyyy",
		"Mdyyyy",
		"dMyyyy",
		"yyyy",
		"Mdyy",
		"dMyy",
		"d"
	]);
	
	// real starting rule: tries selected formats first, 
	// then general purpose rule
	g.start = function (s) {
		try {
			var r = g._formats.call({}, s);
			if (r[1].length === 0) {
				return r;
			}
		} catch (e) {}
		return g._start.call({}, s);
	};
}());
(function () {
	var $D = Date;

	/**
	 * @desc Converts the specified string value into its JavaScript Date equivalent using CultureInfo specific format information.
	 * 
	 * Example
	<pre><code>
	///////////
	// Dates //
	///////////

	// 15-Oct-2004
	var d1 = Date.parse("10/15/2004");

	// 15-Oct-2004
	var d1 = Date.parse("15-Oct-2004");

	// 15-Oct-2004
	var d1 = Date.parse("2004.10.15");

	//Fri Oct 15, 2004
	var d1 = Date.parse("Fri Oct 15, 2004");

	///////////
	// Times //
	///////////

	// Today at 10 PM.
	var d1 = Date.parse("10 PM");

	// Today at 10:30 PM.
	var d1 = Date.parse("10:30 P.M.");

	// Today at 6 AM.
	var d1 = Date.parse("06am");

	/////////////////////
	// Dates and Times //
	/////////////////////

	// 8-July-2004 @ 10:30 PM
	var d1 = Date.parse("July 8th, 2004, 10:30 PM");

	// 1-July-2004 @ 10:30 PM
	var d1 = Date.parse("2004-07-01T22:30:00");

	////////////////////
	// Relative Dates //
	////////////////////

	// Returns today's date. The string "today" is culture specific.
	var d1 = Date.parse("today");

	// Returns yesterday's date. The string "yesterday" is culture specific.
	var d1 = Date.parse("yesterday");

	// Returns the date of the next thursday.
	var d1 = Date.parse("Next thursday");

	// Returns the date of the most previous monday.
	var d1 = Date.parse("last monday");

	// Returns today's day + one year.
	var d1 = Date.parse("next year");

	///////////////
	// Date Math //
	///////////////

	// Today + 2 days
	var d1 = Date.parse("t+2");

	// Today + 2 days
	var d1 = Date.parse("today + 2 days");

	// Today + 3 months
	var d1 = Date.parse("t+3m");

	// Today - 1 year
	var d1 = Date.parse("today - 1 year");

	// Today - 1 year
	var d1 = Date.parse("t-1y"); 


	/////////////////////////////
	// Partial Dates and Times //
	/////////////////////////////

	// July 15th of this year.
	var d1 = Date.parse("July 15");

	// 15th day of current day and year.
	var d1 = Date.parse("15");

	// July 1st of current year at 10pm.
	var d1 = Date.parse("7/1 10pm");
	</code></pre>
	 *
	 * @param {String}   The string value to convert into a Date object [Required]
	 * @return {Date}    A Date object or null if the string cannot be converted into a Date.
	 */
	var parseUtils = {
		removeOrds: function (s) {
			ords = s.match(/\b(\d+)(?:st|nd|rd|th)\b/); // find ordinal matches
			s = ((ords && ords.length === 2) ? s.replace(ords[0], ords[1]) : s);
			return s;
		},
		grammarParser: function (s) {
			var r = null;
			try {
				r = $D.Grammar.start.call({}, s.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"));
			} catch (e) {
				return null;
			}
			
			return ((r[1].length === 0) ? r[0] : null);
		},
		nativeFallback: function(s) {
			var t;
			try {
				// ok we haven't parsed it, last ditch attempt with the built-in parser.
				t = Date._parse(s);
				return (t || t === 0) ? new Date(t) : null;
			} catch (e) {
				return null;
			}
		}
	};
	function parse (s) {
		var d;
		if (!s) {
			return null;
		}
		if (s instanceof Date) {
			return s.clone();
		}
		if (s.length >= 4 && s.charAt(0) !== "0" && s.charAt(0) !== "+"&& s.charAt(0) !== "-") { // ie: 2004 will pass, 0800 won't.
			//  Start with specific formats
			d = $D.Parsing.ISO.parse(s) || $D.Parsing.Numeric.parse(s);
		}
		if (d instanceof Date && !isNaN(d.getTime())) {
			return d;
		} else {
			// find ordinal dates (1st, 3rd, 8th, etc and remove them as they cause parsing issues)
			s = $D.Parsing.Normalizer.parse(parseUtils.removeOrds(s));
			d = parseUtils.grammarParser(s);
			if (d !== null) {
				return d;
			} else {
				return parseUtils.nativeFallback(s);
			}
		}
	}

	if (!$D._parse) {
		$D._parse = $D.parse;
	}
	$D.parse = parse;

	Date.getParseFunction = function (fx) {
		var fns = Date.Grammar.allformats(fx);
		return function (s) {
			var r = null;
			for (var i = 0; i < fns.length; i++) {
				try {
					r = fns[i].call({}, s);
				} catch (e) {
					continue;
				}
				if (r[1].length === 0) {
					return r[0];
				}
			}
			return null;
		};
	};
	
	/**
	 * Converts the specified string value into its JavaScript Date equivalent using the specified format {String} or formats {Array} and the CultureInfo specific format information.
	 * The format of the string value must match one of the supplied formats exactly.
	 * 
	 * Example
	<pre><code>
	// 15-Oct-2004
	var d1 = Date.parseExact("10/15/2004", "M/d/yyyy");

	// 15-Oct-2004
	var d1 = Date.parse("15-Oct-2004", "M-ddd-yyyy");

	// 15-Oct-2004
	var d1 = Date.parse("2004.10.15", "yyyy.MM.dd");

	// Multiple formats
	var d1 = Date.parseExact("10/15/2004", ["M/d/yyyy", "MMMM d, yyyy"]);
	</code></pre>
	 *
	 * @param {String}   The string value to convert into a Date object [Required].
	 * @param {Object}   The expected format {String} or an array of expected formats {Array} of the date string [Required].
	 * @return {Date}    A Date object or null if the string cannot be converted into a Date.
	 */
	$D.parseExact = function (s, fx) {
		return $D.getParseFunction(fx)(s);
	};
}());

(function () {
	var $D = Date,
		$P = $D.prototype,
		// $C = $D.CultureInfo, // not used atm
		p = function (s, l) {
			if (!l) {
				l = 2;
			}
			return ("000" + s).slice(l * -1);
		};
	/**
	 * Converts a PHP format string to Java/.NET format string.
	 * A PHP format string can be used with ._format or .format.
	 * A Java/.NET format string can be used with .toString().
	 * The .parseExact function will only accept a Java/.NET format string
	 *
	 * Example
	 * var f1 = "%m/%d/%y"
	 * var f2 = Date.normalizeFormat(f1);	// "MM/dd/yy"
	 *
	 * new Date().format(f1);	// "04/13/08"
	 * new Date()._format(f1);	// "04/13/08"
	 * new Date().toString(f2);	// "04/13/08"
	 *
	 * var date = Date.parseExact("04/13/08", f2); // Sun Apr 13 2008
	 *
	 * @param {String}   A PHP format string consisting of one or more format spcifiers.
	 * @return {String}  The PHP format converted to a Java/.NET format string.
	 */
	 var normalizerSubstitutions = {
		"d" : "dd",
		"%d": "dd",
		"D" : "ddd",
		"%a": "ddd",
		"j" : "dddd",
		"l" : "dddd",
		"%A": "dddd",
		"S" : "S",
		"F" : "MMMM",
		"%B": "MMMM",
		"m" : "MM",
		"%m": "MM",
		"M" : "MMM",
		"%b": "MMM",
		"%h": "MMM",
		"n" : "M",
		"Y" : "yyyy",
		"%Y": "yyyy",
		"y" : "yy",
		"%y": "yy",
		"g" : "h",
		"%I": "h",
		"G" : "H",
		"h" : "hh",
		"H" : "HH",
		"%H": "HH",
		"i" : "mm",
		"%M": "mm",
		"s" : "ss",
		"%S": "ss",
		"%r": "hh:mm tt",
		"%R": "H:mm",
		"%T": "H:mm:ss",
		"%X": "t",
		"%x": "d",
		"%e": "d",
		"%D": "MM/dd/yy",
		"%n": "\\n",
		"%t": "\\t",
		"e" : "z",
		"T" : "z",
		"%z": "z",
		"%Z": "z",
		"Z" : "ZZ",
		"N" : "u",
		"w" : "u",
		"%w": "u",
		"W" : "W",
		"%V": "W"
	};
	var normalizer = {
		substitutes: function (m) {
			return normalizerSubstitutions[m];
		},
		interpreted: function (m, x) {
			var y;
			switch (m) {
				case "%u":
					return x.getDay() + 1;
				case "z":
					return x.getOrdinalNumber();
				case "%j":
					return p(x.getOrdinalNumber(), 3);
				case "%U":
					var d1 = x.clone().set({month: 0, day: 1}).addDays(-1).moveToDayOfWeek(0),
						d2 = x.clone().addDays(1).moveToDayOfWeek(0, -1);
					return (d2 < d1) ? "00" : p((d2.getOrdinalNumber() - d1.getOrdinalNumber()) / 7 + 1);

				case "%W":
					return p(x.getWeek());
				case "t":
					return $D.getDaysInMonth(x.getFullYear(), x.getMonth());
				case "o":
				case "%G":
					return x.setWeek(x.getISOWeek()).toString("yyyy");
				case "%g":
					return x._format("%G").slice(-2);
				case "a":
				case "%p":
					return t("tt").toLowerCase();
				case "A":
					return t("tt").toUpperCase();
				case "u":
					return p(x.getMilliseconds(), 3);
				case "I":
					return (x.isDaylightSavingTime()) ? 1 : 0;
				case "O":
					return x.getUTCOffset();
				case "P":
					y = x.getUTCOffset();
					return y.substring(0, y.length - 2) + ":" + y.substring(y.length - 2);
				case "B":
					var now = new Date();
					return Math.floor(((now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds() + (now.getTimezoneOffset() + 60) * 60) / 86.4);
				case "c":
					return x.toISOString().replace(/\"/g, "");
				case "U":
					return $D.strtotime("now");
				case "%c":
					return t("d") + " " + t("t");
				case "%C":
					return Math.floor(x.getFullYear() / 100 + 1);
			}
		},
		shouldOverrideDefaults: function (m) {
			switch (m) {
				case "%e":
					return true;
				default:
					return false;
			}
		},
		parse: function (m, context) {
			var formatString, c = context || new Date();
			formatString = normalizer.substitutes(m);
			if (formatString) {
				return formatString;
			}
			formatString = normalizer.interpreted(m, c);

			if (formatString) {
				return formatString;
			} else {
				return m;
			}
		}
	};

	$D.normalizeFormat = function (format, context) {
		return format.replace(/(%|\\)?.|%%/g, function(t){
				return normalizer.parse(t, context);
		});
	};
	/**
	 * Format a local Unix timestamp according to locale settings
	 *
	 * Example:
	 * Date.strftime("%m/%d/%y", new Date());		// "04/13/08"
	 * Date.strftime("c", "2008-04-13T17:52:03Z");	// "04/13/08"
	 *
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @param {Number|String}   The number representing the number of seconds that have elapsed since January 1, 1970 (local time).
	 * @return {String}  A string representation of the current Date object.
	 */
	$D.strftime = function (format, time) {
		var d = Date.parse(time);
		return d._format(format);
	};
	/**
	 * Parse any textual datetime description into a Unix timestamp.
	 * A Unix timestamp is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT).
	 *
	 * Example:
	 * Date.strtotime("04/13/08");				// 1208044800
	 * Date.strtotime("1970-01-01T00:00:00Z");	// 0
	 *
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @param {Object}   A string or date object.
	 * @return {String}  A string representation of the current Date object.
	 */
	$D.strtotime = function (time) {
		var d = $D.parse(time);
		return Math.round($D.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()) / 1000);
	};
	/**
	 * Converts the value of the current Date object to its equivalent string representation using a PHP/Unix style of date format specifiers.
	 * Format Specifiers
	 * Format  Description																	Example
	 * ------  ---------------------------------------------------------------------------	-----------------------
	 * %a		abbreviated weekday name according to the current localed					"Mon" through "Sun"
	 * %A		full weekday name according to the current localed							"Sunday" through "Saturday"
	 * %b		abbreviated month name according to the current localed						"Jan" through "Dec"
	 * %B		full month name according to the current locale								"January" through "December"
	 * %c		preferred date and time representation for the current locale				"4/13/2008 12:33 PM"
	 * %C		century number (the year divided by 100 and truncated to an integer)		"00" to "99"
	 * %d		day of the month as a decimal number										"01" to "31"
	 * %D		same as %m/%d/%y															"04/13/08"
	 * %e		day of the month as a decimal number, a single digit is preceded by a space	"1" to "31"
	 * %g		like %G, but without the century											"08"
	 * %G		The 4-digit year corresponding to the ISO week number (see %V).				"2008"
	 *		This has the same format and value as %Y, except that if the ISO week number
	 *		belongs to the previous or next year, that year is used instead.
	 * %h		same as %b																	"Jan" through "Dec"
	 * %H		hour as a decimal number using a 24-hour clock.								"00" to "23"
	 * %I		hour as a decimal number using a 12-hour clock.								"01" to "12"
	 * %j		day of the year as a decimal number.										"001" to "366"
	 * %m		month as a decimal number.													"01" to "12"
	 * %M		minute as a decimal number.													"00" to "59"
	 * %n		newline character		"\n"
	 * %p		either "am" or "pm" according to the given time value, or the				"am" or "pm"
	 *		corresponding strings for the current locale.
	 * %r		time in a.m. and p.m. notation												"8:44 PM"
	 * %R		time in 24 hour notation													"20:44"
	 * %S		second as a decimal number													"00" to "59"
	 * %t		tab character																"\t"
	 * %T		current time, equal to %H:%M:%S												"12:49:11"
	 * %u		weekday as a decimal number ["1", "7"], with "1" representing Monday		"1" to "7"
	 * %U		week number of the current year as a decimal number, starting with the		"0" to ("52" or "53")
	 *		first Sunday as the first day of the first week
	 * %V		The ISO 8601:1988 week number of the current year as a decimal number,		"00" to ("52" or "53")
	 *		range 01 to 53, where week 1 is the first week that has at least 4 days
	 *		in the current year, and with Monday as the first day of the week.
	 *		(Use %G or %g for the year component that corresponds to the week number
	 *		for the specified timestamp.)
	 * %W		week number of the current year as a decimal number, starting with the		"00" to ("52" or "53")
	 *		first Monday as the first day of the first week
	 * %w		day of the week as a decimal, Sunday being "0"								"0" to "6"
	 * %x		preferred date representation for the current locale without the time		"4/13/2008"
	 * %X		preferred time representation for the current locale without the date		"12:53:05"
	 * %y		year as a decimal number without a century									"00" "99"
	 * %Y		year as a decimal number including the century								"2008"
	 * %Z		time zone or name or abbreviation											"UTC", "EST", "PST"
	 * %z		same as %Z
	 * %%		a literal "%" characters													"%"
	 * d		Day of the month, 2 digits with leading zeros								"01" to "31"
	 * D		A textual representation of a day, three letters							"Mon" through "Sun"
	 * j		Day of the month without leading zeros										"1" to "31"
	 * l		A full textual representation of the day of the week (lowercase "L")		"Sunday" through "Saturday"
	 * N		ISO-8601 numeric representation of the day of the week (added in PHP 5.1.0)	"1" (for Monday) through "7" (for Sunday)
	 * S		English ordinal suffix for the day of the month, 2 characters				"st", "nd", "rd" or "th". Works well with j
	 * w		Numeric representation of the day of the week								"0" (for Sunday) through "6" (for Saturday)
	 * z		The day of the year (starting from "0")										"0" through "365"
	 * W		ISO-8601 week number of year, weeks starting on Monday						"00" to ("52" or "53")
	 * F		A full textual representation of a month, such as January or March			"January" through "December"
	 * m		Numeric representation of a month, with leading zeros						"01" through "12"
	 * M		A short textual representation of a month, three letters					"Jan" through "Dec"
	 * n		Numeric representation of a month, without leading zeros					"1" through "12"
	 * t		Number of days in the given month											"28" through "31"
	 * L		Whether it's a leap year													"1" if it is a leap year, "0" otherwise
	 * o		ISO-8601 year number. This has the same value as Y, except that if the		"2008"
	 *		ISO week number (W) belongs to the previous or next year, that year
	 *		is used instead.
	 * Y		A full numeric representation of a year, 4 digits							"2008"
	 * y		A two digit representation of a year										"08"
	 * a		Lowercase Ante meridiem and Post meridiem									"am" or "pm"
	 * A		Uppercase Ante meridiem and Post meridiem									"AM" or "PM"
	 * B		Swatch Internet time														"000" through "999"
	 * g		12-hour format of an hour without leading zeros								"1" through "12"
	 * G		24-hour format of an hour without leading zeros								"0" through "23"
	 * h		12-hour format of an hour with leading zeros								"01" through "12"
	 * H		24-hour format of an hour with leading zeros								"00" through "23"
	 * i		Minutes with leading zeros													"00" to "59"
	 * s		Seconds, with leading zeros													"00" through "59"
	 * u		Milliseconds																"54321"
	 * e		Timezone identifier															"UTC", "EST", "PST"
	 * I		Whether or not the date is in daylight saving time (uppercase i)			"1" if Daylight Saving Time, "0" otherwise
	 * O		Difference to Greenwich time (GMT) in hours									"+0200", "-0600"
	 * P		Difference to Greenwich time (GMT) with colon between hours and minutes		"+02:00", "-06:00"
	 * T		Timezone abbreviation														"UTC", "EST", "PST"
	 * Z		Timezone offset in seconds. The offset for timezones west of UTC is			"-43200" through "50400"
	 *			always negative, and for those east of UTC is always positive.
	 * c		ISO 8601 date																"2004-02-12T15:19:21+00:00"
	 * r		RFC 2822 formatted date														"Thu, 21 Dec 2000 16:01:07 +0200"
	 * U		Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)					"0"
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @return {String}  A string representation of the current Date object.
	 */
	var formatReplace = function (context) {
		return function (m) {
			var formatString, override = false;
			if (m.charAt(0) === "\\" || m.substring(0, 2) === "%%") {
				return m.replace("\\", "").replace("%%", "%");
			}

			override = normalizer.shouldOverrideDefaults(m);
			formatString = $D.normalizeFormat(m, context);
			if (formatString) {
				return context.toString(formatString, override);
			}
		};
	};
	$P._format = function (format) {
		var formatter = formatReplace(this);
		if (!format) {
			return this._toString();
		} else {
			return format.replace(/(%|\\)?.|%%/g, formatter);
		}
	};

	if (!$P.format) {
		$P.format = $P._format;
	}
}());
(function () {
	"use strict";
	var gFn = function (attr) {
		return function () {
			return this[attr];
		};
	};
	
	var sFn = function (attr) {
		return function (val) {
			this[attr] = val;
			return this;
		};
	};
	var attrs = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"];
	var addSetFuncs = function (context, attrs) {
		for (var i = 0; i < attrs.length ; i++) {
			var $a = attrs[i], $b = $a.slice(0, 1).toUpperCase() + $a.slice(1);
			context.prototype[$a] = 0;
			context.prototype["get" + $b] = gFn($a);
			context.prototype["set" + $b] = sFn($a);
		}
	};
	/**
	 * new TimeSpan(milliseconds);
	 * new TimeSpan(days, hours, minutes, seconds);
	 * new TimeSpan(days, hours, minutes, seconds, milliseconds);
	 */
	var TimeSpan = function (days, hours, minutes, seconds, milliseconds) {
		if (arguments.length === 1 && typeof days === "number") {
			var orient = (days < 0) ? -1 : +1;
			var millsLeft = Math.abs(days);
			this.setDays(Math.floor(millsLeft / 86400000) * orient);
			millsLeft = millsLeft % 86400000;
			this.setHours(Math.floor(millsLeft / 3600000) * orient);
			millsLeft = millsLeft % 3600000;
			this.setMinutes(Math.floor(millsLeft / 60000) * orient);
			millsLeft = millsLeft % 60000;
			this.setSeconds(Math.floor(millsLeft / 1000) * orient);
			millsLeft = millsLeft % 1000;
			this.setMilliseconds(millsLeft * orient);
		} else {
			this.set(days, hours, minutes, seconds, milliseconds);
		}

		this.getTotalMilliseconds = function () {
			return	(this.getDays() * 86400000) +
					(this.getHours() * 3600000) +
					(this.getMinutes() * 60000) +
					(this.getSeconds() * 1000);
		};
		
		this.compareTo = function (time) {
			var t1 = new Date(1970, 1, 1, this.getHours(), this.getMinutes(), this.getSeconds()), t2;
			if (time === null) {
				t2 = new Date(1970, 1, 1, 0, 0, 0);
			}
			else {
				t2 = new Date(1970, 1, 1, time.getHours(), time.getMinutes(), time.getSeconds());
			}
			return (t1 < t2) ? -1 : (t1 > t2) ? 1 : 0;
		};

		this.equals = function (time) {
			return (this.compareTo(time) === 0);
		};

		this.add = function (time) {
			return (time === null) ? this : this.addSeconds(time.getTotalMilliseconds() / 1000);
		};

		this.subtract = function (time) {
			return (time === null) ? this : this.addSeconds(-time.getTotalMilliseconds() / 1000);
		};

		this.addDays = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 86400000));
		};

		this.addHours = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 3600000));
		};

		this.addMinutes = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 60000));
		};

		this.addSeconds = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 1000));
		};

		this.addMilliseconds = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + n);
		};

		this.get12HourHour = function () {
			return (this.getHours() > 12) ? this.getHours() - 12 : (this.getHours() === 0) ? 12 : this.getHours();
		};

		this.getDesignator = function () {
			return (this.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
		};

		this.toString = function (format) {
			this._toString = function () {
				if (this.getDays() !== null && this.getDays() > 0) {
					return this.getDays() + "." + this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds());
				} else {
					return this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds());
				}
			};
			
			this.p = function (s) {
				return (s.toString().length < 2) ? "0" + s : s;
			};
			
			var me = this;
			
			return format ? format.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g,
			function (format) {
				switch (format) {
				case "d":
					return me.getDays();
				case "dd":
					return me.p(me.getDays());
				case "H":
					return me.getHours();
				case "HH":
					return me.p(me.getHours());
				case "h":
					return me.get12HourHour();
				case "hh":
					return me.p(me.get12HourHour());
				case "m":
					return me.getMinutes();
				case "mm":
					return me.p(me.getMinutes());
				case "s":
					return me.getSeconds();
				case "ss":
					return me.p(me.getSeconds());
				case "t":
					return ((me.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator).substring(0, 1);
				case "tt":
					return (me.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
				}
			}
			) : this._toString();
		};
		return this;
	};
	addSetFuncs(TimeSpan, attrs.slice(2));
	TimeSpan.prototype.set = function (days, hours, minutes, seconds, milliseconds){
		this.setDays(days || this.getDays());
		this.setHours(hours || this.getHours());
		this.setMinutes(minutes || this.getMinutes());
		this.setSeconds(seconds || this.getSeconds());
		this.setMilliseconds(milliseconds || this.getMilliseconds());
	};


	/**
	 * Gets the time of day for this date instances. 
	 * @return {TimeSpan} TimeSpan
	 */
	Date.prototype.getTimeOfDay = function () {
		return new TimeSpan(0, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
	};

	Date.TimeSpan = TimeSpan;

	if (typeof window !== "undefined" ) {
		// keeping API compatible for v1.x 
		window.TimeSpan = TimeSpan;
	}
}());
(function () {
	"use strict";
	var attrs = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"];
	var gFn = function (attr) {
		return function () {
			return this[attr];
		};
	};
	
	var sFn = function (attr) {
		return function (val) {
			this[attr] = val;
			return this;
		};
	};
	var addSetFuncs = function (context, attrs) {
		for (var i = 0; i < attrs.length ; i++) {
			var $a = attrs[i], $b = $a.slice(0, 1).toUpperCase() + $a.slice(1);
			context.prototype[$a] = 0;
			context.prototype["get" + $b] = gFn($a);
			context.prototype["set" + $b] = sFn($a);
		}
	};

	var setMonthsAndYears = function (orient, d1, d2, context) {
		function inc() {
			d1.addMonths(-orient);
			context.months++;
			if (context.months === 12) {
				context.years++;
				context.months = 0;
			}
		}
		if (orient === +1) {
			while (d1 > d2) {
				inc();
			}
		} else {
			while (d1 < d2) {
				inc();
			}
		}
		context.months--;
		context.months *= orient;
		context.years *= orient;
	};

	var adjustForDST = function(orient, startDate, endDate) {
		var hasDSTMismatch = (false === (startDate.isDaylightSavingTime() === endDate.isDaylightSavingTime()));
		if (hasDSTMismatch && orient === 1) {
			startDate.addHours(-1);
		} else if (hasDSTMismatch) {
			startDate.addHours(1);
		}
	};
	/**
	 * TimePeriod(startDate, endDate);
	 * TimePeriod(years, months, days, hours, minutes, seconds, milliseconds);
	 */
	var TimePeriod = function (years, months, days, hours, minutes, seconds, milliseconds) {
		if (arguments.length === 7) {
			this.set(years, months, days, hours, minutes, seconds, milliseconds);
		} else if (arguments.length === 2 && arguments[0] instanceof Date && arguments[1] instanceof Date) {
			var startDate = arguments[0].clone();
			var endDate = arguments[1].clone();
			var orient = (startDate > endDate) ? +1 : -1;
			this.dates = {
				start: arguments[0].clone(),
				end: arguments[1].clone()
			};

			setMonthsAndYears(orient, startDate, endDate, this);
			adjustForDST(orient, startDate, endDate);
			// // TODO - adjust for DST
			var diff = endDate - startDate;
			if (diff !== 0) {
				var ts = new TimeSpan(diff);
				this.set(this.years, this.months, ts.getDays(), ts.getHours(), ts.getMinutes(), ts.getSeconds(), ts.getMilliseconds());
			}
		}
		return this;
	};
	// create all the set functions.
	addSetFuncs(TimePeriod, attrs);
	TimePeriod.prototype.set = function (years, months, days, hours, minutes, seconds, milliseconds){
		this.setYears(years || this.getYears());
		this.setMonths(months || this.getMonths());
		this.setDays(days || this.getDays());
		this.setHours(hours || this.getHours());
		this.setMinutes(minutes || this.getMinutes());
		this.setSeconds(seconds || this.getSeconds());
		this.setMilliseconds(milliseconds || this.getMilliseconds());
	};

	Date.TimePeriod = TimePeriod;

	if (typeof window !== "undefined") {
		// keeping API compatible for v1.x 
		window.TimePeriod = TimePeriod;
	}
}());
/** 
 * jsPDF - PDF Document creation from JavaScript
 * Version 1.0.272-git Built on 2014-09-29T15:09
 *                           CommitID d4770725ca
 *
 * Copyright (c) 2010-2014 James Hall, https://github.com/MrRio/jsPDF
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, willow-systems.com
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth,
 */
/**
 * jsPDF addHTML PlugIn
 * Copyright (c) 2014 Diego Casorran
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
/** 
 * jsPDF addImage plugin
 * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
 *               2013 Chris Dowling, https://github.com/gingerchris
 *               2013 Trinh Ho, https://github.com/ineedfat
 *               2013 Edwin Alejandro Perez, https://github.com/eaparango
 *               2013 Norah Smith, https://github.com/burnburnrocket
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 James Robb, https://github.com/jamesbrobb
 */
/**
 * jsPDF Cell plugin
 * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
 *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Hall, james@parall.ax
 *               2014 Diego Casorran, https://github.com/diegocr
 */
/** 
 * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Daniel Husar, https://github.com/danielhusar
 *               2014 Wolfgang Gassler, https://github.com/woolfg
 */
/** 
 * jsPDF JavaScript plugin
 * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
 */
/** 
 * jsPDF PNG PlugIn
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 */
/** 
jsPDF Silly SVG plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
*/
/** 
 * jsPDF split_text_to_size plugin - MIT license.
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 *               2014 Diego Casorran, https://github.com/diegocr
 */
/**  
jsPDF standard_fonts_metrics plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
MIT license.
*/
/** 
 * jsPDF total_pages plugin
 * Copyright (c) 2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
 */
/* Blob.js
 * A Blob implementation.
 * 2014-07-24
 * By Eli Grey, http://eligrey.com
 * By Devin Samarin, https://github.com/dsamarin
 * License: X11/MIT
 *   See https://github.com/eligrey/Blob.js/blob/master/LICENSE.md
 */
/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 2014-08-29
 * By Eli Grey, http://eligrey.com
 * License: X11/MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */
/*
 * Copyright (c) 2012 chick307 <chick307@gmail.com>
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
/*
 Deflate.js - https://github.com/gildas-lormeau/zip.js
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:
 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.
 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.
 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
/*
# PNG.js
# Copyright (c) 2011 Devon Govett
# MIT LICENSE
# 
*/
/*
 * Extracted from pdf.js
 * https://github.com/andreasgal/pdf.js
 * Copyright (c) 2011 Mozilla Foundation
 * Contributors: Andreas Gal <gal@mozilla.com>
 *               Chris G Jones <cjones@mozilla.com>
 *               Shaon Barman <shaon.barman@gmail.com>
 *               Vivien Nicolas <21@vingtetun.org>
 *               Justin D'Arcangelo <justindarc@gmail.com>
 *               Yury Delendik
 */
/**
 * JavaScript Polyfill functions for jsPDF
 * Collected from public resources by
 * https://github.com/diegocr
 */
!function(t,e){e["true"]=t;var n=function(t){"use strict";function e(e){var n={};this.subscribe=function(t,e,r){if("function"!=typeof e)return!1;n.hasOwnProperty(t)||(n[t]={});var s=Math.random().toString(35);return n[t][s]=[e,!!r],s},this.unsubscribe=function(t){for(var e in n)if(n[e][t])return delete n[e][t],!0;return!1},this.publish=function(r){if(n.hasOwnProperty(r)){var s=Array.prototype.slice.call(arguments,1),i=[];for(var o in n[r]){var a=n[r][o];try{a[0].apply(e,s)}catch(u){t.console&&console.error("jsPDF PubSub Error",u.message,u)}a[1]&&i.push(o)}i.length&&i.forEach(this.unsubscribe)}}}function n(a,u,c,l){var f={};"object"==typeof a&&(f=a,a=f.orientation,u=f.unit||u,c=f.format||c,l=f.compress||f.compressPdf||l),u=u||"mm",c=c||"a4",a=(""+(a||"P")).toLowerCase();var d,h,p,m,w,g,y,v,b,q=((""+c).toLowerCase(),!!l&&"function"==typeof Uint8Array),x=f.textColor||"0 g",k=f.drawColor||"0 G",_=f.fontSize||16,A=f.lineHeight||1.15,C=f.lineWidth||.200025,S=2,E=!1,z=[],T={},I={},B=0,O=[],P={},R=[],F=0,D=0,U=0,N={title:"",subject:"",author:"",keywords:"",creator:""},L={},j=new e(L),M=function(t){return t.toFixed(2)},H=function(t){return t.toFixed(3)},G=function(t){return("0"+parseInt(t)).slice(-2)},W=function(t){E?O[m].push(t):(U+=t.length+1,R.push(t))},V=function(){return S++,z[S]=U,W(S+" 0 obj"),S},J=function(t){W("stream"),W(t),W("endstream")},X=function(){var e,r,i,o,a,u,c,l,f;for(c=t.adler32cs||n.adler32cs,q&&"undefined"==typeof c&&(q=!1),e=1;B>=e;e++){if(V(),l=(w=P[e].width)*h,f=(g=P[e].height)*h,W("<</Type /Page"),W("/Parent 1 0 R"),W("/Resources 2 0 R"),W("/MediaBox [0 0 "+M(l)+" "+M(f)+"]"),W("/Contents "+(S+1)+" 0 R>>"),W("endobj"),r=O[e].join("\n"),V(),q){for(i=[],o=r.length;o--;)i[o]=r.charCodeAt(o);u=c.from(r),a=new s(6),a.append(new Uint8Array(i)),r=a.flush(),i=new Uint8Array(r.length+6),i.set(new Uint8Array([120,156])),i.set(r,2),i.set(new Uint8Array([255&u,u>>8&255,u>>16&255,u>>24&255]),r.length+2),r=String.fromCharCode.apply(null,i),W("<</Length "+r.length+" /Filter [/FlateDecode]>>")}else W("<</Length "+r.length+">>");J(r),W("endobj")}z[1]=U,W("1 0 obj"),W("<</Type /Pages");var d="/Kids [";for(o=0;B>o;o++)d+=3+2*o+" 0 R ";W(d+"]"),W("/Count "+B),W(">>"),W("endobj")},Y=function(t){t.objectNumber=V(),W("<</BaseFont/"+t.PostScriptName+"/Type/Font"),"string"==typeof t.encoding&&W("/Encoding/"+t.encoding),W("/Subtype/Type1>>"),W("endobj")},K=function(){for(var t in T)T.hasOwnProperty(t)&&Y(T[t])},Q=function(){j.publish("putXobjectDict")},$=function(){W("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),W("/Font <<");for(var t in T)T.hasOwnProperty(t)&&W("/"+t+" "+T[t].objectNumber+" 0 R");W(">>"),W("/XObject <<"),Q(),W(">>")},Z=function(){K(),j.publish("putResources"),z[2]=U,W("2 0 obj"),W("<<"),$(),W(">>"),W("endobj"),j.publish("postPutResources")},te=function(t,e,n){I.hasOwnProperty(e)||(I[e]={}),I[e][n]=t},ee=function(t,e,n,r){var s="F"+(Object.keys(T).length+1).toString(10),i=T[s]={id:s,PostScriptName:t,fontName:e,fontStyle:n,encoding:r,metadata:{}};return te(s,e,n),j.publish("addFont",i),s},ne=function(){for(var t="helvetica",e="times",n="courier",r="normal",s="bold",i="italic",o="bolditalic",a="StandardEncoding",u=[["Helvetica",t,r],["Helvetica-Bold",t,s],["Helvetica-Oblique",t,i],["Helvetica-BoldOblique",t,o],["Courier",n,r],["Courier-Bold",n,s],["Courier-Oblique",n,i],["Courier-BoldOblique",n,o],["Times-Roman",e,r],["Times-Bold",e,s],["Times-Italic",e,i],["Times-BoldItalic",e,o]],c=0,l=u.length;l>c;c++){var f=ee(u[c][0],u[c][1],u[c][2],a),d=u[c][0].split("-");te(f,d[0],d[1]||"")}j.publish("addFonts",{fonts:T,dictionary:I})},re=function(e){return e.foo=function(){try{return e.apply(this,arguments)}catch(n){var r=n.stack||"";~r.indexOf(" at ")&&(r=r.split(" at ")[1]);var s="Error in function "+r.split("\n")[0].split("<")[0]+": "+n.message;if(!t.console)throw new Error(s);t.console.error(s,n),t.alert&&alert(s)}},e.foo.bar=e,e.foo},se=function(t,e){var n,r,s,i,o,a,u,c,l;if(e=e||{},s=e.sourceEncoding||"Unicode",o=e.outputEncoding,(e.autoencode||o)&&T[d].metadata&&T[d].metadata[s]&&T[d].metadata[s].encoding&&(i=T[d].metadata[s].encoding,!o&&T[d].encoding&&(o=T[d].encoding),!o&&i.codePages&&(o=i.codePages[0]),"string"==typeof o&&(o=i[o]),o)){for(u=!1,a=[],n=0,r=t.length;r>n;n++)c=o[t.charCodeAt(n)],a.push(c?String.fromCharCode(c):t[n]),a[n].charCodeAt(0)>>8&&(u=!0);t=a.join("")}for(n=t.length;void 0===u&&0!==n;)t.charCodeAt(n-1)>>8&&(u=!0),n--;if(!u)return t;for(a=e.noBOM?[]:[254,255],n=0,r=t.length;r>n;n++){if(c=t.charCodeAt(n),l=c>>8,l>>8)throw new Error("Character at position "+n+" of string '"+t+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");a.push(l),a.push(c-(l<<8))}return String.fromCharCode.apply(void 0,a)},ie=function(t,e){return se(t,e).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},oe=function(){W("/Producer (jsPDF "+n.version+")");for(var t in N)N.hasOwnProperty(t)&&N[t]&&W("/"+t.substr(0,1).toUpperCase()+t.substr(1)+" ("+ie(N[t])+")");var e=new Date,r=e.getTimezoneOffset(),s=0>r?"+":"-",i=Math.floor(Math.abs(r/60)),o=Math.abs(r%60),a=[s,G(i),"'",G(o),"'"].join("");W(["/CreationDate (D:",e.getFullYear(),G(e.getMonth()+1),G(e.getDate()),G(e.getHours()),G(e.getMinutes()),G(e.getSeconds()),a,")"].join(""))},ae=function(){switch(W("/Type /Catalog"),W("/Pages 1 0 R"),v||(v="fullwidth"),v){case"fullwidth":W("/OpenAction [3 0 R /FitH null]");break;case"fullheight":W("/OpenAction [3 0 R /FitV null]");break;case"fullpage":W("/OpenAction [3 0 R /Fit]");break;case"original":W("/OpenAction [3 0 R /XYZ null null 1]");break;default:var t=""+v;"%"===t.substr(t.length-1)&&(v=parseInt(v)/100),"number"==typeof v&&W("/OpenAction [3 0 R /XYZ null null "+M(v)+"]")}switch(b||(b="continuous"),b){case"continuous":W("/PageLayout /OneColumn");break;case"single":W("/PageLayout /SinglePage");break;case"two":case"twoleft":W("/PageLayout /TwoColumnLeft");break;case"tworight":W("/PageLayout /TwoColumnRight")}y&&W("/PageMode /"+y),j.publish("putCatalog")},ue=function(){W("/Size "+(S+1)),W("/Root "+S+" 0 R"),W("/Info "+(S-1)+" 0 R")},ce=function(t,e){var n="string"==typeof e&&e.toLowerCase();if("string"==typeof t){var r=t.toLowerCase();o.hasOwnProperty(r)&&(t=o[r][0]/h,e=o[r][1]/h)}if(Array.isArray(t)&&(e=t[1],t=t[0]),n){switch(n.substr(0,1)){case"l":e>t&&(n="s");break;case"p":t>e&&(n="s")}"s"===n&&(p=t,t=e,e=p)}E=!0,O[++B]=[],P[B]={width:Number(t)||w,height:Number(e)||g},fe(B)},le=function(){ce.apply(this,arguments),W(M(C*h)+" w"),W(k),0!==F&&W(F+" J"),0!==D&&W(D+" j"),j.publish("addPage",{pageNumber:B})},fe=function(t){t>0&&B>=t&&(m=t,w=P[t].width,g=P[t].height)},de=function(t,e){var n;t=void 0!==t?t:T[d].fontName,e=void 0!==e?e:T[d].fontStyle;try{n=I[t][e]}catch(r){}if(!n)throw new Error("Unable to look up font label for font '"+t+"', '"+e+"'. Refer to getFontList() for available fonts.");return n},he=function(){E=!1,S=2,R=[],z=[],W("%PDF-"+i),X(),Z(),V(),W("<<"),oe(),W(">>"),W("endobj"),V(),W("<<"),ae(),W(">>"),W("endobj");var t,e=U,n="0000000000";for(W("xref"),W("0 "+(S+1)),W(n+" 65535 f "),t=1;S>=t;t++)W((n+z[t]).slice(-10)+" 00000 n ");return W("trailer"),W("<<"),ue(),W(">>"),W("startxref"),W(e),W("%%EOF"),E=!0,R.join("\n")},pe=function(t){var e="S";return"F"===t?e="f":"FD"===t||"DF"===t?e="B":("f"===t||"f*"===t||"B"===t||"B*"===t)&&(e=t),e},me=function(){for(var t=he(),e=t.length,n=new ArrayBuffer(e),r=new Uint8Array(n);e--;)r[e]=t.charCodeAt(e);return n},we=function(){return new Blob([me()],{type:"application/pdf"})},ge=re(function(e,n){var s="dataur"===(""+e).substr(0,6)?"data:application/pdf;base64,"+btoa(he()):0;switch(e){case void 0:return he();case"save":if(navigator.getUserMedia&&(void 0===t.URL||void 0===t.URL.createObjectURL))return L.output("dataurlnewwindow");r(we(),n),"function"==typeof r.unload&&t.setTimeout&&setTimeout(r.unload,911);break;case"arraybuffer":return me();case"blob":return we();case"bloburi":case"bloburl":return t.URL&&t.URL.createObjectURL(we())||void 0;case"datauristring":case"dataurlstring":return s;case"dataurlnewwindow":var i=t.open(s);if(i||"undefined"==typeof safari)return i;case"datauri":case"dataurl":return t.document.location.href=s;default:throw new Error('Output type "'+e+'" is not supported.')}});switch(u){case"pt":h=1;break;case"mm":h=72/25.4;break;case"cm":h=72/2.54;break;case"in":h=72;break;case"px":h=96/72;break;case"pc":h=12;break;case"em":h=12;break;case"ex":h=6;break;default:throw"Invalid unit: "+u}L.internal={pdfEscape:ie,getStyle:pe,getFont:function(){return T[de.apply(L,arguments)]},getFontSize:function(){return _},getLineHeight:function(){return _*A},write:function(t){W(1===arguments.length?t:Array.prototype.join.call(arguments," "))},getCoordinateString:function(t){return M(t*h)},getVerticalCoordinateString:function(t){return M((g-t)*h)},collections:{},newObject:V,putStream:J,events:j,scaleFactor:h,pageSize:{get width(){return w},get height(){return g}},output:function(t,e){return ge(t,e)},getNumberOfPages:function(){return O.length-1},pages:O},L.addPage=function(){return le.apply(this,arguments),this},L.setPage=function(){return fe.apply(this,arguments),this},L.setDisplayMode=function(t,e,n){return v=t,b=e,y=n,this},L.text=function(t,e,n,r,s){function i(t){return t=t.split("	").join(Array(f.TabLen||9).join(" ")),ie(t,r)}"number"==typeof t&&(p=n,n=e,e=t,t=p),"string"==typeof t&&t.match(/[\n\r]/)&&(t=t.split(/\r\n|\r|\n/g)),"number"==typeof r&&(s=r,r=null);var o,a="",u="Td";if(s){s*=Math.PI/180;var c=Math.cos(s),l=Math.sin(s);a=[M(c),M(l),M(-1*l),M(c),""].join(" "),u="Tm"}if(r=r||{},"noBOM"in r||(r.noBOM=!0),"autoencode"in r||(r.autoencode=!0),"string"==typeof t)t=i(t);else{if(!(t instanceof Array))throw new Error('Type of text must be string or Array. "'+t+'" is not recognized.');for(var m=t.concat(),w=[],y=m.length;y--;)w.push(i(m.shift()));var v=Math.ceil((g-n)*h/(_*A));v>=0&&v<w.length+1&&(o=w.splice(v-1)),t=w.join(") Tj\nT* (")}return W("BT\n/"+d+" "+_+" Tf\n"+_*A+" TL\n"+x+"\n"+a+M(e*h)+" "+M((g-n)*h)+" "+u+"\n("+t+") Tj\nET"),o&&(this.addPage(),this.text(o,e,1.7*_/h)),this},L.lstext=function(t,e,n,r){for(var s=0,i=t.length;i>s;s++,e+=r)this.text(t[s],e,n)},L.line=function(t,e,n,r){return this.lines([[n-t,r-e]],t,e)},L.clip=function(){W("W"),W("S")},L.lines=function(t,e,n,r,s,i){var o,a,u,c,l,f,d,m,w,y,v;for("number"==typeof t&&(p=n,n=e,e=t,t=p),r=r||[1,1],W(H(e*h)+" "+H((g-n)*h)+" m "),o=r[0],a=r[1],c=t.length,y=e,v=n,u=0;c>u;u++)l=t[u],2===l.length?(y=l[0]*o+y,v=l[1]*a+v,W(H(y*h)+" "+H((g-v)*h)+" l")):(f=l[0]*o+y,d=l[1]*a+v,m=l[2]*o+y,w=l[3]*a+v,y=l[4]*o+y,v=l[5]*a+v,W(H(f*h)+" "+H((g-d)*h)+" "+H(m*h)+" "+H((g-w)*h)+" "+H(y*h)+" "+H((g-v)*h)+" c"));return i&&W(" h"),null!==s&&W(pe(s)),this},L.rect=function(t,e,n,r,s){pe(s);return W([M(t*h),M((g-e)*h),M(n*h),M(-r*h),"re"].join(" ")),null!==s&&W(pe(s)),this},L.triangle=function(t,e,n,r,s,i,o){return this.lines([[n-t,r-e],[s-n,i-r],[t-s,e-i]],t,e,[1,1],o,!0),this},L.roundedRect=function(t,e,n,r,s,i,o){var a=4/3*(Math.SQRT2-1);return this.lines([[n-2*s,0],[s*a,0,s,i-i*a,s,i],[0,r-2*i],[0,i*a,-(s*a),i,-s,i],[-n+2*s,0],[-(s*a),0,-s,-(i*a),-s,-i],[0,-r+2*i],[0,-(i*a),s*a,-i,s,-i]],t+s,e,[1,1],o),this},L.ellipse=function(t,e,n,r,s){var i=4/3*(Math.SQRT2-1)*n,o=4/3*(Math.SQRT2-1)*r;return W([M((t+n)*h),M((g-e)*h),"m",M((t+n)*h),M((g-(e-o))*h),M((t+i)*h),M((g-(e-r))*h),M(t*h),M((g-(e-r))*h),"c"].join(" ")),W([M((t-i)*h),M((g-(e-r))*h),M((t-n)*h),M((g-(e-o))*h),M((t-n)*h),M((g-e)*h),"c"].join(" ")),W([M((t-n)*h),M((g-(e+o))*h),M((t-i)*h),M((g-(e+r))*h),M(t*h),M((g-(e+r))*h),"c"].join(" ")),W([M((t+i)*h),M((g-(e+r))*h),M((t+n)*h),M((g-(e+o))*h),M((t+n)*h),M((g-e)*h),"c"].join(" ")),null!==s&&W(pe(s)),this},L.circle=function(t,e,n,r){return this.ellipse(t,e,n,n,r)},L.setProperties=function(t){for(var e in N)N.hasOwnProperty(e)&&t[e]&&(N[e]=t[e]);return this},L.setFontSize=function(t){return _=t,this},L.setFont=function(t,e){return d=de(t,e),this},L.setFontStyle=L.setFontType=function(t){return d=de(void 0,t),this},L.getFontList=function(){var t,e,n,r={};for(t in I)if(I.hasOwnProperty(t)){r[t]=n=[];for(e in I[t])I[t].hasOwnProperty(e)&&n.push(e)}return r},L.setLineWidth=function(t){return W((t*h).toFixed(2)+" w"),this},L.setDrawColor=function(t,e,n,r){var s;return s=void 0===e||void 0===r&&t===e===n?"string"==typeof t?t+" G":M(t/255)+" G":void 0===r?"string"==typeof t?[t,e,n,"RG"].join(" "):[M(t/255),M(e/255),M(n/255),"RG"].join(" "):"string"==typeof t?[t,e,n,r,"K"].join(" "):[M(t),M(e),M(n),M(r),"K"].join(" "),W(s),this},L.setFillColor=function(t,e,n,r){var s;return s=void 0===e||void 0===r&&t===e===n?"string"==typeof t?t+" g":M(t/255)+" g":void 0===r?"string"==typeof t?[t,e,n,"rg"].join(" "):[M(t/255),M(e/255),M(n/255),"rg"].join(" "):"string"==typeof t?[t,e,n,r,"k"].join(" "):[M(t),M(e),M(n),M(r),"k"].join(" "),W(s),this},L.setTextColor=function(t,e,n){if("string"==typeof t&&/^#[0-9A-Fa-f]{6}$/.test(t)){var r=parseInt(t.substr(1),16);t=r>>16&255,e=r>>8&255,n=255&r}return x=0===t&&0===e&&0===n||"undefined"==typeof e?H(t/255)+" g":[H(t/255),H(e/255),H(n/255),"rg"].join(" "),this},L.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},L.setLineCap=function(t){var e=this.CapJoinStyles[t];if(void 0===e)throw new Error("Line cap style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return F=e,W(e+" J"),this},L.setLineJoin=function(t){var e=this.CapJoinStyles[t];if(void 0===e)throw new Error("Line join style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return D=e,W(e+" j"),this},L.output=ge,L.save=function(t){L.output("save",t)};for(var ye in n.API)n.API.hasOwnProperty(ye)&&("events"===ye&&n.API.events.length?!function(t,e){var n,r,s;for(s=e.length-1;-1!==s;s--)n=e[s][0],r=e[s][1],t.subscribe.apply(t,[n].concat("function"==typeof r?[r]:r))}(j,n.API.events):L[ye]=n.API[ye]);return ne(),d="F1",le(c,a),j.publish("initialized"),L}var i="1.3",o={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};return n.API={events:[]},n.version="1.0.272-git 2014-09-29T15:09:diegocr","function"==typeof define&&define.amd?define("jsPDF",function(){return n}):t.jsPDF=n,n}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this);!function(t){"use strict";t.addHTML=function(t,e,n,r,s){if("undefined"==typeof html2canvas&&"undefined"==typeof rasterizeHTML)throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");"number"!=typeof e&&(r=e,s=n),"function"==typeof r&&(s=r,r=null);var i=this.internal,o=i.scaleFactor,a=i.pageSize.width,u=i.pageSize.height;if(r=r||{},r.onrendered=function(t){e=parseInt(e)||0,n=parseInt(n)||0;var i=r.dim||{},c=i.h||0,l=i.w||Math.min(a,t.width/o)-e,f="JPEG";if(r.format&&(f=r.format),t.height>u&&r.pagesplit){var d=function(){for(var r=0;;){var i=document.createElement("canvas");i.width=Math.min(a*o,t.width),i.height=Math.min(u*o,t.height-r);var c=i.getContext("2d");c.drawImage(t,0,r,t.width,i.height,0,0,i.width,i.height);var d=[i,e,r?0:n,i.width/o,i.height/o,f,null,"SLOW"];if(this.addImage.apply(this,d),r+=i.height,r>=t.height)break;this.addPage()}s(l,r,null,d)}.bind(this);if("CANVAS"===t.nodeName){var h=new Image;h.onload=d,h.src=t.toDataURL("image/png"),t=h}else d()}else{var p=Math.random().toString(35),m=[t,e,n,l,c,f,p,"SLOW"];this.addImage.apply(this,m),s(l,c,p,m)}}.bind(this),"undefined"!=typeof html2canvas&&!r.rstz)return html2canvas(t,r);if("undefined"!=typeof rasterizeHTML){var c="drawDocument";return"string"==typeof t&&(c=/^http/.test(t)?"drawURL":"drawHTML"),r.width=r.width||a*o,rasterizeHTML[c](t,void 0,r).then(function(t){r.onrendered(t.image)},function(t){s(null,t)})}return null}}(n.API),function(t){"use strict";var e="addImage_",n=["jpeg","jpg","png"],r=function(t){var e=this.internal.newObject(),n=this.internal.write,s=this.internal.putStream;if(t.n=e,n("<</Type /XObject"),n("/Subtype /Image"),n("/Width "+t.w),n("/Height "+t.h),t.cs===this.color_spaces.INDEXED?n("/ColorSpace [/Indexed /DeviceRGB "+(t.pal.length/3-1)+" "+("smask"in t?e+2:e+1)+" 0 R]"):(n("/ColorSpace /"+t.cs),t.cs===this.color_spaces.DEVICE_CMYK&&n("/Decode [1 0 1 0 1 0 1 0]")),n("/BitsPerComponent "+t.bpc),"f"in t&&n("/Filter /"+t.f),"dp"in t&&n("/DecodeParms <<"+t.dp+">>"),"trns"in t&&t.trns.constructor==Array){for(var i="",o=0,a=t.trns.length;a>o;o++)i+=t.trns[o]+" "+t.trns[o]+" ";n("/Mask ["+i+"]")}if("smask"in t&&n("/SMask "+(e+1)+" 0 R"),n("/Length "+t.data.length+">>"),s(t.data),n("endobj"),"smask"in t){var u="/Predictor 15 /Colors 1 /BitsPerComponent "+t.bpc+" /Columns "+t.w,c={w:t.w,h:t.h,cs:"DeviceGray",bpc:t.bpc,dp:u,data:t.smask};"f"in t&&(c.f=t.f),r.call(this,c)}t.cs===this.color_spaces.INDEXED&&(this.internal.newObject(),n("<< /Length "+t.pal.length+">>"),s(this.arrayBufferToBinaryString(new Uint8Array(t.pal))),n("endobj"))},s=function(){var t=this.internal.collections[e+"images"];for(var n in t)r.call(this,t[n])},i=function(){var t,n=this.internal.collections[e+"images"],r=this.internal.write;for(var s in n)t=n[s],r("/I"+t.i,t.n,"0","R")},o=function(e){return e&&"string"==typeof e&&(e=e.toUpperCase()),e in t.image_compression?e:t.image_compression.NONE},a=function(){var t=this.internal.collections[e+"images"];return t||(this.internal.collections[e+"images"]=t={},this.internal.events.subscribe("putResources",s),this.internal.events.subscribe("putXobjectDict",i)),t},u=function(t){var e=0;return t&&(e=Object.keys?Object.keys(t).length:function(t){var e=0;for(var n in t)t.hasOwnProperty(n)&&e++;return e}(t)),e},c=function(t){return"undefined"==typeof t||null===t},l=function(e){return"string"==typeof e&&t.sHashCode(e)},f=function(t){return-1===n.indexOf(t)},d=function(e){return"function"!=typeof t["process"+e.toUpperCase()]},h=function(t){return"object"==typeof t&&1===t.nodeType},p=function(t,e,n){if("IMG"===t.nodeName&&t.hasAttribute("src")){var r=""+t.getAttribute("src");if(!n&&0===r.indexOf("data:image/"))return r;!e&&/\.png(?:[?#].*)?$/i.test(r)&&(e="png")}if("CANVAS"===t.nodeName)var s=t;else{var s=document.createElement("canvas");s.width=t.clientWidth||t.width,s.height=t.clientHeight||t.height;var i=s.getContext("2d");if(!i)throw"addImage requires canvas to be supported by browser.";if(n){var o,a,u,c,l,f,d,h,p=Math.PI/180;"object"==typeof n&&(o=n.x,a=n.y,u=n.bg,n=n.angle),h=n*p,c=Math.abs(Math.cos(h)),l=Math.abs(Math.sin(h)),f=s.width,d=s.height,s.width=d*l+f*c,s.height=d*c+f*l,isNaN(o)&&(o=s.width/2),isNaN(a)&&(a=s.height/2),i.clearRect(0,0,s.width,s.height),i.fillStyle=u||"white",i.fillRect(0,0,s.width,s.height),i.save(),i.translate(o,a),i.rotate(h),i.drawImage(t,-(f/2),-(d/2)),i.rotate(-h),i.translate(-o,-a),i.restore()}else i.drawImage(t,0,0,s.width,s.height)}return s.toDataURL("png"==(""+e).toLowerCase()?"image/png":"image/jpeg")},m=function(t,e){var n;if(e)for(var r in e)if(t===e[r].alias){n=e[r];break}return n},w=function(t,e,n){return t||e||(t=-96,e=-96),0>t&&(t=-1*n.w*72/t/this.internal.scaleFactor),0>e&&(e=-1*n.h*72/e/this.internal.scaleFactor),0===t&&(t=e*n.w/n.h),0===e&&(e=t*n.h/n.w),[t,e]},g=function(t,e,n,r,s,i,o){var a=w.call(this,n,r,s),u=this.internal.getCoordinateString,c=this.internal.getVerticalCoordinateString;n=a[0],r=a[1],o[i]=s,this.internal.write("q",u(n),"0 0",u(r),u(t),c(e+r),"cm /I"+s.i,"Do Q")};t.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPERATION:"Seperation",DEVICE_N:"DeviceN"},t.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"},t.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},t.sHashCode=function(t){return Array.prototype.reduce&&t.split("").reduce(function(t,e){return t=(t<<5)-t+e.charCodeAt(0),t&t},0)},t.isString=function(t){return"string"==typeof t},t.extractInfoFromBase64DataURI=function(t){return/^data:([\w]+?\/([\w]+?));base64,(.+?)$/g.exec(t)},t.supportsArrayBuffer=function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array},t.isArrayBuffer=function(t){return this.supportsArrayBuffer()?t instanceof ArrayBuffer:!1},t.isArrayBufferView=function(t){return this.supportsArrayBuffer()?"undefined"==typeof Uint32Array?!1:t instanceof Int8Array||t instanceof Uint8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array:!1},t.binaryStringToUint8Array=function(t){for(var e=t.length,n=new Uint8Array(e),r=0;e>r;r++)n[r]=t.charCodeAt(r);return n},t.arrayBufferToBinaryString=function(t){this.isArrayBuffer(t)&&(t=new Uint8Array(t));for(var e="",n=t.byteLength,r=0;n>r;r++)e+=String.fromCharCode(t[r]);return e},t.arrayBufferToBase64=function(t){for(var e,n,r,s,i,o="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=new Uint8Array(t),c=u.byteLength,l=c%3,f=c-l,d=0;f>d;d+=3)i=u[d]<<16|u[d+1]<<8|u[d+2],e=(16515072&i)>>18,n=(258048&i)>>12,r=(4032&i)>>6,s=63&i,o+=a[e]+a[n]+a[r]+a[s];return 1==l?(i=u[f],e=(252&i)>>2,n=(3&i)<<4,o+=a[e]+a[n]+"=="):2==l&&(i=u[f]<<8|u[f+1],e=(64512&i)>>10,n=(1008&i)>>4,r=(15&i)<<2,o+=a[e]+a[n]+a[r]+"="),o},t.createImageInfo=function(t,e,n,r,s,i,o,a,u,c,l,f){var d={alias:a,w:e,h:n,cs:r,bpc:s,i:o,data:t};return i&&(d.f=i),u&&(d.dp=u),c&&(d.trns=c),l&&(d.pal=l),f&&(d.smask=f),d},t.addImage=function(t,e,r,s,i,w,y,v,b){if("string"!=typeof e){var q=w;w=i,i=s,s=r,r=e,e=q}if("object"==typeof t&&!h(t)&&"imageData"in t){var x=t;t=x.imageData,e=x.format||e,r=x.x||r||0,s=x.y||s||0,i=x.w||i,w=x.h||w,y=x.alias||y,v=x.compression||v,b=x.rotation||x.angle||b}if(isNaN(r)||isNaN(s))throw console.error("jsPDF.addImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addImage");var k,_=a.call(this);if(!(k=m(t,_))){var A;if(h(t)&&(t=p(t,e,b)),c(y)&&(y=l(t)),!(k=m(y,_))){if(this.isString(t)){var C=this.extractInfoFromBase64DataURI(t);C?(e=C[2],t=atob(C[3])):137===t.charCodeAt(0)&&80===t.charCodeAt(1)&&78===t.charCodeAt(2)&&71===t.charCodeAt(3)&&(e="png")}if(e=(e||"JPEG").toLowerCase(),f(e))throw new Error("addImage currently only supports formats "+n+", not '"+e+"'");if(d(e))throw new Error("please ensure that the plugin for '"+e+"' support is added");if(this.supportsArrayBuffer()&&(A=t,t=this.binaryStringToUint8Array(t)),k=this["process"+e.toUpperCase()](t,u(_),y,o(v),A),!k)throw new Error("An unkwown error occurred whilst processing the image")}}return g.call(this,r,s,i,w,k,k.i,_),this};var y=function(t){var e,n,r;if(255===!t.charCodeAt(0)||216===!t.charCodeAt(1)||255===!t.charCodeAt(2)||224===!t.charCodeAt(3)||!t.charCodeAt(6)==="J".charCodeAt(0)||!t.charCodeAt(7)==="F".charCodeAt(0)||!t.charCodeAt(8)==="I".charCodeAt(0)||!t.charCodeAt(9)==="F".charCodeAt(0)||0===!t.charCodeAt(10))throw new Error("getJpegSize requires a binary string jpeg file");for(var s=256*t.charCodeAt(4)+t.charCodeAt(5),i=4,o=t.length;o>i;){if(i+=s,255!==t.charCodeAt(i))throw new Error("getJpegSize could not find the size of the image");if(192===t.charCodeAt(i+1)||193===t.charCodeAt(i+1)||194===t.charCodeAt(i+1)||195===t.charCodeAt(i+1)||196===t.charCodeAt(i+1)||197===t.charCodeAt(i+1)||198===t.charCodeAt(i+1)||199===t.charCodeAt(i+1))return n=256*t.charCodeAt(i+5)+t.charCodeAt(i+6),e=256*t.charCodeAt(i+7)+t.charCodeAt(i+8),r=t.charCodeAt(i+9),[e,n,r];i+=2,s=256*t.charCodeAt(i)+t.charCodeAt(i+1)}},v=function(t){var e=t[0]<<8|t[1];if(65496!==e)throw new Error("Supplied data is not a JPEG");for(var n,r,s,i,o=t.length,a=(t[4]<<8)+t[5],u=4;o>u;){if(u+=a,n=b(t,u),a=(n[2]<<8)+n[3],(192===n[1]||194===n[1])&&255===n[0]&&a>7)return n=b(t,u+5),r=(n[2]<<8)+n[3],s=(n[0]<<8)+n[1],i=n[4],{width:r,height:s,numcomponents:i};u+=2}throw new Error("getJpegSizeFromBytes could not find the size of the image")},b=function(t,e){return t.subarray(e,e+5)};t.processJPEG=function(t,e,n,r,s){var i,o=this.color_spaces.DEVICE_RGB,a=this.decode.DCT_DECODE,u=8;return this.isString(t)?(i=y(t),this.createImageInfo(t,i[0],i[1],1==i[3]?this.color_spaces.DEVICE_GRAY:o,u,a,e,n)):(this.isArrayBuffer(t)&&(t=new Uint8Array(t)),this.isArrayBufferView(t)?(i=v(t),t=s||this.arrayBufferToBinaryString(t),this.createImageInfo(t,i.width,i.height,1==i.numcomponents?this.color_spaces.DEVICE_GRAY:o,u,a,e,n)):null)},t.processJPG=function(){return this.processJPEG.apply(this,arguments)}}(n.API),function(t){"use strict";t.autoPrint=function(){var t;return this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.write("<< /S/Named /Type/Action /N/Print >>","endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.write("/OpenAction "+t+" 0 R")}),this}}(n.API),function(t){"use strict";var e,n,r,s,i=3,o=13,a={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},u=1,c=function(t,e,n,r,s){a={x:t,y:e,w:n,h:r,ln:s}},l=function(){return a},f={left:0,top:0,bottom:0};t.setHeaderFunction=function(t){s=t},t.getTextDimensions=function(t){e=this.internal.getFont().fontName,n=this.table_font_size||this.internal.getFontSize(),r=this.internal.getFont().fontStyle;var s,i,o=19.049976/25.4;return i=document.createElement("font"),i.id="jsPDFCell",i.style.fontStyle=r,i.style.fontName=e,i.style.fontSize=n+"pt",i.textContent=t,document.body.appendChild(i),s={w:(i.offsetWidth+1)*o,h:(i.offsetHeight+1)*o},document.body.removeChild(i),s},t.cellAddPage=function(){var t=this.margins||f;this.addPage(),c(t.left,t.top,void 0,void 0),u+=1},t.cellInitialize=function(){a={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},u=1},t.cell=function(t,e,n,r,s,a,u){var d=l();if(void 0!==d.ln)if(d.ln===a)t=d.x+d.w,e=d.y;else{var h=this.margins||f;d.y+d.h+r+o>=this.internal.pageSize.height-h.bottom&&(this.cellAddPage(),this.printHeaders&&this.tableHeaderRow&&this.printHeaderRow(a,!0)),e=l().y+l().h}if(void 0!==s[0])if(this.printingHeaderRow?this.rect(t,e,n,r,"FD"):this.rect(t,e,n,r),"right"===u){if(s instanceof Array)for(var p=0;p<s.length;p++){var m=s[p],w=this.getStringUnitWidth(m)*this.internal.getFontSize();this.text(m,t+n-w-i,e+this.internal.getLineHeight()*(p+1))}}else this.text(s,t+i,e+this.internal.getLineHeight());return c(t,e,n,r,a),this},t.arrayMax=function(t,e){var n,r,s,i=t[0];for(n=0,r=t.length;r>n;n+=1)s=t[n],e?-1===e(i,s)&&(i=s):s>i&&(i=s);return i},t.table=function(e,n,r,s,i){if(!r)throw"No data for PDF table";var o,c,l,d,h,p,m,w,g,y,v=[],b=[],q={},x={},k=[],_=[],A=!1,C=!0,S=12,E=f;if(E.width=this.internal.pageSize.width,i&&(i.autoSize===!0&&(A=!0),i.printHeaders===!1&&(C=!1),i.fontSize&&(S=i.fontSize),i.margins&&(E=i.margins)),this.lnMod=0,a={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},u=1,this.printHeaders=C,this.margins=E,this.setFontSize(S),this.table_font_size=S,void 0===s||null===s)v=Object.keys(r[0]);else if(s[0]&&"string"!=typeof s[0]){var z=19.049976/25.4;for(c=0,l=s.length;l>c;c+=1)o=s[c],v.push(o.name),b.push(o.prompt),x[o.name]=o.width*z}else v=s;if(A)for(y=function(t){return t[o]},c=0,l=v.length;l>c;c+=1){for(o=v[c],q[o]=r.map(y),k.push(this.getTextDimensions(b[c]||o).w),p=q[o],m=0,d=p.length;d>m;m+=1)h=p[m],k.push(this.getTextDimensions(h).w);x[o]=t.arrayMax(k)}if(C){var T=this.calculateLineHeight(v,x,b.length?b:v);for(c=0,l=v.length;l>c;c+=1)o=v[c],_.push([e,n,x[o],T,String(b.length?b[c]:o)]);this.setTableHeaderRow(_),this.printHeaderRow(1,!1)}for(c=0,l=r.length;l>c;c+=1){var T;for(w=r[c],T=this.calculateLineHeight(v,x,w),m=0,g=v.length;g>m;m+=1)o=v[m],this.cell(e,n,x[o],T,w[o],c+2,o.align)}return this.lastCellPos=a,this.table_x=e,this.table_y=n,this},t.calculateLineHeight=function(t,e,n){for(var r,s=0,o=0;o<t.length;o++){r=t[o],n[r]=this.splitTextToSize(String(n[r]),e[r]-i);var a=this.internal.getLineHeight()*n[r].length+i;a>s&&(s=a)}return s},t.setTableHeaderRow=function(t){this.tableHeaderRow=t},t.printHeaderRow=function(t,e){if(!this.tableHeaderRow)throw"Property tableHeaderRow does not exist.";var n,r,i,o;if(this.printingHeaderRow=!0,void 0!==s){var a=s(this,u);c(a[0],a[1],a[2],a[3],-1)}this.setFontStyle("bold");var l=[];for(i=0,o=this.tableHeaderRow.length;o>i;i+=1)this.setFillColor(200,200,200),n=this.tableHeaderRow[i],e&&(n[1]=this.margins&&this.margins.top||0,l.push(n)),r=[].concat(n),this.cell.apply(this,r.concat(t));l.length>0&&this.setTableHeaderRow(l),this.setFontStyle("normal"),this.printingHeaderRow=!1}}(n.API),function(t){var e,n,r,s,i,o,a,u,c,l,f,d,h,p,m,w,g,y,v;e=function(){function t(){}return function(e){return t.prototype=e,new t}}(),c=function(t){var e,n,r,s,i,o,a;for(n=0,r=t.length,e=void 0,s=!1,o=!1;!s&&n!==r;)e=t[n]=t[n].trimLeft(),e&&(s=!0),n++;for(n=r-1;r&&!o&&-1!==n;)e=t[n]=t[n].trimRight(),e&&(o=!0),n--;for(i=/\s+$/g,a=!0,n=0;n!==r;)e=t[n].replace(/\s+/g," "),a&&(e=e.trimLeft()),e&&(a=i.test(e)),t[n]=e,n++;return t},l=function(t,e,n,r){return this.pdf=t,this.x=e,this.y=n,this.settings=r,this.watchFunctions=[],this.init(),this},f=function(t){var e,n,s;for(e=void 0,s=t.split(","),n=s.shift();!e&&n;)e=r[n.trim().toLowerCase()],n=s.shift();return e},d=function(t){t="auto"===t?"0px":t,t.indexOf("em")>-1&&!isNaN(Number(t.replace("em","")))&&(t=18.719*Number(t.replace("em",""))+"px"),t.indexOf("pt")>-1&&!isNaN(Number(t.replace("pt","")))&&(t=1.333*Number(t.replace("pt",""))+"px");var e,n,r;return n=void 0,e=16,(r=h[t])?r:(r={"xx-small":9,"x-small":11,small:13,medium:16,large:19,"x-large":23,"xx-large":28,auto:0}[{css_line_height_string:t}],r!==n?h[t]=r/e:(r=parseFloat(t))?h[t]=r/e:(r=t.match(/([\d\.]+)(px)/),h[t]=3===r.length?parseFloat(r[1])/e:1))},u=function(t){var e,n,r;return r=function(t){var e;return e=function(t){return document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t,null):t.currentStyle?t.currentStyle:t.style}(t),function(t){return t=t.replace(/-\D/g,function(t){return t.charAt(1).toUpperCase()}),e[t]}}(t),e={},n=void 0,e["font-family"]=f(r("font-family"))||"times",e["font-style"]=s[r("font-style")]||"normal",e["text-align"]=TextAlignMap[r("text-align")]||"left",n=i[r("font-weight")]||"normal","bold"===n&&(e["font-style"]="normal"===e["font-style"]?n:n+e["font-style"]),e["font-size"]=d(r("font-size"))||1,e["line-height"]=d(r("line-height"))||1,e.display="inline"===r("display")?"inline":"block",n="block"===e.display,e["margin-top"]=n&&d(r("margin-top"))||0,e["margin-bottom"]=n&&d(r("margin-bottom"))||0,e["padding-top"]=n&&d(r("padding-top"))||0,e["padding-bottom"]=n&&d(r("padding-bottom"))||0,e["margin-left"]=n&&d(r("margin-left"))||0,e["margin-right"]=n&&d(r("margin-right"))||0,e["padding-left"]=n&&d(r("padding-left"))||0,e["padding-right"]=n&&d(r("padding-right"))||0,e["float"]=o[r("cssFloat")]||"none",e.clear=a[r("clear")]||"none",e},p=function(t,e,n){var r,s,i,o,a;if(i=!1,s=void 0,o=void 0,a=void 0,r=n["#"+t.id])if("function"==typeof r)i=r(t,e);else for(s=0,o=r.length;!i&&s!==o;)i=r[s](t,e),s++;if(r=n[t.nodeName],!i&&r)if("function"==typeof r)i=r(t,e);else for(s=0,o=r.length;!i&&s!==o;)i=r[s](t,e),s++;return i},v=function(t,e){var n,r,s,i,o,a,u,c,l,f;
for(n=[],r=[],s=0,f=t.rows[0].cells.length,c=t.clientWidth;f>s;)l=t.rows[0].cells[s],r[s]={name:l.textContent.toLowerCase().replace(/\s+/g,""),prompt:l.textContent.replace(/\r?\n/g,""),width:l.clientWidth/c*e.pdf.internal.pageSize.width},s++;for(s=1;s<t.rows.length;){for(a=t.rows[s],o={},i=0;i<a.cells.length;)o[r[i].name]=a.cells[i].textContent.replace(/\r?\n/g,""),i++;n.push(o),s++}return u={rows:n,headers:r}};var b={SCRIPT:1,STYLE:1,NOSCRIPT:1,OBJECT:1,EMBED:1,SELECT:1},q=1;n=function(t,e,r){var s,i,o,a,c,l,f,d,h;for(i=t.childNodes,s=void 0,o=u(t),c="block"===o.display,c&&(e.setBlockBoundary(),e.setBlockStyle(o)),f=19.049976/25.4,a=0,l=i.length;l>a;){if(s=i[a],"object"==typeof s){if(e.executeWatchFunctions(s),1===s.nodeType&&"HEADER"===s.nodeName){var w=s,g=e.pdf.margins_doc.top;e.pdf.internal.events.subscribe("addPage",function(){e.y=g,n(w,e,r),e.pdf.margins_doc.top=e.y+10,e.y+=10},!1)}if(8===s.nodeType&&"#comment"===s.nodeName)~s.textContent.indexOf("ADD_PAGE")&&(e.pdf.addPage(),e.y=e.pdf.margins_doc.top);else if(1!==s.nodeType||b[s.nodeName])if(3===s.nodeType){var y=s.nodeValue;if(s.nodeValue&&"LI"===s.parentNode.nodeName)if("OL"===s.parentNode.parentNode.nodeName)y=q++ +". "+y;else{var x=16*o["font-size"],k=2;x>20&&(k=3),h=function(t,e){this.pdf.circle(t,e,k,"FD")}}e.addText(y,o)}else"string"==typeof s&&e.addText(s,o);else{var _;if("IMG"===s.nodeName){var A=s.getAttribute("src");_=m[e.pdf.sHashCode(A)||A]}if(_){e.pdf.internal.pageSize.height-e.pdf.margins_doc.bottom<e.y+s.height&&e.y>e.pdf.margins_doc.top&&(e.pdf.addPage(),e.y=e.pdf.margins_doc.top,e.executeWatchFunctions(s));var C=u(s),S=e.x,E=12/e.pdf.internal.scaleFactor,z=(C["margin-left"]+C["padding-left"])*E,T=(C["margin-right"]+C["padding-right"])*E,I=(C["margin-top"]+C["padding-top"])*E,B=(C["margin-bottom"]+C["padding-bottom"])*E;S+=void 0!==C["float"]&&"right"===C["float"]?e.settings.width-s.width-T:z,e.pdf.addImage(_,S,e.y+I,s.width,s.height),_=void 0,"right"===C["float"]||"left"===C["float"]?(e.watchFunctions.push(function(t,n,r,s){return e.y>=n?(e.x+=t,e.settings.width+=r,!0):s&&1===s.nodeType&&!b[s.nodeName]&&e.x+s.width>e.pdf.margins_doc.left+e.pdf.margins_doc.width?(e.x+=t,e.y=n,e.settings.width+=r,!0):!1}.bind(this,"left"===C["float"]?-s.width-z-T:0,e.y+s.height+I+B,s.width)),e.watchFunctions.push(function(t,n,r){return e.y<t&&n===e.pdf.internal.getNumberOfPages()?1===r.nodeType&&"both"===u(r).clear?(e.y=t,!0):!1:!0}.bind(this,e.y+s.height,e.pdf.internal.getNumberOfPages())),e.settings.width-=s.width+z+T,"left"===C["float"]&&(e.x+=s.width+z+T)):e.y+=s.height+B}else if("TABLE"===s.nodeName)d=v(s,e),e.y+=10,e.pdf.table(e.x,e.y,d.rows,d.headers,{autoSize:!1,printHeaders:!0,margins:e.pdf.margins_doc}),e.y=e.pdf.lastCellPos.y+e.pdf.lastCellPos.h+20;else if("OL"===s.nodeName||"UL"===s.nodeName)q=1,p(s,e,r)||n(s,e,r),e.y+=10;else if("LI"===s.nodeName){var O=e.x;e.x+="UL"===s.parentNode.nodeName?22:10,e.y+=3,p(s,e,r)||n(s,e,r),e.x=O}else"BR"===s.nodeName?e.y+=o["font-size"]*e.pdf.internal.scaleFactor:p(s,e,r)||n(s,e,r)}}a++}return c?e.setBlockBoundary(h):void 0},m={},w=function(t,e,n,r){function s(){e.pdf.internal.events.publish("imagesLoaded"),r(o)}function i(t,n,r){if(t){var i=new Image;o=++c,i.crossOrigin="",i.onerror=i.onload=function(){if(i.complete&&(0===i.src.indexOf("data:image/")&&(i.width=n||i.width||0,i.height=r||i.height||0),i.width+i.height)){var o=e.pdf.sHashCode(t)||t;m[o]=m[o]||i}--c||s()},i.src=t}}for(var o,a=t.getElementsByTagName("img"),u=a.length,c=0;u--;)i(a[u].getAttribute("src"),a[u].width,a[u].height);return c||s()},g=function(t,e,r){var s=t.getElementsByTagName("footer");if(s.length>0){s=s[0];var i=e.pdf.internal.write,o=e.y;e.pdf.internal.write=function(){},n(s,e,r);var a=Math.ceil(e.y-o)+5;e.y=o,e.pdf.internal.write=i,e.pdf.margins_doc.bottom+=a;for(var u=function(t){var i=void 0!==t?t.pageNumber:1,o=e.y;e.y=e.pdf.internal.pageSize.height-e.pdf.margins_doc.bottom,e.pdf.margins_doc.bottom-=a;for(var u=s.getElementsByTagName("span"),c=0;c<u.length;++c)(" "+u[c].className+" ").replace(/[\n\t]/g," ").indexOf(" pageCounter ")>-1&&(u[c].innerHTML=i),(" "+u[c].className+" ").replace(/[\n\t]/g," ").indexOf(" totalPages ")>-1&&(u[c].innerHTML="###jsPDFVarTotalPages###");n(s,e,r),e.pdf.margins_doc.bottom+=a,e.y=o},c=s.getElementsByTagName("span"),l=0;l<c.length;++l)(" "+c[l].className+" ").replace(/[\n\t]/g," ").indexOf(" totalPages ")>-1&&e.pdf.internal.events.subscribe("htmlRenderingFinished",e.pdf.putTotalPages.bind(e.pdf,"###jsPDFVarTotalPages###"),!0);e.pdf.internal.events.subscribe("addPage",u,!1),u(),b.FOOTER=1}},y=function(t,e,r,s,i,o){if(!e)return!1;"string"==typeof e||e.parentNode||(e=""+e.innerHTML),"string"==typeof e&&(e=function(t){var e,n,r,s;return r="jsPDFhtmlText"+Date.now().toString()+(1e3*Math.random()).toFixed(0),s="position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;",n=document.createElement("div"),n.style.cssText=s,n.innerHTML='<iframe style="height:1px;width:1px" name="'+r+'" />',document.body.appendChild(n),e=window.frames[r],e.document.body.innerHTML=t,e.document.body}(e.replace(/<\/?script[^>]*?>/gi,"")));var a,u=new l(t,r,s,i);return w.call(this,e,u,i.elementHandlers,function(t){g(e,u,i.elementHandlers),n(e,u,i.elementHandlers),u.pdf.internal.events.publish("htmlRenderingFinished"),a=u.dispose(),"function"==typeof o?o(a):t&&console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!")}),a||{x:u.x,y:u.y}},l.prototype.init=function(){return this.paragraph={text:[],style:[]},this.pdf.internal.write("q")},l.prototype.dispose=function(){return this.pdf.internal.write("Q"),{x:this.x,y:this.y,ready:!0}},l.prototype.executeWatchFunctions=function(t){var e=!1,n=[];if(this.watchFunctions.length>0){for(var r=0;r<this.watchFunctions.length;++r)this.watchFunctions[r](t)===!0?e=!0:n.push(this.watchFunctions[r]);this.watchFunctions=n}return e},l.prototype.splitFragmentsIntoLines=function(t,n){var r,s,i,o,a,u,c,l,f,d,h,p,m,w,g;for(s=12,h=this.pdf.internal.scaleFactor,a={},i=void 0,d=void 0,o=void 0,u=void 0,g=void 0,f=void 0,l=void 0,c=void 0,p=[],m=[p],r=0,w=this.settings.width;t.length;)if(u=t.shift(),g=n.shift(),u)if(i=g["font-family"],d=g["font-style"],o=a[i+d],o||(o=this.pdf.internal.getFont(i,d).metadata.Unicode,a[i+d]=o),f={widths:o.widths,kerning:o.kerning,fontSize:g["font-size"]*s,textIndent:r},l=this.pdf.getStringUnitWidth(u,f)*f.fontSize/h,r+l>w){for(c=this.pdf.splitTextToSize(u,w,f),p.push([c.shift(),g]);c.length;)p=[[c.shift(),g]],m.push(p);r=this.pdf.getStringUnitWidth(p[0][0],f)*f.fontSize/h}else p.push([u,g]),r+=l;if(void 0!==g["text-align"]&&("center"===g["text-align"]||"right"===g["text-align"]||"justify"===g["text-align"]))for(var y=0;y<m.length;++y){var v=this.pdf.getStringUnitWidth(m[y][0][0],f)*f.fontSize/h;y>0&&(m[y][0][1]=e(m[y][0][1]));var b=w-v;if("right"===g["text-align"])m[y][0][1]["margin-left"]=b;else if("center"===g["text-align"])m[y][0][1]["margin-left"]=b/2;else if("justify"===g["text-align"]){var q=m[y][0][0].split(" ").length-1;m[y][0][1]["word-spacing"]=b/q,y===m.length-1&&(m[y][0][1]["word-spacing"]=0)}}return m},l.prototype.RenderTextFragment=function(t,e){var n,r,s;s=0,n=12,this.pdf.internal.pageSize.height-this.pdf.margins_doc.bottom<this.y+this.pdf.internal.getFontSize()&&(this.pdf.internal.write("ET","Q"),this.pdf.addPage(),this.y=this.pdf.margins_doc.top,this.pdf.internal.write("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td"),s=Math.max(s,e["line-height"],e["font-size"]),this.pdf.internal.write(0,(-1*n*s).toFixed(2),"Td")),r=this.pdf.internal.getFont(e["font-family"],e["font-style"]),void 0!==e["word-spacing"]&&e["word-spacing"]>0&&this.pdf.internal.write(e["word-spacing"].toFixed(2),"Tw"),this.pdf.internal.write("/"+r.id,(n*e["font-size"]).toFixed(2),"Tf","("+this.pdf.internal.pdfEscape(t)+") Tj"),void 0!==e["word-spacing"]&&this.pdf.internal.write(0,"Tw")},l.prototype.renderParagraph=function(t){var e,n,r,s,i,o,a,u,l,f,d,h,p,m,w;if(s=c(this.paragraph.text),m=this.paragraph.style,e=this.paragraph.blockstyle,p=this.paragraph.blockstyle||{},this.paragraph={text:[],style:[],blockstyle:{},priorblockstyle:e},s.join("").trim()){u=this.splitFragmentsIntoLines(s,m),a=void 0,l=void 0,n=12,r=n/this.pdf.internal.scaleFactor,h=(Math.max((e["margin-top"]||0)-(p["margin-bottom"]||0),0)+(e["padding-top"]||0))*r,d=((e["margin-bottom"]||0)+(e["padding-bottom"]||0))*r,f=this.pdf.internal.write,i=void 0,o=void 0,this.y+=h,f("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td");for(var g=0;u.length;){for(a=u.shift(),l=0,i=0,o=a.length;i!==o;)a[i][0].trim()&&(l=Math.max(l,a[i][1]["line-height"],a[i][1]["font-size"]),w=7*a[i][1]["font-size"]),i++;var y=0;for(void 0!==a[0][1]["margin-left"]&&a[0][1]["margin-left"]>0&&(wantedIndent=this.pdf.internal.getCoordinateString(a[0][1]["margin-left"]),y=wantedIndent-g,g=wantedIndent),f(y,(-1*n*l).toFixed(2),"Td"),i=0,o=a.length;i!==o;)a[i][0]&&this.RenderTextFragment(a[i][0],a[i][1]),i++;if(this.y+=l*r,this.executeWatchFunctions(a[0][1])&&u.length>0){var v=[],b=[];u.forEach(function(t){for(var e=0,n=t.length;e!==n;)t[e][0]&&(v.push(t[e][0]+" "),b.push(t[e][1])),++e}),u=this.splitFragmentsIntoLines(c(v),b),f("ET","Q"),f("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td")}}return t&&"function"==typeof t&&t.call(this,this.x-9,this.y-w/2),f("ET","Q"),this.y+=d}},l.prototype.setBlockBoundary=function(t){return this.renderParagraph(t)},l.prototype.setBlockStyle=function(t){return this.paragraph.blockstyle=t},l.prototype.addText=function(t,e){return this.paragraph.text.push(t),this.paragraph.style.push(e)},r={helvetica:"helvetica","sans-serif":"helvetica","times new roman":"times",serif:"times",times:"times",monospace:"courier",courier:"courier"},i={100:"normal",200:"normal",300:"normal",400:"normal",500:"bold",600:"bold",700:"bold",800:"bold",900:"bold",normal:"normal",bold:"bold",bolder:"bold",lighter:"normal"},s={normal:"normal",italic:"italic",oblique:"italic"},TextAlignMap={left:"left",right:"right",center:"center",justify:"justify"},o={none:"none",right:"right",left:"left"},a={none:"none",both:"both"},h={normal:1},t.fromHTML=function(t,e,n,r,s,i){"use strict";return this.margins_doc=i||{top:0,bottom:0},r||(r={}),r.elementHandlers||(r.elementHandlers={}),y(this,t,isNaN(e)?4:e,isNaN(n)?4:n,r,s)}}(n.API),function(t){"use strict";var e,n,r;t.addJS=function(t){return r=t,this.internal.events.subscribe("postPutResources",function(){e=this.internal.newObject(),this.internal.write("<< /Names [(EmbeddedJS) "+(e+1)+" 0 R] >>","endobj"),n=this.internal.newObject(),this.internal.write("<< /S /JavaScript /JS (",r,") >>","endobj")}),this.internal.events.subscribe("putCatalog",function(){void 0!==e&&void 0!==n&&this.internal.write("/Names <</JavaScript "+e+" 0 R>>")}),this}}(n.API),function(t){"use strict";var e=function(){return"function"!=typeof PNG||"function"!=typeof o},n=function(e){return e!==t.image_compression.NONE&&r()},r=function(){var t="function"==typeof s;if(!t)throw new Error("requires deflate.js for compression");return t},i=function(e,n,r,i){var o=5,l=d;switch(i){case t.image_compression.FAST:o=3,l=f;break;case t.image_compression.MEDIUM:o=6,l=h;break;case t.image_compression.SLOW:o=9,l=p}e=c(e,n,r,l);var m=new Uint8Array(a(o)),w=u(e),g=new s(o),y=g.append(e),v=g.flush(),b=m.length+y.length+v.length,q=new Uint8Array(b+4);return q.set(m),q.set(y,m.length),q.set(v,m.length+y.length),q[b++]=w>>>24&255,q[b++]=w>>>16&255,q[b++]=w>>>8&255,q[b++]=255&w,t.arrayBufferToBinaryString(q)},a=function(t,e){var n=8,r=Math.LOG2E*Math.log(32768)-8,s=r<<4|n,i=s<<8,o=Math.min(3,(e-1&255)>>1);return i|=o<<6,i|=0,i+=31-i%31,[s,255&i&255]},u=function(t,e){for(var n,r=1,s=65535&r,i=r>>>16&65535,o=t.length,a=0;o>0;){n=o>e?e:o,o-=n;do s+=t[a++],i+=s;while(--n);s%=65521,i%=65521}return(i<<16|s)>>>0},c=function(t,e,n,r){for(var s,i,o,a=t.length/e,u=new Uint8Array(t.length+a),c=w(),l=0;a>l;l++){if(o=l*e,s=t.subarray(o,o+e),r)u.set(r(s,n,i),o+l);else{for(var f=0,d=c.length,h=[];d>f;f++)h[f]=c[f](s,n,i);var p=g(h.concat());u.set(h[p],o+l)}i=s}return u},l=function(t){var e=Array.apply([],t);return e.unshift(0),e},f=function(t,e){var n,r=[],s=0,i=t.length;for(r[0]=1;i>s;s++)n=t[s-e]||0,r[s+1]=t[s]-n+256&255;return r},d=function(t,e,n){var r,s=[],i=0,o=t.length;for(s[0]=2;o>i;i++)r=n&&n[i]||0,s[i+1]=t[i]-r+256&255;return s},h=function(t,e,n){var r,s,i=[],o=0,a=t.length;for(i[0]=3;a>o;o++)r=t[o-e]||0,s=n&&n[o]||0,i[o+1]=t[o]+256-(r+s>>>1)&255;return i},p=function(t,e,n){var r,s,i,o,a=[],u=0,c=t.length;for(a[0]=4;c>u;u++)r=t[u-e]||0,s=n&&n[u]||0,i=n&&n[u-e]||0,o=m(r,s,i),a[u+1]=t[u]-o+256&255;return a},m=function(t,e,n){var r=t+e-n,s=Math.abs(r-t),i=Math.abs(r-e),o=Math.abs(r-n);return i>=s&&o>=s?t:o>=i?e:n},w=function(){return[l,f,d,h,p]},g=function(t){for(var e,n,r,s=0,i=t.length;i>s;)e=y(t[s].slice(1)),(n>e||!n)&&(n=e,r=s),s++;return r},y=function(t){for(var e=0,n=t.length,r=0;n>e;)r+=Math.abs(t[e++]);return r};t.processPNG=function(t,r,s,o){var a,u,c,l,f,d,h=this.color_spaces.DEVICE_RGB,p=this.decode.FLATE_DECODE,m=8;if(this.isArrayBuffer(t)&&(t=new Uint8Array(t)),this.isArrayBufferView(t)){if(e())throw new Error("PNG support requires png.js and zlib.js");if(a=new PNG(t),t=a.imgData,m=a.bits,h=a.colorSpace,l=a.colors,-1!==[4,6].indexOf(a.colorType)){if(8===a.bits)for(var w,g,y=window["Uint"+a.pixelBitlength+"Array"],v=new y(a.decodePixels().buffer),b=v.length,q=new Uint8Array(b*a.colors),x=new Uint8Array(b),k=a.pixelBitlength-a.bits,_=0,A=0;b>_;_++){for(w=v[_],g=0;k>g;)q[A++]=w>>>g&255,g+=a.bits;x[_]=w>>>g&255}if(16===a.bits){for(var w,v=new Uint32Array(a.decodePixels().buffer),b=v.length,q=new Uint8Array(b*(32/a.pixelBitlength)*a.colors),x=new Uint8Array(b*(32/a.pixelBitlength)),C=a.colors>1,_=0,A=0,S=0;b>_;)w=v[_++],q[A++]=w>>>0&255,C&&(q[A++]=w>>>16&255,w=v[_++],q[A++]=w>>>0&255),x[S++]=w>>>16&255;m=8}n(o)?(t=i(q,a.width*a.colors,a.colors,o),d=i(x,a.width,1,o)):(t=q,d=x,p=null)}if(3===a.colorType&&(h=this.color_spaces.INDEXED,f=a.palette,a.transparency.indexed)){for(var E=a.transparency.indexed,z=0,_=0,b=E.length;b>_;++_)z+=E[_];if(z/=255,z===b-1&&-1!==E.indexOf(0))c=[E.indexOf(0)];else if(z!==b){for(var v=a.decodePixels(),x=new Uint8Array(v.length),_=0,b=v.length;b>_;_++)x[_]=E[v[_]];d=i(x,a.width,1)}}return u=p===this.decode.FLATE_DECODE?"/Predictor 15 /Colors "+l+" /BitsPerComponent "+m+" /Columns "+a.width:"/Colors "+l+" /BitsPerComponent "+m+" /Columns "+a.width,(this.isArrayBuffer(t)||this.isArrayBufferView(t))&&(t=this.arrayBufferToBinaryString(t)),(d&&this.isArrayBuffer(d)||this.isArrayBufferView(d))&&(d=this.arrayBufferToBinaryString(d)),this.createImageInfo(t,a.width,a.height,h,m,p,r,s,u,c,f,d)}throw new Error("Unsupported PNG image data, try using JPEG instead.")}}(n.API),function(t){"use strict";t.addSVG=function(t,e,n,r,s){function i(t,e){var n=e.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(e.createTextNode(t)),e.getElementsByTagName("head")[0].appendChild(n)}function o(t){var e="childframe",n=t.createElement("iframe");return i(".jsPDF_sillysvg_iframe {display:none;position:absolute;}",t),n.name=e,n.setAttribute("width",0),n.setAttribute("height",0),n.setAttribute("frameborder","0"),n.setAttribute("scrolling","no"),n.setAttribute("seamless","seamless"),n.setAttribute("class","jsPDF_sillysvg_iframe"),t.body.appendChild(n),n}function a(t,e){var n=(e.contentWindow||e.contentDocument).document;return n.write(t),n.close(),n.getElementsByTagName("svg")[0]}function u(t){for(var e=parseFloat(t[1]),n=parseFloat(t[2]),r=[],s=3,i=t.length;i>s;)"c"===t[s]?(r.push([parseFloat(t[s+1]),parseFloat(t[s+2]),parseFloat(t[s+3]),parseFloat(t[s+4]),parseFloat(t[s+5]),parseFloat(t[s+6])]),s+=7):"l"===t[s]?(r.push([parseFloat(t[s+1]),parseFloat(t[s+2])]),s+=3):s+=1;return[e,n,r]}var c;if(e===c||n===c)throw new Error("addSVG needs values for 'x' and 'y'");var l=o(document),f=a(t,l),d=[1,1],h=parseFloat(f.getAttribute("width")),p=parseFloat(f.getAttribute("height"));h&&p&&(r&&s?d=[r/h,s/p]:r?d=[r/h,r/h]:s&&(d=[s/p,s/p]));var m,w,g,y,v=f.childNodes;for(m=0,w=v.length;w>m;m++)g=v[m],g.tagName&&"PATH"===g.tagName.toUpperCase()&&(y=u(g.getAttribute("d").split(" ")),y[0]=y[0]*d[0]+e,y[1]=y[1]*d[1]+n,this.lines.call(this,y[2],y[0],y[1],d));return this}}(n.API),function(t){"use strict";var e=t.getCharWidthsArray=function(t,e){e||(e={});var n,r,s,i=e.widths?e.widths:this.internal.getFont().metadata.Unicode.widths,o=i.fof?i.fof:1,a=e.kerning?e.kerning:this.internal.getFont().metadata.Unicode.kerning,u=a.fof?a.fof:1,c=0,l=i[0]||o,f=[];for(n=0,r=t.length;r>n;n++)s=t.charCodeAt(n),f.push((i[s]||l)/o+(a[s]&&a[s][c]||0)/u),c=s;return f},n=function(t){for(var e=t.length,n=0;e;)e--,n+=t[e];return n},r=t.getStringUnitWidth=function(t,r){return n(e.call(this,t,r))},s=function(t,e,n,r){for(var s=[],i=0,o=t.length,a=0;i!==o&&a+e[i]<n;)a+=e[i],i++;s.push(t.slice(0,i));var u=i;for(a=0;i!==o;)a+e[i]>r&&(s.push(t.slice(u,i)),a=0,u=i),a+=e[i],i++;return u!==i&&s.push(t.slice(u,i)),s},i=function(t,i,o){o||(o={});var a,u,c,l,f,d,h=[],p=[h],m=o.textIndent||0,w=0,g=0,y=t.split(" "),v=e(" ",o)[0];if(d=-1===o.lineIndent?y[0].length+2:o.lineIndent||0){var b=Array(d).join(" "),q=[];y.map(function(t){t=t.split(/\s*\n/),t.length>1?q=q.concat(t.map(function(t,e){return(e&&t.length?"\n":"")+t})):q.push(t[0])}),y=q,d=r(b,o)}for(c=0,l=y.length;l>c;c++){var x=0;if(a=y[c],d&&"\n"==a[0]&&(a=a.substr(1),x=1),u=e(a,o),g=n(u),m+w+g>i||x){if(g>i){for(f=s(a,u,i-(m+w),i),h.push(f.shift()),h=[f.pop()];f.length;)p.push([f.shift()]);g=n(u.slice(a.length-h[0].length))}else h=[a];p.push(h),m=g+d,w=v}else h.push(a),m+=w+g,w=v}if(d)var k=function(t,e){return(e?b:"")+t.join(" ")};else var k=function(t){return t.join(" ")};return p.map(k)};t.splitTextToSize=function(t,e,n){n||(n={});var r,s=n.fontSize||this.internal.getFontSize(),o=function(t){var e={0:1},n={};if(t.widths&&t.kerning)return{widths:t.widths,kerning:t.kerning};var r=this.internal.getFont(t.fontName,t.fontStyle),s="Unicode";return r.metadata[s]?{widths:r.metadata[s].widths||e,kerning:r.metadata[s].kerning||n}:{widths:e,kerning:n}}.call(this,n);r=Array.isArray(t)?t:t.split(/\r?\n/);var a=1*this.internal.scaleFactor*e/s;o.textIndent=n.textIndent?1*n.textIndent*this.internal.scaleFactor/s:0,o.lineIndent=n.lineIndent;var u,c,l=[];for(u=0,c=r.length;c>u;u++)l=l.concat(i(r[u],a,o));return l}}(n.API),function(t){"use strict";var e=function(t){for(var e="0123456789abcdef",n="klmnopqrstuvwxyz",r={},s=0;s<n.length;s++)r[n[s]]=e[s];var i,o,a,u,c,l={},f=1,d=l,h=[],p="",m="",w=t.length-1;for(s=1;s!=w;)c=t[s],s+=1,"'"==c?o?(u=o.join(""),o=i):o=[]:o?o.push(c):"{"==c?(h.push([d,u]),d={},u=i):"}"==c?(a=h.pop(),a[0][a[1]]=d,u=i,d=a[0]):"-"==c?f=-1:u===i?r.hasOwnProperty(c)?(p+=r[c],u=parseInt(p,16)*f,f=1,p=""):p+=c:r.hasOwnProperty(c)?(m+=r[c],d[u]=parseInt(m,16)*f,f=1,u=i,m=""):m+=c;return l},n={codePages:["WinAnsiEncoding"],WinAnsiEncoding:e("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},r={Unicode:{Courier:n,"Courier-Bold":n,"Courier-BoldOblique":n,"Courier-Oblique":n,Helvetica:n,"Helvetica-Bold":n,"Helvetica-BoldOblique":n,"Helvetica-Oblique":n,"Times-Roman":n,"Times-Bold":n,"Times-BoldItalic":n,"Times-Italic":n}},s={Unicode:{"Courier-Oblique":e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":e("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":e("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Helvetica:e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),"Courier-Bold":e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":e("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":e("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};
t.events.push(["addFonts",function(t){var e,n,i,o,a,u="Unicode";for(n in t.fonts)t.fonts.hasOwnProperty(n)&&(e=t.fonts[n],i=s[u][e.PostScriptName],i&&(o=e.metadata[u]?e.metadata[u]:e.metadata[u]={},o.widths=i.widths,o.kerning=i.kerning),a=r[u][e.PostScriptName],a&&(o=e.metadata[u]?e.metadata[u]:e.metadata[u]={},o.encoding=a,a.codePages&&a.codePages.length&&(e.encoding=a.codePages[0])))}])}(n.API),function(t){"use strict";t.putTotalPages=function(t){for(var e=new RegExp(t,"g"),n=1;n<=this.internal.getNumberOfPages();n++)for(var r=0;r<this.internal.pages[n].length;r++)this.internal.pages[n][r]=this.internal.pages[n][r].replace(e,this.internal.getNumberOfPages());return this}}(n.API),function(t){"use strict";if(t.URL=t.URL||t.webkitURL,t.Blob&&t.URL)try{return void new Blob}catch(e){}var n=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||function(t){var e=function(t){return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]},n=function(){this.data=[]},r=function(t,e,n){this.data=t,this.size=t.length,this.type=e,this.encoding=n},s=n.prototype,i=r.prototype,o=t.FileReaderSync,a=function(t){this.code=this[this.name=t]},u="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),c=u.length,l=t.URL||t.webkitURL||t,f=l.createObjectURL,d=l.revokeObjectURL,h=l,p=t.btoa,m=t.atob,w=t.ArrayBuffer,g=t.Uint8Array,y=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;for(r.fake=i.fake=!0;c--;)a.prototype[u[c]]=c+1;return l.createObjectURL||(h=t.URL=function(t){var e,n=document.createElementNS("http://www.w3.org/1999/xhtml","a");return n.href=t,"origin"in n||("data:"===n.protocol.toLowerCase()?n.origin=null:(e=t.match(y),n.origin=e&&e[1])),n}),h.createObjectURL=function(t){var e,n=t.type;return null===n&&(n="application/octet-stream"),t instanceof r?(e="data:"+n,"base64"===t.encoding?e+";base64,"+t.data:"URI"===t.encoding?e+","+decodeURIComponent(t.data):p?e+";base64,"+p(t.data):e+","+encodeURIComponent(t.data)):f?f.call(l,t):void 0},h.revokeObjectURL=function(t){"data:"!==t.substring(0,5)&&d&&d.call(l,t)},s.append=function(t){var n=this.data;if(g&&(t instanceof w||t instanceof g)){for(var s="",i=new g(t),u=0,c=i.length;c>u;u++)s+=String.fromCharCode(i[u]);n.push(s)}else if("Blob"===e(t)||"File"===e(t)){if(!o)throw new a("NOT_READABLE_ERR");var l=new o;n.push(l.readAsBinaryString(t))}else t instanceof r?"base64"===t.encoding&&m?n.push(m(t.data)):"URI"===t.encoding?n.push(decodeURIComponent(t.data)):"raw"===t.encoding&&n.push(t.data):("string"!=typeof t&&(t+=""),n.push(unescape(encodeURIComponent(t))))},s.getBlob=function(t){return arguments.length||(t=null),new r(this.data.join(""),t,"raw")},s.toString=function(){return"[object BlobBuilder]"},i.slice=function(t,e,n){var s=arguments.length;return 3>s&&(n=null),new r(this.data.slice(t,s>1?e:this.data.length),n,this.encoding)},i.toString=function(){return"[object Blob]"},i.close=function(){this.size=0,delete this.data},n}(t);t.Blob=function(t,e){var r=e?e.type||"":"",s=new n;if(t)for(var i=0,o=t.length;o>i;i++)s.append(t[i]);return s.getBlob(r)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content||this);var r=r||"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(t){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var e=t.document,n=function(){return t.URL||t.webkitURL||t},r=e.createElementNS("http://www.w3.org/1999/xhtml","a"),s="download"in r,i=function(n){var r=e.createEvent("MouseEvents");r.initMouseEvent("click",!0,!1,t,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(r)},o=t.webkitRequestFileSystem,a=t.requestFileSystem||o||t.mozRequestFileSystem,u=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},c="application/octet-stream",l=0,f=10,d=function(e){var r=function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()};t.chrome?r():setTimeout(r,f)},h=function(t,e,n){e=[].concat(e);for(var r=e.length;r--;){var s=t["on"+e[r]];if("function"==typeof s)try{s.call(t,n||t)}catch(i){u(i)}}},p=function(e,u){var f,p,m,w=this,g=e.type,y=!1,v=function(){h(w,"writestart progress write writeend".split(" "))},b=function(){if((y||!f)&&(f=n().createObjectURL(e)),p)p.location.href=f;else{var r=t.open(f,"_blank");void 0==r&&"undefined"!=typeof safari&&(t.location.href=f)}w.readyState=w.DONE,v(),d(f)},q=function(t){return function(){return w.readyState!==w.DONE?t.apply(this,arguments):void 0}},x={create:!0,exclusive:!1};return w.readyState=w.INIT,u||(u="download"),s?(f=n().createObjectURL(e),r.href=f,r.download=u,i(r),w.readyState=w.DONE,v(),void d(f)):(t.chrome&&g&&g!==c&&(m=e.slice||e.webkitSlice,e=m.call(e,0,e.size,c),y=!0),o&&"download"!==u&&(u+=".download"),(g===c||o)&&(p=t),a?(l+=e.size,void a(t.TEMPORARY,l,q(function(t){t.root.getDirectory("saved",x,q(function(t){var n=function(){t.getFile(u,x,q(function(t){t.createWriter(q(function(n){n.onwriteend=function(e){p.location.href=t.toURL(),w.readyState=w.DONE,h(w,"writeend",e),d(t)},n.onerror=function(){var t=n.error;t.code!==t.ABORT_ERR&&b()},"writestart progress write abort".split(" ").forEach(function(t){n["on"+t]=w["on"+t]}),n.write(e),w.abort=function(){n.abort(),w.readyState=w.DONE},w.readyState=w.WRITING}),b)}),b)};t.getFile(u,{create:!1},q(function(t){t.remove(),n()}),q(function(t){t.code===t.NOT_FOUND_ERR?n():b()}))}),b)}),b)):void b())},m=p.prototype,w=function(t,e){return new p(t,e)};return m.abort=function(){var t=this;t.readyState=t.DONE,h(t,"abort")},m.readyState=m.INIT=0,m.WRITING=1,m.DONE=2,m.error=m.onwritestart=m.onprogress=m.onwrite=m.onabort=m.onerror=m.onwriteend=null,w}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof module&&null!==module&&(module.exports=r),void function(t,e){"object"==typeof module?module.exports=e():t.adler32cs=e()}(n,function(){var t="function"==typeof ArrayBuffer&&"function"==typeof Uint8Array,e=null,n=function(){if(!t)return function(){return!1};try{var n=require("buffer");"function"==typeof n.Buffer&&(e=n.Buffer)}catch(r){}return function(t){return t instanceof ArrayBuffer||null!==e&&t instanceof e}}(),r=function(){return null!==e?function(t){return new e(t,"utf8").toString("binary")}:function(t){return unescape(encodeURIComponent(t))}}(),s=65521,i=function(t,e){for(var n=65535&t,r=t>>>16,i=0,o=e.length;o>i;i++)n=(n+(255&e.charCodeAt(i)))%s,r=(r+n)%s;return(r<<16|n)>>>0},o=function(t,e){for(var n=65535&t,r=t>>>16,i=0,o=e.length;o>i;i++)n=(n+e[i])%s,r=(r+n)%s;return(r<<16|n)>>>0},a={},u=a.Adler32=function(){var e=function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.");if(!isFinite(t=null==t?1:+t))throw new Error("First arguments needs to be a finite number.");this.checksum=t>>>0},s=e.prototype={};return s.constructor=e,e.from=function(t){return t.prototype=s,t}(function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.");if(null==t)throw new Error("First argument needs to be a string.");this.checksum=i(1,t.toString())}),e.fromUtf8=function(t){return t.prototype=s,t}(function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.");if(null==t)throw new Error("First argument needs to be a string.");var n=r(t.toString());this.checksum=i(1,n)}),t&&(e.fromBuffer=function(t){return t.prototype=s,t}(function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.");if(!n(t))throw new Error("First argument needs to be ArrayBuffer.");var r=new Uint8Array(t);return this.checksum=o(1,r)})),s.update=function(t){if(null==t)throw new Error("First argument needs to be a string.");return t=t.toString(),this.checksum=i(this.checksum,t)},s.updateUtf8=function(t){if(null==t)throw new Error("First argument needs to be a string.");var e=r(t.toString());return this.checksum=i(this.checksum,e)},t&&(s.updateBuffer=function(t){if(!n(t))throw new Error("First argument needs to be ArrayBuffer.");var e=new Uint8Array(t);return this.checksum=o(this.checksum,e)}),s.clone=function(){return new u(this.checksum)},e}();return a.from=function(t){if(null==t)throw new Error("First argument needs to be a string.");return i(1,t.toString())},a.fromUtf8=function(t){if(null==t)throw new Error("First argument needs to be a string.");var e=r(t.toString());return i(1,e)},t&&(a.fromBuffer=function(t){if(!n(t))throw new Error("First argument need to be ArrayBuffer.");var e=new Uint8Array(t);return o(1,e)}),a});var s=function(){function t(){function t(t){var e,n,s,i,a,u,c=r.dyn_tree,l=r.stat_desc.static_tree,f=r.stat_desc.extra_bits,h=r.stat_desc.extra_base,p=r.stat_desc.max_length,m=0;for(i=0;o>=i;i++)t.bl_count[i]=0;for(c[2*t.heap[t.heap_max]+1]=0,e=t.heap_max+1;d>e;e++)n=t.heap[e],i=c[2*c[2*n+1]+1]+1,i>p&&(i=p,m++),c[2*n+1]=i,n>r.max_code||(t.bl_count[i]++,a=0,n>=h&&(a=f[n-h]),u=c[2*n],t.opt_len+=u*(i+a),l&&(t.static_len+=u*(l[2*n+1]+a)));if(0!==m){do{for(i=p-1;0===t.bl_count[i];)i--;t.bl_count[i]--,t.bl_count[i+1]+=2,t.bl_count[p]--,m-=2}while(m>0);for(i=p;0!==i;i--)for(n=t.bl_count[i];0!==n;)s=t.heap[--e],s>r.max_code||(c[2*s+1]!=i&&(t.opt_len+=(i-c[2*s+1])*c[2*s],c[2*s+1]=i),n--)}}function e(t,e){var n=0;do n|=1&t,t>>>=1,n<<=1;while(--e>0);return n>>>1}function n(t,n,r){var s,i,a,u=[],c=0;for(s=1;o>=s;s++)u[s]=c=c+r[s-1]<<1;for(i=0;n>=i;i++)a=t[2*i+1],0!==a&&(t[2*i]=e(u[a]++,a))}var r=this;r.build_tree=function(e){var s,i,o,a=r.dyn_tree,u=r.stat_desc.static_tree,c=r.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=d,s=0;c>s;s++)0!==a[2*s]?(e.heap[++e.heap_len]=l=s,e.depth[s]=0):a[2*s+1]=0;for(;e.heap_len<2;)o=e.heap[++e.heap_len]=2>l?++l:0,a[2*o]=1,e.depth[o]=0,e.opt_len--,u&&(e.static_len-=u[2*o+1]);for(r.max_code=l,s=Math.floor(e.heap_len/2);s>=1;s--)e.pqdownheap(a,s);o=c;do s=e.heap[1],e.heap[1]=e.heap[e.heap_len--],e.pqdownheap(a,1),i=e.heap[1],e.heap[--e.heap_max]=s,e.heap[--e.heap_max]=i,a[2*o]=a[2*s]+a[2*i],e.depth[o]=Math.max(e.depth[s],e.depth[i])+1,a[2*s+1]=a[2*i+1]=o,e.heap[1]=o++,e.pqdownheap(a,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],t(e),n(a,r.max_code,e.bl_count)}}function e(t,e,n,r,s){var i=this;i.static_tree=t,i.extra_bits=e,i.extra_base=n,i.elems=r,i.max_length=s}function n(t,e,n,r,s){var i=this;i.good_length=t,i.max_lazy=e,i.nice_length=n,i.max_chain=r,i.func=s}function r(t,e,n,r){var s=t[2*e],i=t[2*n];return i>s||s==i&&r[e]<=r[n]}function s(){function n(){var t;for(Te=2*Ce,Be[Pe-1]=0,t=0;Pe-1>t;t++)Be[t]=0;Je=N[Xe].max_lazy,Ke=N[Xe].good_length,Qe=N[Xe].nice_length,Ve=N[Xe].max_chain,Me=0,Ue=0,Ge=0,Ne=We=Z-1,je=0,Oe=0}function s(){var t;for(t=0;f>t;t++)$e[2*t]=0;for(t=0;a>t;t++)Ze[2*t]=0;for(t=0;u>t;t++)tn[2*t]=0;$e[2*h]=1,en.opt_len=en.static_len=0,un=ln=0}function i(){nn.dyn_tree=$e,nn.stat_desc=e.static_l_desc,rn.dyn_tree=Ze,rn.stat_desc=e.static_d_desc,sn.dyn_tree=tn,sn.stat_desc=e.static_bl_desc,dn=0,hn=0,fn=8,s()}function o(t,e){var n,r,s=-1,i=t[1],o=0,a=7,u=4;for(0===i&&(a=138,u=3),t[2*(e+1)+1]=65535,n=0;e>=n;n++)r=i,i=t[2*(n+1)+1],++o<a&&r==i||(u>o?tn[2*r]+=o:0!==r?(r!=s&&tn[2*r]++,tn[2*m]++):10>=o?tn[2*w]++:tn[2*g]++,o=0,s=r,0===i?(a=138,u=3):r==i?(a=6,u=3):(a=7,u=4))}function c(){var e;for(o($e,nn.max_code),o(Ze,rn.max_code),sn.build_tree(en),e=u-1;e>=3&&0===tn[2*t.bl_order[e]+1];e--);return en.opt_len+=3*(e+1)+5+5+4,e}function d(t){en.pending_buf[en.pending++]=t}function p(t){d(255&t),d(t>>>8&255)}function O(t){d(t>>8&255),d(255&t&255)}function ne(t,e){var n,r=e;hn>y-r?(n=t,dn|=n<<hn&65535,p(dn),dn=n>>>y-hn,hn+=r-y):(dn|=t<<hn&65535,hn+=r)}function re(t,e){var n=2*t;ne(65535&e[n],65535&e[n+1])}function se(t,e){var n,r,s=-1,i=t[1],o=0,a=7,u=4;for(0===i&&(a=138,u=3),n=0;e>=n;n++)if(r=i,i=t[2*(n+1)+1],!(++o<a&&r==i)){if(u>o){do re(r,tn);while(0!==--o)}else 0!==r?(r!=s&&(re(r,tn),o--),re(m,tn),ne(o-3,2)):10>=o?(re(w,tn),ne(o-3,3)):(re(g,tn),ne(o-11,7));o=0,s=r,0===i?(a=138,u=3):r==i?(a=6,u=3):(a=7,u=4)}}function ie(e,n,r){var s;for(ne(e-257,5),ne(n-1,5),ne(r-4,4),s=0;r>s;s++)ne(tn[2*t.bl_order[s]+1],3);se($e,e-1),se(Ze,n-1)}function oe(){16==hn?(p(dn),dn=0,hn=0):hn>=8&&(d(255&dn),dn>>>=8,hn-=8)}function ae(){ne(Q<<1,3),re(h,e.static_ltree),oe(),9>1+fn+10-hn&&(ne(Q<<1,3),re(h,e.static_ltree),oe()),fn=7}function ue(e,n){var r,s,i;if(en.pending_buf[cn+2*un]=e>>>8&255,en.pending_buf[cn+2*un+1]=255&e,en.pending_buf[on+un]=255&n,un++,0===e?$e[2*n]++:(ln++,e--,$e[2*(t._length_code[n]+l+1)]++,Ze[2*t.d_code(e)]++),0===(8191&un)&&Xe>2){for(r=8*un,s=Me-Ue,i=0;a>i;i++)r+=Ze[2*i]*(5+t.extra_dbits[i]);if(r>>>=3,ln<Math.floor(un/2)&&r<Math.floor(s/2))return!0}return un==an-1}function ce(e,n){var r,s,i,o,a=0;if(0!==un)do r=en.pending_buf[cn+2*a]<<8&65280|255&en.pending_buf[cn+2*a+1],s=255&en.pending_buf[on+a],a++,0===r?re(s,e):(i=t._length_code[s],re(i+l+1,e),o=t.extra_lbits[i],0!==o&&(s-=t.base_length[i],ne(s,o)),r--,i=t.d_code(r),re(i,n),o=t.extra_dbits[i],0!==o&&(r-=t.base_dist[i],ne(r,o)));while(un>a);re(h,e),fn=e[2*h+1]}function le(){hn>8?p(dn):hn>0&&d(255&dn),dn=0,hn=0}function fe(t,e,n){le(),fn=8,n&&(p(e),p(~e)),en.pending_buf.set(ze.subarray(t,t+e),en.pending),en.pending+=e}function de(t,e,n){ne((K<<1)+(n?1:0),3),fe(t,e,!0)}function he(t,n,r){var i,o,a=0;Xe>0?(nn.build_tree(en),rn.build_tree(en),a=c(),i=en.opt_len+3+7>>>3,o=en.static_len+3+7>>>3,i>=o&&(i=o)):i=o=n+5,i>=n+4&&-1!=t?de(t,n,r):o==i?(ne((Q<<1)+(r?1:0),3),ce(e.static_ltree,e.static_dtree)):(ne(($<<1)+(r?1:0),3),ie(nn.max_code+1,rn.max_code+1,a+1),ce($e,Ze)),s(),r&&le()}function pe(t){he(Ue>=0?Ue:-1,Me-Ue,t),Ue=Me,qe.flush_pending()}function me(){var t,e,n,r;do{if(r=Te-Ge-Me,0===r&&0===Me&&0===Ge)r=Ce;else if(-1==r)r--;else if(Me>=Ce+Ce-ee){ze.set(ze.subarray(Ce,Ce+Ce),0),He-=Ce,Me-=Ce,Ue-=Ce,t=Pe,n=t;do e=65535&Be[--n],Be[n]=e>=Ce?e-Ce:0;while(0!==--t);t=Ce,n=t;do e=65535&Ie[--n],Ie[n]=e>=Ce?e-Ce:0;while(0!==--t);r+=Ce}if(0===qe.avail_in)return;t=qe.read_buf(ze,Me+Ge,r),Ge+=t,Ge>=Z&&(Oe=255&ze[Me],Oe=(Oe<<De^255&ze[Me+1])&Fe)}while(ee>Ge&&0!==qe.avail_in)}function we(t){var e,n=65535;for(n>ke-5&&(n=ke-5);;){if(1>=Ge){if(me(),0===Ge&&t==k)return j;if(0===Ge)break}if(Me+=Ge,Ge=0,e=Ue+n,(0===Me||Me>=e)&&(Ge=Me-e,Me=e,pe(!1),0===qe.avail_out))return j;if(Me-Ue>=Ce-ee&&(pe(!1),0===qe.avail_out))return j}return pe(t==C),0===qe.avail_out?t==C?H:j:t==C?G:M}function ge(t){var e,n,r=Ve,s=Me,i=We,o=Me>Ce-ee?Me-(Ce-ee):0,a=Qe,u=Ee,c=Me+te,l=ze[s+i-1],f=ze[s+i];We>=Ke&&(r>>=2),a>Ge&&(a=Ge);do if(e=t,ze[e+i]==f&&ze[e+i-1]==l&&ze[e]==ze[s]&&ze[++e]==ze[s+1]){s+=2,e++;do;while(ze[++s]==ze[++e]&&ze[++s]==ze[++e]&&ze[++s]==ze[++e]&&ze[++s]==ze[++e]&&ze[++s]==ze[++e]&&ze[++s]==ze[++e]&&ze[++s]==ze[++e]&&ze[++s]==ze[++e]&&c>s);if(n=te-(c-s),s=c-te,n>i){if(He=t,i=n,n>=a)break;l=ze[s+i-1],f=ze[s+i]}}while((t=65535&Ie[t&u])>o&&0!==--r);return Ge>=i?i:Ge}function ye(t){for(var e,n=0;;){if(ee>Ge){if(me(),ee>Ge&&t==k)return j;if(0===Ge)break}if(Ge>=Z&&(Oe=(Oe<<De^255&ze[Me+(Z-1)])&Fe,n=65535&Be[Oe],Ie[Me&Ee]=Be[Oe],Be[Oe]=Me),0!==n&&Ce-ee>=(Me-n&65535)&&Ye!=q&&(Ne=ge(n)),Ne>=Z)if(e=ue(Me-He,Ne-Z),Ge-=Ne,Je>=Ne&&Ge>=Z){Ne--;do Me++,Oe=(Oe<<De^255&ze[Me+(Z-1)])&Fe,n=65535&Be[Oe],Ie[Me&Ee]=Be[Oe],Be[Oe]=Me;while(0!==--Ne);Me++}else Me+=Ne,Ne=0,Oe=255&ze[Me],Oe=(Oe<<De^255&ze[Me+1])&Fe;else e=ue(0,255&ze[Me]),Ge--,Me++;if(e&&(pe(!1),0===qe.avail_out))return j}return pe(t==C),0===qe.avail_out?t==C?H:j:t==C?G:M}function ve(t){for(var e,n,r=0;;){if(ee>Ge){if(me(),ee>Ge&&t==k)return j;if(0===Ge)break}if(Ge>=Z&&(Oe=(Oe<<De^255&ze[Me+(Z-1)])&Fe,r=65535&Be[Oe],Ie[Me&Ee]=Be[Oe],Be[Oe]=Me),We=Ne,Le=He,Ne=Z-1,0!==r&&Je>We&&Ce-ee>=(Me-r&65535)&&(Ye!=q&&(Ne=ge(r)),5>=Ne&&(Ye==b||Ne==Z&&Me-He>4096)&&(Ne=Z-1)),We>=Z&&We>=Ne){n=Me+Ge-Z,e=ue(Me-1-Le,We-Z),Ge-=We-1,We-=2;do++Me<=n&&(Oe=(Oe<<De^255&ze[Me+(Z-1)])&Fe,r=65535&Be[Oe],Ie[Me&Ee]=Be[Oe],Be[Oe]=Me);while(0!==--We);if(je=0,Ne=Z-1,Me++,e&&(pe(!1),0===qe.avail_out))return j}else if(0!==je){if(e=ue(0,255&ze[Me-1]),e&&pe(!1),Me++,Ge--,0===qe.avail_out)return j}else je=1,Me++,Ge--}return 0!==je&&(e=ue(0,255&ze[Me-1]),je=0),pe(t==C),0===qe.avail_out?t==C?H:j:t==C?G:M}function be(t){return t.total_in=t.total_out=0,t.msg=null,en.pending=0,en.pending_out=0,xe=J,Ae=k,i(),n(),S}var qe,xe,ke,_e,Ae,Ce,Se,Ee,ze,Te,Ie,Be,Oe,Pe,Re,Fe,De,Ue,Ne,Le,je,Me,He,Ge,We,Ve,Je,Xe,Ye,Ke,Qe,$e,Ze,tn,en=this,nn=new t,rn=new t,sn=new t;en.depth=[];var on,an,un,cn,ln,fn,dn,hn;en.bl_count=[],en.heap=[],$e=[],Ze=[],tn=[],en.pqdownheap=function(t,e){for(var n=en.heap,s=n[e],i=e<<1;i<=en.heap_len&&(i<en.heap_len&&r(t,n[i+1],n[i],en.depth)&&i++,!r(t,s,n[i],en.depth));)n[e]=n[i],e=i,i<<=1;n[e]=s},en.deflateInit=function(t,e,n,r,s,i){return r||(r=Y),s||(s=R),i||(i=x),t.msg=null,e==v&&(e=6),1>s||s>P||r!=Y||9>n||n>15||0>e||e>9||0>i||i>q?T:(t.dstate=en,Se=n,Ce=1<<Se,Ee=Ce-1,Re=s+7,Pe=1<<Re,Fe=Pe-1,De=Math.floor((Re+Z-1)/Z),ze=new Uint8Array(2*Ce),Ie=[],Be=[],an=1<<s+6,en.pending_buf=new Uint8Array(4*an),ke=4*an,cn=Math.floor(an/2),on=3*an,Xe=e,Ye=i,_e=255&r,be(t))},en.deflateEnd=function(){return xe!=V&&xe!=J&&xe!=X?T:(en.pending_buf=null,Be=null,Ie=null,ze=null,en.dstate=null,xe==J?I:S)},en.deflateParams=function(t,e,n){var r=S;return e==v&&(e=6),0>e||e>9||0>n||n>q?T:(N[Xe].func!=N[e].func&&0!==t.total_in&&(r=t.deflate(_)),Xe!=e&&(Xe=e,Je=N[Xe].max_lazy,Ke=N[Xe].good_length,Qe=N[Xe].nice_length,Ve=N[Xe].max_chain),Ye=n,r)},en.deflateSetDictionary=function(t,e,n){var r,s=n,i=0;if(!e||xe!=V)return T;if(Z>s)return S;for(s>Ce-ee&&(s=Ce-ee,i=n-s),ze.set(e.subarray(i,i+s),0),Me=s,Ue=s,Oe=255&ze[0],Oe=(Oe<<De^255&ze[1])&Fe,r=0;s-Z>=r;r++)Oe=(Oe<<De^255&ze[r+(Z-1)])&Fe,Ie[r&Ee]=Be[Oe],Be[Oe]=r;return S},en.deflate=function(t,e){var n,r,s,i,o;if(e>C||0>e)return T;if(!t.next_out||!t.next_in&&0!==t.avail_in||xe==X&&e!=C)return t.msg=L[z-T],T;if(0===t.avail_out)return t.msg=L[z-B],B;if(qe=t,i=Ae,Ae=e,xe==V&&(r=Y+(Se-8<<4)<<8,s=(Xe-1&255)>>1,s>3&&(s=3),r|=s<<6,0!==Me&&(r|=W),r+=31-r%31,xe=J,O(r)),0!==en.pending){if(qe.flush_pending(),0===qe.avail_out)return Ae=-1,S}else if(0===qe.avail_in&&i>=e&&e!=C)return qe.msg=L[z-B],B;if(xe==X&&0!==qe.avail_in)return t.msg=L[z-B],B;if(0!==qe.avail_in||0!==Ge||e!=k&&xe!=X){switch(o=-1,N[Xe].func){case F:o=we(e);break;case D:o=ye(e);break;case U:o=ve(e)}if((o==H||o==G)&&(xe=X),o==j||o==H)return 0===qe.avail_out&&(Ae=-1),S;if(o==M){if(e==_)ae();else if(de(0,0,!1),e==A)for(n=0;Pe>n;n++)Be[n]=0;if(qe.flush_pending(),0===qe.avail_out)return Ae=-1,S}}return e!=C?S:E}}function i(){var t=this;t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0}var o=15,a=30,u=19,c=29,l=256,f=l+1+c,d=2*f+1,h=256,p=7,m=16,w=17,g=18,y=16,v=-1,b=1,q=2,x=0,k=0,_=1,A=3,C=4,S=0,E=1,z=2,T=-2,I=-3,B=-5,O=[0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29];t._length_code=[0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],t.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],t.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],t.d_code=function(t){return 256>t?O[t]:O[256+(t>>>7)]},t.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],t.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],t.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],t.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],e.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],e.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],e.static_l_desc=new e(e.static_ltree,t.extra_lbits,l+1,f,o),e.static_d_desc=new e(e.static_dtree,t.extra_dbits,0,a,o),e.static_bl_desc=new e(null,t.extra_blbits,0,u,p);var P=9,R=8,F=0,D=1,U=2,N=[new n(0,0,0,0,F),new n(4,4,8,4,D),new n(4,5,16,8,D),new n(4,6,32,32,D),new n(4,4,16,16,U),new n(8,16,32,32,U),new n(8,16,128,128,U),new n(8,32,128,256,U),new n(32,128,258,1024,U),new n(32,258,258,4096,U)],L=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],j=0,M=1,H=2,G=3,W=32,V=42,J=113,X=666,Y=8,K=0,Q=1,$=2,Z=3,te=258,ee=te+Z+1;return i.prototype={deflateInit:function(t,e){var n=this;return n.dstate=new s,e||(e=o),n.dstate.deflateInit(n,t,e)},deflate:function(t){var e=this;return e.dstate?e.dstate.deflate(e,t):T},deflateEnd:function(){var t=this;if(!t.dstate)return T;var e=t.dstate.deflateEnd();return t.dstate=null,e},deflateParams:function(t,e){var n=this;return n.dstate?n.dstate.deflateParams(n,t,e):T},deflateSetDictionary:function(t,e){var n=this;return n.dstate?n.dstate.deflateSetDictionary(n,t,e):T},read_buf:function(t,e,n){var r=this,s=r.avail_in;return s>n&&(s=n),0===s?0:(r.avail_in-=s,t.set(r.next_in.subarray(r.next_in_index,r.next_in_index+s),e),r.next_in_index+=s,r.total_in+=s,s)},flush_pending:function(){var t=this,e=t.dstate.pending;e>t.avail_out&&(e=t.avail_out),0!==e&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,0===t.dstate.pending&&(t.dstate.pending_out=0))}},function(t){var e=this,n=new i,r=512,s=k,o=new Uint8Array(r);"undefined"==typeof t&&(t=v),n.deflateInit(t),n.next_out=o,e.append=function(t,e){var i,a,u=[],c=0,l=0,f=0;if(t.length){n.next_in_index=0,n.next_in=t,n.avail_in=t.length;do{if(n.next_out_index=0,n.avail_out=r,i=n.deflate(s),i!=S)throw"deflating: "+n.msg;n.next_out_index&&u.push(n.next_out_index==r?new Uint8Array(o):new Uint8Array(o.subarray(0,n.next_out_index))),f+=n.next_out_index,e&&n.next_in_index>0&&n.next_in_index!=c&&(e(n.next_in_index),c=n.next_in_index)}while(n.avail_in>0||0===n.avail_out);return a=new Uint8Array(f),u.forEach(function(t){a.set(t,l),l+=t.length}),a}},e.flush=function(){var t,e,s=[],i=0,a=0;do{if(n.next_out_index=0,n.avail_out=r,t=n.deflate(C),t!=E&&t!=S)throw"deflating: "+n.msg;r-n.avail_out>0&&s.push(new Uint8Array(o.subarray(0,n.next_out_index))),a+=n.next_out_index}while(n.avail_in>0||0===n.avail_out);return n.deflateEnd(),e=new Uint8Array(a),s.forEach(function(t){e.set(t,i),i+=t.length}),e}}}(this);!function(t){var e;e=function(){function e(t){var e,n,r,s,i,o,a,u,c,l,f,d,h,p,m;for(this.data=t,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},o=null;;){switch(e=this.readUInt32(),l=function(){var t,e;for(e=[],a=t=0;4>t;a=++t)e.push(String.fromCharCode(this.data[this.pos++]));return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(e);break;case"fcTL":o&&this.animation.frames.push(o),this.pos+=4,o={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},i=this.readUInt16(),s=this.readUInt16()||100,o.delay=1e3*i/s,o.disposeOp=this.data[this.pos++],o.blendOp=this.data[this.pos++],o.data=[];break;case"IDAT":case"fdAT":for("fdAT"===l&&(this.pos+=4,e-=4),t=(null!=o?o.data:void 0)||this.imgData,a=h=0;e>=0?e>h:h>e;a=e>=0?++h:--h)t.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(r=this.palette.length/3,this.transparency.indexed=this.read(e),this.transparency.indexed.length>r)throw new Error("More transparent colors than palette size");if(f=r-this.transparency.indexed.length,f>0)for(a=p=0;f>=0?f>p:p>f;a=f>=0?++p:--p)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(e)[0];break;case 2:this.transparency.rgb=this.read(e)}break;case"tEXt":d=this.read(e),u=d.indexOf(0),c=String.fromCharCode.apply(String,d.slice(0,u)),this.text[c]=String.fromCharCode.apply(String,d.slice(u+1));break;case"IEND":return o&&this.animation.frames.push(o),this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(m=this.colorType)||6===m,n=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*n,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=e}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}var n,r,s,i,a,u,c,l;e.load=function(t,n,r){var s;return"function"==typeof n&&(r=n),s=new XMLHttpRequest,s.open("GET",t,!0),s.responseType="arraybuffer",s.onload=function(){var t,i;return t=new Uint8Array(s.response||s.mozResponseArrayBuffer),i=new e(t),"function"==typeof(null!=n?n.getContext:void 0)&&i.render(n),"function"==typeof r?r(i):void 0},s.send(null)},i=0,s=1,a=2,r=0,n=1,e.prototype.read=function(t){var e,n,r;for(r=[],e=n=0;t>=0?t>n:n>t;e=t>=0?++n:--n)r.push(this.data[this.pos++]);return r},e.prototype.readUInt32=function(){var t,e,n,r;return t=this.data[this.pos++]<<24,e=this.data[this.pos++]<<16,n=this.data[this.pos++]<<8,r=this.data[this.pos++],t|e|n|r},e.prototype.readUInt16=function(){var t,e;return t=this.data[this.pos++]<<8,e=this.data[this.pos++],t|e},e.prototype.decodePixels=function(t){var e,n,r,s,i,a,u,c,l,f,d,h,p,m,w,g,y,v,b,q,x,k,_;if(null==t&&(t=this.imgData),0===t.length)return new Uint8Array(0);for(t=new o(t),t=t.getBytes(),h=this.pixelBitlength/8,g=h*this.width,p=new Uint8Array(g*this.height),a=t.length,w=0,m=0,n=0;a>m;){switch(t[m++]){case 0:for(s=b=0;g>b;s=b+=1)p[n++]=t[m++];break;case 1:for(s=q=0;g>q;s=q+=1)e=t[m++],i=h>s?0:p[n-h],p[n++]=(e+i)%256;break;case 2:for(s=x=0;g>x;s=x+=1)e=t[m++],r=(s-s%h)/h,y=w&&p[(w-1)*g+r*h+s%h],p[n++]=(y+e)%256;break;case 3:for(s=k=0;g>k;s=k+=1)e=t[m++],r=(s-s%h)/h,i=h>s?0:p[n-h],y=w&&p[(w-1)*g+r*h+s%h],p[n++]=(e+Math.floor((i+y)/2))%256;break;case 4:for(s=_=0;g>_;s=_+=1)e=t[m++],r=(s-s%h)/h,i=h>s?0:p[n-h],0===w?y=v=0:(y=p[(w-1)*g+r*h+s%h],v=r&&p[(w-1)*g+(r-1)*h+s%h]),u=i+y-v,c=Math.abs(u-i),f=Math.abs(u-y),d=Math.abs(u-v),l=f>=c&&d>=c?i:d>=f?y:v,p[n++]=(e+l)%256;break;default:throw new Error("Invalid filter algorithm: "+t[m-1])}w++}return p},e.prototype.decodePalette=function(){var t,e,n,r,s,i,o,a,u,c;for(r=this.palette,o=this.transparency.indexed||[],i=new Uint8Array((o.length||0)+r.length),s=0,n=r.length,t=0,e=a=0,u=r.length;u>a;e=a+=3)i[s++]=r[e],i[s++]=r[e+1],i[s++]=r[e+2],i[s++]=null!=(c=o[t++])?c:255;return i},e.prototype.copyToImageData=function(t,e){var n,r,s,i,o,a,u,c,l,f,d;if(r=this.colors,l=null,n=this.hasAlphaChannel,this.palette.length&&(l=null!=(d=this._decodedPalette)?d:this._decodedPalette=this.decodePalette(),r=4,n=!0),s=t.data||t,c=s.length,o=l||e,i=a=0,1===r)for(;c>i;)u=l?4*e[i/4]:a,f=o[u++],s[i++]=f,s[i++]=f,s[i++]=f,s[i++]=n?o[u++]:255,a=u;else for(;c>i;)u=l?4*e[i/4]:a,s[i++]=o[u++],s[i++]=o[u++],s[i++]=o[u++],s[i++]=n?o[u++]:255,a=u},e.prototype.decode=function(){var t;return t=new Uint8Array(this.width*this.height*4),this.copyToImageData(t,this.decodePixels()),t};try{c=t.document.createElement("canvas"),l=c.getContext("2d")}catch(f){return-1}return u=function(t){var e;return l.width=t.width,l.height=t.height,l.clearRect(0,0,t.width,t.height),l.putImageData(t,0,0),e=new Image,e.src=c.toDataURL(),e},e.prototype.decodeFrames=function(t){var e,n,r,s,i,o,a,c;if(this.animation){for(a=this.animation.frames,c=[],n=i=0,o=a.length;o>i;n=++i)e=a[n],r=t.createImageData(e.width,e.height),s=this.decodePixels(new Uint8Array(e.data)),this.copyToImageData(r,s),e.imageData=r,c.push(e.image=u(r));return c}},e.prototype.renderFrame=function(t,e){var n,i,o;return i=this.animation.frames,n=i[e],o=i[e-1],0===e&&t.clearRect(0,0,this.width,this.height),(null!=o?o.disposeOp:void 0)===s?t.clearRect(o.xOffset,o.yOffset,o.width,o.height):(null!=o?o.disposeOp:void 0)===a&&t.putImageData(o.imageData,o.xOffset,o.yOffset),n.blendOp===r&&t.clearRect(n.xOffset,n.yOffset,n.width,n.height),t.drawImage(n.image,n.xOffset,n.yOffset)},e.prototype.animate=function(t){var e,n,r,s,i,o,a=this;return n=0,o=this.animation,s=o.numFrames,r=o.frames,i=o.numPlays,(e=function(){var o,u;return o=n++%s,u=r[o],a.renderFrame(t,o),s>1&&i>n/s?a.animation._timeout=setTimeout(e,u.delay):void 0
})()},e.prototype.stopAnimation=function(){var t;return clearTimeout(null!=(t=this.animation)?t._timeout:void 0)},e.prototype.render=function(t){var e,n;return t._png&&t._png.stopAnimation(),t._png=this,t.width=this.width,t.height=this.height,e=t.getContext("2d"),this.animation?(this.decodeFrames(e),this.animate(e)):(n=e.createImageData(this.width,this.height),this.copyToImageData(n,this.decodePixels()),e.putImageData(n,0,0))},e}(),t.PNG=e}("undefined"!=typeof window&&window||this);var i=function(){function t(){this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=null}return t.prototype={ensureBuffer:function(t){var e=this.buffer,n=e?e.byteLength:0;if(n>t)return e;for(var r=512;t>r;)r<<=1;for(var s=new Uint8Array(r),i=0;n>i;++i)s[i]=e[i];return this.buffer=s},getByte:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return this.buffer[this.pos++]},getBytes:function(t){var e=this.pos;if(t){this.ensureBuffer(e+t);for(var n=e+t;!this.eof&&this.bufferLength<n;)this.readBlock();var r=this.bufferLength;n>r&&(n=r)}else{for(;!this.eof;)this.readBlock();var n=this.bufferLength}return this.pos=n,this.buffer.subarray(e,n)},lookChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos])},getChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos++])},makeSubStream:function(t,e,n){for(var r=t+e;this.bufferLength<=r&&!this.eof;)this.readBlock();return new Stream(this.buffer,t,e,n)},skip:function(t){t||(t=1),this.pos+=t},reset:function(){this.pos=0}},t}(),o=function(){function t(t){throw new Error(t)}function e(e){var n=0,r=e[n++],s=e[n++];(-1==r||-1==s)&&t("Invalid header in flate stream"),8!=(15&r)&&t("Unknown compression method in flate stream"),((r<<8)+s)%31!=0&&t("Bad FCHECK in flate stream"),32&s&&t("FDICT bit set in flate stream"),this.bytes=e,this.bytesPos=n,this.codeSize=0,this.codeBuf=0,i.call(this)}if("undefined"==typeof Uint32Array)return void 0;var n=new Uint32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),r=new Uint32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),s=new Uint32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),o=[new Uint32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],a=[new Uint32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5];return e.prototype=Object.create(i.prototype),e.prototype.getBits=function(e){for(var n,r=this.codeSize,s=this.codeBuf,i=this.bytes,o=this.bytesPos;e>r;)"undefined"==typeof(n=i[o++])&&t("Bad encoding in flate stream"),s|=n<<r,r+=8;return n=s&(1<<e)-1,this.codeBuf=s>>e,this.codeSize=r-=e,this.bytesPos=o,n},e.prototype.getCode=function(e){for(var n=e[0],r=e[1],s=this.codeSize,i=this.codeBuf,o=this.bytes,a=this.bytesPos;r>s;){var u;"undefined"==typeof(u=o[a++])&&t("Bad encoding in flate stream"),i|=u<<s,s+=8}var c=n[i&(1<<r)-1],l=c>>16,f=65535&c;return(0==s||l>s||0==l)&&t("Bad encoding in flate stream"),this.codeBuf=i>>l,this.codeSize=s-l,this.bytesPos=a,f},e.prototype.generateHuffmanTable=function(t){for(var e=t.length,n=0,r=0;e>r;++r)t[r]>n&&(n=t[r]);for(var s=1<<n,i=new Uint32Array(s),o=1,a=0,u=2;n>=o;++o,a<<=1,u<<=1)for(var c=0;e>c;++c)if(t[c]==o){for(var l=0,f=a,r=0;o>r;++r)l=l<<1|1&f,f>>=1;for(var r=l;s>r;r+=u)i[r]=o<<16|c;++a}return[i,n]},e.prototype.readBlock=function(){function e(t,e,n,r,s){for(var i=t.getBits(n)+r;i-->0;)e[k++]=s}var i=this.getBits(3);if(1&i&&(this.eof=!0),i>>=1,0==i){var u,c=this.bytes,l=this.bytesPos;"undefined"==typeof(u=c[l++])&&t("Bad block header in flate stream");var f=u;"undefined"==typeof(u=c[l++])&&t("Bad block header in flate stream"),f|=u<<8,"undefined"==typeof(u=c[l++])&&t("Bad block header in flate stream");var d=u;"undefined"==typeof(u=c[l++])&&t("Bad block header in flate stream"),d|=u<<8,d!=(65535&~f)&&t("Bad uncompressed block length in flate stream"),this.codeBuf=0,this.codeSize=0;var h=this.bufferLength,p=this.ensureBuffer(h+f),m=h+f;this.bufferLength=m;for(var w=h;m>w;++w){if("undefined"==typeof(u=c[l++])){this.eof=!0;break}p[w]=u}return void(this.bytesPos=l)}var g,y;if(1==i)g=o,y=a;else if(2==i){for(var v=this.getBits(5)+257,b=this.getBits(5)+1,q=this.getBits(4)+4,x=Array(n.length),k=0;q>k;)x[n[k++]]=this.getBits(3);for(var _=this.generateHuffmanTable(x),A=0,k=0,C=v+b,S=new Array(C);C>k;){var E=this.getCode(_);16==E?e(this,S,2,3,A):17==E?e(this,S,3,3,A=0):18==E?e(this,S,7,11,A=0):S[k++]=A=E}g=this.generateHuffmanTable(S.slice(0,v)),y=this.generateHuffmanTable(S.slice(v,C))}else t("Unknown block type in flate stream");for(var p=this.buffer,z=p?p.length:0,T=this.bufferLength;;){var I=this.getCode(g);if(256>I)T+1>=z&&(p=this.ensureBuffer(T+1),z=p.length),p[T++]=I;else{if(256==I)return void(this.bufferLength=T);I-=257,I=r[I];var B=I>>16;B>0&&(B=this.getBits(B));var A=(65535&I)+B;I=this.getCode(y),I=s[I],B=I>>16,B>0&&(B=this.getBits(B));var O=(65535&I)+B;T+A>=z&&(p=this.ensureBuffer(T+A),z=p.length);for(var P=0;A>P;++P,++T)p[T]=p[T-O]}}},e}();!function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";"undefined"==typeof t.btoa&&(t.btoa=function(t){var n,r,s,i,o,a,u,c,l=0,f=0,d="",h=[];if(!t)return t;do n=t.charCodeAt(l++),r=t.charCodeAt(l++),s=t.charCodeAt(l++),c=n<<16|r<<8|s,i=c>>18&63,o=c>>12&63,a=c>>6&63,u=63&c,h[f++]=e.charAt(i)+e.charAt(o)+e.charAt(a)+e.charAt(u);while(l<t.length);d=h.join("");var p=t.length%3;return(p?d.slice(0,p-3):d)+"===".slice(p||3)}),"undefined"==typeof t.atob&&(t.atob=function(t){var n,r,s,i,o,a,u,c,l=0,f=0,d="",h=[];if(!t)return t;t+="";do i=e.indexOf(t.charAt(l++)),o=e.indexOf(t.charAt(l++)),a=e.indexOf(t.charAt(l++)),u=e.indexOf(t.charAt(l++)),c=i<<18|o<<12|a<<6|u,n=c>>16&255,r=c>>8&255,s=255&c,h[f++]=64==a?String.fromCharCode(n):64==u?String.fromCharCode(n,r):String.fromCharCode(n,r,s);while(l<t.length);return d=h.join("")}),Array.prototype.map||(Array.prototype.map=function(t){if(void 0===this||null===this||"function"!=typeof t)throw new TypeError;for(var e=Object(this),n=e.length>>>0,r=new Array(n),s=arguments.length>1?arguments[1]:void 0,i=0;n>i;i++)i in e&&(r[i]=t.call(s,e[i],i,e));return r}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){"use strict";if(void 0===this||null===this||"function"!=typeof t)throw new TypeError;for(var n=Object(this),r=n.length>>>0,s=0;r>s;s++)s in n&&t.call(e,n[s],s,n)}),Object.keys||(Object.keys=function(){"use strict";var t=Object.prototype.hasOwnProperty,e=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],r=n.length;return function(s){if("object"!=typeof s&&("function"!=typeof s||null===s))throw new TypeError;var i,o,a=[];for(i in s)t.call(s,i)&&a.push(i);if(e)for(o=0;r>o;o++)t.call(s,n[o])&&a.push(n[o]);return a}}()),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),String.prototype.trimLeft||(String.prototype.trimLeft=function(){return this.replace(/^\s+/g,"")}),String.prototype.trimRight||(String.prototype.trimRight=function(){return this.replace(/\s+$/g,"")})}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this)}({},function(){return this}());