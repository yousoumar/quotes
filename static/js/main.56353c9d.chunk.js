(this.webpackJsonpquotes=this.webpackJsonpquotes||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(4),u=n.n(c),r=(n(9),n(2)),s=n.p+"static/media/bg.e8061912.jpg",h=(n(10),n(0));var i=function(){var t=Object(a.useState)({text:"The way we communicate with others and with ourselves ultimately determines the quality of our lives.",author:"Tony Robbins"}),e=Object(r.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)([]),u=Object(r.a)(c,2),i=u[0],b=u[1],l=Object(a.useState)(!1),j=Object(r.a)(l,2),d=j[0],f=j[1],m=Object(a.useState)([]),p=Object(r.a)(m,2),O=p[0],x=p[1],g=Object(a.useState)(s),v=Object(r.a)(g,2),w=v[0],y=v[1];return document.body.style.backgroundImage="url(".concat(w,")"),Object(a.useEffect)((function(){fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(t){b(t)})).catch((function(){f(!0),o({text:"We have issues with our database. Come back later :)",author:"The Developer"})})),fetch("https://pixabay.com/api/?key=19829269-60c1bb959fa930d104d880ae3").then((function(t){return t.json()})).then((function(t){t=t.hits.map((function(t){return t.largeImageURL})),x(t)})).catch((function(){x([s])}))}),[]),Object(h.jsxs)("div",{id:"app",children:[Object(h.jsxs)("div",{className:"quote-author",children:[Object(h.jsxs)("p",{className:"quote",children:['"',n.text,'"']}),Object(h.jsxs)("p",{className:"author",children:["by ",n.author?n.author:"Unknown author"]})]}),!d&&Object(h.jsxs)("div",{className:"buttons-container",children:[n.author&&Object(h.jsxs)("button",{className:"new-quote-button",onClick:function(){return function(t){y(O[Math.floor(Math.random()*O.length)]);var e=i.filter((function(e){return e.author===t}));o(e[Math.floor(Math.random()*e.length)])}(n.author)},children:["More of ",n.author.split(" ")[0]]}),Object(h.jsx)("button",{className:"new-quote-button",onClick:function(){i.length>0&&(y(O[Math.floor(Math.random()*O.length)]),o(i[Math.floor(Math.random()*i.length)]))},children:"New quote"})]})]})};u.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(i,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.56353c9d.chunk.js.map