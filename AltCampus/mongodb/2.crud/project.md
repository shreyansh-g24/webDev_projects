1. Create a database named `blog`.
    ANS: use blog
2. Create a collection called 'articles'.
    ANS: db.createCollection("articles);
3. Insert multiple documents(at least 3) into atricles. It should have fields
  - title as string
  - description as String
  - author as nested object
    - author should have
      - name
      - email
      - age
      - example author: {name: 'abc', email: 'abc@gmail', age: 25}
  - tags : Array of strings like ['html', 'css'] 
    ANS: db.articles.insert({the object with all the required fields});
```js
// An article should look like
{
  _id: 'some_random_id',
  title: '',
  description: '',
  author: {
    name: '',
    email: '',
    age: ''
  },
  tags: ['js', 'mongo']
}
```

4. Find all the articles using `db.COLLECTION_NAME.find()`
    ANS: db.articles.find().pretty();
5. Find a document using _id field.
    ANS: db.articles.find({_id:ObjectId("the id of the document")});
6. Find documents using title and author's name field.
    ANS: db.articles.find({title:"title of the document"});
    ANS: db.articles.find({"author.name":"name of the author of the article"});
7. Find doucment using a specific tag.
    ANS: db.articles.find(tags:"the tag to be matched");
8. Update title of a document using its _id field.
    ANS: db.articles.update({title:"title to be matched"}, {$set:{title:"new title"}});
9. Update a author's name using article's title.
    ANS: db.articles.update({title:"title to be matched"}, {$set:{"author.name":"new name"}});
10. Add additional tag in a specific document.
    ANS: db.articles.update({title:"title to be matched"}, {$push:{tags:"new tag"}});
    ANS: db.articles.update({title:"title to be matched"}, {$push:{tags:{$each:["multiple new tags"]}}});
11. Increment an auhtor's age by 5.  
    ANS: db.articles.update({title:"title to be matched"}, {$inc:{"author.age":5});
    ANS: -5 to decrement the age
12. Delete a document using _id field with `db.COLLECTION_NAME.remove()`.
    ANS: db.articles.remove({title:"title of the document to be deleted"});
