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

ActiveRecord::Schema.define(version: 2018_07_30_150303) do

  create_table "drivers", force: :cascade do |t|
    t.string "name"
    t.string "make"
    t.string "model"
  end

  create_table "mice", force: :cascade do |t|
    t.string "name"
    t.integer "size_in_cm"
    t.string "cheese_preference"
    t.integer "passenger_id"
  end

  create_table "passengers", force: :cascade do |t|
    t.string "name"
  end

  create_table "rides", force: :cascade do |t|
    t.integer "driver_id"
    t.integer "passenger_id"
    t.integer "distance_in_km"
    t.integer "fare_in_rubies"
    t.datetime "start"
    t.datetime "end"
  end

end
