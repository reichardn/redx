class AddTypeToDeals < ActiveRecord::Migration
  def change
    add_column :deals, :category, :integer
  end
end
