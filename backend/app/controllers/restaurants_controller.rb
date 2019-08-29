class RestaurantsController < ApplicationController
    def index
        @restaurants = Restaurant.all
        render @restaurant, except: [:created_at, :updated_at]
    end 

    def show
        @restaurant = Restaurant.find(params[:id])
        render @restaurant, except: [:created_at, :updated_at]
    end
end
