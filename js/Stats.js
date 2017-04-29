class Stats {
  constructor() {
  }



  findStats(x_axis, y_axis, x_filter_val, xOp, y_filter_val, yOp, doFilter, file){

    var DataFrame = dfjs.DataFrame

    DataFrame.fromCSV(file).then(
      df => {
        //Chart
        var selectedDf = df.select(x_axis,y_axis)

        if (doFilter) {
          var xFDf = selectedDf.filter(row => xOp(row.get(x_axis), x_filter_val))
          selectedDf = xFDf.filter(row => yOp(row.get(y_axis), y_filter_val))
        }

        var result = selectedDf.groupBy(x_axis).aggregate(group => group.stat.sum(y_axis));

        var a = result.select('aggregation').toArray()

        //calulates the stats
        var min = result.stat.min('aggregation')
        var max = result.stat.max('aggregation')
        var mean = result.stat.mean('aggregation')
        var sd = result.stat.sd('aggregation')

        // array of elements for y-axis
        var data = [min, max, mean, sd]

        // var statsDiv = document.getElementById('stats')
        // statsDiv.innerHTML += "<table style=\"width:400px\"><tr><td>Min</td><td>Max</td><td>Mean</td><td>Standard Deviation</td></tr> <tr><td>" + min + "</td><td>" +  max + "</td><td>" + mean + "</td><td>" + sd + "</td></tr></table>";
        // var b=[];
        // for (var i=0;i<a.length;i++)
        // {
        //   b[i] = a[i][0];
        // }
        //
        // Create bar graph for the stats

        document.getElementById('statsDiv').style.visibility = 'visible'

        var ctx = document.getElementById("statsChartArea").getContext("2d");
        var colorArray = [
          'rgba(255, 99, 134, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(128, 20, 8, 0.2)'
        ]
        var borColorArray = [
          'rgba(255, 99, 134, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(128, 20, 8, 1)'
        ]
        var col_count = 0
        var backgroundColorArray = []
        var borderColorArray = []
        for(var i = 0; i < result.count(); i++){
          backgroundColorArray[i] = colorArray[col_count]
          borderColorArray[i] = borColorArray[col_count]
          col_count++
          if(col_count == 4){
            col_count = 0
          }
        }
        var myChart = new Chart(ctx, {
          type: 'bar',
          options: {
            legend: {
              display: true
            }
          },
          data: {
            labels: ['min', 'max', 'mean', 'sd'],
            datasets: [{
              label: 'Statistics',
              data: data,
              backgroundColor: backgroundColorArray,
              borderColor: borderColorArray,
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true,
                  steps: 10,
                  //stepValue: result.stat.max('aggregation') / 10,
                  //max: result.stat.max('aggregation') * 1.1
                }
              }]
            }
          }
        });
      }
    )

  }
}
