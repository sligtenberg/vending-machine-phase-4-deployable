class InventorySerializer < ActiveModel::Serializer
  attributes :id, :quantity

  belongs_to :snack
end
