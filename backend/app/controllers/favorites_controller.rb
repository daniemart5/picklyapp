class FavoritesController < ApplicationController

    def index
        @favorites = Favorite.all
        render @favorite, except: [:created_at, :updated_at]
    end 

    def show
        @favorite = Favorite.find(params[:id])
        render @favorite, except: [:created_at, :updated_at]
    end 

    def new
        @favorite = Favorite.new
    end 

    def created
        @favorite = Favorite.new(name:params[:name])
        @favorite.save
        render @favorite, except: [:created_at, :updated_at]
      
    end 

    def destory
        @favorite = Favorite.find(params[id])
        @favorite.delete
        session.clear
        render @favorite, except: [:created_at, :updated_at]
    end 
end
