require 'rails_helper'

RSpec.describe "api/books/show", type: :view do
  before(:each) do
    @api_book = assign(:api_book, Api::Book.create!(
      :name => "Name",
      :author => "Author",
      :price => 1.5
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Author/)
    expect(rendered).to match(/1.5/)
  end
end
