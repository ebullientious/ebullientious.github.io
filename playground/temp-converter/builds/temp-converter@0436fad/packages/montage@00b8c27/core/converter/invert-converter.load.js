montageDefine("00b8c27","core/converter/invert-converter",{dependencies:["../core","./converter"],factory:function(t,e){t("../core").Montage;var a=t("./converter").Converter;e.InvertConverter=a.specialize({convert:{value:function(t){return!t}},revert:{value:function(t){return!t}}})}});