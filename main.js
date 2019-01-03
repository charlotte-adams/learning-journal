function BlogPost(id, author, createdOn, body, tags) {
    this.id = id;
    this.author = author;
    this.createdOn = createdOn;
    this.body = body;
    this.tags = tags;
   
}
var allPosts = [];
data.forEach(function(element) {



 var newBlog = new BlogPost(element.id, element.author, element.createdOn,element.body,element.tags);

 allPosts.push(newBlog);

//   take element run through constructor and turn into blogpost, 
// add in to allposts variable
})


console.log(allPosts);
// console.log(data);