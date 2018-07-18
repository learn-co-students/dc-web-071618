# ### Deliverables
#
# * Write an application that takes a search term from a user
#
# use gets
#
# * Make a Request to the GoogleBooks API and get back some results
#   * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
#
# * Display the titles, author names, and description for each book

require 'rest-client'
require 'json'
require 'pry'

# makes URL a constant, defined everywhere
URL = "https://www.googleapis.com/books/v1/volumes?q="

# STEPS:
# get the user input

def get_user_input
  puts "What kinds of books are you interested in?"
  gets.chomp
end

# get the data that we want
def get_data_from_books_api
  input = get_user_input
  url_to_fetch = URL + input
  RestClient.get(url_to_fetch).body
end

# parse the data - format correctly
def parse_data
  JSON.parse(get_data_from_books_api)
end

# dig into the data to find specific pieces we want
# title, author name, description for each book
def print_one_book(book)
  volume_info = book["volumeInfo"]
  puts volume_info["title"]
  puts volume_info["authors"]
  puts volume_info["description"]
end

# loop through all of the books
def get_and_print_books
  result = parse_data
  result["items"].each do |book|
    print_one_book(book)
    puts "\n"
  end
end

# binding.pry
puts "hi"
get_and_print_books
