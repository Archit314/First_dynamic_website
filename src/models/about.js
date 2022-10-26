const mongoose = require('mongoose');
const about = mongoose.Schema({
    title:String,
    para:String,
    linkText:String
});

module.exports = mongoose.model("about", about);