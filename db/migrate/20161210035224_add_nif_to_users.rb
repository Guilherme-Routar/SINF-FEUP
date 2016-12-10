class AddNifToUsers < ActiveRecord::Migration
  def change
    add_column :users, :nif, :integer
  end
end
