

function BlogPost(id, title, author, createdOn, body, tags) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.createdOn = createdOn;
    this.body = body;
    this.tags = tags;
}


BlogPost.prototype.renderSinglePost= function() {
    var  allPostsContainer = document.getElementById('all-posts');
    var singlePostDiv = document.createElement('div');
    allPostsContainer.className = 'entire-blog';
    singlePostDiv.className = 'post-container';

        this.renderTitle(singlePostDiv);
        this.renderAuthor(singlePostDiv);
        this.renderCreatedOn(singlePostDiv);
        this.renderBody(singlePostDiv);
        this.renderTags(singlePostDiv);

            allPostsContainer.appendChild(singlePostDiv);

        }

BlogPost.prototype.renderTitle= function(parent) {

    var title = document.createElement('h2');
    title.className = 'post-title';
    title.textContent = this.title;
    parent.appendChild(title);
}

BlogPost.prototype.renderAuthor= function(parent) {

    var author = document.createElement('div');
    author.className = 'post-author';
    author.textContent = this.author;
    parent.appendChild(author);
}

BlogPost.prototype.renderCreatedOn= function(parent) {
    
    var createdOn = document.createElement('span');
    createdOn.className = 'date-created';
    createdOn.textContent = this.createdOn;
    parent.appendChild(createdOn)

}

BlogPost.prototype.renderBody= function(parent) {
    
    var body = document.createElement('p');
    body.className = 'post-body'
    body.textContent= this.body;
    parent.appendChild(body);

}

BlogPost.prototype.renderTags=function(parent) {
    
    var tags = document.createElement('span');
    tags.className = 'post-tags';
    tags.textContent= this.tags;
    parent.appendChild(tags);
}


var allPosts = [];
data.forEach(function(element) {
    var newBlog = new BlogPost(element.id, element.title, element.author, element.createdOn, element.body, element.tags);
    allPosts.push(newBlog);
})

allPosts.forEach(function(post) {
    post.renderSinglePost();

})












