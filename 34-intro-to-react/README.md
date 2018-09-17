# Intro to React

- Discuss Vanilla JS
- Brief History/Context
- Project Set Up
- Briefly on Virtual DOM
- Navbar Student Exercise
- JSX

## Challenges in Mod 3

Updating the DOM to reflect changes in your data
Managing State
state lives in different places
difficult to keep the DOM in sync correctly
keep track of changes to state
How to organize code

## Brief History/Context
- React is made by Facebook.
- There are two libraries react, react-dom
- this is to divide up the functionality and enables react-native, react-vr, etc.

## Project Set Up

First, npm install --save react react-dom semantic-ui-css.

npm differs from installing gem.
node_modules folder, we're just linking to js/css files in our index.html. I've had some issues if I do not use these specific links:

```html
<link rel="stylesheet" type="text/css" href="node_modules/semantic-ui-css/semantic.min.css">
<script src="node_modules/react/umd/react.development.js"></script>
<script src="node_modules/react-dom/umd/react-dom.development.js"></script>
```

Now in index.js ReactDOM.render take two args:

ReactDOM.render(whatToAddToDOM, whereToPutIt);

The second arg is the only place we will be using code from mod 3 such as document.getElementById('main').

whatToAddToDOM: we need to add a React Element!

```js
ReactDOM.render(React.createElement('h1'), document.getElementById('main'));
```

And inspect the HTML, an h1 will be there, but we won't see any text. Change it to:

```
ReactDOM.render(
  React.createElement('h1', {}, 'hello'),
  document.getElementById('main')
);
```
And we'll see it on the page!

## Virtual DOM
React.createElement returns an object -- that's it! That's what the Virtual DOM is, a plain JS object that builds up a picture of what the real DOM should look like.

Reminder: html is just a string, the DOM is a representation of that string we can interact with programmatically, ask questions to, etc.

Virtual DOM is a representation of that representation. React will be in charge of making sure the real DOM looks like and will always be in sync with the virtual DOM.

Declarative vs. Imperative - 'what it is' vs. 'steps to follow'

## Our First Component
Now present the problem of wanting to create an "Article", i.e. some type of title in an h1, followed by the text in a p tag. How can we do this?

Someone should know that you'll have to wrap the whole thing in another element such as a div. Point out that this isn't like a React thing its just a programming thing. CreateElement is a function that returns an object. You can't return 2 things from a function. Talk through children being an array (not nested nodes, but siblings)

Refactor to a function:

```
const Article = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.title),
    React.createElement('p', {}, props.text)
  ]);
};

ReactDOM.render(
  Article({ title: 'Title', text: 'some text' }),
  document.getElementById('main')
);
```

## Challenge
If we were able to write a function which returns a React element which produces some html, we should be able to continue building out functions which return React elements.

```html
<div class="ui inverted orange menu">
  <a class='item'>
    <h2 class="ui header">
      <i class="paw icon"></i>
      <div class="content">
        ZooKeepr
      </div>
      <div class="sub header">
        Keep track of your animals
      </div>
    </h2>
  </a>
</div>
```

Student Task: write a function called Navbar to be used like this:
```js
const Navbar = props => {
  // ...
};

ReactDOM.render(
  Navbar({
    title: 'ZooKeepr',
    icon: 'paw',
    color: 'green',
    description: 'keep track of your animals'
  }),
  document.getElementById('main')
);
```

## Imports and JSX
