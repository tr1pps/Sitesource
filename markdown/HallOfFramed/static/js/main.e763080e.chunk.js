(this["webpackJsonpjim-framed"]=this["webpackJsonpjim-framed"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n.n(r),a=n(15),s=n.n(a),o=(n(23),n(6)),l=n.n(o),h=n(17),u=n(16),d=n(2),j=(n(25),n(26));function b(e){return{maxWidth:e.clientWidth}}var f=function(e){var t=e.className,n=e.images,i=e.rowTargetHeight,a=void 0===i?400:i,s=e.borderOffset,o=void 0===s?5:s,l=e.container,h=e.onClick,u=function(e){var t=Object(r.useState)(b(e)),n=Object(d.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){function t(){i(b(e))}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),c}(l).maxWidth,j=function(e,t){t=t||1;var n=e.height-t;return e.width=e.width*(n/e.height),e.height=n,e},f=function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n].width;return t+=(e.length-1)*o},g=function(){for(var e=0,t=0,c=0,r=[],i=function(){for(var e=[],t=0;t<n.length;t++){var c=parseInt(n[t].width),r=parseInt(n[t].height);c*=a/r;var i={id:n[t].id,author:n[t].author,authorsAvatarUrl:n[t].authorsAvatarUrl,data:n[t].date,gameName:n[t].gameName,score:n[t].score,fullWidth:n[t].width,fullHeight:n[t].height,shotUrl:n[t].shotUrl,thumbnailUrl:n[t].thumbnailUrl,width:c,height:a};e.push(i)}return e}();i[c];)t>=u&&(e++,t=0),r[e]||(r[e]=[]),r[e].push(i[c]),t+=i[c].width,c++;return r},v=function(e){for(var t=0;t<e.length;t++)(n=e[t]).width=parseInt(n.width),n.height=parseInt(n.height);var n;return e},O=function(e){for(;f(e)>u;)for(var t=0;t<e.length;t++)e[t]=j(e[t]);return e};return function(){for(var e=g(),n=0;n<e.length;n++){e[n]=O(e[n]),e[n]=v(e[n]);var r=u-f(e[n]),i=e[n].length;if(i>1&&r<10){for(var a=r/i,s=0;s<e[n].length;s++)e[n][s].width+=a;e[n]=v(e[n]),e[n][e[n].length-1].width+=u-f(e[n])}}return function(e){return Object(c.jsx)("div",{className:t,children:e.map((function(e,t){return Object(c.jsx)("div",{className:"image-row",children:e.map((function(e,t){return Object(c.jsx)("img",{alt:e.gameName,src:e.thumbnailUrl,style:{marginRight:o,marginBottom:o,width:Math.ceil(e.width),height:e.height,cursor:"pointer"},onClick:function(){return h(e,t)}},t)}))},t)}))})}(e)}()},g=n(4),v=n.n(g),O=function(){return Object(c.jsxs)("div",{className:"sort-icon",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 292 292",fill:"#fff",children:Object(c.jsx)("g",{children:Object(c.jsx)("path",{d:"M286.935,197.286L159.028,69.379c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233,1.807-12.85,5.424L5.424,197.286\r C1.807,200.9,0,205.184,0,210.132s1.807,9.233,5.424,12.847c3.621,3.617,7.902,5.428,12.85,5.428h255.813\r c4.949,0,9.233-1.811,12.848-5.428c3.613-3.613,5.427-7.898,5.427-12.847S290.548,200.9,286.935,197.286z"})})}),Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 292 292",fill:"#aaa",children:Object(c.jsx)("g",{children:Object(c.jsx)("path",{d:"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424\r C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428\r s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"})})})]})},m=function(){return Object(c.jsxs)("div",{className:"sort-icon",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 292 292",fill:"#aaa",children:Object(c.jsx)("g",{children:Object(c.jsx)("path",{d:"M286.935,197.286L159.028,69.379c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233,1.807-12.85,5.424L5.424,197.286\r C1.807,200.9,0,205.184,0,210.132s1.807,9.233,5.424,12.847c3.621,3.617,7.902,5.428,12.85,5.428h255.813\r c4.949,0,9.233-1.811,12.848-5.428c3.613-3.613,5.427-7.898,5.427-12.847S290.548,200.9,286.935,197.286z"})})}),Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 292 292",fill:"#fff",children:Object(c.jsx)("g",{children:Object(c.jsx)("path",{d:"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424\r C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428\r s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"})})})]})},x=function(){return Object(c.jsx)("div",{className:"framed-icon",children:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 2048 2048",fill:"#9A9A9A",children:[Object(c.jsx)("g",{children:Object(c.jsx)("g",{children:Object(c.jsx)("path",{d:"M892.3,688v242h539v247.2h-539v411.9H609.1v-1150h889.1V688H892.3z"})})}),Object(c.jsx)("path",{d:"M143.6,138.5v1760.9h1760.9V138.5H143.6z M1783.8,1778.7H264.2V259.2h1519.6V1778.7z"})]})})},w=function(e){var t=e.className,n=e.options,i=e.reverseSort,a=e.updateSort,s=e.updateType,o=e.updateSearch,l=Object(r.useState)(n[0]),h=Object(d.a)(l,2),u=h[0],j=h[1],b=Object(r.useState)("All"),f=Object(d.a)(b,2),g=f[0],w=f[1],p=Object(r.useState)(""),N=Object(d.a)(p,2),C=N[0],S=N[1],k=i?Object(c.jsx)(O,{}):Object(c.jsx)(m,{});return Object(c.jsxs)("div",{className:"image-nav ".concat(t),children:[Object(c.jsx)(x,{}),Object(c.jsx)("ul",{className:"filters",children:n.map((function(e,t){var n=u.key===e.key,r=n?"is-active":void 0;return Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:v()("filter",r),onClick:function(){return j(t=e),void a(t);var t},children:Object(c.jsxs)(c.Fragment,{children:[e.label,n&&k]})},e.label)},t)}))}),Object(c.jsx)("div",{className:"image-types",children:["All","Wide","Portrait"].map((function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{id:"".concat(e,"-label"),onChange:function(){return w(t=e),void s(t);var t},checked:g===e,type:"radio",value:e,name:"type"},"".concat(e,"-input")),Object(c.jsx)("label",{htmlFor:"".concat(e,"-label"),children:e},"".concat(e,"-label"))]})}))}),Object(c.jsx)("div",{className:"search",children:Object(c.jsx)("input",{type:"search",name:"search",className:"search-input",placeholder:"Search",value:C,onChange:function(e){S(e.target.value),o(e.target.value.toLowerCase())}})})]})},p=function(e){var t=e.image,n=void 0===t?{}:t,r=e.show,i=e.onClose,a=e.data,s=e.onPrev,o=e.onNext,l=r?"is-visible":void 0,h=0===a.findIndex((function(e){return e.id===n.id})),u=a.findIndex((function(e){return e.id===n.id}))===a.length-1;return Object(c.jsxs)("div",{className:v()("image-viewer",l),onClick:i,children:[Object(c.jsxs)("div",{className:"image-nav",children:[Object(c.jsx)("button",{className:"image-nav-button left",disabled:h,onClick:s,children:"[ Prev ]"}),Object(c.jsx)("button",{className:"image-nav-button right",disabled:u,onClick:o,children:"[ Next ]"})]}),Object(c.jsxs)("div",{className:"image-viewer-content",children:[n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",{alt:n.gameName,src:n.shotUrl,onClick:function(e){e.stopPropagation()}}),Object(c.jsxs)("div",{className:"author",onClick:function(e){e.stopPropagation()},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"by"})," ",Object(c.jsx)("strong",{children:n.author})]}),Object(c.jsx)("div",{className:"title",children:n.gameName})]})]}),Object(c.jsx)("button",{className:"close",onClick:i})]})]})},N=function(e){var t=e.data,n=[{label:"Date",key:"date"},{label:"Reactions",key:"score"}],i=Object(r.useState)([]),a=Object(d.a)(i,2),s=a[0],o=a[1],l=Object(r.useState)(n[0]),h=Object(d.a)(l,2),u=h[0],j=h[1],b=Object(r.useState)("all"),g=Object(d.a)(b,2),v=g[0],O=g[1],m=Object(r.useState)(""),x=Object(d.a)(m,2),N=x[0],C=x[1],S=Object(r.useState)(!1),k=Object(d.a)(S,2),y=k[0],L=k[1],P=Object(r.useState)({}),I=Object(d.a)(P,2),z=I[0],H=I[1],M=Object(r.useState)(!1),B=Object(d.a)(M,2),F=B[0],U=B[1],A=function(e){var t=e,n=u.key,c=function(e,t){return e[n]<t[n]?1:t[n]<e[n]?-1:0};return F&&(c=function(e,t){return e[n]>t[n]?1:t[n]>e[n]?-1:0}),t=e.sort(c),"Wide"===v?t=t.filter((function(e){return e.width>=e.height})):"Portrait"===v&&(t=t.filter((function(e){return e.width<=e.height}))),function(e){return(null===N||void 0===N?void 0:N.length)<3?e:e.filter((function(e){return Object.keys(e).reduce((function(t,n){return t||e[n].toString().toLowerCase().includes(N.toLowerCase())}),!1)}))}(t)};Object(r.useEffect)((function(){if(t.length){var e=A(t.slice());o(e)}}),[t,u,v,N,F]);var E=document.querySelector(".image-grid");return Object(c.jsxs)("div",{style:{margin:"0 auto"},className:"home",children:[Object(c.jsx)(w,{className:y?"hidden":"",options:n,reverseSort:F,updateSort:function(e){e.key===u.key?U((function(e){return!e})):(U(!1),j(e))},updateType:function(e){O(e)},updateSearch:function(e){C(e)}}),s&&E&&Object(c.jsx)(f,{images:s,rowTargetHeight:300,container:E,onClick:function(e){H(e),L(!0)}}),Object(c.jsx)(p,{image:z,show:y,onClose:function(){H({}),L(!1)},data:s,onPrev:function(e){e.stopPropagation();var t=s.findIndex((function(e){return e.id===z.id}));t-1>=0&&H(s[t-1])},onNext:function(e){e.stopPropagation();var t=s.findIndex((function(e){return e.id===z.id}));t+1<=s.length&&H(s[t+1])}})]})};var C=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(!1),s=Object(d.a)(a,2),o=s[0],b=s[1],f=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,j.get("".concat("https://raw.githubusercontent.com/originalnicodrgitbot/hall-of-framed-db/main/shotsdb.json"));case 3:t=e.sent,n=Object.entries(t.data._default),c=[],n.forEach((function(e){var t=e[0],n=e[1];c.push(Object(h.a)({id:t},n))})),i(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){o||f()})),Object(c.jsx)("div",{className:"image-grid",children:n&&Object(c.jsx)(N,{data:n})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),S()}},[[45,1,2]]]);
//# sourceMappingURL=main.e763080e.chunk.js.map