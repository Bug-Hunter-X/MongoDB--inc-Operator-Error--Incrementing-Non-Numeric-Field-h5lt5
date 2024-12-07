```javascript
// Correct use of $inc operator with handling for missing field
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}},{upsert:true});

// Alternative: Using $setOnInsert to handle missing fields in a more controlled fashion
db.collection.updateOne({"_id":ObjectId("someId")},{
  $inc:{counter:1},
  $setOnInsert:{counter:0}
});
```