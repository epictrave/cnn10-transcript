(this["webpackJsonpcnn10-transcript"]=this["webpackJsonpcnn10-transcript"]||[]).push([[0],{181:function(e,t,n){e.exports=n(418)},186:function(e,t,n){},200:function(e,t,n){},235:function(e,t){},249:function(e,t){},251:function(e,t){},418:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(174),o=n.n(c),l=(n(186),n(21)),u=n.n(l),s=n(56),i=n(179),m=n(175),p=n.n(m),d=(n(200),n(176)),f=n.n(d),g=n(177),h=n.n(g),v=function(){var e=Object(s.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://cors-anywhere.herokuapp.com/".concat(t)).then((function(e){return e.data})).catch((function(e){return null}));case 2:if(null!==(n=e.sent)){e.next=5;break}return e.abrupt("return",null);case 5:return a=h.a.load(n),r=a(".cnnBodyText").text().replace("ETTHIS","ET.  \nTHIS").replace(/\.\s+/gm,".aaaaaa").replace(/\s+/gm," ").replace(/.aaaaaa/gm,".\n"),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.url,n=e.title,c=Object(a.useState)(""),o=Object(i.a)(c,2),l=o[0],m=o[1];return Object(a.useEffect)((function(){Object(s.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:(n=e.sent)&&m(n);case 4:case"end":return e.stop()}}),e)})))()})),r.a.createElement("div",null,r.a.createElement("h1",null,n),r.a.createElement("div",{className:"content"},l.split("\n").map((function(e,t){return r.a.createElement("p",{key:t},e)}))))},b=function(e){var t=e.location,n=p.a.parse(t.search),c=n.url,o=n.translate,l=n.title;return console.log(n),Object(a.useEffect)((function(){var e=document.createElement("script");e.src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",e.async=!0;var t=document.createElement("script");return t.type="text/javascript",t.text="function googleTranslateElementInit() {\n      new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');\n    }",o&&(document.body.appendChild(e),document.body.appendChild(t)),function(){o&&(document.body.removeChild(e),document.body.removeChild(t))}}),[o]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"google_translate_element"}),r.a.createElement(E,{url:c,title:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=n(180),y=n(1);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w.a,null,r.a.createElement(y.c,null,r.a.createElement(y.a,{component:b})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[181,1,2]]]);
//# sourceMappingURL=main.5fe25453.chunk.js.map