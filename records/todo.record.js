const { ObjectId } = require('mongodb');
const { pool } = require('../utils/db');

class TodoRecord {
  constructor(obj) {
    this.title = obj.title;

    this._id = new ObjectId(obj._id);

    this._validate();
  }

  _validate() {
    if (this.title.trim().length < 5) {
      throw new Error('The title must be at least 5 characters long');
    }

    if (this.title.length > 150) {
      throw new Error('The title must not exceed 150 characters.');
    }
  }
}

module.exports = {
  TodoRecord,
};
