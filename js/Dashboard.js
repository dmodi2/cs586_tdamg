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

    getValueForColumns(x_axis, y_axis, selectDataset){

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

      var value_array = []
      DataFrame.fromCSV(file).then(
          df => {
            var selectedDf = df.select(x_axis);
            var result = selectedDf.distinct(x_axis)
            var a = result.toArray()
            console.log(result.toArray());
        	  for (var i=0; i<a.length; i++)
        	  {
        			value_array[i] = a[i][0]
            }
            var adv_opt = document.getElementById("adv_opt_col")
            var text = document.createTextNode('Select ' + map[x_axis])
            var br = document.createElement("br")
            //Create and append select list
            var selectList = document.createElement("select")
            selectList.multiple = "multiple"
            selectList.className = "form-control"
            selectList.id = "select_column_values"
            adv_opt.appendChild(br)
            adv_opt.appendChild(text)
            adv_opt.appendChild(selectList)

            //Create and append the options
            for (var i = 0; i < value_array.length; i++) {
              var option = document.createElement("option")
              option.value = value_array[i]
              option.text = value_array[i]
              selectList.appendChild(option)
            }

            adv_opt.appendChild(br)
            text = document.createTextNode('Select ' + map[y_axis] + ' value: ')
            adv_opt.appendChild(text)
            var col_value_box = document.createElement('input')
            col_value_box.setAttribute('type', 'text')
            col_value_box.setAttribute('id', 'col_value')
            adv_opt.appendChild(col_value_box)

            document.getElementById('adv_opt_col').style.visibility = 'visible'
            text = document.createTextNode('Select condition: ')
            adv_opt.appendChild(br)
            adv_opt.appendChild(text)

            //Create and append select list
            var selectList = document.createElement("select")
            selectList.className = "form-control"
            selectList.id = "operator"
            adv_opt.appendChild(selectList)

            var option1 = document.createElement("option")
            option1.value = 'Dataframe.lt'
            option1.text = 'Less Than'
            selectList.appendChild(option1)

            var option2 = document.createElement("option")
            option2.value = 'Dataframe.eq'
            option2.text = 'Equal to'
            selectList.appendChild(option2)

            var option3 = document.createElement("option")
            option3.value = 'Dataframe.gt'
            option3.text = 'Greater Than'
            selectList.appendChild(option3)
          }
      )
    }
}
