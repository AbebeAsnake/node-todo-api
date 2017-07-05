//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); //identically to the code above
var obj = new ObjectID();
console.log(obj);
//object destructuring ,create new variable from the object property
/*var user = { name: 'abe', age: 35 };
var { name } = user;
console.log(name);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('unable to connect to MongoDb server');

    }
    console.log('connected to MongoDb server');
    /*db.collection('Todos').insertOne({
        test: 'something to do',
        completed: false
    }, (error, result) => {
        if (error) {
            return console.log('unable to insert todo', error)
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })*/
    // insert new doc into user (name,age, location)
    /* db.collection('Users').insertOne({
          //_id: 123,
          name: 'abe',
          age: 35,
          location: 'MD'
      }, (err, result) => {
          if (err) {
              return console.log('unable to insert user', err);
          }
          //console.log(result.ops[0]._id.getTimestamp());
          console.log(result.ops);
      });*/
    /*db.collection('Todos').find({ _id: new ObjectID('595d025a1728e78a1e08884a') }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos', err);
    });*/

    /*db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count :${count}`);
        //console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos', err);
    });*/
    db.collection('Users').find({ name: 'abe' }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    });



    // db.close();
});