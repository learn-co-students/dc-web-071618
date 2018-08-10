class CreateHogs < ActiveRecord::Migration[5.2]
  def change
    create_table :hogs do |t|

      t.timestamps
    end
  end
end
