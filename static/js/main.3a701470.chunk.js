(this.webpackJsonpsistema_act=this.webpackJsonpsistema_act||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(17),o=n.n(s),r=(n(24),n(2)),a=n(5),l=n(3),j=(n(25),n(0)),u=[];var d=function(e){var t=function(){var t=Object(i.useState)(null),n=Object(r.a)(t,2),c=n[0],s=n[1];function o(t,n){s(t),"Asistio"===t&&(u=[n.Nombre,1]),"Falto"===t&&(u=[n.Nombre,0]),"Med\xedo D\xeda"===t&&(u=[n.Nombre,.5]),e.postArray.push(u),console.log(e.postArray)}return"Asistio"===c?Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"Asistencia-Button",onClick:function(){o("Asistio",e.Empleado)},children:"Asistio"}),Object(j.jsx)("button",{className:"Asistencia-Button",onClick:function(){o("Med\xedo D\xeda",e.Empleado)},children:"Medio D\xeda"}),Object(j.jsx)("button",{className:"Asistencia-Button",onClick:function(){o("Falto",e.Empleado)},children:"Falto"}),Object(j.jsx)("br",{}),Object(j.jsx)("img",{alt:"Yes",style:{width:"50px",marginTop:"20px"},src:"https://image.flaticon.com/icons/png/512/3572/3572255.png"})]}):"Falto"===c||"Med\xedo D\xeda"===c?Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"Asistencia-Button",onClick:function(){o("Asistio",e.Empleado)},children:"Asistio"}),Object(j.jsx)("button",{className:"Asistencia-Button",onClick:function(){o("Med\xedo D\xeda",e.Empleado)},children:"Medio D\xeda"}),Object(j.jsx)("button",{className:"Asistencia-Button",onClick:function(){o("Falto",e.Empleado)},children:"Falto"}),Object(j.jsx)("br",{}),Object(j.jsx)("img",{alt:"No",style:{width:"50px",marginTop:"20px"},src:"https://image.flaticon.com/icons/png/512/3572/3572260.png"})]}):null==c?Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"Asistencia-Button",onClick:function(){o("Asistio",e.Empleado)},children:"Asistio"}),Object(j.jsx)("button",{className:"Asistencia-Button",onClick:function(){o("Med\xedo D\xeda",e.Empleado)},children:"Medio D\xeda"}),Object(j.jsx)("button",{className:"Asistencia-Button",onClick:function(){o("Falto",e.Empleado)},children:"Falto"})]}):void 0};return Object(j.jsx)(t,{})};var b=function(e){var t,n=new Date,i=[];return 0===n.getDay()?t="D":1===n.getDay()?t="L":2===n.getDay()?t="Ma":3===n.getDay()?t="Mi":4===n.getDay()?t="J":5===n.getDay()?t="V":6===n.getDay()&&(t="S"),e.Personal.Asistencia.map((function(n){return n.Planta===e.Filter&&""===n[t]&&i.push(n),null})),Object(j.jsx)("div",{style:{marginBottom:"110px"},children:i.map((function(t){return Object(j.jsx)("center",{children:Object(j.jsxs)("div",{className:"EmpleadoAsitencia",children:[Object(j.jsx)("h1",{children:t.Nombre}),Object(j.jsx)(d,{postArray:e.postArray,Empleado:t})]},t.Id)},t.Id)}))})};var O=function(e){var t=Object(i.useState)([]),n=Object(r.a)(t,2),s=n[0],o=n[1],a=Object(i.useState)(null),l=Object(r.a)(a,2),u=l[0],d=l[1];if(Object(i.useEffect)((function(){e.SetOptions("Asistencia"),e.postArray.splice(0,e.postArray.lenght);fetch("https://script.google.com/macros/s/AKfycbzHi05JxKI_8eVhGlCarXKbA5NHcVm4qCYIpldvu9lZUqVpp2PbA-E3ggzHdosvEBOS/exec").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),void 0!==e.user){if(void 0!==s[0])return console.log(s[2].Plantas),Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("center",{children:Object(j.jsx)("select",{onChange:function(e){console.log(e.target.value),d(e.target.value)},style:{width:"60%",height:"50px",borderRadius:"15px",marginTop:"15px"},children:s[2].Plantas.map((function(e){return Object(j.jsx)("option",{value:e.Planta,children:e.Planta},e.Planta)}))})}),Object(j.jsx)(b,{postArray:e.postArray,Filter:u,Personal:s[0]})]});if(void 0===s[0])return Object(j.jsx)(c.a.Fragment,{children:Object(j.jsx)("h1",{children:"Loading"})})}else if(void 0===e.user)return Object(j.jsx)("h1",{children:"Necesitas iniciar sesion"})},h=n.p+"static/media/LogoACT.94517af7.png";var p=function(e){var t=function(){return Object(j.jsx)("button",{className:"HamburgerLoginBtn",onClick:e.login,children:"Session"})},n=function(){var n=Object(i.useState)(!1),s=Object(r.a)(n,2),o=s[0],l=s[1];return console.log(o),!1===o?Object(j.jsx)("button",{className:"HamburgerMenu",onClick:function(){l(!0)},children:"Abrir menu"}):!0===o?Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("button",{className:"HamburgerMenu",onClick:function(){l(!1)},children:"Cerrar menu"}),Object(j.jsxs)("div",{id:"MenuModal",children:[Object(j.jsxs)("ul",{className:"Hamburger-Nav-Hrefs",style:{display:"flex",flexDirection:"column"},children:[Object(j.jsx)(a.b,{to:"/",children:Object(j.jsx)("li",{onClick:function(){return e.setOptions(void 0)},children:"Home"})}),Object(j.jsx)(a.b,{to:"/Asistencia/",children:Object(j.jsx)("li",{onClick:function(){return e.setOptions("Asistencia")},children:"Asistencia"})}),Object(j.jsx)(a.b,{to:"/Inventario/",children:Object(j.jsx)("li",{onClick:function(){return e.setOptions("Inventario")},children:"Inventario"})}),Object(j.jsx)(a.b,{to:"/Directorio/",children:Object(j.jsx)("li",{onClick:function(){return e.setOptions("Directorio")},children:"Directorio"})})]}),Object(j.jsx)(t,{})]})]}):void 0};return console.log("window width"),console.log(window.screen.width),window.screen.width<800?Object(j.jsxs)("nav",{children:[Object(j.jsx)("img",{alt:"Logo",id:"logo",src:h}),Object(j.jsx)(n,{})]}):window.screen.width>=800?Object(j.jsxs)("nav",{style:{display:"flex"},children:[Object(j.jsx)("img",{alt:"Logo",id:"logo",src:h}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("ul",{className:"Nav-Hrefs",style:{display:"inline-flex"},children:[Object(j.jsx)(a.b,{to:"/",children:Object(j.jsx)("li",{onClick:function(){return e.setOptions(void 0)},children:"Home"})}),Object(j.jsx)(a.b,{to:"/Asistencia/",children:Object(j.jsx)("li",{onClick:function(){return e.setOptions("Asistencia")},children:"Asistencia"})}),Object(j.jsx)(a.b,{to:"/Inventario/",children:Object(j.jsx)("li",{onClick:function(){return e.setOptions("Inventario")},children:"Inventario"})}),Object(j.jsx)(a.b,{to:"/Directorio/",children:Object(j.jsx)("li",{onClick:function(){return e.setOptions("Directorio")},children:"Directorio"})})]}),Object(j.jsx)(t,{})]})]}):void 0};var x=function(e){if(void 0===e.user)return Object(j.jsx)("h1",{children:"Landing Page"});if(void 0!==e.user){if(console.log(e.user.Rol),"Supervisor"===e.user.Rol)return Object(j.jsxs)("div",{className:"HomeMenuContainer",children:[Object(j.jsx)(a.b,{to:"/Requisiciones",children:Object(j.jsx)("center",{children:Object(j.jsx)("div",{className:"HomeMenuOption",children:Object(j.jsx)("h2",{children:"Requisiciones"})})})}),Object(j.jsx)(a.b,{to:"/DarAlta",children:Object(j.jsx)("center",{children:Object(j.jsx)("div",{className:"HomeMenuOption",children:Object(j.jsx)("h2",{children:"Dar alta personal"})})})})]});if("Ingeniero"===e.user.Rol)return Object(j.jsxs)("div",{className:"HomeMenuContainer",children:[Object(j.jsx)(a.b,{to:"/Requisiciones",children:Object(j.jsx)("div",{className:"HomeMenuOption",children:Object(j.jsx)("h2",{children:"Requisiciones"})})}),Object(j.jsx)(a.b,{to:"/DarAlta",children:Object(j.jsx)("div",{className:"HomeMenuOption",children:Object(j.jsx)("h2",{children:"Dar alta personal"})})})]});if("Admin"===e.user.Rol)return console.log("Here"),Object(j.jsxs)("div",{className:"HomeMenuContainer",children:[Object(j.jsx)(a.b,{to:"/AdminRequisiciones",children:Object(j.jsx)("div",{className:"HomeMenuOption",children:Object(j.jsx)("h2",{children:"Requisiciones"})})}),Object(j.jsx)(a.b,{to:"/DarAlta",children:Object(j.jsx)("div",{className:"HomeMenuOption",children:Object(j.jsx)("h2",{children:"Dar alta personal"})})})]})}};var f=function(e){var t=e.user,n=Object(i.useState)([]),s=Object(r.a)(n,2),o=s[0],a=s[1];if(Object(i.useEffect)((function(){fetch("https://script.google.com/macros/s/AKfycbyUGhau5pJYbdM9d2zKc77GK_COLTtcPzN0E6LGkbHED96NS0PhxKGWuaEspFEkF6Ydjw/exec").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),t){return-1!==["Admin","Ingeniero","Compras"].indexOf(t.Rol)?Object(j.jsx)(c.a.Fragment,{children:o.map((function(e){return Object(j.jsx)("center",{children:Object(j.jsxs)("div",{className:"DirectorioContainer",children:[Object(j.jsxs)("h1",{children:["Proveedor: ",e.Proveedor]}),Object(j.jsxs)("h3",{children:["Razon Social: ",e.RazonSocial]}),Object(j.jsxs)("p",{children:["Nombre: ",e.Nombre]}),"Telefono: ",Object(j.jsx)("a",{style:{color:"black"},children:e.Telefono}),Object(j.jsxs)("p",{children:["Materiales: ",e.Materiales]})]})})}))}):Object(j.jsx)("h1",{children:"No cuentas con los persmisos necesarios para ver esta informaci\xf3n"})}return Object(j.jsx)("h1",{children:"Requiere iniciar sesion para ver esta pagina"})};var m=function(e){if(void 0!==e.user){if(!0===e.OpenModal){if("Asistencia"!==e.DisplayOptions)return"Requisiciones"===e.DisplayOptions?Object(j.jsx)("div",{id:"OptionsModal",children:Object(j.jsx)("center",{children:Object(j.jsx)("button",{style:{fontSize:"xx-large",margin:"20px"},onClick:function(){fetch("https://script.google.com/macros/s/AKfycbyr26IShAGAcy4bREPxQUTlAm6wH3VvmAXOo5gjNEUxAkjW-C9NEKyurSSEHTEGjbW7/exec",{method:"POST",mode:"no-cors",cache:"no-cache",headers:{"Content-Type":"aplication/json"},redirect:"follow",body:JSON.stringify({Array:e.postArray,Command:"GenerarRequisiaci\xf3n"})}).then((function(e){alert("Tu requisici\xf3n ha sido enviada")}))},children:"Enviar"})})}):(alert("No existen opciones para esta pagina"),null);if(!0===e.user.Asistencia)return Object(j.jsx)("div",{id:"OptionsModal",children:Object(j.jsx)("center",{children:Object(j.jsx)("button",{style:{fontSize:"xx-large",margin:"20px"},onClick:function(){var t=new Date;t.getHours()>12?alert("No se puede reportar Asistencia despues de Medio d\xeda"):t.getHours()<=12&&fetch("https://script.google.com/macros/s/AKfycbxQsyfKvDF8k-h3pkyfGlxWpMH99vixdV9JVRO9-3hhNrLC8HhEacj55BUugFd-mdkF/exec",{method:"POST",mode:"no-cors",cache:"no-cache",headers:{"Content-Type":"aplication/json"},redirect:"follow",body:JSON.stringify({Array:e.postArray,user:e.user})}),alert("La asistencia ha sido enviada, revisa tu correo para confirmar")},children:"Enviar"})})});if(!1===e.user.Asistencia)return Object(j.jsx)("h1",{children:"This shouldn't happen"})}if(!1===e.OpenModal)return null}else if(void 0===e.user){if(!0===e.OpenModal)return alert("Necestias iniciar sesion"),null;if(!1===e.OpenModal)return null}};var g=function(e,t){var n=Object(i.useState)(!1),s=Object(r.a)(n,2),o=s[0],a=s[1];return void 0===t?Object(j.jsx)("h1",{children:"Logged Out"}):void 0!==t?Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)(m,{user:e.user,OpenModal:o,DisplayOptions:e.DisplayOptions,postArray:e.postArray}),Object(j.jsx)("div",{id:"Footer",children:Object(j.jsx)("div",{className:"OptionsButton",onClick:function(){!1===o&&a(!0),!0===o&&a(!1)}})})]}):void 0};var v=function(e){var t=Object(i.useState)(void 0),n=Object(r.a)(t,2),c=n[0],s=n[1],o=Object(i.useState)(void 0),a=Object(r.a)(o,2),l=a[0],u=a[1],d=Object(i.useState)(!1),b=Object(r.a)(d,2),O=(b[0],b[1]);return Object(j.jsxs)("div",{id:"LoginPopup",children:[Object(j.jsx)("a",{onClick:e.close,className:"closeBTN",children:"X"}),Object(j.jsx)("label",{children:"Nombre de Usuario"}),Object(j.jsx)("input",{onChange:function(e){s(e.target.value)},id:"Usuario",type:"text"}),Object(j.jsx)("label",{children:"Constrase\xf1a"}),Object(j.jsx)("input",{onChange:function(e){u(e.target.value)},id:"contrase\xf1a",type:"password"}),Object(j.jsx)("button",{onClick:function(){var t=[];console.log("This works"),fetch("https://script.google.com/macros/s/AKfycbzmSG40GuOkzGsqnG_AN34-8jUBFqIfoWSCBbWrV15ICb2cRdIFJomxy_iZ8piuQKxdww/exec").then((function(e){return e.json()})).then((function(n){console.log(n),n.map((function(n){return void 0===t[0]&&n.NombeDeUsuario===c&&n.Contrasena===l&&(t.push(n),e.setuser(t[0]),O(!0),alert("Has iniciado sesion"),e.close()),null}))}))},style:{margin:"20px"},children:"Iniciar Session"})]})};var A=function(e){return Object(j.jsx)("h1",{children:"Logout"})};var y=function(e){if(void 0===e.user){if(!0===e.logged)return Object(j.jsx)(v,{close:e.closeAuth,fn:e.login,setuser:e.setuser});if(!1===e.logged)return null}if(void 0!==e.user){if(!0===e.logged)return Object(j.jsx)(A,{user:e.user,fn:e.login});if(!1===e.logged)return null}};var C=function(e){var t=function(){var t={Descripcion:"",Unidades:"",Cantidad:"",Comentario:""},n=Object(i.useState)(null),s=Object(r.a)(n,2),o=s[0],a=s[1],l=Object(i.useState)(null),u=Object(r.a)(l,2),d=u[0],b=u[1],O=Object(i.useState)(null),h=Object(r.a)(O,2),p=h[0],x=h[1],f=Object(i.useState)(null),m=Object(r.a)(f,2),g=m[0],v=m[1],A=function(){var n=Object(i.useState)(!1),s=Object(r.a)(n,2),a=s[0],l=s[1];function u(){l(!0),t.Descripcion=o,t.Unidades=d,t.Cantidad=p,t.Comentario=g,e.obj.Articulos.push(t),console.log(e.obj.Articulos)}return!0===a?Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("button",{onClick:u,children:"Agregar"}),Object(j.jsx)("img",{alt:"Yes",style:{width:"50px",marginTop:"20px"},src:"https://image.flaticon.com/icons/png/512/3572/3572255.png"})]}):!1===a?Object(j.jsx)(c.a.Fragment,{children:Object(j.jsx)("button",{onClick:u,children:"Agregar"})}):void 0};return Object(j.jsxs)("div",{className:"ArticuloSolicitado",children:[Object(j.jsx)("label",{children:"Descripci\xf3n"}),Object(j.jsx)("input",{onChange:function(e){a(e.target.value)},placeholder:"Ingrese la descripci\xf3n"}),Object(j.jsx)("label",{children:"Unidades"}),Object(j.jsx)("input",{onChange:function(e){b(e.target.value)},placeholder:"Ingrese las unidades de medida"}),Object(j.jsx)("label",{children:"Cantidad"}),Object(j.jsx)("input",{onChange:function(e){x(e.target.value)},placeholder:"Ingrese la cantidad que ocupa"}),Object(j.jsx)("label",{children:"Comentario"}),Object(j.jsx)("input",{onChange:function(e){v(e.target.value)},placeholder:"Ingrese un comentario"}),Object(j.jsx)(A,{})]})};return null!==e.Array?Object(j.jsx)(c.a.Fragment,{children:e.Array.map((function(e){return Object(j.jsx)(t,{},e)}))}):null};var N=function(e){Object(i.useEffect)((function(){e.SetOptions("Requisiciones"),e.postArray.splice(0,e.postArray.lenght),console.log(e.postArray),console.log("useEffect Ran")}),[]);var t=Object(i.useState)(null),n=Object(r.a)(t,2),c=n[0],s=n[1],o=Object(i.useState)(null),a=Object(r.a)(o,2),l=a[0],u=a[1],d=Object(i.useState)(0),b=Object(r.a)(d,2),O=b[0],h=b[1],p=Object(i.useState)(!0),x=Object(r.a)(p,2),f=x[0],m=x[1],g=Object(i.useState)(null),v=Object(r.a)(g,2),A=v[0],y=v[1],N=[],S={Articulos:[]},D=function(){return!0===f?Object(j.jsx)("button",{onClick:function(){return function(t){if(t<1||t>8)alert("Necesitas tener por lo menos 1 articulo o maximo 8");else if(null===c||null===l)alert("Te hace falta el Uso o el Folio");else{for(var n=0;n<t;n++)N.push(n);y(N),e.postArray.push(e.user.NombeDeUsuario,c,l)}m(!1)}(O)},children:"Continuar"}):!1===f?null:void 0},k=function(){return!1===f?Object(j.jsx)("button",{style:{marginBottom:"120px"},onClick:F,children:"Guardar"}):!0===f?null:void 0},M=function(){return O<1||O>8?Object(j.jsx)("p",{children:"Necesitas tener por lo menos 1 articulo o maximo 8"}):null};function F(){e.postArray.push(S.Articulos),alert("Los informaci\xf3n ha sido guardada, ahora puede enviarla"),console.log(e.postArray)}var R=["Admin","Ingeniero","Supervisor"];if(void 0!==e.user){if(-1!==R.indexOf(e.user.Rol))return Object(j.jsxs)("div",{className:"RequisicionForm",children:[Object(j.jsx)("label",{children:"Uso"}),Object(j.jsx)("input",{onChange:function(e){s(e.target.value),console.log(c)},placeholder:"\xbfCual es su uso?"}),Object(j.jsx)("label",{children:"Folio"}),Object(j.jsx)("input",{onChange:function(e){u(e.target.value),console.log(l)},placeholder:"\xbfCual es el folio?"}),Object(j.jsx)("label",{children:"\xbfCuantos articulos vas a solicitar?"}),Object(j.jsx)("input",{onChange:function(e){h(e.target.value),console.log(O)},type:"number",min:"1",max:"8"}),Object(j.jsx)(M,{}),Object(j.jsx)(D,{}),Object(j.jsx)(C,{Array:A,obj:S,postArray:e.postArray}),Object(j.jsx)(k,{})]});if(-1===R.indexOf(e.user.Rol))return alert("No cuentas con los permisos necesarios"),null}else if(void 0===e.user)return alert("Necesitas iniciar sesion para continuar"),null};var S=function(e){return Object(j.jsx)("div",{id:"AprobacionApp",children:e.aprobacionesDisplay.map((function(e){var t=JSON.parse(e.Articulos);return Object(j.jsxs)("div",{className:"Vale-Requisicion",children:[Object(j.jsxs)("div",{className:"Vale-Requisicion-Header",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Usuario"}),Object(j.jsx)("p",{children:e.Usuario})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Uso"}),Object(j.jsx)("p",{children:e.Uso})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Folio"}),Object(j.jsx)("p",{children:e.Folio})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Fecha"}),Object(j.jsx)("p",{children:e.Fecha})]})]}),Object(j.jsxs)("div",{className:"Vale-Requisicione-Articulos-Header",children:[Object(j.jsx)("h3",{children:"Descripci\xf3n"}),Object(j.jsx)("h3",{children:"Unidades"}),Object(j.jsx)("h3",{children:"Cantidad"}),Object(j.jsx)("h3",{children:"Comentario"})]}),Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsxs)("div",{class:"Vale-Requisicion-Articulo",children:[Object(j.jsx)("p",{children:e.Descripcion}),Object(j.jsx)("p",{children:e.Unidades}),Object(j.jsx)("p",{children:e.Cantidad}),Object(j.jsx)("p",{children:e.Comentario})]})}))}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Si desea ver el documento, puede verlo en la siguiente liga"}),Object(j.jsx)("a",{href:e.GeneradoURL,style:{color:"blue"},children:e.GeneradoURL})]})]})}))})};var D=function(e){var t=Object(i.useState)(void 0),n=Object(r.a)(t,2),c=n[0],s=n[1],o=Object(i.useState)(void 0),a=Object(r.a)(o,2),l=a[0],u=a[1];Object(i.useEffect)((function(){e.SetOptions("AdminRequisicion"),e.postArray.splice(0,e.postArray.lenght);fetch("https://script.google.com/macros/s/AKfycbzHF7M6mRxaXFg1KhF1DwAAYk0oshGa4MwKJuiIVFQnNmEzMosiBRQYuSh27tUfKrde/exec").then((function(e){return e.json()})).then((function(e){u(e)}))}),[]);var d=[];if(void 0!==l&&l.forEach((function(e){!1===e.Aprovado&&d.push(e)})),void 0===e.user)return alert("Necesita iniciar sesion para usar esta pagina"),null;if("Admin"!==e.user.Rol)return alert("No tienes los permisos necesarios para ver este contenido"),null;var b=function(e){s(e)},O=function(e){return void 0===e.app?null:"Aprobaciones"===e.app?Object(j.jsx)(S,{aprobacionesDisplay:d}):"Historial"===e.app?Object(j.jsx)("div",{id:"HistorialApp"}):void 0};return Object(j.jsxs)("main",{id:"AdminRequisici\xf3nBody",children:[Object(j.jsxs)("section",{id:"Sidepanel",children:[Object(j.jsx)("div",{onClick:function(){b("Aprobaciones")},className:"HomeMenuOption",children:Object(j.jsx)("h2",{children:"Aprobaci\xf3nes"})}),Object(j.jsx)("div",{onClick:function(){b("Historial")},className:"HomeMenuOption",children:Object(j.jsx)("h2",{children:"Historial"})})]}),Object(j.jsx)("section",{id:"Content",children:Object(j.jsx)(O,{app:c})})]})};var k=function(){var e=[],t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],s=n[1],o=Object(i.useState)(void 0),u=Object(r.a)(o,2),d=u[0],b=u[1],h=Object(i.useState)(void 0),m=Object(r.a)(h,2),v=m[0],A=m[1];function C(e){b(e)}return Object(j.jsxs)(a.a,{children:[Object(j.jsx)(p,{setOptions:C,login:function(){s(!0)},logged:c,user:v}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",exact:!0,user:v,component:function(){return Object(j.jsx)(x,{user:v})}}),Object(j.jsx)(l.a,{path:"/Asistencia/",component:function(){return Object(j.jsx)(O,{SetOptions:C,user:v,postArray:e})}}),Object(j.jsx)(l.a,{path:"/Directorio/",component:function(){return Object(j.jsx)(f,{user:v})}}),Object(j.jsx)(l.a,{path:"/Requisiciones",component:function(){return Object(j.jsx)(N,{SetOptions:C,postArray:e,user:v})}}),Object(j.jsx)(l.a,{path:"/AdminRequisiciones",component:function(){return Object(j.jsx)(D,{postArray:e,SetOptions:C,user:v})}})]}),Object(j.jsx)(g,{postArray:e,user:v,DisplayOptions:d}),Object(j.jsx)(y,{closeAuth:function(){s(!1)},logged:c,user:v,setuser:function(e){A(e)}})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),s(e),o(e)}))},F=n(19);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F.a,{domain:"dev-mtzyz449.us.auth0.com",clientId:"GAGMEY0vVdbLKfQJhuR4GEMFvl47Lck3",redirectUri:window.location.origin,children:Object(j.jsx)(k,{})})}),document.getElementById("root")),M()}},[[38,1,2]]]);
//# sourceMappingURL=main.3a701470.chunk.js.map