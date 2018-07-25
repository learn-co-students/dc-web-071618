class Album

  attr_accessor :title, :artist, :year

  @@all = []
  def initialize(title, artist, year)
    @title = title
    @artist = artist
    @year = year
    @@all << self
  end

  def reviews
    Review.all.select { |r| r.album == self }
  end

  def self.find_by_title(title)
    self.all.find {|a| a.title == title}
  end

  def self.all
    @@all
  end

end
