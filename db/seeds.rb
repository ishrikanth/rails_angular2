Product.delete_all
Api::Book.delete_all

0.upto(20).each do |i|
  Product.new(name: "Product#{i}", price: i * 1000).save!
end

0.upto(20).each do |i|
  Api::Book.create(name: "Name#{i}",author:"author#{i}",price:i)
end
