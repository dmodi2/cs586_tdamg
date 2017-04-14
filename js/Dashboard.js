class Dashboard {

  loadDataset(selectDataset){

  document.getElementById('dataset-div').style.visibility = 'visible'
  document.getElementById('chartSelection').style.visibility = 'hidden'
  document.getElementById('chartDiv').style.visibility = 'hidden'

  var DataFrame = dfjs.DataFrame
  console.log(selectDataset)
  var file = "data/crdbt.csv"

  DataFrame.fromCSV('data/crdbt.csv').then(
    df => {
      var myTableDiv = document.getElementById("dataset")
      var table = document.createElement('TABLE')
      var tableBody = document.createElement('TBODY')

      table.border = '1'
      table.appendChild(tableBody)

      var colsRaw = df.listColumns()
      var columns = new Array();
      var i
      var j
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
    }
   )
  }
}
