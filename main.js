

function BlogPost(id, title, author, createdOn, body, tags) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.createdOn = createdOn;
    this.body = body;
    this.tags = tags;
   
}
BlogPost.prototype.renderBlog= function() {


}


    BlogPost.prototype.renderSinglePost= function() {
            this.renderTitle();
            this.renderAuthor();
            this.renderCreatedOn();
            this.renderBody();
            this.renderTags();

}

BlogPost.prototype.renderTitle= function() {
    var titleParent = document.getElementById('singlePost-container');
    var title = document.createElement('h2');
    title.textContent = this.title;

    // console.log(title);
    titleParent.appendChild(title);
}

BlogPost.prototype.renderAuthor= function() {
    var authorParent = document.getElementById('singlePost-container');
    var author = document.createElement('div');
    author.textContent = this.author;

    // console.log(author);
    authorParent.appendChild(author);
}

BlogPost.prototype.renderCreatedOn= function() {
    var createdOnParent = document.getElementById('blog-creation');
    var createdOn = document.createElement('span');
    createdOn.textContent = this.createdOn;

    // console.log(createdOn);
    createdOnParent.appendChild(createdOn)

}

BlogPost.prototype.renderBody= function() {
    var bodyParent = document.getElementById('blog-body');
    var body = document.createElement('p');
    body.textContent= this.body;

    // console.log(body);
    bodyParent.appendChild(body);

}

BlogPost.prototype.renderTags=function() {
    var tagsParent = document.getElementById('blog-tags');
    var tags = document.createElement('span');
    tags.textContent= this.tags;

    // console.log(tags);
    tagsParent.appendChild(tags);
}


    var allPosts = [];
    data.forEach(function(element) {
    var newBlog = new BlogPost(element.id, element.title, element.author, element.createdOn, element.body, element.tags);
    allPosts.push(newBlog);

    // console.log(allPosts);
    // console.log(data);


//   take element run through constructor and turn into blogpost, 
// add in to allposts variable
})





var singleBlog = new BlogPost(8, 'My Title','char', 'January 14, 2019', 'hello', 'tags');
 singleBlog.renderSinglePost();






