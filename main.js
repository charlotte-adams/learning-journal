

function BlogPost(id, title, author, createdOn, body, tags) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.createdOn = createdOn;
    this.body = body;
    this.tags = tags;
   
}


// BlogPost.prototype.renderSinglePost= function() {
//   var postParent = document.getElementById('all-posts');
  // render each part of the post
  

//   var createdOn = document.createElement('div');
//   var body = document.createElement('div');
//   var tags = document.createElement('div');
    
    

//     createdOn.textContent = this.createdOn;
//     body.textContent = this.body;
//     tags.textContent= this.tags;

    // console.log(createdOn, body, tags);
    
//     postParent.appendChild(author);
//     postParent.appendChild(createdOn);
//     postParent.appendChild(body);
//     postParent.appendChild(tags);

// }

BlogPost.prototype.renderTitle= function() {
    var titleParent = document.getElementById('singlePost-container');
    var title = document.createElement('h2');
    title.textContent = this.title;

    console.log(title);
    titleParent.appendChild(title);
}

BlogPost.prototype.renderAuthor= function() {
    var authorParent = document.getElementById('singlePost-container');
    var author = document.createElement('div');
    author.textContent = this.author;

    console.log(author);
    authorParent.appendChild(author);
}

BlogPost.prototype.renderCreatedOn= function() {
    var createdOnParent = document.getElementById('blog-creation');
    var createdOn = document.createElement('span');
    createdOn.textContent = this.createdOn;

    console.log(createdOn);
    createdOnParent.appendChild(createdOn)

}

BlogPost.prototype.renderBody= function() {
    var bodyParent = document.getElementById('blog-body');
    var body = document.createElement('p');
    body.textContent= this.body;

    console.log(body);
    bodyParent.appendChild(body);

}

BlogPost.prototype.renderTags=function() {
    var tagsParent = document.getElementById('blog-tags');
    var tags = document.createElement('span');
    tags.textContent= this.tags;

    console.log(tags);
    tagsParent.appendChild(tags);
}







var allPosts = [];
data.forEach(function(element) {



 var newBlog = new BlogPost(element.id, element.title, element.author, element.createdOn, element.body, element.tags);

 allPosts.push(newBlog);

//   take element run through constructor and turn into blogpost, 
// add in to allposts variable
})


console.log(allPosts);
// console.log(data);


var singleBlog = new BlogPost(8, 'My Title','char', 'January 14, 2019', 'hello', 'tags');
//  singleBlog.renderSinglePost();
singleBlog.renderTitle();
singleBlog.renderAuthor();
singleBlog.renderCreatedOn();
singleBlog.renderBody();
singleBlog.renderTags();





// function renderEachBlogPost() {

//     var printParent = document.getElementById('print');

//     var eachInputField = document.createElement('div');
//     eachInputField.textContent =value;
//     printParent.appendChild(eachInputField);


//     }   