"use strict";(self.webpackChunkphoenix_app=self.webpackChunkphoenix_app||[]).push([[350],{2350:(v,c,_)=>{_.r(c),_.d(c,{TBoxPainter:()=>o});var d=_(5072),n=_(8362),y=_(2843),M=_(9640),$=_(4483),g=_(5992),x=_(7900);class o extends M.JW{moveStart(t,i){const s=Math.abs(this.x2-this.x1),h=Math.abs(this.y1-this.y2);this.c_x1=Math.abs(t-this.x2)>.1*s,this.c_x2=Math.abs(t-this.x1)>.1*s,this.c_y1=Math.abs(i-this.y2)>.1*h,this.c_y2=Math.abs(i-this.y1)>.1*h,this.c_x1!==this.c_x2&&this.c_y1&&this.c_y2&&(this.c_y1=this.c_y2=!1),this.c_y1!==this.c_y2&&this.c_x1&&this.c_x2&&(this.c_x1=this.c_x2=!1)}moveDrag(t,i){this.c_x1&&(this.x1+=t),this.c_x2&&(this.x2+=t),this.c_y1&&(this.y1+=i),this.c_y2&&(this.y2+=i);const s=this.draw_g.selectAll("path").nodes();this.getPathes().forEach((e,a)=>(0,n.Lt)(s[a]).attr("d",e))}moveEnd(t){if(t)return;const i=this.getObject(),s=this.swap_xy?"Y":"X",h=this.swap_xy?"X":"Y";let e="";if(this.c_x1){const a=this.svgToAxis("x",this.x1);i[`f${s}1`]=a,e+=`Set${s}1(${a});;`}if(this.c_x2){const a=this.svgToAxis("x",this.x2);i[`f${s}2`]=a,e+=`Set${s}2(${a});;`}if(this.c_y1){const a=this.svgToAxis("y",this.y1);i[`f${h}1`]=a,e+=`Set${h}1(${a});;`}if(this.c_y2){const a=this.svgToAxis("y",this.y2);i[`f${h}2`]=a,e+=`Set${h}2(${a});;`}this.submitCanvExec(e+"Notify();;")}getUserRanges(){const t=this.getObject(),i=Math.min(t.fX1,t.fX2),s=Math.max(t.fX1,t.fX2);return{minx:i,miny:Math.min(t.fY1,t.fY2),maxx:s,maxy:Math.max(t.fY1,t.fY2)}}getPathes(){const t=Math.round(Math.min(this.x1,this.x2)),i=Math.round(Math.min(this.y1,this.y2)),s=Math.round(Math.abs(this.x2-this.x1)),h=Math.round(Math.abs(this.y1-this.y2)),e=`M${t},${i}h${s}v${h}h${-s}z`;if(!this.borderMode)return[e];const a=this.borderSize,r=this.borderSize,l=`M${t},${i}h${s}l${-a},${r}h${2*a-s}v${h-2*r}l${-a},${r}z`,f=`M${t+s},${i+h}v${-h}l${-a},${r}v${h-2*r}h${2*a-s}l${-a},${r}z`;return this.borderMode>0?[e,l,f]:[e,f,l]}redraw(){const t=this.getObject(),i=new y.nC(this.getDrawOpt()),s=i.check("FRAME")?this.getFramePainter():null,h=i.check("L");this.createAttLine({attr:t}),this.createAttFill({attr:t}),this.swap_xy=s?.swap_xy,!this.fillatt.empty()&&!h&&(this.lineatt.color="none"),this.createG(s),this.x1=this.axisToSvg("x",t.fX1),this.x2=this.axisToSvg("x",t.fX2),this.y1=this.axisToSvg("y",t.fY1),this.y2=this.axisToSvg("y",t.fY2),this.swap_xy&&([this.x1,this.x2,this.y1,this.y2]=[this.y1,this.y2,this.x1,this.x2]),this.borderMode=t.fBorderMode&&t.fBorderSize&&this.fillatt.hasColor()?t.fBorderMode:0,this.borderSize=t.fBorderSize;const e=this.getPathes();return this.draw_g.append("svg:path").attr("d",e[0]).call(this.lineatt.func).call(this.fillatt.func),this.borderMode&&(this.draw_g.append("svg:path").attr("d",e[1]).call(this.fillatt.func).style("fill",(0,n.Qh)(this.fillatt.color).brighter(.5).formatRgb()),this.draw_g.append("svg:path").attr("d",e[2]).call(this.fillatt.func).style("fill",(0,n.Qh)(this.fillatt.color).darker(.5).formatRgb())),(0,x.wh)(this,x.Ew),(0,g.X2)(this),this}static draw(t,i,s){return(0,d.A)(function*(){const h=new o(t,i,s);return(0,$.ensureTCanvas)(h,!1).then(()=>h.redraw())})()}}}}]);
//# sourceMappingURL=350.1bfe5c0ad599d1ba.js.map