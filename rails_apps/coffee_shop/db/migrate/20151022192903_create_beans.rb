class CreateBeans < ActiveRecord::Migration
  def change
    create_table :beans do |t|
      t.string :roast
      t.integer :cost
      t.string :name

      t.timestamps null: false
    end
  end
end
