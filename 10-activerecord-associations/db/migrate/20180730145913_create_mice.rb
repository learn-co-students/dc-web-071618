class CreateMice < ActiveRecord::Migration[5.2]
  def change
    create_table :mice do |t|
      t.string :name
      t.integer :size_in_cm
      t.string :cheese_preference
    end
  end
end
