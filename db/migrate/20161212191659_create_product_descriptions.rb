class CreateProductDescriptions < ActiveRecord::Migration
  def change
    drop_table(:product_descriptions)
    create_table :product_descriptions do |t|
      t.string :description
      t.string :idProduto

      t.timestamps null: false
    end
  end
end
