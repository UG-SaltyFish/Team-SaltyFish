var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const path = require('path')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = "mongodb+srv://Aneesh97:Mufcwazza1997@clusteraneesh.puusf.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(
    mongoURI,
    { useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: "It_project" }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))
require('./models/user.js');
require('./models/profile.js');

const routes = require('./routes/router.js');
const fileRoutes = require('./routes/file-upload.js');
app.use('/', routes);
app.use('/', fileRoutes);

app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(path.join(__dirname, 'client/build')));


app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}