# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

shops = Shop.create([
   { 
      name: "Nine's Dog",
      image_url: "http://www.구가애견.com/web/upload/widmin/main01.jpg"
   }, 
   { 
     name: "Dog's Coffe",
     image_url: "http://blogfiles.naver.net/MjAxNzEwMjZfMjE3/MDAxNTA4OTgwNTM3MTUy.rY5O-c3k92dtNSPtFDpShjb9wlKsSKAUU-p7qZHbvOsg.2C0khLaZ1Veo-NK4L5prkQL_OglNBr6z7-Qr9MRzuz8g.JPEG.petbang00/0.JPG"
   },
   { 
     name: "Puppy",
     image_url: "http://ldb.phinf.naver.net/20151223_291/1450858799458Lj8iC_JPEG/167168576724405_0.jpeg" 
   }, 
   { 
     name: "Pleasant taste",
     image_url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20191105_102%2F1572928355956Pd46x_JPEG%2F9RamVrRXPAGP9a3tYXRjE0oD.jpg&type=b400" 
   }, 
   { 
     name: "Soul Dog",
     image_url: "http://blogfiles.naver.net/MjAxOTA3MTdfNDcg/MDAxNTYzMzM5NjIyMzI5.W5BWCHiWgUMnTMT7ygDtuZn3ru_qL2LRgaNqMG4UP8sg.4xffjxb4Oi6Gn5ArWvgtYl9E2xlQom2WiDKRslNZFTMg.JPEG.soul-dog/KakaoTalk_20190617_120730805.jpg" 
   }, 
   { 
     name: "Gom's House",
     image_url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA1MjNfNzcg%2FMDAxNTU4NTcxMjI0OTIz.oO-IO9imdkAoPt757EJAJ4y5cqxIUzw2RSVQpKTEyqMg.VBdxvyFKA40eZQwkL3blfch2p7wKogACKRvKPzp3fuAg.JPEG.ghdekdms__%2FIMG_0475.JPG&type=b400" 
   }
])

reviews = Review.create([
   {
      title: 'Greate shop',
      description: 'Really Good.',
      score: 5,
      shop: shops.first
   },
   {
      title: 'Bad shop',
      description: 'So Bad.',
      score: 1,
      shop: shops.first
   },
])