class User < ApplicationRecord
  has_many :vending_machines
  has_many :inventories, through: :vending_machines

  has_secure_password
  validates :username, presence: true, uniqueness: true
end
