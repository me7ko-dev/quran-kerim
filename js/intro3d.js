var Rc=0,sl=1,Pc=2;var Zs=1,Ic=2,rs=3,sn=0,Le=1,Ze=2,je=0,as=1,ki=2,rl=3,al=4,Lc=5;var yn=100,Dc=101,Nc=102,Uc=103,Fc=104,Oc=200,kc=201,Bc=202,zc=203,ol=204,ll=205,Vc=206,Gc=207,Hc=208,Wc=209,Xc=210,qc=211,Yc=212,Zc=213,Jc=214,Xr=0,qr=1,Yr=2,Xn=3,Zr=4,Jr=5,$r=6,Kr=7,cl=0,$c=1,Kc=2,ui=0,Js=1,$s=2,Ks=3,vn=4,Qs=5,js=6,tr=7;var hl=300,rn=301,Mn=302,Sa=303,ba=304,er=306,Qr=1e3,yi=1001,jr=1002,Ce=1003,Qc=1004;var ir=1005;var Ie=1006,wa=1007;var an=1008;var He=1009,ul=1010,fl=1011,os=1012,Ta=1013,fi=1014,di=1015,De=1016,Ea=1017,Aa=1018,ls=1020,dl=35902,pl=35899,ml=1021,gl=1022,ti=1023,vi=1026,on=1027,_l=1028,Ca=1029,ln=1030,Ra=1031;var Pa=1033,nr=33776,sr=33777,rr=33778,ar=33779,Ia=35840,La=35841,Da=35842,Na=35843,Ua=36196,Fa=37492,Oa=37496,ka=37488,Ba=37489,or=37490,za=37491,Va=37808,Ga=37809,Ha=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,Za=37815,Ja=37816,$a=37817,Ka=37818,Qa=37819,ja=37820,to=37821,eo=36492,io=36494,no=36495,so=36283,ro=36284,lr=36285,ao=36286;var Ts=2300,ta=2301,Hr=2302,Jo=2303,$o=2400,Ko=2401,Qo=2402;var jc=3200;var oo=0,th=1,Bi="",Oe="srgb",Es="srgb-linear",As="linear",$t="srgb";var Wr=7680;var eh=519,ih=512,nh=513,sh=514,lo=515,rh=516,ah=517,co=518,oh=519,xl=35044;var yl="300 es",ci=2e3,qn=2001;function nu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function su(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Cs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lh(){let n=Cs("canvas");return n.style.display="block",n}var nc={},Yn=null;function Rs(...n){let t="THREE."+n.shift();Yn?Yn("log",t,...n):console.log(t,...n)}function ch(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pt(...n){n=ch(n);let t="THREE."+n.shift();if(Yn)Yn("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function It(...n){n=ch(n);let t="THREE."+n.shift();if(Yn)Yn("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function gn(...n){let t=n.join(" ");t in nc||(nc[t]=!0,Pt(...n))}function hh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var uh={[Xr]:qr,[Yr]:$r,[Zr]:Kr,[Xn]:Jr,[qr]:Xr,[$r]:Yr,[Kr]:Zr,[Jr]:Xn},Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sc=1234567,bs=Math.PI/180,Zn=180/Math.PI;function Ni(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Wt(n,t,e){return Math.max(t,Math.min(e,n))}function vl(n,t){return(n%t+t)%t}function ru(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function au(n,t,e){return n!==t?(e-n)/(t-n):0}function ws(n,t,e){return(1-e)*n+e*t}function ou(n,t,e,i){return ws(n,t,1-Math.exp(-e*i))}function lu(n,t=1){return t-Math.abs(vl(n,t*2)-t)}function cu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function hu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function uu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function fu(n,t){return n+Math.random()*(t-n)}function du(n){return n*(.5-Math.random())}function pu(n){n!==void 0&&(sc=n);let t=sc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mu(n){return n*bs}function gu(n){return n*Zn}function _u(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function xu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vu(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),d=r((t-i)/2),h=a((t-i)/2),p=r((i-t)/2),x=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*x,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*x,o*c);break;case"ZYZ":n.set(l*x,l*p,o*u,o*c);break;default:Pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function te(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ho={DEG2RAD:bs,RAD2DEG:Zn,generateUUID:Ni,clamp:Wt,euclideanModulo:vl,mapLinear:ru,inverseLerp:au,lerp:ws,damp:ou,pingpong:lu,smoothstep:cu,smootherstep:hu,randInt:uu,randFloat:fu,randFloatSpread:du,seededRandom:pu,degToRad:mu,radToDeg:gu,isPowerOfTwo:_u,ceilPowerOfTwo:xu,floorPowerOfTwo:yu,setQuaternionFromProperEuler:vu,normalize:te,denormalize:li},Tl=class Tl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tl.prototype.isVector2=!0;var Tt=Tl,Si=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],p=r[a+1],x=r[a+2],v=r[a+3];if(d!==v||l!==h||c!==p||u!==x){let m=l*h+c*p+u*x+d*v;m<0&&(h=-h,p=-p,x=-x,v=-v,m=-m);let f=1-o;if(m<.9995){let S=Math.acos(m),P=Math.sin(S);f=Math.sin(f*S)/P,o=Math.sin(o*S)/P,l=l*f+h*o,c=c*f+p*o,u=u*f+x*o,d=d*f+v*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+x*o,d=d*f+v*o;let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+u*d+l*p-c*h,t[e+1]=l*x+u*h+c*d-o*p,t[e+2]=c*x+u*p+o*h-l*d,t[e+3]=u*x-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"YZX":this._x=h*u*d+c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d-h*p*x;break;case"XZY":this._x=h*u*d-c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d+h*p*x;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},El=class El{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};El.prototype.isVector3=!0;var F=El,Ao=new F,rc=new Si,Al=class Al{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],x=i[8],v=s[0],m=s[3],f=s[6],S=s[1],P=s[4],M=s[7],w=s[2],b=s[5],A=s[8];return r[0]=a*v+o*S+l*w,r[3]=a*m+o*P+l*b,r[6]=a*f+o*M+l*A,r[1]=c*v+u*S+d*w,r[4]=c*m+u*P+d*b,r[7]=c*f+u*M+d*A,r[2]=h*v+p*S+x*w,r[5]=h*m+p*P+x*b,r[8]=h*f+p*M+x*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,x=e*d+i*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return t[0]=d*v,t[1]=(s*c-u*i)*v,t[2]=(o*i-s*a)*v,t[3]=h*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return gn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Co.makeScale(t,e)),this}rotate(t){return gn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return gn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Al.prototype.isMatrix3=!0;var Nt=Al,Co=new Nt,ac=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oc=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mu(){let n={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$t&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$t&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?As:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Es]:{primaries:t,whitePoint:i,transfer:As,toXYZ:ac,fromXYZ:oc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:i,transfer:$t,toXYZ:ac,fromXYZ:oc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),n}var Gt=Mu();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var An,ea=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{An===void 0&&(An=Cs("canvas")),An.width=t.width,An.height=t.height;let s=An.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=An}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Cs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ui(e[i]/255)*255):e[i]=Ui(e[i]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Su=0,Jn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ro(s[a].image)):r.push(Ro(s[a]))}else r=Ro(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ro(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ea.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var bu=0,Po=new F,Ge=class n extends Mi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=yi,s=yi,r=Ie,a=an,o=ti,l=He,c=n.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Ni(),this.name="",this.source=new Jn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Po).x}get height(){return this.source.getSize(Po).y}get depth(){return this.source.getSize(Po).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qr:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case jr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qr:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case jr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=hl;Ge.DEFAULT_ANISOTROPY=1;var Cl=class Cl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],x=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(c+1)/2,M=(p+1)/2,w=(f+1)/2,b=(u+h)/4,A=(d+v)/4,_=(x+m)/4;return P>M&&P>w?P<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(P),s=b/i,r=A/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=b/s,r=_/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=A/r,s=_/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-x)*(m-x)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(d-v)/S,this.z=(h-u)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cl.prototype.isVector4=!0;var fe=Cl,ia=class extends Mi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Ge(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Jn(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Se=class extends ia{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ps=class extends Ge{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var na=class extends Ge{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ma=class Ma{constructor(t,e,i,s,r,a,o,l,c,u,d,h,p,x,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,d,h,p,x,v,m)}set(t,e,i,s,r,a,o,l,c,u,d,h,p,x,v,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ma().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Cn.setFromMatrixColumn(t,0).length(),r=1/Cn.setFromMatrixColumn(t,1).length(),a=1/Cn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,p=a*d,x=o*u,v=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+x*c,e[5]=h-v*c,e[9]=-o*l,e[2]=v-h*c,e[6]=x+p*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,p=l*d,x=c*u,v=c*d;e[0]=h+v*o,e[4]=x*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-x,e[6]=v+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,p=l*d,x=c*u,v=c*d;e[0]=h-v*o,e[4]=-a*d,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,p=a*d,x=o*u,v=o*d;e[0]=l*u,e[4]=x*c-p,e[8]=h*c+v,e[1]=l*d,e[5]=v*c+h,e[9]=p*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,p=a*c,x=o*l,v=o*c;e[0]=l*u,e[4]=v-h*d,e[8]=x*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*d+x,e[10]=h-v*d}else if(t.order==="XZY"){let h=a*l,p=a*c,x=o*l,v=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+v,e[5]=a*u,e[9]=p*d-x,e[2]=x*d-p,e[6]=o*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wu,t,Tu)}lookAt(t,e,i){let s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Xi.crossVectors(i,Xe),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Xi.crossVectors(i,Xe)),Xi.normalize(),yr.crossVectors(Xe,Xi),s[0]=Xi.x,s[4]=yr.x,s[8]=Xe.x,s[1]=Xi.y,s[5]=yr.y,s[9]=Xe.y,s[2]=Xi.z,s[6]=yr.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],x=i[2],v=i[6],m=i[10],f=i[14],S=i[3],P=i[7],M=i[11],w=i[15],b=s[0],A=s[4],_=s[8],E=s[12],R=s[1],N=s[5],O=s[9],B=s[13],I=s[2],G=s[6],J=s[10],$=s[14],it=s[3],X=s[7],j=s[11],tt=s[15];return r[0]=a*b+o*R+l*I+c*it,r[4]=a*A+o*N+l*G+c*X,r[8]=a*_+o*O+l*J+c*j,r[12]=a*E+o*B+l*$+c*tt,r[1]=u*b+d*R+h*I+p*it,r[5]=u*A+d*N+h*G+p*X,r[9]=u*_+d*O+h*J+p*j,r[13]=u*E+d*B+h*$+p*tt,r[2]=x*b+v*R+m*I+f*it,r[6]=x*A+v*N+m*G+f*X,r[10]=x*_+v*O+m*J+f*j,r[14]=x*E+v*B+m*$+f*tt,r[3]=S*b+P*R+M*I+w*it,r[7]=S*A+P*N+M*G+w*X,r[11]=S*_+P*O+M*J+w*j,r[15]=S*E+P*B+M*$+w*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],x=t[3],v=t[7],m=t[11],f=t[15],S=l*p-c*h,P=o*p-c*d,M=o*h-l*d,w=a*p-c*u,b=a*h-l*u,A=a*d-o*u;return e*(v*S-m*P+f*M)-i*(x*S-m*w+f*b)+s*(x*P-v*w+f*A)-r*(x*M-v*b+m*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],x=t[12],v=t[13],m=t[14],f=t[15],S=e*o-i*a,P=e*l-s*a,M=e*c-r*a,w=i*l-s*o,b=i*c-r*o,A=s*c-r*l,_=u*v-d*x,E=u*m-h*x,R=u*f-p*x,N=d*m-h*v,O=d*f-p*v,B=h*f-p*m,I=S*B-P*O+M*N+w*R-b*E+A*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return t[0]=(o*B-l*O+c*N)*G,t[1]=(s*O-i*B-r*N)*G,t[2]=(v*A-m*b+f*w)*G,t[3]=(h*b-d*A-p*w)*G,t[4]=(l*R-a*B-c*E)*G,t[5]=(e*B-s*R+r*E)*G,t[6]=(m*M-x*A-f*P)*G,t[7]=(u*A-h*M+p*P)*G,t[8]=(a*O-o*R+c*_)*G,t[9]=(i*R-e*O-r*_)*G,t[10]=(x*b-v*M+f*S)*G,t[11]=(d*M-u*b-p*S)*G,t[12]=(o*E-a*N-l*_)*G,t[13]=(e*N-i*E+s*_)*G,t[14]=(v*P-x*w-m*S)*G,t[15]=(u*w-d*P+h*S)*G,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,x=r*d,v=a*u,m=a*d,f=o*d,S=l*c,P=l*u,M=l*d,w=i.x,b=i.y,A=i.z;return s[0]=(1-(v+f))*w,s[1]=(p+M)*w,s[2]=(x-P)*w,s[3]=0,s[4]=(p-M)*b,s[5]=(1-(h+f))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(x+P)*A,s[9]=(m-S)*A,s[10]=(1-(h+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Cn.set(s[0],s[1],s[2]).length(),o=Cn.set(s[4],s[5],s[6]).length(),l=Cn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),si.copy(this);let c=1/a,u=1/o,d=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,e.setFromRotationMatrix(si),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=ci,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),p=(i+s)/(i-s),x,v;if(l)x=r/(a-r),v=a*r/(a-r);else if(o===ci)x=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===qn)x=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=ci,l=!1){let c=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),p=-(i+s)/(i-s),x,v;if(l)x=1/(a-r),v=a/(a-r);else if(o===ci)x=-2/(a-r),v=-(a+r)/(a-r);else if(o===qn)x=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ma.prototype.isMatrix4=!0;var he=Ma,Cn=new F,si=new he,wu=new F(0,0,0),Tu=new F(1,1,1),Xi=new F,yr=new F,Xe=new F,lc=new he,cc=new Si,Fi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cc.setFromEuler(this),this.setFromQuaternion(cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fi.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Eu=0,hc=new F,Rn=new Si,Ci=new he,vr=new F,gs=new F,Au=new F,Cu=new Si,uc=new F(1,0,0),fc=new F(0,1,0),dc=new F(0,0,1),pc={type:"added"},Ru={type:"removed"},Pn={type:"childadded",child:null},Io={type:"childremoved",child:null},Re=class n extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new Fi,i=new Si,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Nt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rn.setFromAxisAngle(t,e),this.quaternion.multiply(Rn),this}rotateOnWorldAxis(t,e){return Rn.setFromAxisAngle(t,e),this.quaternion.premultiply(Rn),this}rotateX(t){return this.rotateOnAxis(uc,t)}rotateY(t){return this.rotateOnAxis(fc,t)}rotateZ(t){return this.rotateOnAxis(dc,t)}translateOnAxis(t,e){return hc.copy(t).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uc,t)}translateY(t){return this.translateOnAxis(fc,t)}translateZ(t){return this.translateOnAxis(dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vr.copy(t):vr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(gs,vr,this.up):Ci.lookAt(vr,gs,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),Rn.setFromRotationMatrix(Ci),this.quaternion.premultiply(Rn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pc),Pn.child=t,this.dispatchEvent(Pn),Pn.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ru),Io.child=t,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pc),Pn.child=t,this.dispatchEvent(Pn),Pn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,Au),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Cu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Re.DEFAULT_UP=new F(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pu={type:"move"},$n=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Qe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Lo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Rt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Gt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Gt.workingColorSpace){if(t=vl(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Lo(a,r,t+1/3),this.g=Lo(a,r,t),this.b=Lo(a,r,t-1/3)}return Gt.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function i(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let i=fh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Gt.workingToColorSpace(Fe.copy(this),t),Math.round(Wt(Fe.r*255,0,255))*65536+Math.round(Wt(Fe.g*255,0,255))*256+Math.round(Wt(Fe.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.workingToColorSpace(Fe.copy(this),e);let i=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Gt.workingColorSpace){return Gt.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Oe){Gt.workingToColorSpace(Fe.copy(this),t);let e=Fe.r,i=Fe.g,s=Fe.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(Mr);let i=ws(qi.h,Mr.h,e),s=ws(qi.s,Mr.s,e),r=ws(qi.l,Mr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new Rt;Rt.NAMES=fh;var Kn=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ri=new F,Ri=new F,Do=new F,Pi=new F,In=new F,Ln=new F,mc=new F,No=new F,Uo=new F,Fo=new F,Oo=new fe,ko=new fe,Bo=new fe,Di=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ri.subVectors(t,e),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ri.subVectors(s,e),Ri.subVectors(i,e),Do.subVectors(t,e);let a=ri.dot(ri),o=ri.dot(Ri),l=ri.dot(Do),c=Ri.dot(Ri),u=Ri.dot(Do),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-o*u)*h,x=(a*u-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Oo.setScalar(0),ko.setScalar(0),Bo.setScalar(0),Oo.fromBufferAttribute(t,e),ko.fromBufferAttribute(t,i),Bo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Oo,r.x),a.addScaledVector(ko,r.y),a.addScaledVector(Bo,r.z),a}static isFrontFacing(t,e,i,s){return ri.subVectors(i,e),Ri.subVectors(t,e),ri.cross(Ri).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ri.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;In.subVectors(s,i),Ln.subVectors(r,i),No.subVectors(t,i);let l=In.dot(No),c=Ln.dot(No);if(l<=0&&c<=0)return e.copy(i);Uo.subVectors(t,s);let u=In.dot(Uo),d=Ln.dot(Uo);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(In,a);Fo.subVectors(t,r);let p=In.dot(Fo),x=Ln.dot(Fo);if(x>=0&&p<=x)return e.copy(r);let v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(Ln,o);let m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return mc.subVectors(r,s),o=(d-u)/(d-u+(p-x)),e.copy(s).addScaledVector(mc,o);let f=1/(m+v+h);return a=v*f,o=h*f,e.copy(i).addScaledVector(In,a).addScaledVector(Ln,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$i=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ai):ai.fromBufferAttribute(r,a),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sr.copy(i.boundingBox)),Sr.applyMatrix4(t.matrixWorld),this.union(Sr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),br.subVectors(this.max,_s),Dn.subVectors(t.a,_s),Nn.subVectors(t.b,_s),Un.subVectors(t.c,_s),Yi.subVectors(Nn,Dn),Zi.subVectors(Un,Nn),fn.subVectors(Dn,Un);let e=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-fn.z,fn.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,fn.z,0,-fn.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-fn.y,fn.x,0];return!zo(e,Dn,Nn,Un,br)||(e=[1,0,0,0,1,0,0,0,1],!zo(e,Dn,Nn,Un,br))?!1:(wr.crossVectors(Yi,Zi),e=[wr.x,wr.y,wr.z],zo(e,Dn,Nn,Un,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ii=[new F,new F,new F,new F,new F,new F,new F,new F],ai=new F,Sr=new $i,Dn=new F,Nn=new F,Un=new F,Yi=new F,Zi=new F,fn=new F,_s=new F,br=new F,wr=new F,dn=new F;function zo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){dn.fromArray(n,r);let o=s.x*Math.abs(dn.x)+s.y*Math.abs(dn.y)+s.z*Math.abs(dn.z),l=t.dot(dn),c=e.dot(dn),u=i.dot(dn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Me=new F,Tr=new Tt,Iu=0,ke=class extends Mi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xl,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=li(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=te(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array),s=te(s,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ls=class extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ds=class extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ue=class extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}},Lu=new $i,xs=new F,Vo=new F,_n=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Lu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);let e=xs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(Vo)),this.expandByPoint(xs.copy(t.center).sub(Vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Du=0,Ke=new he,Go=new Re,Fn=new F,qe=new $i,ys=new $i,Ae=new F,be=class n extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nu(t)?Ds:Ls)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Nt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,i){return Ke.makeTranslation(t,e,i),this.applyMatrix4(Ke),this}scale(t,e,i){return Ke.makeScale(t,e,i),this.applyMatrix4(Ke),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fn).negate(),this.translate(Fn.x,Fn.y,Fn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(qe.min,ys.min),qe.expandByPoint(Ae),Ae.addVectors(qe.max,ys.max),qe.expandByPoint(Ae)):(qe.expandByPoint(ys.min),qe.expandByPoint(ys.max))}qe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ae.fromBufferAttribute(o,c),l&&(Fn.fromBufferAttribute(t,c),Ae.add(Fn)),s=Math.max(s,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ke(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new F,l[_]=new F;let c=new F,u=new F,d=new F,h=new Tt,p=new Tt,x=new Tt,v=new F,m=new F;function f(_,E,R){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,R),h.fromBufferAttribute(r,_),p.fromBufferAttribute(r,E),x.fromBufferAttribute(r,R),u.sub(c),d.sub(c),p.sub(h),x.sub(h);let N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(N),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(N),o[_].add(v),o[E].add(v),o[R].add(v),l[_].add(m),l[E].add(m),l[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,E=S.length;_<E;++_){let R=S[_],N=R.start,O=R.count;for(let B=N,I=N+O;B<I;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let P=new F,M=new F,w=new F,b=new F;function A(_){w.fromBufferAttribute(s,_),b.copy(w);let E=o[_];P.copy(E),P.sub(w.multiplyScalar(w.dot(E))).normalize(),M.crossVectors(b,E);let N=M.dot(l[_])<0?-1:1;a.setXYZW(_,P.x,P.y,P.z,N)}for(let _=0,E=S.length;_<E;++_){let R=S[_],N=R.start,O=R.count;for(let B=N,I=N+O;B<I;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,d=new F;if(t)for(let h=0,p=t.count;h<p;h+=3){let x=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,x=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)h[x++]=c[p++]}return new ke(h,u,d)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=t(h,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},sa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xl,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Ve=new F,Ns=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=li(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=te(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=li(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array),s=te(s,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Rs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Rs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ho=new F,Nu=new F,Uu=new Nt,oi=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ho.subVectors(i,e).cross(Nu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Ho),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Uu.getNormalMatrix(t),s=this.coplanarPoint(Ho).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Fu=0,bi=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=as,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=ll,this.blendEquation=yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Xn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new oi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Tt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Qn=class extends bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},On,vs=new F,kn=new F,Bn=new F,zn=new Tt,Ms=new Tt,dh=new he,Er=new F,Ss=new F,Ar=new F,gc=new Tt,Wo=new Tt,_c=new Tt,Us=class extends Re{constructor(t=new Qn){if(super(),this.isSprite=!0,this.type="Sprite",On===void 0){On=new be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new sa(e,5);On.setIndex([0,1,2,0,2,3]),On.setAttribute("position",new Ns(i,3,0,!1)),On.setAttribute("uv",new Ns(i,2,3,!1))}this.geometry=On,this.material=t,this.center=new Tt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&It('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),kn.setFromMatrixScale(this.matrixWorld),dh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&kn.multiplyScalar(-Bn.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Cr(Er.set(-.5,-.5,0),Bn,a,kn,s,r),Cr(Ss.set(.5,-.5,0),Bn,a,kn,s,r),Cr(Ar.set(.5,.5,0),Bn,a,kn,s,r),gc.set(0,0),Wo.set(1,0),_c.set(1,1);let o=t.ray.intersectTriangle(Er,Ss,Ar,!1,vs);if(o===null&&(Cr(Ss.set(-.5,.5,0),Bn,a,kn,s,r),Wo.set(0,1),o=t.ray.intersectTriangle(Er,Ar,Ss,!1,vs),o===null))return;let l=t.ray.origin.distanceTo(vs);l<t.near||l>t.far||e.push({distance:l,point:vs.clone(),uv:Di.getInterpolation(vs,Er,Ss,Ar,gc,Wo,_c,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Cr(n,t,e,i,s,r){zn.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ms.x=r*zn.x-s*zn.y,Ms.y=s*zn.x+r*zn.y):Ms.copy(zn),n.copy(t),n.x+=Ms.x,n.y+=Ms.y,n.applyMatrix4(dh)}var Li=new F,Xo=new F,Rr=new F,Pr=new F,Fs=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Xo.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),Pr.copy(this.origin).sub(Xo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Rr),o=Pr.dot(this.direction),l=-Pr.dot(Rr),c=Pr.lengthSq(),u=Math.abs(1-a*a),d,h,p,x;if(u>0)if(d=a*l-o,h=a*o-l,x=r*u,d>=0)if(h>=-x)if(h<=x){let v=1/u;d*=v,h*=v,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xo).addScaledVector(Rr,h),p}intersectSphere(t,e){if(t.radius<0)return null;Li.subVectors(t.center,this.origin);let i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,p=t.z-a.z,x=e.x-a.x,v=e.y-a.y,m=e.z-a.z,f=i.x-a.x,S=i.y-a.y,P=i.z-a.z,M=Math.abs(l),w=Math.abs(c),b=Math.abs(u),A,_,E,R,N,O,B,I,G,J,$,it;if(M>=w&&M>=b?(E=l,O=d,G=x,it=f,l>=0?(A=c,_=u,R=h,N=p,B=v,I=m,J=S,$=P):(A=u,_=c,R=p,N=h,B=m,I=v,J=P,$=S)):w>=b?(E=c,O=h,G=v,it=S,c>=0?(A=u,_=l,R=p,N=d,B=m,I=x,J=P,$=f):(A=l,_=u,R=d,N=p,B=x,I=m,J=f,$=P)):(E=u,O=p,G=m,it=P,u>=0?(A=l,_=c,R=d,N=h,B=x,I=v,J=f,$=S):(A=c,_=l,R=h,N=d,B=v,I=x,J=S,$=f)),E===0)return null;let X=A/E,j=_/E,tt=1/E,Et=R-X*O,St=N-j*O,qt=B-X*G,Vt=I-j*G,Xt=J-X*it,Z=$-j*it,Q=Xt*Vt-Z*qt,dt=Et*Z-St*Xt,Lt=qt*St-Vt*Et;if(s){if(Q<0||dt<0||Lt<0)return null}else if((Q<0||dt<0||Lt<0)&&(Q>0||dt>0||Lt>0))return null;let mt=Q+dt+Lt;if(mt===0)return null;let Ot=tt*(Q*O+dt*G+Lt*it);return(mt>0?Ot<0:Ot>0)?null:this.at(Ot/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hi=class extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xc=new he,pn=new Fs,Ir=new _n,yc=new F,Lr=new F,Dr=new F,Nr=new F,qo=new F,Ur=new F,vc=new F,Fr=new F,de=class extends Re{constructor(t=new be,e=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(qo.fromBufferAttribute(d,t),a?Ur.addScaledVector(qo,u):Ur.addScaledVector(qo.sub(e),u))}e.add(Ur)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(r),pn.copy(t.ray).recast(t.near),!(Ir.containsPoint(pn.origin)===!1&&(pn.intersectSphere(Ir,yc)===null||pn.origin.distanceToSquared(yc)>(t.far-t.near)**2))&&(xc.copy(r).invert(),pn.copy(t.ray).applyMatrix4(xc),!(i.boundingBox!==null&&pn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=h.length;x<v;x++){let m=h[x],f=a[m.materialIndex],S=Math.max(m.start,p.start),P=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,w=P;M<w;M+=3){let b=o.getX(M),A=o.getX(M+1),_=o.getX(M+2);s=Or(this,f,t,i,c,u,d,b,A,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=x,f=v;m<f;m+=3){let S=o.getX(m),P=o.getX(m+1),M=o.getX(m+2);s=Or(this,a,t,i,c,u,d,S,P,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=h.length;x<v;x++){let m=h[x],f=a[m.materialIndex],S=Math.max(m.start,p.start),P=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,w=P;M<w;M+=3){let b=M,A=M+1,_=M+2;s=Or(this,f,t,i,c,u,d,b,A,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=x,f=v;m<f;m+=3){let S=m,P=m+1,M=m+2;s=Or(this,a,t,i,c,u,d,S,P,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ou(n,t,e,i,s,r,a,o){let l;if(t.side===Le?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===sn,o),l===null)return null;Fr.copy(o),Fr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Fr);return c<e.near||c>e.far?null:{distance:c,point:Fr.clone(),object:n}}function Or(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Lr),n.getVertexPosition(l,Dr),n.getVertexPosition(c,Nr);let u=Ou(n,t,e,i,Lr,Dr,Nr,vc);if(u){let d=new F;Di.getBarycoord(vc,Lr,Dr,Nr,d),s&&(u.uv=Di.getInterpolatedAttribute(s,o,l,c,d,new Tt)),r&&(u.uv1=Di.getInterpolatedAttribute(r,o,l,c,d,new Tt)),a&&(u.normal=Di.getInterpolatedAttribute(a,o,l,c,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new F,materialIndex:0};Di.getNormal(Lr,Dr,Nr,h.normal),u.face=h,u.barycoord=d}return u}var ra=class extends Ge{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ce,u=Ce,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=new _n,ku=new Tt(.5,.5),kr=new F,jn=class{constructor(t=new oi,e=new oi,i=new oi,s=new oi,r=new oi,a=new oi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ci,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],x=r[8],v=r[9],m=r[10],f=r[11],S=r[12],P=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,p-u,f-x,w-S).normalize(),s[1].setComponents(c+a,p+u,f+x,w+S).normalize(),s[2].setComponents(c+o,p+d,f+v,w+P).normalize(),s[3].setComponents(c-o,p-d,f-v,w-P).normalize(),i)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,p-h,f-m,w-M).normalize();else if(s[4].setComponents(c-l,p-h,f-m,w-M).normalize(),e===ci)s[5].setComponents(c+l,p+h,f+m,w+M).normalize();else if(e===qn)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mn)}intersectsSprite(t){mn.center.set(0,0,0);let e=ku.distanceTo(t.center);return mn.radius=.7071067811865476+e,mn.applyMatrix4(t.matrixWorld),this.intersectsSphere(mn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(kr.x=s.normal.x>0?t.max.x:t.min.x,kr.y=s.normal.y>0?t.max.y:t.min.y,kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xn=class extends bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mc=new he,jo=new Fs,Br=new _n,zr=new F,ts=class extends Re{constructor(t=new be,e=new xn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(s),Br.radius+=r,t.ray.intersectsSphere(Br)===!1)return;Mc.copy(s).invert(),jo.copy(t.ray).applyMatrix4(Mc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=h,v=p;x<v;x++){let m=c.getX(x);zr.fromBufferAttribute(d,m),Sc(zr,m,l,s,t,e,this)}}else{let h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=h,v=p;x<v;x++)zr.fromBufferAttribute(d,x),Sc(zr,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sc(n,t,e,i,s,r,a){let o=jo.distanceSqToPoint(n);if(o<e){let l=new F;jo.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Os=class extends Ge{constructor(t=[],e=rn,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ki=class extends Ge{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qi=class extends Ge{constructor(t,e,i=fi,s,r,a,o=Ce,l=Ce,c,u=vi,d=1){if(u!==vi&&u!==on)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},aa=class extends Qi{constructor(t,e=fi,i=rn,s,r,a=Ce,o=Ce,l,c=vi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ks=class extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},wi=class n extends be{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,p=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,s,a,2),x("x","z","y",1,-1,t,i,-e,s,a,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(d,2));function x(v,m,f,S,P,M,w,b,A,_,E){let R=M/A,N=w/_,O=M/2,B=w/2,I=b/2,G=A+1,J=_+1,$=0,it=0,X=new F;for(let j=0;j<J;j++){let tt=j*N-B;for(let Et=0;Et<G;Et++){let St=Et*R-O;X[v]=St*S,X[m]=tt*P,X[f]=I,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[f]=b>0?1:-1,u.push(X.x,X.y,X.z),d.push(Et/A),d.push(1-j/_),$+=1}}for(let j=0;j<_;j++)for(let tt=0;tt<A;tt++){let Et=h+tt+G*j,St=h+tt+G*(j+1),qt=h+(tt+1)+G*(j+1),Vt=h+(tt+1)+G*j;l.push(Et,St,Vt),l.push(St,qt,Vt),it+=6}o.addGroup(p,it,E),p+=it,h+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Bs=class n extends be{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],p=[],x=0,v=[],m=i/2,f=0;S(),a===!1&&(t>0&&P(!0),e>0&&P(!1)),this.setIndex(u),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(p,2));function S(){let M=new F,w=new F,b=0,A=(e-t)/i;for(let _=0;_<=r;_++){let E=[],R=_/r,N=R*(e-t)+t;for(let O=0;O<=s;O++){let B=O/s,I=B*l+o,G=Math.sin(I),J=Math.cos(I);w.x=N*G,w.y=-R*i+m,w.z=N*J,d.push(w.x,w.y,w.z),M.set(G,A,J).normalize(),h.push(M.x,M.y,M.z),p.push(B,1-R),E.push(x++)}v.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let R=v[E][_],N=v[E+1][_],O=v[E+1][_+1],B=v[E][_+1];(t>0||E!==0)&&(u.push(R,N,B),b+=3),(e>0||E!==r-1)&&(u.push(N,O,B),b+=3)}c.addGroup(f,b,0),f+=b}function P(M){let w=x,b=new Tt,A=new F,_=0,E=M===!0?t:e,R=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*R,0),h.push(0,R,0),p.push(.5,.5),x++;let N=x;for(let O=0;O<=s;O++){let I=O/s*l+o,G=Math.cos(I),J=Math.sin(I);A.x=E*J,A.y=m*R,A.z=E*G,d.push(A.x,A.y,A.z),h.push(0,R,0),b.x=G*.5+.5,b.y=J*.5*R+.5,p.push(b.x,b.y),x++}for(let O=0;O<s;O++){let B=w+O,I=N+O;M===!0?u.push(I,I+1,B):u.push(I+1,I,B),_+=3}c.addGroup(f,_,M===!0?1:2),f+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Oi=class n extends be{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,p=[],x=[],v=[],m=[];for(let f=0;f<u;f++){let S=f*h-a;for(let P=0;P<c;P++){let M=P*d-r;x.push(M,-S,0),v.push(0,0,1),m.push(P/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let P=S+c*f,M=S+c*(f+1),w=S+1+c*(f+1),b=S+1+c*f;p.push(P,M,b),p.push(M,w,b)}this.setIndex(p),this.setAttribute("position",new ue(x,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var zs=class n extends be{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new F,h=new F,p=[],x=[],v=[],m=[];for(let f=0;f<=i;f++){let S=[],P=f/i,M=a+P*o,w=t*Math.cos(M),b=Math.sqrt(t*t-w*w),A=0;f===0&&a===0?A=.5/e:f===i&&l===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let E=_/e,R=s+E*r;d.x=-b*Math.cos(R),d.y=w,d.z=b*Math.sin(R),x.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(E+A,1-P),S.push(c++)}u.push(S)}for(let f=0;f<i;f++)for(let S=0;S<e;S++){let P=u[f][S+1],M=u[f][S],w=u[f+1][S],b=u[f+1][S+1];(f!==0||a>0)&&p.push(P,M,b),(f!==i-1||l<Math.PI)&&p.push(M,w,b)}this.setIndex(p),this.setAttribute("position",new ue(x,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vs=class n extends be{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new F,p=new F,x=new F;for(let v=0;v<=i;v++){let m=a+v/i*o;for(let f=0;f<=s;f++){let S=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(S),p.y=(t+e*Math.cos(m))*Math.sin(S),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),x.subVectors(p,h).normalize(),u.push(x.x,x.y,x.z),d.push(f/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){let f=(s+1)*v+m-1,S=(s+1)*(v-1)+m-1,P=(s+1)*(v-1)+m,M=(s+1)*v+m;l.push(f,S,M),l.push(S,P,M)}this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Sn(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(bc(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(bc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Be(n){let t={};for(let e=0;e<n.length;e++){let i=Sn(n[e]);for(let s in i)t[s]=i[s]}return t}function bc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Bu(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ml(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var zi={clone:Sn,merge:Be},zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=Vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sn(t.uniforms),this.uniformsGroups=Bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Rt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new fe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new he().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},es=class extends xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ti=class extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oo,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},is=class extends Ti{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var oa=class extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},la=class extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vn(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Yo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ji=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ca=class extends ji{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$o,endingEnd:$o}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ko:r=t,o=2*e-i;break;case Qo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ko:a=t,l=2*i-e;break;case Qo:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,x=(i-e)/(s-e),v=x*x,m=v*x,f=-h*m+2*h*v-h*x,S=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*x+1,P=(-1-p)*m+(1.5+p)*v+.5*x,M=p*m-p*v;for(let w=0;w!==o;++w)r[w]=f*a[u+w]+S*a[c+w]+P*a[l+w]+M*a[d+w];return r}},ha=class extends ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},ua=class extends ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fa=class extends ji{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let x=(i-e)/(s-e),v=1-x;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*x;return r}let h=o*2,p=t-1;for(let x=0;x!==o;++x){let v=a[c+x],m=a[l+x],f=p*h+x*2,S=d[f],P=d[f+1],M=t*h+x*2,w=u[M],b=u[M+1],A=Hu(i,e,S,w,s);r[x]=ph(A,v,P,b,m)}return r}};function ph(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Gu(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Hu(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=ph(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Gu(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ye=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vn(e,this.TimeBufferType),this.values=Vn(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Vn(t.times,Array),values:Vn(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Yo(t.settings)&&(i.settings={inTangents:Vn(t.settings.inTangents,Array),outTangents:Vn(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ts:e=this.InterpolantFactoryMethodDiscrete;break;case ta:e=this.InterpolantFactoryMethodLinear;break;case Hr:e=this.InterpolantFactoryMethodSmooth;break;case Jo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return Hr;case this.InterpolantFactoryMethodBezier:return Jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Yo(this.settings)&&(wc(this.settings.inTangents,t),wc(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){It("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){It("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&su(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){It("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Hr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let x=0;x!==i;++x){let v=e[d+x];if(v!==e[h+x]||v!==e[p+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,h=a*i;for(let p=0;p!==i;++p)e[h+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Yo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function wc(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Ye.prototype.ValueTypeName="";Ye.prototype.TimeBufferType=Float32Array;Ye.prototype.ValueBufferType=Float32Array;Ye.prototype.DefaultInterpolation=ta;var tn=class extends Ye{constructor(t,e,i){super(t,e,i)}};tn.prototype.ValueTypeName="bool";tn.prototype.ValueBufferType=Array;tn.prototype.DefaultInterpolation=Ts;tn.prototype.InterpolantFactoryMethodLinear=void 0;tn.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends Ye{constructor(t,e,i,s){super(t,e,i,s)}};da.prototype.ValueTypeName="color";var pa=class extends Ye{constructor(t,e,i,s){super(t,e,i,s)}};pa.prototype.ValueTypeName="number";var ma=class extends ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Si.slerpFlat(r,0,a,c-o,a,c,l);return r}},Gs=class extends Ye{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ma(this.times,this.values,this.getValueSize(),t)}};Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var en=class extends Ye{constructor(t,e,i){super(t,e,i)}};en.prototype.ValueTypeName="string";en.prototype.ValueBufferType=Array;en.prototype.DefaultInterpolation=Ts;en.prototype.InterpolantFactoryMethodLinear=void 0;en.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends Ye{constructor(t,e,i,s){super(t,e,i,s)}};ga.prototype.ValueTypeName="vector";var _a=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],x=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mh=new _a,xa=class{constructor(t){this.manager=t!==void 0?t:mh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};xa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ns=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Hs=class extends ns{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Zo=new he,Tc=new F,Ec=new F,Ws=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=He,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jn,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tc),Ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ec),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Zo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===qn||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Vr=new F,Gr=new Si,xi=new F,Xs=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vr,Gr,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Gr,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Vr,Gr,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Gr,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ji=new F,Ac=new Tt,Cc=new Tt,Pe=class extends Xs{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zn*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,Ac,Cc),e.subVectors(Cc,Ac)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(bs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var tl=class extends Ws{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0}},qs=class extends ns{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new tl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},nn=class extends Xs{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},el=class extends Ws{constructor(){super(new nn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ss=class extends ns{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new el}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Gn=-90,Hn=1,ya=class extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pe(Gn,Hn,t,e);s.layers=this.layers,this.add(s);let r=new Pe(Gn,Hn,t,e);r.layers=this.layers,this.add(r);let a=new Pe(Gn,Hn,t,e);a.layers=this.layers,this.add(a);let o=new Pe(Gn,Hn,t,e);o.layers=this.layers,this.add(o);let l=new Pe(Gn,Hn,t,e);l.layers=this.layers,this.add(l);let c=new Pe(Gn,Hn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qn)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},va=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ys=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Wu.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Wu(){this._document.hidden===!1&&this.reset()}var Sl="\\[\\]\\.:\\/",Xu=new RegExp("["+Sl+"]","g"),bl="[^"+Sl+"]",qu="[^"+Sl.replace("\\.","")+"]",Yu=/((?:WC+[\/:])*)/.source.replace("WC",bl),Zu=/(WCOD+)?/.source.replace("WCOD",qu),Ju=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),$u=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),Ku=new RegExp("^"+Yu+Zu+Ju+$u+"$"),Qu=["material","materials","bones","map"],il=class{constructor(t,e,i){let s=i||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ce=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xu,"")}static parseTrackName(t){let e=Ku.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Qu.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;It("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=il;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t0=new Float32Array(1);var Rl=class Rl{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Rl.prototype.isMatrix2=!0;var nl=Rl;function wl(n,t,e,i){let s=ju(i);switch(e){case ml:return n*t;case _l:return n*t/s.components*s.byteLength;case Ca:return n*t/s.components*s.byteLength;case ln:return n*t*2/s.components*s.byteLength;case Ra:return n*t*2/s.components*s.byteLength;case gl:return n*t*3/s.components*s.byteLength;case ti:return n*t*4/s.components*s.byteLength;case Pa:return n*t*4/s.components*s.byteLength;case nr:case sr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case rr:case ar:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case La:case Na:return Math.max(n,16)*Math.max(t,8)/4;case Ia:case Da:return Math.max(n,8)*Math.max(t,8)/2;case Ua:case Fa:case ka:case Ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oa:case or:case za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case $a:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case to:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case eo:case io:case no:return Math.ceil(n/4)*Math.ceil(t/4)*16;case so:case ro:return Math.ceil(n/4)*Math.ceil(t/4)*8;case lr:case ao:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ju(n){switch(n){case He:case ul:return{byteLength:1,components:1};case os:case fl:case De:return{byteLength:2,components:1};case Ea:case Aa:return{byteLength:2,components:4};case fi:case Ta:case di:return{byteLength:4,components:1};case dl:case pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Oh(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ef(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){let x=d[h],v=d[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){let v=d[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_f=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Af=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Df="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Jf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,td=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ed=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,id=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ad=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,od=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,md=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ed=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$d=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,up=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Up=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:nf,alphahash_pars_fragment:sf,alphamap_fragment:rf,alphamap_pars_fragment:af,alphatest_fragment:of,alphatest_pars_fragment:lf,aomap_fragment:cf,aomap_pars_fragment:hf,batching_pars_vertex:uf,batching_vertex:ff,begin_vertex:df,beginnormal_vertex:pf,bsdfs:mf,iridescence_fragment:gf,bumpmap_pars_fragment:_f,clipping_planes_fragment:xf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:vf,clipping_planes_vertex:Mf,color_fragment:Sf,color_pars_fragment:bf,color_pars_vertex:wf,color_vertex:Tf,common:Ef,cube_uv_reflection_fragment:Af,defaultnormal_vertex:Cf,displacementmap_pars_vertex:Rf,displacementmap_vertex:Pf,emissivemap_fragment:If,emissivemap_pars_fragment:Lf,colorspace_fragment:Df,colorspace_pars_fragment:Nf,envmap_fragment:Uf,envmap_common_pars_fragment:Ff,envmap_pars_fragment:Of,envmap_pars_vertex:kf,envmap_physical_pars_fragment:Jf,envmap_vertex:Bf,fog_vertex:zf,fog_pars_vertex:Vf,fog_fragment:Gf,fog_pars_fragment:Hf,gradientmap_pars_fragment:Wf,lightmap_pars_fragment:Xf,lights_lambert_fragment:qf,lights_lambert_pars_fragment:Yf,lights_pars_begin:Zf,lights_toon_fragment:$f,lights_toon_pars_fragment:Kf,lights_phong_fragment:Qf,lights_phong_pars_fragment:jf,lights_physical_fragment:td,lights_physical_pars_fragment:ed,lights_fragment_begin:id,lights_fragment_maps:nd,lights_fragment_end:sd,lightprobes_pars_fragment:rd,logdepthbuf_fragment:ad,logdepthbuf_pars_fragment:od,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:cd,map_fragment:hd,map_pars_fragment:ud,map_particle_fragment:fd,map_particle_pars_fragment:dd,metalnessmap_fragment:pd,metalnessmap_pars_fragment:md,morphinstance_vertex:gd,morphcolor_vertex:_d,morphnormal_vertex:xd,morphtarget_pars_vertex:yd,morphtarget_vertex:vd,normal_fragment_begin:Md,normal_fragment_maps:Sd,normal_pars_fragment:bd,normal_pars_vertex:wd,normal_vertex:Td,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:Ad,clearcoat_normal_fragment_maps:Cd,clearcoat_pars_fragment:Rd,iridescence_pars_fragment:Pd,opaque_fragment:Id,packing:Ld,premultiplied_alpha_fragment:Dd,project_vertex:Nd,dithering_fragment:Ud,dithering_pars_fragment:Fd,roughnessmap_fragment:Od,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Bd,shadowmap_pars_vertex:zd,shadowmap_vertex:Vd,shadowmask_pars_fragment:Gd,skinbase_vertex:Hd,skinning_pars_vertex:Wd,skinning_vertex:Xd,skinnormal_vertex:qd,specularmap_fragment:Yd,specularmap_pars_fragment:Zd,tonemapping_fragment:Jd,tonemapping_pars_fragment:$d,transmission_fragment:Kd,transmission_pars_fragment:Qd,uv_pars_fragment:jd,uv_pars_vertex:tp,uv_vertex:ep,worldpos_vertex:ip,background_vert:np,background_frag:sp,backgroundCube_vert:rp,backgroundCube_frag:ap,cube_vert:op,cube_frag:lp,depth_vert:cp,depth_frag:hp,distance_vert:up,distance_frag:fp,equirect_vert:dp,equirect_frag:pp,linedashed_vert:mp,linedashed_frag:gp,meshbasic_vert:_p,meshbasic_frag:xp,meshlambert_vert:yp,meshlambert_frag:vp,meshmatcap_vert:Mp,meshmatcap_frag:Sp,meshnormal_vert:bp,meshnormal_frag:wp,meshphong_vert:Tp,meshphong_frag:Ep,meshphysical_vert:Ap,meshphysical_frag:Cp,meshtoon_vert:Rp,meshtoon_frag:Pp,points_vert:Ip,points_frag:Lp,shadow_vert:Dp,shadow_frag:Np,sprite_vert:Up,sprite_frag:Fp},ht={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Ai={basic:{uniforms:Be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Be([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Be([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Rt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Be([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Be([ht.points,ht.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Be([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Be([ht.common,ht.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Be([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Be([ht.sprite,ht.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:Be([ht.common,ht.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:Be([ht.lights,ht.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Ai.physical={uniforms:Be([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var uo={r:0,b:0,g:0},Op=new he,kh=new Nt;kh.set(-1,0,0,0,1,0,0,0,1);function kp(n,t,e,i,s,r){let a=new Rt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function p(S){let P=S.isScene===!0?S.background:null;if(P&&P.isTexture){let M=S.backgroundBlurriness>0;P=t.get(P,M)}return P}function x(S){let P=!1,M=p(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),P=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,P){let M=p(P);M&&(M.isCubeTexture||M.mapping===er)?(c===void 0&&(c=new de(new wi(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:Sn(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Op.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kh),c.material.toneMapped=Gt.getTransfer(M.colorSpace)!==$t,(u!==M||d!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new de(new Oi(2,2),new xe({name:"BackgroundMaterial",uniforms:Sn(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=Gt.getTransfer(M.colorSpace)!==$t,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,P){S.getRGB(uo,Ml(n)),e.buffers.color.setClear(uo.r,uo.g,uo.b,P,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,P=1){a.set(S),o=P,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:x,addToRenderList:v,dispose:f}}function Bp(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(N,O,B,I,G){let J=!1,$=d(N,I,B,O);r!==$&&(r=$,c(r.object)),J=p(N,I,B,G),J&&x(N,I,B,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(N,O,B,I),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function d(N,O,B,I){let G=I.wireframe===!0,J=i[O.id];J===void 0&&(J={},i[O.id]=J);let $=N.isInstancedMesh===!0?N.id:0,it=J[$];it===void 0&&(it={},J[$]=it);let X=it[B.id];X===void 0&&(X={},it[B.id]=X);let j=X[G];return j===void 0&&(j=h(l()),X[G]=j),j}function h(N){let O=[],B=[],I=[];for(let G=0;G<e;G++)O[G]=0,B[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:I,object:N,attributes:{},index:null}}function p(N,O,B,I){let G=r.attributes,J=O.attributes,$=0,it=B.getAttributes();for(let X in it)if(it[X].location>=0){let tt=G[X],Et=J[X];if(Et===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Et=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Et=N.instanceColor)),tt===void 0||tt.attribute!==Et||Et&&tt.data!==Et.data)return!0;$++}return r.attributesNum!==$||r.index!==I}function x(N,O,B,I){let G={},J=O.attributes,$=0,it=B.getAttributes();for(let X in it)if(it[X].location>=0){let tt=J[X];tt===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));let Et={};Et.attribute=tt,tt&&tt.data&&(Et.data=tt.data),G[X]=Et,$++}r.attributes=G,r.attributesNum=$,r.index=I}function v(){let N=r.newAttributes;for(let O=0,B=N.length;O<B;O++)N[O]=0}function m(N){f(N,0)}function f(N,O){let B=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;B[N]=1,I[N]===0&&(n.enableVertexAttribArray(N),I[N]=1),G[N]!==O&&(n.vertexAttribDivisor(N,O),G[N]=O)}function S(){let N=r.newAttributes,O=r.enabledAttributes;for(let B=0,I=O.length;B<I;B++)O[B]!==N[B]&&(n.disableVertexAttribArray(B),O[B]=0)}function P(N,O,B,I,G,J,$){$===!0?n.vertexAttribIPointer(N,O,B,G,J):n.vertexAttribPointer(N,O,B,I,G,J)}function M(N,O,B,I){v();let G=I.attributes,J=B.getAttributes(),$=O.defaultAttributeValues;for(let it in J){let X=J[it];if(X.location>=0){let j=G[it];if(j===void 0&&(it==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),it==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){let tt=j.normalized,Et=j.itemSize,St=t.get(j);if(St===void 0)continue;let qt=St.buffer,Vt=St.type,Xt=St.bytesPerElement,Z=Vt===n.INT||Vt===n.UNSIGNED_INT||j.gpuType===Ta;if(j.isInterleavedBufferAttribute){let Q=j.data,dt=Q.stride,Lt=j.offset;if(Q.isInstancedInterleavedBuffer){for(let mt=0;mt<X.locationSize;mt++)f(X.location+mt,Q.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let mt=0;mt<X.locationSize;mt++)m(X.location+mt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let mt=0;mt<X.locationSize;mt++)P(X.location+mt,Et/X.locationSize,Vt,tt,dt*Xt,(Lt+Et/X.locationSize*mt)*Xt,Z)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)f(X.location+Q,j.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let Q=0;Q<X.locationSize;Q++)P(X.location+Q,Et/X.locationSize,Vt,tt,Et*Xt,Et/X.locationSize*Q*Xt,Z)}}else if($!==void 0){let tt=$[it];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(X.location,tt);break;case 3:n.vertexAttrib3fv(X.location,tt);break;case 4:n.vertexAttrib4fv(X.location,tt);break;default:n.vertexAttrib1fv(X.location,tt)}}}}S()}function w(){E();for(let N in i){let O=i[N];for(let B in O){let I=O[B];for(let G in I){let J=I[G];for(let $ in J)u(J[$].object),delete J[$];delete I[G]}}delete i[N]}}function b(N){if(i[N.id]===void 0)return;let O=i[N.id];for(let B in O){let I=O[B];for(let G in I){let J=I[G];for(let $ in J)u(J[$].object),delete J[$];delete I[G]}}delete i[N.id]}function A(N){for(let O in i){let B=i[O];for(let I in B){let G=B[I];if(G[N.id]===void 0)continue;let J=G[N.id];for(let $ in J)u(J[$].object),delete J[$];delete G[N.id]}}}function _(N){for(let O in i){let B=i[O],I=N.isInstancedMesh===!0?N.id:0,G=B[I];if(G!==void 0){for(let J in G){let $=G[J];for(let it in $)u($[it].object),delete $[it];delete G[J]}delete B[I],Object.keys(B).length===0&&delete i[O]}}}function E(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function zp(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Vp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==ti&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===De&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==He&&A!==di&&!_&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Pt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:P,maxFragmentUniforms:M,maxSamples:w,samples:b}}function Gp(n){let t=this,e=null,i=0,s=!1,r=!1,a=new oi,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){let x=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||x===null||x.length===0||r&&!m)r?u(null):c();else{let S=r?0:i,P=S*4,M=f.clippingState||null;l.value=M,M=u(x,h,P,p);for(let w=0;w!==P;++w)M[w]=e[w];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,x){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,x!==!0||m===null){let f=p+v*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let P=0,M=p;P!==v;++P,M+=4)a.copy(d[P]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var hs=4,Hp=6,Wp=20,Xp=256,cr=new nn,gh=new Rt,Pl=null,Il=0,Ll=0,Dl=!1,qp=new F,bn=new F,fs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=qp}=r;Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Pl,Il,Ll),this._renderer.xr.enabled=Dl,t.scissorTest=!1,cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rn||t.mapping===Mn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:De,format:ti,colorSpace:Es,depthBuffer:!1},s=_h(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yp(r)),this._blurMaterial=Jp(r,t,e),this._ggxMaterial=Zp(r,t,e)}return s}_compileMaterial(t){let e=new de(new be,t);this._renderer.compile(e,cr)}_sceneToCubeUV(t,e,i,s,r){let l=new Pe(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(gh),d.toneMapping=ui,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new de(new wi,new hi({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,f=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,f=!0):(m.color.copy(gh),f=!0);for(let P=0;P<6;P++){let M=P%3;M===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[P],r.y,r.z)):M===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[P]));let w=this._cubeSize;cs(s,M*w,P>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(v,l),d.render(t,l)}d.toneMapping=p,d.autoClear=h,t.background=S}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===rn||t.mapping===Mn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;cs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,cr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,p=d*h,{_lodMax:x}=this,v=this._sizeLods[i],m=3*v*(i>x-hs?i-x+hs:0),f=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=x-e,cs(r,m,f,3*v,2*v),s.setRenderTarget(r),s.render(o,cr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,cs(t,m,f,3*v,2*v),s.setRenderTarget(t),s.render(o,cr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-hs?s-this._lodMax+hs:0),h=4*(this._cubeSize-u);cs(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,cr)}};function Yp(n){let t=[],e=[],i=n,s=n-hs+1+Hp;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,p=3,x=new Float32Array(p*h*d),v=new Float32Array(p*h*d);for(let f=0;f<d;f++){let S=f%3*2/3-1,P=f>2?0:-1,M=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];x.set(M,p*h*f);for(let w=0;w<h;w++){let b=u[w*2]*2-1,A=u[w*2+1]*2-1;f===0?bn.set(1,A,b):f===1?bn.set(-b,1,-A):f===2?bn.set(-b,A,1):f===3?bn.set(-1,A,-b):f===4?bn.set(-b,-1,A):bn.set(b,A,-1),bn.toArray(v,(f*h+w)*p)}}let m=new be;m.setAttribute("position",new ke(x,p)),m.setAttribute("outputDirection",new ke(v,p)),e.push(new de(m,null)),i>hs&&i--}return{lodMeshes:e,sizeLods:t}}function _h(n,t,e){let i=new Se(n,t,e);return i.texture.mapping=er,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Zp(n,t,e){return new xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:je,depthTest:!1,depthWrite:!1})}function Jp(n,t,e){return new xe({name:"SphericalGaussianBlur",defines:{SAMPLES:Wp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:je,depthTest:!1,depthWrite:!1})}function xh(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:je,depthTest:!1,depthWrite:!1})}function yh(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:je,depthTest:!1,depthWrite:!1})}function go(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var po=class extends Se{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Os(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new wi(5,5,5),r=new xe({name:"CubemapFromEquirect",uniforms:Sn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Le,blending:je});r.uniforms.tEquirect.value=e;let a=new de(s,r),o=e.minFilter;return e.minFilter===an&&(e.minFilter=Ie),new ya(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function $p(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Sa||p===ba)if(t.has(h)){let x=t.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let v=new po(x.height);return v.fromEquirectangularTexture(n,h),t.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,x=p===Sa||p===ba,v=p===rn||p===Mn;if(x||v){let m=e.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new fs(n)),m=x?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return x&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new fs(n)),m=x?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Sa?h.mapping=rn:p===ba&&(h.mapping=Mn),h}function l(h){let p=0,x=6;for(let v=0;v<x;v++)h[v]!==void 0&&p++;return p===x}function c(h){let p=h.target;p.removeEventListener("dispose",c);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Kp(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&gn("WebGLRenderer: "+i+" extension not supported."),s}}}function Qp(n,t,e,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],n.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,x=d.attributes.position,v=0;if(x===void 0)return;if(p!==null){let S=p.array;v=p.version;for(let P=0,M=S.length;P<M;P+=3){let w=S[P+0],b=S[P+1],A=S[P+2];h.push(w,b,b,A,A,w)}}else{let S=x.array;v=x.version;for(let P=0,M=S.length/3-1;P<M;P+=3){let w=P+0,b=P+1,A=P+2;h.push(w,b,b,A,A,w)}}let m=new(x.count>=65535?Ds:Ls)(h,1);m.version=v;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function u(d){let h=r.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function jp(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),e.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*a,p),e.update(h,i,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let v=0;for(let m=0;m<p;m++)v+=h[m];e.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function tm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:It("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function em(n,t,e){let i=new WeakMap,s=new fe;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],P=0;p===!0&&(P=1),x===!0&&(P=2),v===!0&&(P=3);let M=o.attributes.position.count*P,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let b=new Float32Array(M*w*4*d),A=new Ps(b,M,w,d);A.type=di,A.needsUpdate=!0;let _=P*4;for(let R=0;R<d;R++){let N=m[R],O=f[R],B=S[R],I=M*w*4*R;for(let G=0;G<N.count;G++){let J=G*_;p===!0&&(s.fromBufferAttribute(N,G),b[I+J+0]=s.x,b[I+J+1]=s.y,b[I+J+2]=s.z,b[I+J+3]=0),x===!0&&(s.fromBufferAttribute(O,G),b[I+J+4]=s.x,b[I+J+5]=s.y,b[I+J+6]=s.z,b[I+J+7]=0),v===!0&&(s.fromBufferAttribute(B,G),b[I+J+8]=s.x,b[I+J+9]=s.y,b[I+J+10]=s.z,b[I+J+11]=B.itemSize===4?s.w:1)}}h={count:d,texture:A,size:new Tt(M,w)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function im(n,t,e,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var nm={[Js]:"LINEAR_TONE_MAPPING",[$s]:"REINHARD_TONE_MAPPING",[Ks]:"CINEON_TONE_MAPPING",[vn]:"ACES_FILMIC_TONE_MAPPING",[js]:"AGX_TONE_MAPPING",[tr]:"NEUTRAL_TONE_MAPPING",[Qs]:"CUSTOM_TONE_MAPPING"};function sm(n,t,e,i,s,r){let a=new Se(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new be;c.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ue([0,2,0,0,2,0],2));let u=new es({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new de(c,u),h=new nn(-1,1,1,-1,0,1),p=null,x=null,v=!1,m,f=null,S=[],P=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let b=0;b<S.length;b++){let A=S[b];A.setSize&&A.setSize(M,w)}},this.setEffects=function(M){S=M,P=S.length>0&&S[0].isRenderPass===!0;let w=a.width,b=a.height;S.length>0&&o===null&&(o=new Se(w,b,{type:De,depthBuffer:!1,stencilBuffer:!1}),l=new Se(w,b,{type:De,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){let _=S[A];_.setSize&&_.setSize(w,b)}},this.begin=function(M,w){if(v||M.toneMapping===ui&&S.length===0)return!1;if(f=w,w!==null){let b=w.width,A=w.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return P===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=ui,!0},this.hasRenderPass=function(){return P},this.end=function(M,w){M.toneMapping=m,v=!0;let b=a,A=o;for(let _=0;_<S.length;_++){let E=S[_];E.enabled!==!1&&(E.render(M,A,b,w),E.needsSwap!==!1&&(b=A,A=A===o?l:o))}if(p!==M.outputColorSpace||x!==M.toneMapping){p=M.outputColorSpace,x=M.toneMapping,u.defines={},Gt.getTransfer(p)===$t&&(u.defines.SRGB_TRANSFER="");let _=nm[x];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(f),M.render(d,h),f=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Bh=new Ge,Fl=new Qi(1,1),zh=new Ps,Vh=new na,Gh=new Os,vh=[],Mh=[],Sh=new Float32Array(16),bh=new Float32Array(9),wh=new Float32Array(4);function ds(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=vh[s];if(r===void 0&&(r=new Float32Array(s),vh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function we(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function _o(n,t){let e=Mh[t];e===void 0&&(e=new Int32Array(t),Mh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function rm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function am(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function om(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function lm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function cm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;wh.set(i),n.uniformMatrix2fv(this.addr,!1,wh),Te(e,i)}}function hm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;bh.set(i),n.uniformMatrix3fv(this.addr,!1,bh),Te(e,i)}}function um(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;Sh.set(i),n.uniformMatrix4fv(this.addr,!1,Sh),Te(e,i)}}function fm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function dm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function pm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function mm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function gm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _m(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function xm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function ym(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function vm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fl.compareFunction=e.isReversedDepthBuffer()?co:lo,r=Fl):r=Bh,e.setTexture2D(t||r,s)}function Mm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Vh,s)}function Sm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Gh,s)}function bm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||zh,s)}function wm(n){switch(n){case 5126:return rm;case 35664:return am;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return hm;case 35676:return um;case 5124:case 35670:return fm;case 35667:case 35671:return dm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return _m;case 36295:return xm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return bm}}function Tm(n,t){n.uniform1fv(this.addr,t)}function Em(n,t){let e=ds(t,this.size,2);n.uniform2fv(this.addr,e)}function Am(n,t){let e=ds(t,this.size,3);n.uniform3fv(this.addr,e)}function Cm(n,t){let e=ds(t,this.size,4);n.uniform4fv(this.addr,e)}function Rm(n,t){let e=ds(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Pm(n,t){let e=ds(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Im(n,t){let e=ds(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Lm(n,t){n.uniform1iv(this.addr,t)}function Dm(n,t){n.uniform2iv(this.addr,t)}function Nm(n,t){n.uniform3iv(this.addr,t)}function Um(n,t){n.uniform4iv(this.addr,t)}function Fm(n,t){n.uniform1uiv(this.addr,t)}function Om(n,t){n.uniform2uiv(this.addr,t)}function km(n,t){n.uniform3uiv(this.addr,t)}function Bm(n,t){n.uniform4uiv(this.addr,t)}function zm(n,t,e){let i=this.cache,s=t.length,r=_o(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Fl:a=Bh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Vm(n,t,e){let i=this.cache,s=t.length,r=_o(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vh,r[a])}function Gm(n,t,e){let i=this.cache,s=t.length,r=_o(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Gh,r[a])}function Hm(n,t,e){let i=this.cache,s=t.length,r=_o(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||zh,r[a])}function Wm(n){switch(n){case 5126:return Tm;case 35664:return Em;case 35665:return Am;case 35666:return Cm;case 35674:return Rm;case 35675:return Pm;case 35676:return Im;case 5124:case 35670:return Lm;case 35667:case 35671:return Dm;case 35668:case 35672:return Nm;case 35669:case 35673:return Um;case 5125:return Fm;case 36294:return Om;case 36295:return km;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Hm}}var Ol=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=wm(e.type)}},kl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wm(e.type)}},Bl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Nl=/(\w+)(\])?(\[|\.)?/g;function Th(n,t){n.seq.push(t),n.map[t.id]=t}function Xm(n,t,e){let i=n.name,s=i.length;for(Nl.lastIndex=0;;){let r=Nl.exec(i),a=Nl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Th(e,c===void 0?new Ol(o,n,t):new kl(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Bl(o),Th(e,d)),e=d}}}var us=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Xm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Eh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var qm=37297,Ym=0;function Zm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Ah=new Nt;function Jm(n){Gt._getMatrix(Ah,Gt.workingColorSpace,n);let t=`mat3( ${Ah.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(n)){case As:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ch(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Zm(n.getShaderSource(t),o)}else return r}function $m(n,t){let e=Jm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Km={[Js]:"Linear",[$s]:"Reinhard",[Ks]:"Cineon",[vn]:"ACESFilmic",[js]:"AgX",[tr]:"Neutral",[Qs]:"Custom"};function Qm(n,t){let e=Km[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fo=new F;function jm(){Gt.getLuminanceCoefficients(fo);let n=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function eg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ig(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ur(n){return n!==""}function Rh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ph(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(n){return n.replace(ng,rg)}var sg=new Map;function rg(n,t){let e=zt[t];if(e===void 0){let i=sg.get(t);if(i!==void 0)e=zt[i],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return zl(e)}var ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(n){return n.replace(ag,og)}function og(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var lg={[Zs]:"SHADOWMAP_TYPE_PCF",[rs]:"SHADOWMAP_TYPE_VSM"};function cg(n){return lg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hg={[rn]:"ENVMAP_TYPE_CUBE",[Mn]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE_UV"};function ug(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":hg[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var fg={[Mn]:"ENVMAP_MODE_REFRACTION"};function dg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var pg={[cl]:"ENVMAP_BLENDING_MULTIPLY",[$c]:"ENVMAP_BLENDING_MIX",[Kc]:"ENVMAP_BLENDING_ADD"};function mg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":pg[n.combine]||"ENVMAP_BLENDING_NONE"}function gg(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function _g(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=cg(e),c=ug(e),u=dg(e),d=mg(e),h=gg(e),p=tg(e),x=eg(r),v=s.createProgram(),m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ur).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ur).join(`
`),f.length>0&&(f+=`
`)):(m=[Lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),f=[Lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?zt.tonemapping_pars_fragment:"",e.toneMapping!==ui?Qm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,$m("linearToOutputTexel",e.outputColorSpace),jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),a=zl(a),a=Rh(a,e),a=Ph(a,e),o=zl(o),o=Rh(o,e),o=Ph(o,e),a=Ih(a),o=Ih(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let P=S+m+a,M=S+f+o,w=Eh(s,s.VERTEX_SHADER,P),b=Eh(s,s.FRAGMENT_SHADER,M);s.attachShader(v,w),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(N){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(w)||"",I=s.getShaderInfoLog(b)||"",G=O.trim(),J=B.trim(),$=I.trim(),it=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,b);else{let j=Ch(s,w,"vertex"),tt=Ch(s,b,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+j+`
`+tt)}else G!==""?Pt("WebGLProgram: Program Info Log:",G):(J===""||$==="")&&(X=!1);X&&(N.diagnostics={runnable:it,programLog:G,vertexShader:{log:J,prefix:m},fragmentShader:{log:$,prefix:f}})}s.deleteShader(w),s.deleteShader(b),_=new us(s,v),E=ig(s,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,qm)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ym++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=b,this}var xg=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Gl(t),e.set(t,i)),i}},Gl=class{constructor(t){this.id=xg++,this.code=t,this.usedTimes=0}};function yg(n){return n===ln||n===or||n===lr}function vg(n,t,e,i,s,r){let a=new Is,o=new Vl,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,E,R,N,O,B){let I=N.fog,G=O.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,it=t.get(_.envMap||J,$),X=it&&it.mapping===er?it.image.height:null,j=p[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Pt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let tt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Et=tt!==void 0?tt.length:0,St=0;G.morphAttributes.position!==void 0&&(St=1),G.morphAttributes.normal!==void 0&&(St=2),G.morphAttributes.color!==void 0&&(St=3);let qt,Vt,Xt,Z;if(j){let re=Ai[j];qt=re.vertexShader,Vt=re.fragmentShader}else{qt=_.vertexShader,Vt=_.fragmentShader;let re=o.getVertexShaderStage(_),Qt=o.getFragmentShaderStage(_);o.update(_,re,Qt),Xt=re.id,Z=Qt.id}let Q=n.getRenderTarget(),dt=n.state.buffers.depth.getReversed(),Lt=O.isInstancedMesh===!0,mt=O.isBatchedMesh===!0,Ot=!!_.map,oe=!!_.matcap,Ut=!!it,kt=!!_.aoMap,Yt=!!_.lightMap,Ft=!!_.bumpMap&&_.wireframe===!1,ie=!!_.normalMap,ge=!!_.displacementMap,me=!!_.emissiveMap,ne=!!_.metalnessMap,pe=!!_.roughnessMap,D=_.anisotropy>0,ye=_.clearcoat>0,Zt=_.dispersion>0,T=_.retroreflectivity>0,g=_.iridescence>0,U=_.sheen>0,H=_.transmission>0,Y=D&&!!_.anisotropyMap,st=ye&&!!_.clearcoatMap,ot=ye&&!!_.clearcoatNormalMap,k=ye&&!!_.clearcoatRoughnessMap,q=g&&!!_.iridescenceMap,nt=g&&!!_.iridescenceThicknessMap,gt=U&&!!_.sheenColorMap,at=U&&!!_.sheenRoughnessMap,rt=!!_.specularMap,yt=!!_.specularColorMap,Ct=!!_.specularIntensityMap,Dt=H&&!!_.transmissionMap,C=H&&!!_.thicknessMap,lt=!!_.gradientMap,K=!!_.alphaMap,ct=_.alphaTest>0,pt=!!_.alphaHash,et=!!_.extensions,At=ui;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(At=n.toneMapping);let bt={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:qt,fragmentShader:Vt,defines:_.defines,customVertexShaderID:Xt,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:mt,batchingColor:mt&&O._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&O.instanceColor!==null,instancingMorph:Lt&&O.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ot,matcap:oe,envMap:Ut,envMapMode:Ut&&it.mapping,envMapCubeUVHeight:X,aoMap:kt,lightMap:Yt,bumpMap:Ft,normalMap:ie,displacementMap:ge,emissiveMap:me,normalMapObjectSpace:ie&&_.normalMapType===th,normalMapTangentSpace:ie&&_.normalMapType===oo,packedNormalMap:ie&&_.normalMapType===oo&&yg(_.normalMap.format),metalnessMap:ne,roughnessMap:pe,anisotropy:D,anisotropyMap:Y,clearcoat:ye,clearcoatMap:st,clearcoatNormalMap:ot,clearcoatRoughnessMap:k,dispersion:Zt,retroreflection:T,iridescence:g,iridescenceMap:q,iridescenceThicknessMap:nt,sheen:U,sheenColorMap:gt,sheenRoughnessMap:at,specularMap:rt,specularColorMap:yt,specularIntensityMap:Ct,transmission:H,transmissionMap:Dt,thicknessMap:C,gradientMap:lt,opaque:_.transparent===!1&&_.blending===as&&_.alphaToCoverage===!1,alphaMap:K,alphaTest:ct,alphaHash:pt,combine:_.combine,mapUv:Ot&&x(_.map.channel),aoMapUv:kt&&x(_.aoMap.channel),lightMapUv:Yt&&x(_.lightMap.channel),bumpMapUv:Ft&&x(_.bumpMap.channel),normalMapUv:ie&&x(_.normalMap.channel),displacementMapUv:ge&&x(_.displacementMap.channel),emissiveMapUv:me&&x(_.emissiveMap.channel),metalnessMapUv:ne&&x(_.metalnessMap.channel),roughnessMapUv:pe&&x(_.roughnessMap.channel),anisotropyMapUv:Y&&x(_.anisotropyMap.channel),clearcoatMapUv:st&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ot&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:at&&x(_.sheenRoughnessMap.channel),specularMapUv:rt&&x(_.specularMap.channel),specularColorMapUv:yt&&x(_.specularColorMap.channel),specularIntensityMapUv:Ct&&x(_.specularIntensityMap.channel),transmissionMapUv:Dt&&x(_.transmissionMap.channel),thicknessMapUv:C&&x(_.thicknessMap.channel),alphaMapUv:K&&x(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ie||D),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Ot||K),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&ie===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:St,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:Ot&&_.map.isVideoTexture===!0&&Gt.getTransfer(_.map.colorSpace)===$t,decodeVideoTextureEmissive:me&&_.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(_.emissiveMap.colorSpace)===$t,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ze,flipSided:_.side===Le,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:et&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&_.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(f(E,_),S(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function f(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function S(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function P(_){let E=p[_.type],R;if(E){let N=Ai[E];R=zi.clone(N.uniforms)}else R=_.uniforms;return R}function M(_,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new _g(n,E,_,s),c.push(R),u.set(E,R)),R}function w(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:P,acquireProgram:M,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:A}}function Mg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Sg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Dh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Nh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,x,v,m,f){let S=n[t];return S===void 0?(S={id:h.id,object:h,geometry:p,material:x,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:f},n[t]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=x,S.materialVariant=a(h),S.groupOrder=v,S.renderOrder=h.renderOrder,S.z=m,S.group=f),t++,S}function l(h,p,x,v,m,f,S){S.reversedDepth===!0&&(m=-m);let P=o(h,p,x,v,m,f);x.transmission>0?i.push(P):x.transparent===!0?s.push(P):e.push(P)}function c(h,p,x,v,m,f){let S=o(h,p,x,v,m,f);x.transmission>0?i.unshift(S):x.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,p){e.length>1&&e.sort(h||Sg),i.length>1&&i.sort(p||Dh),s.length>1&&s.sort(p||Dh)}function d(){for(let h=t,p=n.length;h<p;h++){let x=n[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function bg(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Nh,n.set(i,[a])):s>=r.length?(a=new Nh,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function wg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Rt};break;case"SpotLight":e={position:new F,direction:new F,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function Tg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Eg=0;function Ag(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Cg(n){let t=new wg,e=Tg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new he,a=new he;function o(c){let u=0,d=0,h=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,x=0,v=0,m=0,f=0,S=0,P=0,M=0,w=0,b=0,A=0,_=0,E=0,R=0;c.sort(Ag);for(let O=0,B=c.length;O<B;O++){let I=c[O],G=I.color,J=I.intensity,$=I.distance,it=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ln?it=I.shadow.map.texture:it=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=G.r*J,d+=G.g*J,h+=G.b*J;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],J);R++}else if(I.isSunLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,tt=e.get(I);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[x]=tt,i.sunShadowMap[x]=it;let Et=j.getViewportCount();for(let St=0;St<Et;St++)i.sunShadowMatrix[v+St]=j.getMatrix(St),i.sunShadowCascade[v+St]=j._cascadeData[St];v+=Et,x++}i.sun[p]=X,p++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,tt=e.get(I);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.directionalShadow[m]=tt,i.directionalShadowMap[m]=it,i.directionalShadowMatrix[m]=I.shadow.matrix,w++}i.directional[m]=X,m++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(G).multiplyScalar(J),X.distance=$,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[S]=X;let j=I.shadow;if(I.map&&(i.spotLightMap[_]=I.map,_++,j.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[S]=j.matrix,I.castShadow){let tt=e.get(I);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.spotShadow[S]=tt,i.spotShadowMap[S]=it,A++}S++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(G).multiplyScalar(J),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[P]=X,P++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let j=I.shadow,tt=e.get(I);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,i.pointShadow[f]=tt,i.pointShadowMap[f]=it,i.pointShadowMatrix[f]=I.shadow.matrix,b++}i.point[f]=X,f++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(J),X.groundColor.copy(I.groundColor).multiplyScalar(J),i.hemi[M]=X,M++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let N=i.hash;(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==f||N.spotLength!==S||N.rectAreaLength!==P||N.hemiLength!==M||N.numSunShadows!==x||N.numDirectionalShadows!==w||N.numPointShadows!==b||N.numSpotShadows!==A||N.numSpotMaps!==_||N.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=m,i.spot.length=S,i.rectArea.length=P,i.point.length=f,i.hemi.length=M,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-E,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,N.sunLength=p,N.directionalLength=m,N.pointLength=f,N.spotLength=S,N.rectAreaLength=P,N.hemiLength=M,N.numSunShadows=x,N.numDirectionalShadows=w,N.numPointShadows=b,N.numSpotShadows=A,N.numSpotMaps=_,N.numLightProbes=R,i.version=Eg++)}function l(c,u){let d=0,h=0,p=0,x=0,v=0,m=0,f=u.matrixWorldInverse;for(let S=0,P=c.length;S<P;S++){let M=c[S];if(M.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),d++}else if(M.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),h++}else if(M.isSpotLight){let w=i.spot[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),x++}else if(M.isRectAreaLight){let w=i.rectArea[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let w=i.point[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function Uh(n){let t=new Cg(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Rg(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Uh(n),t.set(s,[o])):r>=a.length?(o=new Uh(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lg=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Dg=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Fh=new he,hr=new F,Ul=new F;function Ng(n,t,e){let i=new jn,s=new Tt,r=new Tt,a=new fe,o=new oa,l=new la,c={},u=e.maxTextureSize,d={[sn]:Le,[Le]:sn,[Ze]:Ze},h=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Pg,fragmentShader:Ig}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let x=new be;x.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new de(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zs;let f=this.type;this.render=function(b,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Ic&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zs);let E=n.getRenderTarget(),R=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),O=n.state;O.setBlending(je),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=f!==this.type;B&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=b.length;I<G;I++){let J=b[I],$=J.shadow;if($===void 0){Pt("WebGLShadowMap:",J,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let it=$.getFrameExtents();s.multiply(it),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,$.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=X,$.map===null||B===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===rs){if(J.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Se(s.x,s.y,{format:ln,type:De,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),$.map.texture.name=J.name+".shadowMap",$.map.depthTexture=new Qi(s.x,s.y,di),$.map.depthTexture.name=J.name+".shadowMapDepth",$.map.depthTexture.format=vi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ce,$.map.depthTexture.magFilter=Ce}else J.isPointLight?($.map=new po(s.x),$.map.depthTexture=new aa(s.x,fi)):($.map=new Se(s.x,s.y),$.map.depthTexture=new Qi(s.x,s.y,fi)),$.map.depthTexture.name=J.name+".shadowMap",$.map.depthTexture.format=vi,this.type===Zs?($.map.depthTexture.compareFunction=X?co:lo,$.map.depthTexture.minFilter=Ie,$.map.depthTexture.magFilter=Ie):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ce,$.map.depthTexture.magFilter=Ce);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let j=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();J.isPointLight!==!0&&$.updateMatrices(J,_);for(let tt=0;tt<j;tt++){let Et=$.getCamera(tt);if(J.isPointLight){let St=$.camera,qt=$.matrix,Vt=J.distance||St.far;Vt!==St.far&&(St.far=Vt,St.updateProjectionMatrix()),hr.setFromMatrixPosition(J.matrixWorld),St.position.copy(hr),Ul.copy(St.position),Ul.add(Lg[tt]),St.up.copy(Dg[tt]),St.lookAt(Ul),St.updateMatrixWorld(),qt.makeTranslation(-hr.x,-hr.y,-hr.z),Fh.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Fh,St.coordinateSystem,St.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,tt),n.clear();else{tt===0&&(n.setRenderTarget($.map),n.clear());let St=$.getViewport(tt);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),O.viewport(a)}i=$.getFrustum(tt),M(A,_,Et,J,this.type)}$.isPointLightShadow!==!0&&this.type===rs&&S($,_),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,R,N)};function S(b,A){let _=t.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Se(s.x,s.y,{format:ln,type:De}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,_,h,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,_,p,v,null)}function P(b,A,_,E){let R=null,N=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)R=N;else if(R=_.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let O=R.uuid,B=A.uuid,I=c[O];I===void 0&&(I={},c[O]=I);let G=I[B];G===void 0&&(G=R.clone(),I[B]=G,A.addEventListener("dispose",w)),R=G}if(R.visible=A.visible,R.wireframe=A.wireframe,E===rs?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=n.properties.get(R);O.light=_}return R}function M(b,A,_,E,R){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===rs)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let B=t.update(b),I=b.material;if(Array.isArray(I)){let G=B.groups;for(let J=0,$=G.length;J<$;J++){let it=G[J],X=I[it.materialIndex];if(X&&X.visible){let j=P(b,X,E,R);b.onBeforeShadow(n,b,A,_,B,j,it),n.renderBufferDirect(_,null,B,j,b,it),b.onAfterShadow(n,b,A,_,B,j,it)}}}else if(I.visible){let G=P(b,I,E,R);b.onBeforeShadow(n,b,A,_,B,G,null),n.renderBufferDirect(_,null,B,G,b,null),b.onAfterShadow(n,b,A,_,B,G,null)}}let O=b.children;for(let B=0,I=O.length;B<I;B++)M(O[B],A,_,E,R)}function w(b){b.target.removeEventListener("dispose",w);for(let _ in c){let E=c[_],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Ug(n,t){function e(){let C=!1,lt=new fe,K=null,ct=new fe(0,0,0,0);return{setMask:function(pt){K!==pt&&!C&&(n.colorMask(pt,pt,pt,pt),K=pt)},setLocked:function(pt){C=pt},setClear:function(pt,et,At,bt,re){re===!0&&(pt*=bt,et*=bt,At*=bt),lt.set(pt,et,At,bt),ct.equals(lt)===!1&&(n.clearColor(pt,et,At,bt),ct.copy(lt))},reset:function(){C=!1,K=null,ct.set(-1,0,0,0)}}}function i(){let C=!1,lt=!1,K=null,ct=null,pt=null;return{setReversed:function(et){if(lt!==et){let At=t.get("EXT_clip_control");et?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),lt=et;let bt=pt;pt=null,this.setClear(bt)}},getReversed:function(){return lt},setTest:function(et){et?Q(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(et){K!==et&&!C&&(n.depthMask(et),K=et)},setFunc:function(et){if(lt&&(et=uh[et]),ct!==et){switch(et){case Xr:n.depthFunc(n.NEVER);break;case qr:n.depthFunc(n.ALWAYS);break;case Yr:n.depthFunc(n.LESS);break;case Xn:n.depthFunc(n.LEQUAL);break;case Zr:n.depthFunc(n.EQUAL);break;case Jr:n.depthFunc(n.GEQUAL);break;case $r:n.depthFunc(n.GREATER);break;case Kr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=et}},setLocked:function(et){C=et},setClear:function(et){pt!==et&&(pt=et,lt&&(et=1-et),n.clearDepth(et))},reset:function(){C=!1,K=null,ct=null,pt=null,lt=!1}}}function s(){let C=!1,lt=null,K=null,ct=null,pt=null,et=null,At=null,bt=null,re=null;return{setTest:function(Qt){C||(Qt?Q(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(Qt){lt!==Qt&&!C&&(n.stencilMask(Qt),lt=Qt)},setFunc:function(Qt,ni,gi){(K!==Qt||ct!==ni||pt!==gi)&&(n.stencilFunc(Qt,ni,gi),K=Qt,ct=ni,pt=gi)},setOp:function(Qt,ni,gi){(et!==Qt||At!==ni||bt!==gi)&&(n.stencilOp(Qt,ni,gi),et=Qt,At=ni,bt=gi)},setLocked:function(Qt){C=Qt},setClear:function(Qt){re!==Qt&&(n.clearStencil(Qt),re=Qt)},reset:function(){C=!1,lt=null,K=null,ct=null,pt=null,et=null,At=null,bt=null,re=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},p=new WeakMap,x=[],v=null,m=!1,f=null,S=null,P=null,M=null,w=null,b=null,A=null,_=new Rt(0,0,0),E=0,R=!1,N=null,O=null,B=null,I=null,G=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,it=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=it>=1):X.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=it>=2);let j=null,tt={},Et=n.getParameter(n.SCISSOR_BOX),St=n.getParameter(n.VIEWPORT),qt=new fe().fromArray(Et),Vt=new fe().fromArray(St);function Xt(C,lt,K,ct){let pt=new Uint8Array(4),et=n.createTexture();n.bindTexture(C,et),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let At=0;At<K;At++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(lt+At,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return et}let Z={};Z[n.TEXTURE_2D]=Xt(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Xt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Xt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Xt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(n.DEPTH_TEST),a.setFunc(Xn),Ft(!1),ie(sl),Q(n.CULL_FACE),kt(je);function Q(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function dt(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function Lt(C,lt){return h[C]!==lt?(n.bindFramebuffer(C,lt),h[C]=lt,C===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=lt),C===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function mt(C,lt){let K=x,ct=!1;if(C){K=p.get(lt),K===void 0&&(K=[],p.set(lt,K));let pt=C.textures;if(K.length!==pt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let et=0,At=pt.length;et<At;et++)K[et]=n.COLOR_ATTACHMENT0+et;K.length=pt.length,ct=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ct=!0);ct&&n.drawBuffers(K)}function Ot(C){return v!==C?(n.useProgram(C),v=C,!0):!1}let oe={[yn]:n.FUNC_ADD,[Dc]:n.FUNC_SUBTRACT,[Nc]:n.FUNC_REVERSE_SUBTRACT};oe[Uc]=n.MIN,oe[Fc]=n.MAX;let Ut={[Oc]:n.ZERO,[kc]:n.ONE,[Bc]:n.SRC_COLOR,[ol]:n.SRC_ALPHA,[Xc]:n.SRC_ALPHA_SATURATE,[Hc]:n.DST_COLOR,[Vc]:n.DST_ALPHA,[zc]:n.ONE_MINUS_SRC_COLOR,[ll]:n.ONE_MINUS_SRC_ALPHA,[Wc]:n.ONE_MINUS_DST_COLOR,[Gc]:n.ONE_MINUS_DST_ALPHA,[qc]:n.CONSTANT_COLOR,[Yc]:n.ONE_MINUS_CONSTANT_COLOR,[Zc]:n.CONSTANT_ALPHA,[Jc]:n.ONE_MINUS_CONSTANT_ALPHA};function kt(C,lt,K,ct,pt,et,At,bt,re,Qt){if(C===je){m===!0&&(dt(n.BLEND),m=!1);return}if(m===!1&&(Q(n.BLEND),m=!0),C!==Lc){if(C!==f||Qt!==R){if((S!==yn||w!==yn)&&(n.blendEquation(n.FUNC_ADD),S=yn,w=yn),Qt)switch(C){case as:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ki:n.blendFunc(n.ONE,n.ONE);break;case rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case al:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:It("WebGLState: Invalid blending: ",C);break}else switch(C){case as:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case rl:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case al:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",C);break}P=null,M=null,b=null,A=null,_.set(0,0,0),E=0,f=C,R=Qt}return}pt=pt||lt,et=et||K,At=At||ct,(lt!==S||pt!==w)&&(n.blendEquationSeparate(oe[lt],oe[pt]),S=lt,w=pt),(K!==P||ct!==M||et!==b||At!==A)&&(n.blendFuncSeparate(Ut[K],Ut[ct],Ut[et],Ut[At]),P=K,M=ct,b=et,A=At),(bt.equals(_)===!1||re!==E)&&(n.blendColor(bt.r,bt.g,bt.b,re),_.copy(bt),E=re),f=C,R=!1}function Yt(C,lt){C.side===Ze?dt(n.CULL_FACE):Q(n.CULL_FACE);let K=C.side===Le;lt&&(K=!K),Ft(K),C.blending===as&&C.transparent===!1?kt(je):kt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let ct=C.stencilWrite;o.setTest(ct),ct&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),me(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(C){N!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),N=C)}function ie(C){C!==Rc?(Q(n.CULL_FACE),C!==O&&(C===sl?n.cullFace(n.BACK):C===Pc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),O=C}function ge(C){C!==B&&($&&n.lineWidth(C),B=C)}function me(C,lt,K){C?(Q(n.POLYGON_OFFSET_FILL),(I!==lt||G!==K)&&(I=lt,G=K,a.getReversed()&&(lt=-lt),n.polygonOffset(lt,K))):dt(n.POLYGON_OFFSET_FILL)}function ne(C){C?Q(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function pe(C){C===void 0&&(C=n.TEXTURE0+J-1),j!==C&&(n.activeTexture(C),j=C)}function D(C,lt,K){K===void 0&&(j===null?K=n.TEXTURE0+J-1:K=j);let ct=tt[K];ct===void 0&&(ct={type:void 0,texture:void 0},tt[K]=ct),(ct.type!==C||ct.texture!==lt)&&(j!==K&&(n.activeTexture(K),j=K),n.bindTexture(C,lt||Z[C]),ct.type=C,ct.texture=lt)}function ye(){let C=tt[j];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Zt(){try{n.compressedTexImage2D(...arguments)}catch(C){It("WebGLState:",C)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(C){It("WebGLState:",C)}}function g(){try{n.texSubImage2D(...arguments)}catch(C){It("WebGLState:",C)}}function U(){try{n.texSubImage3D(...arguments)}catch(C){It("WebGLState:",C)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(C){It("WebGLState:",C)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(C){It("WebGLState:",C)}}function st(){try{n.texStorage2D(...arguments)}catch(C){It("WebGLState:",C)}}function ot(){try{n.texStorage3D(...arguments)}catch(C){It("WebGLState:",C)}}function k(){try{n.texImage2D(...arguments)}catch(C){It("WebGLState:",C)}}function q(){try{n.texImage3D(...arguments)}catch(C){It("WebGLState:",C)}}function nt(C){return d[C]!==void 0?d[C]:n.getParameter(C)}function gt(C,lt){d[C]!==lt&&(n.pixelStorei(C,lt),d[C]=lt)}function at(C){qt.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),qt.copy(C))}function rt(C){Vt.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Vt.copy(C))}function yt(C,lt){let K=c.get(lt);K===void 0&&(K=new WeakMap,c.set(lt,K));let ct=K.get(C);ct===void 0&&(ct=n.getUniformBlockIndex(lt,C.name),K.set(C,ct))}function Ct(C,lt){let ct=c.get(lt).get(C);l.get(lt)!==ct&&(n.uniformBlockBinding(lt,ct,C.__bindingPointIndex),l.set(lt,ct))}function Dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,tt={},h={},p=new WeakMap,x=[],v=null,m=!1,f=null,S=null,P=null,M=null,w=null,b=null,A=null,_=new Rt(0,0,0),E=0,R=!1,N=null,O=null,B=null,I=null,G=null,qt.set(0,0,n.canvas.width,n.canvas.height),Vt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:dt,bindFramebuffer:Lt,drawBuffers:mt,useProgram:Ot,setBlending:kt,setMaterial:Yt,setFlipSided:Ft,setCullFace:ie,setLineWidth:ge,setPolygonOffset:me,setScissorTest:ne,activeTexture:pe,bindTexture:D,unbindTexture:ye,compressedTexImage2D:Zt,compressedTexImage3D:T,texImage2D:k,texImage3D:q,pixelStorei:gt,getParameter:nt,updateUBOMapping:yt,uniformBlockBinding:Ct,texStorage2D:st,texStorage3D:ot,texSubImage2D:g,texSubImage3D:U,compressedTexSubImage2D:H,compressedTexSubImage3D:Y,scissor:at,viewport:rt,reset:Dt}}function Fg(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,u=new WeakMap,d=new Set,h,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,g){return x?new OffscreenCanvas(T,g):Cs("canvas")}function m(T,g,U){let H=1,Y=Zt(T);if((Y.width>U||Y.height>U)&&(H=U/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let st=Math.floor(H*Y.width),ot=Math.floor(H*Y.height);h===void 0&&(h=v(st,ot));let k=g?v(st,ot):h;return k.width=st,k.height=ot,k.getContext("2d").drawImage(T,0,0,st,ot),Pt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+st+"x"+ot+")."),k}else return"data"in T&&Pt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),T;return T}function f(T){return T.generateMipmaps}function S(T){n.generateMipmap(T)}function P(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,g,U,H,Y,st=!1){if(T!==null){if(n[T]!==void 0)return n[T];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ot;H&&(ot=t.get("EXT_texture_norm16"),ot||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=g;if(g===n.RED&&(U===n.FLOAT&&(k=n.R32F),U===n.HALF_FLOAT&&(k=n.R16F),U===n.UNSIGNED_BYTE&&(k=n.R8),U===n.UNSIGNED_SHORT&&ot&&(k=ot.R16_EXT),U===n.SHORT&&ot&&(k=ot.R16_SNORM_EXT)),g===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(k=n.R8UI),U===n.UNSIGNED_SHORT&&(k=n.R16UI),U===n.UNSIGNED_INT&&(k=n.R32UI),U===n.BYTE&&(k=n.R8I),U===n.SHORT&&(k=n.R16I),U===n.INT&&(k=n.R32I)),g===n.RG&&(U===n.FLOAT&&(k=n.RG32F),U===n.HALF_FLOAT&&(k=n.RG16F),U===n.UNSIGNED_BYTE&&(k=n.RG8),U===n.UNSIGNED_SHORT&&ot&&(k=ot.RG16_EXT),U===n.SHORT&&ot&&(k=ot.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(k=n.RG8UI),U===n.UNSIGNED_SHORT&&(k=n.RG16UI),U===n.UNSIGNED_INT&&(k=n.RG32UI),U===n.BYTE&&(k=n.RG8I),U===n.SHORT&&(k=n.RG16I),U===n.INT&&(k=n.RG32I)),g===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(k=n.RGB8UI),U===n.UNSIGNED_SHORT&&(k=n.RGB16UI),U===n.UNSIGNED_INT&&(k=n.RGB32UI),U===n.BYTE&&(k=n.RGB8I),U===n.SHORT&&(k=n.RGB16I),U===n.INT&&(k=n.RGB32I)),g===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),U===n.UNSIGNED_INT&&(k=n.RGBA32UI),U===n.BYTE&&(k=n.RGBA8I),U===n.SHORT&&(k=n.RGBA16I),U===n.INT&&(k=n.RGBA32I)),g===n.RGB&&(U===n.UNSIGNED_SHORT&&ot&&(k=ot.RGB16_EXT),U===n.SHORT&&ot&&(k=ot.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),g===n.RGBA){let q=st?As:Gt.getTransfer(Y);U===n.FLOAT&&(k=n.RGBA32F),U===n.HALF_FLOAT&&(k=n.RGBA16F),U===n.UNSIGNED_BYTE&&(k=q===$t?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&ot&&(k=ot.RGBA16_EXT),U===n.SHORT&&ot&&(k=ot.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function w(T,g){let U;return T?g===null||g===fi||g===ls?U=n.DEPTH24_STENCIL8:g===di?U=n.DEPTH32F_STENCIL8:g===os&&(U=n.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===fi||g===ls?U=n.DEPTH_COMPONENT24:g===di?U=n.DEPTH_COMPONENT32F:g===os&&(U=n.DEPTH_COMPONENT16),U}function b(T,g){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ce&&T.minFilter!==Ie?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function A(T){let g=T.target;g.removeEventListener("dispose",A),E(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function _(T){let g=T.target;g.removeEventListener("dispose",_),N(g)}function E(T){let g=i.get(T);if(g.__webglInit===void 0)return;let U=T.source,H=p.get(U);if(H){let Y=H[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(T),Object.keys(H).length===0&&p.delete(U)}i.remove(T)}function R(T){let g=i.get(T);n.deleteTexture(g.__webglTexture);let U=T.source,H=p.get(U);delete H[g.__cacheKey],a.memory.textures--}function N(T){let g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let Y=0;Y<g.__webglFramebuffer[H].length;Y++)n.deleteFramebuffer(g.__webglFramebuffer[H][Y]);else n.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)n.deleteFramebuffer(g.__webglFramebuffer[H]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let U=T.textures;for(let H=0,Y=U.length;H<Y;H++){let st=i.get(U[H]);st.__webglTexture&&(n.deleteTexture(st.__webglTexture),a.memory.textures--),i.remove(U[H])}i.remove(T)}let O=0;function B(){O=0}function I(){return O}function G(T){O=T}function J(){let T=O;return T>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,T}function $(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function it(T,g){let U=i.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){let H=T.image;if(H===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(U,T,g);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+g)}function X(T,g){let U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){dt(U,T,g);return}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+g)}function j(T,g){let U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){dt(U,T,g);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+g)}function tt(T,g){let U=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&U.__version!==T.version){Lt(U,T,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+g)}let Et={[Qr]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[jr]:n.MIRRORED_REPEAT},St={[Ce]:n.NEAREST,[Qc]:n.NEAREST_MIPMAP_NEAREST,[ir]:n.NEAREST_MIPMAP_LINEAR,[Ie]:n.LINEAR,[wa]:n.LINEAR_MIPMAP_NEAREST,[an]:n.LINEAR_MIPMAP_LINEAR},qt={[ih]:n.NEVER,[oh]:n.ALWAYS,[nh]:n.LESS,[lo]:n.LEQUAL,[sh]:n.EQUAL,[co]:n.GEQUAL,[rh]:n.GREATER,[ah]:n.NOTEQUAL};function Vt(T,g){if(g.type===di&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ie||g.magFilter===wa||g.magFilter===ir||g.magFilter===an||g.minFilter===Ie||g.minFilter===wa||g.minFilter===ir||g.minFilter===an)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Et[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Et[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Et[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,St[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,St[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,qt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ce||g.minFilter!==ir&&g.minFilter!==an||g.type===di&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Xt(T,g){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",A));let H=g.source,Y=p.get(H);Y===void 0&&(Y={},p.set(H,Y));let st=$(g);if(st!==T.__cacheKey){Y[st]===void 0&&(Y[st]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Y[st].usedTimes++;let ot=Y[T.__cacheKey];ot!==void 0&&(Y[T.__cacheKey].usedTimes--,ot.usedTimes===0&&R(g)),T.__cacheKey=st,T.__webglTexture=Y[st].texture}return U}function Z(T,g,U){return Math.floor(Math.floor(T/U)/g)}function Q(T,g,U,H){let st=T.updateRanges;if(st.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,U,H,g.data);else{st.sort((gt,at)=>gt.start-at.start);let ot=0;for(let gt=1;gt<st.length;gt++){let at=st[ot],rt=st[gt],yt=at.start+at.count,Ct=Z(rt.start,g.width,4),Dt=Z(at.start,g.width,4);rt.start<=yt+1&&Ct===Dt&&Z(rt.start+rt.count-1,g.width,4)===Ct?at.count=Math.max(at.count,rt.start+rt.count-at.start):(++ot,st[ot]=rt)}st.length=ot+1;let k=e.getParameter(n.UNPACK_ROW_LENGTH),q=e.getParameter(n.UNPACK_SKIP_PIXELS),nt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let gt=0,at=st.length;gt<at;gt++){let rt=st[gt],yt=Math.floor(rt.start/4),Ct=Math.ceil(rt.count/4),Dt=yt%g.width,C=Math.floor(yt/g.width),lt=Ct,K=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(n.UNPACK_SKIP_ROWS,C),e.texSubImage2D(n.TEXTURE_2D,0,Dt,C,lt,K,U,H,g.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,k),e.pixelStorei(n.UNPACK_SKIP_PIXELS,q),e.pixelStorei(n.UNPACK_SKIP_ROWS,nt)}}function dt(T,g,U){let H=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=n.TEXTURE_3D);let Y=Xt(T,g),st=g.source;e.bindTexture(H,T.__webglTexture,n.TEXTURE0+U);let ot=i.get(st);if(st.version!==ot.__version||Y===!0){if(e.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let K=Gt.getPrimaries(Gt.workingColorSpace),ct=g.colorSpace===Bi?null:Gt.getPrimaries(g.colorSpace),pt=g.colorSpace===Bi||K===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let q=m(g.image,!1,s.maxTextureSize);q=ye(g,q);let nt=r.convert(g.format,g.colorSpace),gt=r.convert(g.type),at=M(g.internalFormat,nt,gt,g.normalized,g.colorSpace,g.isVideoTexture);Vt(H,g);let rt,yt=g.mipmaps,Ct=g.isVideoTexture!==!0,Dt=ot.__version===void 0||Y===!0,C=st.dataReady,lt=b(g,q);if(g.isDepthTexture)at=w(g.format===on,g.type),Dt&&(Ct?e.texStorage2D(n.TEXTURE_2D,1,at,q.width,q.height):e.texImage2D(n.TEXTURE_2D,0,at,q.width,q.height,0,nt,gt,null));else if(g.isDataTexture)if(yt.length>0){Ct&&Dt&&e.texStorage2D(n.TEXTURE_2D,lt,at,yt[0].width,yt[0].height);for(let K=0,ct=yt.length;K<ct;K++)rt=yt[K],Ct?C&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,rt.width,rt.height,nt,gt,rt.data):e.texImage2D(n.TEXTURE_2D,K,at,rt.width,rt.height,0,nt,gt,rt.data);g.generateMipmaps=!1}else Ct?(Dt&&e.texStorage2D(n.TEXTURE_2D,lt,at,q.width,q.height),C&&Q(g,q,nt,gt)):e.texImage2D(n.TEXTURE_2D,0,at,q.width,q.height,0,nt,gt,q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ct&&Dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,at,yt[0].width,yt[0].height,q.depth);for(let K=0,ct=yt.length;K<ct;K++)if(rt=yt[K],g.format!==ti)if(nt!==null)if(Ct){if(C)if(g.layerUpdates.size>0){let pt=wl(rt.width,rt.height,g.format,g.type);for(let et of g.layerUpdates){let At=rt.data.subarray(et*pt/rt.data.BYTES_PER_ELEMENT,(et+1)*pt/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,et,rt.width,rt.height,1,nt,At)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,rt.width,rt.height,q.depth,nt,rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,at,rt.width,rt.height,q.depth,0,rt.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?C&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,rt.width,rt.height,q.depth,nt,gt,rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,at,rt.width,rt.height,q.depth,0,nt,gt,rt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ct&&Dt&&e.texStorage2D(n.TEXTURE_2D,lt,at,yt[0].width,yt[0].height);for(let K=0,ct=yt.length;K<ct;K++)rt=yt[K],g.format!==ti?nt!==null?Ct?C&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,rt.width,rt.height,nt,rt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,at,rt.width,rt.height,0,rt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?C&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,rt.width,rt.height,nt,gt,rt.data):e.texImage2D(n.TEXTURE_2D,K,at,rt.width,rt.height,0,nt,gt,rt.data)}else if(g.isDataArrayTexture)if(Ct){if(Dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,at,q.width,q.height,q.depth),C)if(g.layerUpdates.size>0){let K=wl(q.width,q.height,g.format,g.type);for(let ct of g.layerUpdates){let pt=q.data.subarray(ct*K/q.data.BYTES_PER_ELEMENT,(ct+1)*K/q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,q.width,q.height,1,nt,gt,pt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,nt,gt,q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,at,q.width,q.height,q.depth,0,nt,gt,q.data);else if(g.isData3DTexture)Ct?(Dt&&e.texStorage3D(n.TEXTURE_3D,lt,at,q.width,q.height,q.depth),C&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,nt,gt,q.data)):e.texImage3D(n.TEXTURE_3D,0,at,q.width,q.height,q.depth,0,nt,gt,q.data);else if(g.isFramebufferTexture){if(Dt)if(Ct)e.texStorage2D(n.TEXTURE_2D,lt,at,q.width,q.height);else{let K=q.width,ct=q.height;for(let pt=0;pt<lt;pt++)e.texImage2D(n.TEXTURE_2D,pt,at,K,ct,0,nt,gt,null),K>>=1,ct>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){let K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),q.parentNode!==K){K.appendChild(q),d.add(g),K.onpaint=ct=>{let pt=ct.changedElements;for(let et of d)pt.includes(et.image)&&(et.needsUpdate=!0)},K.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,q);else{let pt=n.RGBA,et=n.RGBA,At=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,pt,et,At,q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(yt.length>0){if(Ct&&Dt){let K=Zt(yt[0]);e.texStorage2D(n.TEXTURE_2D,lt,at,K.width,K.height)}for(let K=0,ct=yt.length;K<ct;K++)rt=yt[K],Ct?C&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,nt,gt,rt):e.texImage2D(n.TEXTURE_2D,K,at,nt,gt,rt);g.generateMipmaps=!1}else if(Ct){if(Dt){let K=Zt(q);e.texStorage2D(n.TEXTURE_2D,lt,at,K.width,K.height)}C&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt,gt,q)}else e.texImage2D(n.TEXTURE_2D,0,at,nt,gt,q);f(g)&&S(H),ot.__version=st.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Lt(T,g,U){if(g.image.length!==6)return;let H=Xt(T,g),Y=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+U);let st=i.get(Y);if(Y.version!==st.__version||H===!0){e.activeTexture(n.TEXTURE0+U);let ot=Gt.getPrimaries(Gt.workingColorSpace),k=g.colorSpace===Bi?null:Gt.getPrimaries(g.colorSpace),q=g.colorSpace===Bi||ot===k?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let nt=g.isCompressedTexture||g.image[0].isCompressedTexture,gt=g.image[0]&&g.image[0].isDataTexture,at=[];for(let et=0;et<6;et++)!nt&&!gt?at[et]=m(g.image[et],!0,s.maxCubemapSize):at[et]=gt?g.image[et].image:g.image[et],at[et]=ye(g,at[et]);let rt=at[0],yt=r.convert(g.format,g.colorSpace),Ct=r.convert(g.type),Dt=M(g.internalFormat,yt,Ct,g.normalized,g.colorSpace),C=g.isVideoTexture!==!0,lt=st.__version===void 0||H===!0,K=Y.dataReady,ct=b(g,rt);Vt(n.TEXTURE_CUBE_MAP,g);let pt;if(nt){C&&lt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Dt,rt.width,rt.height);for(let et=0;et<6;et++){pt=at[et].mipmaps;for(let At=0;At<pt.length;At++){let bt=pt[At];g.format!==ti?yt!==null?C?K&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,0,0,bt.width,bt.height,yt,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,Dt,bt.width,bt.height,0,bt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,0,0,bt.width,bt.height,yt,Ct,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,Dt,bt.width,bt.height,0,yt,Ct,bt.data)}}}else{if(pt=g.mipmaps,C&&lt){pt.length>0&&ct++;let et=Zt(at[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Dt,et.width,et.height)}for(let et=0;et<6;et++)if(gt){C?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,at[et].width,at[et].height,yt,Ct,at[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Dt,at[et].width,at[et].height,0,yt,Ct,at[et].data);for(let At=0;At<pt.length;At++){let re=pt[At].image[et].image;C?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,0,0,re.width,re.height,yt,Ct,re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,Dt,re.width,re.height,0,yt,Ct,re.data)}}else{C?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,yt,Ct,at[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Dt,yt,Ct,at[et]);for(let At=0;At<pt.length;At++){let bt=pt[At];C?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,0,0,yt,Ct,bt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,Dt,yt,Ct,bt.image[et])}}}f(g)&&S(n.TEXTURE_CUBE_MAP),st.__version=Y.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function mt(T,g,U,H,Y,st){let ot=r.convert(U.format,U.colorSpace),k=r.convert(U.type),q=M(U.internalFormat,ot,k,U.normalized,U.colorSpace),nt=i.get(g),gt=i.get(U);if(gt.__renderTarget=g,!nt.__hasExternalTextures){let at=Math.max(1,g.width>>st),rt=Math.max(1,g.height>>st);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?e.texImage3D(Y,st,q,at,rt,g.depth,0,ot,k,null):e.texImage2D(Y,st,q,at,rt,0,ot,k,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),pe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,Y,gt.__webglTexture,0,ne(g)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,Y,gt.__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(T,g,U){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){let H=g.depthTexture,Y=H&&H.isDepthTexture?H.type:null,st=w(g.stencilBuffer,Y),ot=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne(g),st,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne(g),st,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,st,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,T)}else{let H=g.textures;for(let Y=0;Y<H.length;Y++){let st=H[Y],ot=r.convert(st.format,st.colorSpace),k=r.convert(st.type),q=M(st.internalFormat,ot,k,st.normalized,st.colorSpace);pe(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne(g),q,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne(g),q,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,q,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(T,g,U){let H=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Vt(n.TEXTURE_CUBE_MAP,g.depthTexture);let nt=r.convert(g.depthTexture.format),gt=r.convert(g.depthTexture.type),at;g.depthTexture.format===vi?at=n.DEPTH_COMPONENT24:g.depthTexture.format===on&&(at=n.DEPTH24_STENCIL8);for(let rt=0;rt<6;rt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,at,g.width,g.height,0,nt,gt,null)}}else it(g.depthTexture,0);let st=Y.__webglTexture,ot=ne(g),k=H?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,q=g.depthTexture.format===on?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===vi)pe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,k,st,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,q,k,st,0);else if(g.depthTexture.format===on)pe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,k,st,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,q,k,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ut(T){let g=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let H=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){let Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=H}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let H=0;H<6;H++)oe(g.__webglFramebuffer[H],T,H);else{let H=T.texture.mipmaps;H&&H.length>0?oe(g.__webglFramebuffer[0],T,0):oe(g.__webglFramebuffer,T,0)}else if(U){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=n.createRenderbuffer(),Ot(g.__webglDepthbuffer[H],T,!1);else{let Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=g.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,st)}}else{let H=T.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ot(g.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,st)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(T,g,U){let H=i.get(T);g!==void 0&&mt(H.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Ut(T)}function Yt(T){let g=T.texture,U=i.get(T),H=i.get(g);T.addEventListener("dispose",_);let Y=T.textures,st=T.isWebGLCubeRenderTarget===!0,ot=Y.length>1;if(ot||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=g.version,a.memory.textures++),st){U.__webglFramebuffer=[];for(let k=0;k<6;k++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[k]=[];for(let q=0;q<g.mipmaps.length;q++)U.__webglFramebuffer[k][q]=n.createFramebuffer()}else U.__webglFramebuffer[k]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let k=0;k<g.mipmaps.length;k++)U.__webglFramebuffer[k]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ot)for(let k=0,q=Y.length;k<q;k++){let nt=i.get(Y[k]);nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&pe(T)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let k=0;k<Y.length;k++){let q=Y[k];U.__webglColorRenderbuffer[k]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[k]);let nt=r.convert(q.format,q.colorSpace),gt=r.convert(q.type),at=M(q.internalFormat,nt,gt,q.normalized,q.colorSpace,T.isXRRenderTarget===!0),rt=ne(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,at,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.RENDERBUFFER,U.__webglColorRenderbuffer[k])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ot(U.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Vt(n.TEXTURE_CUBE_MAP,g);for(let k=0;k<6;k++)if(g.mipmaps&&g.mipmaps.length>0)for(let q=0;q<g.mipmaps.length;q++)mt(U.__webglFramebuffer[k][q],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,q);else mt(U.__webglFramebuffer[k],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);f(g)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let k=0,q=Y.length;k<q;k++){let nt=Y[k],gt=i.get(nt),at=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,gt.__webglTexture),Vt(at,nt),mt(U.__webglFramebuffer,T,nt,n.COLOR_ATTACHMENT0+k,at,0),f(nt)&&S(at)}e.unbindTexture()}else{let k=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(k=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(k,H.__webglTexture),Vt(k,g),g.mipmaps&&g.mipmaps.length>0)for(let q=0;q<g.mipmaps.length;q++)mt(U.__webglFramebuffer[q],T,g,n.COLOR_ATTACHMENT0,k,q);else mt(U.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,k,0);f(g)&&S(k),e.unbindTexture()}T.depthBuffer&&Ut(T)}function Ft(T){let g=T.textures;for(let U=0,H=g.length;U<H;U++){let Y=g[U];if(f(Y)){let st=P(T),ot=i.get(Y).__webglTexture;e.bindTexture(st,ot),S(st),e.unbindTexture()}}}let ie=[],ge=[];function me(T){if(T.samples>0){if(pe(T)===!1){let g=T.textures,U=T.width,H=T.height,Y=n.COLOR_BUFFER_BIT,st=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(T),k=g.length>1;if(k)for(let nt=0;nt<g.length;nt++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let q=T.texture.mipmaps;q&&q.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let nt=0;nt<g.length;nt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),k){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[nt]);let gt=i.get(g[nt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,U,H,0,0,U,H,Y,n.NEAREST),l===!0&&(ie.length=0,ge.length=0,ie.push(n.COLOR_ATTACHMENT0+nt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(ie.push(st),ge.push(st),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),k)for(let nt=0;nt<g.length;nt++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,ot.__webglColorRenderbuffer[nt]);let gt=i.get(g[nt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.TEXTURE_2D,gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function ne(T){return Math.min(s.maxSamples,T.samples)}function pe(T){let g=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(T){let g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function ye(T,g){let U=T.colorSpace,H=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==Es&&U!==Bi&&(Gt.getTransfer(U)===$t?(H!==ti||Y!==He)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",U)),g}function Zt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=it,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=tt,this.rebindTextures=kt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Og(n,t){function e(i,s=Bi){let r,a=Gt.getTransfer(s);if(i===He)return n.UNSIGNED_BYTE;if(i===Ea)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Aa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ul)return n.BYTE;if(i===fl)return n.SHORT;if(i===os)return n.UNSIGNED_SHORT;if(i===Ta)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===De)return n.HALF_FLOAT;if(i===ml)return n.ALPHA;if(i===gl)return n.RGB;if(i===ti)return n.RGBA;if(i===vi)return n.DEPTH_COMPONENT;if(i===on)return n.DEPTH_STENCIL;if(i===_l)return n.RED;if(i===Ca)return n.RED_INTEGER;if(i===ln)return n.RG;if(i===Ra)return n.RG_INTEGER;if(i===Pa)return n.RGBA_INTEGER;if(i===nr||i===sr||i===rr||i===ar)if(a===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ia||i===La||i===Da||i===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ua||i===Fa||i===Oa||i===ka||i===Ba||i===or||i===za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ua||i===Fa)return a===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ka)return r.COMPRESSED_R11_EAC;if(i===Ba)return r.COMPRESSED_SIGNED_R11_EAC;if(i===or)return r.COMPRESSED_RG11_EAC;if(i===za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Va||i===Ga||i===Ha||i===Wa||i===Xa||i===qa||i===Ya||i===Za||i===Ja||i===$a||i===Ka||i===Qa||i===ja||i===to)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Va)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ga)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ha)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ya)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Za)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ja)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$a)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ka)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ja)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===to)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===eo||i===io||i===no)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===eo)return a===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===no)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===so||i===ro||i===lr||i===ao)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===so)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ks(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new xe({vertexShader:kg,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wl=class extends Mi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,x=null,v=typeof XRWebGLBinding<"u",m=new Hl,f={},S=e.getContextAttributes(),P=null,M=null,w=[],b=[],A=new Tt,_=null,E=null,R=new Pe;R.viewport=new fe;let N=new Pe;N.viewport=new fe;let O=[R,N],B=new va,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=w[Z];return Q===void 0&&(Q=new $n,w[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=w[Z];return Q===void 0&&(Q=new $n,w[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=w[Z];return Q===void 0&&(Q=new $n,w[Z]=Q),Q.getHandSpace()};function J(Z){let Q=b.indexOf(Z.inputSource);if(Q===-1)return;let dt=w[Q];dt!==void 0&&(dt.update(Z.inputSource,Z.frame,c||a),dt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",it);for(let Z=0;Z<w.length;Z++){let Q=b[Z];Q!==null&&(b[Z]=null,w[Z].disconnect(Q))}I=null,G=null,m.reset();for(let Z in f)delete f[Z];if(t.setRenderTarget(P),p=null,h=null,d=null,s=null,M=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),E!==null){let Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",$),s.addEventListener("inputsourceschange",it),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Lt=null,mt=null;S.depth&&(mt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=S.stencil?on:vi,Lt=S.stencil?ls:fi);let Ot={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ot),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new Se(h.textureWidth,h.textureHeight,{format:ti,type:He,depthTexture:new Qi(h.textureWidth,h.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let dt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Se(p.framebufferWidth,p.framebufferHeight,{format:ti,type:He,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(Z){for(let Q=0;Q<Z.removed.length;Q++){let dt=Z.removed[Q],Lt=b.indexOf(dt);Lt>=0&&(b[Lt]=null,w[Lt].disconnect(dt))}for(let Q=0;Q<Z.added.length;Q++){let dt=Z.added[Q],Lt=b.indexOf(dt);if(Lt===-1){for(let Ot=0;Ot<w.length;Ot++)if(Ot>=b.length){b.push(dt),Lt=Ot;break}else if(b[Ot]===null){b[Ot]=dt,Lt=Ot;break}if(Lt===-1)break}let mt=w[Lt];mt&&mt.connect(dt)}}let X=new F,j=new F;function tt(Z,Q,dt){X.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(dt.matrixWorld);let Lt=X.distanceTo(j),mt=Q.projectionMatrix.elements,Ot=dt.projectionMatrix.elements,oe=mt[14]/(mt[10]-1),Ut=mt[14]/(mt[10]+1),kt=(mt[9]+1)/mt[5],Yt=(mt[9]-1)/mt[5],Ft=(mt[8]-1)/mt[0],ie=(Ot[8]+1)/Ot[0],ge=oe*Ft,me=oe*ie,ne=Lt/(-Ft+ie),pe=ne*-Ft;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(pe),Z.translateZ(ne),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),mt[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let D=oe+ne,ye=Ut+ne,Zt=ge-pe,T=me+(Lt-pe),g=kt*Ut/ye*D,U=Yt*Ut/ye*D;Z.projectionMatrix.makePerspective(Zt,T,g,U,D,ye),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Et(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,dt=Z.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),B.near=N.near=R.near=Q,B.far=N.far=R.far=dt,(I!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,G=B.far),B.layers.mask=Z.layers.mask|6,R.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;let Lt=Z.parent,mt=B.cameras;Et(B,Lt);for(let Ot=0;Ot<mt.length;Ot++)Et(mt[Ot],Lt);mt.length===2?tt(B,R,N):B.projectionMatrix.copy(R.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),St(Z,B,Lt)};function St(Z,Q,dt){dt===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(dt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Zn*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Z){return f[Z]};let qt=null;function Vt(Z,Q){if(u=Q.getViewerPose(c||a),x=Q,u!==null){let dt=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Lt=!1;dt.length!==B.cameras.length&&(B.cameras.length=0,Lt=!0);for(let Ut=0;Ut<dt.length;Ut++){let kt=dt[Ut],Yt=null;if(p!==null)Yt=p.getViewport(kt);else{let ie=d.getViewSubImage(h,kt);Yt=ie.viewport,Ut===0&&(t.setRenderTargetTextures(M,ie.colorTexture,ie.depthStencilTexture),t.setRenderTarget(M))}let Ft=O[Ut];Ft===void 0&&(Ft=new Pe,Ft.layers.enable(Ut),Ft.viewport=new fe,O[Ut]=Ft),Ft.matrix.fromArray(kt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(kt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Ut===0&&(B.matrix.copy(Ft.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Lt===!0&&B.cameras.push(Ft)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let Ut=d.getDepthInformation(dt[0]);Ut&&Ut.isValid&&Ut.texture&&m.init(Ut,s.renderState)}if(mt&&mt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let Ut=0;Ut<dt.length;Ut++){let kt=dt[Ut].camera;if(kt){let Yt=f[kt];Yt||(Yt=new ks,f[kt]=Yt);let Ft=d.getCameraImage(kt);Yt.sourceTexture=Ft}}}}for(let dt=0;dt<w.length;dt++){let Lt=b[dt],mt=w[dt];Lt!==null&&mt!==void 0&&mt.update(Lt,Q,c||a)}qt&&qt(Z,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),x=null}let Xt=new Oh;Xt.setAnimationLoop(Vt),this.setAnimationLoop=function(Z){qt=Z},this.dispose=function(){}}},zg=new he,Hh=new Nt;Hh.set(-1,0,0,0,1,0,0,0,1);function Vg(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ml(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,P,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,P):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Le&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Le&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f),P=S.envMap,M=S.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(zg.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Hh),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,P){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=P*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Le&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Gg(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let b=w.program;i.uniformBlockBinding(M,b)}function c(M,w){let b=s[M.id];b===void 0&&(m(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",S));let A=w.program;i.updateUBOMapping(M,A);let _=t.render.frame;r[M.id]!==_&&(h(M),r[M.id]=_)}function u(M){let w=d();M.__bindingPointIndex=w;let b=n.createBuffer(),A=M.__size,_=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let w=s[M.id],b=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let _=0,E=b.length;_<E;_++){let R=b[_];if(Array.isArray(R))for(let N=0,O=R.length;N<O;N++)p(R[N],_,N,A);else p(R,_,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,w,b,A){if(v(M,w,b,A)===!0){let _=M.__offset,E=M.value;if(Array.isArray(E)){let R=0;for(let N=0;N<E.length;N++){let O=E[N],B=f(O);x(O,M.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,M.__data)}}function x(M,w,b){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,b)}function v(M,w,b,A){let _=M.value,E=w+"_"+b;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{let R=A[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(M){let w=M.uniforms,b=0,A=16;for(let E=0,R=w.length;E<R;E++){let N=Array.isArray(w[E])?w[E]:[w[E]];for(let O=0,B=N.length;O<B;O++){let I=N[O],G=Array.isArray(I.value)?I.value:[I.value];for(let J=0,$=G.length;J<$;J++){let it=G[J],X=f(it),j=b%A,tt=j%X.boundary,Et=j+tt;b+=tt,Et!==0&&A-Et<X.storage&&(b+=A-Et),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=X.storage}}}let _=b%A;return _>0&&(b+=A-_),M.__size=b,M.__cache={},this}function f(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",M),w}function S(M){let w=M.target;w.removeEventListener("dispose",S);let b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function P(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}var Hg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function Wg(){return Ei===null&&(Ei=new ra(Hg,16,16,ln,De),Ei.name="DFG_LUT",Ei.minFilter=Ie,Ei.magFilter=Ie,Ei.wrapS=yi,Ei.wrapT=yi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var mo=class{constructor(t={}){let{canvas:e=lh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=He}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let v=p,m=new Set([Pa,Ra,Ca]),f=new Set([He,fi,os,ls,Ea,Aa]),S=new Uint32Array(4),P=new Int32Array(4),M=new F,w=null,b=null,A=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,O=null,B=null,I=null,G=null;this._outputColorSpace=Oe;let J=0,$=0,it=null,X=-1,j=null,tt=new fe,Et=new fe,St=null,qt=new Rt(0),Vt=0,Xt=e.width,Z=e.height,Q=1,dt=null,Lt=null,mt=new fe(0,0,Xt,Z),Ot=new fe(0,0,Xt,Z),oe=!1,Ut=new jn,kt=!1,Yt=!1,Ft=new he,ie=new F,ge=new fe,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function pe(){return it===null?Q:1}let D=i;function ye(y,L){return e.getContext(y,L)}let Zt,T,g,U,H,Y,st,ot,k,q,nt,gt,at,rt,yt,Ct,Dt,C,lt,K,ct,pt,et;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",re,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",ni,!1),D===null){let L="webgl2";if(D=ye(L,y),D===null)throw ye(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(y){throw e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",ni,!1),It("WebGLRenderer: "+y.message),y}function At(){Zt=new Kp(D),Zt.init(),ct=new Og(D,Zt),T=new Vp(D,Zt,t,ct),g=new Ug(D,Zt),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),B=D.createFramebuffer(),I=D.createFramebuffer(),G=D.createFramebuffer(),U=new tm(D),H=new Mg,Y=new Fg(D,Zt,g,H,T,ct,U),st=new $p(R),ot=new ef(D),pt=new Bp(D,ot),k=new Qp(D,ot,U,pt),q=new im(D,k,ot,pt,U),C=new em(D,T,Y),yt=new Gp(H),nt=new vg(R,st,Zt,T,pt,yt),gt=new Vg(R,H),at=new bg,rt=new Rg(Zt),Dt=new kp(R,st,g,q,x,l),Ct=new Ng(R,q,T),et=new Gg(D,U,T,g),lt=new zp(D,Zt,U),K=new jp(D,Zt,U),U.programs=nt.programs,R.capabilities=T,R.extensions=Zt,R.properties=H,R.renderLists=at,R.shadowMap=Ct,R.state=g,R.info=U}v!==He&&(E=new sm(v,e.width,e.height,o,s,r));let bt=new Wl(R,D);this.xr=bt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=Zt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Zt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(y){y!==void 0&&(Q=y,this.setSize(Xt,Z,!1))},this.getSize=function(y){return y.set(Xt,Z)},this.setSize=function(y,L,W=!0){if(bt.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}Xt=y,Z=L,e.width=Math.floor(y*Q),e.height=Math.floor(L*Q),W===!0&&(e.style.width=y+"px",e.style.height=L+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(Xt*Q,Z*Q).floor()},this.setDrawingBufferSize=function(y,L,W){Xt=y,Z=L,Q=W,e.width=Math.floor(y*W),e.height=Math.floor(L*W),this.setViewport(0,0,y,L)},this.setEffects=function(y){if(v===He){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let L=0;L<y.length;L++)if(y[L].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(tt)},this.getViewport=function(y){return y.copy(mt)},this.setViewport=function(y,L,W,z){y.isVector4?mt.set(y.x,y.y,y.z,y.w):mt.set(y,L,W,z),g.viewport(tt.copy(mt).multiplyScalar(Q).round())},this.getScissor=function(y){return y.copy(Ot)},this.setScissor=function(y,L,W,z){y.isVector4?Ot.set(y.x,y.y,y.z,y.w):Ot.set(y,L,W,z),g.scissor(Et.copy(Ot).multiplyScalar(Q).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(y){g.setScissorTest(oe=y)},this.setOpaqueSort=function(y){dt=y},this.setTransparentSort=function(y){Lt=y},this.getClearColor=function(y){return y.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,W=!0){let z=0;if(y){let V=!1;if(it!==null){let ft=it.texture.format;V=m.has(ft)}if(V){let ft=it.texture.type,xt=f.has(ft),ut=Dt.getClearColor(),vt=Dt.getClearAlpha(),wt=ut.r,Bt=ut.g,Ht=ut.b;xt?(S[0]=wt,S[1]=Bt,S[2]=Ht,S[3]=vt,D.clearBufferuiv(D.COLOR,0,S)):(P[0]=wt,P[1]=Bt,P[2]=Ht,P[3]=vt,D.clearBufferiv(D.COLOR,0,P))}else z|=D.COLOR_BUFFER_BIT}L&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",ni,!1),Dt.dispose(),at.dispose(),rt.dispose(),H.dispose(),st.dispose(),q.dispose(),pt.dispose(),et.dispose(),nt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Zl),bt.removeEventListener("sessionend",Jl),un.stop()};function re(y){y.preventDefault(),Rs("WebGLRenderer: Context Lost."),N=!0}function Qt(){Rs("WebGLRenderer: Context Restored."),N=!1;let y=U.autoReset,L=Ct.enabled,W=Ct.autoUpdate,z=Ct.needsUpdate,V=Ct.type;At(),U.autoReset=y,Ct.enabled=L,Ct.autoUpdate=W,Ct.needsUpdate=z,Ct.type=V}function ni(y){It("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function gi(y){let L=y.target;L.removeEventListener("dispose",gi),$h(L)}function $h(y){Kh(y),H.remove(y)}function Kh(y){let L=H.get(y).programs;L!==void 0&&(L.forEach(function(W){nt.releaseProgram(W)}),y.isShaderMaterial&&nt.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,W,z,V,ft){L===null&&(L=me);let xt=V.isMesh&&V.matrixWorld.determinantAffine()<0,ut=tu(y,L,W,z,V);g.setMaterial(z,xt);let vt=W.index,wt=1;if(z.wireframe===!0){if(vt=k.getWireframeAttribute(W),vt===void 0)return;wt=2}let Bt=W.drawRange,Ht=W.attributes.position,Mt=Bt.start*wt,jt=(Bt.start+Bt.count)*wt;ft!==null&&(Mt=Math.max(Mt,ft.start*wt),jt=Math.min(jt,(ft.start+ft.count)*wt)),vt!==null?(Mt=Math.max(Mt,0),jt=Math.min(jt,vt.count)):Ht!=null&&(Mt=Math.max(Mt,0),jt=Math.min(jt,Ht.count));let ve=jt-Mt;if(ve<0||ve===1/0)return;pt.setup(V,z,ut,W,vt);let le,se=lt;if(vt!==null&&(le=ot.get(vt),se=K,se.setIndex(le)),V.isMesh)z.wireframe===!0?(g.setLineWidth(z.wireframeLinewidth*pe()),se.setMode(D.LINES)):se.setMode(D.TRIANGLES);else if(V.isLine){let Ne=z.linewidth;Ne===void 0&&(Ne=1),g.setLineWidth(Ne*pe()),V.isLineSegments?se.setMode(D.LINES):V.isLineLoop?se.setMode(D.LINE_LOOP):se.setMode(D.LINE_STRIP)}else V.isPoints?se.setMode(D.POINTS):V.isSprite&&se.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(Zt.get("WEBGL_multi_draw"))se.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ne=V._multiDrawStarts,_t=V._multiDrawCounts,ze=V._multiDrawCount,Jt=vt?ot.get(vt).bytesPerElement:1,$e=H.get(z).currentProgram.getUniforms();for(let _i=0;_i<ze;_i++)$e.setValue(D,"_gl_DrawID",_i),se.render(Ne[_i]/Jt,_t[_i])}else if(V.isInstancedMesh)se.renderInstances(Mt,ve,V.count);else if(W.isInstancedBufferGeometry){let Ne=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_t=Math.min(W.instanceCount,Ne);se.renderInstances(Mt,ve,_t)}else se.render(Mt,ve)};function Yl(y,L,W,z){O!==null&&y.isNodeMaterial&&O.setObject(z,y),kt===!0&&yt.setState(y,W,!1),y.transparent===!0&&y.side===Ze&&y.forceSinglePass===!1?(y.side=Le,y.needsUpdate=!0,xr(y,L,z),y.side=sn,y.needsUpdate=!0,xr(y,L,z),y.side=Ze):xr(y,L,z)}this.compile=function(y,L,W=null){W===null&&(W=y),O!==null&&O.renderStart(y,L,W),b=rt.get(W),b.init(L),_.push(b),W.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),y!==W&&y.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),Yt=this.localClippingEnabled,kt=yt.init(this.clippingPlanes,Yt),kt===!0&&yt.setGlobalState(this.clippingPlanes,L),O!==null&&Ct.render(b.state.shadowsArray,W,L);let z=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ft=V.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){let ut=ft[xt];Yl(ut,W,L,V),z.add(ut)}else Yl(ft,W,L,V),z.add(ft)}),b=_.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(y,L,W=null){let z=this.compile(y,L,W);return new Promise(V=>{function ft(){if(z.forEach(function(xt){let vt=H.get(xt).currentProgram;(vt===void 0||vt.isReady())&&z.delete(xt)}),z.size===0){V(y);return}setTimeout(ft,10)}Zt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let To=null;function Qh(y){To&&To(y)}function Zl(){un.stop()}function Jl(){un.start()}let un=new Oh;un.setAnimationLoop(Qh),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(y){To=y,bt.setAnimationLoop(y),y===null?un.stop():un.start()},bt.addEventListener("sessionstart",Zl),bt.addEventListener("sessionend",Jl),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(y,L);let W=bt.enabled===!0&&bt.isPresenting===!0,z=E!==null&&(it===null||W)&&E.begin(R,it);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(L),L=bt.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,L,it),b=rt.get(y,_.length),b.init(L),b.state.textureUnits=Y.getTextureUnits(),_.push(b),Ft.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ut.setFromProjectionMatrix(Ft,ci,L.reversedDepth),Yt=this.localClippingEnabled,kt=yt.init(this.clippingPlanes,Yt),w=at.get(y,A.length),w.init(),A.push(w),bt.enabled===!0&&bt.isPresenting===!0){let xt=R.xr.getDepthSensingMesh();xt!==null&&Eo(xt,L,-1/0,R.sortObjects)}Eo(y,L,0,R.sortObjects),w.finish(),O!==null&&O.updateLights(b.state.lightsArray),R.sortObjects===!0&&w.sort(dt,Lt),ne=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ne&&Dt.addToRenderList(w,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),kt===!0&&yt.beginShadows();let V=b.state.shadowsArray;if(Ct.render(V,y,L),kt===!0&&yt.endShadows(),(z&&E.hasRenderPass())===!1){let xt=w.opaque,ut=w.transmissive;if(b.setupLights(),L.isArrayCamera){let vt=L.cameras;if(ut.length>0)for(let wt=0,Bt=vt.length;wt<Bt;wt++){let Ht=vt[wt];Kl(xt,ut,y,Ht)}ne&&Dt.render(y);for(let wt=0,Bt=vt.length;wt<Bt;wt++){let Ht=vt[wt];$l(w,y,Ht,Ht.viewport)}}else ut.length>0&&Kl(xt,ut,y,L),ne&&Dt.render(y),$l(w,y,L)}it!==null&&$===0&&(Y.updateMultisampleRenderTarget(it),Y.updateRenderTargetMipmap(it)),z&&E.end(R),y.isScene===!0&&y.onAfterRender(R,y,L),pt.resetDefaultState(),X=-1,j=null,_.pop(),_.length>0?(b=_[_.length-1],Y.setTextureUnits(b.state.textureUnits),kt===!0&&yt.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,O!==null&&O.renderEnd()};function Eo(y,L,W,z){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Ut)){z&&ge.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ft);let xt=q.update(y),ut=y.material;ut.visible&&w.push(y,xt,ut,W,ge.z,null,L)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Ut))){let xt=q.update(y),ut=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ge.copy(y.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),ge.copy(xt.boundingSphere.center)),ge.applyMatrix4(y.matrixWorld).applyMatrix4(Ft)),Array.isArray(ut)){let vt=xt.groups;for(let wt=0,Bt=vt.length;wt<Bt;wt++){let Ht=vt[wt],Mt=ut[Ht.materialIndex];Mt&&Mt.visible&&w.push(y,xt,Mt,W,ge.z,Ht,L)}}else ut.visible&&w.push(y,xt,ut,W,ge.z,null,L)}}let ft=y.children;for(let xt=0,ut=ft.length;xt<ut;xt++)Eo(ft[xt],L,W,z)}function $l(y,L,W,z){let{opaque:V,transmissive:ft,transparent:xt}=y;b.setupLightsView(W),kt===!0&&yt.setGlobalState(R.clippingPlanes,W),z&&g.viewport(tt.copy(z)),V.length>0&&_r(V,L,W),ft.length>0&&_r(ft,L,W),xt.length>0&&_r(xt,L,W),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Kl(y,L,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){let Mt=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new Se(1,1,{generateMipmaps:!0,type:Mt?De:He,minFilter:an,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}let ft=b.state.transmissionRenderTarget[z.id],xt=z.viewport||tt;ft.setSize(xt.z*R.transmissionResolutionScale,xt.w*R.transmissionResolutionScale);let ut=R.getRenderTarget(),vt=R.getActiveCubeFace(),wt=R.getActiveMipmapLevel();R.setRenderTarget(ft),R.getClearColor(qt),Vt=R.getClearAlpha(),Vt<1&&R.setClearColor(16777215,.5),R.clear(),ne&&Dt.render(W);let Bt=R.toneMapping;R.toneMapping=ui;let Ht=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),kt===!0&&yt.setGlobalState(R.clippingPlanes,z),_r(y,W,z),Y.updateMultisampleRenderTarget(ft),Y.updateRenderTargetMipmap(ft),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let jt=0,ve=L.length;jt<ve;jt++){let le=L[jt],{object:se,geometry:Ne,material:_t,group:ze}=le;if(_t.side===Ze&&se.layers.test(z.layers)){let Jt=_t.side;_t.side=Le,_t.needsUpdate=!0,Ql(se,W,z,Ne,_t,ze),_t.side=Jt,_t.needsUpdate=!0,Mt=!0}}Mt===!0&&(Y.updateMultisampleRenderTarget(ft),Y.updateRenderTargetMipmap(ft))}R.setRenderTarget(ut,vt,wt),R.setClearColor(qt,Vt),Ht!==void 0&&(z.viewport=Ht),R.toneMapping=Bt}function _r(y,L,W){let z=L.isScene===!0?L.overrideMaterial:null;for(let V=0,ft=y.length;V<ft;V++){let xt=y[V],{object:ut,geometry:vt,group:wt}=xt,Bt=xt.material;Bt.allowOverride===!0&&z!==null&&(Bt=z),ut.layers.test(W.layers)&&Ql(ut,L,W,vt,Bt,wt)}}function Ql(y,L,W,z,V,ft){O!==null&&V.isNodeMaterial&&O.setObject(y,V),y.onBeforeRender(R,L,W,z,V,ft),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(R,L,W,z,y,ft),V.transparent===!0&&V.side===Ze&&V.forceSinglePass===!1?(V.side=Le,V.needsUpdate=!0,R.renderBufferDirect(W,L,z,V,y,ft),V.side=sn,V.needsUpdate=!0,R.renderBufferDirect(W,L,z,V,y,ft),V.side=Ze):R.renderBufferDirect(W,L,z,V,y,ft),y.onAfterRender(R,L,W,z,V,ft)}function xr(y,L,W){L.isScene!==!0&&(L=me);let z=H.get(y),V=b.state.lights,ft=b.state.shadowsArray,xt=V.state.version,ut=nt.getParameters(y,V.state,ft,L,W,b.state.lightProbeGridArray),vt=nt.getProgramCacheKey(ut),wt=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,z.fog=L.fog;let Bt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=st.get(y.envMap||z.environment,Bt),z.envMapRotation=z.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,wt===void 0&&(y.addEventListener("dispose",gi),wt=new Map,z.programs=wt);let Ht=wt.get(vt);if(Ht!==void 0){if(z.currentProgram===Ht&&z.lightsStateVersion===xt)return tc(y,ut),Ht}else ut.uniforms=nt.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,W,ut),y.onBeforeCompile(ut,R),Ht=nt.acquireProgram(ut,vt),wt.set(vt,Ht),z.uniforms=ut.uniforms;let Mt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Mt.clippingPlanes=yt.uniform),tc(y,ut),z.needsLights=iu(y),z.lightsStateVersion=xt,z.needsLights&&(Mt.ambientLightColor.value=V.state.ambient,Mt.lightProbe.value=V.state.probe,Mt.sunLights.value=V.state.sun,Mt.sunLightShadows.value=V.state.sunShadow,Mt.directionalLights.value=V.state.directional,Mt.directionalLightShadows.value=V.state.directionalShadow,Mt.spotLights.value=V.state.spot,Mt.spotLightShadows.value=V.state.spotShadow,Mt.rectAreaLights.value=V.state.rectArea,Mt.ltc_1.value=V.state.rectAreaLTC1,Mt.ltc_2.value=V.state.rectAreaLTC2,Mt.pointLights.value=V.state.point,Mt.pointLightShadows.value=V.state.pointShadow,Mt.hemisphereLights.value=V.state.hemi,Mt.sunShadowMatrix.value=V.state.sunShadowMatrix,Mt.sunShadowCascade.value=V.state.sunShadowCascade,Mt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Mt.spotLightMatrix.value=V.state.spotLightMatrix,Mt.spotLightMap.value=V.state.spotLightMap,Mt.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=Ht,z.uniformsList=null,Ht}function jl(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=us.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function tc(y,L){let W=H.get(y);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function jh(y,L){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(L.matrixWorld);for(let W=0,z=y.length;W<z;W++){let V=y[W];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function tu(y,L,W,z,V){L.isScene!==!0&&(L=me),Y.resetTextureUnits();let ft=L.fog,xt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?L.environment:null,ut=it===null?R.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Gt.workingColorSpace,vt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,wt=st.get(z.envMap||xt,vt),Bt=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Mt=!!W.morphAttributes.position,jt=!!W.morphAttributes.normal,ve=!!W.morphAttributes.color,le=ui;z.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(le=R.toneMapping);let se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ne=se!==void 0?se.length:0,_t=H.get(z),ze=b.state.lights;if(kt===!0&&(Yt===!0||y!==j)){let ae=y===j&&z.id===X;yt.setState(z,y,ae)}let Jt=!1;z.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==ze.state.version||_t.outputColorSpace!==ut||V.isBatchedMesh&&_t.batching===!1||!V.isBatchedMesh&&_t.batching===!0||V.isBatchedMesh&&_t.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&_t.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&_t.instancing===!1||!V.isInstancedMesh&&_t.instancing===!0||V.isSkinnedMesh&&_t.skinning===!1||!V.isSkinnedMesh&&_t.skinning===!0||V.isInstancedMesh&&_t.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&_t.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&_t.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&_t.instancingMorph===!1&&V.morphTexture!==null||_t.envMap!==wt||z.fog===!0&&_t.fog!==ft||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==yt.numPlanes||_t.numIntersection!==yt.numIntersection)||_t.vertexAlphas!==Bt||_t.vertexTangents!==Ht||_t.morphTargets!==Mt||_t.morphNormals!==jt||_t.morphColors!==ve||_t.toneMapping!==le||_t.morphTargetsCount!==Ne||!!_t.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,_t.__version=z.version);let $e=_t.currentProgram;Jt===!0&&($e=xr(z,L,V),O&&z.isNodeMaterial&&O.onUpdateProgram(z,$e,_t));let _i=!1,Gi=!1,Tn=!1,ee=$e.getUniforms(),_e=_t.uniforms;if(g.useProgram($e.program)&&(_i=!0,Gi=!0,Tn=!0),z.id!==X&&(X=z.id,Gi=!0),_t.needsLights){let ae=jh(b.state.lightProbeGridArray,V);_t.lightProbeGrid!==ae&&(_t.lightProbeGrid=ae,Gi=!0)}if(_i||j!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ee.setValue(D,"projectionMatrix",y.projectionMatrix),ee.setValue(D,"viewMatrix",y.matrixWorldInverse);let Wi=ee.map.cameraPosition;Wi!==void 0&&Wi.setValue(D,ie.setFromMatrixPosition(y.matrixWorld)),T.logarithmicDepthBuffer&&ee.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ee.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),j!==y&&(j=y,Gi=!0,Tn=!0)}if(_t.needsLights&&(ze.state.sunShadowMap.length>0&&ee.setValue(D,"sunShadowMap",ze.state.sunShadowMap,Y),ze.state.directionalShadowMap.length>0&&ee.setValue(D,"directionalShadowMap",ze.state.directionalShadowMap,Y),ze.state.spotShadowMap.length>0&&ee.setValue(D,"spotShadowMap",ze.state.spotShadowMap,Y),ze.state.pointShadowMap.length>0&&ee.setValue(D,"pointShadowMap",ze.state.pointShadowMap,Y)),V.isSkinnedMesh){ee.setOptional(D,V,"bindMatrix"),ee.setOptional(D,V,"bindMatrixInverse");let ae=V.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),ee.setValue(D,"boneTexture",ae.boneTexture,Y))}V.isBatchedMesh&&(ee.setOptional(D,V,"batchingTexture"),ee.setValue(D,"batchingTexture",V._matricesTexture,Y),ee.setOptional(D,V,"batchingIdTexture"),ee.setValue(D,"batchingIdTexture",V._indirectTexture,Y),ee.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&ee.setValue(D,"batchingColorTexture",V._colorsTexture,Y));let Hi=W.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&C.update(V,W,$e),(Gi||_t.receiveShadow!==V.receiveShadow)&&(_t.receiveShadow=V.receiveShadow,ee.setValue(D,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&L.environment!==null&&(_e.envMapIntensity.value=L.environmentIntensity),_e.dfgLUT!==void 0&&(_e.dfgLUT.value=Wg()),Gi){if(ee.setValue(D,"toneMappingExposure",R.toneMappingExposure),_t.needsLights&&eu(_e,Tn),ft&&z.fog===!0&&gt.refreshFogUniforms(_e,ft),gt.refreshMaterialUniforms(_e,z,Q,Z,b.state.transmissionRenderTarget[y.id]),_t.needsLights&&_t.lightProbeGrid){let ae=_t.lightProbeGrid;_e.probesSH.value=ae.texture,_e.probesMin.value.copy(ae.boundingBox.min),_e.probesMax.value.copy(ae.boundingBox.max),_e.probesResolution.value.copy(ae.resolution)}us.upload(D,jl(_t),_e,Y)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(us.upload(D,jl(_t),_e,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ee.setValue(D,"center",V.center),ee.setValue(D,"modelViewMatrix",V.modelViewMatrix),ee.setValue(D,"normalMatrix",V.normalMatrix),ee.setValue(D,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let ae=z.uniformsGroups;for(let Wi=0,En=ae.length;Wi<En;Wi++){let ic=ae[Wi];et.update(ic,$e),et.bind(ic,$e)}}return $e}function eu(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.sunLights.needsUpdate=L,y.sunLightShadows.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function iu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(y,L,W){let z=H.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(y.texture).__webglTexture=L,H.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let W=H.get(y);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,W=0){it=y,J=L,$=W;let z=null,V=!1,ft=!1;if(y){let ut=H.get(y);if(ut.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,ut.__webglFramebuffer),tt.copy(y.viewport),Et.copy(y.scissor),St=y.scissorTest,g.viewport(tt),g.scissor(Et),g.setScissorTest(St),X=-1;return}else if(ut.__webglFramebuffer===void 0)Y.setupRenderTarget(y);else if(ut.__hasExternalTextures)Y.rebindTextures(y,H.get(y.texture).__webglTexture,H.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Bt=y.depthTexture;if(ut.__boundDepthTexture!==Bt){if(Bt!==null&&H.has(Bt)&&(y.width!==Bt.image.width||y.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(y)}}let vt=y.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ft=!0);let wt=H.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(wt[L])?z=wt[L][W]:z=wt[L],V=!0):y.samples>0&&Y.useMultisampledRTT(y)===!1?z=H.get(y).__webglMultisampledFramebuffer:Array.isArray(wt)?z=wt[W]:z=wt,tt.copy(y.viewport),Et.copy(y.scissor),St=y.scissorTest}else tt.copy(mt).multiplyScalar(Q).floor(),Et.copy(Ot).multiplyScalar(Q).floor(),St=oe;if(W!==0&&(z=B),g.bindFramebuffer(D.FRAMEBUFFER,z)&&g.drawBuffers(y,z),g.viewport(tt),g.scissor(Et),g.setScissorTest(St),V){let ut=H.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,ut.__webglTexture,W)}else if(ft){let ut=L;for(let vt=0;vt<y.textures.length;vt++){let wt=H.get(y.textures[vt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+vt,wt.__webglTexture,W,ut)}}else if(y!==null&&W!==0){let ut=H.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ut.__webglTexture,W)}X=-1};function ec(y){let L=H.get(y);return(L.__readFormat!==y.format||L.__readType!==y.type)&&(L.__readFormat=y.format,L.__readType=y.type,L.__formatReadable=T.textureFormatReadable(y.format),L.__typeReadable=T.textureTypeReadable(y.type)),L}this.readRenderTargetPixels=function(y,L,W,z,V,ft,xt,ut=0){if(!(y&&y.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=H.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xt!==void 0&&(vt=vt[xt]),vt){g.bindFramebuffer(D.FRAMEBUFFER,vt);try{let wt=y.textures[ut],Bt=wt.format,Ht=wt.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut);let Mt=ec(wt);if(Mt.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-z&&W>=0&&W<=y.height-V&&D.readPixels(L,W,z,V,ct.convert(Bt),ct.convert(Ht),ft)}finally{let wt=it!==null?H.get(it).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(y,L,W,z,V,ft,xt,ut=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=H.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xt!==void 0&&(vt=vt[xt]),vt)if(L>=0&&L<=y.width-z&&W>=0&&W<=y.height-V){g.bindFramebuffer(D.FRAMEBUFFER,vt);let wt=y.textures[ut],Bt=wt.format,Ht=wt.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut);let Mt=ec(wt);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,jt),D.bufferData(D.PIXEL_PACK_BUFFER,ft.byteLength,D.STREAM_READ),D.readPixels(L,W,z,V,ct.convert(Bt),ct.convert(Ht),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let ve=it!==null?H.get(it).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,ve);let le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await hh(D,le,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,jt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ft),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(jt),D.deleteSync(le),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,W=0){let z=Math.pow(2,-W),V=Math.floor(y.image.width*z),ft=Math.floor(y.image.height*z),xt=L!==null?L.x:0,ut=L!==null?L.y:0;Y.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,xt,ut,V,ft),g.unbindTexture()},this.copyTextureToTexture=function(y,L,W=null,z=null,V=0,ft=0){let xt,ut,vt,wt,Bt,Ht,Mt,jt,ve,le=y.isCompressedTexture?y.mipmaps[ft]:y.image;if(W!==null)xt=W.max.x-W.min.x,ut=W.max.y-W.min.y,vt=W.isBox3?W.max.z-W.min.z:1,wt=W.min.x,Bt=W.min.y,Ht=W.isBox3?W.min.z:0;else{let _e=Math.pow(2,-V);xt=Math.floor(le.width*_e),ut=Math.floor(le.height*_e),y.isDataArrayTexture?vt=le.depth:y.isData3DTexture?vt=Math.floor(le.depth*_e):vt=1,wt=0,Bt=0,Ht=0}z!==null?(Mt=z.x,jt=z.y,ve=z.z):(Mt=0,jt=0,ve=0);let se=ct.convert(L.format),Ne=ct.convert(L.type),_t;L.isData3DTexture?(Y.setTexture3D(L,0),_t=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Y.setTexture2DArray(L,0),_t=D.TEXTURE_2D_ARRAY):(Y.setTexture2D(L,0),_t=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);let ze=g.getParameter(D.UNPACK_ROW_LENGTH),Jt=g.getParameter(D.UNPACK_IMAGE_HEIGHT),$e=g.getParameter(D.UNPACK_SKIP_PIXELS),_i=g.getParameter(D.UNPACK_SKIP_ROWS),Gi=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,le.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,wt),g.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Ht);let Tn=y.isDataArrayTexture||y.isData3DTexture,ee=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let _e=H.get(y),Hi=H.get(L),ae=H.get(_e.__renderTarget),Wi=H.get(Hi.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,ae.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let En=0;En<vt;En++)Tn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(y).__webglTexture,V,Ht+En),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(L).__webglTexture,ft,ve+En)),D.blitFramebuffer(wt,Bt,xt,ut,Mt,jt,xt,ut,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||H.has(y)){let _e=H.get(y),Hi=H.get(L);g.bindFramebuffer(D.READ_FRAMEBUFFER,I),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let ae=0;ae<vt;ae++)Tn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.__webglTexture,V,Ht+ae):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,V),ee?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Hi.__webglTexture,ft,ve+ae):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Hi.__webglTexture,ft),V!==0?D.blitFramebuffer(wt,Bt,xt,ut,Mt,jt,xt,ut,D.COLOR_BUFFER_BIT,D.NEAREST):ee?D.copyTexSubImage3D(_t,ft,Mt,jt,ve+ae,wt,Bt,xt,ut):D.copyTexSubImage2D(_t,ft,Mt,jt,wt,Bt,xt,ut);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ee?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(_t,ft,Mt,jt,ve,xt,ut,vt,se,Ne,le.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(_t,ft,Mt,jt,ve,xt,ut,vt,se,le.data):D.texSubImage3D(_t,ft,Mt,jt,ve,xt,ut,vt,se,Ne,le):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ft,Mt,jt,xt,ut,se,Ne,le.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ft,Mt,jt,le.width,le.height,se,le.data):D.texSubImage2D(D.TEXTURE_2D,ft,Mt,jt,xt,ut,se,Ne,le);g.pixelStorei(D.UNPACK_ROW_LENGTH,ze),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Jt),g.pixelStorei(D.UNPACK_SKIP_PIXELS,$e),g.pixelStorei(D.UNPACK_SKIP_ROWS,_i),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Gi),ft===0&&L.generateMipmaps&&D.generateMipmap(_t),g.unbindTexture()},this.initRenderTarget=function(y){H.get(y).__webglFramebuffer===void 0&&Y.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Y.setTextureCube(y,0):y.isData3DTexture?Y.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Y.setTexture2DArray(y,0):Y.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){J=0,$=0,it=null,g.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}};var fr=new F;function ei(n,t,e,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;fr.copy(t),fr[i]=0,fr.normalize();let c=.5*a/(a+o),u=1-fr.angleTo(n)/l;return Math.sign(fr[e])===1?u*c:o/(a+o)+c+c*(1-u)}var dr=class n extends wi{constructor(t=1,e=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new F,c=new F,u=new F(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,x=d.length/6,v=new F,m=.5/a;for(let f=0,S=0;f<d.length;f+=3,S+=2)switch(l.fromArray(d,f),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[f+0]=u.x*Math.sign(l.x)+c.x*r,d[f+1]=u.y*Math.sign(l.y)+c.y*r,d[f+2]=u.z*Math.sign(l.z)+c.z*r,h[f+0]=c.x,h[f+1]=c.y,h[f+2]=c.z,Math.floor(f/x)){case 0:v.set(1,0,0),p[S+0]=ei(v,c,"z","y",r,i),p[S+1]=1-ei(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),p[S+0]=1-ei(v,c,"z","y",r,i),p[S+1]=1-ei(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),p[S+0]=1-ei(v,c,"x","z",r,t),p[S+1]=ei(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),p[S+0]=1-ei(v,c,"x","z",r,t),p[S+1]=1-ei(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),p[S+0]=1-ei(v,c,"x","y",r,t),p[S+1]=1-ei(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),p[S+0]=ei(v,c,"x","y",r,t),p[S+1]=1-ei(v,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var ps={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Je=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},qg=new nn(-1,1,1,-1,0,1),Xl=class extends be{constructor(){super(),this.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ue([0,2,0,0,2,0],2))}},Yg=new Xl,cn=class{constructor(t){this._mesh=new de(Yg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,qg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var xo=class extends Je{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=zi.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new cn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var pr=class extends Je{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},yo=class extends Je{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var vo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new Tt);this._width=i.width,this._height=i.height,e=new Se(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:De}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xo(ps),this.copyPass.material.blending=je,this.timer=new Ys}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}pr!==void 0&&(a instanceof pr?i=!0:a instanceof yo&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Mo=class extends Je{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Rt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Wh={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ms=class n extends Je{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Tt(t.x,t.y):new Tt(256,256),this.clearColor=new Rt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Se(r,a,{type:De,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Se(r,a,{type:De,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new Se(r,a,{type:De,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=Wh;this.highPassUniforms=zi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Tt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=zi.clone(ps.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:ps.vertexShader,fragmentShader:ps.fragmentShader,premultipliedAlpha:!0,blending:ki,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Rt,this._oldClearAlpha=1,this._basic=new hi,this._fsQuad=new cn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Tt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new xe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Tt(.5,.5)},direction:{value:new Tt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ms.BlurDirectionX=new Tt(1,0);ms.BlurDirectionY=new Tt(0,1);var mr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var So=class extends Je{constructor(){super(),this.isOutputPass=!0,this.uniforms=zi.clone(mr.uniforms),this.material=new es({name:mr.name,uniforms:this.uniforms,vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader}),this._fsQuad=new cn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Gt.getTransfer(this._outputColorSpace)===$t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Js?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$s?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ks?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===js?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===tr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Qs&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 280" width="1024" height="1434"><defs><pattern id="hG" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M10 2l2.3 5.7L18 10l-5.7 2.3L10 18l-2.3-5.7L2 10l5.7-2.3z" fill="none" stroke="rgb(84,84,84)" stroke-width=".55"/><path d="M0 0l4 4M20 0l-4 4M0 20l4-4M20 20l-4-4" stroke="rgb(84,84,84)" stroke-width=".55"/><circle cx="10" cy="10" r="1.1" fill="rgb(153,153,153)"/></pattern><pattern id="hB" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="rgb(128,128,128)"/><path d="M4 .8L7.2 4 4 7.2.8 4z" fill="rgb(204,204,204)"/><circle cx="4" cy="4" r="1" fill="rgb(107,107,107)"/></pattern></defs><rect width="200" height="280" fill="rgb(115,115,115)"/><rect x="21" y="21" width="158" height="238" fill="url(#hG)"/><path d="M9 9h182v262H9zM17 17v246h166V17z" fill="url(#hB)" fill-rule="evenodd"/><g fill="none" stroke="rgb(224,224,224)"><rect x="5" y="5" width="190" height="270" rx="4" stroke-width="1.8"/><rect x="9" y="9" width="182" height="262" rx="2" stroke-width=".8"/><rect x="17" y="17" width="166" height="246" rx="1" stroke-width=".8"/><rect x="21" y="21" width="158" height="238" stroke-width="1.4"/></g><g transform="translate(21 21) rotate(0)"><path d="M0,0 L32,0 A32,32 0 0 1 0,32Z" fill="rgb(163,163,163)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(102)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(117)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(132)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(147)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(162)" fill="rgb(219,219,219)"/><path d="M0,24 A24,24 0 0 0 24,0" fill="none" stroke="rgb(87,87,87)" stroke-width=".9"/><path d="M0,8 A8,8 0 0 0 8,0" fill="none" stroke="rgb(87,87,87)" stroke-width="1"/><circle cx="4" cy="4" r="2.4" fill="rgb(242,242,242)"/></g><g transform="translate(179 21) rotate(90)"><path d="M0,0 L32,0 A32,32 0 0 1 0,32Z" fill="rgb(163,163,163)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(102)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(117)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(132)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(147)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(162)" fill="rgb(219,219,219)"/><path d="M0,24 A24,24 0 0 0 24,0" fill="none" stroke="rgb(87,87,87)" stroke-width=".9"/><path d="M0,8 A8,8 0 0 0 8,0" fill="none" stroke="rgb(87,87,87)" stroke-width="1"/><circle cx="4" cy="4" r="2.4" fill="rgb(242,242,242)"/></g><g transform="translate(179 259) rotate(180)"><path d="M0,0 L32,0 A32,32 0 0 1 0,32Z" fill="rgb(163,163,163)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(102)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(117)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(132)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(147)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(162)" fill="rgb(219,219,219)"/><path d="M0,24 A24,24 0 0 0 24,0" fill="none" stroke="rgb(87,87,87)" stroke-width=".9"/><path d="M0,8 A8,8 0 0 0 8,0" fill="none" stroke="rgb(87,87,87)" stroke-width="1"/><circle cx="4" cy="4" r="2.4" fill="rgb(242,242,242)"/></g><g transform="translate(21 259) rotate(270)"><path d="M0,0 L32,0 A32,32 0 0 1 0,32Z" fill="rgb(163,163,163)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(102)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(117)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(132)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(147)" fill="rgb(219,219,219)"/><path d="M0,-8 C3.6,-12.55 2.52,-18.4 0,-21 C-2.52,-18.4 -3.6,-12.55 0,-8Z" transform="rotate(162)" fill="rgb(219,219,219)"/><path d="M0,24 A24,24 0 0 0 24,0" fill="none" stroke="rgb(87,87,87)" stroke-width=".9"/><path d="M0,8 A8,8 0 0 0 8,0" fill="none" stroke="rgb(87,87,87)" stroke-width="1"/><circle cx="4" cy="4" r="2.4" fill="rgb(242,242,242)"/></g><g transform="translate(100 140) scale(1 1)"><path d="M0,-47 L0,-53" stroke="rgb(209,209,209)" stroke-width="1.6"/><path d="M0,-53 C9,-56 13,-66 0,-82 C-13,-66 -9,-56 0,-53Z" fill="rgb(189,189,189)"/><path d="M0,-57 C5,-60 7,-66 0,-75 C-7,-66 -5,-60 0,-57Z" fill="none" stroke="rgb(107,107,107)" stroke-width=".7"/><circle cy="-65" r="2.5" fill="rgb(242,242,242)"/><circle cy="-85" r="1.8" fill="rgb(235,235,235)"/></g><g transform="translate(100 140) scale(1 -1)"><path d="M0,-47 L0,-53" stroke="rgb(209,209,209)" stroke-width="1.6"/><path d="M0,-53 C9,-56 13,-66 0,-82 C-13,-66 -9,-56 0,-53Z" fill="rgb(189,189,189)"/><path d="M0,-57 C5,-60 7,-66 0,-75 C-7,-66 -5,-60 0,-57Z" fill="none" stroke="rgb(107,107,107)" stroke-width=".7"/><circle cy="-65" r="2.5" fill="rgb(242,242,242)"/><circle cy="-85" r="1.8" fill="rgb(235,235,235)"/></g><g transform="translate(100 140)"><circle r="47" fill="rgb(153,153,153)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(0)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(22.5)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(45)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(67.5)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(90)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(112.5)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(135)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(157.5)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(180)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(202.5)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(225)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(247.5)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(270)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(292.5)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(315)" fill="rgb(214,214,214)"/><path d="M0,-31 C6.2,-36.25 4.34,-43 0,-46 C-4.34,-43 -6.2,-36.25 0,-31Z" transform="rotate(337.5)" fill="rgb(214,214,214)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(11.25)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(33.75)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(56.25)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(78.75)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(101.25)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(123.75)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(146.25)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(168.75)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(191.25)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(213.75)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(236.25)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(258.75)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(281.25)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(303.75)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(326.25)" fill="rgb(179,179,179)"/><path d="M0,-33 C3,-36.15 2.0999999999999996,-40.2 0,-42 C-2.0999999999999996,-40.2 -3,-36.15 0,-33Z" transform="rotate(348.75)" fill="rgb(179,179,179)"/><circle r="31.5" fill="none" stroke="rgb(77,77,77)" stroke-width="1.3"/><circle cx="0" cy="-29.3" r=".95" fill="rgb(245,245,245)"/><circle cx="5.09" cy="-28.85" r=".95" fill="rgb(245,245,245)"/><circle cx="10.02" cy="-27.53" r=".95" fill="rgb(245,245,245)"/><circle cx="14.65" cy="-25.37" r=".95" fill="rgb(245,245,245)"/><circle cx="18.83" cy="-22.45" r=".95" fill="rgb(245,245,245)"/><circle cx="22.45" cy="-18.83" r=".95" fill="rgb(245,245,245)"/><circle cx="25.37" cy="-14.65" r=".95" fill="rgb(245,245,245)"/><circle cx="27.53" cy="-10.02" r=".95" fill="rgb(245,245,245)"/><circle cx="28.85" cy="-5.09" r=".95" fill="rgb(245,245,245)"/><circle cx="29.3" cy="0" r=".95" fill="rgb(245,245,245)"/><circle cx="28.85" cy="5.09" r=".95" fill="rgb(245,245,245)"/><circle cx="27.53" cy="10.02" r=".95" fill="rgb(245,245,245)"/><circle cx="25.37" cy="14.65" r=".95" fill="rgb(245,245,245)"/><circle cx="22.45" cy="18.83" r=".95" fill="rgb(245,245,245)"/><circle cx="18.83" cy="22.45" r=".95" fill="rgb(245,245,245)"/><circle cx="14.65" cy="25.37" r=".95" fill="rgb(245,245,245)"/><circle cx="10.02" cy="27.53" r=".95" fill="rgb(245,245,245)"/><circle cx="5.09" cy="28.85" r=".95" fill="rgb(245,245,245)"/><circle cx="0" cy="29.3" r=".95" fill="rgb(245,245,245)"/><circle cx="-5.09" cy="28.85" r=".95" fill="rgb(245,245,245)"/><circle cx="-10.02" cy="27.53" r=".95" fill="rgb(245,245,245)"/><circle cx="-14.65" cy="25.37" r=".95" fill="rgb(245,245,245)"/><circle cx="-18.83" cy="22.45" r=".95" fill="rgb(245,245,245)"/><circle cx="-22.45" cy="18.83" r=".95" fill="rgb(245,245,245)"/><circle cx="-25.37" cy="14.65" r=".95" fill="rgb(245,245,245)"/><circle cx="-27.53" cy="10.02" r=".95" fill="rgb(245,245,245)"/><circle cx="-28.85" cy="5.09" r=".95" fill="rgb(245,245,245)"/><circle cx="-29.3" cy="0" r=".95" fill="rgb(245,245,245)"/><circle cx="-28.85" cy="-5.09" r=".95" fill="rgb(245,245,245)"/><circle cx="-27.53" cy="-10.02" r=".95" fill="rgb(245,245,245)"/><circle cx="-25.37" cy="-14.65" r=".95" fill="rgb(245,245,245)"/><circle cx="-22.45" cy="-18.83" r=".95" fill="rgb(245,245,245)"/><circle cx="-18.83" cy="-22.45" r=".95" fill="rgb(245,245,245)"/><circle cx="-14.65" cy="-25.37" r=".95" fill="rgb(245,245,245)"/><circle cx="-10.02" cy="-27.53" r=".95" fill="rgb(245,245,245)"/><circle cx="-5.09" cy="-28.85" r=".95" fill="rgb(245,245,245)"/><circle r="27" fill="rgb(128,128,128)"/><circle r="24.5" fill="none" stroke="rgb(184,184,184)" stroke-width=".6" stroke-dasharray="1 1.2"/></g><path d="M42,135 L45,140 L42,145 L39,140Z" fill="rgb(219,219,219)"/><path d="M158,135 L161,140 L158,145 L155,140Z" fill="rgb(219,219,219)"/></svg>',qh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 280" width="1024" height="1434"><rect width="200" height="280" fill="#000"/><circle cx="25" cy="25" r="2.4" fill="#fff"/><circle cx="175" cy="25" r="2.4" fill="#fff"/><circle cx="175" cy="255" r="2.4" fill="#fff"/><circle cx="25" cy="255" r="2.4" fill="#fff"/><circle cx="100" cy="75" r="2.4" fill="#fff"/><circle cx="100" cy="205" r="2.4" fill="#fff"/></svg>',Yh='<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1434" viewBox="0 0 200 280" preserveAspectRatio="none"><defs><pattern id="pgFlor" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="#1d4f91"/><path d="M5 1.2c1.4 1.6 1.4 2.4 0 3.8-1.4-1.4-1.4-2.2 0-3.8zM5 9c1.4-1.6 1.4-2.4 0-3.8-1.4 1.4-1.4 2.2 0 3.8zM1 5c1.6-1.4 2.4-1.4 3.8 0-1.4 1.4-2.2 1.4-3.8 0zM9 5c-1.6-1.4-2.4-1.4-3.8 0 1.4 1.4 2.2 1.4 3.8 0z" fill="#d9b25a"/><circle cx="5" cy="5" r=".8" fill="#fff"/></pattern><pattern id="pgLeaf" width="12" height="12" patternUnits="userSpaceOnUse"><rect width="12" height="12" fill="#e2c476"/><path d="M6 1c2.5 2 2.5 4 0 5-2.5-1-2.5-3 0-5zM6 11c2.5-2 2.5-4 0-5-2.5 1-2.5 3 0 5z" fill="#1f7a5c"/><circle cx="0" cy="6" r="1.3" fill="#b0302f"/><circle cx="12" cy="6" r="1.3" fill="#b0302f"/></pattern></defs><rect x="4" y="4" width="192" height="272" fill="none" stroke="#b8892c" stroke-width="1.4"/><path d="M8 8h184v264H8zM15 15v250h170V15z" fill="url(#pgFlor)" fill-rule="evenodd"/><path d="M8 8h184v264H8zM15 15v250h170V15z" fill="none" stroke="#b8892c" stroke-width="1"/><path d="M15 15h170v250H15zM100 34 C150 34 168 56 168 80 V200 C168 224 150 246 100 246 C50 246 32 224 32 200 V80 C32 56 50 34 100 34Z" fill="url(#pgLeaf)" fill-rule="evenodd"/><path d="M100 34 C150 34 168 56 168 80 V200 C168 224 150 246 100 246 C50 246 32 224 32 200 V80 C32 56 50 34 100 34Z" fill="none" stroke="#1d4f91" stroke-width="2.2"/><path d="M100 38 C146 38 164 58 164 81 V199 C164 222 146 242 100 242 C54 242 36 222 36 199 V81 C36 58 54 38 100 38Z" fill="#fffbef" stroke="#b8892c" stroke-width="1"/><g transform="translate(15 15)"><circle r="6.5" fill="#1d4f91" stroke="#b8892c" stroke-width="1"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(0)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(45)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(90)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(135)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(180)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(225)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(270)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(315)" fill="#e2c476"/><circle r="1.3" fill="#b0302f"/></g><g transform="translate(185 15)"><circle r="6.5" fill="#1d4f91" stroke="#b8892c" stroke-width="1"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(0)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(45)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(90)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(135)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(180)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(225)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(270)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(315)" fill="#e2c476"/><circle r="1.3" fill="#b0302f"/></g><g transform="translate(185 265)"><circle r="6.5" fill="#1d4f91" stroke="#b8892c" stroke-width="1"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(0)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(45)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(90)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(135)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(180)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(225)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(270)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(315)" fill="#e2c476"/><circle r="1.3" fill="#b0302f"/></g><g transform="translate(15 265)"><circle r="6.5" fill="#1d4f91" stroke="#b8892c" stroke-width="1"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(0)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(45)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(90)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(135)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(180)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(225)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(270)" fill="#e2c476"/><path d="M0,-0.6 C1.8,-2.21 1.26,-4.279999999999999 0,-5.199999999999999 C-1.26,-4.279999999999999 -1.8,-2.21 0,-0.6Z" transform="rotate(315)" fill="#e2c476"/><circle r="1.3" fill="#b0302f"/></g></svg>',Zh='<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1434" viewBox="0 0 200 280" preserveAspectRatio="none"><filter id="ebF" x="0" y="0" width="100%" height="100%"><feTurbulence type="turbulence" baseFrequency=".035 .022" numOctaves="2" seed="4" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="16" xChannelSelector="R" yChannelSelector="G"/></filter><g filter="url(#ebF)"><rect width="200" height="280" fill="#efe2bf"/><circle cx="0.02" cy="125.14" r="7.12" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="172.09" cy="114.39" r="9.17" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="94.45" cy="78.85" r="6.19" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="28.12" cy="106.48" r="9.88" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="76.53" cy="23.71" r="6.18" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="118.47" cy="155.26" r="8.79" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="61.57" cy="222.94" r="4.12" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="115.2" cy="199.67" r="4.14" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="177.4" cy="146.19" r="4.97" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="191.8" cy="89.74" r="13.01" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="143.49" cy="226.25" r="13.49" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="33.34" cy="223.87" r="13.48" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="199.96" cy="224.15" r="8.31" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="123.1" cy="6.71" r="13.52" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="70.34" cy="244.78" r="4.01" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="190.24" cy="153.93" r="10.79" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="170.61" cy="121.45" r="13.28" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="85.08" cy="227.15" r="9.08" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="9.58" cy="14.56" r="12.27" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="70.16" cy="154.26" r="7.77" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="21.2" cy="106.13" r="5.75" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="110.14" cy="258.99" r="4.98" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="198.81" cy="216.8" r="9.65" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="172.23" cy="180.88" r="9.02" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="106.58" cy="71.85" r="13.62" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="182.07" cy="41.19" r="5.59" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="138.18" cy="80.7" r="12.26" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="175.79" cy="135.32" r="9.09" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="20.08" cy="223.47" r="12.73" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="151.49" cy="95.27" r="12.62" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="0.18" cy="5.73" r="4.33" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="59.13" cy="226.24" r="7.17" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="197.97" cy="138.02" r="11.57" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="130.74" cy="138.55" r="6.44" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="99.43" cy="174.4" r="8.59" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="98.24" cy="142.66" r="5.18" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="163.27" cy="139" r="9.6" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="154.68" cy="104.62" r="5.04" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="77.27" cy="55.25" r="9.12" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="78.77" cy="45.86" r="12.38" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="145.25" cy="67.41" r="6.82" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="62.43" cy="257.15" r="10.91" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="84.47" cy="143.76" r="8.43" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="2.78" cy="219.57" r="11.82" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="156.73" cy="136.14" r="10.15" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="168.95" cy="273.08" r="12.98" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="33.62" cy="102.97" r="8.76" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="150.28" cy="131.45" r="5.84" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="120.87" cy="278.09" r="7.14" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="93.01" cy="268.84" r="12.33" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="115.76" cy="202.8" r="12.59" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="72.79" cy="51.09" r="13.12" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="27.55" cy="155.21" r="7.44" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="168.09" cy="7.62" r="9.62" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="161.58" cy="216.13" r="5.59" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="149.27" cy="216.96" r="4.97" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="169.53" cy="105.94" r="7.44" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="39.02" cy="23.23" r="9.25" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="196.69" cy="148.72" r="13.54" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="74.17" cy="253.75" r="8.73" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="139.31" cy="234.35" r="5.43" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="3.35" cy="91.48" r="13.9" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="187.07" cy="218.36" r="4.07" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="101.37" cy="0.19" r="9.11" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="101.49" cy="136.13" r="6.58" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="159.63" cy="32.42" r="4.4" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="80.81" cy="259.08" r="7.52" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="178.33" cy="77.58" r="8.74" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="57.68" cy="269.18" r="10.14" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="109.1" cy="174.3" r="10.47" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="26.73" cy="34.85" r="5.1" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="136.92" cy="4.76" r="9.01" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="122.22" cy="264.79" r="5.12" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="173.46" cy="232.08" r="9.7" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="82.7" cy="274.93" r="10.56" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="131.73" cy="79.06" r="7.65" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="124.17" cy="162.51" r="8.97" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="139.64" cy="81.71" r="7.88" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="18.6" cy="131.01" r="10.26" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="114.7" cy="218" r="7.39" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="189.18" cy="35.05" r="5.29" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="97.73" cy="227.93" r="8.18" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="139.78" cy="207.01" r="12.47" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="64.64" cy="256.35" r="6.35" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="14.44" cy="241.05" r="4.67" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="77.93" cy="122.81" r="10.53" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="185.69" cy="109.84" r="4.68" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="107.43" cy="18.14" r="10.89" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="84.03" cy="185.37" r="12.52" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="74.22" cy="218.96" r="13.59" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="24.33" cy="46.05" r="4.16" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="1.5" cy="26.97" r="13.33" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="142.81" cy="79.44" r="10.34" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="197.62" cy="68.02" r="11.68" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="157.22" cy="224.85" r="8.07" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="181.37" cy="182.69" r="4.75" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="176.59" cy="13.1" r="8.53" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="158.78" cy="262.17" r="10.13" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="160.14" cy="19.53" r="8.33" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="147.07" cy="275.59" r="6.87" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="48.69" cy="250.73" r="6.5" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="185.05" cy="23.29" r="13.75" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="109.42" cy="115.32" r="5.03" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="146.11" cy="149.71" r="8.28" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="155.4" cy="213.64" r="13.61" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="111.33" cy="71.64" r="4.29" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="182.28" cy="182.96" r="5.45" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="130.4" cy="99.55" r="8.93" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="126.45" cy="239.6" r="13.66" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="83.62" cy="90.41" r="5.53" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="67.58" cy="35.99" r="8.73" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="78.29" cy="97.32" r="11.07" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="172.9" cy="211.51" r="10.84" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="16.3" cy="138.41" r="13.26" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="143.36" cy="237.76" r="11.67" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="188.71" cy="245.58" r="10.9" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="128.68" cy="271.7" r="13" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="56.46" cy="85.45" r="6.5" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="13.37" cy="262" r="9.93" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="181.51" cy="157.24" r="5.28" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="72" cy="197.91" r="7.26" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="87.34" cy="129.87" r="6.74" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="191.25" cy="128.87" r="9" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="78.19" cy="139.53" r="7.24" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="107.26" cy="122.74" r="5.89" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="156.54" cy="24.11" r="8.73" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="36.63" cy="231.06" r="5.85" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="104.8" cy="78.94" r="7.74" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="65.2" cy="232.82" r="4.54" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="105.8" cy="263.36" r="8.62" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="171.59" cy="199.06" r="8.91" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="174.14" cy="209.72" r="5.45" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="181.05" cy="49.28" r="6.59" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="19.54" cy="94.35" r="10.13" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="154.74" cy="101.45" r="11.9" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="138.96" cy="43.97" r="6.57" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="132.56" cy="167.86" r="12.49" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="118.15" cy="95.4" r="6.03" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="55.93" cy="80.54" r="10.62" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="186.91" cy="1.62" r="8.19" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="182.79" cy="178.46" r="5.96" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="30.93" cy="106.47" r="12.22" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="71.4" cy="140.02" r="10.81" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="180.06" cy="59.09" r="12.91" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="112.31" cy="209.69" r="8.05" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="185.46" cy="87.24" r="10.77" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="119.65" cy="132.84" r="11.54" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="176.54" cy="186.48" r="11.02" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="43.43" cy="169.75" r="4.84" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="198.17" cy="174.66" r="12.23" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="99.75" cy="127.57" r="10.86" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="135.81" cy="199.45" r="6.21" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="50.04" cy="274.1" r="10.97" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="88.19" cy="246.28" r="12.27" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="41.42" cy="156.43" r="11.97" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="94.61" cy="209.89" r="12.9" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="152.3" cy="97.45" r="6.85" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="10.36" cy="175.1" r="9.53" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="147.36" cy="123.03" r="12.61" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="71.17" cy="151.94" r="8.28" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="194.72" cy="9.73" r="5.49" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="119.7" cy="271.45" r="13.57" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="150.28" cy="111.37" r="4.35" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="90.36" cy="218.33" r="6.1" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="141.3" cy="69.01" r="5.76" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="137.2" cy="117.54" r="5.09" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="50.16" cy="31.31" r="7.81" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="145.84" cy="153.39" r="5.32" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="36.25" cy="124.93" r="12.4" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="120.48" cy="108.02" r="12.51" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="97.58" cy="50.55" r="6.27" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="113.13" cy="40.27" r="5.12" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="192.44" cy="199.56" r="7.99" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="147.45" cy="89.03" r="4.06" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="136.83" cy="94.51" r="4.72" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="143.62" cy="97.33" r="8.46" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="95.55" cy="239.24" r="10.63" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="9" cy="97.5" r="9.68" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="105.41" cy="107.98" r="10.97" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="42.53" cy="19.63" r="9.69" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="57.55" cy="137.85" r="10.45" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="30.28" cy="186.75" r="8.83" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="55.52" cy="228.19" r="12.76" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="132.18" cy="22.72" r="11.37" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="64.16" cy="165.04" r="9.48" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="122.61" cy="34.38" r="8.96" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="160.31" cy="149.23" r="9.81" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="153.13" cy="46.66" r="4.53" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="5.78" cy="125" r="4.68" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="115" cy="98.69" r="9.81" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="160.28" cy="51.84" r="8.28" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="170.78" cy="221.3" r="6.68" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="144.72" cy="178.74" r="10.12" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="67.63" cy="63.64" r="6.59" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="102.14" cy="114.87" r="4.41" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="156.85" cy="211.51" r="10.35" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="29.82" cy="52.27" r="11.21" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="106.95" cy="45.99" r="7.92" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="191.72" cy="244.78" r="5.14" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="94.1" cy="246.05" r="6.97" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="167.19" cy="208.42" r="8.78" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="112.89" cy="127.53" r="6.81" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="156.47" cy="94.8" r="10.2" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="48.12" cy="192.81" r="11.19" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="34.88" cy="254.27" r="10.71" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="162.25" cy="187.5" r="13.53" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="154.26" cy="163.73" r="4.61" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="37.75" cy="264.18" r="10.6" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="197.45" cy="241.29" r="10.63" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="48.76" cy="42.65" r="6.09" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="67.83" cy="236.61" r="9.76" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="158.89" cy="173.1" r="7.01" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="183.29" cy="138.09" r="13.96" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="90.27" cy="206.38" r="11.18" fill="#8fb3a0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="96.99" cy="90.33" r="13.58" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="29.67" cy="73.16" r="7.01" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="42.04" cy="247.39" r="10.97" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="124.5" cy="166.53" r="5.68" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="84.86" cy="44.63" r="11.3" fill="#8397b8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="168.59" cy="123.88" r="11.62" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="41.1" cy="168.41" r="11.24" fill="#efe0b0" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="74.43" cy="265.83" r="10.79" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="68.41" cy="4.14" r="11.27" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="21.14" cy="77.72" r="4.3" fill="#6f9a88" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="18.78" cy="221.03" r="5.51" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="56.9" cy="189.66" r="10.29" fill="#c9967a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="41.36" cy="93.92" r="7.98" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="117.11" cy="174.93" r="4.61" fill="#d8b86a" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="40.3" cy="190.92" r="11.89" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/><circle cx="40.2" cy="47.64" r="7.68" fill="#f1e6c8" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/></g><rect x="10" y="10" width="180" height="260" rx="3" fill="none" stroke="#c9a043" stroke-width="2.5"/><rect x="13.5" y="13.5" width="173" height="253" rx="2" fill="none" stroke="#6b4a12" stroke-width=".6"/></svg>';var We=1.4,pi=1.96,mi=.34,gr=.034,hn=.035,Kt=1024,Ee=1434,ql=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,bo=n=>Math.min(1,Math.max(0,n)),Vi=(n,t,e)=>n+(t-n)*e;function wo(n){return new Promise((t,e)=>{let i=new Image;i.onload=()=>t(i),i.onerror=e,i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n)})}var ii=(n=Kt,t=Ee)=>{let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d",{willReadFrequently:!0})]};async function Zg(n){let[t,e]=await Promise.all([wo(Xh),wo(qh)]),[i,s]=ii();s.filter="blur(1.6px)",s.drawImage(t,0,0,Kt,Ee),s.filter="blur(1.2px)",s.fillStyle="rgb(245,245,245)",s.textAlign="center",s.textBaseline="middle",s.direction="rtl",s.font=`${Math.round(Kt*.095)}px Hafs`,s.fillText(n[0],Kt/2,Ee/2-Kt*.055),s.fillText(n[1],Kt/2,Ee/2+Kt*.06),s.filter="none";let r=s.getImageData(0,0,Kt,Ee).data,[,a]=ii();a.drawImage(e,0,0,Kt,Ee);let o=a.getImageData(0,0,Kt,Ee).data,[l,c]=ii();c.filter="blur(7px)",c.drawImage(i,0,0);let u=c.getImageData(0,0,Kt,Ee).data,[d,h]=ii(),[p,x]=ii(),[v,m]=ii(),f=h.createImageData(Kt,Ee),S=x.createImageData(Kt,Ee),P=m.createImageData(Kt,Ee),M=(b,A)=>r[(Math.min(Ee-1,Math.max(0,A))*Kt+Math.min(Kt-1,Math.max(0,b)))*4]/255,w=7;for(let b=0;b<Ee;b++)for(let A=0;A<Kt;A++){let _=(b*Kt+A)*4,E=(M(A+1,b)-M(A-1,b))*w,R=(M(A,b+1)-M(A,b-1))*w,N=Math.hypot(E,R,1);f.data[_]=(-E/N*.5+.5)*255,f.data[_+1]=(R/N*.5+.5)*255,f.data[_+2]=(1/N*.5+.5)*255,f.data[_+3]=255;let O=r[_]/255,B=(r[_]-u[_])/255;if(o[_]>128)S.data[_]=12,S.data[_+1]=120,S.data[_+2]=80,P.data[_+1]=12,P.data[_+2]=0;else{let G=Math.min(1.12,Math.max(.5,.9+(O-.45)*.45+B*2));S.data[_]=255*Math.min(1,.98*G),S.data[_+1]=255*Math.min(1,.76*G),S.data[_+2]=255*Math.min(1,.38*G),P.data[_+1]=255*(O>.7?.16:O<.38?.5:.3),P.data[_+2]=255}S.data[_+3]=255,P.data[_]=255,P.data[_+3]=255}return h.putImageData(f,0,0),x.putImageData(S,0,0),m.putImageData(P,0,0),{normal:d,color:p,rough:v}}async function Jg(n,t){let e=await wo(Yh),[i,s]=ii();s.fillStyle="#f8efd6",s.fillRect(0,0,Kt,Ee);let r=s.getImageData(0,0,Kt,Ee);for(let f=0;f<r.data.length;f+=4){let S=(Math.random()-.5)*10;r.data[f]+=S,r.data[f+1]+=S,r.data[f+2]+=S}s.putImageData(r,0,0),s.drawImage(e,0,0,Kt,Ee);let a=Kt*.46,o=Kt*.075,l=Ee*.19,c=s.createLinearGradient(Kt/2-a/2,0,Kt/2+a/2,0);c.addColorStop(0,"#163f78"),c.addColorStop(.5,"#2a64ad"),c.addColorStop(1,"#163f78"),s.fillStyle=c,s.strokeStyle="#c9a043",s.lineWidth=6,s.beginPath(),s.roundRect(Kt/2-a/2,l-o/2,a,o,14),s.fill(),s.stroke(),s.fillStyle="#fbeec4",s.textAlign="center",s.textBaseline="middle",s.direction="rtl",s.font=`${Math.round(Kt*.05)}px Hafs`,s.fillText(t,Kt/2,l+4),s.fillStyle="#1b2521";let u=Math.round(Kt*.052),d=u*2.05,h=Kt*.6;s.font=`${u}px Hafs`;let p=n.join(" ").split(/\s+/),x=[],v="";for(let f of p){let S=v?v+" "+f:f;s.measureText(S).width>h&&v?(x.push(v),v=f):v=S}v&&x.push(v);let m=Ee*.53-(x.length-1)*d/2;return x.forEach((f,S)=>s.fillText(f,Kt/2,m+S*d)),i}async function $g(n){let t=await wo(n),[e,i]=ii();return i.drawImage(t,0,0,Kt,Ee),e}function Kg(){let[n,t]=ii(64,512);for(let e=0;e<64;e++){let i=200+Math.random()*55;t.fillStyle=`rgb(${i},${i*.8},${i*.42})`,t.fillRect(e,0,1,512)}return n}function Qg(){let[n,t]=ii(512,1024),e=t.createRadialGradient(256,400,20,256,420,700);e.addColorStop(0,"#15453a"),e.addColorStop(.45,"#0a241d"),e.addColorStop(1,"#020806"),t.fillStyle=e,t.fillRect(0,0,512,1024);let i=new Ki(n);return i.colorSpace=Oe,i}function Jh(){let[n,t]=ii(256,256),e=t.createRadialGradient(128,128,0,128,128,128);return e.addColorStop(0,"rgba(255,236,180,1)"),e.addColorStop(.25,"rgba(255,210,120,.55)"),e.addColorStop(1,"rgba(255,190,90,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),new Ki(n)}function jg(){let n=new Kn;n.add(new de(new zs(30,32,16),new hi({color:new Rt(398351),side:Le})));let t=(e,i,s,r)=>{let a=new de(new Oi(e,i),new hi({color:new Rt(...r),side:Ze}));a.position.set(...s),a.lookAt(0,0,0),n.add(a)};return t(9,6,[-8,9,5],[3.2,2.9,2.4]),t(2.2,14,[10,2,-4],[3.6,2.8,1.6]),t(12,10,[0,14,0],[1.1,1.05,.95]),t(16,8,[0,1,16],[.55,.45,.3]),t(20,3,[0,-10,4],[.25,.18,.08]),t(9,9,[-13,2,9],[1.5,1.3,1]),n}var wn=(n,t=!0,e=8)=>{let i=new Ki(n);return t&&(i.colorSpace=Oe),i.anisotropy=e,i};async function cv({host:n,onLost:t,ayahs:e,head:i="\u0633\u064F\u0648\u0631\u064E\u0629\u064F \u0671\u0644\u0652\u0641\u064E\u0627\u062A\u0650\u062D\u064E\u0629\u0650",title:s=["\u0627\u0644\u0642\u0631\u0622\u0646","\u0627\u0644\u0643\u0631\u064A\u0645"],reduced:r=!1}){let a=new mo({antialias:!0,powerPreference:"high-performance"});a.toneMapping=vn,a.toneMappingExposure=1;let o=a.domElement;o.className="in-gl",o.addEventListener("webglcontextlost",k=>{k.preventDefault(),t?.()});let l=a.capabilities.getMaxAnisotropy();await document.fonts.load("40px Hafs").catch(()=>{});let[c,u,d]=await Promise.all([Zg(s),Jg(e,i),$g(Zh)]),h=new Kn;h.background=Qg();let p=new fs(a);h.environment=p.fromScene(jg(),.03).texture,h.environmentIntensity=1;let x=new Pe(28,1,.1,100),v=new ss(16773336,1.5);v.position.set(-3,5,6),v.castShadow=!0,v.shadow.mapSize.set(1024,1024),v.shadow.radius=6,v.shadow.bias=-4e-4,Object.assign(v.shadow.camera,{left:-3,right:3,top:3,bottom:-3,near:1,far:20});let m=new ss(16766874,1.4);m.position.set(5,3,-5);let f=new Hs(16774368,731682,.35);h.add(v,m,f);let S=new Ti({color:15251548,metalness:1,roughness:.28}),P=new is({map:wn(c.color,!0,l),normalMap:wn(c.normal,!1,l),roughnessMap:wn(c.rough,!1,l),metalnessMap:wn(c.rough,!1,l),metalness:1,roughness:1,normalScale:new Tt(1.1,1.1),clearcoat:.25,clearcoatRoughness:.25}),M=new Ti({map:wn(d,!0,l),color:15129803,roughness:.75,metalness:0}),w=wn(Kg(),!0,l),b=new Ti({map:w,color:16777215,metalness:.9,roughness:.32}),A=wn(u,!0,l),_=new Ti({map:A,color:14209216,roughness:.82,metalness:0,emissive:16777215,emissiveMap:A,emissiveIntensity:0}),E=new Ti({color:15260600,roughness:.9}),R=new Qe,N=new Qe;N.add(R),h.add(N);let O=new de(new dr(We+hn,pi+2*hn,gr,4,.012),[S,S,S,S,S,S]);O.position.set(-hn/2,0,-mi/2+gr/2),O.castShadow=!0;let B=new de(new wi(We-.02,pi,mi-2*gr-.004),[E,b,b,b,_,E]);B.position.set(-.01,0,0),B.castShadow=!0;let I=new Qe,G=new de(new Bs(mi/2,mi/2,pi+2*hn,48,1,!0,0,Math.PI),S);I.add(G);for(let k=0;k<5;k++){let q=new de(new Vs(mi/2+.004,.012,10,40,Math.PI),S);q.rotation.set(Math.PI/2,0,-Math.PI/2),q.position.y=-pi*.38+k*pi*.19,I.add(q)}I.position.set(We/2,0,0),I.castShadow=!0;let J=new Qe;J.position.set(We/2,0,mi/2-gr/2);let $=new de(new dr(We+hn,pi+2*hn,gr,4,.012),[S,S,S,S,P,M]);$.position.set(-(We+hn)/2,0,0),$.castShadow=!0,J.add($);let it=new is({color:1010512,roughness:.45,sheen:1,sheenColor:new Rt(10481872),sheenRoughness:.35,side:Ze}),X=new de(new Oi(.085,.55,1,12),it);X.geometry.translate(0,-.275,0);let j=X.geometry.attributes.position;for(let k=0;k<j.count;k++)j.setZ(k,Math.sin(-j.getY(k)*4)*.03);X.position.set(We/2-.38,-pi/2,.02),X.castShadow=!0,R.add(O,B,I,J,X);let[tt,Et]=ii(256,256),St=Et.createRadialGradient(128,128,0,128,128,128);St.addColorStop(0,"rgba(0,0,0,.55)"),St.addColorStop(.55,"rgba(0,0,0,.22)"),St.addColorStop(1,"rgba(0,0,0,0)"),Et.fillStyle=St,Et.fillRect(0,0,256,256);let qt=new de(new Oi(1,1),new hi({map:new Ki(tt),transparent:!0,depthWrite:!1}));qt.rotation.x=-Math.PI/2,qt.position.y=-pi/2-.32,qt.scale.set(We*1.9,mi*5,1),h.add(qt);let Vt=new qs(16764794,0,3,2);Vt.position.set(0,0,mi/2+.45),B.add(Vt);let Xt=new Us(new Qn({map:Jh(),color:16767370,transparent:!0,opacity:0,blending:ki,depthWrite:!1}));Xt.scale.set(5,5,1),Xt.position.set(0,0,-mi/2-.05),B.add(Xt);let Z=260,Q=new be,dt=new Float32Array(Z*3),Lt=new Float32Array(Z);for(let k=0;k<Z;k++)dt[k*3]=(Math.random()-.5)*8,dt[k*3+1]=(Math.random()-.5)*6,dt[k*3+2]=(Math.random()-.5)*4-1,Lt[k]=.02+Math.random()*.05;Q.setAttribute("position",new ke(dt,3));let mt=Jh(),Ot=new ts(Q,new xn({size:.035,map:mt,color:16769696,transparent:!0,opacity:.8,blending:ki,depthWrite:!1}));h.add(Ot);let oe=320,Ut=new be,kt=new Float32Array(oe*3),Yt=new Float32Array(oe*3),Ft=new Float32Array(oe);Ut.setAttribute("position",new ke(kt,3));let ie=new ts(Ut,new xn({size:.06,map:mt,color:16765562,transparent:!0,opacity:0,blending:ki,depthWrite:!1}));B.add(ie);let ge=k=>{kt[k*3]=(Math.random()-.5)*We*.8,kt[k*3+1]=(Math.random()-.5)*pi*.8,kt[k*3+2]=mi/2+.02,Yt[k*3]=(Math.random()-.5)*.25,Yt[k*3+1]=.15+Math.random()*.45,Yt[k*3+2]=.2+Math.random()*.6,Ft[k]=Math.random()};for(let k=0;k<oe;k++)ge(k);let me=new vo(a);me.addPass(new Mo(h,x));let ne=new ms(new Tt(256,256),.25,.45,1.15);me.addPass(ne),me.addPass(new So);let pe=7,D=.15,ye=5,Zt=.1,T=()=>{let k=n.clientWidth,q=n.clientHeight,nt=Math.min(devicePixelRatio||1,2,Math.sqrt(24e5/Math.max(1,k*q)));a.setPixelRatio(nt),me.setPixelRatio?.(nt),a.setSize(k,q,!1),me.setSize(k,q),ne.resolution.set(k/2,q/2),x.aspect=k/q,x.updateProjectionMatrix();let gt=Math.tan(ho.degToRad(x.fov/2)),at=(2*We+.5)/2/(gt*x.aspect),rt=(pi+1.2)/2/gt;pe=Math.max(at,rt)*1.05,ye=Math.max((We+mi+.5)/2/(gt*x.aspect),(pi+.7)/2/gt/.7),Zt=.22};T(),addEventListener("resize",T),n.appendChild(o);let g=performance.now(),U=0,H=0,Y=!1,st=()=>(performance.now()-g)/1e3,ot=()=>{if(Y)return;H=requestAnimationFrame(ot);let k=st(),q=U?(performance.now()-U)/1e3:0,nt=U?ql(bo(q/1.5)):0,gt=U?ql(bo((q-1.1)/2.6)):0,at=U?bo((q-2.4)/1.4):0,rt=U?ql(bo((q-4.8)/1.6)):0,yt=r?0:1;N.rotation.y=Vi(-.55+Math.sin(k*.45)*.12*yt,0,nt),N.rotation.x=Vi(.16+Math.sin(k*.3)*.03*yt,.04,nt),N.position.y=Vi(Math.sin(k*.9)*.05*yt+.1,.05,nt),qt.scale.x=Vi(We*1.9,We*3.4,gt),qt.material.opacity=1-rt,R.position.x=Vi(0,-We/2-hn/2,gt),J.rotation.y=gt*Math.PI*.93,X.rotation.z=Math.sin(k*1.3)*.06*yt,X.rotation.x=Math.sin(k*.9)*.05*yt;let Ct=Vi(Vi(ye,ye*.96,nt),pe*.98,gt)*(1-rt*.6),Dt=-Vi(Zt,Zt*.3,gt)*Ct*Math.tan(ho.degToRad(x.fov/2));x.position.set(0,Vi(D+.35,D,nt)+Dt,Ct),x.lookAt(0,Dt,0),Vt.intensity=at*1.1,_.emissiveIntensity=at*.06+rt*.12,Xt.material.opacity=at*.5+rt*.2,ne.strength=.25+at*.2+rt*.15,h.environmentIntensity=1+at*.1;for(let C=0;C<Z;C++)dt[C*3+1]+=Lt[C]*.016,dt[C*3+1]>3&&(dt[C*3+1]=-3);if(Q.attributes.position.needsUpdate=!0,at>0){ie.material.opacity=Math.min(1,at*1.4)*(1-rt);for(let C=0;C<oe;C++)Ft[C]+=.016/3,Ft[C]>1&&(ge(C),Ft[C]=0),kt[C*3]+=Yt[C*3]*.016,kt[C*3+1]+=Yt[C*3+1]*.016,kt[C*3+2]+=Yt[C*3+2]*.016;Ut.attributes.position.needsUpdate=!0}me.render()};return ot(),{canvas:o,open(){return U=performance.now(),new Promise(k=>setTimeout(k,r?300:6200))},dispose(){Y=!0,cancelAnimationFrame(H),removeEventListener("resize",T),h.traverse(k=>{k.geometry?.dispose(),[].concat(k.material||[]).forEach(q=>{Object.values(q).forEach(nt=>nt?.isTexture&&nt.dispose()),q.dispose()})}),p.dispose(),me.dispose?.(),a.dispose(),o.remove()}}}export{cv as start};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
