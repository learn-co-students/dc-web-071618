class Driver < ActiveRecord::Base
  has_many :rides
end

  # What we had to do before
  # attr_accessor :name
  # def self.find(id)
    # result = DB[:conn].execute("Select * FROM drivers where id = ?", id)
    # Driver.new(result)
  # end


  # attr_accessor
  # initialize
  # self.find
  # self.all
  # save
  # update
  # delete
  # has_many rides
  # has_many passengers through rides
