const { ObjectId } = require('mongodb');
const { db, todos } = require('../utils/db');
const { TodoRecord } = require('../records/todo.record');

class TodoRepository {
  static _checkRecord(record) {
    if (!(record instanceof TodoRecord)) {
      throw new Error('Tworzony obiekt nie jest instancją klasy TodoRecord.');
    }
  }

  static async insert(record) {
    TodoRepository._checkRecord(record);

    const { insertedId } = await todos.insertOne(record);
    record._id = insertedId;

    return insertedId;
  }

  static async delete(record) {
    TodoRepository._checkRecord(record);

    await todos.deleteOne({
      _id: record._id,
    });
  }

  static async findAll() {
    const allTodos = await todos.find().toArray();
    return allTodos.map((todo) => new TodoRecord(todo));
  }

  static async find(id) {
    const item = await todos.findOne({ _id: new ObjectId(String(id)) });
    return item === null ? null : new TodoRecord(item);
  }

  static async update(record) {
    TodoRepository._checkRecord(record);
    await todos.replaceOne(
      {
        _id: record._id,
      },
      {
        title: String(record.title),
      },
    );
  }
}

module.exports = {
  TodoRepository,
};
