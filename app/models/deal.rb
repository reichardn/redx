class Deal < ActiveRecord::Base
  validates :category, presence: true
  enum category: [:merger, :offering, :loan]
  has_many :documents, dependent: :delete_all

  def build_docs
    docs =  ["merger agreement", "disclosure statement", "SEC filings"],
            ["SEC filings", "prospectus", "disclosure statement"],
            ["credit agreement", "intercreditor agreement", "security agreement"]
    i = self.read_attribute(:category)
    docs[i].each {|name| self.documents.create(name: name)}
  end

end

