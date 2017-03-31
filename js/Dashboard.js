
var DataFrame = dfjs.DataFrame

function visualize() {
  document.getElementById('chartSelection').style.visibility = 'visible'
}

function load() {
  document.getElementById('dataset-div').style.visibility = 'visible'
  DataFrame.fromCSV('data/crdbt.csv').then(
    df => {
      var myTableDiv = document.getElementById("dataset")
      var table = document.createElement('TABLE')
      var tableBody = document.createElement('TBODY')

      table.border = '1'
      table.appendChild(tableBody)

      var colsRaw = df.listColumns()
      var columns = new Array();

      for (i = 0; i < colsRaw.length; i++) {
        columns[i] = new Column(colsRaw[i], map[colsRaw[i]], i)
      }

      var data = df.toArray()

      var dataframe = new Dataframe(columns, data)

      //TABLE COLUMNS
      var tr = document.createElement('TR')
      tableBody.appendChild(tr)
      for (i = 0; i < dataframe.columns.length; i++) {
        var th = document.createElement('TH')
        th.width = '120';
        th.appendChild(document.createTextNode(dataframe.columns[i].title));
        tr.appendChild(th);
      }

      //TABLE ROWS
      for (i = 0; i < dataframe.data.length; i++) {
        var tr = document.createElement('TR');
        for (j = 0; j < dataframe.data[i].length; j++) {
          var td = document.createElement('TD')
          td.appendChild(document.createTextNode(dataframe.data[i][j]));
          tr.appendChild(td)
        }
        tableBody.appendChild(tr);
      }
      myTableDiv.appendChild(table)

      //Chart
      var selectedDf = df.select('day_type','total_rides')
      var result = selectedDf.groupBy('day_type').aggregate(group => group.stat.sum('total_rides')).rename('DayType', 'TotalRides');

      console.log(result.select('aggregation').toArray())

      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: result.select('day_type').toArray(),
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
