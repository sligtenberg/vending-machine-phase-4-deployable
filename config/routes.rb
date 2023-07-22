Rails.application.routes.draw do
  
  # session routes:
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # user routes
  get '/me', to: 'users#show' # if user has a session, return user object (auto login)
  resources :users, only: [:create] # create a new user

  # vending_machine routes:
  get '/vending_machines', to: 'vending_machines#index' # get all vending_machines

  # inventory routes:
  resources :inventories, only: [:create] # create a new inventory

  # snacks routes:
  resources :snacks, only: [:index] # get all the snacks

  # FALLBACK ROUTE

  # render the html file
  # this route must be last in the routes file
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
