"use strict";(self.webpackChunkphoenix_app=self.webpackChunkphoenix_app||[]).push([[125],{2125:(G,H,_)=>{_.r(H),_.d(H,{RH2Painter:()=>Y});var P=_(5072),v=_(8872),I=_(8362),F=_(2843),k=_(2521),O=_(9964),Z=_(9997);class X extends k.G{constructor(e,t){super(e,t),this.wheel_zoomy=!0}cleanup(){delete this.tt_handle,super.cleanup()}getDimension(){return 2}toggleProjection(e,t){("Projections"===e||"Off"===e)&&(e="");let i=t,n=t;if((0,v.isStr)(e)&&0===e.indexOf("XY")){const a=e.length>2?e.slice(2):"";e="XY",i=n=parseInt(a)}else if((0,v.isStr)(e)&&e.length>1){const a=e.indexOf("_");a>0&&"X"===e[0]&&"Y"===e[a+1]?(i=parseInt(e.slice(1,a))||1,n=parseInt(e.slice(a+2))||1,e="XY"):a>0&&"Y"===e[0]&&"X"===e[a+1]?(n=parseInt(e.slice(1,a))||1,i=parseInt(e.slice(a+2))||1,e="XY"):(i=n=parseInt(e.slice(1))||1,e=e[0])}if(!i&&!n&&(i=n=1),e&&this.is_projection===e){if(this.projection_widthX!==i||this.projection_widthY!==n)return this.projection_widthX=i,void(this.projection_widthY=n);e=""}delete this.proj_hist;const s=this.is_projection===e?"":e;this.projection_widthX=i,this.projection_widthY=n,this.is_projection="",this.provideSpecialDrawArea(s).then(()=>(this.is_projection=s,this.redrawProjection()))}redrawProjection(){}executeMenuCommand(e,t){return!!super.executeMenuCommand(e,t)||("SetShowProjectionX"===e.fName||"SetShowProjectionY"===e.fName)&&(this.toggleProjection(e.fName[17],t&&parseInt(t)?parseInt(t):1),!0)}fillHistContextMenu(e){if(this.getPadPainter()?.iscan){let i=this.is_projection||"";i&&(i+=this.projection_widthX),this.projection_widthX!==this.projection_widthY&&"XY"===this.is_projection&&(i=`X${this.projection_widthX}_Y${this.projection_widthY}`);const n=["X1","X2","X3","X5","X10","Y1","Y2","Y3","Y5","Y10","XY1","XY2","XY3","XY5","XY10"];i&&n.unshift("Off"),e.sub("Projections",()=>e.input("Input projection kind X1 or XY2 or X3_Y4",i,"string").then(s=>this.toggleProjection(s)));for(let s=0;s<n.length;++s)e.addchk(i===n[s],n[s],n[s],a=>this.toggleProjection(a));e.endsub()}e.add("Auto zoom-in",()=>this.autoZoom());const t=this.getSupportedDrawOptions();e.addDrawMenu("Draw with",t,i=>{if(0===i.indexOf(v.kInspect))return this.showInspector(i);this.decodeOptions(i),this.interactiveRedraw("pad","drawopt")}),this.options.Color&&this.fillPaletteMenu(e)}clickButton(e){const t=super.clickButton(e);if(t)return t;switch(e){case"ToggleColor":return this.toggleColor();case"Toggle3D":return this.toggleMode3D()}return!1}fillToolbar(){super.fillToolbar(!0);const e=this.getPadPainter();e&&(e.addPadButton("th2color","Toggle color","ToggleColor"),e.addPadButton("th2colorz","Toggle color palette","ToggleColorZ"),e.addPadButton("th2draw3d","Toggle 3D mode","Toggle3D"),e.showPadButtons())}toggleColor(){return this.options.Mode3D?(this.options.Mode3D=!1,this.options.Color=!0):this.options.Color=!this.options.Color,this.redraw()}autoZoom(){const e=this.getSelectIndex("x","left",-1),t=this.getSelectIndex("x","right",1),i=this.getSelectIndex("y","left",-1),n=this.getSelectIndex("y","right",1),s=this.getHisto(),a=this.getAxis("x"),p=this.getAxis("y");if(e===t||i===n)return;let m=s.getBinContent(e+1,i+1);for(let x=e;x<t;++x)for(let u=i;u<n;++u)m=Math.min(m,s.getBinContent(x+1,u+1));if(m>0)return;let c=t,o=e,f=n,r=i;for(let x=e;x<t;++x)for(let u=i;u<n;++u)s.getBinContent(x+1,u+1)>m&&(x<c&&(c=x),x>=o&&(o=x+1),u<f&&(f=u),u>=r&&(r=u+1));let d,y,h,l,g=!1;return c===o-1&&c>e+1&&o<t-1&&(c--,o++),f===r-1&&f>i+1&&r<n-1&&(f--,r++),(c>e||o<t)&&c<o-1&&(d=a.GetBinCoord(c),y=a.GetBinCoord(o),g=!0),(f>i||r<n)&&f<r-1&&(h=p.GetBinCoord(f),l=p.GetBinCoord(r),g=!0),g?this.getFramePainter().zoom(d,y,h,l):void 0}scanContent(e){if(e&&this.nbinsx&&this.nbinsy)return;const t=this.getHisto();if(this.extractAxesProperties(2),this.isDisplayItem())this.gminbin=t.fContMin,this.gminposbin=t.fContMinPos>0?t.fContMinPos:null,this.gmaxbin=t.fContMax;else{this.gminbin=this.gmaxbin=t.getBinContent(1,1),this.gminposbin=null;for(let i=0;i<this.nbinsx;++i)for(let n=0;n<this.nbinsy;++n){const s=t.getBinContent(i+1,n+1);s<this.gminbin?this.gminbin=s:s>this.gmaxbin&&(this.gmaxbin=s),s>0&&(null===this.gminposbin||this.gminposbin>s)&&(this.gminposbin=s)}}this.zmin=this.gminbin,this.zmax=this.gmaxbin,null===this.gminposbin&&this.gmaxbin>0&&(this.gminposbin=1e-4*this.gmaxbin),this.draw_content=!(this.options.Axis>0||0===this.gmaxbin&&0===this.gminbin)}countStat(e){const t=this.getHisto(),i={name:"histo",entries:0,integral:0,meanx:0,meany:0,rmsx:0,rmsy:0,matrix:[0,0,0,0,0,0,0,0,0],xmax:0,ymax:0,wmax:null},n=this.getSelectIndex("x","left"),s=this.getSelectIndex("x","right"),a=this.getSelectIndex("y","left"),p=this.getSelectIndex("y","right"),m=this.getAxis("x"),c=this.getAxis("y");let h,l,g,x,u,b,w,o=0,f=0,r=0,d=0,y=0;for(b=1;b<=this.nbinsx;++b)for(h=b<=n+1?0:b>s+1?2:1,g=m.GetBinCoord(b-.5),w=1;w<=this.nbinsy;++w)l=w<=a+1?0:w>p+1?2:1,x=c.GetBinCoord(w-.5),u=t.getBinContent(b,w),i.entries+=u,i.matrix[3*l+h]+=u,1===h&&1===l&&(e&&!e(g,x)||((null===i.wmax||u>i.wmax)&&(i.wmax=u,i.xmax=g,i.ymax=x),o+=u,f+=g*u,r+=x*u,d+=g**2*u,y+=x**2*u));return Math.abs(o)>1e-300&&(i.meanx=f/o,i.meany=r/o,i.rmsx=Math.sqrt(Math.abs(d/o-i.meanx**2)),i.rmsy=Math.sqrt(Math.abs(y/o-i.meany**2))),null===i.wmax&&(i.wmax=0),i.integral=o,i}fillStatistic(e,t){const i=this.countStat(),n=Math.floor(t%10),s=Math.floor(t/10)%10,a=Math.floor(t/100)%10,p=Math.floor(t/1e3)%10,m=Math.floor(t/1e4)%10,c=Math.floor(t/1e5)%10,o=Math.floor(t/1e6)%10,f=Math.floor(t/1e7)%10,r=Math.floor(t/1e8)%10;if(e.clearStat(),n>0&&e.addText(i.name),s>0&&e.addText("Entries = "+e.format(i.entries,"entries")),a>0&&(e.addText("Mean x = "+e.format(i.meanx)),e.addText("Mean y = "+e.format(i.meany))),p>0&&(e.addText("Std Dev x = "+e.format(i.rmsx)),e.addText("Std Dev y = "+e.format(i.rmsy))),o>0&&e.addText("Integral = "+e.format(i.matrix[4],"entries")),f>0&&(e.addText("Skewness x = <undef>"),e.addText("Skewness y = <undef>")),r>0&&e.addText("Kurt = <undef>"),m>0||c>0){const d=i.matrix;e.addText(d[6].toFixed(0)+" | "+d[7].toFixed(0)+" | "+d[7].toFixed(0)),e.addText(d[3].toFixed(0)+" | "+d[4].toFixed(0)+" | "+d[5].toFixed(0)),e.addText(d[0].toFixed(0)+" | "+d[1].toFixed(0)+" | "+d[2].toFixed(0))}return!0}drawBinsColor(){const e=this.getHisto(),t=this.prepareDraw(),i=t.stepi,n=t.stepj,s=[];let p,m,c,o,f,r,d,y,h,l;const g=()=>{l.path+=`h${d}v${l.y2-l.y}h${-d}z`,l.dy=0,l=null};for(o=t.i1;o<t.i2;o+=i){for(d=t.grx[o+i]-t.grx[o]||1,f=t.j1;f<t.j2;f+=n)if(r=e.getBinContent(o+1,f+1),p=t.palette.getContourIndex(r),0===r&&(this.options.Zero?null===p&&this._show_empty_bins&&(p=0):p=null),null!==p){if(m=`M${t.grx[o]},${t.gry[f]}`,y=t.gry[f+n]-t.gry[f]||-1,h=s[p],void 0===h)h=s[p]={path:m};else{if(h===l){h.y2=t.gry[f]+y;continue}c=`m${t.grx[o]-h.x},${t.gry[f]-h.y}`,h.path+=c.length<m.length?c:m}l&&g(),h.x=t.grx[o],h.y=t.gry[f],h.y2=t.gry[f]+y,l=h}else l&&g();l&&g()}return s.forEach((x,u)=>{x&&this.draw_g.append("svg:path").attr("d",x.path).style("fill",t.palette.getColor(u))}),this.updatePaletteDraw(),t}drawBinsContour(e,t,i){const n=this.prepareDraw({rounding:!1,extra:100}),s=this.getFramePainter(),a=s.getHistPalette(),p=a.getContour(),m=s.getProjectionFunc();return 14===this.options.Contour&&this.draw_g.append("svg:path").attr("d",`M0,0h${t}v${i}h${-t}z`).style("fill",a.getColor(0)),(0,Z.Hn)(this.getHisto(),n,p,a,(o,f,r,d,y)=>{const h=a.getColor(o);let g,l=h;switch(this.options.Contour){case 1:case 14:break;case 11:l="none",g=this.createAttLine({color:h,std:!1});break;case 12:l="none",g=this.createAttLine({color:1,style:o%5+1,width:1,std:!1});break;case 13:l="none",g=this.lineatt}const x=((o,f,r,d,y)=>{let l,g,x,u,h="";for(let b=r;b<=d;++b){if(m?(g=m(o[b],f[b]),g.x=Math.round(e.grx(g.x)),g.y=Math.round(e.gry(g.y))):g={x:Math.round(o[b]),y:Math.round(f[b])},h)if(b===d&&x&&g.x===x.x&&g.y===x.y){if(!u)return"";h+="z",y=!1}else g.x!==l.x&&g.y!==l.y?(h+=`l${g.x-l.x},${g.y-l.y}`,u=!0):g.x!==l.x?(h+="h"+(g.x-l.x),u=!0):g.y!==l.y&&(h+="v"+(g.y-l.y),u=!0);else h=`M${g.x},${g.y}`,x=g;l=g}return y&&(h+="z"),h})(f,r,d,y,"none"!==l);if(!x)return;const u=this.draw_g.append("svg:path").attr("d",x).style("fill",l);g&&u.call(g.func)}),n.hide_only_zeros=!0,n}createPolyBin(){return""}drawBinsText(e){var t=this;return(0,P.A)(function*(){e||(e=t.prepareDraw({rounding:!1}));const i=t.getHisto(),n=t.v7EvalFont("text",{size:20,color:"black",align:22}),s=t.options.BarOffset||0,a=t.draw_g.append("svg:g").attr("class","th2_text"),p=e.stepi,m=e.stepj;return t.startTextDrawingAsync(n,"font",a).then(()=>{for(let o=e.i1;o<e.i2;o+=p)for(let f=e.j1;f<e.j2;f+=m){let r=i.getBinContent(o+1,f+1);if(0===r&&!t._show_empty_bins)continue;const d=e.grx[o+p]-e.grx[o],y=e.gry[f]-e.gry[f+m],h=r===Math.round(r)?r.toString():(0,F.lg)(r,v.gStyle.fPaintTextFormat);let l,g,x,u;n.angle?(l=Math.round(e.grx[o]+.5*d),g=Math.round(e.gry[f+m]+y*(.5+s)),x=u=0):(l=Math.round(e.grx[o]+.1*d),g=Math.round(e.gry[f+m]+y*(.1+s)),x=Math.round(.8*d),u=Math.round(.8*y)),t.drawText({align:22,x:l,y:g,width:x,height:u,text:h,latex:0,draw_g:a})}return e.hide_only_zeros=!0,t.finishTextDrawing(a,!0)}).then(()=>e)})()}drawBinsArrow(){const e=this.getHisto(),t=this.prepareDraw({rounding:!1}),i=(t.grx[t.i2]-t.grx[t.i1])/(t.i2-t.i1+1-.03)/2,n=(t.gry[t.j2]-t.gry[t.j1])/(t.j2-t.j1+1-.03)/2,s=t.stepi,a=t.stepj,p=(C,M)=>C?M?`l${C},${M}`:`h${C}`:M?`v${M}`:"";let c,o,r,d,y,h,l,g,x,u,b,w,j,B,$,m="",f=1e-30;for(let C=0;C<2;++C)for(c=t.i1;c<t.i2;c+=s)for(o=t.j1;o<t.j2;o+=a)r=c===t.i1?e.getBinContent(c+1+s,o+1)-e.getBinContent(c+1,o+1):c>=t.i2-s?e.getBinContent(c+1,o+1)-e.getBinContent(c+1-s,o+1):.5*(e.getBinContent(c+1+s,o+1)-e.getBinContent(c+1-s,o+1)),d=o===t.j1?e.getBinContent(c+1,o+1+a)-e.getBinContent(c+1,o+1):o>=t.j2-a?e.getBinContent(c+1,o+1)-e.getBinContent(c+1,o+1-a):.5*(e.getBinContent(c+1,o+1+a)-e.getBinContent(c+1,o+1-a)),0===C?f=Math.max(f,Math.abs(r),Math.abs(d)):(y=(t.grx[c]+t.grx[c+s])/2,h=(t.gry[o]+t.gry[o+a])/2,l=i*r/f,g=n*d/f,x=y-l,u=y+l,b=h-g,w=h+g,r=Math.round(u-x),d=Math.round(w-b),(0!==r||0!==d)&&(m+="M"+Math.round(x)+","+Math.round(b)+p(r,d),(Math.abs(r)>5||Math.abs(d)>5)&&(j=Math.sqrt(2/(r**2+d**2)),B=Math.round(j*(r+d)),$=Math.round(j*(r-d)),(B||$)&&(m+=`m${-B},${$}`+p(B,-$)+p(-$,-B)))));return this.draw_g.append("svg:path").attr("d",m).style("fill","none").call(this.lineatt.func),t}drawBinsBox(){const e=this.getHisto(),t=this.prepareDraw({rounding:!1}),i=this.getFramePainter();i.maxbin===i.minbin&&(i.maxbin=this.gmaxbin,i.minbin=this.gminbin,i.minposbin=this.gminposbin),i.maxbin===i.minbin&&(i.minbin=Math.min(0,i.maxbin-1));const n=Math.max(Math.abs(i.maxbin),Math.abs(i.minbin)),s=Math.max(0,i.minbin),a=t.stepi,p=t.stepj;let m,c,o,f,l,g,x,u,b,w,j,B,r="",d="",y="",h="",$=!1,C=0;if(i.logz&&n>0){$=!0;const M=Math.log(n);C=s>0?Math.log(s):i.minposbin>=1&&i.minposbin<100?Math.log(.7):i.minposbin>0?Math.log(.7*i.minposbin):M-10,C>=M&&(C=M-10),B=1/(M-C)}else B=1/(n-s);for(m=t.i1;m<t.i2;m+=a)for(c=t.j1;c<t.j2;c+=p)if(o=e.getBinContent(m+1,c+1),f=Math.abs(o),!(0===f||f<s)&&(l=$?f>0?Math.log(f)-C:0:f-s,l=.5*(l<0?1:1-Math.sqrt(l*B)),l<0&&(l=0),w=t.grx[m+a]-t.grx[m],j=t.gry[c]-t.gry[c+p],g=l*w,x=l*j,u=Math.round(t.grx[m]+g),b=Math.round(t.gry[c+p]+x),w=Math.max(Math.round(w-2*g),1),j=Math.max(Math.round(j-2*x),1),r+=`M${u},${b}v${j}h${w}v${-j}z`,o<0&&10===this.options.BoxStyle&&(d+=`M${u},${b}l${w},${j}M${u+w},${b}l${-w},${j}`),11===this.options.BoxStyle&&w>5&&j>5)){const M=Math.round(.1*w),D=Math.round(.1*j),z=`M${u},${b}h${w}l${-M},${D}h${2*M-w}v${j-2*D}l${-M},${D}z`,T=`M${u+w},${b+j}v${-j}l${-M},${D}v${j-2*D}h${2*M-w}l${-M},${D}z`;h+=o<0?z:T,y+=o<0?T:z}if(r){const M=this.draw_g.append("svg:path").attr("d",r).call(this.fillatt.func);11!==this.options.BoxStyle&&this.fillatt.empty()&&M.call(this.lineatt.func)}if(y&&this.fillatt.hasColor()&&this.draw_g.append("svg:path").attr("d",y).call(this.fillatt.func).style("fill",(0,I.Qh)(this.fillatt.color).brighter(.5).formatRgb()),h&&this.draw_g.append("svg:path").attr("d",h).call(this.fillatt.func).style("fill",this.fillatt.hasColor()?(0,I.Qh)(this.fillatt.color).darker(.5).formatRgb():"red"),d){const M=this.draw_g.append("svg:path").attr("d",d).style("fill","none");this.lineatt.empty()||M.call(this.lineatt.func)}return t}drawBinsScatter(){const e=this.getHisto(),t=this.prepareDraw({rounding:!0,pixel_density:!0,scatter_plot:!0}),i=[],n=[],s=[],a=[],p=[],m=this.options.ScatCoef*(this.gmaxbin>2e3?2e3/this.gmaxbin:1),c=t.stepi,o=t.stepj,f=new F.YF(t.sumz);let r,d,y,h,l,g,x,u,b=1;if(m*t.sumz<1e5){this.createv7AttMarker(),this.markeratt.resetPos();let C,M,$="";for(h=t.i1;h<t.i2;h+=c)for(x=t.grx[h+c]-t.grx[h],l=t.j1;l<t.j2;l+=o)if(u=t.gry[l]-t.gry[l+o],g=e.getBinContent(h+1,l+1),M=Math.round(m*g),!(M<=0))for(C=0;C<M;++C)$+=this.markeratt.create(Math.round(t.grx[h]+x*f.random()),Math.round(t.gry[l+1]+u*f.random()));return this.draw_g.append("svg:path").attr("d",$).call(this.markeratt.func),t}for(this.maxbin>.7&&(b=.7/this.maxbin),h=t.i1;h<t.i2;h+=c)for(l=t.j1;l<t.j2;l+=o)g=e.getBinContent(h+1,l+1),!(g<=0||g<this.minbin)&&(x=t.grx[h+c]-t.grx[h],u=t.gry[l]-t.gry[l+o],!(x*u<=0)&&(r=t.palette.getContourIndex(g/x/u),!(r<0)&&(d=`M${t.grx[h]},${t.gry[l+o]}`,void 0===i[r]?(i[r]=d,a[r]=x,p[r]=u):(y=`m${t.grx[h]-n[r]},${t.gry[l+o]-s[r]}`,i[r]+=y.length<d.length?y:d,a[r]=Math.max(a[r],x),p[r]=Math.max(p[r],u)),n[r]=t.grx[h],s[r]=t.gry[l+o],i[r]+=`v${u}h${x}v${-u}z`)));const w=this.getFrameSvg().selectChild(".main_layer");let j=w.selectChild("def");j.empty()&&i.length>0&&(j=w.insert("svg:defs",":first-child")),this.createv7AttMarker();const B=t.palette.getContour();for(r=0;r<i.length;++r)if(void 0!==i[r]&&r<B.length){const $=(this.pad_name||"canv")+`_scatter_${r}`;let C=j.selectChild(`#${$}`);C.empty()?C=j.append("svg:pattern").attr("id",$).attr("patternUnits","userSpaceOnUse"):C.selectAll("*").remove();let M=Math.round(b*B[r]*a[r]*p[r]);M<1&&(M=1);const D=new Float32Array(M),z=new Float32Array(M);if(1===M)D[0]=z[0]=.5;else for(let S=0;S<M;++S)D[S]=f.random(),z[S]=f.random();this.markeratt.resetPos();let T="";for(let S=0;S<M;++S)T+=this.markeratt.create(D[S]*a[r],z[S]*p[r]);C.attr("width",a[r]).attr("height",p[r]).append("svg:path").attr("d",T).call(this.markeratt.func),this.draw_g.append("svg:path").attr("scatter-index",r).style("fill",`url(#${$})`).attr("d",i[r])}return t}draw2DBins(){var e=this;return(0,P.A)(function*(){if(!e.draw_content)return e.removeG(),!1;e.createHistDrawAttributes(),e.createG(!0);const t=e.getFramePainter(),i=t.getFrameRect(),n=t.getGrFuncs(e.options.second_x,e.options.second_y);let s=null,a=null;return e.options.Scat?s=e.drawBinsScatter():e.options.Color?s=e.drawBinsColor():e.options.Box?s=e.drawBinsBox():e.options.Arrow?s=e.drawBinsArrow():e.options.Contour>0&&(s=e.drawBinsContour(n,i.width,i.height)),e.options.Text&&(a=e.drawBinsText(s)),!s&&!a&&(s=e.drawBinsColor()),a||(a=Promise.resolve(s)),a.then(p=>(e.tt_handle=p,e))})()}getBinTooltips(e,t){const i=[],n=this.getHisto();let s=n.getBinContent(e+1,t+1),a=1,p=1;this.isDisplayItem()&&(a=n.stepx||1,p=n.stepy||1),i.push(this.getObjectHint()||"histo<2>","x = "+this.getAxisBinTip("x",e,a),"y = "+this.getAxisBinTip("y",t,p),`bin = ${e+1}, ${t+1}`),n.$baseh&&(s-=n.$baseh.getBinContent(e+1,t+1));const m="entries = "+(a>1||p>1?"~":"");return s===Math.round(s)?i.push(m+s):i.push(m+(0,F.lg)(s,v.gStyle.fStatFormat)),i}getPolyBinTooltips(){return[]}processTooltipEvent(e){const t=this.getHisto(),i=this.tt_handle;let n=this.draw_g?.selectChild(".tooltip_bin");if(!e||!this.draw_content||!this.draw_g||!i||this.options.Proj)return n?.remove(),null;if(i.poly)return null;let s,a,p=0,m=null;for(s=i.i1;s<i.i2&&!(e.x>=i.grx[s]&&e.x<=i.grx[s+1]);++s);for(a=i.j1;a<i.j2&&!(e.y>=i.gry[a+1]&&e.y<=i.gry[a]);++a);if(s<i.i2&&a<i.j2&&(p=t.getBinContent(s+1,a+1),this.is_projection?m=0:i.hide_only_zeros?m=0!==p||this._show_empty_bins?0:null:(m=i.palette.getContourIndex(p),null===m&&0===p&&this._show_empty_bins&&(m=0))),null===m)return n.remove(),null;const c={name:"histo",title:t.fTitle||"title",x:e.x,y:e.y,color1:this.lineatt?.color??"green",color2:this.fillatt?.getFillColorAlt("blue")??"blue",lines:this.getBinTooltips(s,a),exact:!0,menu:!0};if(this.options.Color&&(c.color2=i.palette.getColor(m)),e.disabled&&!this.is_projection)n.remove(),c.changed=!0;else{n.empty()&&(n=this.draw_g.append("svg:path").attr("class","tooltip_bin").style("pointer-events","none").call(F.Ru));const o=this.getFramePainter();let b,f=s,r=s+1,d=a,y=a+1,h=i.grx[f],l=i.grx[r],g=i.gry[y],x=i.gry[d],u=1e4*s+a;if(this.is_projection){const w=this.projection_widthX||1,j=(w-1)/2;this.is_projection.indexOf("X")>=0&&w>1&&(y+j>=i.j2?(y=Math.min(Math.round(y+j),i.j2),d=Math.max(y-w,i.j1)):(d=Math.max(Math.round(d-j),i.j1),y=Math.min(d+w,i.j2)));const B=this.projection_widthY||1,$=(B-1)/2;this.is_projection.indexOf("Y")>=0&&B>1&&(r+$>=i.i2?(r=Math.min(Math.round(r+$),i.i2),f=Math.max(r-B,i.i1)):(f=Math.max(Math.round(f-$),i.i1),r=Math.min(f+B,i.i2)))}"X"===this.is_projection?(h=0,l=o.getFrameWidth(),g=i.gry[y],x=i.gry[d],u=777*d+333*y):"Y"===this.is_projection?(g=0,x=o.getFrameHeight(),h=i.grx[f],l=i.grx[r],u=777*f+333*r):"XY"===this.is_projection&&(g=i.gry[y],x=i.gry[d],h=i.grx[f],l=i.grx[r],u=789*f+653*r+12345*d+654321*y,b=`M${h},0H${l}V${g}H${o.getFrameWidth()}V${x}H${l}V${o.getFrameHeight()}H${h}V${x}H0V${g}H${h}Z`),c.changed=n.property("current_bin")!==u,c.changed&&n.attr("d",b||`M${h},${g}H${l}V${x}H${h}Z`).style("opacity","0.7").property("current_bin",u),this.is_projection&&c.changed&&this.redrawProjection(f,r,d,y)}return c.changed&&(c.user_info={obj:t,name:"histo",bin:t.getBin(s+1,a+1),cont:p,binx:s+1,biny:a+1,grx:e.x,gry:e.y}),c}canZoomInside(e,t,i){if("z"===e)return!0;const n=this.getAxis(e);return n.FindBin(i,.5)-n.FindBin(t,0)>1}draw2D(e){var t=this;return(0,P.A)(function*(){return t.clear3DScene(),t.drawFrameAxes().then(i=>!!i&&t.drawingBins(e)).then(i=>{if(i)return t.draw2DBins().then(()=>t.addInteractivity())}).then(()=>t)})()}draw3D(e){var t=this;return(0,P.A)(function*(){return console.log("3D drawing is disabled, load ./hist/RH1Painter.mjs"),t.draw2D(e)})()}callDrawFunc(e){var t=this;return(0,P.A)(function*(){const i=t.getFramePainter();return i&&i.mode3d!==t.options.Mode3D&&!t.isMainPainter()&&(t.options.Mode3D=i.mode3d),t.options.Mode3D?t.draw3D(e):t.draw2D(e)})()}redraw(e){var t=this;return(0,P.A)(function*(){return t.callDrawFunc(e)})()}static _draw(e){return(0,P.A)(function*(){return(0,O.ensureRCanvas)(e).then(()=>{e.setAsMainPainter(),e.options={Hist:!1,Error:!1,Zero:!1,Mark:!1,Line:!1,Fill:!1,Lego:0,Surf:0,Text:!0,TextAngle:0,TextKind:"",BaseLine:!1,Mode3D:!1,AutoColor:0,Color:!1,Scat:!1,ScatCoef:1,Box:!1,BoxStyle:0,Arrow:!1,Contour:0,Proj:0,BarOffset:0,BarWidth:1,minimum:v.kNoZoom,maximum:v.kNoZoom,FrontBox:!1,BackBox:!1};const t=e.v7EvalAttr("kind",""),i=e.v7EvalAttr("sub",0),n=e.options;switch(n.Text=e.v7EvalAttr("drawtext",!1),t){case"lego":n.Lego=i>0?10+i:12,n.Mode3D=!0;break;case"surf":n.Surf=i>0?10+i:1,n.Mode3D=!0;break;case"box":n.Box=!0,n.BoxStyle=10+i;break;case"err":n.Error=!0,n.Mode3D=!0;break;case"cont":n.Contour=i>0?10+i:1;break;case"arr":n.Arrow=!0;break;case"scat":n.Scat=!0;break;case"col":n.Color=!0;break;default:n.Text||(n.Color=!0)}return e._show_empty_bins=!1,e.scanContent(),e.callDrawFunc()})})()}static draw(e,t,i){return(0,P.A)(function*(){return X._draw(new X(e,t),i)})()}}var E=_(3804),A=_(8537);class Y extends X{draw3DBins(){if(this.draw_content){if(this.options.Surf)return(0,A.u$)(this,!0);if(this.options.Error)return(0,A.s6)(this,!0);if(this.options.Contour)return(0,A.SF)(this,!0,!0);(0,A.CS)(this,!0),this.updatePaletteDraw()}}draw3D(e){this.mode3d=!0;const t=this.getFramePainter(),i=this.isMainPainter();let n=Promise.resolve(this);if("resize"===e)return i&&t.resize3D()&&t.render3D(),n;let s=1+2*v.gStyle.fHistTopMargin;return this.zmin=t.logz?.3*this.gminposbin:this.gminbin,this.zmax=this.gmaxbin,this.options.minimum!==v.kNoZoom&&(this.zmin=this.options.minimum),this.options.maximum!==v.kNoZoom&&(this.zmax=this.options.maximum,s=1),t.logz&&this.zmin<=0&&(this.zmin=1e-5*this.zmax),this.deleteAttr(),i&&((0,A.wx)(t),n=t.create3DScene(this.options.Render3D).then(()=>{t.setAxesRanges(this.getAxis("x"),this.xmin,this.xmax,this.getAxis("y"),this.ymin,this.ymax,null,this.zmin,this.zmax),t.set3DOptions(this.options),t.drawXYZ(t.toplevel,E.R,{zmult:s,zoom:v.settings.Zooming,ndim:2,draw:!0,v7:!0})})),t.mode3d?n.then(()=>this.drawingBins(e)).then(()=>{const a=this.getFramePainter();return this.draw3DBins(),a.render3D(),a.addKeysHandler(),this}):n}static draw(e,t,i){return(0,P.A)(function*(){return Y._draw(new Y(e,t),i)})()}}}}]);
//# sourceMappingURL=125.87c71e74a17035cb.js.map