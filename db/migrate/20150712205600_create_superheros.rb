class CreateSuperheros < ActiveRecord::Migration
  def change
    create_table :superheros do |t|
      t.string :real_name
      t.string :super_name
      t.string :power
      t.string :weakness
      t.integer :age

      t.timestamps null: false
    end
  end
end
