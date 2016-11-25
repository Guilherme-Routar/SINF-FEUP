class AddAvailabilityToBooks < ActiveRecord::Migration
  def change
    add_column :books, :availability, :boolean
  end
end
