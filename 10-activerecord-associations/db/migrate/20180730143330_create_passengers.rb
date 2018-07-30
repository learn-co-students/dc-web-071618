class CreatePassengers < ActiveRecord::Migration[5.2]
  def change
    create_table :passengers do |t|
      t.string :name
      
    end
    # add_column :passengers, :name, :string


  end
end
