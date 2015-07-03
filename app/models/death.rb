class Death < ActiveRecord::Base
	belongs_to :got_episode, foreign_key: "got_episode_id"
end
