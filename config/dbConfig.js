import mongoose, { connect, connection as _connection } from 'mongoose';

connect(process.env.mongo_url);

const connection = _connection;

connection.on('error', () => {
    console.log('Error');
})

connection.on('connected', () => {
    console.log('Connected');
})

export default mongoose;