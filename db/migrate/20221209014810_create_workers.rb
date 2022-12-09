class CreateWorkers < ActiveRecord::Migration[7.0]
  def change
    create_table :workers do |t|
      t.string :name
      t.integer :age
      t.boolean :fav

      t.timestamps
    end
  end
end
