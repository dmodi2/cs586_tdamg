class Bar extends Graph {

  constructor(){
    super()
  }

  plotGraph(x_axis, y_axis, selectDataset){

  document.getElementById('dataset-div').style.visibility = 'visible'
  document.getElementById('chartSelection').style.visibility = 'visible'
  document.getElementById('chartDiv').style.visibility = 'visible'

  var DataFrame = dfjs.DataFrame

  var file
  if(selectDataset == 'ds1'){
    file = "data/crdbt.csv"
  }else if(selectDataset == 'ds2'){
    file = "data/CTA_Ridership_Bus_Routes.csv"
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
        console.log(selectedDf.listColumns())
      var result = selectedDf.groupBy(x_axis).aggregate(group => group.stat.sum(y_axis)).rename(map[x_axis], map[y_axis]);

      console.log(result.listColumns())

      console.log(result.select('aggregation').toArray())

      var ctx = document.getElementById("chartArea");
      //alert('ok')
      var myChart = new Chart(ctx, {
        type: 'bar',
        options: {
          legend: {
            display: true
          }
        },
        data: {
          labels: result.select(x_axis).toArray(),
          datasets: [{
            label: 'Total Rides',
            data: result.select('aggregation').toArray(),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
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
