Rails.application.routes.draw do

    resources :snacks
    resources :retailers, only: [:show, :index, :new, :create, :destroy]
    resources :users, only: [:new, :create]
    get '/login', to: 'sessions#new'
    post '/login', to: 'sessions#create'
    delete '/logout', to: "sessions#destroy"

end
