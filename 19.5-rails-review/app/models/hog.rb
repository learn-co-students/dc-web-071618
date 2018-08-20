class Hog < ApplicationRecord
  belongs_to :farmer
  validates :name, presence: true
  validates :weight, numericality: {greater_than: 0}
  validates :farmer, presence: true
end
