(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(18),l=a.n(n),o=(a(25),a(8)),r=a(20),i=(a(26),a(9)),d=a(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",style:{borderBottom:"2px solid black"},children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"#",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link",to:"/About",children:"About"})})]}),e.searchBar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}b.defaultProps={title:"Your Title Here",searchBar:!0};var j=function(e){var t=e.todo,a=e.onDelete;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"card text-white my-3",style:{backgroundColor:"#014f86",border:"white solid"},children:[Object(d.jsxs)("span",{className:"card-header d-flex justify-content-between",children:[Object(d.jsx)("h4",{className:"card-title  d-inline",children:t.title}),Object(d.jsxs)("p",{className:" text-mid d-inline ",children:["Due Date : ",t.date,", ",t.Time]})]}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("p",{className:"card-text",children:t.desc})}),Object(d.jsx)("div",{className:"card-footer text-end",children:Object(d.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){a(t)},children:"Delete"})})]})})},m=function(e){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{className:"text-center my-3",children:"Todo List"}),0===e.Todos.length?"Nothing is to be Done, Take some rest.":e.Todos.map((function(t){return Object(d.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))]})},u=function(){return Object(d.jsx)("footer",{className:"bg-dark text-light",style:{position:"relative",top:"35vh",width:"100%"},children:Object(d.jsx)("p",{className:"text-center py-2 ",children:"Copyright \xa9 Todo-List.com"})})},h=function(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],n=a[1],l=Object(c.useState)(""),r=Object(o.a)(l,2),i=r[0],b=r[1],j=Object(c.useState)(""),m=Object(o.a)(j,2),u=m[0],h=m[1],x=Object(c.useState)(""),O=Object(o.a)(x,2),f=O[0],p=O[1];return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h4",{className:"text-center",children:"Add What To do"}),Object(d.jsx)("form",{className:"card ",onSubmit:function(t){t.preventDefault(),s&&i?(e.addTodo(s,i,u,f),n(""),b(""),h(""),p("")):alert("Title or Description of a Todo cannot be empty")},style:{backgroundColor:"#1d3557",border:"white solid"},children:Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsxs)("div",{className:"form-floating mx-3 my-3",children:[Object(d.jsx)("input",{type:"text",value:s,onChange:function(e){n(e.target.value)},className:"form-control",id:"todoTitle","aria-describedby":"emailHelp",placeholder:"a"}),Object(d.jsx)("label",{htmlFor:"todoTitle",children:"Title"})]}),Object(d.jsxs)("div",{className:"form-floating mx-3 mb-3",children:[Object(d.jsx)("input",{type:"text",value:i,onChange:function(e){b(e.target.value)},className:"form-control",id:"todoDesc",placeholder:"a"}),Object(d.jsx)("label",{htmlFor:"todoDesc",className:"form-label",children:"Description"})]}),Object(d.jsxs)("div",{className:"text-white d-flex justify-content-start",children:[Object(d.jsxs)("span",{className:"d-flex flex-row mx-3",children:[Object(d.jsx)("label",{htmlFor:"dueDate",className:"align-self-center  form-label",children:"Due Date"}),Object(d.jsx)("input",{type:"Date",value:u,onChange:function(e){h(e.target.value)},className:"form-control",id:"Date"})]}),Object(d.jsxs)("span",{className:"d-flex flex-row mx-3",children:[Object(d.jsx)("label",{htmlFor:"Time",className:"form-label align-self-center mx-3",children:"Time "}),Object(d.jsx)("input",{type:"Time",value:f,onChange:function(e){p(e.target.value)},className:"form-control",id:"Time"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-sm btn-success mx-3 ms-auto p-2",children:"Add"})]})]})})]})},x=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{className:"my-3",children:"This is an About page"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quisquam dolores molestias consequuntur illo excepturi sed? Culpa tempore exercitationem eum facilis, eius officiis cupiditate quod. Veniam ea consequuntur fuga ratione optio obcaecati culpa harum?"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("h3",{className:"my-3",children:"Author : Lakshay"})]})},O=a(2);var f=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("Deleting todo",e),j(l.filter((function(t){return t!==e})))},a=function(e,t,a,c){console.log("Adding todo to List",e,t,a,c);var s={sno:0===l.length?1:l[l.length-1].sno+1,title:e,desc:t,date:a,Time:c};j([].concat(Object(r.a)(l),[s])),console.log(s)},s=Object(c.useState)(e),n=Object(o.a)(s,2),l=n[0],j=n[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(l))}),[l]),Object(c.useEffect)((function(){document.body.style.backgroundColor="#cdb4db"}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b,{title:"Todos List",searchBar:!1}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{addTodo:a}),Object(d.jsx)(m,{Todos:l,onDelete:t})]})}}),Object(d.jsx)(O.a,{exact:!0,path:"/About",children:Object(d.jsx)(x,{})})]}),Object(d.jsx)(u,{})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),n(e),l(e)}))};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.9e9a10e3.chunk.js.map