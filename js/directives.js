// http://www.ng-newsletter.com/posts/d3-on-angular.html
weddingApp.directive('packedCircle', ['$window', '$timeout', 'd3Service', 
  function($window, $timeout, d3Service) {
    return {
      restrict: 'EA',
      scope: {
        data: '=',
        label: '@',
        onClick: '&'
      },
      link: function (scope, element, attrs) {
        d3Service.d3().then(function(d3) { // Start d3Service function
        var diameter = 700;
        var pack = d3.layout.pack()
          .size([diameter - 4, diameter - 4])
          .value(function(d) { return d.size; });

        var svg = d3.select(element[0]).append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .append("g")
              .attr("transform", "translate(0,0)");

        d3.json("js/weddingPartyData.json", function(error, root) { // Start creating nodes
          var node = svg.datum(root).selectAll(".node") // Bind data to all nodes
              .data(pack.nodes)
              .enter()
                .append("g")
                  .attr("class", function(d) { return d.children ? "node" : "leaf node"; })
                  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

          node.append("title")
              .text(function(d) { return d.name + (d.children ? "" : ": " + d.role); });

          node.filter(function(d) {  return !d.image; }) // Draw circles if there aren't any images
            .append("circle")
              .attr("r", function(d) { return d.r; })
              .attr("class", function(d) { return d.className; });

          node.filter(function(d) {  return d.image; }) // Only attach nodes that have images
            .append("svg:image")
              .attr("xlink:href", function (d) { return d.image; })
              .attr("width", function(d) { return d.r * 2; })
              .attr("height", function(d) { return d.r * 2; })
              .attr("transform", function(d) { return "translate(-" + d.r + ",-" + d.r + ")"; })
              .style("preserveAspectRatio", "xMidyMid slice")
              .attr("class", "mask-headshot");
          }); // End creating nodes
        
        });
      } // End d3Service function
    };
}]);