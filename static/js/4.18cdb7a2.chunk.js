(this["webpackJsonpopencast-react-studio"]=this["webpackJsonpopencast-react-studio"]||[]).push([[4],{138:function(e,t,n){"use strict";n.r(t);var r=n(75),a=n(13),o=n(69),c=n(6),i=n(70),s=n(76),l=n(85),d=n(1),u=n.n(d);var b={serverUrl:"https://develop.opencast.org/",workflowId:"fast",loginName:"admin",loginPassword:"opencast",connected:!1},p=n(71),h=n(72),g=function(e){return Object(c.c)(i.a,Object.assign({sx:{maxWidth:960,mx:"auto",px:3}},e))},f=function(e){return Object(c.c)(i.a,Object.assign({sx:{background:"gray.2",color:"gray.1",borderWidth:1,borderStyle:"solid",borderColor:"gray.2",borderLeftWidth:3,borderLeftColor:"primary",fontFamily:"monospace",lineHeight:"body",my:3,px:3,py:2,maxWidth:"100%",overflow:"auto",pageBreakInside:"avoid",wordWrap:"break-word"}},e))};function v(){return Object(c.c)("article",null,Object(c.c)(c.a.h2,null,"ELAN e.V."),Object(c.c)(c.a.p,null,"The e-learning academic network (ELAN e.V.) is a German non-profit organization supporting higher-education organizations in all matters related to e-learning. Our services include practical tips about how to use digital technologies in education, legal advice and development of free, open-source software to support education."),Object(c.c)(c.a.h3,null,"Contact"),Object(c.c)(c.a.p,null,"Dr. Norbert Kleinefeld, Gesch\xe4ftsf\xfchrer",Object(c.c)("br",null),"Karlstr. 23",Object(c.c)("br",null),"D-26123 Oldenburg"),Object(c.c)(c.a.p,null,Object(c.c)(p.a,{icon:h.g})," ",Object(c.c)(c.a.a,{href:"https://elan-ev.de"},"elan-ev.de"),Object(c.c)("br",null),Object(c.c)(p.a,{icon:h.f})," ",Object(c.c)(c.a.a,{href:"mailto:kontakt@elan-ev.de"},"kontakt@elan-ev.de"),Object(c.c)("br",null),Object(c.c)(p.a,{icon:h.j})," ",Object(c.c)(c.a.a,{href:"tel:+4944199866610"},"+49\u2009441 998\u2009666\u200910")),Object(c.c)(c.a.p,null,"Registergericht: Amtsgericht Oldenburg",Object(c.c)("br",null),"Registernummer: VR 200644",Object(c.c)("br",null),"USt.-ID-Nr.: DE 265901392"))}var m=function(e){return Object(c.c)(g,{className:e.className},Object(c.c)("article",null,Object(c.c)("header",null,Object(c.c)(c.a.h1,null,"Opencast Studio")),Object(c.c)(c.a.p,null,"A web-based recording studio for ",Object(c.c)(c.a.a,{href:"https://opencast.org"},"Opencast"),"."),Object(c.c)(c.a.p,null,"This is free software under the terms of the"," ",Object(c.c)(c.a.a,{href:"https://github.com/elan-ev/opencast-studio/blob/master/LICENSE"},"MIT License")," ","developed by the ",Object(c.c)(c.a.a,{href:"https://elan-ev.de"},"ELAN e.V.")," in cooperation with the ",Object(c.c)(c.a.a,{href:"https://ethz.ch"},"ETH Z\xfcrich"),"."," Please report bugs or submit new features on the project's ",Object(c.c)(c.a.a,{href:"https://github.com/elan-ev/opencast-studio"},"GitHub page"),"."),Object(c.c)(c.a.p,null,"If you are interested in additional development or integrations into specific tools (e.g. LMS), please contact"," ",Object(c.c)(c.a.a,{href:"mailto:opencast-support@elan-ev.de"},"opencast-support@elan-ev.de"),"."),Object(c.c)(c.a.h2,null,"How it works"),Object(c.c)(c.a.p,null,"Opencast Studio uses the recording capabilities build into browsers to record audio and video streams.\n            The recording happens in the user's browser.\n            No server is involved in the recording.\n            Finally, the recording is transferred directly from the users browser to the target Opencast."),Object(c.c)(c.a.h2,null,"Allow Studio to interact with your Opencast"),Object(c.c)(c.a.p,null,"For Studio to work with your Opencast, your need to allow this on your Opencast by serving a special HTTP header. The mechanism used is called"," ",Object(c.c)(c.a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"Cross-Origin Resource Sharing"),"."),Object(c.c)(c.a.p,null,"Here is a list of the required headers in Nginx's configuration format:"),Object(c.c)(f,null,"# Basic open CORS for studio.opencast.org",Object(c.c)("br",null),"add_header Access-Control-Allow-Origin https://studio.opencast.org;",Object(c.c)("br",null),"add_header Access-Control-Allow-Methods 'GET, POST';",Object(c.c)("br",null),"add_header Access-Control-Allow-Credentials true;",Object(c.c)("br",null),"add_header Access-Control-Allow-Headers 'Origin,Content-Type,Accept,Authorization';"),Object(c.c)(c.a.p,null,"For a complete configuration file, take a look at the"," ",Object(c.c)(c.a.a,{href:"https://github.com/opencast/opencast-project-infrastructure/blob/9f09638e922d623cd4d3c91dd90aca39c421530d/ansible-allinone-demo-vm/roles/nginx/templates/nginx.conf#L158-L162"},"test server configuration"),"."),Object(c.c)(c.a.h2,null,"Credits"),Object(c.c)(c.a.p,null,"Thanks to the following people and institutions for contributing to this project:"),Object(c.c)("ul",null,Object(c.c)("li",null,Object(c.c)(c.a.a,{href:"https://github.com/slampunk"},"Duncan Smith")," for starting this project"),Object(c.c)("li",null,Object(c.c)(c.a.a,{href:"https://github.com/cilt-uct"},"University of Cape Town (CILT)")," ","for letting Duncan start the project"),Object(c.c)("li",null,Object(c.c)(c.a.a,{href:"https://ethz.ch"},"ETH Z\xfcrich")," for financial support and testing"),Object(c.c)("li",null,Object(c.c)(c.a.a,{href:"https://github.com/elan-ev"},"ELAN e.V.")," for the final development")),Object(c.c)(v,null),Object(c.c)(c.a.h2,null,"Version"),Object(c.c)(c.a.p,null,"Build date ","2020-01-07",", commit"," ",Object(c.c)(c.a.a,{"aria-label":"Git commit on GitHub",href:"https://github.com/elan-ev/opencast-studio/commit/3a7a17e"},"3a7a17e"),".")))},O=n(26),j=n(110),x=function(e){var t=e.target,n=e.children,o=e.icon,i=Object(r.a)(e,["target","children","icon"]),l=Object(a.a)({sx:{color:"white",pl:[3,3,"10px"],pr:[3,3,"14px"],textDecoration:"none",fontSize:"18px",height:["auto","auto","100%"],borderLeft:["none","none",function(e){return"1px solid ".concat(e.colors.gray[3])}],display:["block","block","inline-block"],width:["100%","100%","auto"],"&:hover":{backgroundColor:"gray.1"}}},i),u=Object(c.c)(d.Fragment,null,Object(c.c)("div",{sx:{width:"20px",display:"inline-block",textAlign:"right",mr:[3,3,2]}},Object(c.c)(p.a,{icon:o})),n);return t.startsWith("/")?Object(c.c)(s.c,Object.assign({to:t,exact:!0,activeStyle:{backgroundColor:"black"}},l),u):Object(c.c)("a",Object.assign({href:t},l),u)},k=function(e){var t=Object(d.useState)(!1),n=Object(o.a)(t,2),r=n[0],a=n[1],i=function(){return a(!r)},s=Object(O.b)().t;return Object(c.c)(d.Fragment,null,Object(c.c)("button",{onClick:i,sx:{display:["inline-block","inline-block","none"],border:function(e){return"2px solid ".concat(e.colors.gray[3])},borderRadius:"10px",color:"white",my:1,px:3,mx:1,fontSize:"20px",backgroundColor:"transparent","&:hover":{backgroundColor:"gray.1"},"&:active":{}}},s("nav-open-menu-button"),Object(c.c)("span",{sx:{width:"23px",display:"inline-block"}},Object(c.c)(p.a,{icon:r?h.m:h.a,sx:{ml:"10px"}}))),Object(c.c)("nav",{ref:function(e){e&&(e.style.height=r?e.scrollHeight+"px":"")},sx:{overflow:"hidden",zIndex:10,height:["0px","0px","100% !important"],top:[function(e){return e.heights.headerHeight},function(e){return e.heights.headerHeight},0],position:["absolute","absolute","static"],width:["100%","100%","auto"],backgroundColor:["gray.0","gray.0","none"],transition:["height 0.25s ease-out 0s","height 0.25s ease-out 0s","none"],scrollX:["none","none","auto"]}},Object(c.c)(x,{target:"/",icon:h.p,onClick:i},s("nav-recording")),Object(c.c)(x,{target:"/settings",icon:h.q,onClick:i},s("nav-settings")),Object(c.c)(x,{target:"/about",icon:h.h,onClick:i},s("nav-about")),Object(c.c)(x,{target:"https://github.com/elan-ev/opencast-studio/issues",icon:j.a,onClick:i},s("nav-report-issue"))),r&&Object(c.c)("div",{onClick:i,ref:function(e){return e&&(e.style.opacity=1)},sx:{display:[r?"block":"none",r?"block":"none","none"],backgroundColor:"rgba(0, 0, 0, 0.7)",position:"fixed",zIndex:-10,top:0,bottom:0,left:0,right:0,opacity:0,transition:"opacity 0.25s ease-out 0s"}}))},y=function(e){return Object(c.c)("span",Object.assign({sx:{position:"relative",top:"4px",fontSize:"12pt",verticalAlign:"top",display:["none","inline"],borderWidth:1,borderStyle:"solid",borderColor:"gray.2",borderRadius:5,padding:"2px",color:"gray.2"}},e))};function w(){return Object(c.c)("span",null,Object(c.c)(s.b,{to:"/"},Object(c.c)("picture",null,Object(c.c)("source",{media:"(min-width: 920px)",srcSet:"".concat("","/opencast-studio.svg")}),Object(c.c)("img",{src:"".concat("","/opencast-studio-small.svg"),alt:"Opencast Studio",sx:{height:50}}))),Object(c.c)(y,null,"beta"))}var S=function(){return Object(c.c)("header",{sx:{height:function(e){return e.heights.headerHeight},lineHeight:function(e){return e.heights.headerHeight},color:"background",display:"flex",justifyContent:"space-between",position:"relative",zIndex:3}},Object(c.c)("div",{sx:{backgroundColor:"gray.0",position:"absolute",zIndex:-3,height:"100%",width:"100%"}}),Object(c.c)(w,null),Object(c.c)(k,null))},C=n(82),R=n.n(C),D=[{short:"en",long:"English",rtl:!1},{short:"de",long:"Deutsch",rtl:!1},{short:"el",long:"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",rtl:!1},{short:"es",long:"Espa\xf1ol",rtl:!1},{short:"fa",long:"Farsi",rtl:!0},{short:"fr",long:"Fran\xe7ais",rtl:!1}],T=function(){var e=Object(O.b)().i18n;return Object(c.c)("select",{sx:{variant:"styles.select"},defaultValue:e.language,onChange:function(t){return e.changeLanguage(t.target.value)}},D.map((function(e){return Object(c.c)("option",{value:e.short,key:e.short},e.long)})))},P=function(e){var t=e.isDanger,n=Object(r.a)(e,["isDanger"]);return Object(c.c)("div",Object.assign({sx:{":not(:last-child)":{marginBottom:"1.5rem"},backgroundColor:t?"error":"gray.3",color:t?"background":"currentColor",borderRadius:2,padding:3,position:"relative"}},n))},E=n(73),F=n(74),I=n(112),A=n.n(I),M=function(){function e(t){Object(E.a)(this,e),this.server_url=t.serverUrl.endsWith("/")?t.serverUrl.slice(0,-1):t.serverUrl,this.workflow_id=t.workflowId,this.username=t.loginName,this.password=t.loginPassword}return Object(F.a)(e,[{key:"checkConnection",value:function(){return R.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.awrap(this.login());case 3:return e.next=5,R.a.awrap(this.validateState());case 5:return e.abrupt("return",!!e.sent);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),null,this,[[0,8]])}},{key:"loginAndUpload",value:function(e,t,n,r,a,o,c){var i;return R.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return i=!0,s.prev=1,s.next=4,R.a.awrap(this.validateState());case 4:i=s.sent,s.next=11;break;case 7:return s.prev=7,s.t0=s.catch(1),r(s.t0),s.abrupt("return");case 11:if(i){s.next=14;break}return s.next=14,R.a.awrap(this.login());case 14:this.uploadFromRecordings(e,t,n,r,a,o,c);case 15:case"end":return s.stop()}}),null,this,[[1,7]])}},{key:"uploadFromRecordings",value:function(e,t,n,r,a,o,c){var i,s,l,d,u,b,p,h,g,f,v,m=this;return R.a.async((function(O){for(;;)switch(O.prev=O.next){case 0:return O.prev=0,O.next=3,R.a.awrap(this.validateState());case 3:if(O.sent){O.next=7;break}return n(),O.abrupt("return");case 7:O.next=13;break;case 9:return O.prev=9,O.t0=O.catch(0),r(O.t0),O.abrupt("return");case 13:return O.prev=13,O.next=16,R.a.awrap(this.getMediaPackage().then((function(e){var t=(new DOMParser).parseFromString('<?xml version="1.0" encoding="UTF-8"?>\n          <dublincore xmlns="http://www.opencastproject.org/xsd/1.0/dublincore/"\n                      xmlns:dcterms="http://purl.org/dc/terms/"\n                      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n              <dcterms:created xsi:type="dcterms:W3CDTF">2001-01-01T01:01Z</dcterms:created>\n              <dcterms:creator>Creator not set</dcterms:creator>\n              <dcterms:extent xsi:type="dcterms:ISO8601">PT5.568S</dcterms:extent>\n              <dcterms:title>Title Not Set</dcterms:title>\n              <dcterms:spatial>Opencast Studio</dcterms:spatial>\n          </dublincore>',"text/xml"),n=t.getElementsByTagName("dcterms:created"),r=t.getElementsByTagName("dcterms:creator"),a=t.getElementsByTagName("dcterms:title");return n[0].textContent=new Date(Date.now()).toISOString(),r[0].textContent=c,a[0].textContent=o,m.addDCCatalog(e.data,(new XMLSerializer).serializeToString(t),"dublincore/episode")})));case 16:i=O.sent,s=!0,l=!1,d=void 0,O.prev=20,u=e.filter(Boolean)[Symbol.iterator]();case 22:if(s=(b=u.next()).done){O.next=37;break}return p=b.value,h=p.deviceType,g=p.media,f="presentation/source","desktop"===h?f="presentation/source":"video"===h&&(f="presenter/source"),"video",v="".concat("desktop"===h?"Presentation":"Presenter"," ").concat("video"," - ").concat(o||"Recording",".webm"),O.next=33,R.a.awrap(this.addTrack(i.data,g,v,f,""));case 33:i=O.sent;case 34:s=!0,O.next=22;break;case 37:O.next=43;break;case 39:O.prev=39,O.t1=O.catch(20),l=!0,d=O.t1;case 43:O.prev=43,O.prev=44,s||null==u.return||u.return();case 46:if(O.prev=46,!l){O.next=49;break}throw d;case 49:return O.finish(46);case 50:return O.finish(43);case 51:return O.next=53,R.a.awrap(this.ingest(i.data,this.workflow_id));case 53:O.next=59;break;case 55:return O.prev=55,O.t2=O.catch(13),a(O.t2),O.abrupt("return");case 59:t();case 60:case"end":return O.stop()}}),null,this,[[0,9],[13,55],[20,39,43,51],[44,,46,50]])}},{key:"validateState",value:function(){var e,t;return R.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R.a.awrap(this.getMeInfo());case 2:return e=n.sent,t=e.data,n.abrupt("return","anonymous"!==t.user.username);case 5:case"end":return n.stop()}}),null,this)}},{key:"login",value:function(){var e="j_username=".concat(this.username,"&j_password=").concat(this.password,"&_spring_security_remember_me=on"),t="".concat(this.server_url,"/admin_ng/j_spring_security_check");return A()({url:t,method:"post",data:e,withCredentials:!0})}},{key:"getMeInfo",value:function(){var e="".concat(this.server_url,"/info/me.json");return A.a.get(e,{responseType:"text",withCredentials:!0})}},{key:"getMediaPackage",value:function(){var e="".concat(this.server_url,"/ingest/createMediaPackage");return A.a.get(e,{responseType:"text",withCredentials:!0})}},{key:"addDCCatalog",value:function(e,t,n){var r=new FormData;r.append("mediaPackage",e),r.append("dublinCore",t),r.append("flavor",n);var a="".concat(this.server_url,"/ingest/addDCCatalog");return A()({url:a,method:"post",data:r,responseType:"text",withCredentials:!0})}},{key:"addTrack",value:function(e,t,n,r,a){var o=new FormData;o.append("mediaPackage",e),o.append("flavor",r),o.append("tags",a),o.append("BODY",t,n);var c="".concat(this.server_url,"/ingest/addTrack");return A()({url:c,method:"post",data:o,responseType:"text",withCredentials:!0})}},{key:"ingest",value:function(e,t){var n=new FormData;n.append("mediaPackage",e),n.append("workflowDefinitionId",t);var r="".concat(this.server_url,"/ingest/ingest");return A()({url:r,method:"post",data:n,responseType:"text",withCredentials:!0})}}]),e}(),U=n(137),z=function(e){var t=e.errors,n=e.label,a=e.name,o=e.register,i=e.required,s=e.type,l=void 0===s?"text":s,d=Object(r.a)(e,["errors","label","name","register","required","type"]),u=Object(O.b)().t;return Object(c.c)("div",{sx:{"&:not(:last-child)":{mb:3}}},Object(c.c)("label",{sx:{color:"text",display:"block",fontSize:2,fontWeight:"bold"}},n,Object(c.c)("div",{sx:{display:"block",boxSizing:"border-box",clear:"both",fontSize:2,position:"relative",textAlign:"left"}},Object(c.c)("input",Object.assign({"aria-invalid":t[a]?"true":"false","aria-describedby":"".concat(a,"Error"),autoComplete:"off",name:a,ref:o({required:i}),sx:{variant:"styles.input"},type:l},d)),t[a]&&Object(c.c)("p",{id:"".concat(a,"Error"),sx:{color:"error",fontSize:1,fontWeight:"body",mt:1}},u("forms-validation-error-required")))))};var W=function(e){var t=Object(O.b)().t,n=Object(U.a)({defaultValues:e.settings}),r=n.errors,a=n.handleSubmit,o=n.register,s=n.reset;return Object(c.c)(i.a,{sx:{maxWidth:960,mx:"auto"}},Object(c.c)("form",{onSubmit:a((function(t){e.handleSubmit(t)}))},Object(c.c)(z,{errors:r,label:t("upload-settings-label-server-url"),name:"serverUrl",register:o,required:!0}),Object(c.c)(z,{errors:r,label:t("upload-settings-label-workflow-id"),name:"workflowId",register:o,required:!0}),Object(c.c)(z,{errors:r,label:t("upload-settings-label-username"),name:"loginName",register:o,required:!0}),Object(c.c)(z,{errors:r,label:t("upload-settings-label-password"),name:"loginPassword",register:o,required:!0,type:"password"}),Object(c.c)("footer",{sx:{mt:4}},Object(c.c)(i.b,null,t("upload-settings-button-store")),e.settings.connected&&Object(c.c)(i.b,{variant:"text",onClick:function(t){s(),e.handleCancel(t)}},t("cancel-button-title")))))};var L=function(e){var t=Object(O.b)().t,n=Object(d.useState)(),r=Object(o.a)(n,2),s=r[0],u=r[1],b=Object(l.g)(),p=(Object(l.h)().state||{from:{pathname:"/"}}).from;function h(){b.replace(p)}return Object(c.c)(i.a,{sx:{maxWidth:960,mx:"auto",px:3,pb:3}},Object(c.c)("header",null,Object(c.c)("h1",null,t("settings-header"))),Object(c.c)("label",{sx:{fontWeight:"bold"}},"Language"),Object(c.c)(T,null),Object(c.c)("h2",{sx:{fontWeight:"heading"}},t("upload-settings-modal-header")),Object(c.c)("main",null,s&&Object(c.c)(P,{isDanger:!0},s),!e.settings.connected&&Object(c.c)(P,null,t("settings-first-run")),Object(c.c)(W,{settings:e.settings,handleSubmit:function(n){var r;return R.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,r=new M(Object(a.a)({},n)),o.next=4,R.a.awrap(r.checkConnection());case 4:if(o.sent){o.next=8;break}return u(t("upload-settings-validation-error")),o.abrupt("return");case 8:e.handleUpdate(n),h(),o.next=16;break;case 12:o.prev=12,o.t0=o.catch(0),u(t("message-server-unreachable")),console.log(o.t0);case 16:case"end":return o.stop()}}),null,null,[[0,12]])},handleCancel:h})))},N=n(97);var _=function(e){var t=e.onClick,n=e.title,r=e.icon,a=e.stream,o=Object(d.useRef)();return Object(d.useEffect)((function(){o.current&&"undefined"!=typeof a&&(o.current.srcObject=a)})),Object(c.c)("div",{onClick:a?null:t,"data-title":n,sx:{backgroundColor:"gray.3",boxShadow:"0 2px 2px rgba(0, 0, 0, 0.35)",overflow:"hidden",zIndex:"0",cursor:a?"initial":"pointer",position:"relative",display:"flex",flexDirection:"column",alignItems:"center"}},Object(c.c)("video",{ref:o,autoPlay:!0,muted:!0,sx:{outline:"none",position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:2,background:"transparent"}}),!a&&Object(c.c)(d.Fragment,null,Object(c.c)("span",{sx:{flex:"1 0 auto",display:"flex",alignItems:"center",justifyContent:"center",color:"white"}},Object(c.c)(p.a,{icon:r,sx:{fontSize:[6,7,8]}})),Object(c.c)("p",{sx:{color:"gray.1",fontSize:4,fontWeight:"heading"}},n)))},H=function(){return"mediaDevices"in navigator&&"getDisplayMedia"in navigator.mediaDevices&&!(/Android|iPhone|iPad|iPod/i.test(navigator.platform)||/Android/i.test(navigator.userAgent))},B=function(){return"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices};var V=function(e){var t=Object(O.b)().t;return Object(c.c)("div",{sx:{flex:1,display:"flex",flexDirection:["column","row"],justifyContent:"center",flexWrap:"wrap","& > *":{flex:"1 0 50%"}}},H()&&Object(c.c)(_,{onClick:function(){var t;(t={video:!0,audio:!0},navigator.mediaDevices.getDisplayMedia(t).catch((function(e){return console.error("Error:"+e),N.a.error("Your browser does not permit to capture the screen."),null}))).then((function(t){e.setDesktopStream(t)}))},title:t("share-desktop"),icon:h.d,stream:e.desktopStream}),B()&&Object(c.c)(_,{onClick:function(){var t;(t={audio:!0,video:{width:{ideal:1280,max:1920},height:{ideal:720,max:1080}}},navigator.mediaDevices.getUserMedia(t).catch((function(e){return console.error("Error:"+e),N.a.error("Your browser does not permit to capture your webcam."),null}))).then((function(t){e.setVideoStream(t)}))},title:t("share-camera"),icon:h.p,stream:e.videoStream}),!H()&&!B()&&Object(c.c)("div",{sx:{p:3}},Object(c.c)(P,{isDanger:!0},"Your browser does not allow capturing your display or any other media input.")))},q=n(29),G=n(86),Y=n(84),J=n(83),X=n(87),Z=n(136),K=n(135);var Q=function(e,t){var n=document.createElement("a");n.download=t,n.rel="noopener",n.href=URL.createObjectURL(e),setTimeout((function(){URL.revokeObjectURL(n.href)}),4e4),setTimeout((function(){!function(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}(n)}),0)},$=function(e){return MediaRecorder&&"isTypeSupported"in MediaRecorder&&e.find((function(e){return MediaRecorder.isTypeSupported(e)}))||""},ee=function(e){function t(e,n){var r;Object(E.a)(this,t),r=Object(G.a)(this,Object(Y.a)(t).call(this)),n||(n=e.getVideoTracks().length?$(['video/webm;codecs="vp9,opus"','video/webm;codecs="vp9.0,opus"','video/webm;codecs="avc1"','video/x-matroska;codecs="avc1"','video/webm;codecs="vp8,opus"']):$(["audio/ogg;codecs=opus","audio/webm;codecs=opus"]));var a=[];return r.recorder=new MediaRecorder(e,{mimeType:n}),r.recorder.ondataavailable=function(e){e.data.size>0&&a.push(e.data)},r.recorder.onerror=function(e){r.emit("record.error",e)},r.recorder.onstart=function(){r.emit("record.start",!0)},r.result=null,r.recorder.onstop=function(){var e=("audio"===r.deviceType?"audio":"video")+"/webm";r.result=new Blob(a,{type:e});var t=URL.createObjectURL(r.result);r.emit("record.complete",{url:t,media:r.result}),r.recorder=null},Object.defineProperty(Object(J.a)(r),"recData",{get:function(){return a}}),r.isRecording=!1,r.isPaused=!1,r}return Object(X.a)(t,e),Object(F.a)(t,[{key:"start",value:function(e){var t=this;e=e||0,this.isRecording?this.isPaused&&this.resume():(setTimeout((function(){t.recorder.start()}),e),this.isRecording=!0)}},{key:"pause",value:function(){this.isPaused?this.resume():this.recorder.pause(),this.isPaused=!this.isPaused}},{key:"resume",value:function(){"paused"===this.recorder.state&&this.recorder.resume()}},{key:"stop",value:function(){this.recorder.stop(),this.isRecording=!1}}]),t}(function(){function e(){Object(E.a)(this,e);var t={},n={};Object.defineProperty(this,"completeFns",{get:function(){return t}}),Object.defineProperty(this,"onceFns",{get:function(){return n}})}return Object(F.a)(e,[{key:"on",value:function(e,t){this.completeFns[e]||(this.completeFns[e]={});var n=null;do{n=(Math.random()+1).toString(36).substring(2,10)}while(Object.keys(this.completeFns).indexOf(n)>-1);return t="function"===typeof t?{fn:t,scope:null}:t,this.completeFns[e][n]={scope:t.scope,fn:t.fn},n}},{key:"once",value:function(e,t){this.onceFns[e]||(this.onceFns[e]={});var n=null;do{n=(Math.random()+1).toString(36).substring(2,10)}while(Object.keys(this.completeFns).indexOf(n)>-1);t="function"===typeof t?{fn:t,scope:null}:t,this.onceFns[e][n]={scope:t.scope,fn:t.fn}}},{key:"off",value:function(e,t){return!(!e||!t)&&(!(!this.completeFns[e]||!this.completeFns[e][t])&&(delete this.completeFns[e][t],!0))}},{key:"emit",value:function(e,t){var n=this,r=Array.prototype.slice.call(arguments);e=r[0],t=r.slice(1),["completeFns","onceFns"].forEach((function(r){n[r][e]&&Object.keys(n[r][e]).forEach((function(a){var o=n[r][e][a].scope;n[r][e][a].fn.apply(o,t)}))})),this.onceFns[e]&&delete this.onceFns[e]}}]),e}()),te=function(e){var t=e.large,n=Object(r.a)(e,["large"]);return Object(c.c)("button",Object.assign({sx:{backgroundColor:"transparent",border:"none",position:"relative",overflow:"hidden",my:0,mx:t?"1rem":"0.5rem",padding:t?"0.5rem":"0.25rem",fontSize:t?"5rem":"2.5rem",lineHeight:t?"5rem":"2.5rem",svg:{margin:0,padding:0,outline:"none"}}},n))},ne=function(e){return Object(c.c)(te,{onClick:e.onClick,title:e.title},Object(c.c)("span",{className:"fa-layers fa-fw"},Object(c.c)(p.a,{icon:h.i})))},re=function(e){return Object(c.c)(te,{onClick:e.onClick,title:e.title,large:e.large?1:0,disabled:e.disabled||e.countdown,sx:{color:"#bd181c","svg + svg":{color:"#e22319"},":disabled":{color:"#aaa"},":disabled svg + svg":{color:"#bbb"}}},Object(c.c)("span",{className:"fa-layers fa-fw"},Object(c.c)(p.a,{icon:e.countdown?h.c:h.b,spin:e.countdown}),Object(c.c)(p.a,{icon:h.b,transform:"shrink-6"})))},ae=function(e){return Object(c.c)(te,{onClick:e.onClick,title:e.title},Object(c.c)("span",{className:"fa-layers fa-fw"},Object(c.c)(p.a,{icon:h.k})))},oe=function(e){return Object(c.c)(te,{onClick:e.onClick,title:e.title,large:!!e.large,sx:{color:"#bd181c"}},Object(c.c)(p.a,{icon:h.l}))},ce=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(G.a)(this,Object(Y.a)(t).call(this,e))).state={time:0,last:null},n}return Object(X.a)(t,e),Object(F.a)(t,[{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"startTimer",value:function(){var e=this;this.setState({time:0,last:new Date}),this.timerID=setInterval((function(){return e.tick()}),10)}},{key:"resumeTimer",value:function(){var e=this;this.timerId||(this.timerID=setInterval((function(){return e.tick()}),10),this.setState({last:new Date}))}},{key:"stopTimer",value:function(){clearInterval(this.timerID),this.timerId=null}},{key:"componentDidUpdate",value:function(e){this.props.recordingState!==e.recordingState&&("recording"===this.props.recordingState?"inactive"===e.recordingState?this.startTimer():"paused"===e.recordingState&&this.resumeTimer():this.stopTimer())}},{key:"tick",value:function(){this.setState((function(e){var t=new Date;return{time:e.time+(t-e.last),last:t}}))}},{key:"render",value:function(){var e=this.state.time,t=[e/36e5>>0,(e/6e4>>0)%60,(e/1e3>>0)%60];0===t[0]&&(t=t.slice(1));var n=t.map((function(e){return(e<10?"0":"")+e})).join(":");return Object(c.c)("span",null,n)}}]),t}(d.Component),ie=function(e){var t=Object(O.b)().t;return Object(c.c)("div",{sx:{display:"flex",alignItems:"center",visibility:"inactive"===e.recordingState?"hidden":"visible"}},Object(c.c)(ce,{recordingState:e.recordingState}),Object(c.c)("p",{sx:{px:2,color:"paused"===e.recordingState?"gray.1":"transparent"}},"recording"===e.recordingState?t("Recording"):"paused"===e.recordingState?t("Paused"):t("Waiting")))};var se=function(e){return Object(c.c)("div",{sx:{"&:not(:last-child)":{marginBottom:3}}},Object(c.c)("label",{sx:{color:"gray.0",display:"block",fontSize:2,fontWeight:"bold"}},e.label,Object(c.c)("div",{sx:{boxSizing:"border-box",clear:"both",fontSize:2,position:"relative",textAlign:"left"}},e.children)))},le=function(e){var t=e.deviceType,n=e.title,r=e.type,a=e.url,o="".concat("desktop"===t?"Presentation":"Presenter"," ").concat(r," - ").concat(n||"Recording",".webm"),i={width:"8rem",height:"4.5rem",position:"relative",backgroundColor:"gray.3",textAlign:"center",padding:"0.5rem",margin:"0 0.5rem 0.5rem 0",color:"transparent"};if(!a)return Object(c.c)("a",{sx:i,target:"_blank",href:a,download:o,rel:"noopener noreferrer"},t);var s=!1;return Object(c.c)("a",{sx:i,target:"_blank",download:o,href:a,rel:"noopener noreferrer"},t,Object(c.c)("video",{sx:{position:"absolute",maxWidth:"100%",maxHeight:"100%",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},src:a,onCanPlay:function(e){s||(e.target.currentTime=0,s=!0)}}))},de=function(e){return Object(c.c)("input",Object.assign({sx:{variant:"styles.input"}},e))};var ue=function(e){var t=Object(O.b)().t,n=Object(d.useState)(),r=Object(o.a)(n,2),s=r[0],l=r[1];function u(t){var n=t.target,r="checkbox"===n.type?n.checked:n.value,o=n.name;e.setRecordingData(Object(a.a)({},e.recordingData,Object(q.a)({},o,r)))}return Object(c.c)("div",{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}},Object(c.c)("header",null,Object(c.c)("h1",{sx:{fontWeight:"heading"}},t("save-creation-modal-title"))),Object(c.c)("main",{sx:{flex:1}},s&&Object(c.c)(P,{isDanger:!0},s),Object(c.c)(se,{label:t("save-creation-label-title")},Object(c.c)(de,{name:"title",autoComplete:"off",value:e.recordingData.title,onChange:u})),Object(c.c)(se,{label:t("save-creation-label-presenter")},Object(c.c)(de,{name:"presenter",autoComplete:"off",value:e.recordingData.presenter,onChange:u}))),Object(c.c)("header",null,Object(c.c)("h1",{sx:{fontWeight:"heading"}},t("save-creation-label-media"))),Object(c.c)("main",{sx:{flex:1}},Object(c.c)("div",{sx:{display:"flex",maxHeight:"6.5rem",overflowY:"auto",flexWrap:"wrap"}},e.desktopRecording&&Object(c.c)(le,{deviceType:"desktop",title:e.recordingData.title,type:"video",url:e.desktopRecording.url}),e.videoRecording&&Object(c.c)(le,{deviceType:"video",title:e.recordingData.title,type:"video",url:e.videoRecording.url}))),Object(c.c)("footer",{sx:{mt:4,button:{minWidth:100,width:["100%","auto"],"& + button":{ml:[0,2],mt:[2,"auto"]},"& svg":{mr:2}}}},Object(c.c)(i.b,{onClick:function(){""===e.recordingData.title||""===e.recordingData.presenter?l(t("save-creation-form-invalid")):e.handleUpload()}},Object(c.c)(p.a,{icon:h.o}),Object(c.c)("span",null,t("save-creation-button-upload"))),Object(c.c)(i.b,{onClick:e.handleSave},Object(c.c)(p.a,{icon:h.e}),Object(c.c)("span",null,t("save-creation-button-save"))),Object(c.c)(i.b,{onClick:e.handleCancel},Object(c.c)(p.a,{icon:h.n}),Object(c.c)("span",null,t("save-creation-button-discard")))))},be=function(e,t,n){return"".concat("desktop"===e?"Presentation":"Presenter"," ").concat(t," - ").concat(n||"Recording",".webm")},pe=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(G.a)(this,Object(Y.a)(t).call(this,e))).state={countdown:!1,recordingState:"inactive",showModal:!1,desktopRecording:null,videoRecording:null},n.desktopRecorder=null,n.videoRecorder=null,n.handleDialogClose=n.handleDialogClose.bind(Object(J.a)(n)),n.handlePause=n.handlePause.bind(Object(J.a)(n)),n.handleResume=n.handleResume.bind(Object(J.a)(n)),n.handleSaveCreationSave=n.handleSaveCreationSave.bind(Object(J.a)(n)),n.handleSaveCreationUpload=n.handleSaveCreationUpload.bind(Object(J.a)(n)),n.handleRecord=n.handleRecord.bind(Object(J.a)(n)),n.handleStop=n.handleStop.bind(Object(J.a)(n)),n}return Object(X.a)(t,e),Object(F.a)(t,[{key:"hasRecording",value:function(){return this.state.desktopRecording||this.state.videoRecording}},{key:"hasStreams",value:function(){return this.props.desktopStream||this.props.videoStream}},{key:"record",value:function(){var e=this;["desktop","video"].forEach((function(t){var n="".concat(t,"Recorder"),r=e.props["".concat(t,"Stream")];r&&(e[n]=new ee(r),e[n].on("record.complete",(function(){e[n]=null})),e[n].on("record.complete",(function(n){var r=n.media,a=n.url;e.setState(Object(q.a)({},"".concat(t,"Recording"),{deviceType:t,media:r,url:a}))})),e[n].start())}))}},{key:"resume",value:function(){var e=this;["desktop","video"].forEach((function(t){var n="".concat(t,"Recorder");e[n]&&e[n].resume()}))}},{key:"pause",value:function(){this.desktopRecorder&&this.desktopRecorder.pause(),this.videoRecorder&&this.videoRecorder.pause()}},{key:"stop",value:function(){var e=this;["desktop","video"].forEach((function(t){e["".concat(t,"Recorder")]&&(e["".concat(t,"Recorder")].stop(),e.props["".concat(t,"Stream")].getTracks().forEach((function(e){return e.stop()})))})),this.setState({showModal:!0})}},{key:"handlePause",value:function(){this.setState({recordingState:"paused"}),this.pause()}},{key:"handleResume",value:function(){this.setState({recordingState:"recording"}),this.resume()}},{key:"handleRecord",value:function(){var e=this;this.hasStreams()&&(this.setState({countdown:!0}),setTimeout((function(){e.record(),e.setState({recordingState:"recording"}),e.setState({countdown:!1})}),1e3))}},{key:"handleStop",value:function(){this.setState({recordingState:"inactive"}),this.stop()}},{key:"handleDialogClose",value:function(){this.setState({showModal:!1}),this.resetRecordings()}},{key:"handleSaveCreationSave",value:function(){this.handleDialogClose(),this.state.desktopRecording&&Q(this.state.desktopRecording.media,be("desktop","video",this.props.recordingData.title)),this.state.videoRecording&&Q(this.state.videoRecording.media,be("video","video",this.props.recordingData.title)),this.resetRecordings()}},{key:"handleSaveCreationUpload",value:function(){var e=this.props.t,t=this.props.recordingData,n=t.title,r=t.presenter;if(""!==n&&""!==r){this.handleDialogClose();var a=N.a.loading(e("upload-notification"),{hideAfter:0}).hide;new M(this.props.settings).loginAndUpload([this.state.desktopRecording,this.state.videoRecording],(function(){a(),N.a.success(e("message-upload-complete"))}),(function(){a(),N.a.error(e("message-login-failed"))}),(function(t){a(),N.a.error(e("message-server-unreachable")),console.error("Server unreachable: ",t)}),(function(t){a(),N.a.error(e("message-conn-failed")),console.error("Inet fail or Missing Permission: ",t)}),n,r)}else N.a.info(e("save-creation-form-invalid"))}},{key:"resetRecordings",value:function(){this.desktopRecorder=null,this.videoRecorder=null,this.setState({desktopRecording:null,videoRecording:null}),this.props.setDesktopStream(null),this.props.setVideoStream(null)}},{key:"render",value:function(){var e=this.props.t;return Object(c.c)("div",{sx:{m:0,mt:2}},this.hasRecording()&&Object(c.c)(K.Beforeunload,{onBeforeunload:function(e){return e.preventDefault()}}),Object(c.c)("div",{sx:{textAlign:"center"}}),Object(c.c)("div",{className:"buttons",sx:{display:"flex",alignItems:"center"}},Object(c.c)("div",{sx:{flex:1,textAlign:"right"}},"recording"===this.state.recordingState&&Object(c.c)(ne,{title:e("pause-button-title"),recordingState:this.state.recordingState,onClick:this.handlePause}),"paused"===this.state.recordingState&&Object(c.c)(ae,{title:e("resume-button-title"),recordingState:this.state.recordingState,onClick:this.handleResume})),Object(c.c)("div",{className:"center"},"inactive"===this.state.recordingState?Object(c.c)(re,{large:!0,title:e("record-button-title"),recordingState:this.state.recordingState,onClick:this.handleRecord,disabled:!this.hasStreams(),countdown:this.state.countdown}):Object(c.c)(oe,{large:!0,title:e("stop-button-title"),recordingState:this.state.recordingState,onClick:this.handleStop})),Object(c.c)("div",{sx:{flex:1}},Object(c.c)(ie,{recordingState:this.state.recordingState}))),Object(c.c)(Z.a,{open:this.state.showModal,onClose:this.handleDialogClose,ariaLabelledBy:"save-creation-modal-label",closeOnEsc:!0,closeOnOverlayClick:!0},Object(c.c)("div",{id:"save-creation-modal-label",sx:{display:"none"}},e("save-creation-modal-title")),Object(c.c)(ue,{desktopRecording:this.state.desktopRecording,videoRecording:this.state.videoRecording,recordingData:this.props.recordingData,setRecordingData:this.props.setRecordingData,handleCancel:this.handleDialogClose,handleSave:this.handleSaveCreationSave,handleUpload:this.handleSaveCreationUpload})))}}]),t}(d.Component),he=Object(O.c)()(pe);var ge=function(e){return e.settings,Object(c.c)("div",{sx:{height:"3rem",lineHeight:"3rem",textAlign:"right",paddingRight:2,boxShadow:"0 0px 4px 0px rgba(0, 0, 0, 0.4)",marginBottom:2,"& > *":{marginLeft:2}}})},fe=function(){var e=Object(O.b)().t,t="https:"!==window.location.protocol&&"localhost"!==window.location.hostname&&"127.0.0.1"!==window.location.hostname;return Object(c.c)(u.a.Fragment,null,!("undefined"!==typeof MediaRecorder)&&Object(c.c)("div",{sx:{p:3}},Object(c.c)(P,{isDanger:!0},e("warning-recorder-not-supported"),/Safari/i.test(navigator.userAgent)&&" "+e("warning-recorder-safari-hint"))),t&&Object(c.c)("div",{sx:{p:3}},Object(c.c)(P,{isDanger:!0},e("warning-https"))))},ve={title:"",presenter:""};var me=function(e){var t=Object(d.useState)(),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(d.useState)(),l=Object(o.a)(s,2),u=l[0],b=l[1],p=Object(d.useState)(ve),h=Object(o.a)(p,2),g=h[0],f=h[1];return Object(c.c)(i.c,{as:"main",sx:{flexDirection:"column",height:"100%"}},Object(c.c)(i.a,{sx:{flex:0}},Object(c.c)(ge,{settings:e.settings})),Object(c.c)(fe,null),Object(c.c)(V,{desktopStream:r,setDesktopStream:a,videoStream:u,setVideoStream:b}),Object(c.c)(he,{desktopStream:r,setDesktopStream:a,videoStream:u,setVideoStream:b,settings:e.settings,recordingData:g,setRecordingData:f}))},Oe="ocStudioSettings";function je(e){var t=e.children,n=e.settings,a=Object(r.a)(e,["children","settings"]);return Object(c.c)(l.b,Object.assign({},a,{render:function(e){var r=e.location;return n.connected?t:Object(c.c)(l.a,{to:{pathname:"/settings",state:{from:r}}})}}))}t.default=function(e){var t=e.defaultSettings,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=u.a.useState((function(){return JSON.parse(window.localStorage.getItem(e))||t})),r=Object(o.a)(n,2),a=r[0],c=r[1];return u.a.useEffect((function(){window.localStorage.setItem(e,JSON.stringify(a))}),[e,a]),[a,c]}(Oe,void 0===t?b:t),r=Object(o.a)(n,2),d=r[0],p=r[1];return Object(c.c)(s.a,{basename:"/"},Object(c.c)(i.c,{sx:{flexDirection:"column",minHeight:"100%"}},Object(c.c)(S,null),Object(c.c)(i.a,{sx:{flex:1,display:"flex",flexDirection:"column","& > *":{flexGrow:1}}},Object(c.c)(l.d,null,Object(c.c)(l.b,{path:"/settings",exact:!0},Object(c.c)(L,{settings:d,handleUpdate:function(e){p((function(t){return Object(a.a)({},t,{},e,{connected:!0})}))}})),Object(c.c)(l.b,{path:"/about",exact:!0},Object(c.c)(m,null)),Object(c.c)(je,{path:"/",exact:!0,settings:d},Object(c.c)(me,{settings:d})),Object(c.c)(l.b,{path:"/*"},Object(c.c)(l.a,{to:"/"}))))))}}}]);
//# sourceMappingURL=4.18cdb7a2.chunk.js.map