class Deal < ActiveRecord::Base
  validates :category, presence: true
  enum category: [:merger, :offering, :loan]
end
