class User
  attr_reader :username, :tweets

  def initialize(username)
    @username = username
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  # has many likes
  def likes
    Like.all.select do |like|
      like.user == self
    end
  end

  def like_tweet(tweet)
    # rob (or whoever self is) likes this tweet
    # tweet.user == self - did this user make this tweet?
    # self.likes << tweet
    # create a new Like object with the user and the tweet
    Like.new(self, tweet)
  end

  # has many liked_tweets through likes
  #liked_tweets - should return the tweets that the user liked
  def liked_tweets
    # how?
    # use the likes method - that gives us all the likes for this user
    #     go through that array, get the like.tweet - gives the list of tweets

    # why map?
    # we want a new array,
    # [ like1, like3 ].map => [ tweet1, tweet3 ]

    likes.map do |like|
      like.tweet
    end

    # returns a new array of the elements that match the condition
    # [ like1, like2, like3 ].select => [ like1, like3 ]
    # Like.all.select do |like|
    #   like.user.tweets
    # end

    # Tweet.all.select |tweet| based on something
  end

end
