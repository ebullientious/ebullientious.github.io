var Montage=require("./core").Montage,BitField=exports.BitField=Montage.specialize({constructor:{value:function(){this.super()}},initWithDescriptor:{enumerable:!1,value:function(t){var e;this.reset();for(e in t)this.addField(e,t[e].value);return this}},addField:{enumerable:!1,value:function(t,e){if(!(t in this)){if(this._fieldCount>=32)throw"BitField 32 fields limit reached.";this._trueValue+=this._fields[t]=this._constantsToReuse.length?this._constantsToReuse.shift():1<<this._fieldCount,Montage.defineProperty(this,t,{enumerable:!0,get:function(){return this._value===this._trueValue},set:function(e){e?this._value|=this._fields[t]:this._value&=~this._fields[t],this.value&&this.callDelegateMethod()}}),this._fieldCount++,e&&(this[t]=!0)}}},_constantsToReuse:{enumerable:!1,value:[]},removeField:{enumerable:!1,value:function(t){delete this[t],this._constantsToReuse.push(this._fields[t]),this._trueValue-=this._fields[t],delete this._fields[t]}},delegate:{enumerable:!1,value:null},callDelegateMethod:{value:function(){var t;this.delegate&&"function"==typeof(t=this.delegate.bitFieldDidBecomeTrue)&&t.call(this.delegate,this)},enumerable:!1},value:{enumerable:!1,get:function(){return this._value===this._trueValue}},_fieldCount:{enumerable:!1,value:0},_value:{enumerable:!1,value:0},_trueValue:{enumerable:!1,value:0},reset:{enumerable:!1,value:function(){this._value=0}},_fields:{enumerable:!1,value:{}},toString:{value:function(){var t,e,a=this._fields,s="";for(t=0;e=a[t];t++)s+=e+"["+(this._value&a[e])+"], ";return s}}});