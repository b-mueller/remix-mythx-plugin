(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,a){e.exports=a(425)},173:function(e,t,a){},191:function(e,t){},193:function(e,t){},225:function(e,t){},226:function(e,t){},295:function(e,t){},425:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(157),o=a.n(s),c=(a(173),a(27)),i=a.n(c),l=a(89),u=a(158),d=a(159),m=a(164),f=a(160),p=a(35),v=a(165),g=a(90),h=a(161),y=a.n(h),b=(a(406),a(163)),w=a(162),E=a.n(w),C=a(166),N=a(167),O=function(e,t){return e||2===t},k=function(e){return e.map(function(e){var t=e.messages,a=Object(N.a)(e,["messages"]),n=function(e){return e.map(function(e){return JSON.stringify(e)}).reduce(function(e,t){return-1===e.indexOf(t)&&e.push(t),e},[]).map(function(e){return JSON.parse(e)})}(t),r=function(e){return e.reduce(function(e,t){var a=t.fatal,n=t.severity;return O(a,n)?e:e+1},0)}(n),s=function(e){return e.reduce(function(e,t){var a=t.fatal,n=t.severity;return O(a,n)?e+1:e},0)}(n);return Object(C.a)({},a,{messages:n,errorCount:s,warningCount:r})})},S={High:2,Medium:1},j=new E.a,x=function(e,t){var a,n,r={fatal:!1,ruleId:e.swcID?"https://smartcontractsecurity.github.io/SWC-registry/docs/"+e.swcID:"N/A",message:"".concat(e.description.head),severity:S[e.severity]||1,mythXseverity:e.severity,line:-1,column:0,endLine:-1,endCol:0},s=j.getLinebreakPositions(t);if(e.locations.length){var o=function(e,t){var a=e.split(":"),n={length:parseInt(a[1],10),start:parseInt(a[0],10)},r=j.convertOffsetToLineColumn(n,t);return[r.start,r.end]}(e.locations[0].sourceMap.split(";")[0],s),c=Object(b.a)(o,2);a=c[0],n=c[1]}return a&&(r.line=a.line,r.column=a.column,r.endLine=n.line,r.endCol=n.column),r},A=function(e,t){var a=t.map(function(t){return function(e,t){var a=e.issues,n=e.sourceList,r={};for(var s in a.map(function(e){var a=function(e){if(e.locations.length){var t=/(\d+):(\d+):(\d+)/g.exec(e.locations[0].sourceMap);return t?t[3]:0}return 0}(e),s=n[a].replace(/^\//,"");r[s]||(r[s]={errorCount:0,warningCount:0,fixableErrorCount:0,fixableWarningCount:0,filePath:s,messages:[]}),r[s].messages.push(x(e,t.sources[s].content))}),r)r.hasOwnProperty(s)&&(r[s].warningCount=r[s].messages.reduce(function(e,t){var a=t.fatal,n=t.severity;return O(a,n)?e:e+1},0),r[s].errorCount=r[s].messages.reduce(function(e,t){var a=t.fatal,n=t.severity;return O(a,n)?e+1:e},0));return Object.values(r)}(t,e)}).reduce(function(e,t){return e.concat(t)},[]);return k(a)},I="remix-mythx-plugin",z={address:"0x0000000000000000000000000000000000000000",pwd:"trial"},L={},M=function(e){function t(e){var a;Object(u.a)(this,t),a=Object(m.a)(this,Object(f.a)(t).call(this,e));var n=localStorage.getItem(I)||"{}",r=JSON.parse(n);a.state={address:r.address||z.address,pwd:r.pwd||z.pwd,compilation:{},selected:"",isAnalyzig:!1,analysis:{},report:{},error:""},a.saveCredentials=a.saveCredentials.bind(Object(p.a)(a)),a.analyze=a.analyze.bind(Object(p.a)(a)),a.getContractList=a.getContractList.bind(Object(p.a)(a));return(L=Object(g.createIframeClient)({customApi:g.remixApi,devMode:{port:8080}})).on("solidity","compilationFinished",function(e,t,n,r){var s=Object.keys(r.contracts[e]);a.setState({compilation:{target:e,source:t,version:n,data:r},selected:s[0]})}),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"saveCredentials",value:function(){var e=this.state,t=e.address,a=e.pwd;localStorage.setItem(I,JSON.stringify({address:t,pwd:a}))}},{key:"analyze",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a,n,r,s,o=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.address,n=t.pwd,r=t.compilation,s=new y.a.Client({ethAddress:a,password:n}),this.setState({analysis:{},error:"",isAnalyzig:!0}),e.next=5,L.editor.discardHighlight();case 5:s.analyzeWithStatus({data:this.getRequestData(),clientToolName:"remythx"}).then(function(e){o.setState({analysis:e,error:"",isAnalyzig:!1});var t=e.issues;o.handleResult(r.source,t)}).catch(function(e){o.setState({error:e.message||e,analysis:{},isAnalyzig:!1})});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getRequestData",value:function(){var e=this.state,t=e.compilation,a=e.selected,n=t.data,r=void 0===n?{}:n,s=t.source,o=void 0===s?{}:s,c=r.contracts,i=void 0===c?[]:c,l=i[t.target][a].evm.bytecode,u=i[t.target][a].evm.deployedBytecode,d={contractName:a,bytecode:l.object,sourceMap:l.sourceMap,deployedBytecode:u.object,deployedSourceMap:u.sourceMap,analysisMode:"quick",mainSource:t.target,sourceList:Object.keys(o.sources),sources:{}};for(var m in o.sources)o.sources.hasOwnProperty(m)&&(d.sources[m]={source:o.sources[m].content});return d}},{key:"handleResult",value:function(e,t){var a=this.state.compilation,n=A(e,t);0===n.length?this.setState({report:{message:"\u2714 No errors/warnings found in ".concat(a.target)}}):this.setState({report:{list:n}})}},{key:"getContractList",value:function(){var e=this.state.compilation,t=e.data,a=(void 0===t?{}:t).contracts,n=(void 0===a?[]:a)[e.target]||{};return Object.keys(n).map(function(t){return{name:t,path:"".concat(e.target,"::").concat(t)}})}},{key:"highlightIssue",value:function(){var e=Object(l.a)(i.a.mark(function e(t,a){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={start:{line:a.line,column:a.column},end:{line:a.endLine,column:a.endCol}},r=1===a.severity?"#ffd300":"#ff0000",e.next=4,L.editor.highlight(n,t.filePath,r);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.compilation,n=t.selected,s=t.isAnalyzig,o=t.error,c=t.report;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row border-bottom pb-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",{type:"text",className:"form-control",id:"address","aria-describedby":"emailHelp",placeholder:"Address",onChange:function(t){return e.setState({address:t.target.value})},defaultValue:this.state.address})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pwd"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"Password",onChange:function(t){return e.setState({pwd:t.target.value})},defaultValue:this.state.pwd})),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.saveCredentials},"Save")))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},a.target?r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",defaultValue:n,onChange:function(t){return e.setState({selected:t.target.value})}},this.getContractList().map(function(e,t){return r.a.createElement("option",{key:t,value:e.name},e.path)}))),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.analyze,disabled:s},s?r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):r.a.createElement("span",null,"Analyze"))):r.a.createElement("div",{className:"alert alert-warning w-100",role:"alert"},"You need to compile your contract first!"))),o?r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-danger w-100",role:"alert"},o))):null,c.message?r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-success w-100",role:"alert"},c.message))):null,c.list?r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},c.list.map(function(t,a){var n=t.errorCount+t.warningCount,s=function(e,t){return"".concat(e," ").concat(1===e?t:"".concat(t,"s"))};return r.a.createElement("div",{key:a,className:"border-bottom pt-2 pb-2"},r.a.createElement("div",null,t.filePath),t.messages.map(function(a,n){var s;return r.a.createElement("div",{key:n,className:"pl-3",style:{cursor:"pointer"},onClick:function(){e.highlightIssue(t,a)}},"".concat(a.line+1,":").concat(a.column," ").concat((s=a.severity,1===s?"warning":"error")," ").concat(a.message," "),r.a.createElement("a",{href:a.ruleId,target:"_blank",rel:"noopener noreferrer"},"[SWC]"))}),r.a.createElement("div",null,"\u2716 ".concat(s(n,"problem")," (").concat(s(t.errorCount,"error"),", ").concat(s(t.warningCount,"warning"),")")))}))):null)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[168,1,2]]]);
//# sourceMappingURL=main.90fcb1d5.chunk.js.map