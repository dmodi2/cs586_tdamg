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
