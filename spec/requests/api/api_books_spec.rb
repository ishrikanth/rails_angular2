require 'rails_helper'

RSpec.describe "Api::Books", type: :request do
  describe "GET /api_books" do
    it "works! (now write some real specs)" do
      get api_books_path
      expect(response).to have_http_status(200)
    end
  end
end
