import{S as s,i as a,s as r,e as t,t as e,c,a as n,g as o,d as u,f as l,F as d,h as f,k as i,l as p,n as m,C as h}from"./chunks/vendor-ee103ee1.js";function k(s){let a,r,i=s[1].stack+"";return{c(){a=t("pre"),r=e(i)},l(s){a=c(s,"PRE",{});var t=n(a);r=o(t,i),t.forEach(u)},m(s,t){l(s,a,t),d(a,r)},p(s,a){2&a&&i!==(i=s[1].stack+"")&&f(r,i)},d(s){s&&u(a)}}}function v(s){let a,r,v,E,g,x,P,$=s[1].message+"",j=s[1].stack&&k(s);return{c(){a=t("h1"),r=e(s[0]),v=i(),E=t("p"),g=e($),x=i(),j&&j.c(),P=p()},l(t){a=c(t,"H1",{});var e=n(a);r=o(e,s[0]),e.forEach(u),v=m(t),E=c(t,"P",{});var l=n(E);g=o(l,$),l.forEach(u),x=m(t),j&&j.l(t),P=p()},m(s,t){l(s,a,t),d(a,r),l(s,v,t),l(s,E,t),d(E,g),l(s,x,t),j&&j.m(s,t),l(s,P,t)},p(s,[a]){1&a&&f(r,s[0]),2&a&&$!==($=s[1].message+"")&&f(g,$),s[1].stack?j?j.p(s,a):(j=k(s),j.c(),j.m(P.parentNode,P)):j&&(j.d(1),j=null)},i:h,o:h,d(s){s&&u(a),s&&u(v),s&&u(E),s&&u(x),j&&j.d(s),s&&u(P)}}}function E(s,a,r){let{status:t}=a,{error:e}=a;return s.$$set=s=>{"status"in s&&r(0,t=s.status),"error"in s&&r(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),a(this,s,E,v,r,{status:0,error:1})}}
