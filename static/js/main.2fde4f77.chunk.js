(this["webpackJsonpmy-calculator"]=this["webpackJsonpmy-calculator"]||[]).push([[0],{35:function(n,c,t){},36:function(n,c,t){},37:function(n,c,t){},38:function(n,c,t){},40:function(n,c,t){},49:function(n,c){},50:function(n,c,t){"use strict";t.r(c);var e=t(14),o=t.n(e),u=t(28),l=t.n(u),r=(t(35),t(36),t(13)),i=(t(37),t(38),t(8));var a=function(n){return Object(i.jsx)("div",{className:"CalculatorButton",children:Object(i.jsx)("button",{className:"calc-button",onClick:function(){return c=n.number,console.log("You clicked ",c),void n.onCalcButtonClicked(c);var c},children:Object(i.jsx)("p",{className:"calc-button-text",children:n.number})})})};t(40);var s=function(n){return Object(i.jsx)("div",{className:"CalculatorField",children:Object(i.jsx)("p",{className:"field-text",children:n.chainOfOperations})})},j=t(54),b=t(53),d=/(\/\*\+\-\.)?[0-9]+$/gm;var C=function(){var n=Object(e.useState)(""),c=Object(r.a)(n,2),t=c[0],o=c[1],u=Object(e.useState)(""),l=Object(r.a)(u,2),C=l[0],O=l[1],f=Object(e.useState)(!1),m=Object(r.a)(f,2),x=m[0],k=m[1];function v(n){if(console.log("Calculator: you clicked ",n),h(n)){var c=t+n;x?(O(""+n),k(!1)):O(C+n),o(c),console.log("newChainOfOperations ",c)}}function B(n){if(console.log("Calculator: you clicked ",n),h(n)){var c=t+n;k(!0),o(c)}}function h(n){return"number"==typeof n||!p(t.slice(-1))&&""!==t.slice(-1)?(console.log("Concatenation is valid"),!0):(console.log("Concatenation is not valid"),!1)}function p(n){return"+"===n||"-"===n||"*"===n||"/"===n||"."===n}return Object(i.jsxs)("div",{className:"Calculator",children:[Object(i.jsx)("p",{className:"calc-title",children:" Calculator "}),Object(i.jsx)(s,{chainOfOperations:C}),Object(i.jsxs)("div",{className:"calc-row",children:[Object(i.jsx)(a,{number:"C",onCalcButtonClicked:function(){return O(""),void o("")}}),Object(i.jsx)(a,{onCalcButtonClicked:function(){return console.log("No action")}}),Object(i.jsx)(a,{number:"+-",onCalcButtonClicked:function(n){return function(){var n=C;parseInt(n)>0?O("-"+n):(n=n.slice(1),O(n));var c=t;c=c.replace(d,"-"+n),o(c)}()}}),Object(i.jsx)(a,{number:"/",onCalcButtonClicked:function(n){return B(n)}})]}),Object(i.jsxs)("div",{className:"calc-row",children:[Object(i.jsx)(a,{number:7,onCalcButtonClicked:function(n){return v(n)}}),Object(i.jsx)(a,{number:8,onCalcButtonClicked:function(n){return v(n)}}),Object(i.jsx)(a,{number:9,onCalcButtonClicked:function(n){return v(n)}}),Object(i.jsx)(a,{number:"*",onCalcButtonClicked:function(n){return B(n)}})]}),Object(i.jsxs)("div",{className:"calc-row",children:[Object(i.jsx)(a,{number:4,onCalcButtonClicked:function(n){return v(n)}}),Object(i.jsx)(a,{number:5,onCalcButtonClicked:function(n){return v(n)}}),Object(i.jsx)(a,{number:6,onCalcButtonClicked:function(n){return v(n)}}),Object(i.jsx)(a,{number:"-",onCalcButtonClicked:function(n){return B(n)}})]}),Object(i.jsxs)("div",{className:"calc-row",children:[Object(i.jsx)(a,{number:1,onCalcButtonClicked:function(n){return v(n)}}),Object(i.jsx)(a,{number:2,onCalcButtonClicked:function(n){return v(n)}}),Object(i.jsx)(a,{number:3,onCalcButtonClicked:function(n){return v(n)}}),Object(i.jsx)(a,{number:"+",onCalcButtonClicked:function(n){return B(n)}})]}),Object(i.jsxs)("div",{className:"calc-row",children:[Object(i.jsx)(a,{onCalcButtonClicked:function(){return console.log("No action")}}),Object(i.jsx)(a,{number:0,onCalcButtonClicked:function(n){return v(n)}}),Object(i.jsx)(a,{number:".",onCalcButtonClicked:function(n){return v(n)}}),Object(i.jsx)(a,{number:"=",onCalcButtonClicked:function(){return function(){if(""!==t&&!p(t.slice(-1))){var n=""+Object(j.a)(b.a).evaluate(t);O(n),o(n)}}()}})]})]})};var O=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("div",{className:"calculator-container",children:Object(i.jsx)(C,{})})})};l.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.2fde4f77.chunk.js.map