(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var n=i(8),a=i.n(n),c=(i(16),i(11)),r=i(4),l=i(2),s=(i(17),i(18),i(19),i(0)),o=function(e){var t=e.movie;return Object(s.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("figure",{className:"image is-4by3",children:Object(s.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsxs)("div",{className:"media",children:[Object(s.jsx)("div",{className:"media-left",children:Object(s.jsx)("figure",{className:"image is-48x48",children:Object(s.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(s.jsx)("div",{className:"media-content",children:Object(s.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(s.jsxs)("div",{className:"content",children:[t.description,Object(s.jsx)("br",{}),Object(s.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(s.jsx)("div",{className:"movies",children:t.map((function(e){return Object(s.jsx)(o,{movie:e},e.imdbId)}))})},m=i(3),b=i(1),u=i(9),j=i.n(u);var h=function(e){var t=e.name,i=e.value,n=e.label,a=void 0===n?t:n,c=e.placeholder,o=void 0===c?"Enter ".concat(a):c,d=e.required,m=void 0!==d&&d,b=e.onChange,u=void 0===b?function(){}:b,h=e.onBlur,O=void 0===h?function(){}:h,g=e.touched,v=e.valid,p=Object(l.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),f=Object(r.a)(p,1)[0],w=g&&m&&!i;return Object(s.jsxs)("div",{className:"field",children:[Object(s.jsx)("label",{className:"label",htmlFor:f,children:a}),Object(s.jsx)("div",{className:"control",children:Object(s.jsx)("input",{type:"text",id:f,"data-cy":"movie-".concat(t),className:j()("input",{"is-danger":w}),placeholder:o,value:i,onChange:function(e){u(e.target.value,t)},onBlur:function(){O(i,t)}})}),w&&Object(s.jsx)("p",{className:"help is-danger",children:"".concat(a," is required")}),!w&&v&&Object(s.jsx)("p",{className:"help is-danger",children:"The ".concat(a," is incorrect")})]})};function O(e){return!!/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/.test(e)&&e}function g(e){return"string"===typeof e&&""!==e.trim()}function v(e,t){return Object.keys(e).reduce((function(i,n){var a=i;return a[n]=e[n][t],a}),{})}var p=function(e){var t=e.onAdd,i=Object(l.useState)(0),n=Object(r.a)(i,1)[0],a=Object(l.useState)({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),c=Object(r.a)(a,2),o=c[0],d=c[1],u=Object.keys(o),j={title:{request:!1,valid:!1}};u.forEach((function(e){j[e]={request:!1,valid:!1}}));var p=v(j,"request"),f=v(j,"valid"),w=Object(l.useState)(p),x=Object(r.a)(w,2),M=x[0],U=x[1],N=Object(l.useState)(f),I=Object(r.a)(N,2),B=I[0],y=I[1],k=function(e,t){d(Object(b.a)(Object(b.a)({},o),{},Object(m.a)({},e,t)))},T=function(e,t){e.length?"description"!==t&&function(e,t,i){switch(e){case"title":case"imdbId":i((function(i){return Object(b.a)(Object(b.a)({},i),{},Object(m.a)({},e,!g(t)))}));break;case"imgUrl":case"imdbUrl":i((function(i){return Object(b.a)(Object(b.a)({},i),{},Object(m.a)({},e,!O(t)))}));break;default:i((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(m.a)({},e,!1))}))}}(t,e,y):U(Object(b.a)(Object(b.a)({},M),{},Object(m.a)({},t,!0)))},_=!o.title||!o.imgUrl||!o.imdbUrl||!o.imdbId||B.title||B.imgUrl||B.imdbUrl||B.imdbId;return Object(s.jsxs)("form",{className:"NewMovie",children:[Object(s.jsx)("h2",{className:"title",children:"Add a movie"}),Object(s.jsx)(h,{name:"title",label:"Title",value:o.title,touched:M.title,valid:B.title,onChange:function(e,t){k(t,e)},onBlur:function(e){return T(e,"title")},required:!0}),Object(s.jsx)(h,{name:"description",label:"Description",value:o.description,touched:M.description,valid:B.description,onChange:function(e,t){k(t,e)},onBlur:function(e){return T(e,"description")}}),Object(s.jsx)(h,{name:"imgUrl",label:"Image URL",value:o.imgUrl,touched:M.imgUrl,valid:B.imgUrl,onChange:function(e,t){k(t,e)},onBlur:function(e){return T(e,"imgUrl")},required:!0}),Object(s.jsx)(h,{name:"imdbUrl",label:"Imdb URL",value:o.imdbUrl,touched:M.imdbUrl,valid:B.imdbUrl,onChange:function(e,t){k(t,e)},onBlur:function(e){return T(e,"imdbUrl")},required:!0}),Object(s.jsx)(h,{name:"imdbId",label:"Imdb ID",value:o.imdbId,touched:M.imdbId,valid:B.imdbId,onChange:function(e,t){k(t,e)},onBlur:function(e){return T(e,"imdbId")},required:!0}),Object(s.jsx)("div",{className:"field is-grouped",children:Object(s.jsx)("div",{className:"control",children:Object(s.jsx)("button",{type:"button","data-cy":"submit-button",className:"button is-link",onClick:function(){var e=o.title,i=o.imgUrl,n=o.imdbUrl,a=o.imdbId;e&&i&&n&&a&&(t(o),d({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),U(p),y(f))},disabled:_,children:"Add"})})})]},n)},f=i(10),w=function(){var e=Object(l.useState)(f),t=Object(r.a)(e,2),i=t[0],n=t[1];return Object(s.jsxs)("div",{className:"page",children:[Object(s.jsx)("div",{className:"page-content",children:Object(s.jsx)(d,{movies:i})}),Object(s.jsx)("div",{className:"sidebar",children:Object(s.jsx)(p,{onAdd:function(e){n((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};a.a.render(Object(s.jsx)(w,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.db29f618.chunk.js.map