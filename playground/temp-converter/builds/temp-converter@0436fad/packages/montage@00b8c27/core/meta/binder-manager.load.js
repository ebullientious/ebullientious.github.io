montageDefine("00b8c27","core/meta/binder-manager",{dependencies:["../core","../promise","./object-property","./binder","../logger"],factory:function(t,e){"use strict";var n=t("../core").Montage;t("../promise").Promise;var a=t("./object-property").ObjectProperty,i=t("./binder");t("../logger").logger("blueprint"),e.BinderManager=n.specialize({constructor:{value:function(){this._binders=[],this._binderTable={}}},_binders:{value:null},_binderTable:{value:null},binders:{get:function(){return this._binders}},addBinder:{value:function(t){if(null!==t){this._binderTable[t.name]&&this.removeBinder(this._binderTable[t.name]);var e=this._binders.indexOf(t);e>=0&&this._binders.splice(e,1),this._binders.push(t),this._binderTable[t.name]=t}}},removeBinder:{value:function(t){if(null!==t){var e=this._binders.indexOf(t);e>=0&&this._binders.splice(e,1),this._binderTable[t.name]&&delete this._binderTable[t.name]}}},binderForName:{value:function(t){return this._binderTable[t]}},blueprintForPrototype:{value:function(t,e){var n,a,i;for(i=0;(n=this.binders[i])!==void 0;i++)if(a=n.blueprintForPrototype(t,e),null!==a)return a;return null}},_defaultBlueprintObjectProperty:{serializable:!0,value:null},defaultBlueprintObjectProperty:{get:function(){return this._defaultBlueprintObjectProperty||(this._defaultBlueprintObjectProperty=(new a).init()),this._defaultBlueprintObjectProperty}},_defaultBinder:{serializable:!0,value:null},defaultBinder:{get:function(){return this._defaultBinder||(this._defaultBinder=(new i.Binder).initWithNameAndRequire("default",global.require),this._defaultBinder.isDefault=!0,this.addBinder(this._defaultBinder)),this._defaultBinder}}})}});