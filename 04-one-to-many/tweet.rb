# Tweet
# user
# message
# id
# time

## For later
# replies
# retweets

class Tweet
  attr_reader :message, :time, :user, :id

  @@counter = 0
  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @id = Tweet.get_id
    @time = Time.now
    @@all << self
  end

  def self.get_id
    @@counter += 1
  end

  def self.all
    @@all
  end

  def self.delete(id)
    self.all.delete_if do |tweet|
      tweet.id == id
    end
  end
end
