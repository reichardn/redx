class DocumentSerializer < ActiveModel::Serializer
  attributes :id, :name, :content, :complete
end
