montageDefine("99596c3","observe",{dependencies:["./parse","./compile-observer","./observers","./scope"],factory:function(e,t,n){function i(e,t,n){var i;i="function"==typeof n?{change:n}:n,i=i||c,i.source=e,i.sourcePath=t;var u=i.parameters=i.parameters||e,h=i.document,d=i.components,p=i.beforeChange,g=i.contentChange,f=new l(e);f.parameters=u,f.document=h,f.components=d,f.beforeChange=p;var m=r(t),v=a(m);return g===!0&&(v=s.makeRangeContentObserver(v)),v(o(function(t){if(t){if("function"!=typeof g)return i.change.apply(e,arguments);if("function"==typeof g)return t.addRangeChangeListener(g),s.once(function(){t.removeRangeChangeListener(g)})}else;}),f)}var r=e("./parse"),a=e("./compile-observer"),s=e("./observers"),o=s.autoCancelPrevious,l=e("./scope");n.exports=i;var c={}}});