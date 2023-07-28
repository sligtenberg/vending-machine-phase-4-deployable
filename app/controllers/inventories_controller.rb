class InventoriesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_inventory_response

  # how to ensure inventory belongs to a vending machine that belongs to current user?
  def create
    inventory = Inventory.create!(inventory_params)
    render json: inventory, status: :created
  end

  def update
    inventory = find_inventory
    inventory.update!(inventory_params)
    render json: inventory
    end
  
  def destroy
    find_inventory.destroy
    head :no_content
  end

  def purchase
    inventory = Inventory.find(params[:id])
    inventory.update!(quantity: inventory.quantity - 1)
    render json: inventory
  end

  private

  def find_inventory
    @current_user.inventories.find(params[:id])
  end

  # strong params
  def inventory_params
    params.permit(:snack_id, :vending_machine_id, :quantity)
  end

  def render_unprocessable_inventory_response(exception)
    render json: { errors: exception.record.errors }, status: :unprocessable_entity
  end
  
end
