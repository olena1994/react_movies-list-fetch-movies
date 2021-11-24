(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(8),n=c.n(s),i=(c(15),c(10)),a=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsx)("div",{children:t&&Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})})},j=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},d=c(3),b=c.n(d),m=c(6),u=(c(21),c(9)),v=c.n(u),h="http://www.omdbapi.com",O="/?apikey=7ff53734&t";function x(e){return f.apply(this,arguments)}function f(){return(f=Object(m.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h).concat(O,"=").concat(t));case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(e){var t=e.addMovie,c=Object(r.useState)(""),s=Object(a.a)(c,2),n=s[0],i=s[1],j=Object(r.useState)(null),d=Object(a.a)(j,2),u=d[0],h=d[1],O=Object(r.useState)(!0),f=Object(a.a)(O,2),p=f[0],N=f[1],g=Object(r.useState)(!0),w=Object(a.a)(g,2),y=w[0],k=w[1],S=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(n);case 2:"False"===(t=e.sent).Response?(k(!1),N(!1)):(h(t),k(!0));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),t(u),i("")},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:v()("input",{"is-danger":!y}),value:n,onChange:function(e){i(e.target.value),N(!0)}})})]}),Object(l.jsx)("p",{className:"help is-danger",children:!p&&"Can not find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light",onClick:S,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit",className:"button is-primary",children:"Add to the list"})})]})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"".concat(y?"Preview":"Movie not found")}),y&&u&&Object(l.jsx)(o,{movie:u})]})]})},N=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(j,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(p,{addMovie:function(e){e&&!c.some((function(t){return e.imdbID===t.imdbID}))&&s((function(t){return[].concat(Object(i.a)(t),[e])}))}})})]})};n.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.4dba674c.chunk.js.map