class DocumentSerializer < ActiveModel::Serializer
  attributes :id, :name, :content, :complete
  has_one :deal, serializer: DocumentDealSerializer
end
