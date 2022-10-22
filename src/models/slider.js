const mongoose = require('mongoose');
const sliders = mongoose.Schema({
    title: String,
    subTitle: String,
    imageUrl: String,
    class: String
});

module.exports = mongoose.model("slider", sliders);