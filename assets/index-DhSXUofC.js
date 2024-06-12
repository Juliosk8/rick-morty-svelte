var de=Object.defineProperty;var he=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var V=(e,t,n)=>(he(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function F(){}function re(e){return e()}function Q(){return Object.create(null)}function q(e){e.forEach(re)}function se(e){return typeof e=="function"}function oe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let K;function W(e,t){return e===t?!0:(K||(K=document.createElement("a")),K.href=t,e===K.href)}function pe(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function j(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function me(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function N(){return x(" ")}function X(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function $(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ge(e){return Array.from(e.childNodes)}function T(e,t){t=""+t,e.data!==t&&(e.data=t)}let H;function M(e){H=e}const B=[],Y=[];let I=[];const Z=[],_e=Promise.resolve();let z=!1;function $e(){z||(z=!0,_e.then(ce))}function D(e){I.push(e)}const k=new Set;let P=0;function ce(){if(P!==0)return;const e=H;do{try{for(;P<B.length;){const t=B[P];P++,M(t),ye(t.$$)}}catch(t){throw B.length=0,P=0,t}for(M(null),B.length=0,P=0;Y.length;)Y.pop()();for(let t=0;t<I.length;t+=1){const n=I[t];k.has(n)||(k.add(n),n())}I.length=0}while(B.length);for(;Z.length;)Z.pop()();z=!1,k.clear(),M(e)}function ye(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}function be(e){const t=[],n=[];I.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),I=t}const U=new Set;let S;function ve(){S={r:0,c:[],p:S}}function we(){S.r||q(S.c),S=S.p}function R(e,t){e&&e.i&&(U.delete(e),e.i(t))}function G(e,t,n,r){if(e&&e.o){if(U.has(e))return;U.add(e),S.c.push(()=>{U.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ee(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ee(e){e&&e.c()}function ie(e,t,n){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),D(()=>{const o=e.$$.on_mount.map(re).filter(se);e.$$.on_destroy?e.$$.on_destroy.push(...o):q(o),e.$$.on_mount=[]}),s.forEach(D)}function le(e,t){const n=e.$$;n.fragment!==null&&(be(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Oe(e,t){e.$$.dirty[0]===-1&&(B.push(e),$e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(e,t,n,r,s,o,h=null,p=[-1]){const m=H;M(e);const c=e.$$={fragment:null,ctx:[],props:o,update:F,not_equal:s,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:Q(),dirty:p,skip_bound:!1,root:t.target||m.$$.root};h&&h(c.root);let E=!1;if(c.ctx=n?n(e,t.props||{},(a,O,...y)=>{const A=y.length?y[0]:O;return c.ctx&&s(c.ctx[a],c.ctx[a]=A)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](A),E&&Oe(e,a)),O}):[],c.update(),E=!0,q(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const a=ge(t.target);c.fragment&&c.fragment.l(a),a.forEach(L)}else c.fragment&&c.fragment.c();t.intro&&R(e.$$.fragment),ie(e,t.target,t.anchor),ce()}M(m)}class fe{constructor(){V(this,"$$");V(this,"$$set")}$destroy(){le(this,1),this.$destroy=F}$on(t,n){if(!se(n))return F;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ae="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ae);function Ce(e){let t,n,r,s,o,h,p=e[0].name+"",m,c,E,a=e[0].species+"",O,y,A,b=e[0].status+"",v;return{c(){t=_("div"),n=_("img"),o=N(),h=_("h2"),m=x(p),c=N(),E=_("h3"),O=x(a),y=N(),A=_("h3"),v=x(b),W(n.src,r=e[0].image)||$(n,"src",r),$(n,"alt",s=e[0].name),$(t,"class","subcard")},m(g,w){j(g,t,w),f(t,n),f(t,o),f(t,h),f(h,m),f(t,c),f(t,E),f(E,O),f(t,y),f(t,A),f(A,v)},p(g,[w]){w&1&&!W(n.src,r=g[0].image)&&$(n,"src",r),w&1&&s!==(s=g[0].name)&&$(n,"alt",s),w&1&&p!==(p=g[0].name+"")&&T(m,p),w&1&&a!==(a=g[0].species+"")&&T(O,a),w&1&&b!==(b=g[0].status+"")&&T(v,b)},i:F,o:F,d(g){g&&L(t)}}}function Le(e,t,n){let{caracter:r}=t;return e.$$set=s=>{"caracter"in s&&n(0,r=s.caracter)},[r]}class Ne extends fe{constructor(t){super(),ue(this,t,Le,Ce,oe,{caracter:0})}}function te(e,t,n){const r=e.slice();return r[5]=t[n],r}function ne(e){let t,n;return t=new Ne({props:{caracter:e[5]}}),{c(){Ee(t.$$.fragment)},m(r,s){ie(t,r,s),n=!0},p(r,s){const o={};s&1&&(o.caracter=r[5]),t.$set(o)},i(r){n||(R(t.$$.fragment,r),n=!0)},o(r){G(t.$$.fragment,r),n=!1},d(r){le(t,r)}}}function Se(e){let t,n,r,s,o,h,p,m,c,E,a,O,y,A,b,v,g,w,C=ee(e[0]),l=[];for(let i=0;i<C.length;i+=1)l[i]=ne(te(e,C,i));const ae=i=>G(l[i],1,1,()=>{l[i]=null});return{c(){t=_("h1"),t.textContent="Rick and Morty Svelte",n=N(),r=_("h2"),s=x("Página: "),o=x(e[1]),h=N(),p=_("div"),m=_("div"),c=_("button"),E=x("Anterior"),O=N(),y=_("button"),y.textContent="Siguiente",A=N(),b=_("div");for(let i=0;i<l.length;i+=1)l[i].c();$(t,"class","title"),$(r,"class","title"),$(c,"class","boton"),c.disabled=a=e[1]===1,$(y,"class","boton"),$(m,"class","botones"),$(b,"class","grid"),$(p,"class","contenedor")},m(i,d){j(i,t,d),j(i,n,d),j(i,r,d),f(r,s),f(r,o),j(i,h,d),j(i,p,d),f(p,m),f(m,c),f(c,E),f(m,O),f(m,y),f(p,A),f(p,b);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(b,null);v=!0,g||(w=[X(c,"click",e[3]),X(y,"click",e[2])],g=!0)},p(i,[d]){if((!v||d&2)&&T(o,i[1]),(!v||d&2&&a!==(a=i[1]===1))&&(c.disabled=a),d&1){C=ee(i[0]);let u;for(u=0;u<C.length;u+=1){const J=te(i,C,u);l[u]?(l[u].p(J,d),R(l[u],1)):(l[u]=ne(J),l[u].c(),R(l[u],1),l[u].m(b,null))}for(ve(),u=C.length;u<l.length;u+=1)ae(u);we()}},i(i){if(!v){for(let d=0;d<C.length;d+=1)R(l[d]);v=!0}},o(i){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)G(l[d]);v=!1},d(i){i&&(L(t),L(n),L(r),L(h),L(p)),me(l,i),g=!1,q(w)}}}function xe(e,t,n){let r=[],s=1;async function o(){const c=await(await fetch("https://rickandmortyapi.com/api/character?page="+s)).json();console.log(c),n(0,r=c.results)}o();function h(){n(1,s++,s),o()}function p(){n(1,s--,s),o()}return[r,s,h,p]}class Pe extends fe{constructor(t){super(),ue(this,t,xe,Se,oe,{})}}new Pe({target:document.getElementById("app")});
