montageDefine("00b8c27","core/serialization/alias",{dependencies:["../core"],factory:function(t,e){var n=t("../core").Montage;e.Alias=n.specialize({_value:{value:null},_aliasRegExp:{value:/@([_a-zA-Z$][0-9_a-zA-Z$]*):([_a-zA-Z$][0-9_a-zA-Z$]*)$/},value:{get:function(){return this._value},set:function(t){var e=this._aliasRegExp.exec(t);if(!e)throw Error("Invalid alias syntax: "+t);this._value=t,this._componentLabel=e[1],this._propertyName=e[2]}},_componentLabel:{value:null},componentLabel:{get:function(){return this._componentLabel}},_propertyName:{value:null},propertyName:{get:function(){return this._propertyName}},init:{value:function(t){return this.value=t,this}}})}});