(this["webpackJsonp@crypto-dev-amigos/client"]=this["webpackJsonp@crypto-dev-amigos/client"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(9),a=n.n(i),s=(n(15),n(16),n(17),n(2)),o=n.n(s),l=n(5),u=n(3),j=n(4);function d(e){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){setTimeout(e,t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=n(0),f=(Date.now(),[]),x=0,v=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x++,t=x,e.next=4,d(100);case 4:n=0;case 5:if(!(n<f.length)){e.next=15;break}if(!(r=f[n])||!r()){e.next=10;break}return e.next=10,d(25);case 10:if(n++,t===x){e.next=13;break}return e.abrupt("return");case 13:e.next=5;break;case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();window.addEventListener("scroll",v),window.addEventListener("load",(function(){new IntersectionObserver(v).observe(document.getElementsByTagName("body")[0])}));var O=0,h=function(e){var t=e.children,n=e.onLoad,c=Object(r.useRef)(null),i=Object(r.useState)(!1),a=Object(j.a)(i,2),s=a[0],o=a[1],l=Object(r.useRef)(!1);Object(r.useRef)(O++);return Object(r.useEffect)((function(){if(c.current){var e=c.current;l.current=!1;var t=f.length;f.push((function(){if(!c.current)return!1;if(l.current)return!1;var t=e.getBoundingClientRect(),i=window.scrollY+window.innerHeight;return t.top<i&&(l.current=!0,r(),o(!0),v(),null===n||void 0===n||n(),!0)}));var r=function(){f[t]=null};return v(),function(){l.current=!0,r()}}}),[t,n]),Object(b.jsxs)(b.Fragment,{children:[!s&&Object(b.jsx)("div",{ref:c,style:{minWidth:300,minHeight:300}}),s&&t]})},m=function(e){return"/data/".concat(e,"/project.json")},y=function(e,t){return"/data/".concat(e,"/").concat(t,".json")},k=function(e){return e.replace("ipfs://","https://gateway.pinata.cloud/ipfs/")},g=function(e){var t=e.ratio,n=e.text;return Object(b.jsxs)("div",{style:{position:"relative"},children:[Object(b.jsx)("div",{className:"bar-background",style:{position:"absolute",zIndex:0,width:"".concat((100*t).toFixed(0),"%"),height:"100%"}}),Object(b.jsx)("div",{style:{color:"#FFFFFF",position:"relative",zIndex:10},children:null!==n&&void 0!==n?n:"".concat((100*t).toFixed(2),"%")})]})},w=function(e){var t;return e?"".concat(e.price.toFixed(3)).concat(null!==(t=e.symbol)&&void 0!==t?t:"").concat(e.priceUsd?" $".concat(e.priceUsd.toFixed(2)):""):" -?- "},F=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"nft-card",children:Object(b.jsx)("div",{style:{height:300},children:"Loading..."})})})},_=function(e){var t=e.nft;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"nft-card",children:[Object(b.jsx)("div",{children:Object(b.jsx)("b",{children:t.nft.name})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Rarity Score:"})," ",t.rarityScore.toFixed(2)]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Listing:"})," ",w(t.listing)]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Last Sell:"})," ",w(t.lastSell)]}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:k(t.nft.external_url),children:"External Link"})}),Object(b.jsxs)("div",{children:[!!t.openSeaLink&&Object(b.jsx)("a",{href:t.openSeaLink,children:"Open Sea"}),!t.openSeaLink&&Object(b.jsx)("span",{children:"Open Sea - Not Found"})]}),Object(b.jsx)("div",{className:"nft-card-image",children:Object(b.jsx)(h,{children:Object(b.jsx)("img",{alt:"nft",src:k(t.nft.image)})})}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row",fontSize:"0.8em",color:"white"},children:[Object(b.jsx)("div",{style:{flex:1},children:"Content"}),Object(b.jsx)("div",{style:{flex:1},children:"Attribute"}),Object(b.jsx)("div",{style:{flex:1},children:"Commonality"}),Object(b.jsx)("div",{style:{flex:1},children:"Rarity Score"})]}),t.attributeRarities.map((function(e){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(b.jsx)("div",{style:{flex:1},children:e.trait_type}),Object(b.jsx)("div",{style:{flex:1},children:Object(b.jsx)("span",{style:"[Missing]"!==e.value?{fontWeight:"bold"}:{},children:e.value})}),Object(b.jsx)("div",{style:{flex:1},children:Object(b.jsx)(g,{ratio:e.ratio})}),Object(b.jsx)("div",{style:{flex:1},children:"".concat(e.ratioScore.toFixed(2))})]})},e.trait_type)}))]})]})})},I=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,c,i,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.contractAddress,r=t.tokenId,c="https://api.opensea.io/api/v1/asset/".concat(n,"/").concat(r,"/"),e.next=4,fetch(c);case 4:return i=e.sent,e.next=7,i.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=e.projectKey,n=e.tokenId,c=e.contractAddress,i=Object(r.useState)(null),a=Object(j.a)(i,2),s=a[0],d=a[1];return Object(r.useEffect)((function(){Object(u.a)(o.a.mark((function e(){var r,i,a,s,u,j,p,b,f,x,v,O,h,k,g,w,F,_,S,L,R,N,K,C,A;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O=y(t,n),e.next=3,fetch(O);case 3:return h=e.sent,e.next=6,h.json();case 6:if(k=e.sent,d(k),c){e.next=19;break}return g=m(t),e.next=12,fetch(g);case 12:return w=e.sent,e.next=15,w.json();case 15:if(F=e.sent,c=F.project.contract){e.next=19;break}return e.abrupt("return");case 19:return e.next=21,I({contractAddress:c,tokenId:n});case 21:_=e.sent,S=parseFloat(null!==(r=null===(i=_.last_sale)||void 0===i?void 0:i.total_price)&&void 0!==r?r:"0")/Math.pow(10,null!==(a=null===(s=_.last_sale)||void 0===s?void 0:s.payment_token.decimals)&&void 0!==a?a:0),L=null===(u=_.last_sale)||void 0===u?void 0:u.payment_token.symbol,R=S*parseFloat(null!==(j=null===(p=_.last_sale)||void 0===p?void 0:p.payment_token.usd_price)&&void 0!==j?j:"1"),N=null===(b=_.orders)||void 0===b?void 0:b[0],K=parseFloat(null!==(f=null===N||void 0===N?void 0:N.current_price)&&void 0!==f?f:"0")/Math.pow(10,null!==(x=null===N||void 0===N?void 0:N.payment_token_contract.decimals)&&void 0!==x?x:0),C=null===N||void 0===N?void 0:N.payment_token_contract.symbol,A=K*parseFloat(null!==(v=null===N||void 0===N?void 0:N.payment_token_contract.usd_price)&&void 0!==v?v:"1"),d(Object(l.a)(Object(l.a)({},k),{},{lastSell:_.last_sale?{price:S,symbol:L,priceUsd:R}:void 0,listing:{price:K,symbol:C,priceUsd:A},openSeaLink:_.permalink}));case 30:case"end":return e.stop()}}),e)})))()}),[t,n]),Object(b.jsxs)(b.Fragment,{children:[!s&&Object(b.jsx)(F,{}),s&&Object(b.jsx)(_,{nft:s})]})},L=n(10),R=function(e){var t=e.items,n=e.getItemKey,i=e.ItemComponent,a=Object(r.useState)(12),s=Object(j.a)(a,2),o=s[0],l=s[1],u=Object(r.useRef)(12);u.current=o;var d=t.slice(0,o);return Object(b.jsx)(b.Fragment,{children:d.map((function(e,t){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)(h,{onLoad:function(){return function(e){u.current===o&&(e+3<o||l((function(e){return e+12})))}(t)},children:Object(b.jsx)(i,{item:e})})},n(e))}))})},N=function(e){var t=e.projectKey,n=Object(r.useState)(null),c=Object(j.a)(n,2),i=c[0],a=c[1];return Object(r.useEffect)((function(){Object(u.a)(o.a.mark((function e(){var n,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m(t),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:c=e.sent,i=K(c),a(i);case 9:case"end":return e.stop()}}),e)})))()}),[t]),Object(b.jsx)(b.Fragment,{children:i&&Object(b.jsx)(C,{projectKey:t,projectRarity:i})})},K=function(e){var t=Object(L.a)(new Set(e.tokenLookups.map((function(e){return e.trait_type}))));return t.forEach((function(t){var n=e.tokenLookups.filter((function(e){return e.trait_type===t})),r=new Set(n.flatMap((function(e){return e.tokenIds}))),c=e.tokenIdsByRank.filter((function(e){return!r.has(e)}));c.length&&e.tokenLookups.push({trait_type:t,trait_value:"[Missing]",tokenIds:c}),e.tokenLookups.push({trait_type:t,trait_value:"[All]",tokenIds:e.tokenIdsByRank})})),{contractAddress:e.project.contract,tokenIdsByRank:e.tokenIdsByRank,tokenLookups:e.tokenLookups.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{ratio:t.tokenIds.length/e.tokenIdsByRank.length})})),traitTypes:t}},C=function(e){var t=e.projectKey,n=e.projectRarity,c=Object(r.useState)(n.tokenIdsByRank),i=Object(j.a)(c,2),a=i[0],s=i[1],o=Object(r.useRef)(null);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsx)(A,{projectRarity:n,onSelect:function(e){var t;s(e.tokens),null===(t=o.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})}})}),Object(b.jsx)("div",{className:"nft-list",ref:o,children:n&&Object(b.jsx)(R,{items:a,getItemKey:function(e){return"".concat(e)},ItemComponent:function(e){var r=e.item;return Object(b.jsx)("div",{onClick:function(){return window.location.href="".concat(t,"/").concat(r)},children:Object(b.jsx)(S,{projectKey:t,tokenId:"".concat(r),contractAddress:n.contractAddress})})}})})]})},A=function(e){var t=e.projectRarity,n=e.onSelect;return Object(b.jsx)("div",{className:"nft-trait-types",children:t.traitTypes.map((function(e){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)(E,{traitType:e,projectRarity:t,onSelect:n})},e)}))})},E=function(e){var t=e.traitType,n=e.projectRarity,r=e.onSelect,i=n.tokenLookups.filter((function(e){return e.trait_type===t}));return Object(b.jsxs)("div",{className:"nft-trait-type",children:[Object(b.jsx)("div",{children:t}),Object(b.jsx)("div",{className:"nft-trait-values",children:i.map((function(e){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("div",{className:"nft-trait-value",onClick:function(){return r({traitType:e.trait_type,value:e.trait_value,tokens:e.tokenIds})},children:Object(b.jsx)(g,{ratio:e.ratio,text:e.trait_value})})},"".concat(e.trait_type,":").concat(e.trait_value))}))})]})},B=function(e){var t=Object(r.useState)(null),n=Object(j.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/data/projects.json",e.next=3,fetch("/data/projects.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,i(n);case 8:case"end":return e.stop()}}),e)})))()}),[]),Object(b.jsx)(b.Fragment,{children:c&&Object(b.jsx)(T,{projects:c})})},T=function(e){var t=e.projects;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"nft-list",children:t&&Object(b.jsx)(R,{items:t.projects,getItemKey:function(e){return"".concat(e.projectKey)},ItemComponent:function(e){var t=e.item;return Object(b.jsx)(M,{projectKey:t.projectKey,project:t.projectMetadata})}})})})},M=function(e){var t=e.projectKey,n=e.project;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"nft-card",children:[Object(b.jsx)("div",{children:Object(b.jsx)("b",{children:n.name})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:k(n.external_link),children:"External Link"})}),Object(b.jsx)("div",{className:"nft-card-image",onClick:function(){return window.location.href="".concat(t)},children:Object(b.jsx)(h,{children:Object(b.jsx)("img",{alt:"nft",src:k(n.image)})})})]})})};var D=function(){var e,t,n=window.location.pathname.split("/"),r=null!==(e=n[1])&&void 0!==e?e:void 0,c=null!==(t=n[2])&&void 0!==t?t:void 0;return console.log("route",{route:n,projectKey:r,tokenId:c}),r&&c?Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{className:"nft-container-single",children:Object(b.jsx)(S,{projectKey:r,tokenId:c})})}):r?Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(N,{projectKey:r})}):Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(B,{})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),U()}},[[20,1,2]]]);
//# sourceMappingURL=main.31bf3a1f.chunk.js.map