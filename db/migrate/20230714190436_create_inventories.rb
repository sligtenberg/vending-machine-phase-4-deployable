class CreateInventories < ActiveRecord::Migration[7.0]
  def change
    create_table :inventories do |t|
      t.integer :quantity
      t.integer :vending_machine_id
      t.integer :snack_id

      t.timestamps
    end
  end
end
