

// load mongoose since we need it to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('Board', {
    name: String,
    createdAt: Date,
    updatedAt: Date,
});