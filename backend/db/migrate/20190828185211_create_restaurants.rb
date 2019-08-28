class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :location
      t.string :kind
      t.string :website
      t.integer :rating
      t.integer :like

      t.timestamps
    end
  end
end
