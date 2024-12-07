```javascript
// Incorrect use of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}});
```