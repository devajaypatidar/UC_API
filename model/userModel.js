const mongoose = require('mongoose');


mongoose.connect(process.env.CONNECTION_URL, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: Number
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });


  const User = mongoose.model('user', userSchema);

  module.exports = User;