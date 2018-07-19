require 'pry'
require_relative './tweet.rb'
require_relative './user.rb'

cof_dad = User.new('coffee dad', 'coffee_dad', 'just a dad who loves his coffee')
mom = User.new("coffee mom", "coffee_mom1", "bio")
first_tweet = Tweet.new("having some coffee", cof_dad)
Tweet.new("geting some coffee", cof_dad)
Tweet.new("getting some coffee", mom)


binding.pry
"hi"
