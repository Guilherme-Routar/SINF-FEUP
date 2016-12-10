class AddEntidadeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :entidade, :string
  end
end
