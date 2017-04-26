class Pie extends Graph{
	constructor(){
		super()
	}
	plotGraph(x_axis,y_axis,selectDataset){

	document.getElementById('chartSelection').style.visibility = 'visible'
	document.getElementById('chartDiv').style.visibility = 'visible'

	  var DataFrame = dfjs.DataFrame

	  var file
		if(selectDataset == 'ds1'){
	    file = "data/crdbt.csv"
	  }else if(selectDataset == 'ds3'){
	    file = "data/CTA_Ridership_L_Station.csv"
	  }else if(selectDataset == 'ds4'){
	    file = "data/Average_Daily_Traffic_Counts.csv"
	  }else if(selectDataset == 'ds5'){
	    file = "data/Red_Light_Camera_Violations.csv"
	  }else if(selectDataset == 'ds6'){
	    file = "data/Divvy_Bicycle_Stations.csv"
	  }else{
	    console.log("No file selcted")
	  }

	  DataFrame.fromCSV(file).then(
    df => {
      //Chart
      var selectedDf = df.select(x_axis, y_axis)
      var result = selectedDf.groupBy(x_axis).aggregate(group => group.stat.sum(y_axis))/*.rename(map[x_axis], map[y_axis]);*/;
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

	  var myPieChart = new Chart(ctx,{
    type: 'pie',
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
			display:false
		}
		}
	});
}
)
	}
}
