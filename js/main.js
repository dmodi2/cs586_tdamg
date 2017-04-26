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
  selectedGraph.plotGraph(x_axis_value, y_axis_value, sd)
}

function showCol(){

  document.getElementById('x_axis_col').style.visibility = 'visible'
  document.getElementById('y_axis_col').style.visibility = 'visible'
  //get chart type and dataset type
  var selectChart = document.getElementById('graph_type');
  var sc = selectChart.options[selectChart.selectedIndex].value
  var selectDataset = document.getElementById('datasetSelect');
  var sd = selectDataset.options[selectDataset.selectedIndex].value
  var br = document.createElement("br")

  if(sc == 'Bar'){
      if(sd == 'ds1'/*Daily CTA boarding*/){
        var x_axis_array = ['day_type']
        var x_axis_array_text = ['Day Type']

        var y_axis_array = ['total_rides', 'bus', 'rail_boardings']
        var y_axis_array_text = ['Total Rides', 'Bus', 'Rail Boardings']
      }
      if(sd == 'ds3'/*CTA_Ridership_L_Station.csv*/){
        var x_axis_array = ['daytype', 'stationname']
        var x_axis_array_text = ['Day Type', 'Station Name']

        var y_axis_array = ['rides']
        var y_axis_array_text = ['Rides']
      }
      if(sd == 'ds4'/*Average Daily Traffic count:*/){
        var x_axis_array = ['Street', 'Traffic Volume Count Location  Address']
        var x_axis_array_text = ['Street', 'Location Address']

        var y_axis_array = ['Total Passing Vehicle Volume']
        var y_axis_array_text = ['Total Passing Vehicle Volume']
      }
      if(sd == 'ds5'/*Red_Light_Camera_Violations.csv*/){
        var x_axis_array = ['INTERSECTION', 'ADDRESS']
        var x_axis_array_text = ['Intersection', 'Address']

        var y_axis_array = ['VIOLATIONS']
        var y_axis_array_text = ['Violations']
      }
      if(sd == 'ds6'/*Divy Stations*/){
        var x_axis_array = ['Station Name', 'Address']
        var x_axis_array_text = ['Station Name', 'Address']

        var y_axis_array = ['Total Docks', 'Docks in Service']
        var y_axis_array_text = ['Total Docks', 'Docks in Service']
      }
  } else if(sc == 'Line'){

      if(sd == 'ds1'/*Daily CTA boarding*/){
        var x_axis_array = ['day_type']
        var x_axis_array_text = ['Day Type']

        var y_axis_array = ['total_rides', 'bus', 'rail_boardings']
        var y_axis_array_text = ['Total Rides', 'Bus', 'Rail Boardings']
      }
      if(sd == 'ds3'/*CTA_Ridership_L_Station.csv*/){
        var x_axis_array = ['daytype', 'stationname']
        var x_axis_array_text = ['Day Type', 'Station Name']

        var y_axis_array = ['rides']
        var y_axis_array_text = ['Rides']
      }
      if(sd == 'ds4'/*Average Daily Traffic count:*/){
        var x_axis_array = ['Date of Count']
        var x_axis_array_text = ['Date of Count']

        var y_axis_array = ['Total Passing Vehicle Volume']
        var y_axis_array_text = ['Total Passing Vehicle Volume']
      }
      if(sd == 'ds5'/*Red_Light_Camera_Violations.csv*/){
        var x_axis_array = ['INTERSECTION', 'ADDRESS']
        var x_axis_array_text = ['Intersection', 'Address']

        var y_axis_array = ['VIOLATIONS']
        var y_axis_array_text = ['Violations']
      }
      if(sd == 'ds6'/*Divy Stations*/){
        var x_axis_array = ['Station Name', 'Address']
        var x_axis_array_text = ['Station Name', 'Address']

        var y_axis_array = ['Total Docks', 'Docks in Service']
        var y_axis_array_text = ['Total Docks', 'Docks in Service']
      }
  }else if(sc == 'Pie'){
      if(sd == 'ds1'/*Daily CTA boarding*/){
        var x_axis_array = ['day_type']
        var x_axis_array_text = ['Day Type']

        var y_axis_array = ['total_rides', 'bus', 'rail_boardings']
        var y_axis_array_text = ['Total Rides', 'Bus', 'Rail Boardings']
      }
      if(sd == 'ds3'/*CTA_Ridership_L_Station.csv*/){
        var x_axis_array = ['daytype', 'stationname']
        var x_axis_array_text = ['Day Type', 'Station Name']

        var y_axis_array = ['rides']
        var y_axis_array_text = ['Rides']
      }
      if(sd == 'ds4'/*Average Daily Traffic count:*/){
        var x_axis_array = ['Street', 'Traffic Volume Count Location  Address']
        var x_axis_array_text = ['Street', 'Location Address']

        var y_axis_array = ['Total Passing Vehicle Volume']
        var y_axis_array_text = ['Total Passing Vehicle Volume']
      }
      if(sd == 'ds5'/*Red_Light_Camera_Violations.csv*/){
        var x_axis_array = ['INTERSECTION', 'ADDRESS']
        var x_axis_array_text = ['Intersection', 'Address']

        var y_axis_array = ['VIOLATIONS']
        var y_axis_array_text = ['Violations']
      }
      if(sd == 'ds6'/*Divy Stations*/){
        var x_axis_array = ['Station Name', 'Address']
        var x_axis_array_text = ['Station Name', 'Address']

        var y_axis_array = ['Total Docks', 'Docks in Service']
        var y_axis_array_text = ['Total Docks', 'Docks in Service']
      }
  }else if(sc == 'Polar'){
      //pending
      if(sd == 'ds1'/*Daily CTA boarding*/){
      }
      if(sd == 'ds4'/*Average Daily Traffic count:*/){
      }
      if(sd == 'ds6'/*Divy Stations*/){
      }
  }else if(sc == 'Donut'){
      //pending
      if(sd == 'ds1'/*Daily CTA boarding*/){
      }
      if(sd == 'ds4'/*Average Daily Traffic count:*/){
      }
      if(sd == 'ds6'/*Divy Stations*/){
      }
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
