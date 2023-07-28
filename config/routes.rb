Rails.application.routes.draw do
  
  # session routes:
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # user routes
  get '/me', to: 'users#show' # if user has a session, return user object (auto login)
  resources :users, only: [:create]

  # vending_machine routes:
  resources :vending_machines, only: [:index, :create, :destroy]

  # inventory routes:
  resources :inventories, only: [:create, :update, :destroy]

  # snacks routes:
  resources :snacks, only: [:index, :create, :destroy, :show]

  # FALLBACK ROUTE

  # render the html file
  # this route must be last in the routes file
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
