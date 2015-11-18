class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :pic
      t.text :bio
      t.integer :followers

      t.timestamps null: false
    end
  end
end
