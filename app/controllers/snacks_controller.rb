class SnacksController < ApplicationController

  def index
      render json: Snack.all
  end

  def create
      snack = Snack.create!(snack_params)
      render json: snack, status: :created
  end

  def destroy
    snack = find_snack
    unless snack.inventories.length > 0
      snack.destroy
      head :no_content
    else
      # this is not rendering properly
      render json: { errors: ["Snack is in use"] }, status: :unauthorized
    end
  end

  private

  def find_snack
      Snack.find(params[:id])
  end

  # strong params
  def snack_params
      params.permit(:name, :price)
  end

end
