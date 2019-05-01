  - create a database named `sports`.
      ANS: use sports
  - list all databases present in local mongod server.
      ANS: show dbs
  - create 3 collections named `cricket`, `football`, `TT` in sports databse.
      ANS: db.createCollection("Collection name");
  - add multiple players in those collections which should have fields like `name`, `age` and `email` and `cost`.
      ANS: db.collectionName.insert({user document with all the fields/key-value pairs});
  - list all collections in sports database.
      ANS: show collections
  - rename `TT` collection to `tennis`.
      ANS: db.TT.renameCollection("tennis");
  - create a capped collection called `khokho` which should have max 3 documents.
      ANS: db.createCollection("khokho", {capped:true, size:1000, max:3});
  Try inserting more than 3 and see what happens?
      ANS: it removes the earliest added document
  - check whether a collection is capped or not?
      ANS: db.collectionName.stats()["capped"];
  - drop all documents from `football` collection.
      ANS: db.football.remove({}); -> to remove all the documents from the collection without removing the collection
      ANS: db.football.drop(); -> to remove the collection with all the contained documents.
  - delete cricket collection completely.
      ANS: db.cricket.drop();
  - delete sports database. 
      ANS: use sports
      ANS: db.dropDatabase();
