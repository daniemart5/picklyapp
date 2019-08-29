class UsersController < ApplicationController

    def index
        @users = User.all
        render @user, except: [:created_at, :updated_at]
    end 

    def show
        @user = User.find(params[:id])
        render @user, except: [:created_at, :updated_at]
    end 

    def new
        @user = User.new
    end 

    def created
        @user = User.new(name:params[:name])
        @user.save
        render @user, except: [:created_at, :updated_at]
      
    end 

    def destory
        @user = User.find(params[id])
        @user.delete
        session.clear
        render @user, except: [:created_at, :updated_at]
    end 

end
