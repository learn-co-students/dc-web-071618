class CreateRides < ActiveRecord::Migration[5.2]
  def change
    # create rides table
    # rides connect passenger and driver
    create_table :rides do |t|
      t.integer :driver_id
      t.integer :passenger_id
      t.integer :distance_in_km
      t.integer :fare_in_rubies
      t.datetime :start
      t.datetime :end
    end
  end
end
