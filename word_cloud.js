 var word_count = {};


        d3.json('word_count.json', function Myfuction_wordClioud(data){
          //alert("inside");
          console.log(data);
          // word_count = data['Diabetes'];
         
          var test = data[parent.document.getElementById("disease1").innerHTML];

          var words = {};
          for(var key in test){
            if(test[key] > 3)
              
              words[key] = test[key];
          }

          console.log(words);
          var svg_location = "#chart";
          var width = $(document).width();
          var height = $(document).height()* 0.3;

          var bb = document.querySelector ('#chart').getBoundingClientRect();
          width = bb.right - bb.left;
          // var height1 = bb.top - bb.bottom;
          console.log(bb)

          var color = d3.scale.threshold()
                .domain([10,20,30,40,50,60,70,80,90,1000])
                .range(["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)","rgb(33,113,181)","rgb(8,81,156)","rgb(8,48,107)","rgb(3,19,43)"]);

          var fill = d3.scale.category20b();

          // var spectral = d3.scaleYlGnBu();

          var word_entries = d3.entries(words);

          var xScale = d3.scale.linear()
             .domain([0, d3.max(word_entries, function(d) {
                return d.value*0.5;
              })
             ])
             .range([10,100]);

          d3.layout.cloud().size([width, height])
            .timeInterval(20)
            .words(word_entries)
            .fontSize(function(d) { return xScale(+d.value); })
            .text(function(d) { return d.key; })
            .rotate(function() { return ~~(Math.random() * 2) * 90; })
            .font("Impact")
            .on("end", draw)
            .start();

          function draw(words) {
            d3.select(svg_location)
            .append("svg")
                .attr("width", width)
                .attr("height", height)
              .append("g")
                .attr("transform", "translate(" + [width >> 1, height >> 1] + ")")
              .selectAll("text")
                .data(words)
              .enter().append("text")
                .style("font-size", function(d) { return xScale(d.value) + "px"; })
                .style("font-family", "Impact")
                .style("fill", function(d, i) { return fill(i); })
                .attr("text-anchor", "middle")
                .attr("transform", function(d) {
                  return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .text(function(d) { return d.key; })
              .on("mouseover", function(d, i){
                console.log(d.text,d.value);
              })
              ;
          }

        d3.layout.cloud().stop();
      


        });