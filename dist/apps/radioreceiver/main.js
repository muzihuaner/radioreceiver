"use strict";(()=>{var Ft=globalThis,Ct=Ft.ShadowRoot&&(Ft.ShadyCSS===void 0||Ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fi=Symbol(),$r=new WeakMap,rt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==fi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ct&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=$r.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&$r.set(t,e))}return e}toString(){return this.cssText}},Dr=s=>new rt(typeof s=="string"?s:s+"",void 0,fi),w=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new rt(t,s,fi)},mi=(s,e)=>{if(Ct)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),r=Ft.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},$t=Ct?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return Dr(t)})(s):s;var{is:tn,defineProperty:rn,getOwnPropertyDescriptor:sn,getOwnPropertyNames:nn,getOwnPropertySymbols:on,getPrototypeOf:an}=Object,Dt=globalThis,Ar=Dt.trustedTypes,ln=Ar?Ar.emptyScript:"",hn=Dt.reactiveElementPolyfillSupport,st=(s,e)=>s,nt={toAttribute(s,e){switch(e){case Boolean:s=s?ln:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},At=(s,e)=>!tn(s,e),qr={attribute:!0,type:String,converter:nt,reflect:!1,hasChanged:At};Symbol.metadata??=Symbol("metadata"),Dt.litPropertyMetadata??=new WeakMap;var ce=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=qr){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&rn(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){let{get:r,set:n}=sn(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r?.call(this)},set(o){let a=r?.call(this);n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??qr}static _$Ei(){if(this.hasOwnProperty(st("elementProperties")))return;let e=an(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(st("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(st("properties"))){let t=this.properties,i=[...nn(t),...on(t)];for(let r of i)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let r of i)t.unshift($t(r))}else e!==void 0&&t.push($t(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:nt).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){let i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let n=i.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:nt;this._$Em=r,this[r]=o.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??At)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,n]of i)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}};ce.elementStyles=[],ce.shadowRootOptions={mode:"open"},ce[st("elementProperties")]=new Map,ce[st("finalized")]=new Map,hn?.({ReactiveElement:ce}),(Dt.reactiveElementVersions??=[]).push("2.0.4");var Si=globalThis,qt=Si.trustedTypes,_r=qt?qt.createPolicy("lit-html",{createHTML:s=>s}):void 0,kr="$lit$",ye=`lit$${Math.random().toFixed(9).slice(2)}$`,Ir="?"+ye,cn=`<${Ir}>`,Ce=document,at=()=>Ce.createComment(""),lt=s=>s===null||typeof s!="object"&&typeof s!="function",Mi=Array.isArray,dn=s=>Mi(s)||typeof s?.[Symbol.iterator]=="function",gi=`[ 	
\f\r]`,ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Er=/-->/g,Br=/>/g,Re=RegExp(`>|${gi}(?:([^\\s"'>=/]+)(${gi}*=${gi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pr=/'/g,Tr=/"/g,Lr=/^(?:script|style|textarea|title)$/i,Ri=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),p=Ri(1),T=Ri(2),Ln=Ri(3),$e=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),zr=new WeakMap,Fe=Ce.createTreeWalker(Ce,129);function Or(s,e){if(!Mi(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return _r!==void 0?_r.createHTML(e):e}var un=(s,e)=>{let t=s.length-1,i=[],r,n=e===2?"<svg>":e===3?"<math>":"",o=ot;for(let a=0;a<t;a++){let l=s[a],c,d,u=-1,g=0;for(;g<l.length&&(o.lastIndex=g,d=o.exec(l),d!==null);)g=o.lastIndex,o===ot?d[1]==="!--"?o=Er:d[1]!==void 0?o=Br:d[2]!==void 0?(Lr.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=Re):d[3]!==void 0&&(o=Re):o===Re?d[0]===">"?(o=r??ot,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?Re:d[3]==='"'?Tr:Pr):o===Tr||o===Pr?o=Re:o===Er||o===Br?o=ot:(o=Re,r=void 0);let f=o===Re&&s[a+1].startsWith("/>")?" ":"";n+=o===ot?l+cn:u>=0?(i.push(c),l.slice(0,u)+kr+l.slice(u)+ye+f):l+ye+(u===-2?a:f)}return[Or(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},ht=class s{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0,a=e.length-1,l=this.parts,[c,d]=un(e,t);if(this.el=s.createElement(c,i),Fe.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=Fe.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let u of r.getAttributeNames())if(u.endsWith(kr)){let g=d[o++],f=r.getAttribute(u).split(ye),A=/([.?@])?(.*)/.exec(g);l.push({type:1,index:n,name:A[2],strings:f,ctor:A[1]==="."?yi:A[1]==="?"?vi:A[1]==="@"?wi:Le}),r.removeAttribute(u)}else u.startsWith(ye)&&(l.push({type:6,index:n}),r.removeAttribute(u));if(Lr.test(r.tagName)){let u=r.textContent.split(ye),g=u.length-1;if(g>0){r.textContent=qt?qt.emptyScript:"";for(let f=0;f<g;f++)r.append(u[f],at()),Fe.nextNode(),l.push({type:2,index:++n});r.append(u[g],at())}}}else if(r.nodeType===8)if(r.data===Ir)l.push({type:2,index:n});else{let u=-1;for(;(u=r.data.indexOf(ye,u+1))!==-1;)l.push({type:7,index:n}),u+=ye.length-1}n++}}static createElement(e,t){let i=Ce.createElement("template");return i.innerHTML=e,i}};function Ie(s,e,t=s,i){if(e===$e)return e;let r=i!==void 0?t._$Co?.[i]:t._$Cl,n=lt(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??=[])[i]=r:t._$Cl=r),r!==void 0&&(e=Ie(s,r._$AS(s,e.values),r,i)),e}var bi=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??Ce).importNode(t,!0);Fe.currentNode=r;let n=Fe.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new ct(n,n.nextSibling,this,e):l.type===1?c=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(c=new xi(n,this,e)),this._$AV.push(c),l=i[++a]}o!==l?.index&&(n=Fe.nextNode(),o++)}return Fe.currentNode=Ce,r}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},ct=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ie(this,e,t),lt(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==$e&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):dn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&lt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ce.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ht.createElement(Or(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{let n=new bi(r,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=zr.get(e.strings);return t===void 0&&zr.set(e.strings,t=new ht(e)),t}k(e){Mi(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,r=0;for(let n of e)r===t.length?t.push(i=new s(this.O(at()),this.O(at()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Le=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(e,t=this,i,r){let n=this.strings,o=!1;if(n===void 0)e=Ie(this,e,t,0),o=!lt(e)||e!==this._$AH&&e!==$e,o&&(this._$AH=e);else{let a=e,l,c;for(e=n[0],l=0;l<n.length-1;l++)c=Ie(this,a[i+l],t,l),c===$e&&(c=this._$AH[l]),o||=!lt(c)||c!==this._$AH[l],c===m?e=m:e!==m&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}o&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},yi=class extends Le{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},vi=class extends Le{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},wi=class extends Le{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=Ie(this,e,t,0)??m)===$e)return;let i=this._$AH,r=e===m&&i!==m||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==m&&(i===m||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},xi=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ie(this,e)}};var pn=Si.litHtmlPolyfillSupport;pn?.(ht,ct),(Si.litHtmlVersions??=[]).push("3.2.1");var Nr=(s,e,t)=>{let i=t?.renderBefore??e,r=i._$litPart$;if(r===void 0){let n=t?.renderBefore??null;i._$litPart$=r=new ct(e.insertBefore(at(),n),n,void 0,t??{})}return r._$AI(s),r};var b=class extends ce{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Nr(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $e}};b._$litElement$=!0,b.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:b});var fn=globalThis.litElementPolyfillSupport;fn?.({LitElement:b});(globalThis.litElementVersions??=[]).push("4.1.1");var x=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};var mn={attribute:!0,type:String,converter:nt,reflect:!1,hasChanged:At},gn=(s=mn,e,t)=>{let{kind:i,metadata:r}=t,n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(t.name,s),i==="accessor"){let{name:o}=t;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,s)},init(a){return a!==void 0&&this.P(o,void 0,s),a}}}if(i==="setter"){let{name:o}=t;return function(a){let l=this[o];e.call(this,a),this.requestUpdate(o,l,s)}}throw Error("Unsupported decorator location: "+i)};function h(s){return(e,t)=>typeof t=="object"?gn(s,e,t):((i,r,n)=>{let o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,e,t)}function v(s){return h({...s,state:!0,attribute:!1})}var De=(s,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(s,e,t),t);function y(s,e){return(t,i,r)=>{let n=o=>o.renderRoot?.querySelector(s)??null;if(e){let{get:o,set:a}=typeof i=="object"?t:r??(()=>{let l=Symbol();return{get(){return this[l]},set(c){this[l]=c}}})();return De(t,i,{get(){let l=o.call(this);return l===void 0&&(l=n(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return De(t,i,{get(){return n(this)}})}}function Ur(){let s=localStorage.getItem("config"),e=Wr();return s!=null&&(e=jr(e,JSON.parse(s))),new Fi(e)}var Fi=class{constructor(e){this.cfg={...Wr,...e}}save(){localStorage.setItem("config",JSON.stringify(this.cfg)),clearTimeout(this.timeout)}get(){return{...this.cfg.v1}}update(e){e(this.cfg.v1),this.scheduleSave()}scheduleSave(){clearTimeout(this.timeout),this.timeout=window.setTimeout(()=>this.save())}};function Wr(){return{v1:{modes:{WBFM:{scheme:"WBFM",stereo:!0},NBFM:{scheme:"NBFM",maxF:5e3,squelch:0},AM:{scheme:"AM",bandwidth:15e3,squelch:0},LSB:{scheme:"LSB",bandwidth:2800,squelch:0},USB:{scheme:"USB",bandwidth:2800,squelch:0},CW:{scheme:"CW",bandwidth:50}},mode:"WBFM",centerFrequency:885e5,tunedFrequency:885e5,tuningStep:1e3,frequencyScale:1e3,gain:null,sampleRate:1024e3,ppm:0,fftSize:2048,biasTee:!1,lowFrequencyMethod:{name:"directSampling",channel:"Q",frequency:1e8,biasTee:!1},minDecibels:-90,maxDecibels:-20,presets:{sortColumn:"frequency",list:[]},windows:{controls:{},settings:{},presets:{}}}}}function jr(s,e){let t=r=>r&&typeof r=="object"&&!Array.isArray(r);if(!t(s)||!t(e))return e;let i={...s};for(let r in e)i[r]=jr(i[r],e[r]);return i}function Oe(){return["WBFM","NBFM","AM","USB","LSB","CW"]}function Ci(s){switch(s){case"WBFM":return{scheme:"WBFM",stereo:!0};case"NBFM":return{scheme:"NBFM",maxF:5e3,squelch:0};case"AM":return{scheme:"AM",bandwidth:15e3,squelch:0};case"USB":return{scheme:"USB",bandwidth:2800,squelch:0};case"LSB":return{scheme:"LSB",bandwidth:2800,squelch:0};case"CW":return{scheme:"CW",bandwidth:50}}}function dt(s){return(typeof s=="string"?s:s.scheme)=="WBFM"}function $i(s){return s.scheme=="WBFM"&&s.stereo}function Di(s,e){return e={...e},e.scheme=="WBFM"&&(e.stereo=s),e}function _t(s){return(typeof s=="string"?s:s.scheme)!="WBFM"}function Ne(s){switch(s.scheme){case"WBFM":return 15e4;case"NBFM":return s.maxF*2;default:return s.bandwidth}}function Ue(s,e){switch(e={...e},e.scheme){case"WBFM":break;case"NBFM":e.maxF=Math.max(125,Math.min(s/2,15e3));break;case"AM":e.bandwidth=Math.max(250,Math.min(s,3e4));break;case"USB":case"LSB":e.bandwidth=Math.max(10,Math.min(s,15e3));break;case"CW":e.bandwidth=Math.max(5,Math.min(s,1e3));break}return e}function Et(s){let e=typeof s=="string"?s:s.scheme;return e!="WBFM"&&e!="CW"}function Ai(s){return s.scheme=="WBFM"||s.scheme=="CW"?0:s.squelch}function qi(s,e){return e={...e},e.scheme!="WBFM"&&e.scheme!="CW"&&(e.squelch=Math.max(0,Math.min(s,6))),e}var I=class{constructor(e,t=4){this.handler=e;this.minPixelDelta=t;this.onPointerMove=i=>this.drag(i),this.onPointerUp=i=>this.finish(i),this.onPointerCancel=i=>this.cancel(i)}startDragging(e){e.button==0&&(this.dragData&&(this.handler.cancelDrag(),this.dragData.release()),this.dragData=new _i(e,this.minPixelDelta,this.onPointerMove,this.onPointerUp,this.onPointerCancel),this.dragData.capture(),this.drag(e),e.preventDefault())}drag(e){if(this.dragData===void 0)return;e.preventDefault();let{start:t,moved:i,x:r,y:n}=this.dragData.delta(e);i&&(t&&this.handler.startDrag(),this.handler.drag(r,n))}finish(e){this.dragData!==void 0&&(this.dragData.hasMoved()?(this.handler.finishDrag(),e.preventDefault()):this.handler.onClick(e),this.release())}cancel(e){this.dragData!==void 0&&(this.handler.cancelDrag(),e.preventDefault(),this.release())}release(){this.dragData?.release(),this.dragData=void 0}},_i=class{constructor(e,t,i,r,n){this.minPixelDelta=t;this.move=i;this.up=r;this.cancel=n;this.moved=!1,this.startX=e.clientX,this.startY=e.clientY,this.pointerId=e.pointerId,this.target=e.target}capture(){this.target.addEventListener("pointermove",this.move),this.target.addEventListener("pointerup",this.up),this.target.addEventListener("pointercancel",this.cancel),this.target.setPointerCapture(this.pointerId)}release(){this.target.removeEventListener("pointermove",this.move),this.target.removeEventListener("pointerup",this.up),this.target.removeEventListener("pointercancel",this.cancel),this.target.releasePointerCapture(this.pointerId)}hasMoved(){return this.moved}delta(e){let t=!1;!this.moved&&this.minPixelDelta==0&&(t=!0,this.moved=!0);let i={start:t,moved:this.moved,x:e.clientX-this.startX,y:e.clientY-this.startY};return i.moved||Math.max(Math.abs(i.x),Math.abs(i.y))>=this.minPixelDelta&&(this.moved=!0,i.moved=!0,i.start=!0),i}};function U(s,e){return p`<svg version="1.1" width="16" height="16">
    <title>${s}</title>
    ${e}
  </svg>`}var Hr=U("Close",T`<g><path d="M2 4v-2h2l4 4 4 -4h2v2l-4 4 4 4v2h-2l-4 -4 -4 4h-2v-2l4 -4z"></path></g>`),Vr=U("Resize",T`<g><path d="M2,2V8L4.25,5.75 10.25,11.75 8,14 14,14 14,8 11.75,10.25 5.75,4.25 8,2Z"></path></g>`),Gr=U("Stop playing",T`<g><path d="M3 3v10h10V3z"></path></g>`),Zr=U("Start playing",T`<g><path d="M3 2v12l10 -6z"></path></g>`),Qr=U("Settings",T`<g><path d="M5 1A4 4 0 0 0 3.7 1.2L6.5 4 6 6 4 6.5 1.2 3.7A4 4 0 0 0 1 5 4 4 0 0 0 5 9 4 4 0 0 0 6.6 8.6L12.5 14.5A1.4 1.4 0 0 0 13.6 15 1.4 1.4 0 0 0 15 13.6 1.4 1.4 0 0 0 14.5 12.5L8.6 6.6A4 4 0 0 0 9 5 4 4 0 0 0 5 1z"></path></g>`),Xr=U("Help",T`<g>
    <path
      d="M8 1A5 4.5 0 0 0 3 5.5L3 6L5 6L5 5.5A3 2.5 0 0 1 8 3A3 2.5 0 0 1 11 5.5A3 2.5 0 0 1 8 8L7 8L7 9L7 10L7 12L9 12L9 10A5 4.5 0 0 0 13 5.5A5 4.5 0 0 0 8 1z"
    ></path>
    <circle cy="14" cx="8" r="1"></circle>
  </g>`),Yr=U("Scroll left",T`<g><path d="m11 2v2l-4 4 4 4v2H9L3 8 9 2Z"></path></g>`),Kr=U("Scroll right",T`<g><path d="m5 2v2l4 4 -4 4v2h2L13 8 7 2Z"></path></g>`);function Jr(s,e){return U(s,T`<g>
        <path
          d="M7 1A6 6 0 0 0 1 7A6 6 0 0 0 7 13A6 6 0 0 0 13 7A6 6 0 0 0 7 1zM7 3A4 4 0 0 1 11 7A4 4 0 0 1 7 11A4 4 0 0 1 3 7A4 4 0 0 1 7 3z"
        ></path>
        <path d="M14.5 13l-1.5 1.5 -4 -4 1.5 -1.5z"></path>
        ${e}
      </g>`)}var es=Jr("Zoom in",T`<path d="M4 6v2h2v2h2v-2h2v-2h-2v-2h-2v2Z"></path>`),ts=Jr("Zoom out",T`<path d="M4 6v2h6v-2Z"></path>`),is=U("Stereo",T`<g><path d="M 6 3A 5 5 0 0 0 1 8A 5 5 0 0 0 6 13A 5 5 0 0 0 8 13A 5 5 0 0 0 10 13A 5 5 0 0 0 15 8A 5 5 0 0 0 10 3A 5 5 0 0 0 8 3A 5 5 0 0 0 6 3zM 6 5A 3 3 0 0 1 9 8A 3 3 0 0 1 6 11A 3 3 0 0 1 3 8A 3 3 0 0 1 6 5zM 10 5A 3 3 0 0 1 13 8A 3 3 0 0 1 10 11A 3 3 0 0 1 10 11A 5 5 0 0 0 11 8A 5 5 0 0 0 10 5z"></g>`),rs=U("Error state",T`<g>
    <path d="M 2.5 8A 1.5 1.5 0 0 0 1 9.5A 1.5 1.5 0 0 0 2.5 11A 1.5 1.5 0 0 0 3.7 10.4L 12 13.5A 1.5 1.5 0 0 0 12 13.5A 1.5 1.5 0 0 0 13.5 15A 1.5 1.5 0 0 0 15 13.5A 1.5 1.5 0 0 0 13.5 12A 1.5 1.5 0 0 0 12.3 12.6L 4 9.5A 1.5 1.5 0 0 0 4 9.5A 1.5 1.5 0 0 0 2.5 8z"></path>
    <path d="M 13.5 8A 1.5 1.5 0 0 0 12 9.5A 1.5 1.5 0 0 0 12 9.5L 3.7 12.6A 1.5 1.5 0 0 0 2.5 12A 1.5 1.5 0 0 0 1 13.5A 1.5 1.5 0 0 0 2.5 15A 1.5 1.5 0 0 0 4 13.5A 1.5 1.5 0 0 0 4 13.5L 12.3 10.4A 1.5 1.5 0 0 0 13.5 11A 1.5 1.5 0 0 0 15 9.5A 1.5 1.5 0 0 0 13.5 8z"></path>
    <path d="M 8 1A 5 4.5 0 0 0 3 5.5A 5 4.5 0 0 0 5 9.1L 5 12.1A 5 4.5 0 0 0 8 13A 5 4.5 0 0 0 11 12.1L 11 9.1A 5 4.5 0 0 0 13 5.5A 5 4.5 0 0 0 8 1zM 5.8 4A 1.8 1.5 0 0 1 7.5 5.5A 1.8 1.5 0 0 1 5.8 7A 1.8 1.5 0 0 1 4 5.5A 1.8 1.5 0 0 1 5.8 4zM 10.2 4A 1.8 1.5 0 0 1 12 5.5A 1.8 1.5 0 0 1 10.2 7A 1.8 1.5 0 0 1 8.5 5.5A 1.8 1.5 0 0 1 10.2 4zM 8 7.5A 1.5 0.8 0 0 1 9.5 8.2A 1.5 0.8 0 0 1 8 9A 1.5 0.8 0 0 1 6.5 8.2A 1.5 0.8 0 0 1 8 7.5z"></path>
  </g>`),Ei=U("Add",T`<g><path d="M2,7h5v-5h2v5h5v2h-5v5h-2v-5h-5z"></path></g>`),ss=U("Edit",T`<g><path d="M1.9,15.37A1,1 0 0 1 0.63,14.1L2,10 12,0 16,4 6,14ZM2,14 5,13 3,11ZM6,12 14,4 12,2 4,10Z"></path></g>`),ns=U("Delete",T`<g><path d="M2 2h1l5 5 5 -5h1v1l-5 5 5 5v1h-1l-5 -5 -5 5h-1v-1l5 -5l-5 -5z"></path></g>`),Eo=U("Update",T`<g><path d="M1 1L3 3A7 7 0 0 0 1 8A7 7 0 0 0 8 15v-2A5 5 0 0 1 3 8A5 5 0 0 1 4.5 4.5L7 7v-6h-6zM8 1v2A5 5 0 0 1 13 8A5 5 0 0 1 11.5 11.5L9 9v6h6L13 13A7 7 0 0 0 15 8A7 7 0 0 0 8 1z"></path></g>`),os=U("Presets",T`<g><path d="M1,1h6v6h-6zM3,3v2h2v-2zM9,1h6v6h-6zM11,3v2h2v-2zM1,9h6v6h-6zM3,11v2h2v-2zM9,9h6v6h-6zM11,11v2h2v-2z"></path></g>`),as=p`<svg version="1.1" width="10" height="9">
  <g><path d="M1,8h8l-4,-6z"></path></g>
</svg>`,ls=p`<svg version="1.1" width="10" height="9">
  <g><path d="M1,1h8l-4,6z"></path></g>
</svg>`;var V=w`
  :host {
    font-family: Arial, Helvetica, sans-serif;
  }

  @media (prefers-color-scheme: dark) {
    input,
    select {
      background: #222;
      color: #ddd;
    }
  }

  rr-window {
    bottom: calc(1em + 24px);
    right: 1em;
  }

  @media (max-width: 778px) {
    rr-window {
      bottom: calc(1em + 48px);
    }
  }

  button:has(svg[width="16"][height="16"]) {
    padding-inline: 0;
    width: 24px;
    height: 24px;
  }

  button > svg[width="16"][height="16"] {
    display: block;
    width: 16px;
    height: 16px;
    margin: auto;
  }
`;var G=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},L=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},hs,q=class extends b{constructor(){super(...arguments),this.label="",this.resizeable=!1,this.closeable=!1,this.fixed=!1,this.closed=!1,this.modal=!1,this.moving=!1}set position(e){this.pendingPosition=e}get position(){return this.pendingPosition||this.getPosition()}set size(e){this.pendingSize=e}get size(){return this.pendingSize||this.getSize()}static get styles(){return[V,w`
        :host {
          position: absolute;
          width: auto;
          height: auto;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        :host(.inline) {
          position: initial;
          display: inline-block;
        }

        .label {
          display: flex;
          flex-direction: row;
          align-items: center;
          border: 2px solid var(--ips-border-color);
          border-bottom: none;
          border-radius: 10px 10px 0 0;
          padding: 3px 8px;
          background: var(--ips-label-bg-active);
          color: var(--ips-label-color);
          cursor: grab;
        }

        .label.modal {
          cursor: default;
        }

        :host(.inactive) .label {
          background: var(--ips-label-bg-idle);
        }

        .label.moving {
          cursor: grabbing;
        }

        .label-left,
        .label-middle,
        .label-right {
          display: inline-block;
        }

        .label-middle {
          flex: 1;
        }

        .label-left {
          margin-right: 8px;
        }

        .label-right {
          margin-left: 8px;
        }

        .content {
          position: relative;
          box-sizing: border-box;
          border: 2px solid var(--ips-border-color);
          border-radius: 0 0 10px 10px;
          padding: 1ex;
          background: var(--ips-background);
          color: var(--ips-color);
        }

        .contentView {
          width: 100%;
          height: 100%;
        }

        .content.resizeable {
          padding: 1ex max(1ex + 6px, 16px) max(1ex + 6px, 16px) 1ex;
          border-bottom-right-radius: 0;
        }

        .content.resizeable .contentView {
          overflow: auto;
        }

        .right-resizer {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 16px;
          width: 2px;
          border: solid var(--ips-background);
          border-width: 8px 4px 0 11px;
          background: var(--ips-border-color);
          cursor: ew-resize;
        }

        .bottom-resizer {
          position: absolute;
          left: 0;
          bottom: 0;
          right: 16px;
          height: 2px;
          border: solid var(--ips-background);
          border-width: 11px 0 4px 8px;
          border-bottom-left-radius: 10px;
          background: var(--ips-border-color);
          cursor: ns-resize;
        }

        .corner-resizer {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 16px;
          height: 16px;
          fill: var(--ips-border-color);
          cursor: nwse-resize;
        }

        .modalbg {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.5);
          z-index: -1;
        }

        :host {
          --ips-border-color: var(--rr-window-border-color, black);
          --ips-background: var(--rr-window-background, white);
          --ips-color: var(--rr-window-color, black);
          --ips-label-bg-idle: var(--rr-label-bg-idle, #53577f);
          --ips-label-bg-active: var(--rr-label-bg-active, #4f5fff);
          --ips-label-color: var(--rr-label-color, white);
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --ips-border-color: var(--rr-window-border-color, #ddd);
            --ips-background: var(--rr-window-background, black);
            --ips-color: var(--rr-window-color, #ddd);
            --ips-label-bg-idle: var(--rr-label-bg-idle, #53577f);
            --ips-label-bg-active: var(--rr-label-bg-active, #1f2f7f);
            --ips-label-color: var(--rr-label-color, white);
          }
        }

        @media (max-width: 450px) {
          :host {
            position: initial;
            max-height: 40vh;
          }

          :host(.inactive) .content {
            display: none;
          }

          :host:has(.modalbg) {
            position: absolute;
            .content {
              display: block;
            }
          }

          .label {
            border: 1px solid var(--ips-border-color);
            border-bottom: none;
            border-radius: 0;
          }

          .content {
            border: 1px solid var(--ips-border-color);
            border-radius: 0;
            overflow: scroll;
          }

          .content.resizeable {
            padding: 1ex;
            width: 100% !important;
            height: 100% !important;
          }

          .right-resizer,
          .bottom-resizer,
          .corner-resizer {
            display: none;
          }
        }
      `]}render(){return this.closed?m:p`${this.modal?p`<div class="modalbg"></div>`:m}
      <div
        class="label${this.moving?" moving":""}${this.modal?" modal":""}"
        @pointerdown=${this.onLabelPointerDown}
      >
        <div class="label-left" @pointerdown=${this.noPointerDown}>
          <slot name="label-left"></slot>
        </div>
        <div class="label-middle"><slot name="label">${this.label}</slot></div>
        <div class="label-right" @pointerdown=${this.noPointerDown}>
          <slot name="label-right"></slot>${this.closeable?p`<button id="close" @click=${this.onClosePressed}>
                ${Hr}
              </button>`:m}
        </div>
      </div>
      <div class="content${this.resizeable?" resizeable":""}">
        <div class="contentView"><slot></slot></div>
        ${this.resizeable?p`<div
                class="right-resizer"
                @pointerdown=${this.onRightResizerPointerDown}
              ></div>
              <div
                class="bottom-resizer"
                @pointerdown=${this.onBottomResizerPointerDown}
              ></div>
              <div
                class="corner-resizer"
                @pointerdown=${this.onCornerResizerPointerDown}
              >
                ${Vr}
              </div>`:m}
      </div>`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",e=>this.onSelect(e)),Ae?.register(this)}disconnectedCallback(){super.disconnectedCallback(),Ae?.unregister(this)}firstUpdated(e){super.firstUpdated(e),this.doUpdates(e)}updated(e){super.updated(e),this.doUpdates(e)}doUpdates(e){e.has("closed")&&(Ae?.show(!this.closed,this),this.closed||(this.modal||(this.moveController=new I(new Bi(this),0)),this.rightResizeController=new I(new pt(this,this.content,!0,!1),0),this.bottomResizeController=new I(new pt(this,this.content,!1,!0),0),this.cornerResizeController=new I(new pt(this,this.content,!0,!0),0),this.dispatchEvent(new ki))),this.closed||(this.modal&&(this.pendingSize=void 0,this.pendingPosition=void 0,this.setCenterPosition(),setTimeout(()=>Ae?.select(this),0)),this.pendingSize&&(this.setSize(this.pendingSize),this.pendingSize=void 0),this.pendingPosition&&(this.setPosition(this.pendingPosition),this.pendingPosition=void 0))}getPosition(){if(!(this.closed||this.offsetWidth==0&&this.offsetHeight==0)&&getComputedStyle(this).position=="absolute")return{top:this.offsetTop,left:this.offsetLeft,bottom:visualViewport.height-this.offsetTop-this.offsetHeight,right:visualViewport.width-this.offsetLeft-this.offsetWidth}}getSize(){if(!(!this.resizeable||!this.content||this.closed||this.offsetWidth==0&&this.offsetWidth==0)&&getComputedStyle(this).position=="absolute")return{width:this.offsetWidth,height:this.content.offsetHeight}}setCenterPosition(){let e=this.offsetWidth,t=this.offsetHeight;this.style.left=`calc(50vw - ${e/2}px)`,this.style.top=`calc(50vh - ${t/2}px)`,this.style.right="auto",this.style.bottom="auto"}setPosition(e){let t=visualViewport.width,i=visualViewport.height,r=e.left+this.offsetWidth<=t,n=e.right+this.offsetWidth<=t,o=e.top+this.offsetHeight<=i,a=e.bottom+this.offsetHeight<=i,l=e.left<=e.right,c=e.top<=e.bottom;l&&r?(this.style.left=`${e.left}px`,this.style.right="auto"):!l&&n?(this.style.right=`${e.right}px`,this.style.left="auto"):(this.style.left=`${Math.max(0,Math.floor((t-this.offsetWidth)/2))}px`,this.style.right="auto"),c&&o?(this.style.top=`${e.top}px`,this.style.bottom="auto"):!c&&a?(this.style.bottom=`${e.bottom}px`,this.style.top="auto"):(this.style.top=`${Math.max(0,Math.floor((i-this.offsetHeight)/2))}px`,this.style.bottom="auto")}setSize(e){if(this.content===void 0)return;let t=visualViewport.width,i=visualViewport.height,r=this.offsetTop+this.content.offsetTop,n=this.offsetLeft+this.content.offsetLeft;e.width>=t&&(e.width=Math.floor(t)),e.height+this.content.offsetTop>=i&&(e.height=Math.floor(i-this.content.offsetTop));let o=n+this.content.offsetWidth<=t,a=r+this.content.offsetHeight<=i;if(!o){let l=Math.floor(t-e.width-this.content.offsetLeft);this.style.left=`${l}px`,this.style.right="auto"}if(!a){let l=Math.floor(i-e.height-this.content.offsetTop);this.style.top=`${l}px`,this.style.bottom="auto"}Ii(this,this.content,e.width,e.height)}onClosePressed(){this.closed=!0,this.dispatchEvent(new zi)}onSelect(e){Ae?.select(this)&&e.stopPropagation()}noPointerDown(e){e.stopPropagation()}onLabelPointerDown(e){this.fixed||this.moveController?.startDragging(e)}onRightResizerPointerDown(e){this.fixed||this.rightResizeController?.startDragging(e)}onBottomResizerPointerDown(e){this.fixed||this.bottomResizeController?.startDragging(e)}onCornerResizerPointerDown(e){this.fixed||this.cornerResizeController?.startDragging(e)}};G([h({type:String,reflect:!0}),L("design:type",String)],q.prototype,"label",void 0);G([h({type:Boolean,reflect:!0}),L("design:type",Boolean)],q.prototype,"resizeable",void 0);G([h({type:Boolean,reflect:!0}),L("design:type",Boolean)],q.prototype,"closeable",void 0);G([h({type:Boolean,reflect:!0}),L("design:type",Boolean)],q.prototype,"fixed",void 0);G([h({type:Boolean,reflect:!0}),L("design:type",Boolean)],q.prototype,"closed",void 0);G([h({type:Boolean,reflect:!0}),L("design:type",Boolean)],q.prototype,"modal",void 0);G([h({attribute:!1}),L("design:type",Object),L("design:paramtypes",[Object])],q.prototype,"position",null);G([h({attribute:!1}),L("design:type",Object),L("design:paramtypes",[Object])],q.prototype,"size",null);G([v(),L("design:type",Boolean)],q.prototype,"moving",void 0);G([y(".content"),L("design:type",typeof(hs=typeof HTMLDivElement<"u"&&HTMLDivElement)=="function"?hs:Object)],q.prototype,"content",void 0);q=G([x("rr-window")],q);function We(s){class e extends s{set closed(i){this.pendingClosed=i}get closed(){return this.pendingClosed!==void 0?this.pendingClosed:this.window?.closed||!1}set position(i){this.pendingPosition=i}get position(){return this.pendingPosition||this.window?.position}set size(i){this.pendingSize=i}get size(){return this.pendingSize||this.window?.size}firstUpdated(i){super.firstUpdated(i),this.doUpdate()}updated(i){super.updated(i),this.doUpdate()}doUpdate(){this.pendingClosed!==void 0&&this.window&&(this.window.closed=this.pendingClosed,this.pendingClosed=void 0),this.pendingSize!==void 0&&this.window&&(this.window.size=this.pendingSize,this.pendingSize=void 0),this.pendingPosition!==void 0&&this.window&&(this.window.position=this.pendingPosition,this.pendingPosition=void 0)}}return G([h({type:Boolean,reflect:!0}),L("design:type",Boolean),L("design:paramtypes",[Boolean])],e.prototype,"closed",null),G([h({attribute:!1}),L("design:type",Object),L("design:paramtypes",[Object])],e.prototype,"position",null),G([h({attribute:!1}),L("design:type",Object),L("design:paramtypes",[Object])],e.prototype,"size",null),e}function cs(s){let e=s.getBoundingClientRect(),t=e.left+window.scrollX,i=e.top+window.scrollY;s.style.left=`${t}px`,s.style.top=`${i}px`,s.style.right="auto",s.style.bottom="auto"}function bn(s,e,t){let i=s.offsetLeft,r=s.offsetTop;e>visualViewport.width-s.offsetWidth&&(e=visualViewport.width-s.offsetWidth),t>visualViewport.height-s.offsetHeight&&(t=visualViewport.height-s.offsetHeight),e<0&&(e=0),t<0&&(t=0),(e!=i||t!=r)&&ds(s,Math.floor(e),Math.floor(t))}function yn(s,e,t,i){let r=s.offsetLeft,n=s.offsetTop,o=e.offsetTop;r+t>visualViewport.width&&(t=visualViewport.width-r),n+o+i>visualViewport.height&&(i=visualViewport.height-n-o),i<32&&(i=32),(t!=e.offsetWidth||i!=e.offsetHeight)&&Ii(s,e,Math.floor(t),Math.floor(i))}function ds(s,e,t){s.style.left=e+"px",s.style.top=t+"px"}function Ii(s,e,t,i){e.style.width=t+"px",e.style.height=i+"px",e.offsetWidth<s.offsetWidth&&(e.style.width=s.offsetWidth+"px")}var Bi=class{constructor(e){this.window=e,this.elemX=e.offsetLeft,this.elemY=e.offsetTop}startDrag(){cs(this.window),this.window.moving=!0,this.elemX=this.window.offsetLeft,this.elemY=this.window.offsetTop}drag(e,t){bn(this.window,this.elemX+e,this.elemY+t)}finishDrag(){this.window.moving=!1,this.window.dispatchEvent(new Bt)}cancelDrag(){this.window.moving=!1,ds(this.window,this.elemX,this.elemY)}onClick(){}},pt=class{constructor(e,t,i,r){this.window=e,this.content=t,this.right=i,this.bottom=r,this.sizeX=t.offsetWidth,this.sizeY=t.offsetHeight}startDrag(){cs(this.window),this.sizeX=this.content.offsetWidth,this.sizeY=this.content.offsetHeight}drag(e,t){yn(this.window,this.content,this.right?this.sizeX+e:this.sizeX,this.bottom?this.sizeY+t:this.sizeY)}finishDrag(){this.window.dispatchEvent(new Bt),this.window.dispatchEvent(new Ti)}cancelDrag(){Ii(this.window,this.content,this.sizeX,this.sizeY)}onClick(){}},Pi=class{constructor(){this.windows=[]}register(e){this.windows.unshift(e),this.update()}unregister(e){let t=this.windows.findIndex(i=>i===e);t<0||(this.windows.splice(t,1),this.update())}show(e,t){e||this.hide(t)}select(e){if(this.windows[this.windows.length-1]===e)return!1;let t=this.windows.findIndex(i=>i===e&&!i.closed);return t<0?!1:(this.windows.splice(t,1),this.windows.push(e),this.update(),!0)}hide(e){if(this.windows[0]===e)return;let t=this.windows.findIndex(i=>i===e);t<0||(this.windows.splice(t,1),this.windows.unshift(e),this.update())}update(){if(this.windows.length==0)return;let e=this.windows.length-1;for(let t=0;t<e;++t)this.windows[t].classList.add("inactive"),this.windows[t].style.zIndex=String(t);this.windows[e].classList.remove("inactive"),this.windows[e].style.zIndex=String(e)}},Ae;function us(){Ae||(Ae=new Pi)}var Bt=class extends Event{constructor(){super("rr-window-moved",{bubbles:!0,composed:!0})}},Ti=class extends Event{constructor(){super("rr-window-resized",{bubbles:!0,composed:!0})}},zi=class extends Event{constructor(){super("rr-window-closed",{bubbles:!0,composed:!0})}},ki=class extends Event{constructor(){super("rr-window-open",{bubbles:!0,composed:!0})}};var He=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},je=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},qe=class extends b{constructor(){super(...arguments),this.min=0,this.frequency=0,this._scale=1,this.step=1}get scale(){return this._scale}set scale(e){if(e!=1&&e!=1e3&&e!=1e6)return;let t=this._scale;this._scale=e,this.requestUpdate("scale",t)}static get styles(){return[w`
        input {
          width: 13ex;
        }

        @media (prefers-color-scheme: dark) {
          input,
          select {
            background: #222;
            color: #ddd;
          }
        }
      `]}render(){return p`<input
        type="number"
        id="frequency"
        .step=${String(this.step/this.scale)}
        .value=${String(this.frequency/this.scale)}
        @change=${this.onFrequencyChange}
      /><select id="scale" @change=${this.onScaleChange}>
        <option value="1" .selected=${this.scale==1}>Hz</option>
        <option value="1000" .selected=${this.scale==1e3}>kHz</option>
        <option value="1000000" .selected=${this.scale==1e6}>MHz</option>
      </select>`}onFrequencyChange(e){let t=e.target,i=Number(t.value);if(!isNaN(i)){let r=i*this.scale;if(r>=this.min&&(this.max===void 0||r<=this.max)){this.frequency=i*this.scale,this.dispatchEvent(new Event("change"));return}}t.value=String(this.frequency/this.scale)}onScaleChange(e){let t=e.target,i=Number(t.selectedOptions[0].value);this.scale=i,this.dispatchEvent(new Event("scale-change"))}};He([h({type:Number,reflect:!0}),je("design:type",Number)],qe.prototype,"min",void 0);He([h({type:Number,reflect:!0}),je("design:type",Number)],qe.prototype,"max",void 0);He([h({type:Number,reflect:!0}),je("design:type",Number)],qe.prototype,"frequency",void 0);He([h({type:Number,reflect:!0}),je("design:type",Number),je("design:paramtypes",[Number])],qe.prototype,"scale",null);He([h({type:Number,reflect:!0}),je("design:type",Number)],qe.prototype,"step",void 0);qe=He([x("rr-frequency-input")],qe);var D=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},_=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},ps,fs,M=class extends We(b){constructor(){super(...arguments),this.inline=!1,this.hidden=!1,this.tunedFrequency=885e5,this.scale=1e3,this.tuningStep=1e3,this.scheme="WBFM",this.bandwidth=15e4,this.stereo=!0,this.squelch=0,this.gain=null,this.sortColumn="frequency",this.presets=[],this.sortedIndices=[],this.editorOpen=!1,this.editorContent={name:"",tunedFrequency:this.tunedFrequency,scale:this.scale,tuningStep:this.tuningStep,scheme:this.scheme,bandwidth:this.bandwidth,stereo:this.stereo,squelch:this.squelch,gain:this.gain}}static get styles(){return[V,w`
        table {
          border-collapse: collapse;
          width: 100%;
          cursor: default;
        }

        tr.active {
          background: #7bd;
        }

        tr:nth-child(even) {
          background: #eee;
          &.active {
            background: #6bd;
          }
        }

        td:nth-child(n + 2) {
          width: 0;
        }

        th,
        td {
          text-wrap: nowrap;
          padding: 0.4ex 0.8ex;
          cursor: pointer;
        }

        td:first-child {
          max-width: 15ex;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        svg {
          vertical-align: text-top;
        }

        a svg {
          fill: #22e;
        }

        .buttonIllustration {
          position: relative;
          top: 0.5ex;
          margin-top: -2ex;
          z-index: 0;
        }

        #preset-editor {
          bottom: inherit;
          right: inherit;
          margin: auto;

          div:first-child {
            margin-bottom: 1ex;
          }
          div:last-child {
            margin-top: 1ex;
          }
        }

        @media (prefers-color-scheme: dark) {
          tr.active {
            background: #135;
          }

          tr:nth-child(even) {
            background: #333;
            &.active {
              background: #147;
            }
          }

          a svg {
            fill: #55f;
          }
        }
      `]}render(){return p`<rr-window
        label=${this.selectedIndex===void 0?"\u9884\u8BBE":`\u5F53\u524D\u9884\u8BBE: ${this.presets[this.selectedIndex].name}`}
        id="presets"
        class=${this.inline?"inline":""}
        closeable
        .closed=${this.closed}
        .position=${this.position}
        .size=${this.size}
        .fixed=${this.inline}
        .resizeable=${!0}
      >
        <button
          slot="label-left"
          .disabled=${this.selectedIndex!==void 0}
          @click=${this.onAddClick}
        >
          ${Ei}
        </button>
        <table>
          <tr>
            <th id="name" @click=${this.onHeaderClick}>
              名称${this.getSortArrow("name")}
            </th>
            <th id="frequency" @click=${this.onHeaderClick}>
              频率${this.getSortArrow("frequency")}
            </th>
            <th id="mode" @click=${this.onHeaderClick}>
              模式${this.getSortArrow("mode")}
            </th>
            <th></th>
          </tr>
          ${this.sortedIndices.map(e=>p`<tr
                data-index=${e}
                class=${e==this.selectedIndex?"active":""}
                @click=${this.onRowClick}
              >
                <td>${this.presets[e].name}</td>
                <td>
                  ${Pt(this.presets[e].tunedFrequency,this.presets[e].scale)}
                </td>
                <td>${this.presets[e].scheme}</td>
                <td>
                  <a href="javascript:0" @click=${this.onRowEditClick}
                    >${ss}</a
                  ><a href="javascript:0" @click=${this.onRowDeleteClick}
                    >${ns}</a
                  >
                </td>
              </tr>`)}
        </table>
        ${this.presets.length==0?p`<p style="max-width: 50ex">
             您可以使用预设快速切换到您喜欢的电台或频率。点击
              <button disabled class="buttonIllustration">${Ei}</button>
             此窗口左上角的按钮将当前频率添加到预设中。
            </p>`:m}
      </rr-window>

      <rr-window
        id="preset-editor"
        .label=${this.editorTitle||""}
        closeable
        modal
        .closed=${!this.editorOpen}
        @rr-window-open=${this.onEditorOpen}
        @rr-window-closed=${this.onEditorClosed}
      >
        <div>
          <label for="presetName">名称: </label
          ><input
            id="presetName"
            type="text"
            .value=${this.editorContent.name}
            @keydown=${this.onEditorNameKeydown}
            @input=${this.onEditorNameChange}
          />
        </div>
        <div>
          频率:
          <b
            >${Pt(this.editorContent.tunedFrequency,this.editorContent.scale)}</b
          >, 步进:
          <b>${Pt(this.editorContent.tuningStep,1)}</b>
        </div>
        <div>
          调制方式:
          <b
            >${this.editorContent.scheme}${dt(this.editorContent.scheme)?this.editorContent.stereo?" \u7ACB\u4F53\u58F0":" Mono":m}</b
          >${_t(this.editorContent.scheme)?p`, 频宽:
                <b>${Pt(this.editorContent.bandwidth,1)}</b>`:m}
        </div>
        <div>
          增益:
          <b
            >${this.editorContent.gain===null?"\u81EA\u52A8":this.editorContent.gain}</b
          >${Et(this.editorContent.scheme)?p`, 静噪: <b>${this.editorContent.squelch}</b>`:m}
        </div>
        ${this.editorIndex!==void 0?p`<div>
              <button @click=${this.onEditorReplaceClick}>
                用当前设置替换
              </button>
            </div>`:m}
        <div>
          <button
            .disabled=${this.editorValidationError!==void 0}
            @click=${this.onEditorSaveClick}
          >
            保存</button
          >${this.editorValidationError!==void 0?p` <i>${this.editorValidationError}</i>`:m}
        </div>
      </rr-window>`}willUpdate(e){super.willUpdate(e),(e.has("presets")||e.has("sortColumn"))&&this.updatePresetLists(),this.findSelectedIndex()}updatePresetLists(){let e=[...this.presets.keys()];e.sort(this.getSortFormula()),this.sortedIndices=e}onAddClick(e){this.editorTitle="\u65B0\u7684\u9884\u8BBE",this.editorIndex=void 0,this.editorContent={name:"",tunedFrequency:this.tunedFrequency,scale:this.scale,tuningStep:this.tuningStep,scheme:this.scheme,bandwidth:this.bandwidth,stereo:this.stereo,squelch:this.squelch,gain:this.gain},this.checkValidEditor(),this.editorOpen=!0}onEditorNameKeydown(e){e.key=="Enter"?(e.preventDefault(),this.onEditorSaveClick()):e.key=="Escape"&&(e.preventDefault(),this.onEditorClosed())}onEditorNameChange(e){let i=e.target.value;this.editorContent.name=i,this.checkValidEditor()}onEditorReplaceClick(){this.editorContent={name:this.editorContent.name,tunedFrequency:this.tunedFrequency,scale:this.scale,tuningStep:this.tuningStep,scheme:this.scheme,bandwidth:this.bandwidth,stereo:this.stereo,squelch:this.squelch,gain:this.gain},this.checkValidEditor()}checkValidEditor(){if(this.editorContent.name==""){this.editorValidationError="\u9884\u8BBE\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A";return}let e=this.presets.findIndex(t=>t.name==this.editorContent.name);if(e>=0&&e!=this.editorIndex){this.editorValidationError="\u5DF2\u7ECF\u6709\u53E6\u4E00\u4E2A\u540C\u540D\u7684\u9884\u8BBE";return}if(e=this.presets.findIndex(t=>ms(t,this.editorContent)),e>=0&&e!=this.editorIndex){this.editorValidationError=`\u6709\u4E00\u4E2A\u76F8\u540C\u7684\u9884\u8BBE: ${this.presets[e].name}`;return}this.editorValidationError=void 0}onEditorSaveClick(){let e=[...this.presets];this.editorIndex===void 0||this.editorIndex>=e.length?e.push({...this.editorContent}):e[this.editorIndex]={...this.editorContent},this.editorOpen=!1,this.presets=e,this.dispatchEvent(new Tt)}onEditorOpen(){this.presetName&&this.presetName.focus()}onEditorClosed(){this.editorOpen=!1}onRowClick(e){let t=this.getIndex(e);t!==void 0&&(this.selectedIndex=t,this.dispatchEvent(new Li))}onRowEditClick(e){e.stopPropagation();let t=this.getIndex(e);if(t===void 0)return;let i={...this.presets[t]};this.editorTitle=`\u7F16\u8F91\u9884\u8BBE "${i.name}"`,this.editorIndex=t,this.editorContent=i,this.checkValidEditor(),this.editorOpen=!0}onRowDeleteClick(e){e.stopPropagation();let t=this.getIndex(e);if(t===void 0)return;let i=[...this.presets];i.splice(t,1),this.selectedIndex=void 0,this.presets=i,this.dispatchEvent(new Tt)}getIndex(e){let t=e.target;for(;t!=null&&t.tagName!="TR";)t=t.parentElement;if(t==null)return;let i=Number(t.dataset.index);if(!isNaN(i))return i}onHeaderClick(e){let t=e.currentTarget.id,i=`-${t}`;this.sortColumn===t?this.sortColumn=i:this.sortColumn=t,this.dispatchEvent(new Oi)}getSortArrow(e){return this.sortColumn===e?ls:this.sortColumn===`-${e}`?as:m}getSortFormula(){let e=this.sortColumn||"frequency",t=e[0]=="-";t&&(e=e.substring(1));let i;switch(e){case"name":i=(r,n)=>this.presets[r].name.localeCompare(this.presets[n].name);break;case"mode":i=(r,n)=>this.presets[r].scheme.localeCompare(this.presets[n].scheme);break;default:i=(r,n)=>this.presets[r].tunedFrequency-this.presets[n].tunedFrequency;break}return t?(r,n)=>i(n,r):i}findSelectedIndex(){let e=this.presets.findIndex(t=>ms(t,this));e<0?this.selectedIndex=void 0:this.selectedIndex=e}};D([h({attribute:!1}),_("design:type",Boolean)],M.prototype,"inline",void 0);D([h({attribute:!1}),_("design:type",Boolean)],M.prototype,"hidden",void 0);D([h({attribute:!1}),_("design:type",Number)],M.prototype,"tunedFrequency",void 0);D([h({attribute:!1}),_("design:type",Number)],M.prototype,"scale",void 0);D([h({attribute:!1}),_("design:type",Number)],M.prototype,"tuningStep",void 0);D([h({attribute:!1}),_("design:type",Object)],M.prototype,"scheme",void 0);D([h({attribute:!1}),_("design:type",Number)],M.prototype,"bandwidth",void 0);D([h({attribute:!1}),_("design:type",Boolean)],M.prototype,"stereo",void 0);D([h({attribute:!1}),_("design:type",Number)],M.prototype,"squelch",void 0);D([h({attribute:!1}),_("design:type",Object)],M.prototype,"gain",void 0);D([h({attribute:!1}),_("design:type",Number)],M.prototype,"selectedIndex",void 0);D([h({attribute:!1}),_("design:type",String)],M.prototype,"sortColumn",void 0);D([h({attribute:!1}),_("design:type",Array)],M.prototype,"presets",void 0);D([v(),_("design:type",Array)],M.prototype,"sortedIndices",void 0);D([v(),_("design:type",String)],M.prototype,"editorTitle",void 0);D([v(),_("design:type",Boolean)],M.prototype,"editorOpen",void 0);D([v(),_("design:type",Number)],M.prototype,"editorIndex",void 0);D([v(),_("design:type",String)],M.prototype,"editorValidationError",void 0);D([v(),_("design:type",Object)],M.prototype,"editorContent",void 0);D([y("#presets"),_("design:type",typeof(ps=typeof q<"u"&&q)=="function"?ps:Object)],M.prototype,"window",void 0);D([y("#presetName"),_("design:type",typeof(fs=typeof HTMLInputElement<"u"&&HTMLInputElement)=="function"?fs:Object)],M.prototype,"presetName",void 0);M=D([x("rr-presets")],M);var Li=class extends Event{constructor(){super("rr-preset-selected",{bubbles:!0,composed:!0})}},Tt=class extends Event{constructor(){super("rr-presets-changed",{bubbles:!0,composed:!0})}},Oi=class extends Event{constructor(){super("rr-presets-sorted",{bubbles:!0,composed:!0})}};function ms(s,e){return s.tunedFrequency===e.tunedFrequency&&s.scale===e.scale&&s.tuningStep===e.tuningStep&&s.bandwidth===e.bandwidth&&s.stereo===e.stereo&&s.squelch===e.squelch&&s.gain===e.gain}function Pt(s,e){switch(e){case 1e3:return`${String(s/1e3)} kHz`;case 1e6:return`${String(s/1e6)} MHz`;default:return`${String(s)} Hz`}}var P=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},z=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},gs,$=class extends We(b){constructor(){super(...arguments),this.inline=!1,this.showSettings=!0,this.showHelp=!0,this.errorState=!1,this.playing=!1,this.scale=1e3,this.centerFrequency=885e5,this.tunedFrequency=885e5,this.tuningStep=1e3,this.availableSchemes=Oe(),this.scheme="WBFM",this.bandwidth=15e4,this.stereo=!0,this.squelch=0,this.stereoStatus=!1,this.gain=null,this.gainDisabled=!1,this.savedGain=0}static get styles(){return[V,w`
        rr-window {
          right: auto;
          left: 1em;
        }

        .cfgBlock {
          display: inline-flex;
          flex-direction: column;
        }

        #bandwidth {
          width: 9ex;
        }

        #stereoIcon {
          vertical-align: bottom;
          fill: #bbb;
        }

        #stereoIcon.stereo {
          fill: #060;
        }

        #squelch {
          width: 12ex;
        }

        @media (prefers-color-scheme: dark) {
          #stereoIcon {
            fill: #666;
          }

          #stereoIcon.stereo {
            fill: #0b0;
          }
        }

        label[for="centerFrequency"],
        label[for="tunedFrequency"],
        label[for="tuningStep"] {
          width: 16ex;
          display: inline-block;
          text-align: right;
          padding-right: 0.5ex;
        }
      `]}render(){return p`<rr-window
      label="控制台"
      id="controls"
      class=${this.inline?"inline":""}
      .position=${this.position}
      .fixed=${this.inline}
    >
      ${this.errorState?p`<button slot="label-left" id="errorState" disabled>
            ${rs}
          </button>`:this.playing?p`<button slot="label-left" id="stop" @click=${this.onStop}>
              ${Gr}
            </button>`:p`<button slot="label-left" id="start" @click=${this.onStart}>
              ${Zr}
            </button>`}
      <button slot="label-right" id="presets" @click=${this.onPresets}>
        ${os}
      </button>
      ${this.showSettings?p`<button
            slot="label-right"
            id="settings"
            @click=${this.onSettings}
          >
            ${Qr}
          </button>`:m}
      ${this.showHelp?p`<a slot="label-right" href="help.html" target="_blank"
            ><button id="help">${Xr}</button></a
          >`:m}
      <div>
        <label for="centerFrequency">中心频率: </label
        ><rr-frequency-input
          id="centerFrequency"
          .min=${0}
          .max=${18e8}
          .frequency=${this.centerFrequency}
          .scale=${this.scale}
          .step=${this.tuningStep}
          @change=${this.onCenterFrequencyChange}
          @scale-change=${this.onScaleChange}
        ></rr-frequency-input>
      </div>
      <div>
        <label for="tunedFrequency">调谐频率: </label
        ><rr-frequency-input
          id="tunedFrequency"
          min=${0}
          max=${18e8}
          .frequency=${this.tunedFrequency}
          .scale=${this.scale}
          .step=${this.tuningStep}
          @change=${this.onTunedFrequencyChange}
          @scale-change=${this.onScaleChange}
        ></rr-frequency-input>
      </div>
      <div>
        <label for="tuningStep">调谐步进: </label
        ><input
          id="tuningStep"
          type="number"
          min="1"
          max="500000"
          .value=${String(this.tuningStep)}
          @change=${this.onTuningStepChange}
        />
        Hz
      </div>
      <div>
        <label for="scheme">调制方式: </label>
        <select id="scheme" @change=${this.onModeChange}>
          ${this.availableSchemes.map(e=>p`<option value="${e}" .selected=${this.scheme==e}>
                ${e}
              </option>`)}
        </select>
        <div class="cfgBlock">
          <span .hidden=${!_t(this.scheme)}
            ><label for="bandwidth">频宽: </label
            ><input
              type="number"
              id="bandwidth"
              min="0"
              max="20000"
              step="1"
              .value=${String(this.bandwidth)}
              @change=${this.onBandwidthChange} /></span
          ><span .hidden=${!dt(this.scheme)}>
            <label for="stereo">立体声: </label
            ><input
              type="checkbox"
              id="stereo"
              .checked=${this.stereo}
              @change=${this.onStereoChange}
            />
            <span
              id="stereoIcon"
              class=${this.stereoStatus?"stereo":"mono"}
              .hidden=${!dt(this.scheme)||!this.stereo}
              >${is}</span
            ></span
          ><span .hidden=${!Et(this.scheme)}>
            <label for="squelch">静噪: </label
            ><input
              type="range"
              id="squelch"
              min="0"
              max="6"
              step="0.1"
              .value=${String(this.squelch)}
              @input=${this.onSquelchChange}
            />
          </span>
        </div>
      </div>
      <div>
        <label for="gain">增益: </label
        ><input
          type="range"
          id="gain"
          min="0"
          max="50"
          .value=${this.gain===null?String(this.savedGain):String(this.gain)}
          .disabled=${this.gain===null||this.gainDisabled}
          @input=${this.onGainInput}
        />
        <input
          type="checkbox"
          id="gainAuto"
          .checked=${this.gain===null||this.gainDisabled}
          .disabled=${this.gainDisabled}
          @change=${this.onGainAutoChange}
        />
        <label for="gainAuto">自动增益</label>
      </div>
    </rr-window>`}onStart(){this.dispatchEvent(new Ni)}onStop(){this.dispatchEvent(new Ui)}onPresets(){this.dispatchEvent(new Wi)}onSettings(){this.dispatchEvent(new ji)}onScaleChange(e){let t=e.target;this.scale=t.scale,this.dispatchEvent(new Hi)}onCenterFrequencyChange(e){let t=e.target;this.centerFrequency=t.frequency,this.dispatchEvent(new Vi)}onTunedFrequencyChange(e){let t=e.target;this.tunedFrequency=t.frequency,this.dispatchEvent(new Gi)}onTuningStepChange(e){let t=e.target,i=Number(t.value);if(isNaN(i)){t.value=String(this.tuningStep);return}this.tuningStep=i,this.dispatchEvent(new Zi)}onModeChange(e){this.scheme=e.target.selectedOptions[0].value,this.dispatchEvent(new Qi)}onBandwidthChange(e){let t=e.target,i=Number(t.value);if(isNaN(i)){t.value=String(this.bandwidth);return}this.bandwidth=i,this.dispatchEvent(new Xi)}onStereoChange(e){let t=e.target;this.stereo=t.checked,this.dispatchEvent(new Yi)}onSquelchChange(e){let t=e.target,i=Number(t.value);(isNaN(i)||i<0)&&(i=0,t.value=String(i)),i>6&&(i=6,t.value=String(i)),this.squelch=i,this.dispatchEvent(new Ki)}onGainInput(e){let t=e.target,i=Number(t.value);if(isNaN(i)){t.value=this.gain==null?"":String(this.gain);return}this.gain=i,this.dispatchEvent(new zt)}onGainAutoChange(e){e.target.checked?(this.gain!=null&&(this.savedGain=this.gain),this.gain=null):this.gain=this.savedGain,this.dispatchEvent(new zt)}};P([h({attribute:!1}),z("design:type",Boolean)],$.prototype,"inline",void 0);P([h({attribute:!1}),z("design:type",Boolean)],$.prototype,"showSettings",void 0);P([h({attribute:!1}),z("design:type",Boolean)],$.prototype,"showHelp",void 0);P([h({attribute:!1}),z("design:type",Boolean)],$.prototype,"errorState",void 0);P([h({attribute:!1}),z("design:type",Boolean)],$.prototype,"playing",void 0);P([h({attribute:!1}),z("design:type",Number)],$.prototype,"scale",void 0);P([h({attribute:!1}),z("design:type",Number)],$.prototype,"centerFrequency",void 0);P([h({attribute:!1}),z("design:type",Number)],$.prototype,"tunedFrequency",void 0);P([h({attribute:!1}),z("design:type",Number)],$.prototype,"tuningStep",void 0);P([h({attribute:!1}),z("design:type",Array)],$.prototype,"availableSchemes",void 0);P([h({attribute:!1}),z("design:type",Object)],$.prototype,"scheme",void 0);P([h({attribute:!1}),z("design:type",Number)],$.prototype,"bandwidth",void 0);P([h({attribute:!1}),z("design:type",Boolean)],$.prototype,"stereo",void 0);P([h({attribute:!1}),z("design:type",Number)],$.prototype,"squelch",void 0);P([h({attribute:!1}),z("design:type",Boolean)],$.prototype,"stereoStatus",void 0);P([h({attribute:!1}),z("design:type",Object)],$.prototype,"gain",void 0);P([h({attribute:!1}),z("design:type",Boolean)],$.prototype,"gainDisabled",void 0);P([v(),z("design:type",Number)],$.prototype,"savedGain",void 0);P([y("rr-window"),z("design:type",typeof(gs=typeof q<"u"&&q)=="function"?gs:Object)],$.prototype,"window",void 0);$=P([x("rr-main-controls")],$);var Ni=class extends Event{constructor(){super("rr-start",{bubbles:!0,composed:!0})}},Ui=class extends Event{constructor(){super("rr-stop",{bubbles:!0,composed:!0})}},Wi=class extends Event{constructor(){super("rr-presets",{bubbles:!0,composed:!0})}},ji=class extends Event{constructor(){super("rr-settings",{bubbles:!0,composed:!0})}},Hi=class extends Event{constructor(){super("rr-scale-changed",{bubbles:!0,composed:!0})}},Vi=class extends Event{constructor(){super("rr-center-frequency-changed",{bubbles:!0,composed:!0})}},Gi=class extends Event{constructor(){super("rr-tuned-frequency-changed",{bubbles:!0,composed:!0})}},Zi=class extends Event{constructor(){super("rr-tuning-step-changed",{bubbles:!0,composed:!0})}},Qi=class extends Event{constructor(){super("rr-scheme-changed",{bubbles:!0,composed:!0})}},Xi=class extends Event{constructor(){super("rr-bandwidth-changed",{bubbles:!0,composed:!0})}},Yi=class extends Event{constructor(){super("rr-stereo-changed",{bubbles:!0,composed:!0})}},Ki=class extends Event{constructor(){super("rr-squelch-changed",{bubbles:!0,composed:!0})}},zt=class extends Event{constructor(){super("rr-gain-changed",{bubbles:!0,composed:!0})}};var de=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},ve=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},bs,vn=(()=>{let s=new Set([256e3]);for(let t=1024e3;t<3e6;t+=256e3)s.add(t);for(let t=96e4;t<3e6;t+=192e3)s.add(t);let e=[...s];return e.sort((t,i)=>Number(t)-Number(i)),e})(),wn=(()=>{let s=new Array;for(let e=32;e<=32768;e*=2)s.push(e);return s})(),xn=new Map([["default","\u9ED8\u8BA4"],["directSampling","\u76F4\u63A5\u91C7\u6837"],["upconverter","\u5916\u90E8\u4E0A\u53D8\u9891\u5668"]]),Sn=new Map([["Q","Q"],["I","I"]]),X=class extends We(b){constructor(){super(...arguments),this.inline=!1,this.playing=!1,this.sampleRate=1024e3,this.ppm=0,this.fftSize=2048,this.biasTee=!1,this.lowFrequencyMethod={name:"default",channel:"Q",frequency:1e8,biasTee:!1}}static get styles(){return[V]}render(){return p`<rr-window
      label="设置"
      id="settings"
      closeable
      class=${this.inline?"inline":""}
      .position=${this.position}
      .fixed=${this.inline}
    >
      <div>
        <label for="sampleRate">采样率: </label
        ><select
          id="sampleRate"
          .disabled=${this.playing}
          @change=${this.onSampleRateChange}
        >
          ${vn.map(e=>p`<option value=${e} .selected=${this.sampleRate==e}>
                ${e}
              </option>`)}
        </select>
      </div>
      <div>
        <label for="ppm">时钟校正: </label
        ><input
          id="ppm"
          type="number"
          min="-500"
          max="500"
          step="1"
          .value=${String(this.ppm)}
          @change=${this.onPpmChange}
        />PPM
      </div>
      <div>
        <label for="fftSize">FFT 大小: </label
        ><select id="fftSize" @change=${this.onFftSizeChange}>
          ${wn.map(e=>p`<option value=${e} .selected=${this.fftSize==e}>
                ${e}
              </option>`)}
        </select>
      </div>
      <div>
        <label for="biasTee">Bias T(给天线供电): </label
        ><input
          type="checkbox"
          id="biasTee"
          .checked=${this.biasTee}
          @change=${this.onBiasTeeChange}
        />
      </div>
      <div>
        <label for="lowFreqMethod">0-29MHz 接收方法: </label
        ><select id="lowFreqMethod" @change=${this.onLowFrequencyMethodChange}>
          ${xn.entries().map(([e,t])=>p`<option
                value=${String(e)}
                .selected=${this.lowFrequencyMethod.name==e}
              >
                ${t}
              </option>`)}
        </select>
      </div>
      <div .hidden=${this.lowFrequencyMethod.name!="directSampling"}>
        <label for="directSamplingChannel">直接采样通道: </label
        ><select
          id="directSamplingChannel"
          @change=${this.onDirectSamplingChannelChange}
        >
          ${Sn.entries().map(([e,t])=>p`<option
                value=${String(e)}
                .selected=${this.lowFrequencyMethod.channel==e}
              >
                ${t}
              </option>`)}
        </select>
      </div>
      <div .hidden=${this.lowFrequencyMethod.name!="upconverter"}>
        <label for="upconverterFrequency">上变频器频率: </label
        ><input
          type="number"
          id="upconverterFrequency"
          min="1"
          max="1800000000"
          step="1"
          .value=${String(this.lowFrequencyMethod.frequency)}
          @change=${this.onUpconverterFrequencyChange}
        />
      </div>
      <div .hidden=${this.lowFrequencyMethod.name!="upconverter"}>
        <label for="upconverterBiasTee">为上变频器使用BiasT: </label
        ><input
          type="checkbox"
          id="upconverterBiasTee"
          .checked=${this.lowFrequencyMethod.biasTee}
          @change=${this.onUpconverterBiasTeeChange}
        />
      </div>
    </rr-window>`}onSampleRateChange(e){this.sampleRate=Number(e.target.selectedOptions[0].value),this.dispatchEvent(new Ji)}onPpmChange(e){let t=e.target,i=Number(t.value);if(isNaN(i)){t.value=String(this.ppm);return}this.ppm=i,this.dispatchEvent(new er)}onFftSizeChange(e){this.fftSize=Number(e.target.selectedOptions[0].value),this.dispatchEvent(new tr)}onBiasTeeChange(e){this.biasTee=e.target.checked,this.dispatchEvent(new ir)}onLowFrequencyMethodChange(e){let t={...this.lowFrequencyMethod};t.name=e.target.selectedOptions[0].value,this.lowFrequencyMethod=t,this.dispatchEvent(new Ve)}onDirectSamplingChannelChange(e){let t={...this.lowFrequencyMethod};t.channel=e.target.selectedOptions[0].value,this.lowFrequencyMethod=t,this.dispatchEvent(new Ve)}onUpconverterFrequencyChange(e){let t=e.target,i=Number(t.value);if(isNaN(i)){t.value=String(this.lowFrequencyMethod.frequency);return}let r={...this.lowFrequencyMethod};r.frequency=i,this.lowFrequencyMethod=r,this.dispatchEvent(new Ve)}onUpconverterBiasTeeChange(e){let t={...this.lowFrequencyMethod};t.biasTee=e.target.checked,this.lowFrequencyMethod=t,this.dispatchEvent(new Ve)}};de([h({attribute:!1}),ve("design:type",Boolean)],X.prototype,"inline",void 0);de([h({attribute:!1}),ve("design:type",Boolean)],X.prototype,"playing",void 0);de([h({attribute:!1}),ve("design:type",Number)],X.prototype,"sampleRate",void 0);de([h({attribute:!1}),ve("design:type",Number)],X.prototype,"ppm",void 0);de([h({attribute:!1}),ve("design:type",Number)],X.prototype,"fftSize",void 0);de([h({attribute:!1}),ve("design:type",Boolean)],X.prototype,"biasTee",void 0);de([h({attribute:!1}),ve("design:type",Object)],X.prototype,"lowFrequencyMethod",void 0);de([y("rr-window"),ve("design:type",typeof(bs=typeof q<"u"&&q)=="function"?bs:Object)],X.prototype,"window",void 0);X=de([x("rr-settings")],X);var Ji=class extends Event{constructor(){super("rr-sample-rate-changed",{bubbles:!0,composed:!0})}},er=class extends Event{constructor(){super("rr-ppm-changed",{bubbles:!0,composed:!0})}},tr=class extends Event{constructor(){super("rr-fft-size-changed",{bubbles:!0,composed:!0})}},ir=class extends Event{constructor(){super("rr-bias-tee-changed",{bubbles:!0,composed:!0})}},Ve=class extends Event{constructor(){super("rr-low-frequency-method-changed",{bubbles:!0,composed:!0})}};function O(s,e,t){t+=(t+1)%2;let i=e/s,r=new Float32Array(t),n=Math.floor(t/2),o=0;for(let a=0;a<t;++a){let l;a==n?l=2*Math.PI*i:(l=Math.sin(2*Math.PI*i*(a-n))/(a-n),l*=.54-.46*Math.cos(2*Math.PI*a/(t-1))),o+=l,r[a]=l}for(let a=0;a<t;++a)r[a]/=o;return r}function ys(s){s+=(s+1)%2;let e=Math.floor(s/2),t=new Float32Array(s);for(let i=0;i<t.length;++i)i%2==0&&(t[i]=2/(Math.PI*(e-i)));return t}function rr(s){let e=new Float32Array(s);for(let t=0;t<s;++t)e[t]=.42-.5*Math.cos(2*Math.PI*t/(s-1))+.08*Math.cos(4*Math.PI*t/(s-1));return e}var E=class s{constructor(e){this.coefs=e;this.offset=this.coefs.length-1,this.center=Math.floor(this.coefs.length/2),this.curSamples=new Float32Array(this.offset)}setCoefficients(e){let t=this.curSamples;this.coefs=e,this.offset=this.coefs.length-1,this.center=Math.floor(this.coefs.length/2),this.curSamples=new Float32Array(this.offset),this.loadSamples(t)}clone(){return new s(this.coefs)}delay(){return this.center}inPlace(e){this.loadSamples(e);for(let t=0;t<e.length;++t)e[t]=this.get(t)}loadSamples(e){let t=e.length+this.offset;if(this.curSamples.length!=t){let i=new Float32Array(t);i.set(this.curSamples.subarray(this.curSamples.length-this.offset)),this.curSamples=i}else this.curSamples.copyWithin(0,e.length);this.curSamples.set(e,this.offset)}get(e){let t=0,i=0,r=this.coefs.length,n=4*Math.floor(r/4);for(;t<n;)i+=this.coefs[t++]*this.curSamples[e++]+this.coefs[t++]*this.curSamples[e++]+this.coefs[t++]*this.curSamples[e++]+this.coefs[t++]*this.curSamples[e++];let o=2*Math.floor(r/2);for(;t<o;)i+=this.coefs[t++]*this.curSamples[e++]+this.coefs[t++]*this.curSamples[e++];for(;t<r;)i+=this.coefs[t++]*this.curSamples[e++];return i}getDelayed(e){return this.curSamples[e+this.center]}},Ge=class s{constructor(e,t,i){this.sampleRate=e;this.dcBlocker=new sr(e),this.alpha=1-Math.exp(-1/(e*t)),this.counter=0,this.maxPower=0,this.maxGain=i||100}clone(){let e=new s(this.sampleRate,1,this.maxGain);return e.alpha=this.alpha,e}delay(){return 0}inPlace(e){let t=this.alpha,i=this.maxPower,r=this.counter,n;this.dcBlocker.inPlace(e);for(let o=0;o<e.length;++o){let a=e[o],l=a*a;l>.9*i?(r=this.sampleRate,l>i&&(i=l)):r>0?--r:i-=t*i,n=Math.min(this.maxGain,1/Math.sqrt(i)),e[o]*=n}this.maxPower=i,this.counter=r}},sr=class s{constructor(e,t){this.restricted=t;this.alpha=1-Math.exp(-1/(e/2)),this.dc=0,this.restricted=this.restricted||!1}clone(){let e=new s(1e3);return e.alpha=this.alpha,e.dc=this.dc,e}delay(){return 0}inPlace(e){let t=this.alpha,i=this.dc;for(let r=0;r<e.length;++r)i+=t*(e[r]-i),(!this.restricted||i*i<6e-5)&&(e[r]-=i);this.dc=i}},ft=class s{constructor(e,t){this.alpha=1-Math.exp(-1/(e*t/1e6)),this.val=0}clone(){let e=new s(1,1);return e.alpha=this.alpha,e.val=this.val,e}delay(){return 0}inPlace(e){let t=this.alpha,i=this.val;for(let r=0;r<e.length;++r)i+=t*(e[r]-i),e[r]=i;this.val=i}},Y=class{constructor(e){this.sampleRate=e;this.cosine=1,this.sine=0}inPlace(e,t,i){let r=this.cosine,n=this.sine,o=Math.cos(2*Math.PI*i/this.sampleRate),a=Math.sin(2*Math.PI*i/this.sampleRate);for(let l=0;l<e.length;++l){let c=e[l]*r-t[l]*n;t[l]=e[l]*n+t[l]*r,e[l]=c;let d=r*a+n*o;r=r*o-n*a,n=d}this.cosine=r,this.sine=n}};var kt=class{constructor(e,t,i){this.make=e;this.buffers=[...Array(t).keys()].map(()=>e(i||0)),this.current=0}get(e){let t=this.buffers[this.current];return t.length!=e&&(t=this.make(e),this.buffers[this.current]=t),this.current=(this.current+1)%this.buffers.length,t}},It=class extends kt{constructor(e,t){super(i=>new Uint8Array(i),e,t)}},ie=class extends kt{constructor(e,t){super(i=>new Float32Array(i),e,t)}},_e=class{constructor(e,t){this.buffers=new ie(e*2,t)}get(e){return[this.buffers.get(e),this.buffers.get(e)]}},nr=class{constructor(e){this.buffer=e;this.position=0}store(e){let t=Math.min(e.length,e.length,this.buffer.length),{dstOffset:i}=this.doCopy(t,e,0,this.buffer,this.position);this.position=i}copyTo(e){let t=Math.min(e.length,this.buffer.length,e.length),i=(this.position+this.buffer.length-t)%this.buffer.length;this.doCopy(t,this.buffer,i,e,0)}doCopy(e,t,i,r,n){for(;e>0;){let o=Math.min(e,t.length-i,r.length-n);r.set(t.subarray(i,i+o),n),i=(i+o)%t.length,n=(n+o)%r.length,e-=o}return{srcOffset:i,dstOffset:n}}},mt=class extends nr{constructor(e){super(new Float32Array(e))}};var Lt=class{constructor(e){let i=ys(151);this.filterDelay=new E(i),this.filterHilbert=new E(i),this.hilbertMul=e==0?-1:1}demodulate(e,t,i){this.filterDelay.loadSamples(e),this.filterHilbert.loadSamples(t);for(let r=0;r<i.length;++r)i[r]=this.filterDelay.getDelayed(r)+this.filterHilbert.get(r)*this.hilbertMul}},Ot=class{constructor(e){this.alpha=1-Math.exp(-1/(e/2)),this.carrierAmplitude=0}demodulate(e,t,i){let r=this.alpha,n=this.carrierAmplitude;for(let o=0;o<i.length;++o){let a=e[o],l=t[o],c=a*a+l*l,d=Math.sqrt(c);n+=r*(d-n),i[o]=n==0?0:d/n-1}this.carrierAmplitude=n}},Ze=class{constructor(e){this.mul=1/(2*Math.PI*e),this.lI=0,this.lQ=0}setMaxDeviation(e){this.mul=1/(2*Math.PI*e)}demodulate(e,t,i){let r=this.mul,n=this.lI,o=this.lQ;for(let a=0;a<e.length;++a){let l=n*e[a]+o*t[a],c=n*t[a]-e[a]*o;n=e[a],o=t[a];let d=1,u=0,g=0,f=1;l<0&&(d=-d,l=-l,u=Math.PI),c<0&&(d=-d,c=-c,u=-u),l>c?f=c/l:l!=c&&(g=-Math.PI/2,f=l/c,d=-d);let A=u+d*(g+f/(.9841915835861736+f*(.0934857026296713+f*.19556307900617517)))*r;i[a]=A}this.lI=n,this.lQ=o}},Nt=class s{constructor(e,t){this.buffer=new ie(4),this.sin=0,this.cos=1,this.iavg=new gt(9999),this.qavg=new gt(9999),this.cavg=new gt(49999,!0),this.sinTable=new Float32Array(8001),this.cosTable=new Float32Array(8001);for(let i=0;i<8001;++i){let r=(t+i/100-40)*2*Math.PI/e;this.sinTable[i]=Math.sin(r),this.cosTable[i]=Math.cos(r)}}static{this.STD_THRES=400}separate(e){let t=this.buffer.get(e.length),i=this.sin,r=this.cos;for(let n=0;n<t.length;++n){let o=this.iavg.add(e[n]*i),a=this.qavg.add(e[n]*r);t[n]*=i*r*2;let l;o>0?l=Math.max(-4,Math.min(4,a/o)):l=a==0?0:a>0?4:-4;let c=Math.round((l+4)*1e3),d=i*this.cosTable[c]+r*this.sinTable[c];r=r*this.cosTable[c]-i*this.sinTable[c],i=d,this.cavg.add(l*10)}return this.sin=i,this.cos=r,{found:this.cavg.getStd()<s.STD_THRES,diff:t}}},gt=class{constructor(e,t){this.weight=e;this.wantStd=t;this.avg=0,this.std=0}add(e){let t=this.weight;return this.avg=(t*this.avg+e)/(t+1),this.wantStd&&(this.std=(t*this.std+(e-this.avg)*(e-this.avg))/(t+1)),this.avg}getStd(){return this.std}};function W(s,e){let t=0;for(let i=0;i<s.length;++i){let r=s[i],n=e[i];t+=r*r+n*n}return t/s.length}var bt=class{constructor(e,t){this.ratio=e;this.filter=new E(t),this.buffer=new ie(2)}downsample(e){let t=this.ratio,i=Math.floor(e.length/t),r=this.buffer.get(i);this.filter.loadSamples(e);for(let n=0;n<i;++n)r[n]=this.filter.get(Math.floor(n*t));return r}},yt=class{constructor(e,t,i){let r=O(e,t/2,i);this.downsampler=new bt(e/t,r)}downsample(e){return this.downsampler.downsample(e)}},ee=class{constructor(e,t,i){let r=O(e,t/2,i);this.downsamplerI=new bt(e/t,r),this.downsamplerQ=new bt(e/t,r)}downsample(e,t){return[this.downsamplerI.downsample(e),this.downsamplerQ.downsample(t)]}};var Ut=class{constructor(e,t,i){this.outRate=t;this.mode=i;this.shifter=new Y(e),this.downsampler=new ee(e,t,151);let r=O(t,this.mode.bandwidth/2,151);this.filterI=new E(r),this.filterQ=new E(r),this.demodulator=new Ot(t)}getMode(){return this.mode}setMode(e){this.mode=e;let t=O(this.outRate,e.bandwidth/2,151);this.filterI.setCoefficients(t),this.filterQ.setCoefficients(t)}demodulate(e,t,i){this.shifter.inPlace(e,t,-i);let[r,n]=this.downsampler.downsample(e,t),o=W(r,n);this.filterI.inPlace(r),this.filterQ.inPlace(n);let a=W(r,n)*this.outRate/this.mode.bandwidth;return this.demodulator.demodulate(r,n,r),{left:r,right:new Float32Array(r),stereo:!1,snr:a/o}}};var Mn=600,Wt=class{constructor(e,t,i){this.outRate=t;this.mode=i;this.shifter=new Y(e),this.downsampler=new ee(e,t,151);let r=O(t,i.bandwidth/2,351);this.filterI=new E(r),this.filterQ=new E(r),this.toneShifter=new Y(t),this.agc=new Ge(t,10)}getMode(){return this.mode}setMode(e){this.mode=e;let t=O(this.outRate,e.bandwidth/2,151);this.filterI.setCoefficients(t),this.filterQ.setCoefficients(t)}demodulate(e,t,i){this.shifter.inPlace(e,t,-i);let[r,n]=this.downsampler.downsample(e,t),o=W(r,n);this.filterI.inPlace(r),this.filterQ.inPlace(n);let a=W(r,n)*this.outRate/this.mode.bandwidth;return this.toneShifter.inPlace(r,n,Mn),this.agc.inPlace(r),{left:r,right:new Float32Array(r),stereo:!1,snr:a/o}}};var jt=class{constructor(e,t,i){this.outRate=t;this.mode=i;this.shifter=new Y(e),this.downsampler=new ee(e,t,151);let r=O(t,i.maxF,151);this.filterI=new E(r),this.filterQ=new E(r),this.demodulator=new Ze(i.maxF/t)}getMode(){return this.mode}setMode(e){this.mode=e;let t=O(this.outRate,e.maxF,151);this.filterI.setCoefficients(t),this.filterQ.setCoefficients(t),this.demodulator.setMaxDeviation(e.maxF/this.outRate)}demodulate(e,t,i){this.shifter.inPlace(e,t,-i);let[r,n]=this.downsampler.downsample(e,t),o=W(r,n);this.filterI.inPlace(r),this.filterQ.inPlace(n);let a=W(r,n)*this.outRate/(this.mode.maxF*2);return this.demodulator.demodulate(r,n,r),{left:r,right:new Float32Array(r),stereo:!1,snr:a/o}}};var Ht=class{constructor(e,t,i){this.outRate=t;this.mode=i;this.shifter=new Y(e),this.downsampler=new ee(e,t,151);let r=O(this.outRate,i.bandwidth/2,151);this.filter=new E(r),this.demodulator=new Lt(i.scheme=="USB"?0:1),this.agc=new Ge(t,3)}getMode(){return this.mode}setMode(e){this.mode=e;let t=O(this.outRate,e.bandwidth/2,151);this.filter.setCoefficients(t)}demodulate(e,t,i){this.shifter.inPlace(e,t,-i);let[r,n]=this.downsampler.downsample(e,t),o=W(r,n);this.demodulator.demodulate(r,n,r),this.filter.inPlace(r);let a=W(r,r)*this.outRate/(this.mode.bandwidth*2);return this.agc.inPlace(r),{left:r,right:new Float32Array(r),stereo:!1,snr:a/o}}};var Vt=class{constructor(e,t,i){this.mode=i;this.interRate=Math.min(e,336e3),this.shifter=new Y(e),this.interRate!=e&&(this.downsampler=new ee(e,this.interRate,151));let a=O(this.interRate,75e3,151);this.filterI=new E(a),this.filterQ=new E(a),this.demodulator=new Ze(75e3/this.interRate),this.monoSampler=new yt(this.interRate,t,41),this.stereoSampler=new yt(this.interRate,t,41),this.stereoSeparator=new Nt(this.interRate,19e3),this.leftDeemph=new ft(t,50),this.rightDeemph=new ft(t,50)}getMode(){return this.mode}setMode(e){this.mode=e}demodulate(e,t,i){this.shifter.inPlace(e,t,-i);let[r,n]=this.downsampler?this.downsampler.downsample(e,t):[e,t],o=W(r,n);this.filterI.inPlace(r),this.filterQ.inPlace(n);let a=W(r,n)*this.interRate/15e4;this.demodulator.demodulate(r,n,r);let l=this.monoSampler.downsample(r),c=new Float32Array(l),d=!1;if(this.mode.stereo){let u=this.stereoSeparator.separate(r);if(u.found){d=!0;let g=this.stereoSampler.downsample(u.diff);for(let f=0;f<g.length;++f)c[f]-=g[f],l[f]+=g[f]}}return this.leftDeemph.inPlace(l),this.rightDeemph.inPlace(c),{left:l,right:c,stereo:d,snr:a/o}}};var Gt=class s{static{this.OUT_RATE=48e3}static{this.TIME_BUFFER=.05}constructor(){this.lastPlayedAt=-1,this.ac=void 0,this.gainNode=void 0,this.gain=0}play(e,t){(this.ac===void 0||this.gainNode===void 0)&&(this.ac=new AudioContext,this.gainNode=this.ac.createGain(),this.gainNode.gain.value=this.gain,this.gainNode.connect(this.ac.destination));let i=this.ac.createBuffer(2,e.length,s.OUT_RATE);i.getChannelData(0).set(e),i.getChannelData(1).set(t);let r=this.ac.createBufferSource();r.buffer=i,r.connect(this.gainNode),this.lastPlayedAt=Math.max(this.lastPlayedAt+e.length/s.OUT_RATE,this.ac.currentTime+s.TIME_BUFFER),r.start(this.lastPlayedAt)}setVolume(e){this.gain=e,this.gainNode!==void 0&&(this.gainNode.gain.value=e)}getVolume(){return this.gain}get sampleRate(){return this.ac?this.ac.sampleRate:48e3}};function Ee(s,e){let t=[];return s instanceof vt?t.push(...s.receivers):t.push(s),e instanceof vt?t.push(...e.receivers):t.push(e),new vt(t)}var vt=class{constructor(e){this.receivers=e}setSampleRate(e){for(let t of this.receivers)t.setSampleRate(e)}receiveSamples(e,t,i){for(let r of this.receivers)r.receiveSamples(e,t,i)}andThen(e){return Ee(this,e)}};var Zt=class extends EventTarget{constructor(t){super();this.inRate=t;this.player=new Gt,this.squelchControl=new ar(this.player.sampleRate),this.mode={scheme:"WBFM",stereo:!0},this.scheme=this.getScheme(this.mode),this.frequencyOffset=0,this.latestStereo=!1}setMode(t){this.scheme=this.getScheme(t,this.scheme),this.mode=t}getMode(){return this.mode}setFrequencyOffset(t){this.frequencyOffset=t}getFrequencyOffset(){return this.frequencyOffset}expectFrequencyAndSetOffset(t,i){this.expectingFrequency={center:t,offset:i}}setVolume(t){this.player.setVolume(t)}getVolume(){return this.player.getVolume()}getScheme(t,i){if(t.scheme==i?.getMode().scheme)return i.setMode(t),i;switch(t.scheme){case"AM":return new Ut(this.inRate,this.player.sampleRate,t);case"NBFM":return new jt(this.inRate,this.player.sampleRate,t);case"WBFM":return new Vt(this.inRate,this.player.sampleRate,t);case"LSB":case"USB":return new Ht(this.inRate,this.player.sampleRate,t);case"CW":return new Wt(this.inRate,this.player.sampleRate,t)}}setSampleRate(t){this.inRate=t,this.scheme=this.getScheme(this.mode,void 0)}receiveSamples(t,i,r){this.expectingFrequency?.center===r&&(this.frequencyOffset=this.expectingFrequency.offset,this.expectingFrequency=void 0);let{left:n,right:o,stereo:a,snr:l}=this.scheme.demodulate(t,i,this.frequencyOffset);this.squelchControl.applySquelch(this.mode,n,o,l),this.player.play(n,o),a!=this.latestStereo&&(this.dispatchEvent(new or(a)),this.latestStereo=a)}andThen(t){return Ee(this,t)}addEventListener(t,i,r){super.addEventListener(t,i,r)}},or=class extends CustomEvent{constructor(e){super("stereo-status",{detail:e,bubbles:!0,composed:!0})}},ar=class{constructor(e){this.sampleRate=e;this.countdown=0}applySquelch(e,t,i,r){if(!(e.scheme=="WBFM"||e.scheme=="CW")){if(e.squelch<r){this.countdown=.1*this.sampleRate;return}if(this.countdown>0){this.countdown-=t.length;return}t.fill(0),i.fill(0)}}};var lr=class extends Event{constructor(){super("sample-click")}},Qt=class extends EventTarget{constructor(t,i){super();this.sampleRate=t;this.clicksPerSecond=i;this.samplesPerClick=this.getSamplesPerClick(),this.countedSamples=0}getSamplesPerClick(){return this.clicksPerSecond===void 0?void 0:Math.floor(this.sampleRate/this.clicksPerSecond)}setSampleRate(t){this.sampleRate=t,this.samplesPerClick=this.getSamplesPerClick()}receiveSamples(t,i){this.countedSamples+=t.length,!(this.samplesPerClick===void 0||this.samplesPerClick>this.countedSamples)&&(this.countedSamples%=this.samplesPerClick,this.dispatchEvent(new lr))}andThen(t){return Ee(this,t)}addEventListener(t,i,r){super.addEventListener(t,i,r)}};function Rn(s){if(s<2)return 0;if(!(s-1&s))return s;let e=1;for(;e<s;)e<<=1;return e}var wt=class s{constructor(e){this.length=e;this.revIndex=Cn(e);let[t,i]=Fn(e);this.fwd=t,this.bwd=i,this.copy=new _e(2,e),this.out=new _e(2,e),this.window=new Float32Array(e),this.window.fill(1)}static ofLength(e){return new s(Rn(e))}setWindow(e){this.window.set(e)}transform(e,t){let i=this.length,[r,n]=this.out.get(i);r.fill(0),n.fill(0);for(let o=0;o<i&&o<e.length&&o<t.length;++o){let a=this.revIndex[o];r[a]=this.window[o]*e[o]/i,n[a]=this.window[o]*t[o]/i}return vs(this.length,this.fwd,r,n),{real:r,imag:n}}transformCircularBuffers(e,t){let i=this.length,[r,n]=this.copy.get(i);return e.copyTo(r),t.copyTo(n),this.transform(r,n)}reverse(e,t){let i=this.length,[r,n]=this.out.get(i);r.fill(0),n.fill(0);for(let o=0;o<i&&o<e.length&&o<t.length;++o){let a=this.revIndex[o];r[a]=this.window[o]*e[o]/i,n[a]=this.window[o]*t[o]/i}return vs(this.length,this.bwd,r,n),{real:r,imag:n}}};function vs(s,e,t,i){for(let r=2,n=0;r<=s;r*=2,++n){let o=e[n],a=r/2;for(let l=0;l<s;l+=r)for(let c=0;c<a;++c){let d=l+c,u=d+a,g=t[d],f=i[d],A=o.real[c],H=o.imag[c],Mr=t[u],Rr=i[u],Fr=A*Mr-H*Rr,Cr=A*Rr+H*Mr;t[d]=g+Fr,i[d]=f+Cr,t[u]=g-Fr,i[u]=f-Cr}}}function Fn(s){let e=ws(s),t=[],i=[];for(let r=0,n=1;r<e;++r,n*=2){t.push({real:new Float32Array(n),imag:new Float32Array(n)}),i.push({real:new Float32Array(n),imag:new Float32Array(n)});for(let o=0;o<n;++o){let a=-1*Math.PI*o/n;t[r].real[o]=Math.cos(a),t[r].imag[o]=Math.sin(a);let l=Math.PI*o/n;i[r].real[o]=Math.cos(l),i[r].imag[o]=Math.sin(l)}}return[t,i]}function Cn(s){let e=ws(s),t=new Int32Array(s);for(let i=0;i<s;++i)t[i]=$n(i,e);return t}function ws(s){let e=0;for(let t=s-1;t>0;t>>=1)++e;return e}function $n(s,e){let t=0;for(let i=0;i<e;++i)t<<=1,t|=s&1,s>>=1;return t}var Xt=class{constructor(e){e===void 0?e=2048:e=Math.max(32,Math.min(131072,e)),this.I=new mt(131072),this.Q=new mt(131072),this.fft=wt.ofLength(e),this.fft.setWindow(rr(this.fft.length)),this.lastOutput=new Float32Array(this.fft.length),this.dirty=!0}set size(e){this.fft=wt.ofLength(e),this.fft.setWindow(rr(this.fft.length)),this.lastOutput=new Float32Array(this.fft.length),this.dirty=!0}get size(){return this.fft.length}setSampleRate(e){}receiveSamples(e,t,i){this.I.store(e),this.Q.store(t),this.lastFrequency=i,this.dirty=!0}andThen(e){return Ee(this,e)}frequency(){return this.lastFrequency}getSpectrum(e){if(this.dirty){let t=this.fft.transformCircularBuffers(this.I,this.Q);this.lastOutput.fill(-1/0);for(let i=0;i<this.lastOutput.length;++i)this.lastOutput[i]=10*Math.log10(t.real[i]*t.real[i]+t.imag[i]*t.imag[i]);this.dirty=!1}e.set(this.lastOutput.subarray(0,e.length))}};var B=class extends Error{constructor(e,t,i){super(e,i!==void 0?i:typeof t=="object"?t:void 0),typeof t=="number"&&(this.type=t,this.name=`RadioError.${Be[t]}`)}},Be=(o=>(o[o.NoUsbSupport=0]="NoUsbSupport",o[o.NoDeviceSelected=1]="NoDeviceSelected",o[o.UnsupportedDevice=2]="UnsupportedDevice",o[o.UsbTransferError=3]="UsbTransferError",o[o.TunerError=4]="TunerError",o[o.DemodulationError=5]="DemodulationError",o))(Be||{});var Yt=class{constructor(e){this.buffer=new _e(4,e)}convert(e){let t=new Uint8Array(e),i=t.length/2,r=this.buffer.get(i),n=r[0],o=r[1];for(let a=0;a<i;++a)n[a]=t[2*a]/128-.995,o[a]=t[2*a+1]/128-.995;return r}};var Kt=class{constructor(){this.msgQueue=[],this.notifyQueue=[]}send(e){let t=this.notifyQueue.shift();t!==void 0?t(e):this.msgQueue.push(e)}receive(){let e=this.msgQueue.shift();return e!==void 0?Promise.resolve(e):new Promise(t=>this.notifyQueue.push(t))}};var Pe=class extends CustomEvent{constructor(e){super("radio",{detail:e})}};var Jt=class extends EventTarget{constructor(t,i,r){super();this.rtlProvider=t;this.sampleReceiver=i;this.sampleRate=r;this.state=0,this.channel=new Kt,this.frequencyCorrection=0,this.gain=null,this.frequency=885e5,this.directSamplingMethod=0,this.biasTeeEnabled=!1,this.runLoop()}start(){this.channel.send({type:"start"})}stop(){this.channel.send({type:"stop"})}isPlaying(){return this.state!=0}setFrequency(t){this.channel.send({type:"frequency",value:t})}getFrequency(){return this.frequency}setFrequencyCorrection(t){this.channel.send({type:"frequencyCorrection",value:t})}getFrequencyCorrection(){return this.frequencyCorrection}setGain(t){this.channel.send({type:"gain",value:t})}getGain(){return this.gain}setDirectSamplingMethod(t){this.channel.send({type:"directSamplingMethod",value:t})}getDirectSamplingMethod(){return this.directSamplingMethod}setSampleRate(t){this.sampleRate=t}getSampleRate(){return this.sampleRate}enableBiasTee(t){this.channel.send({type:"biasTeeEnabled",value:t})}isBiasTeeEnabled(){return this.biasTeeEnabled}async runLoop(){let t,i;for(;;){let r=await this.channel.receive();try{switch(this.state){case 0:{if(r.type=="frequency"&&(this.frequency=r.value),r.type=="frequencyCorrection"&&(this.frequencyCorrection=r.value),r.type=="gain"&&(this.gain=r.value),r.type=="directSamplingMethod"&&(this.directSamplingMethod=r.value),r.type=="biasTeeEnabled"&&(this.biasTeeEnabled=r.value),r.type!="start")continue;i=await this.rtlProvider.get(),await i.setSampleRate(this.sampleRate),await i.setFrequencyCorrection(this.frequencyCorrection),await i.setGain(this.gain),await i.setDirectSamplingMethod(this.directSamplingMethod),await i.setCenterFrequency(this.frequency),await i.resetBuffer(),t=new hr(i,this.sampleReceiver,this,this.sampleRate),t.startStream(),this.state=1,this.dispatchEvent(new Pe({type:"started"}));break}case 1:{switch(r.type){case"frequency":this.frequency!=r.value&&(this.frequency=r.value,await i.setCenterFrequency(this.frequency));break;case"gain":this.gain!=r.value&&(this.gain=r.value,await i.setGain(this.gain));break;case"frequencyCorrection":this.frequencyCorrection!=r.value&&(this.frequencyCorrection=r.value,await i.setFrequencyCorrection(this.frequencyCorrection));break;case"directSamplingMethod":this.directSamplingMethod!=r.value&&(this.directSamplingMethod=r.value,await i.setDirectSamplingMethod(this.directSamplingMethod));break;case"biasTeeEnabled":this.biasTeeEnabled!=r.value&&(this.biasTeeEnabled=r.value,await i.enableBiasTee(this.biasTeeEnabled));break;case"stop":await t.stopStream(),await i.close(),this.state=0,this.dispatchEvent(new Pe({type:"stopped"}));break;default:}break}}}catch(n){this.dispatchEvent(new Pe({type:"error",exception:n}))}}}addEventListener(t,i,r){super.addEventListener(t,i,r)}},hr=class s{constructor(e,t,i,r){this.rtl=e;this.sampleReceiver=t;this.radio=i;this.sampleRate=r;this.samplesPerBuf=512*Math.ceil(r/s.BUFS_PER_SEC/512),this.buffersWanted=0,this.buffersRunning=0,this.iqConverter=new Yt(this.samplesPerBuf),this.directSampling=!1,this.stopCallback=s.nilCallback}static{this.BUFS_PER_SEC=20}static{this.PARALLEL_BUFFERS=2}async startStream(){for(this.sampleReceiver.setSampleRate(this.sampleRate),await this.rtl.resetBuffer(),this.buffersWanted=s.PARALLEL_BUFFERS;this.buffersRunning<this.buffersWanted;)++this.buffersRunning,this.readStream()}async stopStream(){if(this.buffersRunning==0&&this.buffersWanted==0)return;let e=new Promise(t=>{this.stopCallback=t});return this.buffersWanted=0,e}async readStream(){try{for(;this.buffersRunning<=this.buffersWanted;){let e=await this.rtl.readSamples(this.samplesPerBuf),[t,i]=this.iqConverter.convert(e.data);this.sampleReceiver.receiveSamples(t,i,e.frequency),this.directSampling!=e.directSampling&&(this.directSampling=e.directSampling,this.radio.dispatchEvent(new Pe({type:"directSampling",active:this.directSampling})))}}catch(e){let t=new B("Sample transfer was interrupted. Did you unplug your device?",3,{cause:e}),i=new Pe({type:"error",exception:t});this.radio.dispatchEvent(i)}--this.buffersRunning,this.buffersRunning==0&&(this.stopCallback(),this.stopCallback=s.nilCallback)}static nilCallback(){}};var ei=class{constructor(e){this.generators=e}async get(){return new cr(this.generators)}},cr=class{constructor(e){this.generators=e;this.sampleRate=1024e3,this.ppm=0,this.gain=null,this.centerFrequency=1e8,this.directSamplingMode=!1,this.u8Buffer=new It(4),this.realBuffer=new ie(4),this.timeBase=void 0,this.nextSample=0,this.queue=[],this.raf=0}async setSampleRate(e){return this.sampleRate=e,e}async setFrequencyCorrection(e){this.ppm=e}getFrequencyCorrection(){return this.ppm}async setGain(e){this.gain=e}getGain(){return this.gain}async setCenterFrequency(e){return this.centerFrequency=e,e}async enableDirectSampling(e){this.directSamplingMode=e}isDirectSamplingEnabled(){return this.directSamplingMode}async resetBuffer(){this.raf!==void 0&&(cancelAnimationFrame(this.raf),this.raf=0);for(let e of this.queue)e.reject();this.queue=[],this.timeBase=void 0,this.nextSample=0}async readSamples(e){let t=this.centerFrequency,i=this.nextSample;this.nextSample+=e/2;let r=await this.addToQueue(i,e);return{frequency:t,data:r,directSampling:!1}}async addToQueue(e,t){let{promise:i,resolve:r,reject:n}=Promise.withResolvers();return this.queue.push({sample:e,byteLength:t,resolve:r,reject:n}),this.raf===0&&(this.raf=requestAnimationFrame(o=>this.processQueue(o))),i}processQueue(e){this.timeBase===void 0&&(this.timeBase=e);let t=Math.floor(this.sampleRate*(e-this.timeBase)/1e3);for(;this.queue.length>0&&this.queue[0].sample<=t;){let i=this.queue.shift();i.resolve(this.generateSamples(i.sample,i.byteLength))}this.queue.length===0?this.raf=0:this.raf=requestAnimationFrame(i=>this.processQueue(i))}generateSamples(e,t){let i=this.realBuffer.get(t).fill(0);for(let n of this.generators)n.generateSamples(e,this.sampleRate,this.centerFrequency,i);let r=this.u8Buffer.get(t);for(let n=0;n<t;++n)r[n]=Math.floor((i[n]+1)*127.5);return r.buffer}async close(){this.resetBuffer()}};function Dn(s){return Math.pow(10,s/20)}var Qe=class{constructor(e){this.size=Dn(e)}},ti=class extends Qe{constructor(e){super(e)}generateSamples(e,t,i,r){for(let n=0;n<r.length;n+=2){let o=2*Math.PI*Math.random(),a=Math.random()+Math.random(),l=a>1?2-a:a;r[n]+=Math.cos(o)*l*this.size,r[n+1]+=Math.sin(o)*l*this.size}}},Xe=class extends Qe{constructor(t,i){super(t);this.freq=i;this.freq=i}generateSamples(t,i,r,n){let o=this.freq-r;if(o<-i/2||o>i/2)return;let a=2*Math.PI*o/i;for(let l=0;l<n.length;l+=2){let c=t+l/2;n[l]+=Math.cos(a*c)*this.size,n[l+1]+=Math.sin(a*c)*this.size}}},ii=class extends Qe{constructor(t,i,r){super(t);this.freq=i;this.gen=r}generateSamples(t,i,r,n){let o=this.freq-r;if(o<-i/2||o>i/2)return;let a=2*Math.PI*o/i,l=new Float32Array(n.length);this.gen.generateSamples(t,i,0,l);for(let c=0;c<n.length;c+=2){let d=t+c/2;n[c]+=(1+l[c]/2)*Math.cos(a*d)*this.size,n[c+1]+=(1+l[c]/2)*Math.sin(a*d)*this.size}}},ri=class extends Qe{constructor(t,i,r,n){super(t);this.freq=i;this.maxDev=r;this.gen=n;this.phase=0}generateSamples(t,i,r,n){let o=this.freq-r;if(o<-i/2||o>i/2)return;let a=2*Math.PI*o/i,l=2*Math.PI*this.maxDev/i,c=this.phase,d=new Float32Array(n.length);this.gen.generateSamples(t,i,0,d);for(let u=0;u<n.length;u+=2){for(c+=a+l*d[u];c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;n[u]+=Math.cos(c)*this.size,n[u+1]+=Math.sin(c)*this.size}this.phase=c}};var si=[[0,8,2,223],[50,8,2,190],[55,8,2,139],[60,8,2,123],[65,8,2,105],[70,8,2,88],[75,0,2,68],[90,0,2,52],[110,0,2,36],[140,0,2,20],[180,0,2,19],[250,0,2,17],[280,0,2,0],[310,0,65,0],[588,0,64,0]],we=class s{constructor(e,t,i,r){this.com=e;this.i2c=t;this.muxCfgs=i;this.vcoPowerRef=r;this.xtalFreq=s.XTAL_FREQ,this.hasPllLock=!1,this.shadowRegs=new Uint8Array}static{this.XTAL_FREQ=288e5}static{this.REGISTERS=[131,50,117,192,64,214,108,245,99,117,104,108,131,128,0,15,0,192,48,72,204,96,0,84,174,74,192]}static{this.BIT_REVS=[0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]}static{this.IF_FREQ=357e4}static async check(e,t){await e.openI2C();let i=!1;try{i=await e.getI2CReg(t,0)==105}catch{}return await e.closeI2C(),i}async setFrequency(e){return await this._setMux(e+s.IF_FREQ),await this._setPll(e+s.IF_FREQ)-s.IF_FREQ}async open(){await this.com.setDemodReg(1,177,26,1),await this.com.setDemodReg(0,8,77,1),await this.com.setDemodReg(1,21,1,1),await this.com.openI2C(),this.shadowRegs=new Uint8Array(s.REGISTERS);for(let e=0;e<this.shadowRegs.length;++e)await this.com.setI2CReg(this.i2c,e+5,this.shadowRegs[e]);await this._initElectronics(),await this.com.closeI2C()}async close(){await this._writeRegMask(6,177,255),await this._writeRegMask(5,179,255),await this._writeRegMask(7,58,255),await this._writeRegMask(8,64,255),await this._writeRegMask(9,192,255),await this._writeRegMask(10,58,255),await this._writeRegMask(12,53,255),await this._writeRegMask(15,104,255),await this._writeRegMask(17,3,255),await this._writeRegMask(23,244,255),await this._writeRegMask(25,12,255)}async setAutoGain(){await this._writeRegMask(5,0,16),await this._writeRegMask(7,16,16),await this._writeRegMask(12,11,159)}async setManualGain(e){let t=Math.floor(e/3.5),i=e-3.5*t>=2.3?1:0;t<0&&(t=0),t>15&&(t=15),t==15&&(i=0);let r=t+i,n=t;await this._writeRegMask(5,16,16),await this._writeRegMask(7,0,16),await this._writeRegMask(12,8,159),await this._writeRegMask(5,r,15),await this._writeRegMask(7,n,15)}setXtalFrequency(e){this.xtalFreq=e}getIntermediateFrequency(){return s.IF_FREQ}getMinimumFrequency(){return s.XTAL_FREQ}async _calibrateFilter(){let e=!0;for(;;){if(await this._writeRegMask(11,96,96),await this._writeRegMask(15,4,4),await this._writeRegMask(16,0,3),await this._setPll(56e6),!this.hasPllLock)throw new B("PLL not locked -- cannot tune to the selected frequency.",4);await this._writeRegMask(11,16,16),await this._writeRegMask(11,0,16),await this._writeRegMask(15,0,4);let t=await this._readRegBuffer(0,5),r=new Uint8Array(t)[4]&15;if(r==15&&(r=0),r==0||!e)return r;e=!1}}async _setMux(e){let t=e/1e6,i;for(i=0;i<this.muxCfgs.length-1&&!(t<this.muxCfgs[i+1][0]);++i);let r=this.muxCfgs[i];await this._writeRegMask(23,r[1],8),await this._writeRegMask(26,r[2],195),await this._writeRegMask(27,r[3],255),await this._writeRegMask(16,0,11),await this._writeRegMask(8,0,63),await this._writeRegMask(9,0,63)}async _setPll(e){let t=Math.floor(this.xtalFreq);await this._writeRegMask(16,0,16),await this._writeRegMask(26,0,12),await this._writeRegMask(18,128,224);let i=Math.min(6,Math.floor(Math.log(177e7/e)/Math.LN2)),r=1<<i+1,n=await this._readRegBuffer(0,5),a=(new Uint8Array(n)[4]&48)>>4;a>this.vcoPowerRef?--i:a<this.vcoPowerRef&&++i,await this._writeRegMask(16,i<<5,224);let l=e*r,c=Math.floor(l/(2*t)),d=l%(2*t);if(c>63)return this.hasPllLock=!1,0;let u=Math.floor((c-13)/4),g=(c-13)%4;await this._writeRegMask(20,u+(g<<6),255),await this._writeRegMask(18,d==0?8:0,8);let f=Math.min(65535,Math.floor(32768*d/t));return await this._writeRegMask(22,f>>8,255),await this._writeRegMask(21,f&255,255),await this._getPllLock(),await this._writeRegMask(26,8,8),2*t*(c+f/65536)/r}async _getPllLock(){let e=!0;for(;;){let t=await this._readRegBuffer(0,3);if(new Uint8Array(t)[2]&64){this.hasPllLock=!0;return}if(!e){this.hasPllLock=!0;return}await this._writeRegMask(18,96,224),e=!1}}async _initElectronics(){await this._writeRegMask(12,0,15),await this._writeRegMask(19,49,63),await this._writeRegMask(29,0,56);let e=await this._calibrateFilter();await this._writeRegMask(10,16|e,31),await this._writeRegMask(11,107,239),await this._writeRegMask(7,0,128),await this._writeRegMask(6,16,48),await this._writeRegMask(30,64,96),await this._writeRegMask(5,0,128),await this._writeRegMask(31,0,128),await this._writeRegMask(15,0,128),await this._writeRegMask(25,96,96),await this._writeRegMask(29,229,199),await this._writeRegMask(28,36,248),await this._writeRegMask(13,83,255),await this._writeRegMask(14,117,255),await this._writeRegMask(5,0,96),await this._writeRegMask(6,0,8),await this._writeRegMask(17,56,8),await this._writeRegMask(23,48,48),await this._writeRegMask(10,64,96),await this._writeRegMask(29,0,56),await this._writeRegMask(28,0,4),await this._writeRegMask(6,0,64),await this._writeRegMask(26,48,48),await this._writeRegMask(29,24,56),await this._writeRegMask(28,36,4),await this._writeRegMask(30,13,31),await this._writeRegMask(26,32,48)}async _readRegBuffer(e,t){let i=await this.com.getI2CRegBuffer(this.i2c,e,t),r=new Uint8Array(i);for(let n=0;n<r.length;++n){let o=r[n];r[n]=s.BIT_REVS[o&15]<<4|s.BIT_REVS[o>>4]}return r.buffer}async _writeRegMask(e,t,i){let n=this.shadowRegs[e-5]&~i|t&i;this.shadowRegs[e-5]=n,await this.com.setI2CReg(this.i2c,e,n)}};var ni=class s extends we{static async maybeInit(e){if(!await we.check(e,52))return null;let i=new s(e);return await i.open(),i}constructor(e){super(e,52,si,2)}};var oi=class s extends we{constructor(t,i){super(t,116,i?An:si,1);this.isRtlSdrBlogV4=i;this.input=0}static async maybeInit(t){if(!we.check(t,116))return null;let{manufacturer:r,model:n}=t.getBranding(),o=r=="RTLSDRBlog"&&n=="Blog V4",a=new s(t,o);return await a.open(),a}async setFrequency(t){let i=0;this.isRtlSdrBlogV4&&t<288e5&&(i=288e5);let r=await super.setFrequency(t+i);if(this.isRtlSdrBlogV4){let n=t<=288e5?2:t<25e7?1:0;this.input!=n&&(this.input=n,n==0?(await this._writeRegMask(6,0,8),await this._writeRegMask(5,0,96)):n==1?(await this._writeRegMask(6,0,8),await this._writeRegMask(5,96,96)):(await this._writeRegMask(6,8,8),await this._writeRegMask(5,32,96)),await this.com.setGpioOutput(5),await this.com.setGpioBit(5,n==2?0:1))}else{let n=t>345e6?0:1;this.input!=n&&(this.input=n,await this._writeRegMask(5,n==0?0:96,96))}return r-i}getMinimumFrequency(){return this.isRtlSdrBlogV4?0:super.getMinimumFrequency()}},An=[[0,0,2,223],[2.2,8,2,223],[50,8,2,190],[55,8,2,139],[60,8,2,123],[65,8,2,105],[70,8,2,88],[75,8,2,68],[85,0,2,68],[90,0,2,52],[110,0,2,36],[112,8,2,36],[140,8,2,20],[172,0,2,20],[180,0,2,19],[242,8,2,19],[250,8,2,17],[280,8,2,0],[310,8,65,0],[588,8,64,0]];var ai=class s{constructor(e){this.device=e}static{this.WRITE_FLAG=16}async claimInterface(){try{await this.device.claimInterface(0)}catch(e){throw new B("Could not connect to the RTL-SDR stick. Are you using it in another application?",3,{cause:e})}}async releaseInterface(){await this.device.releaseInterface(0)}getBranding(){return{manufacturer:this.device.manufacturerName,model:this.device.productName}}async setUsbReg(e,t,i){await this._setReg(256,e,t,i)}async setSysReg(e,t){await this._setReg(512,e,t,1)}async getSysReg(e){return this._getReg(512,e,1)}async setDemodReg(e,t,i,r){return await this._setRegBuffer(e,t<<8|32,this._numberToBuffer(i,r,!0)),this._getReg(10,288,1)}async getI2CReg(e,t){return await this._setRegBuffer(1536,e,new Uint8Array([t]).buffer),this._getReg(1536,e,1)}async setI2CReg(e,t,i){await this._setRegBuffer(1536,e,new Uint8Array([t,i]).buffer)}async getI2CRegBuffer(e,t,i){return await this._setRegBuffer(1536,e,new Uint8Array([t]).buffer),this._getRegBuffer(1536,e,i)}async setGpioOutput(e){e=1<<e;let t=await this.getSysReg(12292);await this.setSysReg(12292,t&~e),t=await this.getSysReg(12291),await this.setSysReg(12291,t|e)}async setGpioBit(e,t){e=1<<e;let i=await this.getSysReg(12289);i=t?i|e:i&~e,await this.setSysReg(12289,i)}async getSamples(e){let t=await this.device.transferIn(1,e);if(t.status=="ok")return t.data.buffer;if(t.status=="stall")return await this.device.clearHalt("in",1),new ArrayBuffer(e);throw new B(`USB bulk read failed length 0x${e.toString(16)} status=${t.status}`,3)}async openI2C(){await this.setDemodReg(1,1,24,1)}async closeI2C(){await this.setDemodReg(1,1,16,1)}async close(){await this.device.close()}async _setReg(e,t,i,r){try{await this._writeCtrlMsg(t,e|s.WRITE_FLAG,this._numberToBuffer(i,r))}catch(n){throw new B(`setReg failed block=0x${e.toString(16)} reg=${t.toString(16)} value=${i.toString(16)} length=${r}`,3,{cause:n})}}async _getReg(e,t,i){try{return this._bufferToNumber(await this._readCtrlMsg(t,e,i))}catch(r){throw new B(`getReg failed block=0x${e.toString(16)} reg=${t.toString(16)} length=${i}`,3,{cause:r})}}async _setRegBuffer(e,t,i){try{await this._writeCtrlMsg(t,e|s.WRITE_FLAG,i)}catch(r){throw new B(`setRegBuffer failed block=0x${e.toString(16)} reg=${t.toString(16)}`,3,{cause:r})}}async _getRegBuffer(e,t,i){try{return this._readCtrlMsg(t,e,i)}catch(r){throw new B(`getRegBuffer failed block=0x${e.toString(16)} reg=${t.toString(16)} length=${i}`,3,{cause:r})}}_bufferToNumber(e){let t=e.byteLength,i=new DataView(e);if(t==0)return 0;if(t==1)return i.getUint8(0);if(t==2)return i.getUint16(0,!0);if(t==4)return i.getUint32(0,!0);throw new B(`Cannot parse ${t}-byte number`,3)}_numberToBuffer(e,t,i){let r=new ArrayBuffer(t),n=new DataView(r);if(t==1)n.setUint8(0,e);else if(t==2)n.setUint16(0,e,!i);else if(t==4)n.setUint32(0,e,!i);else throw new B(`Cannot write ${t}-byte number`,3);return r}async _readCtrlMsg(e,t,i){let r={requestType:"vendor",recipient:"device",request:0,value:e,index:t},n=await this.device.controlTransferIn(r,Math.max(8,i));if(n.status=="ok")return n.data.buffer.slice(0,i);throw new B(`USB read failed value=0x${e.toString(16)} index=0x${t.toString(16)} status=${n.status}`,3)}async _writeCtrlMsg(e,t,i){let r={requestType:"vendor",recipient:"device",request:0,value:e,index:t},n=await this.device.controlTransferOut(r,i);if(n.status!="ok")throw new B(`USB write failed value=0x${e.toString(16)} index=0x${t.toString(16)} status=${n.status}`,3)}};var qn=[{vendorId:3034,productId:10290},{vendorId:3034,productId:10296}],li=class{constructor(){this.device=void 0}async get(){return this.device===void 0&&(this.device=await this.getDevice()),await this.device.open(),dr.open(this.device)}async getDevice(){if(navigator.usb===void 0)throw new B("This browser does not support the HTML5 USB API",0);try{return navigator.usb.requestDevice({filters:qn})}catch(e){throw new B("No device was selected",1,{cause:e})}}},dr=class s{constructor(e,t){this.com=e;this.tuner=t;this.centerFrequency=0,this.ppm=0,this.gain=null,this.directSamplingMethod=0,this.directSampling=0,this.biasTeeEnabled=!1}static{this.XTAL_FREQ=288e5}static{this.BYTES_PER_SAMPLE=2}static async open(e){let t=new ai(e);await t.claimInterface(),await s._init(t);let i=await s._findTuner(t),r=new s(t,i);return await r.setGain(r.gain),await r.setFrequencyCorrection(r.ppm),r}static async _init(e){await e.setUsbReg(8192,9,1),await e.setUsbReg(8536,512,2),await e.setUsbReg(8520,528,2),await e.setSysReg(12299,34),await e.setSysReg(12288,232),await e.setDemodReg(1,1,20,1),await e.setDemodReg(1,1,16,1),await e.setDemodReg(1,21,0,1),await e.setDemodReg(1,22,0,1),await e.setDemodReg(1,23,0,1),await e.setDemodReg(1,24,0,1),await e.setDemodReg(1,25,0,1),await e.setDemodReg(1,26,0,1),await e.setDemodReg(1,27,0,1),await e.setDemodReg(1,28,202,1),await e.setDemodReg(1,29,220,1),await e.setDemodReg(1,30,215,1),await e.setDemodReg(1,31,216,1),await e.setDemodReg(1,32,224,1),await e.setDemodReg(1,33,242,1),await e.setDemodReg(1,34,14,1),await e.setDemodReg(1,35,53,1),await e.setDemodReg(1,36,6,1),await e.setDemodReg(1,37,80,1),await e.setDemodReg(1,38,156,1),await e.setDemodReg(1,39,13,1),await e.setDemodReg(1,40,113,1),await e.setDemodReg(1,41,17,1),await e.setDemodReg(1,42,20,1),await e.setDemodReg(1,43,113,1),await e.setDemodReg(1,44,116,1),await e.setDemodReg(1,45,25,1),await e.setDemodReg(1,46,65,1),await e.setDemodReg(1,47,165,1),await e.setDemodReg(0,25,5,1),await e.setDemodReg(1,147,240,1),await e.setDemodReg(1,148,15,1),await e.setDemodReg(1,17,0,1),await e.setDemodReg(1,4,0,1),await e.setDemodReg(0,97,96,1),await e.setDemodReg(0,6,128,1),await e.setDemodReg(1,177,27,1),await e.setDemodReg(0,13,131,1)}static async _findTuner(e){let t=await ni.maybeInit(e);if(t===null&&(t=await oi.maybeInit(e)),t===null)throw await e.releaseInterface(),new B("Sorry, your USB dongle has an unsupported tuner chip.",2);return t}async setSampleRate(e){let t=Math.floor(this._getXtalFrequency()*4194304/e);t&=268435452;let i=Math.floor(this._getXtalFrequency()*(1<<22)/t);return await this.com.setDemodReg(1,159,t>>16&65535,2),await this.com.setDemodReg(1,161,t&65535,2),await this._resetDemodulator(),i}async setFrequencyCorrection(e){this.ppm=e;let t=-1*Math.floor(this.ppm*(1<<24)/1e6);await this.com.setDemodReg(1,62,t>>8&63,1),await this.com.setDemodReg(1,63,t&255,1);let i=this._getXtalFrequency();this.tuner.setXtalFrequency(i);let r=this.tuner.getIntermediateFrequency();r!=0&&await this._setIfFrequency(r),this.centerFrequency!=0&&await this.setCenterFrequency(this.centerFrequency)}async _setIfFrequency(e){let t=this._getXtalFrequency(),i=-1*Math.floor(e*(1<<22)/t);return await this.com.setDemodReg(1,25,i>>16&63,1),await this.com.setDemodReg(1,26,i>>8&255,1),await this.com.setDemodReg(1,27,i&255,1),Math.floor(-1*i*t/(1<<22))}getFrequencyCorrection(){return this.ppm}async setGain(e){this.gain=e,await this.com.openI2C(),this.directSampling?this._enableRtlAgc(e==null):this.gain===null?await this.tuner.setAutoGain():await this.tuner.setManualGain(this.gain),await this.com.closeI2C()}getGain(){return this.gain}async enableBiasTee(e){this.biasTeeEnabled=e,await this.com.setGpioOutput(0),await this.com.setGpioBit(0,e?1:0)}isBiasTeeEnabled(){return this.biasTeeEnabled}async _enableRtlAgc(e){await this.com.setDemodReg(0,25,e?37:5,1)}_getXtalFrequency(){return Math.floor(s.XTAL_FREQ*(1+this.ppm/1e6))}async _resetDemodulator(){await this.com.setDemodReg(1,1,20,1),await this.com.setDemodReg(1,1,16,1)}async setCenterFrequency(e){await this._maybeSetDirectSampling(e);let t;return this.directSampling?t=this._setIfFrequency(e):(await this.com.openI2C(),t=await this.tuner.setFrequency(e),await this.com.closeI2C()),this.centerFrequency=e,t}async setDirectSamplingMethod(e){this.directSamplingMethod!=e&&(this.directSamplingMethod=e,this.centerFrequency!=0&&await this.setCenterFrequency(this.centerFrequency))}getDirectSamplingMethod(){return this.directSamplingMethod}async _maybeSetDirectSampling(e){let i=e<this.tuner.getMinimumFrequency()?this.directSamplingMethod:0;if(this.directSampling==i)return;let r=this.directSampling==0,n=i!=0;if(this.directSampling=i,n){r&&(await this.com.openI2C(),await this.tuner.close(),await this.com.closeI2C()),await this.com.setDemodReg(1,177,26,1),await this.com.setDemodReg(1,21,0,1);let o=i==1?128:144;await this.com.setDemodReg(0,6,o,1),await this._enableRtlAgc(!0)}else{await this.com.openI2C(),await this.tuner.open(),await this.com.closeI2C();let o=this.tuner.getIntermediateFrequency();o!=0&&await this._setIfFrequency(o),await this.com.setDemodReg(1,21,1,1),await this.com.setDemodReg(0,6,128,1),await this._enableRtlAgc(!1),await this.setGain(this.getGain())}}async resetBuffer(){await this.com.setUsbReg(8520,528,2),await this.com.setUsbReg(8520,0,2)}async readSamples(e){let t=await this.com.getSamples(e*s.BYTES_PER_SAMPLE),i=this.centerFrequency,r=this.directSampling!=0;return{frequency:i,directSampling:r,data:t}}async close(){await this.com.openI2C(),await this.tuner.close(),await this.com.closeI2C(),await this.com.releaseInterface(),await this.com.close()}};var Ye=class extends CustomEvent{constructor(e){super("spectrum-tap",{detail:e,bubbles:!0,composed:!0})}},Te=class extends CustomEvent{constructor(e){super("spectrum-drag",{detail:e,bubbles:!0,composed:!0})}},hi=class extends CustomEvent{constructor(e){super("spectrum-highlight-changed",{detail:e,bubbles:!0,composed:!0})}},ze=class extends CustomEvent{constructor(e){super("spectrum-zoom",{detail:e,bubbles:!0,composed:!0})}},xt=class extends CustomEvent{constructor(e){super("spectrum-decibel-range-changed",{detail:e,bubbles:!0,composed:!0})}};var Z=class{constructor(e,t,i,r,n){this.width=t;this.bins=i;this.centerFreq=r;this.bandwidth=n;this.leftBin=Math.floor(e.leftFraction*i),this.visibleBins=Math.floor(e.spanFraction*i),this.leftFrequency=this.binNumberToFrequency(this.leftBin-.5),this.rightFrequency=this.binNumberToFrequency(this.leftBin+this.visibleBins-.5)}zoomed(e){return(e*this.bins-this.leftBin+.5)/this.visibleBins}unzoomed(e){return(this.leftBin+this.visibleBins*e-.5)/this.bins}screenBinToFftBin(e){return(e+this.bins/2)%this.bins}leftCoordToBinNumber(e){return Math.round(this.leftBin+e*this.visibleBins/this.width)}binNumberToCenterCoord(e){return this.width*(e+.5-this.leftBin)/this.visibleBins}binNumberToFrequency(e){return this.centerFreq&&this.bandwidth?this.centerFreq+this.bandwidth*(e/this.bins-.5):this.centerFreq||0}};var Ss=1,Ms=16,S=class s{constructor(e,t){e===void 0&&(e=1),t===void 0&&(t=.5),e<Ss&&(e=Ss),e>Ms&&(e=Ms);let i=1/(2*e);t-i<0&&(t=i),t+i>1&&(t=1-i),this.center=t,this.level=e}zoomed(e){return .5+this.level*(e-this.center)}unzoomed(e){return this.center+(e-.5)/this.level}get leftFraction(){return this.center-1/(2*this.level)}get rightFraction(){return this.center+1/(2*this.level)}get spanFraction(){return 1/this.level}isVisible(e){let t=this.zoomed(e);return 0<=t&&t<1}withCenter(e){return new s(this.level,e)}withMovedCenter(e){return this.withCenter(this.center+e)}withLevel(e){return new s(e,this.center)}withLevelInContext(e,t){let i=this.zoomed(t);if(i<0||i>=1)return this.withLevel(e);let r=t+(.5-i)/e;return new s(e,r)}},N=new S;var Ke=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},Je=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},Rs,Fs,ae=class extends b{static get styles(){return[w`
        #scope {
          color: var(--rr-scope-color, yellow);
          width: 100%;
          height: 100%;
        }
      `]}render(){return p`<canvas id="scope"></canvas>`}constructor(){super(),this.minDecibels=-100,this.maxDecibels=-30,this.fftSize=2048,this.zoom=N,this.spectrum=new Float32Array(this.fftSize),this.width=this.fftSize,this.addEventListener("click",e=>this.onClick(e))}addFloatSpectrum(e){this.fftSize!=e.length&&(this.fftSize=e.length,this.spectrum=new Float32Array(this.fftSize)),this.spectrum.set(e),this.redraw()}updated(e){super.updated(e),e.has("zoom")&&this.redraw()}redraw(){let e=this.getContext();if(!e)return;let t=e.canvas.offsetWidth,i=e.canvas.offsetHeight;e.canvas.width!=t&&(e.canvas.width=t),e.canvas.height!=i&&(e.canvas.height=i),this.width!=t&&(this.width=t);let r=this.minDecibels,n=this.maxDecibels,o=n-r,a=(1-i)/o;e.clearRect(0,0,e.canvas.width,e.canvas.height),e.strokeStyle=getComputedStyle(this.canvas).getPropertyValue("color"),e.beginPath();let l=new Z(this.zoom,this.width,this.fftSize),c=d=>(this.spectrum[l.screenBinToFftBin(d)]-n)*a;if(l.visibleBins<=t){let d=u=>l.binNumberToCenterCoord(u);e.moveTo(d(l.leftBin-1),c(l.leftBin-1));for(let u=0;u<l.visibleBins+1;++u)e.lineTo(d(l.leftBin+u),c(l.leftBin+u))}else for(let d=0;d<t;++d){let u=l.leftCoordToBinNumber(d),g=l.leftCoordToBinNumber(d+1),f=c(u);for(let A=u+1;A<g;++A)f=Math.min(f,c(A));d==0?e.moveTo(d,f):e.lineTo(d,f)}e.stroke()}onClick(e){let i=new Z(this.zoom,this.width,this.fftSize).unzoomed(e.offsetX/this.offsetWidth);this.dispatchEvent(new Ye({fraction:i,target:"scope"})),e.preventDefault()}getContext(){if(this.context)return this.context;if(this.canvas)return this.canvas.width=this.fftSize,this.canvas.height=this.maxDecibels-this.minDecibels,this.context=this.canvas.getContext("2d"),this.context}};Ke([h({type:Number,reflect:!0,attribute:"min-decibels"}),Je("design:type",Number)],ae.prototype,"minDecibels",void 0);Ke([h({type:Number,reflect:!0,attribute:"max-decibels"}),Je("design:type",Number)],ae.prototype,"maxDecibels",void 0);Ke([h({type:Number,reflect:!0}),Je("design:type",Number)],ae.prototype,"fftSize",void 0);Ke([h({attribute:!1}),Je("design:type",typeof(Rs=typeof S<"u"&&S)=="function"?Rs:Object)],ae.prototype,"zoom",void 0);Ke([y("#scope"),Je("design:type",typeof(Fs=typeof HTMLCanvasElement<"u"&&HTMLCanvasElement)=="function"?Fs:Object)],ae.prototype,"canvas",void 0);ae=Ke([x("rr-scope-line"),Je("design:paramtypes",[])],ae);var ue=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},pe=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},Cs,$s,le=class extends b{static get styles(){return[w`
        canvas {
          color: var(--rr-captions-color, rgba(255, 255, 255, 0.5));
          width: 100%;
          height: 100%;
        }
      `]}render(){return p`<canvas id="canvas"></canvas>`}constructor(){super(),this.centerFrequency=0,this.frequencyScale=1,this.minDecibels=-100,this.maxDecibels=-30,this.fftSize=2048,this.zoom=N,this.resizeObserver=new ResizeObserver(()=>this.redraw())}connectedCallback(){super.connectedCallback(),this.resizeObserver?.disconnect(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}firstUpdated(e){super.firstUpdated(e),this.redraw()}updated(e){super.updated(e),!(e.size==0||e.size==1&&e.has("lines"))&&this.redraw()}redraw(){let e=this.getContext();if(!e)return;let t=e.canvas;t.width!=t.offsetWidth&&(t.width=this.offsetWidth),t.height!=t.offsetHeight&&(t.height=this.offsetHeight);let i=t.width,r=t.height,n=16,o=24,a=getComputedStyle(e.canvas).getPropertyValue("color"),l=this.computeLines(i-o,r-n);e.clearRect(0,0,i,r),e.save(),e.fillStyle=a;for(let{position:c,value:d,horizontal:u}of l){let[g,f]=[o+c*(i-o),n+c*(r-n)],A=String(u?d:d/(this.frequencyScale||1));if(u){e.textBaseline="middle",e.textAlign="right",g=o-2;let H=e.measureText(A);f-H.actualBoundingBoxAscent<n&&(f=H.actualBoundingBoxAscent+n),f+H.actualBoundingBoxDescent>r&&(f=r-H.actualBoundingBoxDescent)}else{e.textBaseline="bottom",e.textAlign="center",f=n-2;let H=e.measureText(A);g-H.actualBoundingBoxLeft<o&&(g=H.actualBoundingBoxLeft+o),g+H.actualBoundingBoxRight>i&&(g=i-H.actualBoundingBoxRight)}e.fillText(A,g,f)}e.restore(),e.save(),e.strokeStyle=a,e.beginPath();for(let{position:c,horizontal:d}of l)if(d){let u=n+c*(r-n);e.moveTo(o,u),e.lineTo(i,u)}else{let u=o+c*(i-o);e.moveTo(u,n),e.lineTo(u,r)}e.stroke(),e.restore()}getContext(){if(this.context)return this.context;if(this.canvas)return this.context=this.canvas.getContext("2d"),this.context}computeLines(e,t){let i=[];if(this.minDecibels!==void 0&&this.maxDecibels!==void 0&&i.push(...Ds(this.minDecibels,this.maxDecibels,20,25,t,St.Descending,Mt.Horizontal,[1,2,3,5,6,10])),this.bandwidth!==void 0){let r=new Z(this.zoom,1,this.fftSize,this.centerFrequency,this.bandwidth);i.push(...Ds(r.leftFrequency,r.rightFrequency,50,80,e,St.Ascending,Mt.Vertical))}else{let r=this.zoom.zoomed(.5);r>=0&&r<=1&&i.push({value:this.centerFrequency,position:r,horizontal:!1})}return i}};ue([h({type:Number,reflect:!0}),pe("design:type",Number)],le.prototype,"bandwidth",void 0);ue([h({type:Number,reflect:!0,attribute:"center-frequency"}),pe("design:type",Number)],le.prototype,"centerFrequency",void 0);ue([h({type:Number,reflect:!0,attribute:"frequency-scale"}),pe("design:type",Number)],le.prototype,"frequencyScale",void 0);ue([h({type:Number,reflect:!0,attribute:"min-decibels"}),pe("design:type",Number)],le.prototype,"minDecibels",void 0);ue([h({type:Number,reflect:!0,attribute:"max-decibels"}),pe("design:type",Number)],le.prototype,"maxDecibels",void 0);ue([h({type:Number,reflect:!0}),pe("design:type",Number)],le.prototype,"fftSize",void 0);ue([h({attribute:!1}),pe("design:type",typeof(Cs=typeof S<"u"&&S)=="function"?Cs:Object)],le.prototype,"zoom",void 0);ue([y("#canvas"),pe("design:type",typeof($s=typeof HTMLCanvasElement<"u"&&HTMLCanvasElement)=="function"?$s:Object)],le.prototype,"canvas",void 0);le=ue([x("rr-scope-background"),pe("design:paramtypes",[])],le);var St;(function(s){s[s.Ascending=0]="Ascending",s[s.Descending=1]="Descending"})(St||(St={}));var Mt;(function(s){s[s.Horizontal=0]="Horizontal",s[s.Vertical=1]="Vertical"})(Mt||(Mt={}));function Ds(s,e,t,i,r,n,o,a=[1,2,5,10]){let l=e-s,c=Math.pow(10,Math.floor(Math.log10(l/2))),d=ur(t/r,i/r,l,c,a),u=o==Mt.Horizontal,g=[],f=s;for(f%d!=0&&(f+=d-f%d);f<=e;){let A=n==St.Ascending?(f-s)/l:(e-f)/l;g.push({position:A,value:f,horizontal:u}),f+=d}return g}function ur(s,e,t,i,r){let n=t*s/i,o=t*e/i,a=(n+o)/2;if(o<r[0])return ur(s,e,t,i/10,r);if(n>r[r.length-1])return ur(s,e,t,i*10,r);let l=r[0],c=Math.abs(l-a),d=l>=n&&l<=o;for(let u=1;u<r.length;++u){let g=r[u]>=n&&r[u]<=o;if(d&&!g)continue;let f=Math.abs(r[u]-a);f<c&&(l=r[u],c=f,d=g)}return l*i}var fe=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},xe=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},As,qs,K=class extends b{constructor(){super(...arguments),this.centerFrequency=0,this.frequencyScale=1,this.minDecibels=-100,this.maxDecibels=-30,this.fftSize=2048,this.zoom=N}static get styles(){return[w`
        :host {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          background: black;
          position: relative;

          --top-caption-margin: 16px;
          --left-caption-margin: 24px;
        }

        #container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        #background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        #line {
          position: absolute;
          top: var(--top-caption-margin);
          left: var(--left-caption-margin);
          width: calc(100% - var(--left-caption-margin));
          height: calc(100% - var(--top-caption-margin));
        }
      `]}render(){return p`<div id="container">
      <rr-scope-background
        id="background"
        .centerFrequency=${this.centerFrequency}
        .bandwidth=${this.bandwidth}
        .frequencyScale=${this.frequencyScale}
        .minDecibels=${this.minDecibels}
        .maxDecibels=${this.maxDecibels}
        .fftSize=${this.fftSize}
        .zoom=${this.zoom}
      ></rr-scope-background>
      <rr-scope-line
        id="line"
        .minDecibels=${this.minDecibels}
        .maxDecibels=${this.maxDecibels}
        .fftSize=${this.fftSize}
        .zoom=${this.zoom}
      ></rr-scope-line>
    </div> `}addFloatSpectrum(e){e.length!=this.fftSize&&(this.fftSize=e.length),this.line?.addFloatSpectrum(e)}};fe([h({type:Number,reflect:!0}),xe("design:type",Number)],K.prototype,"bandwidth",void 0);fe([h({type:Number,reflect:!0,attribute:"center-frequency"}),xe("design:type",Number)],K.prototype,"centerFrequency",void 0);fe([h({type:Number,reflect:!0,attribute:"frequency-scale"}),xe("design:type",Number)],K.prototype,"frequencyScale",void 0);fe([h({type:Number,reflect:!0,attribute:"min-decibels"}),xe("design:type",Number)],K.prototype,"minDecibels",void 0);fe([h({type:Number,reflect:!0,attribute:"max-decibels"}),xe("design:type",Number)],K.prototype,"maxDecibels",void 0);fe([h({type:Number,reflect:!0}),xe("design:type",Number)],K.prototype,"fftSize",void 0);fe([h({attribute:!1}),xe("design:type",typeof(As=typeof S<"u"&&S)=="function"?As:Object)],K.prototype,"zoom",void 0);fe([y("#line"),xe("design:type",typeof(qs=typeof ae<"u"&&ae)=="function"?qs:Object)],K.prototype,"line",void 0);K=fe([x("rr-scope")],K);function _n(s,e,t,i){let r=new Array(256),n=r.length;for(let o=0;o<n;++o){let a=o/(n-1),l=Math.pow(a,i),c=2*Math.PI*(s/3+e*a),d=t*l*(1-l)/2,u=Math.cos(c),g=Math.sin(c),f=l+d*(-.14861*u+1.78277*g),A=l+d*(-.29227*u-.90649*g),H=l+d*1.97294*u;r[o]=[Math.floor(Math.max(0,Math.min(255,256*f))),Math.floor(Math.max(0,Math.min(255,256*A))),Math.floor(Math.max(0,Math.min(255,256*H)))]}return r}var et=_n(2,1,3,1);function En(){let s=[.13572138,4.6153926,-42.66032258,132.13108234,-152.94239396,59.28637943],e=[.09140261,2.19418839,4.84296658,-14.18503333,4.27729857,2.82956604],t=[.1066733,12.64194608,-60.58204836,110.36276771,-89.90310912,27.34824973],i=(o,a)=>o[0]*a[0]+o[1]*a[1]+o[2]*a[2]+o[3]*a[3]+o[4]*a[4]+o[5]*a[5],r=new Array(256),n=r.length;for(let o=0;o<n;++o){let a=o/255,l=[1,a,a*a,a*a*a,a*a*a*a,a*a*a*a*a];r[o]=[Math.floor(Math.max(0,Math.min(255,255*i(l,s)))),Math.floor(Math.max(0,Math.min(255,255*i(l,e)))),Math.floor(Math.max(0,Math.min(255,255*i(l,t))))]}return r}var Ph=En();var ci=class{constructor(){this.palette=et;this.images=[]}addFloatSpectrum(e,t,i,r,n){let o=e.length;if(this.prepareImageStack(o),r!==void 0&&n!==void 0){if(r!==this.frequency&&this.frequency!==void 0){let c=(r-this.frequency)/n;this.images.map(d=>d.scroll(c))}this.frequency=r}let a=this.images.map(c=>c.startRow(o,t,i)),l=o/2;for(let c=0;c<o;++c)a.map(d=>d.addBin(e[(c+l)%o]))}draw(e,t){let i=t.level*e.canvas.offsetWidth;(this.images.find(n=>n.width>=i)||this.images[this.images.length-1])?.draw(e,t)}prepareImageStack(e){let t=this.images[this.images.length-1];if((t?.width||0)==e)return;let r=[1024,2048,8192,32768].filter(a=>a<e);r.push(e);let n=0,o=0;for(;n<r.length||o<this.images.length;){let a=r[n],l=this.images[o]?.width;if(a===void 0||a>l){this.images.splice(o,1);continue}(l===void 0||a<l)&&this.images.splice(o,0,t?.resizeTo(a)||new pr(a,this.palette)),++n,++o}}},pr=class s{constructor(e,t){this.width=e;this.palette=t;this.scrollError=0;this.height=screen.height,this.data=new Uint8ClampedArray(4*this.width*(this.height+1)),this.xOffset=0,this.yOffset=0}startRow(e,t,i){return this.deltaY(-1),new fr(this.data,(this.xOffset+this.yOffset*this.width)*4,e/this.width,t,i,this.palette)}draw(e,t){let i=new Z(t,this.width,this.width);e.canvas.width!=i.visibleBins&&(e.canvas.width=i.visibleBins),e.canvas.height!=e.canvas.offsetHeight&&(e.canvas.height=e.canvas.offsetHeight);let r=Math.min(this.height-this.yOffset,e.canvas.height),n=(this.xOffset+this.yOffset*this.width)*4,o=n+r*this.width*4;e.putImageData(new ImageData(this.data.subarray(n,o),this.width),-i.leftBin,0);let a=e.canvas.height-r;if(a<=0)return;let l=(this.xOffset+a*this.width)*4;e.putImageData(new ImageData(this.data.subarray(this.xOffset*4,l),this.width),-i.leftBin,r)}scroll(e){if(e>=1||e<=-1){this.data.fill(0),this.xOffset=0,this.yOffset=0,this.scrollError=0;return}e+=this.scrollError;let t=Math.round(this.width*e);if(this.scrollError=e-t/this.width,t==0)return;this.deltaX(t);let i=t>0?-t:0,r=t>0?0:-t;for(let n=0;n<=this.height;++n){let o=n*this.width+this.xOffset;this.data.fill(0,(o+i)*4,(o+r)*4)}}resizeTo(e){let t=new OffscreenCanvas(this.width,this.height);t.getContext("2d").putImageData(new ImageData(this.data.subarray(this.xOffset*4,(this.xOffset+this.height*this.width)*4),this.width),0,0);let n=new OffscreenCanvas(e,this.height).getContext("2d");n.drawImage(t,0,0,e,this.height);let o=new s(e,this.palette);return o.data.set(n.getImageData(0,0,e,this.height).data),o.xOffset=0,o.yOffset=this.yOffset,o.scrollError=this.scrollError,o}deltaX(e){let t=this.xOffset+e,i=0;if(t<0){let r=this.height*this.width*4;for(this.data.copyWithin(r+this.xOffset*4,this.xOffset*4,this.width*4);t<0;)t+=this.width,i--}if(t>=this.width){let r=this.height*this.width*4;for(this.data.copyWithin(0,r,r+this.xOffset*4);t>=this.width;)t-=this.width,i++}this.xOffset=t,i!=0&&this.deltaY(i)}deltaY(e){let t=this.yOffset+e;for(;t<0;)t+=this.height;for(;t>=this.height;)t-=this.height;this.yOffset=t}},fr=class{constructor(e,t,i,r,n,o){this.data=e;this.offset=t;this.ratio=i;this.palette=o;this.p=0;this.value=0;this.sub=r,this.mul=256/(n-r)}addBin(e){if((this.p==0||e>this.value)&&(this.value=e),this.p++,this.p<this.ratio)return;let t=Math.max(0,Math.min(255,Math.floor(this.mul*(this.value-this.sub)))),i=this.palette[isNaN(t)?0:t];this.data[this.offset++]=i[0],this.data[this.offset++]=i[1],this.data[this.offset++]=i[2],this.data[this.offset++]=255,this.p=0}};var me=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},ge=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},_s,Es,J=class extends b{static get styles(){return[w`
        #waterfall {
          width: 100%;
          height: 100%;
        }
      `]}render(){return p`<canvas id="waterfall"></canvas>`}constructor(){super(),this.minDecibels=-100,this.maxDecibels=-30,this.palette=et,this.fftSize=2048,this.zoom=N,this.draggable=!1,this.image=new ci,this.addEventListener("pointerdown",e=>this.onPointerDown(e))}firstUpdated(e){super.firstUpdated(e),this.dragController=new I(new mr(this))}updated(e){super.updated(e),e.has("zoom")&&this.redraw()}addFloatSpectrum(e,t){this.image.addFloatSpectrum(t,this.minDecibels,this.maxDecibels,e,this.bandwidth),this.redraw()}redraw(){let e=this.getContext();e&&this.image.draw(e,this.zoom)}getContext(){return this.context?this.context:this.canvas?(this.context=this.canvas.getContext("2d"),new ResizeObserver(()=>this.redraw()).observe(this.canvas),this.context):void 0}onPointerDown(e){this.draggable&&this.dragController?.startDragging(e)}};me([h({type:Number,reflect:!0,attribute:"min-decibels"}),ge("design:type",Number)],J.prototype,"minDecibels",void 0);me([h({type:Number,reflect:!0,attribute:"max-decibels"}),ge("design:type",Number)],J.prototype,"maxDecibels",void 0);me([h({attribute:!1}),ge("design:type",Object)],J.prototype,"palette",void 0);me([h({type:Number,reflect:!0}),ge("design:type",Number)],J.prototype,"fftSize",void 0);me([h({attribute:!1}),ge("design:type",typeof(_s=typeof S<"u"&&S)=="function"?_s:Object)],J.prototype,"zoom",void 0);me([h({type:Number,reflect:!0}),ge("design:type",Number)],J.prototype,"bandwidth",void 0);me([h({type:Boolean,reflect:!0}),ge("design:type",Boolean)],J.prototype,"draggable",void 0);me([y("#waterfall"),ge("design:type",typeof(Es=typeof HTMLCanvasElement<"u"&&HTMLCanvasElement)=="function"?Es:Object)],J.prototype,"canvas",void 0);J=me([x("rr-waterfall"),ge("design:paramtypes",[])],J);var mr=class{constructor(e){this.waterfall=e,this.fraction=0}startDrag(){this.fraction=0,this.waterfall.dispatchEvent(new Te({fraction:0,target:"waterfall",operation:"start"}))}drag(e,t){this.fraction=e/(this.waterfall.clientWidth*this.waterfall.zoom.level),this.waterfall.dispatchEvent(new Te({fraction:this.fraction,target:"waterfall"}))}finishDrag(){this.waterfall.dispatchEvent(new Te({fraction:this.fraction,target:"waterfall",operation:"finish"}))}cancelDrag(){this.waterfall.dispatchEvent(new Te({fraction:0,target:"waterfall",operation:"cancel"}))}onClick(e){let i=new Z(this.waterfall.zoom,this.waterfall.offsetWidth,this.waterfall.fftSize).unzoomed(e.offsetX/this.waterfall.offsetWidth);this.waterfall.dispatchEvent(new Ye({fraction:i,target:"waterfall"})),e.preventDefault()}};var be=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},Se=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},Bs,Ps,Ts,zs,ks,he=class extends b{constructor(){super(...arguments),this.minDecibels=-100,this.maxDecibels=-30,this.palette=et}static get styles(){return[w`
        :host {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: stretch;
        }

        #palette {
          flex: 1;
          height: 24px;
          min-width: ${1.25*150}px;
        }

        @media (max-width: 375px) {
          #palette {
            min-width: ${150}px;
          }
        }

        #min,
        #max {
          width: 7ex;
          align-content: center;
        }

        #min {
          text-align: right;
          padding-right: 8px;
        }

        #max {
          text-align: left;
          padding-left: 8px;
        }

        #minThumb,
        #maxThumb {
          position: absolute;
          cursor: ew-resize;
          box-sizing: border-box;
          width: 8px;
          height: 24px;
          background: lightgray;
          border: 1px outset;
        }

        #minThumb {
          border-radius: 4px 0 0 4px;
        }

        #maxThumb {
          border-radius: 0 4px 4px 0;
        }

        .touchArea {
          position: absolute;
          top: -5px;
          bottom: -5px;
          left: -15px;
          right: -15px;
        }
      `]}render(){return p` <input
        id="min"
        type="text"
        .value=${tt(this.minDecibels)}
        @focus=${this.onMinFocus}
        @blur=${this.onMinBlur}
        @change=${this.onMinChange}
      />
      <canvas id="palette" width="256" height="24"></canvas>
      <input
        id="max"
        type="text"
        .value=${tt(this.maxDecibels)}
        @focus=${this.onMaxFocus}
        @blur=${this.onMaxBlur}
        @change=${this.onMaxChange}
      />
      <div id="minThumb" @pointerdown=${this.onMinPointerDown}>
        <div class="touchArea"></div>
      </div>
      <div id="maxThumb" @pointerdown=${this.onMaxPointerDown}>
        <div class="touchArea"></div>
      </div>`}firstUpdated(e){super.firstUpdated(e),this.minDragController=new I(new di("min",this,this.paletteBox),0),this.maxDragController=new I(new di("max",this,this.paletteBox),0),new ResizeObserver(()=>this.repaintPalette()).observe(document.body),this.repaintPalette()}updated(e){super.updated(e),this.repaintPalette()}repaintPalette(){let e=this.getContext();if(e){for(let t=0;t<e.canvas.width;++t){let r=255*(t*150/255+-150-this.minDecibels)/(this.maxDecibels-this.minDecibels);r<0&&(r=0),r>255&&(r=255),r=Math.floor(r),e.fillStyle=gr(this.palette[r]),e.fillRect(t,0,1,24)}this.minBox&&(this.minBox.style.backgroundColor=gr(this.palette[0]),this.minBox.style.color=Is(this.palette[0])?"white":"black"),this.maxBox&&(this.maxBox.style.backgroundColor=gr(this.palette[255]),this.maxBox.style.color=Is(this.palette[255])?"white":"black"),this.minThumb&&this.paletteBox&&(this.minThumb.style.right=(this.minDecibels-0)*this.paletteBox.offsetWidth/-150+this.paletteBox.offsetLeft+"px"),this.maxThumb&&this.paletteBox&&(this.maxThumb.style.left=(this.maxDecibels- -150)*this.paletteBox.offsetWidth/150+this.paletteBox.offsetLeft+"px")}}getContext(){if(this.context)return this.context;if(this.paletteBox)return this.context=this.paletteBox.getContext("2d"),this.context}onMinFocus(e){let t=e.target;t.value=br(this.minDecibels)}onMinBlur(e){let t=e.target;t.value=tt(this.minDecibels)}onMinChange(e){let t=e.target,i=t.value;i.endsWith("dB")&&(i=i.substring(0,i.length-2).trim());let r=Number(i);isNaN(r)?t.value=tt(this.minDecibels):Ls(r,this)}onMaxFocus(e){let t=e.target;t.value=br(this.maxDecibels)}onMaxBlur(e){let t=e.target;t.value=tt(this.maxDecibels)}onMaxChange(e){let t=e.target,i=t.value;i.endsWith("dB")&&(i=i.substring(0,i.length-2).trim());let r=Number(i);isNaN(r)?t.value=tt(this.maxDecibels):Os(r,this)}onMinPointerDown(e){this.minDragController?.startDragging(e)}onMaxPointerDown(e){this.maxDragController?.startDragging(e)}};be([h({type:Number,reflect:!0,attribute:"min-decibels"}),Se("design:type",Number)],he.prototype,"minDecibels",void 0);be([h({type:Number,reflect:!0,attribute:"max-decibels"}),Se("design:type",Number)],he.prototype,"maxDecibels",void 0);be([h({attribute:!1}),Se("design:type",Object)],he.prototype,"palette",void 0);be([y("#min"),Se("design:type",typeof(Bs=typeof HTMLElement<"u"&&HTMLElement)=="function"?Bs:Object)],he.prototype,"minBox",void 0);be([y("#max"),Se("design:type",typeof(Ps=typeof HTMLElement<"u"&&HTMLElement)=="function"?Ps:Object)],he.prototype,"maxBox",void 0);be([y("#palette"),Se("design:type",typeof(Ts=typeof HTMLCanvasElement<"u"&&HTMLCanvasElement)=="function"?Ts:Object)],he.prototype,"paletteBox",void 0);be([y("#minThumb"),Se("design:type",typeof(zs=typeof HTMLElement<"u"&&HTMLElement)=="function"?zs:Object)],he.prototype,"minThumb",void 0);be([y("#maxThumb"),Se("design:type",typeof(ks=typeof HTMLElement<"u"&&HTMLElement)=="function"?ks:Object)],he.prototype,"maxThumb",void 0);he=be([x("rr-decibel-range")],he);function gr(s){return`rgb(${s[0]}, ${s[1]}, ${s[2]})`}function Is(s){return Math.max(s[0],s[1],s[2])<96}var di=class{constructor(e,t,i){this.type=e,this.range=t,this.box=i,this.startDb=0}startDrag(){this.startDb=this.type==="min"?this.range.minDecibels:this.range.maxDecibels}drag(e,t){let i=e/this.box.offsetWidth;this.changeDb(this.startDb+i*150)}finishDrag(){}cancelDrag(){this.changeDb(this.startDb)}onClick(){}changeDb(e){this.type=="min"?Ls(e,this.range):Os(e,this.range)}};function Ls(s,e){s=Math.round(s),s<-150&&(s=-150),s>0&&(s=0),s>e.maxDecibels-6&&(s=e.maxDecibels-6),e.minDecibels=s,e.dispatchEvent(new xt({min:s}))}function Os(s,e){s=Math.round(s),s<-150&&(s=-150),s>0&&(s=0),s<e.minDecibels+6&&(s=e.minDecibels+6),e.maxDecibels=s,e.dispatchEvent(new xt({max:s}))}function tt(s){return br(s)+" dB"}function br(s){return String(s)}var ke=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},it=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},Ns,Me=class extends b{constructor(){super(...arguments),this.draggablePoint=!1,this.draggableLeft=!1,this.draggableRight=!1,this.fftSize=2048,this.zoom=N}static get styles(){return[w`
        :host {
          pointer-events: none;
        }

        .handle {
          pointer-events: all;
        }

        #point,
        #band,
        .handle {
          position: absolute;
          top: 0;
          bottom: 0;
        }

        #point {
          width: 2px;
          background: var(--rr-highlight-color, rgba(255, 255, 0, 0.25));
        }

        #band {
          background: var(--rr-highlight-area-color, rgba(255, 255, 255, 0.25));
        }

        .handle {
          width: 4px;
          cursor: ew-resize;
        }

        #pointHandle {
          cursor: col-resize;
        }

        #pointHandle:hover {
          background: var(--rr-highlight-handle-color, rgba(255, 255, 0, 1));
        }

        #leftBandHandle:hover,
        #rightBandHandle:hover {
          background: var(
            --rr-highlight-area-handle-color,
            rgba(255, 255, 255, 1)
          );
        }

        .touchArea {
          position: absolute;
          top: 0;
          bottom: 0;
          left: -10px;
          right: -10px;
        }
      `]}render(){return p`${this.renderBand()}${this.renderPoint()}`}renderPoint(){if(this.selection?.point===void 0)return m;let t=new Z(this.zoom,this.offsetWidth,this.fftSize).zoomed(this.selection.point);return t<0||t>1?m:p`<div id="point" style="left:calc(${100*t}% - 1px)"></div>
      ${this.draggablePoint?p`<div
            id="pointHandle"
            class="handle"
            style="left:calc(${100*t}% - 2px)"
            @pointerdown=${this.onPointPointerDown}
          >
            <div class="touchArea"></div>
          </div>`:m}`}renderBand(){if(this.selection?.band===void 0)return m;let e=new Z(this.zoom,this.offsetWidth,this.fftSize),t=e.zoomed(this.selection.band.left),i=e.zoomed(this.selection.band.right);if(t>1||i<0)return m;let r=Math.max(0,t),n=Math.min(i,1);return p`<div
        id="band"
        style="left:${100*r}%;width:${100*(n-r)}%"
      ></div>
      ${this.draggableLeft&&t==r?p`<div
            id="leftBandHandle"
            class="handle"
            style="left:calc(${100*t}% - 2px)"
            @pointerdown=${this.onLeftPointerDown}
          >
            <div class="touchArea"></div>
          </div>`:m}${this.draggableRight&&i==n?p`<div
            id="rightBandHandle"
            class="handle"
            style="left:calc(${100*i}% - 2px)"
            @pointerdown=${this.onRightPointerDown}
          >
            <div class="touchArea"></div>
          </div>`:m}`}firstUpdated(e){super.firstUpdated(e),this.pointDragController=new I(new Rt("point",this),0),this.leftDragController=new I(new Rt("start",this),0),this.rightDragController=new I(new Rt("end",this),0)}onPointPointerDown(e){this.pointDragController?.startDragging(e)}onLeftPointerDown(e){this.leftDragController?.startDragging(e)}onRightPointerDown(e){this.rightDragController?.startDragging(e)}};ke([h({type:Boolean,reflect:!0,attribute:"draggable-point"}),it("design:type",Boolean)],Me.prototype,"draggablePoint",void 0);ke([h({type:Boolean,reflect:!0,attribute:"draggable-left"}),it("design:type",Boolean)],Me.prototype,"draggableLeft",void 0);ke([h({type:Boolean,reflect:!0,attribute:"draggable-right"}),it("design:type",Boolean)],Me.prototype,"draggableRight",void 0);ke([h({type:Number,reflect:!0}),it("design:type",Number)],Me.prototype,"fftSize",void 0);ke([h({attribute:!1}),it("design:type",typeof(Ns=typeof S<"u"&&S)=="function"?Ns:Object)],Me.prototype,"zoom",void 0);ke([h({attribute:!1}),it("design:type",Object)],Me.prototype,"selection",void 0);Me=ke([x("rr-highlight")],Me);var Rt=class{constructor(e,t){this.type=e,this.highlight=t}startDrag(){this.original=this.highlight.selection}drag(e,t){let i=this.highlight.zoom===void 0?1:this.highlight.zoom.level,r=this.getFraction();r!==void 0&&(r+=e/(this.highlight.offsetWidth*i),r<0&&(r=0),r>1&&(r=1),this.highlight.dispatchEvent(this.getEvent(r)))}finishDrag(){}cancelDrag(){let e=this.getFraction();e!==void 0&&this.highlight.dispatchEvent(this.getEvent(e))}onClick(){}getFraction(){return this.type=="point"?this.original?.point:this.type=="start"?this.original?.band?.left:this.original?.band?.right}getEvent(e){return new hi(this.type=="point"?{fraction:e}:this.type=="start"?{startFraction:e}:{endFraction:e})}};var vr=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},js=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},Us,Ws,ui=class extends b{constructor(){super(...arguments),this.zoom=N}static get styles(){return[V,w`
        :host {
          display: flex;
          flex-direction: row;
          width: 100%;
        }

        #scroll {
          flex: 1;
          display: flex;
          flex-direction: row;
          border: solid ButtonBorder;
          border-width: 1px 0 1px 0;
        }

        #thumb {
          flex: 1;
        }

        #left,
        #right {
          background: color-mix(in srgb, ButtonFace, lightgray 35%);
        }

        #thumb {
          background: lightgray;
          border: 1px outset;
        }
      `]}render(){return p`<button @click=${this.onClickButtonLeft}>
        ${Yr}
      </button>
      <div id="scroll">
        <div
          id="left"
          style="width: ${this.zoom?100*this.zoom.leftFraction:0}%"
          @click=${this.onClickAreaLeft}
        ></div>
        <div id="thumb" @pointerdown=${this.onPointerDown}></div>
        <div
          id="right"
          style="width: ${this.zoom?100*(1-this.zoom.rightFraction):0}%"
          @click=${this.onClickAreaRight}
        ></div>
      </div>
      <button @click=${this.onClickButtonRight}>${Kr}</button>`}firstUpdated(e){super.firstUpdated(e),this.dragController=new I(new yr(this,this.scrollBox),0)}onClickButtonLeft(){this.moveZoom(-1/20)}onClickButtonRight(){this.moveZoom(1/20)}onClickAreaLeft(){this.moveZoom(-.6)}onClickAreaRight(){this.moveZoom(.6)}moveZoom(e){let t=this.zoom.withMovedCenter(e/this.zoom.level);this.zoom=t,this.dispatchEvent(new ze(t))}onPointerDown(e){this.dragController?.startDragging(e)}};vr([h({attribute:!1}),js("design:type",typeof(Us=typeof S<"u"&&S)=="function"?Us:Object)],ui.prototype,"zoom",void 0);vr([y("#scroll"),js("design:type",typeof(Ws=typeof HTMLElement<"u"&&HTMLElement)=="function"?Ws:Object)],ui.prototype,"scrollBox",void 0);ui=vr([x("rr-scrollbar")],ui);var yr=class{constructor(e,t){this.scrollbar=e,this.box=t,this.startZoom=N}startDrag(){this.startZoom=this.scrollbar.zoom}drag(e,t){let i=e/this.box.offsetWidth;this.moveZoom(i)}finishDrag(){}cancelDrag(){this.moveZoom(0)}onClick(){}moveZoom(e){let t=this.startZoom.withMovedCenter(e);this.scrollbar.zoom=t,this.scrollbar.dispatchEvent(new ze(this.scrollbar.zoom))}};var xr=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},Vs=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},Hs,pi=class extends b{constructor(){super(...arguments),this.zoom=N}static get styles(){return[V,w`
        :host {
          display: flex;
          flex-direction: row;
        }

        #zoomInput {
          width: 6ex;
        }
      `]}render(){return p`<button @click=${this.onClickMinus}>${ts}</button>
      <input
        id="zoomInput"
        type="text"
        .value=${wr(this.zoom.level)}
        @focus=${this.onZoomFocus}
        @blur=${this.onZoomBlur}
        @change=${this.onZoomChange}
      />
      <button @click=${this.onClickPlus}>${es}</button>`}onZoomFocus(e){let t=e.target;t.value=Gs(this.zoom.level)}onZoomBlur(e){let t=e.target;t.value=wr(this.zoom.level)}onZoomChange(e){let t=e.target,i=t.value;i.endsWith("x")&&(i=i.substring(0,i.length-1));let r=Number(i);isNaN(r)?t.value=wr(this.zoom.level):this.setZoom(r)}onClickMinus(){this.setZoom(this.zoom.level/Math.sqrt(2))}onClickPlus(){this.setZoom(this.zoom.level*Math.sqrt(2))}setZoom(e){Math.abs(e-Math.round(e))<.01&&(e=Math.round(e));let t=this.zoom;this.highlight?.point!==void 0?t=t.withLevelInContext(e,this.highlight.point):t=t.withLevel(e),this.zoom=t,this.dispatchEvent(new ze(t))}};xr([h({attribute:!1}),Vs("design:type",typeof(Hs=typeof S<"u"&&S)=="function"?Hs:Object)],pi.prototype,"zoom",void 0);xr([h({attribute:!1}),Vs("design:type",Object)],pi.prototype,"highlight",void 0);pi=xr([x("rr-zoombar")],pi);function wr(s){return Gs(s)+"x"}function Gs(s){return String(Math.round(s*100)/100)}var j=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},Q=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},Zs,Qs,Xs,k=class extends b{constructor(){super(...arguments),this.centerFrequency=0,this.frequencyScale=1,this.minDecibels=-100,this.maxDecibels=-30,this.fftSize=2048,this.zoom=N,this.highlightDraggablePoint=!1,this.highlightDraggableLeft=!1,this.highlightDraggableRight=!1,this.waterfallDraggable=!1}static get styles(){return[w`
        :host {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          background: black;
          position: relative;

          --top-caption-margin: 16px;
          --left-caption-margin: 24px;
        }

        #view {
          display: flex;
          flex-direction: column;
          flex: 1;
          position: relative;
        }

        #controls {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        #controls rr-decibel-range {
          flex: 1;
          max-width: 100%;
        }

        #zoomControls {
          display: flex;
          flex-direction: row;
          flex: 10;
        }

        #zoomControls rr-scrollbar {
          min-width: 300px;
        }

        @media (max-width: 415px) {
          #zoomControls rr-scrollbar {
            min-width: 260px;
          }
        }

        .box {
          position: relative;
          width: 100%;
          height: 0;
        }

        .box > * {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        #scopeBox {
          flex: 1;
          max-height: 150px;
        }

        #waterfallBox {
          flex: 2;
        }

        #waterfallBox > * {
          margin-left: var(--left-caption-margin);
        }

        #highlight {
          position: absolute;
          left: var(--left-caption-margin);
          top: var(--top-caption-margin);
          right: 0;
          bottom: 0;
        }
      `]}render(){return p`<div id="view">
        <div id="scopeBox" class="box">
          <rr-scope
            id="scope"
            .minDecibels=${this.minDecibels}
            .maxDecibels=${this.maxDecibels}
            .centerFrequency=${this.centerFrequency}
            .bandwidth=${this.bandwidth}
            .frequencyScale=${this.frequencyScale}
            .fftSize=${this.fftSize}
            .zoom=${this.zoom}
          ></rr-scope>
        </div>
        <div id="waterfallBox" class="box">
          <rr-waterfall
            id="waterfall"
            .minDecibels=${this.minDecibels}
            .maxDecibels=${this.maxDecibels}
            .bandwidth=${this.bandwidth}
            .fftSize=${this.fftSize}
            .zoom=${this.zoom}
            .draggable=${this.waterfallDraggable}
          ></rr-waterfall>
        </div>
        <rr-highlight
          id="highlight"
          .selection=${this.highlight}
          .draggableLeft=${this.highlightDraggableLeft}
          .draggableRight=${this.highlightDraggableRight}
          .draggablePoint=${this.highlightDraggablePoint}
          .fftSize=${this.fftSize}
          .zoom=${this.zoom}
        ></rr-highlight>
      </div>
      <div id="controls">
        <rr-decibel-range
          .minDecibels=${this.minDecibels}
          .maxDecibels=${this.maxDecibels}
          @spectrum-decibel-range-changed=${this.onDecibelRangeChanged}
        ></rr-decibel-range>
        <div id="zoomControls">
          <rr-zoombar
            .zoom=${this.zoom}
            .highlight=${this.highlight}
            @spectrum-zoom=${this.onZoom}
          ></rr-zoombar>
          <rr-scrollbar
            .zoom=${this.zoom}
            @spectrum-zoom=${this.onZoom}
          ></rr-scrollbar>
        </div>
      </div>`}addFloatSpectrum(e,t){this.fftSize!=t.length&&(this.fftSize=t.length),this.scope?.addFloatSpectrum(t),this.waterfall?.addFloatSpectrum(e,t)}onZoom(e){this.zoom=e.detail}onDecibelRangeChanged(e){e.detail.min!==void 0&&(this.minDecibels=e.detail.min),e.detail.max!==void 0&&(this.maxDecibels=e.detail.max)}};j([h({type:Number,reflect:!0}),Q("design:type",Number)],k.prototype,"bandwidth",void 0);j([h({type:Number,reflect:!0,attribute:"center-frequency"}),Q("design:type",Number)],k.prototype,"centerFrequency",void 0);j([h({type:Number,reflect:!0,attribute:"frequency-scale"}),Q("design:type",Number)],k.prototype,"frequencyScale",void 0);j([h({type:Number,reflect:!0,attribute:"min-decibels"}),Q("design:type",Number)],k.prototype,"minDecibels",void 0);j([h({type:Number,reflect:!0,attribute:"max-decibels"}),Q("design:type",Number)],k.prototype,"maxDecibels",void 0);j([h({type:Number,reflect:!0}),Q("design:type",Number)],k.prototype,"fftSize",void 0);j([h({attribute:!1}),Q("design:type",typeof(Zs=typeof S<"u"&&S)=="function"?Zs:Object)],k.prototype,"zoom",void 0);j([h({attribute:!1}),Q("design:type",Object)],k.prototype,"highlight",void 0);j([h({attribute:!1}),Q("design:type",Boolean)],k.prototype,"highlightDraggablePoint",void 0);j([h({attribute:!1}),Q("design:type",Boolean)],k.prototype,"highlightDraggableLeft",void 0);j([h({attribute:!1}),Q("design:type",Boolean)],k.prototype,"highlightDraggableRight",void 0);j([h({attribute:!1}),Q("design:type",Boolean)],k.prototype,"waterfallDraggable",void 0);j([y("#scope"),Q("design:type",typeof(Qs=typeof K<"u"&&K)=="function"?Qs:Object)],k.prototype,"scope",void 0);j([y("#waterfall"),Q("design:type",typeof(Xs=typeof J<"u"&&J)=="function"?Xs:Object)],k.prototype,"waterfall",void 0);k=j([x("rr-spectrum")],k);var F=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},C=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)},Ys,Ks,Js,en,Bn=!1;function Pn(){return Bn?new ei([new ri(-20,885e5,75e3,new Xe(-6,600)),new ii(-20,12e7,new Xe(-6,450)),new Xe(-20,11e7),new ti(-40)]):new li}var R=class extends b{static get styles(){return[V,w`
        :host {
          height: 100%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          touch-action: none;
        }

        #spectrum {
          width: 100%;
          height: 0;
          flex: 1;
          margin: 0;
        }
      `]}render(){return p`<rr-spectrum
        id="spectrum"
        .minDecibels=${this.minDecibels}
        .maxDecibels=${this.maxDecibels}
        .centerFrequency=${this.frequency.center}
        .bandwidth=${this.bandwidth}
        .frequencyScale=${this.scale}
        .highlight=${{point:this.frequency.offset/this.bandwidth+.5,band:{left:(this.frequency.offset-this.frequency.leftBand)/this.bandwidth+.5,right:(this.frequency.offset+this.frequency.rightBand)/this.bandwidth+.5}}}
        .highlightDraggablePoint=${!0}
        .highlightDraggableLeft=${this.mode.scheme!="WBFM"&&this.mode.scheme!="USB"}
        .highlightDraggableRight=${this.mode.scheme!="WBFM"&&this.mode.scheme!="LSB"}
        .waterfallDraggable=${!0}
        @spectrum-tap=${this.onSpectrumTap}
        @spectrum-drag=${this.onSpectrumDrag}
        @spectrum-highlight-changed=${this.onSpectrumHighlightChanged}
        @spectrum-decibel-range-changed=${this.onDecibelRangeChanged}
      ></rr-spectrum>

      <rr-main-controls
        .position=${this.windowState.controls.position}
        .playing=${this.playing}
        .errorState=${this.errorState}
        .centerFrequency=${this.frequency.center}
        .tunedFrequency=${this.frequency.center+this.frequency.offset}
        .tuningStep=${this.tuningStep}
        .scale=${this.scale}
        .availableModes=${Oe()}
        .scheme=${this.mode.scheme}
        .bandwidth=${Ne(this.mode)}
        .stereo=${$i(this.mode)}
        .squelch=${Ai(this.mode)}
        .stereoStatus=${this.stereoStatus}
        .gain=${this.gain}
        .gainDisabled=${this.gainDisabled}
        @rr-start=${this.onStart}
        @rr-stop=${this.onStop}
        @rr-presets=${this.onPresets}
        @rr-settings=${this.onSettings}
        @rr-scale-changed=${this.onScaleChange}
        @rr-center-frequency-changed=${this.onCenterFrequencyChange}
        @rr-tuned-frequency-changed=${this.onTunedFrequencyChange}
        @rr-tuning-step-changed=${this.onTuningStepChange}
        @rr-scheme-changed=${this.onSchemeChange}
        @rr-bandwidth-changed=${this.onBandwidthChange}
        @rr-stereo-changed=${this.onStereoChange}
        @rr-squelch-changed=${this.onSquelchChange}
        @rr-gain-changed=${this.onGainChange}
        @rr-window-moved=${this.onWindowMoved}
      ></rr-main-controls>

      <rr-settings
        .closed=${!this.windowState.settings.open}
        .position=${this.windowState.settings.position}
        .playing=${this.playing}
        .sampleRate=${this.sampleRate}
        .ppm=${this.ppm}
        .fftSize=${this.fftSize}
        .biasTee=${this.biasTee}
        .lowFrequencyMethod=${this.lowFrequencyMethod}
        @rr-sample-rate-changed=${this.onSampleRateChange}
        @rr-ppm-changed=${this.onPpmChange}
        @rr-fft-size-changed=${this.onFftSizeChange}
        @rr-bias-tee-changed=${this.onBiasTeeChange}
        @rr-low-frequency-method-changed=${this.onLowFrequencyMethodChange}
        @rr-window-moved=${this.onWindowMoved}
        @rr-window-closed=${this.onWindowClosed}
      ></rr-settings>

      <rr-presets
        .closed=${!this.windowState.presets.open}
        .size=${this.windowState.presets.size}
        .position=${this.windowState.presets.position}
        .tunedFrequency=${this.frequency.center+this.frequency.offset}
        .tuningStep=${this.tuningStep}
        .scale=${this.scale}
        .availableModes=${Oe()}
        .scheme=${this.mode.scheme}
        .bandwidth=${Ne(this.mode)}
        .stereo=${$i(this.mode)}
        .squelch=${Ai(this.mode)}
        .gain=${this.gain}
        .presets=${this.presets}
        .sortColumn=${this.presetSortColumn}
        @rr-preset-selected=${this.onPresetSelected}
        @rr-presets-changed=${this.onPresetsChanged}
        @rr-presets-sorted=${this.onPresetsSorted}
        @rr-window-moved=${this.onWindowMoved}
        @rr-window-resized=${this.onWindowResized}
        @rr-window-closed=${this.onWindowClosed}
      ></rr-presets>`}constructor(){super(),this.availableModes=new Map(Oe().map(e=>[e,Ci(e)])),this.sampleRate=1024e3,this.ppm=0,this.fftSize=2048,this.biasTee=!1,this.bandwidth=this.sampleRate,this.stereoStatus=!1,this.minDecibels=-90,this.maxDecibels=-20,this.playing=!1,this.errorState=!1,this.scale=1e3,this.frequency={center:885e5,offset:0,leftBand:75e3,rightBand:75e3},this.tuningStep=1e3,this.mode=this.availableModes.get("WBFM"),this.gain=null,this.gainDisabled=!1,this.lowFrequencyMethod={name:"default",channel:"Q",frequency:1e8,biasTee:!1},this.windowState={controls:{position:void 0},settings:{open:!1,position:void 0},presets:{open:!1,position:void 0,size:void 0}},this.presetSortColumn="frequency",this.presets=[],this.configProvider=Ur(),this.spectrumBuffer=new ie(2,2048),this.spectrum=new Xt,this.spectrum.size=this.fftSize,this.demodulator=new Zt(this.sampleRate),this.sampleCounter=new Qt(this.sampleRate,20),this.radio=new Jt(Pn(),this.spectrum.andThen(this.demodulator).andThen(this.sampleCounter),this.sampleRate),this.demodulator.setVolume(1),this.demodulator.setMode(this.mode),this.demodulator.addEventListener("stereo-status",e=>this.onStereoStatusEvent(e)),this.radio.addEventListener("radio",e=>this.onRadioEvent(e)),this.sampleCounter.addEventListener("sample-click",e=>this.onSampleClickEvent(e))}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.onScreenResize()),this.resizeObserver.observe(document.body)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}firstUpdated(e){super.firstUpdated(e),this.applyConfig()}applyConfig(){let e=this.configProvider.get();for(let t of this.availableModes.keys()){let i={...this.availableModes.get(t),...e.modes[t]};this.availableModes.set(t,i),t==e.mode&&this.setMode(i)}this.setLowFrequencyMethod(e.lowFrequencyMethod),this.setCenterFrequency(e.centerFrequency),this.setTunedFrequency(e.tunedFrequency),this.tuningStep=e.tuningStep,this.scale=e.frequencyScale,this.setGain(e.gain),this.setSampleRate(e.sampleRate),this.setPpm(e.ppm),this.setFftSize(e.fftSize),this.enableBiasTee(e.biasTee),this.minDecibels=e.minDecibels,this.maxDecibels=e.maxDecibels,this.presetSortColumn=e.presets.sortColumn,this.presets=e.presets.list,this.windowState=e.windows}isFrequencyValid(e){let t=e.offset-e.leftBand,i=e.offset+e.rightBand;return-this.bandwidth/2<=t&&i<=this.bandwidth/2}onSampleClickEvent(e){let t=this.spectrumBuffer.get(this.spectrum.size);this.spectrum.getSpectrum(t),this.spectrumView.addFloatSpectrum(this.spectrum.frequency(),t)}onStart(e){this.bandwidth=this.radio.getSampleRate(),this.radio.start(),e.preventDefault()}onStop(e){this.radio.stop(),e.preventDefault()}onScreenResize(){this.requestUpdate()}onPresets(){this.changeWindowState(e=>e.presets.open=!0)}onSettings(){this.changeWindowState(e=>e.settings.open=!0)}changeWindowState(e){let t={...this.windowState};e(t),this.windowState=t,this.configProvider.update(i=>i.windows=this.windowState)}getWindowName(e){return e===this.mainControlsWindow?"controls":e===this.settingsWindow?"settings":e===this.presetsWindow?"presets":void 0}onWindowClosed(e){let t=this.getWindowName(e.target);if(t===void 0)return;let r=e.target?.closed;r!==void 0&&this.changeWindowState(n=>n[t].open=!r)}onWindowMoved(e){let t=this.getWindowName(e.target);if(t===void 0)return;let r=e.target?.position;r&&this.changeWindowState(n=>n[t].position=r)}onWindowResized(e){let t=this.getWindowName(e.target);if(t===void 0)return;let r=e.target?.size;r&&this.changeWindowState(n=>n[t].size=r)}onScaleChange(e){let i=e.target.scale;this.scale=i}onCenterFrequencyChange(e){let i=e.target.centerFrequency;this.setCenterFrequency(i)}setCenterFrequency(e){let t={...this.frequency,center:e,offset:this.frequency.center+this.frequency.offset-e};this.isFrequencyValid(t)||(t={...t,offset:0}),this.setFrequency(t)}onTunedFrequencyChange(e){let i=e.target.tunedFrequency;this.setTunedFrequency(i)}onTuningStepChange(e){let i=e.target.tuningStep;this.tuningStep=i,this.configProvider.update(r=>r.tuningStep=i)}setTunedFrequency(e){let t={...this.frequency,offset:e-this.frequency.center};this.isFrequencyValid(t)||(t={...t,center:t.center+t.offset,offset:0}),this.setFrequency(t)}setFrequency(e,t){if(e.center!=this.frequency.center||t){let i=e.center<288e5&&this.lowFrequencyMethod.name=="upconverter",r=i?this.lowFrequencyMethod.frequency:0;e.offset!=this.frequency.offset&&this.demodulator.expectFrequencyAndSetOffset(e.center+r,e.offset),this.radio.setFrequency(e.center+r),this.radio.enableBiasTee(this.biasTee||i&&this.lowFrequencyMethod.biasTee)}else e.offset!=this.frequency.offset&&this.demodulator.setFrequencyOffset(e.offset);this.frequency=e,this.configProvider.update(i=>{i.centerFrequency=e.center,i.tunedFrequency=e.center+e.offset})}onSchemeChange(e){let i=e.target.scheme,r=this.availableModes.get(i);r!==void 0&&this.setMode(r)}onBandwidthChange(e){let i=e.target.bandwidth;this.setMode(Ue(i,this.mode))}onStereoChange(e){let i=e.target.stereo;this.setMode(Di(i,this.mode))}onSquelchChange(e){let i=e.target.squelch;this.setMode(qi(i,this.mode))}setMode(e){this.demodulator.setMode(e),this.mode=e,this.availableModes.set(e.scheme,e),this.updateFrequencyBands(),this.configProvider.update(t=>{t.mode=e.scheme,t.modes[e.scheme]=e})}updateFrequencyBands(){let e={...this.frequency};this.mode.scheme=="USB"?(e.leftBand=0,e.rightBand=Ne(this.mode)):this.mode.scheme=="LSB"?(e.leftBand=Ne(this.mode),e.rightBand=0):e.leftBand=e.rightBand=Ne(this.mode)/2,this.isFrequencyValid(e)||(e={...e,center:e.center+e.offset,offset:0}),this.setFrequency(e)}onGainChange(e){let t=e.target;this.setGain(t.gain)}setGain(e){this.radio.setGain(e),this.gain=e,this.configProvider.update(t=>t.gain=e)}onSampleRateChange(e){let t=e.target;this.setSampleRate(t.sampleRate)}setSampleRate(e){this.sampleRate=e,this.radio.setSampleRate(e),this.configProvider.update(t=>t.sampleRate=e),!this.radio.isPlaying()&&(this.bandwidth=e,this.setTunedFrequency(this.frequency.center+this.frequency.offset))}onPpmChange(e){let t=e.target;this.setPpm(t.ppm)}setPpm(e){this.radio.setFrequencyCorrection(this.ppm),this.ppm=e,this.configProvider.update(t=>t.ppm=e)}onFftSizeChange(e){let t=e.target;this.setFftSize(t.fftSize)}setFftSize(e){this.fftSize=e,this.spectrum.size=e,this.configProvider.update(t=>t.fftSize=e)}onBiasTeeChange(e){let t=e.target;this.enableBiasTee(t.biasTee)}enableBiasTee(e){this.radio.enableBiasTee(e),this.biasTee=e,this.configProvider.update(t=>t.biasTee=e)}onLowFrequencyMethodChange(e){let t=e.target;this.setLowFrequencyMethod(t.lowFrequencyMethod)}setLowFrequencyMethod(e){let t=e.name!="directSampling"?0:e.channel=="Q"?2:1;this.radio.setDirectSamplingMethod(t),this.lowFrequencyMethod={...e},this.setFrequency({...this.frequency},!0),this.configProvider.update(i=>i.lowFrequencyMethod=e)}onPresetSelected(e){let t=e.target,i=t.selectedIndex;if(i===void 0)return;let r=t.presets[i];this.setTunedFrequency(r.tunedFrequency),this.scale=r.scale,this.tuningStep=r.tuningStep,this.setMode(Ue(r.bandwidth,Di(r.stereo,qi(r.squelch,Ci(r.scheme))))),this.setGain(r.gain)}onPresetsChanged(e){let i=[...e.target.presets];this.presets=i,this.configProvider.update(r=>r.presets.list=i)}onPresetsSorted(e){let i=e.target.sortColumn;this.presetSortColumn=i,this.configProvider.update(r=>r.presets.sortColumn=i)}onSpectrumTap(e){this.setTunedFrequencyFraction(e.detail.fraction)}onSpectrumDrag(e){e.detail.operation=="start"?(this.centerFrequencyScroller?.cancel(),this.centerFrequencyScroller=new Sr(this.bandwidth,this.scale,this.frequency,t=>this.setFrequency(t))):e.detail.operation=="cancel"?(this.centerFrequencyScroller?.cancel(),this.centerFrequencyScroller=void 0):e.detail.operation=="finish"?(this.centerFrequencyScroller?.finish(),this.centerFrequencyScroller=void 0):this.centerFrequencyScroller?.drag(e)}onDecibelRangeChanged(e){let{min:t,max:i}=e.detail;t!==void 0&&(this.minDecibels=t,this.configProvider.update(r=>r.minDecibels=t)),i!==void 0&&(this.maxDecibels=i,this.configProvider.update(r=>r.maxDecibels=i))}onSpectrumHighlightChanged(e){e.detail.fraction!==void 0?this.setTunedFrequencyFraction(e.detail.fraction):e.detail.startFraction!==void 0?this.setSidebandFraction("left",e.detail.startFraction):e.detail.endFraction!==void 0&&this.setSidebandFraction("right",e.detail.endFraction)}setTunedFrequencyFraction(e){let t=this.frequency.center-this.bandwidth/2+this.frequency.leftBand,i=this.frequency.center+this.bandwidth/2-this.frequency.rightBand,r=Math.max(t,Math.min(this.frequency.center+this.bandwidth*(e-.5),i));r=this.tuningStep*Math.round(r/this.tuningStep),r<t&&(r+=this.tuningStep),r>i&&(r-=this.tuningStep),this.setTunedFrequency(r)}setSidebandFraction(e,t){let i=Math.floor(this.frequency.offset+this.bandwidth/2),r=Math.floor(this.bandwidth/2-this.frequency.offset),n=Math.floor(Math.abs(this.frequency.offset-this.bandwidth*(t-.5))),o;switch(this.mode.scheme){case"WBFM":return;case"NBFM":case"AM":case"CW":o=Ue(Math.min(n,i,r)*2,this.mode);break;case"LSB":if(e=="right")return;o=Ue(Math.min(n,i),this.mode);break;case"USB":if(e=="left")return;o=Ue(Math.min(n,r),this.mode);break}this.setMode(o)}onStereoStatusEvent(e){this.stereoStatus=e.detail}onRadioEvent(e){switch(e.detail.type){case"started":this.playing=!0;break;case"stopped":this.playing=!1;break;case"directSampling":this.gainDisabled=e.detail.active;break;case"error":let t=e.detail.exception;if(t.type===1&&t.cause.name==="NotFoundError")return;t.type==0?alert("\u8BE5\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 HTML5 USB API\u3002\u8BF7\u5728PC \u7535\u8111\u6216 Android \u624B\u673A\u4E0A\u5C1D\u8BD5\u4F7F\u7528 Chrome\u3001Edge \u6216 Opera \u6D4F\u89C8\u5668\u3002"):this.errorState||(this.errorState=!0,t.cause?alert(`${t.message}

