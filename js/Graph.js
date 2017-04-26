class Graph{

  constructor(){

  }

  resetCanvas(){
    $('#myChart').remove(); // this is my <canvas> element
    $('#chartDiv').append('<div id="myChart" align="center" style ="overflow : scroll; height:100%; width:600px;"> <canvas id="chartArea"><canvas></div>');
  }
}
