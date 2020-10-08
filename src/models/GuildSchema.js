const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = new Schema({
    _id: String,

    cor: { type: String, default: '' },
    prefix: { type: String, default: "" },

})
