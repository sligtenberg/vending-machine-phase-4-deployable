Rails.application.routes.draw do

  # DEVELOPMENT ROUTES - MUST DELETE FOR PRODUCTION
  resources :inventories
  resources :snacks
  resources :vending_machines
  resources :users

  # PRODUCTION ROUTES

  # FALLBACK ROUTE
  # this route should be last in the routes list, and causes the page to render the html file
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
