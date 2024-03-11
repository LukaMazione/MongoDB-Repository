const { ObjectId } = require('mongodb');
const { db, client } = require('./utils/db');
const { TodoRepository } = require('./repositories/todo.repository');
const { TodoRecord } = require('./records/todo.record');

(async () => {
  try {
    // console.log(await TodoRepository.find('65b6eeec74ad7b50d9ecdd31'));
    // const todo = new TodoRecord({
    //   title: 'Skończyć projekt mongoDB',
    // });
    // await TodoRepository.insert(todo);
    // const results = await TodoRepository.findAll();

    // const todo = await TodoRepository.find('65b6eec4a85ad2c13dd77e95');
    // todo.title = 'usunąć';
    //
    // await TodoRepository.update(todo);
    // await TodoRepository.delete(todo);
    //
    // console.log(await TodoRepository.find('65b6eec4a85ad2c13dd77e95'));
    // console.log(todo);
    console.log(await TodoRepository.findAll());
  } finally {
    await client.close();
  }
})();
// dokończyć od 24 min update
