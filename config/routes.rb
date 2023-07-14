Rails.application.routes.draw do

  # DEVELOPMENT ROUTES - MUST DELETE FOR PRODUCTION
  resources :inventories
  resources :snacks
  resources :vending_machines
  resources :users

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
