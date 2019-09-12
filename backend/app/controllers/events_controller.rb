class EventsController < ApplicationController

    def index
        events = Event.all
        render json: events, except: [:created_at, :updated_at]
    end 

    def show
        event = Event.find_by(params[:id])
        render json: event, except: [:created_at, :updated_at]
    end  
end
