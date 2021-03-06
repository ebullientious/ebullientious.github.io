var Navigation = can.Control.extend({
  init: function (element, options) {
    // activate the first tab
    this.previousItem = $(element).children( 'li:first' );
    this.previousItem.addClass( 'active' );
  },
  'li click': function( li, event ) {
    event.preventDefault();  
    if (li.hasClass("active")) {
      return;
    }  
    li.addClass("active");
    this.previousItem.removeClass("active");
    this.previousItem = li;
    var link = this.getLink(li).selector;
    can.route.attr(this.options.attr, link);
  },
  // helper function finds the href for a given element
  'getLink': function (element) {
    return $(element.find('a' ).attr('href' ).substring(1));
  },
  '{can.route} change': function(ev, attr, how, newVal, oldVal) {
    var data = {};    console.log(oldVal);

    if (oldVal === "") {
      oldVal = "landing";
    }
    else if (oldVal === "weddingParty") {
      $("#main-content").html(can.view("html/" + oldVal + ".ejs", data));
      return;
    }
    $("#main-content").html(can.view("html/" + oldVal + ".html", data));
  }
});

$(document).ready(function() {
  var nav = new Navigation("#navigation", {attr: "page"});
  can.route.ready();
});

