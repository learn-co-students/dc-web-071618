class Driver < ActiveRecord::Base
  # defines methods on Driver
  has_many :rides
  has_many :passengers, through: :rides
  has_many :mice, through: :passengers
end

# Driver#rides
  # not just a getter!
  # also lets us shovel in more data (it will persist to the database)

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
