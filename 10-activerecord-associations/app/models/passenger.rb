class Passenger < ActiveRecord::Base
  has_many :rides
  has_many :drivers, { through: :rides }
  has_many :mice

  # ourselves
  # def drivers
    # rides.map { |r| r.driver }
  # end
end
