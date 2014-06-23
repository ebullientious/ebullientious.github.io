montageDefine("00b8c27","core/document-resources",{dependencies:["./core","./promise","./mini-url"],factory:function(t,e){var a=t("./core").Montage,n=t("./promise").Promise,s=t("./mini-url"),i=a.specialize({_SCRIPT_TIMEOUT:{value:5e3},_document:{value:null},_resources:{value:null},_preloaded:{value:null},_expectedStyles:{value:null},constructor:{value:function i(){this.super(),this._expectedStyles=[]}},initWithDocument:{value:function(t){return this.clear(),this._document=t,this._populateWithDocument(t),this}},_populateWithDocument:{value:function(t){var e=t.querySelectorAll("script"),a=Array.prototype.forEach;a.call(e,function(t){t.src&&this._addResource(this.normalizeUrl(t.src))},this);var n=t.querySelectorAll("link");a.call(n,function(t){"stylesheet"===t.rel&&this._addResource(this.normalizeUrl(t.href))},this)}},clear:{value:function(){this._resources=Object.create(null),this._preloaded=Object.create(null)}},_addResource:{value:function(t){this._resources[t]=!0}},hasResource:{value:function(t){return t in this._resources}},isResourcePreloaded:{value:function(t){return this._preloaded[t]===!0}},isResourcePreloading:{value:function(t){return n.isPromise(this._preloaded[t])}},setResourcePreloadedPromise:{value:function(t,e){this._preloaded[t]=e}},setResourcePreloaded:{value:function(t){this._preloaded[t]=!0}},getResourcePreloadedPromise:{value:function(t){return this._preloaded[t]}},addScript:{value:function(t){var e=this.normalizeUrl(t.src);return e?this.isResourcePreloaded(e)?n.resolve():this.isResourcePreloading(e)?this.getResourcePreloadedPromise(e):this._importScript(t):this._importScript(t)}},_importScript:{value:function(t){var e,a,s=this,i=this._document,r=i.head,l=n.defer(),c=t.src;return c?(s._addResource(c),e=function(){s.setResourcePreloaded(c),t.removeEventListener("load",e),t.removeEventListener("error",e),clearTimeout(a),l.resolve()},t.addEventListener("load",e,!1),t.addEventListener("error",e,!1),a=setTimeout(function(){s.setResourcePreloaded(c),l.resolve()},this._SCRIPT_TIMEOUT),this.setResourcePreloadedPromise(c,l.promise)):l.resolve(),r.appendChild(i.createComment("Inserted from FIXME")),r.appendChild(t),l.promise}},addStyle:{value:function(t){var e,a=t.getAttribute("href");if(a){if(a=this.normalizeUrl(a),this.hasResource(a))return;this._addResource(a),this._expectedStyles.push(a)}e=this._document.head,e.insertBefore(t,e.firstChild)}},normalizeUrl:{value:function(t,e){return e||(e=this._document.location.href),s.resolve(e,t)}},domain:{value:window.location.protocol+"//"+window.location.host},isCrossDomain:{value:function(t){return 0!==t.indexOf(this.domain+"/")||0===t.indexOf("file://")}},preloadResource:{value:function(t,e){var a;return t=this.normalizeUrl(t),!e&&this.isCrossDomain(t)&&(a=!0),a||this.isResourcePreloaded(t)?n.resolve():this.isResourcePreloading(t)?this.getResourcePreloadedPromise(t):this._preloadResource(t)}},_preloadResource:{value:function(t){var e,a,s=this,i=new XMLHttpRequest,r=n.defer();return i.open("GET",t),e=function(){s.setResourcePreloaded(t),i.removeEventListener("load",e),i.removeEventListener("error",e),clearTimeout(a),r.resolve()},i.addEventListener("load",e,!1),i.addEventListener("error",e,!1),i.send(),a=setTimeout(function(){s.setResourcePreloaded(t),r.resolve()},this._SCRIPT_TIMEOUT),this.setResourcePreloadedPromise(t,r.promise),r.promise}},areStylesLoaded:{get:function(){var t,e;if(this._expectedStyles.length>0){t=this._document.styleSheets;for(var a,n=0;a=t[n];n++)e=this._expectedStyles.indexOf(a.href),e>=0&&this._expectedStyles.splice(e,1)}return 0===this._expectedStyles.length}}},{getInstanceForDocument:{value:function(t){var e=t.__montage_resources__;return e||(e=t.__montage_resources__=(new i).initWithDocument(t)),e}}});e.DocumentResources=i}});