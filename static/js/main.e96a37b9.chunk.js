(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(5),c=a(7),s=a(2),o=(a(13),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],u=a(0),m=function(e){var t=e.onSubmit,a=e.users,n=Object(o.useState)(""),i=Object(s.a)(n,2),r=i[0],c=i[1],l=Object(o.useState)(!1),d=Object(s.a)(l,2),m=d[0],j=d[1],b=Object(o.useState)(0),h=Object(s.a)(b,2),O=h[0],f=h[1],p=Object(o.useState)(!1),x=Object(s.a)(p,2),v=x[0],S=x[1];return Object(u.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),j(!r),S(!O),r&&O&&(t({id:0,title:r,completed:!1,userId:O}),c(""),f(0))},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:r,onChange:function(e){c(e.target.value),j(!1)}}),m&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("select",{"data-cy":"userSelect",value:O,onChange:function(e){f(+e.target.value),S(!1)},children:[Object(u.jsx)("option",{value:0,disabled:!0,children:"Choose a user"}),a.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),v&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},j=function(e){return Math.max.apply(Math,Object(r.a)(e.map((function(e){return e.id}))))+1},b=function(e){var t=e.user,a=t.email,n=t.name;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},h=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.userId,c=function(e,t){return e.find((function(e){return e.id===t}))||null}(l,r);return Object(u.jsxs)("article",{"data-id":a,className:"TodoInfo ".concat(i&&"TodoInfo--completed"),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:n}),c&&Object(u.jsx)(b,{user:c})]})},O=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(h,{todo:e},e.id)}))})},f=function(){var e=Object(o.useState)(d),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsx)(m,{onSubmit:function(e){var t=Object(c.a)(Object(c.a)({},e),{},{id:j(a)});n((function(e){return[].concat(Object(r.a)(e),[t])}))},users:l}),Object(u.jsx)(O,{todos:a})]})};i.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e96a37b9.chunk.js.map