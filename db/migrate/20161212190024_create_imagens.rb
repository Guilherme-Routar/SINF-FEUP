class CreateImagens < ActiveRecord::Migration
  def change
    drop_table(:imagems)
    create_table :imagems do |t|

      t.timestamps null: false
    end
  end
end
