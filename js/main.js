class Main{

visualize() {
  document.getElementById('dataset-div').style.visibility = 'visible'
  document.getElementById('chartSelection').style.visibility = 'visible'
}

loadDatasetMain(){

  var dashboard = new Dashboard()

  document.getElementById("chartSelectParent").innerHTML = document.getElementById('blockOfStuff').innerHTML;

  $('#myChart').remove(); // this is my <canvas> element
  $('#chartDiv').append('<div id="myChart" align="center" style ="visibility: hidden; overflow : scroll; height:100%; width:600px;"> <canvas id="chartArea"><canvas></div>');

  $('#myStatshart').remove(); // this is my <canvas> element
  $('#myStatshartLbl').remove();
  $('#statsDiv').append('<div id="myStatshart" align="center" style ="visibility: hidden; overflow : scroll; height:100%; width:600px;"><div id="myStatshartLbl" align="center"><p>Statistic Graph</p></div><canvas id="statsChartArea"><canvas></div>');

  var selectDataset = document.getElementById('datasetSelect');
  var sd = selectDataset.options[selectDataset.selectedIndex].value
  dashboard.loadDataset(sd)
}

plotChart() {

  //get chart param
  var graphType = document.getElementById('graph_type');
  var graphTypeValue = graphType.options[graphType.selectedIndex].value
  var x_axis = document.getElementById('x_axis');
  var x_axis_value = x_axis.options[x_axis.selectedIndex].value
  if(graphTypeValue == 'Stacked'){
    var y_axis_array = []
    var selectedCol = document.getElementsByClassName('y_axis');
    var j = 0
    for(var i=0; selectedCol[i]; i++){
      if(selectedCol[i].checked){
        y_axis_array[j] = selectedCol[i].value
        j++
      }
    }
  }else{
    var y_axis = document.getElementById('y_axis');
    var y_axis_value = y_axis.options[y_axis.selectedIndex].value
  }

  var selectDataset = document.getElementById('datasetSelect');
  var sd = selectDataset.options[selectDataset.selectedIndex].value

  //Get file for selected dataste
  var file
  if(sd == 'ds1'){
    file = "data/crdbt.csv"
  }else if(sd == 'ds3'){
    file = "data/CTA_Ridership_L_Station.csv"
  }else if(sd == 'ds4'){
    file = "data/Average_Daily_Traffic_Counts.csv"
  }else if(sd == 'ds5'){
    file = "data/Red_Light_Camera_Violations.csv"
  }else if(sd == 'ds6'){
    file = "data/Divvy_Bicycle_Stations.csv"
  }else{
    console.log("No file selcted")
  }

  //Example showing how to use GraphFactory.
  var chartFac = new GraphFactory(graphTypeValue)
  var selectedGraph = chartFac.getChartInstance(file)
  selectedGraph.resetCanvas()

  var x_filter = [ ]
  var y_filter = 0
  var x = document.getElementById("select_column_values")

  if(x!=null){
    for (var i = 0; i < x.options.length; i++) {
      if(x.options[i].selected ==true) {
        x_filter.push(x.options[i].value)
      }
    }
    y_filter = document.getElementById('col_value').value

    var operator = document.getElementById('operator')
    var sc = operator.options[operator.selectedIndex].value

    var isFilter = true

    if(sc == "Dataframe.gt")
      var filtFunc = Dataframe.gt
    else if(sc == "Dataframe.lt")
      var filtFunc = Dataframe.lt
    else if(sc == "Dataframe.eq")
      var filtFunc = Dataframe.eq
  }
  else {
    var isFilter = false
  }

  if(graphTypeValue == 'Stacked') {
    selectedGraph.plotGraph(x_axis_value, y_axis_array, 0, Dataframe.strIn, 0, Dataframe.gt, isFilter)
  }else{
    selectedGraph.plotGraph(x_axis_value, y_axis_value, x_filter, Dataframe.strIn, y_filter, filtFunc, isFilter)
  }
}

showCol(){

  document.getElementById('x_axis_col').innerHTML = ""
  document.getElementById('y_axis_col').innerHTML = ""
  document.getElementById('x_axis_col').style.visibility = 'visible'
  document.getElementById('y_axis_col').style.visibility = 'visible'
  //get chart type and dataset type
  var selectChart = document.getElementById('graph_type');
  var sc = selectChart.options[selectChart.selectedIndex].value
  var selectDataset = document.getElementById('datasetSelect');
  var sd = selectDataset.options[selectDataset.selectedIndex].value
  var br = document.createElement("br")

  if(sd == 'ds1'/*Daily CTA boarding*/){
    var x_axis_array = ['X-Axis', 'service_date', 'day_type', 'bus', 'rail_boardings', 'total_rides']
    var x_axis_array_text = ['X-Axis', 'Service Date', 'Day Type', 'Bus', 'Rail Boardings', 'Total Rides']
  }
  if(sd == 'ds3'/*CTA_Ridership_L_Station.csv*/){
    var x_axis_array = ['X-Axis', 'station_id', 'stationname', 'date', 'daytype', 'rides']
    var x_axis_array_text = ['X-Axis', 'Station ID', 'Station Name', 'Date', 'Day Type', 'Rides']
  }
  if(sd == 'ds4'/*Average Daily Traffic count:*/){
    var x_axis_array = ['X-Axis', 'ID', 'Traffic Volume Count Location  Address', 'Street',  'Date of Count', 'Total Passing Vehicle Volume', 'Vehicle Volume By Each Direction of Traffic', 'Latitude', 'Longitude', 'Location']
    var x_axis_array_text = ['X-Axis', 'ID', 'Location  Address', 'Street',  'Date of Count', 'Total Passing Vehicle Volume', 'Vehicle Volume', 'Latitude', 'Longitude', 'Location']
  }
  if(sd == 'ds5'/*Red_Light_Camera_Violations.csv*/){
    var x_axis_array = ['X-Axis', 'INTERSECTION', 'CAMERA ID', 'ADDRESS', 'VIOLATION DATE', 'VIOLATIONS', 'X COORDINATE', 'Y COORDINATE', 'LATITUDE', 'LONGITUDE', 'LOCATION']
    var x_axis_array_text = ['X-Axis', 'Intersection', 'Camera Id', 'Address', 'Violation Date', 'Violations', 'X Coordinate', 'Y Coordinate', 'Latitude', 'Longitude', 'Location']
  }
  if(sd == 'ds6'/*Divy Stations*/){
    var x_axis_array = ['X-Axis', 'ID', 'station_name', 'Address', 'total_docks', 'docks_in_service', 'Status', 'Latitude', 'Longitude', 'Location']
    var x_axis_array_text = ['X-Axis', 'ID', 'Station Name', 'Address', 'Total Docks', 'Docks in Service', 'Status', 'Latitude', 'Longitude', 'Location']
  }

      var y_axis_array = x_axis_array.slice()
      var y_axis_array_text = x_axis_array_text.slice()
      y_axis_array[0] = 'Y-Axis'
      y_axis_array_text[0] = 'Y-Axis'

      var x_axis_col = document.getElementById("x_axis_col")
      //Create and append select list
      var selectList = document.createElement("select")
      selectList.className = "form-control"
      selectList.id = "x_axis"
      x_axis_col.appendChild(selectList)

      //Create and append the options
      for (var i = 0; i < x_axis_array.length; i++) {
        var option = document.createElement("option")
        option.value = x_axis_array[i]
        option.text = x_axis_array_text[i]
        selectList.appendChild(option)
      }

      if(sc == 'Stacked'){

        var y_axis_col = document.getElementById("y_axis_col")
        var text = document.createTextNode('Y-Axis (numeric values allowed)')
        y_axis_col.appendChild(text)
        y_axis_col.appendChild(br)

        for (var i = 1; i < y_axis_array.length; i++) {
          var br = document.createElement('br')
          var checkbox = document.createElement('input')
          checkbox.setAttribute('type', 'checkbox')
          checkbox.setAttribute('value', y_axis_array[i])
          checkbox.setAttribute('class', 'y_axis')
          var text1 = document.createTextNode(' ' + y_axis_array_text[i]);
          y_axis_col.appendChild(checkbox)
          y_axis_col.appendChild(text1)
          y_axis_col.appendChild(br)
        }
      }else{

        var y_axis_col = document.getElementById("y_axis_col")
        //Create and append select list
        var selectList = document.createElement("select")
        selectList.className = "form-control"
        selectList.id = "y_axis"
        y_axis_col.appendChild(selectList)

        //Create and append the options
        for (var i = 0; i < y_axis_array.length; i++) {
          var option = document.createElement("option")
          option.value = y_axis_array[i]
          option.text = y_axis_array_text[i]
          selectList.appendChild(option)
        }
      }
   }

   showAdvanceChartOption(){

     var selectDataset = document.getElementById('datasetSelect');
     var sd = selectDataset.options[selectDataset.selectedIndex].value
     var x_axis = document.getElementById('x_axis');
     var x_axis_value = x_axis.options[x_axis.selectedIndex].value
     var y_axis = document.getElementById('y_axis');
     var y_axis_value = y_axis.options[y_axis.selectedIndex].value

     var dashboard = new Dashboard()
     dashboard.getValueForColumns(x_axis_value, y_axis_value, sd)

   }
}
