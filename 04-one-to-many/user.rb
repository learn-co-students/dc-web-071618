# User

# name
# handle
# description
# joined_date


# has many tweets
# tweets

class User
  attr_accessor :name, :handle, :description
  attr_reader :joined_date

  def initialize(name, handle, description)
    @name = name
    @handle = handle
    @description = description
    @joined_date = Time.now
  end

  # how does this work?
    # ideas:

    # - when we make a new tweet, store in an array (in the user)
    # - push message into an array


    # - store an array of tweets in the tweet class, find the tweets by their user
    # - use a class variable on Tweet as the arry of all the tweets
    # should return an array of tweet objects
  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def print_tweets
  end

  def post_tweet(message)
    # should create a tweet by this user
  end
end
