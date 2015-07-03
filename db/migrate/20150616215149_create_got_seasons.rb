class CreateGotSeasons < ActiveRecord::Migration
  def change
    create_table :got_seasons do |t|
    	t.integer :seasonNumb

      t.timestamps null: false
    end
  end
end
