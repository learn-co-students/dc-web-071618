# * Like class
#   * `Like#tweet` - what tweet was liked
#   belongs to a tweet
#   * `Like#user` - which user liked this tweet
#   belongs to a user
#   * `Like.all` - return all the likes


class Like
  attr_reader :user, :tweet

  # single source of truth for likes
  @@all = []

  def initialize(user, tweet)
    @user = user
    @tweet = tweet
    @@all << self
  end

  def self.all
    @@all
  end
end
