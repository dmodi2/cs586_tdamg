class Stacked extends Graph {

  constructor(file){
    super(file)
  }

  plotGraph(x_axis, y_axis){

  document.getElementById('chartSelection').style.visibility = 'visible'
  document.getElementById('chartDiv').style.visibility = 'visible'

  var DataFrame = dfjs.DataFrame

  DataFrame.fromCSV(this.file).then(
    df => {

      DataFrame.sql.registerTable(df, 'tmp1', true)
      var col_list =  x_axis + ', '
      for(var i = 0; i < y_axis.length; i++){
        if(i == y_axis.length - 1)
          col_list = col_list +  y_axis[i]
        else
          col_list = col_list +  y_axis[i] + ', '
      }
      var sql_query = 'SELECT ' + col_list + ' from tmp1'
      console.log(sql_query)
      //Chart
      var selectedDf = DataFrame.sql.request(sql_query)
      var result = []
      var val = 0
      for(var i = 0; i < y_axis.length; i++){
        result[i] = selectedDf.groupBy(x_axis).aggregate(group => group.stat.sum(y_axis[i]))
        val = val + result[i].stat.max('aggregation')
      }
      var ctx = document.getElementById("chartArea").getContext("2d");

     var data = []
     for(var j = 0; j < y_axis.length; j++){
       data[j] = new Array()
       for (var i=0; i < result[0].select('aggregation').toArray().length; i++)
       {
         data[j][i] = result[j].select('aggregation').toArray()[i][0];
         //data[i] = result[1].select('aggregation').toArray()[i][0];
       }
     }
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
     for(var i = 0; i < result[0].count(); i++){
       backgroundColorArray[i] = colorArray[col_count]
       borderColorArray[i] = borColorArray[col_count]
       col_count++
       if(col_count == 3){
         col_count = 0
       }
     }

     var myNewDataset = []
     var finalDataset = []
     for(var j = 0; j < y_axis.length; j++){
        myNewDataset[j] = {
        label: y_axis[j],
        backgroundColor: backgroundColorArray,
        borderColor: borderColorArray,
        borderWidth: 1,
        data: data[j]
      }
      finalDataset.push(myNewDataset[j])
    }

    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: result[0].select(x_axis).toArray(),
        datasets: finalDataset
    },
    options: {
        scales: {
            yAxes: [{
				stacked: true,
                ticks: {
                    beginAtZero:true,
                    steps: 10,
                    stepValue: val/10,
                    max: val * 1.1
                }
            }],
            xAxes: [{
				stacked: true,
                ticks: {
                    beginAtZero:true
                }
            }]

        }
    }
});
    }
  )
}

}
