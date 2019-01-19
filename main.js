const allPosts = [];
// const Promise = require("bluebird");
// const AppDAO = require("./dao");
// const UserRepository = require("./UserRepository");
// const blogEntryRepository = require("./blogEntryRepository");

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
  var firstNameIsValid = validateFirstName(event);
  if (!firstNameIsValid) {
    return false;
  }

  var lastNameIsValid = validateLastName(event);
  if (!lastNameIsValid) {
    return false;
  }

  var addressIsValid = validateAddress(event);
  if (!addressIsValid) {
    return false;
  }

  var cityIsValid = validateCity(event);
  if (!cityIsValid) {
    return false;
  }

  var stateIsValid = validateState(event);
  if (!stateIsValid) {
    return false;
  }

  var zipcodeIsValid = validateZipcode(event);
  if (!zipcodeIsValid) {
    return false;
  }

  var emailIsValid = validateEmail(event);
  if (!emailIsValid) {
    return false;
  }

  var phoneIsValid = validatePhoneNumber(event);
  if (!phoneIsValid) {
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
  var firstLineContent = ` Thank you for registering. You have created an account as:
        ${event.target.firstname.value} ${event.target.lastname.value}`;

  var secondLineContent = `Your contact information:`;

  var thirdLineContent = `Address: ${event.target.address.value} ${
    event.target.city.value
  }
        ${event.target.state.value} ${event.target.zipcode.value}`;

  var fourthLineContent = `Phone: ${event.target.phone.value}`;

  var fifthLineContent = `Email: ${event.target.email.value}`;

  renderUserInputEach(firstLineContent);
  renderUserInputEach(secondLineContent);
  renderUserInputEach(thirdLineContent);
  renderUserInputEach(fourthLineContent);
  renderUserInputEach(fifthLineContent);
}

function validateFirstName(event) {
  var first = event.target.firstname.value;

  if (!first.match(/^[a-zA-Z]+$/)) {
    alert("Only letters are allowed for first name.");
    return false;
  }

  return true;
}

function validateLastName(event) {
  var last = event.target.lastname.value;

  if (!last.match(/^[a-zA-Z]+$/)) {
    alert("Only letters are allowed for last name.");
    return false;
  }

  return true;
}

function validateAddress(event) {
  var address = event.target.address.value;

  if (address.length == 0) {
    alert("Address is required");
    return false;
  } else {
    return true;
  }
}

function validateCity(event) {
  var city = event.target.city.value;

  if (city !== null && city !== "") {
    return true;
  } else {
    alert("City is required");
    return false;
  }
}

function validateState(event) {
  var state = event.target.state.value;

  if (state.length === 2 && state.match(/^[a-zA-Z]+$/)) {
    return true;
  } else {
    alert("2 letters required for state");
    return false;
  }
}

function validateZipcode(event) {
  var zipcode = event.target.zipcode.value;

  if (zipcode.length === 5 && zipcode.match(/^\d+/)) {
    return true;
  } else {
    alert("5 numeric characters required for zipcode");
    return false;
  }
}

function validatePhoneNumber(event) {
  var phone = event.target.phone.value;

  if (phone.match(/^[0-9]{10}$/)) {
    return true;
  } else {
    alert("10 numeric characters required for phone number");
    return false;
  }
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

// function main() {
//   const dao = new AppDAO('./database.sqlite3')
//   const blogProjectData =  { name: 'Learning Journal Sqlite Tutorial'}
//   const userRepo = new UserRepository(dao)
//   const blogEntryRepo = new blogEntryRepository(dao)
//   let userId

//   userRepo.createTable()
//   .then(() => blogEntryRepo.createTable())
//   .then (() => userRepo.createTable(blogProjectData.name))
//   .then ((data) => {
//     userId = data.id
//     const blogEntries = [
//       {
//         title: 'testBlog1',
//         body: 'this is a test blog entry body',
//         author: 'test author',
//         date: '01/19/2019',
//         tags: 'red'
//       },
//       {
//         title: 'testBlog2',
//         body: 'this is a test blog 2 entry body',
//         author: 'test author 2',
//         date: '01/19/2019-2',
//         tags: 'red-2'
//       }
//     ]
//     return Promise.all(blogEntries.map((blogEntry) => {
//       const { title, body, author, date, tags }
//       return blogEntryRepo.create(title, body, author, date, tags) }
//     ))

//   })
//   .then(() => userRepo.getById(author)
//   .then ((userId) => {
//     console.log (`\nRetrieved user from database`)
//     console.log(`user id = ${userId.id}`)
//     console.log(`user name = ${userId.username}`)
//     return userRepo.getBlogEntries(user.id)
//   })
//   .then((blogEntries) => {
//     console.log('\nRetrieved blog entries from database')
//     return new Promise ((resolve, reject) => {
//       blogEntries.forEach((blogEntry) => {
//         console.log('blog id = ${blog.id}')
//         console.log('blog title = ${blog.title}')
//         console.log('blog body = ${blog.body}')
//         console.log('blog author = ${blog.author}')
//         console.log('blog date = ${blog.date}')
//         console.log('blog tags = ${blog.tags}')

//       })
//     })

//     resolve('success')

//   })

//   .catch((err) => {
//     console.log('Error: ')
//     console.log(JSON.stringify(err))
//   })

// }

// main()
