class Tweet
  attr_accessor :message, :username, :id
  # @@all = []

  def initialize(props={})
    @id = props['id']
    @message = props['message']
    @username = props['username']
    # @@all << self
  end

  def persisted?
    # if it has an id, it's been saved to the database
    # otherwise, it hasn't been saved
    !!id
  end

  # C
  def save
    if persisted?
      # it's already in the database
      # we should update instead of inserting
      sql = <<-SQL
UPDATE tweets
SET username=?,
message=?
WHERE id = ?;
SQL
      DB[:conn].execute(sql, self.username, self.message, self.id)
    else
      DB[:conn].execute("INSERT INTO tweets (username, message) VALUES (?, ?);", self.username, self.message) # returns an empty array
      # should return the tweet
      # should have the id!
      saved_tweet_data = DB[:conn].execute("SELECT * from tweets WHERE id = last_insert_rowid()")
      self.id = saved_tweet_data[0]["id"]
    end
    self
  end

  # should have an array of Tweet objects from our database
  def self.all
    # @@all
    # transform this array into an array of Tweet instances
    DB[:conn]
    .execute("SELECT * FROM tweets;")
    .map { |hash| Tweet.new(hash) }
  end

  def self.last
  end

  # R
  # U
  # D
end
