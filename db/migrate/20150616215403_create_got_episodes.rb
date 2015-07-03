class CreateGotEpisodes < ActiveRecord::Migration
  def change
    create_table :got_episodes do |t|
    	t.integer :episodeNumb
    	t.references :got_season
    	
      t.timestamps null: false
    end
  end
end
