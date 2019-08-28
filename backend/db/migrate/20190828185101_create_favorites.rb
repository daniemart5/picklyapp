class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.int :user_id
      t.int :favorite_id
      t.string :favorite_type

      t.timestamps
    end
  end
end
