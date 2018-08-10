class AddColumnsToHogs < ActiveRecord::Migration[5.2]
  def change
    add_column :hogs, :name, :string
    add_column :hogs, :weight, :integer
    add_column :hogs, :catchphrase, :string
  end
end
