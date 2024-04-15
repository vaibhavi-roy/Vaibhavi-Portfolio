const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on('error', () => {
    console.log('Error');
})

connection.on('connected', () => {
    console.log('Connected');
})

module.exports = mongoose;