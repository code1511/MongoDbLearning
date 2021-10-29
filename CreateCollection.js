const MongoClient=require("mongodb").MongoClient;
var myurl="mongodb://localhost:27017/mydb";

MongoClient.connect(myurl,(err,db)=>{
  if(err) throw err;
  let database_object=db.db("mydb");
  database_object.createCollection("users",(err)=>{
    if(err) throw err;
    console.log("collection created");
    db.close();
  })
  console.log("connected");
})