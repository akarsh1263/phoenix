"use strict";(self.webpackChunkphoenix_app=self.webpackChunkphoenix_app||[]).push([[15],{4015:(Y,d,r)=>{r.r(d),r.d(d,{TGaxisPainter:()=>x});var m=r(5072),l=r(8872),v=r(8362),P=r(2843),E=r(2866),T=r(4483),M=r(5992),y=r(7900),O=r(6157),X=r(247);class x extends E.TB{convertTo(i){const e=this.getObject(),a=this.axisToSvg("x",e.fX1),s=this.axisToSvg("y",e.fY1),t=this.axisToSvg("x",e.fX2),h=this.axisToSvg("y",e.fY2);if("ndc"===i){const n=this.getPadPainter().getPadWidth(),_=this.getPadPainter().getPadHeight();e.fX1=a/n,e.fX2=t/n,e.fY1=(_-s)/_,e.fY2=(_-h)/_,this.use_ndc=!0}else if("frame"===i){const n=this.getFramePainter().getFrameRect();e.fX1=(a-n.x)/n.width,e.fX2=(t-n.x)/n.width,e.fY1=(s-n.y)/n.height,e.fY2=(h-n.y)/n.height,this.bind_frame=!0}}moveDrag(i,e){this.gaxis_x+=i,this.gaxis_y+=e,(0,P.bk)(this.getG(),this.gaxis_x,this.gaxis_y)}moveEnd(i){if(i)return;const e=this.getObject();let a,s;if(this.bind_frame){const t=this.getFramePainter().getFrameRect();a=(this.gaxis_x-t.x)/t.width,s=(this.gaxis_y-t.y)/t.height}else a=this.svgToAxis("x",this.gaxis_x,this.use_ndc),s=this.svgToAxis("y",this.gaxis_y,this.use_ndc);this.vertical?(e.fX1=e.fX2=a,this.reverse?(e.fY2=s+(e.fY2-e.fY1),e.fY1=s):(e.fY1=s+(e.fY1-e.fY2),e.fY2=s)):(this.reverse?(e.fX1=a+(e.fX1-e.fX2),e.fX2=a):(e.fX2=a+(e.fX2-e.fX1),e.fX1=a),e.fY1=e.fY2=s),this.submitAxisExec(`SetX1(${e.fX1});;SetX2(${e.fX2});;SetY1(${e.fY1});;SetY2(${e.fY2})`,!0)}redraw(){const i=this.getObject(),e=i.fWmin,a=i.fWmax;let s,t,h,n;if(this.bind_frame){const f=this.getFramePainter().getFrameRect();s=Math.round(f.x+i.fX1*f.width),h=Math.round(f.x+i.fX2*f.width),t=Math.round(f.y+i.fY1*f.height),n=Math.round(f.y+i.fY2*f.height)}else s=this.axisToSvg("x",i.fX1,this.use_ndc),t=this.axisToSvg("y",i.fY1,this.use_ndc),h=this.axisToSvg("x",i.fX2,this.use_ndc),n=this.axisToSvg("y",i.fY2,this.use_ndc);const _=h-s,c=t-n,o=Math.abs(_)<Math.abs(c);let u=o?c:_,g=!1;return u<0&&(g=!0,u=-u,o?n=t:s=h),this.configureAxis(o?"yaxis":"xaxis",e,a,e,a,o,[0,u],{time_scale:i.fChopt.indexOf("t")>=0,log:i.fChopt.indexOf("G")>=0?1:0,reverse:g,swap_side:g,axis_func:this.axis_func}),this.createG(),this.gaxis_x=s,this.gaxis_y=n,this.drawAxis(this.getG(),Math.abs(_),Math.abs(c),(0,P.bk)(this.gaxis_x,this.gaxis_y)||"").then(()=>((0,M.X2)(this),(0,y.wh)(this),this))}fillContextMenu(i){i.addTAxisMenu(E.rb,this,this.getObject(),"")}checkFuncion(){var i=this;return(0,m.A)(function*(){const e=i.getObject();if(!e.fFunctionName)return void(i.axis_func=null);const a=i.getPadPainter()?.findInPrimitives(e.fFunctionName,l.clTF1);let s=Promise.resolve(a);if(!a){const t=(0,O.gZ)(),h=t?.findItem({name:e.fFunctionName,check_keys:!0});h&&(s=t.getObject({item:h}).then(n=>n?.obj?._typename===l.clTF1?n.obj:null))}return s.then(t=>{i.axis_func=t,t&&(0,X.Dx)(t)})})()}createFuncHandle(i,e,a,s){const t=function(_){return t.toGraph(_)};t._func=i,t._domain=[a,s],t._scale=e?(0,v.ZE)().base(e):(0,v.m4)(),t._scale.domain(t._domain).range([0,100]),t.eval=function(_){try{_=t._func.evalPar(_)}catch{_=0}return Number.isFinite(_)?_:0};const h=t.eval(a),n=t.eval(s);return h<n==a<s?(t._vmin=h,t._vk=1/(n-h)):h===n?(t._vmin=0,t._vk=1):(t._vmin=n,t._vk=1/(h-n)),t._range=[0,100],t.range=function(_){return _?(t._range=_,t):t._range},t.domain=function(){return t._domain},t.toGraph=function(_){const c=(t.eval(_)-t._vmin)*t._vk;return t._range[0]*(1-c)+t._range[1]*c},t.ticks=function(_){return t._scale.ticks(_)},t}static draw(i,e,a){return(0,m.A)(function*(){const s=new x(i,e,!1);return(0,T.ensureTCanvas)(s,!1).then(()=>(a&&s.convertTo(a),s.checkFuncion())).then(()=>s.redraw())})()}}}}]);
//# sourceMappingURL=15.79627c6fe1981a18.js.map