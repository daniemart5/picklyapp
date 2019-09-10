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
    render json: {restaurants: @restaurants, events: @events}
  end 

  def new
    @user = User.new
    render json: @user
  end 

    def create
    @user = User.create(name: params[:name], username: params[:username], bio: params[:bio], age: params[:age], city: params[:city])
    render json: @user
    end 

    def destory
      @user = User.find(params[id])
      @user.delete
      session.clear
    end 
end