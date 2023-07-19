class VendingMachinesController < ApplicationController

  def index
    render json: VendingMachine.all, include: ['inventories', 'inventories.snack']
  end
  
end
