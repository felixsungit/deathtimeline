module GotSeasonsHelper
	
	def death_count(numb)
		totals = Array.new
		total = 0
		total_minor = 0
		total_supporting = 0
		total_main = 0
		GotSeason.find(numb).got_episode.each do |episode|
				total += episode.death.count
				total_minor += episode.death.where(importance: 1).count 
				total_supporting += episode.death.where(importance: 2).count
				total_main += episode.death.where(importance: 3).count
		end 
		totals = [total, total_minor, total_supporting, total_main]
		totals
	end

end
