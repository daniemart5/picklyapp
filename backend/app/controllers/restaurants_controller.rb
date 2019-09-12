require 'pry'
require 'HTTParty'
require 'json'

class RestaurantsController < ApplicationController
    
    def index
        @restaurants = Restaurant.all
        render json: @restaurants, except: [:created_at, :updated_at]
    end 


    def show
        @restaurant = Restaurant.find(params[:id])
        render json: @restaurant, except: [:created_at, :updated_at]
    end
end
