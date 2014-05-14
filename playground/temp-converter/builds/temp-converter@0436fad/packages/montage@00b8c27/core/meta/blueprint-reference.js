"use strict";var Montage=require("../core").Montage,Promise=require("../promise").Promise,BlueprintModule=require("./blueprint"),BinderModule=require("./binder"),RemoteReference=require("./remote-reference").RemoteReference,BinderReference=require("./binder-reference").BinderReference,logger=require("../logger").logger("blueprint");exports.BlueprintReference=RemoteReference.specialize({constructor:{value:function(){this.superForValue("constructor")()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["blueprint",(this._reference.blueprintName||"unnamed").toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(t){t.blueprintName;var e=t.blueprintModule;t.prototypeName,t.moduleId;var n=t.binderReference,a=Promise.resolve(BinderModule.Binder.manager.defaultBinder);return n&&(a=BinderReference.valueFromReference(n,require)),a.then(function(t){if(t){var n=require("./module-blueprint");return n.ModuleBlueprint.getBlueprintWithModuleId(e.id,e.require).then(function(n){if(n)return t.addBlueprint(n),n;throw Error("Error cannot find Blueprint "+e)})}return BlueprintModule.Blueprint.getBlueprintWithModuleId(e,require)})}},referenceFromValue:{value:function(t){var e={};return e.blueprintName=t.name,e.blueprintModule=t.blueprintInstanceModule,t.binder&&!t.binder.isDefault&&(e.binderReference=BinderReference.referenceFromValue(t.binder)),e}}});