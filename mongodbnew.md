db.mycol.insert({"name":"ajay", "description":"hello",salary:3000,"by":"abc","url":"abc","tags":["mongodb","database", "NoSQL"],likes:100});


db.mycol.find( { salary: { $gt: 3000 } } )
-----------------
db.mycol.find( { salary: { $gt: 2000, $lt: 3500 } } );

db.mycol.findOne()---> return  single  document
-----------
and  condition
db.mycol.find( { name: 'ajay', salary: { $lt: 4000 } } )
-------------
or  condition
db.mycol.find(
   {
     $or: [ { salary: { $gt: 1000 } }, { name: "ajay"  } ]
   })

db.mycol.remove( { name : "ajay" } )------>  to delete  a  single  record

db.mycol.remove({});



db.mycol.findOneAndDelete(
   { "name" : "ajay" }
)----------->delete  first  record  whose  name is  ajay
-------------------------
db.scores.findOneAndDelete(
   { "name" : "A. MacDyver" },
   { sort : { "points" : 1 } }
)---------> it  srots  the  elements  and  delete
----------------
db.mycol.find( { salary: { $gt: 25 } }, { _id: 0 } )
without  _id  field
----------------------
db.mycol.find(
   { },
   { name: "ajay", contribs: 1, _id: 0 }
)
--------------------
db.mycol.find().sort( { name: -1 } ).limit( 1,2 )-------> it  sort  the  elements  and  return  first  5  elements
--------------------------------

db.mycol.distinct( "name" )
----------------
db.mycol.distinct( "tags.mongodb" )
-----------
db.mycol.drop()
---------------
db.mycol.dropIndex( "by" );
------------
db.mycol.find().count()
--------------
db.inventory.find( { salary: { $ne: 1.99, $exists: true } } )
-------------
db.inventory.find( {
    $and : [
        { $or : [ { price : 0.99 }, { price : 1.99 } ] },
        { $or : [ { sale : true }, { qty : { $lt : 20 } } ] }
    ]
} )
---------------
db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )
---------
db.inventory.find( { price: { $not: { $gt: 1.99 } } } )
------------------------------
db.mycol.update(
   { name: "ajay" },
   {
     $set: { name: "raj" },
     $currentDate: { lastModified: true }
   },
   { multi: true }
)
---------------\

db.mycol.update(
   { name: "raj" },
   {
     $set: { name: "raj1" }
    
   },
   { multi: true }
)
db.mycol.find({},{"title":1,_id:0}).limit(1).skip(1)
-----------------
db.mycol.find( { name: { $in: [ 'raj1', 'sss' ] } } )