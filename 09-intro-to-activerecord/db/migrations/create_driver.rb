class CreateDriver < ActiveRecord::Migration[5.2]
  def change
    # create the Driver table
    # with columns name, make, model
    create_table :drivers do |t|
      t.string :name
      t.string :make
      t.string :model
    end
  end
end
