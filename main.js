const allPosts = [];
function BlogPost(id, title, author, createdOn, body, tags) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.createdOn = createdOn;
  this.body = body;
  this.tags = tags;
}

BlogPost.prototype.renderSinglePost = function() {
  const allPostsContainer = document.getElementById("all-posts-container");
  const singlePostDiv = document.createElement("div");
  allPostsContainer.className = "all-posts";
  singlePostDiv.className = "post-container";

  this.renderTitle(singlePostDiv);
  this.renderAuthor(singlePostDiv);
  this.renderCreatedOn(singlePostDiv);
  this.renderBody(singlePostDiv);
  this.renderTags(singlePostDiv);

  allPostsContainer.appendChild(singlePostDiv);
};

BlogPost.prototype.renderTitle = function(parent) {
  const title = document.createElement("h2");
  title.className = "post-title";
  title.textContent = this.title;
  parent.appendChild(title);
};

BlogPost.prototype.renderAuthor = function(parent) {
  const author = document.createElement("div");
  author.className = "post-author";
  author.textContent = `By: ${this.author}`;
  parent.appendChild(author);
};

BlogPost.prototype.renderTags = function(parent) {
  const tags = document.createElement("span");
  tags.className = "post-tags";
  tags.textContent = `Key Words: ${this.tags}`;
  parent.appendChild(tags);
};

BlogPost.prototype.renderCreatedOn = function(parent) {
  const createdOn = document.createElement("span");
  createdOn.className = "date-created";
  const formattedDate = renderDate(this.createdOn);
  createdOn.textContent = `Publish Date: ${formattedDate}`;
  parent.appendChild(createdOn);
};

BlogPost.prototype.renderBody = function(parent) {
  const body = document.createElement("div");
  body.className = "post-body";
  const md = window.markdownit();
  const result = md.render(this.body);
  body.innerHTML = result;
  parent.appendChild(body);
};

function renderDate(date) {
  const datePieces = date.split("-");
  const [year, month, day] = datePieces;
  return `${month} - ${day} - ${year}`;
}

function createNewBlog() {
  data.forEach(function(element) {
    const newBlog = new BlogPost(
      element.id,
      element.title,
      element.author,
      element.createdOn,
      element.body,
      element.tags
    );
    allPosts.push(newBlog);
  });
}

function renderAllPosts() {
  allPosts.forEach(function(post) {
    post.renderSinglePost();
  });
}
createNewBlog();
renderAllPosts();
