class VendingMachineSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :inventories
end
