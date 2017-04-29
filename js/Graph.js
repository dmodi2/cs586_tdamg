class Graph{

  constructor(file){
    this.file = file
  }

  resetCanvas(){
    $('#myChart').remove(); // this is my <canvas> element
    $('#chartDiv').append('<div id="myChart" align="center" style ="overflow : scroll; height:100%; width:600px;"> <canvas id="chartArea"><canvas></div>');

    $('#myStatshart').remove(); // this is my <canvas> element
    $('#statsDiv').append('<div id="myStatshart" align="center" style ="overflow : scroll; height:100%; width:600px;"><div id="myStatshartLbl" align="center"><p>Statistic Graph</p></div> <canvas id="statsChartArea"><canvas></div>');
  }
}
