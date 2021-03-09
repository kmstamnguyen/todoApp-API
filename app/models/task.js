

// load mongoose since we need it to define a model
var mongoose = require('mongoose');
var User = require('./user');
var Board = require('./board');
const user = new User();
module.exports = mongoose.model('Task', {
    joined: [String],
    title: String,
    status: String,
    board: String,
    createdAt: Date,
    updatedAt: Date,
});