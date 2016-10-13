class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :owner
      t.string :brand
      t.text :desciption
      t.integer :price
      t.boolean :availability, default: true


      t.timestamps null:false
    end
  end
end
