System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts"],(function(n){var t,e,o,c,r,a;return{setters:[function(n){t=n.inheritsLoose},function(n){e=n.cclegacy,o=n._decorator,c=n.Vec3,r=n.Component},function(n){a=n.ResultScreen}],execute:function(){var s,u;e._RF.push({},"22bd8ac+kRPlLQKd3UBlul7","Background",void 0);var i=o.ccclass;o.property,n("Background",i("Background")(((u=function(n){function e(){for(var t,e=arguments.length,o=new Array(e),c=0;c<e;c++)o[c]=arguments[c];return(t=n.call.apply(n,[this].concat(o))||this).frameCount=0,t.secondCount=0,t.wBackground=288,t}t(e,n);var o=e.prototype;return o.start=function(){e.Instance=this,this.node.active=!1},o.update=function(n){1!=a.Instance.node.active&&(this.node.translate(new c(-100*n,0,0)),this.node.position.x<=-1*(this.wBackground/2+this.wBackground)&&this.node.translate(new c(this.wBackground,0,0)))},e}(r)).Instance=void 0,s=u))||s);e._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts","./Heart1.ts","./Heart2.ts","./Heart3.ts"],(function(t){var i,e,n,o,s,a,r,l,h,u,c,p,d,f,y,v,g,m,w,S,C;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){s=t.cclegacy,a=t._decorator,r=t.AudioSource,l=t.Node,h=t.ParticleSystem2D,u=t.input,c=t.Input,p=t.Collider2D,d=t.Contact2DType,f=t.Animation,y=t.Tween,v=t.Vec3,g=t.Component},function(t){m=t.ResultScreen},function(t){w=t.Heart1},function(t){S=t.Heart2},function(t){C=t.Heart3}],execute:function(){var A,D,M,P,T,O,E,U,b,_,H,B;s._RF.push({},"c878beWCKpEc7UrxVCB12p5","Bird",void 0);var z=a.ccclass,N=a.property;t("Bird",(A=z("Bird"),D=N({type:r}),M=N({type:r}),P=N({type:r}),T=N({type:l}),A(((B=function(t){function i(){for(var i,e=arguments.length,s=new Array(e),a=0;a<e;a++)s[a]=arguments[a];return(i=t.call.apply(t,[this].concat(s))||this).vy=0,i.gravity=500,i.life=3,i.isMouseDown=!1,i.gameOver=!1,i.flapCooldown=!1,i.flapParticle=null,i.hitParticle=null,i.dieParticle=null,n(i,"wingAudio",U,o(i)),n(i,"hitAudio",b,o(i)),n(i,"dieAudio",_,o(i)),n(i,"camera",H,o(i)),i}e(i,t);var s=i.prototype;return s.start=function(){var t,e,n;i.Instance=this,this.node.active=!1,this.flapParticle=null==(t=this.node.getChildByName("flap"))?void 0:t.getComponent(h),this.hitParticle=null==(e=this.node.getChildByName("hit"))?void 0:e.getComponent(h),this.dieParticle=null==(n=this.node.getChildByName("die"))?void 0:n.getComponent(h),u.on(c.EventType.MOUSE_DOWN,this.onMouseDown,this),u.on(c.EventType.MOUSE_UP,this.onMouseUp,this),u.on(c.EventType.TOUCH_START,this.onMouseDown,this),u.on(c.EventType.TOUCH_END,this.onMouseUp,this);var o=this.getComponent(p);o&&o.on(d.BEGIN_CONTACT,this.onBeginContact,this)},s.onMouseDown=function(t){this.isMouseDown=!0,this.tryFlap()},s.onMouseUp=function(t){this.isMouseDown=!1},s.tryFlap=function(){var t=this;this.flapCooldown||this.gameOver||(this.flap(),this.flapCooldown=!0,this.scheduleOnce((function(){return t.flapCooldown=!1}),.1))},s.flap=function(){this.vy=200,this.getComponent(f).play("bird_flap"),this.playWingSound(),this.flapParticle&&(this.flapParticle.stopSystem(),this.flapParticle.resetSystem())},s.playWingSound=function(){this.wingAudio&&this.wingAudio.clip&&this.wingAudio.playOneShot(this.wingAudio.clip)},s.playHitSound=function(){this.hitAudio&&this.hitAudio.clip&&this.hitAudio.playOneShot(this.hitAudio.clip)},s.playDieSound=function(){this.dieAudio&&this.dieAudio.clip&&this.dieAudio.playOneShot(this.dieAudio.clip)},s.onBeginContact=function(t,i,e){this.gameOver||(this.life--,this.playHitSound(),this.shakeScreen(.5,5),this.hitParticle&&(this.hitParticle.stopSystem(),this.hitParticle.resetSystem()),2===this.life?w.Instance.node.active=!1:1===this.life?S.Instance.node.active=!1:0===this.life&&(this.gameOver=!0,u.off(c.EventType.MOUSE_DOWN,this.onMouseDown,this),u.off(c.EventType.MOUSE_UP,this.onMouseUp,this),u.off(c.EventType.TOUCH_START,this.onMouseDown,this),u.off(c.EventType.TOUCH_END,this.onMouseUp,this),this.isMouseDown=!1,this.dieParticle&&(this.dieParticle.stopSystem(),this.dieParticle.resetSystem()),this.playDieSound(),C.Instance.node.active=!1,m.Instance.node.active=!0))},s.shakeScreen=function(t,i){var e=this;if(this.camera){var n=this.camera.position.clone();new y(this.camera).to(.02,{position:new v(n.x+i,n.y,n.z)}).to(.02,{position:new v(n.x-i,n.y,n.z)}).to(.02,{position:new v(n.x,n.y+i,n.z)}).to(.02,{position:new v(n.x,n.y-i,n.z)}).union().repeat(Math.floor(t/.08)).call((function(){e.camera.setPosition(n)})).start()}},s.update=function(t){this.isMouseDown&&this.tryFlap(),this.node.translate(new v(0,this.vy*t,0)),this.vy-=this.gravity*t},i}(g)).Instance=void 0,U=i((E=B).prototype,"wingAudio",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=i(E.prototype,"hitAudio",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=i(E.prototype,"dieAudio",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=i(E.prototype,"camera",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=E))||O));s._RF.pop()}}}));

