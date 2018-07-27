# OO Review - many 2 many

### Domain

- this app will mimic an online album review site, like you might find on allmusic.com or last.fm

- the models will be `users`, `albums`, and `reviews`

- a user has many reviews, an album has many reviews, and a review belongs to a user and an album

### Models

`User` - has many reviews  
`Review` - belongs to user and belongs to album  
`Album` - has many reviews

### Notes

As this is a review for Friday's code challenge, we will be working with an environment consisting of pry, a few other gems and the terminal. There will be **no tests** like there are in the labs. `config/environment.rb` is set up so that each of the files in the 'app' directory are connected to one another. Seed Data will be placed in `tools/console.rb`, directly before `Pry` is executed. This way, all of your classes will have loaded and instances initialized by the time the repl opens. To run your code, simply enter `tools/console.rb` in the terminal.

### QUESTIONS!!!

```
- how do we relate classes through other classes?
```

### Methods

## User

#### Class Methods

- `User.all`: should return **all** of the user instances
- `User.find_by_name(name)`: given a string of a **full name**, returns the first users whose full name matches
- `User.all_names`: should return an array of all of the user full names

#### Instance Methods

- `User#full_name`: returns a user's first and last name together
- `User#reviews`: return a unique list of a given user's reviews
- `User#album_reviews(album)`: return a user's reviews of a given album
- `User#add_review(album, review_content)`: add a new album review for a given user

## Album

#### Class Methods

- `Album.all`: returns an array of all the albums
- `Album.find_by_title(title)`: given a string of an album title, return the album hash that matches

#### Instance Methods

- `Album#reviews`: returns an array of all of an album's reviews
- `Album#reviewers`: returns a unique list of all users who have reviewed an album
- `Album#longest_review`: returns the review with the longest 'content' property

## Reviews

#### Class Methods

- `Review.all`: returns an array of all reviews

#### Instance Methods

- `Review#user`: returns the user object for a given review. Once a review has been made, the user should not change.
- `Review#album`: returns the album object for a given review. Again, no changing!
- `Review#content`: returns the text of a review object's content property
