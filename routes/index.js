var express = require('express');
var router = express.Router();
const partySchema = require('../models/party.js')
const stallSchema = require('../models/stall.js')
const expensesSchema = require('../models/expenses.js')
const eventSchema = require('../models/events.js')
const paymentSchema = require('../models/payment.js')
const stallTypeSchema = require('../models/stallType.js')





/* GET admin login page. */
router.get('/', function(req, res) {
  res.render('home');
});

/* GET stallType page. */
router.get('/stallType', function(req, res) {
  res.render('stallType');
});

/* GET home page. */
router.get('/admin', function(req, res) {
  res.render('index');
});

/* GET payment page. */
router.get('/payment/:id', function(req, res) {
  stallSchema.findOne({_id:req.params.id},(err,data) =>{
    if (err) console.log(err);
    else{
      console.log(data);
    res.render('payment', { "stall" : data });
  }
  })
});

/* GET expenses page. */
router.get('/expenses', function(req, res) {
  paymentSchema.find({},(err, data) => {
    if (err) console.log(err);
    else{
    res.render('displayExpenses', { "payment" : data });
  }
});  

});

/* GET addExpenses page. */
router.get('/addExpenses', function(req, res) {
  res.render('addExpenses');
});


/* GET moneyReceiptPage page. */
router.get('/moneyReceiptPage', function(req, res) {
  res.render('moneyReceiptPage');
});


/* GET updateExpenses page. */
router.get('/updateExpenses/:id', function(req, res) {
  expensesSchema.findOne({_id:req.params.id},(err,data) =>{
    if (err) console.log(err);
    else{
      console.log(data);
    res.render('updateExpenses', { "expenses" : data });
  }
  })
});



//GET stall allocation page
router.get('/addStall/:name', function(req, res) {
res.render('stall',{name:req.params.name});
});

//GET addNewStall page
router.get('/addNewStall', function(req, res) {
  res.render('addNewStall');
      
});


//GET updatePartyForm

router.get('/updateParty/:id', function(req, res) {
  partySchema.find({_id:req.params.id},(err,data) =>{
    if (err) console.log(err);
    else{
      console.log(data);
    res.render('updatePartyForm', { "party" : data });
  }
  });
  });

//GET updateStallForm

router.get('/updateStall/:id', function(req, res) {
  stallSchema.find({_id:req.params.id},(err,data) =>{
    if (err) console.log(err);
    else{
    res.render('updateStallForm', { "stall" : data });
  }
  });
  });

router.get('/stallAllocation/:name', function(req, res) {
  stallSchema.find({name:req.params.name},(err, data) => {
    if (err) console.log(err);
    else{
    res.render('displayStall', { "stall" : data });
  }
  
})
});





//GET Display page

router.get('/display', function(req, res) {
  partySchema.find({},(err, data) => {
    if (err) console.log(err);
    else{
    res.render('display', { "party" : data });
  }
});  

});

//GET stallAllocation page

router.get('/allStalls', function(req, res) {
  stallSchema.find({},(err, data) => {
    if (err) console.log(err);
    else{
    eventSchema.find({},(err, data1) => {
      if (err) console.log(err);
      else{
        partySchema.find({},(err, data2) => {
          if (err) console.log(err);
          else{
            stallTypeSchema.find({},(err,data3) => {
              if (err) console.log(err);
              else{
                res.render('stallAllocation', {"stall" : data, "event" : data1, "party" : data2, "stallType" : data3});

              }
            });
          }
        });
      }
    });
  }
});  

});

//GET collections page

router.get('/collections', function(req, res) {
  stallSchema.find({},(err, data) => {
    if (err) console.log(err);
    else{
    res.render('collections', { "stall" : data });
  }
});  

});

//GET partyLedger page

router.get('/partyLedger', function(req, res) {
  partySchema.find({},(err, data) => {
    if (err) console.log(err);
    else{
    res.render('partyLedger', { "party" : data });
  }
});  

});



/* GET party page */

router.get('/party', function(req, res) {
    res.render('party');
        
});

/* GET eventMaster page */

router.get('/eventMaster', function(req, res) {
  res.render('eventMaster');
      
});

/* GET moneyReceipt page */

router.get('/moneyReceipt', function(req, res) {
  res.render('moneyReceipt');
      
});


//print receipt

router.get('/test', function(req, res) {
  res.render('test');
});
//GET login Page
router.post('/login', function(req, res) {
  if(req.body.username === "admin@xyz.com" && req.body.password === "admin"){
    res.redirect('/display');
  } else {
    res.redirect('/');
  }
    
});


/* GET party details*/

