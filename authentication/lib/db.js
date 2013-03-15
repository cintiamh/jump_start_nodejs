var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud database
<<<<<<< HEAD
var username = "cintiamh"
var password = "na11cl17"
var address = '@ds031777.mongolab.com:31777/jump_start';
=======
var username = "cintiamh";
var password = "na11cl17";
var address = '@ds031777.mongolab.com:31777/jump_start'
>>>>>>> 79d9bf526144dc5ff97b089a2899c1dd7b421afe
connect();

// Connect to mongo
function connect() {
    var url = 'mongodb://' + username + ':' + password + address;
    mongoose.connect(url);
}

<<<<<<< HEAD
function disconnect() { mongoose.disconnect() }
=======
function disconnect() {
    mongoose.disconnect();
}
>>>>>>> 79d9bf526144dc5ff97b089a2899c1dd7b421afe
