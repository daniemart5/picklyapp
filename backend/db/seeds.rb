# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

usernames = [
    "sillyMcgee23",
    "bobbie95",
    "tweet_yoself",
    "immaFungi8",
    "bballmom78",
    "i_love_cats",
    "princess98",
    "beerfriend",
    "peterpan",
    "bobmart"
]

cities = [
    "Seattle",
    "Boston",
    "Los Angeles",
    "New York",
    "Austin",
    "Denver",
    "Boise",
    "San Diego",
    "Chicago",
    "Orlando"
]

images = [
    "https://picsum.photos/id/1011/5472/3648",
    "https://picsum.photos/id/1012/3973/2639",
    "https://picsum.photos/id/1025/4951/3301",
    "https://picsum.photos/id/1027/2848/4272",
    "https://picsum.photos/id/1083/5472/3648",
    "https://picsum.photos/id/111/4400/2656",
    "https://picsum.photos/id/177/2515/1830",
    "https://picsum.photos/id/237/3500/2095",
    "https://picsum.photos/id/390/5760/3840",
    "https://picsum.photos/id/449/4928/3264"
]
# Creates 10 users using Faker data
10.times do
    username = "#{usernames.sample}#{(1000..9999).to_a.sample}"
    name = Faker::FunnyName.name
    age = (12..60).to_a.sample
    city = cities.sample
    image = images.sample
    bio = "Enter Bio here!"
    User.create(
        name: name,
        age: age,
        city: city,
        username: username,
        image: image,
        bio: bio
        )
end

Event.create(name: 'Meditation In the Park', location: 'Los Angeles', description: 'Come and join us as we lift each other to enlightenment', kind: 'Outdoor', website: 'https://picsum.photos/id/375/5184/3456', rating: 5, like: 10 )

Event.create(name: 'O Mcgees Pub Crawl ', location: 'Denver', description: 'Pub Crawl of  all the major breweries in Denver! $125 gets you a commemorative mug, a drink in 5 places and a meal ticket.', kind: 'Festival', website: 'https://picsum.photos/id/372/4871/3247', rating: 5, like: 10)

Event.create(name: 'Snoot Boop Shelter Extravaganva ', location: 'Seattle', description: 'Come and give some Shelter cats some love! There will be food trucks, drinks and plenty of cats. Each cat is adoptable for only $10!', kind: 'Festival', website: 'https://picsum.photos/id/40/4106/2806', rating: 5, like: 10 )

Event.create(name: 'Lets Canoe', location: 'Austin', description: 'We are putting together a chill canoe trip! Please rsvp so we can rent canoes. $20 per person unless you bring your own canoe! Meet at 8am in the park', kind: 'Outdoor', website: 'https://picsum.photos/id/469/3008/2000', rating: 5, like: 10 )

Event.create(name: 'Beach Luau', location: 'Los Angeles', description: 'Bring all your beach stuff and head over to the annual Luau', kind: 'Festival', website: 'https://picsum.photos/id/372/4871/3247', rating: 5, like: 10 )

Event.create(name: 'Hot Air Balloon Ride', location: 'Boise', description: 'See the beautiful  sites from 1,000 ft up!', kind: 'Outdoor', website: "https://picsum.photos/id/401/5184/3456", rating: 5, like: 0) 

Event.create(name: 'Typewritting 101', location: 'Boston', description: 'Come learn the fancy ways of typing on a type writer!', kind: 'Lesson', website: "https://picsum.photos/id/403/3997/2665", rating: 5, like: 0)

Event.create(name: '4th of July Bash 2020', location: 'Austin', description: 'We bring  the bbq  you bring the fireworks! Best display gets a prize! Lets celebrate america.', kind: 'Festival', website: "https://picsum.photos/id/407/4272/2848", rating: 5, like: 0)

Event.create(name: 'Coffee Tasting', location: 'Seattle', description: 'Lets explore the inner workings of the coffee bean. We will go through proper cupping and taste profiling.', kind: 'Lesson',website: "https://picsum.photos/id/425/959/635", rating: 5, like: 0)

Event.create(name: 'Some Random Band Concert', location: 'Chicago', description: 'Rock and roll with these guys. Drinks are free but hope in humanity is $10 each.', kind: 'Concert', website: 'https://picsum.photos/id/452/4096/2722', rating: 5, like: 0)

resImages = [
    "https://picsum.photos/id/1060/5598/3732",
    "https://picsum.photos/id/163/2000/1333",
    "https://picsum.photos/id/195/768/1024",
    "https://picsum.photos/id/211/1920/1280",
    "https://picsum.photos/id/225/1500/979",
    "https://picsum.photos/id/365/5616/3744",
    "https://picsum.photos/id/42/3456/2304",
    "https://picsum.photos/id/428/2529/1581",
    "https://picsum.photos/id/490/5774/3818",
    "https://picsum.photos/id/395/4080/2720",
    "https://picsum.photos/id/625/2507/1674",
    "https://picsum.photos/id/670/2048/1367",
    "https://picsum.photos/id/686/4462/2975",
    "https://picsum.photos/id/7/4728/3168",
    "https://picsum.photos/id/799/5472/3648",
    "https://picsum.photos/id/819/3264/3264",
    "https://picsum.photos/id/824/5330/3553",
    "https://picsum.photos/id/835/5472/3648",
    "https://picsum.photos/id/859/1919/1919",
    "https://picsum.photos/id/882/4896/3264"
]


20.times do
    name = Faker::Restaurant.name
    location = cities.sample
    kind = Faker::Restaurant.type
    website = resImages.sample
    rating = (0..6).to_a.sample
    like = (0..60).to_a.sample 
    Restaurant.create(
        name: name,
        location: location,
        kind: kind,
        website: website,
        rating: rating,
        like: like  
        )
end