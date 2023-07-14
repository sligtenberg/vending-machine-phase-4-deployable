class InventorySerializer < ActiveModel::Serializer
  attributes :id, :quantity, :vending_machine_id, :snack_id
end
