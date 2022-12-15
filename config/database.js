const {DB_USERNAME,DB_PASSWORD,DB_CLUSTER} = require("./config");

// console.log(DB_PASSWORD);

module.exports = {
    MongoURI: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.76ystin.mongodb.net/FoodOManiaDB?retryWrites=true&w=majority`
    // mongodb+srv://admin-sabarno-ananya:<password>@cluster0.76ystin.mongodb.net/?retryWrites=true&w=majority
}