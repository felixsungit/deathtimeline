class Status < ActiveRecord::Migration
  def up
  	add_column :deaths, :status, :string
  end
  def down
  	drop_column :deaths, :status, :string
  end
end
