class User

  attr_accessor :first, :last
  @@all = []

  def initialize(first, last)
    @first = first
    @last = last
    @@all << self
  end

  def reviews
    Review.all.select {|r| r.user == self}
  end

  def add_review(album, content)
    Review.new(self, album, content)
  end

  def album_reviews(album)
    reviews.select {|r| r.album == album} ## boolean
  end

  def self.all
    @@all
  end

end
