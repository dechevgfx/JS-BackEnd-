const mongoose = require("mongoose");
const config = require("./config");
const uri = "mongodb://127.0.0.1.27017/cubicle";

async function database() {
    mongoose.set('strictQuery', false);
    await mongoose.connect(config.DB_URI);
    console.log("Connected");
}

module.exports = database;
