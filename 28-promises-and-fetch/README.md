## AJAX, Promises, and Fetch
- What is AJAX?
- What is block vs non-blocking code?
```
let start = new Date().getTime();
let now = start;
while(now < start + 10000) {
  now = new Date().getTime();
}
console.log('done')
```
```
setTimeout(function(){console.log('done')}, 10000)
```

### How do we handle async code?
- For example, event listeners
- What about for APIs?

### Welcome Fetch
- Built in web api
- Returns a promise object
- want to get the json data

### Promises and what are they
- [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- pending/fulfilled
- How to unwrap a promise using `.then`
- At Flatiron, we will work with promises via Fetch rather than creating our own Promises

//fetch to an API
//convert the httpResponse object we get back by using .json()
//do something with that json data (console.log)

### Promise chaining
- `.then().then()`
- Easier to read, easier to manage

### Create an App
- pseudo code and plan it out

### Mocking your own API
```
json-server --watch db.json
```

### JSON Server Routes
```
GET    /pokemon
GET    /pokemon/1
POST   /pokemon
PUT    /pokemon/1
PATCH  /pokemon/1
DELETE /pokemon/1
```

POST - create a brand new resource
PATCH - update an existing resource
PUT - update an existing resource

With a POST request, you need the body to be a string (JSON.stringify({}))
```
fetch(url, {options object})
.then(response => response.json())
.then(jsonData => {
  //do something with the jsonData
})
```

### Weekend Priority
- All labs up to this point in the order when they were deployed/taught (JS, DOM, Fetch)
  - Including work under the Assignments Tab
  - You can skip Gravatar and Task Lister Project
- Object Oriented JS Labs

- Toy Tale is also deployed(<--Refer to today's lecture videos and notes)
- Come back to Gravatar and Task Lister Project
















```XHR (web API)
  const req = new XMLHttpRequest()
  req.addEventListener("load", function(){
		console.log(JSON.parse(this.responseText))
	});
  req.open("GET", 'https://pokeapi.co/api/v2/pokemon/')
  req.send()
```
```FETCH (web API)
	fetch(`https://pokeapi.co/api/v2/pokemon/`)
	.then(response => response.json())
	.then(json => {
		console.log(json)
	})
```
