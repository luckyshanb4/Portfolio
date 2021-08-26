(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{29:function(e,i,a){},38:function(e,i,a){"use strict";a.r(i);var t=a(1),c=a.n(t),s=a(17),n=a.n(s),l=(a(29),a(7)),o=a.p+"static/media/avatar.3c6b1aa2.png",d=a(0);var r=function(e){return Object(d.jsx)("div",{className:"NavBar",children:Object(d.jsxs)("nav",{className:"nav",children:[Object(d.jsx)("div",{className:"profile",children:Object(d.jsx)("img",{src:o,alt:""})}),Object(d.jsxs)("div",{className:"nav-items",children:[Object(d.jsx)("div",{className:"nav-item",children:Object(d.jsx)(l.c,{className:"link",to:"/",exact:!0,activeClassName:"active",children:"Home"})}),Object(d.jsx)("div",{className:"nav-item",children:Object(d.jsx)(l.c,{className:"link",to:"/about",exact:!0,activeClassName:"active",children:"About"})}),Object(d.jsx)("div",{className:"nav-item",children:Object(d.jsx)(l.c,{className:"link",to:"/portfolios",exact:!0,activeClassName:"active",children:"portfolios"})}),Object(d.jsx)("div",{className:"nav-item",children:Object(d.jsx)(l.c,{className:"link",to:"/contact",exact:!0,activeClassName:"active",children:"Contact"})})]}),Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{children:"@2021 Luckyshan Bandara"})})]})})},m=a(20),j=a(21);var p=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"HomePage",children:Object(d.jsxs)("header",{className:"hero",children:[Object(d.jsxs)("h1",{className:"hero-text",children:["Hi, I am",Object(d.jsx)("span",{children:" Luckyshan Bandara "})]}),Object(d.jsx)("p",{className:"home-page-sub-text",children:"A Passionate Programmer"}),Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsx)(l.b,{className:"iconHolder",onClick:function(){window.open("https://github.com/luckyshanb4")},children:Object(d.jsx)(m.a,{icon:j.a,className:"icon gh"})}),Object(d.jsx)(l.b,{className:"iconHolder",onClick:function(){window.open("https://www.linkedin.com/in/luckyshan-bandara")},children:Object(d.jsx)(m.a,{icon:j.b,className:"icon li"})})]})]})})})},b=a.p+"static/media/about.c3a20f07.png";var h=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"ImageSection",children:[Object(d.jsx)("div",{className:"img",children:Object(d.jsx)("img",{src:b,alt:""})}),Object(d.jsxs)("div",{className:"about-info",children:[Object(d.jsxs)("h4",{children:["I am ",Object(d.jsx)("span",{children:"Luckyshan"})]}),Object(d.jsx)("p",{className:"aboutText",children:"I found my passion in Software Development. Thus I followed my passion and I currently work as a Freelance Programmer. I am looking for an opportunity to develop my career as a Software Engineer."}),Object(d.jsxs)("div",{className:"about-details",children:[Object(d.jsxs)("div",{className:"left-section",children:[Object(d.jsx)("p",{children:"Full Name"}),Object(d.jsx)("p",{children:"Age"}),Object(d.jsx)("p",{children:"Nationality"}),Object(d.jsx)("p",{children:"Languages"}),Object(d.jsx)("p",{children:"Educational Qualifications"})]}),Object(d.jsxs)("div",{className:"right-section",children:[Object(d.jsx)("p",{className:"p-margin-left",children:": Edirille Mudiyanselage Janith Luckyshan Bandara"}),Object(d.jsx)("p",{className:"p-margin-left",children:": 29"}),Object(d.jsx)("p",{className:"p-margin-left",children:": Sri Lankan"}),Object(d.jsx)("p",{className:"p-margin-left",children:": Sinhala. English"}),Object(d.jsx)("p",{className:"p-margin-left",children:": B.Sc (Hons) in Electrical & Electronic Engineering"})]})]}),Object(d.jsx)("button",{className:"btn",children:"Download CV"})]})]})})};var x=function(e){var i=e.skill,a=e.progress,t=e.width;return Object(d.jsx)("div",{className:"SkillsSection",children:Object(d.jsxs)("div",{className:"skills-container",children:[Object(d.jsx)("h5",{className:"skill-title",children:i}),Object(d.jsxs)("div",{className:"skill-bar",children:[Object(d.jsx)("p",{className:"skill-text",children:a}),Object(d.jsx)("div",{className:"skill-progress",children:Object(d.jsx)("div",{className:"progress",children:Object(d.jsx)("div",{className:"inner-pregress",style:{width:t}})})})]})]})})};var g=function(e){var i=e.title,a=e.span;return Object(d.jsx)("div",{className:"TitleStyle",children:Object(d.jsxs)("h3",{children:[i,Object(d.jsxs)("span",{children:[" ",a]})]})})};var u=function(e){return Object(d.jsxs)("div",{className:"AboutPage",children:[Object(d.jsx)(g,{title:"About me",span:"About me"}),Object(d.jsx)(h,{}),Object(d.jsx)(g,{title:"My Skils",span:"My Skils"}),Object(d.jsx)(x,{skill:"Java",width:"90%"}),Object(d.jsx)(x,{skill:"Javascript",width:"40%"}),Object(d.jsx)(x,{skill:"React Js",width:"70%"}),Object(d.jsx)(x,{skill:"Node Js",width:"40%"}),Object(d.jsx)(x,{skill:"Express",width:"65%"}),Object(d.jsx)(x,{skill:"HTML5",width:"65%"}),Object(d.jsx)(x,{skill:"Bootstrap 4.0",width:"60%"})]})},O=a(10),v=a(24);var k=function(e){var i=e.filter,a=e.categories;return Object(d.jsx)("div",{className:"buttons",children:a.map((function(e,a){return Object(d.jsx)("button",{type:"button",className:"btn-port",onClick:function(){return i(e)},children:e},a)}))})};var N=function(e){var i=e.imagesList,a=c.a.useState(0),s=Object(O.a)(a,2),n=s[0],l=s[1],o=c.a.useRef(null),r=Object(t.useState)(i),m=Object(O.a)(r,2),j=m[0];function p(){o.current&&clearTimeout(o.current)}return m[1],c.a.useEffect((function(){return p(),o.current=setTimeout((function(){return l((function(e){return e===j.length-1?0:e+1}))}),2500),function(){p()}}),[n]),Object(d.jsx)("div",{className:"slideshow",children:Object(d.jsx)("div",{className:"slideshowSlider",style:{transform:"translate3d(".concat(100*-n,"%, 0, 0)")},children:j.map((function(e,i){return Object(d.jsx)("div",{className:"slide",children:Object(d.jsx)("img",{src:e,style:{width:400},resizeMode:"contain",alt:""})},i)}))})})};var f=function(e){var i=e.menuItem;return Object(d.jsx)("div",{className:"portfolis",children:i.map((function(e){return Object(d.jsxs)("div",{className:"portfolio",children:[Object(d.jsxs)("div",{className:"image-data",children:[Object(d.jsx)("img",{src:e.image,alt:""}),Object(d.jsx)("div",{className:"hover-items",onClick:function(){""!=e.link1&&window.open(e.link1)},children:Object(d.jsx)(N,{imagesList:e.slideImages})})]}),Object(d.jsx)("h5",{children:e.title}),Object(d.jsx)("p",{children:e.description})]},e.id)}))})},G=a.p+"static/media/1.b4a27ff7.PNG",P=a.p+"static/media/2.8cae7588.PNG",y=a.p+"static/media/3.7bf2ea98.PNG",w=a.p+"static/media/4.3bf54dd6.PNG",A=a.p+"static/media/5.85f0d42a.PNG",J=a.p+"static/media/1.4392a632.JPG",I=a.p+"static/media/2.4921b541.JPG",S=a.p+"static/media/3.d9adede5.JPG",M=a.p+"static/media/4.1884060c.JPG",C=a.p+"static/media/4.fbed921e.JPG",B=a.p+"static/media/1.0518d621.JPG",D=a.p+"static/media/2.7691315b.JPG",T=a.p+"static/media/3.03b65b14.JPG",E=a.p+"static/media/5.cea47e13.JPG",L=a.p+"static/media/1.1ec18b7d.JPG",H=a.p+"static/media/2.33368e44.JPG",F=a.p+"static/media/1.c2e4ba91.JPG",V=a.p+"static/media/2.a56f038f.JPG",W=a.p+"static/media/1.88e8d7cf.JPG",z=a.p+"static/media/1.2d0f819e.PNG",K=a.p+"static/media/2.8a5ea88a.PNG",R=a.p+"static/media/3.d74f291e.PNG",Q=a.p+"static/media/4.eb66fcc9.PNG",q=a.p+"static/media/1.17843bec.PNG",Y=a.p+"static/media/2.e7db4328.PNG",U=a.p+"static/media/3.135b00dc.PNG",X=a.p+"static/media/4.29528e82.PNG",Z=a.p+"static/media/1.6962ea11.PNG",$=a.p+"static/media/2.d2ef1655.PNG",_=a.p+"static/media/3.fce196a3.PNG",ee=a.p+"static/media/1.e2028de7.PNG",ie=a.p+"static/media/2.e387e67c.PNG",ae=a.p+"static/media/3.87145b9d.PNG",te=a.p+"static/media/4.55ce9a73.JPG",ce=a.p+"static/media/1.f464ca5a.PNG",se=a.p+"static/media/2.9d0f9ce0.PNG",ne=a.p+"static/media/3.e4df2010.PNG",le=a.p+"static/media/4.b7e36193.PNG",oe=a.p+"static/media/1.3018f96a.PNG",de=a.p+"static/media/2.3795eeaa.PNG",re=a.p+"static/media/3.ce4c11aa.PNG",me=a.p+"static/media/4.a1fab24d.PNG",je=a.p+"static/media/1.6f7e5476.PNG",pe=a.p+"static/media/2.ae870418.PNG",be=a.p+"static/media/3.153ba4e3.PNG",he=a.p+"static/media/1.f0a2bc7a.PNG",xe=a.p+"static/media/2.e1fdbab6.PNG",ge=a.p+"static/media/3.4babfe2d.PNG",ue=a.p+"static/media/1.19f28866.PNG",Oe=a.p+"static/media/1.7e93989a.PNG",ve=a.p+"static/media/1.9be3e439.PNG",ke=[{id:1,category:"Java Desktop Application",link1:"https://www.google.com/search?client=firefox-b-d&q=react+click+to+open+linkgoogle.com",link2:"",icon1:"",icon2:"",image:G,title:"Schedule App",description:"Add & Manage Appoinments Efficiently",slideImages:[G,P,y,w,A]},{id:2,category:"Java Desktop Application",link1:"",link2:"www.github.com",icon1:"G",icon2:"Y",image:J,title:"Business Summary App",description:"View & Manage data without opening Excel Sheets!",slideImages:[J,I,S,M]},{id:3,category:"Java Desktop Application",link1:"",link2:"",icon1:"",icon2:"",image:C,title:"Advanced Dictionary",description:"Chinese-English Word Application with Quiz & Flash Cards Options",slideImages:[C,B,D,T,E]},{id:4,category:"Java Desktop Games",link1:"",link2:"",icon1:"",icon2:"",image:L,title:"Tetris Game",description:"Tetris Game with fully adjustable Functionalities",slideImages:[L,H]},{id:5,category:"Java Desktop Games",link1:"",link2:"",icon1:"",icon2:"",image:F,title:"Memory Game",description:"Memory Game with adjustable Board Size",slideImages:[F,V]},{id:6,category:"Java Desktop Games",link1:"",link2:"",icon1:"",icon2:"",image:W,title:"2048 Game",description:"2048 Game with adjustable Board Size",slideImages:[W]},{id:7,category:"Java Desktop Games",link1:"",link2:"",icon1:"",icon2:"",image:z,title:"Tic-Tac-Toe Game",description:"Play against Computer",slideImages:[z,K,R,Q]},{id:8,category:"Java Desktop Application",link1:"",link2:"",icon1:"",icon2:"",image:q,title:"Ticket Booking App",description:"Simple App to Book Tickets for a small event",slideImages:[q,Y,U,X]},{id:9,category:"Java Desktop Games",link1:"",link2:"",icon1:"",icon2:"",image:Z,title:"Super Mario Game",description:"Have an experience like old classic Mario World Game!",slideImages:[Z,$,_]},{id:10,category:"Java Desktop Games",link1:"",link2:"",icon1:"",icon2:"",image:ee,title:"Snake Game",description:"Have an experience like old classic Snake Game!",slideImages:[ee,ie,ae,te]},{id:11,category:"Java Desktop Application",link1:"",link2:"",icon1:"",icon2:"",image:ce,title:"Inventory Management App",description:"Helps you to Manage your Products & Parts",slideImages:[ce,se,ne,le]},{id:12,category:"Java Desktop Application",link1:"",link2:"",icon1:"",icon2:"",image:oe,title:"Vending Machine",description:"Vending Maching with Multi Language support, E-Bills, Vision support and many more functions",slideImages:[oe,de,re,me]},{id:13,category:"Java Desktop Games",link1:"",link2:"",icon1:"",icon2:"",image:je,title:"Cookie Clicker Game",description:"Have fun with simple Cookie Clicker Game!",slideImages:[je,pe,be]},{id:14,category:"Java Desktop Application",link1:"",link2:"",icon1:"",icon2:"",image:he,title:"ATM Model App",description:"Modelled a realworld ATM",slideImages:[he,xe,ge]},{id:15,category:"Web Application",link1:"https://whispering-garden-98093.herokuapp.com/",link2:"",icon1:"",icon2:"",image:ue,title:"Blog Project",description:"Simple Blog. Please click to view live web app!",slideImages:[ue]},{id:16,category:"Web Application",link1:"https://pure-fjord-05180.herokuapp.com/",link2:"",icon1:"",icon2:"",image:Oe,title:"To do List",description:"To Do List App. Please click to view live web app!",slideImages:[Oe]},{id:17,category:"Web Application",link1:"https://github.com/luckyshanb4/Keeper-App/",link2:"",icon1:"",icon2:"",image:ve,title:"Keeper App",description:"Looks like Google Keep App. Please click to go repository",slideImages:[ve]}],Ne=["All"].concat(Object(v.a)(new Set(ke.map((function(e){return e.category})))));var fe=function(){var e=Object(t.useState)(Ne),i=Object(O.a)(e,2),a=i[0],c=(i[1],Object(t.useState)(ke)),s=Object(O.a)(c,2),n=s[0],l=s[1];return Object(d.jsxs)("div",{className:"PortfolioPage",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)(g,{title:"Portfolios",span:"portfolios"})}),Object(d.jsxs)("div",{className:"portfolios-data",children:[Object(d.jsx)(k,{filter:function(e){if("All"!==e){var i=ke.filter((function(i){return i.category===e}));l(i)}else l(ke)},categories:a}),Object(d.jsx)(f,{menuItem:n})]})]})};var Ge=function(e){var i=e.icon,a=e.text1,t=e.text2,c=e.title;return Object(d.jsx)("div",{className:"ContactItem",children:Object(d.jsxs)("div",{className:"contact",children:[Object(d.jsx)("img",{src:i,alt:""}),Object(d.jsxs)("div",{className:"right-items",children:[Object(d.jsx)("h6",{children:c}),Object(d.jsx)("p",{children:a}),Object(d.jsx)("p",{children:t})]})]})})},Pe=a.p+"static/media/phone.ef86e22a.svg",ye=a.p+"static/media/emailme.a60657eb.svg",we=a.p+"static/media/location.5cd6776e.svg";var Ae=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)(g,{title:"Contact Me",span:"Contact Me"})}),Object(d.jsxs)("div",{className:"ContactPage",children:[Object(d.jsx)("div",{className:"map-sect",children:Object(d.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63405.91228953621!2d80.66979277669381!3d6.663088118929478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3f340fe7adc7b%3A0x644a4b5a08997d83!2sBalangoda!5e0!3m2!1sen!2slk!4v1629882411534!5m2!1sen!2slk",width:"600",height:"450",frameBorder:"0",style:{border:0},allowFullScreen:"","aria-hidden":"false",tabIndex:"0"})}),Object(d.jsxs)("div",{className:"contact-sect",children:[Object(d.jsx)(Ge,{icon:Pe,text1:"+94 713259275",title:"Phone"}),Object(d.jsx)(Ge,{icon:ye,text1:"luckyshanb4@gmail.com.com",title:"Email"}),Object(d.jsx)(Ge,{icon:we,text1:"86/3, Batuwaththa, Rathmalavinna, Balangoda",text2:"Sri Lanka",title:"Address"})]})]})]})},Je=a(3),Ie=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(r,{})}),Object(d.jsx)("div",{className:"main-contents",children:Object(d.jsx)("div",{className:"content",children:Object(d.jsx)(l.a,{basename:"/Portfolio",children:Object(d.jsx)(Je.a,{render:function(e){var i=e.location;return Object(d.jsxs)(Je.c,{location:i,children:[Object(d.jsx)(Je.a,{exact:!0,path:"/",component:p}),Object(d.jsx)(Je.a,{exact:!0,path:"/about/",component:u}),Object(d.jsx)(Je.a,{exact:!0,path:"/portfolios/",component:fe}),Object(d.jsx)(Je.a,{exact:!0,path:"/contact/",component:Ae})]})}})})})})]})};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(Ie,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.294d6323.chunk.js.map