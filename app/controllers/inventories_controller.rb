class InventoriesController < ApplicationController

  def index
    render json: Inventory.all
  end
  
end
