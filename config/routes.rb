Rails.application.routes.draw do

  # DEVELOPMENT ROUTES - MUST DELETE FOR PRODUCTION
  # resources :inventories, only: [:index]
  # resources :snacks, only: [:index]
  # resources :vending_machines, only: [:index]
  # resources :users, only: [:index]

  # PRODUCTION ROUTES

  # auto login route:
  get '/me', to: 'users#show'

  # session routes:
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # FALLBACK ROUTE

  # this route should be last in the routes list, and causes the page to render the html file
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
