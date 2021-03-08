// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();                        // create our app w/ express
    var mongoose = require('mongoose');              // mongoose for mongodb
    var morgan   = require('morgan');                // log requests to the console (express4)
    var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
    var database = require('./config/database');
    var port     = 3000;         // set the port
    var routes = require('./app/routes.js');
    const MongoClient = require('mongodb').MongoClient;
    var bodyParser = require("body-parser");

    var cors = require('cors');

// use it before all route definitions
// app.use(cors({origin: 'http://localhost:4200'}));

app.use(cors());
app.use(bodyParser.json());

    


    mongoose.connect(database.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected…")
    })
    .catch(err => console.log(err))


   
    require('./app/routes.js')(app);
   

    // app.use('/', routes);

    // listen (start app with node server.js) ======================================
    app.listen(port);
    console.log("App listening on port : " + port);


