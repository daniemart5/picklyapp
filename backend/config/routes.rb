Rails.application.routes.draw do
  resources :restaurants
  resources :events
  resources :favorites
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
