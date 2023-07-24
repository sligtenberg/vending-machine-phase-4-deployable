class VendingMachinesController < ApplicationController

  def index
    render json: VendingMachine.all, include: ['inventories', 'inventories.snack', 'inventories.vending_machine']
  end
  
end
