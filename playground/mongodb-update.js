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
    /*db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('595e5fe11728e78a1e08bf0b')


    }, {
        $set: {
            compelted: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });*/
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('595cf08333930e39a4e5a59a')
    }, {
        $set: {
            name: 'Abe'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });



});