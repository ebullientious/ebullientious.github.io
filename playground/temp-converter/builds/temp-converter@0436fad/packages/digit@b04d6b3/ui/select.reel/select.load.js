montageDefine("b04d6b3","ui/select.reel/select",{dependencies:["montage/ui/base/abstract-select"],factory:function(t,e){var i=t("montage/ui/base/abstract-select").AbstractSelect;e.Select=i.specialize({constructor:{value:function(){this.super(),this.classList.add("digit-Select")}},enterDocument:{value:function(t){this.super(t),this.element.addEventListener("change",this,!1)}},handleChange:{value:function(){var t=this.contentController.organizedContent,e=this.element.selectedIndex;this.value=t[e]}},draw:{value:function(){var t,e=this.contentController.organizedContent;this._contentIsDirty&&(this.drawOptions(),this._contentIsDirty=!1),t=e.indexOf(this.value),-1==t&&(t=0),this.element.selectedIndex=t}},drawOptions:{value:function(){for(var t,e,i=this.contentController.organizedContent,s=document.createDocumentFragment(),n=0,o=i.length;o>n;n++)t=document.createElement("option"),e=i[n],t.textContent=e&&e[this.labelPropertyName],s.appendChild(t);this.element.innerHTML="",this.element.appendChild(s)}}})}});