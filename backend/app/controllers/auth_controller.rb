class AuthController < ApplicationController

    def create
        @user = User.find_by(username: params[:user][:username])
        if @user.authenticate(params[:user][:password])
            render json: @user
        else 
            render json: { error: 'Incrrect Password' }, status: :not_acceptable
        end 
    end   
end
