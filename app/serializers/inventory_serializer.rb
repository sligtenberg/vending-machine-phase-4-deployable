class InventorySerializer < ActiveModel::Serializer
  attributes :quantity

  belongs_to :snack
end
