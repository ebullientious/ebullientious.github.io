montageDefine("00b8c27","ui/text.reel/text",{dependencies:["../component"],factory:function(e,t){var n=e("../component").Component;t.Text=n.specialize({constructor:{value:function(){this.super()}},hasTemplate:{value:!1},_value:{value:null},value:{get:function(){return this._value},set:function(e){this._value!==e&&(this._value=e,this.needsDraw=!0)}},converter:{value:null},defaultValue:{value:""},_valueNode:{value:null},_RANGE:{value:document.createRange()},enterDocument:{value:function(e){if(e){var t=this._RANGE;t.selectNodeContents(this.element),t.deleteContents(),this._valueNode=document.createTextNode(""),t.insertNode(this._valueNode),this.element.classList.add("montage-Text")}}},draw:{value:function(){var e=this._value,t=e||0===e?e:this.defaultValue;this.converter&&(t=this.converter.convert(t)),this._valueNode.data=t}}})}});