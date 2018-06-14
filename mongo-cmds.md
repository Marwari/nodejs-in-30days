=> comaands
1. show dbs;
2. use dbname;
3. db.createCollection('mycollection');
4. db.mycollection.insert({'name': 'naame', 'class': 'patanahi'});
5. db.mycollection.find();
6. db.mycollection.find().pretty();
7. db; => know which databse
8. show collections;
9. db.createCollection('mycol', {capped:true, autoindexID:true,size:6142800, max:10000}); => to set limits
10. 