router.post('/party', function(req, res) {
  let newParty = new partySchema(req.body);
  newParty.save()
    .then(res.redirect('/party'))
    .catch((err) => console.log(err))
});

/* GET event details*/

router.post('/eventMaster', function(req, res) {
  console.log(req.body);
  let newEvent = new eventSchema(req.body);
  newEvent.save()
    .then(res.redirect('/eventMaster'))
    .catch((err) => console.log(err))
});

/* GET moneyReceipt details*/

router.post('/moneyReceipt', function(req, res) {
  console.log(req.body);
  let newMoneyReceipt = new paymentSchema(req.body);
  newMoneyReceipt.save()
    .then(res.redirect('/moneyReceiptPage'))
    .catch((err) => console.log(err))
});


//GET stall details

router.post('/addStall', function(req, res) {
  console.log(req.body);
  let newStall = new stallSchema(req.body);
  newStall.save()
    .then(res.redirect('/display'))
    .catch((err) => console.log(err))
});

/* GET stallType details*/

router.post('/stallType', function(req, res) {
  let newStallType = new stallTypeSchema(req.body);
  newStallType.save()
    .then(res.redirect('/allStalls'))
    .catch((err) => console.log(err))
});

//GET addNewstall details

router.post('/addNewStall', function(req, res) {
  console.log(req.body);
  let addNewStall = new stallSchema(req.body);
  addNewStall.save()
    .then(res.redirect('/allStalls'))
    .catch((err) => console.log(err))
});

//GET expenses details

router.post('/addExpenses', function(req, res) {
  let newExpenses = new expensesSchema(req.body);
  newExpenses.save()
    .then(res.redirect('/expenses'))
    .catch((err) => console.log(err))
});

//DELETE party row

router.get('/deleteParty/:id', function(req, res, next){
  
  var query = { _id: req.params.id };
  partySchema.find(query,(err,data) =>{
    if (err) console.log(err);
    var vendorName = data[0].name;
    stallSchema.deleteMany({name:vendorName}, (err,data) =>{

    

    partySchema.deleteOne(query, function (err, result) {

      if (err) {
  
          console.log("error query");
  
      }

  res.redirect('/partyLedger')
    })
    })
})
});

//DELETE stall row

router.get('/deleteStall/:id', function(req, res, next){
  
  var query = { _id: req.params.id };
  stallSchema.find({_id:req.params.id},(err,data) =>{
    
    stallSchema.deleteOne(query, function (err, result) {

      if (err) {
  
          console.log("error query");
  
      }
  res.redirect('/stallAllocation/'+data[0].name+'')
})
})
});

//DELETE expenses row

router.get('/deleteExpenses/:id', function(req, res, next){
  
  var query = { _id: req.params.id };
  expensesSchema.find({_id:req.params.id},(err,data) =>{
    
    expensesSchema.deleteOne(query, function (err, result) {

      if (err) {
  
          console.log("error query");
  
      }
  res.redirect('/expenses/')
})
})
});



//UPDATE party row

router.post('/updateParty/:id', function(req,res) {
  
  var myquery = { _id:req.params.id };
  var newvalues = req.body;
  var name='';
  
  partySchema.find(myquery, (err,data) => {
    var name=data[0].name;
    partySchema.updateOne(myquery, newvalues, function(err) {
      if (err) throw err;
      else{

        stallSchema.updateMany({name:name},{name:req.body.name},()=>{
          res.redirect('/partyLedger');
        })


    }}



  )}






  );
});

//UPDATE stall row

router.post('/updateStall/:id', function(req,res) {
  
  var myquery = { _id:req.params.id };
  var newvalues = req.body;
  stallSchema.updateOne(myquery, newvalues, function(err) {
    if (err) throw err;
    else{
      console.log(newvalues)
      res.redirect('/stallAllocation/'+newvalues.name+'');
    }
    });
});



//POST payment

router.post('/payment/:id', (req, res) => {
  // Checks if the eventID is a valid event ID
    stallSchema.findOne({ _id:req.params.id}, (err, stall) => {
      stall.paid.push(req.body.paid)
      stall.save((err, data) => {
        if (err) {
          console.log(err);
          res.send("F");
        }
        else {
          res.redirect('/collections');
        }
      });
    });
});

//POST updateExpenses

router.post('/updateExpenses/:id', (req, res) => {
    expensesSchema.findOne({ _id:req.params.id}, (err, expenses) => {
      expenses.expenses.push(req.body.expenses)
      expenses.save((err, data) => {
        if (err) {
          console.log(err);
          res.send("F");
        }
        else {
          res.redirect('/expenses');
        }
      });
    });
});

module.exports = router;
