require 'rails_helper'

RSpec.describe "api/books/index", type: :view do
  before(:each) do
    assign(:api_books, [
      Api::Book.create!(
        :name => "Name",
        :author => "Author",
        :price => 1.5
      ),
      Api::Book.create!(
        :name => "Name",
        :author => "Author",
        :price => 1.5
      )
    ])
  end

  it "renders a list of api/books" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Author".to_s, :count => 2
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
  end
end
