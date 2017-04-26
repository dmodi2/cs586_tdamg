class GraphFactory{

  constructor(graphType){
    this.graphType = graphType
  }

  getChartInstance(file){

    if(this.graphType == "Bar"){
      var graph = new Bar(file)
    }else if(this.graphType == "Line"){
      var graph = new Line(file)
    }else if(this.graphType == "Polar"){
      var graph = new Polar(file)
    }else if(this.graphType == "Doughnut"){
      var graph = new Doughnut(file)
    }else if(this.graphType == "Pie"){
      var graph = new Pie(file)
    }else{
      console.log("No chart selected")
    }
    return graph
  }
}
