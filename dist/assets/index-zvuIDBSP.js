var G=Object.defineProperty;var H=(e,t,n)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var j=(e,t,n)=>(H(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function C(){}function K(e){return e()}function T(){return Object.create(null)}function S(e){e.forEach(K)}function U(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function W(e,t,n){e.insertBefore(t,n||null)}function V(e){e.parentNode&&e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function X(e){return document.createTextNode(e)}function k(){return X(" ")}function A(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Y(e){return Array.from(e.childNodes)}function x(e,t){e.value=t??""}function $(e,t,n,s){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let M;function P(e){M=e}const O=[],q=[];let N=[];const z=[],ee=Promise.resolve();let B=!1;function te(){B||(B=!0,ee.then(Z))}function F(e){N.push(e)}const D=new Set;let L=0;function Z(){if(L!==0)return;const e=M;do{try{for(;L<O.length;){const t=O[L];L++,P(t),ne(t.$$)}}catch(t){throw O.length=0,L=0,t}for(P(null),O.length=0,L=0;q.length;)q.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];D.has(n)||(D.add(n),n())}N.length=0}while(O.length);for(;z.length;)z.pop()();B=!1,D.clear(),P(e)}function ne(e){if(e.fragment!==null){e.update(),S(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}function re(e){const t=[],n=[];N.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),N=t}const se=new Set;function le(e,t){e&&e.i&&(se.delete(e),e.i(t))}function oe(e,t,n){const{fragment:s,after_update:r}=e.$$;s&&s.m(t,n),F(()=>{const l=e.$$.on_mount.map(K).filter(U);e.$$.on_destroy?e.$$.on_destroy.push(...l):S(l),e.$$.on_mount=[]}),r.forEach(F)}function ue(e,t){const n=e.$$;n.fragment!==null&&(re(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(e,t){e.$$.dirty[0]===-1&&(O.push(e),te(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(e,t,n,s,r,l,f=null,p=[-1]){const a=M;P(e);const o=e.$$={fragment:null,ctx:[],props:l,update:C,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:T(),dirty:p,skip_bound:!1,root:t.target||a.$$.root};f&&f(o.root);let g=!1;if(o.ctx=n?n(e,t.props||{},(i,y,...b)=>{const c=b.length?b[0]:y;return o.ctx&&r(o.ctx[i],o.ctx[i]=c)&&(!o.skip_bound&&o.bound[i]&&o.bound[i](c),g&&fe(e,i)),y}):[],o.update(),g=!0,S(o.before_update),o.fragment=s?s(o.ctx):!1,t.target){if(t.hydrate){const i=Y(t.target);o.fragment&&o.fragment.l(i),i.forEach(V)}else o.fragment&&o.fragment.c();t.intro&&le(e.$$.fragment),oe(e,t.target,t.anchor),Z()}P(a)}class ce{constructor(){j(this,"$$");j(this,"$$set")}$destroy(){ue(this,1),this.$destroy=C}$on(t,n){if(!U(n))return C;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ae="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ae);function de(e){let t,n,s,r,l,f,p,a,o,g,i,y,b,c,E,m,I,v,R;return{c(){t=_("main"),n=_("label"),n.textContent="FormID",s=k(),r=_("input"),l=k(),f=_("label"),f.textContent="Plugin that contains the form",p=k(),a=_("input"),o=k(),g=_("div"),i=_("input"),y=_("label"),y.textContent="is the plugin ESL",b=k(),c=_("label"),c.textContent="SPID - DISTR ID",E=k(),m=_("input"),u(n,"for","input"),u(n,"class","svelte-i102fg"),u(r,"id","input"),u(r,"type","text"),u(r,"class","svelte-i102fg"),u(f,"for","modName"),u(f,"class","svelte-i102fg"),u(a,"id","modName"),u(a,"type","text"),u(a,"class","svelte-i102fg"),u(i,"id","esl"),u(i,"type","checkbox"),u(i,"class","svelte-i102fg"),u(y,"for","esl"),u(g,"class","svelte-i102fg"),u(c,"for","result"),$(c,"color","#181"),u(c,"class","svelte-i102fg"),u(m,"id","result"),u(m,"type","text"),u(m,"style",I=e[4]?"color:red":""),u(m,"class","svelte-i102fg"),u(t,"class","svelte-i102fg")},m(h,w){W(h,t,w),d(t,n),d(t,s),d(t,r),x(r,e[0]),d(t,l),d(t,f),d(t,p),d(t,a),x(a,e[1]),d(t,o),d(t,g),d(g,i),i.checked=e[3],d(g,y),d(t,b),d(t,c),d(t,E),d(t,m),x(m,e[2]),v||(R=[A(r,"input",e[6]),A(a,"input",e[7]),A(i,"change",e[8]),A(m,"input",e[9])],v=!0)},p(h,[w]){w&1&&r.value!==h[0]&&x(r,h[0]),w&2&&a.value!==h[1]&&x(a,h[1]),w&8&&(i.checked=h[3]),w&16&&I!==(I=h[4]?"color:red":"")&&u(m,"style",I),w&4&&m.value!==h[2]&&x(m,h[2])},i:C,o:C,d(h){h&&V(t),v=!1,S(R)}}}function pe(e){return e.replace(/[^a-zA-Z0-9]+/g,"")}function he(e,t,n){let s="",r="",l="",f=!1,p=!1,a=!1,o=["skyrim.esm","update.esm","dawnguard.esm","dragonborn.esm","hearthfires.esm"];function g(){s=this.value,n(0,s),n(1,r),n(2,l),n(10,o),n(5,p),n(3,f)}function i(){r=this.value,n(1,r),n(0,s),n(2,l),n(10,o),n(5,p),n(3,f)}function y(){f=this.checked,n(3,f)}function b(){l=this.value,n(2,l),n(0,s),n(1,r),n(10,o),n(5,p),n(3,f)}return e.$$.update=()=>{if(e.$$.dirty&47&&(n(2,l=""),n(4,a=!0),s!=""&&(n(0,s=pe(s).trim()),n(1,r=r.trim()),s.length!=8&&n(2,l+="input must have 8 characters "+s.length+"found"),l==""))){n(4,a=!1);let c=s;r==""||o.includes(r.toLocaleLowerCase())?n(5,p=!1):n(5,p=!0),p&&(f?c=c.substring(5,c.length):c=c.substring(2,c.length));let E=0;for(;c[E]=="0";)E++;n(2,l="0x"+c.substring(E,c.length)+(p?"~"+r:""))}},[s,r,l,f,a,p,g,i,y,b]}class me extends ce{constructor(t){super(),ie(this,t,he,de,J,{})}}new me({target:document.getElementById("app")});