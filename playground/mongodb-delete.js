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
    // deleteMany
    /*db.collection('Todos').deleteMany({ text: 'eat lunch' })
        .then((result) => {
            console.log(result);
        });*/

    /*db.collection('Users').deleteMany({ name: 'abe' })
        .then((result) => {
            console.log(result);
        });*/
    //deleteOne
    /*db.collection('Todos').deleteOne({ text: 'eat lunch' })
        .then((result) => {
            console.log(result);
        });*/
    db.collection('Users').deleteOne({ _id: new ObjectID('595cf0a2aca7c64714e53cfd') })
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        });
    //findOneAndDelete
    /*db.collection('Todos').findOneAndDelete({ completed: false })
        .then((result) => {
            console.log(result);
        });*/


});