const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });
const uri = process.env.URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    console.log('Connecting to database...');
    await client.connect();
    console.log('Connected to database');
    
    const database = client.db('url-shortener');
    const links = database.collection('links');
    
    // You can optionally return the collection here or any other objects you need.
    return {links};
  } catch (err) {
    console.error('Error connecting to database:', err);
    throw err;
  }
}

module.exports = connectToDatabase;
