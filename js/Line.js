class Line extends Graph {

	constructor(file){
    super(file)
  }

	plotGraph(x_axis, y_axis){

	document.getElementById('dataset-div').style.visibility = 'visible'
	document.getElementById('chartSelection').style.visibility = 'visible'
	document.getElementById('chartDiv').style.visibility = 'visible'

	var DataFrame = dfjs.DataFrame

	DataFrame.fromCSV(this.file).then(
	df => {
      //Chart
      var selectedDf = df.select(x_axis,y_axis)
      var result = selectedDf.groupBy(x_axis).aggregate(group => group.stat.sum(y_axis));

	  var a = result.select('aggregation').toArray()

	  var b=[];
	  for (var i=0;i<a.length;i++)
	  {
			b[i] = a[i][0];
    }

	  var ctx = document.getElementById("chartArea");
    
      var myChart = new Chart(ctx, {
        type: 'line',
        options: {
          legend: {
            display: false
          }
        },
        data: {
          labels: result.select(x_axis).toArray(),
		  datasets: [{
            label: map[x_axis],
			fill: false,
			lineTension: 0.1,
			backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
			showLine: true,
			data: b
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
              }
            }]
          }
        }
      });
    }
  )

	}
}
