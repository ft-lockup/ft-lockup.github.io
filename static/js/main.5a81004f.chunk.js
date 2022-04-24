(this["webpackJsonpft-lockup-contract-frontend"]=this["webpackJsonpft-lockup-contract-frontend"]||[]).push([[0],{201:function(e,t){},211:function(e,t){},264:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);var a=n(60),c=n(50),r=n(28),o=n(8),s=n(16),i=n.n(s),l=n(0),u=n(17),d=n(45),j=n(41),b="ft-lockup.demo000.ft-lockup.testnet";var h=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CONTRACT_NAME:"ft-lockup.demo000.ft-lockup.testnet"}).REACT_APP_ENVIRONMENT||"development";switch(e){case"production":case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:b,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:b,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};case"betanet":return{networkId:"betanet",nodeUrl:"https://rpc.betanet.near.org",contractName:b,walletUrl:"https://wallet.betanet.near.org",helperUrl:"https://helper.betanet.near.org",explorerUrl:"https://explorer.betanet.near.org"};case"local":return{explorerUrl:"",helperUrl:"",networkId:"local",nodeUrl:"http://localhost:3030",walletUrl:"http://localhost:4000/wallet",contractName:b};case"test":case"ci":return{explorerUrl:"",helperUrl:"",walletUrl:"",networkId:"shared-test",nodeUrl:"https://rpc.ci-testnet.near.org",contractName:b};case"ci-betanet":return{explorerUrl:"",helperUrl:"",walletUrl:"",networkId:"shared-test-staging",nodeUrl:"https://rpc.ci-betanet.near.org",contractName:b};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}(),p=n(55),x=n(56),m=function(){var e=Object(r.a)(i.a.mark((function e(t,n){var a,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.query({request_type:"view_access_key_list",account_id:n,finality:"optimistic"});case 2:if(c=e.sent,null!==(a=c.keys)&&void 0!==a&&a.length){e.next=5;break}throw Error("None of access keys was founded");case 5:if(null!==(r=c.keys.filter((function(e){var t,n;return"string"===typeof(null===e||void 0===e||null===(t=e.access_key)||void 0===t?void 0:t.permission)&&"FullAccess"===(null===e||void 0===e||null===(n=e.access_key)||void 0===n?void 0:n.permission)})))&&void 0!==r&&r.length){e.next=8;break}throw Error("None of full access keys was founded");case 8:return e.abrupt("return",r[0]);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=m,f=["get_lockups_paged","get_token_account_id","get_deposit_whitelist"],v=["claim","terminate"],g=3e14,k=function(){function e(t){Object(p.a)(this,e),this.near=void 0,this.contract=void 0,this.walletConnection=void 0,this.near=t,this.walletConnection=new j.WalletConnection(t,h.contractName),this.contract=this.setContract()}return Object(x.a)(e,[{key:"claim",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,n=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=n.length>0&&void 0!==n[0]?n[0]:this.walletConnection.getAccountId())===this.walletConnection.getAccountId()){e.next=4;break}return e.next=4,this.setWalletAndContractWithAuth(t);case 4:this.contract.claim({},g);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"terminate",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.contract.terminate({lockup_index:t},g);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),Error("Cannot terminate lockup more than once");case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getNear",value:function(){return this.near}},{key:"getContract",value:function(){return this.contract}},{key:"getTokenAccountId",value:function(){return this.contract.get_token_account_id()}},{key:"getDepositWhitelist",value:function(){return this.contract.get_deposit_whitelist()}},{key:"loadAllLockups",value:function(){return this.contract.get_lockups_paged().then((function(e){return e.map((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];return Object.assign(a,{id:n})}))}))}},{key:"signIn",value:function(){var e="".concat(window.location.href);this.walletConnection.requestSignIn(h.contractName,void 0,e)}},{key:"signOut",value:function(){this.walletConnection.signOut()}},{key:"get_account_id",value:function(){return this.walletConnection.getAccountId()}},{key:"account",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.near.account(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"get_balance",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.account(t);case 2:return n=e.sent,a=null,e.prev=4,e.next=7,n.getAccountBalance();case 7:c=e.sent,r=c.total,a=parseFloat(j.utils.format.formatNearAmount(r||"0")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.error("Account not exist");case 14:return e.abrupt("return",a);case 15:case"end":return e.stop()}var r}),e,this,[[4,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"setContract",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.contractName,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v;if(!this.walletConnection)throw Error("Unitialized wallet connection");return this.contract=new j.Contract(this.walletConnection.account(),e,{viewMethods:t,changeMethods:n}),this.contract}},{key:"setWalletAndContractWithAuth",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var n,a,c=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:h.contractName,e.next=3,O(this.near.connection.provider,t);case 3:a=e.sent,localStorage.setItem("".concat(n,"_wallet_auth_key"),JSON.stringify({accountId:t,allKeys:[a.public_key]})),this.walletConnection=new j.WalletConnection(this.near,n),this.setContract();case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),w=k,_=n(159),C=["msg"],y=3e14,N=["ft_metadata"],I=["ft_transfer_call"],A=function(){function e(t,n){Object(p.a)(this,e),this.contract=void 0,this.contract=new j.Contract(t.account(),n,{viewMethods:N,changeMethods:I})}return Object(x.a)(e,[{key:"getContract",value:function(){return this.contract}},{key:"ftTransferCall",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=e.msg,r=Object(_.a)(e,C);this.contract.ft_transfer_call(Object(c.a)({msg:JSON.stringify(a)},r),t,n)}},{key:"ftMetadata",value:function(){return this.contract.ft_metadata({})}}]),e}(),S=A,U=Object(l.createContext)(null),E=function(){var e=Object(r.a)(i.a.mark((function e(){var t,n,a,r,o,s,l,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new j.keyStores.BrowserLocalStorageKeyStore,e.next=3,j.connect(Object(c.a)({headers:{},keyStore:t},h));case 3:return n=e.sent,a=new w(n),r=new j.WalletConnection(n,h.contractName),o=r.getAccountId(),e.next=9,a.getTokenAccountId();case 9:return s=e.sent,e.next=12,a.getDepositWhitelist();case 12:return l=e.sent,u=l.includes(o),d=new S(r,s),e.abrupt("return",{config:h,api:a,signedIn:!!o,isAdmin:u,signedAccountId:o,tokenApi:d});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=n(1);function W(e){var t=e.lockups,n=e.token_account_id;return Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("h1",{children:"About Page"}),Object(T.jsx)("pre",{children:"\n          This page should render all useful info about contract,\n          at least ft-lockup name, token name, contract ft balance,\n\n          ft-lockup account id: ".concat(h.contractName,"\n          token account id: ").concat(n,"\n\n          Total number of lockups: ").concat(t.length,"\n        ")})]})}var D=n(345),F=n(173),M=n(336),P=n(337),L=n(332),R=n(333),B=n(338),K=n(334),q=n(335),J=n(163),z=n.n(J),H=n(164),Y=n.n(H),V=n(48),G=n.n(V);G.a.DP=40;var Q=function(e){return new Date(1e3*e).toLocaleDateString("en-US")},X=function(e,t){return G()(e||"0").div(Math.pow(10,t)).toFixed(2)},Z=function(e,t){return new Date(null===e||void 0===e?void 0:e.setFullYear(((null===e||void 0===e?void 0:e.getFullYear())||0)+t)).getTime()/1e3};var $=function(e){var t=Object(l.useContext)(U).near,n=e.lockupIndex,a=e.config;if(!t)throw Error("Cannot access lockup api");var c=t.signedAccountId;if(void 0===n)throw Error("Cannot terminate lockup without lockupIndex");return console.log(a),Object(T.jsx)("button",{className:"button red fullWidth",disabled:!a||a.terminator_id!==c,type:"button",onClick:function(){t.api.terminate(n)},children:"Terminate"})};function ee(e){var t=Object(l.useState)(!1),n=Object(o.a)(t,2),a=n[0],c=n[1],r=e.row,s=e.token,i=e.adminControls,u=Object(l.useContext)(U).near;if(!u)return null;var j=u.signedIn,b=u.isAdmin;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(L.a,{className:a?"expanded exp-row":"exp-row",sx:{"& > *":{borderBottom:"unset"}},children:[Object(T.jsx)(R.a,{children:Object(T.jsx)(K.a,{"aria-label":"expand row",size:"small",onClick:function(){return c(!a)},children:a?Object(T.jsx)(z.a,{}):Object(T.jsx)(Y.a,{})})}),Object(T.jsx)(R.a,{align:"left",children:r.id}),Object(T.jsx)(R.a,{align:"left",children:Object(T.jsx)(d.b,{to:j?"/admin/lockups/".concat(r.account_id):"/lockups/".concat(r.account_id),children:r.account_id})}),Object(T.jsx)(R.a,{align:"right",children:Q(r.schedule[0].timestamp)}),Object(T.jsx)(R.a,{align:"right",children:Q(r.schedule[r.schedule.length-1].timestamp)}),Object(T.jsxs)(R.a,{align:"right",children:[X(r.total_balance,s.decimals),"\xa0",s.symbol]}),Object(T.jsx)(R.a,{align:"center",children:Object(T.jsxs)("div",{className:"progress-bar",children:[Object(T.jsx)("div",{style:{width:"".concat(r.claimed_balance/r.total_balance*100,"%")},className:"claimed",children:Object(T.jsx)("span",{children:X(r.claimed_balance,s.decimals)})}),Object(T.jsx)("div",{style:{width:"".concat(r.unclaimed_balance/r.total_balance*100,"%")},className:"available",children:Object(T.jsx)("span",{children:X(r.unclaimed_balance,s.decimals)})}),Object(T.jsx)("div",{style:{width:"".concat((r.total_balance-r.claimed_balance-r.unclaimed_balance)/r.total_balance*100,"%")},className:"vested",children:Object(T.jsx)("span",{children:(r.total_balance-r.claimed_balance-r.unclaimed_balance)/r.total_balance>.2&&X(r.total_balance-r.claimed_balance-r.unclaimed_balance,s.decimals)})}),Object(T.jsx)("div",{style:{width:"".concat(100*(r.total_balance-r.total_balance),"%")},className:"unvested",children:"\xa0"})]})})]}),Object(T.jsx)(L.a,{sx:{background:"#F4FAFF"},children:Object(T.jsx)(R.a,{style:{padding:0},colSpan:7,children:Object(T.jsx)(q.a,{in:a,timeout:"auto",unmountOnExit:!0,children:Object(T.jsxs)("div",{className:"lockup-row",children:[Object(T.jsxs)("div",{className:"inner-table_wrapper",children:[Object(T.jsx)("h5",{children:"Lockup schedule"}),Object(T.jsxs)(M.a,{className:"inner-table",size:"small","aria-label":"purchases",children:[Object(T.jsx)(P.a,{children:Object(T.jsxs)(L.a,{children:[Object(T.jsx)(R.a,{children:"DATE"}),Object(T.jsx)(R.a,{children:"AMOUNT"})]})}),Object(T.jsx)(B.a,{children:r.schedule.map((function(e){return Object(T.jsxs)(L.a,{children:[Object(T.jsx)(R.a,{component:"th",scope:"row",children:Q(e.timestamp)}),Object(T.jsxs)(R.a,{children:[X(e.balance,s.decimals),"\xa0",s.symbol]})]},e.timestamp)}))})]})]}),j&&b&&i&&Object(T.jsx)("div",{className:"terminate",children:Object(T.jsx)($,{lockupIndex:r.id,config:r.termination_config})})]})})})})]})}var te=n(316),ne=n(320),ae=n(339),ce=n(327),re=n(343),oe=n(342),se=n(326),ie=n(330),le=n(344),ue=n(166),de=n.n(ue),je=n(325),be=n(167),he=n(324);function pe(e){var t=e.token,n=Object(l.useContext)(U).near,a=Object(l.useState)(!1),s=Object(o.a)(a,2),u=s[0],d=s[1],j=Object(l.useState)(null),b=Object(o.a)(j,2),h=b[0],p=b[1],x=Object(l.useState)("4_year"),m=Object(o.a)(x,2),O=m[0],f=m[1],v=function(){return d(!1)},g=function(){var e=Object(r.a)(i.a.mark((function e(a){var c,r,o,s,l,u,d,j;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}throw Error("Cannot access token api");case 2:a.preventDefault(),c=a.target.elements,r=c.account,o=c.amount,console.log(r.value,o.value),s=(null===n||void 0===n?void 0:n.api.getContract().contractId)||"","0",l=r.value,u=o.value*Math.pow(10,t.decimals),d=((null===h||void 0===h?void 0:h.getTime())||0)/1e3,j=function(e,t,n,a){return{"4_year":[{timestamp:e,balance:"0"},{timestamp:Z(t,1)-1,balance:"0"},{timestamp:Z(t,1),balance:(n/4).toString()},{timestamp:Z(t,4),balance:n.toString()}]}[a]},n.tokenApi.ftTransferCall({receiver_id:s,amount:u.toString(),msg:{account_id:l,schedule:j(d,h,u,O),claimed_balance:"0"}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsx)("button",{className:"button",type:"button",onClick:function(){return d(!0)},children:"Create Lockup"}),Object(T.jsx)(te.a,{open:u,sx:{padding:2},maxWidth:"xs",onClose:v,children:Object(T.jsxs)("form",{className:"form-submit",onSubmit:g,children:[Object(T.jsxs)(ne.a,{children:["Create Lockup",Object(T.jsx)(K.a,{"aria-label":"close",onClick:v,sx:{position:"absolute",right:8,top:8},children:Object(T.jsx)(de.a,{})})]}),Object(T.jsxs)(ae.a,{sx:{maxWidth:"320px"},children:[Object(T.jsx)(ce.a,{margin:"normal",id:"account",label:"Account Id",type:"text",fullWidth:!0,variant:"standard"}),Object(T.jsx)(ce.a,{margin:"normal",id:"amount",label:"Amount",type:"number",variant:"standard",InputProps:{endAdornment:Object(T.jsx)(re.a,{position:"end",children:t.symbol})},fullWidth:!0}),Object(T.jsx)("br",{}),Object(T.jsx)(oe.a,{fullWidth:!0,sx:{marginTop:"20px"},children:Object(T.jsx)(se.a,{id:"schedule-select",value:O,label:"Schedule",onChange:function(e){f(e)},variant:"standard",fullWidth:!0,children:Object(T.jsx)(ie.a,{value:"4_year",children:"4 year lockup with 25% cliff in 1 year"})})}),Object(T.jsx)(be.a,{dateAdapter:je.a,children:Object(T.jsx)(he.a,{label:"Start date",value:h,onChange:function(e){p(e)},renderInput:function(e){return Object(T.jsx)(ce.a,Object(c.a)({margin:"normal",fullWidth:!0,variant:"standard"},e))}})})]}),Object(T.jsx)(le.a,{sx:{padding:"14px 24px 24px"},children:Object(T.jsx)("button",{className:"button fullWidth noMargin",type:"submit",children:"Create"})})]})})]})}function xe(e){var t=e.lockups,n=e.token,a=e.adminControls,c=Array.from(new Set(t.map((function(e){return e.account_id}))));console.log("unique users",c);var r=Object(l.useContext)(U).near;if(!r)return null;var o=r.signedIn,s=r.isAdmin;return Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)(D.a,{sx:{boxShadow:"unset",margin:"0 0 20px"},component:F.a,children:Object(T.jsxs)(M.a,{className:"main-table","aria-label":"collapsible table",children:[Object(T.jsx)(P.a,{className:"table-head",children:Object(T.jsxs)(L.a,{children:[Object(T.jsx)(R.a,{}),Object(T.jsx)(R.a,{align:"left",children:"ID"}),Object(T.jsx)(R.a,{align:"left",children:"Account ID"}),Object(T.jsx)(R.a,{align:"right",children:"Start\xa0date"}),Object(T.jsx)(R.a,{align:"right",children:"End\xa0date"}),Object(T.jsx)(R.a,{align:"right",children:"Total\xa0amount"}),Object(T.jsx)(R.a,{align:"center",children:"Progress"})]})}),Object(T.jsx)(B.a,{children:t.map((function(e){return Object(T.jsx)(ee,{row:e,token:n,adminControls:a},e.id)}))})]})}),o&&a&&s&&Object(T.jsx)(pe,{token:n})]})}var me=function(e){var t=Object(l.useContext)(U).near,n=e.accountId,a=e.token,c=e.total;if(!t)throw Error("Cannot access lockup api");if(!n)throw Error("Undefined account cannot claim");return Object(T.jsxs)("div",{className:"claim-wrapper",children:[Object(T.jsx)("h5",{children:"Total available"}),Object(T.jsxs)("div",{className:"claim-amount",children:[c,Object(T.jsx)("span",{children:a.symbol})]}),Object(T.jsx)("button",{className:"button",type:"button",onClick:function(){t.api.claim(n)},children:"Claim All"})]})};function Oe(e){var t=e.lockups,n=e.token,a=e.adminControls,c=Object(u.h)().userId,r=t.filter((function(e){return e.account_id===c})),o=r.reduce((function(e,t){return e+parseFloat(t.unclaimed_balance)}),0);return console.log("user lockups",c,r),Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)(me,{accountId:c,token:n,total:X(o,n.decimals)}),Object(T.jsx)(D.a,{sx:{boxShadow:"unset"},component:F.a,children:Object(T.jsxs)(M.a,{className:"main-table","aria-label":"collapsible table",children:[Object(T.jsx)(P.a,{className:"table-head",children:Object(T.jsxs)(L.a,{children:[Object(T.jsx)(R.a,{}),Object(T.jsx)(R.a,{align:"left",children:"ID"}),Object(T.jsx)(R.a,{align:"left",children:"Account ID"}),Object(T.jsx)(R.a,{align:"right",children:"Start\xa0date"}),Object(T.jsx)(R.a,{align:"right",children:"End\xa0date"}),Object(T.jsx)(R.a,{align:"right",children:"Total\xa0amount"}),Object(T.jsx)(R.a,{align:"center",children:"Progress"})]})}),Object(T.jsx)(B.a,{children:r.map((function(e){return Object(T.jsx)(ee,{row:e,token:n,adminControls:a},e.id)}))})]})})]})}var fe=n(346);function ve(e){var t=e.adminControls,n=Object(l.useContext)(U),a=n.near,c=n.signOut;if(!a)return null;var r=a.signedIn,o=a.signedAccountId,s=a.isAdmin;return Object(T.jsx)("div",{className:"header",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)(fe.a,{sx:{display:"flex"},children:[Object(T.jsxs)("div",{className:"nav",children:[Object(T.jsx)(d.b,{className:"nav-link",to:t&&s?"/admin/lockups":"/lockups",children:"Lockups"}),Object(T.jsx)(d.b,{className:"nav-link",to:"/about",children:"About"})]}),t&&r&&Object(T.jsxs)(fe.a,{sx:{marginTop:"23px"},children:[Object(T.jsxs)("span",{children:[o," "]}),Object(T.jsx)("button",{className:"button",type:"button",onClick:c,children:"Log out"})]})]})})})}var ge=n(328);function ke(e){var t=e.children;return Object(T.jsx)("div",{className:"container login",children:t})}var we=function(){var e=Object(l.useContext)(U),t=e.near,n=e.signIn;if(!t)return null;var a=t.signedIn,c=t.isAdmin;return Object(T.jsxs)(ke,{children:[a&&!c&&Object(T.jsx)(ge.a,{sx:{margin:2,width:"500px"},severity:"error",children:"You are not admin"}),!a&&Object(T.jsx)("button",{className:"button",type:"button",onClick:n,children:"Sign In"}),a&&c&&Object(T.jsx)(u.a,{to:"lockups",replace:!0})]})};function _e(e){var t=e.children,n=Object(u.f)(),a=Object(l.useContext)(U).near;if(!a)return null;var c=a.signedIn,r=a.isAdmin;return c&&r?t:Object(T.jsx)(u.a,{to:"/admin",state:{from:n},replace:!0})}function Ce(e){var t=e.lockups,n=e.token,a=e.contractId;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(ve,{adminControls:!1}),Object(T.jsxs)(u.d,{children:[Object(T.jsx)(u.b,{path:"/",element:Object(T.jsx)(u.a,{replace:!0,to:"/lockups"})}),Object(T.jsx)(u.b,{path:"/about",element:Object(T.jsx)(W,{lockups:t,token_account_id:a})}),Object(T.jsx)(u.b,{path:"/lockups",element:Object(T.jsx)(xe,{lockups:t,token:n,adminControls:!1})}),Object(T.jsx)(u.b,{path:"/lockups/:userId",element:Object(T.jsx)(Oe,{lockups:t,token:n,adminControls:!1})})]})]})}function ye(e){var t=e.lockups,n=e.token;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(ve,{adminControls:!0}),Object(T.jsxs)(u.d,{children:[Object(T.jsx)(u.b,{path:"/",element:Object(T.jsx)(we,{})}),Object(T.jsx)(u.b,{path:"/lockups",element:Object(T.jsx)(_e,{children:Object(T.jsx)(xe,{lockups:t,token:n,adminControls:!0})})}),Object(T.jsx)(u.b,{path:"/lockups/:userId",element:Object(T.jsx)(_e,{children:Object(T.jsx)(Oe,{lockups:t,token:n,adminControls:!0})})})]})]})}function Ne(){var e=Object(l.useContext)(U).near,t=Object(l.useState)({}),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(l.useState)(null),j=Object(o.a)(s,2),b=j[0],h=j[1],p=Object(l.useState)({decimals:0,icon:null,name:"",reference:null,reference_hash:null,spec:"",symbol:""}),x=Object(o.a)(p,2),m=x[0],O=x[1];if(Object(l.useEffect)((function(){var t=!0;if(e){var n=function(){var n=Object(r.a)(i.a.mark((function n(){var a,r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.api.loadAllLockups();case 2:return a=n.sent,n.next=5,e.tokenApi.ftMetadata();case 5:if(r=n.sent,t){n.next=8;break}return n.abrupt("return");case 8:O(r),c({lockups:a,name:"name"});case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}return function(){t=!1}}),[e]),Object(l.useEffect)((function(){return e&&e.tokenApi&&h(e.tokenApi.getContract().contractId),function(){}}),[e]),0===Object.keys(a).length)return null;var f=a.lockups;return Object(T.jsx)(d.a,{children:Object(T.jsxs)(u.d,{children:[Object(T.jsx)(u.b,{path:"/*",element:Object(T.jsx)(Ce,{lockups:f,token:m,contractId:b})}),Object(T.jsx)(u.b,{path:"/admin/*",element:Object(T.jsx)(ye,{lockups:f,token:m})})]})})}n(264);function Ie(){var e=Object(l.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1];Object(l.useEffect)((function(){function e(){return(e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=Object(l.useMemo)((function(){return{near:n,signIn:function(){var e;null===n||void 0===n||null===(e=n.api)||void 0===e||e.signIn()},signOut:function(){n&&(n.api.signOut(),a(Object(c.a)(Object(c.a)({},n),{},{signedIn:!1,signedAccountId:null})))}}}),[n]);return Object(T.jsx)(l.StrictMode,{children:Object(T.jsx)(U.Provider,{value:s,children:Object(T.jsx)(Ne,{})})})}Object(a.render)(Object(T.jsx)(Ie,{}),document.getElementById("root"))}},[[265,1,2]]]);
//# sourceMappingURL=main.5a81004f.chunk.js.map