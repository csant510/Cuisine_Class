const mongoose = require("mongoose"),
    subscriberSchema = mongoose.Schema({
        name: String,
        email: String,
        zpidCode: Number
    });

    module.exports = mongoose.model("Subscriber", subscriberSchema);