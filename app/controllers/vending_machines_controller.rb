class VendingMachinesController < ApplicationController

  def index
    render json: VendingMachine.all, include: ['inventories', 'inventories.snack', 'inventories.vending_machine']
  end

  def create
    render json: @current_user.vending_machines.create!(vending_machine_params), status: :created
  end

  def destroy
    @current_user.vending_machines.find(params[:id]).destroy
    head :no_content
  end

  private

  # strong params
  def vending_machine_params
    params.permit(:name)
  end
  
end
