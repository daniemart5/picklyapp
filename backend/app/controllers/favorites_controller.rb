class FavoritesController < ApplicationController

    def index
        @favorites = Favorite.all
        render json: @favorites, except: [:created_at, :updated_at]
    end 

    def show
        @favorite = Favorite.find(params[:id])
        render json: @favorite, except: [:created_at, :updated_at]
    end 

    def new
        @favorite = Favorite.new
    end 

    def create
        @favorite = Favorite.create(user_id: params[:user_id], favorite_id: params[:favorite_id], favorite_type: params[:favorite_type])
        render json: @favorite, except: [:created_at, :updated_at]
    end 

    def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.delete
        render json: @favorite
    end 
end
