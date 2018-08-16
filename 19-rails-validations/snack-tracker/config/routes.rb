Rails.application.routes.draw do

    resources :snacks
    resources :retailers, only: [:show, :index, :new, :create, :destroy]
end
