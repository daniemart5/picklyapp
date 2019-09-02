class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, except: [:created_at, :updated_at]
    end 

    def show
        user = User.find(params[:id])
        render json: user, except: [:created_at, :updated_at]
    end 

    def new
        user = User.new
    end 

    def created
        user = User.new(name:params[:name])
        user.save
        render json: user, except: [:created_at, :updated_at]
      
    end 

    def destory
        user = User.find(params[id])
        user.delete
        session.clear
        render json: user, except: [:created_at, :updated_at]
    end 

end
