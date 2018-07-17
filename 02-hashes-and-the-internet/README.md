# Hashes and the Internet

### Define

* GET requests
* Server responses
* Developer console
* Gems
* APIs
* JSON (string formatted as a hash/object)

types of responses that we can get from servers:
* html
* images
* javascript
* css

* json
lets us send data between servers and clients

## Gems

external libraries (code we didn't write)
we can use to do something

```
gem install some-name
```

downloading the code onto our computer - `require` finds that code, loads it

parse - take apart a string, turn it into something more useful


## API

Application Programming Interface

HTTP RESTful JSON API - some web server that gives us data (lets us create data) on some service

Google Books API


## HTTP URLs

`http://...`
`?q=quilting&limit=5`
q: quilting
limit: 5

### Deliverables

* Write an application that takes a search term from a user

use gets

* Make a Request to the GoogleBooks API and get back some results
  * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
  
* Display the titles, author names, and description for each book
