class Api::BooksController < ApplicationController
  before_action :set_api_book, only: [:show, :edit, :update, :destroy]

  # GET /api/books
  # GET /api/books.json
  def index
    @api_books = Api::Book.all.page(params[:page]).per(100)
  end

  # GET /api/books/1
  # GET /api/books/1.json
  def show
  end

  # GET /api/books/new
  def new
    @api_book = Api::Book.new
  end

  # GET /api/books/1/edit
  def edit
  end

  # POST /api/books
  # POST /api/books.json
  def create
    @api_book = Api::Book.new(api_book_params)
    respond_to do |format|
      if @api_book.save
        format.html { redirect_to @api_book, notice: 'Book was successfully created.' }
        format.json { render :show, status: :created, location: @api_book }
      else
        format.html { render :new }
        format.json { render json: @api_book.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/books/1
  # PATCH/PUT /api/books/1.json
  def update
    respond_to do |format|
      data = api_book_params
      logger.info data
      if @api_book.update(data)
        format.html { redirect_to @api_book, notice: 'Book was successfully updated.' }
        format.json { render :show }
      else
        format.html { render :edit }
        format.json { render json: @api_book.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/books/1
  # DELETE /api/books/1.json
  def destroy
    @api_book.destroy
    respond_to do |format|
      format.html { redirect_to api_books_url, notice: 'Book was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_book
      @api_book = Api::Book.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_book_params
      ActionController::Parameters
        .new(JSON.parse(request.body.read))
        .require(:book)
        .permit(Api::Book::PERMITTED_ATTRIBUTES)
    end
end
