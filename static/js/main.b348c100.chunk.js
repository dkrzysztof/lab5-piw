(this["webpackJsonppiw-zadania-1-4"]=this["webpackJsonppiw-zadania-1-4"]||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/logo.8be16200.png"},22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),i=(a(27),a(1)),o=a(2),s=a(10),m=a.n(s);function u(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"top"},l.a.createElement(i.b,{className:"btn btn-lg",to:"/z1"},"Zadania 1"),l.a.createElement(i.b,{className:"btn btn-lg",to:"/z2"},"Zadanie 2"),l.a.createElement(i.b,{className:"btn btn-lg",to:"/z3"},"Zadanie 3"),l.a.createElement(i.b,{className:"btn btn-lg",to:"/z4"},"Zadanie 4")),l.a.createElement("div",{className:"holder"},l.a.createElement("img",{className:"md-size",src:m.a,alt:"logo"}),l.a.createElement("h4",null,e.title),l.a.createElement("hr",null),l.a.createElement("p",null,"Witaj na stronie s\u0142u\u017c\u0105cej do dzielenia si\u0119 obrazkami i informacjami!",l.a.createElement("br",null),"Podziel si\u0119 z ca\u0142ym \u015bwiatem twoj\u0105 weso\u0142\u0105 wiadomo\u015bci\u0105!")))}var d=a(4);function b(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"top"},l.a.createElement(i.b,{className:"btn btn-lg",to:"/z1"},"Zadania 1"),l.a.createElement(i.b,{className:"btn btn-lg",to:"/z2"},"Zadanie 2"),l.a.createElement(i.b,{className:"btn btn-lg",to:"/z3"},"Zadanie 3"),l.a.createElement(i.b,{className:"btn btn-lg",to:"/z4"},"Zadanie 4")),l.a.createElement("div",{className:"holder",style:{width:"300px"}},l.a.createElement("h1",null,"Zadanie 2"),l.a.createElement("button",{className:"btn btn-lg",onClick:function(e){c(!r)}},"Toggle"),l.a.createElement("p",null,"Warto\u015bc zmiennej ",l.a.createElement("code",null,"isLogoVisible"),":"," ",r.toString()),l.a.createElement("div",null,r&&l.a.createElement("img",{src:m.a,alt:"logo",className:"md-size"}))))}function p(e){return l.a.createElement("div",{className:"table__row"},l.a.createElement("h4",null,e.title,e.author&&l.a.createElement("span",{style:{fontWeight:200,fontSize:"0.8em",color:"gray"}}," ","| ",e.author)),l.a.createElement("p",null,e.body),l.a.createElement("p",null,e.url&&l.a.createElement("img",{src:e.url,className:"post__image",alt:"image"})))}function E(e){var t=[{id:1,title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{id:2,title:"qui est esse",body:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{id:3,title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",body:"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{id:4,title:"eum et est occaecati",body:"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"}];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"top"},l.a.createElement(i.b,{className:"btn btn-lg",to:"/z1"},"Zadania 1"),l.a.createElement(i.b,{className:"btn btn-lg",to:"/z2"},"Zadanie 2"),l.a.createElement(i.b,{className:"btn btn-lg",to:"/z3"},"Zadanie 3"),l.a.createElement(i.b,{className:"btn btn-lg",to:"/z4"},"Zadanie 4")),l.a.createElement("div",{className:"holder",style:{width:"800px"}},l.a.createElement("h1",null,"Zadanie 3"),l.a.createElement("hr",null),l.a.createElement("div",{className:"table__holder"},0===t.length&&l.a.createElement("p",null,"tablica jest pusta"),t.map((function(e){return l.a.createElement(p,{key:e.id,title:e.title,body:e.body})})))))}var h=a(21),v=a(8);function g(){var e=Object(n.useContext)(z),t=Object(n.useContext)(O),a=Object(n.useState)({title:null,message:null,author:e.info.username,url:null}),r=Object(d.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)(!1),s=Object(d.a)(o,2),m=s[0],u=s[1],b=Object(n.useState)(!1),p=Object(d.a)(b,2),E=p[0],h=p[1];Object(n.useEffect)((function(){document.title="Kreator: ".concat(c.title)}),[c.title]);var g=function(e){u(!1),h(!1);var t=e.target.name,a=e.target.value;i((function(e){var n=Object(v.a)({},e);return n[t]=a,n}))};return l.a.createElement(l.a.Fragment,null,m&&l.a.createElement("p",{className:"error"},"Musisz wype\u0142ni\u0107 conajmniej dwa pola: tytu\u0142 oraz wiadomo\u015b\u0107 !"),E&&l.a.createElement("p",{className:"success"},"Pomyslnie utworzono post !"),l.a.createElement("div",{className:"holder"},l.a.createElement("h1",null,"Dodaj nowy post"),l.a.createElement("form",{className:"column",onSubmit:function(e){e.preventDefault(),console.log(c),c.author&&c.message&&c.title?(t.addPost(Object(v.a)(Object(v.a)({},c),{},{id:t.getNextId()})),h(!0)):u(!0)}},l.a.createElement("input",{onChange:g,name:"title",placeholder:"tytu\u0142.."}),l.a.createElement("input",{onChange:g,name:"message",placeholder:"wiadomo\u015b\u0107.."}),l.a.createElement("input",{type:"text",onChange:g,name:"url",placeholder:"Wklej adres obrazka do wyswietlenia.."}),l.a.createElement("input",{className:"btn btn-lg",type:"submit"}))),c.url&&l.a.createElement("div",{className:"holder"},l.a.createElement("h4",null,"Image Preview"),l.a.createElement("img",{src:c.url,className:"post__image",alt:"image preview"})))}a(33);function f(){Object(n.useContext)(z);var e=Object(n.useContext)(O),t=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){setTimeout((function(){l(!1)}),1e3)}),[]),a}();return l.a.createElement("div",null,l.a.createElement("div",{className:"holder",style:{width:"800px"}},t&&l.a.createElement("div",{class:"lds-dual-ring"}),t||l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Posty"),l.a.createElement("hr",null),l.a.createElement("div",{className:"table__holder"},0===e.data.length&&l.a.createElement("p",null,"tablica jest pusta"),e.data.map((function(e){return l.a.createElement(p,{key:e.id,title:e.title,body:e.message,author:e.author,url:e.url})}))))))}function N(e){var t=Object(n.useState)({username:""}),a=Object(d.a)(t,2),r=a[0],c=a[1],i=Object(n.useContext)(z);return l.a.createElement("div",null,l.a.createElement("h1",null,"Przedstaw si\u0119! "),l.a.createElement("form",{className:"column",onSubmit:function(t){t.preventDefault();var a=Object(v.a)({},r);a.username||(a.username="Anonymous"),i.setUser(a),e.history.push("/z4/posts")}},l.a.createElement("input",{type:"text",placeholder:"Nazwa uzytkownika b\u0119dzie wy\u015bwietlana obok twoich post\xf3w.",onChange:function(e){var t=e.target.value;c((function(e){return Object(v.a)(Object(v.a)({},e),{},{username:t})}))},value:r.username}),l.a.createElement("input",{className:"btn btn-lg",type:"submit"})))}function j(e){var t=Object(n.useContext)(z);return t&&t.info?l.a.createElement(l.a.Fragment,null,e.children):l.a.createElement(o.a,{to:"/z4"})}var w={info:null,setUser:function(e){}},y={data:[{id:0,title:"Hello World!",author:"admin",message:"Witajcie na naszej stronie !",url:"https://image.freepik.com/free-vector/modern-welcome-lettering-concept_23-2147916978.jpg"}],lastId:0,addPost:function(e){},getNextId:function(){}},z=l.a.createContext(w),O=l.a.createContext(y);function x(e){var t=Object(o.g)(),a=Object(n.useState)(w.info),r=Object(d.a)(a,2),c=r[0],s=r[1];w.info=c,w.setUser=function(e){return s(e)};var u=Object(n.useState)(y.data),b=Object(d.a)(u,2),p=b[0],E=b[1];return y.data=p,y.addPost=function(e){e.hasOwnProperty("title")&&e.hasOwnProperty("message")&&e.hasOwnProperty("author")&&e.hasOwnProperty("id")&&E([e].concat(Object(h.a)(p)))},y.getNextId=function(){return y.lastId=y.lastId+1,y.lastId},l.a.createElement(O.Provider,{value:y},l.a.createElement(z.Provider,{value:w},l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"nav"},l.a.createElement("div",{className:"brand"},l.a.createElement(i.b,{to:"/"},l.a.createElement("img",{className:"brand-img",src:m.a,alt:"brand"}))),l.a.createElement("div",{className:"navbar-content"},l.a.createElement(j,null,l.a.createElement(i.b,{to:"".concat(t.path,"/posts")},l.a.createElement("div",{className:"navbar-btn"},"Posty"))),l.a.createElement(j,null,l.a.createElement(i.b,{to:"".concat(t.path,"/create-post")},l.a.createElement("div",{className:"navbar-btn"},"Dodaj nowy post"))),l.a.createElement(i.b,{to:"".concat(t.path,"/signin")},l.a.createElement("div",{className:"navbar-btn"},"Zaloguj")))))),l.a.createElement("div",{className:"page-content"},l.a.createElement(j,null,l.a.createElement(o.b,{path:"".concat(t.path,"/create-post")},l.a.createElement(g,null)),l.a.createElement(o.b,{path:"".concat(t.path,"/posts")},l.a.createElement(f,null))),l.a.createElement(o.b,{path:"".concat(t.path,"/signin"),component:N}))))}var q=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(o.d,null,l.a.createElement(o.b,{exact:!0,path:"/z1"},l.a.createElement(u,{title:"Witaj!"})),l.a.createElement(o.b,{exact:!0,path:"/z2"},l.a.createElement(b,null)),l.a.createElement(o.b,{exact:!0,path:"/z3"},l.a.createElement(E,null)),l.a.createElement(o.b,{path:"/z4"},l.a.createElement(x,null)),l.a.createElement(o.a,{to:"/z1"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.b348c100.chunk.js.map