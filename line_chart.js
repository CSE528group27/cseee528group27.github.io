d3.csv("line_chart_data.csv",callback);

        function callback(data){
            data.forEach(function(d){
                d.date = d3.time.format("%Y-%m").parse(d.date);
                d.frequency = +d.frequency;
                //console.log(d);
            });

            var bb = document.querySelector ('#line-chart').getBoundingClientRect();
            console.log(bb);
            var width = $(document).width() * 0.25;

            var margin = {top: 20, right: 50, bottom: 30, left: 50},
            // width = 900 - margin.left - margin.right,
            height = 270 - margin.top - margin.bottom;

          var parseDate = d3.time.format("%Y-%m").parse,
              bisectDate = d3.bisector(function(d) { return d.date; }).left,
              formatValue = d3.format(".2s"),
              formatCurrency = function(d) { return formatValue(d); };

            
          var x = d3.time.scale()
              .range([0, width]);

          var y = d3.scale.linear()
              .range([height, 0]);

          var xAxis = d3.svg.axis()
              .scale(x)
              .orient("bottom");

          var yAxis = d3.svg.axis()
              .scale(y)
              .orient("left");

          var line = d3.svg.line()
              .x(function(d) { return x(d.date); })
              .y(function(d) { return y(d.frequency); })
            

          var svg = d3.select("#line-chart").append("svg")
              .attr("width", width  )
              .attr("height", height + margin.top + margin.bottom)
            .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            data = data.filter(function(d) {
              return d.topicId == topic_id;
            });
            
            x.domain([data[0].date, data[data.length - 1].date]);
            y.domain(d3.extent(data, function(d) { return d.frequency; }));

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + (height+4) + ")")
                .call(xAxis)
                .attr("");

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
              .append("text")
                .style("text-anchor", "end")
                .text("Questions asked")
                .attr("transform", "rotate(-90)")
                .attr("x",-60)
                .attr("y",-30);

            svg.append("path")
                .datum(data)
                .attr("class", "line")
                .attr("d", line);

            var focus = svg.append("g")
                .attr("class", "focus")
                .style("display", "none");

            focus.append("circle")
                .attr("r", 6)
                .style("fill","red");

            focus.append("text")
                .attr("x", 9)
                .attr("dy", ".40em");

            svg.append("rect")
                .attr("class", "overlay")
                .attr("width", width)
                .attr("height", height)
                .on("mouseover", function() { focus.style("display", null); })
                .on("mouseout", function() { focus.style("display", "none"); })
                .on("mousemove", mousemove);

            function mousemove() {
              var x0 = x.invert(d3.mouse(this)[0]),
                  i = bisectDate(data, x0, 1),
                  d0 = data[i - 1],
                  d1 = data[i],
                  d = x0 - d0.date > d1.date - x0 ? d1 : d0;
              focus.attr("transform", "translate(" + x(d.date) + "," + y(d.frequency) + ")");
              focus.select("text").text(d.frequency);
              focus.select(".x-hover-line").attr("y2", height - y(d.frequency));
              focus.select(".y-hover-line").attr("x2", width + width);
            }
}