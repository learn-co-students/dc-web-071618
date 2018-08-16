require 'pry'
class Person
  attr_accessor :name, :age
  def initialize(name, age)
    @name = name
    @age = age
  end
end

def get_name
  puts 'enter name'
  name = gets.chomp
  name
end

def get_age
  puts 'enter age'
  age = gets.chomp
  age
end

me = Person.new(get_name, get_age)
binding.pry
puts true
