class Dashboard {

  loadDataset(selectDataset){
    document.getElementById("dataset").innerHTML = " ";
    var table = document.createElement('TABLE')
    document.getElementById('dataset-div').style.visibility = 'visible'


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
        var myTableDiv = document.getElementById("dataset")
        var tableBody = document.createElement('TBODY')

        table.border = '1'
        table.appendChild(tableBody)

        var colsRaw = df.listColumns()
        var columns = new Array();
        var i
        var j
        for (i = 0; i < colsRaw.length; i++) {
          console.log(colsRaw[i])
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
