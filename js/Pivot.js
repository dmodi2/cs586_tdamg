class Pivot extends Graph {
	constructor(file){
		super(file)
	}
	plotGraph(x_axis,y_axis){

		document.getElementById('chartSelection').style.visibility = 'visible'
		document.getElementById('chartDiv').style.visibility = 'visible'

		var DataFrame = dfjs.DataFrame

		DataFrame.fromCSV(this.file).then(
		df => {
			//Chart
			var selectedDf = df.select(x_axis, y_axis,'rail_boardings')
			var result = selectedDf.groupBy(x_axis).aggregate(group => group.stat.sum(y_axis))
			var res2 = selectedDf.groupBy(x_axis).aggregate(group => group.stat.sum('rail_boardings'))
			var data1 = [result.select('aggregation').toArray()[0],res2.select('aggregation').toArray()[0],2300000000]
			var data2 = [result.select('aggregation').toArray()[1],res2.select('aggregation').toArray()[1],3000000000]
			var data3 = [result.select('aggregation').toArray()[2],res2.select('aggregation').toArray()[2],6000000000]
			var ctx = document.getElementById("chartArea").getContext("2d");
			var colorArray = [
								"#FF6384",
								"#36A2EB",
								"#FFCE56"
				]

				var borColorArray = [
					'rgba(255, 99, 134, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)'
				]
      var col_count = 0
      var backgroundColorArray = []
      var borderColorArray = []
      for(var i = 0; i < result.count(); i++){
        backgroundColorArray[i] = colorArray[col_count]
        borderColorArray[i] = borColorArray[col_count]
        col_count++
        if(col_count == 3){
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
          //labels: result.select(x_axis).toArray(),
          labels: result.select(x_axis).toArray(),
		  datasets: [{
            label: 'U',
			data: data1,
            backgroundColor: backgroundColorArray[0],
            borderColor: borderColorArray[0],
            borderWidth: 1
          },
		  {
            label: 'W',
			data: data2,
			backgroundColor: backgroundColorArray[1],
            borderColor: borderColorArray[1],
            borderWidth: 1
          },
		  {
            label: 'A',
			data: data3,
			backgroundColor: backgroundColorArray[2],
            borderColor: borderColorArray[2],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
                steps: 10,
                stepValue: result.stat.max('aggregation') / 10,
                max: result.stat.max('aggregation') * 1.1
              }
            }]
          }
        }
      });
    }
  )
}

}
