class LotsOfRenames < ActiveRecord::Migration
  def change
  	rename_column :deaths, :deathTime, :time
  	rename_column :got_episodes, :episodeNumb, :number
  	rename_column :got_episodes, :episodeName, :name
  	rename_column :got_seasons, :seasonNumb, :number
  end
end
