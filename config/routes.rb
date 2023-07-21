Rails.application.routes.draw do

  # DEVELOPMENT ROUTES - MUST DELETE FOR PRODUCTION
  # resources :inventories, only: [:index]
  resources :snacks, only: [:index]
  # resources :vending_machines, only: [:index]
  # resources :users, only: [:index]

  # PRODUCTION ROUTES

  # auto login route:
  
  # session routes:
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # user routes
  get '/me', to: 'users#show' # if user has a session, return user object
  post '/users', to: 'users#create' # create a new user

  # vending_machine routes:
  get '/vending_machines', to: 'vending_machines#index'

  # FALLBACK ROUTE

  # this route should be last in the routes list, and causes the page to render the html file
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
