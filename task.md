# Task 1: Project Setup & App Scaffolding

Let's get everything set up to start building the learning journal blog.

Steps

1. Create a new repository on GitHub and clone it.
2. Copy the contents of the `data.js` file from this repo into your repo so you'll have your placeholder data.
3. Set up linting by copying the linter config file from your previous project into this repo.
4. Create an HTML, CSS, and JS file in your repo and fill in the HTML file with a basic head/body skeleton, then connect your CSS & JS files to the HTML with appropriate `link` & `script` tags. Also connect the `data.js` file so its contents can be read in your JS file.
5. We'll use javascript's prototype to manage our data, so create a `BlogPost` constructor function that accepts a data object from the `data.js` file and returns a `BlogPost` object with properties for each of the properties in the data object.
6. Load all the posts from `data.js` into your js by running them through the constructor and storing the result in an `allPosts` array. Verify that your constructor works by logging `allPosts` in the browser.



# Task 2: Rendering the ipsum posts

Steps

1. In your HTML, sketch out a template for a single blog post. Decide what kind of element you will use to render the title, body, etc and how they will fit together. Leave this template commented out so that it doesn't render in the browser. We'll use JS to create the actual HTML, but this template can serve as a reference so we have a fixed target to build in JS.
2. Write the JS to render a single blog post. Create a function that renders a whole BlogPost. There should be a `render` function for the whole post, as well as a series of individual functions to render each each property of the BlogPost object, for example `renderTitle`. The `render` function will call the others. Each of these functions should be defined on the BlogPost prototype.
3. Render the entire blog by looping through all the posts and calling `render` on each one.


# Task 3: Styling & Layout

1. Add nav bar and page title
2. Use google fonts to customize the font
3. Make blog layout responsive. Use mobile-first principles to define style rules: define default styles for mobile viewports, then use a media query to establish style overrides for desktop
4. Contextualize author name, createdOn date, and tags with explanatory content
5. Improve formatting of date display.
6. Improve post body rendering with markdown support. Install [Markdown-It](https://github.com/markdown-it/markdown-it) via CDN. Convert the bodies of posts in data.js to markdown (see [Markdown Guide](https://www.markdownguide.org/)). Update the `renderBody` me