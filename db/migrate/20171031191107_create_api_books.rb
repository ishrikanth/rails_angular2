class CreateApiBooks < ActiveRecord::Migration
  def change
    create_table :api_books do |t|
      t.string :name
      t.string :author
      t.float :price

      t.timestamps null: false
    end
  end
end
