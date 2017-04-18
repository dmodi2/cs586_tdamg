class GraphFactory{

  constructor(graphType){
    this.graphType = graphType
  }

  getChartInstance(){

    if(this.graphType == "Bar"){
      var graph = new Bar
    }else if(this.graphType == "Line"){
      var graph = new Line
    }else if(this.graphType == "Pivot"){
      var graph = new Pivot
    }else if(this.graphType == "Stacked"){
      var graph = new Stacked
    }else if(this.graphType == "Pie"){
      var graph = new Pie
    }else{
      console.log("No chart selected")
    }

    return graph
  }
}
