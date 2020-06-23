class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :location
      t.string :status
      t.string :classification
      t.string :image_path

      t.timestamps
    end
  end
end
