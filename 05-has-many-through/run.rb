require 'pry'
require_relative './tweet.rb'
require_relative './user.rb'
require_relative './like.rb'

coffee_dad = User.new('coffee dad')
first_tweet = Tweet.new('getting coffee', coffee_dad)
second_tweet = Tweet.new('sipping coffee', coffee_dad)
rob = User.new('Rob')
Like.new(rob, first_tweet)

binding.pry

true