System.register("chunks:///_virtual/count1.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,o,c,e;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,c=t._decorator,e=t.Component}],execute:function(){var r,u;o._RF.push({},"b23f5CVZiBH8KdlsUUrFubB","count1",void 0);var i=c.ccclass;c.property,t("count1",i("count1")(((u=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var c=o.prototype;return c.start=function(){o.Instance=this,this.node.active=!1},c.update=function(t){},o}(e)).Instance=void 0,r=u))||r);o._RF.pop()}}}));

System.register("chunks:///_virtual/count2.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,o,c,e;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,c=t._decorator,e=t.Component}],execute:function(){var r,s;o._RF.push({},"6e457jc4rBPmoP1ERzfsK7s","count2",void 0);var u=c.ccclass;c.property,t("count2",u("count2")(((s=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var c=o.prototype;return c.start=function(){o.Instance=this,this.node.active=!1},c.update=function(t){},o}(e)).Instance=void 0,r=s))||r);o._RF.pop()}}}));

System.register("chunks:///_virtual/count3.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,c,o,e;return{setters:[function(t){n=t.inheritsLoose},function(t){c=t.cclegacy,o=t._decorator,e=t.Component}],execute:function(){var r,u;c._RF.push({},"27534c3Wh5NgKy/Ia/cGTVA","count3",void 0);var i=o.ccclass;o.property,t("count3",i("count3")(((u=function(t){function c(){return t.apply(this,arguments)||this}n(c,t);var o=c.prototype;return o.start=function(){c.Instance=this,this.node.active=!1},o.update=function(t){},c}(e)).Instance=void 0,r=u))||r);c._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/Demo.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,n,r;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,n=t._decorator,r=t.Component}],execute:function(){var c;o._RF.push({},"543d30Oa/pMDY1mblB2JGcr","Demo",void 0);var u=n.ccclass;n.property,t("Demo",u("Demo")(c=function(t){function o(){return t.apply(this,arguments)||this}e(o,t);var n=o.prototype;return n.start=function(){},n.update=function(t){},o}(r))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/down.ts",["./rollupPluginModLoBabelHelpers.js","cc","./up.ts"],(function(t){var n,e,o,i,s,c;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,i=t.Vec3,s=t.Component},function(t){c=t.up}],execute:function(){var r,a;e._RF.push({},"d6e15aJY0pI/41M9Qg/CgJe","down",void 0);var u=o.ccclass;o.property,t("down",u("down")(((a=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){e.Instance=this,this.node.active=!1},o.update=function(t){this.node.position.y>=-7?this.node.translate(new i(0,-30*t,0)):(this.node.setPosition(0,7,0),this.node.active=!1,c.Instance.node.active=!0)},e}(s)).Instance=void 0,r=a))||r);e._RF.pop()}}}));

