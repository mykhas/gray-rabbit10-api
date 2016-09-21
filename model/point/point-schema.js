const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const pointSchema = new Schema({
  title: { type: String, required: true },
  line:  { type: String },
  lat:   { type: Number },
  lon:   { type: Number },
  neighbors: { type: Array },
});


module.exports = mongoose.model('Point', pointSchema);
