Rails.application.routes.draw do
  root to: "dashboard#index"

  resources :inventories, only: [:index]
end