System.register("chunks:///_virtual/Heart1.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,r,o;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,r=t._decorator,o=t.Component}],execute:function(){var c,i;n._RF.push({},"08b4ekmKvxHFbNjDFiNf9yj","Heart1",void 0);var s=r.ccclass;r.property,t("Heart1",s("Heart1")(((i=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var r=n.prototype;return r.start=function(){n.Instance=this,this.node.active=!0},r.update=function(t){},n}(o)).Instance=void 0,c=i))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/Heart2.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,r,o;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,r=t._decorator,o=t.Component}],execute:function(){var c,i;n._RF.push({},"e26fe0zfxVMxLoG3hzT0wmN","Heart2",void 0);var s=r.ccclass;r.property,t("Heart2",s("Heart2")(((i=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var r=n.prototype;return r.start=function(){n.Instance=this,this.node.active=!0},r.update=function(t){},n}(o)).Instance=void 0,c=i))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/Heart3.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,r,o;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,r=t._decorator,o=t.Component}],execute:function(){var c,i;n._RF.push({},"a9521gAfNlIfpXWCpeZnivw","Heart3",void 0);var a=r.ccclass;r.property,t("Heart3",a("Heart3")(((i=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var r=n.prototype;return r.start=function(){n.Instance=this,this.node.active=!0},r.update=function(t){},n}(o)).Instance=void 0,c=i))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Demo.ts","./Background.ts","./Bird.ts","./Heart1.ts","./Heart2.ts","./Heart3.ts","./ManagerPipa.ts","./Pipes.ts","./Pipes2.ts","./ResultScreen.ts","./StartScreen.ts","./count1.ts","./count2.ts","./count3.ts","./down.ts","./tempbg.ts","./up.ts","./debug-view-runtime-control.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/ManagerPipa.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,a,r,n,s,o,p,c,u,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,a=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){n=t.cclegacy,s=t._decorator,o=t.Prefab,p=t.randomRangeInt,c=t.instantiate,u=t.Vec3,h=t.Component}],execute:function(){var g,l,P,f,d,m;n._RF.push({},"d386bHoqK9E4YgvZqWTJiks","ManagerPipa",void 0);var v=s.ccclass,k=s.property;t("ManagerPipa",(g=v("ManagerPipa"),l=k({type:o}),g(((m=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).wBackground=288,e.wPipa=52,e.minPipeHeight=-60,e.maxPipeHeight=60,a(e,"prefabGroupPipe",d,r(e)),e.timer=0,e.targetWaktu=p(50,101)/10,e}i(e,t);var n=e.prototype;return n.start=function(){e.Instance=this,this.node.active=!1},n.update=function(t){0==this.timer&&this.createPipe(),this.timer+=t,this.timer>=this.targetWaktu&&(this.timer-=this.targetWaktu,this.targetWaktu-=.5,this.targetWaktu<2&&(this.targetWaktu=p(10,21)/10),this.createPipe())},n.createPipe=function(){var t=c(this.prefabGroupPipe),e=p(this.minPipeHeight,this.maxPipeHeight);t.setPosition(new u(this.wBackground/2+this.wPipa,e,0)),t.setParent(this.node)},e}(h)).Instance=void 0,d=e((f=m).prototype,"prefabGroupPipe",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=f))||P));n._RF.pop()}}}));

System.register("chunks:///_virtual/Pipes.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts"],(function(e){var n,t,r,o,c,s,a;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,r=e._decorator,o=e.Vec3,c=e.randomRangeInt,s=e.Component},function(e){a=e.ResultScreen}],execute:function(){var i;t._RF.push({},"5a85b2IBjVMIb3+0dn7b9lT","Pipes",void 0);var u=r.ccclass;r.property,e("Pipes",u("Pipes")(i=function(e){function t(){for(var n,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))||this).wBackground=288,n.wPipa=52,n}n(t,e);var r=t.prototype;return r.start=function(){this.node.translate(new o(0,c(-100,100),0))},r.update=function(e){1!=a.Instance.node.active&&this.node.translate(new o(-100*e,0,0))},t}(s))||i);t._RF.pop()}}}));

System.register("chunks:///_virtual/Pipes2.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts"],(function(t){var n,e,s,i,o,r,a;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,s=t._decorator,i=t.Vec3,o=t.randomRangeInt,r=t.Component},function(t){a=t.ResultScreen}],execute:function(){var c,u;e._RF.push({},"9c3f3IHWhBD4o6rEhHEfwcO","Pipes2",void 0);var p=s.ccclass;s.property,t("Pipes2",p("Pipes2")(((u=function(t){function e(){for(var n,e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return(n=t.call.apply(t,[this].concat(s))||this).wBackground=288,n.wPipa=52,n}n(e,t);var s=e.prototype;return s.start=function(){e.Instance=this,this.node.active=!1,this.node.translate(new i(0,o(-100,100),0))},s.update=function(t){1!=a.Instance.node.active&&(this.node.translate(new i(-100*t,0,0)),this.node.position.x<=-196&&(this.node.position.y<0?this.node.translate(new i(this.wBackground+this.wPipa,o(0,100),0)):this.node.translate(new i(this.wBackground+this.wPipa,o(-100,0),0))))},e}(r)).Instance=void 0,c=u))||c);e._RF.pop()}}}));

