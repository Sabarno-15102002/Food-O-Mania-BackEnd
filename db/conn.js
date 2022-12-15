const mongoose = require("mongoose");
const { MongoURI } = require("../config/database");


mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("MongoDB Connection is established");
}).catch((e) => {
    console.log(MongoURI);
})