class InventorySerializer < ActiveModel::Serializer
  attributes :id, :quantity, :vending_machine_id

  belongs_to :snack
  #belongs_to :vending_machine
end
