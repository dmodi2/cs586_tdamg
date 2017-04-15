function visualize() {
  document.getElementById('dataset-div').style.visibility = 'visible'
  document.getElementById('chartSelection').style.visibility = 'visible'
  document.getElementById('chartDiv').style.visibility = 'visible'
}

function loadDatasetMain(){

  var dashboard = new Dashboard()
  var selectDataset = document.getElementById('datasetSelect')
  var sd = selectDataset.options[selectDataset.selectedIndex].value;
  dashboard.loadDataset(sd)
}
