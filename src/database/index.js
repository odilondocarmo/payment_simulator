require('dotenv/config');

const mongoose = require('mongoose');


mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.Promise = global.Promise;


module.exports = mongoose;