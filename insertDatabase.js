const MongoClient=require("mongodb").MongoClient;
//url is the database location here i am using my local database
//you can also use remote database url
let url="mongodb://localhost:27017/mydb";
//mydb is the name of my database

//creating connection
//using arrow function to pass the error and current instance of the database
MongoClient.connect(url,(err,db)=>{
    //if there is an error then display it
   if(err) throw err;
   // create database object
   let databaseObject=db.db("mydb");

   //mongo db is an object oriented database so whatever we would
   //insert that would be in the form of the objects

   //create the object that you want to insert
   let MyObj={user1:"Username",mail:"user234@gmail.com"};

   //we have to insert MyObj in to some collection
   //name of my collection is users
   //collection is similar to the tables in the sql

   databaseObject.collection("user").insertOne(MyObj,(err)=>{
       if(err) throw err;
       //no error then object would be inserted
       console.log("1 document inserted");
       //close the db
       db.close();
   });
});