montageDefine("00b8c27","core/radio-button-controller",{dependencies:["./core","./range-controller"],factory:function(t,e){var n=t("./core").Montage,r=t("./range-controller").RangeController;e.RadioButtonController=n.specialize({_radioButtons:{value:null},_content:{value:null},content:{get:function(){return this.getPath("contentController.content")},set:function(t){this.contentController=(new r).initWithContent(t)}},contentController:{value:null},selectedRadioButton:{value:null},_value:{value:null},value:{set:function(t){this._value!==t&&(this._value=t,this._updateRadioButtons())},get:function(){return this._value}},constructor:{value:function(){this._radioButtons=[],this.addRangeAtPathChangeListener("_radioButtons.map{checked}",this,"handleRadioButtonChange"),this.defineBinding("value ",{"<->":"contentController.selection.0"})}},_updateRadioButtons:{value:function(){for(var t=this._value,e=0,n=this._radioButtons.length;n>e;e++)if(t===this._radioButtons[e].value){this._radioButtons[e].checked=!0;break}}},registerRadioButton:{value:function(t){-1===this._radioButtons.indexOf(t)&&(this._radioButtons.push(t),this._updateRadioButtons())}},unregisterRadioButton:{value:function(t){var e=this._radioButtons.indexOf(t);e>=0&&(this._radioButtons.splice(e,1),t===this.selectedRadioButton&&(this.selectedRadioButton=null))}},handleRadioButtonChange:{value:function(t,e,n){if(t[0]===!0)for(var r=0,a=this._radioButtons.length;a>r;r++)r===n?(this.selectedRadioButton=this._radioButtons[r],this.value=this.selectedRadioButton.value):this._radioButtons[r].checked=!1}}},{blueprintModuleId:t("./core")._blueprintModuleIdDescriptor,blueprint:t("./core")._blueprintDescriptor})}});