var Montage=require("./core").Montage,State=exports.State=Montage.specialize({_stateChart:{enumerable:!1,value:null},constructor:{value:function State(){this.super()}},init:{value:function(e){this.substates={},this.enterState=null,this.exitState=null;for(var t,n,i=Object.keys(e),r=0;t=i[r];r++)n=e[t],"object"==typeof n&&State.prototype.isPrototypeOf(n)&&(n.name=t,n.parentState=this,this.substates[t]=n),this[t]="string"==typeof n&&"initialSubstate"!==t?this._encloseGotoState(n):n;return this}},name:{enumerable:!1,value:null},_initialSubstate:{enumerable:!1,value:null},initialSubstate:{get:function(){return"string"==typeof this._initialSubstate&&(this._initialSubstate=this[this._initialSubstate]),this._initialSubstate},set:function(e){this._initialSubstate=e}},substates:{enumerable:!1,value:null},parentState:{enumerable:!1,value:null},_path:{enumerable:!1,value:null},path:{enumerable:!1,get:function(){return this._path||(this._path=this.parentState&&this.parentState.path?this.parentState.path+"."+this.name:this.name),this._path}},enterState:{enumerable:!1,value:null},exitState:{enumerable:!1,value:null},isInState:{enumerable:!1,value:function(e){return"string"!=typeof e&&(e=e.name),!!this.path.match(RegExp(".?"+e+".?"))}},_encloseGotoState:{value:function(e){return function(t,n){return this._stateChart._gotoState(e,n)}}},gotoState:{value:function(e,t){return this._stateChart._gotoState(e,t)}},_performAction:{enumerable:null,value:function(e,t,n){if(this[e])this[e](t,n);else{if(!this.parentState)throw"Action '"+e+"' not available";this.parentState._performAction(e,t,n)}}},toString:{enumerable:!1,value:function(){return"[State "+this.path+" ]"}}}),StateChart=exports.StateChart=Montage.specialize({delegate:{enumerable:!1,value:null},ownerStateProperty:{enumerable:!1,value:null},rootState:{enumerable:!1,value:null},_currentState:{enumerable:!1,value:null},currentState:{get:function(){return this.ownerStateProperty?null:this._currentState}},initWithState:{value:function(e){return this._states={},this.rootState=e,this.rootState._stateChart=this,this._prepareState(this.rootState),this.enterDefaultState(),this}},_defaultState:{enumerable:!1,value:null},defaultState:{enumerable:!1,get:function(){if(!this._defaultState){var e,t;for(e=t=this.rootState;t=t.initialSubstate;)e=t;this._defaultState=e}return this._defaultState}},enterDefaultState:{enumerable:!1,value:function(){if(this.ownerStateProperty&&!this.owner)throw"This stateChart has been configured to require an owner to execute this function";var e=this.ownerStateProperty?this.owner:this,t=this.ownerStateProperty?e["_"+this.ownerStateProperty]:e.currentState;if(t)throw"Cannot enter default state from '"+t.name+"'";var n,i;for(n=i=this.rootState;i=i.initialSubstate;)n.enterState&&n.enterState(this,e),n=i,i.initialSubstate&&n.exitState&&n.exitState(this,e);return this.ownerStateProperty?e["_"+this.ownerStateProperty]=this.defaultState:this._currentState=this.defaultState,this.defaultState}},_prepareState:{enumerable:!1,value:function(e){e._stateChart=this,e.name&&(this._states[e.name]=e);var t;for(t in e.substates)this._prepareState(e.substates[t])}},_states:{enumerable:!1,value:null},stateWithName:{enumerable:!1,value:function(e){return this._states[e]}},performAction:{value:function(e,t){if(this.ownerStateProperty&&!t)throw"This stateChart has been configured to require an owner to execute this function";t=this.ownerStateProperty?t:this;var n=this.ownerStateProperty?t[this.ownerStateProperty]:t.currentState;if(!n)throw"Cannot perform action '"+e+"' without a currentState";n._performAction(e,this,t),this.owner=null}},_gotoState:{value:function(e,t){if(this.ownerStateProperty&&!t)throw"This stateChart has been configured to require an owner to execute this function";t=this.ownerStateProperty?t:this;var n,i,r,a,s,l,o,c,u,h,p,d=this.ownerStateProperty?t[this.ownerStateProperty]:t.currentState,g=d.name,f=e,v=!1,m=!1,L=!1,y=!1;if("string"==typeof f?e=this._states[e]:f=e.name,f!==g&&(this.delegate&&(v="function"==typeof this.delegate.stateChartWillExitState,m="function"==typeof this.delegate.stateChartWillEnterState,L="function"==typeof this.delegate.stateChartDidExitState,y="function"==typeof this.delegate.stateChartDidEnterState),!this.delegate||"function"!=typeof this.delegate.stateChartShouldGoFromStateToState||this.delegate.stateChartShouldGoFromStateToState(this,d,e))){if(this.delegate&&"function"==typeof this.delegate.stateChartWillGoFromStateToState&&this.delegate.stateChartWillGoFromStateToState(this,d,e),n=d.path,i=e.path,RegExp(n).test(i))for(a=i.replace(RegExp(n+".?"),"").split("."),s=a.length,r=0;s>r;r++)h=this._states[a[r]],m&&this.delegate.stateChartWillEnterState(this,h),"function"==typeof h.enterState&&h.enterState(this,t),y&&this.delegate.stateChartDidEnterState(this,h);else{for(n=n.split("."),i=i.split("."),l=-1,c=i.length,u=Math.min(n.length,c);u>l&&(o=l+1,n[o]===i[o]);)l++;for(r=n.length-1;r>l;r--)h=this._states[n[r]],v&&this.delegate.stateChartWillExitState(this,h),"function"==typeof h.exitState&&h.exitState(this,t),L&&this.delegate.stateChartDidExitState(this,h);for(l=0>l?0:l,r=l;c>r;r++)h=this._states[i[r]],m&&this.delegate.stateChartWillEnterState(this,h),this.ownerStateProperty?t["_"+this.ownerStateProperty]=h:this._currentState=h,"function"==typeof h.enterState&&h.enterState(this,t),y&&this.delegate.stateChartDidEnterState(this,h)}p=d,this.delegate&&"function"==typeof this.delegate.stateChartDidGoFromStateToState&&this.delegate.stateChartDidGoFromStateToState(this,p,e),"function"==typeof t.transitionedFromStateToState&&t.transitionedFromStateToState(this,p,e)}}}});