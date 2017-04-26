class Doughnut extends Graph{

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
      var selectedDf = df.select(x_axis, y_axis)
      var result = selectedDf.groupBy(x_axis).aggregate(group => group.stat.sum(y_axis))/*.rename(map[x_axis], map[y_axis]);*/;
      var ctx = document.getElementById("chartArea").getContext("2d");


	  var colorArray = [
        'rgba(255, 99, 134, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
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

	  var myChart = new Chart(ctx,{
    type: 'doughnut',
    data: {
    labels: result.select(x_axis).toArray(),
    datasets: [
        {
            data: result.select('aggregation').toArray(),
            backgroundColor: backgroundColorArray,
            hoverBackgroundColor: borderColorArray
        }]
	},
	options: {
        animation:{
            animateScale:true
			},
			legend:{
				display: false
			}
		}
	});
}
)
	}
}
