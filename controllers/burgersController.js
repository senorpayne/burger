var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get('/', function(req,res){
res.redirect('/burgers');
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.create(['name','newburger'],
   
   [
    req.body.name, req.body.newburger
  ]
  
    // Send back the ID of the new quote
  )
});


router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    
      // If no rows were changed, then the ID must not exist, so 404
    res.redirect('/');
    } )
  });


// Export routes for server.js to use.
module.exports = router;