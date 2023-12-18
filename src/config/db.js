const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MyDB', {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// mongoose
//   .connect('mongodb://localhost:27017/testdb', { dbName: 'MyDB' })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch((err) => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });
