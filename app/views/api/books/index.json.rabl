node :totalCount do
  @api_books.total_count
end

child @api_books => :results do
  collection @api_books
  attributes :id,:name,:author,:price,:created_at,:updated_at
end
