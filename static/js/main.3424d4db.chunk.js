(this.webpackJsonpfaceweb=this.webpackJsonpfaceweb||[]).push([[0],{41:function(e,t,n){},43:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(1),c=n.n(r),s=n(29),o=n.n(s),i=(n(41),n(24)),u=n.n(i),l=n(30),b=n(35),j=(n(43),n(21)),p=n(6),h=n(15),d=n(16),f=n(18),O=n(17),g=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.user;return console.log("Home Page"),Object(a.jsxs)("div",{children:[console.log(e),Object(a.jsx)("h1",{children:"You are signed in"})]})}}]),n}(r.Component),x=n(31),m=n.n(x),v=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).uiConfig={signInFlow:"popup",signInOptions:[e.props.firebase.auth.GoogleAuthProvider.PROVIDER_ID,e.props.firebase.auth.FacebookAuthProvider.PROVIDER_ID,e.props.firebase.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},e}return Object(d.a)(n,[{key:"render",value:function(){return console.log("SignIn Page"),this.props.auth.currentUser?Object(a.jsx)(p.a,{push:!0,to:"/home"}):Object(a.jsx)("div",{className:"SignIn_layout",children:Object(a.jsx)(m.a,{uiConfig:this.uiConfig,firebaseAuth:this.props.auth})})}}]),n}(r.Component),I=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.auth;return Object(a.jsxs)("div",{className:"NavBar_layout",children:[Object(a.jsx)("button",{className:"button",children:Object(a.jsx)("span",{children:"About Author"})}),Object(a.jsx)("hr",{}),t?Object(a.jsxs)("div",{id:"user",children:[Object(a.jsx)("img",{src:t.photoURL,alt:"not found"}),Object(a.jsx)("p",{children:"Welcome: "+t.displayName}),t&&Object(a.jsx)("button",{className:"button",onClick:function(){return n.signOut()},children:Object(a.jsx)("span",{children:" Sign Out"})})]}):Object(a.jsx)("div",{})]})}}]),n}(r.Component),y=n(2),w=(n(56),n(27),n(34));y.a.apps.length||y.a.initializeApp({apiKey:"AIzaSyBEiqcX4M_uaqYmgyiKeXdf9s9CFUjImx8",authDomain:"faceweb-2ca13.firebaseapp.com",databaseURL:"https://faceweb-2ca13.firebaseio.com",projectId:"faceweb-2ca13",storageBucket:"faceweb-2ca13.appspot.com",messagingSenderId:"552369507263",appId:"1:552369507263:web:62367dc843d4f59bf96f0a",measurementId:"G-5FZB4B6TH0"});var U=y.a.auth(),A=y.a.firestore();var F=function(e){console.log("GetUserFromFirestore");var t=U.currentUser,n=t.email,a=t.displayName,r=t.uid,c=t.photoURL,s=A.collection("Users").doc(r);s.get().then((function(e){e.exists?(console.log("User Exists"),s.onSnapshot((function(e){}))):(console.log("User does not exists"),C(r,a,n,c))}))},C=function(){var e=Object(l.a)(u.a.mark((function e(t,n,a,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("UpdateUserInFirestore"),A.collection("Users").doc(t).set({uid:t,displayName:n,email:a,photoURL:r});case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),R=function(){var e=Object(w.a)(U),t=Object(b.a)(e,1)[0];return t&&F(),Object(a.jsxs)(j.a,{children:[Object(a.jsx)(I,{user:t,auth:U}),Object(a.jsxs)(p.d,{children:[Object(a.jsx)(p.b,{exact:!0,path:"/",render:function(e){return Object(a.jsx)(v,{firebase:y.a,auth:U})}}),Object(a.jsx)(p.b,{exact:!0,path:"/home",render:function(e){return t?Object(a.jsx)(g,{user:t}):Object(a.jsx)(p.a,{push:!0,to:"./"})}}),Object(a.jsx)(p.b,{path:"*",component:function(){return"404 NOT FOUND"}})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),k()}},[[59,1,2]]]);
//# sourceMappingURL=main.3424d4db.chunk.js.map