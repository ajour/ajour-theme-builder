import{S as s,i as a,s as r,e as t,t as e,c,a as n,g as o,d as u,f as l,F as i,h as d,k as f,l as p,n as m,C as h}from"./chunks/index-c2960006.js";function k(s){let a,r,f=s[1].stack+"";return{c(){a=t("pre"),r=e(f)},l(s){a=c(s,"PRE",{});var t=n(a);r=o(t,f),t.forEach(u)},m(s,t){l(s,a,t),i(a,r)},p(s,a){2&a&&f!==(f=s[1].stack+"")&&d(r,f)},d(s){s&&u(a)}}}function E(s){let a,r,E,g,v,x,P,$=s[1].message+"",j=s[1].stack&&k(s);return{c(){a=t("h1"),r=e(s[0]),E=f(),g=t("p"),v=e($),x=f(),j&&j.c(),P=p()},l(t){a=c(t,"H1",{});var e=n(a);r=o(e,s[0]),e.forEach(u),E=m(t),g=c(t,"P",{});var l=n(g);v=o(l,$),l.forEach(u),x=m(t),j&&j.l(t),P=p()},m(s,t){l(s,a,t),i(a,r),l(s,E,t),l(s,g,t),i(g,v),l(s,x,t),j&&j.m(s,t),l(s,P,t)},p(s,[a]){1&a&&d(r,s[0]),2&a&&$!==($=s[1].message+"")&&d(v,$),s[1].stack?j?j.p(s,a):(j=k(s),j.c(),j.m(P.parentNode,P)):j&&(j.d(1),j=null)},i:h,o:h,d(s){s&&u(a),s&&u(E),s&&u(g),s&&u(x),j&&j.d(s),s&&u(P)}}}function g(s,a,r){let{status:t}=a,{error:e}=a;return s.$$set=s=>{"status"in s&&r(0,t=s.status),"error"in s&&r(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),a(this,s,g,E,r,{status:0,error:1})}}
