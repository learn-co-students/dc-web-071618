class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :age, :color, :quote
  has_many :hobbies
end
