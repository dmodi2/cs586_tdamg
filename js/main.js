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
      if(sd == 'ds2'/*Ridership by bus route*/){
      }
      if(sd == 'ds3'/*Ridership by bus route*/){
      }
      if(sd == 'ds4'/*Average Daily Traffic count:*/){
        var x_axis_array = ['Street', 'Traffic Volume Count Location  Address']
        var x_axis_array_text = ['Street', 'Location Address']

        var y_axis_array = ['Total Passing Vehicle Volume']
        var y_axis_array_text = ['Total Passing Vehicle Volume']
      }
      if(sd == 'ds5'){
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
      if(sd == 'ds2'){
      }
      if(sd == 'ds3'){
      }
      if(sd == 'ds4'){
        var x_axis_array = ['date']
        var x_axis_array_text = ['Date']

        var y_axis_array = ['Total Passing Vehicle Volume']
        var y_axis_array_text = ['Total Passing Vehicle Volume']
      }
      if(sd == 'ds5'){
      }
      if(sd == 'ds6'){
      }
  }else if(sc == 'Pie'){
      if(sd == 'ds1'){
        var x_axis_array = ['day_type']
        var x_axis_array_text = ['Day Type']

        var y_axis_array = ['total_rides', 'bus', 'rail_boardings']
        var y_axis_array_text = ['Total Rides', 'Bus', 'Rail Boardings']
      }
      if(sd == 'ds2'){
      }
      if(sd == 'ds3'){
      }
      if(sd == 'ds4'){
      }
      if(sd == 'ds5'){
      }
  }else if(sc == 'Stacked'){
      if(sd == 'ds1'){
        var x_axis_array = ['day_type']
        var x_axis_array_text = ['Day Type']

        var y_axis_array = ['bus', 'rail_boardings']
        var y_axis_array_text = ['Bus', 'Rail Boardings']
      }
      if(sd == 'ds2'){
      }
      if(sd == 'ds3'){
      }
      if(sd == 'ds4'){
        var x_axis_array = ['Street']
        var x_axis_array_text = ['Street']

        var y_axis_array = ['Traffic Volume Count Location  Address', 'Total Passing Vehicle Volume']
        var y_axis_array_text = ['Location Address', 'Rail Total Passing Vehicle Volume']
      }
      if(sd == 'ds5'){
      }
      var x_axis_col = document.getElementById("x_axis_col")
      //Create and append select list
      var text = document.createTextNode('X-Axis');
      var selectList = document.createElement("select")
      selectList.id = "x_axis"
      document.getElementsByTagName("select")[0].setAttribute("class", "form-control")
      x_axis_col.appendChild(text)
      x_axis_col.appendChild(selectList)
      //Create and append the options
      for (var i = 0; i < x_axis_array.length; i++) {
        var option = document.createElement("option")
        option.value = x_axis_array[i]
        option.text = x_axis_array_text[i]
        selectList.appendChild(option)
      }

      var y_axis_col = document.getElementById("y_axis_col")
      var text = document.createTextNode('Y-Axis');
      y_axis_col.appendChild(text)

      for (var i = 0; i < y_axis_array.length; i++) {
        var br = document.createElement('br')
        var checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('value', y_axis_array[i])
        checkbox.setAttribute('id', 'y_axis')
        var text1 = document.createTextNode(y_axis_array_text[i]);
        y_axis_col.appendChild(checkbox)
        y_axis_col.appendChild(text1)
      }
      return

  }

      var x_axis_col = document.getElementById("x_axis_col")
      //Create and append select list
      var text = document.createTextNode('X-Axis');
      var selectList = document.createElement("select")
      selectList.id = "x_axis"
      document.getElementsByTagName("select")[0].setAttribute("class", "form-control")
      x_axis_col.appendChild(text)
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
      var text = document.createTextNode('Y-Axis');
      var selectList = document.createElement("select")
      selectList.id = "y_axis"
      document.getElementsByTagName("select")[0].setAttribute("class", "form-control")
      y_axis_col.appendChild(text)
      y_axis_col.appendChild(selectList)

      //Create and append the options
      for (var i = 0; i < y_axis_array.length; i++) {
        var option = document.createElement("option")
        option.value = y_axis_array[i]
        option.text = y_axis_array_text[i]
        selectList.appendChild(option)
      }

 }
