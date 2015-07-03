class AddLinksToEpisodes < ActiveRecord::Migration
  def change
  	add_column :got_episodes, :wikia, :string
  	add_column :got_episodes, :imdb, :string
  	add_column :got_episodes, :wiki, :string 
  end
end
