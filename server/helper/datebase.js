const mongoose = require('mongoose');

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const url =  process.env.DB_URL;
const name = process.env.DB_NAME;


module.exports = () => {
  const datebaseUrl = `mongodb://${username}:${password + url}/${name}`;
  mongoose.connect(datebaseUrl, { useNewUrlParser: true, useCreateIndex: true });
  mongoose.connection.on('open', () => console.log('Datebase connected.'));
  mongoose.connection.on('error', (error) => console.log('Datebase error:', error));
};