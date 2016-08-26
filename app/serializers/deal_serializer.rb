class DealSerializer < ActiveModel::Serializer
  attributes :id, :name, :category
  has_many :documents
end
