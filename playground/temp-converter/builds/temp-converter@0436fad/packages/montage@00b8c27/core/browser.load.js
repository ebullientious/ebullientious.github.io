montageDefine("00b8c27","core/browser",{dependencies:["montage"],factory:function(t,e){var a=t("montage").Montage,s=RegExp(/AppleWebKit\/([\d.]+)/),n=a.specialize({constructor:{value:function n(t){this.super(),this._userAgent=t,this._analyze(t)}},_analyze:{value:function(t){if(t.indexOf("Android")>-1&&t.indexOf("Mozilla/5.0")>-1&&t.indexOf("AppleWebKit")>-1){this.android={};var e=s.exec(t),a=null===e?null:parseFloat(s.exec(t)[1]);this.android.androidBrowser=null!==a&&537>a}}},_userAgent:{value:null}}),l=null;a.defineProperties(e,{browser:{get:function(){return null===l&&(l=new n(navigator.userAgent)),l}},Browser:{value:n}})}});