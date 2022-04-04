(this["webpackJsonpft-lockup-contract-frontend"]=this["webpackJsonpft-lockup-contract-frontend"]||[]).push([[0],{138:function(e,t){},148:function(e,t){},198:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var c=n(50),r=n(59),a=n(30),o=n(9),s=n(8),l=n.n(s),i=n(0),u=n(48),d=n(4),j=n(34),p="ft-lockup.demo000.ft-lockup.testnet";var h=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CONTRACT_NAME:"ft-lockup.demo000.ft-lockup.testnet"}).REACT_APP_ENVIRONMENT||"development";switch(e){case"production":case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:p,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:p,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};case"betanet":return{networkId:"betanet",nodeUrl:"https://rpc.betanet.near.org",contractName:p,walletUrl:"https://wallet.betanet.near.org",helperUrl:"https://helper.betanet.near.org",explorerUrl:"https://explorer.betanet.near.org"};case"local":return{explorerUrl:"",helperUrl:"",networkId:"local",nodeUrl:"http://localhost:3030",walletUrl:"http://localhost:4000/wallet",contractName:p};case"test":case"ci":return{explorerUrl:"",helperUrl:"",walletUrl:"",networkId:"shared-test",nodeUrl:"https://rpc.ci-testnet.near.org",contractName:p};case"ci-betanet":return{explorerUrl:"",helperUrl:"",walletUrl:"",networkId:"shared-test-staging",nodeUrl:"https://rpc.ci-betanet.near.org",contractName:p};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}(),b=n(116),O=n(117),f=function(){function e(t){Object(b.a)(this,e),this.near=void 0,this.contract=void 0,this.walletConnection=void 0,this.near=t,this.walletConnection=new j.WalletConnection(t,h.contractName),this.contract=new j.Contract(this.walletConnection.account(),h.contractName,{viewMethods:["get_lockups_paged","get_token_account_id"],changeMethods:[]})}return Object(O.a)(e,[{key:"getTokenAccountId",value:function(){return this.contract.get_token_account_id()}},{key:"loadAllLockups",value:function(){return this.contract.get_lockups_paged().then((function(e){return e.map((function(e){var t=Object(o.a)(e,2),n=t[0],c=t[1];return Object.assign(c,{id:n})}))}))}},{key:"signIn",value:function(){var e=window.location.href;this.walletConnection.requestSignIn(h.contractName,void 0,e)}},{key:"signOut",value:function(){this.walletConnection.signOut()}},{key:"get_account_id",value:function(){return this.walletConnection.getAccountId()}},{key:"account",value:function(){var e=Object(a.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.near.account(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"get_balance",value:function(){var e=Object(a.a)(l.a.mark((function e(t){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.account(t);case 2:return n=e.sent,c=null,e.prev=4,e.next=7,n.getAccountBalance();case 7:r=e.sent,a=r.total,c=parseFloat(j.utils.format.formatNearAmount(a||"0")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.error("Account not exist");case 14:return e.abrupt("return",c);case 15:case"end":return e.stop()}var a}),e,this,[[4,11]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),x=f,m=Object(i.createContext)(null),g=function(){var e=Object(a.a)(l.a.mark((function e(){var t,n,c,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new j.keyStores.BrowserLocalStorageKeyStore,e.next=3,j.connect(Object(r.a)({headers:{},keyStore:t},h));case 3:return n=e.sent,c=new j.WalletConnection(n,h.contractName),a=new x(n),o=c.getAccountId(),e.abrupt("return",{config:h,api:a,signedIn:!!o,signedAccountId:o});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=n(1);function k(e){var t=e.lockups,n=e.token_account_id;return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{children:"About Page"}),Object(v.jsx)("pre",{children:"\n          This page should render all useful info about contract,\n          at least ft-lockup name, token name, contract ft balance,\n\n          ft-lockup account id: ".concat(h.contractName,"\n          token account id: ").concat(n,"\n\n          Total number of lockups: ").concat(t.length,"\n        ")})]})}var w=n(221),_=n(222),U=n(218),N=n(219),A=n(223),I=n(224),S=n(225),y=n(226),C=n(227),T=n(228),E=n(229),P=n(122),L=n.n(P),R=n(121),B=n.n(R);function D(e){var t=e.row,n=Object(i.useState)(!1),c=Object(o.a)(n,2),r=c[0],a=c[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(w.a,{sx:{"& > *":{borderBottom:"unset"}},children:[Object(v.jsx)(_.a,{children:Object(v.jsx)(U.a,{"aria-label":"expand row",size:"small",onClick:function(){return a(!r)},children:r?Object(v.jsx)(B.a,{}):Object(v.jsx)(L.a,{})})}),Object(v.jsx)(_.a,{align:"left",children:t.id}),Object(v.jsx)(_.a,{align:"left",children:t.account_id}),Object(v.jsx)(_.a,{align:"right",children:t.total_balance}),Object(v.jsx)(_.a,{align:"right",children:t.claimed_balance}),Object(v.jsx)(_.a,{align:"right",children:t.unclaimed_balance})]}),Object(v.jsx)(w.a,{children:Object(v.jsx)(_.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(v.jsx)(N.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(v.jsxs)(A.a,{sx:{margin:1},children:[Object(v.jsx)(I.a,{variant:"h6",gutterBottom:!0,component:"div",children:"Lockup schedule"}),Object(v.jsxs)(S.a,{size:"small","aria-label":"purchases",children:[Object(v.jsx)(y.a,{children:Object(v.jsxs)(w.a,{children:[Object(v.jsx)(_.a,{children:"Date"}),Object(v.jsx)(_.a,{children:"Amount"})]})}),Object(v.jsx)(C.a,{children:t.schedule.map((function(e){return Object(v.jsxs)(w.a,{children:[Object(v.jsx)(_.a,{component:"th",scope:"row",children:e.timestamp}),Object(v.jsx)(_.a,{children:e.balance})]},e.timestamp)}))})]})]})})})})]})}function M(e){var t=e.lockups,n=Array.from(new Set(t.map((function(e){return e.account_id}))));return console.log("unique users",n),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)(T.a,{component:E.a,children:Object(v.jsxs)(S.a,{"aria-label":"collapsible table",children:[Object(v.jsx)(y.a,{children:Object(v.jsxs)(w.a,{children:[Object(v.jsx)(_.a,{}),Object(v.jsx)(_.a,{align:"left",children:"ID"}),Object(v.jsx)(_.a,{align:"left",children:"Account ID"}),Object(v.jsx)(_.a,{align:"right",children:"Total\xa0amount"}),Object(v.jsx)(_.a,{align:"right",children:"Claimed\xa0amount"}),Object(v.jsx)(_.a,{align:"right",children:"Available\xa0amount"})]})}),Object(v.jsx)(C.a,{children:t.map((function(e){return Object(v.jsx)(D,{row:e},e.id)}))})]})})})}function W(e){var t=e.lockups,n=Object(d.g)().userId,c=t.filter((function(e){return e.account_id===n}));return console.log("user lockups",n,c),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"User Lockups Page"}),"This page should render all active lockups for specific user.",Object(v.jsxs)("h2",{children:["User:"," ",n]}),"Lockups:",Object(v.jsx)("div",{children:c.map((function(e){return Object(v.jsxs)("div",{className:"lockup-row",children:[Object(v.jsx)("div",{children:"\n                id: ".concat(e.id,",\n                account_id: ").concat(e.account_id,",\n                total amount: ").concat(e.total_balance,",\n                claimed amount: ").concat(e.claimed_balance,",\n                available amount: ").concat(e.unclaimed_balance,"\n              ")}),Object(v.jsx)("div",{children:"Schedule: ".concat(JSON.stringify(e.schedule,null,2))})]},e.id)}))})]})}function F(){return Object(v.jsx)("div",{className:"header",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"nav",children:[Object(v.jsx)(u.b,{className:"nav-link",to:"/lockups",children:"Lockups"}),Object(v.jsx)(u.b,{className:"nav-link",to:"/",children:"About"})]})})})}function K(){var e=Object(i.useContext)(m).near,t=Object(i.useState)({}),n=Object(o.a)(t,2),c=n[0],r=n[1],s=Object(i.useState)(null),j=Object(o.a)(s,2),p=j[0],h=j[1];if(Object(i.useEffect)((function(){var t=!0;if(e){var n=function(){var n=Object(a.a)(l.a.mark((function n(){var c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.api.loadAllLockups();case 2:if(c=n.sent,t){n.next=5;break}return n.abrupt("return");case 5:r({lockups:c,name:"name"});case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}return function(){t=!1}}),[e]),Object(i.useEffect)((function(){var t=!0;if(e){var n=function(){var n=Object(a.a)(l.a.mark((function n(){var c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.api.getTokenAccountId();case 2:if(c=n.sent,t){n.next=5;break}return n.abrupt("return");case 5:h(c);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}return function(){t=!1}}),[e]),0===Object.keys(c).length)return null;var b=c.lockups;return Object(v.jsxs)(u.a,{children:[Object(v.jsx)(F,{}),Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{path:"/",element:Object(v.jsx)(k,{lockups:b,token_account_id:p})}),Object(v.jsx)(d.a,{path:"/lockups",element:Object(v.jsx)(M,{lockups:b})}),Object(v.jsx)(d.a,{path:"/lockups/:userId",element:Object(v.jsx)(W,{lockups:b})})]})]})}n(198);function H(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(i.useEffect)((function(){function e(){return(e=Object(a.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=Object(i.useMemo)((function(){return{near:n,signIn:function(){var e;null===n||void 0===n||null===(e=n.api)||void 0===e||e.signIn()},signOut:function(){n&&(n.api.signOut(),c(Object(r.a)(Object(r.a)({},n),{},{signedIn:!1,signedAccountId:null})))}}}),[n]);return Object(v.jsx)(i.StrictMode,{children:Object(v.jsx)(m.Provider,{value:s,children:Object(v.jsx)(K,{})})})}Object(c.render)(Object(v.jsx)(H,{}),document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.2979e86a.chunk.js.map