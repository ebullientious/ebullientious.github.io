montageDefine("00b8c27","core/extras/object",{dependencies:["collections/weak-map","frb"],factory:function(t){t("collections/weak-map"),Object.defineProperty(Object,"getPropertyDescriptor",{value:function(t,e){var n,a=t;do n=Object.getOwnPropertyDescriptor(a,e);while(!n&&(a=a.__proto__||Object.getPrototypeOf(a)));return n},writable:!0,configurable:!0}),Object.defineProperty(Object,"getPrototypeAndDescriptorDefiningProperty",{value:function(t,e){var n,a=t;if(e){do n=Object.getOwnPropertyDescriptor(a,e);while(!n&&(a=a.__proto__||Object.getPrototypeOf(a)));return{prototype:a,propertyDescriptor:n}}},writable:!0,configurable:!0}),Object.defineProperty(Object.prototype,"clear",{value:function(){for(var t=Object.keys(this),e=t.length;e;)e--,delete this[t[e]];return this},writable:!0,configurable:!0}),Object.defineProperty(Object,"defineBinding",{value:function(e,n,a){var i=Error.stackTraceLimit;Error.stackTraceLimit=2,console.warn("Object.defineBinding deprecated.  See the comment below this warning for migration instructions.",Error("deprecated").stack),Error.stackTraceLimit=i;var s=t("frb");a.source=a.boundObject,a.oneway?a["<-"]=a.boundObjectPropertyPath:a["<->"]=a.boundObjectPropertyPath,a.boundValueMutator&&(a.convert=a.boundValueMutator),s.defineBinding(e,n,a)}}),Object.defineProperty(Object,"deleteBinding",{value:function(e,n){var a=t("frb");a.cancelBinding(e,n)}})}});