import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/PESU';

// MongoClient.connect(url)
// .then((db) => {
//     console.log('Connected to the database');
//     db.close();
// })
// .catch((err) => {
//     console.log(err);
// });

let client ;
MongoClient.connect(url)
    .then((connectedClient)=>{
        client=connectedClient;
        const dbo=client.db("ABD");
        return dbo.createCollection("Stud1");
    })
    .then((res)=>{
        console.log("Collection :",res);
        client.close();
    })
    .catch((err)=>{
        console.log("error: ",err)
    })