class AddNomeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :nome, :string, :null_=> false
  end
end
