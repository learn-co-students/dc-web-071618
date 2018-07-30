class AddPassengerIdToMice < ActiveRecord::Migration[5.2]
  def change
    add_column :mice, :passenger_id, :integer
  end
end
