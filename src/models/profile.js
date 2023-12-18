const { Schema, model } = require('mongoose');

const schemaProfile = new Schema({
  vorname: {
    type: String
  },
  geschlecht: {
    type: String,
    enum: ['m', 'w']
  }
});

module.exports = model('Profile', schemaProfile); // add schemaProfile in DB and link with profiles in DB
