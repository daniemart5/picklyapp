class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end 

  def login
    @user = User.find_by(username: params[:username])
    render json: @user
  end

  def show
    @user = User.find(params[:id])
    @restaurants = @user.restaurants
    @events = @user.events
    @favs = @user.favorites
    render json: {user: @user, favorites: @favs, restaurants: @restaurants, events: @events}
  end 

  def new
    @user = User.new
    render json: @user
  end 

    def create
    @user = User.new(
      name: params[:name], 
      username: params[:username], 
      bio: params[:bio], 
      age: params[:age], 
      city: params[:city]
    )
    if @user.save
      render json: @user, except: [:created_at, :updated_at]

      else
        puts "in error block"
        render json: {message: "There was an error", success: false, data: @user.errors}, status: 406
      end
    end 

    def destory
      @user = User.find(params[id])
      @user.delete
      session.clear
    end 
end