const { MongoClient } = require('mongodb');

const client = new MongoClient('xxxxxx://xxxx');

try {
    client.connect();
}

const db = client.db('xxx-xxx-xxx');

const todos = db.collection('todos');

module.exports = {
    db,
    todos,
    client,
};
