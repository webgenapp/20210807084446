(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{76:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(43),r=n.n(a),o=n(14),s=n.n(o),f=n(27),u=n(80),j=n(29),b=n(3);var d=function(e){var t=e.coffee,n=e.onSubmit,c={flavour:t?t.flavour:""};return Object(b.jsx)(j.c,{initialValues:c,validate:function(){return{}},onSubmit:n,children:function(e){var t=e.isSubmitting;return Object(b.jsxs)(j.b,{children:[Object(b.jsx)(j.a,{type:"text",name:"flavour",placeholder:"Flavour"}),Object(b.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})},l=n(6);var O=function(){var e=Object(f.b)(),t=Object(l.f)(),n=Object(u.a)((function(e){return s.a.post("/api/v1/coffees",e)}),{onSuccess:function(){e.invalidateQueries("coffees")}});return Object(b.jsx)(d,{onSubmit:function(e,c){var i=c.setSubmitting;n.mutate(e),null===i||void 0===i||i(!1),t.push("/coffees")}})},h=n(79);function v(e){var t=e.coffee,n=e.handleEdit,c=e.handleDelete,i=e.handleDetail;return Object(b.jsxs)(b.Fragment,{children:[t.flavour,Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"button",onClick:function(){return i(t)},children:"detail"}),Object(b.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"edit"}),Object(b.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"delete"})]})}var x=function(){var e,t,n=Object(l.f)(),c=Object(f.b)(),i=Object(h.a)("coffees",(function(){return s.a.get("/api/v1/coffees").then((function(e){return e.data}))})),a=Object(u.a)((function(e){var t=e.id;return s.a.delete("/api/v1/coffees/".concat(t))}),{onSuccess:function(){c.invalidateQueries("coffees")}}),r=function(e){var t=e.id;n.push("/coffees/update/".concat(t))},o=function(e){var t=e.id;a.mutate({id:t})},j=function(e){var t=e.id;n.push("/coffees/detail/".concat(t))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:[null===(e=i.data)||void 0===e?void 0:e.length," coffees"]}),Object(b.jsx)("ul",{children:null===(t=i.data)||void 0===t?void 0:t.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(v,{coffee:e,handleDelete:o,handleEdit:r,handleDetail:j})},e.id)}))})]})};var p=function(){var e=Object(l.g)().id,t=Object(h.a)(["coffees",e],(function(){return s.a.get("/api/v1/coffees/".concat(e)).then((function(e){return e.data}))})),n=t.data;if(t.isLoading)return Object(b.jsx)("div",{children:"Loading..."});var c=n;return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:c.flavour}),Object(b.jsx)("br",{})]})};var m=function(){var e=Object(l.g)().id,t=Object(f.b)(),n=Object(l.f)(),c=Object(h.a)(["coffees",e],(function(){return s.a.get("/api/v1/coffees/".concat(e)).then((function(e){return e.data}))})),i=c.data,a=c.isLoading,r=Object(u.a)((function(t){return s.a.put("/api/v1/coffees/".concat(e),t).then((function(e){return e.data}))}),{onSuccess:function(){t.invalidateQueries("coffees")}});if(a)return Object(b.jsx)("div",{children:"Loading..."});var o=i;return Object(b.jsx)(d,{coffee:o,onSubmit:function(e,t){var c=t.setSubmitting;r.mutate(e),null===c||void 0===c||c(!1),n.push("/coffees")}})},g=n(15);var S=function(){return Object(b.jsxs)(g.a,{children:[Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:"flex",children:[Object(b.jsxs)("li",{children:[Object(b.jsx)(g.b,{to:"/",children:"Home"}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("li",{className:"ml-10",children:[Object(b.jsx)(g.b,{to:"/coffees",children:"Coffees"}),Object(b.jsx)("br",{}),Object(b.jsx)(g.b,{to:"/coffees/create",children:"Create a Coffee"}),Object(b.jsx)("br",{})]})]})}),Object(b.jsxs)("main",{children:[Object(b.jsx)(l.a,{path:"/coffees",children:Object(b.jsx)("h1",{children:"Coffees"})}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/coffees/create",component:O}),Object(b.jsx)(l.a,{path:"/coffees/update/:id",component:m}),Object(b.jsx)(l.a,{path:"/coffees/detail/:id",component:p}),Object(b.jsx)(l.a,{path:"/coffees",component:x})]})]})]})},C=new(n(78).a);r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(f.a,{client:C,children:Object(b.jsx)(S,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.e5b6dd9e.chunk.js.map