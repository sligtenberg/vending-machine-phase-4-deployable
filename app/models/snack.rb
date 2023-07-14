class Snack < ApplicationRecord
  has_many :inventories
  has_many :vending_machines, through: :inventories
  
  validates :name, presence: true
  validates_uniqueness_of :name, :case_sensitive => false
  validates :price, numericality: { greater_than: 0 }
end
