montageDefine("00b8c27","core/converter/bytes-converter",{dependencies:["../core","./converter","./number-converter"],factory:function(t,e){t("../core").Montage;var a=t("./converter").Converter,s=t("./number-converter")._numericValueToString;t("./number-converter")._stringToNumericValue;var n=t("./number-converter").NUMERIC_SCALES_BINARY_,l=t("./converter").isDef,i=["P","T","G","M","K","","m","u","n"],c=function(t,e,a){var c="";return(!l(a)||a)&&(c="B"),s(t,n,e,c,i)},r=function(t,e){return c(t,e,!1)};e.BytesConverter=a.specialize({decimals:{value:2},convert:{value:function(t){return r(t,this.decimals)}},revert:{value:function(t){return t}}})}});