class AddStatus < ActiveRecord::Migration
  def change
  	add_column :deaths, :status, :string
  end
end
