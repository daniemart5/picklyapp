class EventsController < ApplicationController

    def index
        @events = Event.all
        render @event, except: [:created_at, :updated_at]
    end 

    def show
        @event = Event.find(params[:id])
        render @event, except: [:created_at, :updated_at]
    end  
end
