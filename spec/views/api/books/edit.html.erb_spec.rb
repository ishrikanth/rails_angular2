require 'rails_helper'

RSpec.describe "api/books/edit", type: :view do
  before(:each) do
    @api_book = assign(:api_book, Api::Book.create!(
      :name => "MyString",
      :author => "MyString",
      :price => 1.5
    ))
  end

  it "renders the edit api_book form" do
    render

    assert_select "form[action=?][method=?]", api_book_path(@api_book), "post" do

      assert_select "input#api_book_name[name=?]", "api_book[name]"

      assert_select "input#api_book_author[name=?]", "api_book[author]"

      assert_select "input#api_book_price[name=?]", "api_book[price]"
    end
  end
end
