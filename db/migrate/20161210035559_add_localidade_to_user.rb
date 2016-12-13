class AddLocalidadeToUser < ActiveRecord::Migration
  def change
    add_column :users, :localidade, :string
  end
end
