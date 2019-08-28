class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.string :location
      t.string :description
      t.string :kind
      t.string :website
      t.integer :rating
      t.integer :like

      t.timestamps
    end
  end
end
