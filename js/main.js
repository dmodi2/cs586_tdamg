
var DataFrame = dfjs.DataFrame

function load() {
  alert('ok');
  DataFrame.fromCSV('data/crdbt.csv').then(
    df => {
      var myTableDiv = document.getElementById("metric_results")
      var table = document.createElement('TABLE')
      var tableBody = document.createElement('TBODY')

      table.border = '1'
      table.appendChild(tableBody);

      var columns = df.listColumns()

      var heading = new Array();

      for (i = 0; i < columns.length; i++) {
        heading[i] = columns[i]
      }

      //TABLE COLUMNS
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
      for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.width = '75';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
      }

      var data = df.toArray()

      //TABLE ROWS
      for (i = 0; i < data.length; i++) {
        var tr = document.createElement('TR');
        for (j = 0; j < data[i].length; j++) {
          var td = document.createElement('TD')
          td.appendChild(document.createTextNode(data[i][j]));
          tr.appendChild(td)
        }
        tableBody.appendChild(tr);
      }
      myTableDiv.appendChild(table)
    }
  )
}
