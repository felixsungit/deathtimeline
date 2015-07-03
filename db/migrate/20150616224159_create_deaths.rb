class CreateDeaths < ActiveRecord::Migration
  def change
    create_table :deaths do |t|
    	t.string :name
    	t.time :deathTime
    	t.references :got_episode

      t.timestamps null: false
    end
  end
end
