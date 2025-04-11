class CreateSearches < ActiveRecord::Migration[7.2]
  def change
    create_table :searches do |t|
      t.string :params
      t.references :visitor, null: false, foreign_key: {on_delete: :cascade}
      t.timestamps
    end
  end
end
