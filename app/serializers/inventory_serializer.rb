class InventorySerializer < ActiveModel::Serializer
  attributes :id, :quantity

  belongs_to :snack
  belongs_to :vending_machine
end
