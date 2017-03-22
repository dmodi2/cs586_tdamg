var express = require('express');
var router = express.Router();
const DataFrame = require('dataframe-js').DataFrame;

var dcb_df = DataFrame.fromCSV('https://data.cityofchicago.org/api/views/6iiy-9s97/rows.csv');

//Example: http://localhost:3000/dcb/
router.get('/', function(req, res, next) {
  dcb_df.then(
    df => {
      var df_filtered = df.toCollection();
      res.json({ "count": df_filtered.length, "values" : df_filtered });
    }
  ).catch(err => {
    console.log(err);
  });
});

//Example: http://localhost:3000/dcb/select?service_date=03%2F02%2F2016
router.get('/select', function(req, res, next) {
  dcb_df.then(
    df => {
      var df_filtered = df.filter(row => row.get('service_date') == req.query.service_date).toCollection();
      res.json({ "count": df_filtered.length, "values" : df_filtered });
    }
  ).catch(err => {
    console.log(err);
  });
});

//Example: http://localhost:3000/dcb/sum?column=total_rides
router.get('/sum', function(req, res, next) {
  dcb_df.then(
    df => {
      res.json({ "result": df.stat.sum(req.query.column) });
    }
  ).catch(err => {
    console.log(err);
  });
});

//Example: http://localhost:3000/dcb/max?column=rail_boardings
router.get('/max', function(req, res, next) {
  dcb_df.then(
    df => {
      res.json({ "result": df.stat.sum(req.query.column) });
    }
  ).catch(err => {
    console.log(err);
  });
});

//Example: http://localhost:3000/dcb/min?column=rail_boardings
router.get('/min', function(req, res, next) {
  dcb_df.then(
    df => {
      res.json({ "result": df.stat.sum(req.query.column) });
    }
  ).catch(err => {
    console.log(err);
  });
});

//Example: http://localhost:3000/dcb/count
router.get('/count', function(req, res, next) {
  dcb_df.then(
    df => {
      res.json({ "count": df.count()});
    }
  ).catch(err => {
    console.log(err);
  });
});

module.exports = router;
