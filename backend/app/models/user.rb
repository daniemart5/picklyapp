class User < ApplicationRecord
    has_many :plans
    has_many :favorites 
    has_many :restaurants, through: :favorites, source: :favorite, source_type: 'restaurant'
    has_many :events, through: :favorites, source: :favorite, source_type: 'event'


end
