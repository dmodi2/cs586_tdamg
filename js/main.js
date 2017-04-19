function visualize() {
  document.getElementById('dataset-div').style.visibility = 'visible'
  document.getElementById('chartSelection').style.visibility = 'visible'
  document.getElementById('chartDiv').style.visibility = 'visible'
  console.log("in visualize()")
}

function loadDatasetMain(){

  console.log("in loadDatasetMain() 1")
  var dashboard = new Dashboard()
<<<<<<< HEAD
  var selectDataset = document.getElementById('datasetSelect')
  var sd = selectDataset.options[selectDataset.selectedIndex].value;
  console.log(sd)
=======
  var selectDataset = document.getElementById('datasetSelect');
  var sd = selectDataset.options[selectDataset.selectedIndex].value
>>>>>>> refs/remotes/origin/master
  dashboard.loadDataset(sd)
  console.log("in loadDatasetMain() 4")
}

function plotChart() {
  document.getElementById('dataset-div').style.visibility = 'visible'
  document.getElementById('chartSelection').style.visibility = 'visible'
  document.getElementById('chartDiv').style.visibility = 'visible'

<<<<<<< HEAD
  var DataFrame = dfjs.DataFrame
  DataFrame.fromCSV('data/crdbt.csv').then(
    df => {
      //Chart
      var selectedDf = df.select('day_type','total_rides')
      var result = selectedDf.groupBy('day_type').aggregate(group => group.stat.sum('total_rides')).rename('DayType', 'TotalRides');
=======
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
>>>>>>> refs/remotes/origin/master

      //console.log(result.select('aggregation').toArray())

      var ctx = document.getElementById("chartArea");
      //alert('ok')
      var myChart = new Chart(ctx, {
        type: 'bar',
        options: {
          legend: {
            display: false
          }
        },
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

<<<<<<< HEAD
function plotLineChart() {
  document.getElementById('dataset-div').style.visibility = 'visible'
  document.getElementById('chartSelection').style.visibility = 'visible'
  document.getElementById('chartDiv').style.visibility = 'visible'

  var DataFrame = dfjs.DataFrame
  DataFrame.fromCSV('data/crdbt.csv').then(
    df => {
      //Chart
      var selectedDf = df.select('day_type','total_rides')
      var result = selectedDf.groupBy('day_type').aggregate(group => group.stat.sum('total_rides')).rename('DayType', 'TotalRides');

      //console.log(result.select('aggregation').toArray())
	  //console.log(typeof(result.select('day_type').toArray()))
      
	  var a = result.select('aggregation').toArray()
	  	  
	  var b=[];
	  for (i=0;i<a.length;i++)
	  { 
		b[i] = a[i][0];
      }
	  
	  var ctx = document.getElementById("chartArea");
      //alert('ok')
      var myChart = new Chart(ctx, {
        type: 'line',
        options: {
          legend: {
            display: false
          }
        },
        data: {
          labels: result.select('day_type').toArray(),
		  datasets: [{
            label: 'Total Rides',
			fill: false,
			lineTension: 0.1,			
			backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
			showLine: true,
			data: b
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
              }
            }]
          }
        }
      });
    }
	
  )
}
=======
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
      if(sd == 'ds2'){
      }
      if(sd == 'ds3'){
      }
      if(sd == 'ds4'){
      }
      if(sd == 'ds5'){
      }
  } else if(sc == 'Line'){

      if(sd == 'ds1'/*Daily CTA boarding*/){
        var x_axis_array = ['service_date']
        var x_axis_array_text = ['Service Date']

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
>>>>>>> refs/remotes/origin/master
