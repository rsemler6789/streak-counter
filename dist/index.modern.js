function t(){return t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},t.apply(this,arguments)}const e="streak";function n(n,r){const o=n.getItem(e);if(o)try{let a=JSON.parse(o||""),i=function(t,e){const n=function(t,e){const n=new Date(t),r=new Date(e),o=Math.abs(r.getTime()-n.getTime());return Math.ceil(o/864e5)}(e,t.toDateString());return 0===n?"nothing":1===n?"increment":"reset"}(r,a.lastLoginDate);if("increment"===i){let e=a.currentCount+1;a=t({},a,{lastLoginDate:r.toLocaleDateString("en-US"),currentCount:e})}else"reset"===i&&(a=t({},a,{lastLoginDate:r.toLocaleDateString("en-US"),currentCount:1}));return n.setItem(e,JSON.stringify(a)),a}catch(t){console.error("Failed to parse streak from localStorage")}const a={currentCount:1,startDate:r.toLocaleDateString("en-US"),lastLoginDate:r.toLocaleDateString("en-US")};return n.setItem(e,JSON.stringify(a)),a}export{n as streakCounter};
//# sourceMappingURL=index.modern.js.map