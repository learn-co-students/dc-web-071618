Rails.application.routes.draw do

  get 'sessions/new'
    resources :snacks
    resources :retailers, only: [:show, :index, :new, :create, :destroy]
    get '/login', to: 'sessions#new'
    post '/login', to: 'sessions#create'
    delete '/logout', to: "sessions#destroy"

end
