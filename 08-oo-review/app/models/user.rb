class User

  attr_accessor :first, :last
  @@all = []

  ## initializes a user instance with a first name and a last name
  ## shovels each instance into class variable @@all
  def initialize(first, last)
    @first = first
    @last = last
    @@all << self
  end

  ## Selects all instances from Review class
  ## Returns the instances that have this specific user as the reviewer
  def reviews
    Review.all.select {|r| r.user == self}
  end

  ## Creates a new review instance with an album object, a content string and this user instance
  def add_review(album, content)
    Review.new(self, album, content)
  end


  ## uses reviews method to return this user instance's reviews
  ## selects the instances where the album matches the album specified in the method's argument
  def album_reviews(album)
    reviews.select {|r| r.album == album} ## boolean
  end

  ## returns all of the user instances
  def self.all
    @@all
  end

end
