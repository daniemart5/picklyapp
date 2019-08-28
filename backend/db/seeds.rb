# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bob = User.create(name: 'Bob', age: 45, city: 'Seattle', username: 'bobmart', password_digest: '0000', image: 'https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg')

event1 = Event.create(name: 'Beach Lau', location: 'Seattle', description: 'Its super cool', kind: 'Festival', website: 'none', rating: 5, like: 10 )

restaurant1 = Restaurant.create(name: 'Burgers', location: 'Seattle', kind: 'American Burger Joint', website: 'none', rating: 4, like: 2 )

bobsFav = Favorite.create(user_id: bob.id, favorite_id: event1.id, favorite_type: 'event')

bobsFav2 = Favorite.create(user_id: bob.id, favorite_id: restaurant1.id, favorite_type: 'restaurant')