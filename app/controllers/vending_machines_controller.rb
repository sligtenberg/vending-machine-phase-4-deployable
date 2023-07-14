class VendingMachinesController < ApplicationController

  def index
    render json: VendingMachine.all
  end
  
end
