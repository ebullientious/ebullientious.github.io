montageDefine("00b8c27","core/document-part",{dependencies:["./core","./logger","./promise","./event/event-manager"],factory:function(t,e){var a=t("./core").Montage,n=(t("./logger").logger("document-part"),t("./promise").Promise),s=t("./event/event-manager").defaultEventManager,i=a.specialize({parentDocumentPart:{value:null},template:{value:null},fragment:{value:null},objects:{value:null},childComponents:{value:null},parameters:{value:null},constructor:{value:function i(){this.super()}},initWithTemplateAndFragment:{value:function(t,e){this.template=t,this.fragment=e,this.objects=null,this.childComponents=[],this.parameters=null}},startActingAsTopComponent:{value:function(){this.fragment&&s.registerEventHandlerForElement(this,this.fragment)}},stopActingAsTopComponent:{value:function(){this.fragment&&s.unregisterEventHandlerForElement(this.fragment)}},addChildComponent:{value:function(t){-1==this.childComponents.indexOf(t)&&this.childComponents.push(t)}},removeChildComponent:{value:function(t){var e=this.childComponents,a=e.indexOf(t);a>-1&&(e.splice(a,1),t._parentComponent=null,t._alternateParentComponent=null)}},_addToDrawList:{value:function(){}},_componentTreeLoadedDeferred:{value:null},loadComponentTree:{value:function(){var t,e=this._componentTreeLoadedDeferred;return e||(e=n.defer(),this._componentTreeLoadedDeferred=e,t=[],this.childComponents.forEach(function(e){t.push(e.loadComponentTree())}),n.all(t).then(function(){e.resolve()},e.reject).done()),e.promise}}});e.DocumentPart=i}});