montageDefine("b04d6b3","ui/badge.reel/badge",{dependencies:["montage/ui/text.reel"],factory:function(e,t){var n=e("montage/ui/text.reel").Text;t.Badge=n.specialize({hasTemplate:{value:!0},constructor:{value:function(){this.super(),this.classList.add("digit-Badge")}},value:{set:function(e){e=parseInt(e,10),Object.getOwnPropertyDescriptor(n,"value").set.call(this,e)},get:function(){return Object.getOwnPropertyDescriptor(n,"value").get.call(this)}}})}});