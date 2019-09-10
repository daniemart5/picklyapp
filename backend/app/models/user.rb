class User < ApplicationRecord
    has_many :plans
    has_many :favorites 
    has_many :restaurants, through: :favorites, source: :favorite, source_type: 'Restaurant'
    has_many :events, through: :favorites, source: :favorite, source_type: 'Event'
    
    validates :username, uniqueness: { case_sensitive: false }

end
