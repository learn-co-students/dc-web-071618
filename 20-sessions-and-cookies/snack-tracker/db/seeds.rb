# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Snack.destroy_all
Retailer.destroy_all

retailers = Retailer.create([{name: "Girl Scouts", year_established: 1969},
                 {name: "M&M Mars", year_established: 1908}])

Snack.create([{name: "Popcorn", calories: 200, deliciousness: 4, retailer: retailers[0]}, 
              {name: "Mozzarella Sticks", calories: 600, deliciousness: 7, retailer: retailers[0]}])