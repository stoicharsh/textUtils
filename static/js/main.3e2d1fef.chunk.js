(this["webpackJsonptext-analyzer"]=this["webpackJsonptext-analyzer"]||[]).push([[0],[,,,,,function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);c(5);var n=c(4),o=c.n(n),l=c(3),s=c(1),r=(c(10),c(11),c(0));var i=function(e){return Object(r.jsx)("input",{type:"checkbox",className:"toggle",onClick:function(){"light"===e.mode?e.setMode("dark"):e.setMode("light")}})};function a(e){return Object(r.jsxs)("div",{className:"navbar",style:"light"===e.mode?{backgroundColor:"rgb(249, 244, 244)",color:"black"}:{backgroundColor:"#280202",color:"white"},children:[Object(r.jsx)("span",{children:"Text-Analyzer"}),Object(r.jsxs)("div",{className:"links",children:[Object(r.jsx)("a",{href:"#",style:{color:"light"===e.mode?"black":"white"},children:"Home"}),Object(r.jsx)("a",{href:"#",style:{color:"light"===e.mode?"black":"white"},children:"Services"}),Object(r.jsx)("a",{href:"#",style:{color:"light"===e.mode?"black":"white"},children:"Our Team"}),Object(r.jsx)("a",{href:"#",style:{color:"light"===e.mode?"black":"white"},children:"Contact Us"})]}),Object(r.jsx)(i,{mode:e.mode,setMode:e.setMode}),Object(r.jsx)("span",{className:"mode",children:"Enable Dark mode"})]})}c(13);function d(e){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("label",{htmlFor:"test",style:{color:"light"===e.mode?"black":"white"},children:"Paste or write the content inside given block"}),Object(r.jsx)("textarea",{id:"test",type:"text",cols:"73",rows:"11",onChange:function(t){return e.setText(t.target.value)},value:e.text}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{onClick:function(){return document.querySelector(".reveal").style.display="block"},children:"Submit text"}),Object(r.jsx)("button",{onClick:function(){e.setText(""),document.querySelector(".reveal").style.display="none"},children:"Clear text"}),Object(r.jsx)("button",{onClick:function(){return e.setText(e.text.toUpperCase())},children:"Convert to Uppercase"}),Object(r.jsx)("button",{onClick:function(){return e.setText(e.text.toLowerCase())},children:"Convert to Lowercase"}),Object(r.jsx)("button",{onClick:function(){var e=document.querySelector("textarea");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy text"})]})]})}c(14);function j(e){return Object(r.jsxs)("div",{className:"container reveal",style:{color:"light"===e.mode?"black":"white"},children:[Object(r.jsx)("h2",{children:"Your Text Summary"}),Object(r.jsxs)("div",{className:"block",style:{border:"light"===e.mode?"0.2vw solid black":"0.2vw solid white"},children:[Object(r.jsxs)("span",{children:["No. of chars (with spaces)  :   ",e.text.replace("\n","").length]}),Object(r.jsxs)("span",{children:["No. of chars (without spaces)  :   ",e.text.split(" ").join("").replace("\n","").length]}),Object(r.jsxs)("span",{children:["No. of words  :   ",0===e.text.length?0:e.text.replace(/\s+/g," ").trim().replace("\n","").split(" ").length]}),Object(r.jsxs)("span",{children:["No. of sentences  :   ",0===e.text.length?0:e.text.split("\n").length]})]})]})}function b(e){return document.querySelector("body").style.background="light"===e.mode?"lightyellow":"url(https://www.wallpapertip.com/wmimgs/61-610111_galaxy-wallpaper-cartoon-free.jpg)",document.querySelector("body").style.backgroundSize="cover",Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{text:e.text,setText:e.setText,mode:e.mode}),Object(r.jsx)(j,{text:e.text,mode:e.mode})]})}function h(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],o=Object(s.useState)("light"),i=Object(l.a)(o,2),d=i[0],j=i[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a,{text:c,setText:n,mode:d,setMode:j}),Object(r.jsx)(b,{text:c,setText:n,mode:d})]})}o.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.3e2d1fef.chunk.js.map