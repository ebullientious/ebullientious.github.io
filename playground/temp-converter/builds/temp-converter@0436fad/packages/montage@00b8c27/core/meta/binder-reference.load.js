montageDefine("00b8c27","core/meta/binder-reference",{dependencies:["../core","../promise","./remote-reference","./binder","../logger"],factory:function(t,e){"use strict";t("../core").Montage;var n=t("../promise").Promise,a=t("./remote-reference").RemoteReference,i=t("./binder");t("../logger").logger("blueprint"),e.BinderReference=a.create(a,{constructor:{value:function(){this.superForValue("constructor")()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["binder",this._reference.binderName.toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(t,e){var a=t.binderName,r=t.binderModuleId,s=n.defer(),l=i.Binder.manager.binderForName(a);if(l)s.resolve(l);else try{var o=e,c=r.indexOf("/");if(c>0){var h=r.substring(0,c),u=e.mappings;h in u&&(r=r.substring(c+1),o=o.getPackage(u[h].location))}s=i.Binder.getBinderWithModuleId(r,o)}catch(d){s.reject(Error("Error cannot find Blueprint Binder "+r))}return s.promise}},referenceFromValue:{value:function(t){var e={};return e.binderName=t.name,e.binderModuleId=t.binderModuleId,e}}})}});