\u7531: ${t.cause}\u5BFC\u81F4`):alert(t.message));break;default:}}};F([v(),C("design:type",Number)],R.prototype,"sampleRate",void 0);F([v(),C("design:type",Number)],R.prototype,"ppm",void 0);F([v(),C("design:type",Number)],R.prototype,"fftSize",void 0);F([v(),C("design:type",Boolean)],R.prototype,"biasTee",void 0);F([v(),C("design:type",Number)],R.prototype,"bandwidth",void 0);F([v(),C("design:type",Boolean)],R.prototype,"stereoStatus",void 0);F([v(),C("design:type",Number)],R.prototype,"minDecibels",void 0);F([v(),C("design:type",Number)],R.prototype,"maxDecibels",void 0);F([v(),C("design:type",Boolean)],R.prototype,"playing",void 0);F([v(),C("design:type",Boolean)],R.prototype,"errorState",void 0);F([v(),C("design:type",Number)],R.prototype,"scale",void 0);F([v(),C("design:type",Object)],R.prototype,"frequency",void 0);F([v(),C("design:type",Number)],R.prototype,"tuningStep",void 0);F([v(),C("design:type",Object)],R.prototype,"mode",void 0);F([v(),C("design:type",Object)],R.prototype,"gain",void 0);F([v(),C("design:type",Boolean)],R.prototype,"gainDisabled",void 0);F([v(),C("design:type",Object)],R.prototype,"lowFrequencyMethod",void 0);F([v(),C("design:type",Object)],R.prototype,"windowState",void 0);F([v(),C("design:type",String)],R.prototype,"presetSortColumn",void 0);F([v(),C("design:type",Array)],R.prototype,"presets",void 0);F([y("#spectrum"),C("design:type",typeof(Ys=typeof k<"u"&&k)=="function"?Ys:Object)],R.prototype,"spectrumView",void 0);F([y("rr-main-controls"),C("design:type",typeof(Ks=typeof $<"u"&&$)=="function"?Ks:Object)],R.prototype,"mainControlsWindow",void 0);F([y("rr-settings"),C("design:type",typeof(Js=typeof X<"u"&&X)=="function"?Js:Object)],R.prototype,"settingsWindow",void 0);F([y("rr-presets"),C("design:type",typeof(en=typeof M<"u"&&M)=="function"?en:Object)],R.prototype,"presetsWindow",void 0);R=F([x("radioreceiver-main"),C("design:paramtypes",[])],R);var Sr=class{constructor(e,t,i,r){this.bandwidth=e,this.scale=t,this.setFrequency=r,this.original={...i}}drag(e){let i=-e.detail.fraction*this.bandwidth,r=this.original.center+i;r=this.scale*Math.round(r/this.scale);let n={...this.original,center:r,offset:this.original.center+this.original.offset-r};n.offset-n.leftBand<=-this.bandwidth/2&&(n.offset=n.leftBand-this.bandwidth/2),this.bandwidth/2<=n.offset+n.rightBand&&(n.offset=this.bandwidth/2-n.rightBand),this.scheduleFrequencyChange(n)}cancel(){this.newFreq=this.original,this.changeFrequency()}finish(){this.changeFrequency()}scheduleFrequencyChange(e){this.newFreq=e,this.timeout==null&&(this.timeout=window.setTimeout(()=>this.changeFrequency(),50))}changeFrequency(){this.newFreq!==void 0&&(this.setFrequency(this.newFreq),this.newFreq=void 0,clearTimeout(this.timeout),this.timeout=void 0)}};us();})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=main.js.map
