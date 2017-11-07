require 'rails_helper'

RSpec.describe "api/books/new", type: :view do
  before(:each) do
    assign(:api_book, Api::Book.new(
      :name => "MyString",
      :author => "MyString",
      :price => 1.5
    ))
  end

  it "renders new api_book form" do
    render

    assert_select "form[action=?][method=?]", api_books_path, "post" do

      assert_select "input#api_book_name[name=?]", "api_book[name]"

      assert_select "input#api_book_author[name=?]", "api_book[author]"

      assert_select "input#api_book_price[name=?]", "api_book[price]"
    end
  end
end
