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
        var min = result.stat.min('aggregation')
        var max = result.stat.max('aggregation')
        var mean = result.stat.mean('aggregation')
        var sd = result.stat.sd('aggregation')

        var statsDiv = document.getElementById('stats')
        statsDiv.innerHTML += "<table style=\"width:400px\"><tr><td>Min</td><td>Max</td><td>Mean</td><td>Standard Deviation</td></tr> <tr><td>" + min + "</td><td>" +  max + "</td><td>" + mean + "</td><td>" + sd + "</td></tr></table>";
        var b=[];
        for (var i=0;i<a.length;i++)
        {
          b[i] = a[i][0];
        }
      }
    )

  }
}
