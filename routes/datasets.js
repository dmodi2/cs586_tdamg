var express = require('express');
var router = express.Router();

/* List datasets supported */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.json({ "datasets":
  [
    { id: "dcb", name : "Daily CTA boarding" },
    { id: "rbr", name : "Ridership by bus route" },
    { id: "rblr", name : "Ridership by ‘L’ route" },
    { id: "adtc", name : "Average Daily Traffic count" },
    { id: "rlcv", name : "Red Light camera violations" },
    { id: "dbs", name : "Divy Bicycle Stations" }
  ]
});
});

module.exports = router;
