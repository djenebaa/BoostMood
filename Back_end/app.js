const express = require('express');
const quoteRoutes = require('./routes/BoostmoodRoutes');
const quoteDataRoutes = require('./routes/QuoteDataRoutes');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require("dotenv").config();

app.use(cors()); // enable cross-origin requests

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
// *************Connection to MongoDB*************
mongoose.connect(process.env.DB_MANGOO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connexion à MongoDB réussie !"))
.catch((error) => console.log("Connexion à MongoDB échouée !", error));
 // *************
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/quotes', quoteRoutes);
app.use('/quotes', quoteDataRoutes);


module.exports = app;