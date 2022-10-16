const mongoose = require('mongoose');

const db_url = process.env.DB_URL || 'mongodb://localhost:27017/';

mongoose.connect(db_url,{ useNewUrlParser: true }, function (err) { 
  if (err) throw err; console.log('Successfully connected'); });

module.exports = mongoose;