class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.string :location
      t.string :description
      t.string :type
      t.string :website
      t.int :rating
      t.int :like

      t.timestamps
    end
  end
end