System.register("chunks:///_virtual/ResultScreen.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,o,c,r,i,s;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,o=e._decorator,c=e.Vec3,r=e.AudioSource,i=e.director,s=e.Component}],execute:function(){var u,a;n._RF.push({},"34e8cNC7SNKWoibL4TcrpWH","ResultScreen",void 0);var p=o.ccclass;o.property,e("ResultScreen",p("ResultScreen")(((a=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var o=n.prototype;return o.start=function(){n.Instance=this,this.node.active=!1},o.update=function(e){this.node.position.y>0&&this.node.translate(new c(0,-75*e,0))},o.doRestart=function(e,t){this.getComponent(r).playOneShot(this.getComponent(r).clip),i.loadScene("gameplay")},n}(s)).Instance=void 0,u=a))||u);n._RF.pop()}}}));

System.register("chunks:///_virtual/StartScreen.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Bird.ts","./Background.ts","./tempbg.ts","./up.ts","./down.ts","./ManagerPipa.ts","./count3.ts","./count2.ts","./count1.ts"],(function(t){var n,e,o,a,c,i,s,u,r,d,p,f,v,h,l,S,g,I,m,y;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,a=t.input,c=t.Input,i=t.Vec3,s=t.AudioSource,u=t.find,r=t.Label,d=t.director,p=t.Component},function(t){f=t.Bird},function(t){v=t.Background},function(t){h=t.tempbg},function(t){l=t.up},function(t){S=t.down},function(t){g=t.ManagerPipa},function(t){I=t.count3},function(t){m=t.count2},function(t){y=t.count1}],execute:function(){var T,P;e._RF.push({},"fa5c4KSkTZDEqqmEoHUQtpT","StartScreen",void 0);var C=o.ccclass;o.property,t("StartScreen",C("StartScreen")(((P=function(t){function e(){for(var n,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(n=t.call.apply(t,[this].concat(o))||this).pauseState=!1,n.audioPlayed=!1,n}n(e,t);var o=e.prototype;return o.start=function(){e.Instance=this,a.on(c.EventType.TOUCH_START,this.onTouchStart,this)},o.update=function(t){this.node.position.y>48&&this.node.translate(new i(0,-75*t,0))},o.onTouchStart=function(t){this.audioPlayed||(this.getComponent(s).playOneShot(this.getComponent(s).clip),this.audioPlayed=!0),f.Instance.node.active=!0,v.Instance.node.active=!0,g.Instance.node.active=!0,h.Instance.node.active=!1,l.Instance.node.active=!1,S.Instance.node.active=!1,this.node.active=!1},o.clickPause=function(t,n){var e=this;this.pauseState?(u("Canvas/Pause/Label").getComponent(r).string="Pause",I.Instance.node.active=!0,setTimeout((function(){I.Instance.node.active=!1,m.Instance.node.active=!0,setTimeout((function(){m.Instance.node.active=!1,y.Instance.node.active=!0,setTimeout((function(){y.Instance.node.active=!1,d.resume(),e.pauseState=!1}),1e3)}),1e3)}),1e3)):(u("Canvas/Pause/Label").getComponent(r).string="Resume",d.pause(),this.pauseState=!0)},e}(p)).Instance=void 0,T=P))||T);e._RF.pop()}}}));

System.register("chunks:///_virtual/tempbg.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,o,c;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,c=t.Component}],execute:function(){var r,s;n._RF.push({},"b52c0bz9ptFs6QwjXlSbuvM","tempbg",void 0);var i=o.ccclass;o.property,t("tempbg",i("tempbg")(((s=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){n.Instance=this,this.node.active=!0},o.update=function(t){},n}(c)).Instance=void 0,r=s))||r);n._RF.pop()}}}));

System.register("chunks:///_virtual/up.ts",["./rollupPluginModLoBabelHelpers.js","cc","./down.ts"],(function(t){var n,e,o,i,s,c;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,i=t.Vec3,s=t.Component},function(t){c=t.down}],execute:function(){var r,u;e._RF.push({},"6212drwu8lJnbAVQpF2hxL+","up",void 0);var a=o.ccclass;o.property,t("up",a("up")(((u=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){e.Instance=this,this.node.active=!0},o.update=function(t){this.node.position.y<=7?this.node.translate(new i(0,30*t,0)):(this.node.setPosition(0,-7,0),this.node.active=!1,c.Instance.node.active=!0)},e}(s)).Instance=void 0,r=u))||r);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});