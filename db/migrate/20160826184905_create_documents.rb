class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.string :name
      t.string :content
      t.integer :deal_id
      t.boolean :complete, default: false

      t.timestamps null: false
    end
  end
end
