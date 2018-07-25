class Review
  @@all = []

  attr_accessor :user, :album, :content

  def initialize(user, album, content)
    @user = user
    @album = album
    @content = content
    @@all << self
  end

  ## returns an array of reviews sorted by the 'content' property's length, shortest to longest
  def self.order_reviews
    self.all.sort_by{ |r| r.content.length }
  end


  ## returns the review at order_reviews '0' index, i.e. the shortest review
  def self.shortest_review
    order_reviews[0]
  end

  ## returns the review at order_reviews '-1' index, i.e. the longest review
  def self.longest_review
    order_reviews[-1]
  end


  def self.all
    @@all
  end
end
