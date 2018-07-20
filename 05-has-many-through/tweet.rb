class Tweet
  attr_accessor :message, :user

  # single source of truth
  @@all = []
  # only one bucket of tweets - prevents errors where the data is out of sync

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end

  def username
    # @user.username - instance variable
    # self.user.username - getter method
    # implicit self
    user.username
  end

  # has many likes
  def likes
    Like.all.select do |like|
      like.tweet == self
    end
  end


  # has many likers (User) through likes
  def likers
    # Goal: [ user1, user2 ]
    # Go through the array of likes (we already have a method to get the likes for this tweet!)
    # (starting point might be Like.all)
    # [ like1, like2 ]  => [ user1, user2 ] map!
    likes.map do |like|
      like.user
    end
  end

  def like_count
  end

  def likers_names
  end

  def set_user(user)
    # implicit self doesn't work for writer methods
    # user = user
    # explicit works!
    self.user = user
  end
end
