montageDefine("00b8c27","core/module-reference",{dependencies:["./core"],factory:function(t,e){var n=t("./core").Montage;e.ModuleReference=n.specialize({constructor:{value:function(){return this.super()}},initWithIdAndRequire:{value:function(t,e){if(!t||!e)throw Error("Module ID and require required");return this.id=t,this.require=e,this}},id:{value:null},require:{value:null},_exports:{value:null},exports:{get:function(){return this._exports?this._exports:this._exports=this.require.async(this.id)}},resolve:{value:function(t){return t.identify(this.id,this.require)}},isModuleReference:{writable:!1,configurable:!1,value:!0}})}});