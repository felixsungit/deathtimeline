class AddLinksAndLvl < ActiveRecord::Migration
  def change
  	add_column :deaths, :importance, :int
  	add_column :deaths, :imdb, :string
  	add_column :deaths, :wiki, :string

  	
  end
end
