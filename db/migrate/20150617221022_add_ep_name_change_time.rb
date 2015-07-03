class AddEpNameChangeTime < ActiveRecord::Migration
  def change
  	add_column :got_episodes, :episodeName, :string
  	change_column :deaths, :deathTime, :string

  end
end
