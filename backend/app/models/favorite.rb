class Favorite < ApplicationRecord
    belongs_to :users
    belongs_to :favorites, polymorphic: true
end
