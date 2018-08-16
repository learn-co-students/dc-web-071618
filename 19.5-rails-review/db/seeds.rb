# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Farmer.create(name: "bob", location: "AK" )
Farmer.create(name: "Cheryl", location: "NC" )
Farmer.create(name: "Randall", location: "SC" )
Farmer.create(name: "Ol' Greg", location: "TX" )

Hog.create(name: "Piggy Smalls", weight: 1000, farmer_id:1)
Hog.create(name: "Babe", weight: 10, farmer_id:2)
Hog.create(name: "Tiny", weight: 1, farmer_id: 3)
Hog.create(name: "Boris", weight: 45, farmer_id:4)

puts 'seeded'
