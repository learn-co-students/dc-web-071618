# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Hog.create(name: "Bob", weight: 20, catchphrase: "I'm a small pig")
Hog.create(name: "Babe", weight: 15, catchphrase: "Get me a diet coke i'm a famous pig")
Hog.create(name: "Hog Marley", weight: 2000, catchphrase:"Put a little love in your heart")

puts "seeded"
