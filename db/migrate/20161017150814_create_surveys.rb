class CreateSurveys < ActiveRecord::Migration
  def change
    create_table :surveys do |t|
      t.string :a1
      t.string :a2
      t.string :a3
      t.string :a4
      t.string :a5
      t.string :a6
      t.string :a7
      t.string :a8
      t.string :a9
      t.string :a10

      t.timestamps null: false
    end
  end
end
