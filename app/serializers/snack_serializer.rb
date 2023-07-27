class SnackSerializer < ActiveModel::Serializer
  attributes :id, :name, :price

  has_many :vending_machines
end
