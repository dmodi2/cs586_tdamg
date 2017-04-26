function visualize() {
  document.getElementById('dataset-div').style.visibility = 'visible'
  document.getElementById('chartSelection').style.visibility = 'visible'
  //document.getElementById('chartDiv').style.visibility = 'visible'
}

function loadDatasetMain(){

  var dashboard = new Dashboard()
  var selectDataset = document.getElementById('datasetSelect');
  var sd = selectDataset.options[selectDataset.selectedIndex].value
  dashboard.loadDataset(sd)
}

function plotChart() {

  //get chart param
  var graphType = document.getElementById('graph_type');
  var graphTypeValue = graphType.options[graphType.selectedIndex].value
  var x_axis = document.getElementById('x_axis');
  var x_axis_value = x_axis.options[x_axis.selectedIndex].value
  var y_axis = document.getElementById('y_axis');
  var y_axis_value = y_axis.options[y_axis.selectedIndex].value

  var selectDataset = document.getElementById('datasetSelect');
  var sd = selectDataset.options[selectDataset.selectedIndex].value

  //Example showing how to use GraphFactory.
  var chartFac = new GraphFactory(graphTypeValue)
  var selectedGraph = chartFac.getChartInstance()
  selectedGraph.resetCanvas()
  selectedGraph.plotGraph(x_axis_value, y_axis_value, sd)
}

function showCol(){

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
    var x_axis_array = ['X-Axis', 'day_type']
    var x_axis_array_text = ['X-Axis', 'Day Type']

    var y_axis_array = ['Y-Axis', 'total_rides', 'bus', 'rail_boardings']
    var y_axis_array_text = ['Y-Axis', 'Total Rides', 'Bus', 'Rail Boardings']
  }
  if(sd == 'ds3'/*CTA_Ridership_L_Station.csv*/){
    var x_axis_array = ['X-Axis', 'daytype', 'stationname']
    var x_axis_array_text = ['X-Axis', 'Day Type', 'Station Name']

    var y_axis_array = ['Y-Axis', 'rides']
    var y_axis_array_text = ['Y-Axis', 'Rides']
  }
  if(sd == 'ds4'/*Average Daily Traffic count:*/){
    var x_axis_array = ['X-Axis', 'Street', 'Traffic Volume Count Location  Address']
    var x_axis_array_text = ['X-Axis', 'Street', 'Location Address']

    var y_axis_array = ['Y-Axis', 'Total Passing Vehicle Volume']
    var y_axis_array_text = ['Y-Axis','Total Passing Vehicle Volume']
  }
  if(sd == 'ds5'/*Red_Light_Camera_Violations.csv*/){
    var x_axis_array = ['X-Axis', 'INTERSECTION', 'ADDRESS']
    var x_axis_array_text = ['X-Axis', 'Intersection', 'Address']

    var y_axis_array = ['Y-Axis', 'VIOLATIONS']
    var y_axis_array_text = ['Y-Axis', 'Violations']
  }
  if(sd == 'ds6'/*Divy Stations*/){
    var x_axis_array = ['X-Axis', 'Station Name', 'Address']
    var x_axis_array_text = ['X-Axis', 'Station Name', 'Address']

    var y_axis_array = ['Y-Axis','Total Docks', 'Docks in Service']
    var y_axis_array_text = ['Y-Axis', 'Total Docks', 'Docks in Service']
  }

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
