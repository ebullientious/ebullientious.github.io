montageDefine("00b8c27","core/selector",{dependencies:["./core","frb/parse","frb/stringify","frb/evaluate","frb/language"],factory:function(t,e){var n=t("./core").Montage,r=t("frb/parse"),a=t("frb/stringify"),i=t("frb/evaluate"),s=t("frb/language").precedence,l=e.Selector=n.specialize({syntax:{value:null},constructor:{value:function l(){this.super()}},initWithSyntax:{value:function(t){return this.syntax=t,this}},initWithPath:{value:function(t){return this.syntax=r(t),this}},stringify:{value:function(){return a(this.syntax)}},serializeSelf:{value:function(t){t.setProperty("path",a(this.syntax))}},deserializeSelf:{value:function(t){this.syntax=r(t.getProperty("path"))}},evaluate:{value:function(t,e){return i(this.syntax,t,e)}}});s.keys().forEach(function(t){n.defineProperty(l.prototype,t,{value:function(){var e=Array.prototype.map.call(arguments,function(t){return"string"==typeof t?r(t):t.syntax?t.syntax:"object"==typeof t?t:void 0});return(new this.constructor).initWithSyntax({type:t,args:[this.syntax].concat(e)})}}),n.defineProperty(l,t,{value:function(){var e=Array.prototype.map.call(arguments,function(t){return"string"==typeof t?r(t):t.syntax?t.syntax:"object"==typeof t?t:void 0});return(new this).initWithSyntax({type:t,args:e})}})})}});