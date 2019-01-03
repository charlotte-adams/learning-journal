# Task 1: Project Setup & App Scaffolding

Let's get everything set up to start building the learning journal blog.

Steps

1. Create a new repository on GitHub and clone it.
2. Copy the contents of the `data.js` file from this repo into your repo so you'll have your placeholder data.
3. Set up linting by copying the linter config file from your previous project into this repo.
4. Create an HTML, CSS, and JS file in your repo and fill in the HTML file with a basic head/body skeleton, then connect your CSS & JS files to the HTML with appropriate `link` & `script` tags. Also connect the `data.js` file so its contents can be read in your JS file.
5. We'll use javascript's prototype to manage our data, so create a `BlogPost` constructor function that accepts a data object from the `data.js` file and returns a `BlogPost` object with properties for each of the properties in the data object.
6. Load all the posts from `data.js` into your js by running them through the constructor and storing the result in an `allPosts` array. Verify that your constructor works by logging `allPosts` in the browser.
