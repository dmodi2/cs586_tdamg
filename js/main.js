function visualize() {
  document.getElementById('dataset-div').style.visibility = 'visible'
  document.getElementById('chartSelection').style.visibility = 'visible'
  document.getElementById('chartDiv').style.visibility = 'visible'
  console.log("in visualize()")
}

function loadDatasetMain(){

  console.log("in loadDatasetMain() 1")
  var dashboard = new Dashboard()
  var selectDataset = document.getElementById('datasetSelect')
  var sd = selectDataset.options[selectDataset.selectedIndex].value;
  console.log(sd)
  dashboard.loadDataset(sd)
  console.log("in loadDatasetMain() 4")
}

function plotChart() {
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