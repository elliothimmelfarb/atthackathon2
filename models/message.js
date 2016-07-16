const mongoose = require('mongoose');
const request = require('request');

const messageSchema = new mongoose.Schema({
  author: { type: String },
  body: { type: String },
  createdAt: { type: Date, default: Date.now },
});


messageSchema.methods.yoda = yoda;

function yoda() {

}


const message = mongoose.model('Message', messageSchema);

module.exports = message;
