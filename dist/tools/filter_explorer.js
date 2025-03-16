"use strict";(()=>{function P(t,e,r){r+=(r+1)%2;let n=e/t,a=new Float32Array(r),l=Math.floor(r/2),i=0;for(let s=0;s<r;++s){let o;s==l?o=2*Math.PI*n:(o=Math.sin(2*Math.PI*n*(s-l))/(s-l),o*=.54-.46*Math.cos(2*Math.PI*s/(r-1))),i+=o,a[s]=o}for(let s=0;s<r;++s)a[s]/=i;return a}function S(t){t+=(t+1)%2;let e=Math.floor(t/2),r=new Float32Array(t);for(let n=0;n<r.length;++n)n%2==0&&(r[n]=2/(Math.PI*(e-n)));return r}var M=class t{constructor(e){this.coefs=e;this.offset=this.coefs.length-1,this.center=Math.floor(this.coefs.length/2),this.curSamples=new Float32Array(this.offset)}setCoefficients(e){let r=this.curSamples;this.coefs=e,this.offset=this.coefs.length-1,this.center=Math.floor(this.coefs.length/2),this.curSamples=new Float32Array(this.offset),this.loadSamples(r)}clone(){return new t(this.coefs)}delay(){return this.center}inPlace(e){this.loadSamples(e);for(let r=0;r<e.length;++r)e[r]=this.get(r)}loadSamples(e){let r=e.length+this.offset;if(this.curSamples.length!=r){let n=new Float32Array(r);n.set(this.curSamples.subarray(this.curSamples.length-this.offset)),this.curSamples=n}else this.curSamples.copyWithin(0,e.length);this.curSamples.set(e,this.offset)}get(e){let r=0,n=0,a=this.coefs.length,l=4*Math.floor(a/4);for(;r<l;)n+=this.coefs[r++]*this.curSamples[e++]+this.coefs[r++]*this.curSamples[e++]+this.coefs[r++]*this.curSamples[e++]+this.coefs[r++]*this.curSamples[e++];let i=2*Math.floor(a/2);for(;r<i;)n+=this.coefs[r++]*this.curSamples[e++]+this.coefs[r++]*this.curSamples[e++];for(;r<a;)n+=this.coefs[r++]*this.curSamples[e++];return n}getDelayed(e){return this.curSamples[e+this.center]}};var g=class t{constructor(e,r){this.restricted=r;this.alpha=1-Math.exp(-1/(e/2)),this.dc=0,this.restricted=this.restricted||!1}clone(){let e=new t(1e3);return e.alpha=this.alpha,e.dc=this.dc,e}delay(){return 0}inPlace(e){let r=this.alpha,n=this.dc;for(let a=0;a<e.length;++a)n+=r*(e[a]-n),(!this.restricted||n*n<6e-5)&&(e[a]-=n);this.dc=n}},L=class t{constructor(e,r){this.alpha=1-Math.exp(-1/(e*r/1e6)),this.val=0}clone(){let e=new t(1,1);return e.alpha=this.alpha,e.val=this.val,e}delay(){return 0}inPlace(e){let r=this.alpha,n=this.val;for(let a=0;a<e.length;++a)n+=r*(e[a]-n),e[a]=n;this.val=n}};var C=class{constructor(e,r,n){this.make=e;this.buffers=[...Array(r).keys()].map(()=>e(n||0)),this.current=0}get(e){let r=this.buffers[this.current];return r.length!=e&&(r=this.make(e),this.buffers[this.current]=r),this.current=(this.current+1)%this.buffers.length,r}};var E=class extends C{constructor(e,r){super(n=>new Float32Array(n),e,r)}},A=class{constructor(e,r){this.buffers=new E(e*2,r)}get(e){return[this.buffers.get(e),this.buffers.get(e)]}};function B(t){if(t<2)return 0;if(!(t-1&t))return t;let e=1;for(;e<t;)e<<=1;return e}var I=class t{constructor(e){this.length=e;this.revIndex=q(e);let[r,n]=z(e);this.fwd=r,this.bwd=n,this.copy=new A(2,e),this.out=new A(2,e),this.window=new Float32Array(e),this.window.fill(1)}static ofLength(e){return new t(B(e))}setWindow(e){this.window.set(e)}transform(e,r){let n=this.length,[a,l]=this.out.get(n);a.fill(0),l.fill(0);for(let i=0;i<n&&i<e.length&&i<r.length;++i){let s=this.revIndex[i];a[s]=this.window[i]*e[i]/n,l[s]=this.window[i]*r[i]/n}return x(this.length,this.fwd,a,l),{real:a,imag:l}}transformCircularBuffers(e,r){let n=this.length,[a,l]=this.copy.get(n);return e.copyTo(a),r.copyTo(l),this.transform(a,l)}reverse(e,r){let n=this.length,[a,l]=this.out.get(n);a.fill(0),l.fill(0);for(let i=0;i<n&&i<e.length&&i<r.length;++i){let s=this.revIndex[i];a[s]=this.window[i]*e[i]/n,l[s]=this.window[i]*r[i]/n}return x(this.length,this.bwd,a,l),{real:a,imag:l}}};function x(t,e,r,n){for(let a=2,l=0;a<=t;a*=2,++l){let i=e[l],s=a/2;for(let o=0;o<t;o+=a)for(let u=0;u<s;++u){let p=o+u,f=p+s,c=r[p],m=n[p],h=i.real[u],d=i.imag[u],b=r[f],y=n[f],F=h*b-d*y,T=h*y+d*b;r[p]=c+F,n[p]=m+T,r[f]=c-F,n[f]=m-T}}}function z(t){let e=H(t),r=[],n=[];for(let a=0,l=1;a<e;++a,l*=2){r.push({real:new Float32Array(l),imag:new Float32Array(l)}),n.push({real:new Float32Array(l),imag:new Float32Array(l)});for(let i=0;i<l;++i){let s=-1*Math.PI*i/l;r[a].real[i]=Math.cos(s),r[a].imag[i]=Math.sin(s);let o=Math.PI*i/l;n[a].real[i]=Math.cos(o),n[a].imag[i]=Math.sin(o)}}return[r,n]}function q(t){let e=H(t),r=new Int32Array(t);for(let n=0;n<t;++n)r[n]=G(n,e);return r}function H(t){let e=0;for(let r=t-1;r>0;r>>=1)++e;return e}function G(t,e){let r=0;for(let n=0;n<e;++n)r<<=1,r|=t&1,t>>=1;return r}function V(){return{filterType:document.getElementById("filterType"),sampleRate:document.getElementById("sampleRate"),ctrLowPass:document.getElementById("ctrLowPass"),bandwidth:document.getElementById("bandwidth"),lpTaps:document.getElementById("lpTaps"),ctrHilbert:document.getElementById("ctrHilbert"),hilTaps:document.getElementById("hilTaps"),ctrDeemphasizer:document.getElementById("ctrDeemphasizer"),timeConstant:document.getElementById("timeConstant"),filterParams:document.getElementById("filterParams"),filterView:document.getElementById("filterView"),displayOptions:document.getElementById("displayOptions")}}function W(t){t.filterType.addEventListener("change",e=>{O(t),w(t)}),t.sampleRate.addEventListener("change",e=>w(t)),t.bandwidth.addEventListener("change",e=>w(t)),t.lpTaps.addEventListener("change",e=>w(t)),t.hilTaps.addEventListener("change",e=>w(t)),t.timeConstant.addEventListener("change",e=>w(t)),window.addEventListener("resize",e=>w(t))}function O(t){t.ctrLowPass.hidden=t.filterType.value!="lowpass",t.ctrHilbert.hidden=t.filterType.value!="hilbert",t.ctrDeemphasizer.hidden=t.filterType.value!="deemphasizer"}function N(t){let e=Number(t.sampleRate.value);switch(t.filterType.value){case"lowpass":return new v(new M(P(e,Number(t.bandwidth.value)/2,Number(t.lpTaps.value))));case"hilbert":return new v(new M(S(Number(t.hilTaps.value))));case"deemphasizer":return new v(new L(e,Number(t.timeConstant.value)));case"dcblocker":return new v(new g(e))}throw`Invalid filter type ${t.filterType.value}`}function w(t){let e=Number(t.sampleRate.value),r=N(t);t.filterView.width=t.filterView.clientWidth,t.filterView.height=t.filterView.clientHeight;let n=t.filterView.width,a=t.filterView.height,l=t.filterView.getContext("2d");l.clearRect(0,0,n,a);let i=20.5,s=a-20.5,o=.5,u=n-.5,p=K(o,i,u,s,e,80);_(l,p),j(l,o,i,u,s,e,r),$(l,p)}function R(t,e,r,n,a){a||(a=[10,20,25,30,40,50,60,75,80,90]);let l=Math.floor(Math.log10(a.reduce((h,d)=>h>d?h:d))),i=Math.ceil(e/n),s=Math.floor(e/r),o=t/s,u=t/i,p=(o+u)/2,f=u,c=u-p,m=t%u==0;for(let h=Math.floor(Math.log10(o))-l;u>=Math.pow(10,h);++h)for(let d of a){let b=d*Math.pow(10,h);if(b<o||b>u)continue;let y=Math.abs(b-p),F=t%b==0,T=y<c;(T&&F||T&&!m||F&&!m)&&(f=b,c=y,m=F)}return f<1&&(f=1),{range:f,size:e*f/t}}function K(t,e,r,n,a,l){let i=Math.floor((r+t)/2)+.5,{size:s,range:o}=R(l,n-e,20,60),{size:u,range:p}=R(a/2,Math.floor((r-t)/2),30,70,[1,2,3,4,5,6,7,8,9,16,32,64,128,256,512,1024]),f={left:t,right:r,mid:i,top:e,bottom:n,freqWidth:u,rangeLines:[],freqLines:[]};for(let c=1;c*o<=l;++c){let m=Math.floor(e+c*s)+.5,h=-c*o;f.rangeLines.push({y:m,range:h})}for(let c=1;c*p<=a/2;++c){let m=c*u,h=Math.floor(i+m)+.5,d=Math.floor(i-m)+.5,b=c*p;f.freqLines.push({x:h,freq:b}),f.freqLines.push({x:d,freq:b})}return f}function $(t,e){t.beginPath(),t.lineWidth=1,t.strokeStyle="black",t.fillStyle="black",t.setLineDash([4,4]),t.textAlign="right";for(let r of e.rangeLines)t.moveTo(e.left,r.y),t.lineTo(e.right,r.y),t.fillText(r.range.toPrecision(3),e.mid+30,r.y-2);for(let r of e.freqLines)t.moveTo(r.x,e.top),t.lineTo(r.x,e.bottom);t.stroke(),t.beginPath(),t.setLineDash([]),t.textAlign="center",t.moveTo(e.mid,e.top-5),t.lineTo(e.mid,e.top),t.fillText("DC",e.mid,e.top-10,e.freqWidth-10);for(let r of e.freqLines)t.moveTo(r.x,e.top-5),t.lineTo(r.x,e.top),t.textAlign=r.x<e.mid?"left":"right",t.fillText(String(Math.round(r.freq)),r.x,e.top-10,e.freqWidth-10);t.stroke()}function _(t,e){t.beginPath(),t.lineWidth=1,t.strokeStyle="black",t.moveTo(e.mid,e.top),t.lineTo(e.mid,e.bottom),t.moveTo(e.left,e.top),t.lineTo(e.right,e.top),t.stroke()}function U(t,e){let r=Math.atan2(e,t),n=(Math.PI+r)/(2*Math.PI),a=Math.floor(255*(n<.25?1:n<.5?1-4*(n-.25):n<.75?0:4*(n-.75))),l=Math.floor(255*(n<.25?1-4*n:n<.5?0:n<.75?4*(n-.5):1)),i=Math.floor(255*(n<.25?0:n<.5?4*(n-.25):n<.75?1-4*(n-.5):0));return`rgb(${a}, ${l}, ${i})`}function j(t,e,r,n,a,l,i){let s=t.createLinearGradient(e,0,n,0);t.save(),t.rect(e,r-200,1+n-e,201+a-r),t.clip(),t.beginPath(),t.strokeStyle="#001f9f",t.lineWidth=3;let o=i.spectrum(l),u=e-1,p=2+n-e,f=o.real.length,c=-f/2;for(let m=e;m<=n;++m){let h=(Math.round(f*(m-u)/p+c)+o.real.length)%o.real.length;s.addColorStop((m-e)/(n-e),U(o.real[h],o.imag[h]));let d=o.real[h]*o.real[h]+o.imag[h]*o.imag[h],b=10*Math.log10(d),y=r+b/-80*(a-r);m==e?t.moveTo(m,y):t.lineTo(m,y)}t.stroke(),t.restore(),t.fillStyle=s,t.fillRect(e,a+1,1+n-e,19)}var v=class{constructor(e){this.cosFilter=e.clone(),this.sinFilter=e.clone()}spectrum(e){let r=this.cosFilter.delay(),n=I.ofLength(e);e=n.length;let a=new Float32Array(e),l=new Float32Array(e);if(a[0]=e,this.cosFilter.inPlace(a),this.sinFilter.inPlace(l),r!=0){let s=new Float32Array(e),o=new Float32Array(e);for(let u=0;u<e;++u)s[u]=a[(e+u+r)%e],o[u]=l[(e+u+r)%e];a=s,l=o}return n.transform(a,l)}};function J(){let t=V();W(t),w(t)}window.addEventListener("load",J);})();
//# sourceMappingURL=filter_explorer.js.map
