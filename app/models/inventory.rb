class Inventory < ApplicationRecord
  belongs_to :snack
  belongs_to :vending_machine

  validates :quantity, numericality: { greater_than_or_equal_to: 0 }
  validates :snack_id, uniqueness: { scope: :vending_machine_id }
  validate :twelve_snack_max

  def twelve_snack_max
      errors.add("12 Snack Max") unless Inventory.where(vending_machine_id: self.vending_machine_id).length < 12
  end

end
