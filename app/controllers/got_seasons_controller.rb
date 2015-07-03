class GotSeasonsController < ApplicationController
	def index
		@gotseasons = GotSeason.all
		
	end
	
end
