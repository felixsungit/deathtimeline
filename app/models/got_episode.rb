class GotEpisode < ActiveRecord::Base
	belongs_to :got_season, foreign_key: "got_season_id"
	has_many :death
end
