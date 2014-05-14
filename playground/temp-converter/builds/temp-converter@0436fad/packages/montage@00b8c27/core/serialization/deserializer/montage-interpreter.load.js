montageDefine("00b8c27","core/serialization/deserializer/montage-interpreter",{dependencies:["../../core","mousse/deserialization/interpreter","mousse/deserialization/context","./montage-reviver","../../promise"],factory:function(t,e){var n=t("../../core").Montage,r=t("mousse/deserialization/interpreter").Interpreter,i=t("mousse/deserialization/context").Context,a=t("./montage-reviver").MontageReviver,s=t("../../promise").Promise,l=n.specialize.call(r,{_require:{value:null},_reviver:{value:null},init:{value:function(t,e){if("function"!=typeof t)throw Error("Function 'require' missing.");return this._reviver=(new a).init(t,e),this._require=t,this}},instantiate:{value:function(t,e,n){var r;return r=(new o).init(t,this._reviver,e,n,this._require),r.getObjects()}},preloadModules:{value:function(t){var e,n,r,i,l=this._reviver,o=l.moduleLoader,c=[];for(var u in t)e=t[u],n=e.prototype||e.object,n&&(r=a.parseObjectLocationId(n),i=o.getModule(r.moduleId,u),s.isPromise(i)&&c.push(i));return c.length>0?s.all(c):void 0}}}),o=n.specialize.call(i,{_ELEMENT_ID_ATTRIBUTE:{value:"data-montage-id"},_unitsToDeserialize:{value:null},_element:{value:null},_require:{value:null},constructor:{value:function(){this._unitsToDeserialize=[]}},init:{value:function(t,e,n,r,a){return i.call(this,t,e,n),this._element=r,this._require=a,this}},hasObject:{value:function(t){return t in this._serialization}},getRequire:{value:function(){return this._require}},getElement:{value:function(){return this._element}},getElementById:{value:function(t){var e="*["+this._ELEMENT_ID_ATTRIBUTE+'="'+t+'"]';return this._element.querySelector(e)}},setUnitsToDeserialize:{value:function(t,e,n){this._unitsToDeserialize.push({object:t,objectDesc:e,unitNames:n})}},getUnitsToDeserialize:{value:function(){return this._unitsToDeserialize}}});e.MontageInterpreter=l,e.MontageContext=o}});