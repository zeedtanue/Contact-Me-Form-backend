const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL ,{ useNewUrlParser: true});
let conn = mongoose.connection;

module.exports = {
	mongo_conn : conn
}