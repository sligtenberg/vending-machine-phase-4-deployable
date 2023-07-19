class UserSerializer < ActiveModel::Serializer
  attributes :username

  has_many :vending_machines
end
