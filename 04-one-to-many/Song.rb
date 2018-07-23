require 'pry'


class Song
  @@genres = []
  @@all = []
  attr_accessor :name, :artist, :genre

  def initialize(name, artist, genre)
    @name = name
    @artist = artist
    @genre = genre
    #pushing new song instance into @@all
    @@all << self
    #pushing new song instance's genre into @@genres
    @@genres << self.genre
    #what is self inside this method?
    puts 'self inside of initialize', self
  end

  def print_song_instance
    puts "I'm an instance method", self
  end


  #class methods start with 'self'
  def self.all
    @@all
  end

  def self.genres
    @@genres.uniq
  end

  def self.num_genres
    @@genres.size
  end
  #What is self when we run a class method?
  def self.what_is_self
    puts 'self in a class method', self
  end


end


binding.pry
puts "hi"
