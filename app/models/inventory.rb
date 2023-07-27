class Inventory < ApplicationRecord
  belongs_to :snack
  belongs_to :vending_machine

  validates :quantity, numericality: { in: 0..999, message: -> (object, data) do
      "Quantity must be between 0 and 999"
    end
  }
  
  validates :snack_id, uniqueness: { scope: :vending_machine_id, message: -> (object, data) do
      "#{object.vending_machine.name} already has #{object.snack.name}!"
    end
  }

  validate :twelve_snack_max

  def twelve_snack_max
      errors.add("Vending Machines can have up to 12 snacks") unless Inventory.where(vending_machine_id: self.vending_machine_id).length < 12
  end

end
