class User < ApplicationRecord
    has_many: plans
    has_many: favorites 

end
