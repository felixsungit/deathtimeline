class AddGenderHouseToDeaths < ActiveRecord::Migration
  def change
  	add_column :deaths, :gender, :string
  	add_column :deaths, :house, :string
  end
end
