
var DataFrame = dfjs.DataFrame

function load() {
  DataFrame.fromCSV('data/crdbt.csv').then(
    df => {
      var myTableDiv = document.getElementById("metric_results")
      var table = document.createElement('TABLE')
      var tableBody = document.createElement('TBODY')

      table.border = '1'
      table.appendChild(tableBody)

      var colsRaw = df.listColumns()
      var columns = new Array();

      for (i = 0; i < colsRaw.length; i++) {
        columns[i] = new Column(colsRaw[i], colsRaw[i], i)
      }

      var data = df.toArray()

      var dataframe = new Dataframe(columns, data)

      //TABLE COLUMNS
      var tr = document.createElement('TR')
      tableBody.appendChild(tr)
      for (i = 0; i < dataframe.columns.length; i++) {
        var th = document.createElement('TH')
        th.width = '75';
        th.appendChild(document.createTextNode(dataframe.columns[i].title.id));
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
    }
  )
}
