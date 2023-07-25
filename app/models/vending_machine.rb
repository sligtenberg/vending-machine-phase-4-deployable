class VendingMachine < ApplicationRecord
  belongs_to :user
  has_many :inventories, dependent: :destroy
  has_many :snacks, through: :inventories

  validates :name, presence: true, uniqueness: { message: -> (object, data) do
      "#{object.name} aleady exists!"
    end
  }

end
