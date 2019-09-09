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

    def create
    @user = User.create(user_params)
       if @user.valid?
              render json: { user: @user }, status: :created
            else
              render json: { error: 'failed to create user' }, status: :not_acceptable
          end  
    end 

    def destory
        user = User.find(params[id])
        user.delete
        session.clear
        render json: user, except: [:created_at, :updated_at]
    end 
  
  private
    def user_params
      params.permit(:id, :name, :username, :password, :age, :city)
    end
end