(this.webpackJsonppwa_react_video=this.webpackJsonppwa_react_video||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),s=n.n(r),o=n(2),i=n.n(o),l=n(3),u=n(15),m=n(14),p=n.n(m),d=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:t,units:"metric",APPID:"f33a484cf794d08d0148764789aaba32"}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=["delete","remove","clear"],w=function(e){var t=new(window.SpeechSynthesisUtterance||window.webkitSpeechSynthesisUtterance);t.volume=1,t.rate=1,t.pitch=1,t.text=e.message?e.message:"Currently in ".concat(e.name,", its ").concat(Math.round(e.main.temp)," celsius. Due to humidity of ").concat(e.main.humidity,", it feels like ").concat(e.main.feels_like," celsius. There will be ").concat(e.weather[0].description),console.log(t.text);var n=window.speechSynthesis||window.webkitspeechSynthesis;n.cancel(),n.speak(t)},f=(n(39),function(){var e=c.a.useRef(),t=Object(a.useState)({}),n=Object(u.a)(t,2),r=n[0],s=n[1],o=function(){var t=Object(l.a)(i.a.mark((function t(n){var a,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d(e.current.value);case 3:c=t.sent,a=c,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a=t.t0.response.data;case 10:s(a),w(a);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),m=function(t){e.current.value=t,o()},p=function(){e.current.value="",s({})},f=function(){return r.cod>400?c.a.createElement("div",{className:"error"},r.message):c.a.createElement("div",{className:"city"},c.a.createElement("h2",{className:"city-name"},c.a.createElement("span",null,r.name),c.a.createElement("sup",null,r.sys.country)),c.a.createElement("div",{className:"city-temp"},Math.round(r.main.temp),c.a.createElement("sup",null,"\xb0C")),c.a.createElement("div",{className:"info"},c.a.createElement("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/".concat(r.weather[0].icon,"@2x.png"),alt:r.weather[0].description}),c.a.createElement("p",null,r.weather[0].description)))};return c.a.createElement("div",{className:"main-container"},c.a.createElement("div",{className:"header"},"Weathe Monitoring App"),c.a.createElement("div",{className:"controller"},c.a.createElement("input",{type:"text",className:"search",placeholder:"Search...",ref:e}),c.a.createElement("input",{className:"button",type:"button",onClick:o,value:"Check"}),e.current&&e.current.value&&c.a.createElement("input",{className:"button",type:"button",onClick:p,value:"Clear Result"}),c.a.createElement("input",{className:"button",type:"button",onClick:function(){!function(e,t){var n=document.getElementById("root"),a=new(window.SpeechRecognition||window.webkitSpeechRecognition);a.start(),a.onstart=function(){console.log("Started"),n.style.backgroundImage="url(https://media.giphy.com/media/9ryCWhW8nmQms/source.gif)"},a.onresult=function(a){var c=a.resultIndex,r=a.results[c][0].transcript;console.log("Told",r),n.style.background="#a8b8d6",h.some((function(e){return r.includes(e.toLowerCase())}))?t():e(r)}}(m,p)},value:"Speak Now"})),r.cod&&c.a.createElement(f,null))});s.a.render(c.a.createElement(f,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2e5c5073.chunk.js.map