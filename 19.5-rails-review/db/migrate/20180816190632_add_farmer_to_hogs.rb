class AddFarmerToHogs < ActiveRecord::Migration[5.2]
  def change
    add_column :hogs, :farmer_id, :integer
  end
end
