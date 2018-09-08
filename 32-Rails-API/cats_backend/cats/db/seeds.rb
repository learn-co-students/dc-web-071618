# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create(name: 'Luke', breed: 'Tabby', age: 10, color: 'Orange', quote: 'No, you are not my father')
Cat.create(name: 'Leia', breed: 'Siamese', age: 9, color: 'Grey', quote: 'No, you are not my mother')
Cat.create(name: 'Han', breed: 'Solo', age: 12, color: 'Brown', quote: 'Maybe you are my uncle')
Cat.create(name: 'Darth', breed: 'Vader', age: 13, color: 'Black', quote: 'kkkkkk')

Hobby.create([
  { title: 'Exploring', description: 'I\'m lost'},
  { title: 'Hot Air Ballooning', description: 'wow, we\'re up high'},
  { title: 'Scuba Diving', description: 'look at all the fish'},
  { title: 'Judging', description: 'stares judgingly'}
  ])

CatHobby.create(cat_id: 1, hobby_id: 1)
CatHobby.create(cat_id: 1, hobby_id: 2)
CatHobby.create(cat_id: 1, hobby_id: 3)
CatHobby.create(cat_id: 2, hobby_id: 1)
CatHobby.create(cat_id: 3, hobby_id: 1)
CatHobby.create(cat_id: 3, hobby_id: 2)
CatHobby.create(cat_id: 3, hobby_id: 3)
CatHobby.create(cat_id: 3, hobby_id: 4)
CatHobby.create(cat_id: 4, hobby_id: 4)
CatHobby.create(cat_id: 4, hobby_id: 3)
