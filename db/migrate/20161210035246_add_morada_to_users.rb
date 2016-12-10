class AddMoradaToUsers < ActiveRecord::Migration
  def change
    add_column :users, :morada, :string
  end
end
