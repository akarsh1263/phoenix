"use strict";(self.webpackChunkphoenix_app=self.webpackChunkphoenix_app||[]).push([[508],{1508:(v,P,o)=>{o.r(P),o.d(P,{TEfficiencyPainter:()=>h});var y=o(5072),l=o(8872),A=o(9640),H=o(2679),w=o(8868),C=o(8142),O=o(4355),x=o(6983);const u=(0,l.BIT)(14),D=(0,l.BIT)(15),T=(0,l.BIT)(17),L=(0,l.BIT)(18),m=(c,t)=>c.fBeta_bin_params.length>t?c.fBeta_bin_params[t].first:c.fBeta_alpha,B=(c,t)=>c.fBeta_bin_params.length>t?c.fBeta_bin_params[t].second:c.fBeta_beta;class h extends A.JW{getEfficiency(t,e){const f=t.fTotalHistogram.fArray[e],n=t.fPassedHistogram.fArray[e];if(t.TestBit(u)){const i=t.TestBit(T)?m(t,e):t.fBeta_alpha,r=t.TestBit(T)?B(t,e):t.fBeta_beta;let _,d;if(t.TestBit(L)){const g=f,p=t.fTotalHistogram.fSumw2?t.fTotalHistogram.fSumw2[e]:Math.abs(f);if(p<=0)return n/g;const M=g/p;_=n*M+i,d=(g-n)*M+r}else _=n+i,d=f-n+r;return t.TestBit(D)?((i,r)=>{if(i<=0||r<=0)return 0;if(i<=1||r<=1){if(i<r)return 0;if(i>r)return 1;if(i===r)return.5}return(i-1)/(i+r-2)})(_,d):((i,r)=>i<=0||r<=0?0:i/(i+r))(_,d)}return f?n/f:0}getEfficiencyErrorLow(t,e,a){const s=t.fTotalHistogram.fArray[e],f=t.fPassedHistogram.fArray[e];let n=0,i=0;return t.TestBit(u)&&(n=t.TestBit(T)?m(t,e):t.fBeta_alpha,i=t.TestBit(T)?B(t,e):t.fBeta_beta),a-this.fBoundary(s,f,t.fConfLevel,!1,n,i)}getEfficiencyErrorUp(t,e,a){const s=t.fTotalHistogram.fArray[e],f=t.fPassedHistogram.fArray[e];let n=0,i=0;return t.TestBit(u)&&(n=t.TestBit(T)?m(t,e):t.fBeta_alpha,i=t.TestBit(T)?B(t,e):t.fBeta_beta),this.fBoundary(s,f,t.fConfLevel,!0,n,i)-a}copyAttributes(t,e){["fLineColor","fLineStyle","fLineWidth","fFillColor","fFillStyle","fMarkerColor","fMarkerStyle","fMarkerSize"].forEach(a=>{t[a]=e[a]})}createGraph(){const t=(0,l.create)(H.clTGraphAsymmErrors);return t.fName="eff_graph",t}createHisto(t){const s=(0,l.createHistogram)(l.clTH2F,t.fTotalHistogram.fXaxis.fNbins,t.fTotalHistogram.fYaxis.fNbins);return Object.assign(s.fXaxis,t.fTotalHistogram.fXaxis),Object.assign(s.fYaxis,t.fTotalHistogram.fYaxis),s.fName="eff_histo",s}fillGraph(t,e){const a=this.getObject(),s=a.fTotalHistogram.fXaxis,f=s.fNbins,n=e.indexOf("e0")>=0;for(let i=0,r=0;i<f;++i){if(!n&&0===a.fTotalHistogram.getBinContent(i+1))continue;const _=this.getEfficiency(a,i+1);t.fX[r]=s.GetBinCenter(i+1),t.fY[r]=_,t.fEXlow[r]=s.GetBinCenter(i+1)-s.GetBinLowEdge(i+1),t.fEXhigh[r]=s.GetBinLowEdge(i+2)-s.GetBinCenter(i+1),t.fEYlow[r]=this.getEfficiencyErrorLow(a,i+1,_),t.fEYhigh[r]=this.getEfficiencyErrorUp(a,i+1,_),t.fNpoints=++r}t.fTitle=a.fTitle,this.copyAttributes(t,a)}fillHisto(t){const e=this.getObject(),a=t.fXaxis.fNbins,s=t.fYaxis.fNbins;for(let f=0;f<a+2;++f)for(let n=0;n<s+2;++n){const i=t.getBin(f,n),r=this.getEfficiency(e,i);t.fArray[i]=r}t.fTitle=e.fTitle,t.fBits=t.fBits|l.kNoStats,this.copyAttributes(t,e)}drawFunction(t){const e=this.getObject();return!e?.fFunctions||t>=e.fFunctions.arr.length?this:w.TF1Painter.draw(this.getPadPainter(),e.fFunctions.arr[t],e.fFunctions.opt[t]).then(a=>(a?.setSecondaryId(this,`func_${t}`),this.drawFunction(t+1)))}fillContextMenuItems(t){t.addRedrawMenu(this)}redrawWith(t,e){var a=this;return(0,y.A)(function*(){e||a.getPadPainter()?.removePrimitive(a,!0),(!t||!(0,l.isStr)(t))&&(t=""),t=t.toLowerCase();let s,f=!1;const n=a.getObject(),i=a.getDrawDom();if("b"===t[0])f=!0,s=(1===a.ndim?C.TH1Painter:O.TH2Painter).draw(i,n.fTotalHistogram,t.slice(1));else if(1===a.ndim){t||(t="ap"),t.indexOf("same")<0&&t.indexOf("a")<0&&(t+="a"),t.indexOf("p")<0&&(t+="p");const r=a.createGraph(n);a.fillGraph(r,t),s=H.TGraphPainter.draw(i,r,t)}else{t||(t="col");const r=a.createHisto(n);a.fillHisto(r,t),s=O.TH2Painter.draw(i,r,t)}return s.then(r=>(r?.setSecondaryId(a,"eff"),a.addToPadPrimitives(),f?a:a.drawFunction(0)))})()}static draw(t,e,a){return(0,y.A)(function*(){if(!e||!e.fTotalHistogram)return null;const s=new h(t,e);if(0===e.fTotalHistogram._typename.indexOf(l.clTH1))s.ndim=1;else{if(0!==e.fTotalHistogram._typename.indexOf(l.clTH2))return null;s.ndim=2}return s.fBoundary=(0,x.getTEfficiencyBoundaryFunc)(e.fStatisticOption,e.TestBit(u)),s.redrawWith(a,!0)})()}}}}]);
//# sourceMappingURL=508.7eeeffdf24d755df.js.map