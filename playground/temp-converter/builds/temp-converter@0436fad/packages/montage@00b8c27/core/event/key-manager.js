var Montage=require("../core").Montage,defaultEventManager=require("./event-manager").defaultEventManager,MutableEvent=require("./mutable-event").MutableEvent,KEYNAMES_TO_KEYCODES={backspace:8,tab:9,enter:13,shift:16,control:17,alt:18,capslock:20,escape:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,right:39,down:40,"delete":46,semicolon:186,colon:186,equal:187,plus:187,comma:188,less:188,minus:189,underscore:189,period:190,greater:190,slash:191,questionmark:191,backtick:192,tilde:192,openingsquarebracket:219,openingcurlybracket:219,backslash:220,pipe:220,closingsquarebracket:221,closingcurlybracket:221,singlequote:222,doublequote:222,clear:12,meta:91,contextmenu:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimal:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,f13:124,f14:125,f15:126,f16:127,f17:128,f18:129,f19:130,f20:131,f21:132,f22:133,f23:134,f24:135},KEYCODES_TO_KEYNAMES=null,OPERAMAC_KEYNAMES_TO_KEYCODES={meta:17,control:57392,f17:63252,f18:63253,f19:63254,f20:63255,f21:63256,f22:63257,f23:63258,f24:63259},FIREFOX_KEYNAMES_TO_KEYCODES={f13:44,f14:145,f15:19,f16:63251,f17:63252,f18:63253,f19:63254,f20:63255,f21:63256,f22:63257,f23:63258,f24:63259,meta:224},KEYNAMES_ALIASES={cmd:"command",ctl:"control",ctrl:"control",win:"meta",windows:"meta",opt:"alt",option:"alt"},MODIFIERS={meta:{name:"meta",value:1},alt:{name:"alt",value:2},control:{name:"control",value:4},shift:{name:"shift",value:8}},NORMALIZED_KEYS={semicolon:";",colon:":",equal:"=",plus:"+",comma:",",less:"<",minus:"-",underscore:"_",period:".",greater:">",slash:"/",questionmark:"?",backtick:"`",tilde:"~",openingsquarebracket:"[",openingcurlybracket:"{",backslash:"\\",pipe:"|",closingsquarebracket:"]",closingcurlybracket:"}",singlequote:"'",doublequote:'"',multiply:"*",add:"+",subtract:"-",decimal:".",divide:"/"},NORMALIZED_CHARS=null,KEYPRESS_EVENT_TYPE="keyPress",LONGKEYPRESS_EVENT_TYPE="longKeyPress",KEYRELEASE_EVENT_TYPE="keyRelease",KeyManager=exports.KeyManager=Montage.specialize({_keyEventsListenerInstalled:{value:!1},_composerKeyMap:{value:{}},_triggeredKeys:{value:{}},_longPressKeys:{value:{}},_cleanupTimeout:{value:null},_cleanupThreshold:{value:2e3},_longPressThreshold:{value:1e3},longPressThreshold:{get:function(){return this._longPressThreshold},set:function(t){t>0&&t!==this._longPressThreshold&&(this._longPressThreshold=t,this._cleanupThreshold=this._longPressThreshold>this._cleanupThreshold-100?this._longPressThreshold+100:2e3)}},registerKey:{value:function(t){var e,n,a,i,s,r=this._normalizeKeySequence(t.keys),l=this._composerKeyMap,o=!1;if(r){if(e=this._convertKeysToModifiersAndKeyCode(r),n=l[e.modifiers],n||(n=l[e.modifiers]={}),a=n[e.keyCode]){for(s in a)if(i=a[s],i.object===t){i.refCount++,o=!0;break}o||a.push({object:t,refCount:1})}else n[e.keyCode]=[{object:t,refCount:1}];t._modifiers=e.modifiers,t._keyCode=e.keyCode,this._registerListeners()}}},unregisterKey:{value:function(t){var e,n,a,i,s=this._composerKeyMap;if(e=s[t._modifiers]){n=e[t._keyCode];for(i in n)a=n[i],a.object===t&&(a.refCount--,0>=a.refCount&&(n.splice(i,1),0===n.length&&(delete e[t._keyCode],0===Object.keys(e).length&&(delete s[t._modifiers],0===Object.keys(s).length&&this._unregisterListeners()))))}}},constructor:{value:function(){var t,e=navigator.userAgent;if(_defaultKeyManager&&console.warn("Rather than creating a new KeyManager object, you might want to use the default key manager"),e.match(/ firefox\//i)?this._firefox=!0:e.match(/ appleWebkit\//i)?(this._webkit=!0,e.match(/ chrome\//i)&&(this._chrome=!0)):e.match(/^opera\//i)&&(this._opera=!0),e.match(/macintosh/i)&&(this._mac=!0,this._opera&&(this._operaMac=!0)),MODIFIERS.command=this._mac?MODIFIERS.meta:MODIFIERS.control,this._operaMac)for(t in OPERAMAC_KEYNAMES_TO_KEYCODES)KEYNAMES_TO_KEYCODES[t]=OPERAMAC_KEYNAMES_TO_KEYCODES[t];if(this._firefox)for(t in FIREFOX_KEYNAMES_TO_KEYCODES)KEYNAMES_TO_KEYCODES[t]=FIREFOX_KEYNAMES_TO_KEYCODES[t];KEYCODES_TO_KEYNAMES={};for(var n in KEYNAMES_TO_KEYCODES){var t=KEYNAMES_TO_KEYCODES[n];void 0===KEYCODES_TO_KEYNAMES[t]&&(KEYCODES_TO_KEYNAMES[t]=n)}NORMALIZED_CHARS={};for(var n in NORMALIZED_KEYS){var t=NORMALIZED_KEYS[n];void 0===NORMALIZED_CHARS[t]&&(NORMALIZED_CHARS[t]=n)}this._shiftKey=!1,this._altKey=!1,this._metaKey=!1,this._ctrlKey=!1}},captureKeydown:{value:function(t){var e,n,a,i=!1;this._preprocessKeyEvent(t),a=this._submap,a&&(e=this._keyCode,e&&a[e]&&(i=this._dispatchComposerKeyMatches(a[e],t)),!i&&t.keyIdentifier&&(n=KEYNAMES_TO_KEYCODES[t.keyIdentifier.toLowerCase()]||this._decodeKeyIdentifier(t.keyIdentifier),n&&n!==e&&a[n]&&this._dispatchComposerKeyMatches(a[n],t))),this._setupCleanupTimer()}},captureKeypress:{value:function(t){var e,n,a,i=t.charCode,s=!1;this._preprocessKeyEvent(t),a=this._submap,a&&(e=this._keyCode,e&&a[e]&&(s=this._dispatchComposerKeyMatches(a[e],t)),!s&&i&&i!==e&&a[i]&&(s=this._dispatchComposerKeyMatches(a[i],t)),!s&&t.keyIdentifier&&(n=KEYNAMES_TO_KEYCODES[t.keyIdentifier.toLowerCase()]||this._decodeKeyIdentifier(t.keyIdentifier),n&&n!==e&&a[n]&&this._dispatchComposerKeyMatches(a[n],t))),this._setupCleanupTimer()}},captureKeyup:{value:function(t){var e,n,a,i,s=t.keyCode,r=0,l=!1;if(this._preprocessKeyEvent(t),n=this._submap,n&&(s=this._keyCode,s&&n[s]&&(l=this._dispatchComposerKeyMatches(n[s],t),r=s),!l&&t.keyIdentifier&&(e=KEYNAMES_TO_KEYCODES[t.keyIdentifier.toLowerCase()]||this._decodeKeyIdentifier(t.keyIdentifier),e&&e!==r&&n[e]&&(l=this._dispatchComposerKeyMatches(n[e],t)))),!l)for(i in this._triggeredKeys)a=this._triggeredKeys[i],(a._keyCode==s||a._keyCode==e)&&this._dispatchComposerKeyMatches([a],t);this._cleanup()}},_normalizeKeySequence:{value:function(t){var e,n,a=[MODIFIERS.meta.name,MODIFIERS.alt.name,MODIFIERS.control.name,MODIFIERS.shift.name],i=t.toLowerCase().replace(/ /g,"").replace(/\+\+/g,"+add").split("+"),s=i.length,r=[];for(n=0;s-1>n;n++){if(e=i[n],e=KEYNAMES_ALIASES[e]||e,e=MODIFIERS[e],!e)return console.warn("Invalid key sequence (modifier):",t),null;r.push(e.name)}return r.sort(function(t,e){return a.indexOf(t)-a.indexOf(e)}),e=i[s-1],e.length>1&&!KEYNAMES_TO_KEYCODES[e]?(console.warn("Invalid key sequence (key):",t,e),null):r.length?r.join("+")+"+"+e:e}},_preprocessKeyEvent:{value:function(t){var e,n,a=this,i=t.type,s=t.keyCode;this._operaMac&&this._operaModifierTimeout&&(clearTimeout(this._operaModifierTimeout),this._operaModifierTimeout=null),("keydown"==i||"keyup"==i)&&(this._operaMac?(n="keydown"==i,s==KEYNAMES_TO_KEYCODES.shift?this._shiftKey=n:s==KEYNAMES_TO_KEYCODES.alt?this._altKey=n:s==KEYNAMES_TO_KEYCODES.meta?this._mac&&(this._metaKey=n):s==KEYNAMES_TO_KEYCODES.control&&(this._ctrlKey=n),"keyup"==i&&(this._operaModifierTimeout=setTimeout(function(){a._shiftKey=!1,a._altKey=!1,a._metaKey=!1,a._ctrlKey=!1,a._operaModifierTimeout=null},this._cleanupThreshold+1e3))):(this._shiftKey=t.shiftKey,this._altKey=t.altKey,this._metaKey=t.metaKey,this._ctrlKey=t.ctrlKey)),this._mac&&this._webkit&&s==KEYNAMES_TO_KEYCODES.contextmenu&&(this._metaKey=!1),this._chrome&&(this._shiftKey||s!=KEYNAMES_TO_KEYCODES.plus||"U+002B"!=t.keyIdentifier||(t.keyCode=KEYNAMES_TO_KEYCODES.add)),this._modifiers=e=(this._shiftKey?MODIFIERS.shift.value:0)+(this._altKey?MODIFIERS.alt.value:0)+(this._metaKey?MODIFIERS.meta.value:0)+(this._ctrlKey?MODIFIERS.control.value:0),this._submap=this._composerKeyMap[e],this._keyCode=t.keyCode,this._keyIdentifier=t.keyIdentifier}},_registerListeners:{value:function(){this._keyEventsListenerInstalled||(window.addEventListener("keydown",this,!0),window.addEventListener("keypress",this,!0),window.addEventListener("keyup",this,!0),this._keyEventsListenerInstalled=!0)}},_unregisterListeners:{value:function(){this._keyEventsListenerInstalled&&(window.removeEventListener("keydown",this,!0),window.removeEventListener("keypress",this,!0),window.removeEventListener("keyup",this,!0),this._keyEventsListenerInstalled=!1)}},_dispatchComposerKeyMatches:{value:function(t,e){var n,a,i,s,r=this,l=!1,o="keyup"==e.type,c="keydown"==e.type,h=o?KEYRELEASE_EVENT_TYPE:KEYPRESS_EVENT_TYPE,p=t.length;for(s=0;p>s&&!l;s++){n=t[s].object||t[s];for(var d=e.target,g=n.element,u=n.element===window;!u&&(u=d===g,d!=document);)d=d.parentElement,d||(d=document);if(u||defaultEventManager.activeTarget==n.component){if(o){if(i=Object.keys(this._triggeredKeys),-1==i.indexOf(n.uuid))continue;n._longPressTimeout&&(clearTimeout(n._longPressTimeout),n._longPressTimeout=null,delete this._longPressKeys[n.uuid])}else{if(c)delete this._triggeredKeys[n.uuid],e.preventDefault();else if(this._triggeredKeys[n.uuid])continue;n._shouldDispatchLongPress&&!n._longPressTimeout&&(n._longPressTimeout=setTimeout(function(){var t;n._longPressTimeout=null,t=document.createEvent("CustomEvent"),t.initCustomEvent(LONGKEYPRESS_EVENT_TYPE,!0,!0,null),t.activeElement=e.target,t.identifier=n.identifier,t=MutableEvent.fromEvent(t),n.dispatchEvent(t),delete r._longPressKeys[n.uuid]},this._longPressThreshold),this._longPressKeys[n.uuid]=n)}a=document.createEvent("CustomEvent"),a.initCustomEvent(h,!0,!0,null),a.activeElement=e.target,a.identifier=n.identifier,a.keyComposer=n,a=MutableEvent.fromEvent(a),this._opera&&(a.type=h),n.dispatchEvent(a),a.defaultPrevented&&e.preventDefault(),a.propagationStopped&&(e.stopPropagation(),l=!0),o?delete this._triggeredKeys[n.uuid]:this._triggeredKeys[n.uuid]=n}}if(l)for(s=o?s:0;p>s;s++)n=t[s].object||t[s],delete this._triggeredKeys[n.uuid],n._longPressTimeout&&(clearTimeout(n._longPressTimeout),n._longPressTimeout=null,delete this._longPressKeys[n.uuid]);return l}},_cleanup:{value:function(){var t,e;this._cleanupTimeout&&clearTimeout(this._cleanupTimeout);for(e in this._triggeredKeys)this._triggeredKeys.hasOwnProperty(e)&&delete this._triggeredKeys[e];for(e in this._longPressKeys)this._longPressKeys.hasOwnProperty(e)&&(t=this._longPressKeys[e],clearTimeout(t._longPressTimeout),t._longPressTimeout=null,delete this._longPressKeys[e]);this._cleanupTimeout=null}},_setupCleanupTimer:{value:function(){var t=this;this._cleanupTimeout&&clearTimeout(this._cleanupTimeout),this._cleanupTimeout=setTimeout(function(){t._cleanup()},this._cleanupThreshold)}},_convertKeysToModifiersAndKeyCode:{value:function(t){var e,n,a,i=0,s=0;for(t=t.toLowerCase().replace(/ /g,"").replace(/\+\+/g,"+add").split("+"),e=t.length,a=0;e-1>a;a++){if(n=t[a],n=KEYNAMES_ALIASES[n]||n,n=MODIFIERS[n],!n)return console.warn("Invalid Key sequence:",t),null;s|=n.value}return n=t[e-1],n=NORMALIZED_CHARS[n]||n,n=NORMALIZED_KEYS[n]||n,n.length>1?(i=KEYNAMES_TO_KEYCODES[n],n=MODIFIERS[KEYNAMES_ALIASES[n]||n],n&&(s|=n.value)):i=n.toUpperCase().charCodeAt(0),{modifiers:s,keyCode:i}}},_decodeKeyIdentifier:{value:function(t){return t.match(/U\+/)?parseInt(t.substring(2),16):void 0}}}),_defaultKeyManager=null;Montage.defineProperty(exports,"defaultKeyManager",{get:function(){return _defaultKeyManager||(_defaultKeyManager=new KeyManager),_defaultKeyManager}});