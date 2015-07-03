# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150628200524) do

  create_table "deaths", force: :cascade do |t|
    t.string   "name",           limit: 255
    t.string   "time",           limit: 255
    t.integer  "got_episode_id", limit: 4
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "link",           limit: 255
    t.string   "killed_by",      limit: 255
    t.integer  "importance",     limit: 4
    t.string   "imdb",           limit: 255
    t.string   "wiki",           limit: 255
    t.string   "gender",         limit: 255
    t.string   "house",          limit: 255
  end

  create_table "got_episodes", force: :cascade do |t|
    t.integer  "number",        limit: 4
    t.integer  "got_season_id", limit: 4
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.string   "name",          limit: 255
    t.string   "wikia",         limit: 255
    t.string   "imdb",          limit: 255
    t.string   "wiki",          limit: 255
  end

  create_table "got_seasons", force: :cascade do |t|
    t.integer  "number",     limit: 4
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.string   "name",       limit: 255
  end

end
