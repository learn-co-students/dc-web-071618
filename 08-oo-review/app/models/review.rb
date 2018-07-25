class Review
  @@all = []

  attr_accessor :user, :album, :content

  def initialize(user, album, content)
    @user = user
    @album = album
    @content = content
    @@all << self
  end

  def self.order_reviews
    self.all.sort_by{ |r| r.content.length }
  end

  def self.longest_review
    order_reviews[-1]
  end

  def self.shortest_review
    order_reviews[0]
  end

  def self.all
    @@all
  end
end
