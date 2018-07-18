require 'pry'

class Cat

    attr_accessor :name, :number_of_legs # getter and setter
    attr_reader :color # getter
    attr_writer :floofiness # setter

    @@all = []

    def initialize(name, color, floofiness, number_of_legs=4)
        @name = name
        @color = color
        @floofiness = floofiness
        @number_of_legs = number_of_legs
        @@all << self # object itself, i.e., Ella or Lexi
        puts "I have created a cat.  I am god"
    end 

    def self.all  # class method, self means Cat
        # @@all.map do |cat|
        #     cat.name
        # end
        puts "I am a class method"
        @@all
    end

    def all
        puts "I am an instance method"
        @@all
    end

    def self.cats_are_great
        puts "Cats rule, dogs drool."  
    end

    # def name=(name) # setter method
    #     @name = name
    # end

    # def name # getter method
    #     @name
    # end

    # def floofiness=(floofiness)
    #     @floofiness = floofiness
    # end

    def floofiness
        if @floofiness > 5
            return "I am very floofy"
        else
            return "I am not so floofy"
        end
    end

    # def color=(color)
    #     @color = color
    # end

    # def color
    #     @color
    # end
    # def say_hi
    #     puts "Hi #{@something_else}"
    # end

    def introduce
        puts "Hello my name is #{self.name} and #{self.floofiness}"
        # @thing directly accesses the attribute
        # self.thing calls the method
    end

    def meow
        puts "Meow I am a cat"
    end


end


ella = Cat.new("Ella", "black", 10)
lexi = Cat.new("Lexi", "orange", 5, 4)
# ella.name = "Ella"
# ella.color = "black"
# ella.floofiness = 10
binding.pry
puts "hello"