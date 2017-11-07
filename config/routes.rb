Rails.application.routes.draw do
  namespace :api do
    resources :books
  end
  root 'dashboard#index'

  namespace :api, defaults: { format: :json } do
    resources :products, only: [:index, :show, :create, :update, :destroy]
  end
end
