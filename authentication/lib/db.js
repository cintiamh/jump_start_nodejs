var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud database
var username = "cintiamh";
var password = "na11cl17";
var address = '@ds031777.mongolab.com:31777/jump_start'
connect();

// Connect to mongo
function connect() {
    var url = 'mongodb://' + username + ':' + password + address;
    mongoose.connect(url);
}

function disconnect() {
    mongoose.disconnect();
}