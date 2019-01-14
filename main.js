const allPosts = [];

function BlogPost(id, title, author, createdOn, body, tags) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.createdOn = createdOn;
  this.body = body;
  this.tags = tags;
}

BlogPost.prototype.render = function(parent) {
  const singlePostDiv = document.createElement("div");
  singlePostDiv.className = "post-container";

  this.renderTitle(singlePostDiv);
  this.renderAuthor(singlePostDiv);
  this.renderCreatedOn(singlePostDiv);
  this.renderBody(singlePostDiv);
  this.renderTags(singlePostDiv);

  parent.appendChild(singlePostDiv);
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
    const allPostsContainer = document.getElementById("all-posts-container");
    post.render(allPostsContainer);
  });
}
function renderSinglePost() {
  const post = allPosts[0];
  const homePageWrap = document.getElementById("home-page-wrap");
  post.render(homePageWrap);
}

const header = document.querySelector("header");

function handleNav(event) {
  const path = event.target.dataset.path;
  hideAll();
  const currentPage = document.getElementById(path);
  currentPage.classList.remove("hidden");
}
function hideAll() {
  const pages = document.querySelectorAll(".page");
  pages.forEach(function(page) {
    page.classList.add("hidden");
  });
}
header.addEventListener("click", handleNav);

createNewBlog();
renderAllPosts();
renderSinglePost();

// contact page form

function submitForm(event) {
  event.preventDefault();
  var formIsValid = validateForm(event);
  if (!formIsValid) {
    return false;
  }
  renderUserInputAll(event);
}

function validateForm(event) {
  var userNameIsValid = validateUserName(event);
  if (!userNameIsValid) {
    return false;
  }

  var emailIsValid = validateEmail(event);
  if (!emailIsValid) {
    return false;
  }

  var passwordIsValid = validatePassword(event);
  if (!passwordIsValid) {
    return false;
  } else {
    return true;
  }
}

var userform = document.querySelector("form");
userform.addEventListener("submit", submitForm);

function renderUserInputEach(value) {
  var printParent = document.getElementById("print");
  var eachInputField = document.createElement("div");
  eachInputField.textContent = value;
  printParent.appendChild(eachInputField);
}

function renderUserInputAll(event) {
  var firstLineContent = ` Thank you ${
    event.target.username.value
  } for creating an account.`;
  var secondLineContent = `The Email you have provided is: ${
    event.target.email.value
  }`;

  renderUserInputEach(firstLineContent);
  renderUserInputEach(secondLineContent);
}

function validateUserName(event) {
  var username = event.target.username.value;

  if (!username.match(/^[\w\W\d]+$/)) {
    alert("User Name field is empty");
    return false;
  }
  if (username.length < 10) {
    alert("User Name must be minimum 10 characters/digits");
    return false;
  }

  return true;
}

function validateEmail(event) {
  var emailID = event.target.email.value;
  var atpos = emailID.indexOf("@");
  var dotpos = emailID.lastIndexOf(".");

  if (atpos < 1 || dotpos - atpos < 2) {
    alert("Please enter correct email ID");
    return false;
  }
  return true;
}

function validatePassword(event) {
  var verifyPswd = event.target.password.value;
  var confirmPswd = event.target.confirm_password.value;

  if (verifyPswd.length < 8) {
    alert("Password must be minimum 8 characters.");
    return false;
  }

  if (confirmPswd.length < 8) {
    alert("Confirm Password must be minimum 8 characters.");
    return false;
  }
  if (verifyPswd == confirmPswd) {
    return true;
  } else {
    alert("Please verify Password and Confirm Password match");
    return false;
  }
}
