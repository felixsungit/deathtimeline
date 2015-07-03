class AddColumnsToDeaths < ActiveRecord::Migration
  def change
  	add_column :deaths, :link, :string
  	add_column :deaths, :killed_by, :string
  end
end
