(this["webpackJsonpft-lockup-contract-frontend"]=this["webpackJsonpft-lockup-contract-frontend"]||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var r=n(16),c=n(10),a=n(11),o=n(3),s=n.n(o),u=n(0),l=n(62),i=n(15),p=n(2),d=n(17),h="ft-lockup.dev000.g3ftl.testnet";var j=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CONTRACT_NAME:"ft-lockup.dev000.g3ftl.testnet"}).REACT_APP_ENVIRONMENT||"development";switch(e){case"production":case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:h,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:h,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};case"betanet":return{networkId:"betanet",nodeUrl:"https://rpc.betanet.near.org",contractName:h,walletUrl:"https://wallet.betanet.near.org",helperUrl:"https://helper.betanet.near.org",explorerUrl:"https://explorer.betanet.near.org"};case"local":return{explorerUrl:"",helperUrl:"",networkId:"local",nodeUrl:"http://localhost:3030",walletUrl:"http://localhost:4000/wallet",contractName:h};case"test":case"ci":return{explorerUrl:"",helperUrl:"",walletUrl:"",networkId:"shared-test",nodeUrl:"https://rpc.ci-testnet.near.org",contractName:h};case"ci-betanet":return{explorerUrl:"",helperUrl:"",walletUrl:"",networkId:"shared-test-staging",nodeUrl:"https://rpc.ci-betanet.near.org",contractName:h};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}(),b=n(63),f=n(64),O=function(){function e(t){Object(b.a)(this,e),this.near=void 0,this.contract=void 0,this.walletConnection=void 0,this.near=t,this.walletConnection=new d.WalletConnection(t,j.contractName),this.contract=new d.Contract(this.walletConnection.account(),j.contractName,{viewMethods:["get_lockups_paged"],changeMethods:[]})}return Object(f.a)(e,[{key:"loadAllLockups",value:function(){return this.contract.get_lockups_paged().then((function(e){return e.map((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return Object.assign(r,{id:n})}))}))}},{key:"signIn",value:function(){var e=window.location.href;this.walletConnection.requestSignIn(j.contractName,void 0,e)}},{key:"signOut",value:function(){this.walletConnection.signOut()}},{key:"get_account_id",value:function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.walletConnection.getAccountId());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"account",value:function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.near.account(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"get_balance",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.account(t);case 2:return n=e.sent,r=null,e.prev=4,e.next=7,n.getAccountBalance();case 7:c=e.sent,a=c.total,r=parseFloat(d.utils.format.formatNearAmount(a||"0")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.error("Account not exist");case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}var a}),e,this,[[4,11]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=O,x=Object(u.createContext)(null),g=function(){var e=Object(c.a)(s.a.mark((function e(){var t,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new d.keyStores.BrowserLocalStorageKeyStore,e.next=3,d.connect(Object(r.a)({headers:{},keyStore:t},j));case 3:return n=e.sent,c=new v(n),e.abrupt("return",{connected:!0,config:j,api:c,signedIn:!1,signedAccountId:null});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=n(1);function k(e){var t=e.contractState;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"About Page"}),Object(m.jsx)("pre",{children:"\n          props value from parent controller: count=".concat(t.name||"LOADING","\n\n          This page should render all useful info about contract,\n          at least ft-lockup name, token name, contract ft balance,\n\n          ft-lockup account id: ").concat(j.contractName,"\n\n          Raw contract data: ").concat(JSON.stringify(t.lockups,null,2),"\n        ")})]})}function w(e){var t=e.lockups,n=Array.from(new Set(t.map((function(e){return e.account_id}))));return console.log("unique users",n),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Users"}),"This page should render list of all users that have lockups.",Object(m.jsx)("ul",{children:n.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/users/".concat(e),children:e})},e)}))})]})}function U(e){var t=e.lockups,n=Object(p.g)().userId,r=t.filter((function(e){return e.account_id===n}));return console.log("user lockups",n,r),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"User Lockups Page"}),"This page should render all active lockups for specific user.",Object(m.jsxs)("h2",{children:["User:"," ",n]}),"Lockups:",Object(m.jsx)("div",{children:r.map((function(e){return Object(m.jsxs)("div",{className:"lockup-row",children:[Object(m.jsx)("div",{children:"\n                id: ".concat(e.id,",\n                total amount: ").concat(e.total_balance,",\n                claimed amount: ").concat(e.claimed_balance,",\n                available amount: ").concat(e.unclaimed_balance,"\n              ")}),Object(m.jsx)("div",{children:"Schedule: ".concat(JSON.stringify(e.schedule,null,2))})]},e.id)}))})]})}function N(e){var t=e.children;return Object(m.jsx)("div",{children:t})}var _=function(e){var t=e.near,n=e.setNear;if(!t)return null;var a=t.api,o=t.signedIn,u=t.signedAccountId,l=function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.signIn();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.signOut(),n(Object(r.a)(Object(r.a)({},t),{},{signedIn:!1,signedAccountId:null}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o?Object(m.jsxs)(N,{children:[Object(m.jsx)("span",{children:u})," ",Object(m.jsx)("button",{type:"button",onClick:i,children:"Log out"})]}):Object(m.jsx)(N,{children:Object(m.jsx)("button",{type:"button",onClick:l,children:"Sign In"})})};function I(){var e=Object(u.useContext)(x),t=e.near,n=e.setNear;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"float-right",children:Object(m.jsx)(_,{near:t,setNear:n})}),Object(m.jsxs)("div",{className:"tabs",children:[Object(m.jsx)(i.b,{to:"/",children:"About"})," ",Object(m.jsx)(i.b,{to:"/users",children:"Users"})]})]})}function y(){var e=Object(u.useContext)(x).near,t=Object(u.useState)({}),n=Object(a.a)(t,2),r=n[0],o=n[1];if(Object(u.useEffect)((function(){var t=!0;if(e){var n=function(){var n=Object(c.a)(s.a.mark((function n(){var r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("LOADING DATA"),n.next=3,e.api.loadAllLockups();case 3:if(r=n.sent,t){n.next=6;break}return n.abrupt("return");case 6:o({lockups:r,name:"name"});case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}return function(){t=!1}}),[e]),0===Object.keys(r).length)return null;var l=r.lockups;return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(I,{}),Object(m.jsxs)(p.c,{children:[Object(m.jsx)(p.a,{path:"/",element:Object(m.jsx)(k,{contractState:r})}),Object(m.jsx)(p.a,{path:"/users",element:Object(m.jsx)(w,{lockups:l})}),Object(m.jsx)(p.a,{path:"/users/:userId",element:Object(m.jsx)(U,{lockups:l})})]})]})}n(131);function A(){var e=Object(u.useState)(null),t=Object(a.a)(e,2),n=t[0],o=t[1];Object(u.useEffect)((function(){function e(){return(e=Object(c.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,e.next=5,t.api.get_account_id();case 5:n=e.sent,o(Object(r.a)(Object(r.a)({},t),{},{signedIn:!!n,signedAccountId:n}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var l=Object(u.useMemo)((function(){return{near:n,setNear:o}}),[n,o]);return Object(m.jsx)(u.StrictMode,{children:Object(m.jsx)(x.Provider,{value:l,children:Object(m.jsx)(y,{})})})}Object(l.render)(Object(m.jsx)(A,{}),document.getElementById("root"))},75:function(e,t){},85:function(e,t){}},[[132,1,2]]]);
//# sourceMappingURL=main.2230de2c.chunk.js.map