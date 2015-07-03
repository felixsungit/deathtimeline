class SeasonClass < ActiveRecord::Migration
  def change
  	add_column :got_seasons, :name, :string
  end
end
